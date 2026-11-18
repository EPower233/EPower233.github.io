## $III.$ 概率密度

### 一、联合概率密度

#### 联合概率密度的定义

设二维随机变量 $(X,Y)$ 的联合分布函数为 $F(x,y)$。若存在非负可积函数 $f(x,y)$，对任意实数 $x,y$，有

$$
\begin{aligned}
F(x,y)
&=
\displaystyle\int_{-\infty}^{x}
\displaystyle\int_{-\infty}^{y}
f(u,v)\,dv\,du,
\end{aligned}
\nonumber
$$

则称 $(X,Y)$ 为二维连续型随机变量，称 $f(x,y)$ 为 $(X,Y)$ 的联合概率密度，简称概率密度。

若 $f(x,y)$ 连续，则有

$$
\begin{aligned}
\frac{\partial^2 F(x,y)}{\partial x\partial y}
&=
f(x,y).
\end{aligned}
\nonumber
$$

联合概率密度可以看成联合分布函数的二阶混合偏导。

> [!question] 题目
> 【例 3.7】设二维随机变量 $(X,Y)$ 的分布函数为
>
> $$
> \begin{aligned}
> F(x,y)
> &=
> A\left(B+\arctan\frac{x}{2}\right)
> \left(C+\arctan\frac{y}{3}\right).
> \end{aligned}
> \nonumber
> $$
>
> 求 $(X,Y)$ 的概率密度。
>
> **题解：**
>
> 由分布函数边界条件，
>
> $$
> \begin{aligned}
> F(+\infty,+\infty)
> &=
> A\left(B+\frac{\pi}{2}\right)
> \left(C+\frac{\pi}{2}\right)
> =
> 1,\\
> F(x,-\infty)
> &=
> A\left(B+\arctan\frac{x}{2}\right)
> \left(C-\frac{\pi}{2}\right)
> =
> 0,\\
> F(-\infty,y)
> &=
> A\left(B-\frac{\pi}{2}\right)
> \left(C+\arctan\frac{y}{3}\right)
> =
> 0.
> \end{aligned}
> \nonumber
> $$
>
> 故 $B=C=\dfrac{\pi}{2}$，再由 $F(+\infty,+\infty)=1$ 得 $A=\dfrac{1}{\pi^2}$。
>
> 因此
>
> $$
> \begin{aligned}
> F(x,y)
> &=
> \frac{1}{\pi^2}
> \left(\frac{\pi}{2}+\arctan\frac{x}{2}\right)
> \left(\frac{\pi}{2}+\arctan\frac{y}{3}\right).
> \end{aligned}
> \nonumber
> $$
>
> 概率密度为
>
> $$
> \begin{aligned}
> f(x,y)
> &=
> \frac{\partial^2 F(x,y)}{\partial x\partial y}\\
> &=
> \frac{1}{\pi^2}
> \cdot
> \frac{2}{4+x^2}
> \cdot
> \frac{3}{9+y^2}\\
> &=
> \frac{6}{\pi^2(4+x^2)(9+y^2)}.
> \end{aligned}
> \nonumber
> $$

#### 联合概率密度的性质

联合概率密度满足非负性：

$$
\begin{aligned}
f(x,y) &\ge 0,\\
x&\in\mathbb R,\\
y&\in\mathbb R.
\end{aligned}
\nonumber
$$

满足规范性：

$$
\begin{aligned}
\displaystyle\int_{-\infty}^{+\infty}
\displaystyle\int_{-\infty}^{+\infty}
f(x,y)\,dx\,dy
&=1.
\end{aligned}
\nonumber
$$

若 $D$ 为平面区域，则

$$
\begin{aligned}
P\{(X,Y)\in D\}
&=
\displaystyle\iint_D f(x,y)\,dx\,dy.
\end{aligned}
\nonumber
$$

> PS: **非负性与规范性**是判断联合概率密度的**充要条件**；区域积分用于计算二维随机变量落入某个区域内的概率。

#### 常用套路

求 $(X,Y)$ 取值落在区域 $D$ 内的概率时，将 $X,Y$ 分别改写为 $x,y$，对联合概率密度作二重积分：

$$
\begin{aligned}
P\{(X,Y)\in D\}
&=
\displaystyle\iint_D f(x,y)\,dx\,dy.
\end{aligned}
\nonumber
$$

实际计算时，核心步骤为：

