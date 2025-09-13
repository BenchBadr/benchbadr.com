---
lang: fr
date: 18/02/2025
---

$\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\card}{\text{card}}\newcommand{\R}{\mathbb{R}}\newcommand{\N}{\mathbb{N}}$
$\newcommand{\K}{\mathbb{K}}\newcommand{\Im}{\text{Im}}\newcommand{\sub}{\subset}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}$
$\newcommand{\Vect}{\text{Vect}}$
Méthode au choix
- $\forall x \in E, \forall y \in E, \forall \lambda \in \K: f(\lambda x + y) = \lambda f(x)+f(y)$
- $\forall x \in E, \forall y \in E, \forall \lambda \in \K, \forall \mu \in \K, f(\lambda x + \mu y) = \lambda f(x) + \mu f(x)$
- $\forall x \in E, \forall \lambda \in \K, f(\lambda x) = \lambda f(x)$ et $\forall x \in E, \forall y \in E, f(x+y) = f(x) + f(y)$


# Exercice 1

> Pour chacune des applications suivantes, dire si elle est linéaire. Justifier
> 1. L'application $f:\R^3 \to \R^3$ définie par $f(x,y,z) = (x+y, 0, y+z)$

Soit $f:\R^3 \to \R^3$
- $(x,y,z) \mapsto (x+y, 0, y+z)$

