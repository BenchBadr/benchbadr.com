---
lang: fr
desc: Déterminons des déterminants, algèbre linéaire 2
date: 29/09/2025
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}\newcommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}\newcommand{\piv}[1]{\underset{\begin{array}{l}#1\end{array}}{=}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\com}{\text{com}}\newcommand{\td}[1]{\underset{#1}{\longrightarrow}}\newcommand{\Q}{\mathbb{Q}}$
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
 $\mb{a & \boxed{\color{orange}b\color{0}} & \color{green}c\color{0} \\ \boxed{d} & e & \color{orange}f\color{0}}$
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

> [!info]
> **Rappel** : $\det(A) = \sun{\sigma \in \mc{S}_n}{}\eps(\sigma)\pron{i=1}{n}a_{\sigma(i)}$ 

On va montrer que $\sigma(i) ≠ \id_{\{1, ..., n\}}$, alors il existe:
- $i \in \{1, ..., n\}$ tel que $\sigma(i)) > i$
	- Par l'absurde,
		- Supposons que $\forall i \in \{1, ..., n\}, \sigma(i) ≤ i$
		- Donc $\sigma(1) ≤ 1$ donc $\sigma(1) = 1$
		- De plus, $\sigma(2) ≤ 2$ donc $\sigma(2) = 1$ ou $2$. 
	- Donc $\sigma(2) ≠ 1$ car $\sigma$ est une bijection.
	- $\Rightarrow \sigma(2) = 2$
- On a ainsi par une récurrence immédiate
	- $\forall i \in \{1, ..., n\}$
	- $\sigma(i) =  i$
- Donc $\sigma = \id_{\{1, ..., n\}}$ contradiction car $\sigma$ est différente de $\id_{\{1,..., n\}}$.
- $\Rightarrow a_{\sigma(i), i} = 0 \Rightarrow \pron{j=1}n a_{\sigma(j), j} = 0$
- Donc $\det(A) = a_{1,1}...a_{n,n}$ qui correspond au terme $\sigma = \id_{\{1, ..., n\}}$ dans la somme.

### Question 2

>  Donner une autre preuve en utilisant les opérations sur les lignes et les colonnes.

$\dt{a_1,1 \\ 0 & a_{2,2} \\ \vdots & & \ddots \\ 0 & \cdots & & 0 }=a_{n,n}\dt{a_{1,1} \\ 0 & a_{2,2} \\ \vdots & \ddots & \ddots \\ \vdots   & a_{n-1, n-1} & a_{n-1, n}\\ 0 & \cdots & 0 & 1}$   

$\piv{L{n-1}\leftarrow L_{n-1} - a_{n-1, n}}a_{n,n}\dt{a_{11} \\ 0 & a_{22} \\ \vdots & & \ddots \\ 0 & \cdots & \cdots & 0 & a_{n-1, n-1} & 0 \\ 0 & \cdots & \cdots & \cdots & 0 & 1}$ 

$\piv{}a_n,na_{n-1, n-1}\dt{a_{11} & & & & & 0 & 0 \\ 0 & a_{2,2} & & & & \vdots & \vdots \\ \vdots & & & & & \vdots & \vdots \\ 0 & \cdots & \cdots & 0 & a_{n-2, n-2} & 0 & 0 \\ 0 & \cdots & \cdots & \cdots & 0 & 1 & 0 \\ 0 & \cdots & \cdots & \cdots & \cdots & 0 & 1}$   

$$
= a_{n,n}a_{n-1, n-1}a_{n-2, n-2}\dt{
a_{11} \\ & a_{2,2} & & & & &  & & 0 & 0 \\ 
& & \ddots 
\\ & & & \ddots  
\\ & & & & & \ddots  & & & \vdots & \vdots
\\ & & & & & &  & a_{n-3, n-3} & \vdots & \vdots
\\ 0 & \cdots & \cdots & \cdots & \cdots &  & 0 & 1 & 0 & 0}
$$

etc... On obtient $1$

## Exercice 3 - Quelques déterminants explicites

> Calculer les déterminants suivants en utilisant des opérations sur les lignes et les colonnes.

### Question 1

> $D_1 = \dt{2 & 1 \\ -3 & 3}$

$= 2\cdot3 + 3 \cdot 1$
$= 9$

**Variante**
$D_1 = \dt{2 & 1 \\ -3 & 3}$
- Par linéarité à la 2ème ligne:
$= 3\dt{2 & 1 \\ -1 & 1}$
- $L_1 \leftarrow L_1 - L_2$
$= 3\dt{3 & 0 \\ -1 & 1}$

> [!check]
> **Remarque** - On aurait pu faire la même chose avec les colonnes.

$D_1 = 3\dt{2 & 1 \\ -1 & 1}$
- $C_1 \leftarrow C_1 +C_2$
$\phantom{D_1} = 3\dt{3 & 1 \\ 0 & 1}$
$\phantom{D_1} = 9$
### Question 2

> $D_2 = \dt{2 & 0 & 2 \\ 3 & 2 & 2 \\ 0 & 1 & 1}$

**Règle de Sarrus**

$D_2 = \ub{\dt{2 & 0 & 2 \\ 3 & 2 & 2 \\ 0 & 1 & 1}}{\mb{2 & 0 & 2 \\ 3 & 2 & 2}}$ 

$= 2 \cdot 2 \cdot 1 + 3 \cdot 1 \cdot 2 + \cancel{0 \cdot 2 \cdot 0} - 2 \cdot 2 \cdot 0 - 2 \cdot 1 \cdot 2 - \cancel{1 \cdot 0 \cdot 3}$
$= 4 + 6 -4$
$= 6$

**Méthode ligne / colonne**
$\piv{L_2 \leftarrow L_2 - 2L_3} \dt{2 & 0 & 2 \\ 3 & 0 & 0 \\ 0 & 1 & 1}$

$\piv{L_1 \leftarrow L_1 - 2L_3} \dt{2 & -2 & 0 \\ 3 & 0 & 0 \\ 0 & 1 & 1}$

$\piv{L_1 \leftrightarrow L_2}-\dt{3 & 0 & 0 \\ 2 & -2 & 0 \\ 0 & 1 & 1}$
$= -3 \times(-2)\times 1$
$=6$


### 3$\text{ème}$ Méthode - Cofacteur / Mineur

$D_2 = \dt{2^+ & 0^- & 2^+ \\ 3^- & 2^+ & 2^- \\ 0^+ & 1^- & 1^+}$

On développe par rapport à la première ligne,

$D_2 = \cancel{2\dt{2 & 2 \\ 1 & 1 }} - 0 \times \cancel{\dt{3 & 1 \\ 0 & 1  }} + 2 \times \ub{\dt{3 & 2 \\ 0 & 1}}6$
$= 6$
### Question 3

> $D_3 = \dt{2 & 0 & 1 & 0 \\ 2 & 0 & 1 & 5 \\ -2 & 2 & 4 & 8 \\ 2 & 0 & -2 & 3}$ 

On développe par rapport à $C_2$ et on obtient:
- $D_3 = -2 \times \dt{2 & 1 & 0 \\ 2 & 1 & 5 \\ 2 & -2 & 3} \piv{L_3 \leftarrow L_3 - L_1 \\ L_2 \leftarrow L_2 - L_1} -2\dt{2 & 1 & 0 \\ 0 & 0 & 5 \\ 0 & -3 & 3} = -2 \times 2 \dt{0 & 5 \\ -3 & 3}$
- $= -2 \times 2 \times 15 = -60$


### Question 4

> $D_4 = \dt{1 & 2 & 1 & 3 \\ 4 & 0 & 3 & 1 \\ 1 & 6 & -1& -1 \\ 1 & -2 & 3 & 0}$

$D_4 \piv{L_3 \leftarrow L_2 - 4L_1 \\ L_3 \leftarrow L_3 - L_1 \\ L_4 \leftarrow L_4 - L_1} \dt{1 & 2 & 1 & 3 \\ 0 & -8 & -1 & -11 \\ 0 & 4 & -2 & -4 \\ 0 & -4 & 2 & -3}$

On développe par rapport à $C_1$
- $\Rightarrow D_4 = \dt{-8 & -1 & -11 \\ 4 &-2 & -4 \\ -4 & 2 & -3}$
- $\piv{L_1 \leftarrow L_1 + 2L_2 \\ L_3 \leftarrow L_3 + L2} \dt{0 & -5 & -19 \\ \boxed{4} & -2 & -4 \\ 0 & 0 & -7}$
On développe par rapport à $C_1$
- $= -4\dt{-5 & -19 \\ 0 & -7}$
- $= -4 \cdot 35 = 140$
## Exercice 4

> Soit $a,b,c$ trois réels. Montrer que:

### Question 1

> $\dt{1 & 1 & 1 \\ a+b & c+a & b+c \\ ab & ca & bc} = (c-b)(c-a)(b-a)$

$\piv{C_2 \leftarrow C_2-C_1 \\ C_3 \leftarrow C_3 - C_1} \dt{1 & 0 & 0 \\ a+b & c-b & c-a \\ ab & a(c-b) & b(c-a)}$
$\piv{}(c-b)(c-a)\dt{1 & 0 & 0 \\ a+b & 1 & 1 \\ ab & a & b}$
$= (c-b)(c-a)(b-a)$
### Question 2

> $\dt{a-b-c & 2a & 2a \\ 2b & b-c-a & 2b \\ 2c & 2c & c-a-b} = (a+b+c)^3$


- $L_1 \leftarrow L_1 + L_2 + L_3$

$D_2 = \dt{a+b+c & a+b+c & a+b+c \\ 2b & b-c-a & 2b \\ 2c & 2c & c-a-b}$

$D_2 = (a+b+c)\dt{1 & 1 & 1 \\ 2b & b-c-a & 2b \\ 2c & 2c & c-a-b}$

- $\piv{C_2 \leftarrow C_2 - C_1 \\ C_3 \leftarrow C_3 - C_1} (a+b+c)\dt{1 & 0 & 0 \\ 2b & -(a+b+c) & 0 \\ 2c & 0 & -(a+b+c)}$
- $= (a+b+c)^3\dt{1 & 0 & 0 \\ 2b & -1 & 0 \\ 2c & 0 & -1}$
- $= (a+b+c)^3$

> [!check]
> **Rappel** - si la matrice est triangulaire son $\det$ est le produit des éléments de la diagonale.


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

## Question 1

> Calculer le déterminant suivant: $\dt{1 & \sin^2(x) & \cos^2(x) \\ 1 & \sin^2y & \cos^2y \\ 1 & \sin^2(z) & \cos^2(z)} = D_1$

$\det(D_1) = 0$ car $C_1 = C_2 + C_3$. (combinaison linéaire)

> [!tips]
> **cf.** [Ch1 - Déterminant](/maths/algebre%20II/Ch1%20-%20Déterminant) **IV.1**

## Question 2

# II - Des déterminants de taille quelconque

## Exercice 6

> Soit $n ≥ 1$. Calculer le déterminant
> $\Delta_n = \dt{1 & n & \cdots & \cdots & n \\ n & 2 & \ddots & & \vdots \\ \vdots & \ddots & \ddots & \ddots & \vdots \\ \vdots & & \ddots & \ddots & n \\ n & \cdots & \cdots & n & n}$

Pour $n=2,$
- $\Delta_2 = \dt{1 & 2 \\ 2 & 2} = -2$
- $\Delta_3 = \dt{1 & 3 & 3 \\ 3 & 2 & 3 \\ 3 & 3 & 3} \piv{L_1 \leftarrow L_1 - L_3 \\ L_2 \leftarrow L_2 - L_3} \dt{-2 & 0 & 0 \\ 0 & -1 & 0 \\ 3 & 3 & 3} = 6$  (triangulaire)

On procède de même pour $\Delta_n$
- On retranche la dernière ligne $L_n$ à toutes les autres,
- $\forall i \in \{i, ..., n-1\}, L_i \leftarrow L_i - L_n$

On a alors $\Delta_n = \dt{1-n & & & \Huge{0} \\ & 2-n & \\\Huge{0} & & \ddots \\ n & \cdots & n & n}$   
- On obtient de nouveau une matrice triangulaire,
	- et donc, $\Delta_n$ est le produit des coefficients sur la diagonale,
	- $\Delta_n = (1-n)(2-n)...(-2)(-1)(n) = -n!$
	- $\phantom{\Delta_n} = (-(n-1))(-(n-2))...(-2)(-1)n$
	- $\phantom{\Delta_n} = (-1)^{n-1}n!$
## Exercice 7

> **Faire compliqué pour faire simple**
> Soit $n ≥ 1$.
> Soit $a,b$ deux réels distincts, et soit $\lambda_1...\lambda_2$ $n$ nombres réels. 
> On cherche à calculer
> $D_n = \dt{\lambda_1 & a & \cdots & a \\ b & \lambda_2 & \ddots & \vdots \\ \vdots & \ddots & \ddots & a \\ b & \cdots & b & \lambda_n}$
> 1\) On considère pour tout $x \in \R$:
> - $P(x) = \dt{\lambda_1+x & a+x & \cdots & a+x \\ b+x & \lambda_2+x & \ddots & \vdots \\ \vdots & \ddots & \ddots & a+x \\ b+x & \cdots & b+x & \lambda_n + x}$
> - Montrer que $P$ est un polynôme de degré inférieur ou égal à $1$.
> 2\) Évaluer $P(-a)$ et $P(-b)$ et en déduire $D_n$

