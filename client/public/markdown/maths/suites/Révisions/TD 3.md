# Démo 1

> Soit $f,g:\R\to\R$ et $x_0 \in \R$.
>  Écrire la définition quantifiée de $f$ est continue en $x_0$. 
>  Montrer que si $f$ et $g$ sont continues en $x_0$ alors $f+g$ est continue en $x_0$

$\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}$
## Q1 - Continuité
**Définition**
$\forall \epsilon > 0, \exists \delta > 0, \forall x \in \R, |x-x_0|<\delta \Rightarrow |f(x) - f(x_0)|≤\epsilon$

## Q2 - Additivité
**Preuve additivité**
Soit $f$ et $g$ deux fonctions continues en $x_0$.
- $\lim{x\to x_0}f(x) = f(x_0)$
-  $\lim{x\to x_0}g(x) = g(x_0)$
Ainsi, par additivité de limites,
- $\lim{x\to x_0}f(x)+g(x) = \lim{x\to x_0}(f+g)(x) = f(x_0) + g(x_0)$

## Dém. additivité limite

- $\lim{x \to a}f(x) = L$
- $\lim{x \to a}g(x) = M$

$\forall \epsilon_1 > 0, \exists \delta > 0, |x - x_0| < \delta_f \Rightarrow |f(x) - L| < \epsilon_1$
$\forall \epsilon_2 > 0, \exists \delta > 0, |x - x_0| < \delta_g \Rightarrow |g(x) - M| < \epsilon_2$
- Posons $\delta = \min(\delta_f, \delta_g)$
- Posons $\epsilon = \min(\epsilon_1, \epsilon_2)$


Pour $|x - x_0| < \delta$
- $\cases{|f(x) - L| < \epsilon \\ |g(x) - M| < \epsilon}$
Par somme
- $\iff |f(x) -L|+|g(x) - M| < 2\epsilon$
- $\iff |f(x)+g(x) - (L+M)| < 2\epsilon$
Posons $\epsilon' = 2\epsilon$
Alors,
- $\forall \epsilon, \exists \delta > 0, |x-x_0|\Rightarrow|f(x) + g(x) - (L+M)|<\epsilon'$
Ainsi,
- $\lim{x\to a}(f+g)(x) = L + M = \lim{x\to a}f(x) +\lim{x\to a}g(x)$
$\square$




# Démo 2
> Soit $f:\R\to\R$ et $x_0 \in \R$. Énoncer la caractérisation séquentielle de la continuité de $f$ en $x_0$. Démontrer que la composée de deux fonctions continues est continue.

## Q1 - Caractérisation séquentielle de la continuité
**Énonciation**
Soit $f:I\to \R, I$ un intervalle et $x_0 \in \R \cup \{+\infty\}\cup\{-\infty\}$
Alors $\lim{x\to x_0}f(x) = l$ __ssi__ 
- pour toute suite $(u_n)_{n\in\N}$ à valeurs dans $I$ qui converge vers $x_0,$
	- on a $\lim{n\to+\infty}f(u_n)=l$

## Q2 - Composée
## **Démo composée**
Soit $f$ et $g$ deux fonctions continues dans $I$, par définition:
- Soit $x_n$ telle que $\lim{n\to \infty}x_n = x_0$
- $f$ est continue, donc:
	- $\lim{x\to \infty}f(x_n) = f(x_0)$
- de même, $g$ est continue, donc:
	-  $\lim{x\to \infty}g(x_n) = g(x_0)$
- Par composée de limite,
	- $\lim{x\to\infty}g(f(x_n)) = \lim{x\to\infty}g(f(x_0))$
$f \circ g$ est donc bien continue.
$\square$

## Démo limite comp
Caractérisation séquentielle

