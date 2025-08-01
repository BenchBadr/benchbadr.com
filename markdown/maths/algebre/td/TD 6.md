$\newcommand{\R}{\mathbb{R}}\newcommand{\rg}{\text{rg}}\newcommand{\K}{\mathbb{K}}\newcommand{\sub}{\subset}$
# Exercice 1

> Soit $f: \R^4 \to \R^3$ une application linéaire dont le noyau est de dimension $2$. Quelle est la dimension de son image?

D'après la formule du rang, 
- $\dim(\Im(f)) = \dim(\R^4) - \dim(\ker(f))$
- $= 2$

> Soit $f:\R^4 \to \R_2[X]$ une application linéaire surjective. Quelle est la dimension de son noyau?

D'après la formule du rang,
- $\dim(\ker(f)) = \dim(\R^4) -\dim(\Im(f))$
- Or, $\Im(f) = \R_2[X]$ (puisque $f$ est surjective)
- D'où, $\dim(\ker(f)) = 1$

> Soit $f:\R^4 \to \R^4$ une application linéaire dont le noyau est de dimension $1$. Cette application est-elle injective ? surjective ? bijective.

$f$ n'est pas injectif car $\ker(f)≠\{0_{\R^4}\}$
- puisque $\dim(\ker(f))≠1$
- Or, c'est un endomorphisme en dimension finie (... ce n'est plus vrai en dimension infinie), donc $f$ n'est pas surjectif. (ni bijectif)

> Une application linéaire $f:\R^3\to\R^6$  peut-elle être injective? surjective? bijective?

Soit $f$ une application linéaire de $\R^3$ dans $\R^6$
- Elle ne peut pas être bijective, 
	- car on aurait alors $\dim(\R^3)=\dim(\R^6)$. 
- Elle ne peut pas être surjective,
	- En effet, on aurait sinon d'après la formule du rang:
		- $\dim(\ker(f)) = \dim(\R^3) - \dim(\ub{\Im(f)}{\R^6}) < 0$
		- **Non**
- En revanche, elle peut être injective,
	- comme le prouve l'exemple:
		- $f:\biggl{|}\begin{matrix}\R^3 \to \R^6 \\ (x,y,z) \mapsto (x,y,z, 0,0,0)\end{matrix}$
		- ... en gros definir $\Im(f)$ tel que $\dim(\Im(f))$ respecte la formule du rang. D'où le fait qu'on donne directement la formule explicite de la fonction associée.

> Une application linéaire $f:\R^\N \to \R^3$ peut-elle être injective ? surjective ? bijective ?

Soit $f:\R^\N \to \R^3$ une application linéaire, alors:
- $f$ peut être surjectif comme le prouve l'exemple de l'application linéaire suivante:
	- $f \cases{f \to \R^\N \to \R^3 \\ (u_n)_{n\in\N}  \mapsto (u_0, u_1, u_2)}$
	- en revanche, $f$ ne peut pas être injectif
		- en effet, si $f$ est linéaire-injective,
			- prenons 4 suites $(u_n)_{n\in\N}, (v_n)_{n\in\N}, (t_n)_{n\in\N}, (w_n)_{n\in\N}$ formant une famille libre.
				- Alors $\{f((u_n)_{n\in\N}), f((v_n)_{n\in\N}), f((t_n)_{n\in\N}), f((w_n)_{n\in\N})\}$
				- ... On note $\{x_1, x_2, x_3, x_4\}$
				- est une famille libre d'éléments de $\R^3$ 
				- **NON** car $\dim(\R^3) = 3$
			- Soit $\lambda_1, \lambda_2, \lambda_3, \lambda_4$ 4 réels tels que 
				- $\lambda_1f(x_1)+...+\lambda_4f(x_4) = 0_{\R^3}$
			- On a donc par hérédité de $f$, $f(\lambda_1x_1+...+\lambda_4x_4) = 0_{\R^3}$
			- Or, $f$ est injective donc $\lambda_1x_1 + ... + \lambda_4 x_4 = 0_{\R^\N}$
			- Or, $\{x_1, ..., x_4\}$ est libre, donc $\lambda_1 = \lambda_2 = \lambda_3 = \lambda_4 = 0_{\R^4}$
