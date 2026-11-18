## $II.$ 依概率收敛

#### 依概率收敛的定义

设 $\{X_n\}$ 为一随机变量序列，$a$ 为常数。若对任意 $\varepsilon>0$，有

$$
\lim_{n\to\infty}P\{|X_n-a|<\varepsilon\}=1,
\nonumber
$$

或等价地，

$$
\lim_{n\to\infty}P\{|X_n-a|\ge\varepsilon\}=0,
\nonumber
$$

则称 $\{X_n\}$ 依概率收敛于 $a$，记作

$$
X_n\xrightarrow{P}a.
\nonumber
$$

当 $n$ 比较大时，$X_n$ 落在 $a$ 附近的概率趋于 $1$。

> [!important] 等价理解
> 当 $n$ 充分大时，$X_n$ 偏离 $a$ 超过任意给定小正数 $\varepsilon$ 的概率趋于 $0$。

### 依概率收敛的运算性质

1. 若 $X_n\xrightarrow{P}a$，且函数 $g(x)$ 在 $a$ 处连续，则

$$
g(X_n)\xrightarrow{P}g(a).
\nonumber
$$

2. 若 $X_n\xrightarrow{P}a$，$Y_n\xrightarrow{P}b$，且函数 $g(x,y)$ 在 $(a,b)$ 处连续，则

$$
g(X_n,Y_n)\xrightarrow{P}g(a,b).
\nonumber
$$
