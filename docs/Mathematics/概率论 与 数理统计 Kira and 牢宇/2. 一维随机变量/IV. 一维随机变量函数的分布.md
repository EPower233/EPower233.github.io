## $IV.$ 一维随机变量函数的分布

### 一、连续型随机变量函数的分布

> [!question] 题目
> 【例 2.28】设随机变量 $X$ 的概率分布为
>
> $$
> \begin{array}{c|cccc}
> X & -1 & 0 & 1 & 2\\
> \hline
> P & \dfrac{1}{4} & \dfrac{1}{3} & \dfrac{1}{6} & \dfrac{1}{4}
> \end{array}
> \nonumber
> $$
>
> 求 $Y=X^2$ 的概率分布。
>
> **题解：**
>
> $Y=X^2$ 的可能取值为 $0,1,4$。
>
> $$
> \begin{aligned}
> P\{Y=0\}
> &=
> P\{X=0\}
> =
> \frac{1}{3},\\
> P\{Y=1\}
> &=
> P\{X=-1\}+P\{X=1\}\\
> &=
> \frac{1}{4}+\frac{1}{6}
> =
> \frac{5}{12},\\
> P\{Y=4\}
> &=
> P\{X=2\}
> =
> \frac{1}{4}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{array}{c|ccc}
> Y & 0 & 1 & 4\\
> \hline
> P & \dfrac{1}{3} & \dfrac{5}{12} & \dfrac{1}{4}
> \end{array}
> \nonumber
> $$

### 二、连续型随机变量函数的分布

设随机变量 $X$ 的概率密度为 $f_X(x)$，求 $Y=g(X)$ 的分布。

#### （1）分布函数法（三大步）

第一步，设 **$Y$ 的分布函数为 $F_Y(y)$**，则

$$
F_Y(y)=P\{Y\le y\}=P\{g(X)\le y\}. \nonumber
$$

第二步，求 $Y=g(X)$ 在 $X$ 的正概率密度区间上的**值域** $[\alpha,\beta]$，并**讨论** $y$。

当 $y<\alpha$ 时，

$$
F_Y(y)=0. \nonumber
$$

当 $\alpha\le y<\beta$ 时，

$$
F_Y(y)=
\displaystyle\int\limits_{g(x)\le y} f_X(x)\,dx. \nonumber
$$

当 $y\ge \beta$ 时，

$$
F_Y(y)=1. \nonumber
$$

第三步，若 $Y$ 为连续型随机变量，则

$$
f_Y(y)=F_Y'(y). \nonumber
$$

(求导)

> [!question] 题目
> 已知随机变量 $X$ 的概率密度为
>
> $$
> f_X(x)
> =
> \begin{cases}
> \dfrac{x}{8}, & 0<x<4,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求 $Y=2X+8$ 的概率密度。
>
> **题解：**
>
> 由 $0<X<4$ 可得 $8<Y<16$。
>
> 当 $y<8$ 时，$F_Y(y)=0$；当 $y\ge 16$ 时，$F_Y(y)=1$。
>
> 当 $8<y<16$ 时，
>
> $$
> \begin{aligned}
> F_Y(y)
> &=
> P\{Y\le y\}\\
> &=
> P\{2X+8\le y\}\\
> &=
> P\left\{X\le \frac{y-8}{2}\right\}\\
> &=
> \int_0^{\frac{y-8}{2}}\frac{x}{8}\,dx\\
> &=
> \frac{(y-8)^2}{64}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_Y(y)
> =
> \begin{cases}
> \dfrac{y-8}{32}, & 8<y<16,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$