1. 先确定区域 $D$；
2. 再根据区域 $D$ 写出积分上下限；
3. 最后对联合概率密度 $f(x,y)$ 作二重积分。

$$
\boxed{\begin{aligned}
\text{求 }(X,Y)\text{ 取值概率}
&\Longrightarrow
\text{对联合概率密度作二重积分}.
\end{aligned}}
\nonumber
$$

> [!question] 题目
> 设二维连续型随机变量 $(X,Y)$ 的概率密度为
>
> $$
> f(x,y)
> =
> \begin{cases}
> Cxy, & 0\le x\le 1,\ 0\le y\le 1,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求：
>
> （1）常数 $C$；
>
> （2）$P\{X+Y<1\}$；
>
> （3）分布函数 $F(x,y)$。
>
> **题解：**
>
> 由规范性可得
>
> $$
> \begin{aligned}
> \int_0^1\int_0^1 Cxy\,dy\,dx
> &=
> 1,\\
> C\int_0^1x\,dx\int_0^1y\,dy
> &=
> 1,\\
> C\cdot\frac{1}{2}\cdot\frac{1}{2}
> &=
> 1.
> \end{aligned}
> \nonumber
> $$
>
> 故 $C=4$，于是
>
> $$
> f(x,y)
> =
> \begin{cases}
> 4xy, & 0\le x\le 1,\ 0\le y\le 1,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 计算 $P\{X+Y<1\}$ 时，积分区域为单位正方形内直线 $x+y=1$ 下方的三角形区域，因此
>
> $$
> \begin{aligned}
> P\{X+Y<1\}
> &=
> \int_0^1\int_0^{1-x}4xy\,dy\,dx\\
> &=
> \int_0^1
> 4x\cdot\frac{(1-x)^2}{2}\,dx\\
> &=
> 2\int_0^1x(1-x)^2\,dx\\
> &=
> 2\int_0^1(x-2x^2+x^3)\,dx\\
> &=
> 2\left(
> \frac{1}{2}
> -
> \frac{2}{3}
> +
> \frac{1}{4}
> \right)\\
> &=
> \frac{1}{6}.
> \end{aligned}
> \nonumber
> $$
>
> 下面求分布函数。由定义，
>
> $$
> \begin{aligned}
> F(x,y)
> &=
> P\{X\le x,\ Y\le y\}\\
> &=
> \int_{-\infty}^{x}
> \int_{-\infty}^{y}
> f(u,v)\,dv\,du.
> \end{aligned}
> \nonumber
> $$
>
> 由于 $f(u,v)$ 只在正方形区域 $0\le u\le 1,\ 0\le v\le 1$ 内非零，因此需要根据点 $(x,y)$ 相对于该正方形的位置分类。
>
> 若 $x<0$ 或 $y<0$，积分区域与密度非零区域没有交集，所以
>
> $$
> \begin{aligned}
> F(x,y)
> &=
> 0.
> \end{aligned}
> \nonumber
> $$
>
> 若 $0\le x<1,\ 0\le y<1$，积分区域为矩形 $[0,x]\times[0,y]$，所以
>
> $$
> \begin{aligned}
> F(x,y)
> &=
> \int_0^x\int_0^y4uv\,dv\,du\\
> &=
> 4\int_0^xu\,du\int_0^yv\,dv\\
> &=
> 4\cdot\frac{x^2}{2}\cdot\frac{y^2}{2}\\
> &=
> x^2y^2.
> \end{aligned}
> \nonumber
> $$
>
> 若 $0\le x<1,\ y\ge 1$，纵向已经覆盖完整区间 $0\le v\le 1$，横向只覆盖到 $x$，所以
>
> $$
> \begin{aligned}
> F(x,y)
> &=
> \int_0^x\int_0^14uv\,dv\,du\\
> &=
> 4\int_0^xu\,du\int_0^1v\,dv\\
> &=
> 4\cdot\frac{x^2}{2}\cdot\frac{1}{2}\\
> &=
> x^2.
> \end{aligned}
> \nonumber
> $$
>
> 若 $x\ge 1,\ 0\le y<1$，横向已经覆盖完整区间 $0\le u\le 1$，纵向只覆盖到 $y$，所以
>
> $$
> \begin{aligned}
> F(x,y)
> &=
> \int_0^1\int_0^y4uv\,dv\,du\\
> &=
> 4\int_0^1u\,du\int_0^yv\,dv\\
> &=
> 4\cdot\frac{1}{2}\cdot\frac{y^2}{2}\\
> &=
> y^2.
> \end{aligned}
> \nonumber
> $$
>
> 若 $x\ge 1,\ y\ge 1$，积分区域已经覆盖整个密度非零区域，所以
>
> $$
> \begin{aligned}
> F(x,y)
> &=
> \int_0^1\int_0^14uv\,dv\,du\\
> &=
> 1.
> \end{aligned}
> \nonumber
> $$
>
> 综上，
>
> $$
> F(x,y)
> =
> \begin{cases}
> 0, & x<0\text{ 或 }y<0,\\[6pt]
> x^2y^2, & 0\le x<1,\ 0\le y<1,\\[6pt]
> x^2, & 0\le x<1,\ y\ge 1,\\[6pt]
> y^2, & x\ge 1,\ 0\le y<1,\\[6pt]
> 1, & x\ge 1,\ y\ge 1.
> \end{cases}
> \nonumber
> $$

