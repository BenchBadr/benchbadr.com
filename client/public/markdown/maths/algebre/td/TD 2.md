# TD-2,  Algèbre

$\newcommand{\sup}{\text{sup}}$

$\newcommand{\R}{\mathbb{R}}\newcommand{\N}{\mathbb{N}}\newcommand{\sub}{\subset}$

### Exercice 1

> Déterminer si les ensembles suivants sont des sous-espaces vectoriels de $\R^2$
>
> $F_1  = \{(x,y)\in\R^2:y=x\}$

D'une part,
- $0_{\R^2}\in F$
D'autre part,
- Soit $\lambda \in \R,$ et $(x_1,y_1)\in F$ et $(x_2, y_2)\in F$
- Alors $\lambda(x_1, y_1)+(x_2, y_2) = (\lambda x_1+x_2, \lambda x_2+y_2) \in F$
__En effet__ $(\lambda x_1+x_2)-(\lambda y_1+y_2) = \lambda (x_1-y_1)+(x_2-y_2) = 0$
$\Rightarrow F$ est un sous-espace vectoriel de $\R^2$

> $F_2 = \{(x,y)\in\R^2:y=x^2\}$

$F$ n'est pas un sous-espace vectoriel de $\R^2$.
Par exemple, $(1,1)\in F$ mais $2(1,1) = (2,2)\notin F$

> $F_3 = \{(x,y)\in\R^2:y≥x\}$

$F$ n'est pas un sous-espace vectoriel de $\R^2$
Par exemple, $(0,1)\in F$ mais $(-1)\cdot (0,1) = (0,-1) \notin F$

---

> $G_1 = \{(x,y,z)\in\R^3:x-2y+z=0\}$

