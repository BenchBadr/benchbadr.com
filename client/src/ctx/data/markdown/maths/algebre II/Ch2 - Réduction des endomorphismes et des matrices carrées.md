---
lang: fr
desc: Réduction des endomorphismes et des matrices carrées
date: 08/10/2025
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}\newcommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}\newcommand{\piv}[1]{\underset{\begin{array}{l}#1\end{array}}{=}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\com}{\text{com}}\newcommand{\td}[1]{\underset{#1}{\longrightarrow}}\newcommand{\Q}{\mathbb{Q}}\newcommand{\supp}{\text{supp}}\newcommand{\card}{\text{card}}\newcommand{\sp}{\text{Sp}}\newcommand{\vect}[1]{\text{Vect}\left(#1\right)}\newcommand{\ifff}[1]{\underset{#1}{\iff}}$
> [!info]
> Cours présenté par **M. Déléaval**

# I - Éléments propres

## 1. Définition 1

- **Version endomorphisme** 
	- Soit $E$ un $\K$-espace vectoriel *(pas forcément de dimension finie)*
	- et $f \in \mc{L}(E)$ *(endomorphisme de $E$)*
	- On dit:
		- d'un scalaire $\lambda \in \K$ que c'est une **valeur propre** de $f$ si:
			- $x \in E, x ≠ 0_E$ et $f(x) = \lambda x$
			- L'ensemble des valeurs propres de $f$ s'appelle 
				- le **spectre** de $f$ et se note $\sp_{\K}(f)$
		- d'un vecteur $x \in E$ qu'il est un **vecteur propre** de $f$ si:
			- $x ≠ 0_E$ et $\exists \lambda \in \K : f(x) = \lambda x$
		- Avec les notations ci-dessus:
			- On dit que $\lambda$ et $x$ sont **valeur** et **vecteur propres associés**
				- si $x ≠ 0_E$ et $f(x) = \lambda x$
- **Version matrice carrée**
	- Soit $n \in \N^*$ et $A \in \ms{M}_n(\K)$. On dit 
		- d'un scalaire $\lambda$  que c'est une **valeur propre** de $A$ si:
			- $\exists X \in \ms{M}_{n,1}(\K), (X ≠ 0_{\ms{M}_{n,1}(\K)}$ et $AX = \lambda X)$ 
			- L'ensemble des valeurs propres de $A$ s'appelle le **spectre de $A$**
				- Il se note $\sp_\K(A)$.
		- d'un vecteur $X \in \ms{n,1}(\K)$  que c'est un **vecteur propre de $A$** si:
			- $X ≠ 0_{\ms{M}_{n,1}(\K)}$ et $(\exists \lambda \in \K : AX = \lambda X)$
			- Avec ces notations, on dit que $\lambda$ et $X$ sont **valeurs et vecteurs propres associés**
				- si $x ≠ 0_{\ms{M}_{n,1}(\K)}$ et $AX = \lambda X$

> [!check]
> Les valeurs et vecteurs propres d'un endomorphisme ou d'une matrice carrée sont globalement appelés **éléments propres.** 

### 1.1 Remarques

En dimension finie,
- cela revient au même de considérer le point de vu endomorphisme et le point de vue matrice carrée.
- En effet:
	- Si $B$ est une base de $E$ et $f\in \mc{L}(E)$, on a, en notant $A = \ms{M}_B(f)$
	- $\sp_{\K}(f) = \sp_{\K}(A)$ et $x \in E$ est un vecteur propre de $f$ ssi:
		- $\ms{M}_{B}(x)$ est un vecteur propre de $A$.


La définition même du spectre d'un endomorphisme donne les équivalences suivantes
- $\lambda \in \sp_{\K}(f) \iff \ker(f - \lambda \id_E) ≠ \{0_E\} \iff f-\lambda \id_E$ **n'est pas injectif**.
	- à fortiori non bijectif.
- et celle d'une matrice carré donne:
	- $\lambda \in \sp_{\K}(A) \iff A - \lambda I_n$ **n'est pas inversible**.
- en particulier,
	- $A$ est inversible ssi $0$ $\notin \sp_\K(A)$

## 2. Définition 2

1. Soit $f \in \mc{L}(E)$ et $\lambda \in \sp_\K(A).$
	- Le sous-ensemble $\ker(f - \lambda \id_E)$ de $E$ formé des vecteurs propres de $f$ associés à la valeurs propre $\lambda$ et du vecteur nul 
	- s'appelle **sous-espace propre** de $f$ associé à **la valeur propre** $\lambda$.
	- On le note $E_\lambda(f)$
2. Soit $A \in \ms{M}_n(\K)$ et $\lambda \in \sp_\K(A)$ *version matrice*
	- le sous-ensemble $\{X \in \ms{M}_{n,1}(\K) : AX = \lambda X\}$
	- de $\ms{M}_{n,1}(\K)$ formé des vecteurs propres de $A$ associés à la valeur propre $\lambda$ et du vecteur nul s'appelle **sous-espace propre** de $A$ associé à **la valeur propre** $\lambda$.
	- On le note $E_\lambda(A)$

> [!tips]
> De toute évidence, $E_\lambda(f)$ et $E_{\lambda}(A)$ sont des sous-espaces vectoriels respectivement de $E$ et e $\ms{M}_{n,1}(\K)$

### 2.1 Exemple

Soit $A = \m{1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1} \in \ms{M}_3(\R)$

Déterminons ses éléments propres.
- ... Il suffit de chercher $\lambda$ tq $AX = \lambda X$

Soit $\lambda \in \R$ et $X = \m{x_1 \\ x_2 \\ x_3} \in \ms{M_{3,1}}(\R) \backslash \{0_{\ms{M}_{3,1}(\K)}\}$ 
- $X = \lambda X \iff \cases{x_1 + x_2 + x_3 = \lambda x_1 \\ x_1 + x_2 + x_3 = \lambda x_2 \\ x_1 + x_2 + x_3 = \lambda x_3}$
- On trouve que $\sp_{\R}(A) = \{0,3\}$ et $E_0(A) = \{X \in \ms{M}_{3,1}(\R) : x_1 + x_2 + x_3 = 0\}$ 
	- $= \vect{\m{-1 \\ 1 \\ 0}, \m{-1 \\ 0 \\ 1}}$ 
- Et, $E_3(A) = \left\{X = \m{x_1 \\ x_2 \\ x_3} \in \ms{M}_{3,1}(\R) : x_1 = x_2 = x_3\right\} = \vect{\m{1 \\ 1 \\ 1}}$ 
## 3. Proposition

Soit $f \in \mc{L}(E)$  et $\lambda_1, ..., \lambda_n$ $n$ valeurs propres de $f$ toutes distinctes:
- Alors, $E_{\lambda_1}(f)...E_{\lambda_n}(f)$ sont en somme directe

> [!warn]
> Cette somme, bien que directe n'est pas nécessairement égale à $E$.

### 3.1 Preuve

On démontre ce résultat par récurrence,
 - Sachant que pour $n=1$ il n'y a rien à faire. (trivial)

Soit $n \in \N^*$ et $\lambda_1, ..., \lambda_n$ $(n+1)$-valeurs propres de $f$ toutes distinctes.
- telles que $E_{\lambda_1}(f), ..., E_{\lambda_n}(f)$ sont en somme directe.
Soit $(x_1, ..., x_{n+1}) \in E_{\lambda_1}(f) \times ... \times E_{\lambda_{n+1}}(f)$ telle que $\sun{i=1}{n+1}x_i \ub{=}{(*)} 0_E$
- En composant $(*)$ par par $f$, on a:
	- $f\left(\sun{i=1}{n+1}x_i\right) = f(0_E)$
- Et par linéarité de $f$,
	- $\sun{i=1}{n+1}f(x_i) = 0_E$
	- c'est-à-dire,
		- $\sun{i=1}{n+1}\lambda_i x_i = 0_E$
- Écrivons: $\cases{x_1 + ... + x_{n+1} = 0_E \\ \lambda_1 x_1 + ... + \lambda_{n+1}x_{n+1} = 0_E}\ifff{L_2 \leftarrow L_2 - \lambda_{n+1}L_1}\cases{x_1 + ... + x_{n+1} = 0_E \\ (\lambda_1 - \lambda_{n+1})x_1 +... + (\lambda_n - \lambda_{n+1})x_n = 0_E}$ 
	- Or, pour tout $i \in \{1, ..., n\}, (\lambda_i - \lambda_{n+1})x_i \in E_{\lambda_i}(f)$
	- car $x_i \in E_{\lambda_i}(f)$ et que c'est un sous-espace vectoriel.
- Par hypothèse de récurrence,
	- On peut donc affirmer que pour tout $i \in \{1, ..., n\}$
	- $(\lambda_i - \lambda_{n+1})x_i = 0_E$
- Et, puisque $(\lambda_i - \lambda_{n+1}) ≠ 0_{\K}, x_i = 0_E$
	- En réinjectant dans $(*)$, 
		- on obtient aussi que $x_{n+1} = 0_E$

$\square$

[Plus de détails](https://chatgpt.com/share/68e612d2-2f1c-800e-bbb9-37044845ebc8)

# II - Polynôme caractéristique

Dans cette section, $E$ désigne un $\K$-espace vectoriel de dimension finie $n ≥ 1$,

## 1. Définition

1. Version matrice
	- Soit $A \in \ms{M}_n(\K)$.
		- L'application : $\align{\K \td{} \K \\ \lambda \mapsto \det(A - \lambda I_n)}$
		- s'appelle **polynôme caractéristique** de $A$
			- On le note: $\chi_A$   
2. Version endomorphisme
	- Soit $f \in \mc{L}(E)$
		- L'application $\align{\K \td{} \K \\ \lambda \mapsto \det(f - \lambda \id_E)}$
		- s'appelle **polynôme caractéristique** de $f$
		- On le note $\chi_f$.

La terminologie **polynôme** est justifiée.
- en développant le déterminant suivant une ligne ou une colonne
	- L'application $\lambda \mapsto \det(A - \lambda I_m)$ est évidemment polynomiale.
- Et si $f \in \mc{L}(E)$ et $B$ est une base de $E$. 
	- En notant $A = \ms{M}_B(f)$, on a:
		- pour tout $\lambda \in \K, \det(f - \lambda \id_E) = \det(A - \lambda I_n) ...$

### 1.1 Exemple

Soit $A = \m{1 & 2 & 4 \\ 0 & 2 & 0 \\ 1 & 0 & 1} \in \ms{M}_{3}(\R)$
Pour tout $\lambda \in \R,$ on a:
- $\chi_A(\lambda)=\dt{1-\lambda & 2 & 4 \\ 0 & 2-\lambda & 0 \\ 1 & 0 & 1 - \lambda}$ 
	- On développe suivant $L_2$
		- $= (2-\lambda)\dt{1-\lambda & 4 \\ 1 & 1-\lambda}$ 
		- $= (2-\lambda)((1-\lambda)^2 - 4)$
		- $= (2-\lambda)(1 - \lambda - 2)(3 - \lambda)$
		- $= (2 - \lambda)$

## 2. Proposition

Soit $n \in \N \backslash \{0,1\}$
- et soit $A \in \ms{M}_n(\K)$
Alors, pour tout $\lambda \in \K,$ on a:
- $\chi_A(\lambda) = (-1)^n + (-1)^{n-1}\tr(A)\lambda^{n-1} +$ ??? $+ \det(A)$

> [!check]
> Un bon exercice est de le compléter `°X°`

En particulier,
 - $\chi_A$ est un polynôme de degré $n$.

Si $n = 2,$
- la formule s'écrit pour $\lambda \in \K$
	- $\chi_A(\lambda) = \lambda^2 - \tr(A)\lambda + \det(A)$

### 2.1 Preuve

Soit $A = (a_{i,j})_{\align{1 ≤ i ≤ n \\ 1 ≤ j ≤ n}} \in \ms{M}_n(\K)$ et notons, pour tout $(i,j) \in \{1, .., n\}^2$
- $\alpha_{i,j} = \cases{a_{i,i} - \lambda \text{ si i = j} \\ a_{i,j} \text{ si }i ≠ j}$
Alors,
- $\chi_A = \sun{\sigma \in \mc{S}_n}{}\eps(\sigma)\pron{i=1}n \alpha_{\sigma(i), i}$
	- ... on sort le morceau avec l'identité
- $= \pron{i=1}n (a_{i,i} - \lambda) + \sun{\sigma \in \mc{S}_n \backslash \{\id\}}\eps(\sigma)\pron{i=1}n \alpha_{\sigma(i), i}$

D'une part,
- $\pron{i=1}n(a_{i,i} - \lambda) = (-\lambda)^n + (a_{1,1}+...+a_{n,n})(-\lambda)^{n-1} + ....$
D'autre part,
- Si $\sigma \in \mc{S}_n \backslash \{\id\}$
	- il existe $i$ et $j$ différents avec 
		- $\sigma(i)≠i$ et $\sigma(j) ≠ j$
	- ce qui prouve que,
		- $\sun{\sigma \in \mc{S}_n \backslash \{\id\}}\eps(\sigma)\pron{i=1}n \alpha_{\sigma(i), i}$ est un polynôme de degré au plus $(n-2)$
	- $\chi_A$ est de degré $n$ de coefficient dominant $(-1)^n,$  son coefficient en $\lambda^{n-1}$ est $(-1)^{n-1}\tr(A)$
		- Enfin, $\chi_A(0) = \det(A)$ qui nous donne donc le coefficient constant.

$\square$

## 2. Proposition 2

1. Soit $f \in \mc{L}(E)$.
	- Alors $\sp_{\K}(f) = \chi^{-1}_f(\{0_\K\}) = \{x \in \K : x_f(x) = 0_\K\}$
	- i.e, les valeurs propres d'un endomorphismes sont les racines de son polynôme caractéristique.
2. Soit $A \in \ms{M}_n(\K)$. 
	- Alors $\sp_{\K}(A) = \chi^{-1}A(\{0_\K\}) = \{x \in \K : \chi_A(x) = 0_\K\}$ 
	- i.e, les valeurs propres d'une matrice sont les racines de son polynôme caractéristique.

### 2.1 Preuve

On ne prouve que le point $\fbox1$
- Soit $\lambda \in \K,$ alors 
	- $\lambda \in \sp_{\K}(f) \iff \ker(f - \lambda \id_E) ≠ \{0_E\}$
	- $\phantom{\lambda \in \sp_{\K}(f) } \iff f - \lambda \id_E$ n'est pas injectif $\curvearrowleft (*)$ 
	- $\phantom{\lambda \in \sp_{\K}(f) } \iff f - \lambda \id_E$ n'est pas bijectif. 
	- $\phantom{\lambda \in \sp_{\K}(f) } \iff \det(f - \lambda \id_E) = 0_\K$
	- $\phantom{\lambda \in \sp_{\K}(f) } \iff \chi_f(\lambda) = 0_\K$

> [!warn]
> $(*)$ dimension finie

### 2.2 Exemple

Soit $A = \m{1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1} \in \ms{M}_3(\R)$
Pour tout $\lambda \in \R$
- $\chi_A(X) = \dt{1-X & 1 & 1 \\ 1 & 1-X & 1 \\ 1 & 1 & 1-X}$
- $\piv{L_3 \leftarrow L_3 + L_2 + L_1}\dt{1_X & 1 & 1 \\ 1 & 1-X & 1 \\ 3-X & 3-X & 3-X}$
- On sort les facteurs de $L_3$
- $= (3-X)\dt{1-X & 1 & 1 \\ 1 & 1-X & 1 \\ 1 & 1 & 1}$
- $\piv{C_1 \leftarrow C_1 - C_3 \\ C_2 \leftarrow C_2 - C_3} (3-X)\dt{-X & 0 & 1 \\ 0 & -X & 1 \\ 0 & 0 & 1}$
- (est triangulaire)
- $= X^2(X-X)$
Donc $\sp_\R(A) = \{0, 3\}$


On n'obtient le résultat immédiat suivant:
### 2.3 Corollaire

Le spectre d'un endomorphisme en dimension finie $n ≥ 1$ ou d'une matrice carrée de taille $n$.
- est une partie finie ayant au plus $n$ éléments.

## 3. Définitions (2)

1. Soit $f\in \mc{L}(E)$  et $\lambda \in \sp_\K(f)$
	- On appelle **ordre de multiplicité de la valeur propre** $\lambda$
		- son ordre de multiplicité en tant que racine de son polynôme caractéristique $f$.
2. Soit $A\in \ms{M}_n(\K)$ et $\lambda \in \sp_{\K}(A)$
	- On appelle **ordre de multiplicité de la valeur propre** $\lambda$
		- son ordre de multiplicité en tant que racine du polynôme caractéristique de $A$

Lorsque l'ordre de multiplicité est $1$ ou $2$, on dira plutôt **valeur propre simple** ou **valeur propre double**.


## 4. Proposition

**Version endomorphisme**

Soit $f\in \mc{L}(E)$ et $\lambda \in \sp_{\K}(f)$
- Notons $m$ l'ordre de multiplicité de $\lambda$.
- Alors, 
	- $1 ≤ \dim(E_\lambda(f)) ≤ m$
	- « la dimension du sous-espace propre associé à une valeur propre est toujours entre 1 et la multiplicité de la valeur »
	- En particulier,
		- Si la valeur propre est simple,
			- alors, $\dim(E_\lambda(f)) = 1$ (antisymétrie)

**Version matrice**

Soit $A \in \ms{M}_n(\K)$ et $\sp_\K(f)$
- Notons $m$ l'ordre de multiplicité de $\lambda$
- Alors,
	- $1 ≤ \dim(E_\lambda(A)) ≤ m$
	- En particulier,
		- Si la valeur propre est simple,
			- alors, $\dim(E_\lambda(A)) = 1$ (antisymétrie)

### 4.1 Preuve

Posons $d = \dim(E_\lambda(f))$
- Puisque $\lambda \in \sp_{\K}(f), \ker(f - \lambda \id_E) ≠ \{0_E\}$
	- donc $d ≥ 1$
- Puisque $E_\lambda(f)$ est un sous-espace vectoriel de $E$ en dimension finie,
	- il possède une base $\{e_1, ..., e_d\}$
	- **Théorème de la base incomplète**
		- On la complète en une base $\{e_1, ..., e_d, e_{d+1}, ..., e_n\} = B$ de $E$.
	- Alors,
		- $\ms{M}_B(f) = \align{\m{\lambda & 0 & \cdots & 0 & * & \dots & \dots & * \\ 0 & \ddots & \vdots \\ \vdots & \ddots & 0 & \vdots & & & \vdots \\ \vdots & \ddots & \lambda & \vdots & \vdots & & \vdots \\ \vdots & & 0 & \vdots & & \vdots \\ \vdots & & \vdots & \vdots & & \vdots \\ 0 & \cdots & 0 & * & \dots & \dots & \dots & *} \mb{e_1 \\ \vdots \\ e_{d} \\ e_{d+1} \\ \vdots \\ e_n}}$ 
		- Alors pour tout $X \in \K$, on a par développement successifs suivant les colonnes,
		- $\chi_f(X) = (\lambda - X)^\alpha Q(x)$ avec $Q \in \K[X]$
- Donc $(\lambda - X)^d \backslash \chi_f(X),$ donc $d ≤ m$

$\square$

