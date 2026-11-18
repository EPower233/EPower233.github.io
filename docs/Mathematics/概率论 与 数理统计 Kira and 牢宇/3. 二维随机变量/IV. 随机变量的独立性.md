## $IV.$ 随机变量的独立性

#### 随机变量相互独立的定义

设二维随机变量 $(X,Y)$ 的联合分布函数为 $F(x,y)$，边缘分布函数分别为 $F_X(x)$ 和 $F_Y(y)$。若对任意实数 $x,y$，有

$$
F(x,y)=F_X(x)F_Y(y),
\nonumber
$$

则称随机变量 $X$ 与 $Y$ 相互独立。

即：

$$
X\text{ 与 }Y\text{ 相互独立}
\Longleftrightarrow
F(x,y)=F_X(x)F_Y(y).
\nonumber
$$

对于二维离散型随机变量，有

$$
X\text{ 与 }Y\text{ 相互独立}
\Longleftrightarrow
p_{ij}=p_{i\cdot}p_{\cdot j}.
\nonumber
$$

> [!question] 题目
> 【例 3.1】设随机变量 $(X,Y)$ 具有分布函数
>
> $$
> F(x,y)
> =
> \begin{cases}
> 1-e^{-x}-e^{-y}+e^{-x-y-\lambda xy}, & x\ge 0,\ y\ge 0,\\[6pt]
> 0, & \text{其他},
> \end{cases}
> \qquad \lambda>0.
> \nonumber
> $$
>
> （Ⅰ）求边缘分布函数 $F_X(x)$ 和 $F_Y(y)$。
>
> （Ⅱ）判断 $X$ 和 $Y$ 的独立性。
>
> **题解：**
>
> $$
> F_X(x)
> =
> \lim_{y\to+\infty}F(x,y)
> =
> \begin{cases}
> 1-e^{-x}, & x\ge 0,\\[4pt]
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
> 1-e^{-y}, & y\ge 0,\\[4pt]
> 0, & y<0.
> \end{cases}
> \nonumber
> $$
>
> 对 $x\ge 0,\ y\ge 0$，
>
> $$
> F_X(x)F_Y(y)
> =
> 1-e^{-x}-e^{-y}+e^{-x-y}.
> \nonumber
> $$
>
> 因为 $\lambda>0$ 时，$e^{-x-y-\lambda xy}\ne e^{-x-y}$ 一般成立，所以 $X$ 与 $Y$ 不独立。

还有依旧还[这题](./II.%20概率分布#tstt2r)

对于二维连续型随机变量，有

$$
X\text{ 与 }Y\text{ 相互独立}
\Longleftrightarrow
f(x,y)=f_X(x)f_Y(y).
\nonumber
$$

> PS: 若 $X$ 与 $Y$ 相互独立，$h,g$ 为连续函数，则 $h(X)$ 与 $g(Y)$ 相互独立。即**相互独立的随机变量，其函数仍然相互独立**。
#### 离散型随机变量独立性的判定

设离散型随机变量 $X,Y$ 的可能取值分别为 $x_i,y_j$，联合分布律为

$$
\begin{aligned}
p_{ij}
&=
P\{X=x_i,\ Y=y_j\}.
\end{aligned}
\nonumber
$$

边缘分布律为

$$
\begin{aligned}
p_{i\cdot}
&=
P\{X=x_i\},\\
p_{\cdot j}
&=
P\{Y=y_j\}.
\end{aligned}
\nonumber
$$

若 $X$ 与 $Y$ 相互独立，则对任意 $i,j$，都有

$$
\begin{aligned}
P\{X=x_i,\ Y=y_j\}
&=
P\{X=x_i\}P\{Y=y_j\}.
\end{aligned}
\nonumber
$$

即

$$
\begin{aligned}
p_{ij}
&=
p_{i\cdot}p_{\cdot j}.
\end{aligned}
\nonumber
$$

若存在某一对 $i,j$，使得

$$
\begin{aligned}
p_{ij}
&\ne
p_{i\cdot}p_{\cdot j},
\end{aligned}
\nonumber
$$

则 $X$ 与 $Y$ 不独立。

> [!important] 判定要点
>
> 只要找到一组 $x_i,y_j$ 使
>
> $$
> \begin{aligned}
> P\{X=x_i,\ Y=y_j\}
> &\ne
> P\{X=x_i\}P\{Y=y_j\},
> \end{aligned}
> \nonumber
> $$
>
> 就可以判定 $X,Y$ 不独立。
>
> 特别地，如果某一格满足 $p_{ij}=0$，但对应边缘概率 $p_{i\cdot}>0$ 且 $p_{\cdot j}>0$，则
>
> $$
> \begin{aligned}
> p_{ij}
> &=
> 0,\\
> p_{i\cdot}p_{\cdot j}
> &>
> 0,
> \end{aligned}
> \nonumber
> $$
>
> 因而 $X,Y$ 不独立。

> [!question] 题目
> 【例 3.4】已知随机变量 $(X,Y)$ 的分布律为
>
> $$
> \begin{array}{c|cc}
> Y\backslash X & 0 & 1\\
> \hline
> 0 & 0.15 & 0.15\\
> 1 & a & b
> \end{array}
> \nonumber
> $$
>
> 且 $X$ 与 $Y$ 相互独立，求 $a$ 和 $b$ 的值。
>
> **题解：**
>
> 由总概率为 $1$，得 $a+b=0.7$。
>
> 又由独立性，
>
> $$
> \begin{aligned}
> P\{X=0,Y=0\}
> &=
> P\{X=0\}P\{Y=0\},
> \end{aligned}
> \nonumber
> $$
>
> 即
>
> $$
> \begin{aligned}
> 0.15
> &=
> (0.15+a)\cdot 0.3.
> \end{aligned}
> \nonumber
> $$
>
> 解得 $a=0.35$，故 $b=0.35$。

