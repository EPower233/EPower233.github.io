## $V.$ 相关系数

### 一、定义

随机变量 $X$ 与 $Y$ 的相关系数定义为

$$
\begin{aligned}
\rho_{XY}
&=
\frac{\operatorname{Cov}(X,Y)}
{\sqrt{DX}\sqrt{DY}}\\
&=
\frac{E(XY)-EX\cdot EY}
{\sqrt{DX}\sqrt{DY}}.
\end{aligned}
\nonumber
$$

$$
\begin{aligned}
\text{相关系数}
&=
\frac{\text{协方差}}
{\text{标准差乘积}}.
\end{aligned}
\nonumber
$$

### 二、性质

#### （1）有界性

$$
\begin{aligned}
|\rho_{XY}|
&\le 1.
\end{aligned}
\nonumber
$$

#### （2）零相关

$$
\begin{aligned}
\rho_{XY}=0
&\Longleftrightarrow
\operatorname{Cov}(X,Y)=0\\
&\Longleftrightarrow
E(XY)=EX\cdot EY\\
&\Longleftrightarrow
D(X+Y)=DX+DY.
\end{aligned}
\nonumber
$$

即相关系数等于 $0$ 表示 $X$ 与 $Y$ 不相关。

#### （3）完全线性相关

$$
\begin{aligned}
\rho_{XY}=1
&\Longleftrightarrow
P\{Y=aX+b\}=1,\\
&\quad a>0.
\end{aligned}
\nonumber
$$

$$
\begin{aligned}
\rho_{XY}=-1
&\Longleftrightarrow
P\{Y=aX+b\}=1,\\
&\quad a<0.
\end{aligned}
\nonumber
$$

相关系数的几何意义：

1. $|\rho_{XY}|=1$ 表示所有点都在一条直线上。
2. $\rho_{XY}=1$ 表示所有点都在一条斜率为正的直线上。
3. $\rho_{XY}=-1$ 表示所有点都在一条斜率为负的直线上。

### 三、已知 $XY$ 相关系数，求 $UV$ 相关系数

若已知

$$
\rho_{XY},
\nonumber
$$

且

$$
\begin{align}
	U=aX+b,\\ V=cY+d,
\end{align}
\nonumber
$$

则

$$
\rho_{UV}
=
\begin{cases}
\rho_{XY},& ac>0,\\
-\rho_{XY},& ac<0.
\end{cases}
\nonumber
$$

即线性变换不改变相关系数的绝对值，只由两个一次项系数乘积的正负决定符号。

### 四、二项分布 $X,Y$ 独立，求 $X+Y$ 与 $X-Y$ 的相关系数

设

$$
\begin{aligned}
X &\sim B(m,p),\\
Y &\sim B(n,p),
\end{aligned}
\nonumber
$$

且 $X,Y$ 相互独立。

则

$$
\begin{aligned}
DX &= mp(1-p),\\
DY &= np(1-p).
\end{aligned}
\nonumber
$$

又因为 $X,Y$ 相互独立，所以

$$
\begin{aligned}
\operatorname{Cov}(X,Y)
&=0.
\end{aligned}
\nonumber
$$

于是

$$
\begin{aligned}
\operatorname{Cov}(X+Y,X-Y)
&=
\operatorname{Cov}(X,X)
-\operatorname{Cov}(X,Y)\\
&\quad
+\operatorname{Cov}(Y,X)
-\operatorname{Cov}(Y,Y)\\
&=
DX-DY.
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
D(X+Y)
&=DX+DY,\\
D(X-Y)
&=DX+DY.
\end{aligned}
\nonumber
$$

因此

$$
\begin{aligned}
\rho_{X+Y,\ X-Y}
&=
\frac{\operatorname{Cov}(X+Y,X-Y)}
{\sqrt{D(X+Y)}\sqrt{D(X-Y)}}\\
&=
\frac{DX-DY}{DX+DY}\\
&=
\frac{mp(1-p)-np(1-p)}
{mp(1-p)+np(1-p)}\\
&=
\frac{m-n}{m+n}.
\end{aligned}
\nonumber
$$

---

> [!question] 题目
> 【例 4.25】设随机变量 $X_1,X_2$ 的联合分布律为
>
> $$
> \begin{array}{c|cc}
> X_1\backslash X_2 & 0 & 1\\
> \hline
> 0 & 0.1 & 0.1\\
> 1 & 0.8 & 0
> \end{array}
> \nonumber
> $$
>
> 求 $X_1$ 与 $X_2$ 的相关系数 $\rho_{X_1X_2}$。
>
> **题解：**
>
> 先求期望：
>
> $$
> \begin{aligned}
> E(X_1)
> &=
> 0\cdot 0.2+1\cdot 0.8\\
> &=
> 0.8,
> \end{aligned}
> \qquad
> \begin{aligned}
> E(X_2)
> &=
> 0\cdot 0.9+1\cdot 0.1\\
> &=
> 0.1.
> \end{aligned}
> \nonumber
> $$
>
> 由于只有 $(X_1,X_2)=(1,1)$ 时 $X_1X_2=1$，而 $P\{X_1=1,X_2=1\}=0$，所以
>
> $$
> E(X_1X_2)=0.
> \nonumber
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \operatorname{Cov}(X_1,X_2)
> &=
> E(X_1X_2)-E(X_1)E(X_2)\\
> &=
> 0-0.8\cdot 0.1\\
> &=
> -0.08.
> \end{aligned}
> \nonumber
> $$
>
> 再求方差。由于 $X_1,X_2$ 均只取 $0,1$，故 $X_1^2=X_1,\ X_2^2=X_2$。
>
> $$
> \begin{aligned}
> D(X_1)
> &=
> E(X_1^2)-[E(X_1)]^2\\
> &=
> 0.8-0.8^2\\
> &=
> 0.16,
> \end{aligned}
> \qquad
> \begin{aligned}
> D(X_2)
> &=
> E(X_2^2)-[E(X_2)]^2\\
> &=
> 0.1-0.1^2\\
> &=
> 0.09.
> \end{aligned}
> \nonumber
> $$
>
> 所以
>
> $$
> \begin{aligned}
> \rho_{X_1X_2}
> &=
> \frac{\operatorname{Cov}(X_1,X_2)}
> {\sqrt{D(X_1)}\sqrt{D(X_2)}}\\
> &=
> \frac{-0.08}{\sqrt{0.16}\sqrt{0.09}}\\
> &=
> \frac{-0.08}{0.4\cdot 0.3}\\
> &=
> -\frac{2}{3}.
> \end{aligned}
> \nonumber
> $$

