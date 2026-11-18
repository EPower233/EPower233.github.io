## $II.$ 概率分布

### 一、联合概率分布

#### 联合概率分布的定义

设二维随机变量 $(X,Y)$ 的取值为有限个或可列个，称 $(X,Y)$ 为二维离散型随机变量。

设 $(X,Y)$ 的取值为 $(x_i,y_j)$，$i,j=1,2,\cdots$，称

$$
P\{X=x_i,\ Y=y_j\}=p_{ij},
\qquad i,j=1,2,\cdots
\nonumber
$$

为 $(X,Y)$ 的联合概率分布，简称概率分布，也可用列表表示为

$$
\begin{array}{c|cccc}
X\backslash Y & y_1 & y_2 & \cdots & y_j\\
\hline
x_1 & p_{11} & p_{12} & \cdots & p_{1j}\\
x_2 & p_{21} & p_{22} & \cdots & p_{2j}\\
\vdots & \vdots & \vdots & & \vdots
\end{array}
\nonumber
$$

其充要条件为：

1.  非负

$$
p_{ij}\ge 0,
\qquad i,j=1,2,\cdots;
\nonumber
$$

2. 规范

$$
\sum_i\sum_j p_{ij}=1.
\nonumber
$$

> PS: 性质 $p_{ij}\ge 0$ 与 $\sum_i\sum_j p_{ij}=1$ 构成联合概率分布的充要条件。

> [!question] 题目
> 【例 3.6】已知随机变量 $X$ 和 $Y$ 的概率分布为
>
> $$
> X\sim
> \begin{pmatrix}
> -1 & 0 & 1\\
> \dfrac{1}{4} & \dfrac{1}{2} & \dfrac{1}{4}
> \end{pmatrix},
> \qquad
> Y\sim
> \begin{pmatrix}
> 0 & 1\\
> \dfrac{1}{2} & \dfrac{1}{2}
> \end{pmatrix},
> \nonumber
> $$
>
> 且 $P\{XY=0\}=1$，求 $X$ 和 $Y$ 的联合分布律。
>
> **题解：**
>
> 由 $P\{XY=0\}=1$，当 $Y=1$ 时只能有 $X=0$。
>
> 因此联合分布律为
>
> $$
> \begin{array}{c|cc}
> X\backslash Y & 0 & 1\\
> \hline
> -1 & \dfrac{1}{4} & 0\\[6pt]
> 0 & 0 & \dfrac{1}{2}\\[6pt]
> 1 & \dfrac{1}{4} & 0
> \end{array}
> \nonumber
> $$

### 二、边缘概率分布

#### 边缘概率分布的定义

设二维随机变量 $(X,Y)$ 的联合概率分布为

$$
P\{X=x_i,\ Y=y_j\}=p_{ij},
\qquad i,j=1,2,\cdots.
\nonumber
$$

分别称

$$
p_{i\cdot}=P\{X=x_i\}=\sum_j p_{ij},
\qquad i=1,2,\cdots
\nonumber
$$

和

$$
p_{\cdot j}=P\{Y=y_j\}=\sum_i p_{ij},
\qquad j=1,2,\cdots
\nonumber
$$

为 $(X,Y)$ 关于 $X$ 和 $Y$ 的边缘概率分布。

其中，$p_{i\cdot}$ 是第 $i$ 行概率求和，$p_{\cdot j}$ 是第 $j$ 列概率求和。

$$
\boxed{\text{联合概率分布}\Rightarrow\text{边缘概率分布}.}
\nonumber
$$

> [!question] 题目
> 【例 3.5】某箱装有 $100$ 件产品，其中一、二、三等品分别为 $80,10,10$ 件。现从中随机抽取一件，记
>
> $$
> X_i
> =
> \begin{cases}
> 1, & \text{抽到 }i\text{ 等品},\\
> 0, & \text{其他},
> \end{cases}
> \qquad i=1,2,3.
> \nonumber
> $$
>
> 求：
>
> （Ⅰ）随机变量 $X_1$ 与 $X_2$ 的联合分布律和边缘分布律；
>
> （Ⅱ）判断 $X_1$ 与 $X_2$ 的独立性。
>
> **题解：**
>
> 联合分布律为
>
> $$
> \begin{array}{c|cc}
> X_1\backslash X_2 & 0 & 1\\
> \hline
> 0 & 0.1 & 0.1\\
> 1 & 0.8 & 0
> \end{array}
> \nonumber
> $$
>
> 边缘分布律为
>
> $$
> \begin{array}{c|cc}
> X_1 & 0 & 1\\
> \hline
> P & 0.2 & 0.8
> \end{array}
> \qquad
> \begin{array}{c|cc}
> X_2 & 0 & 1\\
> \hline
> P & 0.9 & 0.1
> \end{array}
> \nonumber
> $$
>
> 因为 $P\{X_1=1,X_2=1\}=0$，但 $P\{X_1=1\}P\{X_2=1\}=0.8\times 0.1=0.08$，故 $X_1$ 与 $X_2$ 不独立。

