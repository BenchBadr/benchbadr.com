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