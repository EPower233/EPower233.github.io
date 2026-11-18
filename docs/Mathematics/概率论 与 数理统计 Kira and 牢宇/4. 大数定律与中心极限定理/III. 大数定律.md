## $III.$ 大数定律


### 1、切比雪夫大数定律

设随机变量序列 $X_1,X_2,\cdots,X_n,\cdots$ 满足：

1. $X_1,X_2,\cdots$ 两两不相关；
2. 各个方差存在；
3. 方差一致有界，即存在常数 $C>0$，使得

$$
D(X_i)\le C,\qquad i=1,2,\cdots.
\nonumber
$$

则对任意 $\varepsilon>0$，有

$$
\lim_{n\to\infty}
P\left\{
\left|
\frac{1}{n}\sum_{i=1}^nX_i
-
\frac{1}{n}\sum_{i=1}^nE(X_i)
\right|
<\varepsilon
\right\}
=1.
\nonumber
$$

也就是

$$
\frac{1}{n}\sum_{i=1}^nX_i
\xrightarrow{P}
\frac{1}{n}\sum_{i=1}^nE(X_i).
\nonumber
$$

> [!important] 结论含义
> 算术平均依概率收敛于它自己的期望平均。

#### 证明

记

$$
\overline X_n=\frac{1}{n}\sum_{i=1}^nX_i.
\nonumber
$$

由于 $X_1,\cdots,X_n$ 两两不相关，

$$
D(\overline X_n)
=
D\left(\frac{1}{n}\sum_{i=1}^nX_i\right)
=
\frac{1}{n^2}D\left(\sum_{i=1}^nX_i\right)
=
\frac{1}{n^2}\sum_{i=1}^nD(X_i).
\nonumber
$$

再由 $D(X_i)\le C$，得

$$
D(\overline X_n)
\le
\frac{1}{n^2}\sum_{i=1}^nC
=
\frac{C}{n}.
\nonumber
$$

由切比雪夫不等式，

$$
P\left\{
\left|
\overline X_n-E(\overline X_n)
\right|
<\varepsilon
\right\}
\ge
1-\frac{D(\overline X_n)}{\varepsilon^2}.
\nonumber
$$

而

$$
E(\overline X_n)
=
\frac{1}{n}\sum_{i=1}^nE(X_i),
\nonumber
$$

故

$$
P\left\{
\left|
\frac{1}{n}\sum_{i=1}^nX_i
-
\frac{1}{n}\sum_{i=1}^nE(X_i)
\right|
<\varepsilon
\right\}
\ge
1-\frac{C}{n\varepsilon^2}.
\nonumber
$$

当 $n\to\infty$ 时，

$$
1-\frac{C}{n\varepsilon^2}\to 1.
\nonumber
$$

于是

$$
\lim_{n\to\infty}
P\left\{
\left|
\frac{1}{n}\sum_{i=1}^nX_i
-
\frac{1}{n}\sum_{i=1}^nE(X_i)
\right|
<\varepsilon
\right\}
=1.
\nonumber
$$

证毕。

> [!important] 注意
> 切比雪夫大数定律不要求独立同分布；
> 它要求的是“两两不相关 + 方差存在且一致有界”。

---

### 2、辛钦大数定律

设随机变量序列 $X_1,X_2,\cdots,X_n,\cdots$ **相互独立同分布**，且**数学期望存在**：

$$
E(X_i)=\mu,\qquad i=1,2,\cdots,
\nonumber
$$

则对任意 $\varepsilon>0$，有

$$
\lim_{n\to\infty}
P\left\{
\left|
\frac{1}{n}\sum_{i=1}^nX_i-\mu
\right|
<\varepsilon
\right\}
=1.
\nonumber
$$

即

$$
\frac{1}{n}\sum_{i=1}^nX_i
\xrightarrow{P}
\mu.
\nonumber
$$

> [!important] 结论含义
> 当随机变量独立同分布时，样本均值依概率收敛于总体期望。

---

### 3、伯努利大数定律

设随机变量序列 $X_1,X_2,\cdots,X_n,\cdots$ 相互独立，且都服从 $B(1,p)$$，则

$$
\frac{1}{n}\sum_{i=1}^nX_i
\xrightarrow{P}
p.
\nonumber
$$

