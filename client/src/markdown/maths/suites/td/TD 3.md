$\newcommand{\R}{\mathbb{R}}\newcommand{\N}{\mathbb{N}}\newcommand{\Z}{\mathbb{Z}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\lim}[1]{\underset{\begin{matrix}#1\end{matrix}}{\text{lim}}}\newcommand{\li}[1]{\underset{\begin{matrix}#1\end{matrix}}{\text{lim}}}\newcommand{\sub}{\subset}$
# Exercice 1

> Montrer en utilisant la définition que la fonction $f:x \mapsto (x-1)^2$ est continue en $1$ et en $0$.

$f \biggl{|}\begin{matrix}\R \to \R \\ x \mapsto (x-1)^2\end{matrix}$

Soit $\epsilon > 0$
On cherche $x \in \R$ tel que:
- $|f(x) - f(1)| ≤ \epsilon$
C'est-à-dire $|(x-1)^2-0|≤\epsilon$
- Soit $|x-1|^2≤\epsilon$
- Il suffit que $|x-1|^2≤\epsilon$
- Il suffit que $|x-1|≤\sqrt{\epsilon}$
Soit $\delta = \sqrt{\epsilon}$ et $x \in \R$
- tel que $|x-1|≤\delta$
On a alors, d'après les calculs précédents:
- $|f(x)-f(1)|≤\epsilon$
On a montré que $\lim{x\to1}f(x)=f(1)$

≤ 3

Donc $f$ est continue en $1$

> En 0

Montrons que $\lim{x\to0}f(x) = f(0)$
Soit $\epsilon > 0$
On cherche $\delta ≥ 0$ tel que
$\forall x \in \R, |x-0|≤\delta \Rightarrow |f(x)-f(0)|≤ \epsilon$
Soit $x \in \R$. On veut:
- $|f(x)-f(0)|≤\epsilon$
c'est-à-dire $|(x-1)^2-1|≤\epsilon$
c'est-à-dire $|x(x-2)|≤\epsilon$
c'est-à-dire $|x||x-2|≤\epsilon$

Il suffit que:
$\cases{|x|≤1 \\ \text{et} \\ |x|≤\frac{\epsilon}{|x-2|}}$
(on a alors $x ≠ 2$)
Il suffit que
$\cases{|x|≤1 \\ \text{et} \\ |x|≤\epsilon}$

Soit $\delta = \epsilon$ et $x \in [-\delta, \delta]$ ($|x|≤\delta$)
On a alors
$\cases{|x| ≤ 1 \\ \text{et} \\ |x| ≤ \epsilon}$
Donc d'après le calculs précédents
$|f(x) - f(0)| ≤ \epsilon$


Donc $f$ est continue en $0$.

# Exercice 2

> Montrer, en utilisant la définition, que la fonction $f:x \mapsto |x|$ est continue sur $\R$.

Soit $x_0 \in \R$. Montrons que $\lim{x\to x_0}|x| = |x_0|$
Soit $\epsilon > 0$
Soit $x \in \R,$ on veut:
- $|f(x)-f(x_0)|≤\epsilon$
c'est-à-dire $||x|-|x_0||≤\epsilon$
Par l'inégalité triangulaire inverse, on a:
- $||x|-|x_0||≤|x-x_0|$
Il suffit que
- $|x-x_0|≤\epsilon$
Soit $\delta = \epsilon$ et $x$ tel que:
- $|x-x_0|≤\delta$
On a, d'après les calculs précédents,
- $|f(x)-f(x_0)|≤\epsilon$
Donc $\lim{x\to x_0}f(x) = f(x_0)$ et $f$ est continue en $x_0$
Donc $f$ est continue sur $\R$. 

# Exercice 3


> Soit $f$ une fonction définie sur $I$, intervalle de $\mathbb{R}$ et $a \in I$. Traduire le fait que $f$ est discontinue en $a$ : en terme de voisinages puis avec les suites.
> Soit $f$ la fonction définie par
> $$
f(x) =
\begin{cases}
\frac{x-1}{|x-1|} & \text{pour } x \neq 1 \\
1 & \text{pour } x = 1
\end{cases}
> $$
> Montrer en utilisant la définition que $f$ est discontinue en 1. Retrouver ce résultat en construisant une suite $(u_n)_{n \in \mathbb{N}}$ qui converge vers 1 et telle que $f(u_n)$ ne converge pas vers $f(1)$.

=
$f$ n'est pas continue en $a$ 
- si $\exists \epsilon_0 > 0$ et $\forall \delta > 0, \exists x_0 \in \R$ avec $|x_0-a|≤\delta$
	- et $|f(x)-f(a)|> \epsilon$
$f$ n'est pas continue en $a$ s'il existe une suite $(v_n)_{n≥0}$
- tq $\lim{n\to+\infty} v_n = a$ et $\lim{n\to+\infty}f(v_n) ≠ f(a)$

Soit $f(x) = \cases{\frac{x-1}{|x-1|} \text{ si } x ≠ 1 \\ 1 \text{ si } x =1}$

Si $x>1$:
- $|x-1| = x-1$
- $\Rightarrow f(x)=1$
Si $x < 1$:
- $|x-1| = 1-x \Rightarrow f(x) = -1$
$\Rightarrow f(x) = \cases{-1 \text{ si } x < 1 \\ 1 \text{ si } x ≥ 1}$
Montrons que $f$ n'est pas continue en $1$ « avec les suites ».
- Soit $v_n = 1-\frac{1}n, n ≥ 1$
- $\lim{n\to+\infty}v_n = 1, f(v_n) = -1$ car $v_n < 1$
Montrons que $f$ n'est pas continue en $1$ avec $\epsilon, \delta$
- $\exists \epsilon_0 > 0, \forall \delta > 0, \exists x_0 \in \R, |x_0 - 1| ≤ \delta$
	- et $|f(x_0) - f(1)| > \epsilon_0$
Prenons $\epsilon_0 = 1$ : $\delta > 0$ Soit $x_0 = 1 - \delta$
- $|f(x_0)-f(1)| = |-1-1| = 2 > 1$

$f$ n'est donc pas continue en $1$. 


# Exercice 5

> Soit $f$ une fonction définie sur un intervalle $I$ de $\R$. Montrer que si $f$ est continue en $a \in I$ alors $f$ est bornée dans un voisinage de $a$.

Soit $\epsilon = 12$.
- Alors $\exists \delta > 0$ tel que:
- $\cases{|x-a|≤\delta \\ x \in I}\Rightarrow |f(x) - f(a)| ≤ 12$
- $\Rightarrow |f(x)| ≤ |f(a)| + 12$
$|f(x)| - |f(a)| ≤ |f(x) - f(a)| ≤ 12$
$\Rightarrow |f(x)| ≤ |f(a)|+12$
$c = |f(a)|+12$ (majorant)
$J = I\cap [a-\delta, a+\delta] ≠ \phi$ (intervalle borné)
car $a \in I$

# Exercice 7

> Trouver les points réels où les fonctions suivantes sont discontinues et les points où elles sont continues:
> - $f_1(x) = E(x)$
> - $f_2(x) = \sin(\frac{1}x)$
> - $f_3(x) = \cases{1 \text{ si } x \in \mathbb{Q} \\ 0 \text{ si } x \notin \mathbb{Q}}$

- $f_2(x) = \sin(\frac{1}{x})$
	- discontinue en $0$
- $f_3(x)$
	- discontinue $\forall x \in \R$
---
$f(x) = E(x)$
- Si $k < x_0 < k+1$ où $k\in \Z$
	- $f(x) = k$ pour tout $k ≤ x < k+1$ 
$f$ continue car constante sur un intervalle contenant $x_0$

Si $x_0 = k\in \Z, f(x_0) = k$
- mais si $k-1 < x < k, f(x) = k-1$
Soit $v_n = k - \frac{1}k$
$k-1 < v_n < k \Rightarrow f(v_n) =  k-1$
- $\li{n\to+\infty}f(v_n) = k-1 ≠ k = f(x_0)$
$f$ est continue sur $\R \backslash \Z$

---
$\sin(\frac{1}x)$ est continue sur $\R^*$ (par composition de fonction continues)

---

$f$ continue sur $\R\backslash \mathbb{Q}$ ?
Soit $x_0 \in \R$
- Posons $u_n = \frac{E(x_010^n)}{10^n} \in \mathbb{D} \sub \mathbb{Q}$
- $u_n = \frac{E(10^nx_0)}{10^n} ≤ x_0 < \frac{E(10^nx_0)}{10^n}+\frac{1}{10^n} = u_n + \frac{1}{10^n}$
- Soit $x_0 \in \R \backslash \mathbb{Q}, f_3(x_0)=0$.
	- $u_n \in \mathbb{Q}$
	- $f(u_n)=1 \Rightarrow \li{n\to +\infty}f_3(u_n)=1 ≠ f_3(x_0)$
- $v_n = u_n + \frac{\sqrt{2}}n$
- $u_n \in \mathbb{Q}$
- $v_n \in \R \backslash\mathbb{Q}$
- $v_n \to x_0$
- $f_3(v_n) = 0$
- $\li{}f_3(v_n)=0$
- $f_3(x_0)=1$

# Exercice 6

> Soit $f$ une fonction de $\R$ dans $\R$ vérifiant la relation:
> 	$\forall (x,y)\in\R^2, f(x+y)=f(x)+f(y)$
> Calculer $f(0)$

$f(0) = ?$. Si $x=0, y = 0$ on en déduit $f(0)=f(0)+f(0) \Rightarrow f(0) = 0$

> Montrer que $f$ est impaire.

Mq $f$ est impaire.
- Si $y = -x, f(x-x) = f(x) = f(-x) = f(0) = 0$
- $\Rightarrow f(-x) = -f(x) \forall x \in \R$

> Calculer $f$ sur $\N$, puis sur $\mathbb{Z}$ et enfin sur $\mathbb{Q}$ en fonction de $f(1)$.

Montrons par récurrence: 
$H_r : « f(n) = nf(1) »$

**Initialisation**
$n = 0$. Vraie

**Hérédité**
Supposons que pour $k$ fixé, $k \in \N,$ $f*k) = kf(1)$
$f(k+1) = f(k)+f(1)$
D'après $H_r = k \cdot f(1)+f(1) = (k+1)f(1)$ 

**Conclusion**
Donc $H_n$ vraie $\forall n \in \N$

$k \in \Z,$ 
- Si $k<0 \Rightarrow -k \in \N \Rightarrow f(-k) = (-k)(f(1))$ 
	- car $f$ impaire $\Rightarrow -f(k) = -kf(1)$
	- $\Rightarrow f(k) = kf(1)$
- Sinon, $k ≥ 0$
	- D'après (1), $f(k) = kf(1)$

$\forall k \in \Z, f(k) = kf(1)$

> comment calculer $f(\frac{1}2)$

$f(1)=f(\frac{1}2)+f(\frac{1}2) = 2f(\frac{1}2)$
$\Rightarrow f(\frac{1}2) = \frac{1}2 f(1)$

**Indication**
Montrons que si $a ≠0, a \in \R$ et $n\in\N$ alors $f(na)=nf(a)$
*Par récurrence*
$n=0$ OK
Si $f(ka) = kf(a)$ ou $k \in \N$ fixé,
- $f((k+1)a) = f(ka+a) = f(ka) + f(a)$
- $\phantom{f((k+1)a) = f(ka+a)} = kf(a)+f(a)$
-  $\phantom{f((k+1)a) = f(ka+a)} = (k+1)f(a)$
D'où $f(1) = f(n \cdot \frac{1}n) = nf(\frac{1}n)$
$\Rightarrow f(\frac{1}n) = \frac{1}nf(1), \forall n ≥ 1$
$\frac{p}q \in \mathbb{Q}^+$ ($p\in \N, q \in \N^*$)
- $f(\frac{p}q)=pf(\frac{1}{q})=p\cdot\frac{1}{q}f(1)$
- $= \frac{p}q f(1)$

Comme $f$ impaire si $\frac{p}q < 0,$
- $f(-\frac{p}q) = (-\frac{p}q)f(1)$
- $\Rightarrow f(\frac{p}q) = \frac{p}q f(1)$ 
D'où $\forall x \in \mathbb{Q}, f(x) = xf(1)$

**$f$ continue**
- Soit $y \in \R \backslash \mathbb{Q}$ et soit $u_n \in \mathbb{Q}$ tel que $u_n \to y$
- $f(u_n) = u_nf(1)$
- $\li{n\to+\infty}f(u_n) = f(\li{} u_n = f(y))$
- Par continuité de $f$ 
	- De plus, $\li{n\to+\infty}yf(1) = yf(1)$
	- Par unicité de la limite $yf(1) = f(y)$

**CONCLUSION**
$f(x) = ax$ où $a \in \R$.

----

# Bonus CC1

> Le but de cet exercice est de proposer une autre démonstration du théorème de Bolzano-Weierstrass. Soit $(u_n)_{n\in\N}$ une suite bornée.
> 1. Soit $n \in \N.$ Justifier l'existence de $\sup(\{u_k | k ≥ n\})$
> 2. On note $(v_n)_{n\in\N}$ la suite définie par
>    $\forall n \in \N, v_n = \sup(\{u_k | k ≥ n\})$
>  Montrer que $(v_n)_{n\in\N}$ converge vers un réel $l \in \R$ . 
> 3. Montrer qu'il existe une suite extraite de $(u_n)_{n\in\N}$ qui converge vers $l$.

Pour tout $k≥0,$ on pose 
- $n_k = \sup(\ub{\{u_n | n≥ k\}}{A_n})$
- car $A_n \in \R$ et $A_n$ est majorée, donc ce $\sup$ existe bien. 
- Soit $k \in \N,$ on a:
	- $A_{k+1} \sub A_k$
- Donc $\sup(A_{k+1}) ≤ \sup(A_k)$. En effet,
	- $\sup(A_k)$ est un majorant de $A_k$ donc un majorant de $A_{k+1}$ or $\sup(A_{k+1})$ est le plus petit majorant de $A_{k+1}$. 
- Donc $(v_k)_{k\in\N} \searrow$ et $(v_k)_{k\in\N}$ est minorée donc $(u_n)_{n\in\N}$ l'est.
- Donc elle converge vers $l \in \R$. 
- Soit $n \in \N,$ on cherche $u_{\phi(n)}$ telle que: 
	- $|u_{\phi(n)}-l|≤\frac1n$
- Puisque $\li{k\to+\infty}v_k = l,$ il existe un $v_{k_0}$ tel que $|v_{k_0}-l|≤\frac1{2n}$
- Or, $v_{k_n} = \sup(\{u_n | k ≥ n\})$
	- Par définition du $\sup,$ il existe $n_m ≥ k_n$ tel que
		- $u_{n_m} ≥ v_{k_m} - \frac1{2m}$
	- On a donc,
		- $|u_{n_m}-v_{k_n}| ≤ \frac1{2m}$
	- On a donc, par l'i$\triangle$
		- $|u_{n_m}-l| = |u_{n_m} - v_{k_m}+v_{k_m}-l|$
			- $≤ \frac1{2n}+\frac1{2n}$
		- $|u_{n_m}-l| ≤ \frac1n$

> - On a pas $n_m$ strictement $\nearrow$

On pose alors $\phi(n) = n_m$
Construisons $\phi$ par récurrence.



---
A faire: 3 et le 5

# Exercice 10

> Soit $f$ la fonction définie par
> $f:]0,\infty[ \to \R$
> $x \mapsto \frac1x\sin(\frac1x)$
> Trouver deux suites $(u_n)_{n\in\N}$ et $(v_n)_{n\in\N}$ de limite nulle telles que $f(u_n)$ tende vers $0$ et $f(v_n)$ tende vers l'infini.
> Déterminer la limite de $f$ en $+\infty$

On considère $(u_n)_{n\in\N^*}$ de terme:
- $\forall n \in \N^*, u_n = \frac1{n\pi}$
- On a $\cases{\lim{n\to+\infty}u_n = 0 \\ \lim{n\to+\infty}f(u_n)=\lim{n\to+\infty} 0 = 0}$ $\color{green}(1)$
Trouvons $(v_n)_{n\in\N}$
- $\sin(\frac1{v_n})=1 \Leftarrow \exists k\in\Z, \frac1{v_n} = \frac{\pi}2+2k\pi$
- $\phantom{\sin(\frac{1}{v_n}) = 1} \Leftarrow \exists k\in\Z, v_n = \frac{1}{\frac{\pi}2+2k\pi}$
- On a $\cases{\lim{n\to+\infty}v_n = 0 \\ et \\ \lim{n\to+\infty}f(v_n) = \lim{n\to+\infty}\frac\pi2+2\pi = +\infty}$ $\color{green}(2)$

$(1)$+$(2)$+ (caractérisation de la limite) nous dit que $f$ n'a pas de limite en $0$, donc non prolongeable par continuité.

# Exercice 11

> Déterminer $a$ pour que la fonction $g$ soit continue sur $\R$, la fonction $g$ étant définie par:
> $g(x) = \cases{(x-1)e^{2/x} \text{ si }x<0 \\ 3e^x - a \text{ si }x≥0}$

On a
- $\newcommand{\lb}{\underset{\begin{matrix}x \to 0 \\ x < 0\end{matrix}}{\text{lim} \ }} \lb g(x) = \lb (x-1)e^{2/x}$
- Par composition de fonctions
- $\lb e^{2/x} = 0$
- Par produit de limites
- $\lb g(x) = 0$
et
- $\newcommand{\lc}{\underset{\begin{matrix}x \to 0 \\ x ≥ 0\end{matrix}}{\text{lim} \ }} \lc g(x) = 3-a$
- $g$ est continue sur $\R^*$ par opérations usuelles sur les fonctions continues.
- Pour que $g$ soit continue, il suffit que $g$ admette une limite en $0$.
- Il suffit donc que:
- $\lb g(x) = \lc g(x) \iff 3-a = 0 \iff a = 3$

# Exercice 13
$\newcommand{\Q}{\mathbb{Q}}$
> Trouver les points réels où les fonctions suivantes sont discontinues et les points où elles sont continues.
> $f_1(x) = \cases{x \text{ si }x\in \Q \\ (1-x) \text{ si }x \notin \Q}$

On a, par composition de fonction