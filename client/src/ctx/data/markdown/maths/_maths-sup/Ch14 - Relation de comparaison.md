---
lang: fr
date: 28/09/2025
desc: Analyse asymptotique, relations de comparaison
---

> [!info]
> Inspiré de : **Dunod, Tout-en-un**

$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}$
# I - Fonctions dominées, fonctions négligeables

## 1. Définition, exemples

### 1.1 Définition

Soit $f$ et $\varphi$  deux fonctions définies sur $\mc{D}$
1. On dit que $f$ est **dominée** par $\varphi$ au voisinage de $a$ 
	- s'il existe une fonction $u$ définie sur $\mc{D}$. Bornée au voisinage de $a$, 
	- telle que $f = \varphi \times u$ au voisinage de $a$
	- On note alors $f \ub{=}a O(\varphi)$ ou $f(x) \ub{=}{x\to a}o(\varphi(x))$
2. On dit que $f$ est **négligeable** 
	- S'il existe une fonction $\eps$ définie sur $\mc{D}$, 
		- tendant vers $0$ en $a$
	- telle que $f = \varphi \times \eps$ au voisinage de $a$
	- On note $f \ub{=}a o(\varphi)$ ou $f(x) \ub{=}{x\to a}o(\varphi(x))$


### 1.2 Proposition 1 - Bornée 

1. Une fonction $f$ est bornée au voisinage de $a$  ssi elle est dominée par la fonction constante $I$, 
	- i.e ssi $f=O(1)$.
2. Une fonction $f$ tend vers $0$ en $a$ ssi elle est négligeable devant la fonction constante $1$,
	- i.e ssi $f=o(1)$

> [!warn]
> $o$ et $O$ sont des notations à ne pas manipuler comme des égalités algébriques.

> [!info]
> Il est clair d'après la définition que si $\lambda \in \K$ est non-nul, on a $f = O(\lambda \varphi)$ ssi $f=O(\varphi)$.
> Il en est de même pour les $o$.
> On évite donc d'écrire $O(3x)$ ou $o(\frac{x^2}2)$ pour privilégier les notations $O(x)$ et $o(x^2)$.

## 2. Propriétés

### 2.1 Règles de calcul

Les règles suivantes sont des traductions de propriétés connues sur les fonctions bornées et les fonctions tendant vers 0.
Toutes les relations de comparaison ci-dessous sont données au voisinage d'un point $a$ fixé.

- **Compatibilité**
	- $f=o(\varphi) \Rightarrow f=O(\varphi)$
		- définition
		- $u(x) \to 0$ $\Rightarrow$ borné donc $O(x)$.
- **Produit**
	- $\rcases{f_1 = O(\varphi_1) \\ f_2 = O(\varphi_2)} \Rightarrow f_1f_2 = O(\varphi_1\varphi_2)$ 
		- distribution
	-  $\rcases{f_1 = o(\varphi_1) \\ f_2 = O(\varphi_2)} \Rightarrow f_1f_2 = o(\varphi_1\varphi_2)$ 
		- produit $\to$ 0
	-  $\rcases{f_1 = o(\varphi_1) \\ f_2 = o(\varphi_2)} \Rightarrow f_1f_2 = o(\varphi_1\varphi_2)$ 
		- distribution
- **Somme**
	- $\rcases{f_1 = O(\varphi) \\ f_2=O(\varphi)}\Rightarrow f_1 + f_2= O(\varphi)$ 
	- $\rcases{f_1 = o(\varphi) \\ f_2= o(\varphi)} \Rightarrow f_1 + f_2 = o(\varphi)$
- **Transitivité**
	- $\rcases{f = O(\varphi_1) \\ \varphi_1 = O(\varphi_2)} \Rightarrow f= O(\varphi_2)$ 
	-  $\rcases{f = o(\varphi_1) \\ \varphi_1 = O(\varphi_2)} \Rightarrow f= o(\varphi_2)$ 
	-  $\rcases{f = O(\varphi_1) \\ \varphi_1 = o(\varphi_2)} \Rightarrow f= o(\varphi_2)$ 
	-  $\rcases{f = o(\varphi_1) \\ \varphi_1 = o(\varphi_2)} \Rightarrow f= o(\varphi_2)$ 

## 2.2 Proposition 2

Soit $f$ et $\varphi$ deux fonctions définies sur $\mc{D}$. 
- Si $f = \ub{O(\varphi)}a$ et $\varphi$ bornée au voisinage de $a$
	- $f$ bornée au voisinage de $a$
- Si $f\ub{=}a O(\varphi)$ et si la fonction $\varphi$ tend vers $0$ en $a$, alors $f$ aussi
- Si $f \ub{=}a o(\varphi)$ et si $\varphi$ est bornée au voisinage de $a$, alors $\lim{a}f = 0$
### 2.3 Proposition 3

On suppose que $\varphi$ ne s'annule pas sur $\mc{D} \backslash \{a\};$ de plus si $a \in \mc{D}$ et $\varphi(a) =0$, on suppose $f(a) = 0$. Alors, au voisinage de $a$, on a les équivalences suivantes:
1. $f$ est dominée par $\varphi$ ssi $\frac{f}\varphi$ est bornée au voisinage de $a$
2. $f$ est négligeable devant $\varphi$ ssi $\frac{f}\varphi$ tend vers $0$ en $a$.

