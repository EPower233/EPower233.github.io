import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type DefaultTheme } from "vitepress";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, "..");
const oneLightProMix = JSON.parse(
  fs.readFileSync(path.join(__dirname, "themes", "OneLight-Pro-mix.json"), "utf-8")
);
const oneDarkProMix = JSON.parse(
  fs.readFileSync(path.join(__dirname, "themes", "OneDark-Pro-mix.json"), "utf-8")
);

const chineseOrder = new Map<string, number>([
  ["零", 0],
  ["一", 1],
  ["二", 2],
  ["三", 3],
  ["四", 4],
  ["五", 5],
  ["六", 6],
  ["七", 7],
  ["八", 8],
  ["九", 9],
  ["十", 10],
]);

const romanOrder = new Map<string, number>([
  ["I", 1],
  ["II", 2],
  ["III", 3],
  ["IV", 4],
  ["V", 5],
  ["VI", 6],
  ["VII", 7],
  ["VIII", 8],
  ["IX", 9],
  ["X", 10],
]);

function sortWeight(name: string): [number, number, string] {
  const numMatch = name.match(/^(\d+)(?:-(\d+))?/);
  if (numMatch) {
    return [0, Number(numMatch[1]) * 100 + Number(numMatch[2] ?? 0), name];
  }
  const romanMatch = name.match(/^(VIII|VII|VI|IV|V|III|II|IX|X|I)\b/);
  if (romanMatch) {
    return [1, romanOrder.get(romanMatch[1]) ?? 99, name];
  }
  const cnMatch = name.match(/^([零一二三四五六七八九十])[、.\s]/);
  if (cnMatch) {
    return [2, chineseOrder.get(cnMatch[1]) ?? 99, name];
  }
  return [3, 0, name];
}

function compareEntries(a: fs.Dirent, b: fs.Dirent): number {
  const [ga, na, sa] = sortWeight(a.name);
  const [gb, nb, sb] = sortWeight(b.name);
  if (ga !== gb) return ga - gb;
  if (na !== nb) return na - nb;
  return sa.localeCompare(sb, "zh-Hans-CN");
}

function buildSidebarItems(dirPath: string, urlPrefix: string): DefaultTheme.SidebarItem[] {
  if (!fs.existsSync(dirPath)) return [];
  const entries = fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith("."))
    .sort(compareEntries);

  const items: DefaultTheme.SidebarItem[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const children = buildSidebarItems(
        path.join(dirPath, entry.name),
        `${urlPrefix}/${entry.name}`
      );
      if (children.length > 0) {
        items.push({
          text: entry.name,
          collapsed: true,
          items: children,
        });
      }
    } else if (entry.isFile() && entry.name.endsWith(".md") && entry.name.toLowerCase() !== "index.md") {
      const baseName = entry.name.slice(0, -3);
      items.push({
        text: baseName,
        link: `${urlPrefix}/${baseName}`,
      });
    }
  }
  return items;
}

const calloutTypeMap: Record<string, string> = {
  note: "info",
  info: "info",
  question: "info",
  important: "tip",
  tip: "tip",
  warning: "warning",
  failure: "danger",
  bug: "danger",
  danger: "danger",
  caution: "danger",
};

const calloutDefaultTitle: Record<string, string> = {
  note: "NOTE",
  info: "INFO",
  question: "题目",
  important: "IMPORTANT",
  tip: "TIP",
  warning: "WARNING",
  failure: "划去",
  bug: "错在哪里",
  danger: "DANGER",
  caution: "CAUTION",
};

function findMatchingBlockquoteClose(tokens: any[], openIdx: number): number {
  let depth = 0;
  for (let i = openIdx; i < tokens.length; i++) {
    if (tokens[i].type === "blockquote_open") depth++;
    else if (tokens[i].type === "blockquote_close") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function obsidianCalloutPlugin(md: any) {
  md.core.ruler.after("inline", "obsidian_callout", (state: any) => {
    const tokens = state.tokens;
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== "blockquote_open") continue;
      if (tokens[i + 1]?.type !== "paragraph_open" || tokens[i + 2]?.type !== "inline") continue;

      const inline = tokens[i + 2];
      const firstChild = inline.children?.[0];
      if (!firstChild || firstChild.type !== "text") continue;

      const match = firstChild.content.match(
        /^\[!(note|info|important|tip|question|warning|failure|bug|danger|caution)\](?:[ \t]+(.*))?$/i
      );
      if (!match) continue;

      const closeIdx = findMatchingBlockquoteClose(tokens, i);
      if (closeIdx === -1) continue;

      const rawType = match[1].toLowerCase();
      const vpType = calloutTypeMap[rawType] ?? "info";
      const restOfFirstLine = (match[2] ?? "").trim();

      const breakIdx = inline.children.findIndex(
        (c: any) => c.type === "softbreak" || c.type === "hardbreak"
      );

      const titleChildren =
        breakIdx === -1 ? [...inline.children] : inline.children.slice(0, breakIdx);
      titleChildren[0] = new state.Token("text", "", 0);
      titleChildren[0].content = restOfFirstLine;

      const hasTitleContent = titleChildren.some((c: any) => c.content || c.type !== "text");
      if (!hasTitleContent) {
        titleChildren[0].content = calloutDefaultTitle[rawType] ?? rawType.toUpperCase();
      }

      const openDiv = new state.Token("html_block", "", 0);
      openDiv.content = `<div class="${vpType} custom-block">\n`;
      const closeDiv = new state.Token("html_block", "", 0);
      closeDiv.content = `</div>\n`;

      const titleOpen = new state.Token("paragraph_open", "p", 1);
      titleOpen.attrSet("class", "custom-block-title");
      const titleInline = new state.Token("inline", "", 0);
      titleInline.children = titleChildren;
      const titleClose = new state.Token("paragraph_close", "p", -1);

      tokens[i] = openDiv;
      tokens[closeIdx] = closeDiv;

      if (breakIdx === -1) {
        tokens.splice(i + 1, 3, titleOpen, titleInline, titleClose);
        i += 3;
      } else {
        inline.children = inline.children.slice(breakIdx + 1);
        tokens.splice(i + 1, 0, titleOpen, titleInline, titleClose);
        i += 3;
      }
    }
  });
}

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Mathematics",
    collapsed: false,
    items: buildSidebarItems(path.join(docsDir, "Mathematics"), "/Mathematics"),
  },
];

export default defineConfig({
  lang: "zh-CN",
  title: "E_Power · 知识档案",
  description: "记录数学推导、编程实践与学习随记。",
  cleanUrls: true,
  markdown: {
    math: true,
    lineNumbers: true,
    theme: {
      light: oneLightProMix,
      dark: oneDarkProMix,
    },
    config: (md) => {
      md.use(obsidianCalloutPlugin);
    },
  },
  vite: {
    ssr: { noExternal: ["vitepress-theme-teek"] },
  },
  themeConfig: {
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/EPower233" },
    ],
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 3],
      label: "本页目录",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
});