---

> [!question] 题目
> 【例 4.26】设随机变量 $X$ 与 $Y$ 的期望和方差存在，且
>
> $$
> D(X-Y)=DX+DY.
> \nonumber
> $$
>
> 则下列说法错误的是（  ）。
>
> A. $D(X+Y)=DX+DY$
>
> B. $EXY=EXEY$
>
> C. $X$ 与 $Y$ 不相关
>
> D. $X$ 与 $Y$ 相互独立
>
> **题解：**
>
> 由方差公式，
>
> $$
> \begin{aligned}
> D(X-Y)
> &=
> DX+DY-2\operatorname{Cov}(X,Y).
> \end{aligned}
> \nonumber
> $$
>
> 又因为 $D(X-Y)=DX+DY$，所以
>
> $$
> \operatorname{Cov}(X,Y)=0.
> \nonumber
> $$
>
> 因此 $X$ 与 $Y$ 不相关，且
>
> $$
> EXY=EXEY.
> \nonumber
> $$
>
> 并且
>
> $$
> \begin{aligned}
> D(X+Y)
> &=
> DX+DY+2\operatorname{Cov}(X,Y)\\
> &=
> DX+DY.
> \end{aligned}
> \nonumber
> $$
>
> 不相关不能推出相互独立，故错误的是 D。
>
> 答案：D。

> [!question] 题目
> 【例 4.27】设随机变量 $X,Y$ 不相关，其概率分布分别为
>
> $$
> X\sim
> \begin{pmatrix}
> 0 & 3\\
> 0.6 & 0.4
> \end{pmatrix},
> \qquad
> Y\sim
> \begin{pmatrix}
> -1 & 0\\
> 0.7 & 0.3
> \end{pmatrix}.
> \nonumber
> $$
>
> 则随机事件 $\{X=0\}$ 与 $\{Y=0\}$（  ）。
>
> A. 互不相容
>
> B. 相互独立
>
> C. 相互对立
>
> D. 不独立
>
> **题解：**
>
> 因为 $X,Y$ 不相关，所以
>
> $$
> E(XY)=EXEY.
> \nonumber
> $$
>
> 先求
>
> $$
> EX=0\cdot0.6+3\cdot0.4=1.2,
> \qquad
> EY=(-1)\cdot0.7+0\cdot0.3=-0.7.
> \nonumber
> $$
>
> 因此
>
> $$
> E(XY)=1.2\times(-0.7)=-0.84.
> \nonumber
> $$
>
> 由于 $XY$ 只可能取 $0$ 或 $-3$，所以
>
> $$
> \begin{aligned}
> E(XY)
> &=
> -3P\{X=3,Y=-1\}.
> \end{aligned}
> \nonumber
> $$
>
> 故
>
> $$
> P\{X=3,Y=-1\}=0.28.
> \nonumber
> $$
>
> 由边缘分布可得联合分布律：
>
> $$
> \begin{array}{c|cc}
> X\backslash Y & -1 & 0\\
> \hline
> 0 & 0.42 & 0.18\\
> 3 & 0.28 & 0.12
> \end{array}
> \nonumber
> $$
>
> 于是
>
> $$
> \begin{aligned}
> P\{X=0,Y=0\}
> &=
> 0.18,\\
> P\{X=0\}P\{Y=0\}
> &=
> 0.6\times0.3\\
> &=
> 0.18.
> \end{aligned}
> \nonumber
> $$
>
> 所以事件 $\{X=0\}$ 与 $\{Y=0\}$ 相互独立。
>
> 答案：B。

> [!question] 题目
> 【例 4.28】设二维随机变量 $(X,Y)$ [服从](../3.%20二维随机变量/VI.%20二维正态分布)
>
> $$
> N(\mu,\mu;\sigma^2,\sigma^2;0),
> \nonumber
> $$
>
>求 $E(XY^2)$.
>
> **题解：**
>
> 因为 $(X,Y)$ 服从二维正态分布，且相关系数为 $0$，所以 $X,Y$ 相互独立。
>
> 因此
>
> $$
> \begin{aligned}
> E(XY^2)
> &=
> E(X)E(Y^2).
> \end{aligned}
> \nonumber
> $$
>
> 又因为
>
> $$
> E(X)=\mu,
> \qquad
> E(Y^2)=D(Y)+[E(Y)]^2=\sigma^2+\mu^2,
> \nonumber
> $$
>
> 所以
>
> $$
> \begin{aligned}
> E(XY^2)
> &=
> \mu(\sigma^2+\mu^2).
> \end{aligned}
> \nonumber
> $$