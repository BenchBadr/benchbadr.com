$\newcommand{\Im}{\text{Im}}\newcommand{\K}{\mathbb{K}}$
# Q1 - Composée

> La composée de deux applications linéaires est une application linéaire

Soit $f:E \to F$ et $g:F \to G$ deux applications linéaires.
D'une part,
- $f(0_E) = 0_F$ ($f$ étant linéaire)
- $g(0_F)=0_G$ ($g$ linéaire)
- Par composée,
	- $g(f(0_E)) = 0_G$
Soit $\lambda \in \K$ et $u \in E, v\in E$
- $g(f(\lambda u + v)) = g(\lambda f(u)+f(v))$ (par linéarité de $g$)
- $\phantom{g(f(\lambda u + v))} = \lambda g(f(u)) + g(f(v))$ (par linéarité de $f$)
- $g(f(\lambda u + v)) = \lambda g \circ f(u) + g \circ f (v)$
$\square$
# Q2 - Réciproque

> L'application réciproque d'une application linéaire bijective est une application linéaire

Soit $f:E \to F$ une application linéaire bijective.
D'une part,
- $f^{-1}(f(0_E)) = f^{-1}(0_F) = 0_E$ (par définition de la réciproque)
D'autre part,
Soit $\lambda \in \K, u \in E$ et $v \in E$
- $f^{-1}(\lambda f(u)+f(v)) = f^{-1}(f(\lambda u + v))$ (linéarité de $f$)
- $\phantom{f^{-1}(\lambda f(u)+f(v))} =$ $\lambda u + v$ (définition de la réciproque)
- $\phantom{f^{-1}(\lambda f(u)+f(v))} = \lambda f^{-1}(f(u)) + f^{-1}(f(v))$
Donc $f^{-1}$ est une application linéaire.
$\square$
# Q3 - Noyau EV

> Le noyau d'une application linéaire de $E$ dans $F$ est un sous-espace vectoriel de $E$.

Soit $f:E \to F$ une application linéaire,
D'une part,
- $f(0_E) = 0_F$ (car $f$ linéaire)
- Donc $0_F \in \ker(f)$
D'autre part,
- Soit $\lambda \in \K$ et $u \in \ker(f)$ et $v \in \ker(f)$
	- $f(\lambda u + v) = \lambda f(u) + f(v)$ (par linéarité de $f$)
	- $f(\lambda u + v) = \lambda \cdot 0_F + 0_F$
	- Donc $\lambda u + v \in \ker(f)$
$\ker(f)$ est bien un sous-espace vectoriel.
$\square$
# Q4 - Image EV

> L'image d'une application linéaire de $E$ dans $F$ est un sous-espace vectoriel de $E$.

Soit $f:E\to F$ une application linéaire,
D'une part,
- $f(0_E) = 0_F$
- Donc $0_F \in \Im(f)$ 
D'autre part,
- Soit $\lambda \in \K$ et $u, v \in \Im(f)$ tels que $u = f(u')$ et $v = f(v')$
	- $\lambda u + v = \lambda f(u') + f(v')$
	- $\phantom{\lambda u + v} = f(\lambda u ' + v')$ (par linéarité de $f$)
	- Par définition, $f(\lambda u' + v') \in \Im(f)$
	- Donc $\lambda u + v \in \Im(f)$
- D'où $\Im(f)$ est un sous-espace vectoriel
$\square$

# Q5 - Injective + Noyau

> Une application linéaire $f:E \to F$ est injective si et seulement si $\ker(f) = \{0_E\}$

$(\Rightarrow)$ Supposons que $f$ est injective.
- Montrons que $\ker(f) = \{0_E\}$
	- $f(0_E) = 0_F$ ($f$ linéaire)
	- Or, $f$ est injective
		- Donc $\ker(f) = \{0_E\}$
$(\Leftarrow)$ Réciproquement, supposons que $\ker(f) = \{0_E\}$
- Montrons que $f$ est injective.
	- Soit $u,v \in E$
		- Prenons $f(u) = f(v)$
			- $f(u)-f(v)=0_F$
			- $f(u-v) = 0_F$ par linéarité de $f$
			- Or, $\ker(f) = \{0_E\}$
				- Donc $u-v = 0_E$
				- Donc $u=v$
					- Donc $f$ est injective
$\square$

# Q6 - Inj / Bij