### 三、条件概率分布

#### 条件概率分布的定义

设二维随机变量 $(X,Y)$ 的联合概率分布为

$$
P\{X=x_i,\ Y=y_j\}=p_{ij},
\qquad i,j=1,2,\cdots.
\nonumber
$$

称

$$
P\{X=x_i\mid Y=y_j\}
=
\frac{p_{ij}}{p_{\cdot j}}
\nonumber
$$

为在 $Y=y_j$ 的条件下，$X$ 的条件概率分布。

称

$$
P\{Y=y_j\mid X=x_i\}
=
\frac{p_{ij}}{p_{i\cdot}}
\nonumber
$$

为在 $X=x_i$ 的条件下，$Y$ 的条件概率分布。

$$
\boxed{\text{联合概率分布}+\text{边缘概率分布}
\Rightarrow
\text{条件概率分布}.}
\nonumber
$$

<span id="tstt2r"></span>

> [!question] 题目
> 【例 3.3】盒子里有 $2$ 个黑球、$2$ 个红球、$2$ 个白球，从其中随机任取 $2$ 个球，以 $X$ 表示取得的黑球的个数，以 $Y$ 表示取得的红球的个数。
>
> （1）试写出 $X$ 和 $Y$ 的联合分布律；
>
> （2）求概率 $P\{X+Y\le 1\}$；
>
> （3）求 $X$ 的边缘分布律；
>
> （4）求条件概率 $P\{Y=1\mid X=0\}$；
>
> （5）判断 $X$ 和 $Y$ 的独立性。
>
> **题解：**
>
> 对 $x,y\in\{0,1,2\}$ 且 $x+y\le 2$，有
>
> $$
> P\{X=x,Y=y\}
> =
> \frac{\binom{2}{x}\binom{2}{y}\binom{2}{2-x-y}}{\binom{6}{2}}.
> \nonumber
> $$
>
> 联合分布律为
>
> $$
> \begin{array}{c|ccc}
> X\backslash Y & 0 & 1 & 2\\
> \hline
> 0 & \dfrac{1}{15} & \dfrac{4}{15} & \dfrac{1}{15}\\[6pt]
> 1 & \dfrac{4}{15} & \dfrac{4}{15} & 0\\[6pt]
> 2 & \dfrac{1}{15} & 0 & 0
> \end{array}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> P\{X+Y\le 1\}
> &=
> P\{X=0,Y=0\}
> +
> P\{X=1,Y=0\}
> +
> P\{X=0,Y=1\}\\
> &=
> \frac{1}{15}
> +
> \frac{4}{15}
> +
> \frac{4}{15}\\
> &=
> \frac{3}{5}.
> \end{aligned}
> \nonumber
> $$
>
> $X$ 的边缘分布律为
>
> $$
> \begin{array}{c|ccc}
> X & 0 & 1 & 2\\
> \hline
> P & \dfrac{2}{5} & \dfrac{8}{15} & \dfrac{1}{15}
> \end{array}
> \nonumber
> $$
>
> 条件概率为
>
> $$
> \begin{aligned}
> P\{Y=1\mid X=0\}
> &=
> \frac{P\{X=0,Y=1\}}{P\{X=0\}}\\
> &=
> \frac{\dfrac{4}{15}}{\dfrac{2}{5}}\\
> &=
> \frac{2}{3}.
> \end{aligned}
> \nonumber
> $$
>
> 联合分布矩阵为
>
> $$
> M
> =
> \frac{1}{15}
> \begin{pmatrix}
> 1 & 4 & 1\\
> 4 & 4 & 0\\
> 1 & 0 & 0
> \end{pmatrix}.
> \nonumber
> $$
>
> 由于
>
> $$
> \begin{aligned}
> \det M
> &=
> \frac{1}{15^3}
> \begin{vmatrix}
> 1 & 4 & 1\\
> 4 & 4 & 0\\
> 1 & 0 & 0
> \end{vmatrix}\\
> &=
> -\frac{4}{15^3}
> \ne 0,
> \end{aligned}
> \nonumber
> $$
>
> 故 $M$ 满秩。若 $X,Y$ 独立，则联合分布矩阵应为秩 $1$ 矩阵，因此 $X$ 与 $Y$ 不独立。

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



