---
lang: fr
desc: Développements limités
date: 17/09/2025
---
> [!info]
> Cours présenté par **M. Ribaud**

$\newcommand{\sub}{\subset}\newcommand{\R}{\mathbb{R}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\N}{\mathbb{N}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\eq}[1]{\underset{#1}{\sim}}\newcommand{\eps}{\varepsilon}\newcommand{\td}[1]{\underset{#1}{\to}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\mc}{\mathcal}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}$
# I - Introduction

L'objectif est le suivant: on se donne $f:I \to \R, x_0 \in I,$ et on cherche à approximer $f$ par une fonction plus simple, à savoir un polynôme.

Par exemple, pour $f(x)=\sin(x)$ et $x_0=0$.

On peut remplacer $\sin(x)$ par $\sin(0) = 0$
- Pas très satisfaisant. 
- On peut mieux faire si on se rappelle que $\sin(x) \eq{0} x = 0+x$

**Étape suivante**
1. Peut-on faire mieuxL c'est-à-dire augmenter le degré du polynôme
2. Quid de la précision

# II - Les 3 formules de Taylor

On cherche à établir des formules du type:
- $f(x) = \ub{f(x_0)+a_1(x-x_0)+...+a_n(x-x_0)^n}{\text{Polynôme approximant}}+\ub{R_n(x)}{\text{Reste = erreur}}$
	- Un polynôme de degré $n$
	- $R_n(x)$ est une « marche d'erreur »
		- Évidemment, la fonctin d'origine n'étant pas un polynôme mais seulement approchée par un polynôme.

> [!warn]
> Ne **surtout** pas oublier le $R_n(x)$

## 1. Définition 1

Soit $n \in \N^*, f:I \to \R$. On dira que:
1. $f$ est de classe $\mc{C}^0(I)$ si $f$ est continue sur $I$
2. $f$ est de classe $\mc{C}^n(I)$ si $f$ est $n$-fois dérivable et si $f^{(n)}$ est continue sur $I$. 
3. $f$ est de classe $\mc{C}^{\infty}(I)$, si $f$ est de classe $\mc{C}^n(I)$ ceci $\forall n ≥ 0$

## 2. Théorème 1 (Taylor avec reste intégral)

Soit $f:I \to \R, f \in \mc{C}^{n+1}(I), x_0 \in I$ alors:
- $\forall x \in I, f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{f^{''}(x_0)}{2!}(x-x_0)^2+...+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + \int^x_{x_0}f^{(n+1)}(t)\frac{(x-t)^n}{n!}$.
## 2.1 Remarque

1. C'est la plus précise mais la plus compliquée
2. Ne jamais oublier le reste
3. En posant $x=x_0 + h$, on a en fait que $f(x) = f(x_0)+f'(x_0)h+\frac{f''(x_0)}{2!}h^2+...+\frac{f^{(n)}(x_0)}{n!}h^m + \int^h_0 f(x_0 + s)\frac{(h-s)^m}{n!}ds$

### 2.2 Preuve

Par récurrence,

**Initialisation**

- Si $n=0$
	- $f \in \mc{C}^1(I)$, on a alors $f(x) - f(x_0)=[f(t)]^x_{x_0}$
	- $\Rightarrow f(x) - f(x_0) = \int^x_{x_0}f'(t) dt$ **OK**
	- $\Rightarrow f(x)= f(x_0) + \int^x_{x_0}f'(t)dt$ **OK**

**Hérédité**
$n \to n + 1$
- On suppose que $f(x) = \sum^n_{k=0}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k + \ub{\int^x_{x_0}f^{(n+1)}(t)\frac{(x-t)^n}{n!}}{R_n(x)}$
- On calcule $R_n(x)$ via une IPP en posant $\cases{u(t) = f^{(n+1)}(t) & u'(t)=f^{(n+2)}(t) \\ v'(t) = \frac{(x-t)^n}{n!} & v(t) = -\frac{(x-t)^{n+1}}{(n+1)!}}$
- Donc $f(x) = \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k \;+\; \underbrace{\left[-f^{(n+1)}(t)\frac{(x-t)^{n+1}}{(n+1)!}\right]_{x_0}^x}_{=\,f(x_0)\frac{(x-x_0)^{n+1}}{(n+1)!}} + \int^x_{x_0}\frac{f^{(n+2)}(t)(x-t)^{n+1}}{(n+1)!}$
- $= \sum{k=0}{n+1}\frac{f^{k}(x_0)}{k!}(x-x_0)^k + \int^x_{x_0}f^{n+2}(t)\frac{(x-t)^{n+1}}{(n+1)!}dt$


## 3. Théorème 2 (Formule de Taylor-Lagrange)

Soit $f:I \to \R$ de classe $\mc{C}^{n+1}(I), x_0 \in I$. 
Alors $\forall x \in I, \exists c_x \in [x_0, x]$ ou $c_x \in [x, x_0]$ tel que:
- $f(x) = \sun{k=0}{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\frac{(x-x_0)^{n+1}}{(n+1)!}f^{(n+1)}(c_x)$


### 3.1 Lemme (formule de la moyenne)

Soit $u$ et $v$ deux fonctions contineus sur $I = [a,b]$ avec $u(x) ≥ 0, \forall x \in I$. 
Alors, $\exists c \in I$ tel que:
- $\int_I u(t) v(t) dt = u(c)\int_I v(t) dt$

### 3.2 Preuve

Soit $m = \ub{\inf}{x \in I}u(x)$ et $M = \ub{\sup}{x \in I}u(x)$
$m$ et $M$ existent et sont atteints car $u \in \mc{C}^0(I)$.
- $\forall x \in I,$ on a:
	- $m \cdot v(x) ≤ u(x) v(x) ≤ M \cdot v(x)$
	- $\int_I m \cdot v(x) dx ≤ \int_I u(x) v(x) dx ≤ \int_I M \cdot v(x) dx$
- Donc $m\int_I v(x) dx ≤ \int_I u(x) v(x) dx ≤ M \int_I v(x) dx$
- Donc $m ≤ \frac{\int_I u(x)v(x) dx}{\int_I v(x) dx} ≤ M$
Comme $u \in \mc{C}^0(I)$, par le **théorème des valeurs intermédiaires**:
- $\exists c \in I / u(xc) = \frac{\int_I u(x) v(x) dx}{\int_I v(x) dx}\Rightarrow u(x) \int_I v(x) dx = \int_I u(x) v(x) dx$

### 3.3 Preuve théorème 2

On a $f(x) = \sun{k=0}n \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k + R_n(x), R_n(x) = \int^x_{x_0}f^{(n+1)}(t)\frac{(x-t)^n}{n!}dt$

On applique le lemme à $R_n(x)$ avec $u(t)=f^{(n+1)}(t)$ et $v(t) = \frac{(x-t)^n}{n!}≥0$
- Pour $t \in [x_0, x]$ donc $t ≤ x$
- $\Rightarrow \exists c_x / R_n(x) = f^{(n+1)}(c_x)\int^x_{x_0} \frac{(x-t)^n}{n!}dt$
- $= f^{(n+1)}(c_x) = \left[-\frac{(x-t)^{n+1}}{(n+1)!}\right]^x_{x_0}$
- $= \frac{f^{(n+1)}(c_x)}{(n+1)!}(x-x_0)^{n+1}$

