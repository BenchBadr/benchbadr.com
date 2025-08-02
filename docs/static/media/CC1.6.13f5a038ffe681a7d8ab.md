
# Exercice 6

> $S = \{f \in \mathcal{C}^0([0,1], \R)\} : \int^1_0xf(x)dx = 0$

- $0_{\mathcal{F}([0,1], \R)}\in S$
- Soit $f \in S, g\in S$ et $\lambda \in \R$
	- Déjà, $\lambda f+g$ est continue sur $[0,1]$ et $\int^1_0 x(\lambda f+g)(x) dx = \int^1_0x(\lambda f(x) + g(x))dx = \int^1_0(\lambda x f(x) + x g(x))dx$
	- Par linéarité de l'intégrale, $= \ub{\lambda\int^1_0 xf(x)dx}{= 0 \text{ car }f\in S} + \ub{\int^1_0 xg(x)dx}{= 0 \text{ car }g\in S} = 0$
