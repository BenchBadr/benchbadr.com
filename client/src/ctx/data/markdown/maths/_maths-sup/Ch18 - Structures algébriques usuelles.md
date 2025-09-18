---
lang: fr
date: 16/09/2025
---

$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\Q}{\mathbb{Q}}$
# I - Loi de composition interne

## 1. Généralité

On appelle **loi de composition interne sur** $E$ toute application de $E \times E$ dans $E$.
- Traditionnellement, on utilise la notation $x*y$ pour désigner l'image d'un couple $(x,y)\in E^2$ par une loi $*$ plutôt que la notation fonctionnelle $*(x,y)$

## 2. Définition

On dit que $*$ est:
- **associative** si  $\forall(x,y,z)\in E^3$
	- $(x*y)*y=x*(y*z)$
- **commutative** si $\forall(x,y)\in E^2$
	- $x*y=y*x$


##  3. Distributivité

Soit $\oplus$ et $\otimes$ deux lois de composition interne sur $E$. On dit que $\otimes$ est distributive par rapport à $\oplus$ si pour tout $(x,y,z)\in E^3$ on a:
- $x\otimes(y \oplus z)=(x \otimes y)\oplus(x \otimes z)$
- $(x \oplus y) \otimes z = (x \otimes z) \oplus (x \otimes z)$

### 4. Élément neutre

### 4.1.1 Définition

On dit que $E$ est un **élément neutre** pour $*$ si:
- $\forall x \in E, x * e = e * x = x$

### 4.1.2 Proposition

S'il existe un élément neutre, il est unique. 

