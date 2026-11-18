 ## $III.$ 八大分布

### 一、离散

#### （1）伯努利(Bernoulli)试验

##### ① 0-1 分布

设 $X$ 为**一次伯努利试验中事件 $A$ 发生的次数**，称 $X$ 服从 $0-1$ 分布，记作

$$
X\sim B(1,p). \nonumber
$$

其概率分布为

$$
\begin{array}{c|cc}
X & 0 & 1\\
\hline
P & 1-p & p
\end{array}
\nonumber
$$

##### ② 二项分布

设 $X$ 为 **$n$ 重伯努利试验中事件 $A$ 发生的次数**，称 $X$ 服从二项分布，记作

$$
X\sim B(n,p). \nonumber
$$

其概率分布为

$$
P\{X=k\}=\binom{n}{k}p^k(1-p)^{n-k},
\qquad k=0,1,\cdots,n. \nonumber
$$

当 $n=1$ 时，$X\sim B(1,p)$，所以 $0-1$ 分布为二项分布的特例。

二项分布的性质：若

$$
X\sim B(n,p),
\nonumber
$$

则

$$
Y=n-X\sim B(n,1-p). \nonumber
$$

其中 $Y$ 表示试验中事件 $A$ 不发生的次数。

##### ③ 几何分布

设 $X$ 为伯努利试验中事件 $A$ **首次发生所需的试验次数**，称 $X$ 服从参数为 $p$ 的几何分布，记作

$$
X\sim G(p). \nonumber
$$

其概率分布为

$$
P\{X=k\}=p(1-p)^{k-1},
\quad k=1,2,\cdots. \nonumber
$$

#### （2）泊松(Possion)分布（自然数）

设随机变量 $X$ 的概率分布为

$$
P\{X=k\}=\frac{\lambda^k}{k!}e^{-\lambda},
\quad (k \in \mathbb{N},\quad \lambda>0).
\nonumber
$$

称 $X$ 服从参数为 $\lambda$ 的泊松分布，记作

$$
X\sim P(\lambda). \nonumber
$$

##### 泊松定理：若

$$
\lim_{n\to\infty}np_n=\lambda,\qquad \lambda>0,
\nonumber
$$

则对任意非负整数 $k$，有

$$
\lim_{n\to\infty}\binom{n}{k}p_n^k(1-p_n)^{n-k}
=
\frac{\lambda^k}{k!}e^{-\lambda}. \nonumber
$$

实际应用中，当 $n$ 很大、$p$ 很小时，可以用泊松分布近似二项分布：

$$
\binom{n}{k}p^k(1-p)^{n-k}
\approx
\frac{\lambda^k}{k!}e^{-\lambda},
\qquad \lambda=np. \nonumber
$$

#### （3）超几何(hypergeometric)分布（古典概型）

设 $N$ 件产品中有 $M$ 件次品，从中任取 $n$ 件，令 $X$ 表示取出的次品数，则 $X$ 服从参数为 $N,M,n$ 的超几何分布，记作

$$
X\sim H(N,M,n). \nonumber
$$

其概率分布为

$$
\begin{aligned}
P\{X=k\}
=
\frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}},\\
k
\in
\{\,m\in\mathbb N \mid m\le \min(n,M)\,\}.
\end{aligned}
\nonumber
$$

### 二、连续（3）

#### （1）均匀(uniform)分布

设随机变量 $X$ 的概率密度为

$$
f(x)=
\begin{cases}
\dfrac{1}{b-a},& a\le x\le b,\\[6pt]
0,& \text{else}.
\end{cases}
\nonumber
$$

称 $X$ 服从区间 $\left[a,b\right]$ 上的均匀分布，记作

$$
X\sim U(a,b). \nonumber
$$

其分布函数为

$$
F(x)=
\begin{cases}
0,& x<a,\\[4pt]
\dfrac{x-a}{b-a},& a\le x<b,\\[6pt]
1,& x\ge b.
\end{cases}
\nonumber
$$

若密度设为常数 $c$，由规范性可得

$$
\displaystyle\int_a^b c\,dx=c(b-a)=1,
\nonumber
$$

因此

$$
c=\frac{1}{b-a}. \nonumber
$$

