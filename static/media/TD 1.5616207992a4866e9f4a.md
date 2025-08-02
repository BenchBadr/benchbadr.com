
# Td suites

## Feuille 1

### Exercice 2

> $A = [0;3[$

- 3 majore $A$ (par déf de $[0;3[$)
- 0 minore $A$
- $0=ppe(A)$ (car $0\in A$ et $0$ minorant)
- $0=\inf(A)$ (car $0$ $ppe(A)$)
- $3=\sup(A)$ (cf cours)
- pas de $pge$ car $\sup(A)\notin A$ 

> $A = \{1+\frac{1}{n}|n\in\N^*\}$

- Mq $1$ est minorant de $A$
    - Soit $a\in A$, Mq $1 ≤ a$
        - Puisque $a\in A$, il existe $n\in \N^*$ tel que:
        - $a=1+\frac{1}{n}$
        - or $\frac{1}{n}≥0$ donc $1+\frac{1}{n}≥1$
    - Donc __1 minore  A__
- De même, $2$ majore $A$
    - $2$ majore $A$ et $2=1+1=1+\frac{1}{1}\in A$
    - Donc $2=pge(A)$
    - $2=\sup(A)$ car $2=pge(A)$  
- Mq $1=\inf(A)$
    - Soit $\epsilon > 0$, mq $1+\epsilon$ ne minore pas $A$.
        -  Il suffit de trouver $a\in A / a < 1+\epsilon$
        - Donc, par définition de $A$, il suffit de trouver un $n\in\N^*/1+\epsilon>1+\frac{1}{n}$ ou $\epsilon>\frac{1}{n}$
        - c'est-à-dire $\frac{1}{\epsilon} < n$
        - Si on prend $n=E(\frac{1}{\epsilon})+1$, on a bien $\frac{1}{\epsilon}<n$

Donc $1+\epsilon$ ne minore pas $A$.

Donc $1=\inf(A)$

- Puisque $1=\inf(A)\notin A$, il n'existe pas de p.p.e de $A$.

> $A=\{x+\frac{1}{x}|x\in]0;2[\}$

$
\newcommand{\p}{\\\phantom{x+\frac{1}{x}≥n}\iff}
\\x+\frac{1}{x}≥n\iff x^2+1≥nx
\p x^2-nx+1≥0
\p n^2-4≥0 \text{ (cf. Discriminant)}
\p n ≤ 2 
$

Donc $2=ppe(A)=\inf(A)$

- Mq $A$ n'est pas majorée.
    - Soit $M\in\R,$ Mq il existe $a\in A / a > M$
    - Il suffit de trouver $x\in ]0;2[$ tel que $x+\frac{1}{x}>M$
    - Puisque $x>0$, il suffit d'avoir:
        - $\frac{1}{x}>M$, càd $x<\frac{1}{M}$
    - Prenons $x=\frac{1}{2M}$
    - On a $x+\frac{1}{x}=|\frac{1}{2M}|+2M>M$  
- Donc $M$ ne majore pas $A$. DOnc $A$ n'est pas majorée. 


---

Pour Mercredi, exo 3 et 4

...


Mercredi  (22/01)

--- 

### Exercice 3


> $A = \{\frac{n-1}{n+1}|n\in\N, n≥5\}$

- Cherchons un minorant de $A$
    - Soit $a\in A$. Alors il existe $n\in\N$ et $n≥5$ tel que:
        - $a=\frac{n-1}{n+1}\\=\frac{(n+1-1)-1}{n+1}\\= 1-\frac{2}{n+1}$.
        - On a $n+1≥6$ donc $\frac{1}{n+1}≤\frac{1}{6}$
        - Donc $-\frac{2}{n+1}≥-\frac{1}{3}\\\Rightarrow 1-\frac{2}{n+1}≥\frac{2}{3}$
        - Donc $a≥\frac{2}{3}$
        - Donc le minorant est $\frac{2}{3}$.
        - De plus, $a≤1$ donc $1$ est majorant.
    - De plus, $a≤1$ donc $1$ est majorant.
    - Puisque $a\sub\R, \sup(A)$ et $\inf(A)$ existent. 
    - De plus, $\frac{2}{3}=\frac{5-1}{5+1}\in A \Rightarrow \frac{2}{3}=p.p.e(A)=\inf(A)$ 

{tips}[/Quand il y a un ppe, c'est la borne inférieure. « Il suffit que » c'est le donc à l'envers./]

- Montrons que $1=\sup(A)$
    - On a $1$ majorant de $A$. 
    - Montrons que c'est le plus petit majorant.
        - Soit $\epsilon>0$, Mq $1-\epsilon$ n'est pas majorant de $A$.
            - On veut donc trouver $n_0$ tel que $\frac{n_0-1}{n_0+1}$
            - Il sufit que $n_0$ vérifie:
                - $-\frac{2}{n_0+1}>-\epsilon$ 
                - Il suffit que ($\Rightarrow$) $\frac{2}{n_0+1}<\epsilon$
                - Il suffit que $\frac{n_0+1}{2}>\frac{1}{\epsilon}$
                - Il suffit que $n_0>\frac{2}{\epsilon}$
                - Prenons $n_0=E(\frac{2}{\epsilon})+5$
                - On a $n_0\in\N$ et $n_0≥5$
                - Donc $\frac{n_0+1}{n_0-1}\in A$
                - De plus, $n_0≥E(\frac{2}{3})+1>\frac{2}{3}$ donc, par les calculs précédent, $a_0>1-\epsilon$
                - Donc $1-\epsilon$ ne majore pas $A$.
                - Donc $1=\sup(A)$


> $A = \{\frac{1}{x^2}+3 | x \in \R^*\}$

Cherchons un minorant de $A$. Soit $a\in A,$ il existe un $x\in\R^*$ tel que: 
- $a = \frac{1}{x^2}+3$. 
- On a $\frac{1}{x^2}>0$ 
- donc $\frac{1}{x^2}+3>3$, 
- ainsi $a>3.$

A est donc __minoré par 3__.


Montrons que c'est le plus grand des minorants:

Soit $\epsilon > 0, $ Mq $3+\epsilon$ n'est pas minorant de $A$. 

On veut trouver $x_0$ tel que $\frac{1}{x^2}+3<3+\epsilon$.

- Il suffit que $\frac{1}{x^2}<\epsilon$
- Il suffit que $x^2> \frac{1}{\epsilon}$
- Il suffit que $x_0 > \sqrt{\frac{1}{3}}$
- Prenons $x_0 = \sqrt{\frac{1}{\epsilon}}+1$
- On a $x_0\in\R^*$. Donc $a_0 = \frac{1}{x^2}+3 \in A$
- De plus, $x_0 ≥ \sqrt{\frac{1}{\epsilon}}+1>\sqrt{\frac{1}{\epsilon}}$

De plus $3\notin A$, donc $A$ n'admet pas de __p.p.e__. 

Mq $A$ n'est pas majorée
- Soit $M\in\R$, Mq il existe un $a\in A$ tel que $a>M$.
    - Prenons $x_0. = \sqrt{\frac{1}{|M|}}>M$.


Donc $M$ ne majore pas $A$, donc $A$ n'est pas majorée, n'admet ni $\sup$ ni $p.g.e$. 



### Exercice 4

> Si $f$ et $g$ sont deux fonctions majorées de $\R$ dans $\R$, montrer que $f + g$ est majorée et que $sup(f + g) ≤ sup(f) + sup(g)$. Trouver deux fonctions $f$ et $g$ telles que l’inégalité est stricte. Montrer que l’inégalité peut être stricte même si on suppose les fonctions positives.

Soient $f$ et $g$ deux fonctions majorées.
- Mq $f+g$ majorées.
- On sait que:
    - $\exists M \in \R, \forall x \in \R+q, f(x)≤M$
    - $\exists M'\in\R, \forall x\in\R+q, g(x)≤M$  
- Donc, $f(x)≤M$
- Donc $f(x)+g(x)≤M+g(x)$
- Donc $f+g≤M+M'$
- Or $g(x)≤M'$

__Conclusion__ : $f+g$ majorée par $M+M'\in\R$

De plus, puisque $f$ et $g$ sont majorées alors $\sup(f)$ et $\sup(g)$ existent. 

Puisque $\sup(f)$ et $\sup(g)$ majorent respectivement $f$ et $g$, on peut suivre le même raisonnement avec $M=\sup(f)$ et $M'=\sup(g)$ pour montrer que $\sup(f)+\sup(g)$ majorent $f+g$.

Or, $\sup(f+g)$ est le plus petit majorant de $f+g$ donc $\sup(f+g)≤\sup(f)+\sup(g)$.

---
Pour Lundi, 2 questions du 3 et l'exercice 5, 7



### Exerccie 6

> Montrons que $\sqrt{2}$ est irrationnel. 

Soit $p$ premier, Mq $\sqrt{p}$ est un irrationnel. Par l'absurde, supposons $\sqrt{p} = \frac{a}{b}$ avec $a\in \Z$ et $b\in \N ^*$ et $a \wedge b = 1$.

On a $b^2p=a^2$. 

$p|a^2$ et puisque $p$ est premier, $p|a$  **Lemme d'Euclide**

Donc $a=kp$ avec $k\in \Z$ et 
- $b^2=k^2p$

Donc $p|b^2$

Donc $a\wedge b ≥ p > 1$ donc $a\wedge b ≠ 1$

Ce qui est absurde. Donc $\sqrt{p}\in\R\backslash \mathbb{Q}$

### Exercice 8

> Tracer le graphe des fonctions $f$ et $g$ définies par :
> $f(x) = E(x+1)-E(x)$ et $g(x) = E(x+\frac{1}{2})-E(x).$
> Ensuite, conjectruer une formule pour ces fonctions et démontrer ces conjectures.



- $f:x\mapsto E(x+1)-E(x)$
- $g:x\mapsto E(x+\frac{1}{2})-E(x)$

On conjecture que $\forall x \in \R, f(x) = 1  (C)$.

__Démontrons C__

Soit $x \in \R$, montrons que $f(x) = 1$ c'est-à-dire
- $E(x+1)=E(x)+1$

Par définition de la partie entière, $E(x)$ est l'unique relatif tel que $E(x) ≤ x < E(x+1)$.
- $E(x+1)$ est l'unique relatif tel que $E(x+1)≤x+1<E(x+1)+1$

On a:
1. $E(x+1)≤x+1$
2. $E(x)≤x$
3. $E(x+1)+1>x+1$
4. $E(x)+1>x$

Si on prend $(2)+(1),$ et $(4)+1$ on obtient 

$$
\color{green}E(x)+1\color{g}≤x+1<E(x)+1+1\\
$$

Si on a $z≤x+1<z+1$ et $z\in\Z$

alors $\color{green}z\color{g}=E(x+1)$ (par unicité de la partie entière).

Par unicité de la partie entière $E(x+1)=E(x)+1$


---

On conjecture que $\forall x \in \R, g(x) = \begin{cases} 0 \text{ si } E(x)≤x<E(x)+\frac{1}{2} \\1 \text{ sinon} \end{cases}$

---

Pour Mercredi, 3 du 3, démonstration de la ocnjecture (gx dans l'exo 8) et l'exercice 9. Ex 13

---

Soit $x\in\R, $ montrons que $g(x) = \begin{cases} 0 \text{ si } E(x)≤x<E(x)+\frac{1}{2} \\1 \text{ sinon} \end{cases}$:
- Supposons $E(x)≤x<E(x)+\frac{1}{2}$

Par définition de $E(x+\frac{1}{2}), $ on a
- $E(x)=E(x+\frac{1}{2}$

On veut montrer que $E(x+\frac{1}{2})-E(x) = 0 \iff E(x)=E(x+\frac{1}{2})$

$E(x)$ est l'unique entier tel que:
- $E(x)≤x<E(x)+1$
- et $E(x+\frac{1}{2})$ est l'unique entier tel que
    - $E(x+\frac{1}{2})≤x+\frac{1}{2}<E(x+\frac{1}{2})+1$ 
- Il suffit de montrer
    - $E(x)≤x+\frac{1}{2}≤E(x)+1$
    -  ou, $E(x+\frac{1}{2})≤x≤E(x+\frac{1}{2})+1$

$E(x)≤E(x)+\frac{1}{2}≤x+\frac{1}{2}< E(x)+1$

Supposons $E(x)+\frac{1}{2}≤x<E(x)+1$

Montrons que $E(x+\frac{1}{2})-E(x)=1$

Il suffit de montrer que $E(x+\frac{1}{2})=E(x)+1$

En prenant $(H_2)+\frac{1}{2},$ on obtient

$E(x)+1≤x+\frac{1}{2}<E(x)+\frac{3}{2}$

Or, $E(x)+\frac{3}{2} < E(x)+2$

Donc 

$E(x)+1≤x+\frac{1}{2}<E(x)+2$

Donc, par unicité (et définition) de $E(x+\frac{1}{2}),$ on a 

$E(x+\frac{1}{2}) = E(x)+1$

### Exercice 9

> $|x-3|≤4$

$\forall x \in \R, |x-3|≤4 \\
\iff x\in [-1;7]\\
\iff 3-4 ≤ x ≤ 3+4$

> $|2x+5|≥2$

$\forall x \in \R, |2x+5|≤2 \\
\iff x \in ]-\infty;-\frac{7}{2}]\cup [-\frac{3}{2};+\infty[$

> $|\frac{x}{2}-1|≤-1$

$\forall x \in \R, |\frac{x}{2}-1|≤-1$ (impossible, valeur absolue négative)

> $|4x+8|≥-3$

Toujours vrai (car la valeur absolue est toujours positive).

### Exercice 11

> Soit $x,y,z\in\R$. Montrer que $|x-y| ≤ |x-z|+|y-z|$

Soit $x,y,z \in \R$

Posons $x' = x-z$ et $y' = z-y$


On a $|x-y|=|x'+y'|\\ = |x-z+z-y|\\= |x'-y'|$

Par l'inégalité triangulaire

$|x-y|≤|x'|+|y'| = |x-z|+|z-y| = |x-z|+|y-z|$

### Exercice 12

> Soit $x,y \in \R$. Montrer que $(x=y)\iff (\forall \epsilon > 0, |x-y|≤\epsilon)$

($\Rightarrow$) Supposons $x=y$
- Donc $x-y=0$
- et $|x-y|=0$
- Donc $\forall \epsilon > 0, |x-y|≤\epsilon$

($\Leftarrow$) Par contraposée, supposons: $x≠y$

- Montrons que $\exists \epsilon > 0, |x-y|>\epsilon$
- Posons $\epsilon = \frac{|x-y|}{2}$
- Puisque $x≠y, $ on a $|x-y|>0$ donc $\epsilon>0$
- De plus, on a bien $\frac{|x-y|}{2}>0$ donc $|x-y|> \frac{|x-y|}{2}$ (en ajoutant $\frac{x-y}2$

$\square$

### Exercice 13

> Soit $f : [0,1] \to [0,1]$ une fonction croissante. Le but de l’exercice est de montrer qu’il existe $a \in [0,1]$ tel que $f(a) = a$. Pour ce faire, on pose 
> 
> $$
> A = \{x \in [0,1] : x \leq f(x)\}.
> $$
> 
> - **a**. Montrer que $A$ est une partie bornée de $\mathbb{R}$ non vide.
> - **b**. On pose $a := \sup(A)$. Montrer que $0 \leq a \leq 1$.
> - **c**. Montrer que si $x \in A$ alors $x \leq f(x)$. En déduire que nécessairement $a \in A$.
> - **d**. Montrer que si $a = 1$ alors $f(a) = a = 1$.
> - **e**. Montrer que si $a \in [0,1[$, alors quelque soit $x \in ]a,1]$, $x \geq f(a)$. En déduire que $\sup(A) = f(a)$. Conclure.

1) Puisque $f:[0;1]\to [0;1]$ on a $f(0)≥0$.
    - Donc $0\in A$
    - De plus, $A$ est minorée par $0$ et majorée par $1$ par construction.
    - Donc $A$ est uen partie bornée non vide de $\R$
2) $1$ majore $A$ donc $a=\sup(A)≤1$. (plus petit majorant)
    - $0\in A$ donc $a≥0.$
    - On a bien $0≤a≤1$
3. Soit $x\in A,$ 
    - Par définition de $A, 
        - $x ≤ f(x)$ et $x≤a$ car $a=\sup(A)$ (1)
        - Or $f \nearrow$ donc $f(x)≤f(a)$ (2)
    -  $(1)+(2)$ donne $x≤f(a)$
    - :x: On admet $a\in A$
    - $a\in A$ revient à dire que $a≤f(a)$
    - Or, on a montré que $x≤f(a)$
    - D'après la définition du majorant, $f(a)>a$ car $a$ est majorant et le plus petit des majorants. 
    - Donc $a\in A$
4. Supposons $a=1$
    - $f(a)≤1$ car $f:[0;1]\to[0;1]$
    - et $a\in A$ donc $1=a≤f(a) ≤ 1$
    - Donc $f(a)=1$
5. Supposons $a\in [0;1[$
    - Montrons que $\forall x \in ]a;1[, x≥f(a)$
    - On a $x>a$ et $x\notin A$
        - Donc $x>f(x)$ 
        - et $f(x)≥f(a)$ car $f\nearrow$ donc $x > f(a)$
6. Puisque $a≤f(a), f(a)$ majore $A$ (cf. question 2)
    - On a $f(a)≥a$ et $a≥f(a)$
    - Donc $a = f(a) = \sup(A)$

--- 

Pour Lundi prochain, exercice 5
