---
lang: fr
desc: Groupes symétriques, groupes p-lineaires, determinant...
date: 02/10/2025
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}\newcommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}\newcommand{\piv}[1]{\underset{\begin{array}{l}#1\end{array}}{=}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\com}{\text{com}}\newcommand{\td}[1]{\underset{#1}{\longrightarrow}}\newcommand{\Q}{\mathbb{Q}}$
> [!info]
> Cours inspiré de **Tout-en-Un, Dunod** (7ème édition)

# I - Groupes symétriques

## 1. Définition

Soit $n \in \N^*$. 
- On note $\mc{S}_n$ l'ensemble des permutations sur l'ensemble $[|1,n|]$
- c'est-à-dire,
	- l'ensemble des bijections de $[|1,n|]$ dans lui-même.
- Immédiatement, on a $\mc{S}_1 = \{\id\}$

### 1.1 Proposition 1

Muni de la composition des applications, $\mc{S}_n$ est un groupe de cardinal $n!$ que l'on appelle **groupe symétrique**.
Si $n ≥ 3$, le groupe $\mc{S}_n$ n'est pas commutatif.

### 1.2 Notations

1. Si $(\sigma, \tau) \in \mc{S}_n^2$ la composée $\sigma \circ \tau$ est notée $\sigma \tau$ et appelée produit de $\sigma$ et $\tau$.
2. Lorsque $p \in \Z,$ on notera $\sigma^p$ l'itéré $p$-ième d'une permutation $\sigma$
3. Une permutation $\sigma$ de $\mc{S}_n$ pourra se noter de la manière suivante:
	- $\sigma = \m{1 & 2 & ... & n \\ \sigma(1) & \sigma(2) & ... & \sigma(n)}$

### 1.3 Définition 1 - $p$-cycle

Étant donné un entier $p ≥ 2,$ ainsi que $a_1, ..., a_p$ des éléments de $[|1,n|]$ distincts deux à deux, l'application $\sigma$ définie sur $[|1,n|]$ par:
- $\align{\forall x \in [|1,n|]\backslash \{a_1, ..., a_p\} & \sigma(x) \\ \forall i \in [|1, p-1|] & \sigma(a_i) = a_{i+1} \\ & \sigma(a_p) = a_1}$ 
- est une permutation de $[|1, n|]$ que l'on note $(a_1 a_2 \cdots a_p)$
- Une telle permutation est appelée **$p$-cycle** ou **cycle d'ordre $p$**.
- On appelle **support** du cycle $\sigma$ l'ensemble $\{a_1, ..., a_p\}$.

### 1.4 Définition 2 - Transposition

Un $2$-cycle $\tau$ de $\mc{S}_n$ est appelé **transposition**. Il existe alors deux éléments distincts $i$ et $j$ de $[|1, n|]$ tels que:
- $\tau(i) = j$
- $\tau(j) = i$
- $\forall x \notin \{i, j\}$
- $\tau(x) = x$


#### 1.4.1 Remarques

- **Involution** - Une transposition $\tau$ vérifie $\tau^2 = \id$. On a donc $\tau^{-1} = \tau$  
- **Par définition** - $\id$ n'est pas un cycle.
- On peut « décaler » les $p$-cycles, rendant leurs écritures multiples:
	- $(a_1 \ a_2 \ \cdots \ a_p)$
	- $(a_2 \ a_3 \ \cdots \ a_p)$
	- $\vdots$
	- $(a_p \ a_1 \ \cdots \ a_{p-1})$
- Le support d'un cycle est l'ensemble des éléments $x \in [|1,n|]$ tels que $\sigma(x)≠x$.

### 1.4.2 Exemples - $\mc{S}_2$ et $\mc{S}_3$

- $\mc{S}_2 = \{\id, (1 \ 2)\}$ et $(\mc{S}_2, \circ)$ est commutatif.
- Les 6 éléments de $\mc{S}_3$ sont:
	- l'application $\id$
	- les trois transpositions $(1 \ 2), (2 \ 3), (1 \ 3)$ 
	- Les deux 3-cycles:
		- $(1 \ 2 \ 3)$
		- $(3 \ 2 \ 1)$

## 2. Décomposition d'une permutation

### 2.1 Proposition 2

> [!check]
> Deux cycles à support disjoints commutent

