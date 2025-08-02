
$P(x):$ prédicat unaire
- $x$ est libre dans $P$.  
$\forall x (P(x) \wedge Q(x)) \Rightarrow \exists x P(x)$
On suppose $\forall x (P(x) \wedge Q(x))$
donc sort $a$ un élément quelconque de $X$.
On a $P(a)$ et $Q(a)$
donc on a $P(a),$ donc $\exists x P(x)$

---
Contraposée page 8 & Exercice 3

## Exercice 7

> $\exists x \in E \ \forall y \in E \ R(x,y) \Rightarrow \forall u \in E \ \exists v \in E \ R(v,u)$

On suppose $\exists x \forall y \ R(x,y)$
- $\forall y \ R(x,y)$
On veut démontrer que $\forall u \ \exists v \ \R(x,y)$
- Soit $u \in E,$ on a $R(x,y)$
	- donc $\exists v$ (il suffit de choisir $v = x_0$)
		- $\exists v \ R(v, u)$
	- donc $\forall u \exists v \ R(v,w)$

----

## Exercice 6

$Q(n) : n$ est pair ou $n+1$ est pair

**Init**
$0$ est pair (par H)
**Héréd**
Soit $a \in \N,$ supposons $Q(a)$ et montrons $Q(a+1)$
On suppose que $a$ et pair ou $a+1$ est pair,
on veut montrer que $a+1$ est pair ou $a+2$ est pair. 
Par cas:
- Si $a \equiv 0[2]$
	- $a+2$ pair
- Si $a+1 \equiv 0[2]$
	- $a+1$ pair
	- c'est fini.

---

X fini, $X = {x_1, ..., x_n}$
- $\forall x \in X P(x) \iff P(x_1) \wedge P(x_2) ... \wedge P(x_n)$
- $\exists x \in X P(x) \iff P(x_1) \vee P(x_2) ... P(x_n)$
	- $\forall$ fonctionne comme $\wedge$
	- $\exists$ fonctionne comme $\vee$
- $\forall x (P(x) \wedge \forall x Q(x))$
- $\exists x (P(x) \vee Q(x)) \iff \exists x P(x) \vee \exists x Q(x_n)$
**Mais**
- $\forall$ ne se distribue pas sur $\vee$
- $\exists$ ne se distribue pas sur $\wedge$

$\vdash \exists x (P(x) \vee Q(x)) \Rightarrow \exists x P(x) \wedge \exists x Q(x)$
