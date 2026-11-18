## $I.$ 事件

### 一、事件的关系

#### （1）包含

若事件 A 发生，事件 B **一定**发生，则称 B 包含 A，或 A 包含于 B，记作

$$
A\subset B. \nonumber
$$

特别地，若 A⊂B 且 B⊂A，则称 A 与 B 相等，记作

$$
A=B. \nonumber
$$

<svg xmlns="http://www.w3.org/2000/svg" width="260" height="150" viewBox="0 0 260 150">
  <rect x="35" y="25" width="190" height="95" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <ellipse cx="120" cy="72" rx="78" ry="42" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <ellipse cx="105" cy="70" rx="42" ry="23" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <text x="96" y="78" font-size="28" font-family="Times New Roman, serif" fill="#1f4cff">A</text>
  <text x="160" y="78" font-size="28" font-family="Times New Roman, serif" fill="#1f4cff">B</text>
</svg>

#### （2）互不相容（互斥）

若事件 A 与 B 不能同时发生，即

$$
AB=\varnothing, \nonumber
$$

则称 A 与 B 互不相容，或称 A 与 B 互斥。

<svg xmlns="http://www.w3.org/2000/svg" width="260" height="150" viewBox="0 0 260 150">
  <rect x="35" y="25" width="190" height="95" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <ellipse cx="85" cy="72" rx="24" ry="26" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <ellipse cx="175" cy="72" rx="24" ry="26" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <text x="75" y="82" font-size="32" font-family="Times New Roman, serif" fill="#1f4cff">A</text>
  <text x="165" y="82" font-size="32" font-family="Times New Roman, serif" fill="#1f4cff">B</text>
</svg>

#### （3）对立（互逆）

若事件 $A$ 与 $B$ 不能同时发生，但必有一个发生，即

$$
A\cup B=\Omega,\qquad AB=\varnothing, \nonumber
$$

则称 $A$ 与 $B$ 对立，记作

$$
B=\overline A. \nonumber
$$

<svg xmlns="http://www.w3.org/2000/svg" width="260" height="150" viewBox="0 0 260 150">
  <rect x="35" y="25" width="190" height="95" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <line x1="125" y1="120" x2="150" y2="25" stroke="#1f4cff" stroke-width="3"/>
  <text x="75" y="82" font-size="32" font-family="Times New Roman, serif" fill="#1f4cff">A</text>
  <text x="155" y="82" font-size="32" font-family="Times New Roman, serif" fill="#1f4cff">A</text>
  <line x1="154" y1="52" x2="177" y2="52" stroke="#1f4cff" stroke-width="2.5"/>
</svg>

#### （4）独立

##### 两个事件相互独立

事件 $A$ 与事件 $B$ 相互独立，当且仅当

$$
P(AB)=P(A)P(B). \nonumber
$$

若 $0<P(B)<1$，（$B$ 不是必然事件或者不可能事件）则上述条件等价于

$$
P(A\mid B)=P(A). \nonumber
$$

于是也有

$$
P(A\mid \overline B)=P(A). \nonumber
$$

即 $B$ 发不发生不影响 $A$ 是否发生若事件 $A$ 与事件 $B$ 相互独立，则 $A$ 与 $\overline B$，$\overline A$ 与 $B$，$\overline A$ 与 $\overline B$ 也分别相互独立。

并且在 $0<P(B)<1$ 时，有

$$
P(A\mid B)=1 - P(\overline A\mid  B) = 1 - P(\overline A\mid \overline B). \nonumber
$$

上式等价于

$$
P(A\mid B)+P(\overline A\mid \overline B)=1. \nonumber
$$

> PS: 零概率事件或一概率事件与任意事件相互独立。因此，不可能事件或必然事件与任意事件相互独立。若事件 $A$ 与事件 $B$ 既相互独立又互不相容，则 $A$ 与 $B$ 至少有一个为零概率事件。

因为

$$
AB=\varnothing
\Rightarrow
P(AB)=0, \nonumber
$$

又由独立性可得

$$
P(AB)=P(A)P(B), \nonumber
$$

故

$$
P(A)P(B)=0. \nonumber
$$

##### $n$ 个事件相互独立

设事件为 $A_1,A_2,\cdots,A_n$。若对任意 $2\le k\le n$，任意不同下标 $i_1,i_2,\cdots,i_k$，均有

$$
\begin{aligned}
P\left(\bigcap_{\ell=1}^{k}A_{i_\ell}\right)
&=
\prod_{\ell=1}^{k}P(A_{i_\ell}),
\end{aligned}
\nonumber
$$

