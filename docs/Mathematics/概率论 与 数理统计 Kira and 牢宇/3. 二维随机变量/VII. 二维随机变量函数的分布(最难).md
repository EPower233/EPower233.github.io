## $VII.$ 二维随机变量函数的分布

### 一、!!!二维连续型随机变量函数的分布

设二维随机变量 $(X,Y)$ 的联合概率密度为 $f(x,y)$，求

$$
\begin{aligned}
Z
&=g(X,Y)
\end{aligned}
\nonumber
$$

的概率密度。

记联合概率密度的正概率密度区域为

$$
\begin{aligned}
D
&=\{\,(x,y)\mid f(x,y)>0\,\}.
\end{aligned}
\nonumber
$$

求 $Z=g(X,Y)$ 的分布，本质上是把 $(X,Y)$ 平面上的概率密度，通过函数 $g$ 投影到一维随机变量 $Z$ 上。

---

#### （一）分布函数法

分布函数法是最通用的方法，通常分为三步。

##### 第一步：设 $Z$ 的分布函数

设 $Z$ 的分布函数为 $F_Z(z)$，则

$$
\begin{aligned}
F_Z(z)
&=P\{Z\le z\}\\
&=P\{g(X,Y)\le z\}.
\end{aligned}
\nonumber
$$

由于 $(X,Y)$ 的联合概率密度为 $f(x,y)$，故

$$
\begin{aligned}
F_Z(z)
&=
\displaystyle\iint_{g(x,y)\le z} f(x,y)\,dx\,dy.
\end{aligned}
\nonumber
$$

更严谨地说，积分区域应同时满足联合密度的正区域条件，即

$$
\begin{aligned}
F_Z(z)
&=
\displaystyle\iint_{D_z} f(x,y)\,dx\,dy,
\end{aligned}
\nonumber
$$

其中

$$
\begin{aligned}
D_z
&=
\{\,(x,y)\in D\mid g(x,y)\le z\,\}.
\end{aligned}
\nonumber
$$

即：先把事件 $Z\le z$ 转化为平面区域 $g(x,y)\le z$，再对该区域上的联合概率密度作二重积分。

##### 第二步：求 $Z=g(X,Y)$ 的取值范围

在联合概率密度的正区域 $D$ 内，求 $g(x,y)$ 的值域。设该值域为

$$
\begin{aligned}
\alpha
&\le z\le \beta.
\end{aligned}
\nonumber
$$

则分布函数通常分段为

$$
\begin{aligned}
F_Z(z)
&=
\begin{cases}
0,
& z<\alpha,\\[6pt]
\displaystyle\iint_{g(x,y)\le z} f(x,y)\,dx\,dy,
& \alpha\le z<\beta,\\[10pt]
1,
& z\ge \beta.
\end{cases}
\end{aligned}
\nonumber
$$

若 $Z$ 的取值范围不是有限区间，则将 $\alpha,\beta$ 相应替换为 $-\infty,+\infty$。

##### 第三步：对分布函数求导

若 $F_Z(z)$ 可导，则 $Z$ 的概率密度为

$$
\begin{aligned}
f_Z(z)
&=F_Z'(z).
\end{aligned}
\nonumber
$$

核心流程:

$$
\begin{aligned}
Z=g(X,Y)
&\Longrightarrow
F_Z(z)=P\{g(X,Y)\le z\}\\
&\Longrightarrow
\text{转化为平面区域上的二重积分}\\
&\Longrightarrow
f_Z(z)=F_Z'(z).
\end{aligned}
\nonumber
$$

##### 图像法辅助理解

使用分布函数法时，常配合图像法：

1. 先画出联合密度的正区域 $D$；
2. 再画出边界曲线 $g(x,y)=z$；
3. 判断不等式 $g(x,y)\le z$ 对应的区域；
4. 将该区域写成二重积分；
5. 最后对 $z$ 求导。

即：

$$
\begin{aligned}
\text{画 }(x,y)\text{ 区域}
&\Longrightarrow
\text{把 }z\text{ 当参数}\\
&\Longrightarrow
\text{确定积分区域}\\
&\Longrightarrow
\text{求 }F_Z(z)\\
&\Longrightarrow
\text{求 }f_Z(z).
\end{aligned}
\nonumber
$$


