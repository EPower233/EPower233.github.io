## $IV.$ 协方差

### 一、定义

对于二维随机变量 $(X,Y)$，若 $E[(X-EX)(Y-EY)]$ 存在，则称其为 $(X,Y)$ 的协方差，记作 $\operatorname{Cov}(X,Y)$。

协方差定义为

$$
\operatorname{Cov}(X,Y)
=
E[(X-EX)(Y-EY)].
\nonumber
$$

常用计算式为

$$
\operatorname{Cov}(X,Y)
=
E(XY)-EX\cdot EY.
\nonumber
$$

$$
\text{协方差}=\text{乘积的期望}-\text{期望的乘积}.
\nonumber
$$

> [!important] 推导
> $$
> \begin{aligned}
> \operatorname{Cov}(X,Y)
> &=
> E[(X-EX)(Y-EY)]\\
> &=
> E[XY-XEY-YEX+EX\cdot EY]\\
> &=
> E(XY)-EY\cdot EX-EX\cdot EY+EX\cdot EY\\
> &=
> E(XY)-EX\cdot EY.
> \end{aligned}
> \nonumber
> $$

> [!important] 符号含义
> 若 $\operatorname{Cov}(X,Y)>0$，则 $X,Y$ 有同向变化倾向。
>
> 若 $\operatorname{Cov}(X,Y)<0$，则 $X,Y$ 有反向变化倾向。
>
> 若 $\operatorname{Cov}(X,Y)=0$，则称 $X,Y$ 不相关。

---

### 二、性质

#### （1）交换律

$$
\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X).
\nonumber
$$

并且

$$
\operatorname{Cov}(X,X)=DX.
\nonumber
$$

#### （2）常数项

若 $c$ 为常数，则

$$
\operatorname{Cov}(X,c)=0.
\nonumber
$$

因为

$$
\begin{aligned}
\operatorname{Cov}(X,c)
&=
E(Xc)-EX\cdot Ec\\
&=
cEX-EX\cdot c\\
&=
0.
\end{aligned}
\nonumber
$$

#### （3）线性性质

$$
\operatorname{Cov}(aX+bY+c,Z)
=
a\operatorname{Cov}(X,Z)+b\operatorname{Cov}(Y,Z).
\nonumber
$$

特别地，

$$
\operatorname{Cov}(aX,bY)=ab\operatorname{Cov}(X,Y).
\nonumber
$$

线性组合的协方差展开时，系数可提出，常数项忽略，并使用分配律。

常用形式：

$$
\begin{aligned}
\operatorname{Cov}(X+Y,Z)
&=
\operatorname{Cov}(X,Z)+\operatorname{Cov}(Y,Z),\\
\operatorname{Cov}(X-Y,Z)
&=
\operatorname{Cov}(X,Z)-\operatorname{Cov}(Y,Z).
\end{aligned}
\nonumber
$$

#### （4）独立与不相关

若 $X,Y$ 相互独立，则

$$
\operatorname{Cov}(X,Y)=0.
\nonumber
$$

> [!important] 注意
> 独立可以推出不相关；不相关一般不能推出独立。

#### （5）方差展开式

$$
\begin{aligned}
D(X\pm Y)
&=
D(X)+D(Y)\pm 2\operatorname{Cov}(X,Y).
\end{aligned}
\nonumber
$$

推导：

$$
\begin{aligned}
D(X\pm Y)
&=
E\left\{[(X\pm Y)-E(X\pm Y)]^2\right\}\\
&=
E\left\{[X-EX]\pm[Y-EY]\right\}^2\\
&=
E(X-EX)^2+E(Y-EY)^2\\
&\quad\pm 2E[(X-EX)(Y-EY)]\\
&=
D(X)+D(Y)\pm 2\operatorname{Cov}(X,Y).
\end{aligned}
\nonumber
$$

---

