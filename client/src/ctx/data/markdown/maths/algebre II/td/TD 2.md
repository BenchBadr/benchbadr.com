---
lang: fr
desc: Déterminons des déterminants, algèbre linéaire 2
date: 29/09/2025
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}\newcommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}$

> [!info]
> TD encadré par **J. Roth**

# I - Calculs élémentaire de déterminants

## Exercice 1 - En utilisant la définition

> 1. Rappeler quels sont les éléments du groupe symétrique $\mc{S}_3$.
> 2. En s'appuyant sur l'expression du déterminant d'une matrice sous forme d'une somme indexée par les éléments de $\mc{S}_3$ montrer que:
> - $\dt{a & b & c \\ d & e & f \\ g & h & i} = aei + bfg + cdh - ceg - bdi - afh$

> [!info]
> On appelle cette formule la **Règle de Sarrus**, démontrée ci-dessous.

### Préliminaire - Règle de Sarrus

Elle est spécifique à la taille 3.

$\dt{\color{red}a\color{0} & b & \boxed{c} \\ \color{green}d\color{0} & \boxed{\color{red}e\color{0}} & f \\ \boxed{\color{orange}g\color{0}} & \color{green}h\color{0} & \boxed{\color{red}i\color{0}}}$ 
 $\mi{a & \boxed{\color{orange}b\color{0}} & \color{green}c\color{0} \\ \boxed{d} & e & \color{orange}f\color{0}}$
 $= aei + cdh + bfg - ceg - afh -bdi$

### Question 1

> Rappeler quels sont les éléments du groupe symétrique $\mc{S}_3$.

$\mc{S}_3 = \{\id_{\{i,2,3\}}, (1,2), (1,3), (2,3), (1,2,3), (1,3,2)\}$ 

### Question 2

> En s'appuyant sur l'expression du déterminant d'une matrice sous forme d'une somme indexée par les éléments de $\mc{S}_3$ montrer que:
> - $\dt{a & b & c \\ d & e & f \\ g & h & i} = aei + bfg + cdh - ceg - bdi - afh$

> [!tips]
> **Rappel** - Soit $A = (a_{ij})_{1 ≤ i,j≤n}$ une matrice de $\ms{M}_{n}(\K)$. 
> Alors : $\det(A) = \sun{\sigma \in \ms{S}_n}{}\eps(\sigma)\pron{i=1}n a_{\sigma(i), i}$
> où $\sigma(i)$ et $i$ interchangeable car une matrice a le même déterminant que sa transposée.

On écrit $\m{a & b & c \\ d & e & f \\ g & h & i} = \m{a_{1,1} & a_{1,2} & a_{1,3} \\ a_{2,1} & a_{2,2} & a_{2,3} \\ a_{3,1} & a_{3,2} & a_{3,3}}$
On écrit 
- $\det(A) = \ub{a_{1,1}a_{2,2}a_{3,3}}{\id} + \ub{a_{2,1}a_{3,2}a_{1,3}}{(1,2,3)} + \ub{a_{3,1}, a_{1,2}, a_{2,3}}{(1,3,2)}$
	- $- \ub{a_{2,1}a_{1,2}a_{3,3}}{(1,2)} - \ub{a_{3,1}a_{2,2}a_{1,3}}{(1,3)} - \ub{a_{1,1}a_{3,2}a_{2,3}}{(2,3)}$
- On remplace par les valeurs associées:
- $\det(A) = aei + dhc + gbf - dbi - gec - ahf$

**Inconvénients de cette formule**
- Impossible à généraliser
- Si l'on doit déterminer un paramètre $t$ tel que la matrice soit inversible (déterminant non-nul)
	- Si c'est le cas, on obtient un polynôme de degré $3$ 
	- À moins d'une racine ou factorisation évidente, ça devient extensivement compliqué.
- Alternativement, opérations sur lignes et colonnes puis remonter à la manière d'un pivot de Gauss. 
	- L'objectif sera d'obtenir une matrice triangulaire
	- Se référer à l'exercice suivant pour voir l'intérêt de diagonaliser
