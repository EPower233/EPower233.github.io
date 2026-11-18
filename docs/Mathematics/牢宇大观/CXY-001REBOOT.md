---
theme: custom-1776750089243-uatfgcpy9
themeName: Main
title: CXY-001REBOOT
---

# 这你看完了还不会写积分题可以穿过网线来揍我了

写在最前面:

本篇文章是写给需要考研和需要在高数中获得高绩的工科的同学们的, 请注意你学的课程应当有“高等数学”, ”微积分”等关键字,而不是“数学分析”, ”工科数学分析”等. 文章中不会着重介绍分析方法, 也没有证明, 与其说数学, 内容更偏向“算术”, 旨在教会你怎么算, 而不是告诉你为什么;

[[toc]]

## 一、积分计算预备知识

### I 立方公式

#### 1. 立方和差

$$
a^3+b^3=(a+b)(a^2-ab+b^2),\qquad
a^3-b^3=(a-b)(a^2+ab+b^2)\nonumber
$$

#### 2. 完全立方

$$
(a+b)^3=a^3+3a^2b+3ab^2+b^3,\qquad
(a-b)^3=a^3-3a^2b+3ab^2-b^3\nonumber
$$

### II 对数公式

设 $a>0,\ b>0,\ c>0,\ c\ne 1\nonumber$。

$$
e^{\ln a}=a,\qquad \ln e^a=a\nonumber
$$

$$
\ln(ab)=\ln a+\ln b,\qquad
\ln\frac{a}{b}=\ln a-\ln b\nonumber
$$

$$
\log_c a=\frac{\ln a}{\ln c}\nonumber
$$

### III 三角公式

#### 1. 两角和差公式

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta,\qquad
\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta\nonumber
$$

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta,\qquad
\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta\nonumber
$$

$$
\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta},\qquad
\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}\nonumber
$$

#### 2. 二倍角与降幂公式

$$
\sin 2\alpha=2\sin\alpha\cos\alpha,\qquad
\tan 2\alpha=\frac{2\tan\alpha}{1-\tan^2\alpha}\nonumber
$$

$$
\cos 2\alpha=\cos^2\alpha-\sin^2\alpha
=2\cos^2\alpha-1
=1-2\sin^2\alpha\nonumber
$$

$$
\sin^2\alpha=\frac{1-\cos 2\alpha}{2},\qquad
\cos^2\alpha=\frac{1+\cos 2\alpha}{2}\nonumber
$$

#### 3. 和差化积公式 (用的不是很多)

$$
\sin a+\sin b=2\sin\frac{a+b}{2}\cos\frac{a-b}{2},\qquad
\sin a-\sin b=2\cos\frac{a+b}{2}\sin\frac{a-b}{2}\nonumber
$$

$$
\cos a+\cos b=2\cos\frac{a+b}{2}\cos\frac{a-b}{2},\qquad
\cos a-\cos b=-2\sin\frac{a+b}{2}\sin\frac{a-b}{2}\nonumber
$$

$$
\tan a+\tan b=\frac{\sin(a+b)}{\cos a\cos b},\qquad
\tan a-\tan b=\frac{\sin(a-b)}{\cos a\cos b}\nonumber
$$

#### 4. 诱导公式

$$
\sin(2k\pi+\alpha)=\sin\alpha,\qquad
\cos(2k\pi+\alpha)=\cos\alpha,\qquad
\tan(2k\pi+\alpha)=\tan\alpha\nonumber
$$

$$
\sin(-\alpha)=-\sin\alpha,\qquad
\cos(-\alpha)=\cos\alpha,\qquad
\tan(-\alpha)=-\tan\alpha\nonumber
$$

$$
\sin(\pi+\alpha)=-\sin\alpha,\qquad
\cos(\pi+\alpha)=-\cos\alpha,\qquad
\tan(\pi+\alpha)=\tan\alpha\nonumber
$$

$$
\sin(\pi-\alpha)=\sin\alpha,\qquad
\cos(\pi-\alpha)=-\cos\alpha,\qquad
\tan(\pi-\alpha)=-\tan\alpha\nonumber
$$

$$
\sin\left(\frac{\pi}{2}-\alpha\right)=\cos\alpha,\qquad
\cos\left(\frac{\pi}{2}-\alpha\right)=\sin\alpha\nonumber
$$

$$
\sin\left(\frac{\pi}{2}+\alpha\right)=\cos\alpha,\qquad
\cos\left(\frac{\pi}{2}+\alpha\right)=-\sin\alpha\nonumber
$$

#### 5. 特殊值

| $\alpha\nonumber$     | $0\nonumber$ | $\dfrac{\pi}{6}\nonumber$    | $\dfrac{\pi}{4}\nonumber$    | $\dfrac{\pi}{3}\nonumber$    | $\dfrac{\pi}{2}\nonumber$ |
| --------------------- | ------------ | ---------------------------- | ---------------------------- | ---------------------------- | ------------------------- |
| $\sin\alpha\nonumber$ | $0\nonumber$ | $\dfrac{1}{2}\nonumber$      | $\dfrac{\sqrt2}{2}\nonumber$ | $\dfrac{\sqrt3}{2}\nonumber$ | $1\nonumber$              |
| $\cos\alpha\nonumber$ | $1\nonumber$ | $\dfrac{\sqrt3}{2}\nonumber$ | $\dfrac{\sqrt2}{2}\nonumber$ | $\dfrac{1}{2}\nonumber$      | $0\nonumber$              |
| $\tan\alpha\nonumber$ | $0\nonumber$ | $\dfrac{\sqrt3}{3}\nonumber$ | $1\nonumber$                 | $\sqrt3\nonumber$            | 不存在                       |
| $\cot\alpha\nonumber$ | 不存在          | $\sqrt3\nonumber$            | $1\nonumber$                 | $\dfrac{\sqrt3}{3}\nonumber$ | $0\nonumber$              |

#### 6. 正割与余割 (反复抄写,捻熟于心😡)

$$
\sec x=\frac{1}{\cos x},\qquad
\csc x=\frac{1}{\sin x}\nonumber
$$

$$
\sec^2x=1+\tan^2x,\qquad
\csc^2x=1+\cot^2x\nonumber
$$

#### 7. 反三角函数 (重要)

$$
\arcsin x+\arccos x=\frac{\pi}{2},\qquad
\arctan x+\operatorname{arccot}x=\frac{\pi}{2}\nonumber
$$

$$
\arcsin(-x)=-\arcsin x,\qquad
\arctan(-x)=-\arctan x,\qquad
\arccos(-x)=\pi-\arccos x\nonumber
$$

$$
\arctan x+\arctan\frac{1}{x}
=
\begin{cases}
\dfrac{\pi}{2}, & x>0 \\
-\dfrac{\pi}{2}, & x<0
\end{cases}
\nonumber
$$

#### 8. 万能公式

令 $t=\tan\dfrac{x}{2}\nonumber$，则

$$
\sin x=\frac{2t}{1+t^2},\qquad
\cos x=\frac{1-t^2}{1+t^2}\nonumber
$$

$$
\tan x=\frac{2t}{1-t^2},\qquad
dx=\frac{2}{1+t^2}\,dt\nonumber
$$

---

## 二、求积分

若 $F'(x)=f(x)\nonumber$，则 $F(x)\nonumber$ 是 $f(x)\nonumber$ 的一个原函数。

$$
\int f(x)\,dx=F(x)+C\nonumber
$$

$$
\int_a^b f(x)\,dx=F(x)\Big|_a^b=F(b)-F(a)\nonumber
$$

不定积分的核心：

- 找原函数，也就是找“谁求导后得到它”。
- 常数可以随意进出积分号。
- 凑微分时，微分内部可以加减常数。

---

### I 导积关系 (反复抄写, 捻熟于心😡)

首先, 我们是工科生, 我们会用会做题就行了, 你别管它怎么来的, 那是那群理学院的人该做的事情, 不是我们工科生该做的😡

#### 幂函数类

| 被积函数                             | 原函数                                                        |
| -------------------------------- | ---------------------------------------------------------- |
| $x^\alpha\nonumber$              | $\dfrac{x^{\alpha+1}}{\alpha+1}+C,\ \alpha\ne -1\nonumber$ |
| $x\nonumber$                     | $\dfrac{1}{2}x^2+C\nonumber$                               |
| $x^2\nonumber$                   | $\dfrac{1}{3}x^3+C\nonumber$                               |
| $\sqrt{x}\nonumber$              | $\dfrac{2}{3}x^{\frac{3}{2}}+C\nonumber$                   |
| $x^{-\frac{3}{2}}\nonumber$      | $-\dfrac{2}{\sqrt{x}}+C\nonumber$                          |
| $\dfrac{1}{x}\nonumber$          | $\ln\lvert x\rvert+C\nonumber$                             |
| $\dfrac{1}{x^2}\nonumber$        | $-\dfrac{1}{x}+C\nonumber$                                 |
| $\dfrac{1}{x^3}\nonumber$        | $-\dfrac{1}{2x^2}+C\nonumber$                              |
| $\dfrac{1}{\sqrt{x}}\nonumber$   | $2\sqrt{x}+C\nonumber$                                     |
| $\dfrac{1}{\sqrt{x^3}}\nonumber$ | $-\dfrac{2}{\sqrt{x}}+C\nonumber$                          |

#### 反三角类

| 被积函数 | 原函数 |
|---|---|
| $\dfrac{1}{1+x^2}\nonumber$ | $\arctan x+C\nonumber$ |
| $\dfrac{1}{a^2+x^2}\nonumber$ | $\dfrac{1}{a}\arctan\dfrac{x}{a}+C\nonumber$ |
| $\dfrac{1}{\sqrt{1-x^2}}\nonumber$ | $\arcsin x+C\nonumber$ |
| $\dfrac{1}{\sqrt{a^2-x^2}}\nonumber$ | $\arcsin\dfrac{x}{a}+C\nonumber$ |

#### 对数型

| 被积函数                                 | 原函数                                                       |
| ------------------------------------ | --------------------------------------------------------- |
| $\dfrac{1}{1-x^2}\nonumber$          | $\dfrac{1}{2}\ln\lvert\dfrac{1+x}{1-x}\rvert+C\nonumber$  |
| $\dfrac{1}{a^2-x^2}\nonumber$        | $\dfrac{1}{2a}\ln\lvert\dfrac{a+x}{a-x}\rvert+C\nonumber$ |
| $\dfrac{1}{x^2-a^2}\nonumber$        | $\dfrac{1}{2a}\ln\lvert\dfrac{x-a}{x+a}\rvert+C\nonumber$ |
| $\dfrac{1}{\sqrt{x^2-a^2}}\nonumber$ | $\ln\lvert x+\sqrt{x^2-a^2}\rvert+C\nonumber$             |
| $\dfrac{1}{\sqrt{x^2+a^2}}\nonumber$ | $\ln\lvert x+\sqrt{x^2+a^2}\rvert+C\nonumber$             |
| $\dfrac{1}{\sqrt{1+x^2}}\nonumber$   | $\ln\left(x+\sqrt{1+x^2}\right)+C\nonumber$               |

#### 根式型

| 被积函数 | 原函数 |
|---|---|
| $\sqrt{a^2-x^2}\nonumber$ | $\dfrac{x}{2}\sqrt{a^2-x^2}+\dfrac{a^2}{2}\arcsin\dfrac{x}{a}+C\nonumber$ |
| $\sqrt{x^2+a^2}\nonumber$ | $\dfrac{x}{2}\sqrt{x^2+a^2}+\dfrac{a^2}{2}\ln\lvert x+\sqrt{x^2+a^2}\rvert+C\nonumber$ |
| $\sqrt{x^2-a^2}\nonumber$ | $\dfrac{x}{2}\sqrt{x^2-a^2}-\dfrac{a^2}{2}\ln\lvert x+\sqrt{x^2-a^2}\rvert+C\nonumber$ |

#### 指数与对数

