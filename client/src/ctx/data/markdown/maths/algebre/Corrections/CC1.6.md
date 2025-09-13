$\newcommand{\sub}{\subset}\newcommand{\R}{\mathbb{R}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\N}{\mathbb{N}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\eq}[1]{\underset{#1}{\sim}}\newcommand{\eps}{\varepsilon}\newcommand{\td}[1]{\underset{#1}{\to}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}$
# Exercice 6

> $S = \{f \in \mathcal{C}^0([0,1], \R)\} : \int^1_0xf(x)dx = 0$

- $0_{\mathcal{F}([0,1], \R)}\in S$
- Soit $f \in S, g\in S$ et $\lambda \in \R$
	- Déjà, $\lambda f+g$ est continue sur $[0,1]$ et $\int^1_0 x(\lambda f+g)(x) dx = \int^1_0x(\lambda f(x) + g(x))dx = \int^1_0(\lambda x f(x) + x g(x))dx$
	- Par linéarité de l'intégrale, $= \ub{\lambda\int^1_0 xf(x)dx}{= 0 \text{ car }f\in S} + \ub{\int^1_0 xg(x)dx}{= 0 \text{ car }g\in S} = 0$