（概率 = 区间长度 $\times$ 密度）

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="943" height="896"><defs><clipPath id="vszzzniURnMn"><path fill="none" stroke="none" d=" M 0 0 L 943 0 L 943 896 L 0 896 L 0 0 Z"/></clipPath></defs><g transform="scale(1,1)" clip-path="url(#vszzzniURnMn)"><g><rect fill="rgb(255,255,255)" stroke="none" x="0" y="0" width="943" height="896" fill-opacity="1"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 135.5 2.5 L 135.5 896.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 135.5 1.5 L 131.5 5.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 135.5 1.5 L 139.5 5.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 0.5 562.5 L 941.5 562.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 942.5 562.5 L 938.5 558.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 942.5 562.5 L 938.5 566.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="19" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 30.5 562.5 L 30.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="71" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 82.5 562.5 L 82.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 135.5 562.5 L 135.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="179" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 187.5 562.5 L 187.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="231" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 239.5 562.5 L 239.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="284" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.6</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 562.5 L 292.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="336" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.8</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 344.5 562.5 L 344.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="394" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 396.5 562.5 L 396.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="441" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 449.5 562.5 L 449.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="493" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 501.5 562.5 L 501.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="545" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.6</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 553.5 562.5 L 553.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="597" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.8</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 605.5 562.5 L 605.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="656" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 658.5 562.5 L 658.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="702" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">2.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 710.5 562.5 L 710.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="754" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">2.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 762.5 562.5 L 762.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="807" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">2.6</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 815.5 562.5 L 815.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="859" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">2.8</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 867.5 562.5 L 867.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="917" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">3</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 919.5 562.5 L 919.5 565.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 876.5 L 135.5 876.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 824.5 L 135.5 824.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 771.5 L 135.5 771.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 719.5 L 135.5 719.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 667.5 L 135.5 667.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 614.5 L 135.5 614.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 510.5 L 135.5 510.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 457.5 L 135.5 457.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 405.5 L 135.5 405.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 353.5 L 135.5 353.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 301.5 L 135.5 301.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 248.5 L 135.5 248.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 196.5 L 135.5 196.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 144.5 L 135.5 144.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 91.5 L 135.5 91.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 132.5 39.5 L 135.5 39.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="105" y="881" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–1.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="115" y="829" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–1</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="105" y="776" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.8</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="105" y="724" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.6</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="105" y="672" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.4</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="105" y="619" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="111" y="515" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="111" y="462" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.4</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="111" y="410" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.6</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="111" y="358" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.8</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="121" y="306" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="111" y="253" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="111" y="201" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.4</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="111" y="149" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.6</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="111" y="96" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.8</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="121" y="44" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="121" y="578" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0</text><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 0 562.5825031062213 L 3.68359375 562.5825031062213 L 7.367187500000014 562.5825031062213 L 11.05078125 562.5825031062213 L 14.734375000000014 562.5825031062213 L 18.41796875 562.5825031062213 L 22.101562500000014 562.5825031062213 L 25.78515625 562.5825031062213 L 29.468750000000014 562.5825031062213 L 33.15234375 562.5825031062213 L 36.8359375 562.5825031062213 L 40.51953125 562.5825031062213 L 44.203125000000014 562.5825031062213 L 47.886718750000014 562.5825031062213 L 51.5703125 562.5825031062213 L 55.253906250000014 562.5825031062213 L 58.937500000000014 562.5825031062213 L 62.621093750000014 562.5825031062213 L 66.3046875 562.5825031062213 L 69.98828125000001 562.5825031062213 L 73.671875 562.5825031062213 L 77.35546875000001 562.5825031062213 L 81.0390625 562.5825031062213 L 84.72265625000001 562.5825031062213 L 88.40625 562.5825031062213 L 92.08984375000001 562.5825031062213 L 95.7734375 562.5825031062213 L 99.45703125000003 562.5825031062213 L 103.14062500000001 562.5825031062213 L 106.82421875000001 562.5825031062213 L 110.50781250000001 562.5825031062213 L 114.19140625000003 562.5825031062213 L 117.87500000000001 562.5825031062213 L 121.55859375 562.5825031062213 L 125.24218750000001 562.5825031062213 L 128.92578125 562.5825031062213 L 132.609375 562.5825031062213 L 136.29296875 562.5825031062213 L 139.97656250000003 562.5825031062213 L 143.66015625000003 562.5825031062213 L 147.34375 562.5825031062213 L 151.02734375 562.5825031062213 L 154.71093750000003 562.5825031062213 L 158.39453125000003 562.5825031062213 L 162.078125 562.5825031062213 L 165.76171875000003 562.5825031062213 L 169.44531250000003 562.5825031062213 L 173.12890625000003 562.5825031062213 L 176.8125 562.5825031062213 L 180.49609375000003 562.5825031062213 L 184.17968750000003 562.5825031062213 L 187.86328125 562.5825031062213 L 191.546875 562.5825031062213 L 195.23046875000003 562.5825031062213 L 198.91406250000003 562.5825031062213 L 202.59765625 562.5825031062213 L 206.28125 562.5825031062213 L 209.96484375000003 562.5825031062213 L 213.64843750000003 562.5825031062213 L 217.33203125 562.5825031062213 L 221.015625 562.5825031062213 L 224.69921875000003 562.5825031062213 L 228.38281250000006 562.5825031062213 L 232.06640625 562.5825031062213 L 235.75000000000003 562.5825031062213 L 239.43359375000003 562.5825031062213 L 243.1171875 562.5825031062213 L 246.80078125 562.5825031062213 L 250.48437500000003 562.5825031062213 L 254.16796875000003 562.5825031062213 L 257.8515625 562.5825031062213 L 261.53515625000006 562.5825031062213 L 265.21875 562.5825031062213 L 268.90234375 562.5825031062213 L 272.5859375 562.5825031062213 L 276.26953125 562.5825031062213 L 279.953125 562.5825031062213 L 283.63671875 562.5825031062213 L 287.32031250000006 562.5825031062213 L 291.00390625000006 562.5825031062213 L 294.6875 562.5825031062213 L 298.37109375 562.5825031062213 L 302.0546875 562.5825031062213 L 305.73828125 562.5825031062213 L 309.421875 562.5825031062213 L 313.10546875000006 562.5825031062213 L 316.78906250000006 562.5825031062213 L 320.47265625 562.5825031062213 L 324.15625 562.5825031062213 L 327.83984375 562.5825031062213 L 331.5234375 562.5825031062213 L 335.20703125 562.5825031062213 L 338.89062500000006 562.5825031062213 L 342.57421875000006 562.5825031062213 L 346.25781250000006 562.5825031062213 L 349.94140625 562.5825031062213 L 353.625 562.5825031062213 L 357.30859375 562.5825031062213 L 360.9921875 562.5825031062213 L 364.67578125 562.5825031062213 L 368.35937500000006 562.5825031062213 L 372.04296875000006 562.5825031062213 L 375.7265625 562.5825031062213 L 379.41015625 562.5825031062213 L 383.09375 562.5825031062213 L 386.77734375 562.5825031062213 L 390.4609375 562.5825031062213 L 394.14453125000006 562.5825031062213 L 395.98632812500006 562.5825031062213 L 396.677001953125 562.5825031062213 M 396.79211425781256 301.06249710670073 L 396.8496704101563 301.06249710670073 L 397.82812500000006 301.06249710670073 L 401.5117187500001 301.06249710670073 L 405.1953125 301.06249710670073 L 408.87890625 301.06249710670073 L 412.5625 301.06249710670073 L 416.24609375 301.06249710670073 L 419.9296875 301.06249710670073 L 423.61328125 301.06249710670073 L 427.29687500000006 301.06249710670073 L 430.98046875000006 301.06249710670073 L 434.66406250000006 301.06249710670073 L 438.34765625000006 301.06249710670073 L 442.03125000000006 301.06249710670073 L 445.71484375000006 301.06249710670073 L 449.39843750000006 301.06249710670073 L 453.0820312500001 301.06249710670073 L 456.7656250000001 301.06249710670073 L 460.44921875 301.06249710670073 L 464.1328125 301.06249710670073 L 467.81640625 301.06249710670073 L 471.5 301.06249710670073 L 475.18359375 301.06249710670073 L 478.8671875 301.06249710670073 L 482.55078125000006 301.06249710670073 L 486.23437500000006 301.06249710670073 L 489.91796875000006 301.06249710670073 L 493.60156250000006 301.06249710670073 L 497.28515625000006 301.06249710670073 L 500.96875000000006 301.06249710670073 L 504.65234375000006 301.06249710670073 L 508.3359375000001 301.06249710670073 L 512.0195312500001 301.06249710670073 L 515.703125 301.06249710670073 L 519.38671875 301.06249710670073 L 523.0703125000001 301.06249710670073 L 526.7539062500001 301.06249710670073 L 530.4375 301.06249710670073 L 534.12109375 301.06249710670073 L 537.8046875 301.06249710670073 L 541.48828125 301.06249710670073 L 545.171875 301.06249710670073 L 548.85546875 301.06249710670073 L 552.5390625 301.06249710670073 L 556.22265625 301.06249710670073 L 559.9062500000001 301.06249710670073 L 563.5898437500001 301.06249710670073 L 567.2734375000001 301.06249710670073 L 570.9570312500001 301.06249710670073 L 574.6406250000001 301.06249710670073 L 578.3242187500001 301.06249710670073 L 582.0078125000001 301.06249710670073 L 585.69140625 301.06249710670073 L 589.375 301.06249710670073 L 593.05859375 301.06249710670073 L 596.7421875 301.06249710670073 L 600.42578125 301.06249710670073 L 604.109375 301.06249710670073 L 607.79296875 301.06249710670073 L 611.4765625 301.06249710670073 L 615.1601562500001 301.06249710670073 L 618.8437500000001 301.06249710670073 L 622.5273437500001 301.06249710670073 L 626.2109375000001 301.06249710670073 L 629.8945312500001 301.06249710670073 L 633.5781250000001 301.06249710670073 L 637.2617187500001 301.06249710670073 L 640.9453125 301.06249710670073 L 644.62890625 301.06249710670073 L 648.3125 301.06249710670073 L 651.99609375 301.06249710670073 L 655.6796875000001 301.06249710670073 L 657.5214843750001 301.06249710670073 L 658.2121582031251 301.06249710670073 M 658.3272705078126 562.5825031062213 L 658.3848266601562 562.5825031062213 L 659.3632812500001 562.5825031062213 L 663.0468750000001 562.5825031062213 L 666.7304687500001 562.5825031062213 L 670.4140625000001 562.5825031062213 L 674.0976562500001 562.5825031062213 L 677.7812500000001 562.5825031062213 L 681.4648437500001 562.5825031062213 L 685.1484375000001 562.5825031062213 L 688.8320312500001 562.5825031062213 L 692.5156250000001 562.5825031062213 L 696.19921875 562.5825031062213 L 699.8828125 562.5825031062213 L 703.56640625 562.5825031062213 L 707.25 562.5825031062213 L 710.9335937500001 562.5825031062213 L 714.6171875000001 562.5825031062213 L 718.3007812500001 562.5825031062213 L 721.9843750000001 562.5825031062213 L 725.6679687500001 562.5825031062213 L 729.3515625000001 562.5825031062213 L 733.0351562500001 562.5825031062213 L 736.7187500000001 562.5825031062213 L 740.4023437500001 562.5825031062213 L 744.0859375000001 562.5825031062213 L 747.7695312500001 562.5825031062213 L 751.453125 562.5825031062213 L 755.13671875 562.5825031062213 L 758.8203125 562.5825031062213 L 762.5039062500001 562.5825031062213 L 766.1875000000001 562.5825031062213 L 769.8710937500001 562.5825031062213 L 773.5546875000001 562.5825031062213 L 777.2382812500001 562.5825031062213 L 780.9218750000001 562.5825031062213 L 784.6054687500001 562.5825031062213 L 788.2890625000001 562.5825031062213 L 791.9726562500001 562.5825031062213 L 795.6562500000001 562.5825031062213 L 799.3398437500001 562.5825031062213 L 803.0234375000001 562.5825031062213 L 806.70703125 562.5825031062213 L 810.390625 562.5825031062213 L 814.07421875 562.5825031062213 L 817.7578125000001 562.5825031062213 L 821.4414062500001 562.5825031062213 L 825.1250000000001 562.5825031062213 L 828.8085937500001 562.5825031062213 L 832.4921875000001 562.5825031062213 L 836.1757812500001 562.5825031062213 L 839.8593750000001 562.5825031062213 L 843.5429687500001 562.5825031062213 L 847.2265625000001 562.5825031062213 L 850.9101562500001 562.5825031062213 L 854.5937500000001 562.5825031062213 L 858.2773437500001 562.5825031062213 L 861.9609375 562.5825031062213 L 865.64453125 562.5825031062213 L 869.3281250000001 562.5825031062213 L 873.0117187500001 562.5825031062213 L 876.6953125000001 562.5825031062213 L 880.3789062500001 562.5825031062213 L 884.0625000000001 562.5825031062213 L 887.7460937500001 562.5825031062213 L 891.4296875000001 562.5825031062213 L 895.1132812500001 562.5825031062213 L 898.7968750000001 562.5825031062213 L 902.4804687500001 562.5825031062213 L 906.1640625000001 562.5825031062213 L 909.8476562500001 562.5825031062213 L 913.5312500000001 562.5825031062213 L 917.21484375 562.5825031062213 L 920.8984375 562.5825031062213 L 924.5820312500001 562.5825031062213 L 928.2656250000001 562.5825031062213 L 931.9492187500001 562.5825031062213 L 935.6328125000001 562.5825031062213 L 939.3164062500001 562.5825031062213 L 943.0000000000001 562.5825031062213" stroke-opacity="0.6980392156862745" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><text fill="rgb(0,0,0)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="8" y="562" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">f</text><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 396.76422509899135 301.06249710670073 L 396.76422509899135 562.5825031062213" stroke-opacity="0.6980392156862745" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="10.5,8"/><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 658.284231098512 562.5825031062213 L 658.284231098512 301.06249710670073" stroke-opacity="0.6980392156862745" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="10.5,8"/><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 396.76422509899135 301.06249710670073 L 135.24421909947068 301.06249710670073" stroke-opacity="0.6980392156862745" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="10.5,8"/><path fill="rgb(125,125,255)" stroke="none" paint-order="stroke fill markers" d=" M 663.284231098512 562.5825031062213 C 663.284231098512 565.3439268553753 661.045654847666 567.5825031062213 658.284231098512 567.5825031062213 C 655.522807349358 567.5825031062213 653.284231098512 565.3439268553753 653.284231098512 562.5825031062213 C 653.284231098512 559.8210793570673 655.522807349358 557.5825031062213 658.284231098512 557.5825031062213 C 661.045654847666 557.5825031062213 663.284231098512 559.8210793570673 663.284231098512 562.5825031062213 Z" fill-opacity="1"/><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 663.284231098512 562.5825031062213 C 663.284231098512 565.3439268553753 661.045654847666 567.5825031062213 658.284231098512 567.5825031062213 C 655.522807349358 567.5825031062213 653.284231098512 565.3439268553753 653.284231098512 562.5825031062213 C 653.284231098512 559.8210793570673 655.522807349358 557.5825031062213 658.284231098512 557.5825031062213 C 661.045654847666 557.5825031062213 663.284231098512 559.8210793570673 663.284231098512 562.5825031062213 Z" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><text fill="rgb(125,125,255)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="662" y="553" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">b</text><path fill="rgb(77,77,255)" stroke="none" paint-order="stroke fill markers" d=" M 401.76422509899135 562.5825031062213 C 401.76422509899135 565.3439268553753 399.5256488481453 567.5825031062213 396.76422509899135 567.5825031062213 C 394.0028013498374 567.5825031062213 391.76422509899135 565.3439268553753 391.76422509899135 562.5825031062213 C 391.76422509899135 559.8210793570673 394.0028013498374 557.5825031062213 396.76422509899135 557.5825031062213 C 399.5256488481453 557.5825031062213 401.76422509899135 559.8210793570673 401.76422509899135 562.5825031062213 Z" fill-opacity="1"/><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 401.76422509899135 562.5825031062213 C 401.76422509899135 565.3439268553753 399.5256488481453 567.5825031062213 396.76422509899135 567.5825031062213 C 394.0028013498374 567.5825031062213 391.76422509899135 565.3439268553753 391.76422509899135 562.5825031062213 C 391.76422509899135 559.8210793570673 394.0028013498374 557.5825031062213 396.76422509899135 557.5825031062213 C 399.5256488481453 557.5825031062213 401.76422509899135 559.8210793570673 401.76422509899135 562.5825031062213 Z" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><text fill="rgb(77,77,255)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="401" y="553" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">a</text><path fill="rgb(125,125,255)" stroke="none" paint-order="stroke fill markers" d=" M 140.24421909947068 301.06249710670073 C 140.24421909947068 303.8239208558547 138.00564284862466 306.06249710670073 135.24421909947068 306.06249710670073 C 132.4827953503167 306.06249710670073 130.24421909947068 303.8239208558547 130.24421909947068 301.06249710670073 C 130.24421909947068 298.3010733575468 132.4827953503167 296.06249710670073 135.24421909947068 296.06249710670073 C 138.00564284862466 296.06249710670073 140.24421909947068 298.3010733575468 140.24421909947068 301.06249710670073 Z" fill-opacity="1"/><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 140.24421909947068 301.06249710670073 C 140.24421909947068 303.8239208558547 138.00564284862466 306.06249710670073 135.24421909947068 306.06249710670073 C 132.4827953503167 306.06249710670073 130.24421909947068 303.8239208558547 130.24421909947068 301.06249710670073 C 130.24421909947068 298.3010733575468 132.4827953503167 296.06249710670073 135.24421909947068 296.06249710670073 C 138.00564284862466 296.06249710670073 140.24421909947068 298.3010733575468 140.24421909947068 301.06249710670073 Z" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><text fill="rgb(125,125,255)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="139" y="291" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">密度 c</text></g></g></svg>

