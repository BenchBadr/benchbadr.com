---
lang: fr
desc: Récapitulatif du cours sur les applications linéaires
date: 18/09/2025
---
.$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\align}[1]{\begin{aligned}#1\end{aligned}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}$ $\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\align}[1]{\begin{aligned}#1\end{aligned}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}$
> [!info]
> Inspiré du Tout-en-Un de Dunod

# I - Définitions

## 1. Définitions et caractérisation

### 1.1 Définition 1

Une application $u:E \to F$ est une **applicaiton linéaire** si:
- $\cases{\forall (x,y) \in E^2, u(x+y) = u(x) + u(y) \\ \forall \lambda \in \K, \forall x \in E, u(\lambda x) = \lambda u(x)}$

Une telle application $u$ est aussi appelée **morphisme d'espaces vectoriels**, et l'on parle:
- d'endomorphisme si $E=F$
- d'isomorphisme si $u$ est bijective
- d'automorphisme si $u$ est un endomorphisme bijectif.

### 1.2 Notation

On note:
- $\mc{L}(E,F)$ l'ensemble des applications linéaires de $E$ dans $F$.
- $\mc{L}(E)= \mc{L}(E,E)$ l'ensemble des endomorphismes de $E$.

> [!check]
> Une application linéaire est en particulier un morphisme de groupe entre $(E, +)$ et $(F, +)$

### 1.3 Proposition

Si $u$ est une application linéaire de $E$ dans $F$, alors $u(0_E)=0_F$

### 1.4 Proposition

Une application $u:E \to F$ est une application linéaire si, et seulement si:
- $\forall (x,y) \in E^2, \forall \lambda \in \K$
	- $u(\lambda x + y) = \lambda u(x) + u(y)$

#### 1.4.1 Preuve

$(\sub)$ Le sens direct est immédiat. 
$(\supset)$  Supposons:
- $\forall (x,y) \in E^2, \forall \lambda \in \K, u(\lambda x + y) = \lambda u(x) + u(y)$
- En prenant le scalaire $\lambda = 1$, on obtient $\forall (x,y) \in E^2$:
	- $u(x+y) = u(x)+u(y)$
- De plus, pour $x \in E$ et $\lambda \in \K$, on a:
	- $u(\lambda x) = u((\lambda - 1)x+x) = (\lambda - 1)u(x) + u(x) = \lambda u(x)$
- Ainsi, $u$ est linéaire.

> [!tips]
> On utilise également la caractérisation suivante, plus symétrique:
> - $\forall (x,y) \in E^2, \forall (\lambda, \mu) \in \K^2, u(\lambda x + \mu y) = \lambda u(x) + \mu u(y)$

## 2. Opérations sur les applications linéaires

## 2.1 Proposition 

L'ensemble $\mc{L}(E,F)$ muni des lois usuelles est un $\K$-espace vectoriel.

### 2.2 Corollaire

Toute combinaison linéaire d'applications linéaires est linéaire.