### 2.4 Proposition 4

Pour tout réels $a,b$ strictement positifs:
- $(\ln(x))^b \ub{=}{x\to+\infty}o(x^a)$
- $x^b \ub{= o}{x\to+\infty}(e^{ax})$
- $|\ln(x)|^b \ub{= o}{x\to 0}(x^{-a})$
- $e^{ax} \ub{= o}{x\to -\infty}(|x|^{-b})$

**Preuve** - Croissance comparée

# II - Fonctions équivalentes

## 1. Définitions

### 1.1 Définition 2

Soit $f$ et $g$ deux fonctions définies sur $\mc{D}$.
On dit que $f$ est **équivalente** à $g$ au voisinage de $a$ si $f-g=o(g)$ au voisinage de $a$.
- On note alors $f \eq{a}g$ ou $f(x) \eq{x\to a}g(x)$.

> [!info]
> Pas de spécification du point s'il n'y a pas d'ambiguité.

### 1.2 Proposition 5

La fonction $f$ est équivalente à $g$ au voisinage de $a$ ssi 
- il existe une fonction $u$ définie sur $\mc{D}$
	- tendant vers $1$ en $a$
- $f = g \times u$ au voisinage de $a$.

#### 1.2.1 Preuve

$(\Rightarrow)$ Si $f \eq{} g$ 
- $f-g=o(g)$ (définition)
- Il existe $\eps \to 0$ tq:
	- $f-g=g\eps$
		- au voisinage de $a$
	- La fonction $u=1+\eps$ convient.
$(\Leftarrow)$ Réciproquement, 
- S'il existe une telle fonction $u$
	- Il suffit de prendre $\eps = u-1$
	- Pour avoir $f-g=g\eps$
		- avec $\lim{a}\eps = 0$

### 1.3 Corollaire

Comme $f$ et $g$ deux fonctions définies sur $\mc{D}.$ Si $f \eq{a} g$ alors $f \ub{=}a O(g)$.

**Preuve** - Par définition de la limite, une fonction tendant vers $1$ en $a$ est bornée au voisinage de $a$.

### 1.4 Proposition 7

La relation $\eq{a}$ est une relation d'équivalence sur l'ensemble des fonctions définies sur $\mc{D}$.

> [!tips]
> Cela permet d'utiliser la formulation symétrique « $f$ et $g$ sont équivalentes en $a$ ».

> [!info]
> Deux fonctions équivalentes sont dominées l'une par l'autre.

### 1.5 Proposition 8

Supposons que $g$ ne s'annule pas sur $\mc{D} \backslash \{a\}$ et que, si $a \in \mc{D}$ et $g(a) = 0$ alors $f(a)= 0$.

Alors, la fonction $f$ est équivalente à $g$ au voisinage de $a$ ssi:
- $\lim{a}\frac{f}g = 1$

> [!tips]
> Au même titre que la proposition $3$, ce résultat est très utile dans la pratique : pour montrer que deux fonctions sont équivalentes, on se ramène souvent à étudier la limite de leur quotient.

### 1.6 Proposition 9 - Équivalence par rapport à la limite

Soit $f$ une fonction définie sur $\mc{D}$ et $l \in \K$ **non-nul**.
- Alors $f$ admet $l$ pour limite en $a$ ssi $f \eq{a} l$

**Preuve**

Puisque $l ≠ 0,$ on a $\lim{x\to a}f(x) = l$ ssi:
- $\frac{f(x)}l \td{x\to a}1$

> [!warn]
> Résultat faux si $l = 0$. En effet:
> $f\eq{a}0$ alors $f$ est nulle au voisinage de $a$ puisqu'il existe une fonction $\eps$ tq $f-0=\eps \times 0$ au voisinage de $a$.
> Il est donc fort peu probable qu'un calcul d'équivalent correct mène à la relation $f \eq{a} 0$.

### 1.7 Proposition 10

Soit $f$ et $g$ deux fonctions telles que $g \ub{= o}a (f)$ alors $f+g \eq{a} f$

**Démonstration** - Conséquence immédiate de la définition.

### 1.8 Équivalent par encadrement

Soit $f, g$ et $h$ trois fonctions **réelles** définies sur $\mc{D}$ telles que:
- $f ≤ g ≤ h$ au voisinage de $a$
Si $f$ et $h$ sont équivalentes à une même fonction $\varphi$ en $a$ alors $g \eq{a} \varphi$.

## 2. Équivalents classiques

### 2.1 Proposition 12

Soit $f$ une fonction définie sur $\mc{D}$.
Supposons que $f$ soit dérivable en un point $a$ de $\mc{D}$
- et que $f'(a)≠0$. Alors au voisinage de $a$ :
	- $f(x)-f(a) \eq{} f'(a)(x-a)$

### 2.1.1 Preuve

Comme $f'(a) ≠ 0$
- $f'(a)(x-a)$ ne s'annule pas.
- Par ailleurs, on a par le taux de variation
	- $\lim{x\to a}\ub{\frac{f(x) - f(a)}{x-a}}C = f'(a)$
	- 