- Marche avec les matrices $(2,2)$ que l'on connaît comme étant le produit en croix


## Exercice 2 - Deux méthodes pour un résultat

> 1. En utilisant l'expression du déterminant d'une matrice sous forme d'une somme, montrer que:
> 	- $\dt{a_{1,1} & \cdots & \cdots & a_{1,n} \\ 0 & \ddots & & \vdots \\ \vdots & \ddots & \ddots & \vdots \\ 0 & \cdots & 0 & a_{n,n}} = a_{1,1}a_{2,2}\cdots a_{n,n}$
> 2. Donner une autre preuve en utilisant les opérations sur les lignes et les colonnes.

### Question 1

> En utilisant l'expression du déterminant d'une matrice sous forme d'une somme, montrer que:
> 	- $\dt{a_{1,1} & \cdots & \cdots & a_{1,n} \\ 0 & \ddots & & \vdots \\ \vdots & \ddots & \ddots & \vdots \\ 0 & \cdots & 0 & a_{n,n}} = a_{1,1}a_{2,2}\cdots a_{n,n}$


Soit $\sigma \in \mc{S}_n, \sigma ≠ \id_{\{1,2,...,n\}}$.
- Donc il existe $i\in\{1, ..., n\}$ tel que:
	- $\sigma(i) ≠ i$
- Si $\sigma(i) > i$
	- alors $a_{\sigma(i), i} = 0$ car $A$ est triangulaire supérieur
- Sinon $\sigma(i) < i$,
	- alors il existe $j\in \{1, ..., n\}$ tel que $\sigma(j) > j$
		- remarque; $j≠i$

> [!tips]
> $\sigma(i) ≤ j$ $\forall$ J procéder par l'absurde

## Exercice 3 - Quelques déterminants explicites

> Calculer les déterminants suivants en utilisant des opérations sur les lignes et les colonnes.

### Question 1

> $D_1 = \dt{2 & 1 \\ -3 & 3}$

### Question 2

> $D_2 = \dt{2 & 0 & 2 \\ 3 & 2 & 2 \\ 0 & 1 & 1}$

### Question 3

> $D_3 = \dt{2 & 0 & 1 & 0 \\ 2 & 0 & 1 & 5 \\ -2 & 2 & 4 & 8 \\ 2 & 0 & -2 & 3}$

### Question 4

> $D_4 = \dt{1 & 2 & 1 & 3 \\ 4 & 0 & 3 & 1 \\ 1 & 6 & -1& -1 \\ 1 & -2 & 3 & 0}$


## Exercice 4

> Soit $a,b,c$ trois réels. Montrer que:

### Question 1

> $\dt{1 & 1 & 1 \\ a+b & c+a & b+c \\ ab & ca & bc} = (c-b)(c-a)(b-a)$

### Question 2

> $\dt{a-b-c & 2a & 2a \\ 2b & b-c-a & 2b \\ 2c & 2c & c-a-b} = (a+b+c)^3$

## Exercice 5 - Un peu de trigonométrie

> Soit $x,y,z$ trois réels.
> 1. Calculer le déterminant suivant: $\dt{1 & \sin^2(x) & \cos^2(x) \\ 1 & \sin^2y & \cos^2y \\ 1 & \sin^2(z) & \cos^2(z)}$
> 2. Rappeler les formules qui donnent $\sin a - \sin b$ et $\cos a - \cos b$ en fonction de:
> 	- $\sin(\frac{a+b}2)$
> 	- $\sin(\frac{a-b}2)$
> 	- $\cos(\frac{a+b}2)$
> 	- $\cos(\frac{a-b}2)$
> En déduire l'expression du déterminant suivant comme produit de trois sinus:
> - $\dt{1 & \sin(x) & \cos(x) \\ 1 & \sin(y) & \cos(y) \\ 1 & \sin(z) & \cos(z)}$

# II - Des déterminants de taille quelconque

## Exercice 6




