---
lang: fr
date: 15/09/2025
desc: Groupe symétrique, définition du déterminant
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\tr}{\text{tr}}\newcommand{\mc}{\mathcal}$
 
> [!info]
> Enseignant: **Julien Roth** (julien.roth@univ-eiffel.fr) Copernic 4B060

# I - Groupe symétrique
## Exercice 1 - Calculs élémentaires

> 1. Dans le groupe $\mc{S}_4$, vérifier que $(1,4)(4,3)$ est un 3-cycle.
> 2. Déterminer le groupe $\mc{S}_5$ inverse du cycle $(1,3,5,4)$
> 3. Dans le groupe $\mc{S}_7$ calculer le produit $(3,5,6)(5,6,7)(6,2,1)(1,2)$. Décomposer cette permutation en produits de cycles à supports disjoints.
> 4. Dans le groupe $\mc{S}_9$, calculer le produit $aba^{-1}$ pour $a=(1,2,6)(1,3)$ et $b=(1,5,7,9)$, puis pour $a=(1,2,9,7,5,3)$ et $b=(1,7,3)$. Dans ce dernier cas, comparer le résultat avec le cycle $(a(1), a(7), a(3))$.

### Question 1
> Dans le groupe $\mc{S}_4$, vérifier que $\sigma = (1,4)(4,3)$ est un 3-cycle.

$\sigma = \ub{(1,4)}{\tau_1}\ub{(4,3)}{\tau_2}$
- $\sigma = \tau_1 \circ \tau_2$
	- $\sigma(1) = \tau_1(\tau_2(1))$
	- $\phantom{\sigma(1)} = \tau_1(1)$ (car $\tau_2(1)=1$)
	- $\phantom{\sigma(1)} = 4$
	- $\sigma(2) = \tau_1(\tau_2(2))$
	- $\phantom{\sigma(2)} = \tau_1(2)$
	- $\phantom{\sigma(2)} = 2$
	- $\sigma(3) = \tau_1(\tau_2(3))$
	- $\phantom{\sigma(3)} = \tau_1(4)$
	- $\phantom{\sigma(3)} = 1$
	- $\sigma(4) = \tau_1(\tau_2(4))$
	- $\phantom{\sigma(4)} = \tau_1(3)$
	- $\phantom{\sigma(3)} = 3$
- On a donc $\sigma = (1, 4, 3)$

## Question 2
> Déterminer le groupe $\mc{S}_5$ inverse du cycle $(1,3,5,4)$

L'écriture du cycle $(1,3,5,4)$ dans $\mathcal{S}_6$  est:
- $(4,5,3,1)=(1,4,5,3)$

#### Point méthode - Inversion

**Étape 1** - Écrire la "matrice" du cycle initial.
- $\sigma = \m{1 & 2 & 3 & 4 & 5 \\ 3 & 2 & 5 & 1 & 4}$ 

**Étape 2** - L'inverser (et re-trier)
- $\sigma^{-1} = \m{3 & 2 & 5 & 1 & 4 \\ 1 & 2 & 3 & 4 & 5}$
- $\sigma^{-1} = \m{1 & 2 & 3 & 4 & 5 \\ 4 & 2 & 1 & 5 & 3}$

**Étape 3** - Extraire les valeurs et construire le cycle inverse
- $\sigma^{-1}(1) = 4$
- $\sigma^{-1}(2)=2$
- $\sigma^{-1}(3)=1$
- $\sigma^{-1}(4)=5$
- $\sigma^{-1}(5)=3$

**Étape 4** - Assembler
- $(1, 4, 5, 3)$
- **Réponse non-unique**

> [!warn]
> L'écriture d'un cycle n'est pas unique (... car on peut décaler l'écriture) donc l'inverse n'est pas unique non plus.

### Point méthode 2 - Inversion rapide

- $a = (1,2,6)(1,3)$
- $a^{-1} = (1,3)^{-1}(1,2,6)^{-1}$
	- On peut comparer ça au produit d'une matrice
	- $(AB)^{-1} = B^{-1}A^{-1}$
- $a^{-1} = (1,3)(1,6,2)$
## Question 3

> Dans le groupe $\mc{S}_7$ calculer le produit $(3,5,6)(5,6,7)(6,2,1)(1,2)$. Décomposer cette permutation en produits de cycles à supports disjoints.

> [!tips]
> Le support d'un cycle désigne l'écriture du cycle (eg. $(1,3,5)(2,4,7)$)
> Des supports disjoints désignent des cycles n'ayant pas d'éléments en commun.

> [!check]
> Si les supports sont disjoints alors les cycles commutent.



### Point méthode 3 - Cycles disjoints