| 被积函数 | 原函数 |
|---|---|
| $a^x\nonumber$ | $\dfrac{a^x}{\ln a}+C\nonumber$ |
| $e^x\nonumber$ | $e^x+C\nonumber$ |
| $e^{-x}\nonumber$ | $-e^{-x}+C\nonumber$ |
| $\ln x\nonumber$ | $x\ln x-x+C\nonumber$ |

#### 三角函数

| 被积函数 | 原函数 |
|---|---|
| $\sin x\nonumber$ | $-\cos x+C\nonumber$ |
| $\cos x\nonumber$ | $\sin x+C\nonumber$ |
| $\tan x\nonumber$ | $-\ln\lvert\cos x\rvert+C\nonumber$ |
| $\cot x\nonumber$ | $\ln\lvert\sin x\rvert+C\nonumber$ |
| $\sec x\nonumber$ | $\ln\lvert\sec x+\tan x\rvert+C\nonumber$ |
| $\csc x\nonumber$ | $\ln\lvert\csc x-\cot x\rvert+C\nonumber$ |
| $\sec^2x\nonumber$ | $\tan x+C\nonumber$ |
| $\csc^2x\nonumber$ | $-\cot x+C\nonumber$ |
| $\sec x\tan x\nonumber$ | $\sec x+C\nonumber$ |
| $\csc x\cot x\nonumber$ | $-\csc x+C\nonumber$ |

#### 其他常用

| 被积函数                                        | 原函数                                         |
| ------------------------------------------- | ------------------------------------------- |
| $\dfrac{1}{(1+x^2)^{\frac{3}{2}}}\nonumber$ | $\dfrac{x}{\sqrt{1+x^2}}+C\nonumber$        |
| $\dfrac{1}{\sqrt{1+x^2}}\nonumber$          | $\ln\left(x+\sqrt{1+x^2}\right)+C\nonumber$ |

---

### II 三大积分法

#### 1. 凑微分

核心思想：把复杂表达式中的一部分看成整体。形如:

$$
\int f(g(x))g'(x)\,dx
=
\int f(u)\,du,\qquad u=g(x)\nonumber
$$

常见凑法：

$$
x\,dx=\dfrac{1}{2}d(x^2)\nonumber
$$

$$
\dfrac{1}{x}\,dx=d(\ln|x|)\nonumber
$$

$$
a\,dx=d(ax)\nonumber
$$

$$
\int f(ax+b)\,dx
=
\dfrac{1}{a}F(ax+b)+C\nonumber
$$

其中 $F'(x)=f(x)\nonumber$。

---

#### 2. 分部积分

公式：

$$
\int u\,dv=uv-\int v\,du\nonumber
$$

也可以写成：

$$
\int u(x)v'(x)\,dx
=
u(x)v(x)-\int u'(x)v(x)\,dx\nonumber
$$

例子：

$$
\int xe^x\,dx
=
xe^x-\int e^x\,dx
=
xe^x-e^x+C\nonumber
$$

这个本质上是两个函数乘起来, 一个越导越简单, 一个越积越简单, 所以只能一个一直导, 一个一直积

你要是一个导完了又积回去那就乱套了, 上一步直接白干了

---

#### 3. 列表积分

核心:

- 上导下积，遇到障碍就平移。
- 对角相乘，正负相间，竖线积分。

导积寸止符:

- 幂函数导到$0\nonumber$了
- 循环积分出现 $I\nonumber$ 的倍数时
- 复杂情况不好积分, 但是发现这一步的积分你会处理了

---

##### 例一：$\displaystyle \int x^2e^{-x}\,dx\nonumber$

|      | 第一步                | 第二步               | 第三步              |
| ---- | --------------------- | -------------------- | ------------------- |
| 导数 | $x^2\nonumber$        | $2x\nonumber$        | $2\nonumber$        |
| 积分 | $-e^{-x}\nonumber$    | $e^{-x}\nonumber$    | $-e^{-x}\nonumber$  |
| 符号 | $+\nonumber$          | $-\nonumber$         | $+\nonumber$        |
| 贡献 | $-x^2e^{-x}\nonumber$ | $-2xe^{-x}\nonumber$ | $-2e^{-x}\nonumber$ |

$$
\displaystyle \int x^2e^{-x}\,dx
=
-x^2e^{-x}-2xe^{-x}-2e^{-x}+C\nonumber
$$

---

##### 例二：$\displaystyle \int x\cos x\,dx\nonumber$

|      | 第一步             | 第二步             |
| ---- | ------------------ | ------------------ |
| 导数 | $x\nonumber$       | $1\nonumber$       |
| 积分 | $\sin x\nonumber$  | $-\cos x\nonumber$ |
| 符号 | $+\nonumber$       | $-\nonumber$       |
| 贡献 | $x\sin x\nonumber$ | $\cos x\nonumber$  |

$$
\displaystyle \int x\cos x\,dx
=
x\sin x+\cos x+C\nonumber
$$

---

##### 例三：$I=\displaystyle \int e^{-x}\sin x\,dx\nonumber$

|      | 第一步                   | 第二步                   | 余项                                               |
| ---- | ------------------------ | ------------------------ | -------------------------------------------------- |
| 导数 | $e^{-x}\nonumber$        | $-e^{-x}\nonumber$       | $e^{-x}\nonumber$                                  |
| 积分 | $-\cos x\nonumber$       | $-\sin x\nonumber$       | $-\sin x\nonumber$                                 |
| 符号 | $+\nonumber$             | $-\nonumber$             | 剩余积分                                           |
| 贡献 | $-e^{-x}\cos x\nonumber$ | $-e^{-x}\sin x\nonumber$ | $-\displaystyle \int e^{-x}\sin x\,dx=-I\nonumber$ |

因此：

$$
I=-e^{-x}\cos x-e^{-x}\sin x-I\nonumber
$$

$$
2I=-e^{-x}(\sin x+\cos x)\nonumber
$$

$$
I=-\dfrac{1}{2}e^{-x}(\sin x+\cos x)+C\nonumber
$$

这是循环积分。列表后又出现原积分 $I\nonumber$，直接移项求解。

---

##### 例四：$\displaystyle \int \cos2x\sin3x\,dx\nonumber$

这题其实可以用积化和差。

$$
\cos2x\sin3x
=
\dfrac{1}{2}(\sin5x+\sin x)\nonumber
$$

$$
\displaystyle \int \cos2x\sin3x\,dx
=
\displaystyle \int \dfrac{1}{2}(\sin5x+\sin x)\,dx\nonumber
$$

$$
=
-\dfrac{1}{10}\cos5x-\dfrac{1}{2}\cos x+C\nonumber
$$