> [!question] 题目
> 【例 3.24】设二维连续型随机变量 $(X,Y)$ 的概率密度为
>
> $$
> f(x,y)
> =
> \begin{cases}
> e^{-y}, & 0<x<1,\ y>0,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求 $Z=2X+Y$ 的概率密度 $f_Z(z)$。
>
> **题解：**
>
> 由公式法，令 $y=z-2x$，则
>
> $$
> \begin{aligned}
> f_Z(z)
> &=
> \int_{-\infty}^{+\infty}f(x,z-2x)\,dx.
> \end{aligned}
> \nonumber
> $$
>
> 积分区间由
>
> $$
> \begin{aligned}
> 0<x<1,
> \qquad
> z-2x>0
> \end{aligned}
> \nonumber
> $$
>
> 决定，即
>
> $$
> \begin{aligned}
> 0<x<\min\left(1,\frac{z}{2}\right).
> \end{aligned}
> \nonumber
> $$
>
> 当 $0<z<2$ 时，
>
> $$
> \begin{aligned}
> f_Z(z)
> &=
> \int_0^{z/2}e^{-(z-2x)}\,dx\\
> &=
> \frac{1}{2}(1-e^{-z}).
> \end{aligned}
> \nonumber
> $$
>
> 当 $z\ge 2$ 时，
>
> $$
> \begin{aligned}
> f_Z(z)
> &=
> \int_0^1e^{-(z-2x)}\,dx\\
> &=
> \frac{e^2-1}{2e^z}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_Z(z)
> =
> \begin{cases}
> \dfrac{1}{2}(1-e^{-z}), & 0<z<2,\\[8pt]
> \dfrac{e^2-1}{2e^z}, & z\ge 2,\\[8pt]
> 0, & z\le 0.
> \end{cases}
> \nonumber
> $$

> [!question] 题目
> 【例 3.25】设 $X,Y$ 相互独立，且 $X\sim E(1)$，$Y\sim E(1)$。令 $Z=\dfrac{Y}{X}$，求 $Z$ 的概率密度 $f_Z(z)$。
>
> **题解：**
>
> 令 $y=xz$，则
>
> $$
> \begin{aligned}
> f_Z(z)
> &=
> \int_{-\infty}^{+\infty}|x|f(x,xz)\,dx.
> \end{aligned}
> \nonumber
> $$
>
> 由于 $x>0$，$y=xz>0$，故必须有 $z>0$。当 $z>0$ 时，
>
> $$
> \begin{aligned}
> f_Z(z)
> &=
> \int_0^{+\infty}x e^{-(x+xz)}\,dx\\
> &=
> \int_0^{+\infty}x e^{-x(1+z)}\,dx\\
> &=
> \frac{1}{(1+z)^2}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_Z(z)
> =
> \begin{cases}
> \dfrac{1}{(1+z)^2}, & z>0,\\[8pt]
> 0, & z\le 0.
> \end{cases}
> \nonumber
> $$

