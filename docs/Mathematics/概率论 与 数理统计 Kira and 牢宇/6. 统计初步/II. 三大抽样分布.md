## $II.$ 三大抽样分布

> [!上侧 α 分位点]
>
> 设随机变量 $X$ 的分布函数为 $F_X(x)$。对给定的 $\alpha$，其中
>
> $$
> \begin{aligned}
> 0<\alpha<1,
> \end{aligned}
> \nonumber
> $$
>
> 若存在实数 $x_\alpha$，使得
>
> $$
> \begin{aligned}
> P\{X>x_\alpha\}
> &=
> \alpha,
> \end{aligned}
> \nonumber
> $$
>
> 则称 $x_\alpha$ 为随机变量 $X$ 的上侧 $\alpha$ 分位点。
>
> 若 $X$ 为连续型随机变量，则上式等价于
>
> $$
> \begin{aligned}
> P\{X\le x_\alpha\}
> &=
> 1-\alpha,
> \end{aligned}
> \nonumber
> $$
>
> 即
>
> $$
> \begin{aligned}
> F_X(x_\alpha)
> &=
> 1-\alpha.
> \end{aligned}
> \nonumber
> $$

### 一、$\chi^2$ 分布

#### （1）**定义**

设随机变量 $X_1,X_2,\cdots,X_n$ 相互独立，且均服从 $N(0,1)$，称

$$
\chi^2=X_1^2+X_2^2+\cdots+X_n^2
\nonumber
$$

服从自由度为 $n$ 的 $\chi^2$ 分布，记作

