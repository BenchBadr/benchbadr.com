# Exercice 1

> Soit $f$ la fonction de $\R$ dans $\R$ définie par:
> $\forall x \in \R, f(x) = x^5-5x+1$
> Montrer que l'équation $f(x)=0$ admet au moins trois solutions réelles ; donner un encadrement de chacune de ces solutions entre deux entiers consécutifs.

On a $f(-2)=-21<0$ et $f(-1)=5 > 0$
- et $f$ est continue comme somme et produit de fonctions continues. (c'est un polynôme)
- Donc d'après le théorème de Bolzano,
	- il existe $x_1 \in ]-2, -1[$ tel que: $f(x_1) = 0$
- De même, puisque $f(0)=1>0$ et $f(1) = -3,$ il existe $x_2 \in ]0;1[$ tq $f(x_2)=0$
- Et, puisque $f(x_2)=0$ et $x_3 \in ]1,2[$ tel que $f(x_3)=0$.

> Montrer que l'équation $x^4 = 2x^2+x+1$ admet au moins une solution positive et au moins une solution négative.

$\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}$

On a $x^4 = 2x^2+x+1$.
$\iff \ub{x^4-2x^2-x+1=0}{g(x)}$ 
$g'(x) = 4x^3-4x-1$
On a $g(0) = -1$ et $g(1000) = 10^{12}-2(10^6)-10^3-1 ≥ 10^{12}-4(10^6)> 0$
- Or, $g$ est continue car c'est un polynôme donc d'après le théorème de Bolzano (ou TVI), il existe $x^+ \in ]0;1000[$ tel que $g(x^+) = 0$. 
- De même, il existe un $x^-\in[-1000, 0]$ tel que $g(x^-) = 0$
Donc l'équation $x^4=2x^2+x+1$ admet au moins comme solution $x^+$ et $x^-$.

---
À faire pour s'entrainer : le 10

---

# Exercice 2

> Soit $f:[a,b]\to[a,b]$ une fonction continue. Montrer que $f$ a au moins un point fixe dans $[a,b]$ (on rappelle que $x$ est point fixe de $f$ si $f(x)=x$)

$f(x) = x \iff \ub{f(x)-x}{=g(x)}=0$
- On a $g(a) = \ub{f(a)}{≥a} - a$
- et $g(b) = \ub{f(b)}{f(b)}, -b = 0$
	- Or $g$ est continue comme différence de fonctions continues donc d'après le théorème de Bolzano, il existe $c \in [a,b]$ tq $g(c)=0$ c'est-à-dire $f(c) = c$
$\square$


$\newcommand{\R}{\mathbb{R}}$
> Soit $f:\R \to \R$ une fonction continue et décroissante. Montrer que $f$ admet exactement un point fixe dans $\R$. 

D'une part, d'après la question précédente, 
- $f$ est continue donc admet au moins un point fixe
De plus, étant strictement décroissante, la

--- 
a faire, 
- qst 2 ex 2
- ex 10 (pour le cc2)
- ex 8

---
*Brouillon*


> Soit $f:\R \to \R$ une fonction continue et décroissante. Montrer que $f$ admet exactement un point fixe dans $\R$.

D'une part, Mq il existe au moint un point fixe pour cette fonction
- On cherche $x \in \R$ tel que
	- $f(x)-x = 0$
- Si $f(0) = 0$
	- Bon
- Si $f(0) > 0$
	- On a $f(f(0)) - f(0) ≤ f(0) - f(0) ≤ 0$
	- D'après le théorème de Bolzano, 
		- Il existe $x \in [0, f(0)]$ tel que $f(x)-x=0$
- Si $f(0)<0$
	- $f(f(0))-f(0) ≥ 0$
Montrons l'unicité
- $x \mapsto f(x) - x$ est strictement $\searrow$ donc injective donc $f(x)-x=0$ admet au plus une solution.
---
*Alternativement*
De plus, étant strictement décroissante, 
- prenons $x_1 ≥ x_2$ (1) tq $x_1, x_2$ deux points fixes
- $f(x_1) = x_1$ et $f(x_2) = x_2$
- Alors $f(x_1) ≤ f(x_2)$
	- donc $x_1 ≤ x_2$ (2)
- Or, $x_1 ≥ x_2$ par (1)
- D'après (1)+(2), $x_1 = x_2$
- On a bien montré l'unicité du point fixe pour une fonction continue et décroissante.

### Exercice 8 (brouillon)

> $I = ]0;1[$ et $J = [0;1[$ et $J = \{0\}$

$f:I \to J$

### Exercice 10 (brouillon)

> Soit $h:\R \to \R$ définie par $h(x) = 8x^5 - 20x^2 - 3$. Montrer que l'équation $h(x) = 0$ a une solution $x_0 \in ]1,2[$

- $h$ est produit et somme de fonctions continues, donc continue.
- $h'(x) = 16x^4-40x$
- $h'(x) = x(16x^3 -1)$
	- $h'(x)$ est du signe de $16x^3-x$
	- $16x^3 - 1> 0 \iff 16x^3 > 1$
	- Pour $x > 1, 16x^3 > 16$
	- Donc $h'(x) > 0$ sur $]1;2[$
	- $h(x) \nearrow$ sur $]1;2[$
- $h(1) = -13$
- $h(2) = 2^8 - 80 - 3 = 173$
Ainsi,
- $f$ est monotone, strictement croissante sur $]1;2[$
- $f$ admet un changement de signe et 
- est continue sur $]1;2[$

Ainsi, $h(x) = 0$ a une solution $x_0 \in ]1;2[$

> En déduire que l'équation $x^8-4x^5-x^3+1 = 0$ admet au moins deux solutions réelles $x_1$ et $x_2$ avec $0< x_1 < 1 < x_2 < 2$

Notons $g(x)$ cette fonction
$g'(x) = 8x^7 - 20x^4 - 3x^2$
$\phantom{g'(x)} = x^2(8x^5 - 20x^2 - 3)$
$\phantom{g'(x)} = x^2(h(x))$
On sait qu'il existe $x_1 \in ]1;2[$ tq $h(x)=0$
- donc $g'(x_1) = 0$
Donc il existe $x_2 \in ]0;1[$ tq $g(x) = 0$
- 


---

# Exercice 6

> Soit $f:\R \to \R$ une fonction continue telle que:
> $\li{x\to-\infty}f(x) = \li{x\to+\infty}f(x) = +\infty$
> Montrer que $f$ est minorée et atteint sa borne inférieure.

Puisque $\li{x\to+\infty}f(x) = +\infty,$ il existe $B \in \R$ tel que:
- $\forall x > B, f(x) > f(0)$
Puisque $\li{x\to+\infty}f(x) = +\infty,$ il existe $A \in \R$, tel que:
- $\forall x < A, f(x) > f(0)$

**Remarque** - $A ≤ 0 ≤ B$
Puisque $f$ est continue. 
- $f([A,B]) = [m,M]$
**Remarque** - $m ≤ f(0)$
$m$ minore $f$ car pour $x \in \R$
- si $x ≥ B, f(x) ≥ f(0) ≥ m$
- si $x ≤ A, f(x) ≥ f(0) ≥ m$
- Si $x \in [A,B], f(x) ≥ m$

> Si $f$ est continue mais admet des limites finies en $±\infty$ montrer que $f$ est bornée. Atteint-elle nécessairement ses bornes? 

On note $\li{x\to+\infty}f(x) = l$ et $\li{x\to-\infty}f(x) = m$
On pose $\epsilon = 1$
- Il existe $x^-$ et $x^+$ tels que
	- $\forall x ≤ x_, |l-f(x)|<1$
	- $\forall x ≥ x^+, |m-f(x)|<1$
- Si $x_- ≥ x_+$ alors:
	- $\forall x \in \R, \min(m-1, l-1) ≤ f(x) ≤ \max(m+1, l+1)$
Étudions $[x^-, x^+]$
- $f([x^-, x^+])$ est aussi un segment car $f$ est continue
- $[b;b_s] = f([x^-,x^+])$
Par définition de 
- $\max(b_s, m-1, l-1)$ majore. 
- $\min(b, m-1, l-1)$ minore
Prenons $\arctan$, cette fonction satisfait les hypothèse

$\square$

---
exercice 3,4, 6.2

# Exercice 3

> Soit $g:[0;1] \to \R$ une fonction continue. Montrer que, pour tous réels $\alpha$ et $\beta$ strictement positifs, il existe $c \in [0;1]$ tel que:
> $\alpha g(0)+\beta g(1) = (\alpha + \beta)g(c)$
> On pourra d'abord traiter le cas $g(0)=g(1)$, et si ce n'est pas le cas, chercher une valeur intermédiaire intéressante entre $g(a)$ et $g(b)$

$\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}$
C'est-à-dire;
- $\ub{\frac{\alpha g(0) + \beta g(1)}{\alpha + \beta}}{\gamma} = g(c)$
Trouvons $\gamma ≤ g(0)$
- $\iff \frac{\alpha g(0) + \beta g(1)}{\alpha + \beta} - g(0) ≤ 0$
- $\iff \frac{\beta}{\alpha + \beta}(g(1) - g(0)) ≤ 0$
- $\iff g(1) ≤ g(0)$
- Donc $\gamma ≤ g(0)$
Si de plus, on cherche $\gamma ≥ g(1)$ (pour le sandwichr)
- $\iff g(0) - g(1) > 0$
- $\iff g(0) ≥ g(1)$
- Si $g(0) ≥ g(1),$
	- On a:
		- $\frac{\alpha g(0) + \beta g(1)}{\alpha + \beta} ≥ \frac{\alpha g(1) + \beta g(1)}{\alpha + \beta}$
		- $\gamma ≥ g(1)$
	- De même, $\gamma ≤ g(0)$
- Puisque $g$ continue, par le TVI il existe:
	- $c \in [0;1]$ tq $g(c) = \gamma$
- Sinon, $g(0) < g(1)$
- Donc $\gamma \in [g(1);g(0)]$
- De même.
$\square$

# Exercice 4

> Soit $f$ une fonction quelconque définie sur un intervalle $I$ de $\R$. On considère les propositions suivantes (dépendantes de $f$)
> $\mathcal{P}_1 : \forall x \in I, f(x) > 0$
> $\mathcal{P}_2:\exists \lambda > 0, \forall x \in I, f(x) ≥ \lambda$
> Montrer que $\mathcal{P_2}$ implique $\mathcal{P_1}$

