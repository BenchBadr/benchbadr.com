
# ppe, déf et unicité

>  Rappeler la définition du plus petit élément d'un ensemble $A \sub \R$ non vide. En supposant qu'il existe, démontrer son unicité.

On pose $ppe(A) = m$
- $m\in A$
- $\forall a \in A, a ≥ m$

> Démontrer son unicité

Soit $x,y$ deux p.p.e de $A$.
- Puisque $x$ est ppe, $\forall a \in A, x ≤ a$
- De même, $y$ est ppe donc $\forall a \in A, y ≤ a$

Or, $y\in A$ car ppe de $A$.
- On a donc $y ≤ x$ (1)

De même
- $x ≤ y$ (2)

$≤$ étant une relation d'ordre, elle est antisymétrique. 

D'après (1)+(2), on a $y = x$

---
> Donner la définition de la partie entière d'un nombre réel $x$. 

$E(x) ≤ x ≤ E(x)+1$

> Démontrer son existence

**Existence**

__Cas 1__

Si $x\in \Z$, 
- $E(x) = x$

On a bien $E(x) ≤ x ≤ E(x) +1$

__Cas 2__

Si $x \notin \Z$
- Si $x > 0$
    - Puisque $\R$ est archimédien, il existe $n \in \N$ tel que:
    - $n \cdot 1 > x$
	    - Considérons $M = \{n\in\N:n>x \}$
	    - $\exists n_0, n_0>x$ vraie car $\R$ est archimédien
	    - $M$ n'est pas vide.
	    - $M \sub \N$
	    - $M$ admet un plus petit élément qu'on note $E(x)+1$
    - De plus, 
        - $E(x) = E(x)+1-1$ 
        -  $ppe(M) = E(x)+1$
        - Ainsi, $¬(E(x) > x) \iff E(x) ≤ x$

- Sinon, $x \notin \Z, x < 0$
    - On note $y = -x$ 
    - D'après le point précédent
        - $E(y) ≤ y ≤ E(y)+1$ 
        - $\iff E(x) ≥ x ≥ E(x)+1$
        - $\iff E(x)+1 ≤ x ≤ E(x)$



> Son unicité

Soit $E_1, E_2$ deux parties entières de $x$.

Alors $\begin{cases}E_1 ≤ x < E_1+1 \\ E_2 ≤ x < E_2 + 1\end{cases}$

$\iff \begin{cases}E_1 ≤ x ≤ E_1+1 \\ -E_2 -1<-x ≤ -E_2 \end{cases}$

En additionnant, on obtient:
- $E_1 - E_2 - 1< 0 < E_1 - E_2 + 1$

Ce qui donne:
$\begin{rcases}E_1-E_2 < 1\\ E_2 - E_1 < 1\end{rcases}\Rightarrow |E_1 - E_2| < 1$

Or, par stabilité $|E_1 - E_2|<1\in \N$

Ainsi, $|E_1-E_2|=0 \iff E_1 = E_2$

On a bien démontré l'unicité



---

> Soit $A$ une partie non vide et minorée de $\R$. On pose $m = \inf(A)$. Exprimer avec des quantificateurs le fait que $m$ est le plus grand minorant de $A$. 

$m = \inf(A) \iff \forall a \in A, m ≤ a$

Et, $\forall \epsilon >0,$

$\exists a_\epsilon \in A, a_\epsilon > m + \epsilon$

---

> Soit $A$ une partie non vide de $\R$ qui admet un plus grand élément $\alpha.$ Montrer que $\alpha$ est la borne supérieure de $A$.

Supposons $\alpha = p.g.e(A)$
- Par définition du $p.g.e, \alpha$ majore $A$

Soit $M$ majorant de $A$. Montrons que $\alpha ≤ M$
- $\alpha = pge(A) \Rightarrow \alpha \in A$
- Or, $M$ majore $A$
- Donc $\alpha ≤ M$



Ainsi, $\alpha$ est le plus petit majorant. 

D'où $\alpha = \sup(A)$

---

> Soit $a,b \in \R$ avec $a < b$. Montrer que $b = \sup([a,b])$ et $b = \sup([a,b[)$

**Montrons que $b = \sup([a,b])$**

$b \in [a,b]$
$b$ majorant de $[a,b]$
Donc $b = pge([a,b]) = \sup([a,b])$

**Montrons que $b = \sup([a,b[)$**
- $b$ majore $[a,b[$ par définition de $[a,b[$ $\color{green}(1)$
- Montrons que $b$ minore les majorants de $[a,b[$ $\color{green}(2)$
    - Soit $M$ majorant de $[a,b[$ 
	- **Montrons que $b≤M$**
		- Par l'absurde, supposons $M<b$ 
		- On pose $c=\max(\frac{a+b}2,\frac{M+b}{2})$
		- On a:
		    - $c<b$ car $\frac{a+b}2<b$  et $\frac{M+b}2<b$
		    - $c≥a$ car $c≥\frac{a+b}{2}$
		- Donc $c \in [a,b[$
		    - Or, $M < b,$ donc $\frac{M+b}{2}>M$ 
		    - Et, $c ≥ \frac{M+b}2 > M$
		- $c \in [a,b]$ et $c≥ M$.
		- $M$ ne majore pas $[a,b]$
		- Par l'absurde $b≤M$
- Par $(1)+(2),$ on a $b = \sup([a,b[)$