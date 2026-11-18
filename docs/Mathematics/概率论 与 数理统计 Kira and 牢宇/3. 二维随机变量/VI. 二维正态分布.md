## $VI.$ 二维正态分布

### 一、二维正态分布的定义

设二维随机变量 $(X,Y)$ 的联合概率密度为

$$
f(x,y)
=
\frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}}
\exp\left\{
-\frac{1}{2(1-\rho^2)}
\left[
\frac{(x-\mu_1)^2}{\sigma_1^2}
-
\frac{2\rho(x-\mu_1)(y-\mu_2)}{\sigma_1\sigma_2}
+
\frac{(y-\mu_2)^2}{\sigma_2^2}
\right]
\right\}.
\nonumber
$$

参数满足

$$
\sigma_1 >0,
\sigma_2 >0,
|\rho| <1.
\nonumber
$$

称 $(X,Y)$ 服从参数为 $\mu_1,\mu_2,\sigma_1^2,\sigma_2^2,\rho$ 的二维正态分布，记作

$$
(X,Y)\sim N(\mu_1,\mu_2;\sigma_1^2,\sigma_2^2;\rho).
\nonumber
$$

#### 三步定五参

识别二维正态密度时，常用以下步骤确定五个参数：

第一步，看指数中平方项与一次项，通过配方识别 $\mu_1,\mu_2$。

第二步，看 $x^2,xy,y^2$ 项的系数，判断是否有相关系数 $\rho$；若无交叉项，通常对应 $\rho=0$。

第三步，与标准形式

$$
-\frac{1}{2(1-\rho^2)}
\left[
\frac{(x-\mu_1)^2}{\sigma_1^2}
-
\frac{2\rho(x-\mu_1)(y-\mu_2)}{\sigma_1\sigma_2}
+
\frac{(y-\mu_2)^2}{\sigma_2^2}
\right]
\nonumber
$$

比较，确定 $\sigma_1^2,\sigma_2^2$。

### 二、二维正态分布的性质

设

$$
\begin{aligned}
(X,Y)
&\sim N(\mu_1,\mu_2;\sigma_1^2,\sigma_2^2;\rho).
\end{aligned}
\nonumber
$$

#### （1）边缘分布

二维正态分布的两个边缘分布均为一维正态分布，即

$$
\begin{aligned}
X &\sim N(\mu_1,\sigma_1^2),\\
Y &\sim N(\mu_2,\sigma_2^2).
\end{aligned}
\nonumber
$$

即

$$
\begin{aligned}
f_X(x)
&=
\displaystyle\int_{-\infty}^{+\infty}f(x,y)\,dy\\
&=
\frac{1}{\sqrt{2\pi}\sigma_1}
e^{-\frac{(x-\mu_1)^2}{2\sigma_1^2}},
\end{aligned}
\nonumber
$$

$$
\begin{aligned}
f_Y(y)
&=
\displaystyle\int_{-\infty}^{+\infty}f(x,y)\,dx\\
&=
\frac{1}{\sqrt{2\pi}\sigma_2}
e^{-\frac{(y-\mu_2)^2}{2\sigma_2^2}}.
\end{aligned}
\nonumber
$$

注意：二维正态分布可以推出两个边缘分布为一维正态分布，但反之不一定成立。

若 $X,Y$ 相互独立，且

$$
\begin{aligned}
X &\sim N(\mu_1,\sigma_1^2),\\
Y &\sim N(\mu_2,\sigma_2^2),
\end{aligned}
\nonumber
$$

则 $(X,Y)$ 服从二维正态分布，**且此时** $\rho=0$. 这是 $(X,Y)$ 相互独立的充要条件。

#### （2）独立性与不相关

对二维正态分布，有

$$
\begin{aligned}
X\text{ 与 }Y\text{ 相互独立}
&\Longleftrightarrow
X\text{ 与 }Y\text{ 不相关}\\
&\Longleftrightarrow
\rho=0.
\end{aligned}
\nonumber
$$

证明如下：

若 $X,Y$ 相互独立，则

$$
\begin{aligned}
f(x,y)
&=f_X(x)f_Y(y).
\end{aligned}
\nonumber
$$

由边缘密度可得