$$
\chi^2\sim \chi^2(n).
\nonumber
$$

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="320" height="320"><defs/><g transform="scale(2,2)"><g id="background-94a4f06a"><rect fill="white" stroke="none" x="0" y="0" width="160" height="160" class="dcg-svg-background"/></g><g id="graphpaper-94a4f06a"><g id="axis-94a4f06a"><g id="yaxis-94a4f06a"><title>Y axis</title><g><path fill="none" stroke="rgb(0,0,0)" class="dcg-svg-axis-line" paint-order="fill stroke markers" d=" M 26 0 L 26 160" stroke-opacity="0.9" stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray=""/></g></g><g id="xaxis-94a4f06a"><title>X axis</title><g><path fill="none" stroke="rgb(0,0,0)" class="dcg-svg-axis-line" paint-order="fill stroke markers" d=" M 0 88 L 160 88" stroke-opacity="0.9" stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray=""/></g></g><g><g class="dcg-svg-axis-value"><text fill="none" stroke="#ffffff" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="18.461825731231485" y="100.27668789179525" text-anchor="middle" stroke-miterlimit="2" stroke-width="3" stroke-dasharray="">0</text><text fill="#000000" stroke="none" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="18.461825731231485" y="100.27668789179525" text-anchor="middle">0</text></g><g><path fill="none" stroke="rgb(0,0,0)" class="dcg-svg-tickmark" paint-order="fill stroke markers" d=" M 107 85 L 107 91" stroke-opacity="0.9" stroke-miterlimit="2" stroke-width="1.5" stroke-dasharray=""/></g><g class="dcg-svg-axis-value"><text fill="none" stroke="#ffffff" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="107.19753998515684" y="100.27668789179525" text-anchor="middle" stroke-miterlimit="2" stroke-width="3" stroke-dasharray="">10</text><text fill="#000000" stroke="none" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="107.19753998515684" y="100.27668789179525" text-anchor="middle">10</text></g></g></g></g><g id="expressions-94a4f06a"><g id="sketch-94a4f06a"><title>運算式 8</title><path fill="#000000" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><g><path fill="none" stroke="#000000" class="dcg-svg-curve" paint-order="fill stroke markers" d=" M 26.245159032775675 87.55668789179525 L 26.245159032775675 87.55668789179525 L 26.401369066022067 87.45666135320177 L 26.674736624203256 87.10816826684282 L 27.06526170731924 86.40178387415526 L 27.57294431537002 85.25091137748275 L 28.23683695666719 83.49088990391144 L 29.13504464783395 80.83397560258709 L 30.697144980297885 75.88449831897995 L 33.001242970682185 68.63068412304239 L 34.36808076158813 64.62581346231224 L 35.57870851924768 61.34780560643253 L 36.71123126028403 58.53818722225331 L 37.804701493008785 56.07347675047461 L 38.85911921742194 53.931752152228924 L 39.91353694183509 52.020080009811764 L 40.92890215793665 50.39294537276533 L 41.983319882349804 48.918969887961644 L 43.03773760676296 47.656696058582945 L 44.01405031455292 46.66843659756255 L 44.95131051403128 45.87516499963107 L 45.88857071350964 45.22640688561764 L 46.7867784046764 44.732986375130956 L 47.684986095843165 44.35800386872967 L 48.58319378700993 44.09441276782805 L 49.520453986488285 43.9305599202948 L 50.45771418596665 43.87255903089288 L 51.43402689375661 43.91645738045307 L 52.44939210985816 44.066126311325164 L 53.54286234258292 44.33560180754007 L 54.71443759193087 44.73687284065013 L 55.96411785790201 45.27922006501302 L 57.33095564880796 45.99076474420581 L 58.854003472960294 46.908311904792924 L 60.57231383867062 48.07418105290403 L 62.56399176256213 49.56217162718053 L 64.98524727788123 51.51409094744392 L 68.34376299267868 54.375827403402425 L 77.32583990434631 62.0921821576095 L 80.60625060252057 64.72760218388083 L 83.57424123420205 66.97385454096607 L 86.38602183263711 68.96692915412372 L 89.119697414449 70.77239001523483 L 91.81432048794929 72.42248164538366 L 94.46989105313799 73.92374083314819 L 97.12546161832667 75.30397882548468 L 99.82008469182695 76.58539612477468 L 102.55376027363883 77.768665631904 L 105.36554087207391 78.87020700147454 L 108.2554264871322 79.88845750677045 L 111.22341711881367 80.82318647918356 L 114.34761778374154 81.69588005923755 L 117.5889759736042 82.49205758548995 L 121.02559670502485 83.22733564095749 L 124.6574799780035 83.89655229442756 L 128.56273080916333 84.50813611498073 L 132.74134919850434 85.05587160348769 L 137.31049267096137 85.54812496753505 L 142.34826624315755 85.98397364162541 L 147.9718274400277 86.36375542903235 L 154.37643880312982 86.68928223590487 L 160 86.90302028539807" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray=""/></g></g><g id="sketch-94a4f06a"><title>運算式 9</title><path fill="#6042a6" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><g><path fill="none" stroke="#6042a6" class="dcg-svg-curve" paint-order="fill stroke markers" d=" M 70.76896855658532 87.55668789179525 L 70.76896855658532 87.55668789179525 L 160 87.55668789179525" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray=""/></g><path fill="#6042a6" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><g><path fill="none" stroke="#6042a6" class="dcg-svg-curve" paint-order="fill stroke markers" d=" M 70.76896855658532 56.48815890041826 L 70.76896855658532 56.48815890041826 L 76.31417926335331 61.25154101355217 L 79.75064787036447 64.05470433148268 L 82.79660868112437 66.39903157534815 L 85.6473155937586 68.45649740064222 L 88.38087016751749 70.29746535874422 L 91.07537396165124 71.98276751986522 L 93.73082697615988 73.51824228067693 L 96.38627999066848 74.93170811669316 L 99.08078378480222 76.2454574211948 L 101.8143383585611 77.4598339551433 L 104.5869437119451 78.57647477233098 L 107.43765062457936 79.61152709005918 L 110.40550987608898 80.5762908371239 L 113.49052146647401 81.4672139324949 L 116.69268539573442 82.28237100213128 L 120.0510524434953 83.02947113239483 L 123.64372416900696 83.72010258000122 L 127.4707005722694 84.34749295676973 L 131.5710324329077 84.91259964419731 L 136.02282131017216 85.41956641480103 L 140.904168763313 85.86923012985557 L 146.37127791083077 86.26568660196963 L 152.54130109160076 86.60597256658998 L 159.68759376299897 86.8926182261695 L 160 86.90302028539807" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray=""/></g><path fill="#6042a6" stroke="none" class="dcg-svg-region" paint-order="stroke fill markers" d=" M 70.76896855658532 87.55668789179525 L 160 87.55668789179525 L 160 86.90302028539807 L 159.68759376299897 86.8926182261695 L 152.54130109160076 86.60597256658998 L 146.37127791083077 86.26568660196963 L 140.904168763313 85.86923012985557 L 136.02282131017216 85.41956641480103 L 131.5710324329077 84.91259964419731 L 127.4707005722694 84.34749295676973 L 123.64372416900696 83.72010258000122 L 120.0510524434953 83.02947113239483 L 116.69268539573442 82.28237100213128 L 113.49052146647401 81.4672139324949 L 110.40550987608898 80.5762908371239 L 107.43765062457936 79.61152709005918 L 104.5869437119451 78.57647477233098 L 101.8143383585611 77.4598339551433 L 99.08078378480222 76.2454574211948 L 96.38627999066848 74.93170811669316 L 93.73082697615988 73.51824228067693 L 91.07537396165124 71.98276751986522 L 88.38087016751749 70.29746535874422 L 85.6473155937586 68.45649740064222 L 82.79660868112437 66.39903157534815 L 79.75064787036447 64.05470433148268 L 76.31417926335331 61.25154101355217 L 70.76896855658532 56.48815890041826 L 70.76896855658532 87.55668789179525" fill-opacity="0.4"/></g></g><g id="labels-94a4f06a"/><g id="labels-94a4f06a"/></g></svg>

特别地，若

$$
X\sim N(0,1),
\nonumber
$$

则

$$
X^2\sim \chi^2(1).
\nonumber
$$

相互独立的标准正态随机变量的平方和服从卡方分布；**有几个平方，自由度就是几。**

#### （2）性质

##### 可加性

若 $\chi_1^2$ 与 $\chi_2^2$ 相互独立，且

$$
\begin{align}
\chi_1^2\sim\chi^2(n_1),
\\
\chi_2^2\sim\chi^2(n_2),
\end{align}
\nonumber
$$

则

$$
\chi_1^2+\chi_2^2\sim\chi^2(n_1+n_2).
\nonumber
$$

##### 分位点

设

$$
\chi^2\sim \chi^2(n).
\nonumber
$$

对给定的 $\alpha(0<\alpha<1)$，若

