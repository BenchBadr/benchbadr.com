desc:Résumé des principes essentiels du calcul différentiel : définitions, propriétés, opérations et théorèmes clés.
lang:fr
date:17/03/2025

===
$\newcommand{\Z}{\mathbb{Z}}\newcommand{\N}{\mathbb{N}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}$
## I - Définition
$\newcommand{\R}{\mathbb{R}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\sub}{\subset}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}$
### Définition

**Définition** - Soit $f:I \to \R, I ≠ \phi$ et $I$ ouvert.
Soit $x_0 \in I$. $f$ est dérivable en $x_0$
Si $\underset{\begin{matrix}x \to x_0 \\ x≠ x_0 \end{matrix}}{\text{lim}}\frac{f(x) - f(x_0)}{x-x_0}$  existe.
On note alors:
- $f'(x_0) = \underset{\begin{matrix}x \to x_0 \\ x≠ x_0 \end{matrix}}{\text{lim}}\frac{f(x)-f(x_0)}{x-x_0}$

### Proposition

$f$ est dérivable en $x_0$ ssi il existe: 
- $\alpha > 0$
- $l \in \R$
- $\epsilon : [-\alpha;\alpha] \to \R$
tq $\lim{h\to0}\epsilon(h) = 0$
$f(x_0+h) = f(x_0)+lh+h\epsilon(h)$ pour tout $|h|<\alpha$

![[Pasted image 20250319152726.png]]

On a alors $f'(x_0) = l$

> Preuve

($\Rightarrow$) Supposons $f$ dérivable en $x_0$
- Puisque $I$ ouvert 
- Il existe $\alpha > 0$ tq
	- $[x_0 - \alpha, x_0 + \alpha] \sub I$
