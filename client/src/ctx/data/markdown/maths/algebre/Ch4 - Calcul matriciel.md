lang:fr
desc:Introduction au calcul matriciel incluant des terminologies et définitions fondamentales sur les matrices.
date:25/03/2025

===

*Liens utiles*
- https://matrixmuliplication.xyz

$\newcommand{\K}{\mathbb{K}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}$
---
$\newcommand{\pmatrix}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\C}{\mathbb{C}}$
# I - Définitions et premières opérations

## Définition
Matrice a coefficients dans $\K$ à $n$-lignes et $p$ colonnes est un tableau d'éléments de $\K$ à $n$-lignes et $p$-colonnes.
## Exemple

Voici un exemple de matrices à coefficients dans $\R$ à $3$ lignes et $4$ colonnes.
$$
\pmatrix{2 & -1 & 3 & -1 \\ -1 & 2 & -1 & 1 \\ 4 & 0 & 1 & 2}
$$
Voici un exemple de matrices à $2$ lignes et $2$ colonnes, à coefficients dans $\C$. 
$$
\pmatrix{1-i & 2i \\ -1 & 1+i}
$$

## Notations et terminologies

#### Notations

une matrice à $n$ lignes et $p$ colonnes est une matrice dite de taille $n\times p$
- souvent, une matrice est désignée par une lettre capitale. $(A,B,C, M...)$
- Au lieu de $\mathscr{M}_{n,n}(\K)$, on écrit simplement $\mathscr{M}_{n}(\K)$
- Pour une matrice $A$, le coefficient situé sur la ligne $i$ et la colonne $j$ est noté $a_{i,j}$ (on note $a_{ij}$ sans virgule s'il n'y a pas d'ambiguïté)
- Ainsi, on peut écrire $A$ de la façon suivante:
$$
A = \pmatrix{a_{11} & ... & a_{1p} \\ . & & . \\ . & & . \\ . & & . \\ a_{n1} & ... & a_{np}}
$$

#### Terminologie 

- Les éléments dans une matrice sont des coefficients
- Les matrices à coefficients dans $\R =$ matrices réelles
- matrices à coefficients dans $\C =$  matrices complexes
-  L'ensemble des matrices de taille $n \times p$ à coefficients dans $\K$ est noté $\mathscr{M}_{n,p}(\K)$
- Si $n = p,$ on parle de matrices **carrées**
- Si $n=1$, on parle de matrice ligne (ou vecteur ligne)

## Définition - Somme

Soit $A$ et $B$ deux matrices de taille $n \times p$. 
La somme de $A$ et $B$, notée $A+B$, est la matrice de taille $n \times p$ dont les coefficients $(c_{ij})$ sont donnés par:
- $c_{ij} = a_{ij}+b_{ij}$

### Exemple
$\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}$
$A = \m{1 & -2 & 0 \\ -1 & 3 & 2}$ $B = \m{2 & 1 & 5 \\ 3 & 1 & 1}$
Alors, $A+B = \m{3 & -1 & 5 \\ 2 & 4 & 3}$

## Définition - Produit

Soit $A$ une matrice de taille $n \times p$. Soit $\lambda \in \K$.
Le produit de la matrice $A$ par le scalaire $\lambda,$ noté $\lambda A$ est la matrice de taille $n \times p$ dont les coefficients $(c_{ij})$ sont donnés par:
- $c_{ij} = \lambda a_{ij}$

### Exemple

$A = \m{1 & -2 & 0 \\ -1 & 3 & 2}$
Alors $2A = \m{2 & -4 & 0 \\ -2 & 6 & 4}$
- $\cancel{A \times 2}$ 
- Le scalaire doit toujours être devant comme suit:
	- $2A$

## Définition

On appelle matrice nulle de taille $n \times p$ la matrice de taille $n \times p$ dont tous les coefficients sont nuls.
### Exemple
La matrice nulle de taille $2 \times 2$ est:
$$
\m{0 & 0 \\ 0 & 0}
$$

## Proposition - Propriétés de calcul

Soit $A,B,C$ des matrices de taille $n\times p$.
	Soit $\lambda, \mu \in \K$
