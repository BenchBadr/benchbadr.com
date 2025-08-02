## Exercice 1

> Résoudre le système suivant
>
> $\begin{cases}3x-y+2z = a \\ -x+2y-3z=b \\ x+2y+z = c\end{cases}$
>
> où $a, b$ et $c$ sont des nombres réels

Soiit $a,b,c$ 3 réels

On a $(S)\underset{L_1 \leftrightarrow L_3}{\iff}\begin{cases}x+2y+z=c \\ -x+2y-3z=b \\ 3x-y+2z=a\end{cases}$

$\underset{\begin{matrix}L_2 \leftarrow L_2+L_1 \\ L_3 \leftarrow L_3 - 3L_1\end{matrix}}{\iff} \begin{cases}x+2y+z = c \\ 4y - 2z = b+c \\ -7y-z = a-3c \end{cases}$

$\underset{L_2 \leftrightarrow L_3}{\iff}\begin{cases}
x+2y+z = c \\ -7y-z = a - 3c \\ 4y - 2z = b+c 
\end{cases}$

$\underset{L_3 \leftarrow L_3 - 2L_2}{\iff}\begin{cases}
x+2y+z = c \\ -7y -z = a-3c \\ 18y = -2a+b+7c
\end{cases}$

$\iff \begin{cases}x = \frac{1}{18}(8a+5b-c)\\z = \frac{1}{18}(-4a-7b+5c) \\ y = \frac{1}{18}(-2a+b+7c)\end{cases}$

Donc $(S)$ possède une unique solution, le triplet $(\frac{1}{18}(8a+5b-c), \frac{1}{18}(-2a+b+7c), \frac{1}{18}(-2a+b+7c))$

## Exercice 2

> Montrer que $F = \{(u_n)_{n\in\N} \in \R^{\N}:(u_n)_{n\in\N}\text{ est géométrique}\}$ n'est pas sous-espace vectoriel de $\R^\N$

Soit $(u_n)_{n\in\N} = (2^n)_{n\in\N}\in F$

$(v_n)_{n\in\N} = (3^n)_{n\in\N} \in F$

Alors $(u_n)_{n\in\N}+(v_n)_{n\in\N} = (2^n+3^n)_{n\in\N} \notin F$

__En effet__ 

$\frac{w_1}{w_0} = \frac{5}{2} ≠ \frac{13}{2} ≠ \frac{w_2}{w_1} $

## Exercice 3

> Dans $\R^3,$ montrer que le sous-ensemble suivant est un sous-espace vectoriel, dont on donnera une base et la dimension:
>
> $F = \{(x,y,z) \in \R^3 : x+y = 0\}$


Soit $(x,y,z)\in\R^3$. Alors:

$(x,y,z) \in F \iff x+y = 0$

$\phantom{(x,y,z) \in F} \iff \exists \lambda \in \R, \exists \mu \in \R$ tels que: $\begin{cases}x = \lambda \\ y = -\lambda \\ z = \mu\end{cases}$

$\phantom{(x,y,z) \in F} \iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $(x,y,z) = \lambda(1,-1, 0)+\mu(0,0,1)$

Donc, $\mathcal{F} = \text{Vect}(\{(1,-1, 0), (0,0,1)\})$ 

F est un sous-espace vectoriel de $\R^3$ et $\mathcal{F}$ est une famille génératrice.

C'et de plus une famille libre. En effet, soit $a,b$ 2 réels tels que:
- $a(1,-1, 0)+b(0,0,1) = 0_{\R^3}$
- C'est-à-dire tels que:
$\begin{cases}a = 0 \\ -a = 0 \\ b=0\end{cases}$ soit $a=b=0$

C'est donc une base de $F$ et

$\dim(F) = \text{card}(\mathcal{F})= 2$

> Dans $\R_2[X]$, montrer que le sous-ensemble suivant est un sous-espace vectoriel, dont on donnera une base et la dimension:
>
> $F = \{P \in \R_4[X] : P(-X)=-P(X)\}$

Soit $P = aX^4 + bX^3 + cX^2 + dX + e \in \R_2[X]$

Alors 

$P \in F \iff aX^4-bX^3+cX^2-dX+e = -(aX^4-bX^3+cX^2+dX+e)$

$\phantom{P \in F } \iff 2aX^4+2cX^2+2e = 0_{\R_2[X]}$

$\phantom{P \in F } \iff \exists \alpha \in \R, \exists \beta \in \R$ tels  $\begin{cases}a = 0 \\ b = \alpha \\ c = 0 \\ d = \beta \end{cases}$

$\iff \exists \alpha \in \R, \exists \beta \in \R$ tels que $P = \alpha X^3+\beta X$

D'où $F = \text{Vect}(\{X^3, X\})$

et $F$ est donc un sous-espace vectoriel de $\R_2[X]$ et $\mathcal{F}$ est génératrice de $F$. De plus, dc'est une famille libre car famille de polynómes non nuls étagées en degrés.

C'est-à-dire une base de $F$ et $\dim(F) = \text{card}(\mathcal{F}) = 2$
