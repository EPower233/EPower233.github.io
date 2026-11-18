## $II.$ 概率

### 一、基本概率公式

#### （1）加法公式

$$
P(A\cup B)=P(A)+P(B)-P(AB). \nonumber
$$

对三个事件，有

$$
\begin{aligned}
P(A\cup B\cup C)
&= P(A)+P(B)+P(C)\\
&\quad -P(AB)-P(AC)-P(BC)\\
&\quad +P(ABC).
\end{aligned}
\nonumber
$$

推广到 $n$ 个事件，有

$$
\begin{aligned}
P\left(\bigcup_{i=1}^{n}A_i\right)
&=
\sum_{k=1}^{n}(-1)^{k+1}
\sum_{1\le i_1<i_2<\cdots<i_k\le n}
P\left(\bigcap_{r=1}^{k}A_{i_r}\right).
\end{aligned}
\nonumber
$$

（奇正偶负）

> PS: 前面写交集的时候 下标为 $i$ ，意为 $A_1 A_2 \cdots A_n$ 全部并起来。 $i_{r}$ 的意思是 $A$ 下标为 $r$
> 即 $A_{i_{1}} = A_{1}$

#### （2）减法公式 (相对补)

$$
P(A-B)=P(A)-P(AB). \nonumber
$$

#### （3）求逆公式

$$
P(\overline A)=1-P(A). \nonumber
$$

### 二、更高阶的概率公式

#### ① 条件概率公式

设 $A,B$ 为随机事件，且 $P(B)>0$，称

$$
P(A\mid B)=\frac{P(AB)}{P(B)} \nonumber
$$

为在事件 $B$ 发生条件下事件 $A$ 发生的条件概率。

由条件概率公式可得乘法公式：

$$
P(AB)=P(B)P(A\mid B). \nonumber
$$

若 $P(A)>0$，也有

$$
P(AB)=P(A)P(B\mid A). \nonumber
$$

推广到多个事件：

$$
\begin{aligned}
P\left(\bigcap_{i=1}^{n}A_i\right)
&=
\prod_{i=1}^{n}
P\left(
A_i\mid \bigcap_{j=1}^{i-1}A_j
\right),
\end{aligned}
\nonumber
$$

其中约定

$$
\begin{aligned}
\bigcap_{j=1}^{0}A_j
&=\Omega.
\end{aligned}
\nonumber
$$

$P(A_1A_2\cdots A_n)=P(A_1)P(A_2\mid A_1)P(A_3\mid A_1A_2)\cdots P(A_n\mid A_1A_2\cdots A_{n-1}).$

【注】条件概率也是概率，满足概率的所有性质和公式。

#### ② 全概率公式

设 $B_1,B_2,\cdots,B_n$ 为完备事件组，即

$$
\begin{aligned}
B_i\cap B_j &= \varnothing,\  (i\ne j),\\
\bigcup_{i=1}^{n}B_i &= \Omega.
\end{aligned}
\nonumber
$$

则事件 $A$ 的概率为

$$
\begin{aligned}
P(A)
&= \sum_{i=1}^{n}P(A\cap B_i)\\
&= \sum_{i=1}^{n}P(B_i)P(A\mid B_i).
\end{aligned}
\nonumber
$$

#### ③ 贝叶斯公式

设 $B_1,B_2,\cdots,B_n$ 为完备事件组，且 $P(A)>0$，则

$$
P(B_j\mid A)
=
\frac{P(A\mid B_j)P(B_j)}
{\sum_{i=1}^{n}P(A\mid B_i)P(B_i)}. \nonumber
$$

（不过是把条件概率公式的分子以原发生事件为条件展开为条件概率公式，再把分母用全概率公式展开罢了）

【注】若试验分为两步，第一步有 $n$ 种情况 $B_1,B_2,\cdots,B_n$ 构成完备事件组；若求第二步中事件 $A$ 的概率，用全概率公式。若已知事件 $A$ 发生，求第一步是哪种情况的概率，用贝叶斯公式。

### 三、高中三大概型

#### ① 古典概型

设试验只有有限个等可能的样本点，称此试验为古典概型。事件 $A$ 的概率为

$$
P(A)=\frac{A\text{ 中样本点数}}{\Omega\text{ 中样本点数}}. \nonumber
$$

#### ② 几何概型（算面积比）

设试验的样本空间为某区域，事件发生的可能性与其对应的几何度量成正比，则称此试验为几何概型。事件 $A$ 的概率为

$$
P(A)=\frac{A\text{ 的几何度量}}{\Omega\text{ 的几何度量}}. \nonumber
$$

这里的“几何度量”可以是长度、面积或体积。

#### ③ Bernoulli概型（独立重复，两个结果）

若试验**只**有两个可能结果 $A$ 和 $\overline A$，则称该试验为伯努利试验或伯努利概型。

将伯努利试验独立重复 $n$ 次，称为 $n$ 重伯努利试验。设

$$
P(A)=p,\qquad 0<p<1,
\nonumber
$$

则 $n$ 重伯努利试验中事件 $A$ 发生 $k$ 次的概率为

$$
\binom{n}{k}p^k(1-p)^{n-k},
\
k=0,1,\cdots,n. \nonumber
$$

### 四、必然事件与不可能事件

必然事件发生的概率为 $1$，但概率为 $1$ 的事件不一定是必然事件。

不可能事件发生的概率为 $0$，但概率为 $0$ 的事件不一定是不可能事件。

因此事件可以推概率，概率不能推事件。

### 五、一个重要不等式

由于

$$
\begin{aligned}
AB &\subset A,\\
AB &\subset B,
\end{aligned}
\nonumber
$$

所以

$$
\begin{aligned}
P(AB) &\le P(A),\\
P(AB) &\le P(B).
\end{aligned}
\nonumber
$$