其分布函数为

$$
\begin{aligned}
F(x)
&=
\displaystyle\int_{-\infty}^{x} f(t)\,dt\\
&=
\begin{cases}
0, & x<a,\\[4pt]
\dfrac{x-a}{b-a}, & a\le x<b,\\[6pt]
1, & x\ge b.
\end{cases}
\end{aligned}
\nonumber
$$

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="943" height="896"><defs><clipPath id="EcEIzSOMkadB"><path fill="none" stroke="none" d=" M 0 0 L 943 0 L 943 896 L 0 896 L 0 0 Z"/></clipPath><pattern id="XsXphWFdpZyW" width="35" height="35" patternUnits="userSpaceOnUse" viewBox="35 35 35 35"><g><rect fill="rgb(255,255,255)" stroke="none" x="0" y="0" width="105" height="105" fill-opacity="0.24705882352941178"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M 105 0 L 0 105 Z" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M 105 35 L 35 105 Z" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M 70 0 L 0 70 Z" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/></g></pattern></defs><g transform="scale(1,1)" clip-path="url(#EcEIzSOMkadB)"><g><rect fill="rgb(255,255,255)" stroke="none" x="0" y="0" width="943" height="896" fill-opacity="1"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 295.5 2.5 L 295.5 896.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 295.5 1.5 L 291.5 5.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 295.5 1.5 L 299.5 5.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 0.5 573.5 L 941.5 573.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 942.5 573.5 L 938.5 569.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 942.5 573.5 L 938.5 577.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="25" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.8</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 36.5 573.5 L 36.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="90" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.6</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 101.5 573.5 L 101.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="155" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 166.5 573.5 L 166.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="219" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 230.5 573.5 L 230.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 295.5 573.5 L 295.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="352" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 360.5 573.5 L 360.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="417" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 425.5 573.5 L 425.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="482" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.6</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 490.5 573.5 L 490.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="547" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.8</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 555.5 573.5 L 555.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="618" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 620.5 573.5 L 620.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="677" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 685.5 573.5 L 685.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="742" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 750.5 573.5 L 750.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="807" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.6</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 815.5 573.5 L 815.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="871" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.8</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 879.5 573.5 L 879.5 576.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 832.5 L 295.5 832.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 768.5 L 295.5 768.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 703.5 L 295.5 703.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 638.5 L 295.5 638.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 508.5 L 295.5 508.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 443.5 L 295.5 443.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 378.5 L 295.5 378.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 313.5 L 295.5 313.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 248.5 L 295.5 248.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 183.5 L 295.5 183.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 119.5 L 295.5 119.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 292.5 54.5 L 295.5 54.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="265" y="837" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.8</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="265" y="773" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.6</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="265" y="708" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.4</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="265" y="643" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="271" y="513" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="271" y="448" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.4</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="271" y="383" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.6</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="271" y="318" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.8</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="281" y="253" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="271" y="188" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="271" y="124" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.4</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="271" y="59" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.6</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="281" y="589" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0</text><path fill="none" stroke="rgb(153,51,0)" paint-order="fill stroke markers" d=" M 0 573.326023719726 L 3.68359375 573.326023719726 L 7.3671875 573.326023719726 L 11.05078125 573.326023719726 L 14.734375 573.326023719726 L 18.417968749999943 573.326023719726 L 22.101562499999943 573.326023719726 L 25.78515625 573.326023719726 L 29.46875 573.326023719726 L 33.15234375 573.326023719726 L 36.8359375 573.326023719726 L 40.51953125 573.326023719726 L 44.203125 573.326023719726 L 47.88671875 573.326023719726 L 51.57031249999997 573.326023719726 L 55.25390624999997 573.326023719726 L 58.93749999999997 573.326023719726 L 62.62109374999997 573.326023719726 L 66.30468749999997 573.326023719726 L 69.98828125 573.326023719726 L 73.671875 573.326023719726 L 77.35546875 573.326023719726 L 81.0390625 573.326023719726 L 84.72265624999997 573.326023719726 L 88.40625 573.326023719726 L 92.08984374999997 573.326023719726 L 95.77343749999997 573.326023719726 L 99.45703125 573.326023719726 L 103.140625 573.326023719726 L 106.82421875 573.326023719726 L 110.50781249999997 573.326023719726 L 114.19140625 573.326023719726 L 117.87499999999997 573.326023719726 L 121.55859375 573.326023719726 L 125.24218749999997 573.326023719726 L 128.92578124999997 573.326023719726 L 132.609375 573.326023719726 L 136.29296875 573.326023719726 L 139.9765625 573.326023719726 L 143.66015624999997 573.326023719726 L 147.34375 573.326023719726 L 151.02734375 573.326023719726 L 154.7109375 573.326023719726 L 158.39453125 573.326023719726 L 162.078125 573.326023719726 L 165.76171875 573.326023719726 L 169.4453125 573.326023719726 L 173.12890625 573.326023719726 L 176.8125 573.326023719726 L 180.49609375 573.326023719726 L 184.1796875 573.326023719726 L 187.86328125 573.326023719726 L 191.546875 573.326023719726 L 195.23046875 573.326023719726 L 198.9140625 573.326023719726 L 202.59765625 573.326023719726 L 206.28125 573.326023719726 L 209.96484375 573.326023719726 L 213.6484375 573.326023719726 L 217.33203125 573.326023719726 L 221.015625 573.326023719726 L 224.69921875 573.326023719726 L 228.3828125 573.326023719726 L 232.06640625 573.326023719726 L 235.75 573.326023719726 L 239.43359375 573.326023719726 L 243.1171875 573.326023719726 L 246.80078125 573.326023719726 L 250.484375 573.326023719726 L 254.16796875 573.326023719726 L 257.8515625 573.326023719726 L 261.53515625 573.326023719726 L 265.21875 573.326023719726 L 268.90234375 573.326023719726 L 272.5859375 573.326023719726 L 276.26953125 573.326023719726 L 279.953125 573.326023719726 L 283.63671875 573.326023719726 L 287.3203125 573.326023719726 L 291.00390625 573.326023719726 L 294.6875 573.326023719726 L 295.6083984375 573.326023719726 M 295.838623046875 248.836259138176 L 295.89617919921875 248.836259138176 L 296.529296875 248.836259138176 L 298.37109375 248.836259138176 L 302.0546875 248.836259138176 L 305.73828125 248.836259138176 L 309.421875 248.836259138176 L 313.10546875 248.836259138176 L 316.7890625 248.836259138176 L 320.47265625 248.836259138176 L 324.15625 248.836259138176 L 327.83984375000006 248.836259138176 L 331.5234375 248.836259138176 L 335.20703125000006 248.836259138176 L 338.890625 248.836259138176 L 342.57421875 248.836259138176 L 346.2578125 248.836259138176 L 349.94140625 248.836259138176 L 353.625 248.836259138176 L 357.30859375 248.836259138176 L 360.99218750000006 248.836259138176 L 364.67578125 248.836259138176 L 368.35937500000006 248.836259138176 L 372.04296875 248.836259138176 L 375.7265625 248.836259138176 L 379.41015625 248.836259138176 L 383.09375 248.836259138176 L 386.77734375 248.836259138176 L 390.4609375 248.836259138176 L 394.14453125000006 248.836259138176 L 397.828125 248.836259138176 L 401.51171875000006 248.836259138176 L 405.1953125 248.836259138176 L 408.87890625 248.836259138176 L 412.5625 248.836259138176 L 416.24609375 248.836259138176 L 419.9296875 248.836259138176 L 423.61328125 248.836259138176 L 427.296875 248.836259138176 L 430.98046875 248.836259138176 L 434.66406250000006 248.836259138176 L 438.34765625 248.836259138176 L 442.03125 248.836259138176 L 445.71484375 248.836259138176 L 449.3984375 248.836259138176 L 453.08203125 248.836259138176 L 456.765625 248.836259138176 L 460.44921875000006 248.836259138176 L 464.1328125 248.836259138176 L 467.81640625000006 248.836259138176 L 471.5 248.836259138176 L 475.18359375 248.836259138176 L 478.8671875 248.836259138176 L 482.55078125 248.836259138176 L 486.234375 248.836259138176 L 489.91796875 248.836259138176 L 493.60156250000006 248.836259138176 L 497.28515625 248.836259138176 L 500.96875000000006 248.836259138176 L 504.65234375 248.836259138176 L 508.3359375 248.836259138176 L 512.01953125 248.836259138176 L 515.703125 248.836259138176 L 519.38671875 248.836259138176 L 523.0703125 248.836259138176 L 526.75390625 248.836259138176 L 530.4375 248.836259138176 L 534.12109375 248.836259138176 L 537.8046875 248.836259138176 L 541.48828125 248.836259138176 L 545.171875 248.836259138176 L 548.85546875 248.836259138176 L 552.5390625 248.836259138176 L 556.22265625 248.836259138176 L 559.90625 248.836259138176 L 563.58984375 248.836259138176 L 567.2734375 248.836259138176 L 570.95703125 248.836259138176 L 574.640625 248.836259138176 L 578.32421875 248.836259138176 L 582.0078125 248.836259138176 L 585.69140625 248.836259138176 L 589.375 248.836259138176 L 593.05859375 248.836259138176 L 596.7421875 248.836259138176 L 600.42578125 248.836259138176 L 604.109375 248.836259138176 L 607.79296875 248.836259138176 L 611.4765625 248.836259138176 L 615.16015625 248.836259138176 L 618.84375 248.836259138176 L 619.7646484375 248.836259138176 L 620.2826538085938 248.836259138176 M 620.3402099609375 573.326023719726 L 620.3977661132812 573.326023719726 L 622.52734375 573.326023719726 L 626.2109375 573.326023719726 L 629.89453125 573.326023719726 L 633.578125 573.326023719726 L 637.26171875 573.326023719726 L 640.9453125 573.326023719726 L 644.62890625 573.326023719726 L 648.3125 573.326023719726 L 651.99609375 573.326023719726 L 655.6796875000001 573.326023719726 L 659.36328125 573.326023719726 L 663.046875 573.326023719726 L 666.73046875 573.326023719726 L 670.4140625000001 573.326023719726 L 674.09765625 573.326023719726 L 677.78125 573.326023719726 L 681.46484375 573.326023719726 L 685.1484375 573.326023719726 L 688.8320312500001 573.326023719726 L 692.515625 573.326023719726 L 696.19921875 573.326023719726 L 699.8828125 573.326023719726 L 703.5664062500001 573.326023719726 L 707.25 573.326023719726 L 710.93359375 573.326023719726 L 714.6171875 573.326023719726 L 718.30078125 573.326023719726 L 721.9843750000001 573.326023719726 L 725.66796875 573.326023719726 L 729.3515625 573.326023719726 L 733.03515625 573.326023719726 L 736.7187500000001 573.326023719726 L 740.40234375 573.326023719726 L 744.0859375 573.326023719726 L 747.76953125 573.326023719726 L 751.453125 573.326023719726 L 755.1367187500001 573.326023719726 L 758.8203125 573.326023719726 L 762.50390625 573.326023719726 L 766.1875 573.326023719726 L 769.8710937500001 573.326023719726 L 773.5546875 573.326023719726 L 777.23828125 573.326023719726 L 780.921875 573.326023719726 L 784.60546875 573.326023719726 L 788.2890625000001 573.326023719726 L 791.97265625 573.326023719726 L 795.65625 573.326023719726 L 799.33984375 573.326023719726 L 803.0234375000001 573.326023719726 L 806.70703125 573.326023719726 L 810.390625 573.326023719726 L 814.07421875 573.326023719726 L 817.7578125 573.326023719726 L 821.4414062500001 573.326023719726 L 825.1250000000001 573.326023719726 L 828.80859375 573.326023719726 L 832.4921875 573.326023719726 L 836.1757812500001 573.326023719726 L 839.8593750000001 573.326023719726 L 843.54296875 573.326023719726 L 847.2265625 573.326023719726 L 850.91015625 573.326023719726 L 854.5937500000001 573.326023719726 L 858.2773437500001 573.326023719726 L 861.9609375 573.326023719726 L 865.64453125 573.326023719726 L 869.3281250000001 573.326023719726 L 873.0117187500001 573.326023719726 L 876.6953125 573.326023719726 L 880.37890625 573.326023719726 L 884.0625 573.326023719726 L 887.7460937500001 573.326023719726 L 891.4296875000001 573.326023719726 L 895.11328125 573.326023719726 L 898.796875 573.326023719726 L 902.4804687500001 573.326023719726 L 906.1640625000001 573.326023719726 L 909.8476562500001 573.326023719726 L 913.53125 573.326023719726 L 917.21484375 573.326023719726 L 920.8984375000001 573.326023719726 L 924.5820312500001 573.326023719726 L 928.265625 573.326023719726 L 931.94921875 573.326023719726 L 935.6328125000001 573.326023719726 L 939.3164062500001 573.326023719726 L 943.0000000000001 573.326023719726" stroke-opacity="0.6980392156862745" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><text fill="rgb(153,51,0)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="8" y="573" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">f</text><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M 295.83454959573214 901 L 295.83454959573214 -5" stroke-opacity="1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="6.5,4"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M 620.3243141772823 901 L 620.3243141772823 -5" stroke-opacity="1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="6.5,4"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M -5 573.326023719726 L 948 573.326023719726" stroke-opacity="1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="6.5,4"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M -5 248.836259138176 L 948 248.836259138176" stroke-opacity="1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="6.5,4"/><path fill="url(#XsXphWFdpZyW)" stroke="none" paint-order="stroke fill markers" d=" M 295.83454959573214 248.836259138176 L 295.83454959573214 573.326023719726 L 620.3243141772823 573.326023719726 L 620.3243141772823 248.836259138176 Z"/></g></g></svg>

若

$$
\begin{aligned}
X &\sim U(0,1),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
P\{0<X<1\}
&=1,\\
P\left\{0<X<\frac12\right\}
&=\frac12,\\
P\left\{\frac13<X<1\right\}
&=\frac23.
\end{aligned}
\nonumber
$$

均匀分布求概率时，本质上是在求区间长度占总长度的比例。

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="943" height="896"><defs><clipPath id="rPefvTnBkNhR"><path fill="none" stroke="none" d=" M 0 0 L 943 0 L 943 896 L 0 896 L 0 0 Z"/></clipPath><pattern id="LyyVhyQCTvrL" width="35" height="35" patternUnits="userSpaceOnUse" viewBox="35 35 35 35"><g><rect fill="rgb(255,255,255)" stroke="none" x="0" y="0" width="105" height="105" fill-opacity="0.24705882352941178"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M 105 0 L 0 105 Z" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M 105 35 L 35 105 Z" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M 70 0 L 0 70 Z" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/></g></pattern></defs><g transform="scale(1,1)" clip-path="url(#rPefvTnBkNhR)"><g><rect fill="rgb(255,255,255)" stroke="none" x="0" y="0" width="943" height="896" fill-opacity="1"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 146.5 2.5 L 146.5 896.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 146.5 1.5 L 142.5 5.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 146.5 1.5 L 150.5 5.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 0.5 492.5 L 941.5 492.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 942.5 492.5 L 938.5 488.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 942.5 492.5 L 938.5 496.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="6" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 17.5 492.5 L 17.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="70" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 81.5 492.5 L 81.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 146.5 492.5 L 146.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="203" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 211.5 492.5 L 211.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="268" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 276.5 492.5 L 276.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="333" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.6</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 341.5 492.5 L 341.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="398" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.8</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 406.5 492.5 L 406.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="469" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 471.5 492.5 L 471.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="528" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 536.5 492.5 L 536.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="593" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 601.5 492.5 L 601.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="658" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.6</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 666.5 492.5 L 666.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="722" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.8</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 730.5 492.5 L 730.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="793" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 795.5 492.5 L 795.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="852" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">2.2</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 860.5 492.5 L 860.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="917" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">2.4</text><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 925.5 492.5 L 925.5 495.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 881.5 L 146.5 881.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 816.5 L 146.5 816.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 751.5 L 146.5 751.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 687.5 L 146.5 687.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 622.5 L 146.5 622.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 557.5 L 146.5 557.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 427.5 L 146.5 427.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 362.5 L 146.5 362.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 297.5 L 146.5 297.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 232.5 L 146.5 232.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 167.5 L 146.5 167.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 102.5 L 146.5 102.5" stroke-opacity="1" stroke-miterlimit="10"/><path fill="none" stroke="rgb(28,28,31)" paint-order="fill stroke markers" d=" M 143.5 38.5 L 146.5 38.5" stroke-opacity="1" stroke-miterlimit="10"/><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="116" y="886" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–1.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="126" y="821" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–1</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="116" y="756" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.8</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="116" y="692" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.6</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="116" y="627" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.4</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="116" y="562" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">–0.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="122" y="432" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="122" y="367" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.4</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="122" y="302" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.6</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="122" y="237" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0.8</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="132" y="172" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="122" y="107" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.2</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="122" y="43" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">1.4</text><text fill="rgb(28,28,31)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="12px" font-style="normal" font-weight="normal" text-decoration="normal" x="132" y="508" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">0</text><path fill="none" stroke="rgb(153,51,0)" paint-order="fill stroke markers" d=" M 0 492.326023719726 L 3.68359375 492.326023719726 L 7.3671875 492.326023719726 L 11.05078125 492.326023719726 L 14.734375 492.326023719726 L 18.41796875 492.326023719726 L 22.1015625 492.326023719726 L 25.78515625 492.326023719726 L 29.468749999999986 492.326023719726 L 33.15234375 492.326023719726 L 36.8359375 492.326023719726 L 40.519531249999986 492.326023719726 L 44.203124999999986 492.326023719726 L 47.88671875 492.326023719726 L 51.5703125 492.326023719726 L 55.25390625 492.326023719726 L 58.9375 492.326023719726 L 62.621093750000014 492.326023719726 L 66.3046875 492.326023719726 L 69.98828125 492.326023719726 L 73.671875 492.326023719726 L 77.35546875 492.326023719726 L 81.0390625 492.326023719726 L 84.72265625 492.326023719726 L 88.40625 492.326023719726 L 92.08984375 492.326023719726 L 95.7734375 492.326023719726 L 99.45703125 492.326023719726 L 103.140625 492.326023719726 L 106.82421875 492.326023719726 L 110.5078125 492.326023719726 L 114.19140625 492.326023719726 L 117.875 492.326023719726 L 121.55859375 492.326023719726 L 125.24218750000001 492.326023719726 L 128.92578125 492.326023719726 L 132.609375 492.326023719726 L 136.29296875 492.326023719726 L 139.9765625 492.326023719726 L 143.66015625 492.326023719726 L 145.501953125 492.326023719726 L 146.4228515625 492.326023719726 M 146.88330078125 330.081141428951 L 146.94085693359375 330.081141428951 L 151.02734375 330.081141428951 L 154.7109375 330.081141428951 L 158.39453125 330.081141428951 L 162.078125 330.081141428951 L 165.76171875 330.081141428951 L 169.4453125 330.081141428951 L 173.12890625 330.081141428951 L 176.81250000000003 330.081141428951 L 180.49609375000003 330.081141428951 L 184.17968750000003 330.081141428951 L 187.86328125 330.081141428951 L 191.546875 330.081141428951 L 195.23046875 330.081141428951 L 198.9140625 330.081141428951 L 202.59765625 330.081141428951 L 206.28125 330.081141428951 L 209.96484375000003 330.081141428951 L 213.64843750000003 330.081141428951 L 217.33203125000003 330.081141428951 L 221.015625 330.081141428951 L 224.69921875 330.081141428951 L 228.3828125 330.081141428951 L 232.06640625 330.081141428951 L 235.75 330.081141428951 L 239.43359375 330.081141428951 L 243.11718750000003 330.081141428951 L 246.80078125000003 330.081141428951 L 250.48437500000003 330.081141428951 L 254.16796875 330.081141428951 L 257.8515625 330.081141428951 L 261.53515625 330.081141428951 L 265.21875 330.081141428951 L 268.90234375 330.081141428951 L 272.5859375 330.081141428951 L 276.26953125 330.081141428951 L 279.953125 330.081141428951 L 283.63671875 330.081141428951 L 287.3203125 330.081141428951 L 291.00390625 330.081141428951 L 294.6875 330.081141428951 L 298.37109375 330.081141428951 L 302.0546875 330.081141428951 L 305.73828125 330.081141428951 L 309.421875 330.081141428951 L 313.10546875000006 330.081141428951 L 316.7890625 330.081141428951 L 320.47265625 330.081141428951 L 324.15625 330.081141428951 L 327.83984375000006 330.081141428951 L 331.5234375 330.081141428951 L 335.2070312500001 330.081141428951 L 338.890625 330.081141428951 L 342.57421875 330.081141428951 L 346.25781250000006 330.081141428951 L 349.94140625 330.081141428951 L 353.62500000000006 330.081141428951 L 357.30859375 330.081141428951 L 360.99218750000006 330.081141428951 L 364.67578125 330.081141428951 L 368.3593750000001 330.081141428951 L 372.04296875000006 330.081141428951 L 375.7265625 330.081141428951 L 379.41015625000006 330.081141428951 L 383.09375 330.081141428951 L 386.77734375000006 330.081141428951 L 390.4609375 330.081141428951 L 394.14453125000006 330.081141428951 L 397.828125 330.081141428951 L 401.5117187500001 330.081141428951 L 405.19531250000006 330.081141428951 L 408.87890625 330.081141428951 L 412.56250000000006 330.081141428951 L 416.24609375 330.081141428951 L 419.92968750000006 330.081141428951 L 423.61328125000006 330.081141428951 L 427.29687500000006 330.081141428951 L 430.98046875000006 330.081141428951 L 434.66406250000006 330.081141428951 L 438.34765625000006 330.081141428951 L 442.03125 330.081141428951 L 445.71484375000006 330.081141428951 L 449.3984375 330.081141428951 L 453.08203125000006 330.081141428951 L 456.76562500000006 330.081141428951 L 460.44921875000006 330.081141428951 L 464.13281250000006 330.081141428951 L 467.81640625000006 330.081141428951 L 469.65820312500006 330.081141428951 L 470.5791015625 330.081141428951 L 471.26977539062506 330.081141428951 M 471.32733154296875 492.326023719726 L 471.38488769531256 492.326023719726 L 475.18359375 492.326023719726 L 478.86718750000006 492.326023719726 L 482.55078125 492.326023719726 L 486.23437500000006 492.326023719726 L 489.91796875000006 492.326023719726 L 493.60156250000006 492.326023719726 L 497.28515625000006 492.326023719726 L 500.9687500000001 492.326023719726 L 504.65234375000006 492.326023719726 L 508.3359375 492.326023719726 L 512.01953125 492.326023719726 L 515.703125 492.326023719726 L 519.38671875 492.326023719726 L 523.0703125 492.326023719726 L 526.75390625 492.326023719726 L 530.4375 492.326023719726 L 534.1210937500001 492.326023719726 L 537.8046875 492.326023719726 L 541.48828125 492.326023719726 L 545.171875 492.326023719726 L 548.85546875 492.326023719726 L 552.5390625 492.326023719726 L 556.22265625 492.326023719726 L 559.90625 492.326023719726 L 563.58984375 492.326023719726 L 567.2734375000001 492.326023719726 L 570.95703125 492.326023719726 L 574.640625 492.326023719726 L 578.32421875 492.326023719726 L 582.0078125 492.326023719726 L 585.69140625 492.326023719726 L 589.375 492.326023719726 L 593.05859375 492.326023719726 L 596.7421875 492.326023719726 L 600.4257812500001 492.326023719726 L 604.109375 492.326023719726 L 607.79296875 492.326023719726 L 611.4765625 492.326023719726 L 615.16015625 492.326023719726 L 618.84375 492.326023719726 L 622.52734375 492.326023719726 L 626.2109375000001 492.326023719726 L 629.89453125 492.326023719726 L 633.5781250000001 492.326023719726 L 637.26171875 492.326023719726 L 640.9453125 492.326023719726 L 644.62890625 492.326023719726 L 648.3125 492.326023719726 L 651.99609375 492.326023719726 L 655.6796875000001 492.326023719726 L 659.3632812500001 492.326023719726 L 663.046875 492.326023719726 L 666.73046875 492.326023719726 L 670.4140625000001 492.326023719726 L 674.0976562500001 492.326023719726 L 677.7812500000001 492.326023719726 L 681.46484375 492.326023719726 L 685.1484375 492.326023719726 L 688.8320312500001 492.326023719726 L 692.5156250000001 492.326023719726 L 696.1992187500001 492.326023719726 L 699.8828125 492.326023719726 L 703.5664062500001 492.326023719726 L 707.2500000000001 492.326023719726 L 710.9335937500001 492.326023719726 L 714.6171875 492.326023719726 L 718.30078125 492.326023719726 L 721.9843750000001 492.326023719726 L 725.6679687500001 492.326023719726 L 729.3515625000001 492.326023719726 L 733.03515625 492.326023719726 L 736.7187500000001 492.326023719726 L 740.4023437500001 492.326023719726 L 744.0859375000001 492.326023719726 L 747.76953125 492.326023719726 L 751.453125 492.326023719726 L 755.1367187500001 492.326023719726 L 758.8203125000001 492.326023719726 L 762.5039062500001 492.326023719726 L 766.1875 492.326023719726 L 769.8710937500001 492.326023719726 L 773.5546875000001 492.326023719726 L 777.2382812500001 492.326023719726 L 780.921875 492.326023719726 L 784.60546875 492.326023719726 L 788.2890625000001 492.326023719726 L 791.9726562500001 492.326023719726 L 795.6562500000001 492.326023719726 L 799.33984375 492.326023719726 L 803.0234375000001 492.326023719726 L 806.7070312500001 492.326023719726 L 810.3906250000001 492.326023719726 L 814.07421875 492.326023719726 L 817.7578125 492.326023719726 L 821.4414062500001 492.326023719726 L 825.1250000000001 492.326023719726 L 828.8085937500001 492.326023719726 L 832.4921875 492.326023719726 L 836.1757812500001 492.326023719726 L 839.8593750000001 492.326023719726 L 843.5429687500001 492.326023719726 L 847.2265625 492.326023719726 L 850.91015625 492.326023719726 L 854.5937500000001 492.326023719726 L 858.2773437500001 492.326023719726 L 861.9609375000001 492.326023719726 L 865.64453125 492.326023719726 L 869.3281250000001 492.326023719726 L 873.0117187500001 492.326023719726 L 876.6953125000001 492.326023719726 L 880.37890625 492.326023719726 L 884.0625 492.326023719726 L 887.7460937500001 492.326023719726 L 891.4296875000001 492.326023719726 L 895.1132812500001 492.326023719726 L 898.796875 492.326023719726 L 902.4804687500001 492.326023719726 L 906.1640625000001 492.326023719726 L 909.8476562500001 492.326023719726 L 913.5312500000001 492.326023719726 L 917.21484375 492.326023719726 L 920.8984375000001 492.326023719726 L 924.5820312500001 492.326023719726 L 928.2656250000001 492.326023719726 L 931.94921875 492.326023719726 L 935.6328125000001 492.326023719726 L 939.3164062500001 492.326023719726 L 943.0000000000001 492.326023719726" stroke-opacity="0.6980392156862745" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><text fill="rgb(153,51,0)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="8" y="492" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">f</text><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M 146.83454959573214 901 L 146.83454959573214 -5" stroke-opacity="1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="6.5,4"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M 795.8140787588324 901 L 795.8140787588324 -5" stroke-opacity="1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="6.5,4"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M -5 492.326023719726 L 948 492.326023719726" stroke-opacity="1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="6.5,4"/><path fill="none" stroke="rgb(0,0,255)" paint-order="fill stroke markers" d=" M -5 330.081141428951 L 948 330.081141428951" stroke-opacity="1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray="6.5,4"/><path fill="url(#LyyVhyQCTvrL)" stroke="none" paint-order="stroke fill markers" d=" M 146.83454959573214 330.081141428951 L 146.83454959573214 492.326023719726 L 795.8140787588324 492.326023719726 L 795.8140787588324 330.081141428951 Z"/></g></g></svg>

若

$$
\begin{aligned}
X &\sim U(0,2),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
f(x)
&=
\begin{cases}
\dfrac12, & 0\le x\le 2,\\[4pt]
0, & \text{其他}.
\end{cases}
\end{aligned}
\nonumber
$$

因此

$$
\begin{aligned}
P\left\{0<X<\frac32\right\}
&=
\frac32\cdot\frac12\\
&=
\frac34.
\end{aligned}
\nonumber
$$

#### （2）指数(exponent)分布（使用寿命）

设随机变量 $X$ 的概率密度为

$$
f(x)=
\begin{cases}
\lambda e^{-\lambda x},& x>0,\\
0,& x\le 0,
\end{cases}
\qquad \lambda>0.
\nonumber
$$

> 若 $\lambda < 0$ 则不满足非负, 若 $\lambda = 0$ 则不满足规范

称 $X$ 服从参数为 $\lambda$ 的指数分布，记作

$$
X\sim E(\lambda). \nonumber
$$

其分布函数为

$$
F(x)=
\begin{cases}
1-e^{-\lambda x},& x>0,\\
0,& x\le 0.
\end{cases}
\nonumber
$$

##### 指数分布的性质

指数分布具有无记忆性。设 $X\sim E(\lambda)$，则对任意 $s>0,t>0$，有

$$
P\{X>s+t\mid X>s\}=P\{X>t\}. \nonumber
$$

等价地，

$$
P\{X\le s+t\mid X>s\}=P\{0<X\le t\}. \nonumber
$$

> [!important] Gamma 函数
> PS: 计算过程中大家应该熟练掌握 $\Gamma$ 积分。  
> 伽马函数定义为
>
> $$
> \begin{aligned}
> \Gamma(s)
> &=
> \displaystyle\int_0^{+\infty}x^{s-1}e^{-x}\,dx,
> \qquad s>0.
> \end{aligned}
> \nonumber
> $$
>
> 并且有递推公式
>
> $$
> \begin{aligned}
> \Gamma(s+1)
> &=s\Gamma(s).
> \end{aligned}
> \nonumber
> $$
>
> 特别地，
>
> $$
> \begin{aligned}
> \Gamma\left(\frac12\right)
> &=\sqrt{\pi},\\
> \Gamma(1)
> &=
> \displaystyle\int_0^{+\infty}e^{-x}\,dx\\
> &=1,\\
> \Gamma(n+1)
> &=
> \displaystyle\int_0^{+\infty}x^n e^{-x}\,dx\\
> &=n!
> \end{aligned}
> \nonumber
> $$

---

> [!question] 题目
> 【例 2.20】试证明指数分布具有“无记忆性”，即若 $X$ 服从参数为 $\lambda$ 的指数分布，则对任意 $s,t>0$，有
>
> $$
> \begin{aligned}
> P\{X>s+t\mid X>s\}
> &=
> P\{X>t\}.
> \end{aligned}
> \nonumber
> $$
>
> **题解：**
>
> 因为 $X\sim E(\lambda)$，所以当 $x>0$ 时，
>
> $$
> \begin{aligned}
> P\{X>x\}
> &=
> \int_x^{+\infty}\lambda e^{-\lambda u}\,du\\
> &=
> e^{-\lambda x}.
> \end{aligned}
> \nonumber
> $$
>
> 于是
>
> $$
> \begin{aligned}
> P\{X>s+t\mid X>s\}
> &=
> \frac{P\{X>s+t,\ X>s\}}{P\{X>s\}}\\
> &=
> \frac{P\{X>s+t\}}{P\{X>s\}}\\
> &=
> \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}}\\
> &=
> e^{-\lambda t}.
> \end{aligned}
> \nonumber
> $$
>
> 又因为
>
> $$
> \begin{aligned}
> P\{X>t\}
> &=
> e^{-\lambda t},
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> \boxed{
> \begin{aligned}
> P\{X>s+t\mid X>s\}
> &=
> P\{X>t\}.
> \end{aligned}
> }
> \nonumber
> $$