则称 $A_1,A_2,\cdots,A_n$ 相互独立。

（以后会大量使用上式的符号，该式等价于 $P(A_{i_1}A_{i_2}\cdots A_{i_k})=P(A_{i_1})P(A_{i_2})\cdots P(A_{i_k}) \nonumber.$ 之后不会做过多说明）

只验证两两独立不一定能推出相互独立；相互独立要求所有阶的交事件概率均可分解为概率乘积。

### 二、事件的运算

#### （1）事件的运算

##### 和（并）

事件 $A$ 与事件 $B$ 至少有一个发生，称为事件 $A$ 与事件 $B$ 的和，记作

$$
A\cup B. \nonumber
$$

<svg xmlns="http://www.w3.org/2000/svg" width="260" height="150" viewBox="0 0 260 150">
  <rect x="30" y="25" width="200" height="100" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <ellipse cx="100" cy="78" rx="48" ry="34" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <ellipse cx="152" cy="78" rx="48" ry="34" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <text x="68" y="50" font-size="30" font-family="Times New Roman, serif" fill="#1f4cff">A</text>
  <text x="175" y="50" font-size="30" font-family="Times New Roman, serif" fill="#1f4cff">B</text>
</svg>

##### 积（交）

事件 $A$ 与事件 $B$ 同时发生，称为事件 $A$ 与事件 $B$ 的积，记作

$$
AB. \nonumber
$$

<svg xmlns="http://www.w3.org/2000/svg" width="260" height="150" viewBox="0 0 260 150">
  <rect x="30" y="25" width="200" height="100" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <path d="
    M126 49.4
    A48 34 0 0 1 126 106.6
    A48 34 0 0 1 126 49.4
    Z
  " fill="#1f4cff"/>
  <ellipse cx="100" cy="78" rx="48" ry="34" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <ellipse cx="152" cy="78" rx="48" ry="34" fill="none" stroke="#1f4cff" stroke-width="3"/>
  <text x="64" y="50" font-size="30" font-family="Times New Roman, serif" fill="#1f4cff">A</text>
  <text x="180" y="50" font-size="30" font-family="Times New Roman, serif" fill="#1f4cff">B</text>
</svg>

##### 差（相对补）

事件 $A$ 发生但事件 $B$ 不发生，称为事件 $A$ 与事件 $B$ 的差，记作

$$
A-B. \nonumber
$$

显然

$$
A-B=A\overline B. \nonumber
$$

<svg xmlns="http://www.w3.org/2000/svg" width="260" height="150" viewBox="0 0 260 150">
<rect x="30" y="25" width="200" height="100" fill="none" stroke="#1f4cff" stroke-width="3"/>
<path d="M126 49.4 A48 34 0 1 0 126 106.6 A48 34 0 0 1 126 49.4 Z" fill="#ff2d2d" opacity="0.22"/>
<ellipse cx="100" cy="78" rx="48" ry="34" fill="none" stroke="#1f4cff" stroke-width="3"/>
<ellipse cx="152" cy="78" rx="48" ry="34" fill="none" stroke="#1f4cff" stroke-width="3"/>
<text x="62" y="50" font-size="30" font-family="Times New Roman, serif" fill="#1f4cff">A</text>
<text x="178" y="50" font-size="30" font-family="Times New Roman, serif" fill="#1f4cff">B</text>
</svg>

#### （2）事件的运算律

##### 交换律

$$
\begin{align}
A\cup B &= B\cup A,\\
AB &= BA.
\end{align}
\nonumber
$$

##### 结合律

$$
\begin{align}
A\cup(B\cup C) &= (A\cup B)\cup C,\\
A(BC) &= (AB)C.
\end{align}
\nonumber
$$

##### 分配律

$$
\begin{align}
A\cup(BC) &= (A\cup B)(A\cup C),\\
A(B\cup C) &= (AB)\cup(AC).
\end{align}
\nonumber
$$

##### 德·摩根律

!(p || q) = !p && !q

$$
\begin{align}
\overline{A\cup B} &= \overline A\,\overline B,\\
\overline{AB} &= \overline A\cup\overline B.
\end{align}
\nonumber
$$

##### 吸收律

$$
\begin{align}
A\cup(AB) &= A,\\
A(A\cup B) &= A.
\end{align}
\nonumber
$$

其直观原因是

$$
\begin{align}
AB &\subset A,\\
A &\subset A\cup B.
\end{align}
\nonumber
$$
