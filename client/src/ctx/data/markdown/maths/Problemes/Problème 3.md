
# Partie I

> Soit $a,b,c \in \R$. On considère l'équation différentielle sur $\R$ :
> $(E_1): ay'' + by' + cy = 0$
> Soit $f$ la fonction définie sur $\R$ par $f(x) = e^{rx}$ (avec $r \in \R$) . Montrer que $f$ est solution de $(E_1)$ si, et seulement si:
> $ar^2+br+c = 0$
> Dans toute la suite, on note $P(X) = aX^2+bX+c$ et $\Delta = b^2 -4ac$
> Cas $\Delta > 0$

## Question 1

$x \mapsto e^{rx}$ solution de $(E_1)$
Pour tout $x \in \R$,
- $ar^2e^{rx}+bre^{rx}+ce^{rx} = 0$
- $\iff e^{rx}(ar^2+br+c) = 0$
- $\iff ar^2+br+c = 0$

## Question 2

> Supposons que $P$ admette deux racines réelles distinctes $r_1$ et $r_2$. Montrer que toute fonction de la forme:
> $f(x) = C_1e^{r_1x}+C_2e^{r_2x}$ (avec $C_1, C_2 \in \R$)
> est solution de $(E_1)$

$f(x) = C_1e^{r_1x}+C_2e^{r_2x}$
$f'(x) = C_1\cdot r_1 \cdot e^{r_1x}+C_2 \cdot r_2 \cdot e^{r_2 x}$
$f''(x) = C_1r_1^2 e^{r_1x}+C_2 r_2 e^{r_2x}$
$= a \cdot (C_1r_1^2e^{r_1x}+C_2r_2^2e^{r_2x})+b(C_1r_1^2e^{r_1x}+C_2r_2^2e^{r_2x})+c(C_1r_1^2e^{r_1x}+C_2r_2^2e^{r_2x})$
$= C_1e^{r_1x}(ar_1^2+br_1+c) + C_2e^{r_1x}(ar_2^2+br_2+c)$
Or, $r_1$ et $r_2$ sont racines donc
$= C_1e^{r_1x}>0$ et $C_2e^{r_2x} > 0$
$= 0$

## Question 3

> Réciproquement, supposons qu'une fonction $f:\R\longrightarrow \R$ soit solution de $(E_1)$ (en faisant toujours l'hypothèse que $\Delta > 0$)
> On pose alors $g$ définie sur $\R$ par $g(x) = e^{-r_1x}f(x)$
> (a) Montrer  que $g$ vérifie:
> $$ag''+(2ar_1+b)g' = 0$$