$$
P\{\chi^2>\chi_\alpha^2(n)\}=\alpha,
\nonumber
$$

则称 $\chi_\alpha^2(n)$ 为 $\chi^2(n)$ 分布的上侧 $\alpha$ 分位点。

直观上，$\chi_\alpha^2(n)$ 右边的面积为 $\alpha$。

##### 数学期望和方差

若

$$
\chi^2\sim\chi^2(n),
\nonumber
$$

则

$$
\begin{align}
E(\chi^2)=n,
\\
D(\chi^2)=2n.
\end{align}
\nonumber
$$

###### 证明

设

$$
\begin{aligned}
Z_i
&\sim N(0,1),\\
i
&\in
\{\,m\in\mathbb N^*\mid m\le n\,\},
\end{aligned}
\nonumber
$$

且 $Z_1,Z_2,\ldots,Z_n$ 相互独立。

令

$$
\begin{aligned}
X
&=
\sum_{i=1}^{n}Z_i^2.
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
X
&\sim \chi^2(n).
\end{aligned}
\nonumber
$$

由期望的线性性质可得

$$
\begin{aligned}
EX
&=
E\left(
\sum_{i=1}^{n}Z_i^2
\right)\\
&=
\sum_{i=1}^{n}EZ_i^2.
\end{aligned}
\nonumber
$$

因为

$$
\begin{aligned}
Z_i
&\sim N(0,1),
\end{aligned}
\nonumber
$$

所以

$$
\begin{aligned}
EZ_i &= 0,\\
DZ_i &= 1.
\end{aligned}
\nonumber
$$

又由

$$
\begin{aligned}
DZ_i
&=
EZ_i^2-(EZ_i)^2,
\end{aligned}
\nonumber
$$

可得

$$
\begin{aligned}
EZ_i^2
&=
DZ_i+(EZ_i)^2\\
&=
1+0^2\\
&=
1.
\end{aligned}
\nonumber
$$

因此

$$
\begin{aligned}
EX
&=
\sum_{i=1}^{n}EZ_i^2\\
&=
\sum_{i=1}^{n}1\\
&=
n.
\end{aligned}
\nonumber
$$

由于 $Z_1,Z_2,\ldots,Z_n$ 相互独立，所以 $Z_1^2,Z_2^2,\ldots,Z_n^2$ 也相互独立。

因此由方差的可加性可得

$$
\begin{aligned}
DX
&=
D\left(
\sum_{i=1}^{n}Z_i^2
\right)\\
&=
\sum_{i=1}^{n}D(Z_i^2).
\end{aligned}
\nonumber
$$

下面计算 $D(Z_i^2)$。

由方差公式可得

$$
\begin{aligned}
D(Z_i^2)
&=
E\left[(Z_i^2)^2\right]
-
\left(EZ_i^2\right)^2\\
&=
EZ_i^4
-
\left(EZ_i^2\right)^2.
\end{aligned}
\nonumber
$$

由标准正态分布的偶数阶矩公式，

$$
\begin{aligned}
E(Z_i^{2k})
&=
\prod_{j=1}^{k}(2j-1),
\end{aligned}
\nonumber
$$

取 $k=2$，得

$$
\begin{aligned}
EZ_i^4
&=
\prod_{j=1}^{2}(2j-1)\\
&=
1\cdot 3\\
&=
3.
\end{aligned}
\nonumber
$$

又因为

$$
\begin{aligned}
EZ_i^2
&=1,
\end{aligned}
\nonumber
$$

所以

$$
\begin{aligned}
D(Z_i^2)
&=
EZ_i^4
-
\left(EZ_i^2\right)^2\\
&=
3-1^2\\
&=
2.
\end{aligned}
\nonumber
$$

于是

$$
\begin{aligned}
DX
&=
\sum_{i=1}^{n}D(Z_i^2)\\
&=
\sum_{i=1}^{n}2\\
&=
2n.
\end{aligned}
\nonumber
$$

###### 结论

**因此，若**

$$
\begin{aligned}
X
&\sim \chi^2(n),
\end{aligned}
\nonumber
$$

**则**

$$
\boxed{
\begin{aligned}
EX &= n,\\
DX &= 2n.
\end{aligned}}
\nonumber
$$

### 二、$F$ 分布

#### （1）定义

设随机变量 $X$ 与 $Y$ 相互独立，且

$$
\begin{align}
X\sim\chi^2(n_1),
\\
Y\sim\chi^2(n_2).
\end{align}
\nonumber
$$

称

$$
F=\frac{X/n_1}{Y/n_2}
\nonumber
$$

服从自由度为 $n_1,n_2$ 的 $F$ 分布，记作

