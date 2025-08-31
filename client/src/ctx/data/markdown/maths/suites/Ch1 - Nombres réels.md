---
lang: fr
desc: Présentation des ensembles numériques, relations d'ordre, bornes et propriétés fondamentales en mathématiques.
date: 15/01/2025
---

$\newcommand{\N}{\mathbb{N}}\newcommand{\Z}{\mathbb{Z}}\newcommand{\R}{\mathbb{R}}\newcommand{\sub}{\subset}\newcommand{\R}{\mathbb{R}}$
# I -  Ensemble de nombres 

- __Entier naturels__ : $\N = \{0,1,...\}$
- __Entier relatifs__ : $\Z = \{...,-3,-2,-1,0,1,2,3,...\} = \N\cup (-\N)$
- __Nombres décimaux__ : $\mathbb{D} = \{\frac{p}{10^n}/p\in\Z, n\in\Z\}$
- __Nombres rationnels__ : $\mathbb{Q}=\{\frac{p}{q}/q\in\Z, q\in\N^*\}$
- __Nombre réels__ : $\R\backslash\mathbb{Q}$

###  Preuve que $\sqrt{2}\in\R\backslash\mathbb{Q}$

Par l'absurde, on suppose $\sqrt{2}\in\mathbb{Q}\Rightarrow\exists p\in\Z, q\in \N^*$
- Premiers entre eux et tels que $\sqrt{2}=\frac{p}{q}$
- On a donc $p^2=2q^2$. Par __Gauss__, $2|p^2$ car $p\wedge q=1$
or $2$ est un nombre premier avec $q$, or $2$ est premier donc d'après le __Lemme d'Euclide__:
- $2|p \Rightarrow \exists k\in\N^*/p=2k$
On a $q^2=2k^2$ donc, de même $2|q$. 
Ce qui est absurde car $p$ et $q$ sont premiers.
$\square$

**Hypothèse** : 

Si $x\in\R \Rightarrow x = 13,1456...$(infini)
Pas suffisant: $\frac{1}{3}=0.333333...$(infini)
Autre exemple, $1=0.999...$

__En effet__
$0.99... = \sum{n=1}{+\infty}\frac{9}{10^n}=9\sum{n=1}{+\infty}(\frac{1}{10})^n=\frac{9}{10}\cdot \frac{1}{1-\frac{1}{n}}$.
$0.999... = \frac{9}{10}\cdot\frac{10}{9}=1$

> [!tips]
> __En fait__ : S'il y a, à partir d'un certain rang après la virgule une répétition de série de chiffres, alors le nombre est rationnel, sinon il est irrationnel. /]

# II -  Relations d'ordre

## **Définition** - *Relation d'ordre*

Soit $E$ un ensemble (non vide) et $R$ une relation binaire de $E$ vers $E$.

On dit qu $R$ est:
- __réfléxive__ : Si $\forall x \in E, xRe$, chaque nombre va être plus petit que lui même par convention.
- __antisymétrique__ : Si $\forall x,y \in E, xRy$ et $yRx \Rightarrow x=y$
- __transitive__ : $\forall x,y,z \in E, xRy$ et $yRz \Rightarrow xRz$

Si $R$ a ces 3 propriétés alors, $R$ est une __relation d'ordre__.

Si, en plus, $\forall x, y \in E, xRy$ ou $yRx$, alors $R$ est dite __totale__.

### __Exemple__

- Sur $\R$, $≤$ et $≥$
- Sur les mots, sur $E^n$, ordre lexicographique.
- Sur $N^*$, $|$ (divise) et une relation d'ordre
- Sur $\mathscr{P}(R) = \{$sous-ensembles de $\R\}$.
    - l'inclusion $\subset$ 
    - $\{0,1\}$ n'est pas comparable avec$\{1,2\}$
    - $\{1,2\}<\{1,2,3\}$

# III - Majorant, plus grand élément et borne supérieure

## Majorant et minorant

### **Définition** - *Majorant et minorant*

$E ≠ \emptyset$ et $≤$ une relation d'ordre sur $E$.
- $M\in E$ est un majorant de $A\subset E$ si: $\forall a\in A, a ≤ M$ 
- $n\in E$ est un minorant de $A\subset E$ si $\forall a\in A, n≤a$

## Plus grand / petit élément

### **Définition** - *PGE / PPE*

$E \neq \emptyset, A \subset E$

$M$ est le plus grand élément de $A$ si:
- $M$ est un majorant de $A$, et,
- $M\in A$