### 二、边缘概率密度

#### 边缘概率密度的定义

设二维随机变量 $(X,Y)$ 的联合概率密度为 $f(x,y)$，分别称

$$
\begin{aligned}
f_X(x)
&=
\displaystyle\int_{-\infty}^{+\infty}
f(x,y)\,dy
\end{aligned}
\nonumber
$$

和

$$
\begin{aligned}
f_Y(y)
&=
\displaystyle\int_{-\infty}^{+\infty}
f(x,y)\,dx
\end{aligned}
\nonumber
$$

为 $(X,Y)$ 关于 $X$ 和 $Y$ 的边缘概率密度。

$$
\boxed{\begin{aligned}
\text{求 }X\text{ 的边缘密度}
&\Longrightarrow
\text{联合概率密度对 }y\text{ 积分},\\
\text{求 }Y\text{ 的边缘密度}
&\Longrightarrow
\text{联合概率密度对 }x\text{ 积分}.
\end{aligned}}
\nonumber
$$

#### 边缘概率密度的理解

联合概率密度 $f(x,y)$ 描述的是二维随机变量 $(X,Y)$ 在平面区域中的分布情况。

求边缘概率密度，本质上是把二维密度压缩成一维密度。

因此：

$$
\begin{aligned}
f_X(x)
&=
\text{固定 }x\text{ 后，对所有可能的 }y\text{ 求和},\\
f_Y(y)
&=
\text{固定 }y\text{ 后，对所有可能的 }x\text{ 求和}.
\end{aligned}
\nonumber
$$

连续型随机变量中，“求和”对应积分，所以有

$$
\begin{aligned}
f_X(x)
&=
\displaystyle\int f(x,y)\,dy,\\
f_Y(y)
&=
\displaystyle\int f(x,y)\,dx.
\end{aligned}
\nonumber
$$

#### 求边缘概率密度的步骤

求 $X$ 的边缘概率密度时：

1. 先确定 $x$ 的取值范围；
2. 固定一个 $x$；
3. 沿 $y$ 轴方向穿过联合密度的正区域；
4. 根据穿过区域确定 $y$ 的积分范围；
5. 对 $y$ 积分。

即

$$
\begin{aligned}
f_X(x)
&=
\displaystyle\int_{\text{对应的 }y\text{ 范围}}
f(x,y)\,dy.
\end{aligned}
\nonumber
$$

求 $Y$ 的边缘概率密度时：

1. 先确定 $y$ 的取值范围；
2. 固定一个 $y$；
3. 沿 $x$ 轴方向穿过联合密度的正区域；
4. 根据穿过区域确定 $x$ 的积分范围；
5. 对 $x$ 积分。

即

$$
\begin{aligned}
f_Y(y)
&=
\displaystyle\int_{\text{对应的 }x\text{ 范围}}
f(x,y)\,dx.
\end{aligned}
\nonumber
$$

thus

$$
\begin{aligned}
\text{联合概率密度}
&\Longrightarrow
\text{边缘概率密度},\\
\text{二维积分}
&\Longrightarrow
\text{一维积分}.
\end{aligned}
\nonumber
$$