#### （3）正态(normal)分布（Gauss 分布）

设随机变量 $X$ 的**概率密度**为

$$
f(x)=
\frac{1}{\sqrt{2\pi}\sigma}
e^{-\frac{(x-\mu)^2}{2\sigma^2}},
\qquad -\infty<x<+\infty. \nonumber
$$

其中 $\mu,\sigma$ 为常数，且 $\sigma>0$。称 $X$ 服从参数为 $\mu,\sigma^2$ 的正态分布，记作

$$
X\sim N(\mu,\sigma^2). \nonumber
$$

当 $\mu=0,\sigma^2=1$ 时，称 $X$ 服从标准正态分布，记作

$$
X\sim N(0,1). \nonumber
$$

其概率密度为

$$
\varphi(x)=\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}},
\quad -\infty<x<+\infty. \nonumber
$$

分布函数为

$$
\Phi(x)
=
\displaystyle\int_{-\infty}^{x}
\frac{1}{\sqrt{2\pi}}e^{-\frac{t^2}{2}}\,dt,
\quad -\infty<x<+\infty. \nonumber
$$

$3\sigma$ 原则(了解即可)：

$$
\begin{aligned}
P\{\mu-\sigma\le X\le \mu+\sigma\}
&=
0.6827,\\
P\{\mu-2\sigma\le X\le \mu+2\sigma\}
&=
0.9545,\\
P\{\mu-3\sigma\le X\le \mu+3\sigma\}
&=
0.9973.
\end{aligned}
\nonumber
$$

