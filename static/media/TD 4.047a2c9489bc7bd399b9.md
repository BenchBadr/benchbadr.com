
1,2,7,3
## Exercice 1

> $\mathcal{F} = ((1,0,3), (-1, 1, 2))$
$\newcommand{\sub}{\subset}$
$\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}$
$\newcommand{\card}{\text{card}}$
Puisque $\card(\mathcal{F_1}) = 2 ≠ \dim(\R^3)$  alors $\mathcal{F}$ n'est as une base de $\R^3$, 

> $\mathcal{F}_4 = ((1, -1, 2), (0,-1, -1), (1,-2, 1), (0,1,0))$

de même pour $\mathcal{F}_4$ car $\card(\mathcal{F}_4) = 4$

> $\mathcal{F_4} = \{(-2, 0, 2), (1, -1, 1), (0, 1, -2)\}$

Remarquons que  $\frac{1}2(-2, 0, 2)+1(1,-1, 1) + 1(0,1,-2) = 0_{\R^3}$
- Cette famille est liée, elle n'est donc pas une base.
  
> $\mathcal{F_3} = \{(1, 0, -2), (0,0,1), (-1, 1, 3)\}$

Soit $a,b,c$ 3 réels tels que:
- $a(1, 0, -2)+b(0,0,1)+c(-1, 1, 3) = 0_{\R^3}$
c'est-à-dire tels que: $(S):\cases{a-c = 0 \\ c=.0 \\ -2a+b+3c = 0}$
Or $(S):\cases{a = 0 \\ b = 0 \\ c = 0}$
Donc la famille est libre et puisque $\card(\mathcal{F}) = 3 = \dim(\R^3)$
alors c'est une base de $\R^3$.

## Exercice 2

> $\mathcal{F} = (X^2+X+1, X+1)$

On a $\dim(\R_2[X]) = 3$
Puisque $\card(\mathcal{F}) ≠ 3$ et $\card(\mathcal{F}) ≠ 3$
alors $\mathcal{F}_1$ et $\mathcal{F_4}$ ne sont pas des bases de $\R_2[X]$

> $\mathcal{F_2} = (X^2-1, X+1, 2)$

