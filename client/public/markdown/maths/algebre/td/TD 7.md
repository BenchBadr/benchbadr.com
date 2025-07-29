$\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\N}{\mathbb{N}}\newcommand{\ub}[2]{\underset{#2}{\underbrae{#1}}}$
# Exercice 1
> On considère les matrices
> $A = \m{2 & -1 & 0 \\ -1 & 0 & -1 \\ 3 & 2 & -2},$ $B = \m{1 & 1 & 0 \\ -2 & 2 & -3 \\ 3 & 0 & -2}, C = \m{3 & 1 & -2 \\ 0 & 1 & -1}$ 
> Calculer:
> $AB, BA, A^2, CA, AC^T, C^TC$

> [!tips]
> Toujours ligne / colonne

# Exercice 3
> Dans cet exercice $A,B$ et $C$ désignent des matrices carrées de taille $n$ à coefficients dans $\R$ et $I$ désigne la matrice identité de taille $n$. Les questions sont indépendantes.

## Question 1
> Développer $(A+B)^2$

$(A+B)^2 = (A+B)(A+B)$
$\phantom{(A+B)^2} = A^2+AB+BA+B^2$

## Question 2
> Développer $(2I-A)^2$

$(2I-A)^2 = (2I - A)(2I - A)$
$\phantom{(2I-A)^2} = 4I^2 - 2IA - 2IA + A^2$
$\phantom{(2I-A)^2} = 4I^2 - 4A+A^2$ 
$\phantom{(2I-A)^2} = 4I - 4A+A^2$

## Question 3
> On suppose que $A$ et $B$ commutent. Simplifier $(A+B)(A-B)$

> On suppose que $B$ est inversible. Simplifier $(B^{-1}AB)^3$

> On suppose que $A$ et $B$ sont inversibles. Montrer que la matrice $B^{-1}AB$ est inversible et préciser son inverse.

On suppose $A$ et $B$ inversibles.
On a $(B^{-1}A^{-1}B)(B^{-1}AB) = B^{-1}A^{-1}(BB^{-1})AB = B^{-1}(A^{-1}A)B = B^{-1}B = I_n$
Donc $B^{-1}AB$ est inversible et $(B^{-1}AB) = B^{-1}A^{-1}B$

> Soit $A$ une matrice telle que $A^2+5A - 4I = 0$. Montrer que $A$ est inversible et déterminer son inverse en fonction de $A$.

Soit $A \in \mathscr{M}_n(\R)$ telle que:
- $A^2 + 5A - 4I_n = 0_{\mathscr{M}_n(|R)}$
On a donc $A(A+5I_n) = 4I_n$
- c'est-à-dire, $A[\frac{1}4(A+5I_n)] = I_n$
On en déduit que $A$ est inversible et que $A^{-1} = \frac14\left(A + 5 I_n\right)$

> Soit $A$ une matrice telle que $A^2 = 0$. Montrer que $A$ n'est pas inversible.

> [!tips]
> Par l'absurde

Soit $A \in \mathscr{M}_{n}(\R)$ telle que $A^2 = 0_{\mathscr{M}_n(\R)}$
- Supposons $A$ inversible
	- Alors $A^{-1}A^2 = A^{-1}0_{\mathscr{M}_{n}}(\R)$
		- c'est-à-dire
			- $A = 0_{\mathscr{M}_n}(\R)$
		- $A$ n'est donc pas inversible.

# Exercice 5

> On considère la matrice.
> $A = \m{0 & 0 & 1 \\ 1 & 0 & 3 \\ 0 & 1 & 0}$

## Question 1
> Trouver trois réels $a,b$ et $c$ tels que $A^3+aA^2+bA+cI = 0$

$A^2 = \begin{matrix}& \m{0 & 0 & 1 \\ 1 & 0 & 3 \\ 0 & 1 & 0} \\ \m{0 & 0 & 1 \\ 1 & 0 & 3 \\ 0 & 1 & 0} & \m{0 & 1 & 0 \\ 0 & 3 & 1 \\ 1 & 0 & 3}\end{matrix}$

$A^3 = \begin{matrix}& \m{0 & 0 & 1 \\ 1 & 0 & 3 \\ 0 & 1 & 0} \\ \m{0 & 1 & 0 \\ 0 & 3 & 1 \\ 1 & 0 & 3} & \m{1 & 0 & 3 \\ 3 & 1 & 9 \\ 0 & 3 & 1 }\end{matrix}$

On constate que $A^3 = 3A + I_3$
c'est-à-dire, 
- $A^3 - 3A - I_3 = 0_{\mathscr{M}_3}(\R)$

## Question 2
> En déduire que $A$ est inversible et calculer $A^{-1}$

On a donc $A(A^2 - 3I_3) = I_3$
On en déduit que $A$ est inversible et:
$A^{-1} = A^2 - 3I_3$
$\phantom{A^{-1}} = \m{-3 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0}$

# Exercice 6
> Calculer les inverses des matrices suivantes
> $A = \m{-3 & 2 \\ 2 & -4}$
> $B = \m{-1 & 1 & 0 \\ -3 & -1 & 1 \\ 0 & 1 & 0}$
> $C = \m{1 & -1 & 1 \\ 0 & -1 & 1 \\ -1 & 3 & -1}$


## A, Méthode du Pivot de Gauss
Par la méthode du pivot de Gauss, on obtient successivement
$\newcommand{\sm}[1]{\underset{#1}{\sim}}$
$\m{-3 & 2 & \vdots & 1 & 0 \\ 2 & -4 & \vdots & 0 & 1} \sm{L_1 \leftarrow -\frac13L_1} \m{1 & -\frac23 & \vdots & -\frac13 & 0 \\ 2 & -4 & \vdots & 0 & 1}$
$\sm{L_2 \leftarrow L_2 - 2L_1} \m{1 & -\frac23 & \vdots & -\frac13 & 0 \\ 0 & -\frac83 & \vdots & \frac23 & 1}$

$\sm{L_2 \leftarrow -\frac38 L_2}\m{1 &-\frac23 & \vdots & -\frac13 & 0 \\ 0 & 1 & \vdots & -\frac14 & -\frac38}$

$\sm{L_1 \leftarrow L_1 + \frac23 L_2}\m{1 & 0 & \vdots & -\frac12 & -\frac14 \\ 0 & 1 & \vdots & -\frac14 & -\frac38}$

Donc $A$ est inversible et $A^{-1}= \m{-\frac12 & -\frac14 \\ -\frac14 & -\frac38}$

## B, Méthode du Pivot de Gauss
Par la méthode du pivot de Gauss, on obtient successivement,
$\m{-1 & 1 & 0 & \vdots & 1 & 0 & 0 \\ -3 & -1 & 1 & \vdots & 0 & 1 & 0 \\ 0 & 1 & 0 & \vdots & 0 & 0 & 1}$
$\sm{L_1 \leftarrow -L_1} \m{1 & -1 & 0 & \vdots & -1 & 0 & 0 \\ -3 & -1 & 1 & \vdots & 0 & 1 & 0 \\ 0 7 1 & 0 & \vdots & 0 & 0 & 1}$
$\sm{L_2 \leftarrow L_2 + 3L_1}\m{1 & -1 & 0 & \vdots & -1 & 0 & 0 \\ 0 & -4 & 1  & \vdots & -3 & 1 & 0 \\ 0 & 1 & 0 & \vdots & 0 & 0 & 1}$
$\sm{L_2 \leftarrow -\frac14L_2}\m{1 & -1 & 0 & \vdots & -1 & 0 & 0 \\ 0 & 1 & -\frac14 & \vdots & \frac34 & -\frac34 & 0 \\ 0 & 1 & 0 & \vdots & 0 & 0 & 1}$
$\sm{\begin{matrix}L_1 \leftarrow L_1 + L_2 \\ L_3 \leftarrow L_3 - L_2\end{matrix}}\m{1 & 0 & -\frac14 & \vdots & -\frac14 & -\frac14 & 0 \\ 0 & 1 & -\frac14 & \vdots & \frac34 & -\frac14 & 0 \\ 0 & 0 & \frac14 & \vdots & -\frac34 & \frac14 & 1}$
$\sm{L_3 \leftarrow 4L_3} \m{1 & 0 & -\frac14 & \vdots & -\frac14 & - \frac14 & 0 \\ 0 & 1 & -\frac14 & \vdots & \frac{3}{4} & -\frac14 & 0 \\ 0 & 0 & 1 & \vdots & -3 & 1 & 4}$
$\sm{\begin{matrix}L_1 \leftarrow L_1 + \frac14L_3 \\ L_2 \leftarrow L-2 + \frac14 L_3\end{matrix}}\m{ & \vdots & -1 & 0 & 1 \\ \large{I_3} & \vdots & 0 & 0 & 1 \\ & \vdots & -3 & 1 & 4}$

Donc $B$ est inversible et $B^{-1} = \m{-1 & 0 & 1 \\ 0 & 0 & 1 \\ -3 & 1 & 4}$

## C, Méthode du pivot de Gauss
Par la méthode du Pivot de Gauss on obtient successivement
$\m{1 & -1 & 1 & \vdots & 1 & 0 & 0 \\ 0 & -1 & 1 & \vdots & 0 & 1 & 0 \\ 0 & -1 & 0 & \vdots & 0 & 0 & 1}$
$\sm{L_2 \leftarrow -L_2} \m{1 & -1 & 1 & \vdots & 1 & 0 & 0 \\ 0 & 1 & -1 & \vdots & 0 & -1 & 0 \\ 0 & -1 & 0 & \vdots & 0 & 0 & 1}$

$\sm{\begin{matrix}L_1 \leftarrow L_1 + L_2 \\ L_3 \leftarrow L_3 + L_2\end{matrix}}\m{1 & 0 & 0 & \vdots & 1 & -1 & 0 \\ 0 & 1 & -1 & \vdots & 0 & -1 & 0 \\ 0 & -1 & 1 & \vdots &  0 & -1 & 1}$

$\sm{L_3 \leftarrow -L_3} \m{1 & 0 & 0 & \vdots &  1 & -1 & 0\\ 0 & 1 & -1 & \vdots & 0 & -1 & 0 \\ 0 & 0 & 0 & \vdots & 0 & 1 & -1}$

$\sm{L_2 \leftarrow L_2 + L_3}\m{  & \vdots & 1 & -1 & 0\\ \large{I_3} & \vdots & 0 & 0 & -1\\ & \vdots & 0 & 1 & -1 }$

Donc $C$ est inversible et $C = \m{1 & -1 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & -1}$

# Exercice 2

> On considère les matrices
> $A = \m{1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1}$
> $B = \m{0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1}$
> Déterminer $A^n$ et $B^n$ pour tout $n \in \N^*$

# Pour $A$

$A = \m{1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1}$
$A^2 = \m{3 & 3 & 3 \\ 3 & 3 & 3 \\ 3 & 3 & 3} = 3A$

$A^3 = A^2 A = 3A \times A = 3A^2 = 9A$

Une récurrente évidente donne, pour tout $n \in \N^*$ $A^n = 3^{n-1}A$

## Pour B

$B = \m{0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1}$

**Calculons $B^2$**

$B^2 = \begin{matrix}& \m{0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 &1} \\ \m{0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1} & \m{-1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1}\end{matrix}$

**Calculons $B^3$**

$B^3 = \m{0 & 1 & 0 \\ -1 & 0 & 0 \\ 0 & 0 & 1}$

**Calculons $B^4$**
$B^4 = \m{1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1} = I_3$

Selon une récurrence simple, $B^n = \cases{I_4 \text{ si }n\equiv 0 [4]\\ B \text{ si }n\equiv 1[4]\\ B^2 \text{ si }n\equiv 2[4]\\ B^3\text{ si }n \equiv 3[4]}$
# Exercice 7

> On considère les matrices:
> $A = \m{3 & 2 & 2 \\ 3 & 5 & 3 \\ -7 & -8 & -6}$
> et $P = \m{0 & -1 & 1 \\ 1 & -1 & 0 \\ -1 & 3 & -1}$
> 1. Calculer $P^{-1}$
> 2. Calculer $P^{-1}AP$
> 3. En déduire pour tout $n\in \N, A^n$

> Calculer $P^{-1}$

Par la méthode du pivot de Gauss, on obtient successivement:
$\newcommand{\sym}[1]{\underset{\begin{matrix}#1\end{matrix}}{\sim}}$
$\m{0 & -1 & 1 & \vdots & 1 & 0 & 0 \\ 1 & -1 & 0 & \vdots & 0 & 1 & 0 \\ -1 & 3 & -1 & \vdots & 0 & 0 & 1} \sym{L_1 \leftarrow L_1 + L_2 \\ L_3 \leftarrow L_3 - 2L_2}\m{1 & -1 & 0 & \vdots & 0 & 1 & 0 \\ 0 & -1 & 1 & \vdots & 1 & 0 & 0 \\ -1 & 3 & -1 & \vdots & 0 & 0 & 1}$   
$\sym{L_3 \leftarrow L_3 + L_1}\m{1 & -1 & 0 & \vdots & 0 & 1 & 0 \\ 0 & -1 & 1 & \vdots & 1 & 0 & 0 \\ 0 & 2 & -1 & \vdots & 0 & 1 & 1}$
$\sym{L_2 \leftarrow -L_2}\m{1 & -1 & 0 & \vdots & 0 & 1 & 0 \\ 0 & 1 & -1 & \vdots & -1 & 0 & 0 \\ 0 & 2 & -1 & \vdots & 0 & 1 & 1}$
$\sym{L_1 \leftarrow L_1 + L_2 \\ L_3 \leftarrow L_3 - 2L_2}\m{1 & 0 & -1 & \vdots & -1 & 1 & 0 \\ 0 & 1 & -1 & \vdots & -1 & 0 & 0 \\ 0 & 0 & 1 & \vdots & 2 & 1 & 1}$ 
$\sym{L_1 \leftarrow L_1 + L_3 \\ L_2 \leftarrow L_2 + L_3} \m{1 & 0 & 0 & \vdots & 1 & 2 & 1 \\ 0 & 1 & 0 & \vdots & 1 & 1 & 1 \\ 0 & 0 & 1 & \vdots 2 & 1 & 1}$
Donc $P^{-1} = \m{1 & 2 & 1 \\ 1 & 1 & 1 \\ 2 & 1 & 1}$

> Calculer $P^{-1}AP$

$P^{-1}AP = \m{1 & 2 & 1 \\ 1 & 1 & 1 \\ 2 & 1 & 1}\m{3 & 2 & 2 \\ 3 & 5 & 3 \\ 7 & -8 & -6} \m{0 & -1 & 1 \\ 1 & -1 & 0 \\ -1 & 3 & -1}$
$\phantom{P^{-1}AP} = \m{2 & 4 & 2 \\ -1 & -1 & -1 \\ 2 & 1 & 1}$
$\phantom{P^{-1}AP} = \m{2 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1}$

> En déduire pour tou $n \in \N, A^n$

Puisque $P^{-1}AP = D$
- alors;
	- $P(P^{-1}AP)P^{-1} = PDP^{-1}$
	- c'est-à-dire: $A = PDP^{-1}$
- on a donc pour tout $n \in \N, A^n = (PDP^{-1})$

## Récurrence
Soit $A \in \mathscr{M}_{m}(\R)$ et $P \in \mathscr{M}_m(\R)$ inversible.
Montrons par récurrence que $(P\cdot AP^{-1})^n = PA^nP^{-1}$
### Initialisation
D'une part, 
-  $(PAP^{-1})^0 = I_m$
D'autre part,
- $PA^0P^{-1} = PI_mP^{-1}=PP^{-1} = I_m$
## Hérédité
On suppose que $(PAP^{-1})^n = PA^nP^{-1}$
Alors:
$(PAP^{-1}) = (PAP^{-1})^n(PAP^{-1})$
$\phantom{(PAP^{-1})} = (PA^nP^{-1})(PAP^{-1})$
$\phantom{(PAP^{-1})} = PA^n\ub{P^{-1}P}{I_m}AP$
$\phantom{(PAP^{-1})} = PA^{n+1}P^{-1}$
## Conclusion
On a donc ici, pour tout $n \in \N$:
- $A^n = (PDP^{-1})^n = PD^nP^-1$

---
Soit $D \in \mathscr{M}_{m}(\R)$ diagonale, disons $\m{\lambda_1 & \cdots & 0 & \cdots & 0 \\ 0 & \ddots \\ \vdots \\ 0 & \cdots & 0 & \cdots & \lambda_m}$
## Initialisation
D'une part, 
- $D^0 = I_n$
D'autre part,
- $\m{\lambda_1 & \cdots & 0 & \cdots & 0 \\ \vdots \\ 0 & \ddots \\ \vdots \\ 0 & \cdots & 0 & \cdots & \lambda_m} = \m{1 & \cdots & 0 & \cdots & 0 \\ \vdots \\ 0 \\ \vdots \\ 0 & \cdots & 0 & \cdots & 1} = I_m$

## Hérédité
Soit $n \in \N$. Supposons que $D^n = \m{\lambda_1^n & \cdots & 0 & \cdots & 0 \\ \vdots \\ 0 \\ \vdots \\ 0 & \cdots & 0 & \cdots & \lambda_m}$
Alors $D^{n+1} = D^nD$
- Par hypothèse de récurrence
- $= \m{\lambda_1^n & \cdots & 0 & \cdots & 0 \\ \vdots \\ 0 \\ \vdots \\ 0 & \cdots & 0 & \cdots & \lambda_m}\m{\lambda_1 & \cdots & 0 & \cdots & 0 \\ \vdots \\ 0 \\ \vdots \\ 0 & \cdots & 0 & \cdots & \lambda_m}$
- $= \m{\lambda_1^{n+1} & \cdots & 0 & \cdots & 0 \\ \vdots \\ 0 \\ \vdots \\ 0 & \cdots & 0 & \cdots & \lambda_m}$
On a donc ici pour tout $n \in \N$
- $A^n = PD^nP^{-1}$
- $= P\m{2^n & 0 & 0 \\ 0 & (-1)^n & 0 \\ 0 & 0 & 1}P^{-1}$
- $= \m{0  -1 & 1 \\ 1 & -1 & 0 \\ -1 & 3 & -1}\m{2^n & 0 & 0 \\ 1 & 1 & 1 \\ 2 & 1 & 1}$
- $= \m{0 & (-1)^n & 1 \\ 2^n & (-1)^{n+1} & 0 \\ -2^n & 3 \cdot (-1)^{n} & -1}\m{1 & 2 & 1 \\ 1 & 1 & 1 \\ 2 & 1 & 1}$   
- $= \m{2+(-1)^{n+1} & 1+(-1)^{n+1} & 1+(-1)^{n+1} \\ 2^n+(-1)^{n+1} & 2^{n+1}+(-1)^{n+1} & 2^n + (-1)^{n+1} \\ -2^n + 3(-1)^n - 2 & -2^{n+1 + 3(-1)^n -1} & -2^n + 3 (-1)^n - 1}$  


# Exercice 4

> Soit $a,b \in \R$. On considère les matrices
> $M = \m{a+b & b & b \\ b & a+b & b \\ b & b 7 a+b}$
> $J = \m{1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1}$

Soit $a,b$ 2 réels et:
$M = \m{a+b & b & b \\ b & a+b & b \\ b & b & a+b}$ 
$J = \m{1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1}$

> Exprimer $J^2$ en fonction de $J$

Calculons:
- $J^2 = \m{3 & 3 & 3 \\ 3 & 3 & 3 \\ 3 & 3 & 3} = 3J$
> Exprimer $M$ en fnction de $J$ et de la matrice identité $I$. En déduire une expression de $M^2$ en fonction. 

$M = \m{a & 0 & 0 \\ 0 & a & 0 \\ 0 & 0 & a} + \m{b & b & b \\ b & b & b \\ b & b & b} = aI_3 + bJ$

Remarquons que $aI_3$ et $bJ$ commutent.
En effet, $(aI_3)(bJ) = abI_3J= abJ = abJI_3 = (bJ)(aI_3)$
Donc par identité remarquable licite, on a:
- $M^2 = (aI_3)^2+2(aI_3)(bJ)+(bJ)^2$
- $= a^2I_3^2 + 2abJ + b^2J^2$
- $= a^2I_3+2abJ+3bJ$
- $= a^2I_3+(2a+3b)bJ$
Or, $bJ = M - aI_3$, d'où:
- $M^2 = a^2I_3 + (2a+3b)(M-aI_3)$
- $= -a(a+3b)I_3+(2a+3b)M$
D'après $\fbox2$ on peut écrire $M[M-(2a+3b)I_3] = -a(a+3b)I_3$
- Si $a ≠ 0$ et $a+3b ≠ 0$ alors on peut écrire:
	- $M \left[\frac1{a(a+3b)}\left((2a+3b)I_3 - M\right)\right] = I_3$ 
	- Donc on déduit que $M$ est inversible et que $M^{-1} = \frac1{a(a+3b)}\left((2a+3b)I_3 - M\right)$
- Si $a=0$
	- Alors $M = bJ$
	- Si $b ≠ 0$
		- alors $\rg(n) = 1$
	- et $M$ est non inversible.
- Si $a=3b$
	- s'écrit
	- $M[M+3bI_3] = 0_{\mathscr{M}_3(\R)}$
	- Si $M$ est inversible, alors $M+3bI-3 = 0_{\mathscr{M}_3(\R)}$
	- c'est-à-dire $M = -3bI_3$ (impossible sauf si $b= 0$ mais dans ce as $M=0_{\mathscr{M}_3}$ et $M$ est non-inversible) 
- $M$ n'est pas inversible.