若 $a\ne 0$，则

$$
\begin{aligned}
Y=aX+b
&\sim
N(a\mu+b,a^2\sigma^2).
\end{aligned}
\nonumber
$$

即正态随机变量的一次函数仍服从正态分布。


> [!question] 题目
> 【例 2.22】设随机变量 $X\sim N(2,\sigma^2)$，且 $P\{2<X<4\}=0.3$，则 $P\{0<X<2\}=$。
>
> **题解：**
>
> 正态分布关于 $x=2$ 对称，区间 $(0,2)$ 与 $(2,4)$ 关于 $x=2$ 对称，故 $P\{0<X<2\}=P\{2<X<4\}=0.3$。

---

> [!question] 题目
> 【例 2.23】设随机变量 $X\sim N(\mu,\sigma^2)$，$\sigma>0$，且二次方程 $y^2+4y+X=0$ 有实根的概率为 $0.5$，则 $\mu=$。
>
> **题解：**
>
> 方程有实根当且仅当 $\Delta=16-4X\ge 0$，即 $X\le 4$。
>
> 因为 $P\{X\le 4\}=0.5$，且正态分布关于 $x=\mu$ 对称，所以 $\mu=4$。


##### ① 正态分布的标准化

设

$$
X\sim N(\mu,\sigma^2),
\nonumber
$$

