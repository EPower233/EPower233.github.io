## $I.$ 期望

### 一、定义

#### （1）一维离散

设随机变量 $X$ 的概率分布为 $P\{X=x_i\}=p_i,\quad (i=1,2,\cdots)$ ，若 $\displaystyle\sum_{k=1}^{\infty} x_i p_i$ 绝对收敛，则称其为数学期望。

推广：若

$$
Y=g(X),
\nonumber
$$

则

$$
EY=\sum_i g(x_i)p_i.
\nonumber
$$

也就是不必先求 $Y$ 的概率分布，可直接由 $X$ 的分布求 $Y$ 的期望。

常用步骤：

1. 求 $X$ 的期望：$X$ 取值乘概率再求和。
2. 求函数 $Y=g(X)$ 的期望：先写 $Y$ 的取值，再对应概率求和；也可直接用 $\sum_i g(x_i)p_i$。

#### （2）二维离散

设二维随机变量 $(X,Y)$ 的联合概率分布为

$$
P\{X=x_i,\ Y=y_j\}=p_{ij},
\qquad i,j=1,2,\cdots.
\nonumber
$$

若

$$
Z=g(X,Y),
\nonumber
$$

则

$$
EZ=\sum_i\sum_j g(x_i,y_j)p_{ij}.
\nonumber
$$

常用步骤：

1. 求 $X,Y$ 函数 $Z$ 的期望：$Z$ 取值乘概率再求和。
2. 可先求 $Z$ 的概率分布，再求期望；也可直接用联合分布计算。

#### （3）一维连续

设随机变量 $X$ 的概率密度为 $f(x)$，则

$$
EX=\displaystyle\int_{-\infty}^{+\infty}x f(x)\,dx.
\nonumber
$$

推广：若

$$
Y=g(X),
\nonumber
$$

则

$$
EY=\displaystyle\int_{-\infty}^{+\infty}g(x)f(x)\,dx.
\nonumber
$$

常用步骤：

1. 求 $X$ 的期望：将 $X$ 改写为 $x$，乘 $X$ 的概率密度再积分。
2. 求函数 $Y=g(X)$ 的期望：将 $X$ 改写为 $x$，函数照抄，乘 $X$ 的概率密度再积分。

#### （4）二维连续

设二维随机变量 $(X,Y)$ 的联合概率密度为 $f(x,y)$，若

$$
Z=g(X,Y),
\nonumber
$$

则

$$
EZ
=
\displaystyle\int_{-\infty}^{+\infty}
\displaystyle\int_{-\infty}^{+\infty}
g(x,y)f(x,y)\,dx\,dy.
\nonumber
$$

特别地，

$$
EX
=
\displaystyle\int_{-\infty}^{+\infty}
\displaystyle\int_{-\infty}^{+\infty}
x f(x,y)\,dx\,dy,
\nonumber
$$

$$
EY
=
\displaystyle\int_{-\infty}^{+\infty}
\displaystyle\int_{-\infty}^{+\infty}
y f(x,y)\,dx\,dy.
\nonumber
$$

常用步骤：

1. 求 $(X,Y)$ 的函数期望：将 $X,Y$ 改写为 $x,y$，函数照抄，乘联合概率密度作二重积分。
2. 求 $X$ 的期望时，把 $X$ 看成 $X+0Y$，即把它当作 $(X,Y)$ 的函数，转化为上面的形式。



