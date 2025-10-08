---
lang: fr
desc: Cours sur les groupes
date: 25/09/2025
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}\newcommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}\newcommand{\piv}[1]{\underset{\begin{array}{l}#1\end{array}}{=}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\com}{\text{com}}\newcommand{\td}[1]{\underset{#1}{\longrightarrow}}\newcommand{\Q}{\mathbb{Q}}$

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

... à faire `°1°`


### 2.2 Sous-groupe engendré par la partie $S$. 

Soit $(G, \cdot)$ un groupe et $S \sub G$ $(S ≠ \varnothing)$.
Nous désignons par $\ms{H}_s$ l'ensemble de tous les sous-groupes de $(G, \cdot)$ contenant la partie $S$.
- On a alors, comme conséquence de la proposition précédente que:
	- $\underset{H \in \ms{H}_S}{\Huge\cap} H$ est un sous-groupe de $(G, \cdot)$

$\underset{H \in \ms{H}_S}{\Huge\cap} H$   est le plus **petit** (au sens de l'inclusion des ensemblistes). 
- Plus petit sous-groupe contenant la partie $S$. 

#### 2.2.1 Définition

Soit $(G, \cdot)$ un groupe et $S\sub G \ (S ≠ \varnothing)$
- On appelle sous-groupe engendré par $S$ le plus petit sous-groupe de $(G, \cdot)$ contenant $S$
- Il est noté $\langle S \rangle$ 
	- On a $\langle S \rangle = \underset{H \in \ms{H}_s}{\Huge\cap}H$ 

### 2.2.2 Remarque

Si $(G, \cdot)$ est un groupe et $x \in G$, on note simplement,
- $\langle x \rangle$ au lieu de $\langle \{ x\} \rangle$ 

### 2.2.3 Proposition

Soit $(G, \cdot)$ un groupe et $S \sub G,$ $(S ≠ \varnothing)$
- $\langle S \rangle = \{a_1a_2...a_n | n\in\N^*, a_i \in S \text{ ou } a_i^{-1}\in S, \forall i \in \{1, ..., n\}\}$
	- écriture paramétrique

#### 2.2.3.1 Preuve

Posons $H = \{a_1 ... a_n | n \in \N^*, a_1 \in S \text{ ou }a^{-1} \in S, i \in [|1, n|]\}$
- Il s'agit de montrer que $H = \langle S \rangle$

$(\sub)$ Mq $H \sub \langle S \rangle$ 
- Soit $x \in H,$
	- $x = a_1 \cdot a_2 \cdot ... \cdot a_{n-1} \cdot a_n$
		- avec $a_i \in S$
		- ou $a_i^{-1} \in S$
		- $\forall i \in [|i, n|]$
	- $a_i \in \langle S \rangle$ : en effet,
		- Si $a_i \in S, a_i \in \langle S \rangle$ par définition. 
		- Si $a_i^{-1} \in S$ alors  $a_i = (a_i^{-1})^{-1} \in \langle S \rangle$
			- car $\langle S \rangle < (G, \cdot)$ et $a_{i}^{-1} \in \langle S \rangle$
			- car $(a_i^{-1}\in S)$
	- Donc, 
		- $\forall i \in [| 1, n|], a_i \in \langle S \rangle$
		- Ainsi, puisque $\langle S \rangle < G$
		- $x = \pron{i=1}n a_i \in \langle S \rangle \in G$
			- par stabilité de la loi $\cdot$ sur $\langle S \rangle$
- **CCL :** $H \sub \langle S \rangle$
$(\supset)$ $\langle S \rangle \sub H$ 
- Il suffit que démontrer que $S\sub H$ $(1)$ et que $H < G$ $(2)$
	1. En effet, soit $a \in S$
		- En posant $n = 1$ 
			- et $a_1 = a$, on a $a=a_1\in H$
				- **CCL**  - $S \sub H$
	2. $H$ est un sous-groupe de $G$
		- $H ≠ \varnothing$ car $S \sub H$ et $S ≠ \varnothing$
		- Soit $x,y \in H$
			- Alors il existe $n \in \N^*, a_i \in S$ ou $a_i^{-1} \in S$ $\forall i \in [|1, n|]$ 
				- tel que $x = a_1 ... a_n$
			- et il existe, 
				- $m \in \N^*$ et $a_j' \in S$ et $a_j^{-1} \in S$
					- $\forall j \in [|1, m|]$
				- tel que $y = a_1' ... a_m'$
		- On a alors,
			- $x\cdot y = a_1 ... a_n a_1' ... a_n'$
				- posons $b_i = a_i$ $\forall i \in [|1, n|]$
				- et $b_i = a_i'$ $\forall i \in [|n+1, n+m|]$
			- alors,
				- $x \cdot y = b_1 ... b_{n+m}$ avec
					- $\forall i \in [|1, n+m|]$
			- ce qui montre que:
				- $x \cdot y \in H$
		- **CCL** - $\forall x,y \in H, x \cdot y \in H$
	3. Soit $x \in H$
		- Il existe $n \in \N^*$ $a_i \in S$ ou $a_i^{-1}\in S$
			- $\forall i \in [|1, n|]$
			- tels que:
				- $x = a_1 ... a_n$
		- On a alors,
			- $x^{-1}=(a_1...a_n)^{-1}$
			- $\phantom{x^{-1}} = a_n^{-1}a_{n-1}^{-1} ... a_2^{-1}a_1^{-1}$
		- En effet,
			- $(a_n^{-1}a_{n-1}^{-1} ... a_2^{-1}a_1^{-1})(a_1 ... a_n)$
			- $= a_n^{-1}a_{n-1}^{-1}\left(a_3^{-1}(a_2^{-1}(a_1^{-1} \cdot a_{1})a_2)a_3\right) \cdot a_n = e_g$
		- De même,
			- $a_1 ... a_n \cdot a_{n^{-1}} ... a_{1}^{-1} = e_G$

**Résumé**
- $S \sub H$
- $H < G$ donc:
	- $\underset{\align{W < G \\ \text{tq }S \sub G}}{\Huge\cap}W \sub H$ car $H \in \{W \sub G | S \sub W \text{ et }W < G \}$  
- et, $\boxed{\langle S \rangle \sub H}$

**Conclusion générale**
- $\boxed{\langle S \rangle = H}$

#### 2.2.3.2 Remarque

En notation additive,
- $\langle S \rangle = \left\{\sun{i=1}n a_i | n \in \N^* \text{ et } \forall i \in [|1, n|], a_i \in S \text{ ou }-a_i \in S\right\}$   


#### 2.2.3.3 Exemple fondamental

- $(\Z, +)$
- $\langle x \rangle = \left\{\sun{i=1}n a_i | a_i \in \{x, -x\} \forall i \in [|1, n |]\right\} = \{nx | n \in \Z\} = x\Z$ 

### 2.2.4 Définition

Soit $(G, \cdot)$ un groupe et $S\sub G$
1. On dit que $S$ est une partie génératrice de $(G, \cdot)$ 
	- $\langle S \rangle = G$
2. On dit qu'un groupe est **monogène** (un seul générateur)
	- Il existe $x \in G$ tel que $\langle x \rangle = G$
	- autrement dit, si $\{x\}$ est générateur de $G$. 
3. On dit que $G$ est de **type** fini si:
	- Il existe $\{x_1, ..., x_n\} \sub G$ tel que:
		- $G = \langle \{x_1, ..., x_n\} \rangle$
4. Un groupe monogène d'ordre fini est appelé groupe **cyclique**.
5. On dira que $x \in G$ est **d'ordre fini** si:
	- $o(\langle x \rangle)$ est fini. (Rappel: $o(\langle x \rangle) = \#\langle x \rangle$)
	- Dans tout groupe, le seul élément d'ordre $1$ est l'élément noeutre.

> [!warn]
> $\fbox3$ n'implique pas que $o(G) < +\infty$ (que l'ordre de $G$ est fini).

#### 2.2.4.1 Exemple


**Exemple 1**
$(\Z, +)$ est un groupe monogène engendré par $1$.
- $\Z = \langle 1 \rangle$
Les seuls générateurs de $\Z$ sont $1$ et $-1$. 

**Exemple 2**
$u = \left\{e^{\frac{i(2\pi)k}n} | k \in \ub{[|0, n-1|]}{k \in \Z}\right\}$ 
- $u = \left\langle e^\frac{i2\pi}n\right\rangle$
	- $= \langle e^{\frac{2\pi k}n}\rangle$ où $k \wedge n = 1$
$u_n$  est un groupe des racines $n$-ièmes de l'unité.

$(\mathbb{Q}, +)$ n'est pas monogène.
Il n'admet pas de partie génératrice finie, 
- On peut montrer (+ difficile) que $\mathbb{Q} = \langle \{\frac1n | n \in \N^*\}\rangle$


 