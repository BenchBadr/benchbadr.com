---
lang: fr
date: 18/09/2025
desc: Les groupes symétriques et alternés, leurs propriétés, et la notion de signature des permutations.
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\align}[1]{\begin{aligned}#1\end{aligned}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}$
> [!info]
> Cours présenté par **M. Martinez**

# I - Propriété fondamentales de $\N$

## 1. Principe de récurrence

Soit $P$ une propriété portant sur $\N$ (entiers naturels). 
Soit $n_0$ un entier naturel. 
SI:
- i) $P(n_0)$ est vraie (initialisation)
- ii)  $\forall n \in \N$ avec $n ≥ n_0$. $P(n) \Rightarrow P(n+1)$
	- Alors, $\forall n ≥ n_0$ $P(n)$ est vraie. 

> [!check]
> Ce principe provient de l'axiomatique de $\N$, ainsi ne se démontre pas.

## 2. Théorème 1

Toute partie non-vide de $\N$ admet un plus petit élément. 

### 2.1. Preuve

Supposons que $A \sub \N$. 
- $A$ n'admet pas de petit élément $(*)$
- On va montrer que $A ≠ \varnothing$

Pour tout $n \in \N,$ on considère la propriété suivante:
- $P(n):\forall k ≤ n$, $k \notin A$
- On va démontrer que $\forall n \in \N$ $P(n)$ est vraie.

**Initialisation**
$P(0)$ est vraie car si $P(0)$ était fausse alors on aurait $0\in A$ et $0$ serait le plus petit élément de $A$ ce qui contredit l'hypothèse $(*)$.

**Hérédité**
Supposons que $P(n)$ est vraie. Montrons $P(n+1)$,
- Par l'absurde, supposons que $n+1 \in A$
- Supposons que $P(n+1)$ est fausse.
	- Alors, puisque $P(n)$ et vraie on aurait $\forall k ≤ n, k \notin A$ et,
	- $\exists k \in \N$ t.q $k ≤ n+1$ avec $k\in A$
	- Ce qui imposerait $n+1 \in A$
- On aurait alors que $n+1$ est le plus petit élément de $A$.
	- D'autre part, $n+1 \in A$
	- Et $\forall k ≤ n, k \notin A$
- Donc $n+1$ est un minorant de $A$ qui appartient à $A$. 
- Ceci est absurde car cela contredit l'hypothèse $(*)$ $(A$ n'a pas de plus petit élément$)$.
	- On a donc $P(n+1)$ nécessairement vraie.

**Conclusion**
$\forall n \in \N, P(n)$ vraie.
- $\forall n \in \N$, $\forall k ≤ n$ $k \notin A$
- D'où $\forall n \in \N, n \in A$
- et donc $A = \varnothing$

### 2.2. Corollaire

Toute partie non-vide et **majorée** de $\N$ admet un plus grand élément.

#### 2.2.1. Preuve

Soit $A \sub \N$, $A ≠ \varnothing$,
- Posons $\mathscr{M}=\{m \in \N / \forall k \in A, k ≤ m\}$
	- L'ensemble des majorants de $A$. 
- Puisque $A$ est une partie majorée, $\ms{M} ≠ 0$
	- Donc $\ms{M} ≠ \varnothing$ et $M \sub \N$
	- donc $\ms{M}$ admet un plus petit élément $m_0$
- Nous allons montrer que $m_0$ est le plus grand élément de $A$.
- Mq $m_0 \in A$
	- $m_0 - 1$ n'est pas un majorant de $A$ car s'il l'était $m_0$ ne serait pas le plus petit élément de $\ms{M}$
	- Donc il existe $k \in A$ tel que $k > m_0 - 1$
		- si ça n'était pas le cas $m_0-1\in\ms{M}$  ce qui est faux.
	- On aurait donc $m_0 - 1 < \ub{k ≤ m_0}{(*)}$
		- $(*)$ : car $m_0$ majorant de $A$ et $k \in A$
	- ce qui n'est possible que si $k = m_0$
		- Puisque $k \in A$ on a $m_0 \in A$.
	- $m_0 \in \ms{M}$ est un majorant de $A$.

**Conclusion**
$m_0$ est le plus grand élément de $A$ et A admet un plus grand élément
- En fait, le plus petit des majorants de $A$.
Toute partie non-vide de $\N$ majorée admet un plus grand élément.


## 3. Axiomes

- Il existe un ensemble qui est vide. On l'appelle $\phi$ (0).
	- Si $x$ est un ensemble alors $\{x\}$
	- Si $x$ et $y$ sont deux ensembles, on sait construire $x\cup y$. 
	    - C'est l'ensemble dont les éléments sont les éléments de $x$ et les éléments de $y$.
	- Axiome de l'infini. 
	    - On note $x\cup \{x\}=S(x)$
	    - Il existe un ensemble $N$ qui vérifie les propriétés suivantes. 
	        - $\phi \in N$
	        - Pour tout ensemble $x$, si
	            - $x\in N$ alors $S(x)=x\cup\{x\}$ 
## II - Division euclidienne dans $\Z$

## 1. Théorème

> [!info]
> On considère un ensemble qui est constitué dexu copies de l'ensemble des entiers et on muni ce nouvel ensemble.
> $\N_1 \cup \N_2^*$ 
> On muni ce nouvel ensemble 'dune structure d'ordre total compatible avec la structure d'ordre que l'on a sur $\N_1$.
> À partir de là, on est capable de retrouver $\Z$
> On note $(\Z, ≥)$ et $(\Z, +, \times)$

Pour tout $(a,b)\in\Z \times \Z^*$
- Il existe un **unique** couple d'entiers $(q,r)$ tels que:
	- $a = bq+r$ avec $0 ≤ r < |b|$
- des entiers $q$ et $r$ appelés respectivement le quotient et le reste de la division euclidienne (D-E) de $a$ par $b$. 
	- On dit alors que $(\Z, +, \times)$ est un **anneau euclidien**. (un joyau)

### 1.1 Démonstration

**1er cas**  - $(a,b)\in\N \times \N^*$
- Soit $E = \{k \in \N\}$