> [!info]
> **Preuve**
> Soit $e$ et $e'$ deux élément neutres.
> - on a $e*e'=e$ ($e$ est élément neutre)
> - de même, $e*e'=e'$ ($e'$ élément neutre)
> On en déduit que $e=e'$

## 5. Définition - Symétrique

Soit $E$ un ensemble muni d'une loi $*$ et possédant un élément neutre $e$. 
Un élément $x$ de $E$ est **symétrisable si**:
- $\exists y \in E / x * y = y * x = e$

### 5.1 Proposition

SI un tel élément $y$ existe, on l'appelle le symétrique et il est **unique**.

### 5.2 Proposition


Soit $E$ un ensemble muni d'une loi $*$ et possédant un élément neutre $e$. 
Soit $a$ et $b$ sont deux élément symétrisables. 
Alors $a*b$ est symétrisable et:
- $(a*b)^{-1}=b^{-1}a^{-1}$

## 6. Morphismes

### 6.1 Définition

Soit $E$ et $E'$ deux ensembles, $*$ une loi de composition interne sur $E$ et $*'$ une loi de composition interne sur $E'$.

On dit qu'une application $f$ de $E$ dans $E'$ est un **morphisme** de $(E, *)$ dans $(E', *')$ si:
- $\forall (x,y)\in E^2$ $f(x*y) = f(x)*'f(y)$


Vocabulaire:
- Un morphisme bijectif est appelé **isomorphisme**
- Un morphisme de $(E, *)$ dans lui-même est appelé **endomorphisme** de $E$.
- Un endomorphisme bijectif est appelé **automorphisme**.

> [!warn]
> À compléter

# II - Groupes

## 1. Définition

Un groupe $(G, *)$ est un ensemble associé à une opération $*$ (la loi de composition) vérifiant:
1. **Composition interne**
	- $\forall x,y \in G, x * y \in G$
2. **Associative**
	- $(x*y)*z = x*(y*z)$
3. **Existence d'un élément neutre**
	- Il existe $e \in G$ tel que
		- $\forall x \in G, x * e = x$
		- $e * x = x$
4. **Existence d'un inverse**
	- $\forall x \in G, \exists x' \in G$ tel que:
		- $x * x' = x' * x = e$

> [!tips]
> Certains groupes sont commutatifs (ou **abélien**) mais pas tous.

- **Notation traditionnelle** - $x * y$
- **Notation fonctionnelle** - $*(x,y)$
### 1.1 Exemple de groupes que l'on connaît déjà

$(\R^*, \times)$ est un groupe commutatif
1. $x,y\in\R^*$ alors $x\times y \in \R^*$
2. $x\times(y\times z) = (x \times y) \times z$
3. $1$ est l'élément neutre ($1\times x = x \times 1 = x$)
4. $x'=\frac1x$ est l'inverse de $x \in \R^*$ car $x \times \frac1x = 1$.

$(\Z, +)$ est aussi un groupe commutatif
- L'élément neutre est $0$
- $x'=-x$ est l'inverse

### 1.2 Exemples de non-groupes

Les deux exemples suivants ne **sont pas** des groupes
- $(\Z^*, \times)$
	- car $2$ n'a pas d'inverse (pour $\times$)
- $(\N, +)$
	- 3 n'a pas d'inverse (pour $+$)


### 1.3 Exemple géométrique

Soit $\mc{R}$ l'ensemble des rotations du plan dont le centre est à l'origine $O$ $(\mc{R}, \circ)$ forme un groupe commutatif.
- $\mc{R}_{\theta} \circ \mc{R}_{\theta'}$ est une rotation
- $\mc{R}_{\theta}\circ (\mc{R}_{\theta'}\circ\mc{R}_{\theta''})=(\mc{R}_\theta \circ \mc{R}_{\theta'})\circ \mc{R}_{\theta''}$
- l'élément neutre est la rotation d'angle 0 : identité du plan
- l'inverse d'une rotation $\theta$ est la rotation d'angle $-\theta$

### 1.4 Exemple géométrique non-commutatif.

Soit $\mc{I}$ l'ensemble des isométries du plan (translations, rotations, réflexions et leurs composées).
$(\mathcal{I}, \circ)$ est un groupe **non** commutatif. 
- Il suffit d'effectuer une translation puis rotation et inversement
- Les résultats sont différents.
- $\Rightarrow$ non commutatif.

## 2. Notations et règles de calcul

Soit un groupe $(G, *)$
- $x^2 = x * x$
- $x^3 = x * x * ... * x$
- $x^0 = e$ (élément neutre)
- $x^{-n}=x^{-1} * ... * x^{-1}$

Règles de calcul
- $x^m * x^n = x^{m+n}$
- $(x^m)^n = x^{mn}$
- $(x*y)^{-1}=y^{-1}*x^{-1}$
- Si $(G, *)$ est commutatif alors $(x*y)^n=x^n * y^n$

## 3. Sous-groupes

Soit $G$ un groupe. Une partie $H$ de $G$ est un **sous-groue** si elle est stable par la loi de $G$ et par passage au symétrique contient le neutre de $G$.

### 3.1 Proposition

On dit d'un sous groupe qu'il est un groupe.

## 4. Morphisme de groupes

## 4.1 Définition

Soit $G$ et $G'$ deux groupes et $f$ une fonction de $G$ dans $G'$.
- On dit que $f$ est un morphisme de groupe de $G$ dans $G'$ lorsque:
- $\forall(x,y)\in G^2, f(x*y)=f(x)*f(y)$

### 4.2 Proposition

Soit $f$ un morphisme de groupes de $G$ (d'élément neutre $e$) dans $G'$ (d'élément neutre $e'$). On a:
- $f(e) = e'$
- $\forall x \in G, (f(x))^{-1}=f(x^{-1})$
- $\forall x \in G, \forall n \in \Z, (f(x))^n = f(x^n)$

##  5. Noyau, image

Soit $G$ et $G'$ deux groupes d'éléments neutres respectifs $e$ et $e'$ ainsi que $f$ un morphisme de groupes de $G$ dans $G'$.

### 5.1 Proposition

- Si $H$ est un sous-groupe de $G$, alors $f(H)$ est un sous-groupe de $G'$.
- Si $H'$ est un sous-groupe de $G'$ alors $f^{-1}(H')$ est un sous-groupe de $G$.

### 5.2 Corollaire

- L'ensemble $f(G)$ est appelé **image** de $f$, sous-groupe de $G'$.
	- Noté $\Im(f)$
- L'ensemble $f^{-1}(\{e'\})$ appelé **noyau** de $f$ est un sous-groupe de $G$.
	- Noté $\ker(f)$

## 6. Théorème

Le morphisme $f$ est injective ssi $\ker(f) = \{e\}$


# III - Anneaux


# IV - Corps