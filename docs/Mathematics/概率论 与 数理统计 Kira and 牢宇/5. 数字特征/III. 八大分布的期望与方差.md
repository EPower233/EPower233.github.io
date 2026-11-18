## $III.$ 八大分布的期望与方差

$$
\begin{array}{c|c|c|c}
\text{分布} & \text{记号} & \text{期望} & \text{方差}\\
\hline
0\text{-}1\text{ 分布} & B(1,p) & p & p(1-p)\\
\text{二项分布} & B(n,p) & np & np(1-p)\\
\text{泊松分布} & P(\lambda) & \lambda & \lambda\\
\text{几何分布} & G(p) & \dfrac{1}{p} & \dfrac{1-p}{p^2}\\
\text{超几何分布} & H(N,M,n) & \dfrac{nM}{N} &
\dfrac{nM}{N}\left(1-\dfrac{M}{N}\right)\dfrac{N-n}{N-1}\\
\text{均匀分布} & U(a,b) & \dfrac{a+b}{2} & \dfrac{(b-a)^2}{12}\\
\text{指数分布} & E(\lambda) & \dfrac{1}{\lambda} & \dfrac{1}{\lambda^2}\\
\text{正态分布} & N(\mu,\sigma^2) & \mu & \sigma^2
\end{array}
\nonumber
$$

| 分布     | 记号                | 概率函数（分布律/密度）                                                                                 | 期望                  | 方差                                                          |
| :----- | :---------------- | :------------------------------------------------------------------------------------------- | :------------------ | :---------------------------------------------------------- |
| 0‑1 分布 | $B(1,p)$          | $P(X=k)=p^k(1-p)^{1-k},\ k=0,1$                                                              | $p$                 | $p(1-p)$                                                    |
| 二项分布   | $B(n,p)$          | $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k},\ k=0,1,\dots,n$                                          | $np$                | $np(1-p)$                                                   |
| 泊松分布   | $P(\lambda)$      | $P(X=k)=\frac{\lambda^k}{k!}e^{-\lambda},\ k=0,1,2,\dots$                                    | $\lambda$           | $\lambda$                                                   |
| 几何分布   | $G(p)$            | $P(X=k)=(1-p)^{k-1}p,\ k=1,2,\dots$                                                          | $\frac{1}{p}$       | $\frac{1-p}{p^2}$                                           |
| 超几何分布  | $H(N,M,n)$        | $P(X=k)=\frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}},\ k=\max(0,n-N+M),\dots,\min(n,M)$ | $\frac{nM}{N}$      | $\frac{nM}{N}\!\left(1-\frac{M}{N}\right)\!\frac{N-n}{N-1}$ |
| 均匀分布   | $U(a,b)$          | $f(x)=\frac{1}{b-a},\ a<x<b$                                                                 | $\frac{a+b}{2}$     | $\frac{(b-a)^2}{12}$                                        |
| 指数分布   | $E(\lambda)$      | $f(x)=\lambda e^{-\lambda x},\ x\ge 0$                                                       | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$                                       |
| 正态分布   | $N(\mu,\sigma^2)$ | $f(x)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}},\ x\in\mathbb{R}$          | $\mu$               | $\sigma^2$                                                  |
|        |                   |                                                                                              |                     |                                                             |

#### 0-1 分布推导

若

$$
X\sim B(1,p),
\nonumber
$$

则

$$
\begin{array}{c|cc}
X&0&1\\
\hline
P&1-p&p
\end{array}
\nonumber
$$

于是

$$
EX=p,
\nonumber
$$

且

$$
EX^2=p,
\nonumber
$$

故

$$
\begin{align}
DX&=EX^2-(EX)^2 \\
&=p-p^2& \\
&=p(1-p).
\end{align}
\nonumber
$$

#### 二项分布推导

若 $X$ 表示 $n$ 次独立试验中事件 $A$ 发生的次数，且每次发生概率为 $p$，则可令