Alors:
- $A+B = B+A$ (commutatif)
- $(A+B)+C=A+(B+C)$ (associatif)
- $A+0 = 0+A$ (où $0$ désigne)
- $(\lambda+\mu)A = \lambda A + \mu A$
- $\lambda(A+B) = \lambda A + \lambda B$

## Proposition - Espace Vectoriel

L'ensemble des matrices $\mathscr{M}_{n,p}(\K)$, muni de l'addition et de la multiplication par un scalaire définies plus haut, est un $\K$-espace vectoriel. 


# II - Produit de matrices

## Exemple

$A = \m{2 & 1 & 0 \\ -1 & 1 & 3}$ $B = \m{1 & 0 \\ 2 & 1 \\ -1 & 2}$

**Déterminer AB**:

$\matrix{& \m{1 & 0 \\ 2 & 1 \\ -1 & 2} \\ \m{2 & 1 & 0 \\ -1 & 1 & 3} & \color{green}\tiny{\m{1 \cdot 2 + 2 \cdot 1 + -1 \cdot 0 & 0 \cdot 2 + 1 \cdot 1 + 0 \cdot 2 \\ -1 \cdot 1 + 1 \cdot 2 + 3 \cdot -1 & 0 \cdot -1 + 1 \cdot 1 + 3 \cdot 2}}} = \m{4 & 1 \\-2 & 7}$

## Définition
Soit $A$ une matrice de taille $n \times p$ et $B$ une matrice de taille $p \times q$. 
Le produit de $A$ et $B$, noté $A \times B$ ou $AB$, est la matrice de taille $n\times q$ dont les coefficients $(c_{ij})$ sont donnés par:
$$
c_{ij} = \sum{k=1}p a_{ik}b_{kj}
$$

Calculer $AB$
$\begin{matrix}& \m{1 & -1 \\ 2 & 1} \\ \m{2 & 1 \\ 0 & -1 \\ 3 & 2} & \color{green}\m{4 & -1 \\ -2 & -1 \\ 7 & -1}\end{matrix}$

### Remarque 
Le produit de matrices n'est pas commutatif. En général, même quand $AB$ et $BA$ sont définis simultanément. 
- $AB ≠BA$
$(A+B)^2 ≠ A^2 + 2AB + B^2$
$(A+B)(A+B) = A\times A + A \times B + B \times A + B \times B$
$\phantom{(A+B)(A+B)} = A^2 + AB + BA + B^2$
L'identité remarquable n'est plus vraie.

## Proposition
Soit $A, B, C$ des matrices de tailles « compatibles ».
- $A(BC) = (AB)C$ (associativité du produit de matrices)
- $A(B+C) = AB + AC$ et $(B+C)A = BA + CA$ (distributivité à gauche et à droite)
- $A \times 0 = 0$ et $0 \times A \times A = 0$ (où $0$ désigne la matrice nulle)

### Remarque
- $AB = 0$ n'implique pas $A = 0$ ou $B = 0$

#### Exemple

$A = \m{0 & -1 \\ 0 & 5}$ et $B = \m{2 & -3 \\ 0 & 0}$
$AB = \m{0 & 0 \\ 0 & 0}$
$AB = AC$ n'implique pas $B =C$