$$
F\sim F(n_1,n_2).
\nonumber
$$

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="320" height="320"><defs/><g transform="scale(2,2)"><g id="background-cdd72f19"><rect fill="white" stroke="none" x="0" y="0" width="160" height="160" class="dcg-svg-background"/></g><g id="graphpaper-cdd72f19"><g id="axis-cdd72f19"><g id="yaxis-cdd72f19"><title>Y axis</title><g><path fill="none" stroke="rgb(0,0,0)" class="dcg-svg-axis-line" paint-order="fill stroke markers" d=" M 1 0 L 1 160" stroke-opacity="0.9" stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray=""/></g></g><g id="xaxis-cdd72f19"><title>X axis</title><g><path fill="none" stroke="rgb(0,0,0)" class="dcg-svg-axis-line" paint-order="fill stroke markers" d=" M 0 102 L 160 102" stroke-opacity="0.9" stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray=""/></g></g><g><g class="dcg-svg-axis-value"><text fill="none" stroke="#ffffff" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="-6.424999094577757" y="114.38313693258594" text-anchor="middle" stroke-miterlimit="2" stroke-width="3" stroke-dasharray="">0</text><text fill="#000000" stroke="none" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="-6.424999094577757" y="114.38313693258594" text-anchor="middle">0</text></g><g><path fill="none" stroke="rgb(0,0,0)" class="dcg-svg-tickmark" paint-order="fill stroke markers" d=" M 116 99 L 116 105" stroke-opacity="0.9" stroke-miterlimit="2" stroke-width="1.5" stroke-dasharray=""/></g><g class="dcg-svg-axis-value"><text fill="none" stroke="#ffffff" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="116.02224910026304" y="114.38313693258594" text-anchor="middle" stroke-miterlimit="2" stroke-width="3" stroke-dasharray="">2</text><text fill="#000000" stroke="none" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="116.02224910026304" y="114.38313693258594" text-anchor="middle">2</text></g></g></g></g><g id="expressions-cdd72f19"><g id="sketch-cdd72f19"><title>表达式2</title><path fill="#000000" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><g><path fill="none" stroke="#000000" class="dcg-svg-curve" paint-order="fill stroke markers" d=" M 7.549516567451064e-15 102.30027641381096 L 7.549516567451064e-15 102.30027641381096 L 0.39062500000000766 101.95325036651921 L 0.7812500000000074 101.75248116635643 L 1.1718750000000075 101.67028414612972 L 1.9921875000000075 101.56612483674765 L 2.4218750000000075 101.37312614477617 L 2.890625000000007 101.04536974090004 L 3.437500000000007 100.51839260355631 L 4.062500000000007 99.74473740042839 L 4.804687500000007 98.62201291327122 L 5.664062500000007 97.09716026862102 L 6.679687500000007 95.06181041837198 L 8.007812500000007 92.1541223815495 L 13.476562500000007 79.9192691125187 L 14.882812500000007 77.14453426048334 L 16.210937500000007 74.74719674690515 L 17.500000000000007 72.64130083947222 L 18.750000000000007 70.81153638648594 L 20.000000000000007 69.189729287197 L 21.210937500000007 67.81226799672942 L 22.382812500000007 66.65410685817795 L 23.515625000000007 65.69062710044957 L 24.648437500000007 64.8725416601566 L 25.78125000000001 64.19136286945593 L 26.914062500000007 63.63832315389592 L 28.046875000000007 63.20457399114418 L 29.179687500000004 62.881338538622195 L 30.351562500000004 62.65411169164593 L 31.56250000000001 62.52412901571629 L 33.43750000000001 62.51073495942316 L 34.84375000000001 62.63286891058835 L 36.328125000000014 62.86856260407659 L 37.9296875 63.229822966873975 L 39.68750000000001 63.73534170817514 L 41.640625 64.40817982319817 L 43.86718750000001 65.28936640402132 L 46.48437500000001 66.4424761155179 L 49.76562500000001 68.00977481907385 L 54.7265625 70.51121906262112 L 63.75000000000001 75.06408222076519 L 68.4375 77.29874081111144 L 72.69531250000001 79.21210974823889 L 76.79687500000001 80.93939665264183 L 80.8203125 82.51969409873558 L 84.84375000000001 83.9874975396548 L 88.9453125 85.37122810171705 L 93.12500000000001 86.66959133259398 L 97.421875 87.89355193882332 L 101.8359375 89.04187941160107 L 106.44531250000001 90.13222009185682 L 111.25000000000001 91.1605963485187 L 116.2890625 92.13165969127365 L 121.6015625 93.04838250681524 L 127.2265625 93.91240522601582 L 133.2421875 94.72936262609173 L 139.6484375 95.49304487511039 L 146.5625 96.2108390877049 L 154.0234375 96.87937590621111 L 160 97.34675608863594" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray=""/></g></g><g id="sketch-cdd72f19"><title>表达式7</title><path fill="#fa7e19" stroke="none" class="dcg-svg-region" paint-order="stroke fill markers" d=" M 1.3583342069664326 160 L 1.3583342069664326 0 L 7.549516567451064e-15 0 L 7.549516567451064e-15 160 L 1.3583342069664326 160" fill-opacity="0.4"/><g><path fill="none" stroke="#fa7e19" class="dcg-svg-curve" paint-order="fill stroke markers" d=" M 1.3583342069664326 160 L 1.3583342069664326 149 M 1.3583342069664326 142 L 1.3583342069664326 131 M 1.3583342069664326 124 L 1.3583342069664326 113 M 1.3583342069664326 106 L 1.3583342069664326 95 M 1.3583342069664326 88 L 1.3583342069664326 77 M 1.3583342069664326 70 L 1.3583342069664326 59 M 1.3583342069664326 52 L 1.3583342069664326 41 M 1.3583342069664326 34 L 1.3583342069664326 23 M 1.3583342069664326 16 L 1.3583342069664326 5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray=""/></g><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/></g><g id="sketch-cdd72f19"><title>表达式8</title><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" class="dcg-svg-region" paint-order="stroke fill markers" d=" M 163 160 L 163 0 L 160 0 L 160 160 L 163 160" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/></g><g id="sketch-cdd72f19"><title>表达式9</title><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" class="dcg-svg-region" paint-order="stroke fill markers" d=" M 1.3583342069664326 44.331179485937696 L 160 44.331179485937696 L 160 0 L 1.3583342069664326 0 L 1.3583342069664326 44.331179485937696" fill-opacity="0.4"/><g><path fill="none" stroke="#fa7e19" class="dcg-svg-curve" paint-order="fill stroke markers" d=" M 1.3583342069664326 44.331179485937696 L 12.358334206966433 44.331179485937696 M 19.358334206966433 44.331179485937696 L 30.358334206966433 44.331179485937696 M 37.35833420696643 44.331179485937696 L 48.35833420696643 44.331179485937696 M 55.35833420696643 44.331179485937696 L 66.35833420696643 44.331179485937696 M 73.35833420696643 44.331179485937696 L 84.35833420696643 44.331179485937696 M 91.35833420696643 44.331179485937696 L 102.35833420696643 44.331179485937696 M 109.35833420696643 44.331179485937696 L 120.35833420696643 44.331179485937696 M 127.35833420696643 44.331179485937696 L 138.35833420696645 44.331179485937696 M 145.35833420696645 44.331179485937696 L 156.35833420696645 44.331179485937696" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray=""/></g><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/></g><g id="sketch-cdd72f19"><title>表达式10</title><path fill="#fa7e19" stroke="none" class="dcg-svg-region" paint-order="stroke fill markers" d=" M 1.3583342069664326 101.66313693258594 L 160 101.66313693258594 L 160 160 L 1.3583342069664326 160 L 1.3583342069664326 101.66313693258594" fill-opacity="0.4"/><g><path fill="none" stroke="#fa7e19" class="dcg-svg-curve" paint-order="fill stroke markers" d=" M 1.3583342069664326 101.66313693258594 L 12.358334206966433 101.66313693258594 M 19.358334206966433 101.66313693258594 L 30.358334206966433 101.66313693258594 M 37.35833420696643 101.66313693258594 L 48.35833420696643 101.66313693258594 M 55.35833420696643 101.66313693258594 L 66.35833420696643 101.66313693258594 M 73.35833420696643 101.66313693258594 L 84.35833420696643 101.66313693258594 M 91.35833420696643 101.66313693258594 L 102.35833420696643 101.66313693258594 M 109.35833420696643 101.66313693258594 L 120.35833420696643 101.66313693258594 M 127.35833420696643 101.66313693258594 L 138.35833420696645 101.66313693258594 M 145.35833420696645 101.66313693258594 L 156.35833420696645 101.66313693258594" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray=""/></g><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><path fill="#fa7e19" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/></g></g><g id="labels-cdd72f19"/><g id="labels-cdd72f19"/></g></svg>