- On pose
	- $\epsilon(h) = \cases{\frac{f(x_0+h)-f(x_0)}{h}-f'(x_0) \\ 0 \text{ si } h=0}$
- On a bien, pour $|h|≤ \alpha$
	- $f(x_0+h) = f(x_0)+hf'(x_0) + h\epsilon (h)$ 
- Or, 
	- $\lim,{\begin{matrix}h\to 0 \\ h ≠ 0\end{matrix}}\frac{f(x_0+h) - f(x_0)}h = \lim{\begin{matrix}h\to 0 \\ h ≠ 0\end{matrix}} \frac{f(x) - f(x_0)}{x-x_0}$

($\Leftarrow$) Supposons que
- $f(x_0+h) = f(x_0) + hf'(x_0) + h\epsilon (h)$
- Donc, pour $h>0$,
	- $\frac{f(x_0+h)-f(x)}h = l = \epsilon(h)$
- Puisque $\lim{h\to 0}\epsilon(h)$ existe, on a 
	- $\lim{h\to 0}\frac{f(x_0+h) - f(x_0)}{h} = l + \lim{h 'to 0}\epsilon(h) = l$

$\square$

### Corollaire

Si $f$ dérivable en $x_0$ alors $f$ continue en $x_0$.

### Définition

- Si $f$ est dérivable sur $I$
- et $f'$ est continue sur $I$
On dit que $f \in \mathcal{C}^1(I)$

### Définition
On note, si elle existe:
- $f''$ la dérivée de $f'$
- $f^{(n+1)}$ la dérivée de $f^{n}$
Si $f^{n}$ continue sur $I$, on dit que 
- $f \in \mathcal{C}^n(I)$

# II - Opérations sur les dérivée

## Proposition

Soit $f,g : I \to \R$ avec $I$ intervalle non vide et ouvert.

| $i$ | **Fonction**  | **Dérivée**           | **Notes**        |
| --- | ------------- | --------------------- | ---------------- |
| 1   | $f+g$         | $f'+g'$               |                  |
| 2   | $\lambda f$   | $\lambda f'$          | $\lambda \in \R$ |
| 3   | $fg$          | $f'g+fg'$             |                  |
| 4   | $\frac1f$     | $\frac{f'}{f^2}$      | $f ≠ 0$          |
| 5   | $\frac{g}{f}$ | $\frac{g'f-gf'}{f^2}$ | $f ≠ 0$          |
| 6   | $f^n$         | $nf'f^{n-1}$          | $n \in \Z$       |
### Preuve

(1)
- $\frac{(f+g)(x)-(f+g)(x_0)}{x-x_0} = \frac{f(x) - f(x_0)}{x-x_0}$
- Par passage à la limite
- $\square$
(2) Conséquence (3)
(3)
- $\frac{fg(x)-fg(x_0)}{x-x_0}$
- $= \ub{\frac{f(x) - f(x_0)}{x-x_0}}{\to f'(x)}\ub{g(x_0)}{\to g(x_0)}+\ub{\frac{g(x) - g(x_0)}{x-x_0}}{\to g'(x)}$
- Par passage à la limite
- $\square$
(4)
- corollaire de la composition
- $\frac{\frac1{f(x)}-\frac1{f(x_0)}}{x-x_0} = \ub{\frac{f(x_0)-f(x)}{x-x_0}}{f'(x_0)} \cdot \ub{\frac1{f(x)f(x_0)}}{\frac1{f^2}}$
- Par passage à la limite
- $\square$
(5)
- Par récurrence si $n \in \N^*$ admis sinon

## Théorème - Dérivée composée

Soit $f:\ub{I}{\text{ouvert non vide}} \to J$ et $g: \ub{J}{\text{ouvert non vide}} \to \R$ et $x_0 \in I$
Alors $g \circ f$ est dérivable en $x_0$ et
- $(g\circ f)'(x_0) = f'(x_0)g'(f(x_0))$

### Preuve

Soit $x_0 \in I, k > 0,$ on a:

$\newcommand{\pa}{\phantom{g(f(x_0+h))}}$

$g(f(x_0+h)) = g(f(x_0)+\ub{hf'(x_0)+h\epsilon(h)}={h'}) \text{ tq } \lim{h\to0} \ \epsilon(h)=0$
$\pa = g(f(x_0))+h'g'(f(x_0))+h'\ub{\epsilon'(h')}{\to 0, h\to 0}$
$\pa = g(f(x_0)) + hf'(x_0)g'(f(x_0)) + \color{green}h\epsilon(h)g'(f(x_0))+h(f'(x_0)+\epsilon(h))\epsilon(hf'(x)+h\epsilon(h))$
Donc
$g(f(x_0+h)) = g(f(x_0))+hf'(x_0)g'(f(x_0))g'(f(x_0))+h\epsilon g(h)$
$\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}$
avec $\epsilon g(h) = \ov{\ub{\epsilon(h)}{\to 0, h\to 0}g'(f(x_0))}{\to 0, h\to 0} + (\ub{f'(x_0)+\ov{\epsilon(h)}{\to 0}}{\to f'(x_0)})\ub{\epsilon'(\ov{hf'(x_0)+\ov{h\ub{\epsilon(h)}{\to 0}}{\to 0}}{\to 0})}{\to 0}$
Puisque $\lim{h\to 0}\epsilon(h) = \lim{h'\to 0}\epsilon(h') = 0,$ on a bien:
- $\lim{h\to 0}\epsilon \ g(h) = 0$ 

Donc $(g \circ f')(x_0) = f'(x_0)g'(f(x_0))$

$\square$

### Corollaire

Soit $f:I \to \ov{J}{=f(i)}$ continue, strictement monotone avec $I$ et $J$ des intervalles ouverts et non-vides. 
Soit $g:J \to I$ avec $g = f^{-1}$
- Si $f$ est dérivable en $x_0$ et $f'(x_0) ≠ 0$. 
Alors,
- $g$ est dérivable en $f(x_0)$ et $g'(f(x_0)) = \frac1{f'(x_0)}$

#### Preuve

Soit $x_0 \in I$ tq $f'(x_0) ≠ 0$
- On a $g\circ f(x_0) = x_0$
Donc $(g\circ f)'(x_0) = 1$
Donc $f'(x_0)g'(f(x_0)) = 1$
Donc $g'(f(x_0)) = \frac1{f'(x_0)}$
$\square$

#### Exemple

Soit $x \in \R, \arctan'(x) = \frac1{\tan'(\ub{\arctan(x)}g)}$
Donc $\arctan'(x) = \frac1{1+(\tan^g)^2} = \frac1{1+x^2}$

---
$\tan(\arctan(x)) = x$
$\arctan'(x) \cdot \tan'(\arctan(x)) = 1$
$\arctan'(x) = \frac1{\tan'(\arctan(x))}$

### Corollaire

Si $f$ est dérivable (respectivement de classe $\mathcal{C}^1$) et que $f' ≠ 0$ sur $I$ alors $f^{-1}$ est dérivable (respectivement de classe $\mathcal{C}^1$)
avec $(f^{-1})' = \frac1{f'\circ f^{01}}$

$\newcommand{\ncr}[2]{\begin{pmatrix}#1 \\ #2\end{pmatrix}}$
## Théorème (Formule de Leibniz)

Soit $n \in \N^*, f, g:\ub{I}{\text{ouvert, non vide}} \to J$ tq $f$ et $g$ sont $n$ fois dérivables.
Alors $(fg)^{(n)} = \sum^{n}_{k=0}\ncr{n}{k}f^kg^{n-k}$  $(**)$  

### Preuve

Démontrons $(**)$ par récurrence.

**Initialisation**
On a bien $(fg)' = f'g+g'f$
Donc $(**)$ vraie pour $n=1$

**Hérédité**
Supposons $(**)$ vraie pour $n \in \N^*$
Mq $(**)$ vraie pour $n+1$
On a:
$(fg)^{(n+1)} = ((fg)^{n})'$
$\newcommand{\pb}{\phantom{(fg)^{(n+1)}}}\pb= \left(\sum{k=0}{n}\ncr{n}{k}f^{(k)}g^{(n-k)}\right)'$ ($(**)$ pour $n$)
$\pb = \sum{k=0}{n}\ncr{n}{k}f^{(k)}g^{n-k+1}+f^{(k+1)}g^{n-k}$
$\pb = \sum{k=0}{n}\ncr{n}{k}f^{(k)}g^{(n-k+1)}+\sum{k'=1}{n+1}f^{(k')}g^{(n-k'+1)}$
$\pb =\sum{k=1}{n}\left(\ncr{n}{k}+\ncr{n}{k-1}\right)f^{(k)}g^{(n-k+1)}+fg^{(n+1)}+f^{(n+1)}g$ 
Or, pour $k ≤ n+1$
- $\ncr{n}{k} + \ncr{n}{k-1} = \frac{n!}{k!(n-k)!}$
- $= \frac{n!((n+1-k)+k)}{k!(n+1-k)!}$
- $= \frac{(n+1)!}{k!(n+1-k)!}$
$\ncr{n}k+\ncr{n}{k-1} = \ncr{n+1}{k}$

Donc

$(fg)^{(n+1)} = \sum_{k=1}^{n}\ncr{n+1}kf^{(k)}g^{n+1-k}+fg$

# III - Théorème de Rolle et Th. Des accroissements finis.

## Définition

Soit $f:I \to \R$ et $x_0 \in I$
$\fbox{1}$ On dit que $f$ admet un maximum en $x_0$ si $\forall x \in I, f(x_0) ≥ f(x)$
$\fbox2$ On dit que $f$ admet un minimum en $x_0$ si $\forall x \in I, f(x_0) ≤ f(x)$
$\fbox3$ On dit que $f$ admet un maximum local en $x_0$ si $\exists \delta > 0$ tq
- $\forall x \in [x_0 - \delta;x_0+\delta], f(x_0) ≥ f(x)$
$\fbox4$ On dit que $f$ admet un minimum local en $x_0$ si $\exists \delta > 0$ tq
- $\forall x \in [x_0 - \delta;x_0+\delta], f(x_0) ≤ f(x)$

## Proposition

Soit $f:I \to \R, I$ intervalle ouvert et non-vide.
Soit $x_0 \in I,$ si $x_0$ est un extremum local de $f$ et $f$ dérivable en $x_0$ alors $f'(x_0) = 0$

### Preuve

Supposons que $f$ admette un minimum local en $x_0$
Il existe un $\delta >0$ tel que $\forall x \in [x_0 - \delta;x_0 + \delta], f(x_0) ≥ f(x)$
Puisque $f$ est dérivable en $x_0$, on a pour $|h|< \delta$
- $f(x_0 + h) = f(x_0)+hf'(x_0) + h\ov{\epsilon(h)}{\to 0, h\to 0}$
Par définition,
- $f'(x_0) = \lim{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}$
Soit $0 ≤ h ≤ \delta$
- On a $\frac{f(x_0+h)-f(x_0)}{h} ≤ 0$ 
Par passage à la limite, 
- $f'(x_0) ≤ 0$ (+)
Soit $-\delta ≤ h ≤ 0$ on a:
- $\frac{f(x_0+h)-f(x_0)}{h} ≥ 0$
Donc par passage à la limite, 
- $f'(x_0) ≥ 0$ (-)
(+)+(-) donc $f'(x_0) = 0$ (par antisymétrie)
$\square$

## Théorème de Rolle
... un peu le bolzano des dérivées
Soit $a < b, f:[a,b] \to \R,$ continue sur $[a,b]$ dérivable sur $]a,b[$ telle que:
- $f(a) = f(b)$
Alors il existe $c \in ]a;b[$ tq:
- $f'(c) = 0$
### Prevue

$f$ étant continue sur le segment $[a,b]$ elle est bornée et atteint ses bornes. 
Il existe un $c_m, c_M \in [a,b]$  tel que 
- $f$ admet un minimum $m$ en $c_m$ et 
- Et $f$ admet un maximum $M$ en $c_M$.,
Si $c_m$ est différent de $a$ et $b$ alors puisque $f$ admet un extremum en $c_m$ et $f$ est dérivable en $c_M$ alors $f'(c_m) = 0$. 
- De même, si $c_M$ est différent de $a$ et $b$
Sinon,
- $m = f(a) = f(b)$ est maximum de la fonction
Donc $f$ constante sur $[a,b]$
Donc $f' = 0$ sur $]a,b[$ donc $f'(\frac{a+b}{2})=0$
$\square$

## Théorème des accroissements finis (TAF)

Soit $a < b, f:[a,b] \to \R$ continue sur $[a,b]$ et dérivable sur $[a,b]$. Alors il existe $c \in ]a,b[$ tq
- $f'(c) = \frac{f(b)-f(a)}{b-a}$

### Preuve

On veut $g:[a;b] \to \R$ tq
- $g(b) = g(a)$
- $g'=0 \Rightarrow \frac{f(b)-f(a)}{b-a} = 0$
Soit $g :\biggl|\begin{matrix}[a,b] \to \R \\ x \mapsto f(x) - f(a) - \frac{f(b) - f(a)}{b-a}(x-a)\end{matrix}$

On a $\biggl{(}\begin{matrix}g(a) = f(a) \\ g(b) = f(b) - \frac{f(b) - f(a)}{b-a}(b-a) = f(a)\end{matrix}$
Et $g$ continue sur $[a,b]$ comme somme de fonctions continues sur $[a,b]$
- $g$ dérivable sur $]a,b[$ car somme de fonctions dérivables sur $]a,b[$
Donc, d'après le théorème de Rolle, il existe $c \in ]a,b[$ tel que $g'(c) = 0$

On a alors:
- $f'(c) = \frac{f(b)-f(a)}{b-a}$
$\square$

# IV - Variation de fonctions

## Proposition

Soit $f:\ub{I}{\text{int. ouvert ≠ }\phi}\to \R$
$f$ est constante sur $I \iff$
- $f$ continue sur $I$
- $f$ dérivable sur $\mathring{I}$ et $\forall x \in \mathring{I}, f'(x) = 0$

> [!tips] 
   $\mathring{I}$ est le plus grand intervalle ouvert contenu dans $I$. 

### Exemple
Si $I = [a,b]$
- $\mathring{I} = ]a;b[$

### Preuve
$(\Rightarrow)$ Soit $f$ une fonction continue sur $I$. 
- Elle est continue en $x_0$ en $I$ car:
	- $\forall x_0 \in I, \forall \epsilon > 0, \forall x \in I, |x-x_0|≤1 \Rightarrow |f(x) - f(x_0)|=0 ≤ \epsilon$
- Soit $x_0 \in \mathring{I},$ soit $x\in I, x ≠ x_0,$ on a:
	- $\frac{f(x)-f(x_0)}{x-x_0}=0$
- Par passage à la limite, $f$ dérivable en $x_0$ et $f'(x_0)=0$
$(\Leftarrow)$  Soit $f$ une fonction continue $\color{green}(c)$ sur $I$, dérivable sur $\mathring{I}$ $\color{blue}(d)$ et tq
- $\forall x \in \mathring{I}, f'(x) = 0$ $\color{orange}(0)$
- Soit $x_0 \in I$ (car $I$ non-vide)
	- Soit $x \in I$
	- Montrons. que $f(x)=f(x_0)$
		- Si $x < x_0$
			- Par $\color{green}(c)$, $f$ est continue sur $[x;x_0]$
			- Par $\color{blue}(d)$ $f$ dérivable sur $]x;x_0[$
			- Par le TAF, il existe un $y \in ]x;x_0[$ tq:
				- $f(x) - f(x_0) = f'(y) \cdot (x - x_0)$
			- Par, par $\color{orange}(0)$, $f'(y) = 0$ 
			- Donc $f(x) = f(x_0)$ (Idem si $x> x_0$)

Donc $f$ est constante sur $I$.

## Proposition - Rapport dérivée / croissance
Soit $f: \ub{I}{\text{int. non-vide}}\to \R$
avec $f$ continue sur $I$ et dérivable sur $I$. 
Alors:
- $f$ est croissante ssi $(+)$
	- $\forall x \in \mathring{I}, f'(x) ≥ 0$
- $f$ est décroissante ssi $(-)$
	- $\forall x \in \mathring{I}, f'(x) ≤ 0$

### Preuve
Soit $f$ continue sur $\mathring{I}$. 
Montrons que $(+)$ est vraie.
$(\Rightarrow)$ Soit $x_0 \in \mathring{I}$. Soit $x \in I, x ≠ x_0$
- Supposons que $f \nearrow$
- Puisque $f \nearrow$, $\frac{f(x) - f(x_0)}{x-x_0}≥0$
- Par passage à la limite $\lim{\begin{matrix}x \to x_0 \\ x ≠ x_0\end{matrix}}\frac{f(x)-f(x_0)}{x-x_0} = f'(x_0) ≥ 0$
$(\Leftarrow)$ Supposons $f'≥0$ sur $\mathring{I}$
- Soit $x,y \in I$ avec $y > x$
- Par $(H),$ on peut utiliser le TAF entre $x$ et $y$, on a alors:
- $\frac{f(y)-f(x)}{y-x} = f'(z)$ avec $z \in ]x,y[$
- Or, $f'(z) ≥ 0$ et $y-x ≥0$
- Donc $f(y)-f(x) ≥ 0$
- C'est-à-dire
	- $f(y)-f(x)≥0$,
	- c'est-à-dire,
		- $f(y) ≥ f(x)$
	- Donc $f \nearrow$
$\square$
On prouve $(-)$ de la même manière
$\square$

## Proposition
Sous les mêmes hypothèse que la proposition précédente.
- $(+) \ f$  strict $\nearrow,$ $f'>0$ sur $\mathring{I}$
- $(-) \ f$ strict $\searrow$

### Preuve
Idem que la proposition précédente, le $(\Leftarrow)$

### Remarque
$f$ strictement $\nearrow \Rightarrow f' ≥ 0$ sur $\mathring{I}$
- si $a < b, f([a,b])≠\{0\}$

