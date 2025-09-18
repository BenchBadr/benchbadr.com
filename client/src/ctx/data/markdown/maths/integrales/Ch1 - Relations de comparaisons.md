---
lang: fr
desc: Cours introductif aux relations de comparaison.
date: 10/09/2025
---
> [!info]
> Cours présenté par **M. Ribaud**


$\newcommand{\sub}{\subset}\newcommand{\R}{\mathbb{R}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\N}{\mathbb{N}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\eq}[1]{\underset{#1}{\sim}}\newcommand{\eps}{\varepsilon}\newcommand{\td}[1]{\underset{#1}{\to}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}$
# 0 - Introduction

L'objectif ici est de comparer le comportement de deux suites (ou deux fonctions) lorsque $n \to +\infty$.
Plus précisément, on veut donner un sens mathématique aux assertions suivantes:
- Définir $(u_n)_{n \in \N}$  est équivalente à $(v_n)_{n ≥ 0}, n\to+\infty$
- Définir $(u_n)_{n\in\N}$ est négligeable devant $(v_n)_{n≥0}, n\to +\infty$
- Définir $(u_n)_{n\in\N}$ est dominée par $(v_n)_{n≥0}, n \to +\infty$

Ceci fait, on va mettre en place des règles de calculs.
- L'objectif est de pouvoir remplacer des expressions complexes par des expressions simples
- **Un premier exemple**
	- Calcul de $\lim{n\to+\infty}\frac{n^3+3n+2}{n^3+2n^2+n+10}$ si elle existe.
		- On factorise par les termes dominants
		- On a $\lim{n\to+\infty}\frac{n^3+3n+2}{n^3+2n^2+n+10} = \lim{n\to+\infty} \frac{\cancel{n^3}(1+\ub{\frac{3}{n^2}}{\to 0}+\ub{\frac{2}{n^3}}{\to 0})}{\cancel{n^3}(1+\ub{\frac{2}n}{\to 0}+\ub{\frac1{n^2}}{\to 0}+\ub{\frac{10}{n^3})}{\to 0}} = \frac11 = 1$
	- On veut mettre en place le formalisme suivant:
		- On a: $\cases{n^3 + 3n + 2 \eq{+\infty} n^3\\ n^3 + 2n^2 + n + 10 \eq{+\infty} n^3}$
		- Et on a alors:
			- $\frac{n^3+3n+2}{n^3+2n^2+n+10}\sim \frac{n^3}{n^3} = 1$
			- Donc $\frac{n^3+3n+2}{n^3+2n^2+n+10}\sim 1 \Rightarrow \lim{n\to+\infty}\frac{n^3+3n+2}{n^3+2n^2+n+10}=1$

> [!tips]
> Les deux premiers chapitres vont fournir des outils qui serviront systématiquement dans les cours d'analyse L2, L3...


# I - Relations de comparaison

## 1. Relations d'équivalence

> [!check]
> Dans tout le cours, $(u_n)_{n≥0}$ et $(v_n)_{n≥0}$ sont des suites à valeurs dans $\R$. (Car il n'y a pas de relations d'ordre avec les complexes).

### 1.1 Définition - Deux suites équivalentes

- Soit $(u_n)_{n≥0}$ et $(v_n)_{n≥0}$. On dira que $(u_n)_{n≥0}$ et $(v_n)_{n≥0}$ sont équivalentes lorsque $n\to+\infty$
	- On notera $u_n \sim v_n$
- S'il existe $n_0$ entier et $(\varepsilon_n)_{n ≥ n_0}$ tels que:
	- $\forall n ≥ n_0, u_n = \epsilon_n v_n$ et $\lim{n\to+\infty}\varepsilon_n=1$
		- **Note** : implique $\varepsilon_n = \frac{u_n}{v_n}$

## 1.2 Proposition 1

On suppose $(v_n)_{n\in\N}$ est non nulle à partir d'un rang $n_1$.
- Alors, 
	- $u_n \sim v_n \iff \lim{n\to+\infty}\frac{u_n}{v_n}=1$
	- **Note** : Se déduit de la définition précédente

> [!info]
> **Remarque** - En pratique, on utilise ce critère pour montrer que $u_n \sim v_n$.


### 1.2.1 Preuve

$(\Rightarrow)$ Si $u_n \sim v_n$
- Alors il existe $n_0$ et $(\eps)_{n≥n_0}$ avec $\cases{\lim{n\to+\infty} \eps_n = 1 & (*)\\ \forall n ≥ n_0, u_n = \varepsilon_n \cdot v_n & (**)}$
- Pour $\forall n ≥ n_1,$ on a $v_n ≠ 0$
	- On a alors par $(**)$:
		- $\eps_n = \frac{u_n}{v_n}$ qui est bien définie
	- et de plus, par $(*)$ on a:
		- $\lim{n\to+\infty}\eps_n=1$ et donc $\lim{n\to+\infty}\frac{u_n}{v_n}=1$

$(\Leftarrow)$ $\cases{\text{ Si }\exists n_1 / \forall n ≥ n_1, v_n ≠0 & (*) \\ \lim{n\to+\infty}\frac{u_n}{v_n}=1 & (**)}$
- Posons $\forall n ≥ n_0 = n_1$
	- $\eps_n = \frac{u_n}{v_n}$
- Alors par $(**), \lim{n\to+\infty}\eps_n=1$

> [!check]
> **Remarque** - On a $u_n \sim 0 \iff \lim{n\to+\infty}u_n = 0$ (par cette même définition) à partir du rang $n_0$.

### 1.2.2 Exemples

1. On a $n^2 \sim n^2 + 10$
	- On a en effet $\lim{n\to+\infty} \frac{n^2}{n^2+10} = 1$ d'où le résultat
2. On a $\sin(\frac1n) \sim \frac1n$ 
	- En effet, $\lim{n\to+\infty}\frac{\sin\left(\frac1n\right)}{\frac1n}= \lim{n\to+\infty}\frac{\sin\left(\frac1n\right) - \sin(0)}{\frac1n - 0} \ub{=}{(*)} (\sin)'(0)$ 
		- $(*)$ : Taux d'accroissement de $\sin(x)$ en $x=0$.
3. $3n^2+2 \cancel \sim n^2$
	- En effet, 
		- $\lim{n\to+\infty}\frac{3n^2+2}{n^2}= \lim{n\to+\infty}3+\frac{2}{n^2}≠1$ 
		- D'où le résultat
4. $\ln(n+10) \sim \ln(10n+10)$
	- En effet, on a par les propriétés de $\ln$:
		- $\ln(10n+10) = \ln(10n(1+\frac1n))=\ln(10) + \ln(n) + \ln(1+\frac1n)$
		- $\ln(n+10) = \ln(n(1+\frac{10}n)) = \ln(n) + \ln(1+\frac{10}n)$ 
	- Donc:
		- $\frac{\ln(n+10)}{\ln(10n+10)} = \frac{\ln(n)+\ln(1+\frac{10}n)}{\ln(10)+\ln(n)+\ln(1+\frac1n)} = \frac{\ln(n)}{\ln(n)}\frac{1+\ov{\frac{\ln(1+\frac{10}n)}{\to 0}}{\ln(n)}}{1+\ub{\frac{\ln(10)+\ln(1+\frac1n)}{\ln(n)}}{\to 0}}$   

> [!tips]
> La notion d'équivalence permet "d'introduire" la notion de vitesse relative aux limites.

## 2. Négligeabilité

### 2.1 Définition

- On dira que $(u_n)_{n≥0}$ est négligeable devant $(v_n)_{n≥0}$ lorsque $n \to +\infty$
	- on notera $u_n = o(v_n)$
- S'il existe $n_0$ un entier et une suite $(\eps_n)_{n≥n_0}$ tels que 
	- $u_n = \eps_nv_n, \forall n ≥ n_0$
	- avec $\lim{n\to+\infty}$

## 2.2 Proposition

On suppose que $(v_n)_{n≥0}$ est non nulle à partir du rang $n_1$.
- Alors, $u_n = o(v_n) \iff \lim{n\to+\infty}\frac{u_n}{v_n}=0$

> [!info]
> **Remarque** - En pratique, on utilise la proposition sus-mentionnée.

### 2.2.1 Preuve

> Note : $n_1$ est défini dans la proposition

$(\Rightarrow)$ On a, $\cases{\forall n ≥ n_0, u_n = \eps_nv_n & (*) \\ \lim{n\to+\infty}\eps_n=0 & (**)}$ 
- Comme $\forall n ≥ \max(n_0, n_1),$
	- On a $v_n ≠ 0$ 
		- alors $\eps_n=\frac{u_n}{v_n}$
	- De plus, par $(**)$
		- $\lim{n\to+\infty}\eps_n=0$
		- et donc, $\lim{n\to+\infty}\frac{u_n}{v_n}=0$
$(\Rightarrow) \cases{\forall n ≥ n_1, \text{ on a }v_n ≠ 0 & (*) \\ \lim{n\to+\infty} \frac{u_n}{v_n}=0 & (**)}$
- Si $n ≥ n_1,$
	- $\eps_n = \frac{u_n}{v_n}$ est défini par $(*)$
		- et de plus, $\lim{n\to + \infty}\eps_n = 0$
	- Et, on a de plus $\eps_nv_n  = \left(\frac{u_n}{v_n}\right)v_n = u_n$
		- Ceci $\forall n ≥ n_1$
	- On prend alors $n_0 = n_1$

### 2.2.2 Exemples

1. Soit $u_n = 1000n^2$ et $v_n = n^3$
	- Alors $u_n = o(v_n)$
	- En effet,
		- $\lim{n\to+\infty}\frac{u_n}{v_n}=\lim{n\to+\infty}\frac{1000n^2}{n^3} = \lim{n\to+\infty}\frac{1000}n = 0$
2. Soit $u_n = n^3$ et $v_n = 2^n$ alors $u_n = o(v_n)$
	- En effet,
		- $\lim{n\to+\infty}\frac{u_n}{v_n} = \lim{n\to+\infty}\frac{n^3}{2^n}=\lim{n\to+\infty}\frac{n^3}{e^{n\ln(2)}}=\lim{n\to+\infty}n^3\ub{e^{-\ln(2)\cdot n}}{\to 0}$
			- Car $-\ln(2)<0$
		- $= 0$ (par croissance comparée)
3. Soit $u_n = \ln(n)$ et $v_n = \ln(n^2)$ alors 
	- $u_n$ n'est pas négligeable devant $v_n$.
	- En effet,
		- $\frac{u_n}{v_n} = \frac{\ln(n)}{\ln(n^2)} = \frac{\ln(n)}{2\ln(n)} \to \frac12 ≠ 0$ 
		- Donc non-négligeable.

## 2.3 Proposition

Soit $\alpha, \beta > 0$ et $q \in \R^*$
1. $n^\alpha = o(e^{\beta n})$
2. $[\ln(n)]^\alpha = o(n^{\beta})$ 
3. Si $|q|<1$
	- $|q|^n = o\left(\frac1{n^\alpha}\right)$
4. Si $|q|>1,$
	- $n^\alpha= o\left(|q|^n\right)$

### 2.3.1 Preuve

 - $\fbox1$ et $\fbox2$
	 - Par les croissances comparées (C.C)
 - $\fbox3$ et $\fbox4$
	 - $|q|^n = e^{\ln(|q|n)}$ et on a: 
		 - $\ln(|q|)<0$ si $|q| < 1$
		 - $\ln(|q|)>0$ si $|q| > 1$
	 - Et donc, si $|q|<1,$
		 - $\frac{|q|^n}{\left(\frac1n\right)}=n^\alpha e^{(-\ln|q|)\cdot n}$ avec $+\ln(|q|)<0$
	 - Donc $\lim{n\to+\infty}\frac{|q|^n}{\left(\frac1{n^{\alpha}}\right)}=0$
		 - Par les C.C
		 - D'où le résultat
	 - Idem pour $\fbox4$

### 2.3.2 Exemples

- $\sqrt n = o(e^n),$ 
- $\ln(n) = o(\sqrt n),$
- $\left(\frac12\right)^n=o(\frac1{n^{10]}}),$
- $n^{10}=o(2^n)$   

## 3. Relations de domination

## 3.1 Définition

On dira que $(u_n)_{n≥0}$ est dominée par une autre suite $(v_n)_{n≥0}$ lorsque $n\to +\infty$
-  $u_n = O(v_n)$
- S'il existe $n_0u_n$ entier et une suite $(\eps_n)_{n≥n_0}$ tels que:
	- $\forall n ≥ n_0, u_n = \eps_n v_n$
	- avec $(\eps_n)_{n≥0}$ bornée.

> [!tips]
> $O$ pour la domination.
> $o$ pour la négligeabilité.

## 3.2 Proposition

On suppose $(v_n)_{n≥0}$ est non nulle à partir du rang $n_1$.
- Alors $u_n = O(v_n)\iff \frac{u_n}{v_n}$ est bornée.

> [!info]
> **Remarque** - En pratique, on utilise ce critère

### 3.2.1 Preuve

*Laissée au lecteur*.

> [!check]
> $\fbox1$ Si $u_n = o(v_n)$ alors $u_n = O(v_n)$ (car $\eps_n \to 0$ et donc $\eps_n$ est bornée). 
> $\fbox2$ Si $u_n = O(v_n)$ alors il existe $c > 0$ telle que $|u_n| ≤ c|v_|$ . 

### 3.2.2 Exemples

1. Si $u_n = n^2+1$ et $v_n = 2n^2$ alors:
	- $\frac{u_n}{v_n}=\frac{n^2+1}{2n^2} = \frac12 + \frac1{2n^2} \td{n\to+\infty}\frac12$ 
		- Donc $\frac{u_n}{v_n}$ est bornée $\Rightarrow u_n = O(v_n)$
	- $\frac{u_n}{v_n} = \frac{2n^2}{n^2+1} \to 2$  et donc $v_n = O(u_n)$
2. Soit $u_n = 2^n, v_n = 4^n$
	- Alors $\frac{u_n}{v_n} = \frac{2^n}{4^n} = \frac{1}{2^n}\to 0$
		- Donc $u_n = o(v_n) \Rightarrow u_n = O(v_n)$
	- $\frac{v_n}{u_n} = \frac{4^n}{2^n}=2^n\to +\infty$
	- Donc $(v_n)$ n'est pas dominée par $(u_n)_{n\in\N}$

# II - Règles de calcul

## 1. Proposition - Relation d'équivalence

La relation $\sim$ est une relation d'équivalence
1. On a $u_n \sim v_n$ (réflexive)
2. On a $u_n \sim v_n \Rightarrow u_n \sim v_n$ (symétrique)
3. Si $u_n \sim v_n$ et $v_n \sim w_n \Rightarrow u_n \sim w_n$ 

### 1.1 Preuve

- $\fbox1$
	- $u_n = \eps_nu_n \cases{n_0 = 0 \\ \forall n, \eps_n = 1 \to 1}$
- $\fbox2$
	- $u_n \sim v_n \Rightarrow \cases{\forall n ≥ n_0, u_n = \eps_n v_n \\ \eps_n \to 1}$
	- En particulier comme $\eps_n \to 1, \exists n_1 / \forall n ≥ n_1, \eps_n ≠ 0$
	- Posons $\eps_n' = \frac1{\eps_n},n≥n_1$ alors $v_n=\frac1{\eps_n}u_n=\eps'v_n$
		- Avec $\lim{n\to+\infty}\frac1{\eps_n} = 1$
- $\fbox3$
	- On a $\forall n ≥ n_0,$
		- $\rcases{u_n = \eps_nv_n, \eps_n \to 1 \\ \forall n ≥ n_1, v_n = \eps_n'w_n, \eps_n' \to 1}\Rightarrow \forall n ≥ \max(n_0, n_1)$  
		- $u_n = (\eps_n\eps_n')w_n$ avec $\lim{n\to+\infty}(\eps_n\eps_n')=(\lim{n\to+\infty}\eps_n) \times (\lim{n\to+\infty} \eps_n') = 1 \times 1 = 1$ 

## 2 Proposition 

1. Si $\lim{n\to+\infty}u_n = l, l≠0$ alors $u_n \sim l$
2. Soit $\alpha \in \R, si (u_n^\alpha)$ et $(v_n^\alpha)$ sont définies à partir d'un certain rang,
	- Si $u_n \sim v_n$ alors:
		- $u_n^\alpha \sim v_n^\alpha$
3. Si $u_n \sim v_n$ et si $a_n \sim b_n$ alors:
	- $u_n \times a_n \sim v_n \times b_n$
4. De plus, $(a_n)$ et $(b_n)$ sont non nulles à partir d'un certain rang alors:
	- $\frac{u_n}{a_n}\sim \frac{v_n}{b_n}$
5. Si $u_n \sim v_n$ et $v_n = o(w_n)$ alors $u_n = o(w_n)$
	- Si $u_n \sim v_n$ et $v_n = O(w_n)$ alors $u_n = O(w_n)$

### 2.1 Preuve

Pour simplifier, on suppose que les suites sont non nulles à partir d'un certain rang.

- $\fbox1$
	- Comme $l≠0, \lim{n\to+\infty}\frac{u_n}l = 1 \Rightarrow u_n \sim l$
		- Où ici $l=\{l,l,l,...\}$ la suite constante $=l$
		- **Note** - On confond le nombre et la suite constante.
- $\fbox2$
	- On a $\lim{n\to+\infty}\frac{u_n}{v_n}=1$
		- De plus, $x \mapsto x^\alpha = e^{\alpha \ln(x)}$ est continue en $x=1$
	- Donc, par composition,
		- $\lim{n\to+\infty}\left(\frac{u_n}{v_n}\right)^\alpha = 1^\alpha = 1$
	- En particulier,
		- $\lim{n\to+\infty}\frac{u_n^\alpha}{v_n^\alpha}=1$
		- D'où : $u_n^\alpha \sim v_n^\alpha$
- $\fbox3$
	- On a $\lim{n\to +\infty}\frac{u_n}{v_n}=1$
	- $\lim{n\to+\infty}\frac{a_n}{b_n}=1$
		- Donc $\lim{n\to+\infty}\frac{u_n \times a_n}{v_n \times b_n}= \left(\lim{n\to+\infty}\frac{u_n}{v_n}\right)\times \left(\lim{n\to+\infty}\frac{a_n}{b_n}\right)=1\times 1 = 1$
	- On a bien $u_n \times a_n \sim u_n \times b_n$
- $\fbox4$
	- Idem
- $\fbox5$
	- Ok...

### 2.2 Exemple

> Donner un $\sim$ de $\frac{\sqrt{n^4+\sin(n)}}{\ln(ne^n+n)}$ 

- **D'une part,**
	- $n^4+\sin(n) \sim n^4 \Rightarrow (n^4+\sin(n))^{1/2}\sim(n^4)^{1/2}=n^2$
- **D'autre part,**
	- $\ln(ne^{\alpha+n})=\ln(n)+\ln(ne^n(1+e^{-n}))$
	- $= \ln(n)+n+\ov{\ln(1+\ub{e^{-n}}{\to 0})}{\to 0} ~ n$ 
- **Donc:**
	- $\frac{\sqrt{n^4+\sin(n)}}{\ln(ne^n+n)}\sim \frac{n^2}n$ 

## 3 Proposition

## 3.1 Non-additivité

> [!warn]
> Si $u_n \sim v_n$ et $a_n \sim b_n$ alors **on n'a pas**  $u_n + a_n \sim v_n + b_n$

### 3.1.1 Exemple

- $\rcases{u_n = n^2+n \\ v_n = n^2} : u_n \sim v_n$
- $\rcases{a_n = -n^2 \\ b_n = -n^2} : a_n \sim b_n$
- Et,
	- $\rcases{u_n+a_n = n \\ v_n + b_n = 0}$ et $n \cancel \sim 0$ 
## 3.2 Non-composition

> [!warn]
> On ne peut pas composer des $\sim$ par des fonctions

### 3.2.1 Exemple

- $\rcases{u_n = n^2 + 1\\ v_n = n^2}$ alors $u_n \sim v_n$
	- Mais $\frac{e^{u_n}}{e^{v_n}} = \frac{e^{n^2+1}}{e^{n^2}} = e \cancel \to 1$
- Donc $e^{u_n} \cancel \sim e^{v_n}$ 

## 3.3 Proposition

Soient $\{u_n\}_{n≥0}, \{v_n\}_{n≥0}$ et $\{w_n\}_{n≥0}$
1. Si $u_n = o(v_n)$ et si $v_n = o(w_n)$ alors $u_n = o(w_n)$
	- De même pour $O$.
2. Compatibilité avec la linéarité
	- Si $u_n = o(w_n)$ et $v_n = o(w_n)$
	- Alors $\lambda u_n + \beta v_n = o(w_n)$
	- Idem pour $O$.
3. Stabilité par produit par une suite
	- Si $u_n = o(v_n) \Rightarrow u_nw_n = o(v_nw_n)$ 
	- De même pour $O$
4. Stabilité par produit des $o$. 
	- Si $u_n = o(v_n)$ et $w_n = o(h_n)$
	- Alors $u_n \times w_n = o(v_n \times h_n)$
	- De même pour $O$.

### 3.3.1 Preuve

*Laissée au lecteur*


# III - Comparaison de fonctions

On étend les notions de $\sim, o$ et de $O$ aux fonctions de $\mathcal{F}(I, \R)$

## 1. Définition

Soit $I$ un ensemble, $x_0 \in \R$ on appelle voisinage de de $x_0$ dans $I$, 
- tout ensemble $J$ de la forme $J = I \cap ]x_0-\eps, x_0 + \eps[, \eps > 0$

### 1.1 Exemples

> [!tips]
> Un voisinage est forcément inclu dans l'ensemble de départ 

Si $I = [1;2[$
- Si $x_0 = \frac32$
- Un voisinage de $x_0$ est par exemple:
	- $J = ]-\frac32-\frac18, \frac32+\frac18[= ]\frac{11}8;\frac{13}8[$

Si $x_0 = 1$, alors un voisinage de $x_0 = 1$ est l'ensemble:
- $J = [1;2[ \cap ]\frac12;\frac32[=[1,\frac32[$
- Si $x_0=2$
	- Alors, un voisinage de $x_0 = 2$ est l'ensemble $J=[1;2[\cap ]\frac32;\frac52[=]\frac32;2[$

### 1.2 Remarque

1. Si $x_0 = +\infty$
	- On appelle voisinage de $+\infty$ tout intervalle de la forme $]A; +\infty[$
2. Si $x_0 = -\infty$
	- On appelle voisinage de $-\infty$ tout intervalle de la forme $]-\infty;A[$


## 2. Définition 1

Soit $f:I \to \R$, soit $x_0 \in I$ ou une "extrémité" de $I$.
- On dira que $f$ est équivalente à $g$ au point $x_0$ 
- Et on notera $f(x)\eq{x\to x_0} g(x)$ 

> [!info]
> Il faudra spécifier avec les fonctions dans quelle mesure c'est équivalent (là où pour les suites c'était forcément $n \to +\infty$).

Si il existe $J$ un voisinnage de $x_0$ dans $I$ et $\eps:J \to \R$ tels que $\lim{x\to x_0}\eps(x) = 1$
- $\forall x \in J, f(x) = \eps(x) g(x)$

> [!check]
> Même définition qu pour les suites à peu de choses près.

## 3. Proposition 1

On suppose que $g$ ne s'annule pas sur un voisinage de $x_0$. 
- Pour les suites on supposait $v_n$ non nulle à partir d'un certain rang
Alors, $f(x) \eq{x \to x_0}g(x) \iff \lim{x \to x_0}\frac{f(x)}{g(x)} = 1$

### 3.1 Preuve

*Idem que pour les suites*


### 3.2 Exemple

. $I = \R, x_0 = +\infty, f(x)=x^2, g(x)=x^2+x+1$

$x^2=\frac{x^2}{x^2+x+1} \cdot (x^2+x+1) = \eps(x) \cdot g(x)$ avec $\eps(x) = \frac{x^2}{x^2+x+1}$

Comme $\lim{x\to+\infty}\frac{x^2}{x^2+x+1}=+\infty,$
- $\Rightarrow \exists A / \forall x \in ]A;+\infty[, x^2+x+1≥1$
- et $\lim{x\to +\infty}\eps(x) = 1$
On pose donc $J = ]A;+\infty[$ qui est un voisinage de $+\infty$.
$\square$
## 4. Définition 2

Soit $f:I \to \R,$ soit $x_0 \in I$ où une extrémité  de $I$.
- On dira que $f$ est négligeable devant $g$ en $x_0$.
- Et on notera $f(x)=\ub{o}{x\to x_0}(g(x))$, 
	- si il existe $J$ un voisinage de $x_0$ et $\eps:J \to \R/\lim{x \to x_0}\eps(x)=0$
	- On veut que $f(x) = \eps(x)g(x)$

## 5. Proposition 2

Si $g$ ne s'annule pas sur $J$ un voisinage de $x_0$ alors,
- $f(x) = \underset{x\to x_0}{o}(g(x)) \iff \lim{x\to x_0}\frac{f(x)}{g(x)} = 0$
### 5.1 Preuve

*Idem que pour les suites*

### 5.2 Exemple

On a:
- $x^2 = \ub{o}{x\\to 0}(x)$ et $x = \ub{o}{x\to 0}$ 

> [!warn]
> Il faut toujours préciser le $x_0$ où on travaille!

On a $x^2 = \ub{o}{x^2 \to 0}$ car $\lim{x\to 0}\frac{x^2}x=0$

On a:
- $x = \ub{o}{x\to +\infty}(x^2)$ car $\lim{x \to +\infty}\frac{x}{x^2} = \lim{x\to +\infty}\frac1x = 0$

## 6. Définition 3

Soit $f:I \to \R, x_0 \in I$ ou une extrémité de $I$. On dira que $f$ est dominée par $g$ au voisinage de $x_0$. On notera:
- $f(x) = \ub{O}{x\to x_0}$ s\il existe $J$ un voisinage de $x_0$ dans $I$ et $\eps: J \to \R / f(x) = \eps(x) g(x)$ avec $\eps(x)$ bornée sur $J$.

## 7. Proposition 3

On suppose que $g$ ne s'annule pas sur $J$ en voisinage de $x_0$, alors:
- $f(x) = \ub{O}{x\to x_0}(g(x)) \iff \frac{f(x)}{g(x)}$ est bornée sur $J$.
### 7.1 Exemples

1. On regarde $f(x) = e^x - 1, x_0 = 0$
	- On considère $g(x)=x$ alors $\lim{x\to 0}\frac{e^x - 1}x = \lim{x \to 0}\frac{e^x - e^0}{x-0} = \left(e^x\right)'(0)$
	- Donc $e^x - 1 \eq{x\to 0} x$
2. On a $\sin(x) = \ub{O}{\to +\infty}(1)$
	- En effet, la fonction $\eps(x)=\frac{\sin(x)}1=\sin(x)$ est bornée au voisinage de $+\infty$.

## 2. Règles de calculs

Toutes les règles valables pour les suites le sont pour les fonctions 
- Le « cas particulier » de $x_0 = 0$
	- Si on travaille en $x_0 = 0$, au lieu d'utiliser les notations 
		- $f(x) \eq{x\to 0}g(x)$
		- $f(x) = \ub{O}{x\to 0}(g(x))$
	- On utilisera $f(x) \sim g(x), f(x) = o(g(x))$ et $f(x) = O(g(x))$

## 3. Proposition (Règles de calculs en 0)

1. Si $m> n$ alors $x^m= o(x^n)$
2. Si $m ≥ n$ alors $o(x^n) + o(x^m) = o(x^n)$
3. Si $\lambda \in \R^*$, $\lambda o(x^n) = o(x^n)$
4. $x^mo(x^n)= o(x^{n+m})$
	- $o(x^m)o(x^n)=o(x^{m+n})$

### 3.1 Preuve

1/ $\lim{x \to 0} \frac{x^m}{x^n}=\lim{x\to 0}x^{\ov{m-n}{>0}}=0\Rightarrow x^m = o(x^n)$ 
3/ On pose $f(x)=o(x^n) \Rightarrow \lim{x\to 0}\frac{f(x)}{x^n}=0$
- Et donc $\lambda(\lim{x \to 0}\frac{f(x)}{x^n}) \Rightarrow \lim{x\to 0}\frac{\lambda f(x)}{x^n}=0 \Rightarrow \lambda f(x) = o(x^n)$ $\square$
4/ On pose $f(x) = o(x^n) \Rightarrow x^m f(x) = x^m o(x^n) \Rightarrow \frac{x^mf(x)}{x^{m+n}} = \frac{o(x^n)x^m}{x^{m+n}}=\frac{o(x^n)}{x^m}$ 
- Donc $\lim{x\to 0}\left(\frac{x^mf(x)}{x^{m+n}}\right) = \lim{x\to 0}\left(\frac{o(x^n)}{x^n}\right) = 0$ 
- Donc $x^mf(x) = o(x^{m+n})$
- $o(x^m)=f(x), o(x^n)=g(x)$
- $\Rightarrow \lim{x\to 0}\frac{f(x)}{x^m}=0$ et $\lim{x\to 0}\frac{g(x)}{x^n}=0$
- $\Rightarrow \lim{x\to 0}\frac{f(x)g(x)}{x^{n+m}}=0$
- $\Rightarrow f(x)g(x) = o(x^{n+m})$ soit $o(x^m)o(x^n)=o(x^{n+m})$

