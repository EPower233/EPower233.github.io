## $I.$ 切比雪夫不等式

设随机变量 $X$ 的期望与方差均存在，则对任意 $\varepsilon>0$，有

$$
P\{|X-EX|\ge \varepsilon\}\le \frac{DX}{\varepsilon^2}.
\nonumber
$$

等价地，

$$
P\{|X-EX|< \varepsilon\}\ge 1-\frac{DX}{\varepsilon^2}.
\nonumber
$$

直观理解：

$X$ 落在 $EX$ 附近的概率至少为 $1-\dfrac{DX}{\varepsilon^2}$。

$X$ 距离 $EX$ 比较远的概率至多为 $\dfrac{DX}{\varepsilon^2}$。

因此，当方差越小，随机变量越集中在期望附近。

若记

$$
A=\{|X-EX|<\varepsilon\},
\nonumber
$$

则

$$
P(A)\ge 1-\frac{DX}{\varepsilon^2}.
\nonumber
$$

这里 $\varepsilon$ 可以任意选取正数。

> [!important]
> 使用切比雪夫不等式时，随机变量必须先减去它自己的期望：
>
> $$
> \begin{aligned}
> |X-\mu|
> &=
> |X-E(X)|.
> \end{aligned}
> \nonumber
> $$

### 证明

以连续型随机变量为例，设 $X$ 的概率密度为 $f(x)$。由定义，

$$
\begin{aligned}
P\{|X-E(X)|\ge \varepsilon\}
&=
\int_{|x-E(X)|\ge\varepsilon} f(x)\,dx.
\end{aligned}
\nonumber
$$

当 $|x-E(X)|\ge\varepsilon$ 时，有

$$
\begin{aligned}
\frac{|x-E(X)|}{\varepsilon}
&\ge
1,
\\
\frac{(x-E(X))^2}{\varepsilon^2}
&\ge
1.
\end{aligned}
\nonumber
$$

因此

$$
\begin{aligned}
P\{|X-E(X)|\ge \varepsilon\}
&=
\int_{|x-E(X)|\ge\varepsilon} f(x)\,dx\\
&\le
\int_{|x-E(X)|\ge\varepsilon}
\frac{(x-E(X))^2}{\varepsilon^2}f(x)\,dx\\
&\le
\frac{1}{\varepsilon^2}
\int_{-\infty}^{+\infty}
(x-E(X))^2f(x)\,dx\\
&=
\frac{D(X)}{\varepsilon^2}\\
&=
\frac{\sigma^2}{\varepsilon^2}.
\end{aligned}
\nonumber
$$

---

> [!question] 题目
> 【例 4.19】设随机变量 $X$ 的方差为 $2$，则根据切比雪夫不等式有估计
>
> $$
> P\{|X-EX|\ge 2\}\le \ ?
> \nonumber
> $$
>
> **题解：**
>
> 由切比雪夫不等式，
>
> $$
> \begin{aligned}
> P\{|X-EX|\ge 2\}
> &\le
> \frac{D(X)}{2^2}\\
> &=
> \frac{2}{4}\\
> &=
> \frac{1}{2}.
> \end{aligned}
> \nonumber
> $$

> [!question] 题目
> 【例 4.20】设随机变量 $X,Y$ 的数学期望都是 $2$，方差分别为 $1$ 和 $4$，而相关系数为 $0.5$，则根据切比雪夫不等式
>
> $$
> P\{|X-Y|\ge 6\}\le \ ?
> \nonumber
> $$
>
> **题解：**
>
> 先把 $X-Y$ 看成一个新的随机变量。由于
>
> $$
> \begin{aligned}
> E(X-Y)
> &=
> E(X)-E(Y)\\
> &=
> 2-2\\
> &=
> 0,
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> \begin{aligned}
> P\{|X-Y|\ge 6\}
> &=
> P\{|(X-Y)-E(X-Y)|\ge 6\}.
> \end{aligned}
> \nonumber
> $$
>
> 由切比雪夫不等式，
>
> $$
> \begin{aligned}
> P\{|X-Y|\ge 6\}
> &\le
> \frac{D(X-Y)}{6^2}.
> \end{aligned}
> \nonumber
> $$
>
> 又因为 $\rho_{XY}=0.5$，所以
>
> $$
> \begin{aligned}
> \operatorname{Cov}(X,Y)
> &=
> \rho_{XY}\sqrt{D(X)}\sqrt{D(Y)}\\
> &=
> 0.5\sqrt{1}\sqrt{4}\\
> &=
> 1.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> D(X-Y)
> &=
> D(X)+D(Y)-2\operatorname{Cov}(X,Y)\\
> &=
> 1+4-2\\
> &=
> 3.
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> \begin{aligned}
> P\{|X-Y|\ge 6\}
> &\le
> \frac{3}{36}\\
> &=
> \frac{1}{12}.
> \end{aligned}
> \nonumber
> $$

