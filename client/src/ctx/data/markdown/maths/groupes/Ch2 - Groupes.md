---
lang: fr
desc: Cours sur les groupes
date: 25/09/2025
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}$
> [!info]
> Cours présenté par **M. Martinez**
# I - Loi de composition

On supposera dans le cadre de ce cours que $*$ est associative.

## 1. Généralités

On appelle **loi de composition interne sur** $E$ toute application de $E \times E$ dans $E$.

$*:\align{E\times E \to E \\ (x,y) \mapsto *(x,y)}$



> [!info]
> Traditionnellement, on utilise la notation $x*y$ pour désigner l'image d'un couple $(x,y)\in E^2$ par une loi $*$ plutôt que la notation fonctionnelle $*(x,y)$
> 

$(E, *)$ est une notation où $*$ désigne une loi de composition interne sur $E$. 

> [!warn]
> $x * y ≠ y * x$ en général.


## 2. Opérations et notations

On dit que $*$ est:
- **associative** si  $\forall(x,y,z)\in E^3$
	- $(x*y)*y=x*(y*z)$
	- On écrit alors:
		- $x*y*z$
- **commutative** si $\forall(x,y)\in E^2$
	- $x*y=y*x$

Par ailleurs,
- **élément neutre**
	- On dit que $e\in E$ est un élément neutre de $*$ si:
		- $\forall x \in E,$
			- $x * e = e * x = x$
	- Si $(E, *)$ admettant un élément neutre $e \in E$,
		- on dit que $x \in E$ est symétrisable par la loi $*$ s'il existe $y\in E$
		- tel que $x * y = y * x = e$
		- $y$ est alors appelé **symétrique** de $x$.

## 3. Proposition - Unicité de l'élément neutre

Si $(E, *)$ admet un élément neutre $e$ celui-ci est **unique**

### 3.1 Preuve

Supposons que $e$ et $e'$ sont deux éléments neutres pour $*$. 
- On a par définition,
	- $e*e' = e$ car $e'$ est un élément neutre
- et, 
	- $e * e' = e'$ car $e$ est un élément neutre
- Par transitivité de l'égalité,
	- $e=e'$

$\square$

> [!check]
> **Remarque** : l'élément neutre, s'il existe dans $(E, *)$ s'il existe est toujours son propre symétrique.
> - $e * e = e$

## 4. Proposition - Unicité du symétrique

Si $(E, *)$ admet un élément neutre et que $x\in E$ admet un symétrique $x' \in E$ alors ce symétrique est unique.

### 4.1. Preuve

