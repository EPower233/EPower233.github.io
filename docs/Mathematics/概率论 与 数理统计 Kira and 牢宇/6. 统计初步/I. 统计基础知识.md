## $I.$ 统计基础知识

### 一、概念

#### （1）总体

研究对象的某项数量指标的全体称为总体，记作 $X$。总体的每个元素称为个体。

#### （2）样本

设随机变量 $X_1,X_2,\cdots,X_n$ 相互独立且与总体 $X$ 同分布，称

$$
X_1,X_2,\cdots,X_n
\nonumber
$$

为来自总体 $X$ 的简单随机样本，简称样本。

其中 $n$ 为样本容量，样本观测值

$$
x_1,x_2,\cdots,x_n
\nonumber
$$

称为样本值。

样本满足两个条件：

$$
\text{相互独立},\qquad \text{与总体 }X\text{ 同分布}.
\nonumber
$$

#### （3）统计量

**不含任何未知参数**的样本函数$g(X_1,X_2,\cdots,X_n)$称为统计量.

设$x_1,x_2,\cdots x_n$是对应于样本$X_1,X_2,\cdots,X_n$的样本值，则称$g(x_1,x_2,\cdots x_n)$是$g(X_1,X_2,\cdots X_n)$的观测值，称为**统计值**.

统计量的分布称为抽样分布。

即统计量是样本的函数。

### 二、常用统计量

#### （1）样本均值

$$
\overline X=\frac{1}{n}\sum_{i=1}^{n}X_i.
\nonumber
$$

#### （2）样本方差

$$
S^2
=
\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\overline X)^2.
\nonumber
$$

也可写为

$$
S^2
=
\frac{1}{n-1}
\left[
\sum_{i=1}^{n}X_i^2-n\overline X^2
\right].
\nonumber
$$

其推导为

$$
\begin{aligned}
\sum_{i=1}^{n}(X_i-\overline X)^2
&=
\sum_{i=1}^{n}(X_i^2-2X_i\overline X+\overline X^2)\\
&=
\sum_{i=1}^{n}X_i^2
-2\overline X\sum_{i=1}^{n}X_i
+n\overline X^2\\
&=
\sum_{i=1}^{n}X_i^2
-2n\overline X^2
+n\overline X^2\\
&=
\sum_{i=1}^{n}X_i^2-n\overline X^2.
\end{aligned}
\nonumber
$$

#### （3）样本标准差

$$
S=
\sqrt{
\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\overline X)^2
}.
\nonumber
$$

#### （4）样本 $k$ 阶原点矩

$$
\begin{aligned}
A_k
&=
\frac{1}{n}
\sum_{i=1}^{n}X_i^k,
\\
k
&\in
\mathbb N^*.
\end{aligned}
\nonumber
$$

#### （5）样本 $k$ 阶中心矩

$$
\begin{aligned}
B_k
&=
\frac{1}{n}
\sum_{i=1}^{n}
(X_i-\overline X)^k,
\\
k
&\in
\mathbb N^*.
\end{aligned}
\nonumber
$$

### 三、样本均值与样本方差的数字特征

设 $X_1, X_2, \cdots, X_n$ 为来自总体 $X$ 的简单随机样本，且总体期望与方差分别为

$$
EX = \mu, \quad DX = \sigma^2. \nonumber
$$

由于 $X_1, X_2, \cdots, X_n$ 独立同分布，每个 $X_i$ 均满足 $E(X_i) = \mu$，$D(X_i) = \sigma^2$。

**样本均值的期望：**

$$
\begin{aligned}
E\overline{X} &= E\left(\frac{1}{n}\sum_{i=1}^n X_i\right) \\
&= \frac{1}{n}\sum_{i=1}^n E(X_i) \\
&= \frac{1}{n} \cdot n\mu \\
&= \mu \\
&= EX.
\end{aligned} \nonumber
$$

**样本均值的方差：**

$$
\begin{aligned}
D\overline{X} &= D\left(\frac{1}{n}\sum_{i=1}^n X_i\right) \\
&= \frac{1}{n^2}D\left(\sum_{i=1}^n X_i\right) \\
&= \frac{1}{n^2}\sum_{i=1}^n D(X_i) \\
&= \frac{1}{n^2} \cdot n\sigma^2 \\
&= \frac{\sigma^2}{n}.
\end{aligned} \nonumber
$$

**样本方差的期望：**

由样本方差 $S^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \overline{X})^2$，利用代数恒等式：

$$
\sum_{i=1}^n (X_i - \overline{X})^2 = \sum_{i=1}^n X_i^2 - n\overline{X}^2, \nonumber
$$

可得：

$$
\begin{aligned}
E\left[\sum_{i=1}^n (X_i - \overline{X})^2\right] &= E\left[\sum_{i=1}^n X_i^2\right] - E\left[n\overline{X}^2\right].
\end{aligned} \nonumber
$$

利用方差计算公式 $D(Y) = E(Y^2) - [E(Y)]^2$ 可得：

$$
E(X_i^2) = D(X_i) + [E(X_i)]^2 = \sigma^2 + \mu^2
$$

故 $\sum_{i=1}^n X_i^2$ 的期望为：

$$
E\left[\sum_{i=1}^n X_i^2\right] = n(\sigma^2 + \mu^2). \nonumber
$$

$E(\overline{X}^2) = D\overline{X} + (E\overline{X})^2 = \frac{\sigma^2}{n} + \mu^2$，故 $n\overline{X}^2$ 的期望为：

$$
E[n\overline{X}^2] = n\left(\frac{\sigma^2}{n} + \mu^2\right) = \sigma^2 + n\mu^2. \nonumber
$$

代入上式得：

$$
E\left[\sum_{i=1}^n (X_i - \overline{X})^2\right] = n(\sigma^2 + \mu^2) - (\sigma^2 + n\mu^2) = (n-1)\sigma^2. \nonumber
$$

因此：

$$
\begin{aligned}
ES^2 &= E\left[\frac{1}{n-1}\sum_{i=1}^n (X_i - \overline{X})^2\right] \\
&= \frac{1}{n-1} \cdot (n-1)\sigma^2 \\
&= \sigma^2 = DX.
\end{aligned} \nonumber
$$

样本均值 $\overline{X}$ 是总体期望 $\mu$ 的无偏估计，样本方差 $S^2$ 是总体方差 $\sigma^2$ 的无偏估计。

### 四、求统计量的数字特征

#### ① 利用样本均值和样本方差的性质

若要求 $E\overline X$、$D\overline X$、$ES^2$，通常先设总体满足

$$
EX=\mu,\qquad DX=\sigma^2.
\nonumber
$$

于是

$$
\begin{align}
E\overline X&=\mu,\nonumber \\
D\overline X&=\frac{\sigma^2}{n},\nonumber \\
ES^2&=\sigma^2.\nonumber
\end{align}
$$

再将题目给出的 $\mu,\sigma^2$ 代入即可。

#### ② 利用 $\chi^2$ 性质

若涉及正态总体样本方差，则常用

$$
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2(n-1).
\nonumber
$$

由 $\chi^2$ 分布的数字特征

$$
E\chi^2(n)=n,
\qquad
D\chi^2(n)=2n
\nonumber
$$

可求出相关统计量的期望与方差。