D'une part, 
- $0_{\R^3}=(0,0,0)\in F$
D'autre part, 
- $\lambda \in \R, (x,y,z)\in F$ et $(x_2, y_2, z_2)\in F$
- Alors $\lambda(x,y,z)+(x_2, y_2, z_2) = (\lambda x_1, \lambda y_1+y_2,\lambda z_1+z_2)\in F$
__En effet__ $(\lambda x_1+x_2)-2(\lambda y_1+y_2)+(\lambda z_1+z_2)\\ = \lambda(\color{green}x_1-2y_1+z_1\color{g})+(\color{green}x_2-2y_2+z_2\color{g})$ (0 par définition de $F$
$\Lsh$ $F$ est un sous-espace vectoriel de $\R^3$

> $G_2 = \{(x,y,z)\in\R^3:y=-z\}$

D'une part, 
- $0_{\R^3}=(0,0,0)\in F$
D'autre part, 
- Soit $\lambda \in \R, (x,y,z)\in F$ et $(x_2, y_2, z_2) \in F$
- Alors $\lambda(x,y,z)+(x_2, y_2, z_2) = (\lambda x_1, \lambda y_1+y_2,\lambda z_1+z_2)\in F$
__En effet__: $(\lambda y_1 + y_2)+(\lambda z_1 + z_2) = \lambda(y_1+z_1) + (y_2+z_2)$ = 0 (car $(x_1, y_1, z_1)\in F$
$\Rightarrow$ $F$ est un sous-espace vectoriel de $\R^3$
### Exercice 2

> On se place dans le $R$-espace vectoriel $\R[X]$ des polynômes réels. Déterminer, pour chacun des sous-ensembles suivants, s'il s'agit d'un sous-espace vectoriel.
>
> L'ensemble des polynômes $aX^3+bX+a$, où $a$ et $b$ sont des coefficients réels.

Soit $F=\{P\in \R[X]: \text{ il existe }a\in\R, b\in\R \text{ tels que }P=aX^3+bX+a\}$
- $0_{\R[X]}\in F$
Soit $P=aX^3+bX+a \in F, Q=cX^3+dX+c$ (a,b,c, d 4 réels) et soit $\lambda \in \R$
- Alors
- $\lambda P + Q = \lambda (aX^3+bX+a)+cX^3+dX+c\\ = (\color{green}\lambda a+c\color{g})X^3+(\color{green}\lambda b + d\color{g})X+(\color{green}\lambda a +c\color{g})$
- $\color{green}\in\R\color{g}$
$\Rightarrow$ $F$ est un sous-espace vectoriel de $\R[X]$

> L'ensemble constitué du polynôme nul et des polynômes de degré 3

$P=X^3\in F$
$Q = -X^1 \in F$
mais $P+Q=1 \notin F$

Donc $F$ n'est pas un sous-espace vectoriel de $\R[X]$.

> L'ensemble des polynômes $P$ vérifiant la relation $(X+1)'P'(X) = P(X)$

D'une part,
- $0_{\R[X]}\in F$
D'autre part
- Soit $P\in F, Q \in F$ et $\lambda \in \R$
$(X+1)(\lambda P+Q)'=(X+1)(\lambda P'+Q')\\= \lambda(X+1)P'+(X+1)Q'$
respectivement $P$ (car $P \in F$)et $Q$ (car $Q \in F$)

### Exercice 3

> On se place dans le $\R$-espace vectoriel $\R^{\N}$ des suites réelles. Déterminer, pour chacun des sous-ensembles suivants, s'il s'agit d'un sous-espace vectoriel.
>
> L'ensemble des suites bornées.

D'une part,
- $(0)_{n\in\N}\in F$
D'autre part,
- Soit $(u_n)_{n\in\N}\in F, (v_n)_{n\in\N}\in F$ et $\lambda \in \R$. On a donc l'existence de $M_u$ et $M_v$ tels que:
	 - $\forall n\in \N, |u_n|≤M_u, |v_n|≤M_v$
- Alors $\lambda(u_n)_{n\in\N}+(v_n)_{n\in F} = (\lambda u_n + v_n)_{n\in \N}\in F$
- **En effet**, pour tout $n\in\N$
- $|\lambda u_n + v_n|≤ |\lambda u_n| + |v_n|$ (i$\triangle$)
- $≤ |\lambda|M_u+M_v$
$\Lsh F$  est un sous-espace vectoriel de $\R^{\N}$

> L'ensemble des suites croissantes

$F$ n'est pas un sous-espace vectoriel de $\R^{\N}.$
Par exemple $(n)_{n\in\N} \in F$ mais $(-1)\cdot (n)_{n\in\N} = (-n)_{n\in\N} \notin F$

> [!check]
> Contrôle: suites géométrique

> L'ensemble des suites arithmétiques

D'une part,
- $0_{\R^{\N}}\in F$
Soit $(u_n)_{n\in\N}\in F$ (de raison $r_u$), $(v_n)_{n\in\N}\in F$ (de raison $r_v)$ et $\lambda \in \R$ alors $\lambda(u_n)_{n\in\N}+(v_n)_{n\in\N} = (\lambda u_n + v_n)_{n\in\N}$.
- On note $w_n = \lambda u_n+v_n$
- $w_{n+1}=\lambda u_{n+1}+v_{n+1}$
- $= \lambda(u_n+r_u)+(v_n+r_v)$
- $= (\lambda u_n + v_n)+(\lambda r_u+r_v)$
- $= w_n + (\lambda r_u + r_v)$
$\Lsh F$ est un sous-espace vectoriel. 

###  Exercice 4

> On se place dans le $\R$-espace vectoriel des fonctions de $\R$ dans $\R$. Déterminer, pour chacun des sous-ensembles suivants, s'il s'agit d'un sous-espace vectoriel.

$F$ n'est pas un sous-espace vectoriel de $\mathscr{F}(\R;\R)$

__En effet__ : $f:\begin{matrix}\R \to \R \\ x \to 1\end{matrix}\in F$ mais $(-1)\cdot f \not \in F$.

(multiplication par un scalaire)

>  L'ensemble des fonctions monotones

$F$ n'est pas un sous-espace vectoriel de $\mathscr{F}(\R;\R)$


__En effet__ : $f:\begin{matrix}\R \to \R \\ x \mapsto \begin{cases}-x \text{ si } x ≤ 0 \\ 0 \text{ si } x>0\end{cases}\end{matrix}\in F$

$g:\begin{matrix}\R \to \R \\ x \mapsto \begin{cases}0x \text{ si } x< 0 \\ x \text{ si } x≥0\end{cases}\end{matrix}\in F$

mais $f+g=|.|\notin F$

> L'ensemble des fonctions $2\pi$-périodique

$F$ n'est pas un sous-espace vectoriel de $\mathscr{F}(\R;\R)$

__En effet_ $0_{\mathscr{F}(\R;\R)}\in F$

Soit $f\in F, g\in F$ et $\lambda \in \R$ alors pour tout $x \in \R$

$(\lambda f+g)(x+2\pi) = \lambda f(x+2\pi)+g(x+2\pi) \\ = \lambda f(x) + g(x) = (\lambda f+g)(x)$

Dans $\lambda f+g \in F$

### Exercice 5

> Dans $\R^3$, réecrire les sous-espaces vectoriels suivants sous forme de sous-espaces engendrés (par un ou plusieurs vecteurs selon le cas)
> $F_1 = \{(x,y,z)\in\R^3 | 3x+y-2z=0\}$

Soit $(x,y,z)\in \R^3$. Alors:

$(x,y,z)\in F \iff 3x+y-2z=0 \iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $\begin{cases}x=\lambda \\ y = 2\mu-3\lambda \iff \exists \lambda \in \R, \exists \mu \in \R \text{ tels que }(x,y,z)=(\lambda 2\mu-3\lambda, \mu)  \\ z = \mu \iff \exists \lambda \in \R, \exists \mu \in \R \text{ tels que } (x,y,z) = \lambda (1, -3, 0)+\mu(0,2,1)\end{cases}$

Donc $F = \text{Vect(\{(2,-3,0),(0,2,1)\})}$

> $F=\{(x,y,z)\in\R^3:x+y-z=0\}$

Soit $(x,y,z)\in\R^3$. Alors:
- $(x,y,z)\in F \iff x+y-z=0 \iff \exists \lambda \in \R, \exists \mu \in \R$
- tels que $\begin{cases}x= -\lambda+\mu\\ y = \lambda \\ z = \mu\end{cases}\iff \exists \lambda \in \R, \exists \mu \in \R$ 
- tels que $(x,y,z) = \lambda(-1, 1, 0)+\mu(1,0,1)$
- Donc $F=\text{Vect}(\{(-1;1;0),(1,0,1)\})$

> $F=\{(x,y,z)\in\R^3|x=z \text{ et } x-y+z=0\}$

Soit $(x,y,z) \in \R^3$. Alors:

$(x,y,z)\in F \iff \begin{cases}x-y+z = 0 \\ x-z = 0 \end{cases} \iff \exists \lambda \in \R$ tel que $\begin{cases}x = \lambda \\ y = 2\lambda \\ z = \lambda\end{cases}$

$\iff \exists \lambda \in \R$ tel que $(x,y,z)=\lambda(1,2,1)$

d'où $\text{Vect(\{(1,2,1)\})}$

> $F=\{(x,y,z)\in \R^3 | 2x+3z=0\}$

Soit $F=\{(x,y,z)\in \R^3:2x+3z=0\}$

Soit $(x,y,z)\in\R^3$. Alors:

$(x,y,z)\in F \iff 2x+3z=0 \iff \exists \lambda \in \R, \exists \mu \in \R$ tels que 

$\begin{cases}x = -\frac{3}{2}\mu \\ y = \lambda \\ z = \mu\end{cases}$

$\iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $(x,y,z) = \lambda(0,1,0)+\mu(-\frac{3}{2},0,1)$

Donc $F=\text{Vect}(\{(0,1,0), (-\frac{3}{2}, 0, 1)\})$

> $F = \{(x,y,z)\in\R^3 | x-y-z=0$ et $2y-z=0\}$

Soit $F=\{(x,y,z)\in \R^3 | x-y-z=0$ et $2y-z=0\}$
Soit $(x,y,z)\in\R^3$. Alors:
$(x,y,z)\in F \iff \begin{cases}x-y-z = 0 \\ 2y - z = 0\end{cases} \iff \exists \lambda \in \R$ tel que $\begin{cases}x = 3\lambda \\ y = \lambda \\ z = 2\lambda \end{cases}$
$\iff \exists \lambda \in \R$ tel que $(x,y,z)=\lambda(3,1,2)$
Donc $F=\text{Vect}(\{(3,1,2)\})$

### Exercice 6

> On se place sur le $\R$-espace vectoriel $\R_2[X]$. Réecrire les sous-espaces vectoriels suivants sous forme de sous-spaces engendrés (par un ou plusieurs polynômes, selon le cas)
> $F = \{P \in \R_2[X] | P(2) = 0\}$

Soit $F=\{P\in\R_2[X]:P(2)=0\}$.
Soit $P = aX^2+bX+c \in \R_2[X]$
Alors $P\in F \iff 4a+2b+c = 0 \iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $\begin{cases}a = \lambda \\ b =\mu \\ c = -4\lambda - 2\mu\end{cases}$
$\iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $P = \lambda(X^2-4)+\mu(X-2)$

D'où $F = \text{Vect}(\{X^2-4, X-2\})$

> $F = \{P \in \R_2[X] | P'(1) = 0\}$

Soit $P = aX^2+bX+c \in \R_2[X]$

Alors $P\in F \iff 2a+b = 0 \iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $\begin{cases}a = \lambda \\b=-2\lambda \\c = \mu\end{cases}$

$\iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $P = \lambda(X^2-2X)+\mu$

Donc $F = \text{Vect}(\{(X^2-2X, 1)\})$

> $F = \{P\in\R_2[X] | P(-1)=0 \text{ et } P(1) = 0\}$

Soit $F = \{P \in \R_2[X]:P(-1)=0 \text{ et } P(1)=0\}$

Soit $P = aX^2+bX+c \in \R_2[X]$

Alors $P\in F \iff \begin{cases}a-b+c = 0 \\ a+b+c = 0\end{cases} \\ \underset{L_2 \leftarrow L_2 - L_1}{\iff}\begin{cases}a-b+c = 0 \\ 2b = 0\end{cases} \iff \begin{cases}a+c = 0 \\ b = 0\end{cases}$

$\iff \exists \lambda \in \R$ tel que $\begin{cases}a = \lambda \\ b = 0 \\ c = -\lambda\end{cases}$

$\iff \exists \lambda \in \R $ tel que $P = \lambda (X^2-1)$

Donc $F = \text{Vect}(\{(X^2-1)\})$

### Exercice 7

> Dans $\R^2$, on considère les sous-espaces $F=\text{Vect}(\{(0,1)\})$ et $G = \text{Vect}(\{(1,0)\})$. Représenter graphiquement ces sous-espaces. L'ensemble $F\cup G$ est il un sous-espace vecotriel ?

![image](https://i.ibb.co/7t8J2Tjg/aec81d6ae6ef.png)



$F\cup G$ n'est pas un sous-espace vectoriel.

__En effet__

- $(0,1)\in F$ et $F\sub F \cup G$, donc $(0,1) \in F\cup G$
- $(1,0)\in G$ et $G \sub F \cup G, $ donc $(1,0)\in F \cup G$

Mais, $1(0,1)+1(1,0) = (1,1) \notin F \cup G$

1) Soit $F,G$ deux sous-espaces vectoriels d'un $\mathbb{K}-$espace vecotriel $E$. Montrons que $F\cup G$ est un sous-espace vectoriel de $E$ si et seulement si $F \sub G$ ou $G \sub F$

* Supposons que $F\sub G$ ou $G \sub F$
    - Si $F \sub G, $ alors $F \cup G = G$ et $G$ est un sous-espace vectoriel de $E$. 
    - Si $G \sub F$, alors $F\cup G = F$ et $F$ est un sous-espace vectoriel de $E$

Dans tous les cas, $F\cup G$ est un sous-espace vectoriel de $E$. 

**Réciproquement** - Supposons que $F\cup G$ est un sous-espace vectoriel de $E$. 


Supposons que $F$ n'est pas contenu dans $G$ et $G$ n'est pas contenu dans $F$. 

Il existe donc $x\in F$ tel que $x\notin G$ et il existe $y\in G$ tel que $y\notin F.$

Puisque $x\in F $ et que $F\sub F \cup G , x \in F \cup G$ et $y\in G$  et que $G \sub F \cup G$.
- alors $y \in F \cup G$
- D'où $x+y \in F\cup G$ car $F\cup G$ est un sous-espace vectoriel. On peut alors écrire si $x+y\in F, $ alors $(x+y)-x\in F $ car $F$ est un sous-espace vectoriel, donc $y \in F$ **NON**. 
- Si $(x+y)\in G, $ alors $(x+y)-y\in G$ car $G$ est un sous-espace vectoriel. 
- Donc $x\in G$ **NON**.

On peut donc affirmer que $F\sub G$ ou $G \sub F.$

### Exercice 8
> Soit $E$ un $\mathbb{K}$-espace vectoriel. Soit $F,G$ et $H$ trois sous-espaces vectoriels de $E$
>
> $(F\cap G)+(F\cap H)\sub F\cap (G+H)$
>


Soit $E$ un $\mathbb{K}$-espace vectoriel et $F,G,H$ trois sous-espaces vectoriels de $E$. 

Par définition, il existe $y\in F\cap G$ et $z \in F \cap H$ tels que:
- $x=y+z$

D'une part, on a en particulier $y\in F$ et $z \in F$ donc $y+z\in F$ car $F$ est un sous-espace vectoriel de $E$. 

c'est-à-dire $x\in F$

- D'autre part, $y\in G$ et $z\in H$ donc $x=y+z\in G+H$

D'où $x\in F \cap (G+H)$.

Finalement, $(F\cap G )+(F\cap H) \sub F \cap (G+H)$ 


> Montrer que l'égalité n'est pas vraie en général (en exhibant un contre-exemple dans l'esape vectoriel de $\R^2$ par exemple.

Prenons $G=\text{Vect}(\{(0,1)\}), H = \text{Vect}(\{(1,0)\})$ et $F = \text{Vect}(\{(1,1)\})$

- D'une part: $F\cap G + F \cap H = \{0_{\R^2}\}+\{0_{\R^2}\}=\{0_{\R^2}\}$
- D'autre part:

$F\cap (G+H) = F\cap \R^2 = F$


### Exercice 9

> On se place dans le $\R$-espace vectoriel $\R^3$. On considère le sous-espace vectoriel $F = \{(x,y,z)\in\R^3|2x+y-z=0\}$ et le sous-espace vectoriel $G$, engendré par le vecteur $w = (2,1,-1)$
>
> Montrer que $F \cap G = \{(0,0,0)\}$

$G = \text{Vect}(\{(2,1,-1)\})$

Puisque $F\cap G$ est un sous-espace vectoriel de $\R^3$ (car intersection de sous-espaces vectoriels de $\R^3$), donc $\{0_{\R^3}\} \sub F \cap G$

Soit $(x,y,z)\in F \cap G$ puisque $(x,y,z)\in G,$ il existe $\lambda \in \R$ tel que $(x,y,z) = \lambda (2,1,-1)=(2\lambda, \lambda, -\lambda)$ et puisque $(x,y,z)\in F$. 

On a $2x+y-z = 0,$ c'est-à-dire $4\lambda + \lambda +\lambda = 0 $ soit $\lambda = 0$.

D'où $(x,y,z)=0$. $(2,1,-1) = 0_{\R^{3}}$ et on en déduit l'inclusion $F\cap G \sub \{0_{\R^3}\}$

**Finalement**, $F\cap G = \{0_{\R^3}\}$.

> Trouver deux vecteurs $u$ et $v$ qui engendrent $F$.

Soit $(x,y,z)\in \R^3. $ Alors:

$(x,y,z)\in F \iff 2x + y - z = 0$

$\iff \exists \lambda \\in \R, \exists \,mu \in \R$ tels que $\begin{cases}x = \lambda \\ y = \mu \\ z = 2\lambda+\mu \end{cases}$

D'où $(x,y,z)\in \text{Vect}(\{(1,0,2), (0,1,1)\})$


> Montrer que tout vecteur $(x,y,z)\in\R^3$ peut s'écrire comme une combinaison linéaire de $u,v$ et $w$ (en résolvant un système linéaire à paramètres). 

Soit $(x,y,z)\in\R^3.$ Montrons qu'il existe $\alpha, \beta\, \gamma$ trois réels tels que $\\(x,y,z) = \alpha\cdot u + \beta \cdot v + \gamma \cdot w$.

... On a $\begin{cases}u=(1,0,2)\\v = (0,1,1)\\w = (2,1,-1)\end{cases}$

Cela revient à montrer que le système d'inconnues $\alpha, \beta, \gamma$

$(S):\begin{cases}\beta + 2\gamma &= x \\\beta + \gamma &= y \\2\alpha + \beta - \gamma&= z \end{cases}$

Résolvons $(S)$. 

$(S)\underset{L_3\leftrightarrow L_1}{\iff}\begin{cases}2\alpha+\beta-\gamma = z \\ \beta+\alpha = y \\ \alpha + 2\gamma = x\end{cases}\\  \underset{L_2 \leftarrow L_2 - L_1}{\iff}\begin{cases}2\alpha + \beta - \gamma = z \\ -2\alpha + 2\gamma = y - z \\ \alpha + 2\gamma = x \end{cases} \\ \underset{L_3 \leftarrow L_3 - L_2}{\iff}\begin{cases} 2\alpha + \beta - \gamma = z \\ -2\alpha + 2\gamma = y - z \\  3\alpha = x-y+z \end{cases} \\ \iff \begin{cases} \beta = \frac{1}{6}(-2x+5y+z)\\ \alpha = \frac{1}{6}(2x+y-z) \\ \alpha = \frac{1}{3}(x-y+z)\end{cases}$

On peut donc affirmer que $\forall (x,y,z)\in \R^3$

$(x,y,z) = \color{green}\frac{1}{3}(x-y+z)\cdot(1,0,2)+\frac{1}{6}(-2x+5y+z)\cdot (0,1,1)\color{g}+\color{blue}\frac{1}{6}(2x+y-z)(2,1,-1)$ $(\cdots)$

- $\color{green}\in F$
- $\color{blue}\in G$
> Déduire des questions précédentes que $F$ et $G$ sont supplémentaires dans  $\R^3$

D'après $(\cdots),$ on a que $\R^3 \sub F+G$

L'autre inclusion étant immédiate (puisque la somme de deux sous-espaces vectoriels de $E$ est un sous-espace vectoriel de $E$).

On que $R^3 = F+G$

Par ailleurs, d'après $(1),$ on a que $F\cap G = \set{0_{\R^3}}$ donc $F$ et $G$ sont supplémentaires ($\oplus$).

> Que cela signifie-t-il en terme de décomposition des vecteurs de $\R^3$

Tout vecteur de $\R^3$ se décompose de manière unique comme somme d'un élément de $F$ et d'un élément de $G$. Cette décomposition étant, d'après $(\cdots)$


$\forall (x,y,z)\in\R^3, (x,y,z)=(\frac{1}{3}x-\frac{1}{3}y+\frac{1}{3}z;-\frac{1}{3}x-\frac{5}{6}y+\frac{1}{6}z;\frac{1}{3}x+\frac{1}{6}y+\frac{5}{6}z)+(\frac{2}{3}x+\frac{1}{3}y-\frac{1}{3}z;\frac{1}{3}x+\frac{1}{6}y-\frac{1}{6}z;-\frac{1}{3}x-\frac{1}{6}y+\frac{1}{6}z)$

### Exercice 10

> On se place $\R[X],$ le $\R$-espace vectoriel des polynômes à coefficients réels. On considère le sous-espace vectoriel $F=\{P\in\R[X] | P(-1)=0 \text{ et } P(1)=0\}$

Soit $F=\{P\in\R[X]:P(1)=0 \text{ et } P(-1)=0\}$

Montrons que $F$ est un sous-espace vectoriel de $\R[X]$
- $0_{\R[X]}\in F$


Soit $P\in F, Q\in F$ et $\lambda\in \R$

- Alors: d'une part $(\lambda P + Q)(1) = \lambda(P(1))+Q(1)=0$
    - $\lambda(P(1))=0$ (car $P\in F)$
    - $Q(1) = 0$ (car $Q\in F)$ 
 - Donc $\lambda P + Q \in F$

> Soit $P\in\R[X]. $ Écrire la division euclidienne de $P$ par $(X-1)(X+1)$

Soit $A\in \mathbb{K}[X], B \in \mathbb{K}[X] \backslash \{0_{\mathbb{K}[X]}\}$

Alors, il existe un unique couple $(Q, R) \in \mathbb{K}[X] \times \mathbb{K}[X]$

tel que $A = BQ+R$ avec $\deg(R)<\deg(B)$

Soit $P\in\R[X]. $ La division euclidienne de $P$ par $(X-1)(X+1)$ assure l'existence (et l'unicité) d'un couple $(Q,R) \in \mathbb{R}[X]\times \mathbb{R}[X]$

tel que $P = (X-1)(X+1)Q+R$

> En déduire que $\R[X] = F+\R_1[X]$

Soit $P\in\R[X]$. D'après (1), on sait qu'il existe $(Q,R)\in\R[X]\times\R_1[X]$ tel que $\color{orange}P=(X-1)(X+1)Q\color{g}+R$

$\color{orange}T_1 \text{ avec } \begin{cases}T(1) = 0 \\ T(-1) = 0\end{cases}, \text{ c'est-à-dire, }T\in F$

Donc $P\in F + \R_1[X]$.

D'où $\R[X]\sub F+\R_1[X]$ (car la somme de deux sev est un sev)

L'autre inclusion étant immédiate, on conclut que $\R[X]=F+\R_1[X]$

> Montrer que $\R[X] = F \oplus \R_1[X]$

Il nous suffit de montrer que $F\cap \R_1[X]\sub \{0_{\R[X]}\}$

Soit $P\in F \cap \R_1[X]. $ Puisque $P\in \R_1[X],$ il existe $a,b$ deux réels tels que $P = aX+b$ et puisque $P\in F$

on a $\begin{cases}P(1) = 0 \\ P(-1) = 0\end{cases}$, c'est-à-dire $\begin{cases}a+b = 0 \\ b-a = 0\end{cases},$ équivalent à $a=b=0$

On a bien, d'après $(3)$ et $(2),$ $\R[X] = F\oplus \R_1[X]$

> En guise d'exemple, déterminer la décomposition du polynôme $X^3+X+1$ sur $\R_1[X]$

Soit $P=X^3+X+1\in\R[X]$

Effectuons la division euclidienne par $X^2-1$ (on la pose)

D'où $X^3+X+1 = \color{green}(X-1)(X+1)X\color{g}+(2X+1)$
- $\color{green}\in F$
- $\in \R_1[X]$

### Exercice 11

> On se place dans $\mathbb{R}^\N$, le $\R$-espace vectoriel des suites réelles. On note respectivement $\mathscr{D}, \mathscr{C}$ et $\mathscr{D}_0$ les sous-espaces vectoriels des suites convergentes, des suites constantes et des suites convergentes de limite nulle. Montrer que $\mathscr{D} = \mathscr{C} \oplus \mathscr{D}_0$
 
Soit $(u_n)_{n\in\N}\in\mathscr{C}\cap \mathscr{D}_0$

Puisque $(u_n)_{n\in\N}\in\mathscr{C},$ alors il existe $l\in\R$ tel que pour tout $n\in\N, u_n = l$

D'où $u_n\underset{n\to+\infty}{\longrightarrow}l$

Mais $(u_n)_{n\in\N}\in\mathscr{D}_0,$ donc $u_n \underset{n\to+\infty}{\to}0$

Par unicité de la limite, $l=0$.

On a donc, pour tout $n\in\N, u_n = 0$ c'est-à-dire $(u_n)_{n\in\N}=0_{\R^{\N}}$ et $\mathscr{C}\cap \mathscr{D}_0 \sub \{0_{\R^\N}\}$

Reste à montrer que $\mathscr{D} \sub \mathscr{C} + \mathscr{D}_0$

Soit $(u_n)_{n\in\N}\in \mathscr{D},$ de limite notée $l$. 

Posons $(v_n)_{n\in\N}=(l)_{n\in\N}$ et $(w_n)_{n\in\N}=(u_n-l)_{n\in\N}$

Alors, puisque pour tout $n\in\N, u_n = v_n +w_n, $ on a $(u_n)_{n\in\N}=(v_n)_{n\in\N}+(w_n)_{n\in\N}$

avec $(v_n)_{n\in\N}\in C$ et $(w_n)_{n\in\N}\in\mathscr{D}_0$

D'où $(u_n)_{n\in\N} \in C+\mathscr{D}_0$

c'est-à-dire $\mathscr{D}\sub\mathscr{C}+\mathscr{D}_0$

Finalement, on a bien montré que $\mathscr{D}=\mathscr{C}\oplus \mathscr{D}_0$

---

