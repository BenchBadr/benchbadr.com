$\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\sym}[1]{\underset{\begin{matrix}#1\end{matrix}}{\sim}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\ifff}[1]{\underset{\begin{matrix}#1\end{matrix}}{\iff}}\newcommand{\card}{\text{card}}$
# Exercice 1

> Soit $A$ la matrice carrée suivante:
> $A = \m{1 & -1 & 1 \\ -1 & 1 & 1 \\ 1 & 1 & 1}$
> 1. Déterminer $A^2$ et $A^3,$ puis calculer $A^3-3A^2$
> 2. En déduire que $A$ est inversible et calculer $A^{-1}$
> 3. Retrouver l'inverse de $A$ par la méthode du pivot de Gauss

## Question 1
> Déterminer $A^2$ et $A^3,$ puis calculer $A^3-3A^2$

$A^2 = \m{1 & -1 & 1 \\ -1 & 1 & 1 \\ 1 & 1 & 1}\m{1 & -1 & 1 \\ -1 & 1 & 1 \\ 1 & 1 & 1} = \m{3 & -1 & 1 \\ -1 & 3 & 1 \\ 1 & 1 & 3}$

Puis,

$A^3 = A^2A = \m{3 & -1 & 1 \\ -1 & 3 & 1 \\ 1 & 1 & 3}\m{1 & -1 & 1 \\ -1 & 1 & 1 \\ 1 & 1 & 1} = \m{5 & -3 & 3 \\ -3 & 5 & 3 \\ 3 & 3 & 5}$ 

Donc, 
$A^3 - 3A^2 = \m{5 & -3 & 3 \\ -3 & 5 & 3 \\ 3 & 3 & 5}-3\m{3 & -1 & 1 \\ -1 & 3 & 1 \\ 1 & 1 & 3}$
$\phantom{A^3 - 3A^2 =} = \m{-4 & 0 & 0 \\ 0 & -4 & 0 \\ 0 & 0 & -4}$
$\phantom{A^3 - 3A^2} = -4I_3$

## Question 2
> En déduire que $A$ est inversible et calculer $A^{-1}$

On a donc,
- $A[A^2 - 3] = 4I_3$
- $A[\frac34A-\frac14A^2]=I_3$
Donc, $A$ est inversible et,
- $A^{-1} = \frac34A - \frac14A^2 = \frac14\left[\m{3 & -3 & 3 \\ -3 & 3 & 3 \\ 3 & 3 & 3} - \m{3 & -1 & 1 \\ -1 & 3 & 1 \\ 1 & 1 & 3}\right]$ 
- $= \frac12\m{0 & -1 & 1 \\ -1 & 0 & 1 \\ 1 & 1 & 0}$

## Question 3
> Retrouver l'inverse de $A$ par la méthode du pivot de Gauss

Par la méthode du pivot de Gauss,
$\m{1 & -1 & 1 & \vdots & 1 & 0 & 0 \\ -1 & 1 & 1 & \vdots & 0 & 1 & 0 \\ 1 & 1 & 1 & \vdots & 0 & 0 & 1}$
$\sym{L_2 \leftarrow L_2 + L_1 \\ L_3 \leftarrow L_3 - L_1}\m{1 & -1 & 1 & \vdots & 1 & 0 & 0 \\ 0 & 0 & 2 & \vdots & 1 & 1 & 0 \\ 0 & 2 & 0 & \vdots & -1 & 0 & 1}$
$\sym{L_2 \leftrightarrow L_3}\m{1 & -1 & 1 & \vdots & 1 & 0 & 0 \\ 0 & 1 & 0 & \vdots & -\frac12 & 0 & \frac12 \\ 0 & 0 & 2 & \vdots & 1 & 1 & 0}$
$\sym{L_1 \leftarrow L_1 + L_2}\m{1 & 0 & 1 & \vdots & \frac12 & 0 & \frac12 \\ 0 & 1 & 0 & \vdots & -\frac12 & 0 & -\frac12 \\ 0 & 0 & 2 & \vdots & 1 & 1 & 0}$
$\sym{L_3 \leftarrow \frac12L_3}\m{1 & 0 & 1 & \vdots & \frac12 & 0 & \frac12 \\ 0 & 1 & 0 & \vdots & -\frac12 & 0 & \frac12 \\ 0 & 0 & 1 & \vdots & \frac12 & \frac12 & 0}$


# Exercice 2

> Soit $f:\R_3[X] \to \R^4$  l'application linéaire définie par:
> $f(P) = (P(0), P'(0), P(1), P'(1))$
> 1. Déterminer la matrice de $f$ par rapport à la base canonique de $\R_3[X]$ et la base canonique de $\R^4$
> 2. On pose $P_1 = (2X+1)(X-1)^2, P_2 = X(X-1)^2, P_3 = (3-2X)X^2, P_4 = X^2(X-1)$
> 3. Déterminer la matrice de $f$ par rapport à cette base canonique de $\R^4$.
> 4. Montrer que l'application $f$ est bijective.

## Question 1
> Déterminer la matrice de $f$ par rapport à la base canonique de $\R_3[X]$ et la base canonique de $\R^4$

**Par définition**, la matrice est:
- $f(1) = (1,0,0,0)$
- $f(X) = (0,1,1,1)$
- $f(X^2) = (0,1,1,1)$
- $f(X^3) = (0,0,1,3)$

$\mb{\m{1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3} & \mb{(1, 0,0, 0) \\ (0,1,0,0) \\ (0,0,1,0) \\ (0,0,0,1)} \\ \mb{f(1) & f(X) & f(X^2) & f(X^3)} &}$

## Question 2
> On pose $P_1 = (2X+1)(X-1)^2, P_2 = X(X-1)^2, P_3 = (3-2X)X^2, P_4 = X^2(X-1)$


$aP_1 + bP_2 + cP_3 + dP_4 = 0_{\R_4[X]}$

c'est-à-dire, tels que:
- $a(2X+1)(X-1)^2 + bX(X-1)^2 + c(3-2X)X^2+dX^2(X-1) = 0_{\R_3[X]}$
$(S) : \cases{a = 0 \\ b = 0 \\ -3a  - 2b + 3c  - d = 0 \\ 2a + b - 2c + d = 0}$
$(S) \iff \cases{a = 0 \\ b = 0 \\ 3c - d = 0 \\ -2c + d = 0}$
$\ifff{L_3 + L_4} \cases{a = 0 \\ b = 0 \\ c = 0 \\ d = 0}$

Donc $\{P_1, P_2, P_3, P_4\}$ est libre et c'est une base de $\R_3[X]$ car $\card\{P_1, P_2, P_3, P_4\} = 4 = \dim(\R_3[X])$ 

## Question 3
> Déterminer la matrice de $f$ par rapport à cette base canonique de $\R^4$.

**Par définition,** la matrice recherchée est:
- $f(P_1) = f((2X+1)(X-1)^2) = (1,0,0,0)$
- $f(P_2) = f(X(X-1)^2) = (0,1,0,0)$
- $f(P_3) = f((3-2X)X^2) = (0,0,1,0)$
- $f(P_4) = f((X-1)X^2) = (0,0,0,1)$

$\mb{\m{1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1} & \mb{(1,0,0,0) \\ (0,1,0,0) \\ (0,0,1,0) \\ (0,0,0,1)} \\ \mb{f(P_1) & f(P_2) & f(P_3) & f(P_4)} & }$

## Question 4
>  Montrer que l'application $f$ est bijective.

L'image de la base $\{P_1, P_2, P_3, P_4\}$ par $f$ est la base canonique de $\R_3[X]$. 
Donc $f$ est bijective.

