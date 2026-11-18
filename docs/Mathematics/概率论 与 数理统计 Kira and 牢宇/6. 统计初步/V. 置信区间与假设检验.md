## $V.$ 置信区间与假设检验

### 一、置信区间

#### 基本概念

置信区间表示：参数落在区间内部的概率较大。

显著性水平表示：参数落在区间外部的概率。

若置信水平为 $1-\alpha$，则显著性水平为 $\alpha$。

#### 求置信区间的一般步骤

第一步，找统计量，要求统计量中只含一个未知参数。

当 $\sigma$ 已知，估计 $\mu$ 时，常用统计量

$$
\frac{\overline X-\mu}{\sigma/\sqrt n}\sim N(0,1).
\nonumber
$$

当 $\sigma$ 未知，估计 $\mu$ 时，常用统计量

$$
\frac{\overline X-\mu}{S/\sqrt n}\sim t(n-1).
\nonumber
$$

第二步，找 $\alpha$ 分位点。

第三步，由概率不等式解出参数范围，即得到置信区间。

#### $\sigma$ 已知时，$\mu$ 的置信区间

若

$$
X\sim N(\mu,\sigma^2),
\nonumber
$$

且 $\sigma$ 已知，则

$$
\frac{\overline X-\mu}{\sigma/\sqrt n}\sim N(0,1).
\nonumber
$$

由

$$
P\left\{
-u_{\alpha/2}
<
\frac{\overline X-\mu}{\sigma/\sqrt n}
<
u_{\alpha/2}
\right\}
=
1-\alpha
\nonumber
$$

可得 $\mu$ 的 $1-\alpha$ 置信区间为

$$
\left(
\overline X-u_{\alpha/2}\frac{\sigma}{\sqrt n},
\quad
\overline X+u_{\alpha/2}\frac{\sigma}{\sqrt n}
\right).
\nonumber
$$

#### $\sigma$ 未知时，$\mu$ 的置信区间

若

$$
X\sim N(\mu,\sigma^2),
\nonumber
$$

且 $\sigma$ 未知，则

$$
\frac{\overline X-\mu}{S/\sqrt n}\sim t(n-1).
\nonumber
$$

由

$$
P\left\{
-t_{\alpha/2}(n-1)
<
\frac{\overline X-\mu}{S/\sqrt n}
<
t_{\alpha/2}(n-1)
\right\}
=
1-\alpha
\nonumber
$$

可得 $\mu$ 的 $1-\alpha$ 置信区间为

$$
\left(
\overline X-t_{\alpha/2}(n-1)\frac{S}{\sqrt n},
\quad
\overline X+t_{\alpha/2}(n-1)\frac{S}{\sqrt n}
\right).
\nonumber
$$

### 二、假设检验

#### 基本概念

假设检验中，显著性水平 $\alpha$ 表示观察值落在拒绝域中的概率。

通常：

$$
\text{观察值在接受域内}\Rightarrow\text{接受 }H_0;
\nonumber
$$

$$
\text{观察值在拒绝域内}\Rightarrow\text{拒绝 }H_0.
\nonumber
$$

**小区间接受，大区间不一定接受。**

**小区间拒绝，大区间不一定拒绝。**

#### 双边检验

若检验

$$
H_0:\mu=\mu_0,
\nonumber
$$

且 $\sigma$ 未知，则取统计量

$$
T=\frac{\overline X-\mu_0}{S/\sqrt n}.
\nonumber
$$

在 $H_0$ 成立时，

$$
T\sim t(n-1).
\nonumber
$$

双边检验的拒绝域为

$$
|T|>t_{\alpha/2}(n-1).
\nonumber
$$

即

$$
P\{|T|>t_{\alpha/2}(n-1)\}=\alpha.
\nonumber
$$

#### 单边检验

若检验

$$
H_0:\mu\ge \mu_0,
\nonumber
$$

则拒绝域通常取左侧：

$$
T<-t_\alpha(n-1).
\nonumber
$$

即

$$
P\{T<-t_\alpha(n-1)\}=\alpha.
\nonumber
$$

若检验

$$
H_0:\mu\le \mu_0,
\nonumber
$$

则拒绝域通常取右侧：

$$
T>t_\alpha(n-1).
\nonumber
$$

即

$$
P\{T>t_\alpha(n-1)\}=\alpha.
\nonumber
$$

#### 两类错误

**第一类错误：当原假设 $H_0$ 为真时，却拒绝 $H_0$。也称为弃真错误。**

**第二类错误：当原假设 $H_0$ 不为真时，却接受 $H_0$。也称为取伪错误。**
