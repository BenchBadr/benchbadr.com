$\newcommand{\R}{\mathbb{R}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}$
# Q1 - TVi

> Énoncer le théorème des valeurs intermédiaires

Soit $f:\underset{\text{intervalle}}{\underbrace{I} \to \R}$
- Si $f$ continue sur $I$ alors $f(I)$ est un intervalle.
Si $y \in [f(a), f(b)]$ avec $a,b\in I$ alors,
- Il existe $c \in [a,b]$ ou $[b,a]$ tq $f(c)=y$
# Q2 - Image intervalle

> Quelle est l'image d'un intervalle fermé et borné par une fonction continue?

L'image d'un intervalle fermé et borné par une fonction continue est un intervalle fermé et borné.

# E1 - Continue non bornée
> Donner un exemple de fonction $f$ continue sur $]0;1[$ qui ne soit pas bornée 

$f(x) = \frac1x$

# E2 - Continue mais bornée
> Donner un exemple de fonction $g$ continue sur $\R$ qui soit bornée.

$\arctan(x)$

# Q3 - Dérivable / continue

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

# E3 - Continue & ¬ Dérivable

> Donner un exemple de fonction continue sur $\R$, mais non dérivable en $0$

$x \mapsto |x|$

# Q4

> Montrer que si f admet un maximum en un point c de $]a,b[$ et si $f$ est dérivable en $c$ alors $f'( c ) = 0$.

Soit $\epsilon > 0,$
- D'une part,
	- $f'(c) = \lim{h\to0^+}\frac{f(c+h) - f(c)}{h}$
	- Or, $f(c+h) ≤ f(c)$ ($c$ étant un maximum local)
		- Donc $f(c+h) - f(c) ≤ 0$
	- Donc $f'(c) ≤ 0$
- D'autre part,
	- $f'(c) = \lim{h\to 0^-}\frac{f(c+h)-f(c)}{h}$
	- Or, $f(c+h) - f(c) ≤ 0$
		- Et, $h < 0$
	- Donc, $f'(c) ≥ 0$
Ainsi, $f'(c) = 0$

# Q5 - Rolle
> Énoncer le théorème de Rolle pour une fonction $f$ sur un intervalle $[a,b]$ avec $a<b$.

Soit $a < b, f:[a,b] \to \R,$ continue sur $[a,b]$ dérivable sur $]a,b[$ telle que:
- $f(a) = f(b)$
Alors il existe $c \in ]a;b[$ tq:
- $f'(c) = 0$
# Q6 - TAF
> Énoncer le théorème des accroissements finis pour une fonction f sur $[a,b]$ avec $a<b$.

Soit $a < b, f:[a,b] \to \R$ continue sur $[a,b]$ et dérivable sur $[a,b]$. Alors il existe $c \in ]a,b[$ tq
- $f'(c) = \frac{f(b)-f(a)}{b-a}$
# Q7 - Taylor-Young

> Enoncer et démontrer la formule de Taylor-Young pour une fonction de classe $C^n$ sur $[a,b]$ et $(n+1)$ fois dérivable sur $]a,b[$ (avec $a<b$ et n un entier strictement positif)

> [!check]
> 1. Fonction auxiliaire $g(x) = f(b) - f(x)...$
> 2. On pose $A$ pour la partie pas forcément continue. (puisque de classe $\mathcal{C}^n$)

Soit $g:[a,b]\to \R$ définie par:
- $g(x) = f(b) - f(x) - f'(b-x)-f''(x)\frac{(b-x)^2}2-...-f^{(n)}(x)\frac{(b-x)^n}{n!}-f^{n+1}(c)\frac{(b-a)^{n+1}}{(n+1)!}$
- $g(x) = f(b) - f(x) - f'(x)(b-x) - ... - f^{n}(x)\frac{(b-x)^{n}}{n!} - \frac{A(b-x)^{n+1}}{(n+1)!}$
Avec
- $A = \frac{(n+1)!}{(b-a)^{n+1}}\left(f(b)-f(a)-f'(a)(b-a)+...-f^{(n)}(a)\frac{(b-a)^n}{(n)!}\right)$
- $A = \frac{(n+1)!}{(b-a)!}(f(b) - f(a) - \sum^n_{k=0}f^k(a)\frac{(b-a)^k}{k!}$

On a,
- $g$ continue sur $[a,b]$ car:
	- $f$ est de classe $\mathcal{C}^n$ sur $[a,b]$
	- $g$ est dérivable sur $]a,b[$ car $f$ est $(n+1)$-dérivable sur $]a,b[$
	- $g(a) = g(b)$ (par choix de $A$)
		- ... en gros, on choisit $A$ tel que $g(a) = 0$
		- ... on sait que $g(b) = 0$ par la formule énoncée
Donc, d'après le théorème de Rolle,
- Il existe $c \in ]a,b[$  tel que $g'(c) = 0$
- ... on va s'en servir pour déterminer $a$
Or, pour $x \in ]a,b[$
- $g'(x) = f'(b) - f'(x) - \sum^n_{k=0}(f^{(k)}(b-x))' + A\frac{(b-x)^n}{n!}$ 
	- $f'(b)=0$ (car valeur spécifiée)
-  $\phantom{g'(x)} = f'(x) - \sum_{k=1}^n\left( f^{(k+1)}(x)\frac{(b-x)^k}{k!}-f^{(k)}(x)\frac{(b-x)^{k-1}}{(k-1)!}\right)+A\frac{(b-x)^n}{n!}$
- $\phantom{g'(x)} = \cancel{\sum_{k=0}^{n-1}\left(f^{(k+1)}(x)\frac{(b-x)^k}{k!}\right)}+\cancel{\sum_{k=0}^{n-1}f^{(k+1)}(x)}\frac{(b-x)^k}{k!} - f^{(n+1)}(x) \frac{(b-x)^n}{n!} + A\frac{(b-x)^n}{n!}$

- $g'(x) = (A-f^{(n+1)}(x))\frac{(b-x)^n}{n!}$

Or, puisque $g'(c) = 0$
$0 = A\frac{(b-c)^n}{n!}-f^{n+1}\frac{(b-c)^n}{n!}$
$0 = A - f^{n+1}(c)$
$A = f^{n+1}(c)$
$\square$


# Q8 - Unicité partie régulière

> Montrer l’unicité de la partie régulière d’un développement limité d'une fonction $f$ à l’ordre $n$ en $0$.

Soit $P_1, P_2$ deux polynômes de degré $≤ n$
- $f(a+h) = f(a)+P_1(h) + o_a(h^n)$ 
- $f(a+h) = f(a) + P_2(h) + o_a(h^n)$
- Donc,
	- $P_2 + o_a(h^n) = P_1 + o_a(h^n)$
	- $\ub{P_2(h) - P_1(h)}{Q(h)} = \ub{o_a(h^n) - o_a(h^n)}{o_a(h^n)}$
	- $N = \deg(Q) ≤ n$
	- $Q = h^N(Q_2)$
		- ... on factorise par le degré dominant
	- Or,
		- $Q(h) = o_a(h^n)$
		- $Q_2(h) = o_a(h^{n-N})$
		- Notons $R(h) = o_a(h^{n-N})$
	- Or, $R$ est continue car polynôme
		- $\lim{h\to0}R(h)=R(0)=0$
	- **Contradiction**
		- $R = 0$
		- $Q = 0$
		- $P_1 = P_2$
- Un développement limité est donc unique.
$\square$
# Aparté - Fin

## Composée
> Composée de fonctions est continue

Soit $f:I\to \R$ ($I$ ouvert non-vide)
Soit $x_0 \in I$
- On a $\lim{x \to x_0}f(x) = y_0$ **ssi**
pour toute suite $(u_n)_{n\in\N}$ à valeurs dans $I$
- $\lim{n\to+\infty}u_n = x_0,$ on a $\lim{n\to+\infty}f(u_n) = y_0$

### Preuve

Soit $(u_n)_{n\in\N}$ une suite à valeurs dans $I$ telle que $\lim{n\to+\infty}u_n = x_0$
Puisque $\lim{x\to x_0}f(x) = y_0$, on a:
- $\lim{n\to+\infty}f(u_n) = y_0$
Or, $\lim{y \to y_0}g(y) = l$ donc:
- $\lim{n\to+\infty}g(f(u_n)) = l$
Par caractérisation séquentielle de la limite, $\lim{x\to x_0}g\circ f(x) = l$

## Lipschitzienne

$f:I \to \R$ est $\ub{k}{\in\R^+}-$lipschitzienne si :
- $\forall x, y \in I, |f(y) - f(x)| ≤ k|y-x|$

> [!tips]
> Pas besoin d'être dérivable mais peut être continue

Ça peut servir pour faire des contrôles d'erreurs. 
Un **système chaotique** est un système très sensible aux conditions initiales. 

**À consulter** : Problèmes à trois corps (série / bouquin)

## Bosser

> [!info]
> Questions proches du CC2!

Si une fonction est continue a valeur entière alors elle est constante

[[DLMI - L1/maths/suites/td/TD 2#Exercice 3|TD 2]]