$$
\begin{aligned}
X
&=
\sum_{i=1}^{n}X_i.
\end{aligned}
\nonumber
$$

其中

$$
\begin{aligned}
X_i &\sim B(1,p),\\
i
&\in
\{\,m\in\mathbb N^*\mid m\le n\,\}.
\end{aligned}
\nonumber
$$

由期望的线性性质可得

$$
\begin{aligned}
EX
&=
E\left(\sum_{i=1}^{n}X_i\right)\\
&=
\sum_{i=1}^{n}EX_i\\
&=
np.
\end{aligned}
\nonumber
$$

由于 $X_1,X_2,\cdots,X_n$ 相互独立，故由方差的可加性可得

$$
\begin{aligned}
DX
&=
D\left(\sum_{i=1}^{n}X_i\right)\\
&=
\sum_{i=1}^{n}DX_i\\
&=
np(1-p).
\end{aligned}
\nonumber
$$

#### 标准正态分布推导

若

$$
\begin{aligned}
Y
&\sim N(0,1),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
EY &= 0,\\
DY &= 1.
\end{aligned}
\nonumber
$$

若

$$
\begin{aligned}
X
&=\sigma Y+\mu,
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
X
&\sim N(\mu,\sigma^2).
\end{aligned}
\nonumber
$$

于是

$$
\begin{aligned}
EX
&=E(\sigma Y+\mu)\\
&=\sigma EY+\mu\\
&=\mu.
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
DX
&=D(\sigma Y+\mu)\\
&=\sigma^2DY\\
&=\sigma^2.
\end{aligned}
\nonumber
$$

### 一、正态分布绝对值的期望方差

#### （1）标准正态情形

若

$$
\begin{aligned}
X
&\sim N(0,1),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
E|X|
&=
\sqrt{\frac{2}{\pi}},
\end{aligned}
\nonumber
$$

且

$$
\begin{aligned}
D|X|
&=
1-\frac{2}{\pi}.
\end{aligned}
\nonumber
$$

#### （2）一般正态且 μ=0

若

$$
\begin{aligned}
X
&\sim N(0,\sigma^2),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
\frac{X}{\sigma}
&\sim N(0,1).
\end{aligned}
\nonumber
$$

因此

$$
\begin{aligned}
E|X|
&=
E\left|\sigma\cdot\frac{X}{\sigma}\right|\
&=
\sigma E\left|\frac{X}{\sigma}\right|\
&=
\sqrt{\frac{2}{\pi}}\sigma.
\end{aligned}
\nonumber
$$

又因为

$$
\begin{aligned}
D(cX)
&=
c^2DX,
\end{aligned}
\nonumber
$$

所以

$$
\begin{aligned}
D|X|
&=
\sigma^2D\left|\frac{X}{\sigma}\right|\
&=
\left(1-\frac{2}{\pi}\right)\sigma^2.
\end{aligned}
\nonumber
$$

#### （3）一般正态情形

若

$$
\begin{aligned}
X
&\sim N(\mu,\sigma^2),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
\frac{X-\mu}{\sigma}
&\sim N(0,1).
\end{aligned}
\nonumber
$$

于是

$$
\begin{aligned}
E|X-\mu|
&=
E\left|\sigma\cdot\frac{X-\mu}{\sigma}\right|\\
&=
\sigma E\left|\frac{X-\mu}{\sigma}\right|\\
&=
\sqrt{\frac{2}{\pi}}\sigma.
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
D|X-\mu|
&=
\sigma^2D\left|\frac{X-\mu}{\sigma}\right|\\
&=
\left(1-\frac{2}{\pi}\right)\sigma^2.
\end{aligned}
\nonumber
$$

#### 最大值、最小值化为绝对值

遇到 $\max\{X,Y\}$ 或 $\min\{X,Y\}$ 的期望问题时，可以先转化为 $|X-Y|$ 的期望问题。最大值和最小值可以转化为绝对值(平凡恒等式)：

