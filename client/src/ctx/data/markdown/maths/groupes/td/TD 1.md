---
lang: fr
date: 18/09/2025
---

$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\align}[1]{\begin{aligned}#1\end{aligned}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\D}{\mathscr{D}}$
# Exercice 1

> 1. Déterminer les diviseurs de $25$
> 2. Déterminer les entiers naturels $a$ et $b$ tels que $a^2 - b^2 = 25$

## Question 1

> Déterminer les diviseurs de $25$

$\D_{25} = \{a \in \N^* / a | 25\} = \{a \in \N^* | \exists k \in \N^*, ka = 25\}$
$\phantom{D_{25}} = \{1, 5, 25\}$

## Question 2

> 2. Déterminer les entiers naturels $a$ et $b$ tels que $a^2 - b^2 = 25$

$a^2 - b^2 = 25$
$\iff (a+b)(a-b)= 25$
Donc,
- $(a-b) \in \{1,5,25\}$ et $(a+b) \in \{1, 5, 25\}$

Donc,
- $(a-b, a+b) \in \{\cancel{(1,1)}, \cancel{(1,5)}, (1,25), \cancel{(5,1)}, (5,5), \cancel{(5, 25)}, (25, 1), \cancel{(25, 5)}, \cancel{(25, 25)}\}$

Ainsi,
**3 systèmes**
- $\cases{a - b = 1 \\ a + b = 25} \iff \cases{a = 13 \\ b = 12}$
- $\cases{a - b = 5 \\ a + b = 5} \iff \cases{a = 5 \\ b = 0}$
- $\cases{a - b = 25 \\ a + b = 1} \iff \cases{a = 12 \\ b = 13}$

# Exercice 2

> Déterminer les entiers naturels $n$ tels que $n$ divise $n+8$

$\D_8 = \{1,2,4,8\}$
$n|(n+8) \Rightarrow n|8$
$\phantom{n|(n+8)} \Rightarrow n \in \D_8$

**Alternativement**,
$n+8 \equiv 0[n]$
$\iff 0+8 \equiv 0[n]$
$\iff n|8$
$\iff n \in \D_8$
# Exercice 3

> Montrer par récurrence que si $a$ est un entier impair, alors pour tout entier $n, 2^{n+1}$  divise $a^{2^n}-1$

Soit $a \in \{2k+1 / k \in \N\}$
- Pour tout $n\in \N$ on pose $P(n)$ la propriété:
	- $P(n):\forall k ≤ n, 2^{k+1}|\left(a^{2^k}-1\right)$

**Initialisation**
$P(0):2^{0+1}|a^{2^0}-1\iff 2|a-1$
$\phantom{P(0):2^{0+1}|a^{2^0}-1} \iff 2|a-1$
$\phantom{P(0):2^{0+1}|a^{2^0}-1} \iff$ vrai. 
Car $(a-1)$ est un nombre pair puisque $a$ est supposé impair.

**Hérédité**
Soit $n \in \N$, supposons $P(n)$ vraie. Montrons $P(n+1)$,
- $2^{(n+1)+1}=2^{n+2} = 2^{n+1} \cdot 2$
- $a^{2^{n+1}} - 1 = a^{2^n 2}-1 = \left(a^{2^n}\right)^2-1$
- $\phantom{a^{2^{n+1}} - 1 = a^{2^n 2}-1} = \left(a^{2^n} - 1 \right)\left(a^{2^n}+1\right)$
- Or, $a$ est impair,
	- Donc $a^{2^n}$ est aussi impair.
	- *Le produit de nombres impairs étant toujours impair*
- On obtient:
	- $a^{2^n}+1$ pair
	- $2|(a^{2^n}+1)$
- On a donc:
	- $2^{n+1}|a^{2^n} - 1$
	- $2|a^{2^n}+1$
- D'où $2 \cdot 2^{2+1}|(a^{2^n}-1)(a^{2^n}+1)$
	- et, $2^{n+2}|(a^{2^n}-1)(a^{2^n}+1)$
	- $2^{n+2}|a^{2n+1}-1$
- $P_{n+1}$ est vérifiée.


# Exercice 4

> Montrer que pour tout entier naturel $n$, $3^{3n+3}-26n-27$ est divisible par $169$. 

Soit $n \in \N$,
- Montrons que $169|3^{3n+3} - 26n - 27$
- On a,
	- $169 = 13^2$
- **1ère étape**
	- $13|3^{3n+3} - 26n - 27$
	- $3^{3n+3} - 26n - 27 = 27 \cdot 3^{3n} - (27-1)n - 27$
	- $\phantom{3^{3n+3} - 26n - 27 } = 27(27^n - 1) - (27 - 1)n$
- **2ème étape**
	- $\phantom{3^{3n+3} - 26n - 27 } = (27-1)\left(27\sun{k=0}{n-1}(27^k) - n\right)$
	- $\phantom{3^{3n+3} - 26n - 27 } = (27)\left(\sun{k=0}{n-1}(27^k)-n\right)$
	- $\phantom{3^{3n+3} - 26n - 27 }27\sun{k=0}{n-1}(27)^k \left(\sun{k=0}{n-1}(27^{k+1})\right)$ et $n = \left(\sun{k=0}{n-1}1\right)$ 
	- $\phantom{3^{3n+3} - 26n - 27 } = \sun{k=0}{n-1}\left(27^{k+1} - 1\right)$ 
	- $\phantom{3^{3n+3} - 26n - 27 } = \left( \sun{k=0}{n-1}\left((27-1)\sun{i=0}{k}(27)^i\right)\right)$ 
	- $\phantom{3^{3n+3} - 26n - 27 } = (27-1)\sun{k=0}{n-1}\left(\sun{i=0}k (27)^n\right)$
	- Enfin,
		- $13 | (27-1)$
		- $13|\left(27\sun{k=0}{n-1}(27)^k-n\right)$
		- donc,
			- $13^2 | (27-1)27\left(\sun{k=0}{n-1}(27)^k - n\right) = 3^{3n+3}-26n-27$

> [!tips]
> $27^n - 1 = (27-1)\frac{27^n-1}{27-1} =(27-1)\sun{k=0}{n-1}(27)^k$ 
- 

# Exercice 5

> On donne les deux égalités suivantes:
> $3379026 = 198765  \times 17 + 21$
> et
> $609806770 = 35870986 \times 17 + 8$
> Quel est le reste de la division euclidienne de $N = 3379026 \times 609806770$ par $17$ ?

# Exercice 6

> Montrer que pour tout $n \in \N, n(n+1)(n+2)$ est divisible par $3$. 

# Exercice 7

> Montrer que si $n$ est un entier naturel somme de deux carrés d'entiers alors le reste de la division euclidienne de $n$ par $4$ n'est jamais égal à 3.

# II - Nombres premiers

## Exercice 8

> Soit $a,b$ des entiers supérieurs ou égaux à $1$
> 1. Montrer par récurrence que pour tout entier $n ≥ 1$ et tout réel $x$, $x^n-1 = (x-1)\sun{k=0}{n-1}x^k$ 
> 2. Montrer que $(2^a - 1)$ divise $(2^{ab}-1)$
> 3. Montrer que si $2^p - 1$ est premier alors $p$ est premier

### Question 1

> Montrer par récurrence que pour tout entier $n ≥ 1$ et tout réel $x$, $x^n-1 = (x-1)\sun{k=0}{n-1}x^k$ 

Montrons que $\forall n ≥ 1, \forall x \in \R, x^n - 1 = (x-1)\sun{k=0}{n-1}x^k$
- Soit $n \in \N^*$
	- Posons $H_n : \forall k ≤ n$
		- $\forall x \in \R,$
		- $x^k - 1 = (x-1)\sun{j=0}{k-1}x^j$

Montrons par récurrence que $\forall n \in \N^*,$ $H_n$ est vraie.

**Initialisation**
Soit $x \in \R,$ on a bien $x^1 - 1 = (x-1)\cdot \ub{x_0}1 = (x-1)\sun{j=0}{1-1}x^j$
Et donc, $H_1$ est vraie.

**Récurrence**
Soit $n \in \N^*$. Supposons que $H_n$ est vraie.  Montrons que $H_n \Rightarrow H_{n+1}$
- Soit $x \in \R$
	- $(x-1)\sun{j=0}n x^j = (x-1)x^n + \ub{(x-1)\sun{j=0}{n-1}}{\text{H.R}}$ 
	- $\phantom{(x-1)\sun{j=0}n x^j} = (x-1)x^n + x^n - 1$
	- $\phantom{(x-1)\sun{j=0}n x^j} = x^{n+1} - \cancel{x^n} + \cancel{x^n} - 1$
	- $\phantom{(x-1)\sun{j=0}n x^j} = x^{n+1} - 1$
- ce qui prouve $H_{n+1}$

### Question 2

>  Montrer que $(2^a - 1)$ divise $(2^{ab}-1)$

$2^0 - 1 \ 2^{ab}-  1$ 
$2^{ab} - 1 = (2^a)^b - 1$ en choisissant $x = 2a$
$\phantom{2^{ab} - 1} = x^b - 1$
$\phantom{2^{ab} - 1} = (x-1)\sun{k=0}{b-1}x^j = (2^a - 1)\left(\sun{j=0}{b-1}2^{bj}\right)$ 
ce qui prouve que : $2^a - 1 | 2^{ab} - 1$


### Question 3

> Montrer que si $2^p - 1$ est premier alors $p$ est premier

Supposons que $p$ n;est pas un nombre premier 
- si $p=0$
	- $2^0 - 1 = 0$ et $2^0 - 1$ n'est pas un nombre premier.
- Si $p=1$
	- $2^1 - 1 = 1$, n'est donc pas premier.
- Si $p > 2$
	- Alors puisque $p$ n'est pas premier et $p ≥ 2$
		- il existe un diviseur $d \in \N^*$ tel que $d | p$ et $d \notin \{1, p\}$
		- Il existe $q \notin \{1, d, p\}$ tel que $p = qd$
		- $2^p - 1 = 2^{q^d} -1$ qui n'est pas premier car divisible par $2^{d}-1 \notin \{1, 2^{q^d}-1\}$ car:
			- $q ≠ 1$
			- $d ≠ 1$

**CCL**
Pour tout $p$ non premier, $(2^p - 1)$  est non premier par contraposée.
- $\forall p \in \N,$
	- $(2^p - 1)$ est premier $\Rightarrow$ $p$ est premier. 


## Exercice 9

> Soit $n ≥ 2$ un entier et 

## Exercice 14

> On considère l'ensemble $G$ dont la loi interne est donnée par:
>
> $\begin{array}{l|l}* & a & b & c & d & e & f \\ \hline a & b &a & f & e & d & c \\ \hline b & a & b & c & d & e & f \\ \hline c & d & c & b & a & f & e \\ \hline d & c & d & e & f & a & b \\ \hline e & f & e & d & c & b & a \\ \hline f & e & f & a & b & c & d \end{array}$
> 
> 1. On admet que $(G, *)$ est un groupe, quel est son élément neutre? quel est le symétrique de $a$? de $d$ ?
> 2. Déterminer $a*b*c*d$
> 3. Quel est l'ordre de $G$ ?
> 4. Déterminer le sous-groupe engendré par $d$, noté $\langle d \rangle$
> 5. Quel est l'ordre de $d$ ?
> 6. Déterminer $\langle a,d \rangle$ le sous-groupe engendré par $a$ et $d$ 

> [!info]
> On appelle ce type de tableaux une [Table de Cayley](https://fr.wikipedia.org/wiki/Table_de_Cayley)
### Question 1

> On admet que $(G, *)$ est un groupe, quel est son élément neutre? quel est le symétrique de $a$? de $d$ ?

- $e_G = b$
- $a^{-1} = a$
- $d^{-1} = f$

### Question 2

> Déterminer $a*b*c*d$

$a*b*c*d = a*c*d$
$\phantom{a*b*c*d} = f*d$
$\phantom{a*b*c*d} = b$

D'où $(a*b)^{-1} = (c*d)$


### Question 3

> Quel est l'ordre de $G$ ?

$o(G) = 6$

### Question 4

> Déterminer le sous-groupe engendré par $d$, noté $\langle d \rangle$

$\langle d \rangle  = \{\ub{b}{(*)}, d, f\}$
- $(*)$ : obligatoire car $e_G$

$\begin{array}{l|l} & b & d & f \\ \hline b & b & d & f \\ \hline d & d & f & b \\ \hline f& f & b & d\end{array}$

### Question 5

> Déterminer $\langle a,d \rangle$ le sous-groupe engendré par $a$ et $d$ 

$o(\langle a,d \rangle) = \{b, a, d, f, e, c\}$

> [!info]
> L'ordre de tous les sous-groupes divise l'ordre du groupe (**Théorème de Lagrange**)

Ici en l'occurence, dès qu'on arrive à 4, le seul diviseur supérieur à 3 est 6 doù $o(\langle a, d\rangle) = 6$


## Exercice 18

> Soit $(G, \cdot)$  un groupe,
> $H$ et $K$ deux sous-groupes de $G$.
> On note $HK = \{hk;h \in H, k \in K\}$ $\color{orange}\leftarrow \text{écriture paramétrique}$
> Montrer que si $HK = KH$ alors $HK$ est un sous-groupe de $G$, et qu'il est alors le plus petit sous-groupe de $G$ contenant $H$ et $K$.


Montrons que $HK = KH \Rightarrow HK = \langle H, K \rangle$ (car l'élément neutre y figure + produit)

Supposons que $HK = KH$. Montrons que $HK = \langle H, K \rangle$
$(\sub)$ $HK \sub \langle H, K \rangle$
- Soit $x\in HK$. Il existe $h \in  H$ et $k \in K$ tel que:
	- $x = h \cdot k$
		- $h \in H$ donc $h \in \langle H, K \rangle$
		- $k \in K$ donc $k \in \langle H, K \rangle$
	- et, $\langle H, K \rangle$ est un sous-groupe de $G$ donc stable par la loi $(\cdot)$
	- donc $hk \in \langle H, K \rangle$ donc $x \in \langle H, K \rangle$
- **CCL** : $HK \sub \langle H, K \rangle$
$(\supset)$ Soit $\cancel{x \in \langle H,K \rangle }$ (mauvaise stratégie)
- Montrons que $\cancel{x \in HK}$ (mauvaise)
- On va plutôt montrer que $HK$ est un sous-groupe de $G$
	- contenant respectivement $H$ et $K$. 
1. $H \sub HK$
	- $\forall k \in H,$
		- $h = \ub{h}{\in H} \cdot \ub{e_G}{\in K}$
		- avec $e_G \in K$
		- car $K < G$
	- ce qui montre que $h\in HK$
		- d'où $H \sub HK$
2. $K \sub HK$, en effet, soit $k \in K$
	- $k = \ub{e_G}{\in H} \cdot \ub{k}{\in K}$
	- avec $e_G \in H$ car $H < G$
	- D'où $\boxed{K \sub HK}$
	- ce qui montre $k \in HK$
- Supposons que $HK = KH$
	- Montrons que $HK < G$
	1. $e_G \in HK$ évident car $e_G = \ub{e_G}{\in H} \cdot \ub{e_G}{\in K}$ et $\cases{e_G \in H \ (\text{car }H<G) \\ e_G \in K \ (\text{car }K<G)}$
		- ce qui montre que $e_G \in HK$
	2. Soient $x,y \in HK$.
		- Montrons que $x \cdot y \in HK$
		- $x \in HK$ et $y \in HK$ donc il existe $h_1, h_2 \in H$ et $k_1, k_2 \in K$
			- tels que $x = h_1k_1$ et $y = h_2k_y$
		- $xy = h_1 \cdot k_1 \cdot h_2 \cdot k_2$
	- $xy = h_1 \cdot k_1 \cdot h_2 \cdot k_2$
		- $h_1 k_1 \in HK$ et $HK = KH$
		- donc il existe $h' \in H$ et $k'\in K$ tels que:
			- $h_1k_1 = k'h'$
		- Posons $h'' = h'h_2$ on a $h'' \in H$ car $H < G$
			- et $h', h_2 \in H$
		- $h''h_2 \in HK$ et puisque $HK = KH$,
			- il existe $k^* \in K$ et $h^* \in H$ tels que:
				- $h'' k_2 = k^*h^*$
		- $= k' \cdot h'' \cdot k_2$
		- $= \ub{\ub{k'}{\in K} \cdot \ub{k^*}{\in K}}{\in K} \cdot \ub{h^*}{\in K}$
			- On obtient $\in KH = HK$
	- et $x,y \in HK$

> [!tips]
> **À faire**  - Inverses, puis dire $HK$ est un sous-groupe qui contient $h$ et $k$ donc contient de plus petit sous groupe contenant les deux. Ayant demontré la premiere inclusion les deux sont égaux

> [!check]
> Hypothèse : $H < G$ et $K<G$ 
> $HK = KH \Rightarrow HK = \langle H, K \rangle$
> 1. $HK \sub \langle H, K\rangle$ vrai car $\cases{H<G \\ K < G}$
> 2. $H \sub HK$ (vrai car $\rcases{H < G \\ K < G}$ et $e_G$)
> 	- $K \sub HK$ vrai car $\cases{K < G \\ H < G}$
> 	- Si on a montré que $HK < G$
> 	- alors on aura montré que $HK$ est un sous-groupe de $G$ qui contient $H$ et $K$
> 	- $\langle H, K \rangle \sub HK$ et la conclusipn s'en suivrait
> 	- Il suffit donc de montrer que 
> 		- $HK$ est un sous-groue e $G$
> 		- Faux en général même si $\cases{H < G \\ K < G}$
> 			- c'est là qu'on utilise l'hypothèse que $\boxed{HK = KH}$ 
> 		- avec cette hypothèse j'arrive à démontrer
> 			- que $HK < G$
> 			- Suffit pour conclure