> [!question] 题目
> 设 $X_1,X_2,X_3$ 独立同分布，且
>
> $$
> X_1,X_2,X_3\sim N(0,9).
> \nonumber
> $$
>
> 求
>
> $$
> \operatorname{Cov}(X_1+2X_2-3X_3,\ 2X_3+5).
> \nonumber
> $$
> 
> **题解：**
>
> 常数项 $5$ 对协方差无影响，所以
>
> $$
> \begin{aligned}
> \operatorname{Cov}(X_1+2X_2-3X_3,\ 2X_3+5)
> &=
> \operatorname{Cov}(X_1+2X_2-3X_3,\ 2X_3)\\
> &=
> \operatorname{Cov}(X_1,2X_3)
> +
> \operatorname{Cov}(2X_2,2X_3)\\
> &\quad
> -
> \operatorname{Cov}(3X_3,2X_3).
> \end{aligned}
> \nonumber
> $$
>
> 由于 $X_1,X_2,X_3$ 相互独立，故
>
> $$
> \operatorname{Cov}(X_1,2X_3)=0,
> \qquad
> \operatorname{Cov}(2X_2,2X_3)=0.
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \operatorname{Cov}(X_1+2X_2-3X_3,\ 2X_3+5)
> &=
> -\operatorname{Cov}(3X_3,2X_3)\\
> &=
> -6D(X_3)\\
> &=
> -6\cdot 9\\
> &=
> -54.
> \end{aligned}
> \nonumber
> $$

---

> [!question] 题目
> 【例 4.21】设随机变量 $X$ 和 $Y$ 的联合概率分布为
>
> $$
> \begin{array}{c|ccc}
> X\backslash Y & -1 & 0 & 1\\
> \hline
> 0 & 0.07 & 0.18 & 0.15\\
> 1 & 0.08 & 0.32 & 0.20
> \end{array}
> \nonumber
> $$
>
> 求 $X^2$ 和 $Y^2$ 的协方差 $\operatorname{Cov}(X^2,Y^2)$。
> 
> **题解：**
>
> $$
> \begin{aligned}
> \operatorname{Cov}(X^2,Y^2)
> &=
> E(X^2Y^2)-E(X^2)E(Y^2).
> \end{aligned}
> \nonumber
> $$
>
> 因为 $X^2$ 只在 $X=1$ 时取 $1$，$Y^2$ 只在 $Y=-1$ 或 $Y=1$ 时取 $1$，所以
>
> $$
> \begin{aligned}
> E(X^2Y^2)
> &=
> P\{X=1,Y=-1\}+P\{X=1,Y=1\}\\
> &=
> 0.08+0.20\\
> &=
> 0.28.
> \end{aligned}
> \nonumber
> $$
>
> 又
>
> $$
> \begin{aligned}
> E(X^2)
> &=
> P\{X=1\}\\
> &=
> 0.08+0.32+0.20\\
> &=
> 0.60,
> \end{aligned}
> \nonumber
> $$
>
> $$
> \begin{aligned}
> E(Y^2)
> &=
> P\{Y=-1\}+P\{Y=1\}\\
> &=
> (0.07+0.08)+(0.15+0.20)\\
> &=
> 0.50.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \operatorname{Cov}(X^2,Y^2)
> &=
> 0.28-0.60\cdot 0.50\\
> &=
> -0.02.
> \end{aligned}
> \nonumber
> $$

---