On a $\card(\mathcal{F}_2) = 3 = \dim(\R_2[X])$
donc puisque $\mathcal{F}_3$ est libre (car c'est une famille de polynômes non-nuls étagée en degrés) c'est une base de $\R_2[X]$.

> $\mathcal{F_3} = (X^2, X^2-X, X-1)$

Soit $a,b,c$ trois réels tels que:
- $X^2+b(X^2-X)+c(X-1) = 0_{\R_2[X]}$
c'est-à-dire tels que $(a+b)X^2+(c-b)X-c = 0_{\R_2[X]}$
soit $\cases{a+b = 0 \\ c-b = 0 \\ -c = 0}$ qui est équivalent à $a=b=c=0$
La famille $\mathcal{F}_3$ est donc libre et puisque $\card(\mathcal{F_3}) = 3 = \dim(\R_2[X])$
alors c'est une base de $\R_2[X]$

## Exercice 7 



> Soi(pas de en)t $H$ un sous-espace vectoriel de dimension $n-1$ d'un $\mathbb{K}$-espace vectoriel $E$ de dimension $n$ et soit $v \in E \backslash H$
> Posons $D = \text{Vect}(\{v\})$

$\dim(H) + \dim(D) = n$
Tout d'abord, $v$ est génératrice de $D$ et c'est une famille libre car c'est une famille à un seul élément et il est non-nul. (car si $v = 0_E$ alors $v \in H$, non) donc c'est une base de $D$ et $\dim(D) = \card(\{v\}) = 1$
	D'où $\dim(H)+\dim(D) = n = \dim(E)$
Pour montrer que $E = D\oplus H$, il suffit alors de montrer, au choix que $E \subset D+H$ ou que $D \cap H \subset \{0_E\}$

Soit $x \in D \cap H$
	Puisque, en particulier $x \in D,$ il existe $\alpha \in \mathbb{K}$ tel que $x = \alpha \cdot v$
	Supposons $\alpha ≠ 0_{\mathbb{K}}$ alors $v = \frac{1}\alpha \cdot x$

Or, $x \in H$ et $H$ est un sous-espace vectoriel de $E$ donc $\frac{1}\alpha \cdot x \in H$
c'est-à-dire $v \in H,$ non!
Donc $\alpha = 0_\mathbb{K}$ c'est-à-dire $x = 0_E$

D'où l'inclusion $D\cap H \sub \{0_E\}$
qui nous permet de conclure que $D\oplus H = E$


![[Pasted image 20250220170509.png]]

Dans $\R^4$, soit les sous-espaces vectoriels:

$H_1 = \{(x,y,z,t) \in \R^4:x+y+z+t = 0\}$
$H_2 = \{(x,y,z,t) \in \R^4 : x-y+z-t = 0\}$

Soit $(x,y,z,t) \in \R^4$. Alors:

$\newcommand{\ifff}[1]{\underset{#1}{\iff}}$

alors $(x,y,z,t) \in H_1 \cap H_2 \iff \cases{x+y+z+t = 0 \\ x-y+z-t = 0}$
					$\ifff{L_2 \leftarrow L_2+L_1} \cases{x+y+z+t = 0 \\ 2x+2z = 0}$
					$\iff \cases{y+t =0 \\ x+z = 0 }$
					$\iff \exists (\lambda, \mu) \in \R^2,$ tels que $\cases{y = \lambda \\ t = -\lambda \\ x= \mu \\ z = -\mu}$
					d'où $H_1 \cap H_2 = \text{Vect}(\{(0,1,0,-1), (1,0,-1,0)\})$ 
					$\mathcal{B} = \{(0,1,0,-1), (1,0,-1,0)\}$
					$\mathcal{B}$ est génératrice de $H_1 \cap H_2$

De plus, c'est une famille libre. En effet, soit $a,b$ deux réels tels que:
- $a\cdot(1,0,-1,0)+b \cdot (0,1,0,-1)=0_{\R^4}$
- C'est-à-dire que: $\cases{a = 0 \\ b = 0 \\ -a  = 0 \\ -b = 0}$
- D'où $a=b=0$
- D'où $\mathcal{B}$ est libre. 
- $\mathcal{B}$ est libre et génératrice de $H_1\cap H_2$ donc elle est une base. 
Enfin $\dim(H_1 \cap H_2) = \card(\mathcal{B}) = 2$

> Question 2

$\mathcal{B} = \{(1,0,-1, 0), (0,1,0,-1)\}$ 
---
*Brouillon*

$H_1 \cap H_2 \sub H_1 \sub \R^4$
Donc $\dim(H_1) \in \{2,3,4\}$

---

On a les inclusions suivantes pour nos sous-espaces vectoriels:
- $H_1 \cap H_2 \sub H_1 \sub \R^4$
- D'où $\dim(H_1) \in \{2,3,4\}$
D'une part, 
- $H_1 \neq \R^4$ car $(1,0,0,0) \in \R^4$ mais $(1,0,0,0) \notin H_1$
	- d'où $\dim(H_1) ≠ 4$
D'autre part,
- $H_1 \cap H_2 ≠ H_1$ car, on aurait sinon $H_1 \sub H_2$
- ce qui n'est pas le cas, puisque $(1,-1,0,0) \in H_1$ mais $(1,-1,0,0) \notin H_2$
- d'où $\dim(H_1)≠2$
Par conséquent, $\dim(H_1) = 3$

> Question 3

On note:
- $u = (1,0,-1, 0)$
- $v = (0,1,0,-1)$
Tout vecteur de $H_1 \cap c H_2$ va convenir.
Prenons $w = (1, -1, 0, 0) \in H_1 \cap c H_2$
- Alors $\{u,v,w\}$ est une famille d'éléments de $H_1$ et $\card(B_1) = 3 = \dim(H_1)$

Donc, pour vérifier que c'est une base de $H_1$, il suffit de montrer que c'est une famille libre. 
Soit $a,b,c$ 3 réels tels que $a\cdot u + b \cdot v + c \cdot w = 0_{\R^4}$
C'est-à-dire tels que:
$(S):\cases{a+c = 0 \\ b- c = 0 \\ -a=0 \\ -b = 0}  \iff a=b=c=0$
## Exercice 5

> Dans $\R^4,$ soit les 2 sous-espaces vectoriels $F = \Vect(\{(-3, 1, -2, 5)\})$ et $G = \{(x,y,z,t) \in \R^4 : x+3y-z-t=0\}$
> Déterminer une base de F. En déduire sa dimension.

Par définition, la famille $\{(-3, 1, -2, 5)\}$ est génératrice de $F$ et c'est une famille libre car c'est une famille à un seul élément et il est non-nul.

> Déterminer une base de $G$. En déduire sa dimension

Soit $(x,y,z,t) \in \R^4$
Alors $(x,y,z,t) \in G \iff x+3y-z-t = 0$
$\iff \exists \alpha \in \R, \beta \in \R, \gamma \in \R$ tels que $\cases{x = -3\alpha+\beta+\gamma\\y = \alpha \\z = \beta \\ t = \gamma}$
$\iff \exists \alpha \in \R, \exists \beta \in \R, \exists \gamma \in \R$ tels que $(x,y,z,t) = \alpha(-3, 1, 0, 0)+\beta(1,0,1,0)+\gamma(1, 0,0,1)$

D'où $G = \Vect(\underset{\mathcal{F}}{ \underbrace{{\{(-3, 1, 0,0), (1,0,1,0), (1,0,0,1)\}}}})$
On peut donc affirmer que $\mathcal{F}$ est génératrice de $G$. Voyons si, de plus, $\mathcal{F}$ est libre.

Soit $\alpha, \beta, \gamma$ trois réels tels que:
- $\alpha(-3, 1,0,0)+\beta(1,0,1,0)+\gamma(1,0,0,1) = 0_{\R^4}$,
c'est-à-dire tels que $(S):\cases{-3\alpha+\beta+\gamma = 0 \\ \alpha = 0 \\ \beta = 0\\ \gamma = 0}$
Et $(S) \iff \cases{\alpha = 0 \\ \beta = 0 \\ \gamma = 0}$
La famille $\mathcal{F}$ est donc libre et c'est alors une base de $G$. 
D'où $\dim(G) = \card(\mathcal{F})$.
> Montrer que $F\cap G = \{(0,0,0,0)\} = \{0_{\R^4}\}$

Il suffit de montrer l'inclusion $F\cap G \cup \{0_{\R^4}\}$
l'autre inclusion étant immédiate puisque $F\cap G$ est un sous-espace vectoriel. 
Soit $(x,y,z,t) \in F \cap G$
Puisque, en particulier, $(x,y,z,t) \in F$, il existe un $\alpha \in \R$ tel que:
- $(x,y,z,t) = \alpha(-3, 1, -2, 5) = (-3\alpha, \alpha, -2\alpha, 5\alpha)$
- Par ailleurs, $(x,y,z,t) \in G$ donc:
	- $x+3y-z-t = 0$, c'est-à-dire $-3\alpha = 0,$ soit $\alpha = 0$
	- D'où $(x,y,z,t) = 0_{\R^4}$ donc on a bien prouvé que $F \cap G = \{0_{\R^4}\}$

> Montrer que $F \oplus G = \R^4$

Puisqu'on a d'une part, 
- $\dim(F) + \dim(G) = 4 = \dim(\R^4)$ 
et, d'autre part que 
- $F \cap G = \{0_{\R^4}\}$ 
Alors on peut affirmer que $F \oplus G = \R^4$

---
> Question subsidiaire
> Décomposer le vecteur $(1,0,1,1)$ comme somme d'un élément de $F$ et d'un élément de $G$.

Cherchons l'unique quadruplet $(\alpha, \beta, \gamma, \delta) \in \R^4$ tel que:
$(1,0,1,1) = \alpha(-3, 1,-2, 5) + \beta(-3, 1, 0, 0)+ \gamma(1,0,1,0)+\delta(1,0,0,1)$
Autrement dit, résolvons le système d'inconnues $\alpha, \beta, \gamma, \delta$
$(S): \cases{-3\alpha -3\beta + \gamma + \delta = 1 \\ \alpha + \beta = 0 \\ -2\alpha + \gamma = 1 \\ 5\alpha + \delta = 1}$
$\ifff{L_4 \leftarrow L_4 - L_1} \cases{-3\alpha - 3\beta+ \gamma + \delta = 1 \\ \alpha + \beta = 0 \\ -2\alpha + \gamma = 1 \\ 8\alpha + 3\beta - \gamma = 0}$
$\ifff{L_4 \leftrightarrow L_3}\cases{-3\alpha - 3\beta + \gamma + \delta = 1 \\ 8\alpha + 3\beta - \gamma = 0 \\ -2\alpha + \gamma = 1 \\ \alpha + \beta = 0}$
$\ifff{L_3 \leftarrow L_3 + L_2} \cases{-3\alpha -3\beta + \gamma + \delta = 1 \\ 8\alpha + 3\beta - \gamma = 0 \\ -6\alpha + 3\beta = 1 \\ \alpha + \beta = 0}$
$\ifff{L_4 \leftrightarrow L_3} \cases{-3\alpha -3\beta + \gamma + \delta = 1 \\ 8\alpha + 3\beta - \gamma = 0 \\ \alpha + \beta = 0 \\  -6\alpha + 3\beta = 1}$
$\ifff{L_4 \leftrightarrow L_4 - 3L_3}\cases{-3\alpha -3\beta + \gamma + \delta = 1 \\ 8\alpha + 3\beta - \gamma = 0 \\ \alpha + \beta = 0 \\  -3\alpha = 1}$
$\iff\cases{\delta = \frac{8}3\\ \gamma = \frac{5}{3} \\ \beta = \frac{1}3 \\  \alpha = -\frac{1}{3}}$
## Exercice 6

> On considère $H$ le sous-espae vectoriel de $\R_3[X]$ défini par $H = \{P \in \R_3[X] | P(1) = 0\}$
> Déterminer une base de $H$. En déduire sa dimension.

Soit  $P = aX^3+bX^2+cX+d \in \R_3[X]$

Alors $P \in H \iff P(1) = 0$
            $\iff \exists \alpha \in \R, \exists \beta \in \R$ tels que $\cases{a = \alpha \\ b = \beta \\ c = \gamma \\ d = -\alpha - \beta - \gamma}$
			$\iff \exists \alpha \in \R, \exists \beta \in \R, \exists \delta \in \R$ tels que $P = \alpha X^3+\beta X^2 + \gamma X - \alpha - \beta - \gamma$
			$\iff P = \alpha(X^3-1)+\beta(X^2-1)+\gamma(X-1)$
D'où $H = \Vect(X^3 - 1, X^2-1, X-1)$
La famille est donc, par définition génératrice de $H$. 
Par ailleurs, c'est aussi une famille libre car car ce sont des polynômes non-nuls étagés en degrés. 
$\mathcal{F}$ est donc une base de $H$.
- D'où $\dim(H) = \card(\mathcal{F}) = 3$

> Soit $F = \Vect(X^3+1)$. Montrer que $F \oplus H = \R_3[X]$

La famille $\{X^3+1\}$ est génératrice de $F$ et c'est une famille libre car c'est une famille à un seul élément et il est non-nul.

C'est donc une base de $F$ et $\dim(F) = \card(\{X^3+1\})=1$

On a donc:
- $\dim(H) + \dim(F) = 4 = \dim(\R_3[X])$
- donc pour montrer que $H\oplus H,$ il suffit que $F\cap H \subset \{0_{\R^3[X]}\}$
	- soit $P = aX^3+bX^2+cX+d \in H \cap F$
En particulier, $P\in F$
- Il existe $a \in \R$ tel que $P = \alpha(X^3+1) = \alpha X^3 + \alpha$ 
- Et $P \in H$ donc $P(1)=0$
- $P(1) = \alpha \cdot 1 + \alpha = 2\alpha = 0 \iff \alpha = 0$ 
- donc $P = 0_{\R_3[X]}$
Donc $H \cap F \subset \{0_{\R_3[X]}\}$

# Exercice 4

> Soit $E$ un espace vectoriel de dimension $4$. Soit $F$ un sous-espace vectoriel de $E$. Si $\dim F = 0,$ que peut-on dire de $F$? Si $\dim F = 4,$ que peut-on dire de $F$.

Si $\dim(F)= 0,$ alors $F = \{0_E\}$ et si $\dim(F) = 4,$ alors $F=E$.

> Soit $E$ un espace vectoriel de dimension $3$. Soit $F$ et $G$ deux sous-espaces vectoriels de dimension $2$. Quelles dimensions peuvent avoir $F \cap G$ et $F+G$ ? Interpréter géométriquement dans le cas où $E = \R^3$

Soit $E$ de dimension $3$ et $F, G$ deux sous-espaces vectoriels de $E$ chacun de dimension $2$

- $\dim(F+G)+\dim(F\cap G) = \dim(F) + \dim(G)$

On a ici $\dim(F+G)+\dim(F\cap G)=4$
De plus, $F+G$ est un sous-espace vectoriel de $E$ donc $\dim(F+G)≤3$

> Soit $E$ un espace vectoriel de dimension $5$. Soit $F$ et $G$ deux sous-espaces vectoriels de dimensions respectives $3$ et $4$. Quelles dimensions peuvent avoir $F \cap G$ et $F+G$.

Les seules possibilités sont donc:
- $\dim(F+G) = 3$ et $\dim(F\cap G) = 1$
- $\dim(F+G) = 2$ et $\dim(F\cap G) = 2$
$F$ et $G$ sont deux plans différents et non-parallèles qui dont l'intersection est une droite.

> Soit $E$ un espace vectoriel de dimension $4$. Soit $F$ et $G$ deux sous-espaces vectoriels de dimensions respectives $1$ et $3$. Si $F \cap G$ est égal au sous-espace nul, que peut-on dire de $F+G$.

# Exercice 8

> Déterminer le rang des familles suivantes du $\R$-espace vectoriel $\R^3$
>
> $\mathcal{F}_1 = \{(-1, 1, -1), (1, 1, 1)\}$

$\mathcal{F}$ est génératrice de $\text{Vect}({F})$ et c'est une famille libre. 
**En effet**, soit $a,b$ deux réels tels que:
- $a \cdot (-1, 1, -1)+b(1,1,1) = 0_{\R^3}$
c'est-à-dire, tels que: $\cases{-a+b = 0 \\ a+b = 0 \\ -a + b = 0}$
et $(S) \iff \cases{a = 0 \\ b = 0}$
$\mathcal{F}$ est donc une base de $\text{Vect}(\mathcal{F}),$ donc $\dim(\text{Vect}(\mathcal{F})) = \card(\mathcal{F}) = 2$
$\newcommand{\rg}{\text{rg}}\newcommand{\Vect}{\text{Vect}}$
$\rg(\mathcal{F}) = 2$

> $F_2 = \{(-1, 1 , -1), (1, -1, 1)\}$

Dans $\R^3$.
- Soit $\mathcal{F} = \{(-1, 1, -1), (1,-1, 1)\}$
On a $\Vect(\mathcal{F}) = \Vect(\{(1, -1, 1)\})$
*génératrice de $\Vect(\mathcal{F})$ et libre car famille à un seul élément et il est non nul donc c'est libre. *
$\rg(\mathcal{F}) = 1$

> $\mathcal{F}_3 = \{(1, 0, -2), (0,0,1), (-1, 1, 3)\}$

$\mathcal{F}$ est génératrice de $\Vect(\mathcal{F})$
Soit $a,b,c$ $3$ réels tels que:
- $a\cdot (1, 0, -2) + b(0,0,1) + c(-1, 1, 3) = 0_{\R^3}$ 
c'est-à-dire, tels que $(S):\cases{a-c = 0 \\ c = 0 \\ -2a+b+3c = 0}$
et $(S) \iff \cases{a = 0 \\ c = 0 \\ b = 0}$
Donc $\mathcal{F}$ est libre, c'est alors une base de $\Vect({\mathcal{F}})$. Donc $\rg(\mathcal{F}) = \dim(\Vect(\mathcal{F})) = 3$.

> $F_4 = \{(3,0,3), (0,1,-1), (1,1,0), (-1, 0, -1)\}$

Dans $\R^3,$
- Soit $\mathcal{F} = \{(3,0,3), (0,1,-1), (1,1,0), (-1, 0, -1)\}$
$\Vect(\mathcal{F}) = \Vect(\{(0,1,-1), (1,1,0), (-1, 0, -1)\})$
... car $(3,0,3) = -3(-1,0,-1)$
$= \Vect(\{(0,1,-1), (1,1,0)\})$
... car $-1(-1,0,-1) = -1(1,1,0)+1(0,1,1)$

---

# Le soit

$\dim(F)+\dim(G) = 4 = \dim(\R_3[X])$
Au choix,
- $F \cap G \sub \{0_{\R_3[X]}\}$
- $\R_3[X] \subset F+G$

$aX^3+bX^2+bX+d = \alpha(X^3-3X-2)+\beta(X^2-2X)+\gamma X + \delta 1$
