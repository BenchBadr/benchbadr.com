---
lang: fr
date: 05/09/2025
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}\newcommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}\newcommand{\piv}[1]{\underset{\begin{array}{l}#1\end{array}}{=}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\com}{\text{com}}\newcommand{\td}[1]{\underset{#1}{\longrightarrow}}$
# /Logique

- **Relation d'ordre**
	- Réflexive
	- Antisymétrique
	- Transitive
- **Relation d'équivalence**
	- Réflexive
	- Symétrique
	- Transitive
- **Injectif** : au plus un antécédant
- **Surjective** : au moins un antécédant
- **Bijective** : Injective + surjective

# /Trigonométrie

> [!tips]
> $\cos$ est un connard, $\sin$ est sympa.


## 1. Formules 

- **Additivité**
	- $\cos(a+b) = \cos a \cos b - \sin a \sin b$
	- $\cos(a-b) = \cos a \cos b + \sin a \sin b$
	- $\sin(a+b) = \sin a \cos b + \sin b \cos a$
	- $\sin(a-b) = \sin a \cos b - \sin b \cos a$
- **Identité**
	- $\sin^2x+\cos^2x=1$
- **Dérivée**
	- *Démo avec $(f(f^{-1}(x)))' = x'$*
	- $\arccos(x) = -\frac1{\sqrt{1-x^2}}$
	- $\arcsin(x) = \frac1{\sqrt{1-x^2}}$
	- $\arctan(x) = \frac{1}{1+x^2}$

## 2. Exemples de corollaires

- $\cos(2x) = 2\cos^2x-1 = \cos^2x-\sin^2x$
- $\sin(2x) = 2\sin x\cos x$ 


# /Complexes

- **Formules d'Euler**
	- $\cos\theta = \frac{e^{i\theta}+e^{-i\theta}}2$
	- $\sin\theta = \frac{e^{i\theta}-e^{-i\theta}}{2i}$

#  /Suites
## 1. Formules

- **Convergence** : $\forall \epsilon > 0, \exists N \in n_0 / \forall n \in \N (n ≥ N \Rightarrow |u_n - l| ≤ \epsilon)$

# /Fonctions

- **Croissance comparée**
	- $\lim{x\to +\infty}\frac{(\ln(x))^b}{x^a} = 0$
	- $\lim{x\to+\infty}\frac{x^b}{e^{ax}}=0$
	- $\lim{x\to0}x^a|\ln(x)|^b= 0$
	- $\lim{x\to-\infty}|x|^be^{ax} = 0$

# /Arithmétique

> [!success]- **Rappels**
>- $a|b$ et $a|c$ alors $a|b+c$
>	- De même, $a|b-c$
>- $d|a$ et $d|b \Rightarrow d|a \wedge b$ 
>- $\text{pgcd}(a,b) \times \text{ppcm}(a,b)=|a,b|$
>- $a|c$ et $b|c$ alors $\text{ppcm}(a,b)|c$
>- **Existence et unicité** de décomposition de tout entier en premiers.
>- **Définition congruence**
>	-  $a \equiv b[n]$ si $n|b-a$ ($a$ et $b$ interchangeable)
>	- **Règles de calcul** - Soit $(a,b,c,d)\in\Z^4$ tq $a\equiv b[n]$ et $c\equiv d[n]$
>		- $a+c \equiv b+d[n]$
>		- $a \times c \equiv b \times d[n]$
>		- $a^k \equiv b^k[n]$ ($\forall k ≥ 0$)

- **Bézout**
	- Soit $(a,b)\in\Z^2$ des entiers. Il existe $(u,v)\in\Z^2$ tels que:
		- $au + bv = a \wedge b$
	- **Corollaire Bézout**
		- Si $(a,b)\in\Z^2$ premiers entre eux alors il existe $(u,v)\in\Z^2$ tq
			- $au+bv = 1$
- **Lemme de Gauss**
	- Si $a|bc$ et $a \wedge b = 1 \Rightarrow a|c$ 
- **Lemme d'Euclide**
	- Soit $p$ premier
	- $p | ab$ alors $p|a$ ou $p|b$
- **Petit théorème de Fermat**
	- $p$ premier, $a \in \Z$
	- $a^p \equiv a[p]$
	- **Corollaire**
		- Si $p$ ne divise pas $a$
			- $a^{p-1}\equiv 1[p]$

> [!tips]

> [!tip]- Informations générales
>- **Crible d'Ératosthène**
>	- On écrit une suite de nombre
>	- On parcourt successivement les nombres en grisant les multiples ultérieurs.
>	- Resteront non grisés seuls les non-multiples donc premiers.
>	- Exemple simplifié:
>	- **`2`** 3 `4` 5 `6` 7 `8` 9 `10` 11 `12` 13 `14` 15
>	- **`2`** **`3`** `4` 5 `6` 7 `8` `9` 11 `12` 13 `14` `15`
>	- 2, 3, 5, 7, 11, 13 sont bien premiers.
> - **Identifier un premier**
>	- Tester les premiers $< \sqrt{n}$ par l'absurde

### 3.1 Méthodes

#### 3.1.1 Solutions Diophantienne

> Trouver une solution particulière de:
> $161x+368y=115$ $(E)$

> [!note]- Solutions particulières
> $368 = 161 \cdot 2 + 46$
> $161 = 46 \cdot 3 + 23$
> $46 = 23 \cdot 2 + 0$
> 
> On a $368 \wedge 161 = 23$
> 
> Or, $115 = 5 \cdot 23$,
> - Donc par le **théorème de Bézout**,
> 	- $(E)$ admet des solutions entières
> 
> > [!tips]
> > Autrement, l'équation n'aurait pas de solution
> 
> **Remontée**:
> $23 = 161 - 46 \cdot 3$
> $\phantom{23} = 161 - (368 - 161 \cdot 2) \cdot 3$
> $\phantom{23} = (-7)161 + (-3)368$
> 
> **Déterminer une solution particulière**
> $(-7)161 + (-3)368 = 23$
> $(-35)161 + (-15)368 = 115$
> 
> $(x_0, y_0) = (35, -15)$ est une **solution particulière** de $(E)$ $\color{orange}(1)$


> [!success]- **Toutes les solutions**
> Soit $(x,y)\in\Z^2$ une solution de $(E)$.
> - $161x+368y=115$
> Or, par $\color{orange}(1)$
> - $161x_0+368y_0=115$
> - $161(-35)+368(-15)=115$
> Donc,
> - $161x+368y = 161(x_0)+368(y_0)$
> - $161(x-x_0)+368(y-y_0)=0$
> - $\cancel{23} \cdot 7(x-x_0)+\cancel{23} \cdot 16(y-y_0)=0$ 
> - $7(x-x_0)+16(y-y_0)=0$
> - $7(x-x_0)=-16(y-y_0)$
> 
> Ainsi, $7|16(y-y_0)$
> - Or, $7 \wedge 16 = 1$
> - Par le **Lemme de Gauss**
> 	- $7|(y-y_0)$
> - Donc, il existe $k \in \Z$ tel que:
> 	- $y-y_0=7k$ $(*)$
> - De même,
> 	- $7(x-x_0)=-16(y-y_0)$
> 	- $\cancel7(x-x_0)=-16 \cdot \cancel7 \cdot k$
> 	- $x-x_0=-16k$
> - Donc,
> 	- $(x,y)=(x_0-16k, y_0+7k)$.
> 	- $(x_0, y_0) = (35 - 16k, y_0+7k)$
> 
> Les solutions entières de $(E)$ sont:
> - $\{(35-16k, -15+7k), k \in \Z\}$

# /Algèbre

## 1 Formules

- **Formule du Rang**
	- $f:E\to F$
	- $\dim(E) = \dim(\Im(f)) + \dim(\ker(f))$


# /Integrales

## 1. Comparaison

- **Négligeabilité**
	- $n^\alpha = o(e^{\beta n})$ avec $(\alpha, \beta) \in \R^2$
	- $\ln^\alpha(n) = o(n^\beta)$
	- Si $|q| < 1$
		- $|q|^n = o(\frac1{n^\alpha})$ avec $\alpha \in \R$
	- Si $|q| > 1, n^\alpha = o(|q|^n)$
- **Règles de domination**
	- $u_n = O(v_n) \iff \frac{u_n}{v_n}$ est bornée
- **Propositions équivalences**
	- $u_n \sim v_n$ (réflexive)
	- $u_n \sim v_n \iff v_n \sim u_n$ (symétrique)
	- Si $u_n \sim v_n$ et $v_n \sim w_n$ alors $u_n \sim w_n$ (transitive)
	- Si $\lim{n\to+\infty}u_n = l$ et $l ≠ 0$ alors $u_n \sim l$
	- Si $(u_n)^\alpha \sim (v_n)^\alpha$ défini à partir d'un certain rang et $u_n \sim v_n$ alors $u_n^\alpha \sim v_n^\alpha$
	- Si $u_n \sim v_n$ et si $a_n \sim b_n$ alors $u_n a_n  \sim v_n b_n$
	- $\frac{u_n}{a_n} \sim \frac{v_n}{b_n}$ si $(a_n)$ et $(b_n)$ non-nuls à partir d'un certain rang.
	- Si $u_nv_n$ et $v_n = o(w_n)$ alors $u_n = o(w_n)$
	- Si $u_n \sim v_n$ et $v_n = O(w_n)$ alors $u_n = O(w_n)$
	- Si $u_n = o(v_n)$ et $v_n = o(w_n)$ alors $u_n = o(w_n)$
	- Si $u_n = o(w_n)$ et $v_n = o(w_n)$
		- alors $\lambda u_n + \beta v_n = o(w_n)$
	- Si $u_n = o(v_n) \Rightarrow u_nw_n = o(v_nw_n)$
	- **En 0**
		- Si $m > n$ alors $x^m = o(x^n)$
		- Si $m ≥ n$ alors $o(x^n) + o(x^m) = o(x^m)$
		- $\lambda o(x^n) = o(x^n)$

## 2. Taylor

- **Reste intégral**
	- $\forall x \in I, f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{f^{''}(x_0)}{2!}(x-x_0)^2+...+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + \int^x_{x_0}f^{(n+1)}(t)\frac{(x-t)^n}{n!}$.
- **Lagrange**