不过我们积分表其实更简单, 因为它免去了你背诵积化和差公式的步骤(

令：

$$
I=\displaystyle \int \cos2x\sin3x\,dx\nonumber
$$

用列表积分，把 $\sin3x\nonumber$ 放在求导行，把 $\cos2x\nonumber$ 放在积分行。

|          | 初始              | 第一步                              | 第二步                                                                   |
| -------- | ----------------- | ----------------------------------- | ------------------------------------------------------------------------ |
| 求导行   | $\sin3x\nonumber$ | $3\cos3x\nonumber$                  | $-9\sin3x\nonumber$                                                      |
| 积分行   | $\cos2x\nonumber$ | $\dfrac{1}{2}\sin2x\nonumber$       | $-\dfrac{1}{4}\cos2x\nonumber$                                           |
| 符号     |                   | $+\nonumber$                        | $-\nonumber$                                                             |
| 对角贡献 |                   | $\dfrac{1}{2}\sin3x\sin2x\nonumber$ | $\dfrac{3}{4}\cos3x\cos2x\nonumber$ 出现考试题的整数倍                   |
| 剩余积分 |                   |                                     | $\dfrac{9}{4}\displaystyle \int \sin3x\cos2x\,dx=\dfrac{9}{4}I\nonumber$ |

所以：

$$
I
=
\dfrac{1}{2}\sin3x\sin2x
+
\dfrac{3}{4}\cos3x\cos2x
+
\dfrac{9}{4}I\nonumber
$$

移项：

$$
-\dfrac{5}{4}I
=
\dfrac{1}{2}\sin3x\sin2x
+
\dfrac{3}{4}\cos3x\cos2x\nonumber
$$

因此：

$$
I
=
-\dfrac{2}{5}\sin3x\sin2x
-
\dfrac{3}{5}\cos3x\cos2x
+C\nonumber
$$

即：

$$
\displaystyle \int \cos2x\sin3x\,dx
=
-\dfrac{2}{5}\sin3x\sin2x
-
\dfrac{3}{5}\cos3x\cos2x
+C\nonumber
$$

这是三角循环积分。列表积分后重新出现原积分 $I\nonumber$，所以不要继续硬算，直接移项求 $I\nonumber$。

---

##### 例五：$\displaystyle \int \dfrac{\ln^2x}{x^2}\,dx\nonumber$

$\ln^2x\nonumber$ 求导得到 $2\ln x\cdot\dfrac{1}{x}\nonumber$，其中 $\dfrac{1}{x}\nonumber$ 下放到积分部分，与上一格积分列的 $-\dfrac{1}{x}\nonumber$ 相乘，形成新的实际积分行：

$$
-\dfrac{1}{x}\cdot\dfrac{1}{x}
=
-\dfrac{1}{x^2}\nonumber
$$

然后继续积分得到：

$$
\displaystyle \int -\dfrac{1}{x^2}\,dx
=
\dfrac{1}{x}\nonumber
$$

|            | 初始                          | 第一步                                                    | 第二步                                                  |
| ---------- | ----------------------------- | --------------------------------------------------------- | ------------------------------------------------------- |
| 原求导行   | $\ln^2x\nonumber$             | $2\ln x\cdot\dfrac{1}{x}\nonumber$                        | $\dfrac{2}{x}\nonumber$                                 |
| 下放因子   |                               | $\dfrac{1}{x}\nonumber$                                   |                                                         |
| 实际求导行 | $\ln^2x\nonumber$             | $2\ln x\nonumber$                                         | $\dfrac{2}{x}\nonumber$                                 |
| 实际积分行 | $\dfrac{1}{x^2}\nonumber$     | $-\dfrac{1}{x}\cdot\dfrac{1}{x}=-\dfrac{1}{x^2}\nonumber$ | $\dfrac{1}{x}\cdot\dfrac{2}{x}=\dfrac{2}{x^2}\nonumber$ |
| 积分行     | $-\dfrac{1}{x}\nonumber$      | $\dfrac{1}{x}\nonumber$                                   | $-\dfrac{2}{x}\nonumber$                                |
| 符号       | $+\nonumber$                  | $-\nonumber$                                              | $+\nonumber$                                            |
| 贡献       | $-\dfrac{\ln^2x}{x}\nonumber$ | $-\dfrac{2\ln x}{x}\nonumber$                             | $-\dfrac{2}{x}\nonumber$                                |

所以：

$$
\displaystyle \int \dfrac{\ln^2x}{x^2}\,dx
=
-\dfrac{\ln^2x}{x}
-\dfrac{2\ln x}{x}
-\dfrac{2}{x}
+C\nonumber
$$

即：

$$
\displaystyle \int \dfrac{\ln^2x}{x^2}\,dx
=
-\dfrac{\ln^2x+2\ln x+2}{x}
+C\nonumber
$$

---

##### 例六：$\displaystyle \int x^3\ln^2x\,dx\nonumber$

$\ln^2x\nonumber$ 求导得到 $2\ln x\cdot\dfrac{1}{x}\nonumber$，其中 $\dfrac{1}{x}\nonumber$ 下放到积分部分;

$2\ln x\nonumber$ 求导得到 $2\cdot\dfrac{1}{x}\nonumber$，其中 $\dfrac{1}{x}\nonumber$ 继续下放到积分部分。

|            | 第一项                          | 第二项                                                    | 第三项                                                      |
| ---------- | ------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------- |
| 原求导行   | $\ln^2x\nonumber$               | $2\ln x\cdot\dfrac{1}{x}\nonumber$                        | $2\cdot\dfrac{1}{x}\nonumber$                               |
| 下放因子   |                                 | $\dfrac{1}{x}\nonumber$                                   | $\dfrac{1}{x}\nonumber$                                     |
| 实际求导行 | $\ln^2x\nonumber$               | $2\ln x\nonumber$                                         | $2\nonumber$                                                |
| 实际积分行 | $x^3\nonumber$                  | $\dfrac{x^4}{4}\cdot\dfrac{1}{x}=\dfrac{x^3}{4}\nonumber$ | $\dfrac{x^4}{16}\cdot\dfrac{1}{x}=\dfrac{x^3}{16}\nonumber$ |
| 积分行     | $\dfrac{x^4}{4}\nonumber$       | $\dfrac{x^4}{16}\nonumber$                                | $\dfrac{x^4}{64}\nonumber$                                  |
| 符号       | $+\nonumber$                    | $-\nonumber$                                              | $+\nonumber$                                                |
| 对角贡献   | $\dfrac{x^4}{4}\ln^2x\nonumber$ | $-\dfrac{x^4}{8}\ln x\nonumber$                           | $\dfrac{x^4}{32}\nonumber$                                  |

因为第三项之后实际求导行已经变成常数：

$$
\dfrac{d}{dx}2=0\nonumber
$$

所以停止。

最终：

$$
\displaystyle \int x^3\ln^2x\,dx
=
\dfrac{x^4}{4}\ln^2x
-\dfrac{x^4}{8}\ln x
+\dfrac{x^4}{32}
+C\nonumber
$$

---

##### 例七：$\displaystyle \int \cos(\ln x)\,dx\nonumber$

$\cos(\ln x)\nonumber$ 求导时会出现链式法则因子 $\dfrac{1}{x}\nonumber$：

$$
\dfrac{d}{dx}\cos(\ln x)
=
-\sin(\ln x)\cdot\dfrac{1}{x}\nonumber
$$

其中 $\dfrac{1}{x}\nonumber$ 下放到积分部分，与上一格积分列的 $x\nonumber$ 相乘：

$$
x\cdot\dfrac{1}{x}=1\nonumber
$$

因此可以继续列表。

|            | 初始                    | 第一步                                   | 第二步                                            |
| ---------- | ----------------------- | ---------------------------------------- | ------------------------------------------------- |
| 原求导行   | $\cos(\ln x)\nonumber$  | $-\sin(\ln x)\cdot\dfrac{1}{x}\nonumber$ | $-\cos(\ln x)\cdot\dfrac{1}{x}\nonumber$          |
| 下放因子   |                         | $\dfrac{1}{x}\nonumber$                  | $\dfrac{1}{x}\nonumber$                           |
| 实际求导行 | $\cos(\ln x)\nonumber$  | $-\sin(\ln x)\nonumber$                  | $-\cos(\ln x)\nonumber$                           |
| 实际积分行 | $1\nonumber$            | $x\cdot\dfrac{1}{x}=1\nonumber$          | $x\cdot\dfrac{1}{x}=1\nonumber$                   |
| 积分列     | $x\nonumber$            | $x\nonumber$                             | 不再继续，回到原积分                              |
| 符号       | $+\nonumber$            | $-\nonumber$                             | 剩余积分                                          |
| 贡献       | $x\cos(\ln x)\nonumber$ | $x\sin(\ln x)\nonumber$                  | $\displaystyle \int -\cos(\ln x)\,dx=-I\nonumber$ |

令：

$$
I=\displaystyle \int \cos(\ln x)\,dx\nonumber
$$

于是列表给出：

$$
I=x\cos(\ln x)+x\sin(\ln x)-I\nonumber
$$

移项：

$$
2I=x\left(\cos(\ln x)+\sin(\ln x)\right)\nonumber
$$

所以：

$$
I=\dfrac{x}{2}\left(\cos(\ln x)+\sin(\ln x)\right)+C\nonumber
$$

即：

$$
\displaystyle \int \cos(\ln x)\,dx
=
\dfrac{x}{2}\left(\cos(\ln x)+\sin(\ln x)\right)+C\nonumber
$$

---

#### 4. $e^x\nonumber$ 的速算

##### (1) $e^x\nonumber$ 乘多项式

核心规则：

$$
\displaystyle \int e^xP(x)\,dx
=
e^x\left(P-P'+P''-P'''+\cdots\right)+C\nonumber
$$

其中 $P(x)\nonumber$ 是多项式，一直求导到 $0\nonumber$ 为止。

例如：

$$
\displaystyle \int e^x(x^2+2x)\,dx\nonumber
$$

令：

$$
P=x^2+2x,\qquad P'=2x+2,\qquad P''=2,\qquad P'''=0\nonumber
$$

所以：

$$
\displaystyle \int e^x(x^2+2x)\,dx
=
e^x\left[(x^2+2x)-(2x+2)+2\right]+C\nonumber
$$

$$
=
e^xx^2+C\nonumber
$$

也可以用横向列表理解：

|                     | 第一项            | 第二项          | 第三项         | 停止         |
| ------------------- | ----------------- | --------------- | -------------- | ------------ |
| 多项式求导          | $x^2+2x\nonumber$ | $2x+2\nonumber$ | $2\nonumber$   | $0\nonumber$ |
| $e^x\nonumber$ 积分 | $e^x\nonumber$    | $e^x\nonumber$  | $e^x\nonumber$ |              |
| 符号                | $+\nonumber$      | $-\nonumber$    | $+\nonumber$   |              |

因此就是：

$$
e^x\left[(x^2+2x)-(2x+2)+2\right]+C\nonumber
$$

---

##### (2) $e^{kx}\nonumber$ 乘多项式

如果不是 $e^x\nonumber$，而是 $e^{kx}\nonumber$，最稳的方法是先换元。

例如：

$$
\displaystyle \int e^{2x}(x^2+2x)\,dx\nonumber
$$

令：

$$
t=2x,\qquad x=\dfrac{t}{2},\qquad dx=\dfrac{1}{2}\,dt\nonumber
$$

于是：

$$
\displaystyle \int e^{2x}(x^2+2x)\,dx
=
\dfrac{1}{2}\displaystyle \int e^t\left(\dfrac{t^2}{4}+t\right)\,dt\nonumber
$$

$$
=
\displaystyle \int e^t\left(\dfrac{t^2}{8}+\dfrac{t}{2}\right)\,dt\nonumber
$$

令：

$$
P(t)=\dfrac{t^2}{8}+\dfrac{t}{2}\nonumber
$$

则：

$$
P'(t)=\dfrac{t}{4}+\dfrac{1}{2},\qquad
P''(t)=\dfrac{1}{4},\qquad
P'''(t)=0\nonumber
$$

所以：

$$
\displaystyle \int e^t\left(\dfrac{t^2}{8}+\dfrac{t}{2}\right)\,dt
=
e^t\left[
\dfrac{t^2}{8}+\dfrac{t}{2}
-
\left(\dfrac{t}{4}+\dfrac{1}{2}\right)
+
\dfrac{1}{4}
\right]+C\nonumber
$$

$$
=
e^t\left(\dfrac{t^2}{8}+\dfrac{t}{4}-\dfrac{1}{4}\right)+C\nonumber
$$

代回 $t=2x\nonumber$：

$$
\displaystyle \int e^{2x}(x^2+2x)\,dx
=
e^{2x}\left(\dfrac{x^2}{2}+\dfrac{x}{2}-\dfrac{1}{4}\right)+C\nonumber
$$

对于 $e^{kx}\nonumber$，可以先令 $t=kx\nonumber$，把它变回 $e^t\nonumber$，再用 $e^x\nonumber$ 多项式速算。

---

##### (3) $e^x\nonumber$ 乘三角函数

我们有

$$
\displaystyle \int e^x\sin ax\,dx
=
\dfrac{e^x(\sin ax-a\cos ax)}{1+a^2}+C\nonumber
$$

$$
\displaystyle \int e^x\cos ax\,dx
=
\dfrac{e^x(\cos ax+a\sin ax)}{1+a^2}+C\nonumber
$$

下面给出证明:

令：

$$
I=\displaystyle \int e^x\sin ax\,dx,\qquad
J=\displaystyle \int e^x\cos ax\,dx\nonumber
$$

对 $I\nonumber$ 分部积分：

$$
I=e^x\sin ax-aJ\nonumber
$$

对 $J\nonumber$ 分部积分：

$$
J=e^x\cos ax+aI\nonumber
$$

代入得：

$$
I=e^x\sin ax-a(e^x\cos ax+aI)\nonumber
$$

所以：

$$
(1+a^2)I=e^x(\sin ax-a\cos ax)\nonumber
$$

因此：

$$
I=\dfrac{e^x(\sin ax-a\cos ax)}{1+a^2}+C\nonumber
$$

同理：

$$
J=\dfrac{e^x(\cos ax+a\sin ax)}{1+a^2}+C\nonumber
$$

---

##### e.g. $\displaystyle \int e^x\sin2x\,dx\nonumber$

这里 $a=2\nonumber$，所以：

$$
\displaystyle \int e^x\sin2x\,dx
=
\dfrac{e^x(\sin2x-2\cos2x)}{1+2^2}+C\nonumber
$$

即：

$$
\displaystyle \int e^x\sin2x\,dx
=
\dfrac{e^x(\sin2x-2\cos2x)}{5}+C\nonumber
$$

也可以写成：

$$
5\displaystyle \int e^x\sin2x\,dx
=
e^x(\sin2x-2\cos2x)\nonumber
$$

---

##### e.g. $\displaystyle \int e^{2x}\sin4x\,dx\nonumber$

先换元：

$$
t=2x,\qquad dx=\dfrac{1}{2}\,dt,\qquad \sin4x=\sin2t\nonumber
$$

所以：

$$
\displaystyle \int e^{2x}\sin4x\,dx
=
\dfrac{1}{2}\displaystyle \int e^t\sin2t\,dt\nonumber
$$

套用公式：

$$
\displaystyle \int e^t\sin2t\,dt
=
\dfrac{e^t(\sin2t-2\cos2t)}{5}+C\nonumber
$$

因此：

$$
\displaystyle \int e^{2x}\sin4x\,dx
=
\dfrac{1}{2}\cdot\dfrac{e^t(\sin2t-2\cos2t)}{5}+C\nonumber
$$

代回 $t=2x\nonumber$：

$$
\displaystyle \int e^{2x}\sin4x\,dx
=
\dfrac{e^{2x}}{10}(\sin4x-2\cos4x)+C\nonumber
$$

---

### III 换元

#### 1. 三角代换

适用对象：根号下为二次平方和差的式子。  
基本思想：将根式中的二次表达式化为三角恒等式，再利用三角形关系回代。

| 根式形式                  | 令                   | 对应化简                                                     |
| ------------------------- | -------------------- | ------------------------------------------------------------ |
| $\sqrt{a^2-x^2}\nonumber$ | $x=a\sin t\nonumber$ | $\sqrt{a^2-x^2}=a\cos t,\quad dx=a\cos t\,dt\nonumber$       |
| $\sqrt{a^2+x^2}\nonumber$ | $x=a\tan t\nonumber$ | $\sqrt{a^2+x^2}=a\sec t,\quad dx=a\sec^2t\,dt\nonumber$      |
| $\sqrt{x^2-a^2}\nonumber$ | $x=a\sec t\nonumber$ | $\sqrt{x^2-a^2}=a\tan t,\quad dx=a\sec t\tan t\,dt\nonumber$ |

三角恒等式在这里具有举足轻重的地位:

$$
1-\sin^2t=\cos^2t,\qquad
1+\tan^2t=\sec^2t,\qquad
\sec^2t-1=\tan^2t\nonumber
$$

回代时通常作直角三角形，由原代换式确定边长关系。

---

#### 2. 根式代换

适用对象：根号下为一次式，或多个根式具有同一个一次式结构。

##### (1) 单个根式

若出现：

$$
\sqrt[n]{ax+b}\nonumber
$$

令：

$$
\sqrt[n]{ax+b}=t\nonumber
$$

则：

$$
ax+b=t^n,\qquad
x=\dfrac{t^n-b}{a}\nonumber
$$

##### (2) 分式根式

若出现：

$$
\sqrt[n]{\dfrac{ax+b}{cx+d}}\nonumber
$$

令：

$$
\sqrt[n]{\dfrac{ax+b}{cx+d}}=t\nonumber
$$

则：

$$
\dfrac{ax+b}{cx+d}=t^n\nonumber
$$

由此可得：

$$
ax+b=t^n(cx+d)\nonumber
$$

移项整理：

$$
(a-ct^n)x=dt^n-b\nonumber
$$

因此：

$$
x=\dfrac{dt^n-b}{a-ct^n}\nonumber
$$

##### (3) 多个同类根式

若同时出现：

$$
\sqrt[m]{ax+b},\qquad \sqrt[n]{ax+b}\nonumber
$$

令：

$$
\sqrt[\ell]{ax+b}=t,\qquad \ell=\operatorname{lcm}(m,n)\nonumber
$$

其中 $\ell\nonumber$ 为 $m,n\nonumber$ 的最小公倍数。

例如，若同时出现 $\sqrt{x}\nonumber$ 与 $\sqrt[3]{x}\nonumber$，则取：

$$
\sqrt[6]{x}=t\nonumber
$$

---

#### 3. 倒代换

适用对象：分母次数较高，或式子中含有较复杂的 $\dfrac{1}{x}\nonumber$、$\dfrac{1}{x^2}\nonumber$ 等结构。

令：

$$
x=\dfrac{1}{t}\nonumber
$$

则：

$$
dx=-\dfrac{1}{t^2}\,dt\nonumber
$$

常见变形：

$$
\dfrac{1}{x}=t,\qquad
\dfrac{1}{x^2}=t^2\nonumber
$$

倒代换的作用是将关于 $x\nonumber$ 的高次分母转化为关于 $t\nonumber$ 的多项式或较简单分式。

---

#### 4. 万能代换 (用得不多)

适用对象：三角函数的有理式。  
但万能代换通常会使式子变长，若可用三角恒等变形、凑微分或简单换元处理，则不优先使用。

令：

$$
t=\tan\dfrac{x}{2}\nonumber
$$

则：

$$
x=2\arctan t\nonumber
$$

并且：

$$
\sin x=\dfrac{2t}{1+t^2},\qquad
\cos x=\dfrac{1-t^2}{1+t^2}\nonumber
$$

$$
\tan x=\dfrac{2t}{1-t^2},\qquad
dx=\dfrac{2}{1+t^2}\,dt\nonumber
$$

由此，含 $\sin x\nonumber$、$\cos x\nonumber$ 的三角有理式可化为关于 $t\nonumber$ 的有理函数。

---

#### 5. 整体代换

适用对象：被积式中含有某个复杂函数，且其导数或近似导数也同时出现。

设：

$$
t=g(x)\nonumber
$$

则：

$$
dt=g'(x)\,dx\nonumber
$$

若原积分可化为：

$$
\displaystyle \int F(g(x))g'(x)\,dx\nonumber
$$

则令 $t=g(x)\nonumber$，有：

$$
\displaystyle \int F(g(x))g'(x)\,dx
=
\displaystyle \int F(t)\,dt\nonumber
$$

整体代换的核心是：将复杂函数整体记作新变量，从而降低表达式复杂度。

---

### IV 定积分独有方法

#### 1. 奇偶性

设 $f(x)\nonumber$ 在 $[-a,a]\nonumber$ 上连续，则：

$$
\displaystyle \int_{-a}^{a} f(x)\,dx
=
\begin{cases}
2\displaystyle \int_0^a f(x)\,dx, & f(x)\text{ 为偶函数} \\
0, & f(x)\text{ 为奇函数}
\end{cases}
\nonumber
$$

即：

> 对称区间，偶倍奇零。

---

#### 2. 周期性

设 $f(x)\nonumber$ 是以 $T\nonumber$ 为周期的连续函数，则对任意常数 $a\nonumber$，有：

$$
\displaystyle \int_a^{a+T} f(x)\,dx
=
\displaystyle \int_0^T f(x)\,dx\nonumber
$$

更一般地，若 $n\in\mathbb{N}^+\nonumber$，则：

$$
\displaystyle \int_a^{a+nT} f(x)\,dx
=
n\displaystyle \int_0^T f(x)\,dx\nonumber
$$

适用情况：三角函数及其他周期函数。

核心：从任意点开始，若恰好积分一个完整周期，则积分值相同。

---

#### 3. Wallis 公式

记：

$$
I_n
=
\displaystyle \int_0^{\frac{\pi}{2}} \sin^n x\,dx
=
\displaystyle \int_0^{\frac{\pi}{2}} \cos^n x\,dx\nonumber
$$

则有递推关系：

$$
I_n=\dfrac{n-1}{n}I_{n-2}\nonumber
$$

因此：

$$
I_n
=
\begin{cases}
\dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac{1}{2}\cdot\dfrac{\pi}{2}, & n\text{ 为偶数} \\[6pt]
\dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac{2}{3}\cdot 1, & n\text{ 为奇数}
\end{cases}
\nonumber
$$

常用值：

| 积分                                                       | 结果                      |
| ---------------------------------------------------------- | ------------------------- |
| $\displaystyle \int_0^{\frac{\pi}{2}}\sin x\,dx\nonumber$  | $1\nonumber$              |
| $\displaystyle \int_0^{\frac{\pi}{2}}\cos x\,dx\nonumber$  | $1\nonumber$              |
| $\displaystyle \int_0^{\frac{\pi}{2}}\sin^2x\,dx\nonumber$ | $\dfrac{\pi}{4}\nonumber$ |
| $\displaystyle \int_0^{\frac{\pi}{2}}\cos^2x\,dx\nonumber$ | $\dfrac{\pi}{4}\nonumber$ |
| $\displaystyle \int_0^{\frac{\pi}{2}}\sin^3x\,dx\nonumber$ | $\dfrac{2}{3}\nonumber$   |
| $\displaystyle \int_0^{\frac{\pi}{2}}\cos^3x\,dx\nonumber$ | $\dfrac{2}{3}\nonumber$   |

---

#### 4. 平移变换

设原积分为：

$$
\displaystyle \int_\alpha^\beta f(x)\,dx\nonumber
$$

令：

$$
x=t+c,\qquad dx=dt\nonumber
$$

则：

$$
\displaystyle \int_\alpha^\beta f(x)\,dx
=
\displaystyle \int_{\alpha-c}^{\beta-c} f(t+c)\,dt\nonumber
$$

即：

> 区间减 $c\nonumber$，函数加 $c\nonumber$。

若令：

$$
x=t-c,\qquad dx=dt\nonumber
$$

则：

$$
\displaystyle \int_\alpha^\beta f(x)\,dx
=
\displaystyle \int_{\alpha+c}^{\beta+c} f(t-c)\,dt\nonumber
$$

即：

> 区间加 $c\nonumber$，函数减 $c\nonumber$。

适用情况：

1. 将积分区间平移到题设条件给定的区间；
2. 构造对称区间，从而使用奇偶性。

若要把 $[\alpha,\beta]\nonumber$ 平移成关于 $0\nonumber$ 对称的区间，令：

$$
x=t+\dfrac{\alpha+\beta}{2}\nonumber
$$

则：

$$
[\alpha,\beta]
\longrightarrow
\left[-\dfrac{\beta-\alpha}{2},\dfrac{\beta-\alpha}{2}\right]\nonumber
$$

---

#### 5. 区间再现

设 $f(x)\nonumber$ 在 $[a,b]\nonumber$ 上连续，则：

$$
\displaystyle \int_a^b f(x)\,dx
=
\displaystyle \int_a^b f(a+b-x)\,dx\nonumber
$$

证明：令

$$
x=a+b-t,\qquad dx=-dt\nonumber
$$

当 $x=a\nonumber$ 时，$t=b\nonumber$；当 $x=b\nonumber$ 时，$t=a\nonumber$。于是：

$$
\displaystyle \int_a^b f(x)\,dx
=
\displaystyle \int_b^a f(a+b-t)(-dt)
=
\displaystyle \int_a^b f(a+b-t)\,dt\nonumber
$$

将变量 $t\nonumber$ 改写为 $x\nonumber$，即得：

$$
\displaystyle \int_a^b f(x)\,dx
=
\displaystyle \int_a^b f(a+b-x)\,dx\nonumber
$$

---

#### 6. 区间再现推论一

若分母中含有关于区间中点对称的两项，即：

$$
I=
\displaystyle \int_a^b
\dfrac{f(x)}{f(x)+f(a+b-x)}\,dx\nonumber
$$

则由区间再现可得：

$$
I=
\displaystyle \int_a^b
\dfrac{f(a+b-x)}{f(a+b-x)+f(x)}\,dx\nonumber
$$

两式相加：

$$
2I=
\displaystyle \int_a^b 1\,dx
=
b-a\nonumber
$$

因此：

$$
I=\dfrac{b-a}{2}\nonumber
$$

即：

$$
\displaystyle \int_a^b
\dfrac{f(x)}{f(x)+f(a+b-x)}\,dx
=
\dfrac{b-a}{2}\nonumber
$$

适用情况：分子为分母中的其中一项。

---

#### 7. 区间再现推论二：平均放大倍数

设 $g(x)\nonumber$ 在 $[a,b]\nonumber$ 上连续，且满足：

$$
g(a+b-x)=g(x)\nonumber
$$

则：

$$
\displaystyle \int_a^b xg(x)\,dx
=
\dfrac{a+b}{2}
\displaystyle \int_a^b g(x)\,dx\nonumber
$$

证明：记

$$
I=\displaystyle \int_a^b xg(x)\,dx\nonumber
$$

由区间再现可得：

$$
I=
\displaystyle \int_a^b (a+b-x)g(a+b-x)\,dx\nonumber
$$

又因为 $g(a+b-x)=g(x)\nonumber$，所以：

$$
I=
\displaystyle \int_a^b (a+b-x)g(x)\,dx\nonumber
$$

两式相加：

$$
2I=
(a+b)
\displaystyle \int_a^b g(x)\,dx\nonumber
$$

故：

$$
I=
\dfrac{a+b}{2}
\displaystyle \int_a^b g(x)\,dx\nonumber
$$

特别地，若 $g(x)=f(\sin x)\nonumber$，在区间 $[0,\pi]\nonumber$ 上有：

$$
g(\pi-x)=f(\sin(\pi-x))=f(\sin x)=g(x)\nonumber
$$

因此：

$$
\displaystyle \int_0^\pi x f(\sin x)\,dx
=
\dfrac{\pi}{2}
\displaystyle \int_0^\pi f(\sin x)\,dx\nonumber
$$

---

#### 8. 区间再现推论三：正弦余弦互换

令：

$$
x=\dfrac{\pi}{2}-t\nonumber
$$

则：

$$
\sin x=\cos t,\qquad \cos x=\sin t\nonumber
$$

因此：

$$
\displaystyle \int_0^{\frac{\pi}{2}} f(\sin x)\,dx
=
\displaystyle \int_0^{\frac{\pi}{2}} f(\cos x)\,dx\nonumber
$$

更一般地：

$$
\displaystyle \int_0^{\frac{\pi}{2}} F(\sin x,\cos x)\,dx
=
\displaystyle \int_0^{\frac{\pi}{2}} F(\cos x,\sin x)\,dx\nonumber
$$

---

#### 9. 几何面积法

若被积函数对应常见几何图形，则可直接由面积求定积分。

由圆方程：

$$
x^2+y^2=a^2\nonumber
$$

可得上半圆：

$$
y=\sqrt{a^2-x^2}\nonumber
$$

因此：

$$
\displaystyle \int_{-a}^{a}\sqrt{a^2-x^2}\,dx
=
\dfrac{1}{2}\pi a^2\nonumber
$$

常见例子：

| 积分                                                           | 几何意义                           | 结果                        |
| -------------------------------------------------------------- | ---------------------------------- | --------------------------- |
| $\displaystyle \int_{-1}^{1}\sqrt{1-x^2}\,dx\nonumber$         | 半径为 $1\nonumber$ 的上半圆面积   | $\dfrac{\pi}{2}\nonumber$   |
| $\displaystyle \int_{-\pi}^{\pi}\sqrt{\pi^2-x^2}\,dx\nonumber$ | 半径为 $\pi\nonumber$ 的上半圆面积 | $\dfrac{\pi^3}{2}\nonumber$ |

---

#### 10. $\sin/\cos$ 高次幂定积分

##### (1) 基本对称性

由对称性可得：

$$
\displaystyle \int_0^{\frac{\pi}{2}}\sin^n x\,dx
=
\displaystyle \int_0^{\frac{\pi}{2}}\cos^n x\,dx\nonumber
$$

又因为 $\sin x\nonumber$ 与 $\cos x\nonumber$ 在 $[0,\pi]\nonumber$ 或 $[0,2\pi]\nonumber$ 上具有周期对称性，故可结合区间拆分与对称性化简。

例如：

$$
\displaystyle \int_0^\pi \cos^2x\,dx
=
2\displaystyle \int_0^{\frac{\pi}{2}}\cos^2x\,dx
=
2\cdot\dfrac{\pi}{4}
=
\dfrac{\pi}{2}\nonumber
$$

$$
\displaystyle \int_0^{2\pi}\cos^2x\,dx
=
2\displaystyle \int_0^\pi \cos^2x\,dx
=
\pi\nonumber
$$

又如：

$$
\displaystyle \int_{\frac{\pi}{2}}^\pi \cos^3x\,dx
=
-\displaystyle \int_0^{\frac{\pi}{2}}\cos^3x\,dx
=
-\dfrac{2}{3}\nonumber
$$

---

##### (2) 半角降幂

$$
\sin^2x=\dfrac{1-\cos2x}{2},\qquad
\cos^2x=\dfrac{1+\cos2x}{2}\nonumber
$$

例一：

$$
\displaystyle \int_0^{\frac{\pi}{4}}\sin^2x\,dx
=
\displaystyle \int_0^{\frac{\pi}{4}}\dfrac{1-\cos2x}{2}\,dx\nonumber
$$

$$
=
\dfrac{1}{2}\displaystyle \int_0^{\frac{\pi}{4}}1\,dx
-
\dfrac{1}{2}\displaystyle \int_0^{\frac{\pi}{4}}\cos2x\,dx\nonumber
$$

$$
=
\dfrac{1}{2}x\Big|_0^{\frac{\pi}{4}}
-
\dfrac{1}{4}\sin2x\Big|_0^{\frac{\pi}{4}}\nonumber
$$

$$
=
\dfrac{\pi}{8}-\dfrac{1}{4}\nonumber
$$

例二：

$$
\displaystyle \int_0^{\frac{\pi}{4}}\sin^4x\,dx
=
\displaystyle \int_0^{\frac{\pi}{4}}
\left(\dfrac{1-\cos2x}{2}\right)^2\,dx\nonumber
$$

$$
=
\dfrac{1}{4}\displaystyle \int_0^{\frac{\pi}{4}}
(1-2\cos2x+\cos^22x)\,dx\nonumber
$$

由：

$$
\cos^22x=\dfrac{1+\cos4x}{2}\nonumber
$$

可得：

$$
\displaystyle \int_0^{\frac{\pi}{4}}\sin^4x\,dx
=
\dfrac{1}{4}\displaystyle \int_0^{\frac{\pi}{4}}
\left(1-2\cos2x+\dfrac{1+\cos4x}{2}\right)\,dx\nonumber
$$

$$
=
\dfrac{1}{4}\displaystyle \int_0^{\frac{\pi}{4}}
\left(\dfrac{3}{2}-2\cos2x+\dfrac{1}{2}\cos4x\right)\,dx\nonumber
$$

$$
=
\dfrac{1}{4}
\left(
\dfrac{3}{2}x-\sin2x+\dfrac{1}{8}\sin4x
\right)\Bigg|_0^{\frac{\pi}{4}}\nonumber
$$

$$
=
\dfrac{1}{4}
\left(
\dfrac{3\pi}{8}-1
\right)
=
\dfrac{3\pi}{32}-\dfrac{1}{4}\nonumber
$$

---

### V 特殊反常积分

数学二从未考过概率论，请各位备考数学二的同学务必重视 $\Gamma$ 函数 😋

> 注：此处为玩梗，不作为考试大纲判断依据。

#### 1. 指数零到无穷积分

设 $\alpha>0\nonumber$，则：

$$
\displaystyle \int_0^{+\infty} e^{-\alpha x}\,dx
=
\dfrac{1}{\alpha}\nonumber
$$

证明：

$$
\displaystyle \int_0^{+\infty} e^{-\alpha x}\,dx
=
\left.-\dfrac{1}{\alpha}e^{-\alpha x}\right|_0^{+\infty}\nonumber
$$

由于 $\alpha>0\nonumber$，故当 $x\to+\infty\nonumber$ 时，$e^{-\alpha x}\to0\nonumber$，于是：

$$
\displaystyle \int_0^{+\infty} e^{-\alpha x}\,dx
=
0-\left(-\dfrac{1}{\alpha}\right)
=
\dfrac{1}{\alpha}\nonumber
$$

---

#### 2. 高斯-泊松积分

$$
\displaystyle \int_{-\infty}^{+\infty} e^{-x^2}\,dx=\sqrt{\pi}\nonumber
$$

$$
\displaystyle \int_{-\infty}^{+\infty} e^{-\frac{x^2}{2}}\,dx=\sqrt{2\pi}\nonumber
$$

---

#### 3. 两类欧拉积分

##### (1) Gamma函数

定义：

$$
\Gamma(\alpha)
=
\displaystyle \int_0^{+\infty} x^{\alpha-1}e^{-x}\,dx,
\qquad \alpha>0\nonumber
$$

判断方法：

看到形如：

$$
\displaystyle \int_0^{+\infty} x^m e^{-x}\,dx\nonumber
$$

由于：

$$
m=\alpha-1\nonumber
$$

故：

$$
\displaystyle \int_0^{+\infty} x^m e^{-x}\,dx
=
\Gamma(m+1)\nonumber
$$

例如：

$$
\displaystyle \int_0^{+\infty} x^4e^{-x}\,dx
=
\Gamma(5)\nonumber
$$

$$
\displaystyle \int_0^{+\infty} \sqrt{x}e^{-x}\,dx
=
\displaystyle \int_0^{+\infty} x^{\frac{1}{2}}e^{-x}\,dx
=
\Gamma\left(\dfrac{3}{2}\right)\nonumber
$$

$$
\displaystyle \int_0^{+\infty} x^2e^{-x}\,dx
=
\Gamma(3)\nonumber
$$

性质：

$$
\Gamma(\alpha+1)=\alpha\Gamma(\alpha)\nonumber
$$

$$
\Gamma(1)=1,\qquad
\Gamma\left(\dfrac{1}{2}\right)=\sqrt{\pi}\nonumber
$$

对正整数 $n\nonumber$，有：

$$
\Gamma(n+1)=n!\nonumber
$$

即：

$$
\displaystyle \int_0^{+\infty} x^n e^{-x}\,dx=n!\nonumber
$$

e.g.

$$
\displaystyle \int_0^{+\infty} \sqrt{x}e^{-x}\,dx
=
\Gamma\left(\dfrac{3}{2}\right)
=
\dfrac{1}{2}\Gamma\left(\dfrac{1}{2}\right)
=
\dfrac{\sqrt{\pi}}{2}\nonumber
$$

$$
\displaystyle \int_0^{+\infty} x^{\frac{3}{2}}e^{-x}\,dx
=
\Gamma\left(\dfrac{5}{2}\right)
=
\dfrac{3}{2}\Gamma\left(\dfrac{3}{2}\right)
=
\dfrac{3\sqrt{\pi}}{4}\nonumber
$$

$$
\displaystyle \int_0^{+\infty} x^3e^{-x}\,dx
=
\Gamma(4)
=
3!
=
6\nonumber
$$

---

###### 含参数的Gamma型积分

e.g.

$$
\displaystyle \int_0^{+\infty} x^3e^{-2x}\,dx\nonumber
$$

令：

$$
u=2x,\qquad x=\dfrac{u}{2},\qquad dx=\dfrac{1}{2}\,du\nonumber
$$

则：

$$
\displaystyle \int_0^{+\infty} x^3e^{-2x}\,dx
=
\displaystyle \int_0^{+\infty}
\left(\dfrac{u}{2}\right)^3e^{-u}\dfrac{1}{2}\,du\nonumber
$$

$$
=
\dfrac{1}{16}
\displaystyle \int_0^{+\infty} u^3e^{-u}\,du
=
\dfrac{1}{16}\Gamma(4)
=
\dfrac{1}{16}\cdot 3!
=
\dfrac{3}{8}\nonumber
$$

e.g.

$$
\displaystyle \int_0^{+\infty} x^3e^{-x^2}\,dx\nonumber
$$

令：

$$
u=x^2,\qquad du=2x\,dx\nonumber
$$

则：

$$
\displaystyle \int_0^{+\infty} x^3e^{-x^2}\,dx
=
\dfrac{1}{2}
\displaystyle \int_0^{+\infty} x^2e^{-x^2}\,d(x^2)\nonumber
$$

$$
=
\dfrac{1}{2}
\displaystyle \int_0^{+\infty} ue^{-u}\,du
=
\dfrac{1}{2}\Gamma(2)
=
\dfrac{1}{2}\nonumber
$$

---

##### (2) Beta函数

$$
B(p,q)
=
\displaystyle \int_0^1 x^{p-1}(1-x)^{q-1}\,dx,
\qquad p,q>0\nonumber
$$

Beta 函数与 Gamma 函数的关系为：

$$
B(p,q)
=
\dfrac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}\nonumber
$$

例：

$$
\displaystyle \int_0^1 \dfrac{1}{\sqrt{x(1-x)}}\,dx\nonumber
$$

因为：

$$
\dfrac{1}{\sqrt{x(1-x)}}
=
x^{-\frac{1}{2}}(1-x)^{-\frac{1}{2}}\nonumber
$$

所以：

$$
\displaystyle \int_0^1 \dfrac{1}{\sqrt{x(1-x)}}\,dx
=
B\left(\dfrac{1}{2},\dfrac{1}{2}\right)\nonumber
$$

于是：

$$
B\left(\dfrac{1}{2},\dfrac{1}{2}\right)
=
\dfrac{
\Gamma\left(\dfrac{1}{2}\right)
\Gamma\left(\dfrac{1}{2}\right)
}{
\Gamma(1)
}
=
\pi\nonumber
$$

因此：

$$
\displaystyle \int_0^1 \dfrac{1}{\sqrt{x(1-x)}}\,dx
=
\pi\nonumber
$$

---

### VI 化简手法

#### 1. 拆项

##### (1) 分母有什么，分子拆什么 (方便约分)

###### e.g. 1

$$
\dfrac{t^2}{t^2-1}
=
\dfrac{t^2-1+1}{t^2-1}
=
1+\dfrac{1}{t^2-1}\nonumber
$$

将分子 $t^2\nonumber$ 凑成 $(t^2-1)+1\nonumber$，从而约出 $1\nonumber$。

###### e.g. 2

$$
\dfrac{1}{1+e^x}
=
\dfrac{1+e^x-e^x}{1+e^x}
=
1-\dfrac{e^x}{1+e^x}\nonumber
$$

将分子 $1\nonumber$ 凑成 $(1+e^x)-e^x\nonumber$。

###### e.g. 3

$$
\dfrac{1}{x(1+x^2)}
=
\dfrac{1+x^2-x^2}{x(1+x^2)}
=
\dfrac{1+x^2}{x(1+x^2)}
-
\dfrac{x^2}{x(1+x^2)}\nonumber
$$

$$
=
\dfrac{1}{x}
-
\dfrac{x}{1+x^2}\nonumber
$$

将分子 $1\nonumber$ 凑成 $(1+x^2)-x^2\nonumber$，分别约去 $1+x^2\nonumber$ 与 $x\nonumber$。

###### e.g. 4

$$
\dfrac{1}{x^2(1+x^2)}
=
\dfrac{1+x^2-x^2}{x^2(1+x^2)}
=
\dfrac{1+x^2}{x^2(1+x^2)}
-
\dfrac{x^2}{x^2(1+x^2)}\nonumber
$$

$$
=
\dfrac{1}{x^2}
-
\dfrac{1}{1+x^2}\nonumber
$$

将分子 $1\nonumber$ 凑成 $(1+x^2)-x^2\nonumber$。

###### e.g. 5

$$
\dfrac{1}{t(1+t)}
=
\dfrac{1+t-t}{t(1+t)}
=
\dfrac{1+t}{t(1+t)}
-
\dfrac{t}{t(1+t)}\nonumber
$$

$$
=
\dfrac{1}{t}
-
\dfrac{1}{1+t}\nonumber
$$

将分子 $1\nonumber$ 凑成 $(1+t)-t\nonumber$。

###### e.g. 6

$$
\dfrac{1}{e^x(1+e^x)}
=
\dfrac{1+e^x-e^x}{e^x(1+e^x)}
=
\dfrac{1+e^x}{e^x(1+e^x)}
-
\dfrac{e^x}{e^x(1+e^x)}\nonumber
$$

$$
=
\dfrac{1}{e^x}
-
\dfrac{1}{1+e^x}\nonumber
$$

将分子 $1\nonumber$ 凑成 $(1+e^x)-e^x\nonumber$。

###### e.g. 7

$$
\dfrac{1}{t(t-1)}
=
\dfrac{t-(t-1)}{t(t-1)}
=
\dfrac{t}{t(t-1)}
-
\dfrac{t-1}{t(t-1)}\nonumber
$$

$$
=
\dfrac{1}{t-1}
-
\dfrac{1}{t}\nonumber
$$

将分子 $1\nonumber$ 凑成 $t-(t-1)\nonumber$。

###### e.g. 8

$$
\dfrac{1}{x^2(x^2+2)}
=
\dfrac{1}{2}\cdot
\dfrac{x^2+2-x^2}{x^2(x^2+2)}\nonumber
$$

$$
=
\dfrac{1}{2}\cdot
\dfrac{x^2+2}{x^2(x^2+2)}
-
\dfrac{1}{2}\cdot
\dfrac{x^2}{x^2(x^2+2)}\nonumber
$$

$$
=
\dfrac{1}{2}
\left(
\dfrac{1}{x^2}
-
\dfrac{1}{x^2+2}
\right)\nonumber
$$

将分子 $1\nonumber$ 先写成 $\dfrac{1}{2}\cdot 2\nonumber$，再将 $2\nonumber$ 凑成 $(x^2+2)-x^2\nonumber$。

###### e.g. 9

$$
\dfrac{1}{x(x^2+2)}
=
\dfrac{1}{2}\cdot
\dfrac{x^2+2-x^2}{x(x^2+2)}\nonumber
$$

$$
=
\dfrac{1}{2}\cdot
\dfrac{x^2+2}{x(x^2+2)}
-
\dfrac{1}{2}\cdot
\dfrac{x^2}{x(x^2+2)}\nonumber
$$

$$
=
\dfrac{1}{2x}
-
\dfrac{x}{2(x^2+2)}\nonumber
$$

同样将 $2\nonumber$ 凑成 $(x^2+2)-x^2\nonumber$，分别约去 $x^2+2\nonumber$ 与 $x\nonumber$。

###### e.g. 10

$$
\dfrac{1}{x^4(1-x^4)}
=
\dfrac{1-x^4+x^4}{x^4(1-x^4)}
=
\dfrac{1-x^4}{x^4(1-x^4)}
+
\dfrac{x^4}{x^4(1-x^4)}\nonumber
$$

$$
=
\dfrac{1}{x^4}
+
\dfrac{1}{1-x^4}\nonumber
$$

将分子 $1\nonumber$ 凑成 $(1-x^4)+x^4\nonumber$。

###### e.g. 11

$$
\dfrac{1}{x^2(1-x^4)}
=
\dfrac{1-x^4+x^4}{x^2(1-x^4)}
=
\dfrac{1-x^4}{x^2(1-x^4)}
+
\dfrac{x^4}{x^2(1-x^4)}\nonumber
$$

$$
=
\dfrac{1}{x^2}
+
\dfrac{x^2}{1-x^4}\nonumber
$$

将分子 $1\nonumber$ 凑成 $(1-x^4)+x^4\nonumber$，剩余项转化为 $\dfrac{x^2}{1-x^4}\nonumber$。

###### e.g. 12

$$
\dfrac{x^2}{1-x^4}
=
\dfrac{x^2}{(1+x^2)(1-x^2)}\nonumber
$$

$$
=
\dfrac{1}{2}\cdot
\dfrac{1+x^2-(1-x^2)}{(1+x^2)(1-x^2)}\nonumber
$$

$$
=
\dfrac{1}{2}
\left(
\dfrac{1+x^2}{(1+x^2)(1-x^2)}
-
\dfrac{1-x^2}{(1+x^2)(1-x^2)}
\right)\nonumber
$$

$$
=
\dfrac{1}{2}
\left(
\dfrac{1}{1-x^2}
-
\dfrac{1}{1+x^2}
\right)\nonumber
$$

将分子 $x^2\nonumber$ 写成 $\dfrac{1}{2}\bigl[(1+x^2)-(1-x^2)\bigr]\nonumber$。

###### e.g. 13

$$
\dfrac{x^2}{1-x^4}
=
\dfrac{x^2+1-1}{(1+x^2)(1-x^2)}\nonumber
$$

$$
=
\dfrac{x^2+1}{(1+x^2)(1-x^2)}
-
\dfrac{1}{(1+x^2)(1-x^2)}\nonumber
$$

$$
=
\dfrac{1}{1-x^2}
-
\dfrac{1}{(1+x^2)(1-x^2)}\nonumber
$$

$$
=
\dfrac{1}{1-x^2}
-
\dfrac{1}{2}\cdot
\dfrac{1+x^2+1-x^2}{(1+x^2)(1-x^2)}\nonumber
$$

$$
=
\dfrac{1}{1-x^2}
-
\dfrac{1}{2}\cdot
\dfrac{1+x^2}{(1+x^2)(1-x^2)}
-
\dfrac{1}{2}\cdot
\dfrac{1-x^2}{(1+x^2)(1-x^2)}\nonumber
$$

$$
=
\dfrac{1}{1-x^2}
-
\dfrac{1}{2}\cdot\dfrac{1}{1-x^2}
-
\dfrac{1}{2}\cdot\dfrac{1}{1+x^2}\nonumber
$$

$$
=
\dfrac{1}{2}\cdot\dfrac{1}{1-x^2}
-
\dfrac{1}{2}\cdot\dfrac{1}{1+x^2}\nonumber
$$

先将分子 $x^2\nonumber$ 凑成 $(x^2+1)-1\nonumber$，再对剩余分式继续拆项。

###### e.g. 14

$$
\dfrac{1}{t^2-1}
=
\dfrac{1}{(t+1)(t-1)}\nonumber
$$

$$
=
\dfrac{1}{2}\cdot
\dfrac{(t+1)-(t-1)}{(t+1)(t-1)}\nonumber
$$

$$
=
\dfrac{1}{2}
\left(
\dfrac{t+1}{(t+1)(t-1)}
-
\dfrac{t-1}{(t+1)(t-1)}
\right)\nonumber
$$

$$
=
\dfrac{1}{2}
\left(
\dfrac{1}{t-1}
-
\dfrac{1}{t+1}
\right)\nonumber
$$

将分子 $1\nonumber$ 写成 $\dfrac{1}{2}\bigl[(t+1)-(t-1)\bigr]\nonumber$。

###### e.g. 15

$$
\dfrac{1}{1-t^2}
=
\dfrac{1}{(1+t)(1-t)}\nonumber
$$

$$
=
\dfrac{1}{2}\cdot
\dfrac{(1+t)+(1-t)}{(1+t)(1-t)}\nonumber
$$

$$
=
\dfrac{1}{2}
\left(
\dfrac{1+t}{(1+t)(1-t)}
+
\dfrac{1-t}{(1+t)(1-t)}
\right)\nonumber
$$

$$
=
\dfrac{1}{2}
\left(
\dfrac{1}{1-t}
+
\dfrac{1}{1+t}
\right)\nonumber
$$

将分子 $1\nonumber$ 写成 $\dfrac{1}{2}\bigl[(1+t)+(1-t)\bigr]\nonumber$。

###### e.g. 16

$$
\dfrac{1}{(t^2-1)(1+t)}
=
\dfrac{1}{2}\cdot
\dfrac{1+t+1-t}{(t^2-1)(1+t)}\nonumber
$$

$$
=
\dfrac{1}{2}\cdot
\dfrac{1+t}{(t^2-1)(1+t)}
+
\dfrac{1}{2}\cdot
\dfrac{1-t}{(t^2-1)(1+t)}\nonumber
$$

$$
=
\dfrac{1}{2}\cdot
\dfrac{1}{t^2-1}
+
\dfrac{1}{2}\cdot
\dfrac{1-t}{(t-1)(t+1)^2}\nonumber
$$

$$
=
\dfrac{1}{2}\cdot
\dfrac{1}{t^2-1}
-
\dfrac{1}{2}\cdot
\dfrac{1}{(1+t)^2}\nonumber
$$

将分子 $1\nonumber$ 写成 $\dfrac{1}{2}\bigl[(1+t)+(1-t)\bigr]\nonumber$；第二项中 $1-t=-(t-1)\nonumber$，故可约去 $t-1\nonumber$。

###### e.g. 17

$$
\dfrac{e^x}{\sqrt{e^x-1}}
=
\dfrac{e^x-1+1}{\sqrt{e^x-1}}\nonumber
$$

$$
=
\dfrac{e^x-1}{\sqrt{e^x-1}}
+
\dfrac{1}{\sqrt{e^x-1}}\nonumber
$$

$$
=
\sqrt{e^x-1}
+
\dfrac{1}{\sqrt{e^x-1}}\nonumber
$$

将分子 $e^x\nonumber$ 凑成 $(e^x-1)+1\nonumber$。

###### e.g. 18

$$
\dfrac{2t^2}{t^2+1}
=
\dfrac{2t^2+2-2}{t^2+1}\nonumber
$$

$$
=
\dfrac{2(t^2+1)}{t^2+1}
-
\dfrac{2}{t^2+1}\nonumber
$$

$$
=
2-\dfrac{2}{t^2+1}\nonumber
$$

将分子 $2t^2\nonumber$ 凑成 $2(t^2+1)-2\nonumber$。

##### (2) 一分为二

把一个因子拆成两个相同或相关的因子，方便后续代换或配合结构。

$$
e^{2x}=e^x\cdot e^x\nonumber
$$

$$
x=\sqrt{x}\cdot\sqrt{x}\nonumber
$$

---

#### 2. 提项

##### (1) 提高次

分母中含高次项时，可从括号中提出最高次幂。

$$
\dfrac{1}{x(x^7+2)}
=
\dfrac{1}{x^8\left(1+\dfrac{2}{x^7}\right)}\nonumber
$$

从 $x^7+2\nonumber$ 中提出 $x^7\nonumber$，外面还有一个 $x\nonumber$，所以总次数为 $x^8\nonumber$。

##### (2) 提根号内的一项

根号内部有公共因子时，将其提出根号。

$$
\dfrac{1}{\sqrt{x(4-x)}}
=
\dfrac{1}{\sqrt{x}\sqrt{4-x}}\nonumber
$$

$$
\dfrac{1}{\sqrt{x-x^2}}
=
\dfrac{1}{\sqrt{x}\sqrt{1-x}}\nonumber
$$

$$
\dfrac{1}{\sqrt{x^2-x}}
=
\dfrac{1}{\sqrt{x}\sqrt{x-1}}\nonumber
$$

$$
\dfrac{1}{x\sqrt{x^2-1}}
=
\dfrac{1}{x^2\sqrt{1-\dfrac{1}{x^2}}}\nonumber
$$

$$
\dfrac{1}{x\sqrt{1+x^2}}
=
\dfrac{1}{x^2\sqrt{1+\dfrac{1}{x^2}}}\nonumber
$$

若根号中出现 $x^2\nonumber$，则可提出 $\sqrt{x^2}=|x|\nonumber$；在常见正区间或代换场景下常写作 $x\nonumber$。

##### (3) 提 $e^x$

指数式中同时出现 $1\nonumber$ 与 $e^x\nonumber$，可提出 $e^x\nonumber$ 或 $e^{2x}\nonumber$。

$$
\dfrac{1}{1+e^x}
=
\dfrac{1}{e^x(1+e^{-x})}\nonumber
$$

$$
\dfrac{1}{\sqrt{1-e^{2x}}}
=
\dfrac{1}{e^x\sqrt{e^{-2x}-1}}\nonumber
$$

提出 $e^x\nonumber$ 后，原式可化为含 $e^{-x}\nonumber$ 的形式。

##### (4) 分子比分母高几次，就提几次，然后拆项

$$
\dfrac{x^3}{x^2+1}
=
\dfrac{x(x^2+1)-x}{x^2+1}
=
x-\dfrac{x}{x^2+1}\nonumber
$$

分子次数比分母高，先构造出分母，再拆出低阶余项。

---

#### 3. 同除

##### (1) 除最高次

分子分母同时除以分母中的最高次幂，使表达式转化为关于 $\dfrac{1}{x}\nonumber$ 的形式。

$$
\dfrac{1}{x(x^7+2)}
=
\dfrac{\dfrac{1}{x^8}}{1+\dfrac{2}{x^7}}\nonumber
$$

分母最高次数为 $x^8\nonumber$，故分子分母同除 $x^8\nonumber$。

##### (2) 除 $e^x$

$$
\dfrac{1}{1+e^x}
=
\dfrac{e^{-x}}{e^{-x}+1}\nonumber
$$

分子分母同除 $e^x\nonumber$。

##### (3) 二次四次除二次

$$
\dfrac{x^2+1}{x^4+1}
=
\dfrac{1+\dfrac{1}{x^2}}{x^2+\dfrac{1}{x^2}}\nonumber
$$

$$
\dfrac{x^2-1}{x^4+1}
=
\dfrac{1-\dfrac{1}{x^2}}{x^2+\dfrac{1}{x^2}}\nonumber
$$

分子分母同除 $x^2\nonumber$，常用于出现 $x+\dfrac{1}{x}\nonumber$ 或 $x-\dfrac{1}{x}\nonumber$ 的结构。

---

#### 4. 同乘

##### (1) 多项式差几次，乘几次

通过同乘适当幂次，使分子分母形成需要的结构。

$$
\dfrac{1}{x(x^7+2)}
=
\dfrac{x^6}{x^7(x^7+2)}\nonumber
$$

$$
\dfrac{1}{x^2(1-x^4)}
=
\dfrac{x^2}{x^4(1-x^4)}\nonumber
$$

$$
\dfrac{1}{x(1+x^2)}
=
\dfrac{x}{x^2(1+x^2)}\nonumber
$$

蓝色部分表示同乘的幂次，用于配合分母次数或凑出代换结构。

##### (2) 利用平方差公式

###### 三角函数化简

$$
\dfrac{1}{1-\sin x}
=
\dfrac{1+\sin x}{(1-\sin x)(1+\sin x)}
=
\dfrac{1+\sin x}{\cos^2x}\nonumber
$$

$$
\dfrac{1}{1+\sin x}
=
\dfrac{1-\sin x}{(1+\sin x)(1-\sin x)}
=
\dfrac{1-\sin x}{\cos^2x}\nonumber
$$

同乘共轭项，将分母化为 $1-\sin^2x=\cos^2x\nonumber$。

###### 分母有理化

$$
\dfrac{x^2}{1+\sqrt{1-x^2}}
=
\dfrac{x^2(1-\sqrt{1-x^2})}{(1+\sqrt{1-x^2})(1-\sqrt{1-x^2})}\nonumber
$$

$$
=
\dfrac{x^2(1-\sqrt{1-x^2})}{1-(1-x^2)}
=
\dfrac{x^2(1-\sqrt{1-x^2})}{x^2}\nonumber
$$

$$
=
1-\sqrt{1-x^2}\nonumber
$$

同乘共轭因子 $1-\sqrt{1-x^2}\nonumber$，分母由平方差化为 $x^2\nonumber$，从而与分子约去。

##### (3) 同乘 $e^x$

$$
\dfrac{1}{1+e^{-x}}
=
\dfrac{e^x}{e^x+1}\nonumber
$$

$$
\dfrac{1}{e^x+e^{-x}}
=
\dfrac{e^x}{e^{2x}+1}\nonumber
$$

通过同乘 $e^x\nonumber$ 消去负指数。

---

#### 5. 配方（二次多项式）

##### (1) 根号内部二次多项式配方 (完全平方)

$$
\dfrac{1}{\sqrt{x(4-x)}}
=
\dfrac{1}{\sqrt{4-(x-2)^2}}\nonumber
$$

$$
x(4-x)=4x-x^2=4-(x-2)^2\nonumber
$$

$$
\sqrt{2x-x^2}
=
\sqrt{1-(x-1)^2}\nonumber
$$

$$
2x-x^2=1-(x-1)^2\nonumber
$$

$$
\dfrac{1}{\sqrt{x-x^2}}
=
\dfrac{1}{\sqrt{\dfrac{1}{4}-\left(x-\dfrac{1}{2}\right)^2}}\nonumber
$$

$$
x-x^2=\dfrac{1}{4}-\left(x-\dfrac{1}{2}\right)^2\nonumber
$$

$$
\dfrac{1}{\sqrt{x^2-x}}
=
\dfrac{1}{\sqrt{\left(x-\dfrac{1}{2}\right)^2-\dfrac{1}{4}}}\nonumber
$$

$$
x^2-x=\left(x-\dfrac{1}{2}\right)^2-\dfrac{1}{4}\nonumber
$$

##### (2) 质因式分母二次多项式配方

$$
\dfrac{1}{x^2-x+1}
=
\dfrac{1}{\left(x-\dfrac{1}{2}\right)^2+\dfrac{3}{4}}\nonumber
$$

$$
\dfrac{1}{x^2+2x+2}
=
\dfrac{1}{(x+1)^2+1}\nonumber
$$

---

### VII 经典题型

#### 有理函数

---

#### 1. 分子次数 = 分母次数

##### 拆项

分子次数与分母次数相同，通常先拆出常数项。

$$
\dfrac{x^2}{x^2+1}=\dfrac{x^{2}+1-1}{x^{2}+1}=1-\dfrac{1}{x^{2}+1}\nonumber
$$

---

#### 2. 分子次数 > 分母次数

##### 先提项后拆项

分子次数高于分母次数时，先从分子中构造出分母，再拆项。

$$
\dfrac{x^3}{x^2+1}
=
\dfrac{x(x^2+1)-x}{x^2+1}\nonumber
$$

$$
=
x-\dfrac{x}{x^2+1}\nonumber
$$

---

#### 3. 分子次数 < 分母次数

##### (1) 分母因式不可分解

###### 分母二次，分子常数

先配方，后凑微分。

$$
\dfrac{1}{x^2+2x+2}
=
\dfrac{1}{(x+1)^2+1}\nonumber
$$

---

##### (2) 分母可因式分解

分母因式分解，分子拆项或待定系数。

###### 拆项

$$
\dfrac{1}{x(1+x^2)}
=
\dfrac{1+x^2-x^2}{x(1+x^2)}\nonumber
$$

$$
=
\dfrac{1+x^2}{x(1+x^2)}
-
\dfrac{x^2}{x(1+x^2)}\nonumber
$$

$$
=
\dfrac{1}{x}
-
\dfrac{x}{1+x^2}\nonumber
$$

---

#### 4. 分母二次，分子一次

分子拆出分母的导数，再配平。

拆成两部分算：一部分直接凑微分，另一部分先配方后凑微分。

$$
\displaystyle \int
\dfrac{x+5}{x^2-6x+13}\,dx\nonumber
$$

由于分母为：

$$
x^2-6x+13\nonumber
$$

其导数为：

$$
\dfrac{d}{dx}(x^2-6x+13)=2x-6\nonumber
$$

因此将分子 $x+5\nonumber$ 配成 $2x-6\nonumber$ 的形式：

$$
x+5
=
\dfrac{1}{2}(2x+10)
=
\dfrac{1}{2}\bigl((2x-6)+16\bigr)\nonumber
$$

于是：

$$
\displaystyle \int
\dfrac{x+5}{x^2-6x+13}\,dx
=
\dfrac{1}{2}
\displaystyle \int
\dfrac{(2x-6)+16}{x^2-6x+13}\,dx\nonumber
$$

$$
=
\dfrac{1}{2}
\displaystyle \int
\dfrac{2x-6}{x^2-6x+13}\,dx
+
8
\displaystyle \int
\dfrac{1}{x^2-6x+13}\,dx\nonumber
$$

第一部分直接凑微分：

$$
\dfrac{1}{2}
\displaystyle \int
\dfrac{2x-6}{x^2-6x+13}\,dx
=
\dfrac{1}{2}
\displaystyle \int
\dfrac{d(x^2-6x+13)}{x^2-6x+13}\nonumber
$$

$$
=
\dfrac{1}{2}\ln(x^2-6x+13)\nonumber
$$

第二部分先配方：

$$
x^2-6x+13
=
(x-3)^2+4
=
(x-3)^2+2^2\nonumber
$$

故：

$$
8
\displaystyle \int
\dfrac{1}{x^2-6x+13}\,dx
=
8
\displaystyle \int
\dfrac{1}{(x-3)^2+2^2}\,dx\nonumber
$$

$$
=
8\cdot
\dfrac{1}{2}
\arctan\dfrac{x-3}{2}\nonumber
$$

$$
=
4\arctan\dfrac{x-3}{2}\nonumber
$$

综上：

$$
\displaystyle \int
\dfrac{x+5}{x^2-6x+13}\,dx
=
\dfrac{1}{2}\ln(x^2-6x+13)
+
4\arctan\dfrac{x-3}{2}
+C\nonumber
$$

---

#### 5. 分母可因式分解

分母因式分解，分子拆项或使用待定系数法。

---

##### (1) 待定系数

###### 步骤

1. 分母因式分解。  
   分解到不能再分解为止，即分解到最简因式。

2. 将分母的每个因式单独写出，并列出所有可能性。  
   若有高次幂，则从低次到高次都要写。

3. 分子设待定系数。  
   每一项分子的次数比分母底数的次数低一次。

4. 通分后，令通分所得分子等于原题分子。  
   通过对应项系数相等解出待定系数；也可用特殊值法辅助，常取 $0,1,2,-1\nonumber$ 等。

###### 例

$$
\displaystyle \int
\dfrac{x^4+2x^3+3x^2+4x+1}
{(x-1)(x^2-1)(x^2+1)}
\,dx\nonumber
$$

先将分母因式分解：

$$
(x-1)(x^2-1)(x^2+1)
=
(x-1)^2(x+1)(x^2+1)\nonumber
$$

因此设：

$$
\dfrac{x^4+2x^3+3x^2+4x+1}
{(x-1)(x^2-1)(x^2+1)}
=
\dfrac{A}{x+1}
+
\dfrac{B}{x-1}
+
\dfrac{C}{(x-1)^2}
+
\dfrac{Dx+E}{x^2+1}\nonumber
$$

其中：

- $x+1\nonumber$、$x-1\nonumber$ 是一次因式，所以分子设常数；
- $(x-1)^2\nonumber$ 是重复因式，所以 $\dfrac{1}{x-1}\nonumber$ 与 $\dfrac{1}{(x-1)^2}\nonumber$ 都要写；
- $x^2+1\nonumber$ 是二次不可约因式，所以分子设为一次式 $Dx+E\nonumber$。

---

##### (2) 混合留数法

###### 括号里一次，括号外一次

设：

$$
\dfrac{3x^2+1}{(x-1)(x-2)(x-5)}
=
\dfrac{A}{x-1}
+
\dfrac{B}{x-2}
+
\dfrac{C}{x-5}\nonumber
$$

求 $A\nonumber$

同乘 $x-1\nonumber$：

$$
\dfrac{3x^2+1}{(x-2)(x-5)}
=
A
+
\dfrac{B}{x-2}(x-1)
+
\dfrac{C}{x-5}(x-1)\nonumber
$$

令 $x=1\nonumber$，则含 $B,C\nonumber$ 的项均为 $0\nonumber$，故：

$$
A=
\dfrac{3\cdot 1^2+1}{(1-2)(1-5)}
=
\dfrac{4}{4}
=
1\nonumber
$$

求 $B\nonumber$

同乘 $x-2\nonumber$：

$$
\dfrac{3x^2+1}{(x-1)(x-5)}
=
\dfrac{A}{x-1}(x-2)
+
B
+
\dfrac{C}{x-5}(x-2)\nonumber
$$

令 $x=2\nonumber$，则含 $A,C\nonumber$ 的项均为 $0\nonumber$，故：

$$
B=
\dfrac{3\cdot 2^2+1}{(2-1)(2-5)}
=
-\dfrac{13}{3}\nonumber
$$

求 $C\nonumber$

同理，同乘 $x-5\nonumber$，再令 $x=5\nonumber$，可得：

$$
C=
\dfrac{3\cdot 5^2+1}{(5-1)(5-2)}
=
\dfrac{76}{12}
=
\dfrac{19}{3}\nonumber
$$

因此：

$$
\dfrac{3x^2+1}{(x-1)(x-2)(x-5)}
=
\dfrac{1}{x-1}
-
\dfrac{13}{3(x-2)}
+
\dfrac{19}{3(x-5)}\nonumber
$$

---

###### 括号里一次，括号外高次

设：

$$
\dfrac{1}{(x-1)(x-2)^3}
=
\dfrac{C_1}{x-1}
+
\dfrac{C_2}{(x-2)^3}
+
\dfrac{C_3}{(x-2)^2}
+
\dfrac{C_4}{x-2}\nonumber
$$

求 $C_1\nonumber$

同乘 $x-1\nonumber$：

$$
\dfrac{1}{(x-2)^3}
=
C_1
+
\left(
\dfrac{C_2}{(x-2)^3}
+
\dfrac{C_3}{(x-2)^2}
+
\dfrac{C_4}{x-2}
\right)(x-1)\nonumber
$$

令 $x=1\nonumber$，则：

$$
C_1=
\dfrac{1}{(1-2)^3}
=
-1\nonumber
$$

求 $C_2\nonumber$

同乘 $(x-2)^3\nonumber$：

$$
\dfrac{1}{x-1}
=
\dfrac{C_1}{x-1}(x-2)^3
+
C_2
+
C_3(x-2)
+
C_4(x-2)^2\nonumber
$$

令 $x=2\nonumber$，则：

$$
C_2=1\nonumber
$$

求 $C_3\nonumber$

若只同乘 $(x-2)^2\nonumber$，会出现：

$$
\dfrac{1}{(x-1)(x-2)}\nonumber
$$

此时代入 $x=2\nonumber$ 会使分母为 $0\nonumber$，不能直接取特殊值。

因此仍从已同乘 $(x-2)^3\nonumber$ 的式子出发：

$$
\dfrac{1}{x-1}
=
\dfrac{C_1}{x-1}(x-2)^3
+
C_2
+
C_3(x-2)
+
C_4(x-2)^2\nonumber
$$

两边对 $x\nonumber$ 求导：

$$
-\dfrac{1}{(x-1)^2}
=
\dfrac{d}{dx}\left[
\dfrac{C_1}{x-1}(x-2)^3
\right]
+
C_3
+
2C_4(x-2)\nonumber
$$

令 $x=2\nonumber$，含 $(x-2)\nonumber$ 的项消失，故：

$$
C_3=-1\nonumber
$$

求 $C_4\nonumber$

继续由：

$$
\dfrac{1}{x-1}
=
\dfrac{C_1}{x-1}(x-2)^3
+
C_2
+
C_3(x-2)
+
C_4(x-2)^2\nonumber
$$

记 $u=x-2\nonumber$，则 $x-1=1+u\nonumber$。于是左边可展开为：

$$
\dfrac{1}{x-1}
=
\dfrac{1}{1+u}
=
1-u+u^2-u^3+\cdots\nonumber
$$

又：

$$
C_2+C_3u+C_4u^2+\cdots
=
1-u+C_4u^2+\cdots\nonumber
$$

对比 $u^2\nonumber$ 的系数，得：

$$
C_4=1\nonumber
$$

因此：

$$
\dfrac{1}{(x-1)(x-2)^3}
=
-\dfrac{1}{x-1}
+
\dfrac{1}{(x-2)^3}
-
\dfrac{1}{(x-2)^2}
+
\dfrac{1}{x-2}\nonumber
$$

括号外是高次幂时，最高次对应的系数可以直接“同乘后代入”求出；低一阶的系数通常需要继续求导或展开比较系数。

---

#### 6. 三角函数组合积分

分子拆成 $A\nonumber$ 倍的分母与 $B\nonumber$ 倍的分母导数。

设：

$$
D(x)=A\sin x+B\cos x\nonumber
$$

则：

$$
D'(x)=A\cos x-B\sin x\nonumber
$$

若分子为：

$$
C\sin x+D\cos x\nonumber
$$

则构造：

$$
C\sin x+D\cos x
=
\lambda(A\sin x+B\cos x)
+
\mu(A\cos x-B\sin x)\nonumber
$$

于是：

$$
\displaystyle \int
\dfrac{C\sin x+D\cos x}{A\sin x+B\cos x}\,dx
=
\displaystyle \int
\left[
\lambda+\mu\dfrac{(A\sin x+B\cos x)'}{A\sin x+B\cos x}
\right]dx\nonumber
$$

$$
=
\lambda x+\mu\ln|A\sin x+B\cos x|+C\nonumber
$$

---

#### 7. 三角高次幂

##### (1) $\sin x,\cos x\nonumber$ 高次幂

奇数次：留一个因子凑微分。

偶数次：使用降幂公式。

$$
\sin^2x=\dfrac{1-\cos2x}{2},\qquad
\cos^2x=\dfrac{1+\cos2x}{2}\nonumber
$$

##### (2) $\csc x,\sec x\nonumber$ 高次幂

偶数次：留一个 $\sec^2x\nonumber$ 或 $\csc^2x\nonumber$ 凑微分。

$$
d(\tan x)=\sec^2x\,dx,\qquad
d(\cot x)=-\csc^2x\,dx\nonumber
$$

奇数次：通常结合分部积分或递推公式处理。

---

#### 8. 根号下加比减 / 减比加

根号下先解成因式。

##### (1) 根号下分式：解放分子

利用平方差同乘，然后拆成两项做。

$$
\sqrt{\dfrac{a-x}{a+x}}
=
\sqrt{\dfrac{(a-x)^2}{(a+x)(a-x)}}
=
\dfrac{a-x}{\sqrt{a^2-x^2}}\nonumber
$$

$$
\sqrt{\dfrac{a+x}{a-x}}
=
\sqrt{\dfrac{(a+x)^2}{(a-x)(a+x)}}
=
\dfrac{a+x}{\sqrt{a^2-x^2}}\nonumber
$$

##### (2) 根号下乘积：两个因式解放一个

若根号下出现乘积结构：

$$
\sqrt{(a-x)(a+x)}=\sqrt{a^2-x^2}\nonumber
$$

可根据需要将其中一个因式移入分子或分母，化成更容易凑微分的形式。

---

#### 9. 变限积分的定积分

##### (1) 凑微分分部

优先观察变限积分整体，设：

$$
F(x)=\displaystyle \int_{\alpha(x)}^{\beta(x)} f(t)\,dt\nonumber
$$

若原式中同时出现 $F(x)\nonumber$ 与 $F'(x)\nonumber$，则优先考虑凑微分或分部积分。

##### (2) 交换积分次序

若定积分中含有变限积分，例如：

$$
\displaystyle \int_a^b
\left(
\displaystyle \int_a^x f(t)\,dt
\right)dx\nonumber
$$

可视为二重积分区域：

$$
a\le t\le x\le b\nonumber
$$

交换积分次序后：

$$
\displaystyle \int_a^b
\left(
\displaystyle \int_a^x f(t)\,dt
\right)dx
=
\displaystyle \int_a^b
\left(
\displaystyle \int_t^b dx
\right)f(t)\,dt\nonumber
$$

$$
=
\displaystyle \int_a^b (b-t)f(t)\,dt\nonumber
$$

---

#### 10. 求分段函数的不定积分

##### (1) 分段分别求

分段函数的不定积分应分段求原函数。

不同区间上的积分常数不一定相同，通常记为 $C_1,C_2,\cdots\nonumber$。

##### (2) 利用原函数连续确定常数关系

若要求原函数 $F(x)\nonumber$ 在分界点处连续，则需要令左右极限相等。

设分界点为 $x=a\nonumber$，则应满足：

$$
\lim_{x\to a^-}F(x)=\lim_{x\to a^+}F(x)\nonumber
$$

由此确定不同区间常数之间的关系。

---

#### 11. 三角相关

##### (1) $1\nonumber$ 的妙用

常用恒等式：

$$
1=\sin^2x+\cos^2x\nonumber
$$

也可写成：

$$
1^2=(\sin^2x+\cos^2x)^2\nonumber
$$

当式子中需要构造平方、配齐次数或统一分母时，可用 $1=\sin^2x+\cos^2x\nonumber$ 补项。

---

##### (2) $\cos x\nonumber$ 消 $1\nonumber$ 作用

使用余弦二倍角公式：

$$
\cos2x=1-2\sin^2x\nonumber
$$

$$
\cos2x=2\cos^2x-1\nonumber
$$

因此：

$$
1-2\sin^2x=\cos2x\nonumber
$$

$$
1+2\cos^2x=2+\cos2x\nonumber
$$

若式中没有 $\cos x\nonumber$，可利用诱导公式创造余弦：

$$
\sin x=\cos\left(\dfrac{\pi}{2}-x\right)\nonumber
$$

---

##### (3) $\sin x\cos x\nonumber$ 与 $\sin x\nonumber$ 转化

使用正弦二倍角公式：

$$
\sin2x=2\sin x\cos x\nonumber
$$

因此：

$$
\sin x\cos x=\dfrac{\sin2x}{2}\nonumber
$$

又由半角形式：

$$
\sin x
=
2\sin\dfrac{x}{2}\cos\dfrac{x}{2}\nonumber
$$

---

##### (4) $\sin x+\cos x\nonumber$ 转化为单个正弦

辅助角公式：

$$
a\sin x+b\cos x
=
\sqrt{a^2+b^2}\sin(x+\varphi)\nonumber
$$

其中：

$$
\tan\varphi=\dfrac{b}{a}\nonumber
$$

若需要，也可写成余弦形式：

$$
a\sin x+b\cos x
=
\sqrt{a^2+b^2}\cos(x-\theta)\nonumber
$$

---

##### (5) 分母齐次结构

若分母中 $\sin x\nonumber$ 与 $\cos x\nonumber$ 的次数齐次，则同除 $\cos x\nonumber$ 的若干次方，往 $\tan x\nonumber$ 上靠。

例如：

$$
\dfrac{1}{a\sin^2x+b\sin x\cos x+c\cos^2x}\nonumber
$$

同除 $\cos^2x\nonumber$，得：

$$
\dfrac{1}{\cos^2x}
\cdot
\dfrac{1}{a\tan^2x+b\tan x+c}\nonumber
$$

于是：

$$
\dfrac{dx}{a\sin^2x+b\sin x\cos x+c\cos^2x}
=
\dfrac{\sec^2x\,dx}{a\tan^2x+b\tan x+c}\nonumber
$$

令：

$$
t=\tan x,\qquad dt=\sec^2x\,dx\nonumber
$$

即可化为有理函数积分。







根据Green公式:
$$
\oint_l F(x)dx = \iint \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}dxdy
$$