$$
\begin{aligned}
f_X(x)f_Y(y)
&=
\frac{1}{\sqrt{2\pi}\sigma_1}
e^{-\frac{(x-\mu_1)^2}{2\sigma_1^2}}
\cdot
\frac{1}{\sqrt{2\pi}\sigma_2}
e^{-\frac{(y-\mu_2)^2}{2\sigma_2^2}}\\
&=
\frac{1}{2\pi\sigma_1\sigma_2}
\exp\left\{
-\frac12
\left[
\frac{(x-\mu_1)^2}{\sigma_1^2}
+
\frac{(y-\mu_2)^2}{\sigma_2^2}
\right]
\right\}.
\end{aligned}
\nonumber
$$

这正是二维正态密度中 $\rho=0$ 的形式，因此

$$
\begin{aligned}
f(x,y)=f_X(x)f_Y(y)
&\Longleftrightarrow
\rho=0.
\end{aligned}
\nonumber
$$

#### （3）线性组合

对任意常数 $a,b$，有

$$
\begin{aligned}
aX+bY
&\sim
N\left(
a\mu_1+b\mu_2,\,
a^2\sigma_1^2+b^2\sigma_2^2+2ab\rho\sigma_1\sigma_2
\right).
\end{aligned}
\nonumber
$$

其期望为

$$
\begin{aligned}
E(aX+bY)
&=aEX+bEY\\
&=a\mu_1+b\mu_2.
\end{aligned}
\nonumber
$$

其方差为

$$
\begin{aligned}
D(aX+bY)
&=a^2DX+b^2DY+2ab\operatorname{Cov}(X,Y)\\
&=a^2\sigma_1^2+b^2\sigma_2^2
+2ab\rho\sigma_1\sigma_2.
\end{aligned}
\nonumber
$$

其中

$$
\begin{aligned}
\rho
&=
\frac{\operatorname{Cov}(X,Y)}{\sigma_1\sigma_2},
\end{aligned}
\nonumber
$$

所以

$$
\begin{aligned}
\operatorname{Cov}(X,Y)
&=\rho\sigma_1\sigma_2.
\end{aligned}
\nonumber
$$

特别地，若 $X,Y$ 相互独立，则 $\rho=0$，于是

$$
\begin{aligned}
aX+bY
&\sim
N\left(
a\mu_1+b\mu_2,\,
a^2\sigma_1^2+b^2\sigma_2^2
\right).
\end{aligned}
\nonumber
$$

#### （4）可逆线性变换

若

$$
\begin{aligned}
U&=aX+bY,\\
V&=cX+dY,
\end{aligned}
\nonumber
$$

即

$$
\begin{aligned}
\begin{pmatrix}
U\\
V
\end{pmatrix}
&=
\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}
\begin{pmatrix}
X\\
Y
\end{pmatrix},
\end{aligned}
\nonumber
$$

且

$$
\begin{aligned}
\begin{vmatrix}
a&b\\
c&d
\end{vmatrix}
&\ne 0,
\end{aligned}
\nonumber
$$

则 $(U,V)$ 仍服从二维正态分布。

即二维正态分布经过可逆线性变换后仍为二维正态分布。

#### 总结

1. 二维正态分布的两个边缘分布均为一维正态分布，反之不一定成立。
2. 对二维正态分布，$X$ 与 $Y$ 相互独立与不相关互为充要条件。
3. 二维正态分布中，任意线性组合 $aX+bY$ 仍服从一维正态分布。
4. 若 $X,Y$ 相互独立且分别服从正态分布，则 $aX+bY$ 仍服从正态分布。
5. 二维正态分布经过可逆线性变换后仍服从二维正态分布。

> [!question] 题目
> 【例 3.28】设随机变量 $X$ 和 $Y$ 相互独立，且分别服从正态分布 $N(1,\sigma^2)$ 和 $N(0,2\sigma^2)$，其中 $\sigma$ 是未知参数且 $\sigma>0$。记 $Z=X-Y$，求 $Z$ 的概率密度 $f_Z(z)$。
>
> **题解：**
>
> 由正态分布的线性组合性质，
>
> $$
> \begin{aligned}
> Z
> &=
> X-Y\\
> &\sim
> N(1,3\sigma^2).
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> f_Z(z)
> =
> \frac{1}{\sqrt{6\pi}\sigma}
> e^{-\frac{(z-1)^2}{6\sigma^2}},
> \qquad
> -\infty<z<+\infty.
> \nonumber
> $$