则

$$
\frac{X-\mu}{\sigma}\sim N(0,1). \nonumber
$$

于是

$$
F(x)=\Phi\left(\frac{x-\mu}{\sigma}\right). \nonumber
$$

并且

$$
P\{a<X\le b\}
=
\Phi\left(\frac{b-\mu}{\sigma}\right)
-
\Phi\left(\frac{a-\mu}{\sigma}\right). \nonumber
$$

##### ② 正态定参

若题目给出形如

$$
f(x)=Ae^{-ax^2+bx+c}
\nonumber
$$

的正态型密度，并含有未知参数，则通常通过两类条件定参：

$$
\displaystyle\int_{-\infty}^{+\infty}f(x)\,dx=1,
\nonumber
$$

以及与标准正态密度形式

$$
\frac{1}{\sqrt{2\pi}\sigma}
e^{-\frac{(x-\mu)^2}{2\sigma^2}}
\nonumber
$$

进行配方比较。

若概率密度函数可写为

$$
\begin{aligned}
f(x)
&=
A e^{ax^2+bx+c},
\qquad
x\in\mathbb R,
\end{aligned}
\nonumber
$$

其中 $a<0$，$A\ne 0$，则它仍对应某个正态分布的密度形式。

核心原因是二次项可以配方：

$$
\begin{aligned}
ax^2+bx+c
&=
a\left(x+\frac{b}{2a}\right)^2
+
c-\frac{b^2}{4a}.
\end{aligned}
\nonumber
$$

