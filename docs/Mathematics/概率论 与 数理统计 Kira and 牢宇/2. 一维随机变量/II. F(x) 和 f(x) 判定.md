## $II.$ $F(x)$ 和 $f(x)$ 判定

### 一、各自

#### （1）运算

##### ① 线性组合

若 $F_1,F_2$ 均为分布函数，令

$$
\begin{aligned}
G(x)
&= aF_1(x)+bF_2(x).
\end{aligned}
\nonumber
$$

则 $G(x)$ 是分布函数的常用判定条件为

$$
\begin{aligned}
a &\ge 0,\\
b &\ge 0,\\
a+b &= 1.
\end{aligned}
\nonumber
$$

若 $f_1,f_2$ 均为概率密度，令

$$
\begin{aligned}
g(x)
&= af_1(x)+bf_2(x).
\end{aligned}
\nonumber
$$

则 $g(x)$ 是概率密度的常用判定条件为

$$
\begin{aligned}
a &\ge 0,\\
b &\ge 0,\\
a+b &= 1.
\end{aligned}
\nonumber
$$

核心判断：线性组合系数和是否为 $1$，并兼顾非负性。

##### ② 乘积

若 $F_1,F_2$ 均为分布函数，则

$$
F_1(x)F_2(x)
\nonumber
$$

一定是分布函数。

若 $f_1,f_2$ 均为概率密度，则

$$
f_1(x)f_2(x)
\nonumber
$$

不一定是概率密度。因为它不一定满足

$$
\displaystyle\int_{-\infty}^{+\infty}f_1(x)f_2(x)\,dx=1. \nonumber
$$

#### （2）复合

##### ① $F(x)$ 复合

若 $F(x)$ 为分布函数，则 $F(ax+b)$ 是否为分布函数，关键看 $ax+b$ 关于 $x$ 是否保持单调递增。常见结论为：

$$
F(ax+b)\text{ 是分布函数}\Longleftrightarrow a>0. \nonumber
$$

对于奇次幂复合，例如 $F(ax^3+b)$，通常看最高次项系数是否大于 $0$。

对于偶次幂复合，例如 $F(ax^2+b)$、$F(ax^4+b)$，一般不是分布函数，因为当 $x\to-\infty$ 与 $x\to+\infty$ 时，内层函数趋向同一侧，通常不能满足分布函数的两端极限要求。

对于 $1-F(-x)$，它不一定是分布函数。若 $X$ 为连续型随机变量，则 $F(x)$ 连续，此时 $1-F(-x)$ 是分布函数。

##### ② $f(x)$ 复合

若 $f(x)$ 为概率密度，则 $f(ax+b)$ 是否为概率密度，关键看积分规范性：

$$
\displaystyle\int_{-\infty}^{+\infty}f(ax+b)\,dx=\frac{1}{|a|}. \nonumber
$$

因此

$$
f(ax+b)\text{ 是概率密度}\Longleftrightarrow |a|=1. \nonumber
$$

核心判断：系数绝对值是否为 $1$。

### 二、混搭

若表达式中混合出现分布函数 $F$ 与概率密度 $f$，不能仅凭形式判断其为概率密度，仍需回到概率密度的两个充要条件：

$$
\begin{align}
	f(x)&\ge 0,\\
\displaystyle\int_{-\infty}^{+\infty}f(x)\,dx &= 1. \nonumber
\end{align}
$$