$$
\begin{aligned}
\text{求 }X\text{ 边缘}
&\Longrightarrow
\text{对 }y\text{ 积分},\\
\text{求 }Y\text{ 边缘}
&\Longrightarrow
\text{对 }x\text{ 积分}.
\end{aligned}
\nonumber
$$

> [!question] 题目
> 【例 3.9】设二维连续型随机变量 $(X,Y)$ 的概率密度为
>
> $$
> f(x,y)
> =
> \begin{cases}
> kxy, & 0\le x\le y\le 1,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求：
>
> （1）常数 $k$；
>
> （2）边缘概率密度 $f_X(x)$ 与 $f_Y(y)$。
>
> **题解：**
>
> 由规范性可得
>
> $$
> \begin{aligned}
> \int_0^1\int_x^1 kxy\,dy\,dx
> &=
> 1,\\
> \frac{k}{2}
> \int_0^1 x(1-x^2)\,dx
> &=
> 1,\\
> \frac{k}{8}
> &=
> 1.
> \end{aligned}
> \nonumber
> $$
>
> 故 $k=8$。
>
> 对 $0<x<1$，有
>
> $$
> \begin{aligned}
> f_X(x)
> &=
> \int_x^1 8xy\,dy\\
> &=
> 4x(1-x^2).
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_X(x)
> =
> \begin{cases}
> 4x(1-x^2), & 0<x<1,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 对 $0<y<1$，有
>
> $$
> \begin{aligned}
> f_Y(y)
> &=
> \int_0^y 8xy\,dx\\
> &=
> 4y^3.
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
> 4y^3, & 0<y<1,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$

---

> [!question] 题目
> 【例 3.10】设二维随机变量 $(X,Y)$ 服从 $G$ 上的均匀分布，其中 $G$ 是由 $x-y=0$、$x+y=2$ 与 $y=0$ 围成的三角形区域。求边缘概率密度 $f_X(x)$。
>
> **题解：**
>
> 区域 $G$ 的面积为 $1$，所以
>
> $$
> f(x,y)
> =
> \begin{cases}
> 1, & (x,y)\in G,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 由区域 $G$ 可知，固定 $x$ 时，
>
> $$
> 0<y<
> \begin{cases}
> x, & 0<x<1,\\[4pt]
> 2-x, & 1<x<2.
> \end{cases}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> f_X(x)
> &=
> \int_{-\infty}^{+\infty}f(x,y)\,dy\\
> &=
> \begin{cases}
> \displaystyle\int_0^x 1\,dy, & 0<x<1,\\[8pt]
> \displaystyle\int_0^{2-x}1\,dy, & 1<x<2,\\[8pt]
> 0, & \text{其他}
> \end{cases}\\
> &=
> \begin{cases}
> x, & 0<x<1,\\[6pt]
> 2-x, & 1<x<2,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \end{aligned}
> \nonumber
> $$

---

> [!question] 题目
> 【例 3.14】设二维随机变量 $(X,Y)$ 的概率密度为
>
> $$
> f(x,y)
> =
> \begin{cases}
> 3e^{-(x+3y)}, & x>0,\ y>0,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 分别求 $X$ 和 $Y$ 的边缘概率密度 $f_X(x),f_Y(y)$。
>
> **题解：**
>
> 对 $x>0$，
>
> $$
> \begin{aligned}
> f_X(x)
> &=
> \int_0^{+\infty}3e^{-(x+3y)}\,dy\\
> &=
> e^{-x}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_X(x)
> =
> \begin{cases}
> e^{-x}, & x>0,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 对 $y>0$，
>
> $$
> \begin{aligned}
> f_Y(y)
> &=
> \int_0^{+\infty}3e^{-(x+3y)}\,dx\\
> &=
> 3e^{-3y}.
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
> 3e^{-3y}, & y>0,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
> 

