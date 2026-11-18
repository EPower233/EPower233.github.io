## $IV.$ 参数估计

### 一、估计量

> [!估计量与估计值的定义]
>
> 设总体分布函数 $F(x;\theta)$ 的形式已知，其中 $\theta$ 是待估参数。
>
> 设 $X_1,X_2,\ldots,X_n$ 为总体 $X$ 的一个样本，其样本值为 $x_1,x_2,\ldots,x_n$。
>
> 点估计的思想是：构造一个适当的统计量 $\hat\theta=\hat\theta(X_1,X_2,\ldots,X_n)$，并用它的观察值 $\hat\theta=\hat\theta(x_1,x_2,\ldots,x_n)$ 作为未知参数 $\theta$ 的近似值。
>
> 称 $\hat\theta=\hat\theta(X_1,X_2,\ldots,X_n)$ 为 $\theta$ 的估计量，称 $\hat\theta=\hat\theta(x_1,x_2,\ldots,x_n)$ 为 $\theta$ 的估计值。

构造[统计量](./I.%20统计基础知识#_3-统计量)

$$
\begin{aligned}
\hat\theta
&=
\hat\theta(X_1,X_2,\ldots,X_n)
\end{aligned}
\nonumber
$$

来估计[总体](./I.%20统计基础知识#_1-总体)分布中的未知参数 $\theta$，则称 $\hat\theta(X_1,X_2,\ldots,X_n)$ 为 $\theta$ 的估计量。

当样本观测值为 $x_1,x_2,\ldots,x_n$ 时，$\hat\theta(x_1,x_2,\ldots,x_n)$ 称为 $\theta$ 的估计值。

### 二、矩估计

#### 基本思想

矩估计的思想是：用样本矩去估计总体矩。

即令总体矩等于样本矩，通过解方程得到未知参数的估计量。

#### 原点矩

总体的 $k$ 阶原点矩为

$$
\begin{aligned}
EX^k.
\end{aligned}
\nonumber
$$

[样本的 k 阶原点矩](./I.%20统计基础知识#_4-样本-阶原点矩)为

$$
\begin{aligned}
\frac{1}{n}
\sum_{i=1}^{n}X_i^k.
\end{aligned}
\nonumber
$$

矩估计时可令

$$
\begin{aligned}
EX^k
&=
\frac{1}{n}
\sum_{i=1}^{n}X_i^k,
\\
k
&=
1,2,\ldots
\end{aligned}
\nonumber
$$

由此解出未知参数的矩估计量。

#### 中心矩

总体的 $k$ 阶中心矩为

$$
\begin{aligned}
E(X-EX)^k.
\end{aligned}
\nonumber
$$

[样本的 k 阶中心矩](./I.%20统计基础知识#_5-样本-阶中心矩)为

$$
\begin{aligned}
\frac{1}{n}
\sum_{i=1}^{n}
(X_i-\overline X)^k.
\end{aligned}
\nonumber
$$

矩估计时也可令

$$
\begin{aligned}
E(X-EX)^k
&=
\frac{1}{n}
\sum_{i=1}^{n}
(X_i-\overline X)^k,
\\
k
&=
1,2,\ldots
\end{aligned}
\nonumber
$$

由此解出未知参数的矩估计量。

#### 一个未知参数的情形

若总体分布中只有一个未知参数 $\theta$，通常只需要列一个矩方程。

常用做法是令

$$
\begin{aligned}
EX
&=
\overline X.
\end{aligned}
\nonumber
$$

由该方程解出 $\theta$，即可得到 $\theta$ 的矩估计量$\hat\theta.$

#### 两个未知参数的情形

若总体分布中有两个未知参数，例如 $\alpha,\theta$，则通常需要列两个矩方程。

可令

$$
\begin{cases}
EX=\overline X,\\[6pt]
EX^2=\dfrac{1}{n}\displaystyle\sum_{i=1}^{n}X_i^2.
\end{cases}
\nonumber
$$

由这两个方程解出 $\alpha,\theta$，即可得到 $\alpha,\theta$ 的矩估计量$\hat\alpha,\hat\theta.$

也可以根据题目形式选用中心矩方程，例如

$$
\begin{cases}
EX=\overline X,\\[6pt]
D(X)=\dfrac{1}{n}\displaystyle\sum_{i=1}^{n}(X_i-\overline X)^2.
\end{cases}
\nonumber
$$

#### 矩估计的依据

矩估计依靠大数定律。

样本矩会依概率收敛到总体矩，即

$$
\begin{aligned}
\frac{1}{n}
\sum_{i=1}^{n}X_i^k
&\xrightarrow{P}
EX^k.
\end{aligned}
\nonumber
$$

因此用样本矩代替总体矩是合理的。

> 注：
> 1）矩估计使用的前提是有关的总体矩存在；使用中心矩和原点矩均可。
> 2）用样本一阶原点矩 $\overline X$ 估计期望 $EX$，用样本二阶中心矩 $\dfrac{1}{n}\sum_{i=1}^{n}(X_i-\overline X)^2$ 估计方差 $DX$。

### 三、最大似然估计

#### 基本思想

最大似然估计的思想是：选择使已经发生的样本值出现概率最大的参数。

即选取使似然函数取得最大值的参数 $\theta$，作为 $\theta$ 的最大似然估计。

> [!所见即最大]
> 一位猎人与一名学生去野外打猎，突然一只兔子从面前经过，只听一声枪响，兔子应声倒下。  
>  
> 问：这一枪是谁打中的？  
>  
> 若只知道兔子被打中，而猎人命中兔子的概率明显大于学生，则更倾向于推测这一枪是猎人打中的。

#### 似然函数

对样本值 $x_1,x_2,\ldots,x_n$ 构造似然函数 $L(\theta)$。

若总体为离散型随机变量，则

$$
\begin{aligned}
L(\theta)
&=
\prod_{i=1}^{n}p(x_i;\theta).
\end{aligned}
\nonumber
$$

若总体为连续型随机变量，则

$$
\begin{aligned}
L(\theta)
&=
\prod_{i=1}^{n}f(x_i;\theta).
\end{aligned}
\nonumber
$$

其中，$p(x_i;\theta)$ 为概率函数，$f(x_i;\theta)$ 为概率密度函数。

#### 多总体写似然函数

**若样本来自多个总体，或者题目中有多组样本，则似然函数要把所有样本值对应的概率或密度全部乘起来。**

即不管有多少组样本，都应写成

$$
\begin{aligned}
L(\theta)
&=
\prod
\text{每一个样本值对应的概率或密度}.
\end{aligned}
\nonumber
$$

例如，若第一组样本来自密度 $f(x;\theta)$，第二组样本来自密度 $g(y;\theta)$，则

$$
\begin{aligned}
L(\theta)
&=
\prod_{i=1}^{m}f(x_i;\theta)
\prod_{j=1}^{n}g(y_j;\theta).
\end{aligned}
\nonumber
$$

#### 求最大似然估计的一般步骤

##### 步骤

###### ① 构造似然函数

设样本观测值为 $x_1,x_2,\ldots,x_n$，则似然函数为

$$
\begin{aligned}
L(\theta)
&=
L(x_1,x_2,\ldots,x_n;\theta)\\
&=
\prod_{i=1}^{n}f(x_i;\theta).
\end{aligned}
\nonumber
$$

###### ② 取对数

对似然函数取对数，得对数似然函数

$$
\begin{aligned}
\ln L(\theta)
&=
\ln L(x_1,x_2,\ldots,x_n;\theta)\\
&=
\sum_{i=1}^{n}\ln f(x_i;\theta).
\end{aligned}
\nonumber
$$

###### ③ 求似然方程

若只有一个未知参数 $\theta$，则解似然方程

$$
\begin{aligned}
\frac{d\ln L(\theta)}{d\theta}
&=
0.
\end{aligned}
\nonumber
$$

若方程有解，则所得解为 $\theta$ 的最大似然估计量，记作 $\hat\theta$。

若有两个未知参数 $\theta_1,\theta_2$，则解似然方程组

$$
\begin{cases}
\dfrac{\partial\ln L(\theta_1,\theta_2)}{\partial\theta_1}=0,\\[10pt]
\dfrac{\partial\ln L(\theta_1,\theta_2)}{\partial\theta_2}=0.
\end{cases}
\nonumber
$$

若方程组有解，则所得解为 $\theta_1,\theta_2$ 的最大似然估计量，记作 $\hat\theta_1,\hat\theta_2$。

#### 注意端点问题

若由 $\dfrac{d\ln L(\theta)}{d\theta}=0$ 无法得到参数，或者参数取值范围有端点限制，则最大值可能出现在区间端点。

最大似然估计不一定总由驻点给出，也可能由左端点或右端点给出。

### 四、估计量的评价标准

#### 1. 无偏性

设 $\hat\theta$ 为 $\theta$ 的估计量。若 $E\hat\theta=\theta$ , 则称 $\hat\theta$ 为 $\theta$ 的无偏估计量。

**判断无偏性就是对估计量取期望，看结果是否等于被估计的参数。**

#### 2. 有效性

设 $\hat\theta_1,\hat\theta_2$ 都是 $\theta$ 的无偏估计量。

若 $D(\hat\theta_1)<D(\hat\theta_2)$，则称 $\hat\theta_1$ 比 $\hat\theta_2$ 有效。

**无偏估计量之间比较有效性就是比较方差，方差越小越有效。**

#### 3. 一致性

设 $\hat\theta$ 为 $\theta$ 的估计量。

若 $\hat\theta\xrightarrow{P}\theta$，则称 $\hat\theta$ 为 $\theta$ 的一致估计量，也称相合估计量。

即对任意 $\varepsilon>0$，有

$$
\begin{aligned}
\lim_{n\to\infty}
P\{|\hat\theta-\theta|<\varepsilon\}
&=
1.
\end{aligned}
\nonumber
$$

等价地，

$$
\begin{aligned}
\lim_{n\to\infty}
P\{|\hat\theta-\theta|\ge \varepsilon\}
&=
0.
\end{aligned}
\nonumber
$$

**样本量越大，估计量越大概率靠近真参数。**

一致性的常用依据是[辛钦大数定律](../4.%20大数定律与中心极限定理/III.%20大数定律#_2、辛钦大数定律)：

$$
\begin{aligned}
\overline X
&\xrightarrow{P}
\mu.
\end{aligned}
\nonumber
$$