由于 $a<0$，配方后指数部分具有正态密度中的平方衰减形式。

> [!question] 题目
> 已知随机变量 $X$ 的概率密度函数为
>
> $$
> \begin{aligned}
> f(x)
> &=
> ae^{-\frac{1}{4}x^2+x},
> \qquad x\in\mathbb R.
> \end{aligned}
> \nonumber
> $$
>
> 用 $\Phi(x)$ 表示
>
> $$
> \begin{aligned}
> P\{2-2\sqrt2<X<2+2\sqrt2\}.
> \end{aligned}
> \nonumber
> $$
>
> **题解：**
>
> 先配方：
>
> $$
> \begin{aligned}
> -\frac{1}{4}x^2+x
> &=
> -\frac{(x-2)^2}{4}+1.
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> \begin{aligned}
> f(x)
> &=
> ae\cdot e^{-\frac{(x-2)^2}{4}}.
> \end{aligned}
> \nonumber
> $$
>
> 与正态密度对比可得 $X\sim N(2,2)$，于是
>
> $$
> \begin{aligned}
> Z
> &=
> \frac{X-2}{\sqrt2}
> \sim N(0,1).
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> P\{2-2\sqrt2<X<2+2\sqrt2\}
> &=
> P\{-2<Z<2\}\\
> &=
> \Phi(2)-\Phi(-2)\\
> &=
> 2\Phi(2)-1.
> \end{aligned}
> \nonumber
> $$

##### ③ 正态分布函数相加

对标准正态分布函数，有

$$
\Phi(a)+\Phi(b)
\begin{cases}
>1,& a+b>0,\\
=1,& a+b=0,\\
<1,& a+b<0.
\end{cases}
\nonumber
$$

原因是

$$
\Phi(-x)=1-\Phi(x). \nonumber
$$

若 $X\sim N(\mu,\sigma^2)$，其分布函数为 $F(x)$，则

$$
F(a)+F(b)
=
\Phi\left(\frac{a-\mu}{\sigma}\right)
+
\Phi\left(\frac{b-\mu}{\sigma}\right). \nonumber
$$

由于

$$
\frac{a-\mu}{\sigma}+\frac{b-\mu}{\sigma}
=
\frac{a+b-2\mu}{\sigma},
\nonumber
$$

所以

$$
F(a)+F(b)
\begin{cases}
>1,& a+b>2\mu,\\
=1,& a+b=2\mu,\\
<1,& a+b<2\mu.
\end{cases}
\nonumber
$$

特别地，

$$
F(\mu+a)+F(\mu-a)=1. \nonumber
$$

### 三、总结

#### （1）$0-1$ 分布

$0-1$ 分布对应一次伯努利试验。

若

$$
\begin{aligned}
X &\sim B(1,p),
\end{aligned}
\nonumber
$$

则其概率分布为

$$
\begin{array}{c|cc}
X & 0 & 1\\
\hline
P & 1-p & p
\end{array}
\nonumber
$$

并且

$$
\begin{aligned}
EX &= p,\\
DX &= p(1-p).
\end{aligned}
\nonumber
$$

