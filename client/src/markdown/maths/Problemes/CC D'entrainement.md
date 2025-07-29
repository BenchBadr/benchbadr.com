
# Partie 1

**Analyse**
La partie paire de $f$, si elle existe est notée $p(x)$ est donnée par $\frac{f(x)+f(-x)}2$
La partie impaire de $f$, si elle existe est notée $i(x)$ est donnée par $\frac{f(x)-f(-x)}2$

**Synthèse**
*Vérifions la parité et l'imparité respectivement de $i$ et $p$*
	$p(-x) = \frac{f(-x)+f(x)}2 = p(x)$
	$i(-x) = \frac{f(-x)-f(x)}2 = i(x)$

*Montrons que cela satisfait notre définition*
	$p(x)+i(x) = \frac{f(x)+f(-x)+f(x)-f(-x)}2 = \frac{2f(x)}{2} = f(x)$

Donc $f = p+i$ est vraie.

**Unicité**
Supposons $i'$ et $p'$ une autre décomposition différente de $i$ et $p$. 
- Alors $f=i'+p' = i+p$
- Il suffit que $(i-i') + (p-p') = 0$
- Il suffit que $(i-i') = -(p-p')$
- $(i-i') = p' - p$

De plus, la différence de deux fonctions paires et paire donc:
- $p-p'$ est paire
Et, la différence de deux fonctions impaire est impaire.
- $i - i'$ impaire

Ainsi,
- $p-p' = i-i'$
- Donc $i-i'$ est paire.
- Or, $i$ est impaire,
- Ce qui est absurde.


# Partie II

### Question 1

*Montrons parité et imparité*
- $\cosh(-x) = \frac{e^{-x}+e^{x}}2 = \cosh(x)$ **paire**
- $\sinh(-x) = \frac{e^{-x}-e^{x}}2 = -\sinh(x)$ **impaire**

*Montrons qu'il s'agit d'une décomposition*
- $\cosh(x) + \sinh(x) = \frac{e^{-x}+e^x+e^{x}-e^{-x}}2 = \frac{2e^{-x}}2 = e^{x}$

## Question 2

*Étudions le signe de $\cosh(x)$
- $2>0 \Rightarrow \cosh(x)$ est du signe de $e^x+e^{-x}$
- Or, $\forall X \in \R, e^{X} > 0$
- Donc $e^x+e^{-x}>0 \Rightarrow \cosh(x) > 0$

*Étudions le signe de $\sinh(x)$*
- $\sinh$ est du signe de $e^x-e^{-x}$
- $\sinh(x) > 0 \iff e^x > e^{-x} \iff x > -x$
- Or, $x \mapsto e^x \nearrow$ sur $\R$
	- $\cases{x > -x \text{ pour } x > 0\\ x < -x \text{ pour } x < 0}$
- Donc $\sinh(x) > 0$ pour $x > 0$ et $\sinh(x) < 0$ sinon.

## Question 3

*Étudions les variations de $\cosh(x)$*
- $(\frac{e^x+e^{-x}}2)' = \frac{1}{2}(e^x-e^-x) = \sinh(x)$
- Or, $\sinh(x) > 0$ pour $x > 0$ et $\sinh(x) < 0$ pour $x < 0$
- Donc $\cosh(x) \nearrow$ pour $x > 0$ et $\cosh(x) \searrow$ pour $x < 0$

*Étudions les variations de $\sinh(x)$*
- $(\frac{e^x-e^{-x}}2)' = \frac{1}2(e^x+e^{-x}) = \cosh(x)$
- Or, $\forall x \in \R, \cosh(x) > 0$
- $\sinh(x) \nearrow$ strictement

*Déterminons l'équation des tangentes*, qu'on note $T$
$T = f'(x)(x-a)+f(a)$
- Pour $\cosh(x)$
	- $\sinh(0) = \frac{e^0-e^0}2 = 0$
	- $T = \sinh(x)(x)+\sinh(x)(0) = \sinh(x)x$
- Pour $\sinh(x)$
	- $\cosh(0) = \frac{e^0+e^{0}}2 = 1$
	- $T = \cosh(x)x$

*Utilisons la fonction $\tan$*
- $\tan(\cosh(0)) = \frac{\sin(\cosh(0))}{\cos(\cosh(0))}=\frac{\sin(0)}{\cos(0)} = 0$
- De même, $\tan(\sinh(0)) = 0$

## Question 4
$\newcommand{\li}[1]{\underset{#1}{\lim}}$
- $\begin{rcases}\lim{x\to+\infty}e^x = +\infty \\ \lim{x\to+\infty}e^{-x}=0\end{rcases} \text{Par somme,} \lim{x\to+\infty}\cosh(x)=+\infty$
- De même, $\lim{x\to-\infty}\cosh(x) = +\infty$
- $\lim{x\to+\infty}\sinh(x)=+\infty$
- $\lim{x\to-\infty}\sinh(x) = -\infty$

## Question 5

... dessin courbe $\cosh$ et $\sinh$

## Question 6

$\forall x \in \R, \tanh(x) = \frac{\sinh}{\cosh(x)}$
- $\tanh(x) < 0$ pour $x < 0$
- $\tanh(x)>0$ pour $x > 0$
$\tanh(-x) = \frac{\sinh(-x)}{\cosh(-x)} = -\frac{\sinh(x)}{\cosh(x)} = -\tanh(-x)$
Donc $\tanh$ est impaire.
$\tanh'(x) = \frac{\cosh^2(x) - \sinh^2(x)}{\cosh^2(x)} = 1 - \tanh^2(-x)$
$1 - \tanh^2(x) > 0 \iff 1 > \tanh^2(x)$
			$\iff 1 > \frac{\left(\frac{e^x - e^{-x}}{2}\right)^2}{\left(\frac{e^x-e^{-x}}2\right)^2}$
			$\iff 1 > \frac{(e^x - e^{-x})^2}{(e^x+e^{-x})^2}$
			$\iff (e^x+e^{-x})^2 > (e^x-e^{-x})^2$
			$\iff e^{2x}+2+e^{-2x}>e^{2x-2+e^{-2x}}$
			$\iff 2 > -2$
Donc $\forall x \in \R, \tanh'(x) > 0$ et donc $\tanh$ est croissante.
- $\tanh = \frac{e^x+e^{-x}}{e^x-e^{-x}} = \frac{1+e^{-2x}}{e^{2x}-1}$
- $\lim{x\to+\infty}\tanh(x) = \lim{x\to+\infty}\frac{1+e^{-2x}}{1-e^{-2x}} = 1$
- $\lim{x\to-\infty}\tanh(x) = \lim{x\to-\infty}\frac{e^{2x}+1}{e^{2x}-1} = -1$

## Question 7

... dessin de $\tanh$

# Partie II

## Question 1

$\cosh(x) \cosh(y) + \sinh(x) \sinh(y) = \frac{e^x+e^{-x}}2 \cdot \frac{e^y+e^{-y}}2 + \frac{e^x-e^{-x}}2$
$= \frac{e^{x+y}+e^{x-y}+e^{y-x}+e^{-x-y}+e^{x+y}-e^{x-y}-e^{y-x}+e^{-x-y}}4$
$= \frac{e^{x+y}+e^{-y-y}}{2}$
$= \cosh(x+y)$

$\sinh(x)\cosh(y) + \cosh(x)\sinh(y) = \frac{e^x-e^{-x}}2 \cdot \frac{e^y+e^{-y}}2$
$= \frac{e^{x+y}+e^{x-y}-e^{-x-y}+e^{x+y}-e^{x-y}+e^{y-x}-e^{-x-y}}4$
$= \frac{e^{x+y}-e^{-x-y}}2$
$= \sinh(x+y)$

## Question 2

$\cosh(2x) = \cosh(x+x) = \cosh^2(x)+\sinh^2(x)$
Or, 
$\cosh^2(x) - 1 = \left(\frac{e^x+e^{-x}}2\right)^2 - 1 = \frac{e^{2x}+2 = e^{-2x}}2 - 1$
$= \frac{e^{2x}-2+e^{-2x}}4$
$= \sinh^2(x)$

Donc $\cosh(2x) = 2\cosh^2(x) - 1$
- $\sinh(2x) = \sinh(x+x) = 2\sinh(x)\cosh(x)$
- $\tanh(2x) = \tanh(x+x)=\frac{\sinh(x+x)}{2\cosh^2(x)-1}$

De plus,
- $\frac{2\tanh(x)}{1+\tanh^2(x)} = \frac{2\sinh(x)}{\cosh(x)}\cdot \frac{\cosh^2(x)}{\sinh^2(x)+\cos^2(x)}$
$= \frac{2\sinh(x)\cosh(x)}{\sinh^2(x) + \cosh^2(x)}$
$= \frac{2\sinh(x)\cosh(x)}{2\cosh^2(x) - 1},$ car $\sinh^2(x)=\cosh^2(x) - 1$
$= \tanh(2x)$

## Question 3

$\tanh(\frac{x}2) = \frac{\sinh(\frac{x}2)}{\cosh(\frac{x}2)}=\frac{e^x-1}{e^x+1}$

On pose $\tanh(\frac{x}2) = u$
$u(e^x+1) = e^x-1$
$\iff ue^x+u = e^x - 1$
$\iff u+1 = e^x(1-u)$
$\iff e^x = \frac{u+1}{1-u}$

Donc $\cosh(x) = \frac{\frac{u+1}{1-u}+\frac{1-u}{u+1}}2 = \frac{\frac{u^2+2u+1 + 1 - 2u + u^2}{1-u^2}}{2}$
					$= \frac{2u^2+2}{2(u^2-1)} = \frac{u^2+1}{1-u^2}$
$\sinh(x) = \frac{\frac{u+1}{1-u}-\frac{1-u}{u+1}}{2} = \frac{u^2+2u+1 - 1 + 2u - u^2}{1-u^2} \cdot \frac12$
$= \frac{4u}{1-u^2} \cdot \frac12 = \frac{2u}{1-u^2}$


# Partie IV - Irrationalité de $e$

## Question 1

Soit $h(x) = f(x) + g(x)$
On sait que $h'(x) ≤ g'(x)$
	$\iff -g'(x) ≤ f'(x) ≤ g'(x)$
	 $\iff 0 ≤ h'(x) ≤ 2g'(x)$
$h$ est croissante et $h(0) = 0$
Donc $h(x)≥ 0$ $(*)$
Soit $i(x)=g(x) - f(x)$
On sait que $|f'(x)| ≤ g'(x)$
	$|-g'(x)≤f'(x) ≤ g'(x)|$
	$0 ≤ i(x) ≤ 2g'(x)$
$i$ est croissante et $i(0) = 0$
Donc $i(x) ≥ 0$
- $f(x) + g(x) ≥ 0$ $(*)$
- $g(x) - f(x) ≥ 0$ $(**)$
$\iff f(x) ≤ - g(x)$
Par $(*)+(**), |f(x)| ≤ g(x)$ 

## Question 2

$P_2 = (3)X + X^2(0) = 3X$
$Q_2 = (3)X + X^2(0) = 3 + X^2$

## Question 3

### 3-a

$\N$ est stable par multiplication et addition, ainsi, ces coefficients étant issus d'addition et multiplication d'entiers naturels, les coefficients appartiennent à $\N$

### 3-b

$\Pi^n_{k=1}(2k-1)$
$= \frac{\prod^2n_{k=1}k}{\prod^n_{k=1}(2k)}$
$= \frac{(2n)!}{2^n n!}$


$P_r(n) : « Q_n(0) = \prod^n_{k=1}(2k-1)»$
*Initialisation*
$Q_1(0) = 1$
$\prod^1_{k=1}(2k-1) = 1$

*Hérédité*
Soit $n\in\N^*$. On suppose $P_r(n)$ vraie, montrons que $P_r(n+1)$
$Q_{n+1} = (2n+1)Q_n+X^2Q_{n-1}$
$Q_{n+1}(0) = (2n+1)Q_n(0)$
$\underset{hr}{=}(2n+1) \cdot \prod^n_{k=1}$
$\underset{hr}{=} 2(n+1)$
$\square$

---


# Partie 5

## Question 1

> Montrer que $\{\cosh(t), \sinh(t), t\in\R\} = \{(x,y),x^2+y^2=1\}$

... ça revient à être sur le cercle.
Soit $(x,y)$ dans $\R^2$ tel que $x^2+y^2=1 \Rightarrow|x|≤ 1$ et $|y|≤1$
$t = \arcsin(y)$

> Quelle est la nature géométrique de l'ensemble ?

$\{(\cosh(t), \sinh(t)), t \in \R\} = \{(x,y) \in \R^2, x^2-y^2=1\}$
- $\vec{u} = x\vec{e_1}+y\vec{e_1}$
- On cherche $\vec{f_1}$ et $\vec{f_2}$ tels que:
	- $\vec{u} = (x+y)\vec{f_1}+(x-y)\vec{f_2}$  
	- $\cases{x = 1 \\ y = 0}$ $\vec{e_1} = \vec{f_1} + \vec{f_2}$
	- $\cases{x = 0 \\ y = 1}$ $\vec{e_2} = \vec{f_1} - \vec{f_2} \cases{\vec{f_1} = \frac{\vec{e_1}+\vec{e_2}}2 \\ \vec{f_2} = \frac{\vec{e_1} - \vec{e_2}}2}$
$(x,y) \in A \iff (x,y) \in B$


