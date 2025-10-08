---
lang: fr
desc: Entrainement
date: 05/10/2025
---

$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}\newcommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}\newcommand{\piv}[1]{\underset{\begin{array}{l}#1\end{array}}{=}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\com}{\text{com}}\newcommand{\td}[1]{\underset{#1}{\longrightarrow}}\newcommand{\Q}{\mathbb{Q}}\newcommand{\supp}{\text{supp}}\newcommand{\card}{\text{card}}$
# SG de $\Z$ sont $n\Z$

> Les sous groupe de $\Z$ sont exactement les $n\Z$ avec $n\in \Z$.

> [!check]
> **Propriété**
> Soit $(G, +)$ un groupe et soit $H$ une partie de $G$.
> - $H$ est non-vide.
> - $H$ est stable par addition : $\forall x,y \in H, x+y \in H$
> - $H$ est stable par passage à l'opposé:
> 	- $\forall x \in H, -x \in H$

> [!tips]
> **Propriété**
> Toute partie non vide de $\N$ admet un plus petit élément


Soit $n \in \N$,
- $n\Z = \{nk, k \in \Z\} = \{0,n,-n,2n, -2n, ...\}$

**Montrons que tous les $n\Z$ sont des sous-groupes**
D'une part,
- $n \in n\Z$ donc non-vide.
Stabilité par addition
- Soit $x$ et $y \in n\Z$ 
	- Il existe 
		- $k \in \Z$ tel que $x = nk$
		- $k' \in \Z$ tel que $y = nk'$
	- $x+y = nk + nk' = n\ub{(k + k')}{\in \Z}$ 
	- Donc $x+y \in n\Z$.
Stabilité par passage à l'opposé
- Soit $x \in \Z$, il existe $k \in \Z$ tel que $x = nk$
	- $-x = nk = n(-k)$ donc $-x \in n\Z$

Donc $n\Z$ est un sous-groupe de $\Z$. 

 