## $V.$ 二维均匀分布

设二维随机变量 $(X,Y)$ 的联合概率密度为

$$
f(x,y)=
\begin{cases}
\dfrac{1}{S_D},& (x,y)\in D,\\[6pt]
0,& \text{其他},
\end{cases}
\nonumber
$$

称 $(X,Y)$ 服从区域 $D$ 上的均匀分布，记作

$$
(X,Y)\sim U(D).
\nonumber
$$

其中 $S_D$ 表示区域 $D$ 的面积。

由规范性可得：

$$
\displaystyle\iint_D c\,dx\,dy
=
cS_D
=
1,
\nonumber
$$

因此

$$
c=\frac{1}{S_D}.
\nonumber
$$

若 $D=[a,b]\times[c,d]$，则

$$
(X,Y)\sim U([a,b]\times[c,d]).
\nonumber
$$

此时

$$
\begin{align}
	f(x,y)=
\frac{1}{(b-a)(d-c)},
\\ (x,y)\in [a,b]\times[c,d].
\nonumber
\end{align}
$$

并且

$$
\begin{align}
	X\sim U(a,b),
\\
Y\sim U(c,d),
\nonumber
\end{align}
$$

且 $X$ 与 $Y$ **相互独立**。

> [!question] 题目
> 【例 3.17】设随机变量 $X$ 与 $Y$ 相互独立，且都在区间 $(0,1)$ 上随机取值，求
>
> $$
> P\{X^2+Y^2\le 1\}.
> \nonumber
> $$
>
> **题解：**
>
> 因为 $X,Y$ 相互独立，且 $X\sim U(0,1)$，$Y\sim U(0,1)$，所以 $(X,Y)$ 在单位正方形
>
> $$
> D=\{\,(x,y)\mid 0<x<1,\ 0<y<1\,\}
> \nonumber
> $$
>
> 上均匀分布。
>
> 事件 $X^2+Y^2\le 1$ 对应单位正方形中的四分之一圆区域，因此
>
> $$
> \begin{aligned}
> P\{X^2+Y^2\le 1\}
> &=
> \frac{\pi}{4}.
> \end{aligned}
> \nonumber
> $$

---

> [!question] 题目
> 【例 3.18】设随机变量 $(X,Y)$ 在圆域 $x^2+y^2\le r^2$ 上服从均匀分布，问 $X$ 与 $Y$ 是否独立？
>
> **题解：**
>
> 联合密度为
>
> $$
> f(x,y)
> =
> \begin{cases}
> \dfrac{1}{\pi r^2}, & x^2+y^2\le r^2,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 对 $-r<x<r$，
>
> $$
> \begin{aligned}
> f_X(x)
> &=
> \int_{-\sqrt{r^2-x^2}}^{\sqrt{r^2-x^2}}
> \frac{1}{\pi r^2}\,dy\\
> &=
> \frac{2}{\pi r^2}\sqrt{r^2-x^2}.
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
> \dfrac{2}{\pi r^2}\sqrt{r^2-x^2}, & -r<x<r,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 同理
>
> $$
> f_Y(y)
> =
> \begin{cases}
> \dfrac{2}{\pi r^2}\sqrt{r^2-y^2}, & -r<y<r,\\[6pt]
> 0, & \text{其他}.
> \end{cases}
> \nonumber
> $$
>
> 显然 $f(x,y)\ne f_X(x)f_Y(y)$，故 $X,Y$ 不独立。

