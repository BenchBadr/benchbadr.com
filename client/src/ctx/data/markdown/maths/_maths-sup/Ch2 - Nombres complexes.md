---
lang: fr
desc: Cours sur les nombres complexes
date: 13/09/2025
---
$\newcommand{\sub}{\subset}\newcommand{\R}{\mathbb{R}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\N}{\mathbb{N}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\eq}[1]{\underset{#1}{\sim}}\newcommand{\eps}{\varepsilon}\newcommand{\td}[1]{\underset{#1}{\to}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\C}{\mathbb{C}}\newcommand{\Re}{\text{Re}}\newcommand{\Im}{\text{Im}}\newcommand{\U}{\mathbb{U}}$

> [!info]
> Inspiré du cours de Dunod, Tout-en-Un MP2I

# I - L'ensemble des nombres complexes

## 1. Définition

On admet qu'il existe un ensemble $\C$ contenant $\R$. 
- Muni d'une addition notée $+$ et d'une multiplication notée $\times$, ou le plus souvent implicitement (c'est-à-dire sans symbole, comme dans $\R$), avec lesquelles on calcule comme dans $\R$.
- Possédant un élément $i$ dont le carré vaut $-1$.
- Dont tout élément, appelé **nombre complexe** ou **complexe** s'écrit de manière unique sous la forme:
	- $z = a+ib$  ($(a,b) \in \R^2$)
- Ainsi, **unicité de l'écriture**
	- Pour tout élément $z$ de $\C$ il existe un unique couple $(x,y)\in\R^2$ tel que $z=x+iy$;
	- Les réels $a$ et $b$ sont alors respectivement appelés **partie réelle** et **partie imaginaire** du complexe $z$, et l'on note alors:
		- $a = \Re(z)$ 
		- $b = \Im(z)$
- **Conséquence**
	- Soit $(z,z')\in\C$
		- $z=z' \iff \Re(z) = \Re(z')$ et $\Im(z)=\Im(z')$
		- $\Re(z+z') = \Re(z)+\Re(z')$
		- $\Re(zz')=\Re(z)\Re(z') - \Im(z)\Im(z')$
		- $\Im(z+z')=\Im(z)+\Im(z')$
		- $\Im(zz') = \Re(z)\Im(z')+\Re(z')\Im(z)$



> [!warn]
> Contrairement à $\R$, $\C$ n'est pas muni d'une relation d'ordre compatible avec les opérations.

## 2. Conjugué

### 2.1 Définition

Pour tout complexe $z$, on appelle **conjugué** de $z$ le complexe $\bar{z}$ défini par:
- $\bar{z} = \Re z - i\Im z$

### 2.2 Proposition

Pour tout $z \in \C$:
- $\Re z = \frac{z+\bar{z}}2$
- $\Im z = \frac{z - \bar{z}}2$
- $\overline{\bar{z}} = z$

*Preuve immédiate*

### 2.3 Corollaire

- Un complexe $z$ est réel ssi $z=\bar{z}$
- Un complexe est imaginaire ssi $z=-\bar z$

## 3. Module d'un complexe

Soit $z \in \C$. On a alors:
- $z\bar z = (\Re z + i \Im z)(\Re z - i \Im z) = (\Re z)^2+(\Im z)^2$
Donc $z\bar z \in \R_+$, ce qui permet de valider la définition suivante.

### 3.1 Définition

Pour tout $z \in \C,$ le **module** de $z$ est le réel positif noté $|z|$ et défini par:
- $|z|=\sqrt{z\bar z} = \sqrt{(\Re z)^2+(\Im z)^2}$

### 3.2 Proposition

- $|z|  = |-z| = |\bar z|$
- $z=0$ ssi $|z|=0$
- $|\Re z| ≤ |z|$ et $|\Im z| ≤ |z|$

### 3.3 Proposition

On a $\frac1z = \frac{\bar z}{|z|^2}$
De plus, 
- $|z|=1$ équivaut à $\frac1z=\bar z$

### 3.4 Proposition - Inégalité triangulaire

Pour $(z_1, z_2) \in \C^2$
- $|z_1+z_2|≤|z_1|+|z_2|$
avec égalité si, et seulement si, 
- $z_1 = 0$ ou $\exists u \in \R_+$
- $z_2 = uz_1$

### 3.5 Corollaires (seconde i$\triangle$)

- $||z_1|-|z_2|| ≤ |z_1 - z_2|$ 
$\forall z_1 \in \C$ et $\forall z_2 \in \C$,
- $||z_1| - |z_2||≤|z_1±z_2|≤|z_1| + |z_2|$

## 4. Nombre complexes de module 1

## 4.1 Proposition

- L'ensemble des nombres complexes de module $1$ est noté $\U$.
- Le produit de deux éléments de $\U$ est élément de $\U$
- L'inverse de tout élément de $\U$ est élément de $\U$

### 4.2 Remarque

Pour tout $z \in \C$ non nul, $\frac{z}{|z|}\in\U$. En effet, on a, puisque $|z|\in\R^*_+$:
- $\left| \frac{z}{|z|}\right| = \frac{|z|}{\left| |z| \right|} = \frac{|z|}{|z|} = 1$

### 4.3 Définition

Pour tout réel $\theta$, on note $e^{i\theta}$ le nombre complexe défini par:
- $e^{i\theta}=\cos \theta + i\sin\theta$

### 4.4 Proposition

- Pour $\theta \in \R$ on a $|e^{i\theta}|=1$ et donc $e^{i\theta}\in \U$
- Réciproquement, pour $z \in \U$ il existe $\theta \in \R$ tel que $z=e^{i\theta}$
- Si $\theta$ et $\varphi$ sont deux réels, on a $e^{i\theta}=e^{i\varphi}$ si et seulement si $\theta\equiv \varphi[2\pi]$

### 4.5 Proposition

Pour $\theta \in \R$ et $\varphi\in \R$ on a:
- $e^{i\theta}\times e^{i\varphi}=e^{i(\theta + \varphi)}$
- $e^{-i\theta}=\frac1{e^{i\varphi}}=\overline{e^{i\varphi}}$
- $\frac{e^{i\theta}}{e^{i\varphi}} = e^{i(\theta - \varphi)}$

## 5. Formules d'Euler


- Pour $\theta \in \R,$ on a
	- $\cos\theta = \frac{e^{i\theta}+e^{-i\theta}}2$
	- $\sin\theta = \frac{e^{i\theta}-e^{-i\theta}}{2i}$

## 6. Formule de Moivre


Pour $\theta \in \R$ et $n \in \Z,$ on a $(e^{i\theta})^n=e^{in\theta}$ ou encore, par définition de $e^{i\theta}$:
- $(\cos\theta+i\sin\theta)^n = \cos(n\theta)+i\sin(n\theta)$

## 7. Forme trigonométrique, argument


Soit $z$ un complexe non nul,
- Il existe $r_0 \in \R^*_+$ et $\theta_0 \in \R$ tels que $z = r_0e^{i\theta_0}$
- Si $r \in \R_+$ et $\theta \in \R$ sont tels que $z = re^{i\theta}$ alors $r = |z|$
- Si $\theta \in \R$ vérifie $z = |z|e^{i\theta}$ alors $\theta_0[2\pi]$

## 7.2 Définition

Soit $z \in \C^*$
- Tout réel $\theta$ tel que $z = |z|e^{i\theta}$ est appelé **argument** de $z$
- On appelle **forme trigonométrique** de $z$ toute écriture de la forme:
	- $z=r(\cos\theta + i\sin\theta) = re^{i\theta}$ avec $r \in \R^*_+$ et $\theta \in \R$

> [!warn]
> - Le module d'un complexe est défini de façon unique, tout complexe possède un module

> [!info]
> On ne parle d'argument que pour un complexe non nul, et un tel argument n'est défini que modulo $2\pi$

> [!tips]
> Bien que $0$ n'ait pas d'argument, on peut quand même écrire $0=re^{i\theta}$ avec $r=0$ et $\theta$ un réel quelconque.


### 7.3 Corollaire

Deux nombres complexes non nuls sont égaux ssi ils ont le même module et des arguments égaux modulo $2\pi$.

