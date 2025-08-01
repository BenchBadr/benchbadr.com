$\newcommand{\C}{\mathbb{C}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\sub}{\subset}$
## Question 1
> Montrer une $\mathcal{P}$ admet une borne inférieure

Soit $P = \{|P(z)|, z \in \C\}$ 
Soit $z_1, z_2 \in |C, z_2 = P(z) ,$ donc $|z| ≥ 0$
- donc $P(z) ≥ 0$
- Donc $0$ minore l'ensemble $P$, qui est non-vide
- Donc il existe une borne inférieure de $P$
## Question 2
> Soit $r > 0$. Montrer que pour tout nombre complexe $z$ de module $r$, on a:
> $|P(z)| ≥ |a_p|r^p - \sum^{p-1}_{k=0}|a_k|r^k$

$|P(z)| = |a_0+a_1z+...+a_pg^p|$
$\phantom{|P(z)|} = |a_pz^p + \sum^{p-1}_{k=0}a_kz^k|$
$\phantom{|P(z)|} = |a_pz^p + \sum^{p-1}_{k=0}a_kz^k|$
$\phantom{|P(z)|} =|\sum^{p-1}_{k=0}a_kz^k|≤\sum^{p-1}_{k=0}|a_kz^k|$
Donc on a $|P(z)| ≥ ...$
## Question 3
> En déduire que:
> $\lim{|z| \to +\infty}|P(z)| = +\infty$

$|P(z)| ≥ |a_p|r^p - \sum^{p-1}_{k=0}|a_k|r^k = |a_p|r^p - |a_{p-1}|r^{p-1} - ...- |a_0|r^0$
$\phantom{|P(z)| ≥ |a_p|r^p - \sum^{p-1}_{k=0}|a_k|r^k} = r^p(|a_p| - \frac{|a_{p-1}|}{r} - ... - \frac{|a_0|}{r^p})$
Donc $\lim{n\to+\infty}|a_p|r^p - \sum^{p-1}_{k=0}|a_k|r^k = +\infty$
Par comparaison : $\lim{|z| \to +\infty}P(z) = +\infty$

> [!tips]
> Gendarme à une borne
## Question 4
### 4 - a
> Montrer qu'il existe une suite $(z_n)_{n\in\N} \in \C^\N$ tel que
> $\lim{n\to+\infty}|P(z_n)| = +\infty$

Pour $n \in \N^*, \exists a_n \in \mathcal{P}, \alpha ≤ a_n < \alpha + \frac1n$
- $\forall n \in \N^*, \exists z_n \in \C, a_n = |(z_n)|$

### 4 - b
> Montrer que la suite $(z_n)_{n\in\N}$ est bornée


```desmos-graph
bottom = -2 ; top = 2 ; left = -3 ; right = 3
---
1 \leq (x)^2 + (y)^2
(x)^2 + (y)^2 = 4
(x)^2 + (y)^2 \leq 4
```


Par l'absurde, supposons que $(z_n)_{n\in\N}$ n'est pas bornée.
- donc $|z_n|\to+\infty$
- donc $|P(z_n)| \to +\infty| \to +\infty$ (d'après 3) 
	- **Absurde**
- donc $(z_n)$ bornée.
## 4 - c
> En déduire qu'il existe une suite extraite $(z_{n_k})$ qui converge et que, en notant $l \in \C$ la limite de $(z_{n_k})$, on a:
> $|P(l)| = \alpha$

D'après le théorème de Bolzano-Weierstraß,
- il existe $(v_n)$ extraite telle que $(v_n)$ converge , on note $l$ sa limite
- On a $a_n = |P(z_n)|$
	- $b_n = |P(v_n)|$
- Donc $\lim{n\to +\infty}b_n = +\infty$, $\lim{n\to +\infty}|P(v_n)| = +\infty$
- Continue et $P$ continue donc
	- $\alpha = \left|P\left(\lim{n\to+\infty}v_n\right)\right| = \left|P(p)\right|$

Alternativement,
Noter $v_n = x_n + y_n$
- Or, $x_{n_k} \to x$ (bornée donc convergente)
- $y_{n_k}$ bornée (donc convergente)


---
# Question 5
> On a donc montré que $\alpha$ est en fait un minimum. Il s'agit maintenant de montrer que $\alpha = 0$. Pour cela, on suppose par l'absurde que $\alpha ≠ 0$
## 5 - a
> Soit $Q = \frac{P(X+x_0)}{P(z_0)}$. Montrer que:
> $\inf\{Q(z) | z \in \C\} = |Q(0)| = 1$


$Q(\lambda) = \frac{P(X+l)}{P(l)}$
$|Q(\lambda)|= \frac{|P(X+l)|}{|P(l)|}$
$\forall z \in \C, |P(l)|≤|(z+l)|$
- donc $|Q(j)|≥1$ (car $\alpha ≠ 0$)
et, pour $s = 0: |Q(0)|=\frac{\alpha}{\alpha} = 1$
Donc $|Q(0)| = \inf(\{|Q(z)|z \in \C\}) = 1$

### 5 - b
> Montrer que $Q$ peut se mettre sous la forme:
> $Q = \sum^p_{k=q+1}b_kX^k - b_qX^q + 1$, où $b_q ≠ 0$ et $1 ≤ q ≤ p$

$Q(X) = \frac1{P(l)}P(X+l)$
$Q(X) = \frac1{P(l)}\sum^{p}_{k=0}a_k(x-l)^k$
$\phantom{Q(X)} = \frac1{P(l)}\sum^p_{k=0}a_k\sum^k_{i=0}\ncr{k}{i}l^{k-i}X^i$
$\phantom{Q(X)} = \frac1{P(l)}\left(\sum^p_{k=0}a_k\left(\sum^k_{i=1}\left(\ncr{k}ip^{k-i}X^i\right)+1^k\right)\right)$ 
$\phantom{Q(X)} = \frac1{P(l)}\left(\sum^p_{k=0}a_k\left(\sum^k_{i=1}\ncr{k}il^{k-i}X^i\right)+P(l)\right)$
$\phantom{Q(X)} = 1+\sum^p_{k=1}b_kX^k$
Soit $q = \inf\{i \in \{0;...;p\}, b_i ≠ 0\}$ 
- $Q(X) = \sum^p_{k=q+i}b_kX^k+\tilde{b}_qX^q+1$
On pose $bq = -\tilde{bq}$ donc $Q(X) = \sum^p_{k=q+1}b_kX^k -b_qX^q+1$

### 5 - c
> On note $b_q = pe^{-i\theta}$ et $z = re^{i\theta/q}$. Montrer que pour $r$ assez petit:
> $|Q(z)| - 1 ≤ -pr^q + \sum^p_{k=q+1}|b_k|r^k$

$Q(z) = \left| \sum^k_{k=q+1}X^k-b_q\lambda^{k-1}+1\right|≤\sum\left|b_k\lambda^k...\right|$

# Question 6
> Conclure

QED

