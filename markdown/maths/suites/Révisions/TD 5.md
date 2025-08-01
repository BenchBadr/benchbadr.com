# Q1 - Dériv. imp. continue

> Soit $I$ un intervalle ouvert non vide de $\R$ et soit $f:I \to \R$ une fonction dérivable sur $I$. Montrer qu'alors $f$ est continue sur $I$

$f'(a) = \lim{x\to a}\frac{f(x)-f(a)}{x-a}$
Donc $f(x) - f(a) = f'(a)(x-a)$
D'où:
- $\lim{x\to a}f(x) - f(a) = \lim{x \to a}f'(a)(x-a)$
	- Or, $\lim{x\to a}(x-a)= 0$, par produit
	- $\lim{x\to a}f'(a)(x-a) = 0$
- Soit $\lim{x\to a}f(x) - f(a) = 0$
- Par linéarité de limites
	- $\lim{x\to a}f(x) =f(a)$
- $f$ continue

# Q2 - Ex. Continue & ¬ Dérivable

> Donner un exemple de fonction continue sur $\R$, mais non dérivable en $0$

$x \mapsto |x|$


# Q3 - Rolle

> Énoncer le théorème de Rolle. Sous les hypothèses de ce théorème, montrer que si $f$ admet un maximum en un point $c$ de l'intervalle ouvert et $f'(c)=0$

**Énoncé - Rolle**
Soit $a < b, f:[a,b] \to \R,$ continue sur $[a,b]$ dérivable sur $]a,b[$ telle que:
- $f(a) = f(b)$
Alors il existe $c \in ]a;b[$ tq:
- $f'(c) = 0$

# Q4 - TAF

> Énoncer le théorème et l'inégalité des accroissements finis

**Énoncé TAF**
Soit $a < b, f:[a,b] \to \R$ continue sur $[a,b]$ et dérivable sur $[a,b]$. Alors il existe $c \in ]a,b[$ tq
- $f'(c) = \frac{f(b)-f(a)}{b-a}$

$f'≤k$ donc $f(b)-f(a) ≤ k(b-a)$
