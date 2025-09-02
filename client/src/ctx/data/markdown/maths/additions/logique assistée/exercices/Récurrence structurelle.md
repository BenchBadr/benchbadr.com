# Récurrence structurelle

$(X, ≤)$ un ensemble ordonné bien fondé.

$M = \{$ éléments minimaux de $X \}$

Soit $P$ une propriété portant sur les éléments de $X$
- $P(m)$ vraie
- $\forall x \notin M \{\forall y < x \ P(y) \text{ vrai }\Rightarrow P(x) \text{ vraie}\}$

__Exemple__

Dans $\N\backslash\{0,1\}$

Tout élément de $\N \backslash \{0,1\}$ admet un diviseur premier.

$M = \{$ nombres premiers $\}$

$\forall m \in M,$ admet un divisuer premier. Lui-même.

Soit $x\in\N\backslash \{0,1\},$ il admet un diviseur strict $d$. 

On applique l'hypothèse de récurrence à $d$, donc $d$ admet un diviseur premier $p$. 

- $p/d$ et $d/x$ donc $p/x$

Donc $\forall x \in \N\backslash \{0,1\}$
- $x$ admet un diviseur premier.