## $V.$ 三种特殊积分

### 一、伽马(Gamma)函数

伽马函数定义为

$$
\begin{aligned}
\Gamma(\alpha)
&=
\displaystyle\int_0^{+\infty}x^{\alpha-1}e^{-x}\,dx,
\qquad \alpha>0.
\end{aligned}
\nonumber
$$

判断伽马积分时，核心是看 $x$ 的幂次。若出现

$$
\begin{aligned}
\displaystyle\int_0^{+\infty}x^n e^{-x}\,dx,
\end{aligned}
\nonumber
$$

则它对应

$$
\begin{aligned}
\Gamma(n+1).
\end{aligned}
\nonumber
$$

例如

$$
\begin{aligned}
\displaystyle\int_0^{+\infty}x^\alpha e^{-x}\,dx
&= \Gamma(\alpha+1),\\
\displaystyle\int_0^{+\infty}\sqrt{x}\,e^{-x}\,dx
&= \Gamma\left(\frac32\right),\\
\displaystyle\int_0^{+\infty}x^2e^{-x}\,dx
&= \Gamma(3).
\end{aligned}
\nonumber
$$

伽马函数的性质为

$$
\begin{aligned}
\Gamma(\alpha+1)
&= \alpha\Gamma(\alpha),\\
\Gamma(1)
&= 1,\\
\Gamma\left(\frac12\right)
&= \sqrt{\pi}.
\end{aligned}
\nonumber
$$

对于正整数 $n$，有

$$
\begin{aligned}
\Gamma(n+1)
&= n!.
\end{aligned}
\nonumber
$$

即

$$
\begin{aligned}
\displaystyle\int_0^{+\infty}x^n e^{-x}\,dx
&= n!.
\end{aligned}
\nonumber
$$

特别地，

$$
\begin{aligned}
\Gamma\left(\frac12\right)
&= \sqrt{\pi},\\
\Gamma(1)
&= \displaystyle\int_0^{+\infty}e^{-x}\,dx\\
&= 1,\\
\Gamma(n+1)
&= \displaystyle\int_0^{+\infty}x^ne^{-x}\,dx\\
&= n!.
\end{aligned}
\nonumber
$$

例如

$$
\begin{aligned}
\displaystyle\int_0^{+\infty}\sqrt{x}\,e^{-x}\,dx
&= \Gamma\left(\frac32\right)\\
&= \frac12\Gamma\left(\frac12\right)\\
&= \frac{\sqrt{\pi}}{2}.
\end{aligned}
\nonumber
$$

又如

$$
\begin{aligned}
\displaystyle\int_0^{+\infty}x^3e^{-x}\,dx
&= \Gamma(4)\\
&= 3!\\
&= 6.
\end{aligned}
\nonumber
$$

若积分不是标准的 $e^{-x}$，需要先凑成伽马积分。

例如

$$
\begin{aligned}
\displaystyle\int_0^{+\infty}x^3e^{-2x}\,dx
&=
\frac{1}{16}\displaystyle\int_0^{+\infty}(2x)^3e^{-2x}\,d(2x)\\
&=
\frac{1}{16}\displaystyle\int_0^{+\infty}u^3e^{-u}\,du\\
&=
\frac{1}{16}\Gamma(4)\\
&=
\frac{1}{16}\cdot 3!\\
&=
\frac{3}{8}.
\end{aligned}
\nonumber
$$

又如

$$
\begin{aligned}
\displaystyle\int_0^{+\infty}xe^{-x^2}\,dx
&=
\frac12\displaystyle\int_0^{+\infty}e^{-x^2}\,d(x^2)\\
&=
\frac12\displaystyle\int_0^{+\infty}e^{-u}\,du\\
&=
\frac12\Gamma(1)\\
&=
\frac12.
\end{aligned}
\nonumber
$$

### 二、泊松积分（Poisson）

$$
\displaystyle\int_{-\infty}^{+\infty}e^{-x^2}\,dx=\sqrt{\pi}. \nonumber
$$

$$
\displaystyle\int_{-\infty}^{+\infty}e^{-\frac{x^2}{2}}\,dx=\sqrt{2\pi}. \nonumber
$$

### 三、指数零到无穷积分

当 $\alpha>0$ 时，

$$
\displaystyle\int_0^{+\infty}e^{-\alpha x}\,dx
=
\left[-\frac1\alpha e^{-\alpha x}\right]_0^{+\infty}
=
\frac1\alpha. \nonumber
$$