伯努利大数定律是辛钦大数定律的特例。

若 $X_i$ 表示第 $i$ 次试验中事件 $A$ 是否发生，即

- $X_i=1$：事件 $A$ 发生；
- $X_i=0$：事件 $A$ 不发生，

则

$$
\frac{1}{n}\sum_{i=1}^nX_i
\nonumber
$$

就是事件 $A$ 在前 $n$ 次试验中的**频率**。

于是伯努利大数定律可写成

$$
\frac{f_A}{n}\xrightarrow{P}p,
\nonumber
$$

其中 $f_A$ 表示事件 $A$ 发生的次数，$p$ 表示事件 $A$ 在每次试验中发生的概率。

> [!important] 结论含义
> 当试验次数充分大时，频率依概率收敛于概率。

---

###  4、三种大数定律的关系

> [!important] 小结
> 1. **切比雪夫大数定律**：条件较强，结论是
>    $\dfrac{1}{n}\sum X_i \xrightarrow{P} \dfrac{1}{n}\sum E(X_i)$。
>
> 2. **辛钦大数定律**：要求独立同分布，只需期望存在，结论是
>    $\dfrac{1}{n}\sum X_i \xrightarrow{P} \mu$。
>
> 3. **伯努利大数定律**：辛钦大数定律在 $B(1,p)$ 情形下的特例，说明“频率收敛于概率”。

---

## 六、例题

> [!question] 题目
> 【例 5.1】设 $X_1,X_2,\cdots,X_n,\cdots$ 独立同分布，且 $X_i\sim E(2)$，求
>
> $$
> \lim_{n\to\infty}\frac{1}{n}\sum_{i=1}^nX_i^2.
> \nonumber
> $$
> 
> **题解：**
> 
> 由辛钦大数定律，
>
> $$
> \frac{1}{n}\sum_{i=1}^nX_i^2
> \xrightarrow{P}
> E(X_i^2).
> \nonumber
> $$
>
> 对于 $X_i\sim E(2)$，有
>
> $$
> E(X_i)=\frac{1}{2},
> \qquad
> D(X_i)=\frac{1}{4}.
> \nonumber
> $$
>
> 因而
>
> $$
> \begin{aligned}
> E(X_i^2)
> &=
> D(X_i)+[E(X_i)]^2\\
> &=
> \frac{1}{4}+\frac{1}{4}\\
> &=
> \frac{1}{2}.
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> \frac{1}{n}\sum_{i=1}^nX_i^2
> \xrightarrow{P}
> \frac{1}{2}.
> \nonumber
> $$

> [!question] 题目
> 设 $X_1,X_2,\cdots,X_n,\cdots$ 独立同分布，其概率密度为
>
> $$
> f(x)=
> \begin{cases}
> xe^{-x^2/2}, & x\ge 0,\\
> 0, & x<0.
> \end{cases}
> \nonumber
> $$
>
> 问是否存在常数 $a\in\mathbb R$，使得对任意 $\varepsilon>0$，
>
> $$
> \lim_{n\to\infty}
> P\left\{
> \left|
> \frac{1}{n}\sum_{i=1}^nX_i^2-a
> \right|
> <\varepsilon
> \right\}
> =1?
> \nonumber
> $$
> 
> **题解：**
> 
> 只需考察 $E(X_i^2)$ 是否存在。由辛钦大数定律，
>
> $$
> \frac{1}{n}\sum_{i=1}^nX_i^2
> \xrightarrow{P}
> E(X_i^2).
> \nonumber
> $$
>
> 计算
>
> $$
> \begin{aligned}
> E(X_i^2)
> &=
> \int_0^{+\infty}x^2\cdot xe^{-x^2/2}\,dx\\
> &=
> \int_0^{+\infty}x^3e^{-x^2/2}\,dx\\
> &=
> 2.
> \end{aligned}
> \nonumber
> $$
>
> 因此所求常数存在，且
>
> $$
> a=2.
> \nonumber
> $$
>
> 于是
>
> $$
> \frac{1}{n}\sum_{i=1}^nX_i^2
> \xrightarrow{P}
> 2.
> \nonumber
> $$