$\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}$
$g(x) = e^{-r_1x}f(x)$
$g'(x) = e^{-r_1x}(f'(x)-r_2f(x))$
$g''(x) = e^{-r_1x}(f''(x)-2r_1f'(x)+r_1^2(f(x)))$

Donc $a \cdot g''(x) + (2ar_1 + b)g'(x)$
$= a(e^{-r_1x}(f''(x) - r_1f'(x) + r_1^2 f(x)))+(2ar_1+b)(e^{-r_1x}(f'(x)-r_1f(x))$
$af''(x)+bf'(x)+\ub{(-2ar_1^2-br_1)}{x}f(x)$
$\iff f$ solution de $(E_1)$
$\iff g$ solution

> En déduire l'expression de $g(x)$ puis en déduire que $f$ est de la forme
> $f(x) = C_1e^{r_1x}+C_2e^{r_2x}$ (avec $C_1, C_2 \in \R$)

Posons $h(x) = g'(x)$
Donc $ah'+(2ar_1+b)h=0$
$h'+\frac{(2ar_1+b)h}a=0$
Donc $h = \lambda e^{(r_2-r_1)x}, \lambda\in\R$
$H(x) = \frac\lambda{r_2-r_1}e^{(r_2-r_1)x}+\mu, \mu \in \R$
Or, $h(x) = g(x) \Rightarrow g(x) = \frac\lambda{r_2-r_1}e^{(r_2-r_1)x} + \mu$
$g(x) = e^{-r_1x}\cdot f(x)$
$f(x) = g(x) \cdot e^{r_1}x$
$=\frac\lambda{r_2-r_1}e^{r_2x}+\mu e^{r_1x}$

## Question 4

> Finalement, si $\Delta > 0,$ quel est l'ensemble des solutiolns de $(E_1)$ ? Cas $\Delta = 0$

... traité dans la question précédente
Donc $S=\{ C_1e^{r_1x}+C_2e^{r_2x}| C_1, C_2 \in \R^2\}$

## Question 5

> Supposons que $P$ admette une racine réelle double $r_0$. Montrer que toute fonction de la forme:
> $f(x) = C_1xe^{r_0x}+C_2e^{r_0x}$
> (avec $C_1, C_2 \in \R$)

$f(x) = C_1e^{r_0x}+C_2e^{r_0x}$
$f'(x) = C_1xr_0e^{r_0x}+C_1e^{r_0x}+C_2r_0e^{r_0}x$
$f''(x) = C_1xr_0^2e^{r_0x}+C_2r_0^2e^{r_0x}+C_2r_0^2e^{r_0x}$

$af''(x) + bf'(x) + c(f)x=0$
$a(C_1xr_0^2e^{r_0}+2C_1r_0e^{r_0x}+C_2r_0^2e^{r_0x})$ 
..

$= C_1e^{r_0}x(ar_0^2+br+c)+C_1e^{r_0}x (r_02a+b)+C_2e^{r_0x}(a\lambda o^2+br+c)$

## Question 6

> Réciproquement, supposons qu'une fonction $f:\R \to \R$ soit solution de $(E_1)$ (en faisant l'hypothèse $\Delta = 0$)
> En posant $g(x) = e^{-r_0x}f(x)$ et en raisonnant comme à la question 3.
> Montrer que $f$ est de la forme:
> $f(x) = C_1xe^{r_0x}+C_2e^{r_0x}$ (avec $C-1, C_2 \in R$)
> Résoudre sur $\R$ l'application différentielle $y''-3y'-6y=0$ et l'équation différentielle $y''-4y'+4y=0$

$g(x) = e^{-r_0x}f(x)$
$g'(x) = -r_0e^{-r_0x}f(x)+f'(x)e^{-r_0x}$
$g''(x) = r_0^2e^{-r_0x}f(x)r_0e^{-r_0x}f'(x) - r_0f'(x)e^{-r_0x}+f''(x)e^{-r_0x}$
$ae^{r_0x}(r_0^2f(x)-2r_0f'(x)+f''(x))+(2ar_0+b)e^{r_0x}(-r_0f(x) + f'(x))$
$= e^{r_0x}(af''(x) + bf'(x)+(-ar^2_0 - br_0)f(x))$
$= e^{r_0x} \cdot 0$
$= 0$

Posons $h(x) = g'(x)$
- $h'(x) = g''(x)$
- Donc $ah'(x) + (2ar_0+b)h(x) = 0$
- $\iff h'(x) + \frac{2ar_0+b}{a}h(x) = 0$
Donc $h = \lambda e^{(-2r_0-b/a)x}$
Donc $h(x) = \lambda x + \mu$
	On a $h(x) = g'(x)$
	$H(x) = g(x)$
Or, $g(x) = e^{-r_0x}f(x)$
$\iff f(x) = g(x) e^{r_0x}$
$= \lambda x e^{r_0x} + \mu e^{r_0}x$

$(E_2):y''-4y'+4y = 0$
Soit $P = X^2 - 4X + 4$
$\Delta = 0$
Solutions de la forme $C_1xe^{2x}+C_2e^{2x}, C_1, C_2 \in \R$
## Question 7

> **Application** Résoudre sur $\R$ l'équation différentielle $y''-3y'-6y=0$ et l'équation différentielle $y''-4y'+4y=0$

Soit $P = X^2-3X-6$
$\Delta = 9+24 = 33$
$r_1 = \frac{3+\sqrt{33}}2$
$r_2 = \frac{3 - \sqrt{33}}2$

Solutions de la forme $C_1e^{r_1x}+C_2e^{r_2x}, C_1, C_2 \in \R$


# Partie II
$\newcommand{\Re}{\text{Re}}$
> **Définition** Si $f : \R \to \C$, on note $\Re(f) : \R \to \R$ et $\Im(f) : \R \to \R$ les fonctions telles que pour tout $x \in \R$
> $$f(x) = \Re(f)(x)+i\Im(f)(x)$$
> On dit que $f$ est dérivable en un point $x_0 \in \R$ si $\Re(f)$ et $\Im(f)$ sont dérivables en $x_0$. De plus, on définit:
> $$f'(x_0)=(Re(f))'(x_0)+i(\Im(f))'(x_0)$$
> Enfin, on dit que $f$ est dérivable sur un intervalle $I$ si $f$ est dérivable en tout point $x_0 \in I$
> Montrer avec cette définition que si $\lambda \in \C,$ la fonction $f:x \in \R \mapsto e^{\lambda x}$ est dérivable sur $\R$ et que pour tout $x \in \R, f'(x) = \lambda e^{\lambda x}$

> [!warn]
> Remarque : Attention, la définition que l'on donne concerne des fonction définies sur $\R$ à valeurs dans $\C$. En particulier, nous n'avons pas donné de sens à la dérivée de fonctions définies sur $\C$. 

$\lambda \in \C,$ donc $\exists a, b \in \R$ tq $\lambda = a+ib$
donc $e^{\lambda x} = e^{x(a+ib)} = e^x\cdot e^{ibx}$
D'après Euler: $e^{ibx} = \cos(bx)+i\sin(bx)$
Donc $f(x) = e^{ax}\cos(bx)+ie^{ax}\sin(bx)$
		$= \Re(f)(x) + i\Im(f)(x)$
$f'(x) = ae^{ax}\cos(bx)- b\sin(bx)e^{ax} + i(ae^{ax}\sin(bx)+be^{ax}\cos(bx))$
	$= ae^{ax}(\cos(bx)+i\sin(bx))+ibe^{ax}(\cos(bx)+i\sin(bx))$
	$= ae^{ax}e^{ibx}+ibe^{ax}e^{ibx}$
	$= e^{\lambda x}(a+ib)=\lambda e^{\lambda x}$

> On s'intéresse maintenant à l'équation différentielle suivante où $a,b,c \in \C$
> $(E_2) : \forall x \in \R, ay''(x)+by'(x) + cy(x) = 0$
> En vous inspirant de la première partie. Montrer que si $b^2-4ac ≠ 0$ et si l'on note $r_1$ et $r_2$ les deux racines complexes de $aX^2+bX+c=0$. L'ensemble des solutions de $(E_2)$ est:
> $$\{x\in\R \mapsto C_1e^{r_1x}+C_2e^{e^{r_2x}} | C_1, C_2 \in \C\}$$

Soit $C_1, C_2 \in \C$
On pose $f(x) = C_1e^{r_1x}+C_2e^{r_2x}$
- $f'(x) = C_1r_1^2e^{r_1x}+C_2r_2^2e^{r_2x}$
- $f''(x) = C_1r_1^2e^{r_1x}+C_2r_2^2e^{r_2x}$
- $a(C_1r_1^2e^{r_1x}+C_2r_2^2e^{r_2x}) + b(C_1r_1e^{r_1x}+C_2r_2e^{r_1x}) + c(C_1e^{r_1x}+C_2e^{r_2x})$
- $C_1e^{r_1x}\ub{(ar_1^2+br_1+c)}{0}+C_2e^{r_2x}\ub{(ar_2^2+br_2+c)}{0}$ 
- $= 0 + 0 = 0$

# Partie III - Retour sur le cas réel

> Il reste maintenant à traiter le cas $\Delta < 0$. On suppose que $a,b,c \in \R$ tels que $b^2-4ac< 0$. On note $\alpha + i\beta$ et $\alpha - i\beta$ les deux raciens complexes conjuguées de $aX^2+bX+c$. On considère l'équation différentielle sur $\R$. 
> $(E_1):ay''(x)+by'(x) + cy(x) = 0$
> 1. On considère une solution $f:\R \to \R$ de $(E_1)$
> (a) Justifier succintement qu'il existe $C_1, C_2 \in \C$ tels que
> $\forall x \in \R, f(x) = C_1e^{(\alpha + i\beta)x}+C_2e^{(\alpha-i\beta)x}$


Posons $h(x) = g'(x),$ donc $h'(x) = g''(x)$
On a alors $ah'+(2ar_1+b)h = 0$
$\iff h'+\frac{2ar_1+b}{a}=0$
Donc $ag''(x) + (2ar_1+b)g'(x)$
$= ae^{-r1x}(r_1^2f(x)-2r_1f'(x)+f''(x))+(2ar_1+b)e^{-r_1x}(f'(x)-r_1f(x))$
$= (a)$

> Montrer ensuite qu'il existe $\tilde{C}_1e^{\alpha x}\cos(\beta x)+\tilde{C}_2e^{\alpha x}\sin(\beta x)$
> Réciproquement, montrer que toute la fonction de la forme
> $f(x) = \tilde{C}_1e^{\alpha x}\cos(\beta x)+\tilde{C}_2e^{\alpha x}\sin(\beta x)$
> avec $\tilde{C}_1 \in \R$ et $\tilde{C}_2 \in \R$ est solution de $(E_1)$

Posons $h(x) = g'(x),$ donc $h'(x) = g''(x)$
On a alors $(E_2):ah'+(2ar_1+b)h=0$
- $\iff h'+\frac{2ar_1+b}{a}h=0$
Donc la solution de $(E_2)$ est $h(x) = \lambda e^{\frac{-(2ar_1 + b)}{a}x}$, $\lambda \in \C$
Donc $g(x) = h(x) = \frac{\lambda a}{-(2ar_1+b)}e^{\frac{-(2ar_1+b)}{a}x}+\mu, \mu \in \C$
$= \frac\lambda{r_2 - r_1}e^{x(r_2 - r_1)} + \mu$
$g(x) = e^{-r_1x}f(x)$
$f(x) = e^{r_1x}g(x)$
$\Delta ≠ 0 = \frac\lambda{r_2 - r_1} + \mu e^{r_1x}$
Donc $r_2 - r_1 ≠ 0$
$S = \{C_1e^{r_1}x+C_2e^{r_1x}|C_1, C_2 \in \C\}$


# Partie IV - Eq. d'ordre deux non homogènes

## Question 1

> Réciproquement, montrer que toute fonction de la forme:
> $$f(x) = \tilde{C}_1e^{\alpha x}\cos(\beta x)+\tilde{C}_2e^{\alpha x}\sin(\beta x)$$
> avec $\tilde{C}_1 \in \R$ et $\tilde{C}_2 \in \R$ est solution de $(E_1)$

$f(x)=C_1e^{(x+i\beta)x}+C_2e^{(\alpha - i\beta)x}, C_1, C_2$
- $= C_1e^{i\alpha x}+C_2e^\alpha e^{-ibx}$
- $= C_1e^{\alpha x}(\cos(\beta x)+i\sin(\beta x))+C_2e^{\alpha}(\cos(\beta x- i\sin(\beta x)))$
- $= e^{\alpha x}(C_1\cos(\beta x)+C_1i\sin(\beta x)+C_2\cos(\beta x))$
- $=e^{\alpha x}(\cos(\beta x)(C_1+C_2)) + i\sin(\beta x)(C_1 - C_2)$

## Question 2

> **Application** Résoudre sur $\R$ l'équation différentielle
> $y''(x) - 3y'(x) +2y(x) = x^3$