## Définition
Dans une matrice carrée, on appelle coefficients diagonaux les coefficients $(a_{ii})$
$\newcommand{\r}[1]{\color{red}#1\color{g}}$
$A = \m{\r{x} & x & x & x \\ x & \r{x} & x & x\\ x & x &\r{x}&x \\ x & x & x & \r{x}}$

- Ue matrice diagonale est une matrice carrée dont tous les coefficients non diagonaux sont nuls.
- La matrice identité de taille $m \times n$, notée $I_n$ ou simplement $I$ est la matrice diagonale tous les coefficients diagonaux valent $1$.

### Exemples

| Matrice diagonale                                                                      | Matrice identité                                                           |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| $\mathscr{D}_1 = \m{2 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 3}$ | $I = \m{1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1}$ |

### Notation courante

Pour simplifier la notation, on peut noter de « gros 0 » et `\vdots` pour la matrice identité.

$\mathscr{D} = \m{2 & & &\Huge0\\ & 1 \\ & & 0 \\\Huge0 & & & 3}$

$I = \m{1 &  &\Huge0\\ & \ddots \\\Huge0 &  & 1}$

## Proposition
Soit $A$ une matrice de taille $n \times p$ alors:
- $I_n \times A = A$
- et, $A \times I_p = A$
En pratique, si $n=p$
- $I_n \times A = A \times I_n = A$

## Proposition
Soit $\mathscr{D}_1$ et $\mathscr{D}_2$ deux matrices diagonales de taille $n\times n$. 
- $\mathscr{D_1} = \m{a_1 & &\Huge0 \\ & \ddots \\ \huge0 & & a_n}$
- $\mathscr{D_2} = \m{b_1 & &\Huge0 \\ & \ddots \\ \huge0 & & b_n}$
Alors $\mathscr{D}_1\mathscr{D}_2=\m{a_1b_1 & &\Huge0 \\ & \ddots \\ \huge0 & & a_nb_n} = \mathscr{D}_2\mathscr{D}_1$

## Définition
Soit $A$ une matrice carrée.
On appelle puissance $k$-ième de $A,$ notée $A^k$, la matrice définie par:
- $A^k = \ub{A \times ... \times A}{k \text{ fois}}$

### Remarque
La formule du binôme de Newton n'est pas vraie en général. Sauf si $A$ et $B$ commutent. 
- $(A+B)^k= \sum{i}{k}\ncr{k}{i}A^{k-i}B^i$

# III - Inverse d'une matrice

## Définition - Inverse
**Note** : La notion d'inverse n'existe que pour les matrices carrées
Soit $A$ une matrice carrée. On dit que $A$ est inversible s'il existe une matrice $B$ telle que :
- $AB = I = BA$
cette matrice $B$ est alors unique. Elle est appelée matrice inverse de $A$ et est noté $A^{-1}$. 

### Remarque
L'unicité est une conséquence de l'associativité.
On verra plus tard qu'il suffit de vérifier $AB=I$ ou $BA=I$

## Proposition - Inverse de l'inverse
Soit $A$ une matrice carrée inversible alors 
- $A = (A^{-1})^{-1}$
Soit $A$ et $B$ deux matrices carrées inversibles.
- Alors $(AB)^{-1}=B^{-1}A^{-1}$

### Preuve
- $A^{-1} \times A = I$ donc $(A^{-1})^{-1 = A}$
- $ABB^{-1}A^{-1} = AIA^{-1} = AA^{-1} = I$
- donc $(AB)^{-1} = B^{-1}A^{-1}$
$\square$
## Proposition
Soit $A$ et $B$ deux matrices carrées de taille $n$. 
- Soit $c$ une matrice carrée inversible de taille $n$. 
	- Si $CA = CB$ alors $A = B$.

### Preuve
On multiplie par $C^{-1}$ (à gauche) de chaque côté de l'égalité.
D'où: $C^{-1}CA = C^{-1}CB$
D;où: $I1 = IB$
D'où $A=B$

## Calcul pratique de l'inverse d'une matrice

### Exemple

$A = \m{1 & 2 \\ 1 & 1}$

> A est-elle inversible ? Que vaut $A^{-1}$

On pose $U = \m{u \\ v}$ et $X = \m{x \\ y}$
On écrit l'équation:
$AU = X \iff \m{1 & 2 \\ 1 & 1}\m{u \\ v} = \m{x \\ y}$
$\phantom{AU = X} \iff \m{u + 2v \\ u + v} = \m{x \\ y}$
$\phantom{AU = X} \iff \cases{u+2v = x \\ u+v = y}$
$\phantom{AU = X} \iff \cases{v = x-y \\ u = 2y-x}$
$\phantom{AU = X} \iff \m{u \\v} = \ub{\m{-1 & 2 \\ 1 & -1}}{A^{-1}}\m{x \\ y}$
### Exemple 2

$A\m{x \\ y} = \m{u \\ v}$

$\iff \m{2x \\ 2x+y} = \m{u\\ v}$
$\iff \cases{2x &= y \\ 2x+y &= v}$
$\iff \cases{x = \frac{u}2 \\ y = v- u}$
$\iff \m{x \\ y} = \ub{\m{\frac12 & 0 \\ -1 & 1}}{A^{-1}}\m{u \\ v}$

$A\m{1 & 0 &  0\\ 0 & 1 & 1 \\ 1 & 0 & 1} = \m{u \\ v \\ w}$
$\iff \cases{x &= u \\ y+z &= v \\ x + z &= w}$
$\iff \cases{x = u \\ y+z = v \\ z = w-u}$
$\iff \cases{x = u \\ y = v-w+u \\ z = w-u}$
$\iff \m{x \\ y \\ z} = \ub{\m{1 & 0 & 0 \\ 1 & 1 & -1 \\ -1 & 0 & 1}}{A^{-1}}\m{u \\ v \\ w}$
## Proposition
Une matrice $A$ est inversible **ssi** le système $A\m{a_1 \\ \vdots \\ a_n} = \m{y_1 \\ \vdots \\ y_n}$possède une unique solution pour tout second membre $\m{y_1 \\ \vdots \\ y_n}$
De plus, $\m{x_1 \\ \vdots \\ x_n} = A^{-1}\m{y_1 \\ \vdots \\ y_n}$
C'est une proposition qui justifie la méthode précédente.
On résout le système « générique » 
- Si le système possède possède toujours un unique solution, la matrice $A$ est inversible et on identifie $A^{-1}$.
- Si le système ne peut pas être échelonné (forme triangulaire impossible)
	- ... en gros, si on perd des équations en cours de route, il y a une infinité de solutions
- Cela signifie 

# IV - Matrice transposée, symétrique, triangulaires, trace

## Définition - Transposée
Soit $A$ une matrice de taille $n \times p$. La matrice transposée de $A$, notée $A^T$
Est la matrice de taille $p \times n$ dont les coefficients $(\tilde{a}_{ij})$ sont donnés par:
- $\tilde{a}_{ij} = a_{ji}$

### Exemple
$A = \m{1 & 2 & 3 \\ 4 & 5 & 6}$ $A^T = \m{1 & 4 \\  2 & 5 \\ 3 & 6}$
$B = \m{1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9}$ et $B^T = \m{1 & 4 & 7 \\ 2 & 5 & 8 \\ 3 & 6 & 9}$

## Définition - Symétrie
Soit $A$ une matrice carrée de taille $n$. 
On dit que $A$ est symétrique si $A = A^T$

### Exemple
$\newcommand{\g}[1]{\color{green}#1\color{null}}\m{1 & \g{4} & \g{5} \\ \g{4} & 2 & \g{6} \\ \g{5} & \g{6} & 3}$ est symétrique.

### Remarque
Une matrice est symétrique si ses coefficients sont symétriques par rapport à la diagonale. 

## Proposition
Soit $A,B$ des matrices de tailles compatibles. Soit $\alpha$  un scalaire.
- $(A+B)^T = A^T + B^T$
- $(\alpha A)^T = \alpha A^T$
- $(A^T)^T = A$
- $(AB)^T = B^TA^T$
- $(A^T)^{-1} = (A^{-1})^T$
	- (si $A$ est inversible)

## Définition - Matrice triangulaire
Soit $A$ une matrice carrée de taille $n$. 
On dit que $A$ est triangulaire si
- $a_{ij} = 0$ pour $i>j$
On dit que $A$ est triangulaire inférieure si
- $ai_j = 0$ pour $j > i$

## Proposition
Une matrice triangulaire est inversible **ssi** ses coefficients diagonaux sont tous non-nuls.

### Remarque
Une matrice diagonale est triangulaire. Donc elle est inversible **ssi** ses coefficients diagonaux sont tous non-nuls.

### Exemple
La matrice $\m{1 & 0 & 0 & 0 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 3 & 0 \\ 0 & 0 & 0 & 4}$ est inversible et inverse $\m{1 \\ & \frac{1}{2} \\ & & \frac{1}{3} \\ & & & \frac{1}{4}}$

## Définition - Trace
$\newcommand{\tr}{\text{tr}}$ Soit $A$ une matrice carrée de taille $n$. La trace de $A$, notée $\tr(A),$ est le nombre:
- $\tr(A) = a_{11}+...+a_{nn}$

> [!tips]
> C'est la somme des coefficients diagonaux