### Question 1

> Montrer que $P$ est un polynôme de degré inférieur ou égal à $1$.

Pour $x \in \R$, on pose:
- $P(x) = \dt{\lambda_1 + x & a+x & \cdots & a+x \\ b+x & \lambda_2 + x & \ddots & \vdots \\ \vdots & \vdots & \ddots & \vdots \\ \vdots & \vdots &  \ddots & a+x \\ b+x & b+x & b+x & \lambda_n +x}$  

On pose $C_1 = \m{\lambda_1 \\ b \\ \vdots \\ b}, C_2 = \m{a \\ \lambda_2 \\ b \\ \vdots \\ b}, C_3 = \m{a \\ a \\ \lambda_3 \\ b \\ \vdots \\ b} \cdots C_{n-1} = \m{a \\ \vdots \\ a \\ \lambda_{n-1} \\ b}$ et $C_n = \m{a \\ \vdots \\ a \\ \lambda_n}$
et $K = \m{1 \\ 1 \\ \vdots \\ 1}$

$P(x) = \det(c_1 + xK, c_2 + xK, ..., c_n + xK)$
- membres de la 1ère colonne à toutes les autres.
$\phantom{P(x)} = \det(c_1 + xK, \ub{c_2 - c_1}{c_2'}, ..., \ub{c_n - c_1}{c_n'})$
$\phantom{P(x)} = \det(c_1 + xK, c_2', ..., c_n')$ 
- Par linéarité par rapport à la première colonne
$\phantom{P(x)} = \det(c_1, c_2', ..., c_n') + \det(xK, c_2', ..., c_n')$
$\phantom{P(x)} = \ub{\det(c_1, c_2', ..., c_n')}{\beta} + x\ub{k, c_2', ..., c_n'}{\alpha}$ 
$\Rightarrow P(x) = \alpha x + \beta$
C'est bien un polynôme de degré $≤1$ $(=1$ si $\alpha ≠ 0)$

