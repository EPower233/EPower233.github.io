## $I.$ 分布函数

> 对于此章的题目，判定积分范围总是需要多加练习的。

**赏综合题一枚：** ψ(｀∇´)ψ

> [!question] 题目
> 【例 3.16】设二维连续型随机变量 $(X,Y)$ 的概率密度为
>
> $$
> f(x,y)
> =
> \begin{cases}
> Ae^{-(x+y)}, & 0<x<y,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求：
>
> （1）常数 $A$；
>
> （2）$P\left\{X+Y>1,\ X<\dfrac{1}{2}\right\}$；
>
> （3）边缘概率密度 $f_X(x),f_Y(y)$；
>
> （4）条件概率密度 $f_{Y|X}(y|x)$；
>
> （5）判断 $X,Y$ 的独立性。
>
> **题解：**
>
> 先看非零区域：
>
> $$
> \begin{aligned}
> D
> &=
> \{\,(x,y)\mid 0<x<y\,\}.
> \end{aligned}
> \nonumber
> $$
>
> 即 $x>0$，且 $y$ 在直线 $y=x$ 的上方，所以对固定的 $x$，有 $y\in(x,+\infty)$。
>
> 由规范性可得
>
> $$
> \begin{aligned}
> \int_0^{+\infty}\int_x^{+\infty}Ae^{-(x+y)}\,dy\,dx
> &=
> 1.
> \end{aligned}
> \nonumber
> $$
>
> 计算得
>
> $$
> \begin{aligned}
> \int_0^{+\infty}\int_x^{+\infty}Ae^{-(x+y)}\,dy\,dx
> &=
> A\int_0^{+\infty}e^{-x}
> \left(
> \int_x^{+\infty}e^{-y}\,dy
> \right)dx\\
> &=
> A\int_0^{+\infty}e^{-x}e^{-x}\,dx\\
> &=
> A\int_0^{+\infty}e^{-2x}\,dx\\
> &=
> \frac{A}{2}.
> \end{aligned}
> \nonumber
> $$
>
> 因此 $A=2$。
>
> 于是
>
> $$
> f(x,y)
> =
> \begin{cases}
> 2e^{-(x+y)}, & 0<x<y,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求 $P\left\{X+Y>1,\ X<\dfrac{1}{2}\right\}$ 时，需要同时满足
>
> $$
> \begin{aligned}
> 0<x<y,
> \qquad
> x+y>1,
> \qquad
> 0<x<\frac{1}{2}.
> \end{aligned}
> \nonumber
> $$
>
> 由 $x+y>1$ 得 $y>1-x$。当 $0<x<\dfrac{1}{2}$ 时，有 $1-x>x$，所以真正的下界是 $y=1-x$，而不是 $y=x$。
>
> 因此积分范围为
>
> $$
> \begin{aligned}
> 0<x<\frac{1}{2},
> \qquad
> 1-x<y<+\infty.
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> \begin{aligned}
> P\left\{X+Y>1,\ X<\frac{1}{2}\right\}
> &=
> \int_0^{1/2}\int_{1-x}^{+\infty}
> 2e^{-(x+y)}\,dy\,dx\\
> &=
> 2\int_0^{1/2}e^{-x}
> \left(
> \int_{1-x}^{+\infty}e^{-y}\,dy
> \right)dx\\
> &=
> 2\int_0^{1/2}e^{-x}e^{-(1-x)}\,dx\\
> &=
> 2\int_0^{1/2}e^{-1}\,dx\\
> &=
> \frac{1}{e}.
> \end{aligned}
> \nonumber
> $$
>
> 求 $f_X(x)$ 时，固定 $x$，沿竖直方向看区域 $D$。只有当 $x>0$ 时才有非零密度，此时 $y$ 的范围为 $x<y<+\infty$。
>
> 因此
>
> $$
> \begin{aligned}
> f_X(x)
> &=
> \int_{-\infty}^{+\infty}f(x,y)\,dy\\
> &=
> \int_x^{+\infty}2e^{-(x+y)}\,dy\\
> &=
> 2e^{-x}\int_x^{+\infty}e^{-y}\,dy\\
> &=
> 2e^{-2x},
> \qquad x>0.
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> f_X(x)
> =
> \begin{cases}
> 2e^{-2x}, & x>0,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求 $f_Y(y)$ 时，固定 $y$，沿水平方向看区域 $D$。由 $0<x<y$ 可知，只有当 $y>0$ 时才有非零密度，此时 $x$ 的范围为 $0<x<y$。
>
> 因此
>
> $$
> \begin{aligned}
> f_Y(y)
> &=
> \int_{-\infty}^{+\infty}f(x,y)\,dx\\
> &=
> \int_0^y2e^{-(x+y)}\,dx\\
> &=
> 2e^{-y}\int_0^y e^{-x}\,dx\\
> &=
> 2e^{-y}(1-e^{-y})\\
> &=
> 2e^{-y}-2e^{-2y},
> \qquad y>0.
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> f_Y(y)
> =
> \begin{cases}
> 2e^{-y}-2e^{-2y}, & y>0,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 对于条件概率密度，在给定 $X=x$ 且 $x>0$ 的条件下，仍然需要满足原来的非零范围 $x<y$，所以 $y$ 的范围为 $y>x$。
>
> $$
> \begin{aligned}
> f_{Y|X}(y|x)
> &=
> \frac{f(x,y)}{f_X(x)}\\
> &=
> \frac{2e^{-(x+y)}}{2e^{-2x}}\\
> &=
> e^{x-y}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_{Y|X}(y|x)
> =
> \begin{cases}
> e^{x-y}, & x>0,\ y>x,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 最后判断独立性。若 $X,Y$ 相互独立，则应有 $f(x,y)=f_X(x)f_Y(y)$。
>
> 但在 $0<x<y$ 上，
>
> $$
> \begin{aligned}
> f_X(x)f_Y(y)
> &=
> 2e^{-2x}\left(2e^{-y}-2e^{-2y}\right),
> \end{aligned}
> \nonumber
> $$
>
> 与 $f(x,y)=2e^{-(x+y)}$ 不相等。因此 $X,Y$ 不独立。

