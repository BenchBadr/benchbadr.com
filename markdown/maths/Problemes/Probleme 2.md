$\newcommand{\sub}{\subset}$
# Partie 1

### Question 1

$T_2 = 2XT_1 - T_0$
$\phantom{T_2} = 2X(X)-1$
$\phantom{T_2} = 2X^2 - 1$

$T_3 = 2X(2X^2-1)-X$
$\phantom{T_3} = 4X^3 - 3X$

###  Question 2

On conjecture $P_n = \deg(T_n)=n$

*Initialisation*

$\deg(T_0) = 0$
$\deg(T_1) = 1$
$\Rightarrow$ Init OK

*Hérédité* $\newcommand{\N}{\mathbb{N}}$

Soit $n \in \N$ tel que $\deg(T_n) = n$ vraie. 
Montrons  que $P_{n+1}$ vraie.

$T_{n+2} = 2X(T_{n+1})- T_n$

Or $\deg(2X(T_{n+1})) -T_n$
$= \deg(T_{n+1})+1$. Par $H_f,$ $\deg(T_{n+1}=n+1)$
$\Rightarrow \deg(T_{n+1}) = n+1$
$\Rightarrow \deg(2X(T_{n+1})) = n+2$

$\Rightarrow P_{n+1}$ vraie

*Conclusion*

Ainsi, $\forall n \in \N, \deg(T_n) = n$

On pose $P_n:$ « coefficient dominant de $T_n = 2^{n-1}$ et on veut le démontrer $\forall x \in \N^*$

*Initialisation*

$T_1 = X$ coefficient dominant = $1 = 2^{1-1}$ $P(1)$

$T_2 = 2X^2 - 1$ coefifcient $= 2 = 2^{n-1}$ $P(2)$

*Hérédité*

Soit $n \in \N^*$ on suppose $P(n)$ et $P(n+1)$

$T_{n+2} = 2X(T_n+1)-\underset{n}{\underbrace{T_n}}$
coefficient dominant de 
$T_{n+2} =$ coefficient dominant $2X(T_{n+1})$
$\phantom{T_{n+2}} = 2X$ coefifcient dominant $(T_{n+1})$
$\phantom{T_{n+2}} = 2X2^n$ ($H_r$)
$\phantom{T_{n+2}} = 2^{n+1}P(n+2)$

$\square$ QED

### Question 3

On pose $P_n : « T_n(\cos(\theta)) = \cos(n\theta)$

*Initialisation*

$T_0(\cos(\theta)) = 1$ et $\cos(0 \cdot \theta) = 1$
$P_0(\cos\theta)$ vérifiée
$T_1(\cos\theta) = \cos(\theta)$
$P_1(\cos(\theta))$ vérifiée

*Hérédité*

Supposons que $T_{n}(\cos\theta)$ et $T_{n+1}(\cos(\theta))$ vraie.
Montrons que $T_{n+1}(\cos(\theta)) = \cos(n\theta)$ vraie. (à démontrer)
$\newcommand{\p}{\phantom{T_{n+2}(\cos(\theta))}}$
$T_{n+2}(\cos(\theta)) = 2\cos(\theta)T_{n+1}(\cos(\theta)) - T_n(\cos(\theta))$
$\p = 2\cos(\theta)\cos((n+1)\theta) -  (\cos(n\theta))$
$\p = \cos(\theta+(n+1)\theta) + \cos(\theta(n+n\theta))-\cos(n\theta)$   
$\p = \cos((n+2)\theta)$
$\square$

$\cos(a+b) = \cos(a)\cos(b) - \sin(a)\sin(b)$
$\cos(a-b) = \cos(a)\cos(b) + \sin(a)\sin(b)$

$\iff 2\cos(a)\cos(b) = \cos(a+b) + \cos(a-b)$
$\cos(a)\cos(b) = \frac{1}2(\cos(a+b)+\cos(a-b))$

### Question 4