$D_n = P(0) = \beta$
### Question 2

> Évaluer $P(-a)$ et $P(-b)$ et en déduire $D_n$

Pour calculer $\alpha$ et $\beta$, calculons $P(\beta)$ et $P(\alpha)$,
- $P(-a) = \dt{\lambda_1 - a & 0 & \cdots & 0 \\ b-a & \lambda_2 - a & \cdots & \vdots \\ \vdots & \ddots & \ddots & \vdots \\ \vdots & \ddots & \ddots & 0 \\ b-a & \cdots & b-a & \lambda_n - a} = (\lambda_1 - a)(\lambda_2 - a)\times ... \times (\lambda_n - a)$   
De même, $P(-b) = \dt{\lambda_1 - 1 & a-b & \cdots & a-b \\ 0 & \ddots & \ddots &  \vdots \\ \vdots & \ddots & \ddots & a-b \\ 0 & \cdots & 0 & \lambda_n - b} = (\lambda_1 - b)\times(\lambda_2 - b)\times ... \times (\lambda_n - b)$   

On a donc $\cases{P(-a) = -\alpha a + \beta & (1) \\ P(-b) = - \alpha b + \beta & (2)}$

On fait $b \times (1) - a \times (2) \Rightarrow b\beta - a\beta = bP(-a) - a(P(-b))$
- c'est-à-dire,
	- $\beta = \frac{bP(-a) - aP(-b)}{b-a}$
	- $\frac1{b-a}\left(b(\lambda_1 - a)\times ... \times (\lambda_n - a) - a(\lambda_1 - b) \times ... (\lambda_n - b)\right)$

## Exercice 8 — Un déterminant de binomiaux

> Soit $n \in \mathbb{N}^*$. On pose pour tout $p \in \mathbb{N}^*$, $p \le n$,
> 
> $\Delta_{n,p} = \begin{vmatrix} 1 & \binom{n}{1} & \cdots & \binom{n}{p} \\ 1 & \binom{n+1}{1} & \cdots & \binom{n+1}{p} \\ \vdots & \vdots & \ddots & \vdots \\ 1 & \binom{n+p}{1} & \cdots & \binom{n+p}{p} \end{vmatrix}$
> 
> Trouver une relation liant $\Delta_{n,p}$ et $\Delta_{n,p-1}$. En déduire la valeur de $\Delta_{n,p}$.