> [!question] 题目
> 【例 4.22】设随机变量 $(X,Y)$ 的密度函数为
>
> $$
> f(x,y)
> =
> \begin{cases}
> 3, & (x,y)\in G,\\
> 0, & \text{其他},
> \end{cases}
> \nonumber
> $$
>
> 其中区域 $G$ 由曲线 $y=x^2$ 与 $x=y^2$ 围成，求 $\operatorname{Cov}(X,Y)$。
> 
> **题解：**
>
> 区域 $G$ 位于第一象限，由 $y=x^2$ 与 $y=\sqrt{x}$ 围成，因此
>
> $$
> G=\{(x,y)\mid 0\le x\le 1,\ x^2\le y\le \sqrt{x}\}.
> \nonumber
> $$
>
> 由
>
> $$
> \operatorname{Cov}(X,Y)=E(XY)-EX\cdot EY
> \nonumber
> $$
>
> 计算各项。
>
> $$
> \begin{aligned}
> E(XY)
> &=
> \int_0^1\int_{x^2}^{\sqrt{x}}xy\cdot 3\,dy\,dx\\
> &=
> 3\int_0^1x\left[\frac{1}{2}y^2\right]_{x^2}^{\sqrt{x}}dx\\
> &=
> \frac{3}{2}\int_0^1x(x-x^4)\,dx\\
> &=
> \frac{3}{2}\int_0^1(x^2-x^5)\,dx\\
> &=
> \frac{3}{2}\left(\frac{1}{3}-\frac{1}{6}\right)\\
> &=
> \frac{1}{4}.
> \end{aligned}
> \nonumber
> $$
>
> $$
> \begin{aligned}
> EX
> &=
> \int_0^1\int_{x^2}^{\sqrt{x}}x\cdot 3\,dy\,dx\\
> &=
> 3\int_0^1x(\sqrt{x}-x^2)\,dx\\
> &=
> 3\int_0^1(x^{3/2}-x^3)\,dx\\
> &=
> 3\left(\frac{2}{5}-\frac{1}{4}\right)\\
> &=
> \frac{9}{20}.
> \end{aligned}
> \nonumber
> $$
>
> 由区域关于直线 $y=x$ 对称，同理
>
> $$
> EY=\frac{9}{20}.
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \operatorname{Cov}(X,Y)
> &=
> E(XY)-EX\cdot EY\\
> &=
> \frac{1}{4}
> -
> \frac{9}{20}\cdot\frac{9}{20}\\
> &=
> \frac{19}{400}.
> \end{aligned}
> \nonumber
> $$

---

> [!question] 题目
> 【例 4.23】设 $X_1,X_2,\cdots,X_n\ (n>2)$ 独立同分布，其方差 $\sigma^2>0$，令
>
> $$
> \overline X
> =
> \frac{1}{n}\sum_{i=1}^nX_i,
> \nonumber
> $$
>
> 则下列选项正确的是（  ）。
>
> A. $\operatorname{Cov}(X_1,\overline X)=\dfrac{\sigma^2}{n}$
>
> B. $\operatorname{Cov}(X_n,\overline X)=\sigma^2$
>
> C. $D(X_1+\overline X)=\dfrac{n+1}{n}\sigma^2$
>
> D. $D(X_1-\overline X)=\dfrac{n+1}{n}\sigma^2$
> 
> **题解：**
>
> 先算
>
> $$
> \begin{aligned}
> \operatorname{Cov}(X_1,\overline X)
> &=
> \operatorname{Cov}\left(X_1,\frac{1}{n}\sum_{i=1}^nX_i\right)\\
> &=
> \frac{1}{n}\sum_{i=1}^n\operatorname{Cov}(X_1,X_i)\\
> &=
> \frac{1}{n}\operatorname{Cov}(X_1,X_1)\\
> &=
> \frac{\sigma^2}{n}.
> \end{aligned}
> \nonumber
> $$
>
> 所以 A 正确，B 错误。
>
> 又
>
> $$
> \begin{aligned}
> D(\overline X)
> &=
> D\left(\frac{1}{n}\sum_{i=1}^nX_i\right)\\
> &=
> \frac{1}{n^2}D\left(\sum_{i=1}^nX_i\right)\\
> &=
> \frac{1}{n^2}\sum_{i=1}^nD(X_i)\\
> &=
> \frac{\sigma^2}{n}.
> \end{aligned}
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> D(X_1+\overline X)
> &=
> D(X_1)+D(\overline X)+2\operatorname{Cov}(X_1,\overline X)\\
> &=
> \sigma^2+\frac{\sigma^2}{n}+2\cdot\frac{\sigma^2}{n}\\
> &=
> \frac{n+3}{n}\sigma^2.
> \end{aligned}
> \nonumber
> $$
>
> 所以 C 错误。
>
> 同理
>
> $$
> \begin{aligned}
> D(X_1-\overline X)
> &=
> D(X_1)+D(\overline X)-2\operatorname{Cov}(X_1,\overline X)\\
> &=
> \sigma^2+\frac{\sigma^2}{n}-2\cdot\frac{\sigma^2}{n}\\
> &=
> \frac{n-1}{n}\sigma^2.
> \end{aligned}
> \nonumber
> $$
>
> 所以 D 错误。
>
> 答案：A。