$T_n(1) = T_n(\cos(0))$
$\phantom{T_n(1)} = \cos(n+0)$
$\phantom{T_n(1)} = 1$
$T_{n}'(\cos(\theta)) = \cos'(n\theta)$
$\phantom{T_n'(\cos(\theta))} = \cos'(n\theta)$
$\phantom{T_n'(cos(\theta))} = n\sin(n\theta)$
$T_n'(cos(\theta)) = 0$

### Question 5


# Partie 2

### Question 1

$\frac{1}{X(X-1)} = -\frac{1}X+\frac{1}{X-1}$

### Question 2 

$\sum^n_{k=2}\frac{1}{k(k-1)} = \sum^n_{k=2}\frac{1}{k-1} - \frac{1}k$ 
$\phantom{\sum^n_{k=2}\frac{1}{k(k-1)}} = 1-\frac{1}n$
$(k-1)^2 = k(k-1)$

$\frac{1}{(k-1)^2} ≤ \frac{1}{k(k-1)}$
$\sum^{n+1}_{k=2}\frac{1}{(k-1)^2} ≤ \sum^{n+1}_{k=2}\frac{1}{k(k-1)}$
$\sum^n_{k=2}\frac{1}{k^2}≤ \sum^n_{k=2}\frac{1}{k(k-1)}$
$S_n-1 ≤ 1 - \frac{1}{k+1}$

### Question 3

$S_n \nearrow$ et et majorée donc $S_n$ converge.

### Question 4

$S_{2n}=S_n'+\sum^n_{k=1}\frac{1}{(2k)^2} = S_n' + \sum^n_{k=1}\frac{1}{4k^2}$
$= S_n'+\frac{S_n}{4}$


$S'_n= S_{2n}-\frac{S_n}4$
$\underset{n\to+\infty}{\lim}S_n' = l - \frac{l}4$
$l' = \frac{3}{4}l$

### Question 5

$Tn'(X) = \sum^n_{k=1}\frac{T_n(X)}{(X-x_k)}$
$T_2(X) = (X-x_1)(X-x_2)$
$T_2'(X) = (X-x_1)+(X-x_2)$
$T_3(X) = (X-x_1)(X-x_2)(X-x_3)$ (on note respectivement $u, v, w$)
$T_3'(X) = (X-x_1)(X-x_2)+(X-x_1)(X-x_3)+(X-x_2)(X-x_3)$

$u \cdot (v\cdot w)$

$u'(v\cdot w)+ux(v'\cdot w + v \cdot w')$
$vw + uw + uv$
$Tn'(X) = \sum^n_{k=1}\prod^n_{i=1, i≠k}(X-x_i)$
$(\prod^n_{i=1}f_i)' = \sum^n_{i=1}(\Pi_{k≠i}k)f_i'$

$\newcommand{\s}{\sum_{k=1}^n}$
$\s \frac{1}{1-x_k} = n^2$
$\s \frac{1}{\sin^2(\frac{(2k-1)\pi}{4n})} = \s \frac{1}{1-\cos^2(\frac{(2k-1)\pi}{4n})}$
$= \s\frac{1}{1-\frac{\frac{\cos(2k-1)\pi}{2n}}{2}-\frac{1}{2}}$
$= \s \frac{1}{\frac{1}2(1-\cos(\frac{(2k-1)\pi}{2n}))}$
$= 2n^2$

$\s\frac{1}{\tan^2(\frac{(2k+1)\pi}{4n})}$
$= \s\frac{1}{\frac{1}{\cos^2(...)}-1}$
$= \sum^n_{k=1} = \frac{1}{\frac{1}{\frac{x_k - 1}{2}}-1}$
$= \s \frac{1}{\frac{2}{x_k-1}-1} - \frac{1}{2n^2+1}$

### Question 6

#### Question 6-a
$\sin(x) ≤ x$ sur $\R^+$
$[0;\frac{\pi}2] \sub \R^+$ donc $\sin(x) ≤ x$ sur $[0;\frac{\pi}2]$
$\tan(x) = \frac{\sin(x)}{\cos(x)}$
$\tan'(x) = \frac1{\cos^2(x)}$
$\tan''(x) = \frac{-1 \cdot 2 \sin(x) \cdot \cos(x)}{\cos^4} = \frac{-2\sin(x)}{\cos^3} ≥ 0$
$\tan(x)$ convexe sur $[0;\frac{\pi}2]$
et la tangent de $\tan(x)$ en $0$ st $x$
Donc $\tan(x) ≥ x$ sur $[0;\frac{\pi}2]$
#### Question 6-b

$x \in \left[0; \frac{\pi}{2} \right]$
- $\sin(x) ≤ x ≤ \tan(x)$
- $\frac{1}{\sin^2(x)} ≥ \frac1{x^2} ≥ \frac{1}{\tan^2(x)}$
- $\sum^n_{k=1}\frac{1}{\sin\left( \frac{(2k-1)\pi}4n \right)} ≥ \sum^n_{k=1} \frac{1}{(2k-1)^2 \cdot \left( \frac{\pi}{4a} \right)^4} ≥ \sum^n_{k=1}\frac{1}{\tan^2(x)}$
- $\sum\frac1{\sin^2(x)} ≥ \left( \frac{16n^2}{\pi^2} \right)Sn' ≥ \sum^n_{k=1}\frac{1}{\tan^2}$
- $2n^2 ≥ \left( \frac{16n^2}{\pi^2} \right)Sn' ≥ 2n-n$
- $\frac{\pi^2}8 ≥ Sn' ≥ \frac{\pi^2}{8} - \frac{\pi^2}{16n}$
Par gendarmes, $l'=\frac{\pi^2}{8}$
- $l = \frac{4}3l' = \frac{\pi^2}{6}$

---
Dans le partiel, 
$Q_0 = 1, Q_1 = 1$