$$
\begin{aligned}
\max\{X,Y\}
&=
\frac{X+Y+|X-Y|}{2},\\
\min\{X,Y\}
&=
\frac{X+Y-|X-Y|}{2}.
\end{aligned}
\nonumber
$$

### 二、标准正态分布的期望

若

$$
\begin{aligned}
X
&\sim N(0,1),
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
EX
&=0.
\end{aligned}
\nonumber
$$

其原因是标准正态密度函数为

$$
\begin{aligned}
\varphi(x)
&=
\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}},
\end{aligned}
\nonumber
$$

于是

$$
\begin{aligned}
EX
&=
\displaystyle\int_{-\infty}^{+\infty}
x\varphi(x)\,dx.
\end{aligned}
\nonumber
$$

由于 $\varphi(x)$ 为偶函数，$x$ 为奇函数，故 $x\varphi(x)$ 为奇函数。奇函数在对称区间上的积分为 $0$，所以

$$
\begin{aligned}
EX
&=
\displaystyle\int_{-\infty}^{+\infty}
x\varphi(x)\,dx\\
&=0.
\end{aligned}
\nonumber
$$

#### 标准正态分布的 $n$ 阶矩

若

$$
\begin{aligned}
X
&\sim N(0,1),
\end{aligned}
\nonumber
$$

则对正整数 $n$，有

$$
\begin{aligned}
E(X^n)
&=
\int_{-\infty}^{+\infty}x^n\varphi(x)\,dx\\
&=
\begin{cases}
0, & n\text{ 为奇数},\\[4pt]
(n-1)!!, & n\text{ 为偶数}.
\end{cases} \\
&=
\begin{cases}
0, & n\text{ 为奇数},\\[6pt]
\prod_{j=1}^{n/2}(2j-1), & n\text{ 为偶数}.
\end{cases}
\end{aligned}
\nonumber
$$

其中 $\varphi(x)$ 为标准正态分布的概率密度函数。

### 三、Pascal 分布

#### 定义

若 $X$ 表示伯努利试验中事件 $A$ 第 $n$ 次发生所需的试验次数，则称 $X$ 服从 Pascal 分布。

#### 随机变量分解

设 $X_i$ 表示从第 $i-1$ 次命中到第 $i$ 次命中所需的试验次数，则

$$
\begin{aligned}
X_i
\sim G(p),\\
i
\in
\{\,m\in\mathbb N^*\mid m\le n\,\}.
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
X
&=
\sum_{i=1}^{n}X_i.
\end{aligned}
\nonumber
$$

其中 $X_1,X_2,\ldots,X_n$ 相互独立，且均服从几何分布 $G(p)$。

#### 期望

由期望的线性性质可得

$$
\begin{aligned}
EX
&=
E\left(\sum_{i=1}^{n}X_i\right)\\
&=
\sum_{i=1}^{n}EX_i\\
&=
\sum_{i=1}^{n}\frac{1}{p}\\
&=
\frac{n}{p}.
\end{aligned}
\nonumber
$$

#### 方差

由于 $X_1,X_2,\ldots,X_n$ 相互独立，故方差可加：

$$
\begin{aligned}
DX
&=
D\left(\sum_{i=1}^{n}X_i\right)\\
&=
\sum_{i=1}^{n}DX_i\\
&=
\sum_{i=1}^{n}\frac{1-p}{p^2}\\
&=
\frac{n(1-p)}{p^2}.
\end{aligned}
\nonumber
$$

#### 核心思想

Pascal 分布可以看作若干个独立几何分布之和：

$$
\begin{aligned}
\text{第 }n\text{ 次命中所需试验次数}
&=
\sum_{i=1}^{n}
\text{相邻两次命中之间所需试验次数}.
\end{aligned}
\nonumber
$$

因此求 Pascal 分布的期望和方差时，可以将其分解为几何分布之和。