> [!question] 题目
> 【例 4.1】设随机变量 $X$ 的分布律为
>
> $$
> X\sim
> \begin{pmatrix}
> -2 & 0 & 2\\
> \dfrac{4}{10} & \dfrac{3}{10} & \dfrac{3}{10}
> \end{pmatrix},
> \nonumber
> $$
>
> 求 $EX,E(3X^2+5)$。
>
> **题解：**
>
> $$
> \begin{aligned}
> EX
> &=
> -2\cdot\frac{4}{10}
> +
> 0\cdot\frac{3}{10}
> +
> 2\cdot\frac{3}{10}\\
> &=
> -\frac{1}{5}.
> \end{aligned}
> \nonumber
> $$
>
> $$
> \begin{aligned}
> E(3X^2+5)
> &=
> 3E(X^2)+5\\
> &=
> 3\left[
> (-2)^2\cdot\frac{4}{10}
> +
> 0^2\cdot\frac{3}{10}
> +
> 2^2\cdot\frac{3}{10}
> \right]
> +
> 5\\
> &=
> \frac{67}{5}.
> \end{aligned}
> \nonumber
> $$

---

> [!question] 题目
> 【例 4.3】设随机变量 $X$ 的概率密度为
>
> $$
> f(x)
> =
> \begin{cases}
> \dfrac{3}{8}x^2, & 0<x<2,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求 $E\left(\dfrac{1}{X^2}\right)$。
>
> **题解：**
>
> $$
> \begin{aligned}
> E\left(\frac{1}{X^2}\right)
> &=
> \int_0^2
> \frac{1}{x^2}\cdot\frac{3}{8}x^2\,dx\\
> &=
> \frac{3}{8}\int_0^2dx\\
> &=
> \frac{3}{4}.
> \end{aligned}
> \nonumber
> $$

---

> [!question] 题目
> 【例 4.2】设随机变量 $X$ 的概率密度为
>
> $$
> f(x)
> =
> \begin{cases}
> e^{-x}, & x>0,\\[6pt]
> 0, & x\le 0.
> \end{cases}
> \nonumber
> $$
>
> 求：
>
> （1）$EX$；
>
> （2）$Y=e^{-2X}$ 的数学期望 $EY$；
>
> （3）$Z=\max\{X,1\}$ 的数学期望 $EZ$。
>
> **题解：**
>
> 因为 $X\sim E(1)$，所以
>
> $$
> \begin{aligned}
> EX
> &=
> \int_0^{+\infty}xe^{-x}\,dx\\
> &=
> 1.
> \end{aligned}
> \nonumber
> $$
>
> $$
> \begin{aligned}
> EY
> &=
> E(e^{-2X})\\
> &=
> \int_0^{+\infty}e^{-2x}e^{-x}\,dx\\
> &=
> \int_0^{+\infty}e^{-3x}\,dx\\
> &=
> \frac{1}{3}.
> \end{aligned}
> \nonumber
> $$
>
> 又因为
>
> $$
> \max\{X,1\}
> =
> \begin{cases}
> 1, & 0<X<1,\\
> X, & X\ge 1,
> \end{cases}
> \nonumber
> $$
>
> 所以
>
> $$
> \begin{aligned}
> EZ
> &=
> \int_0^{+\infty}\max\{x,1\}e^{-x}\,dx\\
> &=
> \int_0^1e^{-x}\,dx
> +
> \int_1^{+\infty}xe^{-x}\,dx\\
> &=
> 1-e^{-1}+2e^{-1}\\
> &=
> 1+e^{-1}.
> \end{aligned}
> \nonumber
> $$
>
> > [!important] 注意
> > $Z=\max\{X,1\}$ 在 $1$ 处有正概率质量，因此 $Z$ 不是连续型随机变量，不能直接当作有普通概率密度的连续型随机变量处理。


---