$F$ 分布是相互独立的卡方分布除以各自自由度后的比值。

#### （2）性质

##### 分位点

设

$$
\begin{aligned}
F
&\sim F(n_1,n_2).
\end{aligned}
\nonumber
$$

对给定的 $\alpha(0<\alpha<1)$，若

$$
\begin{aligned}
P\{F>F_\alpha(n_1,n_2)\}
&=
\alpha,
\end{aligned}
\nonumber
$$

则称 $F_\alpha(n_1,n_2)$ 为 $F(n_1,n_2)$ 分布的上侧 $\alpha$ 分位点。

由 $F$ 分布的定义，若

$$
\begin{aligned}
U &\sim \chi^2(n_1),\\
V &\sim \chi^2(n_2),
\end{aligned}
\nonumber
$$

且 $U,V$ 相互独立，则

$$
\begin{aligned}
F
&=
\frac{U/n_1}{V/n_2}
\sim F(n_1,n_2).
\end{aligned}
\nonumber
$$

于是

$$
\begin{aligned}
\frac{1}{F}
&=
\frac{V/n_2}{U/n_1}.
\end{aligned}
\nonumber
$$

由于

$$
\begin{aligned}
V &\sim \chi^2(n_2),\\
U &\sim \chi^2(n_1),
\end{aligned}
\nonumber
$$

且 $V,U$ 仍相互独立，所以由 $F$ 分布定义可得

$$
\begin{aligned}
\frac{1}{F}
&\sim F(n_2,n_1).
\end{aligned}
\nonumber
$$

**即若**

$$
\begin{aligned}
F
&\sim F(n_1,n_2),
\end{aligned}
\nonumber
$$

**则**

$$
\boxed{
\begin{aligned}
\frac{1}{F}
&\sim F(n_2,n_1).
\end{aligned}
\nonumber}
$$

下面说明分位点的关系。

令

$$
\begin{aligned}
c
&=
F_\alpha(n_1,n_2).
\end{aligned}
\nonumber
$$

由上侧 $\alpha$ 分位点的定义可知

$$
\begin{aligned}
P\{F>c\}
&=
\alpha.
\end{aligned}
\nonumber
$$

又令