$\square$

# Exercice 2

> Soit l'application linéaire $f:\R^4 \to \R^3$ définie par $(x,y,z,t)=(2x-y+z+t, 4x-3y+3z, y-z+2t)$
>
> Déterminer $\ker(f)$ (en précisant une base s'il ne s'agit pas d'un sous-espace trivial)

Soit l'application linéaire $f:\R^4 \to \R^3$
- $(x,y,z,t) \mapsto (2x-y+z+t, 4x-3y+3z, y-z+2t)$
Soit $(x,y,z,t) \in \R^4$
Alors:
$(x,y,z,t) \in \ker(f) \iff f((x,y,z,t)) = 0_{\R^3}$
$\newcommand{\ifff}[1]{\underset{#1}{\iff}}$
$\iff \cases{2x-y+z+t = 0 \\ 4x-3y+ 3z = 0 \\ y-z+2t = 0}$
$\ifff{L_2 \leftarrow L_2 - 2L_1} \cases{2x-y+z+t = 0 \\ -y + z - 2t = 0 \\ y - z + 2t = 0}$
$\iff \cases{2x-y+z+t = 0 \\ y-z+2t = 0}$

Donc $(x,y,z,t) \in \ker(f) \iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $\cases{x = -\frac32\mu\\ y = \lambda - 2\mu \\ z = \lambda \\ t = \mu}$
$\newcommand{\Vect}{\text{Vect}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\card}{\text{card}}\newcommand{\Im}{\text{Im}}$
D'où $\ker(f) = \Vect(\ub{\{(0,1,1,0), (-\frac32, -2, 0, 1)\}}{\mathcal{F}})$
$\mathcal{F}$ est génératrice de $\ker(f)$ et c'est une famille génératrice libre de $\ker(f)$
- d'où $\dim(\ker(f)) = \card(\mathcal{F})= 2$

> En déduire la dimension de $\Im(f)$

$\dim(\Im(f)) = \dim(\R^4) - \dim(\ker(f)) = 4- 2= 2$

> Déterminer $\Im(f)$ (en précisant une base s'il ne s'agit pas d'un sous-espace trivial)


Prenons $\{e_1, e_2, e_3, e_4\}$ la base canonique de $\R^4$. 
On sait d'après le cours que la famille des images:
- $\{f(e_1), f(e_2), f(e_3), f(e_4)\}$ est génératrice de $\Im(f)$
- c'est-à-dire, 
	- $\Im(f) = \Vect(\ub{\{(2, 4, 0), (-1, -3, 1), (1,3,-1), (1,0,2)\}}{\mathcal{G}})$
		- ... $f(e_1)...$ pour obtenir le $\Vect$
	- Il suffit de prendre $2$ vecteurs dans $\mathcal{G}$ qui forment une famille libre.
	- Par exemple, $\{(2,4,0), (1,3,-1)\}$

> L'application $f$ est-elle injective ? bijective ? surjective

$f$ n'est ps injective car $\ker(f) ≠ \{0_{\R^4}\},$ et fonction pas bijective (on le reconnait d'emblée) et pas surjective car $\Im(f) ≠ \R^3$

# Exercice 5
$\newcommand{\N}{\mathbb{N}}$
> Soit $n \in \N^*$ et $x_0, ..., x_n$ des réels distincts. On cherche à montrer que, pour toutes valeurs $d_0, ..., d_n \in \R$ il existe un unique polynôme $P$ de degré inférieur ou égal à $n$ tel que $P(x_i) = d_i$ pour tout $i \in \{0, ..., n\}$. Pour cela, on introduit l'application $\varphi:\R_n[X] \to \R^{n+1}$ définie par $\varphi(P) = (P(x_0), ..., P(x_n))$
> Montrer que $\varphi$ est une application linéaire

> [!warn]
> Évaluation

$\varphi:\cases{\R_n[X] \to \R^{n+1} \\ P \mapsto (P(x_0), .., P(x_n))}$

Soit $P \in \R_n[X], Q \in \R_n[X]$ et $\lambda \in \R$
- Alors $\varphi(\lambda P+Q) = ((\lambda P + Q)(x_0), ..., (\lambda P + Q)(x_n)) = (\lambda P (x_0) + Q(x_0), ..., \lambda P(x_n)+ Q(x_n))$
- $= \lambda(P(x_0),...,P(x_n)) + (Q(x_0), ..., Q(x_n))$
- $= \lambda \varphi (p) + \varphi(Q)$
- Donc $\varphi$ est linéaire. 

> Déterminer $\ker(\varphi)$

Soit $P \in \R_n[X]$ 
- Alors $P \in \ker(\varphi) \iff \varphi(P) = 0_{\R^{n+1}}$
- $\iff \cases{P(x_0) = 0 \\ .. \\ .. \\ p(x_n) = 0}$
- $\iff P = 0_{\R_n[X]}$
Un polynôme non nul de degré $n$ a au plus $n$ racines distinctes.
$\ker(\varphi) = \{0_{\R_n[X]}\}$

> En déduire que $\varphi$ est un isomorphisme.

D'après $\fbox{2}$, $\varphi$ est injective. 
Or, $\dim(\R_n[X]) = \dim(\R^{n+1})$
- ... C'est linéaire, c'est injectif donc c'est bijectif. 
- ... si je suis l'un je suis tout sinon je suis rien
Donc $\varphi$ est bijective

> Conclure

Soit $d_0 \in \R, d_n \in \R$ alors $(d_0, ..., d_n) \in \R^{n+1}$
Donc, par définition de la bijectivité, et d'après $\fbox3$ il existe un unique antécédent $P \in \R_n[X]$ tel que:
- $\varphi(p)=(d_0, ..., d_n)$ c'est-à-dire, tel que pour tout $i \in \{0, ..., n\}$
- $P(x_i) = d_i$

# Exercice 3

> Soit l'application linéaire $f:\R^4\to\R^4$ définie par $f(x,y,z,t)=(2x+3y-z+t, 3x+5y-z+t,x+3y+z-t, x-2z+2t)$.
> Déterminer $\ker(f)$ (en précisant une base s'il ne s'agit pas d'un sous-espace trivial)
> En déduire la dimension de $\Im(f)$
> Déterminer $\Im(f)$
> L'application $f$ est-elle injective? surjective? bijective?

Soit l'endomorphisme:
- $f \cases{\R^4 \to \R^4 \\ (x,y,z,t) \mapsto (2x+3y-z+t, 3x+5y-z+t, x+3y+z-t, x-2z+2t)}$
$\newcommand{\ifff}[1]{\underset{\begin{matrix}#1\end{matrix}}{\iff}}$
$(x,y,z,t) \in \ker(f) \iff f((x,y,z,t)) = 0_{\R^4}$
$\phantom{(x,y,z,t) \in \ker(f) } \iff \cases{2x+3y-z+t=0 \\ 3x+5y-z+t = 0 \\ x+3y+z-t=0 \\ x-2z+2t=0}$
$\phantom{(x,y,z,t) \in \ker(f) } \ifff{L_2 \leftarrow L_2 - L_1 \\ L_3 \leftarrow L_3 + L_1 \\ L_4 \leftarrow L_4 - 2L_1}\cases{2x+3y-z+t = 0 \\ x+2y = 0 \\ 3x+6y = 0 \\ -3x-6y = 0}$
$\phantom{(x,y,z,t) \in \ker(f) } \iff \cases{2x+3y-z+t = 0 \\ x+2y = 0}$
$\phantom{(x,y,z,t) \in \ker(f) } \exists \lambda \in \R, \exists \mu \in \R$ tels que $\cases{x = -2\lambda \\ y = \lambda \\ z = \mu \\ t = \lambda + \mu}$
$\phantom{(x,y,z,t) \in \ker(f) } \exists \lambda \in \R, \exists \mu \in \R$ tels que $(x,y,z,t) = \lambda(-2, 1,0,1)+\mu(0,0,1,1)$
Donc $\ker(f) = \Vect(\{(-2, 1, 0, 1), (0,0,1,1)\})$
D'une part,
- $f$ n'est pas injectif et puisque c'est un endomorphisme en dimension finie, il n'est pas injectif.
D'autre part,
La famille $\{(-2, 1, 0, 0), (0,0,1,1)\}$ est génératrice de $\ker(f)$ et c'est une famille libre (facile) donc une base de $\ker(f)$.
D'où $\dim(\ker(f)) = 2 = \card(\{(-2, 1, 0,0), (0,1,1,1)\})$

**Déterminer $\dim(\Im(f))$**
D'après la formule du rang, on a alors:
- $\dim(\Im(f)) = \dim(\R^4) - \dim(\ker(f)) = 2$

**Par ailleurs,**
On sait que:
- $\Im(f) = \Vect(\{f((1,0,0,0)), f((0,1,0,0)),f((0,0,1,0)),f((0,0,0,1))\})$
- $\Im(f) = \Vect(\{(2,3,1,1), (3,5,3,0), (-1,-1,1,-2), (1,1,-1,2)\})$
- $\Im(f) = \Vect(\{(2,3,1,1), (3,5,3,0), (1,1,-1,2)\})$
- ... il suffit de prendre deux vecteurs non-colinéaires puisque $\dim(\Im(f))=2$.

# Exercice 4

> Soit l'application linéaire $f:\R_2[X] \to \R^3$ définie par $f(P(X))=(P(1), P(-1), P'(0))$. 
> Déterminer $\ker(f)$ (en précisant une base s'il ne s'agit pas d'un sous-espace trivial)
> En déduire la dimension de $\Im(f)$
> Déterminer $\Im(f)$
> L'application $f$ est-elle injective? surjective? bijective?

Soit $P = aX^2+bX+c \in \R_2[X]$
$P \in \ker(f) \iff f(P) = 0_{\R^3}$
$\phantom{P \in \ker(f)} \iff (a+b+c, a-b+c, b)$
$\phantom{P \in \ker(f)} \iff \cases{a+b+c = 0 \\ a-b+c = 0 \\ b = 0}$
$\phantom{P \in \ker(f)} \iff \cases{a = -c \\ b= 0}$
$\phantom{P \in \ker(f)} \iff \exists \lambda \in \R \text{ tel que } \cases{a = \lambda \\ b = 0 \\ c = -\lambda}$
$\phantom{P \in \ker(f)} \iff\exists \lambda \in \R,$ tel que $P = \lambda(X^2-1)$
D'où $\ker(f) = \Vect(\{X^2-1\})$
D'une part,
- $f$ n'est pas injective. (à fortiori pas bijective)
- Et puisqu'on est entre espaces vectoriels de **même** dimension finie, 
	- $f$ n'est pas surjective.
D'autre part,
- Cette famille est génératrice de $\ker(f)$
- puisque c'est une famille à un seul élément non nul, c'est aussi une famille libre.
- C'est donc une base de $\ker(f)$
$\dim(\ker(f)) = \card(\{X^2-1\}) = 1$

> En déduire la dimension de $\Im(f)$

$\dim(\Im(f)) = \dim(\R_2[X])-\dim(\ker(f))$
$\phantom{\dim(\Im(f))} = 2$

> Déterminer $\Im(f)$

Par ailleurs,
- $\Im(f) = \Vect(\{f(1), f(X), f(X^2)\})$
- $\Im(f) = \Vect(\{(1,1,0), (1,-1,1), (1,1,0)\})$
- $\Im(f) = \Vect(\{(1,1,0), (1,-1,0)\})$

# Exercice 6

> Soit $E$ un $\K$-espace vectoriel de dimension $n\in \N^*$
> Soit $f$ un endomorphisme de $E$. 
> Montrer que $\ker(f) =\Im(f)$ si et sulement si $f\circ f = 0$ et $n = 2\text{rg}(f)$

*(sans utiliser l'exercice 10 de la feuille précédente)*
Supposons pour commencer que $\ker(f) = \Im(f)$
- Soit $x \in E$
	- Alors $(f \circ f)(x) = f(\ub{f(x)}{\in \Im f \sub \ker f}) = 0_E$
	- D'où $f \circ f = 0_{\mathscr{L}(E)}$
- La formule du rang donne:
	- $\dim(E) = \dim(\ker(f)) + \dim(\Im(f))$
	- $\phantom{\dim(E)} = 2\dim(\Im(f))$
- c'est-à-dire, $n = 2\text{rg}(f)$
**Réciproquement**, supposons que $f\circ f = 0_{\mathscr{L}(E)}$ et que $n = 2\rg f$
- D'une part,
	- $\Im(f) \sub \ker(f)$
	- En effet,
		- Soit $y \in \Im(f)$
		- Par définition de l'image,
		- Il existe $x \in E$ tel que:
			- $y = f(x)$
			- Alors 
				- $f(y) = f(f(x))$
				- $\phantom{f(y)} = (f\circ f)(x)$
				- $\phantom{f(y)} = 0_{\mathscr{L}(E)}(x)$
				- $\phantom{f(y)} = 0_E$
		- c'est-à-dire, $y \in \ker(f)$
	- et on a bien $\Im(f) \sub \ker(f)$
- D'autre part,
	- On a:
		- $2\rg(f) = n \ub{=}{\text{f. du rang}}\dim(\ker(f))+\rg(f)$
		- Dont on déduit que $\dim(\ker(f)) = \rg(f)$
		- c'est-à-dire,
		- $\dim(\ker(f)) = \dim(\Im(f))$
- Finalement,
	- Puisque $\Im(f) \sub \ker(f)$ et qu'on a égalité des dimensions et qu'on a 
		- $\dim(\Im(f)) = \dim(\ker(f))$, on peut en conclure que $\Im(f) = \ker(f)$

# Exercice 7

> On se place dans l'espace vectoriel $\R^3$. On considère la droite vectorielle $D$ engendrée par $u = (1,0,1)$ et le plan vectoriel $P = \{(x,y,z) \in \R^3 | x= y\}$
> Montrer que $D$ et $P$ sont supplémentaires dans $\R^3$

Tout d'abord, $\{u\}$ est génératrice de $D$ et c'est une famille libre car famille à un élément et il est non nul. Donc $\{u\}$ est une base de $D$ et:
- $\dim(D) = \card(\{u\}) = 1$
Par ailleurs, soit $(x,y,z) \in \R^3$. 
$(x,y,z) \in P \iff x = y$
$\phantom{(x,y,z,t) \in P} \iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $\cases{x = \lambda \\ y = \lambda \\ z = \mu}$
Donc $P = \Vect(\ub{\{(1,1,0), (0,0,1)\}}{\mathcal{F}})$
$\mathcal{F}$ est génératrice et c'est une famille libre (facile) donc une base de $D$ d'où $\dim(P) = \card(\mathcal{F}) = 2$.

D'une part,
- $\dim(D) +\dim(P) = 3 = \dim(\R^3)$
D'autre part,
- Soit $(x,y,z)\in D \cap P$
- Alors, puisque $(x,y,z) \in D$
	- il existe $\lambda \in \R$ tel que $(x,y,z) = \lambda(1,0,1) = (\lambda, 0, \lambda)$
- Et, puisque $(x,y,z) \in P,$ on a $x=y,$ c'est-à-dire, $\lambda = 0$
- $(x,y,z) = 0_{\R^3}$ et $D \cap P \sub \{0_{\R^3}\}$
Finalement,
- $D \oplus P = \R^3$

> Soit $(x,y,z,t) \in \R^3$. Justifier brièvement qu'il existe un unique $\lambda \in \R$ et un unique $v \in P$ tel que $(x,y,z) = \lambda u + v$. En déduire la valeur de $\lambda$  puis celle de $v$.


Soit $(x,y,z)\in\R^3$
- Puisque $\R^3 = D \oplus P$
	- Alors, il existe un unique $u' \in D$ et un unique $v \in P$ tels que:
	- $(x,y,z) = u'+v$
	- Or, $u$ est une base de $D$ donc il existe un unique $\lambda \in \R$ tel que $u'=\lambda u$ 
		- c'est-à-dire, il existe un unique
			- $\lambda \in \R$ et $v \in P$ tels que $(x,y,z) = \lambda \cdot u + v$
- Notons $v=(x',y',z')$
- Le systèmes $\cases{\lambda + x' = x \\ y' = y \\ z = \lambda+ z'}$ et il fut que $x'=y'$
- Donc $\lambda = x-y$ 
- et $v = (x,y,z)-(x-y)\cdot(1,0,1)$
- $= (y,y,y+z-x)$
Pour tout $(x,y,z)\in\R,$ on a:
- $(x,y,z)=\ub{(x-y, 0, x-y)}{\in D}+\ub{(y,y,y+z-x)}{\in P}$

> On note $p$ la projection sur $P$ parallèlement à $D$. Déterminer l'expression de $p(x,y,z)$ pour $x,y,z$  quelconques 

Puisque  $(x,y,z)=\ub{(x-y, 0, x-y)}{\in D}+\ub{(y,y,y+z-x)}{\in P}$
En notant $p$ la projection sur $P$ parallèlement à $D$. On a $p((x,y,z))=(y,y,y+z-x)$

# Exercice 8

> [!tips]
> À reviser pour mardi °°°

> Soit $E$ un $\K$-espace vectoriel. Soit $F$ et $G$ deux sous-espaces vectoriels supplémentaires dans $E$. La *symétrie vectorielle* par rapport à $F$ et parallèlement à $G$ est l'appciation $s:E\to E$ définie par:
> $s(u)=u_F-u_G$
> où $u_F+u_G$ est la décomposition de $u$ sur $F+G$ (cette décomposition existe et est unique puisque $F$ et $G$ sont supplémentaires dans $E$). On admet que $s$ est une application linéaire

Remarquons que $s=2p-\text{id}_E$ et $s$ est linéaire.

### Question 1

> Si $x \in F,$ que vaut $s(x)$ ? Si $x \in G$, que vaut $s(x)$ ? 

Si $x \in F,$ écris $x = \ub{x}{\in F}+\ub{0_E}{\in G}$
- Donc $s(x) = x$
De même, si $x \in G, x = \ub{0_E}{\in F}+\ub{x}{\in G}$

> [!info]
> $F \cap G = \{0_E\}$

> Montrer que $s \circ s = \text{id}$

Soit $x \in E$. Écrivons $x = \ub{x_F}{\in F}+\ub{x_G}{\in G}$
Alors:
$(s\circ s)(x) = s(s(x)) = s(x_F - x_G)$
 $\phantom{(s\circ s)(x) = s(s(x))} = x_F-(-x_G)$
 $\phantom{(s\circ s)(x) = s(s(x))} = x_F+x_G$
Donc $s \circ s = \text{id}_E$

> En déduire que $s$ est bijective et déterminer $s^{-1}$

> [!warn]
> **Rappel** : Soit $u \in \mathcal{F}(E, F)$ et $v \in \mathcal{F}(F,E)$
> Si $u\circ v = \text{id}_F$ et $v \circ u = \text{id}_E$
> alors $u$ et $v$ sont bijectives et réciproques l'une de l'autre

Puisque $s \circ s = \text{id}_E,$ alors $s$ est bijective et $s^{-1}=s$

### Question 2

> On se place dans le cas particulier où $E = \R^2, F = \{(x,y) \in \R^2 | x = 0\}$ et $G = \{(x,y)\in\R^2 | x=y\}$
> Déterminer l'expression de $s(x,y)$ pour tout $(x,y) \in \R^2$

$F = \{(x,y,) \in \R^2 | x= 0\}$
Soit $(x,y) \in \R^2$
- $(x,y) \in F \iff x = 0 \iff \exists \lambda \in \R$ tel que $\cases{x = 0 \\ y = \lambda}$
- Donc $F = \Vect(\ub{\{(0,1)\}}{\in \mathcal{F}})$
$\mathcal{F}$ est une base (facile)
$\dim(F)=\card(\mathcal{F}) = 1$

---

$G = \{(x,y) \in \R^2 | x = y\}$
Soit $(x,y) \in \R^2$
$(x,y) \in G \iff x =y \iff \exists \lambda \in \R$ tel que $\cases{x = \lambda \\ y = -\lambda}$
Donc $G = \Vect(\ub{\{(1,1)\}}{\mathcal{G}})$
$\mathcal{G}$ base de $G$ (facile)
$\dim(G) = \card(\mathcal{G}) = 1$
On peut donc affirmer que $\dim(F)+\dim(G) = \dim(\R^2)$

---

Pour montrer que $E = F \oplus G,$ il suffit de montrer par exemple que $\R^2 \sub F + G$
Soit $(x,y) \in \R^2$
Remarquons que $(x,y) = \ub{(y-x)\cdot(0,1)}{\in F}\cdot \ub{x(1,1)}{\in G}$
On conclut que $F \oplus G = \R^2$
On a donc $\forall (x,y) \in \R^2$
- $s(x,y) = (y-x)(0,1) - x(1,1)=(-x,y-2x)$

> Illustrer graphiquement la transformation d'un vecteur $(x,y)$ par la symétrie $s$

...

# Exercice 10

$\{(x,y) \in \R^2 | x+y = 0\} \iff \ker(f)$ de $f$ une application linéaire

> Soit $E$ un $\K$-espace vectoriel de dimension $n \in \N^*$. 
> Une *forme linéaire* de $E$ sur une application linéaire de $E$ dans $\R$. 
> Un *hyperplan* de $E$ est le noyau d'une forme linéaire non-nulle sur $E$.
> Montrer que tout hyperplan est un sous-espace vectoriel de dimension $n-1$

> [!info]
> $H = \ker(f)$ avec $f:E \to \K$ linéaire non-nulle. 

Soit $H$ un hyperplan de $E$.
- Il existe par définition une forme linéaire non nulle $f$ telle que $H= \ker(f)$ 
D'après la formule du rang, on a:
- $\dim(E) = \dim(\ker(f)) + \dim(\Im(f))$
- c'est-à-dire,
	- $\dim(H) = n - \Im(f)$
	- Or, $\Im(f) \sub \K$ et $\Im(f) ≠ \{0_E\}$ car $f$ forme linéaire non-nulle *(énoncé hyperplan)*
	- Donc $\Im(f) = \K$
- $\dim(H) = n-1$

>  Montrer que tout sous-espace vectoriel de dimension $n-1$ est un hyperplan.

Soit $H$ un sous-espace vectoriel de $E$ de dimension $(n-1)$. Alors, $H$ admet un supplémentaire  $D$ de dimension $1,$ disons $D=\Vect(\{a\})$ avec $a≠0$
Notons $p$ la projection vectorielle sur $D$ parallèlement à $p$. 
Alors, $H$ est le noyau de la forme linéaire non-nulle $f$ donné par $p:x\in E \mapsto f(x) \cdot a$