> [!question] 题目
> 【例 2.30】设随机变量 $X$ 的概率密度为
>
> $$
> f_X(x)
> =
> \frac{1}{2}e^{-|x|},
> \qquad
> -\infty<x<+\infty.
> \nonumber
> $$
>
> 求 $Y=|X|$ 的概率密度。
>
> **题解：**
>
> 当 $y<0$ 时，$F_Y(y)=0$。
>
> 当 $y\ge 0$ 时，
>
> $$
> \begin{aligned}
> F_Y(y)
> &=
> P\{Y\le y\}\\
> &=
> P\{|X|\le y\}\\
> &=
> \int_{-y}^{y}\frac{1}{2}e^{-|x|}\,dx\\
> &=
> 2\int_0^y\frac{1}{2}e^{-x}\,dx\\
> &=
> 1-e^{-y}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_Y(y)
> =
> \begin{cases}
> e^{-y}, & y>0,\\[4pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$

#### （2）公式法

设 $y=g(x)$ 在 $X$ 的正概率密度区间上单调，值域为 $[\alpha,\beta]$，反函数为

$$
x=h(y). \nonumber
$$

则 $Y$ 的概率密度为

$$
f_Y(y)=
\begin{cases}
f_X(h(y))\left|h'(y)\right|,& \alpha\le y\le \beta,\\
0,& \text{其他}.
\end{cases}
\nonumber
$$

若 $y=g(x)$ 在 $X$ 的正概率密度区间上**分段严格单调**，则分段使用公式法，然后将概率密度相加。

### 二、$F(X)$

设 $X$ 为连续型随机变量，分布函数为 $F(x)$。在常见连续且可作变换的情形下，

$$
Y=F(X)\sim U(0,1). \nonumber
$$

证明如下：

设随机变量 $X$ 的分布函数 $F_X(x)$ 严格单增。令

$$
\begin{aligned}
Y
&=
F_X(X).
\end{aligned}
\nonumber
$$

则 $Y$ 服从区间 $[0,1]$ 上的均匀分布。

当 $y<0$ 时，$F_Y(y)=0$；当 $y>1$ 时，$F_Y(y)=1$。

当 $0\le y\le 1$ 时，由 $F_X(x)$ 严格单增可知其反函数也严格单增，因此

$$
\begin{aligned}
F_Y(y)
&=
P\{Y\le y\}\\
&=
P\{F_X(X)\le y\}\\
&=
P\{X\le F_X^{-1}(y)\}\\
&=
F_X(F_X^{-1}(y))\\
&=
y.
\end{aligned}
\nonumber
$$

于是

$$
F_Y(y)
=
\begin{cases}
0, & y<0,\\[4pt]
y, & 0\le y<1,\\[4pt]
1, & y\ge 1.
\end{cases}
\nonumber
$$

从而

$$
f_Y(y)
=
\begin{cases}
1, & 0<y<1,\\[4pt]
0, & \text{其他}.
\end{cases}
\nonumber
$$

因此

$$
\begin{aligned}
Y
&\sim U(0,1).
\end{aligned}
\nonumber
$$

---

> [!question] 题目
> 【例 2.31】设 $X\sim U(-1,2)$，求 $Y=|X|$ 的概率密度。
>
> **题解：**
>
> 因为 $X\sim U(-1,2)$，所以 $f_X(x)=\dfrac{1}{3}$，$-1<x<2$。
>
> 当 $y<0$ 时，$F_Y(y)=0$；当 $y>2$ 时，$F_Y(y)=1$。
>
> 当 $0\le y\le 1$ 时，
>
> $$
> \begin{aligned}
> F_Y(y)
> &=
> P\{|X|\le y\}\\
> &=
> P\{-y\le X\le y\}\\
> &=
> \frac{2y}{3}.
> \end{aligned}
> \nonumber
> $$
>
> 当 $1<y\le 2$ 时，
>
> $$
> \begin{aligned}
> F_Y(y)
> &=
> P\{-1\le X\le y\}\\
> &=
> \frac{y+1}{3}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_Y(y)
> =
> \begin{cases}
> \dfrac{2}{3}, & 0<y<1,\\[6pt]
> \dfrac{1}{3}, & 1<y<2,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$

---

> [!question] 题目
> 【例 2.32】设 $X\sim N(1,4)$，求 $Y=|X-1|$ 的概率密度。
>
> **题解：**
>
> 当 $y<0$ 时，$F_Y(y)=0$。
>
> 当 $y\ge 0$ 时，
>
> $$
> \begin{aligned}
> F_Y(y)
> &=
> P\{|X-1|\le y\}\\
> &=
> P\left\{
> \left|\frac{X-1}{2}\right|
> \le
> \frac{y}{2}
> \right\}\\
> &=
> 2\Phi\left(\frac{y}{2}\right)-1.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> f_Y(y)
> &=
> F_Y'(y)\\
> &=
> \varphi\left(\frac{y}{2}\right),
> \qquad y>0.
> \end{aligned}
> \nonumber
> $$
>
> 即
>
> $$
> f_Y(y)
> =
> \begin{cases}
> \varphi\left(\dfrac{y}{2}\right), & y>0,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$