Soit $x', x''$ deux symétrique de $x$ pour $*$.
- $x' = x' * e = x' * \ub{(x*x'')}{e}$ 
- $\phantom{x' = x' * e} = (x' * x) * x''$ (par associativité)
- $\phantom{x' = x' * e} = e * x''$ (car $x'$ est symétrique de $x$ par $*$) 
- $\phantom{x' = x' * e} = x''$
- D'où $x' = x''$

### 4.2. Exemple 1

Dans $\N$ et $\Z$, l'addition et la multiplication sont des lois de composition internes associatives et même commutatives.
- $0$ est l'éléments neutre pour l'addition
- $1$ est l'élément neutre pour la multiplication

Par ailleurs,
- Dans $(\N, +)$ aucun élément non-nul n'a de symétrique.
- Dans $(\N, \times)$ aucun élément différent de $1$ n'a de symétrique
- Dans $(\Z, +)$ tout élément $x \in \Z$ admet un symétrique qui est $-x \in \Z$

Dans $(\Z, \times)$ il n'y a que deux éléments qui admettent un symétrique,
- Ce sont $1$ et $-1$. 
- Ils sont aussi leurs propre symétrique

> [!warn]
> L'élément neutre n'est pas du tout caractérisé par le fait d'être son propre symétrique.

# II. Groupes

## 1. Définition

Soit $G$ un ensemble non-vide muni de la loi de composition $*$. 
- i.e $\forall x,y \in G, x*y \in G$
On dit que: 
- $(G, *)$ est un groupe si:
	1. $*$ est associative
	2. $*$ admet un élément neutre $e \in G$
	3. Tout élément $x$ de $G$ admet un symétrique pour $*$.
		- $\forall x \in G, \exists x' \in G, x * x' = x' * x = e$
- Si on suppose **de plus** que $*$ est commutative on dira que le groupe $(G, *)$ est com

> [!info]
> Abélien en référence au mathématicien [Niels Henrik Abel](https://fr.wikipedia.org/wiki/Niels_Henrik_Abel), mort à 26 ans.

Dans un groupe $(G, *)$ on dira que les élément $x$ et $y$ **commutent** si $x * y = y * x$.

### 1.1 Exemple

Si $(G, *)$ est un groupe d'éléments neutres $e \in G$,
- alors $e$ commute avec tous les élément de $G$.

## 2. Définition - Finitude

Un groupe $(G, *)$ st dit fini s'il ne possède qu'un nombre fini d'éléments.

## 3. Notation - Ordre

Le cardinal d'un groupe fini est appelé ordre du groupe.
On le note:
- $\circ(G)$ ou $|G|$
- Parfois $\#G$

### 3.1 Remarque

$(G, *)$ admet un unique élément neutre. Tout élément neutre admet un unique symétrique.

### 3.2 Exemples

1. $E = \{e\}$
	- $*:\align{E \times E \to E \\ (e, e) \mapsto (e,e) \ub{=}{\text{def.}}} e$
	- $(E, *)$ est un groupe appelé **groupe trivial**
2. $(\Z, +)$ est un groupe abélien d'élément neutre $0$.
	- $(\Q, +), (\R, +), (\C, +)$ sont aussi abéliens.
3. Exemples additionnels:
	- $(\Z, \times)$ n'est pas un groupe
	- $(\Q, \times)$ n'est pas un groupe
	- $(\Q \backslash \{0\}, \times)$ est un groupe multiplicatif d'élément neutre $1$.
	- $(\R^*, \times), (\C^*, \times)$  sont des groupes multiplicatifs d'éléments neutre $1$
	- $(\ms{M}_n(\R), +)$   est un groupe abélien d'élément neutre la matrice nulle $0_{\ms{M}_n(\R)}$ 
	- $(\ms{M}_n(\R), \times)$ n'est pas un groupe
		- $n=2$
		- $\m{1 & 1 \\ 1 & 1}$ n'a pas de symétrique.
4. $\text{GL}_n(\R) \ub{=}{\text{def}}\{M \in \ms{M}_n(\R) | \det(M) ≠ 0\}$ 
	- groupe linéaire
	- $(\text{GL}_n(\R), \times)$ où $\times$ est la multiplication matricielle
	- est un groupe d'éléments neutre $\id_{\ms{M}_n(\R)}$
5. $E$ un ensemble vide
	- $\ms{E} = \{\phi : E \to E | \phi \text{ bijective}\}$
	- $(\ms{E}, \circ)$ où $\circ$ désigne la composition est applications
	- est un groupe d'éléments neutres
6. $\id_E$ est un groupe d'éléments neutres
	- $\id_E : \align{E \to E \\ x \mapsto x}$
7. $\forall \psi, \varphi \in \ms{E}, \psi \circ \varphi : \align{E \to E \\ x \mapsto \psi(\varphi(x))}$
8. $E = \{1, ..., n\}$
	- $\ms{S}_n = \{\sigma : \{1,...,n\} \to \{1, ..., n\} | \sigma \text{ bijective}\}$
	- $(\mc{E},\circ) = (\mc{S}_n, \circ)$
	- $\circ(\mc{S}_n) = n!$

> [!warn]
### 3.3 Notations exclusives aux abéliens

> [!warn]
> Notations exclusives aux groupes abéliens

- **Notation additive**
	- Réservée exclusivement aux groupes abéliens
	- On note $(G, +)$ le groupe étudiée,
		- $0$ l'élément neutre
- **Notation utilisée pour l'élément neutre**
	- et, $-x$ le symétrique d'un élément $x$

### 3.4 Autres notations

> [!check]
> Non réservées aux groupes abéliens

- **Notation** : Pour $n \in \Z$
	- $nx = \cases{\ub{x+x+...+x}{n \text{ fois}} \text{ si }n> 0 \\ 0n = 0 \\ \ub{(-x)+(-x)+...+(-x)}{|n| \text{ fois}} \text{ si} n<0}$ 
	- $nx = (m+n)x$
	- $(-n)(x)$
- **Notation multiplicative**
	- l'élément neutre noté 1
	- le symétrique noté 1
	- $x_0=1$
	- $x^n = \ub{x \cdot x \cdot ... \cdot x}{nx}$
	- $n \in \N$
		- $x^{-n} = \ub{x^{-1} \cdot ... \cdot x^{-1}}{n \text{ fois}}$
	- De plus,
		- $x^{m+n} = x^nx^, = x^mx^n$
		- $(x^n)^m = (x^m)^n$


**Si $x$ et $y$ commutent**
- $(x \cdot y)^n = x^n \cdot y^n$
**Si $x$ et $y$ ne commutent pas**
- $(x \cdot y)^n = \ub{(x \cdot y)(x \cdot y) \cdot ... \cdot (x \cdot y)}{n \text{ fois}}$

## 4. Définition - Produit direct de deux groupes

Soit $(G, *)$ et $(H, \perp)$ deux groupes d'éléments neutres respectifs
- $e_G \in G$
- $e_H \in H$  
On définit $\triangle : \align{(G \times H) \times (G \times H) \to G \times H \\ ((x, y), (y, b))} \mapsto (x*y, a \perp b)$ 
- Est une loi de composition associative sur $G \times H$
	- et $(G \times H,\triangle)$ est un groupe d'élément neutre $(e_G, e_H)$

# III - Sous-groupes & SG engendré

Dans la suite, $(G, \cdot)$ désigne toujours un groupe.

## 1. Définition - SG

Soit $(G, \cdot)$ un groupe et $H \sub G$.
On dit que $H$ est un sous-groupe de $G$ si:

**En notation additive** $(G, +)$
1. $H ≠ \varnothing$
2. $\forall x, y \in H, x+y \in H$
3. $\forall x \in H, -x \in H$
	- $-x$ : symétrique de $x$ pour $+$ dans $G$.

**En notation multiplicative** $(G, \cdot)$
1. $H ≠ \varnothing$
2. $\forall x,y \in H, x \cdot y \in H$
3. $\forall x\in H, x^{-1} \in H$

### 1.1 Exemple

Si $H<G$
- Alors $e \in G$
- Alors $e \in H$
- élément neutre de $G$.

## 2. Sous-groupe engendré

### 2.1 Proposition

L'intersection de deux sous-groupes de $(G, \cdot)$ est un sous-groupe de $(G, \cdot)$.

#### 2.1.1 Preuve

Soit $H_1, H_2$ deux sous-groupes de $(G, \cdot)$.
- Posons $H = H_1 \cap H_2$
1. **Élément neutre**
	- $e_g \in H_1$ et $e_G \in H_2$ donc $e_G \in H$
	- Soit,
		- $\fbox1 \  H ≠ \varnothing \ (e_G \in H)$
2. **Stabilité par la loi de composition**
	- Soit $x,y \in H$ alors $x \in H_1$ et $y \in H_1$
		- Puisque $H_1$ est un sous-groupe,
			- on a $x \cdot y \in H_1$ 
		- De même, $x,y \in H$ impose $x \in H_2$ et $y \in H_2$ et puisque $H_2 < G$
			- on a $x \cdot y \in H_2$
	- Donc $x\cdot y \in H_1 \cap H_2$ i.e $x \cdot y \in H$
		- $\boxed2 \ x \cdot y \in H$
3. Soit $x \in H$
	- Par définition de $x \in H_1$ et $x \in H_2$
	- Puisque:
		- $\rcases{H_1 < G \\ \text{ et }x \in H_1}x^{-1} \in H_1$
	- et,
		- $\rcases{H_2 < G \\ x \in x \in H_2} \ x^{-1} \in H_2$ 
	- donc, $x^{-1}\in H_1 \cap H_2$ i.e,
		- $\fbox3 \ \forall x \in H, \ x^{-1} \in H$

> [!warn]
> L'union de deux sous-groupes n'est pas un sous groupe.

**Contre-exemple** - Union pas un sous-groupe

$H_1 = 3\Z$ et $H_2 = 8\Z$
- $H_1 \cup H_2 \not < G$. 