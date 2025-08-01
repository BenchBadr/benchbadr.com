$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}$
# I -  Définitions

## Définition
Soit $E, F$ des $\K$-espaces vectoriels de dimension finie.
- Soit $\varphi:E \to F$ une application linéaire
- Soit $B_E = (e_1, ..., e_n)$
- Soit $B_F = (f_1, ..., f_n)$ une base de $F$
La nature de $\varphi$ par rapport aux bases de $B_E$ et $B_F$ est la nature de taille $n \times p$ dont les colonnes sont de coordonnées de $\varphi(e_1), ..., \varphi(e_p)$ dans la base $(f_1, ..., f_n)$

$\m{\lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n & \cdots & \cdots & \cdots & \cdots }\begin{matrix} \leftarrow f_1 \\ \leftarrow f_2 \\ \vdots \\  \leftarrow f_n \end{matrix}$
$\begin{matrix}\uparrow & \uparrow & \cdots & \uparrow \\ \varphi(e_1) & \varphi(e_2) & \cdots & \varphi(e_p)\end{matrix}$


$\varphi(e_1) = \lambda_1f_1 + \lambda_2f_2 + ... + \lambda_n f_n$

### Exemple

$\varphi:\cases{\R_2[X] \to \R_3[X] \\ P(X) \mapsto XP(X)-P'(X)}$
Matrice de $\varphi$ par rapport aux bases canoniques de $\R_2[X]$ et $\R_3[X]$
- Base canonique de $\R_2[X] : (1, X, X^2)$
- Base canonique de $\R_3[X] : (1, X, X^2, X^3)$

$\m{0  & -1 & 0\\ 1 & 0 & -2 \\ 0 & 1 & 0 \\ 0 & 0 & 1}\begin{matrix}\leftarrow 1 \\ \leftarrow X \\ \leftarrow X^2 \\ \leftarrow X^3\end{matrix}$
$\tiny\begin{matrix}\uparrow & \uparrow & \uparrow\\\varphi(1) & \varphi(X) & \varphi(X^2)\end{matrix}$

$\varphi(1) = X=0\times 1 + 1 \times X + 0 \times X^2 + 0 \times X^3$
$\varphi(X) = X^2 - 1 = -1 \times 1 + 0 \times X + 1 \times X^2 + 0 \times X^3$
$\varphi(X^2) = X^3 - 2X = 0 \times 1 - 2 \times X + 0 \times X^2 + 1 \times X^3$

### Exemple
Soit $f:\cases{\R^3 \to \R^2 \\ (x,y,z) \mapsto (x-2y+z, 3x-4z)}$
Matrice de $f$ par rapport aux bases canoniques de $\R^3$ et $\R^2$.
$\m{1 & -2 & 1 \\ 3 & 0 & -4}\begin{matrix}\leftarrow (1,0) \\ \leftarrow (0,1)\end{matrix}$
$\tiny\begin{matrix}\uparrow & \uparrow & \uparrow \\ f(1,0,0) & f(0,1,0) & f(0,0,1)\end{matrix}$

## Notation
La matrice de $\varphi$ par rapport aux bases 
$B_E$ et $B_F$ est notée:
- $\newcommand{\Mat}[2]{\text{Mat}_{B_{#1}, B_{#2}}}\Mat{E}{F}(\varphi)$ 

> [!info]
> Notation non standardisée mais admise dans ce cours

# II - Opérations sur les matrices d'applications linéaires

## Proposition
Soit $f:E\to F, g:E \to F$ des applications linéaires.
- Soit $B_E$ et $B_F$ des bases de $E$ et $F$
	- Alors: 
		- $\Mat{C}{F}(f+g) = \Mat{E}{F}(f)+\Mat{E}{F}(g)$
	- $\Mat{E}{F}(\lambda f) = \lambda \Mat{E}{F}(f)$

## Proposition
Soit $f:\cases{E \to F \\ g:F \to G}$
Alors $\Mat{E}{G} (g\circ f) = \Mat{F}{G}(g) \times \Mat{E}{F}(f)$

## Proposition
Soit $f:E \to F$ une application linéaire. 
Soit $v \in E$
- Alors:
	- $\text{Mat}_{B_F}(f(v)) = \ub{\Mat{E}{F}(f)}{\begin{matrix}\text{vec. colonne}\\\text{des coordonnes de }f(v) \\ \text{dans }B_F\end{matrix}} \times \ub{\text{Mat}_{B_E}(v)}{\begin{matrix}\text{vec. colonne}\\\text{des coordonnes de }v \\ \text{dans }B_E\end{matrix}}$
### Exemple
$f:\cases{\R^3 \to \R^3 \\ (x,y,z)\mapsto (x+y+z, x-y-z, x+2z)}$
Par rapport aux bases canoniques, la matrice de $f$ s'écrit:
$M = \m{1 & 1 & 1 \\ 1 & -1 & -1 \\  1 & 0 & 2}$

> Comment calculer $f(1,0,1)$ ?

$\begin{matrix}& \m{1 \\ 0 \\ 1} \\ \m{1 & 1 & 1 \\ 1 & -1 & -1 \\ 1 & 0 & 2}&\m{2 \\ 0 \\ 3}\end{matrix}$

$f(1,0,1) = (2,0,3)$

$\Mat(f^{-1}) = (\Mat(f))^{-1}$
$f$ est bijective ssi $\Mat(f)$ est inversible.

# III - Changement de bases

> [!info]
> Lien entre $\Mat{E}{F}(\varphi)$ et $\Mat{E'}{F'}(\varphi)$

## Définition
Soit $E$ un space vectoriel de dimension $n$. 
Soit $B$ et $B'$ deux bases de $E$.

La **matrice de passage** de $B$ à $B'$, notée $P_{B,B'}$ est la matrice carré de taille $n$ dont les colonnes contiennent les coordonnées des vecteurs de $B'$ dans la base $B$.
$\newcommand{\id}{\text{id}}$
## Remarque
$P_{B, B'} = \Mat{'}{}(\id_E)$

### Exemple

On se place dans $\R^3$
- On note $B$ la base canonique de $\R^3$ : $((1,0,0), (0,1,0),(0,0,1))$
- On note $B'$ la base $((1,1,0),(2,0,1), (0,1,-1))$
- $P_{B, B'} = \begin{matrix}\m{1 & 2  & 0 \\ 1 & 0 & 1 \\ 0 & 1 & -1}\begin{matrix}\leftarrow (1,0,0) \\ \leftarrow (0,1,0) \\ \leftarrow (0,0,1)\end{matrix}\\ \tiny\begin{matrix}\uparrow & \uparrow & \uparrow \\ (1,1,0) & (2,0,1) & (0,1,-1) & & & &\end{matrix} &\end{matrix}$ 

> [!check]
> Dans l'autre sens

- $(1,0,0) = a\times(1,1,0)+b(2,0,1)+c(0,1,-1)$
	- car : $\cases{a + 2b = 1 \\ a + c = 0 \\ b - c = 0 } \iff \cases{a = -1 \\ b = 1 \\ c = 1}$
Et, (systèmes)
- $(1,0,0) = -1 \times (1,1,0)+1 \times(2,0,1)+1 \times(0,1,-1)$
-  $P_{B, B'} = \begin{matrix}\m{-1 & 2 & 2 \\ 1 & -1 & 1 \\ 1 & -1 & -2}\begin{matrix}\leftarrow (1,1,0) \\ \leftarrow (2,0,1) \\ \leftarrow (0,1,-1)\end{matrix}\\ \tiny\begin{matrix}\uparrow & \uparrow & \uparrow \\ (1,0,0) & (0,1,0) & (0,0,1) & & & &\end{matrix} &\end{matrix}$ 

## Proposition
Soit $E$ un espace vectoriel de dimension $n$. 
Soit $B$ et $B'$ deux bases de $E$. 
Soit $v$ un vecteur de $E$.
En notant respectivement $X$ et $X'$ les vecteurs colonnes contenant les coordonnées de $v$ dans $B$ et $B'$, on a:
- $X = P_{B,B'}X'$

> [!tips]
> La notation est « inversée », à ne pas confondre

## Exemple

> [!check]
> On reprend le cadre et les notations de l'exemple précédent.

On considère le vecteur $v = (1,-2,1)$ et on souhaite trouver les coordonnées de $v$ dans $B'$. 
- $P_{B', B}\m{1 \\ -2 \\ 1} = \m{-1 & 2 & 2 \\ 1 & -1 & -1 \\ 1 & -1 & -2}\m{1 \\ -2 \\ 1} = \m{-3 \\ 2 \\ 1}$
Donc, $v = -2(1,1,0)+2(2,0,1)+1(0,1,-1)$
- $X = P_{B, B'}X'$

## Proposition
Soit $E$ un espace vectoriel de dimension finie.
Soit $B$ et $B'$ deux base de $E$.
La matrice de passage $P_{B, B'}$ est inversible et:
- $(P_{B,B'})^{-1} = P_{B', B}$

### Remarque
En pratique, on calcule souvent l'une des matrices de passage avec la définition, puis on calcule l'autre en faisant un calcul d'inverse.

### Exemple
$\newcommand{\ifff}[1]{\underset{\begin{matrix}#1\end{matrix}}{\iff}}$
$P_{B, B'} = \m{1 & 2 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & -1}$

> Trouvons $(P_{B, B'})^{-1}$

$\m{1 & 2 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & -1}\m{u \\ v \\ w} = \m{x \\ y \\ z}$
$\iff \cases{u + 2v = x \\ u + w = y \\ v - w = z}$
$\ifff{L_2 \leftarrow L_2 - L_1} \cases{u + 2v = x \\ -2v + w = y - x \\ v - w = z}$
$\iff \cases{u + 2v = x \\ v - w = z \\ -w = -x + y + 2z}$
$\iff \cases{u = -x+2y+2z\\ v = x-y-z \\ w = x - y -z}$
$\iff \m{u \\ v \\ w} = \ub{\m{-1 & 2 & 2 \\ 1 & -1 & -1 \\ 1 & -1 & -2}}{(P_{B,B'})=P_{B'B}}\m{x \\ y \\ z}$

## Proposition

> [!warn]
> °°° CC2

Soit $E$ et $F$ deux espaces vectoriels de dimensions finies. 
- Soit $B_E$ et $B_{E'}$ deux bases de $E$.
- Soit $B_F$ et $B_F'$ deux bases de $F$.
Soit $\varphi : E \to F$ une application linéaire. Alors,
$$
\Mat{'E}{'F}(\varphi) = \Mat{'E}{E}(\varphi)P_{B_F,B'F}
$$

### Cas particulierK-,][ ]
$\varphi : E \to F$
$$
\text{Mat}_{B'}(\varphi) = P_{B', B}\text{Mat}_{B}(\varphi)P_{B, B'}
$$



## Exercice d'illustration

> Soit $\varphi:(x,y)\to  (2x-y, x + y)$
> On note $B$ la base canonique de $\R^2$
> On note $B'$ la base de $((1,1), (1,-1))$
> 1. Écrire $\text{Mat}_(\varphi)$
> 2. Déterminer $P_{B, B'}$
> 3. Calculer $P_{B', B}$
> 4. En dédure $\text{Mat}_{B'}(\varphi)$

**Question 1**
$\text{Mat}_{B}(\varphi) = \begin{matrix}\m{2 & -1 \\ 1 & 1}& \tiny\begin{matrix}\leftarrow (1,0) \\ \leftarrow (0,1)\end{matrix}\\ \tiny\begin{matrix}\uparrow & \uparrow \\ \tiny\varphi(1,0) & \tiny\varphi(0,1)\end{matrix}\end{matrix}$

**Question 2**
$P_{B, B'} = \begin{matrix}\m{1 & 1 \\ 1 & -1} & \tiny\begin{matrix}\leftarrow  (1,0) \\ \leftarrow (0,1)\end{matrix} \\ \tiny\begin{matrix}\uparrow & \uparrow \\ (1,1) & (1,-1)\end{matrix}\end{matrix}$]

**Question 3**
Calculons l'inverse de $\m{1 & 1 \\ 1 & -1}$
$\newcommand{\pa}{\phantom{\m{1 & 1 \\ 1 & -1}\m{u \\ v} = \m{x \\ y}}}\m{1 & 1 \\ 1 & -1}\m{u \\ v} = \m{x \\ y} \iff\cases{u+v = x \\ u -v = y}$
$\pa \iff \cases{u+v = x \\ -2v = y -x}$
$\pa \iff \cases{u = \frac12x+\frac12y \\ v = \frac12x - \frac12y}$
$\pa \iff \m{u  \\ v} = \m{1/2 & 1/2 \\ 1/2 & -1/2}\m{x \\ y}$
Donc $P_{B', B} = (P_{B, B'})^{-1} = \m{1/2 & 1/2 \\ 1/2 & -1/2}$ 

**Question 4**
$\text{Mat}_{B'}(\varphi) = P_{B', B}\text{Mat}_B(\varphi)P_{B, B'}$
$\phantom{\text{Mat}_{B'}(\varphi)} = \m{1/2 & 1/2 \\ 1/2 & -1/2}\m{2 & -1 \\ 1 & 1}\m{1 & 1 \\ 1 & -1}$
$\phantom{\text{Mat}_{B'}(\varphi)} = \m{1/2 & 1/2 \\ 1/2 & -1/2}\m{1 & 3 \\ 2 & 0}$
$\phantom{\text{Mat}_{B'}(\varphi)} = \m{3/2 & 3/2 \\ -1/2 & 3/2}$


# III - Noyau, image et rang d'une matrice

> [!info]
> Pour l'an prochain essentiellement

## Définition
Soit $A$ une matrice de taille $n \times p$. 
On appelle application linéaire canonique associée à $A$ l'application:
- $\varphi:\cases{\mathscr{M}_{p,1}(\K) \to \mathscr{n, 1}(\K) \\ X \mapsto AX}$ 
- avec $\mathscr{M}_{p,1}$ vecteurs colonnes à $p$ coordonnées.
- $\K$ vecteurs colonnes à $n$ coordonnées. 

### Remarque
En pratique, on identifie les vecteurs colonnes et les vecteurs lignes:
- $\mathscr{M}_{p,1}(\K) \sim \K^p$    
- $\mathscr{n,1}(\K) \sim \K^n$
On part voir $\varphi$ comme une application de $\K^p$ dans $\K^n$. 
(abus de langage que tout le monde fait)

$\newcommand{\Im}{\text{Im}}\newcommand{\rg}{\text{rg}}$
## Définition
Soit $A$ une matrice de taille $n \times p$. 
- Le noyau de $A,$ noté $\ker(A)$  est le noyau de l'application linéaire canonique associée à $A$.
- Autrement dit, $\ker(A) = \{X \in \K^p | AX = 0_{\R_n}\}$ 
- L'image de $A$, notée $\Im(A)$ est l'image de l'application linéaire canonique associée à $A$.
- Autrement dit:
	- $\Im(A) = \{AX | X \in \K^p\}$
- Le rang de $A$, noté $\rg(A),$ vaut:

## Proposition
Le rang de $A$ est égal au rang de la famille des colonnes de $A$.

### Exemple
$A = \m{1 & 0 & 1 \\ 0 & 1 & 0}$
$\rg(A) = \rg\left\{\m{1 \\ 0}, \m{0 \\ 1}, \m{1 \\ 1}\right\}$ 

## Proposition
Soit $A$ une matrice quelconque, alors:
- $\rg(A) = \rg(A^T)$

## Proposition
Le rang de $A$ est égal au rang de la famille des lignes de $A$.

### Exemples
$A = \m{1 & 0 & 1 \\ 0 & 1 & 1}$
$\rg(A) = \rg\left\{(1,0,1), (0,1,1)\right\}$ 
$\phantom{\rg(A)}= 2$

## Proposition - Caractérisations des matrices inversibles. 
Soit $A$ une matrice carrée (réelle) de taille $n$. 
1. $A$ est inversible **ssi** $\ker(A) = \{0_{\R_n}\}$
2. $A$ est inversible **ssi** $\Im(A) = \R^n$
3. $A$ est inversible **ssi** $\rg(A) = n$

# IV - Retour sur les systèmes linéaires

## Écriture matricielle d'un système

### Exemple

$\cases{x - 3y + z = 2 \\ x + y - z = 3} \iff \m{1 & -3 & 1 \\ 1 & 1 & -1}=\m{2 \\ 3}$

Un système linéaire s'écrit $\ub{A}{\text{matrice}}+\ub{X}{\text{vec. des inco}} = \ub{B}{\text{vec. 2nd membre}}$

## Proposition
On considère un système linéaire homogène (à second membre nul) à $n$ équations et $p$ inconnues.
- $AX = \m{0 \\ \vdots \\ 0}$
L'une des solutions de ce système est $\ker(A)$
C'est un sous-espace vectoriel de $\R^p$ de dimension $n - \rg(A)$ (formule du rang). 