$$
\begin{aligned}
G
&=
\frac{1}{F}.
\end{aligned}
\nonumber
$$

则

$$
\begin{aligned}
G
&\sim F(n_2,n_1).
\end{aligned}
\nonumber
$$

因为 $F>0$，所以

$$
\begin{aligned}
G>\frac{1}{c}
&\Longleftrightarrow
\frac{1}{F}>\frac{1}{c}\\
&\Longleftrightarrow
F<c.
\end{aligned}
\nonumber
$$

于是

$$
\begin{aligned}
P\left\{G>\frac{1}{c}\right\}
&=
P\{F<c\}\\
&=
1-P\{F\ge c\}.
\end{aligned}
\nonumber
$$

由于 $F$ 分布为连续型分布，所以

$$
\begin{aligned}
P\{F=c\}
&=
0.
\end{aligned}
\nonumber
$$

因此

$$
\begin{aligned}
P\{F\ge c\}
&=
P\{F>c\}\\
&=
\alpha.
\end{aligned}
\nonumber
$$

所以

$$
\begin{aligned}
P\left\{G>\frac{1}{c}\right\}
&=
1-\alpha.
\end{aligned}
\nonumber
$$

而 $G\sim F(n_2,n_1)$，故根据上侧分位点定义，

$$
\begin{aligned}
\frac{1}{c}
&=
F_{1-\alpha}(n_2,n_1).
\end{aligned}
\nonumber
$$

又因为

$$
\begin{aligned}
c
&=
F_\alpha(n_1,n_2),
\end{aligned}
\nonumber
$$

所以

$$
\boxed
{
\begin{aligned}
F_{1-\alpha}(n_2,n_1)
&=
\frac{1}{F_\alpha(n_1,n_2)}.
\end{aligned}
\nonumber
}
$$

###### 结论

$$
\begin{aligned}
F\text{ 分布取倒数}
&\Longrightarrow
\text{仍为 }F\text{ 分布，参数交换}.
\end{aligned}
\nonumber
$$

并且

$$
\begin{aligned}
\alpha\text{ 分位点与 }1-\alpha\text{ 分位点}
&\Longrightarrow
\text{在参数交换后互为倒数}.
\end{aligned}
\nonumber
$$

### 三、$t$ 分布

#### （1）定义

设随机变量 $X$ 与 $Y$ 相互独立，且

$$
X\sim N(0,1),
\qquad
Y\sim\chi^2(n).
\nonumber
$$

称

$$
T=\frac{X}{\sqrt{Y/n}}
\nonumber
$$

服从自由度为 $n$ 的 $t$ 分布，记作

$$
T\sim t(n).
\nonumber
$$

