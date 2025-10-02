---
lang: fr
desc: Développements limités
date: 17/09/2025
---
> [!info]
> Cours présenté par **M. Ribaud**

$\newcommand{\sub}{\subset}\newcommand{\R}{\mathbb{R}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\N}{\mathbb{N}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\eq}[1]{\underset{#1}{\sim}}\newcommand{\eps}{\varepsilon}\newcommand{\td}[1]{\underset{#1}{\to}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\mc}{\mathcal}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}$
# I - Introduction

L'objectif est le suivant: on se donne $f:I \to \R, x_0 \in I,$ et on cherche à approximer $f$ par une fonction plus simple, à savoir un polynôme.

Par exemple, pour $f(x)=\sin(x)$ et $x_0=0$.

On peut remplacer $\sin(x)$ par $\sin(0) = 0$
- Pas très satisfaisant. 
- On peut mieux faire si on se rappelle que $\sin(x) \eq{0} x = 0+x$

**Étape suivante**
1. Peut-on faire mieuxL c'est-à-dire augmenter le degré du polynôme
2. Quid de la précision

# II - Les 3 formules de Taylor

On cherche à établir des formules du type:
- $f(x) = \ub{f(x_0)+a_1(x-x_0)+...+a_n(x-x_0)^n}{\text{Polynôme approximant}}+\ub{R_n(x)}{\text{Reste = erreur}}$
	- Un polynôme de degré $n$
	- $R_n(x)$ est une « marche d'erreur »
		- Évidemment, la fonctin d'origine n'étant pas un polynôme mais seulement approchée par un polynôme.

> [!warn]
> Ne **surtout** pas oublier le $R_n(x)$

## 1. Définition 1

Soit $n \in \N^*, f:I \to \R$. On dira que:
1. $f$ est de classe $\mc{C}^0(I)$ si $f$ est continue sur $I$
2. $f$ est de classe $\mc{C}^n(I)$ si $f$ est $n$-fois dérivable et si $f^{(n)}$ est continue sur $I$. 
3. $f$ est de classe $\mc{C}^{\infty}(I)$, si $f$ est de classe $\mc{C}^n(I)$ ceci $\forall n ≥ 0$

## 2. Théorème 1 (Taylor avec reste intégral)

Soit $f:I \to \R, f \in \mc{C}^{n+1}(I), x_0 \in I$ alors:
- $\forall x \in I, f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{f^{''}(x_0)}{2!}(x-x_0)^2+...+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + \int^x_{x_0}f^{(n+1)}(t)\frac{(x-t)^n}{n!}$.
## 2.1 Remarque

1. C'est la plus précise mais la plus compliquée
2. Ne jamais oublier le reste
3. En posant $x=x_0 + h$, on a en fait que $f(x) = f(x_0)+f'(x_0)h+\frac{f''(x_0)}{2!}h^2+...+\frac{f^{(n)}(x_0)}{n!}h^m + \int^h_0 f(x_0 + s)\frac{(h-s)^m}{n!}ds$

### 2.2 Preuve

Par récurrence,

**Initialisation**

- Si $n=0$
	- $f \in \mc{C}^1(I)$, on a alors $f(x) - f(x_0)=[f(t)]^x_{x_0}$
	- $\Rightarrow f(x) - f(x_0) = \int^x_{x_0}f'(t) dt$ **OK**
	- $\Rightarrow f(x)= f(x_0) + \int^x_{x_0}f'(t)dt$ **OK**

**Hérédité**
$n \to n + 1$
- On suppose que $f(x) = \sum^n_{k=0}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k + \ub{\int^x_{x_0}f^{(n+1)}(t)\frac{(x-t)^n}{n!}}{R_n(x)}$
- On calcule $R_n(x)$ via une IPP en posant $\cases{u(t) = f^{(n+1)}(t) & u'(t)=f^{(n+2)}(t) \\ v'(t) = \frac{(x-t)^n}{n!} & v(t) = -\frac{(x-t)^{n+1}}{(n+1)!}}$
- Donc $f(x) = \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k \;+\; \underbrace{\left[-f^{(n+1)}(t)\frac{(x-t)^{n+1}}{(n+1)!}\right]_{x_0}^x}_{=\,f(x_0)\frac{(x-x_0)^{n+1}}{(n+1)!}} + \int^x_{x_0}\frac{f^{(n+2)}(t)(x-t)^{n+1}}{(n+1)!}$
- $= \sun{k=0}{n+1}\frac{f^{k}(x_0)}{k!}(x-x_0)^k + \int^x_{x_0}f^{n+2}(t)\frac{(x-t)^{n+1}}{(n+1)!}dt$


## 3. Théorème 2 (Formule de Taylor-Lagrange)

Soit $f:I \to \R$ de classe $\mc{C}^{n+1}(I), x_0 \in I$. 
Alors $\forall x \in I, \exists c_x \in [x_0, x]$ ou $c_x \in [x, x_0]$ tel que:
- $f(x) = \sun{k=0}{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\frac{(x-x_0)^{n+1}}{(n+1)!}f^{(n+1)}(c_x)$


### 3.1 Lemme (formule de la moyenne)

Soit $u$ et $v$ deux fonctions continues sur $I = [a,b]$ avec $u(x) ≥ 0, \forall x \in I$. 
Alors, $\exists c \in I$ tel que:
- $\int_I u(t) v(t) dt = u(c)\int_I v(t) dt$

### 3.2 Preuve

Soit $m = \ub{\inf}{x \in I}u(x)$ et $M = \ub{\sup}{x \in I}u(x)$
$m$ et $M$ existent et sont atteints car $u \in \mc{C}^0(I)$.
- $\forall x \in I,$ on a:
	- $m \cdot v(x) ≤ u(x) v(x) ≤ M \cdot v(x)$
	- $\int_I m \cdot v(x) dx ≤ \int_I u(x) v(x) dx ≤ \int_I M \cdot v(x) dx$
- Donc $m\int_I v(x) dx ≤ \int_I u(x) v(x) dx ≤ M \int_I v(x) dx$
- Donc $m ≤ \frac{\int_I u(x)v(x) dx}{\int_I v(x) dx} ≤ M$
Comme $u \in \mc{C}^0(I)$, par le **théorème des valeurs intermédiaires**:
- $\exists c \in I / u(xc) = \frac{\int_I u(x) v(x) dx}{\int_I v(x) dx}\Rightarrow u(x) \int_I v(x) dx = \int_I u(x) v(x) dx$

### 3.3 Preuve théorème 2

On a $f(x) = \sun{k=0}n \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k + R_n(x), R_n(x) = \int^x_{x_0}f^{(n+1)}(t)\frac{(x-t)^n}{n!}dt$

On applique le lemme à $R_n(x)$ avec $u(t)=f^{(n+1)}(t)$ et $v(t) = \frac{(x-t)^n}{n!}≥0$
- Pour $t \in [x_0, x]$ donc $t ≤ x$
- $\Rightarrow \exists c_x / R_n(x) = f^{(n+1)}(c_x)\int^x_{x_0} \frac{(x-t)^n}{n!}dt$
- $= f^{(n+1)}(c_x) = \left[-\frac{(x-t)^{n+1}}{(n+1)!}\right]^x_{x_0}$
- $= \frac{f^{(n+1)}(c_x)}{(n+1)!}(x-x_0)^{n+1}$

### 3.4 Exemple

Pour $f(x)=e^x \in \mc{C}^{\infty}(\R)$.
- $x_0 = 0,$ on a $\forall k, (e^x)^{(k)}(x)=e^x$
- Par suite,
	- $\forall k, (e^x)^{(k)}(0)=e^0=1$
- et, donc,
	- $\forall x \in \R, \exists c_x [0, x]$ (ou $[x, 0]$)
- tel que:
	- $e^x = \sun{k=0}{n}\frac{x^k}{k!}+\frac{e^{c_x}}{(n+1)!}$
On a donc:
- $e^x = 1 + x + \frac{x^2}2 + \frac{x^3}6+ ... \frac{x^n}{n!} + \frac{e^{c_x}x^{n+1}}{(n+1)!}$
Prenons $x \in [0,1]$ et $n=3$
- On a alors $|e^x - (1 - x - \frac{x^2}{2} - \frac{x^3}6)| = \frac{e^{c_x}|x|^4}{4!}$
et ici,
- $c_x \in [0,x] \sub [0,1]$ et donc $c_x ≤ 1$,
- on a: 
	- $\frac{e^{c_x}|x|^4}{4!}≤\frac{e|x|^4}{4!}≤|x|^4$
- donc on a:
	- $|e^x - (1-x-\frac{x^2}2-\frac{x^3}6)| ≤ |x|^4$
Si on prend:
- $x = 0.1 = 10^{-1}$
- On a donc:
	- $e^{0.1} \eq{} 1+0,1+\frac{0.1^2}{2}+\frac{(0.1)^3}{6}$   
		- à $10^{-4}$ près.
	- soit $e^{0.1} \eq{} 1 + 0.1 + 5 \cdot 10^{-3}+10^{-4}$ à $10^{-4}$ près.
- soit $\boxed{e^{0.1} \eq{} 1.1051}$ à $10^{-4}$ près.


### 3.5 Remarques

1. Si $n = 0$, **Taylor-Lagrange** = **TAF** (théorème d'accroissement finis).
	- $f(x) = f(0) + f'(c_x)(x-x_0)$
2. Pour $x$ proche de $x_0$ l'erreur est du type:
	- $f^{(n+1)}(c_x)\frac{(x-x_0)^{n+1}}{(n+1)!} \td{} 0 \sin \to +\infty$  

## 2. Proposition 1

Si $f \in \mc{C}^{n+1}(I),$ avec $\forall x \in I, |f^{(n+1)}(x)| ≤ M$
- Alors $\left|f(x) - \sun{k=0}{n} \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k\right| ≤ \frac{M|x-x_0|^{n+1}}{(n+1)!}$   

### 2.1 Preuve

*Immédiat*


## 4. Théorème 3 - Taylor-Young

Soit $f$ de classe $\mc{C}^n(I)$. Soit $x \in I,$ alors:
- $f(x) = \sun{k=0}{m}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k + o((x-x_0)^n)$

> [!warn]
> C'est moins fort que **Taylor-Lagrange**, lui-même moins fort que **Taylor avec reste intégral**.

### 4.1 Preuve

Comme $f\in \mc{C}^{n}(I)$ on utilise Taylor-Lagrange à l'ordre $n-1$. 
On a alors:
- $f(x)=\sun{k=0}{n-1}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\frac{f^{(n)}(c_x)(x-x_0)^n}{n!}$
- $= \sun{k=0}{n-1}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k + \frac{f^{(n)}(c_x)(x-x_0)^n}{n!} + \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n - \frac{f^{(n)}(x_0)(x-x_0)^n}{n!}$
- $= \sun{k=0}n \frac{f^{(k)}(0)}{k!}(x-x_0)^k + R(x)$
- où $R(x) = \frac{(x-x_0)^n}{n!}\left( f^{(n)}(c_x) - f^{(n)}\right)$
	- avec $c_x = [x_0, x]$ donc si $x \to x_0$ alors $c_x \to x$
	- et, comme $f^{(n)}$ est continue en $x_0 \in I$,
	- on a donc:
		- $\lim{x\to0}\left(f^{n}(c_x) - f^{(n)}(x_0)\right) = 0$
	- Par suite, on a bien que 
		- $R_n(x) = (x-x_0)^n\eps(x) = o((x-x_0)^n)$

### 4.2 Exemple

On considère $f(x)=\frac1{1+x}, \mc{C}^{\infty}(]-1;+1[)$
- On prend en $x_0 = 0$ et on a: $f(x)=(1+x)^{-1}$
	- $f'(x) = -(1+x)^{-2}$
	- $f''(x) = 2(1+x)^{-3}$
	- $\vdots$
	- $f^{(k)}(x) = (-1)^{k}k!(1+x)^{-k-1}$
- Pour ce qui est des valeurs:
	- $f(0) = 1$
	- $f'(0) = -1$
	- $f''(0) = 2$
	- $\vdots$
	- $f^{(k)}(0) = (-1)^kk!$
- Et donc,
	- $\forall x \in ]-1, 1[$
	- $\boxed{\frac1{1+x} = 1 - x + x^2 ... + (-1)^n x^n + o(x^n)}$

# II - Développement limité en $x_0 = 0$

On se place uniquement en $x_0 = 0$,
- pour les deux raisons suivantes:
	1. Les formules sont plus simples
		- $(x-x_0)^k \to x^k$
	2. Si on veut faire un DL en $x_0$, 
		- on peut toujours se ramener à un DL en 0 en posant $u= x-x_0 \td{x\to x_0}0$

## 1. Définition 1

On dira que $f$ définie sur $I = ]-a, +a[$ $(a>0)$  admet un DL à l'ordre $n$ en $0$ s'il existe $a_0, ..., a_n$ dans $\R$ tels que:
- $f(x) = a_0+a_{1}x+...+a_nx^n + o(x^n)$


### 1.1 Remarque (1)

De manière équivalente, on a:
- $f(x) = a_0+...+a_nx^n + \eps(x)x^n$
- où $\lim{n\to+\infty}\eps(x) = 0$

### 1.2 Remarques (2)

1. Si $f$ est de classe $\mc{C}^n$ au voisinage de 0, $f$ admet un DL d'ordre $n$ en $0$. (Taylor-Young)
2. Si $f$ admet un DL à l'ordre $n$ en $0$. Est-elle de classe $\mc{C}^n$ au voisinage de $0$ ?
	- On regarde déjà, si $f$ est $n$ fois dérivable en $0$?
		- **Si $n=0$**
			- $f(x)=a_0+o(x^0)=a_0+o(1)$
		- et donc,
			- $\lim{x\to 0}f(x) = a_0 = 0$
			- Donc $f$ est continue en $0$. 
		- **Si $n=1$**
			- $f(x)=a_0+a_1x+o(x)$ et ici,
			- $a_0 = f(0)$ donc:
			- $f(x) = f(0) + a_1x + o(x)$
			- $\Rightarrow \frac{f(x) - f(0)}{x} = a_1 + o(1)$ 
				- Car $\frac{o(x)}x = o(1)$
			- Le TAF admet une limite en $0$. 
				- donc $\lim{x\to 0}\frac{f(x) - f(0)}{x-0} = a_1$
				- $f$ est dérivable en $0$
				- et $\frac{f'(0)}{1!}=a_1$
			- Donc $f$ continue en $1$.
		- **Si $n=2$**
			-  Aïe! C'est **FAUX**
			- Voir TD (contre-exemple DL à l'ordre 2 mais pas deux fois dérivable en $0$).

## 2. Proposition 1

Si $f$ admet un DL d'ordre $n$ en $0$, celui-ci est unique.

### 2.1 Preuve

Supposons que $\cases{f(x)= a_0 + a_1x+...+a_nx^n + o(x^n) \\ f(x) = b_0 + b_1x+ ... + b_nx^n + o(x^n)}$

$\Rightarrow 0 = (a_0 - b_0)+(a_1 - b_1)x+ ... + (a_n - b_n)x^n + o(x^n)$

On fait $x\to 0 \Rightarrow 0 = a_0 - b_0 \Rightarrow a_0 = b_0$
On refait la différence,
- $0 = (a_1 - b_1)x+...+(a_n - b_n)x^n + o(x^n)$
- $\Rightarrow 0 = (a_1 - b_1)+(a_2 - b_2)x+...+(a_n - b_n)x^{n-1} + o(x^{n-1})$
- Et on prend la limite en $0$,
	- $\Rightarrow \boxed{a_1 = b_1}$
- etc...
$\square$

### 2.2 Corollaire 1

Soit $f$ paire (respectivement impaire), si $f$ admet un DL d'ordre $n$ en $0$ alors celui-ci ne contient que des monômes d'ordre pair. (respectivement impaire).


#### 2.2.1 Exemple

$\cos(x) = 1 -  \frac{x^2}{2} + \frac{x^4}{4!}+o(x^3)$

#### 2.2.2 Preuve

$f(x) = a_0 + a_1x+ a_2x^2 + ... + a_nx^n + o(x^n)$
- $f$ paire.
$f(-x) = a_0 - a_1x + a_2x^2 + ... + (-1)^na_nx^n + o(x^n)$
- donc par unicité de $f$,
- on a: $\cases{a_1 = -a_1 \\ a_3 = -a_3 \\ \vdots } \Rightarrow \cases{a_1 = 0 \\ a_3 = 0 \\ \vdots}$

### 2.3 Exemple

Soit $\frac1{1-x}$. Si $|x| < 1$ alors, 
- $\sun{k=0}{n}x^k = \frac{1 - x^{n+1}}{1-x}$
Donc,
- $\forall x \in ]-1,1[,$ 
	- $\frac1{1-x}=1+x+x^2+...+x^n+\frac{x^{n+1}}{1-x}$ 
	- $\phantom{\frac1{1-x}} = x^2\frac{x}{1-x} = o(x^n)$
	- $\forall x \in ]-1, 1[$,
		- $\frac1{1-x}=1+x+...+x^n+o(x^n)$
	- $\forall n ≥ 0$
		- Par Taylor-Young, on a également $\frac1{1-x}=\sum^n_{k=0}\frac{f^{(k)}(0)}{k!}x + o(x^n)$
	- Donc, par unicité, on a:
		- $\forall k, \frac{f^{(k)}(0)}{k!} = 1$
		- $\Rightarrow \forall k, \boxed{f^{(k)}(0) = k!}$


## 3. Proposition 3

- $\frac1{1-x} = 1+x+x^2 + ... + x^n + o(x^n)$
- $e^x =1+ \frac{x}{1!}+\frac{x^2}{2!}+...+\frac{x^n}{n!}+o(x^n)$
- $\cos(x) = 1 - \frac{x^2}2 + ... + (-1)^n\frac{x^{2n}}{(2n)!} + o(x^{2n+1})$
- $\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} + ... + (-1)^n \frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+1})$
- $\cases{(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha - 1)}{2!}x^2 + ... + \frac{\alpha(\alpha)}{n!} \\ \alpha \in \R \backslash \N}$

### 3.1. Preuve

- $\frac1{1-x}$ et $e^x$ (faits respectivement en **II.4.2** et **I.3.4**)

**Trouvons le DL de** $\cos(x)$
- Dérivées et valeurs successives
	- $\rcases{\cos^{(0)}(x) = \cos(x) \\ \cos^{(0)}(0) = 1} \rcases{\cos^{(1)}(x) = -\sin(x) \\ \cos^{(-1)}(0) = 0}$
	- $\rcases{\cos^{(2)}(x) = -\cos(x) \\ \cos^{2}(0) = -1} \rcases{\cos^{(3)}(x) = \sin(x) \\ \cos^{(3)}(0)= 0}\rcases{\cos^{(4)}(x) = \cos(x) \\ \cos^{(4)}(0) = 1}$ 
- Écriture
	- $\cos(x) = 1 + 0 \cdot x - \frac{x^2}2 + 0 \cdot x^3 + \frac{x^4}{4!} + ... + (-1)^n\frac{x^{2n}}{(2n)!}+o(x^{2n+1})$

**Trouvons le DL de** $\sin(x)$ 
- Preuve laissée au lecteur

**Trouvons le DL de** $(1+x)^\alpha$
- Dérivées et valeurs successives
	- $\rcases{((1+x)^\alpha)^{(0)} \\ ((1+x)^\alpha)^{(0)}(0)=1}\rcases{((1+x)^\alpha)^{(1)} = \alpha(\alpha - 1)(1+x)^{\alpha - 2}\\ \\ ((1+x)^\alpha)^{(1)} = \alpha}$  
	- $\rcases{((1+x)^\alpha)^{(2)} = \alpha(\alpha - 1)(1+x)^{\alpha - 2} \\ ((1+x)^\alpha)^{(2)} = \alpha(\alpha - 1)} \cdots \cases{((1+x)^{\alpha})^{(n)} = \alpha(\alpha - 1)... (a-n+1)(1+x)^{\alpha - n} \\ \cdots (0) = \alpha(\alpha - 1) \cdots (\alpha - n + 1)}$  
	- ...


### 3.2 Exemple

$\sqrt{1+x}= (1+x)^{1/2} \ub{=}{(*)} 1 + \frac12 x - \frac18 x^2 + o(x^2)$
- $(*)$ : $\alpha = \frac12$

De même,
- $\sqrt[3]{1+x} = (1+x)^{1/3} = 1 + \frac13x - \frac19 x^2 + o(x^2)$ 


# III - Calculs sur les DL en $x_0 = 0$

Soit $f$ et $g$ définies sur $I$ et admettant des DL d'ordres $n$ en $0$ respectivement donnés par $f(x)=a_0+...+a_nx^n+o(x^n)$ et $g(x) = b_0 + ... + b_n x^n + o(x^n)$

## 1. Proposition - Changement de variable

La fonction $f(\lambda x^p)$ admet un DL d'ordre $np$ en $0$ donné par 
- $f(\lambda x^p) = a_0 + a_1 \lambda x^p + a_2 \lambda^2 x^{2p} + ... + a_n \lambda^n x^{np}+o(x^{np})$.

### 1.1 Exemple

On a $f(x)=\frac1{1-x}=1+x+x^2+...+x^n+o(x^n)$
- et donc, $\cases{\frac1{1-x^2}=1+x^2+x^4+...+x^{2n}+o(x^{2n}) \\ \frac1{1+x^2}} = 1 - x^2 + x^4 + ... + (-1)^nx^{2n}+o(x^{2n})$

### 1.2 Preuve

*Évident*

## 2. Proposition 2 - Combinaison linéaire

La fonction $\lambda f(x) + \beta g(x)$ admet un DL d'ordre $u$ en $0$ donnée par, 
- $\lambda f(x) + \beta g(x) = (\lambda a_0 + \beta b_0) + (\lambda a_1 + \beta b_1)x + ... + (\lambda a_n + \beta b_n)x^n + o(x^n)$.

### 2.1 Preuve

*Évident.*

### 2.2 Exemple

$e^x = 1 + x + \frac{x^2}{2}+\frac{x^3}6+o(x^3)$
- $\cos(x)=1-\frac{x^2}{2} + o(x^3)$
Donc, $e^x - \cos(x)=x+x^2+\frac{x^3}{6} +o(x^3)$

## 3. Proposition 3 - Produit

- La fonction $(f \times g)(x)$ admet un DL d'ordre $n$ en $0$ dont la partie régulière est obtenue en tronquant le polynôme 
	- $P_n(f) \times P_n(g) x^c$ à l'ordre $n$
		- $P_n$ décrivant la partie règulière (polynômiale) d'un DL.

### 3.1 Exemple

DL à l'ordre 3 en $0$ de $\frac{\sqrt{1+x}}{1-x}$.
- On a $\sqrt{1+x} = (1+x)^{1/2} = 1+\frac{x}2 -\frac{x^2}8 + \frac{x^3}{16}+o(x^3)$
- $\frac1{1-x} = 1 + x + x^2 + x^3 + o(x^3)$
Donc $K(x) = (1 + \frac{x}2 - \frac{x^2}8 + \frac{x^3}{16} + o(x^3))(1 + x + x^2 + x^3 + o(x^3))$
- $= (1 + x + x^2 + x^3 + \frac{x}2 + \frac{x^2}2 + \frac{x^3}2) + (-\frac{x^2}{8} - \frac{x^3}8 + \frac{x^3}{16}) + o(x^3)$
- $= 1 + \frac32x+\frac{11}8x^2+\frac{23}{16}x^3 + o(x^3)$

## 4. Proposition 4 - Intégration

Soit $f$
1. Alors, soit $F$ une primitive de $f$. Alors on a:
	- $F$ admet un DL d'ordre $n+1$ en $0$ donné par:
		- $F(x)=F(0)+a_0x+a_1\frac{x^2}2+...+\frac{a_nx^{n+1}}{n+1}+o(x^{n+1})$
2. **Si $f$ est de classe $\mc{C}^{n-1}$** alors $f'$ admet un DL d'ordre $n-1$ en $0$ donné par:
	- $f'(x) = a_1+2a_2x+ ... + na_nx^{n-1}+o(x^{n-1})$

### 4.1 Exemples

1. On a: $\frac1{1+x^2}=1-x^2+x^4+o(x^4)$ $(n=4)$
	- Mais la primitive de $\frac1{1+x^2}$ est $\arctan(x)$.
	- De plus, $\arctan(0) = 0$
	- Donc $\arctan(x) = x- \frac{x^3}3 + \frac{x^5}5 + o(x^5)$


### 4.2 - Preuve

1. On a $f(x) = a_0 + a_1x+...+a_nx^n + \eps(x)x^n$ avec $\lim{x\to 0}\eps(x)=0$
	- donc $f$ est continue $\Rightarrow$ $f$ admet une primitive $F$ telle que:
		- $F(x) - F(0) = [f(x)]^x_0 = \int^x_0 f(x) dt = \int^x_0 (a_0+a_1t+...+a_nt^n+t^n\eps(x))dt$
		- $= [a_0t+a_1\frac{t^2}2+...+\frac{a_nt^{n+1}}{n+1}]^x_0 + \int^x_0 t^n \eps(x)dt$
	- $\Rightarrow F(x) = \ov{F(0) + a_0x+ ... + \frac{a_nx^{n+1}}{n+1}}{P_{n+1}(x)}+\ub{\int^x_0 t^n \eps(t) dt}{R_n(x)}$
	- Reste à voir que $R_n(x) = o(x^{n+1})$
		- Par construction on a $\lim{t \to 0}\eps(x) = 0$ quitte à poser $\eps(0) = 0$ alors:
	- $\eps(x) = \frac{f(x) - \sun{i=0}n a_i x_i}{x^n}$ qui est continue sur $I\backslash \{0\}$
	- Donc $\eps$ est $\mc{C}^0(I)$.
		- Si on se place sur $[0,x]\sub I$
	- On a alors $\left| \int^x_0t^n\eps(t) dt\right| ≤ \int^x_0 |t^n| |\eps(t)|dt ≤ \ub{\max|\eps(t)|}{t \in [0,x]} \cdot \int^x_0 t^n dt$
		- finie car $\eps \in \mc{C}^0(I) \to t \in [0, x]$
		- $≤ \left(\ub{\max}{t \in [0,x]}|\eps(t)|\right)\frac{x^{n+1}}{n+1}$ 
	- Par continuité de $\eps(x)$, comme,
		- $\lim{x\to 0}\eps(x) = 0$ on a $\lim{\eps \to 0} \ \underset{t \in [0,x]}{\max|\eps(t)|} = 0$ 
	- Donc on a bien $R_n(x) = o(x^{n+1})$

2. Comme $f$ est de classe $\mc{C}^{n}$
	- $f'(x) = f'(0) + \frac{x(f')'}{1!}(x) + ... + ... \frac{(f')^{(n-1)}}{(n-1)!}x^{n-1}+o(x^{n-1})$
	- $f'(x) = f'(0) + f''(0)x_1 + ... + \frac{f^{(n)}(0)}{(n-1)!}x^{n-1}$
	- En utilisant **Taylor-Young** à l'ordre $n-1$ $(f'$ est $\mc{C}^{n-1})$ à $f'$
		- Donc $f'(x) = \sun{k=0}{n-1}\frac{f^{k+1}(0)}{k!}x^k + o(x^{k-1})$ $(*)$
	- D'autre part,
		- On a $f(x) = \sun{k=0}n a_kx^k + o(x^k) = \sun{k=0}n \frac{f^{k}(0)}{k!}x^k + o(x^n)$    
			- $\Rightarrow a_k = \frac{f^{(k)}(0)}{k!} \Rightarrow f^{(k+1)(0)} = (k+1)!a_{k+1}$ 
		- En remplaçant dans $(*)$ on a alors:
			- $f'(x) = \sun{k=0}{n-1}\frac{(k+1)!a_{k+1}}{k!}x^k + o(x^{n-1})$
			- $= \sun{k=0}{n-1}(k+1)a_{k+1}x^k+o(x^{n-1})$

### 4.3 Exemples

#### 4.3.1 Exemple 1

On a, $\forall x \in ]-1, 1[$;
- $\frac1{1+x} = 1-x+x^2+...+(-1)^nx^n+o(x^n)$
- et donc, puisque $\int^x_0 \frac{dt}{1+t} = [\ln(1+t)]^x_0 = \ln(1+x) = F(x)$
- On a:
	- $\ln(1+x) = \ub{F(0)}{=0}+x-\frac{x^2}2+\frac{x^3}3+...+(-1)^n\frac{x^{n+1}}{n+1}+o(x^{n+1})$

 $\boxed{\forall x \in ]-1, 1[, \ln(1+x) = \sun{k=1}n\frac{(-1)^{n}x^k}{k}+o(x^{n+1})}$


#### 4.3.2 Exemple 2

$\forall x \in ]-1, 1[, \ln(1-x) = -\left(\sun{k=1}n\frac{x^k}k\right) + o(x^n)$
- S'obtient par substitution dans exemple précédent.

## 5. Composition de DL

On veut un DL de $f \circ g$. 
- On veut un DL de $f \circ g$ et on suppose que $g(0) = 0$
- Alors le DL de $f \circ g$ est obtenu en tronquant le polynôme $P \circ Q(x)$ au bon ordre.
- où $\align{f(x) = P(x) + o(x^n) \\ g(x) = Q(x) + o(x^n)}$

### 5.1 Exemple

DL à l'ordre $5$ en $0$ de $\ln(\cos(x))$
- On a 
	- $\ln(\cos(x)) = \ln(1+(\cos(x) - 1))$
	- $\phantom{\ln(\cos(x))} = \ln(1+u(x))$ où $u(x) = \cos(x) - 1 \td{x\to 0}0$
	- On a $\ln(1+u) = u - \frac{u^2}2+\frac{u^3}3-\frac{u^4}4 + \frac{u^5}5 + o(u^5)$ $\color{blue}(*)$
	- Reste à calculer $u, u^2, ..., u^5!$
		- Mais $u = \cos(x) - 1= 1- (1 - \frac{x^2}2 + \frac{x^4}{24} + o(x^5)) - 1$
			- $\boxed{\Rightarrow u = \frac{x^2}2 + \frac{x^4}{24} + o(x^5)}$ 
		- $u^2 = (-\frac{x^2}2 + \frac{x^4}{24} + o(x^5))^2$
		- $\phantom{u^2} = \frac{x^4}4 + o(x^4)$
		- $u^3 = (-\frac{x^2}2 + \frac{x^4}{24} + o(x^5))^3$
		- $\phantom{u^3} = o(x^5)$
		- $u^4 = o(x^5)$
		- $u^5 = o(x^5)$
	- Par $\color{blue}(*)$,
		- $\ln(\cos(x)) = -x^2 + \frac{x^4}{24} - \frac12\left(\frac{x^4}4\right) + o(x^5)$
Soit $\ln(\cos(x)) = -\frac{x^2}2 - \frac{x^4}{12} + o(x^5)$


## 6. Quotients de DL

On veut un DL de $\frac{f(x)}{g(x)}$
- Dans un premier temps, on suppose $g(0) ≠ 0$

### 6.1 Méthode 1

- $\frac{f(x)}{g(x)} = \frac1{g(0)} \cdot \frac{f(x)}{\rcases{\frac{g(x)}{g(0)} } {u(x)}} = \frac1{g(0)} \cdot f(x) \cdot \frac1{1 + \left(\frac{g(x)}{g(0)} - 1\right)}$   
- $= \boxed{\frac1{g(0)} \cdot f(x) \cdot \frac1{1 + v(x)}}$ 

Pour "finir", on fait le DL de $v(x),$ celui de $\frac1{1+v(x)},$ celui de $f(x)$, on multiplie les deux DL et on multiplie par $\frac1{g(0)}$

#### 6.1.1 Exemple

> $\tan(x) = \frac{\sin(x)}{\cos(x)}$ à l'ordre 5.

$\cos(0) = 1 ≠ 0$ et $\cos(x) = 1 + (\cos(x) - 1)$
- et, soit $v(x) = \cos(x) - 1 = -\frac{x^2}2 + \frac{x^4}{24}+o(x^5)$
donc $\tan(x) = \sin(x) \cdot \frac1{1 + v(x)} \cdot \frac1{1+v}$
- $v=-\frac{x^2}2 + \frac{x^4}{24} + o(x^5)$
- $v^2 = \frac{x^4}{4} + o(x^5)$
et on a, $v^3 = o(x^5)$, $v^4 = o(x^5), v^5 = o(x^5)$

Donc $\frac1{1+v} = 1-(-\frac{x^2}2 + \frac{x^4}{24}) + \frac{x^4}{4} + o(x^5)$
- $= 1 + \frac{x^2}2 + \frac5{24}x^4 + o(x^5)$

Donc $\tan(x) = \sin(x)(1 + \frac{x^2}2 + \frac5{24}x^4 + o(x^5))$

**De plus**,
- $\sin(x) = x-\frac{x^3}6+\frac{x^5}{120}+o(x^5)$

**Enfin**,
$\tan(x) = (x-\frac{x^3}6 + \frac{x^5}{120} + o(x^5))(1 + \frac{x^2}2 + \frac5{24}x^4 + o(x^5))$
$\phantom{\tan(x)} = x + \frac{x^3}2 + \frac5{24}x^5 - \frac{x^3}6 - \frac{x^5}12 + \frac{x^5}{120}+o(x^5)$
$\phantom{\tan(x)} = x + \frac{x^3}3+\frac{2}{15}x^5+o(x^5)$

### 6.2 Méthode 2 + Exemple

On fait une division suivant les puissances croissantes:
- $\tan(x) = \frac{\sin(x)}{\cos(x)} = \frac{x-\frac{x^3}6 + \frac{x^5}{120}+ o(x^5)}{1 - \frac{x^2}2 + \frac{x^4}{24} + o(x^5)}$

$\begin{array}{l|}x-\frac{x^3}6 + \frac{x^5}{120} \\ \frac{-(x-\frac{x^3}2 + \frac{x^5}{24})}{\frac{x^3}3 - \frac{x^5}{30}} \\ \frac{-(\frac{x^3}3 - \frac16x^5) + o(x^5)}{\frac{2}{15}x^5 + o(x^5)}\end{array}$ $\align{1 - \frac{x^2}2 + \frac{x^4}4 \\ \hline  x+\frac{x^3}3 + \frac{2}{15}x^5 \\ \\  \\ \\ }$


Donc $\tan(x) = x + \frac{x^3}3 + \frac{2}{15}x^5 + o(x^5)$


La méthode est basée sur le résultat qui suit:

## 7 - Proposition 5

Soit $A(x)$ et $B(x)$ dans $\R[x]$.
Soit $p \in \N$.
- Alors il existe un unique couple $(Q,R)$ de polynômes avec $\deg(Q) ≤ p$ tels que
	- $A(x) = Q(x) B(x) + X^{p+1}R(x)$

### 7.1 Corollaire

On suppose que $B(0) ≠ 0$
- Alors il existe un unique couple $(Q,\tilde{R})/\deg(Q) ≤ p$ 
- $\frac{A(x)}{B(x)} = Q(x) + X^{p+1}\tilde{R}(x)$
- $\phantom{\frac{A(x)}{B(x)}} = Q(x) + o(x^{p+1})$

### 7.2 Preuve (de la proposition)

#### 7.2.1 Unicité

Supposons qu'il existe $(Q_1, R_1)$ et $(Q_2, R_2)$ avec $Q_1(x)B(x) + X^{p+1}R_1(x) = (A(x)) = Q_2(x)B(x) + X^{p+1}R_2(x)$
$\Rightarrow \ub{\ub{[Q_1(x) - Q_2(x)]}{(*)}\ub{B(x)}{(**)}}{(****)} = \ub{X^{p+1}(R_2(x)- R_1(x))}{(***)}$
- $(*) :$ de degré au plus $P$
- $(**) : B(0) ≠ 0$
- $(***) :$ le terme de plus petit degré
	- est de degré $≥ p + 1$
- $(****)$ : contient un terme de degré $p$
	- car $B_0$ est non-nul.

#### 7.2.2 Existence

$(p=0)$
- $A(x) = a_0 + a_1(x) + ... + a_nx^n$
- $B(x) = b_0 + b_1x + ... + b_nx^k$
Posons $Q(x) = -\frac{a_0}{b_0} : \deg(Q) = 0$
- $A(x) - Q(x) B(x) = (a_0 + a_1x + ... + ...) - \ov{\frac{a_0}{b_0}(b_0}{a_0} + b_1x + ... )$
- $\phantom{A(x) - Q(x) B(x)} = x(a_1 - \frac{a_0 b_1}{b_0}) + ... /$
-  $\phantom{A(x) - Q(x) B(x)} = x[....]$

$A(x) = B(x) \underset{p}{Q(x)} + X^{p+1}\underset{p}{R(x)}$
On recommence avec le cas $p=0$ sur $R_p(x)$
On a $\cases{R_p(x) = B(x)\tilde{Q}(x) + x\tilde{R}(x) \\ \deg(\tilde{Q}) = 0}$ 
On a alors:
- $A(x) = B(x)Q_p(x)+X^{p+1}(B(x)\tilde{Q}(x)+x\tilde{R})$
- $B(x) (Q_{p}+x^{p+1}\tilde{Q}) + x^{p+2}\tilde{R}(x)$ de degré $p+1$

> **Cas particulier** - $DL$ de $\frac{f(x)}{g(x)}$ avec $g(0) = 0$

- $\frac{\sin(x)}{\ln(1+x)}$ avec $x'$ à l'ordre $2$ en $0$. 
- $= \frac{x-\frac{x^3}6 + o(x^3)}{x-\frac{x^2}2 + o(x^2)} = \frac{\cancel x}{\cancel x}\frac{1+o(x)}{1-\frac{x}2 + o(x)}$

Ce n'est plus valide car on perd des puissances avec le quotient. 

> [!tips]
> Toujours veiller à ce que l'ordre reste consistent après quotient, il sera parfois nécessaire d'utiliser des DL d'ordre supérieur au préalable. 

$= \frac{x-\frac{x^3}6 + o(x^3)}{x-\frac{x^2}2 + \frac{x^3}3 + o(x^3)} = \frac{\cancel x(1-\frac{x^2}6 + o(x^2))}{\cancel x (1 - \frac{x}2 + \frac{x^2}3 + o(x^2))}$

... à compléter

$= 1 + \frac{x}2 - \frac{x^2}4 + o(x^2)$


# IV - DL en un point

On a deux méthodes, pour s'y faire.
- **Méthode 1** - Utilisation directe de la formule de Taylor-Young
- **Méthode 2**

## 1. Méthode 1

Utilisation directe de la formule de Taylor-Young

### 1.1 Exemple

DL de $\cos(x)$, ordre 3, on a $x_0 = \frac{\pi}4$. $\cos(x)$ est de classe $\mc{C}^3(\R)$
$\begin{array}{l|l|l}(0) & (1) & (2)\\ \cos^{(0)}(x) & \cos^{(1)}(x) & \cos^{(2)}(x)=-\sin(x) \\ \cos^{(0)}\m{\frac\pi4} = \frac{\sqrt2}2 & \cos^{(1)}(\frac\pi4) = - \frac{\sqrt{2}}2 & \cos^{(2)}(\frac\pi4) = -\frac{\sqrt{2}}2\end{array}$ 

On a alors, 
- $\cos(x) = \frac{\sqrt2}2 - \frac{\sqrt{2}}2 (x - \frac\pi4) - \frac{\sqrt{2}}4(x-\frac\pi4)^2 + o((x-\frac\pi4)^2)$
- $\cos(\frac\pi4 + h) = \frac{\sqrt{2}}2 - \frac{\sqrt{2}}{2}- \frac{\sqrt{2}}4h^2 + o(h^2)$


## 2. Méthode 2