#### （2）二项分布

二项分布对应 $n$ 次伯努利试验。

若

$$
\begin{aligned}
X &\sim B(n,p),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
P\{X=k\}
&=
\binom{n}{k}p^k(1-p)^{n-k},\\
k
&\in
\{\,m\in\mathbb N\mid m\le n\,\}.
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
EX &= np,\\
DX &= np(1-p).
\end{aligned}
\nonumber
$$

#### （3）泊松分布

泊松分布常用于描述自然数型计数变量。

若

$$
\begin{aligned}
X &\sim P(\lambda),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
P\{X=k\}
&=
\frac{\lambda^k}{k!}e^{-\lambda},
\qquad \lambda>0,\\
k
&\in \mathbb N.
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
EX &= \lambda,\\
DX &= \lambda.
\end{aligned}
\nonumber
$$

#### （4）几何分布

几何分布对应伯努利试验中事件首次发生所需的试验次数。

若

$$
\begin{aligned}
X &\sim G(p),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
P\{X=k\}
&=
p(1-p)^{k-1},\\
k
&\in \mathbb N^*.
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
EX &= \frac{1}{p},\\
DX &= \frac{1-p}{p^2}.
\end{aligned}
\nonumber
$$

#### （5）超几何分布

超几何分布常用于“不放回抽取”问题，例如产品抽检问题。

若

$$
\begin{aligned}
X &\sim H(N,M,n),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
P\{X=k\}
&=
\frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}},\\
k
&\in
\{\,m\in\mathbb N
\mid
\max(0,n-N+M)\le m\le \min(n,M)
\,\}.
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
EX &= \frac{nM}{N},\\
DX
&=
\frac{nM}{N}
\left(1-\frac{M}{N}\right)
\frac{N-n}{N-1}.
\end{aligned}
\nonumber
$$

#### （6）均匀分布

均匀分布表示在区间 $[a,b]$ 上等概率取值。

若

$$
\begin{aligned}
X &\sim U(a,b),
\end{aligned}
\nonumber
$$

则概率密度为

$$
\begin{aligned}
f(x)
&=
\begin{cases}
\dfrac{1}{b-a},& a\le x\le b,\\[6pt]
0,& \text{其他}.
\end{cases}
\end{aligned}
\nonumber
$$

分布函数为

$$
\begin{aligned}
F(x)
&=
\begin{cases}
0,& x<a,\\[4pt]
\dfrac{x-a}{b-a},& a\le x<b,\\[6pt]
1,& x\ge b.
\end{cases}
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
EX &= \frac{a+b}{2},\\
DX &= \frac{(b-a)^2}{12}.
\end{aligned}
\nonumber
$$

> [!question] 题目
> 设随机变量 $X$ 在 $[1,6]$ 上服从均匀分布，则 $X$ 的概率密度为 __________，分布函数为 __________，方程 $t^2+Xt+1=0$ 有实根的概率为 __________。
>
> **题解：**
>
> 因为 $X\sim U(1,6)$，所以概率密度为
>
> $$
> f(x)
> =
> \begin{cases}
> \dfrac{1}{5}, & 1\le x\le 6,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 分布函数为
>
> $$
> F(x)
> =
> \begin{cases}
> 0, & x<1,\\[6pt]
> \dfrac{x-1}{5}, & 1\le x<6,\\[8pt]
> 1, & x\ge 6.
> \end{cases}
> \nonumber
> $$
>
> 方程 $t^2+Xt+1=0$ 有实根，当且仅当判别式非负：
>
> $$
> \begin{aligned}
> \Delta
> &=
> X^2-4\\
> &\ge 0.
> \end{aligned}
> \nonumber
> $$
>
> 由于 $X\in[1,6]$，所以
>
> $$
> \begin{aligned}
> X^2-4\ge 0
> &\Longleftrightarrow
> X\ge 2.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> P\{t^2+Xt+1=0\text{ 有实根}\}
> &=
> P\{X\ge 2\}\\
> &=
> \int_{2}^{6}\frac{1}{5}\,dx\\
> &=
> \frac{4}{5}.
> \end{aligned}
> \nonumber
> $$

#### （7）指数分布

指数分布常用于描述寿命、等待时间等问题。

若

$$
\begin{aligned}
X &\sim E(\lambda),
\end{aligned}
\nonumber
$$

则概率密度为

$$
\begin{aligned}
f(x)
&=
\begin{cases}
\lambda e^{-\lambda x},& x>0,\quad \lambda>0,\\
0,& x\le 0.
\end{cases}
\end{aligned}
\nonumber
$$

分布函数为

$$
\begin{aligned}
F(x)
&=
\begin{cases}
1-e^{-\lambda x},& x>0,\\
0,& x\le 0.
\end{cases}
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
EX &= \frac{1}{\lambda},\\
DX &= \frac{1}{\lambda^2}.
\end{aligned}
\nonumber
$$

#### （8）一般正态分布

若

$$
\begin{aligned}
X &\sim N(\mu,\sigma^2),
\end{aligned}
\nonumber
$$

则概率密度为

$$
\begin{aligned}
f(x)
&=
\frac{1}{\sqrt{2\pi}\sigma}
e^{-\frac{(x-\mu)^2}{2\sigma^2}},
\qquad -\infty<x<+\infty.
\end{aligned}
\nonumber
$$

其分布函数满足

$$
\begin{aligned}
F(\mu) &= \frac{1}{2},\\
F(x)
&=
\Phi\left(\frac{x-\mu}{\sigma}\right).
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
EX &= \mu,\\
DX &= \sigma^2.
\end{aligned}
\nonumber
$$

#### 标准正态分布

若

$$
\begin{aligned}
X &\sim N(0,1),
\end{aligned}
\nonumber
$$

则概率密度为

$$
\begin{aligned}
\varphi(x)
&=
\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}.
\end{aligned}
\nonumber
$$

分布函数满足

$$
\begin{aligned}
\Phi(0) &= \frac{1}{2},\\
\Phi(-x) &= 1-\Phi(x).
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
EX &= 0,\\
DX &= 1.
\end{aligned}
\nonumber
$$

#### 正态分布的标准化

若

$$
\begin{aligned}
X &\sim N(\mu,\sigma^2),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
\frac{X-\mu}{\sigma}
&\sim N(0,1).
\end{aligned}
\nonumber
$$

### 四、无记忆性

#### （1）指数分布 (看波动)

若

$$
X\sim E(\lambda),
\qquad s,t>0,
\nonumber
$$

则

$$
P\{X>s+t\mid X>s\}=P\{X>t\}. \nonumber
$$

并且

$$
P\{X\le s+t\mid X>s\}=P\{0<X\le t\}. \nonumber
$$

#### （2）几何分布

若

$$
X\sim G(p),
\nonumber
$$

则对任意正整数 $m,n$，有

$$
P\{X>m+n\mid X>m\}=P\{X>n\}. \nonumber
$$

并且

$$
P\{X=m+n\mid X>m\}=P\{X=n\}=(1-p)^{n-1}p. \nonumber
$$

### 五、参数可加性（同一分布族加到一起）

若 $X,Y$ 相互独立，则有以下参数可加性。

#### （1）二项分布

若

$$
\begin{aligned}
X &\sim B(m,p),\\
Y &\sim B(n,p),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
X+Y
&\sim B(m+n,p).
\end{aligned}
\nonumber
$$

#### （2）泊松分布

若

$$
\begin{aligned}
X &\sim P(\lambda_1),\\
Y &\sim P(\lambda_2),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
X+Y
&\sim P(\lambda_1+\lambda_2).
\end{aligned}
\nonumber
$$

#### （3）正态分布

若

$$
\begin{aligned}
X &\sim N(\mu_1,\sigma_1^2),\\
Y &\sim N(\mu_2,\sigma_2^2),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
X+Y
&\sim
N\left(
\mu_1+\mu_2,\,
\sigma_1^2+\sigma_2^2
\right).
\end{aligned}
\nonumber
$$

#### （4）卡方分布

若

$$
\begin{aligned}
X &\sim \chi^2(m),\\
Y &\sim \chi^2(n),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
X+Y
&\sim \chi^2(m+n).
\end{aligned}
\nonumber
$$

#### （5）指数分布的最小值

若

$$
\begin{aligned}
X &\sim E(\lambda),\\
Y &\sim E(\lambda),
\end{aligned}
\nonumber
$$

且 $X,Y$ 相互独立，则

$$
\begin{aligned}
\min\{X,Y\}
&\sim E(2\lambda).
\end{aligned}
\nonumber
$$

因为对 $x>0$，有

$$
\begin{aligned}
P\{\min(X,Y)>x\}
&= P\{X>x,\ Y>x\}\\
&= P\{X>x\}P\{Y>x\}\\
&= e^{-\lambda x}e^{-\lambda x}\\
&= e^{-2\lambda x}.
\end{aligned}
\nonumber
$$
