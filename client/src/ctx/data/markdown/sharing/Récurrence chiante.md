---
date: 02/09/2025
lang: fr
desc: Une récurrence particulièrement désagréable sur laquelle j'aurais besoin d'un peu d'aide.
---


$\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\N}{\mathbb{N}}\newcommand{\R}{\mathbb{R}}\newcommand{\Z}{\mathbb{Z}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}$

# Exercice 1

> Pour $n ≥ 1$, on pose $H_n = \sum^n_{k=1}\frac1k$.
> Montrer que, pour $n≥2, H_n$ n'est jamais un entier.
> 
> *Indication : montrer par récurrence que $H_n$ est le quotient d'un entier impair par un entier pair en distinguant les cas où $n$ est pair et $n$ est impair.*


## 1. Raisonnement

Soit $\cases{A \in \N \text{ impair } \\ B \in \N \text{ pair }}$
Supposons que $\frac{A}B$ est entier.
- Alors, $A=n \times B$ avec $n = \gcd(A, B)$
	- Or, $B$ étant pair
		- Il existe $k\in\N$ tel que $B = 2 \cdot k$
- $A = n \times 2 \times B = 2(B \cdot n)$   
- Soit $A$ pair.

Ce qui est absurde, car on a supposé $A$ impair.

## 2. Réécriture de $H_n$

$H_k = \sum^n_{k=1}\frac1k =\frac{A_n}{B_n}$ 

Pour un $n$ donné, afin que $H_n$ ne soit pas entier, il suffit d'après $\fbox1$ que $A_n$ soit impair et $B_n$ pair.
## 3. Démonstration par récurrence

$P_n: \forall n ≥ 2, A_n \not \equiv 0[2] \iff H_n \in \R \backslash \Z$ 

### 3.1 Initialisation

Par $\color{orange}(1)$
$H_2 = \frac{1+2}{2\cdot 2^2} = \frac{3}{2}$.
- $A_2$ est impair
- $B_2$ est pair.

$P_2$  vraie. **INIT OK**

### 3.2 Récurrence

Supposons $P_n$ vraie pour un rang $n$ donné. Montrons que $P_n \Rightarrow P_{n+1}$

$H_n = \frac{A_n}{B_n}$
$H_{n+1} = \frac{A_n}{B_n} + \frac{1}{n+1}$
$= \frac{A_n(n+1)+B_n}{B_n(n+1)}$
- $A_n$ étant impair, il existe $a\in \N$ tel que $A_n = 2 \cdot a + 1$
- $B_n$ étant impair, il existe $b \in \N$ tel que $B_n = 2 \cdot b$.

**Cas 1** : $n$ pair (donc $n+1$ impair)

$= \frac{nA_n+A_n+B_n}{B_nn+B_n}$
$= \frac{2(an + a + b) + n + 1}{2b(n)}$
$= \frac{A_{n+1}}{B_{n+1}}$ où $A_{n+1}$ impair et $B_{n+1}$ pair. **OK**

**Cas 2** : $n$ impair (donc $n+1$ pair).

Notons $n = 2k - 1$, donc $n+1 = 2k$
- $H_{n+1} = \sum^{2k}_{i=1}\frac1i=\sum^{k-1}_{i=0}\frac{1}{2i+1}+\sum^{k}_{i=1}\frac{1}{2i}$ 
	- On "sépare les éléments pairs et impairs"
- $H_{n+1} =\frac12H_n + \ub{\sum^{k-1}_{i=0}\frac{1}{2i+1}}{\delta}$ 
	- Le dénominateur de $\delta$ est donné par des produits successifs de nombres impairs, en faisant ainsi un nombre impair. 
		- Nous noterons ce nombre: $2S+1$
	- Le numérateur quant à lui est donné par des sommes de produits successives, en faisant un entier que nous noterons $L$. 
	- Par H.R
- $H_{n+1} = \frac12\frac{A_n}{B_n}+\frac{L}{2S+1}$ 
- $H_{n+1} = \frac{A_n(2S+1) + L \cdot B_n}{2 \cdot B_n \cdot (2S+1)}$
	- Substituons par $a$ et $b$ 
- $H_{n+1} = \frac{(2a+1)(2S+1)+2b\cdot L}{2 \cdot 2 \cdot b \cdot (2\cdot S + 1) }$
- $H_{n+1}=\frac{2(2as+a+s+b\cdot L) + 1}{2^2(b(2S+1))}$ 

On retrouve ainsi $A_{n+1}$ impair et $B_{n+1}$ pair. 

On a bien $P_n \Rightarrow P_{n+1}$

### 3.3 Conclusion

$\forall n \in \N \text{ et } n ≥ 2, \sum^{n}_{k=1}\frac1k$ n'est jamais entier. 


# Exercice 2

> Déterminer toutes les applications injectives de $\N$ vers $\N$ telles que:
> $\forall n \in \N, f(n) ≤ n$

Sur $\N$
- $f(0) ≤ 0 \Rightarrow f(0) = 0$
- Puis, $f(1) \in [| 0, 1|]$  
	- Or, étant injective et $f(0) = 0$
	- $f(1)=1$
- Par itération
- $\vdots \ \vdots \ \vdots$
- $\forall n \in \N, f(n) = n$

D'où la solution unique à l'énoncé:
- $f(n) = \text{id}_n$ 