**$t$ 分布由相互独立的标准正态分布除以卡方分布除以自由度后的平方根得到**。

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="320" height="320"><defs/><g transform="scale(2,2)"><g id="background-4efbe274"><rect fill="white" stroke="none" x="0" y="0" width="160" height="160" class="dcg-svg-background"/></g><g id="graphpaper-4efbe274"><g id="axis-4efbe274"><g id="xaxis-4efbe274"><title>X axis</title><g><path fill="none" stroke="rgb(0,0,0)" class="dcg-svg-axis-line" paint-order="fill stroke markers" d=" M 0 133 L 160 133" stroke-opacity="0.9" stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray=""/></g></g><g><g><path fill="none" stroke="rgb(0,0,0)" class="dcg-svg-tickmark" paint-order="fill stroke markers" d=" M 0 130 L 0 136 M 80 130 L 80 136" stroke-opacity="0.9" stroke-miterlimit="2" stroke-width="1.5" stroke-dasharray=""/></g><g class="dcg-svg-axis-value dcg-svg-offcenter-axis-value"><text fill="none" stroke="#ffffff" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="7.449999809265137" y="146.05333333333334" text-anchor="middle" stroke-miterlimit="2" stroke-width="3" stroke-dasharray="">-5</text><text fill="#000000" stroke="none" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="7.449999809265137" y="146.05333333333334" text-anchor="middle">-5</text></g><g class="dcg-svg-axis-value"><text fill="none" stroke="#ffffff" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="80.21574973031284" y="146.05333333333334" text-anchor="middle" stroke-miterlimit="2" stroke-width="3" stroke-dasharray="">0</text><text fill="#000000" stroke="none" font-family="Arial" font-size="10px" font-style="normal" font-weight="normal" text-decoration="normal" x="80.21574973031284" y="146.05333333333334" text-anchor="middle">0</text></g></g></g></g><g id="expressions-4efbe274"><g id="sketch-4efbe274"><title>表达式7</title><path fill="#2d70b3" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><g><path fill="none" stroke="#2d70b3" class="dcg-svg-curve" paint-order="fill stroke markers" d=" M 0 133.31506140383306 L 0 133.31506140383306 L 11.4453125 133.2317817766994 L 17.265625 133.09145194271133 L 21.289062500000007 132.89553429857318 L 24.4140625 132.6432930285425 L 26.9921875 132.33398585019742 L 29.21875 131.96336605811354 L 31.171875 131.53368491439352 L 32.9296875 131.04091627329146 L 34.53125 130.48449687766623 L 36.015625 129.85920258736846 L 37.421875 129.15259080760435 L 38.75 128.36728366641012 L 40.0390625 127.48004500523164 L 41.2890625 126.48698897237864 L 42.5 125.38577124278015 L 43.7109375 124.1328504578397 L 44.921875 122.71323545442715 L 46.171875 121.05691746560842 L 47.3828125 119.25203969154124 L 48.59375 117.23548409180485 L 49.765625 115.0698832995465 L 50.9375 112.68292891551295 L 52.109375 110.06591112854125 L 53.28125 107.2126048347414 L 54.4921875 104.0126359703358 L 55.7421875 100.44202038423191 L 57.03125 96.48186176630156 L 58.3984375 91.98872021395266 L 59.8828125 86.79938236252585 L 61.5625 80.59656346191103 L 63.671875 72.45211273389117 L 68.5546875 53.464351470465175 L 70.0390625 48.11058137890333 L 71.2890625 43.91643019673266 L 72.3828125 40.544023827826464 L 73.359375 37.80810433512919 L 74.2578125 35.54866242752573 L 75.1171875 33.63998551044959 L 75.8984375 32.13438346339993 L 76.640625 30.917736520202837 L 77.3828125 29.918171543539685 L 78.046875 29.213778625539007 L 78.6328125 28.744702393967003 L 79.1796875 28.437847426989606 L 79.6875 28.267233174883202 L 80.1953125 28.20731803503658 L 80.6640625 28.250450584037665 L 81.171875 28.40366849121834 L 81.6796875 28.66711505853361 L 82.2265625 29.073051747536653 L 82.8125 29.646826803422485 L 83.4765625 30.467473038407604 L 84.21875 31.593167178624554 L 84.9609375 32.93109399456752 L 85.7421875 34.55823474020778 L 86.5625 36.49458686243004 L 87.4609375 38.86406430037833 L 88.4375 41.7077711336748 L 89.4921875 45.05623692185985 L 90.703125 49.20125332942912 L 92.109375 54.33230197911654 L 93.9453125 61.376166881312045 L 99.765625 83.94661035424559 L 101.40625 89.83459944609352 L 102.8515625 94.71368627345825 L 104.21875 99.02854907813796 L 105.5078125 102.81057733557799 L 106.7578125 106.20362866224616 L 107.96875 109.23059952270108 L 109.1796875 112.00389645672121 L 110.3515625 114.45179482289784 L 111.5234375 116.67579192170307 L 112.734375 118.74952176686558 L 113.9453125 120.60799526697355 L 115.1953125 122.31564368386418 L 116.484375 123.86952112703055 L 117.734375 125.19254207576562 L 118.984375 126.35133642609622 L 120.2734375 127.39137509533482 L 121.5625 128.29077810050165 L 122.890625 129.0871409043841 L 124.296875 129.80395530177546 L 125.78125 130.43850098198857 L 127.34375 130.99089264528791 L 129.0234375 131.47382695480928 L 130.8984375 131.90151157247413 L 132.96875 132.26470423249032 L 135.3515625 132.5736661495645 L 138.125 132.82530302286796 L 141.5234375 133.02490056187756 L 145.8984375 133.17223366031638 L 152.1484375 133.27011481742528 L 160 133.31384421426293" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray=""/></g></g><g id="sketch-4efbe274"><title>表达式8</title><path fill="#6042a6" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><g><path fill="none" stroke="#6042a6" class="dcg-svg-curve" paint-order="fill stroke markers" d=" M 91.41574973031284 133.33333333333334 L 91.41574973031284 133.33333333333334 L 160 133.33333333333334" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray=""/></g><path fill="#6042a6" stroke="none" paint-order="stroke fill markers" d="" fill-opacity="0.4"/><g><path fill="none" stroke="#6042a6" class="dcg-svg-curve" paint-order="fill stroke markers" d=" M 91.41574973031284 51.76487651450812 L 91.41574973031284 51.76487651450812 L 93.01709042567569 57.778300776002425 L 95.43863001378537 67.2488946641996 L 98.7194255847727 80.03001150685876 L 100.51605173078954 86.68197587712366 L 102.07833533602161 92.14209430220136 L 103.48439058073045 96.74873434117544 L 104.8123316451777 100.80535106787497 L 106.06215852936334 104.34893445601107 L 107.27292832341818 107.52250055055792 L 108.48369811747303 110.44066816479739 L 109.65541082139706 113.02519169095333 L 110.8271235253211 115.38078023330748 L 111.99883622924514 117.516437456144 L 113.20960602329998 119.50377777601997 L 114.42037581735482 121.28135867081166 L 115.67020270154048 122.91161500892132 L 116.95908667585692 124.39235117809012 L 118.20891356004256 125.65091016114813 L 119.4587404442282 126.75146645712765 L 120.74762441854465 127.73770933834099 L 122.07556548299189 128.61320084919296 L 123.44256363756995 129.3830161067464 L 124.84861888227879 130.0534655159147 L 126.37184539738004 130.66018450875723 L 127.97318609274289 131.1842210069605 L 129.73075514862896 131.64769379674803 L 131.68360965516902 132.05129107495253 L 133.8708067024939 132.39371252184924 L 136.409517560996 132.681360928531 L 139.4169135010677 132.91279906110952 L 143.16639415362462 133.09147058352494 L 148.1657016903672 133.2185142729611 L 155.74277717574267 133.29646258247038 L 160 133.31384421426293" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke-dasharray=""/></g><path fill="#6042a6" stroke="none" class="dcg-svg-region" paint-order="stroke fill markers" d=" M 91.41574973031284 133.33333333333334 L 160 133.33333333333334 L 160 133.31384421426293 L 155.74277717574267 133.29646258247038 L 148.1657016903672 133.2185142729611 L 143.16639415362462 133.09147058352494 L 139.4169135010677 132.91279906110952 L 136.409517560996 132.681360928531 L 133.8708067024939 132.39371252184924 L 131.68360965516902 132.05129107495253 L 129.73075514862896 131.64769379674803 L 127.97318609274289 131.1842210069605 L 126.37184539738004 130.66018450875723 L 124.84861888227879 130.0534655159147 L 123.44256363756995 129.3830161067464 L 122.07556548299189 128.61320084919296 L 120.74762441854465 127.73770933834099 L 119.4587404442282 126.75146645712765 L 118.20891356004256 125.65091016114813 L 116.95908667585692 124.39235117809012 L 115.67020270154048 122.91161500892132 L 114.42037581735482 121.28135867081166 L 113.20960602329998 119.50377777601997 L 111.99883622924514 117.516437456144 L 110.8271235253211 115.38078023330748 L 109.65541082139706 113.02519169095333 L 108.48369811747303 110.44066816479739 L 107.27292832341818 107.52250055055792 L 106.06215852936334 104.34893445601107 L 104.8123316451777 100.80535106787497 L 103.48439058073045 96.74873434117544 L 102.07833533602161 92.14209430220136 L 100.51605173078954 86.68197587712366 L 98.7194255847727 80.03001150685876 L 95.43863001378537 67.2488946641996 L 93.01709042567569 57.778300776002425 L 91.41574973031284 51.76487651450812 L 91.41574973031284 133.33333333333334" fill-opacity="0.4"/></g></g><g id="labels-4efbe274"/><g id="labels-4efbe274"/></g></svg>