> [!question] 题目
> 【例 3.26】设 $X,Y$ 相互独立，且 $X\sim U(0,2)$，$Y\sim U(0,2)$。令 $Z=XY$，求 $Z$ 的概率密度 $f_Z(z)$。
>
> **题解：**
>
> 此时
>
> $$
> f(x,y)
> =
> \begin{cases}
> \dfrac{1}{4}, & 0<x<2,\ 0<y<2,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 令 $y=\dfrac{z}{x}$，则
>
> $$
> \begin{aligned}
> f_Z(z)
> &=
> \int_{-\infty}^{+\infty}
> \frac{1}{|x|}
> f\left(x,\frac{z}{x}\right)\,dx.
> \end{aligned}
> \nonumber
> $$
>
> 积分区间由
>
> $$
> \begin{aligned}
> 0<x<2,
> \qquad
> 0<\frac{z}{x}<2
> \end{aligned}
> \nonumber
> $$
>
> 决定。因此当 $0<z<4$ 时，有 $\dfrac{z}{2}<x<2$。
>
> 所以
>
> $$
> \begin{aligned}
> f_Z(z)
> &=
> \int_{z/2}^{2}
> \frac{1}{x}\cdot\frac{1}{4}\,dx\\
> &=
> \frac{1}{4}\ln\frac{4}{z}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_Z(z)
> =
> \begin{cases}
> \dfrac{1}{4}\ln\dfrac{4}{z}, & 0<z<4,\\[8pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$

> [!question] 题目
> 【例 3.27】设二维连续型随机变量 $(X,Y)$ 的概率密度为
>
> $$
> f(x,y)
> =
> \frac{1}{2\pi\sigma^2}
> e^{-\frac{x^2+y^2}{2\sigma^2}},
> \qquad
> -\infty<x,y<+\infty.
> \nonumber
> $$
>
> 求 $Z=X^2+Y^2$ 的概率密度 $f_Z(z)$。
>
> **题解：**
>
> 令
>
> $$
> \begin{cases}
> x=\sqrt z\cos\theta,\\
> y=\sqrt z\sin\theta,
> \end{cases}
> \qquad
> z>0,\ 0\le\theta<2\pi.
> \nonumber
> $$
>
> 则
>
> $$
> \begin{aligned}
> \left|
> \frac{\partial(x,y)}{\partial(z,\theta)}
> \right|
> &=
> \frac{1}{2}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> f_Z(z)
> &=
> \int_0^{2\pi}
> \frac{1}{2\pi\sigma^2}
> e^{-\frac{z}{2\sigma^2}}
> \cdot
> \frac{1}{2}
> \,d\theta\\
> &=
> \frac{1}{2\sigma^2}
> e^{-\frac{z}{2\sigma^2}}.
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> f_Z(z)
> =
> \begin{cases}
> \dfrac{1}{2\sigma^2}e^{-\frac{z}{2\sigma^2}}, & z>0,\\[8pt]
> 0, & z\le 0.
> \end{cases}
> \nonumber
> $$

---

#### （二）卷积公式

卷积公式可以看作分布函数法的快捷公式。使用时应先确认联合概率密度 $f(x,y)$，再根据 $Z=g(X,Y)$ 的形式套用对应公式。

先尝试理解它的合理性

##### 1. 线性组合：$Z=aX+bY$

若

$$
\begin{aligned}
Z
&=aX+bY,
\end{aligned}
\nonumber
$$

且 $b\ne 0$，则由

$$
\begin{aligned}
z
&=ax+by
\end{aligned}
\nonumber
$$

可得

$$
\begin{aligned}
y
&=\frac{z-ax}{b}.
\end{aligned}
\nonumber
$$

于是

$$
\begin{aligned}
f_Z(z)
&=
\displaystyle\int_{-\infty}^{+\infty}
\frac{1}{|b|}
f\left(x,\frac{z-ax}{b}\right)\,dx.
\end{aligned}
\nonumber
$$

若 $a\ne 0$，也可以由

$$
\begin{aligned}
x
&=\frac{z-by}{a}
\end{aligned}
\nonumber
$$

得到另一种写法：

$$
\begin{aligned}
f_Z(z)
&=
\displaystyle\int_{-\infty}^{+\infty}
\frac{1}{|a|}
f\left(\frac{z-by}{a},y\right)\,dy.
\end{aligned}
\nonumber
$$

特别地，若

$$
\begin{aligned}
Z&=X+Y,
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
f_Z(z)
&=
\displaystyle\int_{-\infty}^{+\infty}
f(x,z-x)\,dx\\
&=
\displaystyle\int_{-\infty}^{+\infty}
f(z-y,y)\,dy.
\end{aligned}
\nonumber
$$

若

$$
\begin{aligned}
Z&=X-Y,
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
f_Z(z)
&=
\displaystyle\int_{-\infty}^{+\infty}
f(x,x-z)\,dx\\
&=
\displaystyle\int_{-\infty}^{+\infty}
f(z+y,y)\,dy.
\end{aligned}
\nonumber
$$

##### 2. 乘积：$Z=XY$

若

$$
\begin{aligned}
Z
&=XY,
\end{aligned}
\nonumber
$$

则由

$$
\begin{aligned}
z
&=xy
\end{aligned}
\nonumber
$$

可得

$$
\begin{aligned}
y
&=\frac{z}{x}.
\end{aligned}
\nonumber
$$

于是

$$
\begin{aligned}
f_Z(z)
&=
\displaystyle\int_{-\infty}^{+\infty}
\frac{1}{|x|}
f\left(x,\frac{z}{x}\right)\,dx.
\end{aligned}
\nonumber
$$

也可以写为

$$
\begin{aligned}
f_Z(z)
&=
\displaystyle\int_{-\infty}^{+\infty}
\frac{1}{|y|}
f\left(\frac{z}{y},y\right)\,dy.
\end{aligned}
\nonumber
$$

其中 $\dfrac{1}{|x|}$ 或 $\dfrac{1}{|y|}$ 来自变量变换的雅可比因子。

##### 3. 商：$Z=\dfrac{Y}{X}$ 与 $Z=\dfrac{X}{Y}$

若

$$
\begin{aligned}
Z
&=\frac{Y}{X},
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
y
&=zx.
\end{aligned}
\nonumber
$$

因此

$$
\begin{aligned}
f_Z(z)
&=
\displaystyle\int_{-\infty}^{+\infty}
|x|\,f(x,zx)\,dx.
\end{aligned}
\nonumber
$$

若

$$
\begin{aligned}
Z
&=\frac{X}{Y},
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
x
&=zy.
\end{aligned}
\nonumber
$$

因此

$$
\begin{aligned}
f_Z(z)
&=
\displaystyle\int_{-\infty}^{+\infty}
|y|\,f(zy,y)\,dy.
\end{aligned}
\nonumber
$$

##### 4. 绝对差：$Z=|X-Y|$

若

$$
\begin{aligned}
Z
&=|X-Y|,
\end{aligned}
\nonumber
$$

则 $z$ 的取值范围为

$$
\begin{aligned}
z&\ge 0.
\end{aligned}
\nonumber
$$

当 $z\ge 0$ 时，由

$$
\begin{aligned}
|X-Y|=z
\end{aligned}
\nonumber
$$

可得两种情况：

$$
\begin{aligned}
X-Y&=z,\\
X-Y&=-z.
\end{aligned}
\nonumber
$$

即

$$
\begin{aligned}
y&=x-z,\\
y&=x+z.
\end{aligned}
\nonumber
$$

所以 $Z=|X-Y|$ 的概率密度为

$$
\begin{aligned}
f_Z(z)
&=
\begin{cases}
\displaystyle
\int_{-\infty}^{+\infty} f(x,x+z)\,dx
+
\int_{-\infty}^{+\infty} f(x,x-z)\,dx,
& z\ge 0,\\[12pt]
0,
& z<0.
\end{cases}
\end{aligned}
\nonumber
$$

即 $|X-Y|$ 的密度来自两条直线：

$$
\begin{aligned}
y&=x+z,\\
y&=x-z.
\end{aligned}
\nonumber
$$

---

#### （三）使用卷积公式时的注意事项

##### 1. 先确定 $z$ 的取值范围

在使用公式前，应先根据

$$
\begin{aligned}
z
&=g(x,y)
\end{aligned}
\nonumber
$$

以及联合密度的正区域 $D$，确定 $Z$ 的取值范围。

即：

$$
\begin{aligned}
z
&\in
\{\,g(x,y)\mid (x,y)\in D\,\}.
\end{aligned}
\nonumber
$$

##### 2. 再确定积分变量的取值范围

虽然公式中常写积分范围为

$$
\begin{aligned}
-\infty<x<+\infty,
\end{aligned}
\nonumber
$$

但实际计算时，只有满足

$$
\begin{aligned}
(x,y)\in D
\end{aligned}
\nonumber
$$

的部分才有贡献。

因此，计算时应把代入后的点重新放回联合密度的正区域中判断。

例如线性组合中，若

$$
\begin{aligned}
y
&=\frac{z-ax}{b},
\end{aligned}
\nonumber
$$

则需要满足

$$
\begin{aligned}
\left(x,\frac{z-ax}{b}\right)
&\in D.
\end{aligned}
\nonumber
$$

由此确定 $x$ 的真实积分范围。

##### 3. 卷积公式的本质

卷积公式并不是新方法，而是分布函数法经过变量变换后的结果。

其本质为：

$$
\begin{aligned}
\text{固定 }z
&\Longrightarrow
\text{沿曲线 }g(x,y)=z\text{ 积分}\\
&\Longrightarrow
\text{得到 }Z\text{ 的概率密度}.
\end{aligned}
\nonumber
$$

因此，若公式不熟，仍可回到分布函数法：

$$
\begin{aligned}
F_Z(z)
&=P\{g(X,Y)\le z\}\\
&=
\displaystyle\iint_{g(x,y)\le z} f(x,y)\,dx\,dy,
\end{aligned}
\nonumber
$$

再对 $z$ 求导得到 $f_Z(z)$。


> [!question] 题目
> 【例 3.24】设二维连续型随机变量 $(X,Y)$ 的概率密度为
>
> $$
> f(x,y)
> =
> \begin{cases}
> e^{-y}, & 0<x<1,\ y>0,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 求 $Z=2X+Y$ 的概率密度 $f_Z(z)$。
>
> **题解：**
>
> 由分布函数法，
>
> $$
> \begin{aligned}
> F_Z(z)
> &=
> P\{Z<z\}\\
> &=
> P\{2X+Y<z\}.
> \end{aligned}
> \nonumber
> $$
>
> 当 $z\le 0$ 时，因 $2X+Y>0$，故 $F_Z(z)=0$。
>
> 当 $0<z<2$ 时，由 $y<z-2x$ 可知 $0<x<\dfrac{z}{2}$，故
>
> $$
> \begin{aligned}
> F_Z(z)
> &=
> \int_0^{z/2}\int_0^{z-2x}e^{-y}\,dy\,dx\\
> &=
> \int_0^{z/2}(1-e^{2x-z})\,dx\\
> &=
> \frac{z}{2}
> +
> \frac{1}{2}e^{-z}
> -
> \frac{1}{2}.
> \end{aligned}
> \nonumber
> $$
>
> 当 $z\ge 2$ 时，横向已经覆盖 $0<x<1$，故
>
> $$
> \begin{aligned}
> F_Z(z)
> &=
> \int_0^1\int_0^{z-2x}e^{-y}\,dy\,dx\\
> &=
> \int_0^1(1-e^{2x-z})\,dx\\
> &=
> 1-\frac{e^2-1}{2e^z}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> F_Z(z)
> =
> \begin{cases}
> 0, & z\le 0,\\[6pt]
> \dfrac{z}{2}+\dfrac{1}{2}e^{-z}-\dfrac{1}{2}, & 0<z<2,\\[10pt]
> 1-\dfrac{e^2-1}{2e^z}, & z\ge 2.
> \end{cases}
> \nonumber
> $$
>
> 对 $F_Z(z)$ 求导，得
>
> $$
> f_Z(z)
> =
> \begin{cases}
> \dfrac{1}{2}(1-e^{-z}), & 0<z<2,\\[8pt]
> \dfrac{e^2-1}{2e^z}, & z\ge 2,\\[8pt]
> 0, & z\le 0.
> \end{cases}
> \nonumber
> $$

> [!question] 题目
> 【例 3.25】设 $X,Y$ 相互独立，且 $X\sim E(1)$，$Y\sim E(1)$。令 $Z=\dfrac{Y}{X}$，求 $Z$ 的概率密度 $f_Z(z)$。
>
> **题解：**
>
> 由分布函数法，
>
> $$
> \begin{aligned}
> F_Z(z)
> &=
> P\{Z<z\}\\
> &=
> P\left\{\frac{Y}{X}<z\right\}.
> \end{aligned}
> \nonumber
> $$
>
> 因为 $X>0$，$Y>0$，所以当 $z\le 0$ 时，$F_Z(z)=0$。
>
> 当 $z>0$ 时，由 $\dfrac{Y}{X}<z$ 得 $0<y<zx$，故
>
> $$
> \begin{aligned}
> F_Z(z)
> &=
> \int_0^{+\infty}\int_0^{zx}e^{-(x+y)}\,dy\,dx\\
> &=
> \int_0^{+\infty}e^{-x}(1-e^{-zx})\,dx\\
> &=
> 1-\frac{1}{1+z}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> F_Z(z)
> =
> \begin{cases}
> 1-\dfrac{1}{1+z}, & z>0,\\[8pt]
> 0, & z\le 0.
> \end{cases}
> \nonumber
> $$
>
> 对 $F_Z(z)$ 求导，得
>
> $$
> f_Z(z)
> =
> \begin{cases}
> \dfrac{1}{(1+z)^2}, & z>0,\\[8pt]
> 0, & z\le 0.
> \end{cases}
> \nonumber
> $$

> [!question] 题目
> 【例 3.26】设 $X,Y$ 相互独立，且 $X\sim U(0,2)$，$Y\sim U(0,2)$。令 $Z=XY$，求 $Z$ 的概率密度 $f_Z(z)$。
>
> **题解：**
>
> 此时
>
> $$
> f(x,y)
> =
> \begin{cases}
> \dfrac{1}{4}, & 0<x<2,\ 0<y<2,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 由分布函数法，
>
> $$
> \begin{aligned}
> F_Z(z)
> &=
> P\{XY<z\}.
> \end{aligned}
> \nonumber
> $$
>
> 因为 $0<X<2$，$0<Y<2$，所以 $0<XY<4$。
>
> 当 $z\le 0$ 时，$F_Z(z)=0$；当 $z\ge 4$ 时，$F_Z(z)=1$。
>
> 当 $0<z<4$ 时，用补集计算。区域 $XY>z$ 满足
>
> $$
> \begin{aligned}
> \frac{z}{2}<x<2,
> \qquad
> \frac{z}{x}<y<2.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> F_Z(z)
> &=
> 1-\frac{1}{4}
> \int_{z/2}^{2}
> \int_{z/x}^{2}
> dy\,dx\\
> &=
> 1-\frac{1}{4}
> \int_{z/2}^{2}
> \left(2-\frac{z}{x}\right)dx\\
> &=
> \frac{z}{4}
> \left(1+\ln\frac{4}{z}\right).
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> F_Z(z)
> =
> \begin{cases}
> 0, & z\le 0,\\[6pt]
> \dfrac{z}{4}\left(1+\ln\dfrac{4}{z}\right), & 0<z<4,\\[10pt]
> 1, & z\ge 4.
> \end{cases}
> \nonumber
> $$
>
> 对 $F_Z(z)$ 求导，得
>
> $$
> f_Z(z)
> =
> \begin{cases}
> \dfrac{1}{4}\ln\dfrac{4}{z}, & 0<z<4,\\[8pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$

> [!question] 题目
> 【例 3.27】设二维连续型随机变量 $(X,Y)$ 的概率密度为
>
> $$
> f(x,y)
> =
> \frac{1}{2\pi\sigma^2}
> e^{-\frac{x^2+y^2}{2\sigma^2}},
> \qquad
> -\infty<x,y<+\infty.
> \nonumber
> $$
>
> 求 $Z=X^2+Y^2$ 的概率密度 $f_Z(z)$。
>
> **题解：**
>
> 由分布函数法，
>
> $$
> \begin{aligned}
> F_Z(z)
> &=
> P\{Z<z\}\\
> &=
> P\{X^2+Y^2<z\}.
> \end{aligned}
> \nonumber
> $$
>
> 当 $z\le 0$ 时，$F_Z(z)=0$。
>
> 当 $z>0$ 时，积分区域为圆盘 $x^2+y^2<z$。换用极坐标，得
>
> $$
> \begin{aligned}
> F_Z(z)
> &=
> \int_0^{2\pi}
> \int_0^{\sqrt z}
> \frac{1}{2\pi\sigma^2}
> e^{-\frac{r^2}{2\sigma^2}}
> r\,dr\,d\theta\\
> &=
> 1-e^{-\frac{z}{2\sigma^2}}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> F_Z(z)
> =
> \begin{cases}
> 1-e^{-\frac{z}{2\sigma^2}}, & z>0,\\[8pt]
> 0, & z\le 0.
> \end{cases}
> \nonumber
> $$
>
> 对 $F_Z(z)$ 求导，得
>
> $$
> f_Z(z)
> =
> \begin{cases}
> \dfrac{1}{2\sigma^2}e^{-\frac{z}{2\sigma^2}}, & z>0,\\[8pt]
> 0, & z\le 0.
> \end{cases}
> \nonumber
> $$

### 二、一离散一连续型随机变量函数的分布

已知离散型随机变量 $X$ 的概率分布与连续型随机变量 $Y$ 的概率密度，求

$$
Z=g(X,Y)
\nonumber
$$

的分布。

通常使用分布函数法，或由**全概率公式**，对 $X$ 的所有可能取值展开计算。

### 三、最值函数的分布

设 $X_1,X_2,\cdots,X_n$ 相互独立，分布函数分别为

$$
F_{X_1}(x),F_{X_2}(x),\cdots,F_{X_n}(x).
\nonumber
$$

则

$$
\max\{X_1,X_2,\cdots,X_n\}
\nonumber
$$

的分布函数为

$$
\begin{aligned}
F_{\max}(x)
&=
P\{\max(X_1,X_2,\cdots,X_n)\le x\}\\
&=
P\{X_1\le x,\ X_2\le x,\ \cdots,\ X_n\le x\}\\
&=
P\{X_1\le x\}P\{X_2\le x\}\cdots P\{X_n\le x\}\\
&=
F_{X_1}(x)F_{X_2}(x)\cdots F_{X_n}(x) \\
&=
\prod_{i=1}^nF_{X_{i}}(x).
\end{aligned}
\nonumber
$$

而

$$
\min\{X_1,X_2,\cdots,X_n\}
\nonumber
$$

的分布函数为

$$
\begin{aligned}
F_{\min}(x)
&=
P\{\min(X_1,X_2,\cdots,X_n)\le x\}\\
&=
1-P\{\min(X_1,X_2,\cdots,X_n)>x\}\\
&=
1-P\{X_1>x,\ X_2>x,\ \cdots,\ X_n>x\}\\
&=
1-P\{X_1>x\}P\{X_2>x\}\cdots P\{X_n>x\}\\
&=
1-[1-F_{X_1}(x)][1-F_{X_2}(x)]\cdots[1-F_{X_n}(x)]\\
&=
1-\prod_{i=1}^n[1-F_{X_{i}}(x)]
\end{aligned}
\nonumber
$$

特别地，若 $X_1,X_2,\cdots,X_n$ 相互独立且同分布，分布函数均为 $F(x)$，则

$$
F_{\max}(x)=[F(x)]^n,
\nonumber
$$

$$
F_{\min}(x)=1-[1-F(x)]^n.
\nonumber
$$

进一步可由分布函数求密度：

$$
f_{\max}(x)=F'_{\max}(x)
=
n[F(x)]^{n-1}f(x),
\nonumber
$$

$$
f_{\min}(x)=F'_{\min}(x)
=
n[1-F(x)]^{n-1}f(x).
\nonumber
$$

最大值、最小值的期望可写为

$$
E(X_{\max})
=
\displaystyle\int_{-\infty}^{+\infty}x f_{\max}(x)\,dx,
\nonumber
$$

$$
E(X_{\min})
=
\displaystyle\int_{-\infty}^{+\infty}x f_{\min}(x)\,dx.
\nonumber
$$

> [!important] 补充：平凡恒等式
> 对任意实数 $x,y$，有
>
> $$
> \begin{aligned}
> \max\{x,y\}
> &=
> \frac{x+y+|x-y|}{2},\\
> \min\{x,y\}
> &=
> \frac{x+y-|x-y|}{2}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \max\{x,y\}\min\{x,y\}
> &=
> \frac{x+y+|x-y|}{2}
> \cdot
> \frac{x+y-|x-y|}{2}\\
> &=
> \frac{(x+y)^2-|x-y|^2}{4}\\
> &=
> xy.
> \end{aligned}
> \nonumber
> $$
> 
> 原因是 $\max\{x,y\}$ 与 $\min\{x,y\}$ 只是把 $x,y$ 按大小重新排列，乘积不变。

---

> [!question] 题目
> 【例 3.29】设随机变量 $X,Y$ 独立同分布，且 $X$ 的分布函数为 $F(x)$，则 $Z=\max\{X,Y\}$ 的分布函数为（  ）。
>
> A. $F^2(z)$  
> B. $F(x)F(y)$  
> C. $1-[1-F(x)]^2$  
> D. $[1-F(x)][1-F(y)]$
>
> **题解：**
>
> $$
> \begin{aligned}
> F_Z(z)
> &=
> P\{Z\le z\}\\
> &=
> P\{X\le z,\ Y\le z\}\\
> &=
> F(z)F(z)\\
> &=
> F^2(z).
> \end{aligned}
> \nonumber
> $$
>
> 答案：A。

> [!question] 题目
> 【例 3.30】设随机变量 $X,Y$ 相互独立，且均服从区间 $[0,3]$ 上的均匀分布，求 $P\{\max\{X,Y\}\le 1\}.$
>
> **题解：**
>
> $$
> \begin{aligned}
> P\{\max\{X,Y\}\le 1\}
> &=
> P\{X\le 1,\ Y\le 1\}\\
> &=
> P\{X\le 1\}P\{Y\le 1\}\\
> &=
> \frac{1}{3}\cdot\frac{1}{3}\\
> &=
> \frac{1}{9}.
> \end{aligned}
> \nonumber
> $$

> [!question] 题目
> 【例 3.31】随机变量 $X$ 与 $Y$ 相互独立，且均服从参数为 $1$ 的指数分布，记 $V=\min\{X,Y\}$，求概率密度 $f_V(v)$。
>
> **题解：**
>
> 对 $v>0$，有
>
> $$
> \begin{aligned}
> F_V(v)
> &=
> P\{V\le v\}\\
> &=
> 1-P\{V>v\}\\
> &=
> 1-P\{X>v,\ Y>v\}\\
> &=
> 1-P\{X>v\}P\{Y>v\}\\
> &=
> 1-e^{-v}e^{-v}\\
> &=
> 1-e^{-2v}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_V(v)
> =
> \begin{cases}
> 2e^{-2v}, & v>0,\\[6pt]
> 0, & v\le 0.
> \end{cases}
> \nonumber
> $$


> [!important] 补充
> 若 $X_i\sim E(\lambda_i)$，且 $X_1,X_2,\ldots,X_k$ 相互独立，则
>
> $$
> \begin{aligned}
> \min\{X_1,X_2,\ldots,X_k\}
> &\sim
> E\left(\sum_{i=1}^{k}\lambda_i\right).
> \end{aligned}
> \nonumber
> $$
> 

> [!question] 题目
> 【例 4.18】设 $X,Y$ 相互独立，且 $X\sim E(1)$，$Y\sim E(1)$。记
>
> $$
> \begin{aligned}
> U&=\max\{X,Y\},\\
> V&=\min\{X,Y\}.
> \end{aligned}
> \nonumber
> $$
>
> 求：
>
> （Ⅰ）$E(U)$；
>
> （Ⅱ）$E(V)$；
>
> （Ⅲ）$E(UV)$。
>
> **题解：**
>
> 因为 $X,Y\sim E(1)$，所以
>
> $$
> f_X(x)
> =
> \begin{cases}
> e^{-x}, & x>0,\\[6pt]
> 0, & x\le 0,
> \end{cases}
> \qquad
> F_X(x)
> =
> \begin{cases}
> 1-e^{-x}, & x>0,\\[6pt]
> 0, & x\le 0.
> \end{cases}
> \nonumber
> $$
>
> 同理，
>
> $$
> F_Y(y)
> =
> \begin{cases}
> 1-e^{-y}, & y>0,\\[6pt]
> 0, & y\le 0.
> \end{cases}
> \nonumber
> $$
>
> 对 $U=\max\{X,Y\}$，有
>
> $$
> \begin{aligned}
> F_U(u)
> &=
> P\{U\le u\}\\
> &=
> P\{X\le u,\ Y\le u\}\\
> &=
> F_X(u)F_Y(u).
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> F_U(u)
> =
> \begin{cases}
> (1-e^{-u})^2, & u>0,\\[6pt]
> 0, & u\le 0.
> \end{cases}
> \nonumber
> $$
>
> 对 $F_U(u)$ 求导，得
>
> $$
> f_U(u)
> =
> \begin{cases}
> 2(1-e^{-u})e^{-u}, & u>0,\\[6pt]
> 0, & u\le 0.
> \end{cases}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> E(U)
> &=
> \int_0^{+\infty}u\cdot 2(1-e^{-u})e^{-u}\,du\\
> &=
> 2\int_0^{+\infty}u(e^{-u}-e^{-2u})\,du\\
> &=
> 2\left(1-\frac{1}{4}\right)\\
> &=
> \frac{3}{2}.
> \end{aligned}
> \nonumber
> $$
>
> 对 $V=\min\{X,Y\}$，有
>
> $$
> \begin{aligned}
> F_V(v)
> &=
> P\{V\le v\}\\
> &=
> 1-P\{V>v\}\\
> &=
> 1-P\{X>v,\ Y>v\}\\
> &=
> 1-P\{X>v\}P\{Y>v\}.
> \end{aligned}
> \nonumber
> $$
>
> 当 $v>0$ 时，
>
> $$
> \begin{aligned}
> F_V(v)
> &=
> 1-e^{-v}e^{-v}\\
> &=
> 1-e^{-2v}.
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> F_V(v)
> =
> \begin{cases}
> 1-e^{-2v}, & v>0,\\[6pt]
> 0, & v\le 0.
> \end{cases}
> \nonumber
> $$
>
> 对 $F_V(v)$ 求导，得
>
> $$
> f_V(v)
> =
> \begin{cases}
> 2e^{-2v}, & v>0,\\[6pt]
> 0, & v\le 0.
> \end{cases}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> E(V)
> &=
> \int_0^{+\infty}v\cdot 2e^{-2v}\,dv\\
> &=
> 2\cdot\frac{1}{2^2}\\
> &=
> \frac{1}{2}.
> \end{aligned}
> \nonumber
> $$
>
> 对 $UV$，有
>
> $$
> \begin{aligned}
> \max\{X,Y\}\min\{X,Y\}
> &=
> \frac{(X+Y)^2-|X-Y|^2}{4}\\
> &=
> XY.
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> \begin{aligned}
> E(UV)
> &=
> E(XY).
> \end{aligned}
> \nonumber
> $$
>
> 又因为 $X,Y$ 相互独立，故
>
> $$
> \begin{aligned}
> E(XY)
> &=
> E(X)E(Y).
> \end{aligned}
> \nonumber
> $$
>
> 对参数为 $1$ 的指数分布，有
>
> $$
> \begin{aligned}
> E(X)
> &=
> \int_0^{+\infty}xe^{-x}\,dx\\
> &=
> 1.
> \end{aligned}
> \nonumber
> $$
>
> 同理 $E(Y)=1$，于是
>
> $$
> \begin{aligned}
> E(UV)
> &=
> E(X)E(Y)\\
> &=
> 1.
> \end{aligned}
> \nonumber
> $$
>
> 综上所述：
>
> $$
> \boxed{
> \begin{aligned}
> E(U)&=\frac{3}{2},\\
> E(V)&=\frac{1}{2},\\
> E(UV)&=1.
> \end{aligned}
> }
> \nonumber
> $$