**Étape 1** - (Re)construire le cycle en calculant les "associations"
- $1 \mapsto 1, 2 \mapsto 7, 3 \mapsto 5, 4 \mapsto 4, 5 \mapsto 3, 6 \mapsto 2, 7 \mapsto 6$
- $\m{1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 1& 7 & 5 & 4 & 3 & 2 & 6}$

**Étape 2** - Écrire naturellement les cycles (puis composer les indépendants)
- $(2,7,6)(3,5)$

## Question 4

> Dans le groupe $\mc{S}_9$, calculer le produit $aba^{-1}$ pour $a=(1,2,6)(1,3)$ et $b=(1,5,7,9)$, puis pour $a=(1,2,9,7,5,3)$ et $b=(1,7,3)$. Dans ce dernier cas, comparer le résultat avec le cycle $(a(1), a(7), a(3))$.

## Exercice 2 - Définition de la signature

> 1. Déterminer la signature des permutations suivantes:
>
> $\sigma = \m{1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 4 & 1 & 5 & 3 & 8 & 7 & 2 & 6}$ 
> $\tau = \m{1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 7 & 2 & 4 & 8 & 5 & 3 & 1 & 6}$
> 
> 1. Même question, pour $n ≥ 2$
>
> $\sigma = \m{1 & 2 & ... & n-1 & n \\ n & n-1 & ... & 2 & 1}$ 


## Exercice 3 - Décomposition en produits

> Décomposer les permutations suivantes en produits de cycles à supports disjoints, puis en produit de transpositions.
> $\sigma = \m{1 & 2 & 3 & 4 & 5 & 6 \\ 3 & 5 & 4 & 6 & 2 & 1}$
> $\tau = \m{1 &2& 3 & 4 & 5 & 6 & 7 & 8 \\ 6 & 2 & 5 & 7 & 8 & 1 & 3 & 4}$


## Exercice 4 - Décomposition en produits II

> 1. Dans $S_n,$ avec $n ≥ 4$, on considère une permutation $\sigma$ et un $p$-cycle $c=(x_1, x_2, ..., x_p), 2 ≤ p ≤ n$. Montrer que la permutation $\sigma \circ c \circ \sigma^{-1}$ est un $p$-cycle que l'on précisera.
> 2. Montrer que toute transposition de $S_n$ peut s'écrire comme le produit de transpositions de la forme $i \in \{2, ..., n\}$.
> 3. En déduire que toute permutation de $S_n$ peut s'écrire comme le produit de transpositions de la forme $(1, i) \in \{2, ..., n\}$
> 4. En s'inspirant de la première question, montrer que toute transposition $(1,i)\in\{2, ..., n\},$ s'écrit comme le produit composé uniquement des cycles. $(1,2), (2,3, ..., n-1, n), (n, n-1, n-2, ..., 3, 2)$
> 5. Déduire des questions précédentes que le groupe $S_n$ est engendré par les cycles $(1,2)$ et $(2,3, ..., n-1, n)$.

## Exercice 5 - Permutations paires et impaires

> 1. Montrer que l'ensemble $A_n$ des permutations paires de $S_n$ est un sous-groupe de $(S_n, \circ)$. Qu'en est-il de l'ensemble des permutations impaires $I_n$ ?
> 2. Rappeler quel est le cardinal de $A_n$ et $I_n$. Comment obtient-on ce résultat?
> 3. Déterminer tous les éléments de $A_3$ puis $A_4$.

## Exercice 6 - Un groupe vraiment pas commutatif

> Pour tout $n \in \N^*$, on note $Z_n$ l'ensemble des permutations qui commutent avec toutes les autres:
> $Z_n = \{s \in S_n: \forall \sigma \in S_n, s \circ \sigma = \sigma \circ s\}$.
> 1. Déterminer $Z_1$ et $Z_2$.
> 2. On suppose à partir de maintenant que $n ≥ 3$. Pour tout $i \in \{1, ..., n\}$, montrer qu'il existe une permutation $\sigma_i \in S_n$ dont le seul point fixe est $i$.
> 3. En déduire que $Z_n = \{\id_{\{1, ..., n\}}\}$ 



# II - Rappels sur les applications linéaires

## Exercice 7 - Trace d'une matrice et d'un endomorphisme

> On rappelle que la trace d'une matrice carrée $A=(a_{i,j})_{1≤i,j≤n}$ à coefficient dans $\R$ ou $\C$ est la somme de ses coefficients diagonaux:
> $\tr(A) = \sum^n_{i=1}a_{ii}$ 
> 1. Montrer que l'application $A \mapsto \tr(A)$ est une forme linéaire
> 2. Montrer que pour toute matrice carrée $A$ et $B$, $\tr(A)=\tr(BA)$. En déduire que pour toute matrice inversible $P\in GL_n(\K), \tr(PAP^{-1})=\tr(A)$.
> 3. Soit $f$