### 一、联合分布函数

#### 联合分布函数的定义

设 $(X,Y)$ 为二维随机变量，对任意实数 $x,y$，称

$$
F(x,y)=P\{X\le x,\ Y\le y\} \nonumber
$$

为 $(X,Y)$ 的联合分布函数，表示 $\{X\le x,\ Y\le y\}$ 同时发生的概率。

#### 联合分布函数的性质

##### （1）有界性

$$
\begin{aligned}
0
&\le F(x,y)\le 1,\\
x&\in\mathbb R,\\
y&\in\mathbb R.
\end{aligned}
\nonumber
$$

##### （2）边界值

$$
\begin{aligned}
F(-\infty,y) &= 0,\\
F(x,-\infty) &= 0,\\
F(-\infty,-\infty) &= 0.
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
F(+\infty,+\infty)
&= 1.
\end{aligned}
\nonumber
$$

##### （3）关于 $x,y$ 单调不减

联合分布函数 $F(x,y)$ 关于 $x$ 单调不减，关于 $y$ 也单调不减。

##### （4）关于 $x,y$ 右连续

联合分布函数 $F(x,y)$ 关于 $x,y$ 右连续。（等号跟着大于走）

##### （5）矩形区域概率

对矩形区域

$$
a<X\le b,\qquad c<Y\le d,
\nonumber
$$

有

$$
P\{a<X\le b,\ c<Y\le d\}
=
F(b,d)-F(b,c)-F(a,d)+F(a,c). \nonumber
$$

$$
\boxed
{
  \begin{aligned}
    F(b,d)-F(b,c)-F(a,d)+F(a,c). \nonumber \\
    \text{大大}-\text{大小}-\text{小大}+\text{小小}.
  \end{aligned}
}
\nonumber
$$

$$


$$

> PS: 上述 1—5 条构成联合分布函数的**充要条件**。常见题型是判断一个函数能否构成联合分布函数，以及**求 $(X,Y)$ 落入矩形区域内的概率**。

### 二、边缘分布函数

#### $X$ 的边缘分布函数

称

$$
F_X(x)=P\{X\le x\} \nonumber
$$

为 $(X,Y)$ 关于 $X$ 的边缘分布函数。由联合分布函数可得

$$
F_X(x)
=
P\{X\le x,\ Y\le +\infty\}
=
F(x,+\infty). \nonumber
$$

#### $Y$ 的边缘分布函数

称

$$
F_Y(y)=P\{Y\le y\} \nonumber
$$

为 $(X,Y)$ 关于 $Y$ 的边缘分布函数。由联合分布函数可得

$$
F_Y(y)
=
P\{X\le +\infty,\ Y\le y\}
=
F(+\infty,y). \nonumber
$$

$$
\boxed{\begin{align}
X\text{ 边缘：令 }y\to+\infty;\nonumber\\
Y\text{ 边缘：令 }x\to+\infty.\nonumber
\end{align}
\nonumber}
$$

> [!question] 题目
> 【例 3.2】设随机变量 $(X,Y)$ 具有分布函数
>
> $$
> F(x,y)
> =
> \begin{cases}
> 1-2e^{-y}+e^{-2y}, & 0\le y\le x,\\[4pt]
> 1-2e^{-y}-e^{-2x}+2e^{-(x+y)}, & 0\le x<y,\\[4pt]
> 0, & x<0\text{ 或 }y<0.
> \end{cases}
> \nonumber
> $$
>
> 求边缘分布函数 $F_X(x)$ 和 $F_Y(y)$。
>
> **题解：**
>
> $$
> F_X(x)
> =
> \lim_{y\to+\infty}F(x,y)
> =
> \begin{cases}
> 1-e^{-2x}, & x\ge 0,\\[4pt]
> 0, & x<0.
> \end{cases}
> \nonumber
> $$
>
> $$
> F_Y(y)
> =
> \lim_{x\to+\infty}F(x,y)
> =
> \begin{cases}
> 1-2e^{-y}+e^{-2y}, & y\ge 0,\\[4pt]
> 0, & y<0.
> \end{cases}
> \nonumber
> $$
