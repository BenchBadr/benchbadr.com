> [!warn]
> Ceci n'est pas une correction officielle (fournie par les enseignants)
> Mais rédigée par moi-même.

$\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}$
# Exercice 1

## Question 1
> Soit $f$ une fonction à valeurs dans $\R$, continue sur $[0,2]$ et dérivable sur $]0,2[$.
> Montrer que si $f$ admet un maximum en un point $c \in ]0,2[$ alors $f'(c) = 0$

$c \in ]0,2[$  donc $f$ est dérivable en $c$.
**D'une part**
- $f'(c) =\lim{h\to0^{+}} \frac{f(c+h)-f(c)}{h}$
- Or,
	- $c$ étant un maximum,
		- $f(c+h) ≤ f(c)$
	- $\rcases{h > 0 \\f(c+h) - f(c) ≤ 0}f'(c) ≤ 0 \ \color{green}(1)$
**D'autre part**,
- $f'(c) =\lim{h\to0^{-}} \frac{f(c+h)-f(c)}{h}$
- Or,
	- $c$ étant un maximum,
		- $f(c+h) ≤ f(c)$
	- $\rcases{h < 0 \\f(c+h) - f(c) ≤ 0}f'(c) ≥ 0 \ \color{green}(2)$

Par $(1)+(2)+$antisymétrie,
- $f'(c) = 0$

## Question 2
> Énoncer le théorème de Rolle

Soit $a< b, f:[a,b]\to\R$,
- $f$ continue sur $[a,b]$
- $f$ dérivable sur $]a,b[$
- $f(a)=f(b)$
Alors il existe $c \in ]a,b[$ tel que:
- $f'(c) = 0$

# Exercice 2
> Soit $f$ la fonction de $\R$ dans $\R$ définie par:
> 
> $\forall x \in \R, f(x) = x^3-3x+1$
> 
> Montrer que l'équation $f(x)=0$ admet au moins trois solutions réelles.
> Donner un encadrement de chacune de ces solutions entre deux entiers consécutifs.

- $f(-1) = -1 - 3 + 1 = -3$
- $f(0) = 1$
- $f(1) = 1 - 3 + 1 = -1$
- $f(2) = 8 - 6 + 1 = 3$

> [!check]
> $f$ est polynôme donc:
> - $f$ est dérivable sur $\R$
> - $f$ est continue sur $\R$

- $f(-1) = -1 < 0$ et $f(0) = 1 > 0$
	- D'après le **TVI**,
		- Il existe $x_1 \in ]-1;0[$ tel que $f(x_1) = 0$
- $f(0) = 1 > 0$ et $f(1) = -1 < 0$
	- D'après le **TVI**,
		- Il existe $x_2 \in ]0;1[$ tel que $f(x_2) = 0$
- $f(1) = -1 < 0$ et $f(2) = 3 > 0$
	- D'après le **TVI**,
		- Il existe $x_3 \in ]1;2[$

$\square$

## Exercice 3

> Dans ette exercice, on admettra les résultats classiques de croissances comparées. 
> Soit $f:\R \to \R$ la fonction définie par $\cases{x\exp\left(-\frac1{x^2}\right) \text{ si }x ≠ 0 \\ 0 \text{ si }x= 0}$

## Question 1
> À l'aide de théorèmes du cours, étudier la continuité et la dérivabilité de $f$ sur $\R^{*}$

$\newcommand{\cd}{\text{ cont. et dér. sur }\R^*}$
$\rcases{x \mapsto x \cd \\ \rcases{x \mapsto \exp(x) \cd \\ x \mapsto -\frac1{x^2}}\cd\text{Par composée}}$ Par produit, $f$ est continue et dérivable sur $\R^*$

## Question 2
> Démontrer que $f$ est continue en $0$.

$\rcases{\rcases{\lim{x\to 0}-\frac1{x^2} = -\infty \\ \lim{X \to -\infty}e^X = 0} \\ \lim{x\to 0}x = 0}$ Par composée :

$\lim{x\to0}\left|x\exp\left(-\frac1{x^2}\right)\right| = 0 = f(0)$

Donc $f$ est bien continue en $0$

## Question 3
> Démontrer que $f$ est dérivable en $0$.

$\lim{x\to0}\frac{f(x) - f(0)}{x-  0} = \lim{x\to0}\exp\left(-\frac1{x^2}\right) = 0$
Donc $f$ est dérivable en $0$ et $f'(0) = 0$

## Question 4
> Calculer $f'(x)$ pour tout $x \in \R^*$

On pose $u,v$ tels que:
- $f(x) = u \cdot v$
- Cherchons $u'$
	- $u = \exp\left(-\frac1{x^2}\right)$
	- $u' = \frac2{x^3}\exp(-\frac1{x^2})$
- $f'(x) = u'v + uv'$
- $\phantom{f'(x)} = \exp(-\frac1{x^2})+\frac2{x^2}\exp(-\frac1{x^2})$
- $f'(x) = \exp(-\frac1{x^2})(1 + \frac2{x^2})$

## Question 5
> La fonction $f$ est-elle de classe $\mathcal{C}^1$ sur $\R$?

Sur $\R^*$,
- $f'(x)$ est continue par produit de fonctions continue
En $0$
- D'après $\fbox{3}, f'(0) = 0$
- De plus,
	- $\lim{x\to0}f'(x) = \lim{x\to0}\exp(-\frac1{x^2})(1+\frac2{x^2}) = 0$
- Ainsi, $f$ est bien continue en $0$.
$f$ est continue sur $\R^*\cup \{0\} = \R$
$\square$

# Exercice 4

> On considère la suite $(u_n)_{n \in \N}$ définie par $u_0 \in ]0;1[$ et:
>
> $\forall n \in \N, u_{n+1} = u_n(1 - u_n)$

## Question 1
> Montrer que, pour tout $n \in \N, u_n \in [0,1]$

$P_n:« \forall n\in \N, u_n \in ]0;1[ »$

**Initialisation**
$u_0 \in ]0,1[$
$\Rightarrow P_0$ vraie
**Hérédité**
Soit $n \in \N$. On suppose $P_n$ vraie. Montrons que $P_n \Rightarrow P_{n+1}$
- $0 < u_n < 1$
- $-1 < -u_n < 0$
- $0 < 1 - u_n < 1$
- $0 < u_{n+1} < u_n$ $\color{green}(1)$
- Or, $u_n < 1$ donc:
	- $0 < u_{n+1} < 1$
$\Rightarrow P_{n+1}$ vraie.
**Conclusion**
$\forall n \in \N, u_n \in ]0,1[$

## Question 2
> Montrer que la suite $(u_n)_{n\in\N}$ est décroissante. En déduire qu'elle est convergente.

D'après $\fbox1\color{green}(1)$, 
- $u_{n+1} < u_{n}$ donc $(u_n)_{n\in\N}$ est décroissante
De plus,
- $(u_n)_{n\in\N}$ est décroissante 
- $(u_n)_{n\in\N}$ est minorée par $0$ (par définition)
- D'après le **théorème de convergence monotone**,
	- $(u_n)_{n\in\N}$ converge.

## Question 3
> Démontrer que la limite $l \in \R$ de la suite $(u_n)_{n\in\N}$ est solution de l'équation $l = l(1-l)$.
> En déduire sa valeur.

$\lim{n\to+\infty}u_n = l$
Donc,
- $\lim{n\to+\infty}u_{n+1} = l$
- Soit,
	- $\lim{n\to+\infty}u_n(1 - u_n) = l$
- Par passage à la limite,
	- $l(1 - l) = l$

Ainsi, la limite de la suite $(u_n)_{n\in\N}$ est solution de l'équation.
De plus,
- $l = l(1 - l)$
- $l = l - l^2$
- $l^2 = 0$
- $l = 0$

D'où $\lim{n\to+\infty}u_n = 0$

## Question 5
> Si $u_n$ représente la taille d'une population à l'instant $n,$ que prédit le modèle sur l'évolution de cette population.

Le modèle prédit l'extinction de la population.
# Exercice 5

> Retrouver grâce à la formule de Taylor le développement limité à l'ordre $2$ de $u \mapsto \ln(1+u)$en $0$. En déduire
> $\lim{x\to 0}(1-3x)^{1/x}$


> [!info]
> $\ln(1+u) = u - \frac{u^2}2+\frac{u^3}3+...+o(x^n)$

**D'une part,**
- $(1-3x)^{1/x} = e^{\frac{\ln(1-3x)}{x}}$
- $\ln(1-3x) = -3x-\frac{9x^2}2+\frac{27x^3}3+o(x^2)$
- $\frac{\ln(1-3x)}x = -3 - \frac{9x}2+\frac{27x^2}3+o(x^2)$
**D'autre part,**
- $\lim{x\to0}\frac{\ln(1-x)}{x} = \lim{x\to0}(-3 - \frac{9x}2+\frac{27x^2}3+x(\frac{3^4x^2}{4}+\frac{3^5x^3}{5}...))$
- $\lim{x\to 0}\frac{\ln(1-x)}x = -3$
- *Par composé*e
	- $\lim{x\to0}e^{\frac{\ln(1-3x)}x} = e^{-3} = \frac1{e^3}$  

$$
\boxed{\lim{x\to0}(1-3x)^{1/x} = \frac1{e^3}}
$$ 

# Exercice 6 (bonus)

> Dans cet exercice, on supposera connues les dérivées des fonctions sinus et cosinus.
> Soient $I$ et $J$ deux intervalles et $f:I \to J$ une bijection dérivable et telle que $f^{-1}$ est dérivable.

## Question 1
> Calculer la dérivée de $f\circ f^{-1}$ en fonction de $f'$ et $(f^{-1})'$

$(f \circ f^{-1})' = (f^{-1})'\cdot (f' \circ f^{-1})$

## Question 2
> En déduire que $(f^{-1})'(x) = \frac1{f'(f^{1}(x))}$

D'après $\fbox1$
- $(f \circ f^{-1})(x) = (f^{-1})'(x) \cdot (f'\circ f^{-1})(x)$
- $f^{-1}(x) = \frac{f(f^{-1}(x))}{f'(f^{-1}(x))} = \frac1{f'(f^{-1}(x))}$  
## Question 3
> Montrer que, pour tout $x \in ]-\frac\pi2;\frac\pi2[, \tan'(x) = 1+\tan^2(x)$
> En déduire que, pour tout $x \in \R, \arctan'(x) = (\tan^{-1})'(x) = \frac1{1+x^2}$

$\tan'(x) = \left(\frac{\sin(x)}{\cos(x)}\right)'$
$\phantom{\tan'(x)'} = \frac{\cos(x) \cdot \cos(x) - \sin(x) \cdot (- \sin(x))}{\cos(x)^2}$
$\phantom{\tan'(x)'} = \frac{\cos(x)^2+\sin(x)^2}{\cos(x)^2}$
$\phantom{\tan'(x)} = \frac{\cos^2(x)}{\cos^2(x)}+\left(\frac{\sin(x)}{\cos(x)}\right)^2$
$\phantom{\tan'(x)} = 1+\tan(x)^2$

D'après $\fbox2,$
- 
- $\arctan(x) = \frac1{1+\tan(\arctan(x))^2}$
- $\arctan(x) = \frac1{1 + x^2}$

$\square$