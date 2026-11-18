## $III.$ 六大统计量

### 一、单正态总体

设 $X_1,X_2,\ldots,X_n$ 为来自总体

$$
\begin{aligned}
X
&\sim N(\mu,\sigma^2)
\end{aligned}
\nonumber
$$

的简单随机样本，$\overline X$ 与 $S^2$ 分别为样本均值与样本方差。

#### （1）样本均值的标准化统计量

由于正态总体的样本均值仍服从正态分布，故

$$
\begin{aligned}
\overline X
&\sim
N\left(\mu,\frac{\sigma^2}{n}\right).
\end{aligned}
\nonumber
$$

[常用统计量的数字特征](./I.%20统计基础知识#三、样本均值与样本方差的数字特征)

因此标准化可得

$$
\begin{aligned}
\frac{\overline X-\mu}
{\sigma/\sqrt n}
&\sim N(0,1).
\end{aligned}
\nonumber
$$

即

$$
\begin{aligned}
\overline X
&\sim
N\left(\mu,\frac{\sigma^2}{n}\right).
\end{aligned}
\nonumber
$$

其中，$\overline X$ 服从正态分布，标准化后服从标准正态分布。

#### （2）样本方差对应的卡方统计量

有

$$
\begin{aligned}
\frac{(n-1)S^2}{\sigma^2}
&\sim
\chi^2(n-1).
\end{aligned}
\nonumber
$$

由于

$$
\begin{aligned}
(n-1)S^2
&=
\sum_{i=1}^{n}(X_i-\overline X)^2,
\end{aligned}
\nonumber
$$

所以也可写成

$$
\begin{aligned}
\frac{1}{\sigma^2}
\sum_{i=1}^{n}(X_i-\overline X)^2
&\sim
\chi^2(n-1).
\end{aligned}
\nonumber
$$

并且 $\overline X$ 与 $S^2$ 相互独立。

> 注: $S^2$ 是定值, $X_i$ 满足方程 $S^2=\sum_{i=1}^{n}(X_i-\overline X)^2.$ 所以确定 $n-1$ 个 $X_i$ 就可以确定剩下的一个 $X_{i_n}$. 因此自由度为 $n-1$ .

#### （3）样本均值与样本方差构造的 $t$ 统计量

因为

$$
\begin{aligned}
\frac{\overline X-\mu}
{\sigma/\sqrt n}
&\sim N(0,1),
\end{aligned}
\nonumber
$$

且

$$
\begin{aligned}
\frac{(n-1)S^2}{\sigma^2}
&\sim \chi^2(n-1),
\end{aligned}
\nonumber
$$

又因为 $\overline X$ 与 $S^2$ 相互独立，所以由 $t$ 分布的定义可得

$$
\begin{aligned}
\frac{
\dfrac{\overline X-\mu}
{\sigma/\sqrt n}
}{
\sqrt{
\dfrac{
(n-1)S^2/\sigma^2
}{n-1}
}
}
&\sim t(n-1).
\end{aligned}
\nonumber
$$

化简得

$$
\begin{aligned}
\frac{\overline X-\mu}
{S/\sqrt n}
&\sim t(n-1).
\end{aligned}
\nonumber
$$

### 二、双正态总体

设总体

$$
\begin{aligned}
X &\sim N(\mu_1,\sigma_1^2),\\
Y &\sim N(\mu_2,\sigma_2^2).
\end{aligned}
\nonumber
$$

设 $X_1,X_2,\ldots,X_{n_1}$ 来自总体 $X$，$Y_1,Y_2,\ldots,Y_{n_2}$ 来自总体 $Y$，且两组样本相互独立。

记两组样本均值分别为 $\overline X,\overline Y$，样本方差分别为 $S_1^2,S_2^2$。

#### （4）双正态总体样本均值差的标准化统计量

由单正态总体样本均值的结论，有

$$
\begin{aligned}
\overline X
&\sim
N\left(\mu_1,\frac{\sigma_1^2}{n_1}\right),\\
\overline Y
&\sim
N\left(\mu_2,\frac{\sigma_2^2}{n_2}\right).
\end{aligned}
\nonumber
$$

由于两组样本相互独立，所以 $\overline X$ 与 $\overline Y$ 相互独立。

因此

$$
\begin{aligned}
\overline X-\overline Y
&\sim
N\left(
\mu_1-\mu_2,\,
\frac{\sigma_1^2}{n_1}
+
\frac{\sigma_2^2}{n_2}
\right).
\end{aligned}
\nonumber
$$

标准化可得

$$
\begin{aligned}
\frac{
\overline X-\overline Y
-(\mu_1-\mu_2)
}{
\sqrt{
\dfrac{\sigma_1^2}{n_1}
+
\dfrac{\sigma_2^2}{n_2}
}
}
&\sim
N(0,1).
\end{aligned}
\nonumber
$$

[I. 期望 · 线性性质](../5.%20数字特征/I.%20期望#线性性质)

[II. 方差 · 和差的方差](../5.%20数字特征/II.%20方差#_2-和差的方差)

#### （5）两个样本方差构造的 $F$ 统计量

由单正态总体样本方差的结论，有

$$
\begin{aligned}
\frac{(n_1-1)S_1^2}{\sigma_1^2}
&\sim
\chi^2(n_1-1),\\
\frac{(n_2-1)S_2^2}{\sigma_2^2}
&\sim
\chi^2(n_2-1).
\end{aligned}
\nonumber
$$

由于两组样本相互独立，所以这两个卡方变量相互独立。

由 $F$ 分布的定义可得

$$
\begin{aligned}
\frac{
\dfrac{
(n_1-1)S_1^2/\sigma_1^2
}{n_1-1}
}{
\dfrac{
(n_2-1)S_2^2/\sigma_2^2
}{n_2-1}
}
&\sim
F(n_1-1,n_2-1).
\end{aligned}
\nonumber
$$

化简得

$$
\begin{aligned}
\frac{S_1^2/\sigma_1^2}
{S_2^2/\sigma_2^2}
&\sim
F(n_1-1,n_2-1).
\end{aligned}
\nonumber
$$

#### （6）方差相等时的双总体 $t$ 统计量

当 $\sigma_1^2=\sigma_2^2=\sigma^2$ 时，由卡方分布的可加性可得

$$
\begin{aligned}
\frac{(n_1-1)S_1^2}{\sigma^2}
+
\frac{(n_2-1)S_2^2}{\sigma^2}
&\sim
\chi^2(n_1+n_2-2).
\end{aligned}
\nonumber
$$

即

$$
\begin{aligned}
\frac{
(n_1-1)S_1^2
+
(n_2-1)S_2^2
}{\sigma^2}
&\sim
\chi^2(n_1+n_2-2).
\end{aligned}
\nonumber
$$

另一方面，由样本均值差的正态统计量可得

$$
\begin{aligned}
\frac{
\overline X-\overline Y
-(\mu_1-\mu_2)
}{
\sqrt{
\dfrac{\sigma^2}{n_1}
+
\dfrac{\sigma^2}{n_2}
}
}
&\sim
N(0,1).
\end{aligned}
\nonumber
$$

即

$$
\begin{aligned}
\frac{
\overline X-\overline Y
-(\mu_1-\mu_2)
}{
\sigma
\sqrt{
\dfrac{1}{n_1}
+
\dfrac{1}{n_2}
}
}
&\sim
N(0,1).
\end{aligned}
\nonumber
$$

由 $t$ 分布的定义，有

$$
\begin{aligned}
\frac{
\dfrac{
\overline X-\overline Y
-(\mu_1-\mu_2)
}{
\sigma
\sqrt{
\dfrac{1}{n_1}
+
\dfrac{1}{n_2}
}
}
}{
\sqrt{
\dfrac{
\left[
(n_1-1)S_1^2
+
(n_2-1)S_2^2
\right]/\sigma^2
}{
n_1+n_2-2
}
}
}
&\sim
t(n_1+n_2-2).
\end{aligned}
\nonumber
$$

令

$$
\begin{aligned}
S_w
&=
\sqrt{
\frac{
(n_1-1)S_1^2
+
(n_2-1)S_2^2
}{
n_1+n_2-2
}
}.
\end{aligned}
\nonumber
$$

则上式化简为

$$
\begin{aligned}
\frac{
\overline X-\overline Y
-(\mu_1-\mu_2)
}{
S_w
\sqrt{
\dfrac{1}{n_1}
+
\dfrac{1}{n_2}
}
}
&\sim
t(n_1+n_2-2).
\end{aligned}
\nonumber
$$

其中

$$
\begin{aligned}
S_w^2
&=
\frac{
(n_1-1)S_1^2
+
(n_2-1)S_2^2
}{
n_1+n_2-2
}.
\end{aligned}
\nonumber
$$

$S_w^2$ 称为合并样本方差，$S_w$ 称为合并样本标准差。
