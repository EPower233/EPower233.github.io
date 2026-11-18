## $IV.$ 中心极限定理

### 1. 列维—林德伯格（Levy-Lindeberg）中心极限定理

设随机变量 $X_1,X_2,\cdots,X_n,\cdots$ 相互独立同分布，且

$$
EX_i=\mu,\qquad DX_i=\sigma^2,\qquad i=1,2,\cdots.
\nonumber
$$

则对任意实数 $x$，有

$$
\lim_{n\to\infty}
P\left\{
\frac{\sum_{i=1}^{n}X_i-n\mu}{\sqrt{n}\sigma}
\le x
\right\}
=
\displaystyle\int_{-\infty}^{x}
\frac{1}{\sqrt{2\pi}}e^{-\frac{t^2}{2}}\,dt
=
\Phi(x).
\nonumber
$$

即

$$
\sum_{i=1}^{n}X_i
\nonumber
$$

近似服从正态分布

$$
N(n\mu,n\sigma^2).
\nonumber
$$

### 2. 棣莫弗—拉普拉斯（Demoivre-Laplace）中心极限定理

设随机变量 $X_1,X_2,\cdots,X_n,\cdots$ 相互独立，且均服从 $B(1,p)$，则对任意实数 $x$，有

$$
\lim_{n\to\infty}
P\left\{
\frac{\sum_{i=1}^{n}X_i-np}{\sqrt{np(1-p)}}
\le x
\right\}
=
\displaystyle\int_{-\infty}^{x}
\frac{1}{\sqrt{2\pi}}e^{-\frac{t^2}{2}}\,dt
=
\Phi(x).
\nonumber
$$

即

$$
\sum_{i=1}^{n}X_i
\nonumber
$$

近似服从正态分布

$$
N(np,np(1-p)).
\nonumber
$$

### 使用方式

若若干个随机变量独立同分布，求和后整体可近似为正态分布。

当 $n$ 较大时：

$$
\sum_{i=1}^{n}X_i
\approx
N(\text{期望},\text{方差}).
\nonumber
$$

做题时先写近似服从的正态分布，再标准化为标准正态分布：

$$
\frac{X-\mu}{\sigma}
\sim
N(0,1).
\nonumber
$$