#### （2）性质

##### 奇偶性

$t$ 分布的概率密度函数 $f(t)$ 是**偶函数**.

##### 分位点

若

$$
\begin{aligned}
T
&\sim t(n),
\end{aligned}
\nonumber
$$

则由 $t$ 分布的定义，存在相互独立的随机变量 $Z$ 与 $U$，使得

$$
\begin{aligned}
Z &\sim N(0,1),\\
U &\sim \chi^2(n),
\end{aligned}
\nonumber
$$

且

$$
\begin{aligned}
T
&=
\frac{Z}{\sqrt{U/n}}.
\end{aligned}
\nonumber
$$

于是两边平方可得

$$
\begin{aligned}
T^2
&=
\frac{Z^2}{U/n}\\
&=
\frac{Z^2/1}{U/n}.
\end{aligned}
\nonumber
$$

又因为

$$
\begin{aligned}
Z^2
&\sim \chi^2(1),
\end{aligned}
\nonumber
$$

所以由 $F$ 分布的定义可得

$$
\begin{aligned}
T^2
&\sim F(1,n).
\end{aligned}
\nonumber
$$

再由 $F$ 分布取倒数时参数交换，可得

$$
\begin{aligned}
\frac{1}{T^2}
&\sim F(n,1).
\end{aligned}
\nonumber
$$

因此

$$
\boxed{
\begin{aligned}
T\sim t(n)
&\Longrightarrow
\begin{cases}
T^2\sim F(1,n),\\[4pt]
\dfrac{1}{T^2}\sim F(n,1).
\end{cases}
\end{aligned}
}
\nonumber
$$

并且，由于 $t(n)$ 分布关于 $0$ 对称，故其上侧分位点满足

$$
\begin{aligned}
t_{1-\alpha}(n)
&=
-t_\alpha(n).
\end{aligned}
\nonumber
$$

证明如下。令

$$
\begin{aligned}
c
&=
t_\alpha(n).
\end{aligned}
\nonumber
$$

由上侧 $\alpha$ 分位点的定义可知

$$
\begin{aligned}
P\{T>c\}
&=
\alpha.
\end{aligned}
\nonumber
$$

由于 $t(n)$ 分布关于 $0$ 对称，所以

$$
\begin{aligned}
P\{T>-c\}
&=
P\{T<c\}.
\end{aligned}
\nonumber
$$

又因为 $t(n)$ 为连续型分布，故

$$
\begin{aligned}
P\{T<c\}
&=
1-P\{T\ge c\}\\
&=
1-P\{T>c\}\\
&=
1-\alpha.
\end{aligned}
\nonumber
$$

因此

$$
\begin{aligned}
P\{T>-c\}
&=
1-\alpha.
\end{aligned}
\nonumber
$$

这说明 $-c$ 是 $t(n)$ 分布的上侧 $1-\alpha$ 分位点，即

$$
\begin{aligned}
t_{1-\alpha}(n)
&=
-c.
\end{aligned}
\nonumber
$$

又因为

$$
\begin{aligned}
c
&=
t_\alpha(n),
\end{aligned}
\nonumber
$$

所以

$$
\boxed{
\begin{aligned}
t_{1-\alpha}(n)
&=
-t_\alpha(n).
\end{aligned}
}
\nonumber
$$

结合图像记忆效果更佳。