Soit $(x,y,z) \in \R^3, (x',y',z') \in \R^3$ et soit $\lambda \in \R$
- Alors $f(\lambda(x,y,z)+(x',y',z'))=f(\lambda x + x', \lambda y + y', \lambda z + z')$ 
- $= ((\lambda x+x')+(\lambda y + y'), 0, (\lambda y + y')+(\lambda z + z'))$
- $= (\lambda (x+y) + (x', y'), 0, \lambda(y+z)+(y'+z'))$
- $= \lambda(x+y, 0, y+z)+(x'+y', 0, y'+z')$
- $= \lambda f((x,y,z)+f(x',y', z'))$

Donc $f$ est linéaire

> L'application $f:\R^3 \to \R^3$ définie par $f(x,y,z) = (x+1, y+1, z+1)$

Soit $f:\R^3 \to \R^3$
- $(x,y,z) \mapsto (x+1, y+1, z+1)$
On a $f(0_{\R^3}) = (1,1,1) ≠ 0_{\R^3}$ donc $f$ n'est pas linéaire

> L'application $f:\R[X] \to \R$ définie par $f(P) = P(1)$

*morphisme d'évaluation*

D'une part, 
- $0_{\R[X]} \in f$
D'autre part, 
- Soit $P \in \R[X], Q \in \R[X]$
	- Alors $f(\lambda P + Q) = (\lambda P + Q)(1) = \lambda P(1) + Q(1)$
	- $= \lambda f(P) + f(Q)$ donc $f$ est linéaire.

> L'application $f:\R[X] \to \R$ qui à un polynôme associe son coefficient dominant

On a $f(X^2)=1$ et $f(X)=1$
- donc $f(X^2)+f(X) = 2 ≠ 1 = f(X^2+X)$

> L'application $f:\R[X] \to \R[X]$ définie par $f(P(X)) = X + P(X)$

On a $f(0_{\R[X]}) = X ≠ 0_{\R[X]}$
Donc $f$ n'est pas une application linéaire. 

> L'application $f:\mathcal{C}^0([0,1])\to\R$ définie par $f(u) = \int^1_0e^xu(x)dx$

Soit $u \in \mathcal{C}^0([0,1], \R), v \in \mathcal{C}^0([0,1], \R)$ et $\lambda \in \R$
- Alors $\lambda u + v \in \mathcal{C}^0([0,1], \R)$ et
- $f(\lambda u + v) = \int^1_0e^x(\lambda u + v)(x) dx = \int^1_0e^x(\lambda u(x) + v(x))dx = \int^1_0(\lambda e^xu(x)+e^xv(x))dx$
- Par linéarité de l'intégrale
- $= \int^1_0e^xu(x)dx+\int^1_0e^xv(x)dx = \lambda f(u) + f(v)$ donc $f$ est linéaire.

> L'application $f$ qui à une fonction dérivable associe sa dérivée

linéarité de la dérivée

> L'application $f$ qui à une suite convergente associe sa limite.

# Exercice 2

> Soit l'application linéaire $f:\R^3 \to \R^2$ définie par $f(x,y,z) = (x+y, y+z)$

Soit $f:\R^3 \to \R^2$
- $(x,y,z) \mapsto (x+y, y+z)$

Mq $f$ est linéaire
- D'une part, $f(0_{\R^3}) = (0+0, 0+0) = 0_{\R^2}$
- D'autre part, soit $(x,y,z) \in \R^3$ et $(x', y', z')\in \R^3$
	- $f(\lambda(x,y,z)+(x',y',z')) = f((\lambda x + x', \lambda y + y', \lambda z + z'))$
	- $= ((\lambda x + x')+ (\lambda y + y'), (\lambda z + z'))$ 
	- $= (x+y, y+z) = (x'+y', y'+z') = \lambda f((x,y,z))+f((x',y',z'))$
- Donc $f$ est linéaire.

> 1. Déterminer $\ker f$ et $\Im f$

Étudions le noyau,
Soit $(x,y,z) \in \R^3$ alors $(x,y,z) \in \ker(f)$
- $\iff f((x,y,z)) = 0_{\R^2}$
- $\iff \cases{x+y = 0 \\ y+z = 0}$
- $\iff \exists \lambda \in \R,$ tel que $\cases{x = -\lambda \\ y = \lambda \\ z = -\lambda}$
- $\iff \exists \lambda \in \R$ tel que $(x,y,z) = \lambda(-1, 1, -1)$

Donc $\ker(f) = \Vect(\{-1, 1, -1\})$

À ce stade on peut dire que $f$ n'est pas injective. 

> 2. L'applicaion $f$ est-elle injective ? surjective ? bijective

Par ailleurs, $\{(-1, 1, -1)\}$ est génératrice de $\ker f$ et c'est de plus une famille libre car c'est une famille à un seul élément non-nul.

**Conclusion** : Cette famille est une base de $\ker(f)$

*Formule du rang*
$\dim(E) = \dim(\ker(f)) + \dim(\Im f)$

Sans formule du rang:
- $\{(1,0,0),(0,1,0),(0,0,1)\}$ est une base de $\R^3$
- Donc, (cours) $\{f((1,0,0)), f((0,1,0)),f((0,0,1))\}$ est génératrice de $\Im f$
	- c'est-à-dire, $\Im f = \Vect(\{(1,0),(1,1),(0,1)\})$
	- $= \Vect(\{(1,0), (0,1)\}) = \R^2$
	- L'application est donc surjective (et non bijective, car il s'agit d'une application linéaire entre espaces vectoriels de dimension différente).
Avec la formule du rang,
- On a $\dim(\Im f) = \dim(\R^3) - \dim(\ker(f))$
- $\dim(\Im f) = 2$
- Or, $\Im(f) \sub \R^2$ donc $\Im f = \R^2$ par égalité des dimensions.
  
# Exercice 3

> Soit l'application linéaire $f:\R^2 \to \R^3$ définie par $f(x,y) = (x,y,x+y)$

**Étudions le noyau**
Soit $(x,y) \in \R^3$ tels que $(x,y) \in \ker(f)$
- $\iff f((x,y)) = 0_{\R^3}$
- $\iff \cases{x=0 \\ y = 0 \\ x+y = 0} \iff x = y = 0$
$\ker(f) = \{0_{\R^2}\}$
Donc est injective par le cours.

**Étudions l'image**

*D'après la formule du rang*, $\dim(\Im(f)) = \dim(\R^2) - \dim(\ker(f)) = 2$

**Par ailleurs**, on sait d'après le cours que:
- $\{f((1,0)), f((0,1))\}$ est génératrice de $\Im f,$ c'est-à-dire, $\Im(f) = \Vect(\{(1,0,1), (0,1,1)\})$
- C'en est donc une base

**Bilan**
$f$ est injective non surjective. (à fortiori non bijectif)

# Exercice 4

> Soit l'application $f:\R_3[X] \to \R_3[X]$ définie par $f(P(X)) = P(X) + P(-X)$

PS : c'est un endomorphisme ici 

**Montrons qu'il s'agit d'une application linéaire**
Soit $f:\R_3[X] \to \R_3[X]$
- $P \mapsto P(X) + P(-X)$
D'une part,
- Soit $P \in \R_3[X], Q \in \R_3[X]$ et $\lambda \in \R$ alors:
	- $f(\lambda P + Q) = (\lambda P + Q)(X)+(\lambda P+Q)(-X)$
	- $= \lambda P(X) + Q(X) + \lambda P(-X)+Q(-X)$
	- $= \lambda(P(X)+P(-X))+(Q(X)+Q(-X))$
	- $= \lambda f(P) + f(Q)$

**Étudions le noyau**
Soit $P = aX^3+bX^2+cX+d$ alors:
- $P \in \ker(f) \iff 2bX^2+2d = 0_{\R^3[X]}$
			$\iff \cases{2b = 0 \\ 2d = 0}$
			$\iff \exists \alpha \in \R, \beta \in \R$ tels que $\cases{a = \alpha \\ b = 0 \\ c = \beta \\ d = 0 }$
			$\iff \exists \alpha \in \R, \beta \in \R$ tels que $P=\alpha X^3+\beta X$
Donc $\ker(f) = \Vect(\{X^3, X\})$
Donc $\{X^3, X\}$ est génératrice de $\ker(f)$ et, puisque c'est une famille libre car famille de polynômes non-nuls étagée en degrés, c'est une base. 

De plus,
$\dim(\ker(f)) = \card(\{X^3, X\}) = 2$

**Étudions l'image**
De plus, $f$ n'est pas injective (car le noyau n'est pas réduit à $\{0_E\}$)
et puisque c'est un endomorphisme en dimension finie, il n'est pas surjectif.

On sait aussi, d'après la formule du rang que:
- $\dim(\Im(f)) = \dim(\R_3[X])- \dim(\ker(f)) = 4-2 = 2$

Par ailleurs, on sait d'après le cours que $\Im(f) = \Vect(\{f(1), f(X), f(X^2), f(X^2)\})$
$\phantom{\Im(f)} = \Vect(\{2, 0_{\R_3[X]}, 2X^2, 0_{\R_3[X]}\})$
Et c'est une base de l'image.

# Exercice 6

> Soit l'application $\varphi : \mathcal{C}^2(\R, \R) \to \mathcal{C}^0(\R, \R)$ définie par:
> $\varphi(f) = f''-3f'+2f$
> Montrer que $\varphi$ est une application linéaire.
> Déterminer $\ker(\varphi)$

Soit $\lambda \in \R,$ et $f \in \mathcal{C}^2(\R, \R), g\in \mathcal{C}^2(\R, \R)$
- Alors, $\lambda f + g \in \mathcal{C}^2(\R, \R)$ et 
	- $\varphi(\lambda f + g) = (\lambda f + g)'' - 3(\lambda f + g)' + 2(\lambda f + g)$
	- D'après la linéarité de la dérivation
	- $= \lambda f '' + g '' - 3 \lambda f ' - 3g' + 2\lambda f + 2\lambda f + 2g$
	- $= \lambda(f'' - 3f'+2f)+(g''-3g'+2g)$
	- $= \lambda \varphi f + \varphi g$
- Donc $\varphi$ est une application linéaire

> Déterminer $\ker(\varphi)$

**« Rappel »** 
Soit $a,b,c$ 3 réels avec $a ≠ 0$ et l'équation différentielle du 2nd ordre, 
- $(ED) : ay''+by'+cy=0$
Notons, 
- $(EQ) : ax^2+bx+c = 0$ 
l'équation caractéristique  associée, et $\Delta$ son discriminant. 
Si $\Delta > 0$
- $r_1$ et $r_2$ ($\frac{-b±4ac}{2}$)
- et les solutions de $(ED)$ sont les fonctions de la forme:
	- $t \mapsto \lambda e^{r_1t}+\mu^{r_2t}$
	- avec $\lambda, \mu$ deux réels
- si $\Delta = 0,$ alors $(EQ)$ a une racine double $r_0$ et les solutions de $(ED)$ sont les fonctions de la forme 
	- $t \mapsto (\lambda t + \mu)e^{r_0t}$
	- avec $\lambda, \mu$ 2 réels
- si $\Delta < 0,$ alors $(EQ)$ a deux racine réelles complexes conjuguées $\alpha ± i\beta$ et les solutions de $(ED)$ sont les fonctions de la forme
	- $t \mapsto \lambda e^{2t}\cos(\beta t )+\mu^{\alpha t}\sin(\beta t)$ 
	- avec $\lambda, \mu$ 2 réels

Soit $f \in \mathcal{C}^2(\R, \R)$.
Alors $f \in \ker(f) \iff f'' - 3f' + 2f = 0$
			   $\iff f$ est solution de l'équation différentielle $y''-3y'+2y = 0$
Ici, l'équation caractéristique associée est $x^2-3x+2 = 0$ dont les racines sont $1$ et $2$
Donc les solutions de l'équation différentielle du second ordre:
- $y''-3y'+2y = 0$ sont les fonctions de la forme
	- $t \mapsto \lambda e^{t} + \mu e^{2t}, \lambda, \mu$ deux réels
Donc $\ker(\phi) = \Vect(\{t \mapsto e^t, t \mapsto e^{2t}\})$

# Exercice 7
=
> Soit $f$ l'application linéaire de $\R^2$ dans $\R^3$ définie par:
> $f(1,0) = (1,2,1)$ et $f(0,1) = (-1, 1, 0)$
> Justifier qu'une telle application existe et est unique.

Puisque ${(1,0), (0,1)}$ est une base de $\R^2$ alors il existe une unique application linéaire $f:\R^2 \to \R^2$.  
- telle que $\cases{f(1,0) = (1,2,1) \\ f(0,1) = (-1, 1, 0)}$

> Déterminer l'expression de $f(x,y)$ pour des réels $x,y$ quelconques. 

Par ailleurs, pour tout $(x,y) \in \R^2$, on a:
- $f(x,y) = f(x(1,0)+y(0,1))$
- $\phantom{f(x+y)} = xf'(1,0)+yf(0,1)$
- $\phantom{f(x,y)} = (x,2x, x)+(-y,y, 0)$
- $f(x,y) = (x-y, 2x+y, x)$

# Exercice 8

> Soit $f$ l'application linéaire de $\R^3$ dans $\R^2$ définie par:
> $f(1,0,0) = (1,1)$
> $f(1,1,0) = (0,1)$
> $f(1,1,1) = (-1, 0)$
> Mêmes questions que le 7

Pour justifier qu'il existe une unique application linéaire de $\R^3$ dans $\R^2$ telle que: $\cases{f(1,0,0) = (1,1) \\ f(1,1,0) = (0,1) \\ f(1,1,1) = (-1, 0)}$
Il nous suffit de prouver que $\mathcal{F} = \{(1,0,0), (1,1,0), (1,1,1)\}$ est une base de $\R^3$
Dans cette optique, et puisque $\card(\mathcal{F}) = 3 = \dim(\R^3)$
... (il suffit au choix de montrer libre ou générateur)
Il nous suffit de montrer que $\mathcal{F}$ est génératrice de $\R^3$, ce qui est plus judicieux vu la suite de l'exercice. 
Soit $(x,y,z) \in \R^3$
Montrons qu'il existe $\alpha, \beta, \gamma$ trois réels tels que $(x,y,z) = \alpha(1,0,0) + \beta(1,1,0) + \gamma(1,1,1)$
C'est-à-dire, montrons que le système 
$(S):\cases{\alpha + \beta + \gamma = x \\ \beta + \gamma = y \\ \gamma = z}$ possède au moins une solution
$\iff \cases{\alpha + \beta + \gamma = z \\ \beta + \gamma = y \\ \gamma = z} \iff \cases{\alpha = x - \beta + \gamma = x - (y - y - z) = y \\ \beta = y - \gamma = y - z \\ \gamma = z}$ Donc la famille $\mathcal{F}$ est bien génératrice de $\R^3$ et donc une base (cf. ci-dessus)

De plus, on a pour tout $(x,y,z) \in \R^3:$
- $(x,y,z) = (x-y)(1,0,0)+(y-z)(1,1,0)+z(1,1,1)$
On peut donc écrire, pour tout $(x,y,z) \in \R^3$

$f(x,y,z) = f((x-y)(1,0,0)+(y-z)(1,0,0)+(z)(1,1,1))$
- Par linéarité de $f$
$\phantom{f(x,y,z)} = (x-y)f(1,0,0)+(y-z)f(1,1,0)+z\cdot f(1,1,1)$
$\phantom{f(x,y,z)} = (x-y)(1,1)+(y-z)(0,1)+(z)(-1, 0)$
$f(x,y,z) = (x-y-z, x-z)$
---
*On vérifie au brouillon*
$f(1,0,0) = (1-0,1-0) = (1,1)$ **OK**

# Exercice 9 (CC)

> Soit $f$ un endomorphisme d'un espace vectoriel $E$.
> Comparer $\ker(f)$ et $ker(f^2)$

Montrons que $\ker(f) \sub \ker(f^2)$
- Soit $x \in \ker(f)$
	- Alors $f^2(x) = (f \circ f)(x) = f(f(x)) = f(0_E) = 0_E$ (car $x \in \ker(f)$)
	- $f$ étant un endomorphisme
	- D'où $x \in \ker(f^2)$ c'est-à-dire, $\ker(f) \sub \ker(f^2)$

> Montrons que $\Im(f^2) \sub \Im(f)$

Alors, il existe $x \in E$ tel que $f(x) = y$
- C'est-à-dire, tel que
	- $f(f(x)) = y$
	- Or, $f(x) \in E$ (car endomorphisme)
		- Donc $y \in \Im(f)$
- On a donc $\Im(f^2) \sub \Im(f)$

# Exercice 10

> Soit $f$ et $g$ deux endomorphismes d'un espace vectoriel $E$. Montrer que $f\circ g = 0$ si et seulement si $\Im(g) \sub \ker(f)$

($\Rightarrow$) Supposons pour commencer que $f \circ g = 0_{\mathscr{L}(E)}$
- Soit $y \in \Im(g)$
- Par définition,
	- il existe $x \in E$  tel que:
	- $g(x)=y$
	- Alors $f(y) = f(g(x))= (f\circ g)(x) = 0_{\mathscr{L}(E)}(x)=0_E$
	- c'est-à-dire, $y \in \ker(f)$
- On a donc montré que $\Im(g) \sub \ker(f)$
$(\Leftarrow)$ Réciproquement, supposons que $\Im(g) \sub \ker(f)$
- Soit $x \in E,$ alors $g(x) \in \Im(g)$ et puisque $\Im(g) \sub \ker(f)$
	- alors $g(x) \in \ker(f)$
	- on a donc $f(g(x)) = 0_E,$ c'est-à-dire $(f\circ g)(x) = 0_E$
	- Finalement, $f \circ g = 0_{\mathscr{L}(E)}$
$\square$
# Exercice 11

> Soit $E$ et $F$ deux espaces vectoriels. Soit $f$ et $g$ deux applications linéaires de $E$ dans $F$.
> Comparer $\ker(f+g)$ et $\ker(f) \cap \ker(g)$

Montrons que $\ker(f) \cap \ker(g) \sub \ker(f+g)$
- Soit $x \in \ker(f) \cap \ker(g)$
- Alors $(f+g)(x) = f(x) + g(x)$
Or, $f(x) = 0_F$ car $x \in \ker(f)$ et $g(x) = 0_G$ car $x \in \ker(f)$
- donc $(f+g)(x) = 0_F + 0_G$
- c'est-à-dire, $x \in \ker(f+g)$
On a bien montré que $\ker(f+g) \sub \ker(f) \cap \ker(g)$

> Comparer $\Im(f+g)$ et $\Im(f) + \Im(g)$

Montrons que $\Im(f+g) \sub \Im(f) + \Im(g)$
Soit $y \in \Im(f+g)$
- Par définition, il existe $x \in E$ tel que $(f+g)(x) = y$
- c'est-à-dire, qu'on a $y = f(x) + g(x)$
- Or, $f(x) \in \Im(f)$ et $g(x) \in \Im(g)$
- Donc $y \in \Im(f) +\Im(g)$ et on a bien montré que $\Im(f+g) \sub \Im(f) + \Im(g)$  


# Exercice 14

> Soit $E$ un $\K$-espace vectoriel de dimension finie $n ≥ 1$. Soit $f$ un endomorphisme de $E$. On suppose qu'il existe $p \in \N^*$ tel que
> $f^p=0_{\mathscr{L}(E)}$
> $f^{p-1}≠0_{\mathscr{L}(E)}$
> Un tel endomorphisme est appelé endomorphisme nilpotent
>
> Montrer qu'il existe $x_0 \in E$ tel que $f^{p-1}(x_0)≠0_E$

Puisque $f^{p-1}≠0_{\mathscr{L}(E)}$ alors 
il existe $x_0 \in E$ tel que $f^{p-1}≠0_E$

> Montrer que la famille $\{x_0, f(x_0), ..., f^{p-1}(x_0)\}$ est libre.

Soit $a_0, a_1, ..., a_{p-1}$ $p$ éléments de $\K$
- tels que $a_0x_0+a_1f(x_0)+...+a_{p-1}f^{p-1}(x_0) = 0_E$ $(*)$
- En composant $(*)$ par $f^{p-1}$, on a par linéarité de $f^{p-1}$, que:
	- $a_0f^{p-1}(x_0) + a_1f^p(x_0) + ... + a_{p-1}f^{2p-2}(x_0) = f^{p-1}(0_E)$
	- C'est-à-dire,
		- $a_0f^{p-1}(x_0)= 0_E$
		- ... $f^p = 0_{\mathscr{L}(E)}$ donc $\forall i ≥ p, f^i = 0_{\mathscr{L}(E)}$ (récurrence)
		- Or, $f^{p-1}(x_0) ≠ 0_E$ donc $a_0 = 0_{\K}$
	- $(*)$ s'écrit alors $a_1f(x_0) + ... + a_{p-1}f^{p-1}(x_0) = 0_E$
	- En composant cette fois-ci par $f^{p-2}$, on obtient $a_1 = 0_\K$. En répétant le procédé
		- $a_0 = a_1 = ... = a_{p-1} = 0_\K$
- La famille $\ub{\{x_0, f(x_0), ..., f^{p-1}(x)\}}{\mathcal{F}}$ est libre.

> Comparer $p$ et $n$. n déduire que $f^n = 0_{\mathscr{L}(E)}$

Puisque $\mathcal{F}$ est libre et que $E$ est de dimension finie, $n$
- alors $\card(\mathcal{F}) ≤ n$ c'est-à-dire $p ≤ n$
Donc $f^n = 0_{\mathscr{L}(E)}$