> [!question] 题目
> 【例 4.4】设随机变量 $X$ 的概率密度为
>
> $$
> f(x)
> =
> \frac{1}{\pi(1+x^2)},
> \qquad
> -\infty<x<+\infty,
> \nonumber
> $$
>
> 求 $EX$。
>
> **题解：**
>
> 先判断数学期望是否存在。考察绝对期望：
>
> $$
> \begin{aligned}
> E|X|
> &=
> \int_{-\infty}^{+\infty}|x|f(x)\,dx\\
> &=
> \int_{-\infty}^{+\infty}
> \frac{|x|}{\pi(1+x^2)}\,dx\\
> &=
> \frac{2}{\pi}
> \int_0^{+\infty}
> \frac{x}{1+x^2}\,dx.
> \end{aligned}
> \nonumber
> $$
>
> 而
>
> $$
> \begin{aligned}
> \int_0^{+\infty}
> \frac{x}{1+x^2}\,dx
> &=
> \frac{1}{2}
> \left[\ln(1+x^2)\right]_0^{+\infty}\\
> &=
> +\infty.
> \end{aligned}
> \nonumber
> $$
>
> 因此 $E|X|$ 发散，$EX$ 不存在。
>
> > [!important] 注意
> > 不能直接利用奇函数对称性写 $EX=0$。
> >
> > 虽然形式上
> >
> > $$
> > \begin{aligned}
> > \int_{-\infty}^{+\infty}
> > \frac{x}{\pi(1+x^2)}\,dx
> > \end{aligned}
> > \nonumber
> > $$
> >
> > 看起来是奇函数在对称区间上的积分，但该积分不是绝对收敛积分。数学期望要求正部和负部积分至少有一个有限；这里两侧分别发散，所以 $EX$ 不存在。

### 二、性质

#### 线性性质

$$
E(aX+bY+c)=aEX+bEY+c.
\nonumber
$$

#### 乘积性质

若 $X$ 与 $Y$ 不相关，则

$$
E(XY)=EX\cdot EY.
\nonumber
$$

特别地，若 $X$ 与 $Y$ 相互独立，则

$$
E(XY)=EX\cdot EY.
\nonumber
$$

> 独立一定不相关，但不相关不一定独立。

线性组合的期望可直接拆开：

$$
E(aX+bY+c)=aEX+bEY+c.
\nonumber
$$

乘积的期望等于期望的乘积，**充要条件为不相关**；**独立是更强条件**。

### 三、利用随机变量的轮换对称性求期望

若 $X$ 与 $Y$ 同分布，则 $X,Y$ 有相同的分布函数、期望和方差等数字特征。

因此，若表达式关于 $X,Y$ 具有轮换对称性，可利用

$$
EX=EY
\nonumber
$$

化简求解。

例如，若 $X,Y$ 同分布，则

$$
E\left(\frac{X^2}{X^2+Y^2}\right)
=
E\left(\frac{Y^2}{X^2+Y^2}\right).
\nonumber
$$

又因为

$$
\frac{X^2}{X^2+Y^2}
+
\frac{Y^2}{X^2+Y^2}
=
1,
\nonumber
$$

所以

$$
E\left(\frac{X^2}{X^2+Y^2}\right)
=
\frac12.
\nonumber
$$

### 四、利用最大最小值函数 $U,V$ 的积与和求期望

设

$$
U=\max\{X,Y\},
\qquad
V=\min\{X,Y\}.
\nonumber
$$

则

$$
U+V=X+Y,
\nonumber
$$

$$
UV=XY.
\nonumber
$$

因此

$$
EU+EV=E(U+V)=E(X+Y)=EX+EY,
\nonumber
$$

> 这里可以使用平凡恒等式证明.

$$
E(UV)=E(XY).
\nonumber
$$

在涉及最大值、最小值的期望问题中，常用 $U+V=X+Y$ 与 $UV=XY$ 进行转化。

### 五、分布函数的线性组合求期望

设 $X_1,X_2$ 的分布函数分别为 $F_1(x),F_2(x)$，若随机变量 $X$ 的分布函数为

$$
\begin{align}
F(x)=aF_1(x)+bF_2(x),
\\ a>0, b>0,\\ a+b=1,
\nonumber
\end{align}
$$

则

$$
EX=aEX_1+bEX_2.
\nonumber
$$

若一个分布函数是两个分布函数的线性组合，则其期望也是对应两个期望的线性组合。
