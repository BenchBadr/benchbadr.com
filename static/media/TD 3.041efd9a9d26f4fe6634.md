$\newcommand{\R}{\mathbb{R}}$
$\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\K}{\mathbb{\K}}\newcommand{\ifff}[1]{\underset{#1}{\iff}}$
### Exercice 3
> On se place dans l'espace vectoriel $\R^3$. Déterminer si les familles de vecteurs suivantes sont libres.
> $\mathscr{F} = \{(-1, 2, -3), (1,0,-1), (-2, -1, 4)\}$

Soit $(a,b,c) \in \R^3$ tels que:
- $a(-1, 2, -3)+b(1,0,-1)+c(-2, -1, 4)=0_{\R^3}$
C'est à dire, tels que:
$(S):\begin{cases} -a+b-2c=0 \\ 2a-c = 0  \\ -3a-b+4c = 0\end{cases}$





$\ifff{L_3\leftarrow L_3+L_1}\begin{cases}-a+b-2c = 0 \\ 2a-c = 0 \\ -3a+2c=0\end{cases}$

$\iff \begin{cases}-a+b-2c=0\\2a-c = 0\end{cases}$

$\iff \begin{cases}b = 5a \\ c = 2a \end{cases}$


La famille n'est donc pas libre.

En effet, $1(-1, 2, -3)+5(1,0,-1)+2(-2, -1, 4)=0_{\R^3}$

> $\mathscr{F} = \{(-1, -2, 0),(0,-1,-1),(1,2,1)\}$

Soit $(a,b,c) \in \R^3$ tels que:
- $a(-1, -2, 0)+b(0, -1, -1)+c(1,2,1)=0_{\R^3}$
C'est-à-dire, tels que:

$(S):\begin{cases}-a+c = 0 \\ -2a-b+2c = 0\\ -b+c=0\end{cases}$


Or, $(S)\ifff{L_1 \leftrightarrow L_2}\cases{-2a-b=2c =0\\ -a+c = 0\\ -b+c = 0}$

$\ifff{L_3\leftarrow L_3-L_1}\cases{-2a-b+2c = 0\\ -a+c = 0\\ 2a-c = 0}$

$\ifff{L_3 \leftarrow L_3 + L_2}\cases{-2a-b+2c = 0 \\ -a+c = 0 \\ a = 0}$

$\iff \cases{b = 0 \\ c = 0 \\ a = 0}$


> $\mathscr{F} = \{(2,-1, -1), (-4,2,2)\}$

Soit $(a,b) \in \R^2$ tels que:

Remarquons que $2(2,-1,-1)+1(-4,2,2)=0_{\R^3}$

Donc la famille est liée.

> $\mathscr{F} = \{(1,3,-2),(-1,3,1)\}$

Soit $(a,b) \in \R^2$ tels que:
- $a(1,-3,-2)+b(-1,3,1)=0_{\R^3}$

C'est-à-dire, tels que:

$(S):\cases{a-b=0 \\ -3a+3b = 0 \\ -2a+b = 0}$

Or $(S) \ifff{L_2 \leftarrow L_2+3L_1 \\ L_3 \leftarrow L_3 + 2L_1}\cases{a-b = 0 \\ 0 = 0 \\ -b = 0}$

$\iff \cases{a = 0 \\ b = 0}$

Donc la famille est libre.

> $\mathscr{F} = \{(0,0,0), (-1, 0, -1)\}$

Par exemple, $1(0,0,0)+0(-1, 0, -1)=0_{\R^3}$
- donc la famille est liée.

> $\mathscr{F} = \{(0,0,0)\}$

On a $1(0,0,0)=0_{\R^3}$ donc la famille est liée.

> [!warn]
> Si une famille contient le vecteur nul, elle est liée.

> $\mathscr{F} = \{(1,1,1)\}$

Toute famille à un élément est libre __ssi__ cet élément n'est pas le vecteur nul. 

# Exercice 2

> $\mathscr{F} = \{X^2+1, X^2+X+1, X^2+X\}$

Soit $(a,b,c) \in \R^3$ tels que:
- $a(X^2+1)+b(X^2+X+1)+c(X^2+X)=0_{\R[X]}$
C'est-à-dire tels que: $(a+b+c)X^2+(b+c)X+(a+b) = 0_{\R[X]}$

Soit

$(S):\cases{a+b+c = 0\\ b+c = 0 \\ a+b = 0}$

Or $(S):\ifff{L_3 \leftarrow L_3 - L_1}$

$\cases{a+b+c = 0 \\ b+c = 0 \\ -c = 0}$



> $\mathscr{F} = \{3X^3-X^2+2X-3, 2X^3+X-2, X^3+X^2+1\}$

Soit $a,b,c\in\R^3$ tels que:
- $a(3X^3-X^2+2X-3)+b(2X^3+X-2)+c(X^3+X^2+1)=0_{\R^3}$

C'est-à-dire, tels que:
- $(3a+2b+c)X^3+(-a+c)X^2+(2a+b)X+(-3a-2b+c)\cdot 1 = 0_{\R[X]}$



$(S):\cases{3a+2b+c = 0 \\ a+c = 0 \\ 2a+b= 0 \\ -3a-2b+c = 0}$

Or $(S)\ifff{L_2\leftarrow L_2 - L_1 \\ L_4 \leftarrow L-4 - L_1}\cases{3a+2b+c = 0 \\ -4a -2b = 0 \\ 2a+b = 0 \\ -6a-4b = 0}$

$\iff \begin{cases}3a+2b+c = 0 \\ 2a+b=0 \\ 3a+2b = 0\end{cases}$

$\ifff{L_3 \leftarrow L_3 - 2L_2}\begin{cases}3a+2b+c = 0 \\ 3a+b = 0 \\ -a. 0 \end{cases}$

$\iff \begin{cases}c=. 0 \\ b = 0 \\ a = 0\end{cases}$

La famille est libre.

---

> $\mathscr{F} = \{X^5+X^4+1, 2X^3-X^2, 3X^2-1, X+2\}$

C'est une famille de polynômes libres non-nuls étagée en degré. 

C'est donc une famille libre. 


### Exercice 3

> On se place dans l'espace vectoriel des fonctions de $\mathbb{R}$ dans $\mathbb{R}$. On considère les fonctions
> $g_0 : x \mapsto 1$, $g_1 : x \mapsto \cos(x)$, $g_2 : x \mapsto \cos(2x)$, $g_3 : x \mapsto \cos^2(x)$.
> Déterminer si les familles de fonctions $\mathcal{F}_1 = \{g_0, g_1, g_2\}$ et $\mathcal{F}_2 = \{g_0, g_2, g_3\}$ sont libres.

(w/o brackets)

Soit:

$g_0: \cases{\R \to \R \\ x \mapsto 1}$

$g_1 : \cases{\R \to \R \\ x \mapsto \cos(x)}$
$g_2: \begin{cases}\R \to \R \\ x \mapsto \cos(2x)\end{cases}$
$g_3 \cases{\R \to \R \\ x \mapsto cos^2(x)}$

Soit $a,b,c$ 3 réels tels que:
- $a\cdot g_0 + b\cdot g_1 + c \cdot g_2 = 0_{\mathscr{F}(\R, \R)}$
c'est-à-dire, oru tout $x\in\R$, $a\cdot g_0(x) + b\cdot g_1 (x)+c\cdot g_2(x) = 0_{\R^2}$

En particulier, on a: $\begin{cases}a+b+c = 0 \\ a-c = 0 \\ a-b+c = 0\end{cases}$ (en $x=0$, $x=\frac{\pi}{2}$, $x=\pi$)
$(S) \underset{L_3 \leftarrow L_3 + L_1}{\iff}\cases{a+b+c = 0 \\ a-c = 0 \\ 2a+2c = 0}$
$\underset{L_3 \leftarrow L_3 - 2L_2}{\iff} \begin{cases}a+b+c = 0  \\ a-c = 0 \\ 4c = 0\end{cases}$

$\iff \begin{cases}b = 0 \\ a = 0 \\ c = 0\end{cases}$
$g_0, g_1, g_2$ est libre. 

### Exercice 4

> Déterminer si les familles de vecteurs suivantes sont génératrices de $\mathbb{R}^3$ :  
> $\mathcal{F}_1 = \{(1,1,1), (1,1,0), (1,0,0)\}$, $\mathcal{F}_2 = \{(1,1,0), (0,0,1), (1,1,1)\}$.

Soit $\mathscr{F} = \{(1,1,1), (1,1,0), (1,0,0 )\}$
- Soit $(x,y,z)\in\R^3$
- Existe-t-il $a,b,c$ 3 réels tels que 
$(x,y,z) = a(1,1,1)+b(1,1,0)+c(1,0,0)$

C'est-à-dire, le système $(S):\cases{a+b+c = x \\ a+b = y \\ a = z}$ 

d'inconnues $a,b,c$ admet-il au moins une solution ?

Or $(S)\iff \cases{c = x-y \\ b = y-z \\ a = z}$

la famille est donc génératrice de $\R^3$ et, pour tout $(x,y,z)\in\R^3$

$(x,y,z) = z(1,1,1)+(y-z)(1,1,0)+(x-y)(1,0,0)$

> $\mathscr{F} = \{(1,1,0), (0,0,1), (1,1,1)\}$

Soit $(x,y,z)\in \R^3$

Existe-t-il $a,b,c$ 3 réels tels que
- $(x,y,z)=a(1,1,0)+b(0,0,1)+c(1,1,1)$
C'est-à-dire le système

$(S):\cases{a+c = x \\ a+c = y \\ b+c = z}$

d'inconnues $a,b,c$ admet-il au moins une solution.

Or $(S)\ifff{L_2 \leftarrow L_2 - L_1}\cases{a+c = x \\ 0 = x - y \\ b+c = z}$

---

La famille $\mathscr{F}$  n'est pas génératrice de $\R^3$, 
En effet, si tel était le cas, on aurait l'existence de trois réels $a,b,c$ tels que $(1,0,0)=a\cdot(1,1,10)+b(0,0,1)+c(1,1,1)$

C'est-à-dire tels que $\cases{a+c = 1 \\ a+c = 0 \\ b+c = 0 }$
Or, $(S)\ifff{L_2 \leftarrow L_2 - L_1}\cases{a+c = 1 \\ 0 = -1 \\ b+c = 0}$
## Exercice 5

> Déterminer si les familles de vecteurs suivantes sont génératrices de $\R_2[X]$
> $\mathscr{F} = \{X^2+1, 2X^2+1, X^2\}$

Soit $P = aX^2+bX+c$, existe-t-il $\alpha, \beta, \gamma$ trois réels tels que:
- $P = \alpha(X^2+1)+\beta(2X^2+1)+\gamma(X^2)$

C'est-à-dire, le système:
$(S):\cases{\alpha+2\beta+\gamma= a \\0 = b \\\alpha+\beta = c}$
d'inconnus $\alpha, \beta, \gamma$ admet-il au moins une solution?

Non, par exemple, $P=X$ n'est pas combinaison linéaire des éléments de $\mathscr{F}$

> $\{X^2+1, X^2+X, X^2\}$


Soit $P = aX^2+bX+c$, existe-t-il $\alpha, \beta, \gamma$ trois réels tels que:
- $P = \alpha(X^2+1)+\beta(X^2+X)+\gamma(X^2)$

C'est-à-dire, le système:
$(S):\cases{\alpha+2\beta+\gamma= a \\\beta = b \\\alpha = c}$
d'inconnus $\alpha, \beta, \gamma$ admet-il au moins une solution?

Or $(S)\iff \cases{\alpha = a-b-c \\ \beta = b \\ \alpha = c}$

La famille $\mathscr{F}$ est génératrice de $\R_2[X]$ et pour tout $P = aX^2+bX+c \in \R_2[X],$ on a:
- $P = c(X^2+1)+b(X^2+X)+(a-b-c)X^2$
## Exercice 6
$\newcommand{\K}{\mathbb{K}}$

> Soit $E$ un $\K$-espace vectoriel de $F$ et $G$ deux sous-espaces vectoriels de $E$. 
> Soit $\{f_1, ..., f_2\}$ une famille génératrice de $F$ et $\{g_1, ..., g_q\}$ une famille génératricec de $G$. 
> Montrer que $\{f_1, ..., f_p, g_1, ..., g_q\}$ est une famille libre.

Soit $F,G$ deux sous-espaces vectoriels d'un $\K$-espace vectoriel vectoriel $E$ et tels que $F\cap G = \{0_E\}$.

Soit $\{f_1, ..., f_p\}$ une famille libre d'éléments de $F$ et $\{g_1, ..., g_2\}$ une famille libre d'élément de $G$. 

Soit $\lambda_1,..., \lambda_p, \mu_1, ..., \mu_q$ $(p+q)$-scalaires tels que:
- $\lambda_1f_1+...+\lambda_p\cdot f_p + \mu_1 g_1 + ... + \mu_q g_q = 0_E$

On a alors: $\sum^{p}_{k=1}\lambda k \cdot f_k = -\sum_{l=1}^{q}k \mu_l \cdot g_l$

Or : $\cases{\text{pour tout }\lambda_k \in \{1,...,p\}, f_k \in F \text{ donc }\sum_{k=1}^{p}\lambda_k\cdot f_k \in F \text{ car }F \text{ est un sous-espace vectoriel } \\ \text{pour tout }l\in\{1, ..., p\}, g_l \in G \text{ donc } \sum_{l=1}^{q}\mu_l \cdot g_l \in G \text{ car G est un sous-espace vectoriel.}}$

D'où $\sum_{k=1}^{p}\lambda_k \cdot f_k \in F \cap G = \{0_E\}$
Dont on déduit que $\sum_{k=1}^{p} \lambda_k \cdot f_k = 0_E$
puis, puisque la famille $\{f_1, ..., f_p\}$ est libre, que $\lambda_1 = ... = \lambda_p = 0_{\K}$

De même, on montre que $\mu_1 = ... = \mu_q = 0_\K$ 
et finalement, la famille $\{f_1, ..., f_p, \mu_1, ... , \mu_q\}$ est libre. 


## Exercice 7

> 

Soit $F, G$ deux sous-espaces vectoriels d'un $\K$-espace vectoriel

- Soit $\{f_1, ..., f_p\}$ une famille génératrice de $F$
- et, $\{g_1, ..., g_q\}$ une famille génératrice de $G$. 

Soit $x \in F+G$ . 

Par définition, il existe $y \in F$ et $z \in G$ tel que:
- $x = y+z$
D'une part, $y \in F$ et $\{f_1, ..., f_p\}$ est génératrice de $F$. 
- donc, il existe $\lambda_1, ..., \lambda_p$ $p$-scalaires tels que $y = \sum_{k=1}^p \lambda_k \cdot f_k$
- D'autre part, $z \in G$ et $\{g_1, ..., g_q\}$ est génératrice de $G$. Donc il existe $\mu_1, ..., \mu_q$ $q$-scalaire tels que $z = \sum_{l=1}^{q} \mu_l \cdot g_l$
Par conséquent:
- $x = \lambda_1 f_1+...\lambda_p f_p + \mu_1 g_1 + ... + \mu_q g_q$ c'est-à-dire la famille $\{f_1, ..., f_p, g_1, ..., g_q\}$ est génératrice de $F+G$.

## Exercice 8

$\newcommand{\Vect}{\text{Vect}}$

> Détermienr une base des sous-espaces vectoriels suivants. En déduire leur dimension.
> $F = \{(x,y,z) \in \R^3 |x = 2z\}$

Soit $(x,y,z)\in\R^3$. Alors 

$(x,y,z)\in F \iff x-2z = 0 \iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $\cases{x = 2\mu \\ y = \lambda \\ z = \mu}$
$\phantom{(x,y,z)\in F \iff x-2z = 0 } \iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $(x,y,z) = \lambda(0,1,0)+\mu(2,0,1)$
D'où $\mathcal{F} = \Vect(\{(0,1,0), (2,0,1)\})$ 

La famille $\mathcal{F}$ est génératrice de $F$. 

De plus, il s'agit d'une famille libre. En effet:
Soit $a,b$ deux réels tels que $a\cdot (0,1,0) + b (2,0,1) = 0_{\R^3}$
C'est-à-dire tels que $\cases{2b= 0 \\ a = 0 \\ b = 0}$, soit $a=b=0$

... Génératrice & libre donc base de $\mathcal{F}$.

$\newcommand{\card}{\text{card}}$

$\mathcal{F}$ est donc une base de $F$.
- et $\dim(F)=\card(\mathcal{F}) = 2$


> $F = \{(x,y,z) \in \R^3 | 2x+3y = 0 \text{ et } x+2y-z=0\}$

Soit $F = \{(x,y,z) \in \R^3 : 2x+3y = 0 \text{ et }x+2y-z = 0\}$

Soit $(x,y,z)\in \R^3$
- Alors $(x,y,z) \in F \iff \cases{x+2y - z = 0 \\ 2x+3y = 0} \iff \exists \lambda \in \R$ tel que $\cases{x = -\frac{3}2\lambda \\ y = \lambda \\ z = \frac{\lambda}{2}} \iff \exists \lambda \in \R$ tel que $(x,y,z)=\lambda(-\frac{3}{2}, 1, \frac{1}2)$

D'où $F = \Vect(\{(-\frac{3}{2}, 1, \frac{1}{2})\}) = \Vect(\{(-3,2,1)\})$

On note $\mathcal{F} = \Vect(\{-3, 2, 1\})$
$\mathcal{F}$ est **génératrice** de $F$. De plus, il s'agit d'une famille **libre** car c'est une famille à un seul élément et il est non-nul. 

Finalement, $\mathcal{F}$ est une base de $F$ et 
- $\dim(F) = \card(\mathcal{F})$

> $F = \{(x,y,z,t) \in \R^4 | x+y+z+t = 0 \text{ et } x+z = 0\}$

Soit $(x,y,z,t)\in\R^4$ alors $(x,y,z,t)\in F \iff \cases{x+y+z+t = 0 \\ x+z = 0 \\ }$ 

$\iff \exists \lambda, \mu \in \R^2 \text{ tels que }\cases{t = -\lambda \\ x = -\mu \\ y = \lambda \\ z = \mu}$
$\iff \exists \lambda, \mu \text{ tels que }(x,y,z,t)=\lambda(0,1,0,-1)+\mu(-1,0,1,0)$

D'où $F = \Vect(\{(0,1,0,-1), (-1, 0, 1, 0)\})$


$\mathcal{F}$ est une famille génératrice de $F$. 
De plus, $\mathcal{F}$ est libre. En effet, soit $a,b \in \R$ tels que $a(0,1,0, -1)+b(-1, 0, 1, 0) = 0_\R^4$

C'est-à-dire $\cases{-b = 0 \\ a = 0 \\ -a+b = 0 \\ -a = 0} \iff$ soit $a=b=0$
CCL: $\mathcal{F}$ est une base de $F$. 

> $F = \{P \in \R_4[X] | P(2) = 0\}$

Soit $P = aX^4+bX^3+cX^2+dX+e \in \R_4[X]$

$P\in F \iff 6a+8b+4c+2d + e = 0$
$\phantom {P \in F} \iff \exists \alpha \in \R, \exists \beta \in \R, \exists \gamma \in \R, \exists \delta \in \R$$ tels que $\cases{a = \alpha \\ b = \beta \\ c = \gamma\\ d = \delta\\ e = -16\alpha  - 8\beta - 4\gamma - 2\delta}$

$\phantom {P \in F} \iff \exists \alpha \in \R, \exists \beta \in \R, \exists \gamma \in \R, \exists \delta \in \R$ tels que $P = \alpha X^4 + \beta X^3 + \gamma X^2 + \delta X$

D'où $F = \Vect(\{X^4 - 16, X^3 - 8, X^2 - 4, X-2\})$

On note $\mathcal{F} = X^4 - 16, X^3 - 8, X^2 - 4, X-2$

Ainsi, $\mathcal{F}$ est une base de $F$. 

Donc $\mathcal{F}$  est génératrice de $F$. 
De plus, c'est une famille libre car il s'agit d'une famille de polynômes non nuls étagées en degrés.
Donc, $\mathcal{F}$ est une base de $F$ avec: 
- $\dim(\mathcal{F}) = \card(F) = 4$



> $F = \{P\in\R_4[X] | P(-X) = P(X)\}$

Soit $P=aX^4+bX^3+cX^2+dX+e$

Alors $P\in F \iff aX^4-bX^3+cX^2-dX+e = aX^4+bX^3+cX^2+dX+e$
$\phantom{\text{Alors }P\in F} \iff 2bX^3+2dX=0_{\R_4[X]}$
D'où $P\in F \iff \exists \alpha \in \R, \exists \beta \in \R, \exists \gamma \in \R$ tels que $\cases{a = \alpha \\ 2b = 0 \\ c = \beta \\ 2d = 0 \\ e = \gamma}$
$\iff \exists \gamma \in \R, \exists \beta \in \R, \exists \gamma \in \R$ tels que:
- $P = \alpha X^4 + \beta X^2 + \gamma$


D'où $P \in \Vect(\{X^4, X^2, 1\})$

On a donc, par définition $\mathcal{F}$ génératrice de $F$. Par ailleurs, il s'agit d'une famille libre. 
Car ce sont des polynômes sont nuls étagés en degrés. 
C'est donc une base de $F$ et $\dim(F) = \card(\mathcal{F}) = 3$ **...cardinal de la base
> $F = \{P \in \R_3[X] | \int_{-1}^{1}P(x) dx = 0\}$

Soit $P = aX^3+bX^2+cX+d \in \R_3[X]$ alors:
$P \in F \iff \int_{-1}^1 (ax^3+bx^2+cx+d)dx=0$
$\phantom{P \in F} \iff [\frac{1}{4}ax^4+\frac{1}3bx^3+\frac{1}{2}cx^2+dx$
$\phantom{P \in F} \iff \frac{2}{3}b+2d = 0$
$\phantom{P \in F} \iff \exists \alpha \in \R, \exists \beta \in \R, \exists \gamma \in \R$ tel que $\cases{a = \alpha \\ b = \beta \\ c = \gamma \\ d=-\frac{1}{3}\beta}$
$\phantom{P \in F} \iff \exists \alpha \in \R, \exists \beta \in \R, \exists \gamma \in \R$ tels que $P = dX^2$

D'où $F = \Vect(\{X^3, X^2-\frac{1}{3}, X\})$
Donc $\mathcal{F}$ est génératrice de $F$. De plus il s'agit d'une famille libre car c'et une famille de polynôme non nuls étagés.

## Exercice 10

> On admet que les vecteurs $(0,0,1), (1,-1, 0)$ et $(2,0,-1)$ forment une base de l'espace vectoriel $\R^3$. Déterminer les coordonnées des vecteurs $(1,1,1)$ et $(1,0,0)$ dans cette base.

Dans $\R^3,$soit $\mathcal{F} = \{(0,0,1), (1,-1, 0), (2,0,-1)\}$

« On anticipe un peu sur le cours »

On a $\card(F) = 3= \dim(\R^3)$
donc pour montrer que $\mathcal{F}$ est une base de $\R^3$, il suffit de montrer soit qu'elle est libre, soit de montrer qu'elle est génératrice de $\R^3$

Vu la suite de la question, il est plus judicieux de montrer qu'elle est génératrice.

Soit $(x,y,z)\in\R^3$. Montrons qu'il existe $\alpha, \beta, \gamma$ trois réels tels que $(x,y,z) = \alpha(0,0,1) + \beta(1,-1,0)+\gamma(2,0,-1)$

c'est à dire tels que $\cases{\beta + 2\gamma = x \\ -\beta = y \\ \alpha - \gamma = z}$

Or $(S) \iff \cases{\alpha = \frac{1}2(x+y)+z \\ \gamma = \frac{1}{2}(x+y) \\ \beta = y}$
La famille est bien génératrice de $\R^3$ et comme expliqué plus haut, c'est donc une base de $\R^3$. 

De plus, pour tout $(x,y,z)\in\R^3,$ on a $(x,y,z)=(\frac{1}{2}(x+y)+z)\cdot(0,0,1)+(-y)(1,-1,0)+(\frac{1}{2}(x+y))\cdot(2,0,-1)$

**En particulier**

$(1,1,1) = 2(0,0,1) - 1(1,1,0) + 1(2,0,-1)$

Le vecteur des composantes de $(1,1,1)$ dans la base $\mathcal{F}$ est $(2, -1, 1)$. 

$(1,0,0) = \frac{1}{2}(0,0,1)+0(1,-1, 0)+\frac{1}{2}(2,0,-1)$

Le vecteur des composantes de $(1,0,0)$ dans la base $\mathcal{F}$ est $(\frac{1}{2}, 0, \frac{1}{2})$. 

## Exercice 11

> On admet que les polynômes $X-1$ et $(X-1)^2$ forment une base dans l'espace vectoriel $\R_2[X]$. Déterminer les coordonnées des polynômes $X^2$ et $2X^2+X+1$ dans cette base.

On a $\mathcal{F} = \{1, X-1, (X-1)^2\}$

$\card(\mathcal{F}) = 3 = \dim(\R_2[X])$ donc pour montrer que $\mathcal{F}$ est une base de $\mathbb{R}_2[X]$ il suffit de montrer par exemple que $\mathcal{F}$ est génératrice de $\R_2[X]$.

Soit $P \in \R_2[X], P = aX^2+bX+c$

On veut montrer l'existence de $\alpha, \beta, \gamma$ réels tels que: $P = \alpha(1) + \beta(X-1)+\gamma((X-1)^2)$

$(S):\cases{\alpha=a \\ \beta - 2\gamma = b \\ \alpha - \beta + \gamma = c} \iff \cases{\alpha = b+a+c \\ \beta = b+2a \\ \gamma = a}$

$\mathcal{F}$ est bien génératrice de $\R_2[X]$. 

C'est donc une base ($f$ au dessus). (car le cardinal est la dimension)

$P = (b+a+c)(1)+(b+2a)(x-1)+a((X-1)^2)$

En particulier,
- $X^2 = 1\cdot(1)+2\cdot(X-1)+1((X-1)^2)$ donc les composantes du vecteur $X^2$ dans la base $\{1,X-1, (X-1)^2\}$ sont $(1,2,1)$.
et
- $2X^2+X+1 = 4\cdot(1)+5\cdot(X-1)+2((X-1)^2)$
## Exercice 9

> On se place dans $\R^\mathbb{N}$, l'espace vectoriel des suites réelles. Déterminer une base du sous-espace vectoriel des suites arithmétiques. En déduire sa dimension.

$\newcommand{\N}{\mathbb{N}}$

Soit $F = \{(u_n)_{n\in\N}\in \R^\N:(u_n)_{n\in\N} \text{est arithmétique.}\}$ 

On avait déjà montré que $F$ est un sous-espace vectoriel de $\R^\N$. 

---
*Brouillon

$\forall n \in \N, u_n = u_0+n\cdot r$

$(u_n)_{n\in\N}$  est une combinaison linéaire de $(1)_{n\in\N}$ et $(n)_{n\in\N}$


---

Soit $(u_n)_{n\in\N}\in F$. Il existe $r \in \R$ tel que:
- Pour tout $n \in \N, u_n = u_0 + nr$ 
	- Donc, $(u_n)_{n\in\N} = u_0\cdot(1)_{n\in\N}+r\cdot(n)_{n\in\N}$
		- Soit $(u_n)_{n\in\N} \in \Vect(\{(1)_{n\in\N}, (n)_{n\in\N}\})$
	- C'est-à-dire $F \subset \Vect(\{(1)_{n\in\N}, (n)_{n\in\N}\})$
Soit $(u_n)_{n\in\N}\in\Vect(\{(1)_{n\in\N}, (n)_{n\in\N}\})$
- Par définition, il existe $a,b$ 2 réels tels que:
	- $(u_n)_{n\in\N} = a\cdot(1)_{n\in\N}+b\cdot(n)_{n\in\N}$
	- $\phantom{(u_n)_{n\in\N}} = (a+bn)_{n\in\N}$
	- et $(u_n)_{n\in\N}\in F,$ soit $\Vect(\{(1)_{n\in\N}, (n)_{n\in\N}\})$
	- On peut donc affirmer que:
		- $F = \Vect(\{(1)_{n\in\N}, (n)_{n\in\N}\})$
	- et $\mathcal{F}$ est **génératrice de $F$.**
De plus, il s'agit d'une famille libre
- En effet, soit $a \in \R, b \in \R$  tels que $a\cdot (1)_{n\in\N} + b(n)_{n\in\N} = 0_{\R^\N}$
- C'est-à-dire, tels que:
	- $\forall n \in \N, a+bn = 0$
		- En particulier : $\cases{a+b0 = 0 \\ a+b1 = 0},$
		- qui donne $a=b=0$
Finalement, $\mathcal{F}$ est une base de $F$, et $\dim(F) = \card(\mathcal{F}) = 2$


