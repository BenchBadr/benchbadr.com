# I - Intervalles et adhérences

## **Définition** - *Intervalle*
$\newcommand{\sub}{\subset}$
$\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}$
$I \sub \R$  est un intervalle si $\forall x,y \in I,$ avec $y>x,$ on a $[x,y]\sub I$

## **Définition** - *Adhérence*

Soit $A\sub \R, A ≠ \phi$.
L'adhérence de cet ensemble de $A,$ noté $\bar{A}$ est le sous-ensemble de $\R$ contenant $A$ et toutes les limites de suites à valeur dans $A$.

### __Exemple__

$A = ]a,b], \bar{A} = [a,b]$
$A = ]0;+\infty[, \bar{A} = [0;+\infty[$
$A = \mathbb{Q}, \bar{A} = \R$ 

## **Proposition**

Soit $a,b \in \R, b> a$ et $A = ]a,b[.$
Alors $\bar{A} = [a,b]$

### __Preuve__

($\supset$) Soit $x \in [a,b]$
- Si $x \in ]a,b[,$ alors $x \in A$ donc $x \in \bar{A}$
- Si $x=b,$ cherchons $u_n$ tel que $\lim{n \in \N}, u_n \in A$ et $\lim{{n\to+\infty}}u_n = b$
	- Pour $n\in\N,$ on pose $\begin{cases}b=\frac{1}{n} \text{ si }b-\frac{1}{n} > a\\ \frac{a+b}{2} \text{ sinon}\end{cases}$
	- De cette façon, on a bien $\forall n \in \N^*, u_n \in A$ et $\lim{n\to+\infty}u_n = b$ 
Donc $b\in \bar{A}$
- De même, $a \in \bar{A}$
Donc $[a,b] \in \bar{A}$

($\sub$) Par contraposée, soit $x\notin [a,b],$ 
Montrons que $x \notin \bar{A}$. Par l'absurde, supposons qu'il existe $(u_n)_{n\in\N}$ à valeur dans $A$ et telle que $\lim{n\to+\infty}u_n=x$
- Si $x > b,$ il existe $n_0$ tel que:
	- $|u_n-x|≤\frac{|x-b|}{2}$
- On a alors
	- $u_{n_0}≥\frac{x+2}{2}>b$ impossible car $u_{n_0}\in A$

- __Contracdiction__
	- De même, si $x<a$
Donc $x \notin \bar{A}$ $\square$



# II - Limite d'une fonction

## **Définition** - *Limite finie en un point*

Soit $I$ un intervalle, $f:I \to \R$  et $x_0 \in \bar{I}$
On dit que $f$ a pour limite $l \in \R$ quand $x$ tend vers $x_0$
$\forall \epsilon > 0, \exists \delta_\epsilon>0, \forall x \in I, |x-x_0|≤\epsilon \Rightarrow |f(x)-l| < \epsilon$

## **Définition** - *Limite infinie en $x_0$*

$I$ intervalle, $f:I \to \R, x_0 \in \bar{I}$.
On dit que $f$ tend vers $\begin{cases}+\infty \\ -\infty\end{cases}$ en $x_0$ si:
$\forall M \in \R, \exists \delta_M > 0, \forall x \in I, |x-x_0|≤\delta \Rightarrow f(x) \begin{cases}≥ M \\ ≤ M\end{cases}$
On note $\lim{x\to x_0}f(x)=\begin{cases}+\infty \\ -\infty\end{cases}$

## **Définition** - *Limite finie en $±\infty$*

Soit $f:\begin{cases}]b,+\infty[ \to \R \\ ]-\infty,b[\end{cases}$ 
On dit que $f$ a pour limite $l$ en $\begin{cases}+\infty { \text{ si }} \\ +\infty\end{cases}$
$\forall \epsilon > 0, \exists M_\epsilon \in \R, \forall x \in \mathscr{D}_f, \begin{cases}x ≥ M \\ x ≤ M\end{cases} \Rightarrow |f(x)-l|≤\epsilon$

On note $\lim{x\to \begin{cases}+\infty \\ -\infty\end{cases}} f(x) = l$

## **Définition** - *Limite $\infty$ en $\infty$*

$\forall M_f \in \R, \exists M \in \R, \forall x \in \mathscr{D}_f, \biggl| \begin{matrix}x ≥ M \\ x ≤ M\end{matrix} \Rightarrow f(x) \biggl| \begin{matrix}≥ M_f \\ ≤ M_f\end{matrix}$
(limite en $\begin{cases}+\infty \\ -\infty\end{cases}$, limite vers $\begin{cases}+\infty \\ -\infty\end{cases}$

## **Proposition** - unicité de la limite

La limite d'une fonction, si elle existe est unique.

### __Preuve__

Pour le cas limite finie en $x_0 \in \bar{I}$ avec $f:I \to \R$ et $I$ intervalle.
- Supposons que $f$ tende vers $l_1$ et $l_2$ en $x_0$.
	- Par l'absurde, supposons $l_2 > l_1$
		- Posons $\Delta = l_2-l_1$
		- Puisque $f$ tend vers $l_1$ en $x_0,$ il existe $\delta_1$ tel que:
			- $\forall x \in I, |x-x_0|≤\delta_1 \Rightarrow |f(x) - l| ≤ \frac{\Delta}{4}$
		- De même, il existe $\delta_2$ tel que:
			- $\forall x \in I, |x-x_0|≤\delta_2 \Rightarrow |f(x) - l_2| ≤ \frac{\Delta}{4}$
		- Soit $\delta_3 = \min(\delta_1, \delta_2)$
			- Puisque $I$ intervalle, il existe $x$ tel que $|x-x_0|≤\delta_3$
			- et puisque $|x-x_0|≤\delta_1$ donc $f(x) ≥ l_1+\frac{\Delta}{4}$
			- et puisque $|x-x_0|≤\delta_2$ donc $f(x) ≤ l_2 - \frac{\Delta}{4}$
		- Donc $l_2 - l_1 ≤ \frac{\Delta}{2} ≤ \frac{l_2 - l_1}{2}$
		- On a alors $l_2 - l_1 ≤ 0$ or $l_2 > l_1$
	- **Contradiction** : on doit avoir $l_1 = l_2$ $\square$

## Proposition - Caractérisation séquentielle de la limite

Soit $f:I\to \R, I$ un intervalle et $x_0 \in \R \cup \{+\infty\}\cup\{-\infty\}$

Alors $\lim{x\to x_0}f(x) = l$ __ssi__ pour toute suite $(u_n)_{n\in\N}$ à valeurs dans $I$.
- qui converge vers $x_0,$ on a $\lim{n\to+\infty}f(u_n)=l$

### Preuve

(cas $l\in \R$ et $x_0 \in \R$)

($\Rightarrow$) Supposons $\lim{x\to x_0}f(x)=l$
Soit $(u_n)_{n\in\N}$ une suite à valeurs dans $I$ tq $\lim{n\to+\infty}u_n = x_0$
Mq $\lim{n\to+\infty}f(u_n)=l$

- Soit $\epsilon > 0,$ Mq il existe $n_{\epsilon}$ tel que $\forall n ≥ n_\epsilon, |f(u_n)-l|≤\epsilon$.
- Puisque $\lim{x\to x_0}f(x) = l,$ il existe un $\delta_\epsilon > 0$ tq:
	- $\forall x \in I, |x-x_0| ≤ \delta_\epsilon \Rightarrow |f(x) - l| ≤ \epsilon$ (1)
- Puisque $\lim{n\to+\infty}u_n = x_0,$ il existe $n_\epsilon \in \N,$ tq
	- $\forall n ≥ n_\epsilon, |u_n - x_0|≤\delta_\epsilon$ (2)
- Soit $n ≥ n_\epsilon,$ par (1), on a $|u_n - x_0| ≤ \delta_\epsilon$ donc par (1), on a $|f(u_n)-l|≤\epsilon$
- Donc $\lim{n\to+\infty}f(u_n)=l$

($\Leftarrow$) Supposons que toutes les suites $(u_n)_{n\in\N}$ à valeurs dans $I$ qui tendent vers $x_0$ satisfont $\lim{n\to+\infty}f(u_n)=l$
Mq $\lim{x\to x_0}f(x) = l$
- Par l'absurde, supposons $\lim{x\to x_0}f(x) ≠ l$. Construisons $(u_n)_{n\in\N}$ à valeurs dans $I$ tq $\lim{x\to x_0}u_n = x_0$ mais ne convergeant __pas__ vers $l$. 

Puisque $\lim{x\to x_0} f(x) ≠ l,$ il existe $\epsilon > 0$
- $\forall \delta > 0, \exists x \in I,$ tq $|x-x_0|≤\delta$ et $|f(x)-l|>\epsilon$ (1)
Soit $n\in \N,$ on pose $\delta = \frac{1}{n+1}$
Par $(1),$ il existe $x \in I$ tel que $|x-x_0|≤\frac{1}{n+1}$ et $|f(x)-l|>\epsilon$
On pose $u_n = x$
- On a alors
	- $\forall n \in \N, |u_n - x_0| ≤ \frac{1}{n+1}$
Donc $\lim{n\to+\infty}u_n=x_0$
et $\forall n \in \N, |f(u_n)-l|>\epsilon$

**Contradiction** car on devrait avoir $\lim{n\to+\infty}f(u_n)=l$

# III - Opérations sur les limites

Soit $f:I \to \R$ et $g:I \to \R$ avec $I$ intervalle et $x_0 \in \bar{I}$
Supposons $\lim{x\to x_0}f(x) = l_f$ et $\lim{x\to x_0}g(x)=l_g$
Alors
- $\lim{x\to x_0}(f+g)(x) = l_f+l_g$
- $\lim{x\to x_0}(f_g)(x) = l_fl_g$
- Si $f≠0$ et $l_f ≠0$ alors $\lim{x\to x_0}\frac{1}{f(x)}=\frac{1}{l_f}$
- Si $f≤g$ alors $l_f ≤ l_g$
- Si $f≤g≤h$ avec $\lim{x\to x_0}h(x) = l_f$ alors $l_g = l_f$

### __Preuve__

Soit $(u_n)_{n\in\N}$ à valeurs dans $I$ converge vers $x_0$.
On a $\lim{n\to+\infty}(f+g)(u_n) = \lim{n\to+\infty}f(u_n)+\lim{n\to+\infty}g(u_n) = l_f+l_g$ $\square$
Idem pour les autres

## Proposition

Soit $I,J$ deux intervalles, $f:I\to J$ et $g:J \to \R, x_0 \in \bar{I}$

Si $\lim{x\to x_0}f(x) = l_f$ et $\lim{x\to l_f}g(x) = l_g$ alors:
- $\lim{x \to x_0}g\circ f(x) = l_g$

### __Preuve__

Soit $(u_n)_{n\in\N}$ tq $\lim{n\to+\infty}u_n = x_0$
On a $\lim{n\to+\infty}f(u_n) = l_f$ (car $\lim{x\to x_0}f(x) = l_f$)
et $\lim{n\to+\infty}g(f(u_n)) = l_g$ (car $\lim{x\to l_f} g(x) = l_g$)

## Proposition

Soit $f \nearrow$ sur $]a,b[$
1. Si $\forall x \in ]a,b[, f(x)≤c$ alors $\lim{x\to b}f(x) = l = \sup\{f(a) | x \in ]a,b[\}$
2. Sinon $\lim{x\to b}f(x) = +\infty$

# IV - Continuité

## Définition - Continuité

Soit $f:I \to \R$ avec $I$ intervalle et $x_0 \in I$. On dit que $f$ est continue en $x_0$ si $\lim{x\to x_0}f(x)$ existe (elle vaut alors $f(x_0)$)

On dit que $f$ est continue sur $I$ si elle est continue en tout point de $I$. 

### **Remarque** 
On a alors $\lim{x\to x_0}f(x) = f(x_0)$

## Proposition
Si $f$ est continue en $x_0$ est continue en $x_0$ et $(u_n)_{n\in\N}$ suite tq $\lim{n\to+\infty}u_n = x_0$ alors $\lim{n\to+\infty}f(u_n)=f(x_0)$
$(=f(\lim{n\to+\infty}u_n))$

### **Preuve**

Caractérisation séquentielle de la limite.

## Définition - Continuité à Gauche / Droite

On dit que $f:I \to \R$ est continue *à gauche* en $x_0 \in I$ si $\forall \epsilon > 0, \exists \delta > 0, \forall x \in I$
- $x < x_0$ et $|x_0 - x| ≤ \delta \Rightarrow |f(x) - f(x_0)|≤\epsilon$
De même, on dit que $f:I \to \R$ est continue *à droite* en $x_0 \in I$ si $\forall \epsilon > 0, \exists \delta > 0, \forall x \in I$
- $x-x_0 ≤ \delta \Rightarrow |f(x) - f(x_0)|≤\epsilon$

## Proposition - Continuité relative aux bornes

$f$ est continue en $x_0$  ssi $f$ est continue à droite et à gauche en $x_0$.

### **Remarque**

Si $I = [a,b],$ alors $f$ est toujours continue à gauche en $a$. 

> [!warn]
> Dépend de la définition

### **Preuve**

Soit $I$ intervalle, $f:I\to\R$ et $x_0 \in I$.
($\Rightarrow$) Vrai. (d'après continuité rl. aux bornes)
($\Leftarrow$) Supposons $f$ continue à gauche et à droite en $x_0$.
Montrons que $f$ est continue en $x_0$
- Soit $\epsilon > 0$. 
	- Cherchons $\delta > 0$ tel que 
		- $\forall x \in I, |x-x_0|≤\delta \Rightarrow |f(x) - f(x_0)|$
	- Puisque $f$ est continue à gauche, il existe $\delta^-$ tel que:
		- $\forall x \in I, \cases{|x-x_0|≤\delta^- \\ et \\ x ≤ x_0}\Rightarrow||f(x)-f(x_0)|≤\epsilon$
	- De même, puisque $f$ est continue à droite en $x_0,$ il existe $\delta^+$ tel que:
		- $\forall x \in I, \cases{|x-x_0|≤\delta^+ \\ et \\ x ≥ x_0}\Rightarrow |f(x)-f(x_0)|≤\epsilon$
	- Soit $\delta = \min(\delta^+, \delta^-)$
	- Soit $x\in I$ tel que $|x-x_0| ≤ \delta$
		- Si $x≤x_0,$ alors $|x-x_0| ≤ \delta^-$
		- donc $|f(x) - f(x_0)| ≤ \epsilon$ 
		- Sinon, $x>x_0$ et $|x-x_0|≤\delta^+$
		- Donc $|f(x)-f(x_0)|≤\epsilon$
	- Donc $f$ est conitnue en $x_0$
$\square$

## Proposition

Une somme, un produit, un quotient (si pas d'annulation) et une composition de fonctions continues est continue. 

### **Preuve**

Cf opération sur les limites (puisque les limites définissent la continuité)

# V - Fonction continue sur un intervalle

Soit $a < b, f:[a,b] \to \R$ 

**Question** - À quoi va ressembler l'image de $f([a,b])$ ?

**Idée** - $f\underset{I}{\underbrace{([a,b])}} = [m,M]$
Deux choses à montrer:
- $I$ admet un $\min$ et un $\max$.
- $I$ est un intervalle
## Théorème des valeurs atteintes

Dans le cadre précédent, 
$f$ est bornée et atteint ses bornes. Il existe $c_m \in [a,b]$ et $c_M \in [a,b]$ tels que:
- $f(c_n) = \inf(\{f(x) | x \in [a,b]\}) = m$
- $f(c_M) = \sup(\{f(x) | x \in [a,b]\}) = M$

### Preuve

Par l'absurde, supposons $f$ non majorée (bornée).

Soit $n\in \N$. Puisque $f$ est non majorée, il existe $u_n$ tq $f(u_n) ≥ n$
Par résultat de comparaison:
- $\lim{n\to+\infty}f(u_n)=+\infty$
Si $\lim{n\to+\infty}u_n=l$. Alors $l\in[a,b]$ et $\lim{n\to+\infty}f(u_n)= f(l)$

Puisque $(u_n)_{n\in\N}$ est bornée, le théorème de Bolzano-Weierstrass nous dit qu'il existe une certaine suite $(v_n)_{n\in\N}$ extraite de $(u_n)_{n\in\N}$ convergente. 

Ainsi, $(v_n)_{n\in\N}$ est bornée par $a$ et $b$. Donc $l = \lim{n\to+\infty}v_n \in [a,b]$
Puisque $f$ est continue en $l$, on a $\lim{n\to+\infty}f(v_n) = f(l) \in \R$ $\color{green}(1)$
Or, $(f(v_n))_{n\in\N}$ est extraite de $(f(u_n))_{n\in\N}$ et $\lim{n\to+\infty}f(u_n) = +\infty$.
Donc $\lim{n\to+\infty}f(v_n) = +\infty$ $\color{green}(2)$
$(1)$ est en contradiction avec $(2)$.
Donc, par l'absurde, $f$ est bien majorée.

Montrons que $f([a,b])$ admet un maximum. 
- Puisque $f$ est majorée, $M = \sup(f([a,b]))$ existe.
- Il suffit de montrer que $M \in f([a,b])$
- Soit $n \in \N$. Puisque $M = \sup(f([a,b]))$ il existe $u_n \in [a,b]$ tel que $f(u_n)>M-\frac{1}n$
- On a alors $M-\frac{1}n ≤ f(u_n) ≤ M$
- On a $\lim{n\to+\infty}f(u_n) = M$
- Par Bolzano-Weierstrass, il existe une suite extraite de $(u_n)_{n\in\N}$ notée $(v_n)_{n\in\N}$ convergente vers $l \in [a,b]$.
- Puisque $f$ continue en $l$, on a:
	- $f(l) = \lim{n\to+\infty}f(v_n) = \lim{n\to+\infty}f(u_n)=M$

Donc $f$ atteint son $\sup$, de même, $f$ est minorée et atteint son $\inf$. 
$\square$

## Théorème des valeurs intermédiaires

Soit $f:\underset{\text{intervalle}}{\underbrace{I} \to \R}$
- Si $f$ continue sur $I$ alors $f(I)$ est un intervalle.
Si $y \in [f(a), f(b)]$ avec $a,b\in I$ alors,
- Il existe $c \in [a,b]$ ou $[b,a]$ tq $f(c)=y$

> Preuve

Soit $a,b \in I$ avec $a<b$ sans perte de généralité, on suppose $f(a) < f(b).$
- Soit $y \in [f(a), f(b)]$
- On a $[a,b]\sub I$ car $I$ est un intervalle.

**Objectif** Trouver $c$ entre $[a,b]$ tel que $f(c) = y$.

On pose $g:\biggl{|}\begin{matrix}I \to \R \\ x \mapsto f(x) - y\end{matrix}$
on cherche alors $c \in [a,b]$ tel que $g(c)=0$

Il suffit de prouver le résultat suivant:
### Théorème de Bolzano (résultat intermédiaire)
... un peu de TVI light

Si $g:[a,b] \to \R$ est continue et $g(a)g(b) < 0$ (il y a un changement de signe entre les deux)
- Alors, il exsite $c \in [a,b]$ tel que $g(c) = 0$.
- car $g(a) < 0, g(b) > 0$ et $g$ est continue car somme de fonctions continues.


On pose $a_0 = a$ et $b_0 = b$ et $c = \frac{a+b}2$
- si $g(c) ≥ 0$, on pose
	- $a_1 = a_0$
	- $b_1 = c$
- Sinon, on ose:
	- $a_1 = c$
	- $b_1 = c$
- on a alors 
	1. $g(a_1) ≤ 0$ et 
	2. $g(b_1)$
	3. $b_1 - a_1 = \frac{b_0 - a_0}{2}$
	4. $a_1 ≥ a_0$
	5. $b_1 ≤ b_0$
On construit comme ceci deux suites par itérations deux suites $a_n$ et $b_n$ telles que 
1. $\forall n \in \N, g(a_n) ≤ 0$ et 
2. $\forall n \in \N, g(b_n)≥0$. 
3. $\forall n \in \N, b_n - a_n = \frac{b_0-a_0}{2^n}$
4. $\forall n \in \N, a_{n+1} ≥ a_n$
5. $\forall n \in \N, b_{n+1} ≤ b_n$
$(3)+(4)+(5)$ nous donne $(a_1)_{n\in\N}$ et $(b_n)_{n\in\N}$ suites adjacentes.
Donc $\lim{n\to+\infty}a_n = \lim{n\to+\infty}b_n = c \in [a,b]$
Par passage à la limite, on a $\lim{n\to+\infty}g(a_n) ≤ 0$ et $\lim{n\to+\infty}g(b_n) ≥ 0$
Or, $g$ est continue donc $\lim{n\to+\infty}g(a_n) = g(\lim{n\to+\infty}a_n) = g(c)$
et $\lim{n\to+\infty}g(b_n) = g(c)$
Donc $g(c)≥0$ et $g(c) ≤ 0$
Donc $g(c) = 0$
Donc $f(c) = y$

### Corollaire

Si $f$ est continue sur $[a,b]$ 
Alors $f([a,b]) = [m, M]$

> Preuve

D'après le TVI, $f([a,b])$ est un intervalle. D'après le théorème des bornes atteintes $m = f(c_m)$ avec $c_m \in [a,b]$ et $M = f(c_M)$ avec $c_M \in [a,b]$.
	avec $m = \inf(f[a,b])$
	et $M = \sup(f([a,b]))$
Montrons que $f([a,b]) = [m, M]$
$(\sub)$ Soit $x \in f([a,b])$
On a $m ≤ x ≤ M$ par définition de $m$ et $M$. Donc $x \in [m, M]$

$(\supset)$ Soit $x \in [m, M]$
On sait que $m, M \in f([a,b])$. or, par $(1), f([a,b])$ est un intervalle. 
Donc $x \in f([a,b]).$
$\square$

## Théorème

Soit $I$ intervalle non réduit à un point et $f:I \to \R$ et continue et **strictement** monotone.
Alors, $f$ est une bijection de $I$ dans $J = f(I)$ et $f^{-1}:J \to I$.
- $f^{-1}$ est de même monotonie.
$\tan(\alpha) = \frac{B_x}{B_y}$
$\alpha = \arctan(\frac{B_x}{B_y})$

> Preuve

Soit $f: I \to \ub{J}{f(i)}$  une fonction continue et strictement croissante.
- $f$ est surjective par définition ... l'ensemble d'arrivé étant l'ensemble des images de $f$. (1)

Puisque $f$ est strictement $\nearrow$, si $y > x$ alors $f(y) > f(x)$ et donc $f(y) ≠ f(x)$.
- $f$ est donc injective. (2)

(1)+(2) donne $f$ bijective.

Mq $f^{-1}$ strict $\nearrow$. 
- Soit $x,y \in J$ tq $y > x$
- Puisque $x,y \in J$ il existe un $u,v \in I$ tel que $x = f(u)$ et $y = f(v)$
	- Puisque $y > x,$ on a $f(v) > f(u)$
	- Or, $f$ strict $\nearrow$ donc $v > u$
	- Or, $v = f^{-1}(y)$ et $u = f{-1}(x)$ par définition
- Donc $f^{-1}$ est strictement croissante.

Mq $f^{-1}$ est continue.
- Soit $y_0 \in J$
- Mq $\lim{y\to y_0}f^{-1}(y)$ existe.
	- Soit $\epsilon > 0$
		- Puisque $y_0 \in J$
		- Il existe $x_0 \in I$ tel que:
			- $y_0 = f(x_0)$
		- Supposons que $x_0$ n'est pas une borne de $I$. 
		- Il existe un $\alpha > 0$ tel que $[x_0 - \alpha, x_0 + \alpha] \sub I$
		- Soit $\epsilon'= \min(\alpha, \epsilon)$
		- Puisque $f$ et $f^{-1}$ sont $\nearrow$
			- $|f^{-1}(y)-f^{-1}(y_0)| ≤ \epsilon'$
			- $\iff f^{-1}(y_0) - \epsilon ≤ f^{-1}(y) ≤ f^{-1}(y_0)+\epsilon$
			- $\iff x_0 - \epsilon ≤ f^{-1}(y) ≤ x_0 + \epsilon$... on applique f
			- $\iff f(x_0 - \epsilon) ≤ y ≤ f(x_0 + \epsilon)$
		- Posons $\delta = \min(f(x_0+\epsilon)-f(x_0),f(x_0) - f(x_0 - \epsilon'))$
			- Soit $y \in I$ tel que
				- $|y-y_0| ≤ \delta$
			- On a alors
				- $y_0 - \delta ≤ y ≤ y_0 + \delta$
			- Donc
				- $y_0-f(x_0)+f(x_0-\epsilon') ≤y ≤ y_0 + f(x_0 + \epsilon') - f(x_0)$
			- Donc
				- $f(x_0 - \epsilon') ≤ y ≤ f(x_0 + \epsilon')$
			- Donc
				- $|f^{-1}(y)-f^{-1}(y_0)| ≤ \epsilon' ≤ \epsilon$
- Donc $f^{-1}$ continue.

De même, si $f$  strictement $\searrow$
$\square$

# VI - Fonctions Lipschitziennes et uniforme continuité

## Définition

Soit $f:I \to \R$ avec $I$ un intervalle. 
Soit $k > 0$
- $f$ est K-Lipschitzienne
si
- $\forall x, y \in I, |f(x)-f(y)| ≤ k|y-x|$

### Remarque
C'est une sous-classe des fonctions continues.

### Preuve - continuité de fonction $k$-lipschitzienne

Pour $x_0 \in I, \epsilon > 0$
- Si $|y - y_0| ≤ \frac{\epsilon}k$ alors $|f(x)-f(x_0)| ≤ \epsilon$

### Remarque
$\delta_\epsilon$ ne dépend **pas** de $x_0$.

### Exemples
- $ax+b$ est $a$-lipschitzienne
- $|x|$ est $1$-lipschiztienne
- $x^2$ n'est pas lipschitzienne
- fonctions non continues ne sont pas lipschitzienne
- n'importe quelle fonction dérivable dont la dérivée n'est pas lipschitzienne
	- $f$ $k$-lip $\iff |f'| ≤ k$

## Définition

$f:I \to \R$
- $f$ est uniformément continue
- $\forall \epsilon > 0, \exists \delta_\epsilon > 0,$ tq
	- $\forall x,y \in I,|x-y|≤\delta_\epsilon \Rightarrow |f(x)-f(y)| ≤ \epsilon$

## Théorème de Heine

Si $f:[a,b] \to \R$ est continue, alors, elle est uniformément continue. 

