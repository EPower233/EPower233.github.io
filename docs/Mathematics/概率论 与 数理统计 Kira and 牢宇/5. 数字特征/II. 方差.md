## $II.$ 方差

### 定义

随机变量 $X$ 的方差定义为

$$
DX=E(X-EX)^2.
\nonumber
$$

常用计算式为

$$
DX=EX^2-(EX)^2.
\nonumber
$$

$$
\boxed{\text{方差}=\text{平方的期望}-\text{期望的平方}.
\nonumber}
$$

### 性质

#### （1）常数平移不改变方差

$$
D(aX+c)=a^2DX.
\nonumber
$$

#### （2）和差的方差

$$
D(X\pm Y)=DX+DY\pm 2\operatorname{Cov}(X,Y).
\nonumber
$$

> Cov(X, Y) 为协方差, 下文会介绍

由此可得

$$
D(X\pm Y)=DX+DY
\Longleftrightarrow
X\text{ 与 }Y\text{ 不相关}.
\nonumber
$$

特别地，若 $X$ 与 $Y$ 相互独立，则

$$
D(X\pm Y)=DX+DY.
\nonumber
$$

#### （3）乘积的方差

若 $X$ 与 $Y$ 相互独立，则

$$
D(XY)
=
DX\cdot DY+(EX)^2DY+(EY)^2DX.
\nonumber
$$

线性组合的方差展开时，常数项忽略；组合中有相关项时应写协方差，不相关时协方差为 $0$，独立一定不相关。

> [!note] 
> 常数的方差为0.