> Si l'application linéaire $f:E\to F$ est injective et $\dim(E) = \dim(F)$ alors $f$ est bijective.

Dans le cas ou $\dim E = 0,$ 
- c'est trivialement vrai
Sinon,
- Soit $(e_1, ..., e_n)$ une base de $E$.
- Alors, d'après l'injectivité de $f$
	- $(f(e_1), ..., f(e_n))$ est libre
	- De plus,
		- $\dim F = n = \dim E$
	- Donc, $(f(e_1), ..., f(e_n))$ est une base de $F$. 
- Ainsi, $f$ transforme une base en une base
- $f$ est donc surjective.
Donc bijective.
$\square$

# Q8 - Surj / Bij

> Si l'application linéaire $f:E \to F$ est surjective et $\dim E = \dim F$ alors $f$ est bijective.

Dans le cas ou $\dim E = \dim F$
- c'est trivialement vrai ($\ker(f)=\{0_E\}$)
Sinon,
- Soit $(e_1, ..., e_n)$ une base de $E$.
- Posons $(f(e_1), ..., f(e_n))$ l'image par $f$ de cette base.
- Puisque $f$ est supposée surjective,
	- $(f(e_1), .., f(e_n))$ est une base de $F$
	- De plus,
		- D'après la formule du rang:
			- $\dim(E) = \dim(\ker(f))+\dim(F)$
			- $\dim(\ker(f)) = \dim(E) - \dim(F)$
			- Or, 
				- $\dim(F) = \dim(E)$
				- Donc $\dim(\ker(f)) = 0$
- Ainsi, $f$ est injective
$f$ est injective et surjective,
$f$ est donc bijective.
$\square$

# Q9 - Projection

> Un endomorphisme $p$ est une projection si et seulement si $p \circ p = p$

Soit $p:E \to E$ un endomorphisme.
$(\Rightarrow)$ Supposons $p$ une projection,
- Montrons que $p \circ p = p$
	- Par définition de la projection, 
		- $E = (\Im(p) \oplus \ker(p))$
		- Pour tout $u \in E$, il existe une décomposition:
			- $u = u_1 + u_2$
				- où $u_1 \in \Im(p)$
				- $u_2 \in \ker(f)$
			- $p(u) = u_1$
			- Or,
				- $p(u_1) = u_1$ (car $u_1 \in \Im(f)$)
			- $p(p(u)) = p(u_1) = u_1 = p(u)$
- Donc $p \circ p = p$
$(\Leftarrow)$ Supposons que $p \circ p = p$
- Montrons que $p$ est une projection
	- **Montrons d'abord que $E = (\Im(p) \oplus \ker(p))$**
		- Soit $u \in E$
			- Soit $v = p(u)$ et $w = u - p(u)$
				- $p(v) = p(p(u)) = p(u)$
				- $p(w) = p(u - p(u)) = p(u) - p(p(u)) = 0_E$ (linéarité de $p$)
			- Donc $w \in \ker(p)$
			- De plus,
				- $u = p(u) + u - p(u)$
				- $u = v + w$
				- $p(u) = p(v + w) = p(v) + p(w)$
					- Or, $p(v) \in \Im(p)$
					- et, $p(w) \in \ker(p)$
		- Donc, $\forall u \in E, \exists v \in \Im(p), \exists w \in \ker(p)$ tels que $u = v+w$
		- D'où $E = \Im(p) + \ker(p)$ $\color{green}(1)$
	- **Montrons que $\Im(p) \cap \ker(p) = \{0_E\}$**
		- Soit $u \in \Im(p) \cap \ker(p)$
			- $u \in \Im(p),$
				- Il existe $u'$ tel que:
				- $u = f(u')$
			- De plus, $u \in \ker(f)$, donc:
				- $p(u)=0_E \iff p(p(u')) = 0_E$
					- $p(u') \in \ker(f)$
					- Par hypothèse,
						- $p(p(u')) = p(u')$
						- Or, $p(u') \in \ker(f)$
							- $p(p(u'))=0_E=p(u')$
						- Enfin, $u = p(u')$
					- D'où $u = 0_E$
		- Donc $\Im(p) \cap \ker(p) = \{0_E\}$ $\color{green}(2)$
	- Donc $E = (\Im(p) \oplus \ker(p))$
- Donc $p$ est une projection
$\square$