这道题两变量是[独立的](./IV.%20随机变量的独立性#随机变量相互独立的定义)。
### 三、条件概率密度

#### 条件概率密度的定义

设二维随机变量 $(X,Y)$ 的联合概率密度为 $f(x,y)$。

称

$$
\begin{aligned}
f_{X\mid Y}(x\mid y)
&=
\frac{f(x,y)}{f_Y(y)}
\end{aligned}
\nonumber
$$

为在 $Y=y$ 的条件下，$X$ 的条件概率密度。

称

$$
\begin{aligned}
f_{Y\mid X}(y\mid x)
&=
\frac{f(x,y)}{f_X(x)}
\end{aligned}
\nonumber
$$

为在 $X=x$ 的条件下，$Y$ 的条件概率密度。

因此，条件概率密度可以理解为：

$$
\begin{aligned}
\text{条件概率密度}
&=
\frac{\text{联合概率密度}}{\text{对应边缘概率密度}}.
\end{aligned}
\nonumber
$$

#### 求条件概率密度的基本流程

求条件概率密度时，通常先求边缘概率密度，再作比值：

$$
\begin{aligned}
\text{联合概率密度}
&\Longrightarrow
\text{边缘概率密度}\\
&\Longrightarrow
\text{条件概率密度}.
\end{aligned}
\nonumber
$$

即

$$
\begin{aligned}
f_{X\mid Y}(x\mid y)
&=
\frac{f(x,y)}{f_Y(y)},\\
f_{Y\mid X}(y\mid x)
&=
\frac{f(x,y)}{f_X(x)}.
\end{aligned}
\nonumber
$$

#### 两点注意

求 $f_{X\mid Y}(x\mid y)$ 时，分母是 $f_Y(y)$，因此**必须先保证**

$$
\begin{aligned}
f_Y(y)&>0.
\end{aligned}
\nonumber
$$

这一步用于确定 $y$ 的可取范围。

然后把 $y$ 看成常数，在联合密度的正区域内确定 $x$ 的可取范围。

$$
\begin{aligned}
f_{X\mid Y}(x\mid y)
&=
\begin{cases}
\dfrac{f(x,y)}{f_Y(y)},
& (x,y)\in D,\ f_Y(y)>0,\\[8pt]
0,
& \text{其他}.
\end{cases}
\end{aligned}
\nonumber
$$

求 $f_{Y\mid X}(y\mid x)$ 时，分母是 $f_X(x)$，因此必须先保证

$$
\begin{aligned}
f_X(x)&>0.
\end{aligned}
\nonumber
$$

这一步用于确定 $x$ 的可取范围。

然后把 $x$ 看成常数，在联合密度的正区域内确定 $y$ 的可取范围。

即

$$
\begin{aligned}
f_{Y\mid X}(y\mid x)
&=
\begin{cases}
\dfrac{f(x,y)}{f_X(x)},
& (x,y)\in D,\ f_X(x)>0,\\[8pt]
0,
& \text{其他}.
\end{cases}
\end{aligned}
\nonumber
$$

即

$$
\begin{aligned}
\text{已知 }Y=y\text{，求 }X\text{ 的条件密度}
&\Longrightarrow
\frac{f(x,y)}{f_Y(y)},\\
\text{已知 }X=x\text{，求 }Y\text{ 的条件密度}
&\Longrightarrow
\frac{f(x,y)}{f_X(x)}.
\end{aligned}
\nonumber
$$

> [!note]
> 对连续型随机变量，条件为 $X=x$ 时，由于 $P\{X=x\}=0$，应使用条件概率密度。
>
> 若对固定的 $x$，有 $f_X(x)>0$，则
>
> $$
> \begin{aligned}
> f_{Y|X}(y|x)
> &=
> \frac{f(x,y)}{f_X(x)}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> P\left\{Y\le \frac{1}{3}\mid X=\frac{1}{2}\right\}
> &=
> \int_{-\infty}^{1/3}
> f_{Y|X}\left(y\mid \frac{1}{2}\right)\,dy\\
> &=
> \int_{-\infty}^{1/3}
> \frac{f\left(\frac{1}{2},y\right)}
> {f_X\left(\frac{1}{2}\right)}
> \,dy.
> \end{aligned}
> \nonumber
> $$
>
> 若条件是一个事件，例如 $X\ge \dfrac{1}{2}$，则使用条件概率公式：
>
> $$
> \begin{aligned}
> P\left\{Y\le \frac{1}{3}\mid X\ge \frac{1}{2}\right\}
> &=
> \frac{
> P\left\{Y\le \frac{1}{3},\ X\ge \frac{1}{2}\right\}
> }{
> P\left\{X\ge \frac{1}{2}\right\}
> }\\
> &=
> \frac{
> P\left\{Y\le \frac{1}{3},\ X\ge \frac{1}{2}\right\}
> }{
> \displaystyle\int_{1/2}^{+\infty}f_X(x)\,dx
> }.
> \end{aligned}
> \nonumber
> $$

> [!question] 题目
> 【例 3.11】设二维连续型随机变量 $(X,Y)$ 的概率密度为
>
> $$
> f(x,y)
> =
> \begin{cases}
> 6, & 0<x^2<y<x<1,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求：
>
> （1）条件概率密度 $f_{Y|X}(y|x)$；
>
> （2）$P\left\{Y\le\dfrac{1}{3}\mid X=\dfrac{1}{2}\right\}$；
>
> （3）$P\left\{Y\le\dfrac{1}{3}\mid X>\dfrac{1}{2}\right\}$。
>
> **题解：**
>
> 先求 $X$ 的边缘概率密度。对 $0<x<1$，有
>
> $$
> \begin{aligned}
> f_X(x)
> &=
> \int_{x^2}^{x}6\,dy\\
> &=
> 6(x-x^2)\\
> &=
> 6x(1-x).
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_X(x)
> =
> \begin{cases}
> 6x(1-x), & 0<x<1,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 在 $0<x<1$ 条件下，
>
> $$
> f_{Y|X}(y|x)
> =
> \frac{f(x,y)}{f_X(x)}
> =
> \begin{cases}
> \dfrac{1}{x(1-x)}, & x^2<y<x,\\[8pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 当 $X=\dfrac{1}{2}$ 时，$\dfrac{1}{4}<Y<\dfrac{1}{2}$，且
>
> $$
> f_{Y|X}\left(y\mid \frac{1}{2}\right)
> =
> 4.
> \nonumber
> $$
>
> 所以
>
> $$
> \begin{aligned}
> P\left\{Y\le\frac{1}{3}\mid X=\frac{1}{2}\right\}
> &=
> \int_{1/4}^{1/3}4\,dy\\
> &=
> \frac{1}{3}.
> \end{aligned}
> \nonumber
> $$
>
> 对于 $P\left\{Y\le\dfrac{1}{3}\mid X>\dfrac{1}{2}\right\}$，先算分母：
>
> $$
> \begin{aligned}
> P\left\{X>\frac{1}{2}\right\}
> &=
> \int_{1/2}^{1}6x(1-x)\,dx\\
> &=
> \frac{1}{2}.
> \end{aligned}
> \nonumber
> $$
>
> 再算分子。由 $x^2<y\le\dfrac{1}{3}$ 得 $x<\dfrac{1}{\sqrt3}$，所以
>
> $$
> \begin{aligned}
> P\left\{Y\le\frac{1}{3},\ X>\frac{1}{2}\right\}
> &=
> \int_{1/2}^{1/\sqrt3}
> \int_{x^2}^{1/3}6\,dy\,dx\\
> &=
> \int_{1/2}^{1/\sqrt3}6\left(\frac{1}{3}-x^2\right)\,dx\\
> &=
> \frac{4}{3\sqrt3}-\frac{3}{4}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> P\left\{Y\le\frac{1}{3}\mid X>\frac{1}{2}\right\}
> &=
> \frac{
> \dfrac{4}{3\sqrt3}-\dfrac{3}{4}
> }{
> \dfrac{1}{2}
> }\\
> &=
> \frac{8\sqrt3}{9}-\frac{3}{2}.
> \end{aligned}
> \nonumber
> $$

> [!question] 题目
> 【例 3.12】已知随机变量 $X$ 的概率密度为
>
> $$
> f_X(x)
> =
> \begin{cases}
> 3x^2, & 0<x<1,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 在给定 $X=x$，其中 $0<x<1$ 的条件下，$Y$ 的条件概率密度为
>
> $$
> f_{Y|X}(y|x)
> =
> \begin{cases}
> \dfrac{3y^2}{x^3}, & 0<y<x,\\[8pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求 $(X,Y)$ 的联合概率密度。
>
> **题解：**
>
> 由条件密度公式，
>
> $$
> \begin{aligned}
> f(x,y)
> &=
> f_{Y|X}(y|x)\,f_X(x).
> \end{aligned}
> \nonumber
> $$
>
> 在 $0<y<x<1$ 时，
>
> $$
> \begin{aligned}
> f(x,y)
> &=
> \frac{3y^2}{x^3}\cdot 3x^2\\
> &=
> \frac{9y^2}{x}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f(x,y)
> =
> \begin{cases}
> \dfrac{9y^2}{x}, & 0<y<x<1,\\[8pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$

