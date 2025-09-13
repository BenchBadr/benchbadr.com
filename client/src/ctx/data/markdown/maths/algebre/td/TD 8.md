---
lang: fr
date: 29/04/2025
---

$\newcommand{\R}{\mathbb{R}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\Mat}{\text{Mat}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\id}{\text{id}}\newcommand{\card}{\text{card}}\newcommand{\ifff}[1]{\underset{\begin{matrix}#1\end{matrix}}{\iff}}\newcommand{\sym}[1]{\underset{\begin{matrix}#1\end{matrix}}{\sim}}$
# Exercice 1

> Déterminer les matrices des applications linéaires suivantes par rapport aux bases canoniques des espaces vectoriels de départ et d'arrivée
> 1. L'application $f:\R^2 \to \R^3$ définie par $f(x,y) = (x-y, x+y, 3x-y)$ 
> 2. L'application $f:\R^3 \to \R^2$ définie par $f(x,y,z) = (x-2y+z, 2x-y)$
> 3. L'application $f:\R^3 \to \R^3$ définie par $f(x,y,z)=(x+2y+z, -y-z, -x+y+z)$


>  L'application $f:\R^2 \to \R^3$ définie par $f(x,y) = (x-y, x+y, 3x-y)$ 

Soit $f: \begin{matrix}\R^2 \to \R^3 \\ (x,y) \mapsto (x-y, x+y, 3x-y)\end{matrix}$

Alors la matrice de $f$ dans les bases canoniques au départ et à l'arrivée est:
- $\color{orange}f((1,0))=(1,1,3) = 1 \cdot (1,0,0) + 1 \cdot (0,1,0) + 3 \cdot (0,0,1)$    
- $\color{purple}f((0,1)) = (-1,1,-1) = -1 \cdot (1,0,0) + 1 \cdot (0,1,0) + (1) \cdot (0,0,1)$

$\begin{matrix}\m{\color{orange}1 & \color{purple}-1  \\ \color{orange}1 & \color{purple}1 \\ \color{orange}3 & \color{purple}-1} & \begin{matrix}(1,0,0) \\ (0,1,0) \\ (0,0,1)\end{matrix} \\ \tiny\begin{matrix}\uparrow & \uparrow \\ f((1,0)) & f((0,1))\end{matrix}\end{matrix}$ 

> L'application $f:\R^3 \to \R^2$ définie par $f(x,y,z) = (x-2y+z, 2x-y)$


>  L'application $f:\R^3 \to \R^3$ définie par $f(x,y,z)=(x+2y+z, -y-z, -x+y+z)$

$$
\begin{matrix}
\m{1 & 2 & 1 \\ 0 & -1 & -1  \\ -1 & 1 & 1}
 & \begin{matrix}(1,0,0) \\ (0,1,0) \\ (0,0,1)\end{matrix}
\end{matrix}$$

> L'application $f:\R_3[X]\to \R_3[X]$ définie par $f(P) = (X+1)P'(X)$

$$
\begin{matrix}
\m{0 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 2 & 3 \\ 0 & 0 & 0 & 3}
\end{matrix}
$$

> $f$

$$
\begin{matrix}
\m{0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0}\begin{matrix}1 \\ X \\ X^2\end{matrix}
\\ \begin{matrix}f(1) & f(X) & f(X^2) \end{matrix}
\end{matrix}
$$
> $f$

$$
\begin{matrix}
\m{1 & -1 & 1 \\ 1 & 0 & 0 \\ 1 & 1 & 1} \begin{matrix}(1,0,0) \\ (0,1,0) \\ (0,0,1)\end{matrix}
\\ \begin{matrix}f(1) & f(X) & f(X^2)\end{matrix}
\end{matrix}
$$
# Exercice 2

> Soit $f:\R^3 \to \R^4$ et $g:\R^3 \to \R^3$ les applications linéaires dont les matrices pr rapport à la base canonique $\mathscr{B}$ de $\R^3$ sont respectivement
> 
> $\Mat_{\mathscr{B}}(f) = \m{1 & -1 & 0 \\ -2 & 1 & 3 \\ 0 & 1 & -1}$
> et
> 
> $\Mat_{\mathscr{B}}(g) = \m{-1 & 0 & 2 \\ -3 & 0 & 1 \\ 1 & 1 & -2}$
>
> Calculer $f(1, -1 ,2)$ et $g(0,1,2)$

- $f(1,-1,2)$

> [!tips]
> On fait avec les matrices ou par décomposition

**Avec matrices**
$\m{1 & -1 & 0 \\ -2 & 1 & 3 \\ 0 & 1 & -1}\m{1 \\ -1 \\ 2} = \m{2 \\ 3 \\ -3}$

donc  $f(1, -1, 2) = (2, 3, -3)$

**Par décomposition**
$f(1,-1, 2) = 1 \cdot f(1,0,0)  - 1\cdot f(0,1,0) + 2 f(0,0,1)$ 
$\phantom{f(1, -1, 2)} = 1 \cdot (1, -2, 0) - 1 (-1, 1 ,1) + 2 (0,3,-1)$
$\phantom{f(1,-1,2)} = (2,3,-3)$

- $g(0,1,2)$

$\m{1 & 0 & 2 \\ -3 & 0 & 1 \\ 1 & 1 & -2}\m{0 \\ 1 \\ 2}  = \m{4 \\ 2 \\ -3}$

donc $g(0,1,2) = (4,2,-3)$

> Calculer $f \circ g(1,1,0)$



$\Mat_{\mathscr{B}}(f\circ g) = \Mat_{\mathscr{B}}(f)\Mat_{\mathscr{B}}(g)=\mb{& \m{-1 & 0 & 2 \\ -3 & 0 & 1 \\ 1 & 1 & -2}\\\m{1 & -1 & 0 \\ -2 & 1 & 3 \\ 0 & 1 & -1} & \m{2 & 0 & 1 \\ 2 & 3 & -9 \\ -4 & -1 & 3}}$

puis,

$\m{2 & 0 & 1 \\ 2 & 3 & -9 \\ -4 & 1 & -3}\m{1 \\ 1 \\ 0} = \m{2 \\ 5 \\ -5}$

donc $(f \circ g)(1,1,0) = (2,5,-5)$


> Calculer $g \circ f(2,-1,0)$

$\Mat_{\mathscr{B}}(g\circ f) = \Mat_{\mathscr{B}}(g)\Mat_{\mathscr{B}}(f)=\m{-1 & 0 & 2 \\ -3 & 0 & 1 \\ 1 & 1 & -2}\m{1 & -1 & 0 \\ -2 & 1 & 3 \\ 0& 1 & -1} = \m{-1 & 3 & -2 \\ -3 & 4 & -1 \\ -1 & -2 & 5}$

puis $\m{-1 & 3 7 -2 \\ -3 & 4 & -1 \\ -1 & -2 & 5}\m{2 \\ -1 \\ 0} = \m{-5 \\ -10 \\ 0}$

donc

$(g \circ f)(2, -1, 0) = (-5, -10, 0)$

# Exercice 3

> Soit $\mathscr{B}$ une base de $\R^3$.
> Soit $f:\R^3 \to \R^3$, $g:\R^3 \to \R^3$ et $h : \R^3 \to \R^3$
> les applications linéaires dont les matrices par rapport à la base $\mathscr{B}$ sont respectivement
> $\Mat_{\mathscr{B}}(f) = \m{1 & 1 & 2 \\ 0 & 1 & -1 \\ -1 & -1 & -1}$
> $\Mat_{\mathscr{B}}(g) = \m{-2 & -1 & -3 \\ 1 & 1 & 1 \\ 1 & 0 & 1 }$
> $\Mat_{\mathscr{B}}(h) = \m{0 & 1 & -1 \\ -1 & 2 & -1 \\ -1 & 1 & 0}$
> Calculer $\Mat_{\mathscr{B}}(f) \times \Mat_{\mathscr{B}}(g)$. Que peut-on en conclure sur les applications $f$ et $g$ ?

$\m{1 & 1 & 2 \\ 0 & 1 & -1 \\ -1 & -1 & -1}\m{-2 & -1 & -3 \\ 1 & 1 & 1 \\ 1 & 0 & 1} = \m{1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1}=I_3$

$f \circ g = \id_{\R^3}$
On en déduit que $f$ et $g$ sont bijectives (car endomorphisme) et réciproques l'une de l'autre.

> Calculer $\Mat_{\mathscr{B}}(h) \times \Mat_{\mathscr{B}}(h)$.
> Que peut-on en conclure sur l'application $h$ ? 

$\ub{\Mat_{\mathscr{B}(h) \times \Mat_{\mathscr{B}}(h)}}{\Mat_{\mathscr{B}}(h \circ h)}\m{0 & 1 & -1 \\ -1 & 2 & -1 \\ -1 & 1 & 0}\m{0 & 1 & -1 \\ -1 & 2 & -1 \\ -1 & 1 & 0} = \m{0 & 1 & -1 \\ -1 & 2 & -1 \\ -1 & 1 & 0} = \Mat_{\mathscr{B}}(h)$


Donc on en déduit que $h \circ h = h$
Et $h$ est un projecteur. 

# Exercice 4 (CC2)

> Soit $f:\R^3 \to \R^3$ l'application linéaire définie par:
> $f(x,y,z) = (x, 2x - y+z, -x+y-z)$
> On pose $u = (0,1,1), v = (0,1,-1)$ et $w = (1,1,0)$
> 1. Déterminer la matrice de $f$ dans la base canonique de $\R^3$
> 2. Montrer que la famille $(u,v,w)$ est une base de $\R^3$
> 3. Déterminer la matrice de $f$ dans la base $(u,v,w)$
> 4. Déterminer la matrice de $f$ dans la base $(u,v,w)$ pour $n \in \N^*$ (où $f^n = \ub{f \circ .. \circ f}{n\text{ fois}}$)
> 5. Déterminer les coordonnées du vecteur $(1,1,1)$ dans la base $(u,v,w)$
> 6. Calculer $f^n(1,1,1)$ pour $n \in \N^*$

Notons $B$ la base canonique de $\R^3$.
## Question 1
> Déterminer la matrice de $f$ dans la base canonique de $\R^3$

Par définition, on a:
$\mb{\m{1 & 0 & 0 \\ 2 & -1 & 1 \\ -1 & 1 & -1} & \mb{(1,0,0) \\ (0,1,0) \\ (0,0,1)} \\ \mb{f(1,0,0) & f(0,1,0) & f(0,0,1)} & & }$


## Question 2
> Montrer que la famille $(u,v,w)$ est une base de $\R^3$

Posons $B' = \{u,v,w\}$
On a $\card(B') = 3 = \dim(\R^3)$

> [!info]
> Il reste à montrer au choix **libre** ou **génératrice**. Ici, génératrice plus judicieux (suite de l'exercice)

Il suffit de montrer, par exemple que $B'$ est génératrice de $\R^3$.
Soit $(x,y,z) \in \R^3$. 
- Montrons qu'il existe $a,b,c$ 3 réels tels que
	- $(x,y,z) = a\cdot u + b \cdot v + c \cdot w$
		- c'est-à-dire, montrons que le système d'inconnues $a,b,c$ admet (au moins) une solution.
	- $(S):\cases{c = x \\ a+b+c = y \\ a-b = z}$ admet au moins une solution
		- $(S) \iff \cases{c = x \\ a+b =y -x \\ a-b = z}$
		- $\phantom{(S)} \ifff{L_2 \leftarrow L_2 + L_3} \cases{c = x \\ a+b = y - x \\ 2a = y+z-x}$
		- $\phantom{(S)} \iff \cases{a = \frac{y+z - x}2 \\ b = \frac{y - z-x}2\\ c = x}$
- Finalement, $B'$ est bien une base de $\R^3$

# Question 3
> Déterminer la matrice de $f$ dans la base $(u,v,w)$

**Par définition,**
- $f(u) = f((0,1,1)) = (0,0,0)$
- $f(v) = f((0,1,-1)) = (0,-2, 2)$
- $f(w) = f((1,1,0)) = (1, 1, 0)$

> [!warn]
> **Attention** : différent de la base canonique. C'est la décomposition qu'on cherche (on réutilise la question d'avant)

- $\Mat_{B'}(f) = \mb{\m{0 & 0 & 0 \\ 0 & -2 & 0 \\ 0 & 0 & 1} & \mb{u \\ v \\ w} \\ \mb{f(y) & f(v) & f(w)} & }$

> [!check]
> La décomposition sur une base est unique, donc soit on utilise les formules de la question précédente, soit on « déduit » si évident (eg. on voit qu'un vecteur = $2\cdot v$ donc on écrit directement $2$ sur une colonne)

# Question 4
>  Déterminer la matrice de $f$ dans la base $(u,v,w)$ pour $n \in \N^*$ (où $f^n = \ub{f \circ .. \circ f}{n\text{ fois}}$)

$\Mat_{B'}(f^n) = \Mat_{B'}(\ub{f \circ ... \circ f}{n \text{ fois}}) = (\Mat_{B'(f)})^n$
$= \m{0 & 0 & 0 \\ 0 & -2 & 0 \\ 0 & 0 & 1}^n$
$= \m{0 & 0 & 0 \\ 0 & (-2)^n & 0 \\ 0 & 0 & 1^n}$

# Question 5
> Déterminer les coordonnées du vecteur $(1,1,1)$ dans la base $(u,v,w)$

D'après $\fbox2,$ on a:
- $(1,1,1) = \frac12\cdot u + (-\frac12)\cdot v + 1 \cdot w$

# Question 6
> Calculer $f^n(1,1,1)$ pour $n \in \N^*$

Calculons,
- $\m{0 & 0 & 0 \\ 0 & (-2)^n & 0 \\ 0 & 0 & 1}\m{\frac12 \\ -\frac12 \\ 1} = \m{0 \\ (-2)^{n-1} \\ 1}$

D'où $f^{n}(1,1,1) = 0 \cdot u + (-2)^{n-1} \cdot v + 1 \cdot w$


# Exercice 7

> Soit $f:\R_3[X]\to\R_3[X]$ l'application linéaire définie par:
> $f(P) = (1-X)P'+3P$
> 1. Déterminer la matrice $f$ par rapport à la base canonique de $\R_3[X]$ 
> 2. On pose $P_0 = 1, P_1 = 1 - X, P_2 = (1-X)^2, P_3 = (1-X)^3$. Montrer que la famille $(P_0, P_1, P_2, P_3)$ est une base de $\R_3[X]$
> 3. Déterminer la matrice de $f$ par rapport à cette base.
> 4. L'application $f$ est-elle bijective? Justifier.

## Question 1
> Déterminer la matrice $f$ par rapport à la base canonique de $\R_3[X]$ 

Notons $B$ la base canonique de $\R_3[X]$
Par définition,
- $f(1) = (1-X)0+3 = 3 \cdot 1$
- $f(X) = 1 - X + 3X = 1+2X$
- $f(X^2) = 2(1-X)X+3X^2 = 2x+X^2$
- $f(X^3) = 3(1-X)X^2+3X^3 = 3X^2$

$\Mat_{\mathscr{B}}(f) = \mb{\m{3 & 1 & 0 & 0 \\ 0 & 2 & 2 & 0 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 0} & \mb{1 \\ X \\ X^2 \\ X^3} \\ \tiny\m{f(1) & f(X) & f(X^2) & f(X^3)} & }$
## Question 2
> On pose $P_0 = 1, P_1 = 1 - X, P_2 = (1-X)^2, P_3 = (1-X)^3$. Montrer que la famille $(P_0, P_1, P_2, P_3)$ est une base de $\R_3[X]$

> [!info]
> Pas besoin de décomposition pour la suite, on montre qu'elle est libre.

Notons $B'=\{P_0, P_1, P_2, P_3\}$
**D'une part**,
- $\card(B')=4 = \dim(\R_3[X])$
**D'autre part**,
- La famille est libre car il s'agit d'une famille de polynômes non-nuls étagés en degrés
Donc $B'$ est une base de $\R_3[X]$.

## Question 3
> Déterminer la matrice de $f$ par rapport à cette base.

Par définition,
- $f(P_0) = 3 \cdot 1  = 3 \cdot P_0$
- $f(P_1) = -(1-X)+3(1-X) = 2(1-X) = 2 \cdot P_1$
- $f(P_2) = -2(1-X)(1-X)+3(1-X)^2 = 1\cdot(1-X)^2 = 1 \cdot P_2$
- $f(P_3) = -3(1-X)(1-X)^2 + 3(1-X)^3 = 0_{\R_3[X]}$

$\Mat_{B'} = \mb{\m{3 & 0 & 0 & 0 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0} & \m{P_0 \\ P_1 \\ P_2 \\ P_3} \\ \tiny\m{f(P_0) & f(P_1) & f(P_2) & f(P_3)} & }$

## Question 4
> L'application $f$ est-elle bijective? Justifier.

Puisque $f(P_3) = 0_{\R_3[X]}$ et que $P_3 ≠ 0_{\R_3[X]},$
- alors $\ker(f) ≠ \{0_{\R_3[X]}\}$
Donc $f$ n'est pas injective, à fortiori pas bijective.

> [!tips]
> Pas surjective car il s'agit d'un endomorphisme

# Exercice 8

> Soit $\mathscr{B} = (e_1, e_2, e_3)$ la base canonique de $\R^3$. Soit $f$ l'endomorphisme de $\R^3$ dont la matrice par rapport à $\mathscr{B}$ est:
>
> $A = \m{2  & -1 & 0 \\ -2 & 1 & -2 \\ 1 & 1 & 3}$
> On pose $e_1' = (1,1,-1), e_2' = (1,0,-1), e_3' = (1, -1, 0)$.
> On admet que la famille $\mathscr{B'} = (e_1', e_2', e_3')$ est une base de $\R^3$
> 1. Calculer $f(e_1'), f(e_2')$ et $f(e_3')$
> 2. Déterminer $D$ la matrice de $f$ par rapport à $\mathscr{B}'$
> 3. Déterminer $P$ la matrice de passage de $\mathscr{B}$ à $\mathscr{B'}$
> 4. Calculer $P^{-1}$
> 5. Quelle relation lie les matrices $A,D,P$ et $P^{-1}$
> 6. Montrer par récurrence que, pour tout $n \in \N, A^n = PD^nP^{-1}$
> 7. En déduire pour tout $n \in \N, A^n$

## Question 1
> Calculer $f(e_1'), f(e_2')$ et $f(e_3')$

- $\m{2 & -1 & 0 \\ -2 & 1 & -2 \\ 1 & 1 & 3}\m{1 \\ 1 \\ -1} = \m{1 \\ 1 \\ -1}$ donc $f(e_1') = (1,1,-1)$
- $\m{2 & -1 & 0 \\ -2 & 1 & -2 \\ 1 & 1 & 3}\m{1 \\ 0 \\ -1} = \m{2 \\ 0 \\ -2}$ donc $f(e_2') = (2,0,-2)$
- $\m{2 & -1 & 0 \\ -2 & 1 & -2 \\ 1 & 1 & 3}\m{1 \\ -1 \\ 0} = \m{3 \\ -3 \\ 0}$ donc $f(e_3')=(3,-3,0)$

## Question 2
> Déterminer $D$ la matrice de $f$ par rapport à $\mathscr{B}'$

Par définition, 
$D = \Mat_{B'}(f) = \mb{\m{1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3} & \mb{e_1' \\ e_2' \\ e_3'} \\ \mb{f(e_1') & f(e_2') & f(e_3')} & }$

## Question 3
> Déterminer $P$ la matrice de passage de $\mathscr{B}$ à $\mathscr{B'}$

Par définition,
$P = P_{B, B'} = \mb{\m{1 & 1 & 1 \\ 1 & 0 & -1 \\ -1 & -1 & 0} & \mb{e_1 \\ e_2 \\ e_3} \\ \mb{e_1' & e_2' & e_3'} & }$

## Question 4
>  Calculer $P^{-1}$

$\m{1 & 0 & 1 & \vdots & 1 & 0 & 0 \\ 1 & 0 & -1 & \vdots & 0 & 1 & 0 \\ -1 & -1 & 0 & \vdots & 0 & 0 & 1}\sym{L_2 \leftarrow L_2 - L_1 \\ L_3 \leftarrow L_3 + L_1}\m{1 & 1 & 1 & \vdots & 1 & 0 & 0 \\ 0 & -1 & -2 & \vdots & -1 & 1 & 0 \\ 0 & 0 & 1 & \vdots & 1 & 0 & 1}$

$\sym{L_2 \leftarrow -L_2}\m{1 & 1 & 1 & \vdots & 1 & 0 & 0 \\ 0 & 1 & 2 & \vdots & 1 & -1 & 0 \\ 0 & 0 & 1 & \vdots & 1 & 0 & 1}$
$\sym{L_1 \leftarrow L_1 - L_2}\m{1 & 0 & 1 & \vdots & 0 & 1 & 0 \\ 0 & 1 & 2 & \vdots & 1 & -1 & 0 \\ 0 & 0 & 1 & \vdots & 1 & 0 & 1}$
$\sym{L_1 \leftarrow L_1 + L_3 \\ L_2 \leftarrow L_2 - 2L_3}\m{1 & 0 & 0 & \vdots & 1 & 1 & 1 \\ 0 & 1 & 0 & \vdots & -1 & -1 & -2 \\ 0 & 0 & 1 & \vdots & 1 & 0 & 1}$

Donc $P$ est inversible et $P^{-1} = \m{1 & 1 & 1 \\ -1 & -1 & -2 \\ 1 & 0 & 1}$

## Question 5
>  Quelle relation lie les matrices $A,D,P$ et $P^{-1}$

> [!check]
> Formule de changement de base.
> On « compresse »
> $B \times B' | B \times B | B \times B'$
> $M_{B'}(f) = (P_{B, B'})^{-1}\Mat_{B}(f)P_{B, B'}$

D'après la formule de changement de base, on a:
- $\Mat_{B'}(f) = \Mat_B(f)$ 
$D = P^{-1}AP,$ soit:
- $PDP^{-1}= A$

## Question 6
Déjà faite : (cf. [[TD 7#Récurrence]])

## Question 7
> En déduire, pour tout $n \in \N, A^n$

Pour tout $n \in \N,$ on a:
- $A^n = PD^nP^{-1}$
Or, **récurrence déjà faite**
- $A^n = \m{1 & 1 & 1 \\ 1 & 0 & -1 \\ -1 & -1 & 0}\m{1 & 0 & 0 \\ 0 & 2^n & 0 \\ 0 & 0 & 3^n}\m{1 & 1 & 1 \\ -1 & -1 & -2 \\ 1 & 0 & 1}$
- $= \m{1 & 2^n & 3^n \\ 1 & 0 & -3^n \\ -1 & -2^n & 0}\m{1 & 1 & 1 \\ -1 & -1 & -2 \\ 1 & 0 & 1}$
- $A^n = \m{1-2^n+3^n & 1-2^n & 1-2^{n+1}+3^n \\ 1-3^n & 1 & 1-3^n \\ -1+2^n & -1+2^n & -1+2^{n+1}}$