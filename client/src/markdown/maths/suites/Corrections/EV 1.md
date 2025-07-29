# Correction

## Exercice 2

> $A=]-10;1]$

Par construction de $A,$ $A$ est majoré par $1$ et minorée par $-10$.
- De plus, $1\in A$ donc $1 = pge(A) = \sup(A)$
- D'après le cours, $\inf(A) = -10$
Puisque $\inf(A) \notin A, A$ n'admet pas de $ppe$


> $B=\{\frac{1}n+(-1)^n | n ≥ 7\}$

Soit $n≥7,$ on a:
- $0<\frac{1}n ≤ 1$

Donc $-1≤\frac{1}{n} + (-1)^n ≤ 2$

Donc $B$ majoré par $2$ et minoré par $-1$.

Puisque $B \sub \R.$ $B$ admet un $\sup$ et un $\inf$. 
- En prenant $n = 8,$ on a:
    - $\frac{1}n+(-1)^n = \frac{9}8$ 
- Donc $\frac{9}8 \in B$. $\color{green}(1)$
- Mq $\frac{9}8$ majore $B$.
- Soit $n ≥ 7$
    - Si $n = 7$ 
        - $\frac{1}{n}+(-1)^n = -\frac{6}7 ≤ \frac{9}8$ 
    - Si $n≥8,$ alors:
        - $\frac{1}n+(-1)^n ≤ \frac{1}n+1 ≤ \frac{1}8+1 ≤ \frac{9}7$  

Donc $\frac{9}8$ majore $B$ $\color{green}(2)$

(1)+(2) donne :
- $\frac{9}8 = pge(B) = \sup(B)$
- Mq $\inf(B) = -1$
    - Soit $\epsilon > 0,$ Mq $-1+\epsilon$ ne minore pas $B,$ c'est-à-dire il existe un $n_{\epsilon} \in B$ tel que $\frac{1}{n_\epsilon}+(-1)^n < -1+\epsilon$ 

Si $n_\epsilon$ est impair, il suffit d'avoir:
- $\frac{1}{n_\epsilon} < \epsilon -1$ c'est-à-dire $\frac{1}{n_\epsilon}$
- Il suffit donc que $n_\epsilon = E(\frac{1}{\epsilon})+1$ et impair.

Soit $n_\epsilon = \begin{cases}E(\frac{1}{n_\epsilon})+7 \text{ si }E(\frac{1}{\epsilon}) \text{ est pair } \\ E(\frac{1}{\epsilon}+8) \text{ sinon }\end{cases}$

On a alors $n_\epsilon ≥ 7$ et,
- $\frac{1}{n_\epsilon}+(-1)^n < -1+\epsilon$

Donc il existe $b \in B$ tq $b < -1+\epsilon$

Donc $-1+\epsilon$ ne minore pas $B$.

Donc $-1=\inf(B)$
- $-1\notin B$ donc $B$ n'admet pas de $ppe$

> Soit $f:\R \to \R, g:\R\to\R$ deux fonctions minorées, Mq $f+g$ est minorée

Soit $x \in \R$

Puisque $f$ est minorée, $\inf(f)$ existe et $f(x)≥\inf(f)$.

De même, $g(x) ≥ \inf(g)$

Donc $(f+g)(x) ≥ \inf(f)+\inf(g)$

Donc $\inf(f)+\inf(g)$ minore $f+g$

Par définition de $\inf(f+g),$
- $\inf(f+g)≥\inf(f)+\inf(g)$
