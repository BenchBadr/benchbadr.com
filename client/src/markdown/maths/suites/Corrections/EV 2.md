
# Exercice 1

> Soit $f:\R\to\R$ et $x_0 \in \R$. Énoncer la caractérisation séquentielle de la continuité de $f$ en $x_0$. Démontrer que la composée de deux fonctions continues est continue.

# Exercice 2

> En revenant à la définition, trouver les points réels où la fnction:
> $f:x \mapsto \cases{\frac{1}{x^2} \text{ si }x≠0 \\ 0 \text{ sinon}}$
> est continue et les points où elle est discontinue.


```desmos-graph
f(x) = \frac1{x^2}
y = 1
y=(0,0),(0,1)|label:ϵ
```


Posons $x_0 = 0$
- **Continuité en $0$**
	- $\exists \epsilon > 0, \forall \delta > 0, \exists x \in \R, |x-0|≤\delta$ et $|f(x)-f(0)|>\epsilon$
	- Posons $\epsilon = 1$.
		- Soit $\delta > 0$
		- Prenons $x = \min(\delta, \frac12),$ on a alors:
			- $0≤x≤\delta$ donc $|x-0|≤\delta$
		- et
			- $\frac{1}{x^2}≥\frac1{\left(\frac12\right)^2}≥4>1$
	- Donc $f$ n'est pas continue en $0$.
- **Continuité en $x_0  ≠ 0$**
	- Soit $x_0 \in \R^*.$
	- Soit $\epsilon > 0$
	- On cherche $\delta > 0$ tel que pour $|x-x_0|≤\delta,$ on ait:
		- $\left|\frac1{x^2}-\frac1{x_0^2}\right|≤\epsilon$ (/!\ $x≠0$)
	- c'est-à-dire,
		- $\left|\frac{x_0^2-x^2}{x^2x_0}\right| ≤ \epsilon$
	- Posons $\delta = \min\left(\frac{|x_0|}{2}, \frac{x_0^2(\frac{1}2|x_0|)^2}{\frac52|x_0|}\right)$
- Or, $|x|≥\frac12|x_0|$
	- Donc $x^2x_0^2 ≥ \frac{|x_0|^4}4$
	- Donc $\frac1{x^2x_0^2} ≤ \frac4{|x_0|^4}$
	- Donc $|f(x)-f(x_0)| ≤ \delta \frac58 |x_0|^5$
- Par définition de $\delta$,
	- $|f(x) - f(x_0)| ≤ \epsilon$
- Donc $f$ continue en $x_0$. 

# Exercice 3

> Existe-t-il une fonction continue $f$ telle que l'image de $I$ par $f$ soit $J$ ? 
> Justifier à l'aide d'un exemple (une fonction continue définie graphiquement et / ou donnée algébriquement) ou en utilisant un théorème du cours.
> 1. $I = ]0,\infty[$ et $J = [0;+\infty[$ puis $J = ]0;1[\cup]3;4[$ et $J = [0,1]$
> 2. $I = [0,1]$ et $J = [-1, 1[$ puis $J = [-1, 1]$ et $J = \{1\}$
> 3. $I = [0,1]\cup[2,3]$  et $J = ]-1, 1[$

## Question 1
> $I = ]0,\infty[$
### a) $J = [0;+∞[$

```desmos-graph
bottom=-1;left=-1
---
(0,2)|open
f(x)=\{0<x<2:-x+2\}
y = \{x\geq2:x-2\}
```

### b) $J = ]0,1[∪]3,4[$

**Impossible**, car d'après le [TVI]([[Ch3 - Limites de fonctions et continuité#Théorème des valeurs intermédiaires]]), si $f$ continue alors $f(I)$ doit être un intervalle car il l'est.




### c) $J = [0,1]$

```desmos-graph
bottom=-1;left=-1
---
f(x)=\{x>0:\sin(x)^2\}
```

## Question 2

### a) $J = [-1,1[$

**Impossible** - Théorème des bornes atteintes [TVA]([[Ch3 - Limites de fonctions et continuité#Théorème des valeurs atteintes]])

### b) $J = \{1\}$

```desmos-graph
bottom=-1;left=-1
---
y = \{0<x:1\}
```
## Question 3

L'image d'une union est l'union des images. Ici les deux iamges sont des segmets fermés donc **impossible**.
# Exercice 4 (bonus)

> Étudier l'existence d'une limite et la continuité éventuelle en chacun de ses points de la fonction définie par:
> $f(x) = \cases{0 \text{ si }x\text{ est irrationnel} \\ f(x) = \frac1{p+q} \text{ si }x \text{ est rationnel égal à }\frac{p}q \text{ avec }p \text{ et } q \text{ premiers entre eux}}$

Soit $x = \frac{p}q \in \mathbb{Q}$
- Soit $(u_n)_{n\in\N}$ la suite définie par:
	- $\forall n \in \N, u_n = x+\frac{\sqrt{2}}{n+1}$
- On a $\lim{n\to +\infty}u_n = x$ et $\lim{n\to+\infty}f(u_n) = 0 ≠ f(x)$
- Donc $f$ n'est pas continue en $x$ par caractérisation séquentielle de la limite.
Soit $x\in\R\backslash \mathbb{Q}$
- Mq $f$ est continue en $x$
	- Soit $\epsilon > 0,$
		- Il existe un nombre fini de rationnels
		- $\frac{p}q$ tq $\frac1{p+q}>\epsilon.$
		- On note cet ensemble $\mathbb{Q}_\epsilon = \{|\frac{p}q - x| :\frac{p}q \in \mathbb{Q}_\epsilon\}$ 
		- $\mathbb{Q}_{\epsilon, x}$ est fini donc admet un minimum noté $m$.
		- On pose $\delta = \frac{m}2$
			- Soit $y \in [x-\delta, x+\delta]$
			- Si $y \in \R \backslash \mathbb{Q}$ alors:
				- $f(y) = 0$ donc $|f(y)|≤\epsilon$
			- Sinon
				- $y = \frac{p}q \in \mathbb{Q}$ tq $y \notin \mathbb{Q}_\epsilon$
				- On a donc $f(y) = \frac1{p+q}≤\epsilon$
				- Donc $f(y) ≤ \epsilon$
				- Donc $\lim{y\to x}f(y) = 0$ et $f$ est continue en $x$. 
Il n'existe pas de bijeciton entre $\N$ et $[0,1]$.