$n$ est le plus petit élément de $A$ si:
- $n$ est un minorant de $A$, et,
- $n\in A$

#### __Exemple 1__:

$\{1,2,...,10\}$

- $0$ minorant, $17$ majorant.
- $10$ p.g.e
- $1$ p.p.e

#### __Exemple 2__:

$]-3;4] = \{x\in\R|-3<x≤4\}$

- $5$ majorant
- $4$ p.g.e
- il n'y a pas de plus petit élément
- $-3$ est le « meilleur minorant », ce qu'on appellera une borne inférieure.

## **Proposition**

Un plus grand élément (p.g.e) ou plus petit élément (p.p.e) est unique s'il existe.

### Preuve
oit $E \neq \emptyset, A \subset E$
Soit $x,y$ deux p.g.e de $A$. 
- Montrons que $x=y$, puisque $x$.
- Puisque $x$ est p.g.e de $A$, donc $\forall a \in A, a ≤ x$ (i)
- Or, $y$ est p.g.e de $A$ donc $y\in A$ (ii)
- Donc, (i)+(ii) donc:
- $y≤x$ $(*)$
De même, on a
- $x≤y$ $(**)$
Puisque $≤$ est une relation d'ordre, elle est antisymétrique.
Donc $(*)+(**)$ donne $x=y$.

> [!info]
> Rappelle le théorème de convergence monotone

## **Théorème** - *Bornes*
Toute partie non-vide de $\N$ admet un p.p.e.

### __Preuve__
- Plus petit élément
Soit $A \subset \N, A≠0,$ il existe $a\in A$.
- On cherche un minorant de $A$ qui soit dans $A$ dans la liste __finie__.
- $a,a-1,...,0$ c'est le p.p.e. 
Supposons $A$ majoré par $M$. On cherche un majorant dans $A$ dans la liste __finie__ $a, a+1,...,M$.

## Borne supérieure

### **Définition** - *Borne supérieure*
$E \neq \emptyset$, $≤$ une relation d'ordre sur $E$. $A\subset E, A \neq \emptyset$. 

Un élément $\alpha$ de $E$ est une borne supérieure de $A$ (on dit que $\alpha=\sup(A))$ si:
- $\alpha$ est le plus grand majorant de $A$.
De même, $\beta\in E$ et la borne inférieure de $A$ (notée $\beta = \inf(A)$) si $\beta$ est le plus grand des minorants. 

#### __Exemples__

$\{1,...,10\}$, 
- $1 = \inf(A)$
- $10=\sup(A)$
- $]-\infty;1] = $ ensemble des  minorants de $A$

$B=]-3;4]$
- $-3=\inf(B)$
- $4=\sup(B)$

## **Proposition** - *Unicité des bornes*

Les bornes inférieures et supérieures sont uniques.

### Preuve
Soit $E\neq \emptyset$, $≤$ une relation d'ordre sur $E$.

$A\subset  E, A≠\emptyset$.
- Soit $\alpha, \alpha'$ deux bornes supérieures de $A$.
Puisque la borne supérieure est un p.p.e:

$\alpha=\alpha'$

Donc $\alpha=\sup(A)$ est unique.

Idem pour $\beta=\inf(A)$.

## **Proposition** - *Lien min / maj, ppe / pge, bornes*

Soit $E≠ø, ≠$ une relation d'ordre sur $E$. $A\subset E, A ≠ ø$.
- $\alpha = p.g.e(A) \Rightarrow \alpha = \sup(A) \Rightarrow \alpha$ majorant de $A$.
- $\beta = p.p.e(A)\Rightarrow\beta = \inf(A) \Rightarrow \beta$ minorant de $A$.

### Preuve
Si $\alpha = \sup(A)$ alors, par définition du $\sup$, on a $\alpha$ majore $A$.

Supposons $\alpha=p.g.e(A)$. 
- (i) Par définition du $p.g.e$, $\alpha$ majore $A$.
- (ii) Montrons que $\alpha$ minore les majorants de $A$.

Soit $M$ majorant de $A$. Montrons que $\alpha ≤ M$. 
- Puisque $\alpha = p.g.e(A)$, on a $\alpha\in A$
- Or, $M$ majore $A$.
- Donc $\alpha ≤ M$

(i)+(ii) donne $\alpha=\sup(A)$.

Idem pour $p.p.e \Rightarrow \inf \Rightarrow$ minorant.

## **Proposition**

Soit $a<b$, alors:

$\sup([a,b])=b$ et $\sup([a,b[)=b$

### Preuve
On a:

- $b\in [a,b]$
- $b$ majorant de $[a,b]$

Donc $b=p.g.e([a,b]) = \sup([a,b])$

Montrons que $b=\sup([a,b[)$
- (i) $b$ majore $[a,b[$ par définition de $[a,b[$.
- Montrons que (ii) $b$ minore les majorants de $[a,b[$.
    - Soit $M$ majorant de $[a,b[$.
    - Montrons que $b≤M$ 
        - Par l'absurde, supposons $M<b$.
        - On pose $c=\max(\frac{a+b}{2},\frac{M+b}{2})$
        - On a:
            - $c<b$ car $\frac{a+b}{2}<b$ et $\frac{M+b}{2}<b$ 
            - $c≥a$ car $c≥\frac{a+b}{2}$
        - Donc $c\in[a,b[$
        - Or $c≥\frac{M+b}{2}>M$
    - Donc $M$ ne majore pas $[a,b[$.
    - Donc par l'absurde, $b≤M$

Par (i)+(ii), on a $b=\sup([a,b[)$.


### __Exemple__:

C:$\{q\in\mathbb{Q}^+|q^2≤2\}$
- $0=ppe(C)=\inf(C)$
- Pas de pge (car $\sqrt{2}\notin \mathbb{Q}^+$ mais $\sqrt{2}=\sup(C)$

## **Proposition** 

$A\subset \R, A\in \emptyset$

*Num. 1*

$\alpha = \sup(A) \iff \begin{cases}\alpha \text{ majore }A : \forall a \in A, a ≤ \alpha \\ \text{c'est le plus petit }\forall \epsilon > 0, \exists \alpha - \epsilon \in A, a>\alpha-\epsilon\end{cases}$ 

$\alpha-\epsilon$ n'est pas majorant de $A$.

### Preuve
$\Rightarrow$ Supposons $\alpha=\sup(A)$. 

- Alors $\alpha$ est majorant de $A$ et, 
- pour $\epsilon>0,2-\epsilon$ n'est pas majorant de $A$ car $\alpha$ est le plus petit des majorants.

$\Leftarrow$ Supposons $\alpha$ majorant de $A$ et $\forall \epsilon > 0, \exists a_\epsilon \in A, a_\epsilon > \alpha - \epsilon$ $(•)$.

Soit $M$ un majorant de $A$ $(•••)$.

Par l'absurde, supposons $M<\alpha$ $(••••)$

On pose $\epsilon = \alpha - M≥0 (••)$

On a, par $(•), \alpha-\epsilon$ pas majorant de $A$ et $a-\epsilon=M (••)$.

Contradiction avec $(•••)$

Donc $(••••)$ est fausse et $M≥\alpha$

On a bien montré que tous les majorants sont plus grands que $\alpha$, c'est-à-dire minore les majorant. 

Donc $\alpha=\sup(A)$


*Num. 2*

$\beta = \inf(A) \iff \begin{cases}\forall a \in A, \beta ≤ A\\ \forall \epsilon > 0, \exists a \in A, \alpha - \epsilon < \beta+\epsilon\end{cases}$

# IV -  Axiomatique de $\R$

$(\R,+, \cdot)$ est un corps. 

> [!tips]
> Un corps est un ensemble et deux opérations

$≤$ est une relation __d'ordre totale__ sur $\R$

> [!info]
> Cela signifie que l'on peut toujours comparer (contrairement à des branches d'un arbre)

## Propriété d'Archimède

Soit $x>0\in\R,$alors $\forall y \in \R, \exists n \in \N$ tel que $nx≥y$.

**Théorème** - *« Héritage de bornes»*

Toute partie majorée ou minorée de $\R$ admet une borne supérieure ou inférieure.


## **Définition** - *Valeur absolue*

$|x| = \begin{cases}x \text{ si } x≥0\\-x \text{ sinon}\end{cases}$

### **Définition** alternative

$|x|=\sqrt{x^2}$

> [!check]
> Rappelle le théorème de Pythagore.

### Remarque
$x,y\in\R$
- $|y-x|$ est une distance entre $x,y$

## **Propriétés**
$\forall x\in\R, |x|>0\\\forall x \in \R, |x|=|-x|$
$\forall x\in\R, |x|=0\iff x=0$

## __Inégalité Triangulaire__

$\forall x,y,z \in \R, |x-z|  ≤ |x-y| + |y-z|$ 
- ou
$\forall x,y\in\R, |x+y|≤|x|+|y|$

### __Inégalité triangulaire inverse__
$\forall x,y\in\R,|x+y|≥||x|-|y||$

```python
abs(x+y) == max(x,y)-min(x,y)
```

- $\forall x,y \in \R, |xy|=|x|\cdot|y|$

$\forall x,y\in\R, r>0$
- $|x-y|≤r \iff -r ≤ x-y ≤ r \\ \phantom{|x-y|≤r} \iff y-r≤x≤y+r$

### __Exemples__

> Résoudre $|x-8|≤1$

On a $\forall x\in\R, |x-8|≤1\\ \iff 8-1 ≤ x ≤ 8+1 \\ \iff x\in[7;9]$

> $\forall x\in\R, |x-3|≤-4$ est impossible.

L'ensemble de solutions est $\emptyset$

> $\forall x \in \R, |2x-1|>2$

$\iff |2(x-\frac{1}{2})|>2 \\ \iff |2|\cdot |x-\frac{1}{2}|>2 \\ \iff |x-\frac{1}{2}|>1\\ \iff \begin{cases} x-\frac{1}{2} > 1 \\ \frac{1}{2}-x>1\end{cases}$

> $\forall x \in \R, |3x-137.86|≥-\frac{43}{8}$

$\iff x\in\R$

###  Preuve de l'inégalité triangulaire
Si $x+y>0$:
	Alors $|x+y|=x+y$ 
	Or $x≤|x|$ et $y≤|y|$
	Donc $|x+y|≤|x|+|y|$
Sinon $x+y<0$
	Alors, $|x+y|=-x-y$
Or, $-x≤|x|$ et $-y≤|y|$
	Donc $|x+y|≤|x|+|y|$

> [!check]
> Pour s'entraîner, démontrer à l'aide de l'iné-tri-inverse.

## Définition  - Partie Entière

Soit $x\in\R, E(x)$ est __l'unique__ entier relatif tel que $E(x)≤x<E(x)+1$

### Exemples

$E(0)=0\\E(4,87)=4\\E(-\pi)=-4\\E(0.999999...)=1$

### Preuve - Existence
Soit $x\in\R$, montrons qu'il existe $E\in \Z$ tel que:

$E≤x<E+1$

- Si $x\in\Z,$ on prend $E=x$.
	On a bien $E≤x<E+1$
- Si $x\notin\Z$ et $x>0$
	cherchons $n\in\N$ tel que $n>x$ 
	Puisque $x>0$ et $\R$ archimédien, il existe $n\in\N$ tel que $n\cdot1>x$
		Considérons $M=\{n\in\N|n>x\}$
		$n_0\in M$ donc $M$ n'est pas vide. Or $M\sub\N$
		Donc $M$ admet un plus petit élément noté $E+1$.
	On a $E+1\in M$ donc $E+1>x$
	Et $E=(E+1)-1 \notin M$ car $E+1=ppe(M)$
	Donc $E≤x$
- Sinon $x\notin \Z$ et $x<0$
	D'après le point précédent, il existe $M_x\in\N$ tel que:
		$M_x≤-x<M_x+1$
		De plus, puisque $x\in\Z$, on n'a pas $M_x=-x$.
		Donc $M_x<-x<M_{x+1}$
		Donc $M_x>x>-M_x-1$ ou $-M_x-1<x<-Mx$
		En prenant $E=-nx-1$, on a
	$E<x<E+1$
### Preuve: __Unicité__ (de la partie entière)
oit $x\in\R$. Supposons qu'il existe $E_1$ et $E_2 \in \Z$ et tels que 
$\begin{cases}E_1 ≤ x < E_1+1 \\ E_2 ≤ x < E_2+1\end{cases}$ 
Mq $E_1 = E_2$.
- On a $\begin{cases}E_1 ≤ x ≤ E_1+1 \\-E_2 ≥ -x > -E_2-1\end{cases}$
- Donc on a $\begin{cases}E_1 ≤ x < E_1+1 \\-E_2-1<-x≤-E_2\end{cases}$
- En additionnant, on a
- $E_1-E_2-1<0<E_1-E_2+1$
- D'où
	- $E_1-E_2<1$ et
	- $E_2-E_1<1$
	- Donc $|E_1-E_2|<1$ donc $|E_1-E_2|\in\N$
	- Donc $|E_1-E_2|=0$ donc $E_1=E_2$
On a bien montré que la partie entière est unique.
