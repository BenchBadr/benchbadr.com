---
lang: fr
date: 21/01/2025
---

# TD-1 : Algebre

## Séance 1

### Exercice 1

> $(E_1):\begin{cases}2x+y=4\\2x+3y=-2\end{cases}$

$\underset{L_2\Rightarrow L_2-1}{\iff}\begin{cases}2x+y=4 \\ 2y = -6\end{cases}\iff \begin{cases}x = \frac{7}{2} \\ y = -3\end{cases}$

> $(E_2):\begin{cases}x-y-2z&=-1\\4y-3z&=2\\2z&=4\end{cases}$

> [!tips]
> Le système est déjà échelonné

$\iff \begin{cases}x = 5 \\ y = 2 \\ z = 2\end{cases}$

> $(E_3):\begin{cases}-2x-2t&=3\\-5x-y+z&=2\\-2t &= -3 \\ z+2t  &= 1\end{cases}$

$\underset{L_1 \leftrightarrow L_2}{\iff} \begin{cases}-5x-y+z=2\\ -2x-2t = 3 \\ z+2t = 1 \\ -2t=-3\end{cases}$

$\iff \begin{cases}x = -3\\ y=11 \\ z = -2 \\ t = \frac{3}{2}\end{cases}$

### Exercice 2

> $(E_1):\begin{cases}x+2y+z=1 \\ x+y+2z=3 \\ 3x+3y+2y=1\end{cases}$

$\underset{L_3\leftarrow L_3 - 3L_1}{\underset{L_2\leftarrow L_2 - L_1}{\iff}} \begin{cases}x+2y+z=1 \\ -y + z = 2 \\ -3y -z=-2\end{cases}$

$\underset{L_3 \leftarrow L_3+L_2}{\iff} \begin{cases}x+2y+z=1 \\ -y +z=2 \\ -4y = 0\end{cases}$

$\underset{}{\iff} \begin{cases}x = -1 \\ z = 2 \\ y = 0\end{cases}$


> $(E_2):\begin{cases}-x-2y+2z=1\\-2x+2y-3z=-1 \\ 3x-y+3z=3\end{cases}$

$\underset{L_2 \leftarrow L_2 - 2L_1}{\underset{L_3 \leftarrow L_3+3L_1}{\iff}}\begin{cases}-x-2u+2z=1 \\ 6y - 7z = -3 \\ -7y+9z=6\end{cases}$

$\underset{L_3\leftarrow L_3+\frac{7}{6}L_2}{\iff}\begin{cases}-x-2y+2z=1 \\ 6y-7z=-3 \\ \frac{5}{6}z = \frac{15}{6}\end{cases}$

$\underset{}{\iff}\begin{cases}x=1 \\ y=3 \\ z=3\end{cases}$

> $(E_3):\begin{cases}2x+y-3z=5 \\ 3x-2y+2z = 5 \\ 5x-3y-z=16\end{cases}$

$\underset{L_3\leftarrow L_3 + 3L_1}{\underset{L_2\leftarrow L_2+2L_1}{\iff}}\begin{cases}2x+y-3z=5 \\ 7x - 4z = 15 \\ 11x-10z = 31\end{cases}$

$\underset{L_3 \leftarrow L_3}{\iff}\begin{cases}2x+y-3z=5 \\ 7x-4z=15 \\ -\frac{13}{2}x = \frac{-13}{2}\end{cases}$

$\iff \begin{cases}z = -2 \\ x = 1 \\ y = -3\end{cases}$

> $(E_4):\begin{cases}3x-y+2z=1\\-3x+2y-z=1\\2x-y-2z=-1\end{cases}$

$\underset{L_3\leftarrow L_3 - L_1}{\underset{L_2\leftarrow L_2+2L_1}{\iff}}\begin{cases}3x-y+2z=1 \\ 3x+3z=3 \\ -x-4z=-2\end{cases}$

$\underset{L_2 \leftarrow \frac{1}{3}L_2}{\iff}\begin{cases}3x-y+2z=1 \\ x+z=1 \\ -3z=-1\end{cases}$

$\iff \begin{cases}y = \frac{5}{3} \\ x = \frac{2}{3} \\ z = \frac{1}{3}\end{cases}$

### Exercice 3

> $(S):\begin{cases}-x+2y=a \\ x+3y+2z=b \\ 2x-y+z=c\end{cases}$

$\underset{L_3 \leftrightarrow L_1}{\iff}\begin{cases}2x-y+z=c \\ x+3y+2z=b \\ -x+2y=a\end{cases}$

$\underset{L_2 \leftarrow L_2 - 2L_1}{\iff}\begin{cases}2x-y+z=c \\ -3x+5y=b-2c \\ -x+2y=a\end{cases}$

$\underset{L_3 \leftarrow L_3 - \frac{1}{3}L_2}{\iff}\begin{cases}2x-y+z=c\\-3x+5y=b-2c \\ \frac{1}{3}y=a-\frac{1}{3}(b-2c)\end{cases}$

$\iff \begin{cases}z=-7a+3b-5c\\x = 5a-2b+4c\\ y = 3a-b+2c\end{cases}$

### Exercice 6

> Sur une copie, un étudiant a écrit la résolution suivante:
>
> $\begin{cases}2x+y=3 \\ x+y = 2\end{cases} \underset{L_2\leftarrow L_2 - L_1}{\underset{L_1 \leftarrow L_1 - L_2}{\iff}} \begin{cases}x = 1 \\ -x = -1\end{cases} \iff x = 1$
>
> L'ensemble des solutions de ce système est donc $\{(1,y)|y\in\R\}$

**Faux** car on ne peut utiliser qu'une seule ligne de pivot, or il en utilise deux différentes.

### Exercice 4

> $S_1 = \{(x,y)\in\R^2|3x-2y=1\}$

Soit $(x,y)\in\R^2$. Alors $(x,y)\in S_1 \iff 3x-2y=1$.

$\iff \exists \lambda \in \R$tel que $\begin{cases}x=\frac{1}{3}+\frac{2}{3}\lambda \\ y = \lambda\end{cases}$

D'où

$S_1 = \{(\frac{1}{3}+\frac{2}{3}\lambda, \lambda), \lambda \in \R\}$

> $S_2 = \{(x,y,z) \in \R^3 | x+2y+z=1\}$

Soit $(x,y,z)\in\R^3$ Alors $(x,y,z)\in S_2 \iff x+2y+z=1$

$\iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $\begin{cases}x=1-2\lambda-\mu \\ y = \lambda \\ z = \mu\end{cases}$

Donc $S_2 = \{(1-2\lambda - \mu, \lambda, \mu), \lambda \in \R, \mu \in \R\}$

> $S_3 = \{(x,y,z) \in \R^3 | =-x+3y+2z=2\}$

Soit $(x,y,z)\in\R^3$. Alors $(x,y,z)\in S_3 \iff -x+3y+2z=2$

$\iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $\begin{cases}x = 3\lambda + 2\mu-2 \\ y = \lambda \\ z = \mu\end{cases}$

Donc $S_3 = \{(3\lambda+2\mu-2) | \lambda, \mu \in \R\}$

> $S_4 = \{(x,y,z)\in\R^3|2x-y=3\}$

Soit $(x,y,z)\in\R^3$. Alors $(x,y,z)\in S_4 \iff 2x-y=3$

$\iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $\begin{cases}x=\frac{3}{2}+\frac{\lambda}{2} \\ y = \lambda \\ 3 = \mu\end{cases}$

Donc $S_4 = \{(\frac{3}{2}+\frac{\lambda}{2}, \lambda, \mu), \lambda \in \R, \mu \in \R\}$.

> $S_5 = \{(x,y,z)\in\R^3 | 2x+y+z=1 \text{ et }y-z=2\}$

Soit $(x,y,z)\in\R^3$. Alors $(x,y,z)\in S_5 \iff \begin{cases}2x+y+z=1 \\ y-z=2\end{cases} \\ \iff \exists \lambda \in \R$ tels que $\begin{cases}x = -\frac{1}{2}-\lambda \\ y = 2+\lambda \\ z = \lambda\end{cases}$

Donc $S_5 = \{(-\frac{1}{2}-\lambda,2+\lambda, \lambda), \lambda \in \R\}$

### Exercice 5

> $(E_1):\begin{cases}-x+2y=4 \\ -x+y+3z=1 \\ 3y-9z=-4\end{cases}$

$\underset{L_2 \leftrightarrow L_1}{\iff}\begin{cases}-x+y+3z=1 \\ -x+2y = 4 \\ 3y - 9z=-4\end{cases}$

$\underset{L_2 \leftarrow L_2 - L_1}{\iff}\begin{cases}-x+y+3z=1 \\ y -3z = 3 \\ 3y - 9z = -4\end{cases}$

$\underset{L_3\leftarrow L_3 - 3L_2}{\iff} \begin{cases}-x+y+3z=1 \\ y - 3z=3 \\ 0 = -13\end{cases}$

Donc l'ensemble des solutions de $(E_1)$ est $\emptyset$

> $(E_2):\begin{cases}x+3z=5\\2x-3y+3z=1\\x-y+2z=2\end{cases}$


$\underset{L_1 \leftrightarrow L_3}{\iff} \begin{cases}x-y+2z=2 \\ 2x-3y+3z = 1 \\ x + 3z = 5\end{cases}$

$\underset{L_2 \leftarrow L_2 - 3L_1}{\iff}\begin{cases}x-y+2z=2 \\ -x-3z=-5 \\ x+3z = 5\end{cases}$

$\underset{L_2 \leftarrow -L_2}{\iff}\begin{cases}x-y+2z=2\\x+3z=5 \\ x+3z = 5\end{cases}$

$\iff \begin{cases}x-y+2z=2 \\ x+3z = 5\end{cases}$

$\iff \exists \lambda \in \R$ tel que $\begin{cases}y=3-\lambda\\ x = 5-3\lambda \\ z = \lambda\end{cases}$

L'ensemble $S$ des solutions de $(E_2)$ est $S=\{(5-3\lambda,3-\lambda, \lambda), \lambda \in \R\}$ 

> $(E_3):\begin{cases}-2x+2y-4z=-2\\x-y+2z=1\end{cases}$

$\underset{L_1 \leftrightarrow -\frac{1}{2}L_1}{\iff}\begin{cases}x-y+2z = 1 \\ x-y+2z = 1\end{cases}$

$\underset{}{\iff}x-y+2z=1$

> [!tips]
> il faut en connaître deux

$\iff \exists \lambda \in \R, \exists \mu \in \R$ tels que $\begin{cases}x=1+\lambda-2\mu\\y = \lambda \\ z = \mu\end{cases}$

L'ensemble $S$ des solutions de $(E_3)$ est $S=\{(1+\lambda-2\mu), \lambda \in \R, \mu \in \R\}$

> $(E_4):\begin{cases}x+2y-z+4t=1\\-x-3y+2z=0\\2x+y+3z+2t=1\end{cases}$

$\underset{L_3\leftarrow L_3-\frac{1}{2}L_1}{\iff}\begin{cases}x+2y-z+4t=1 \\ -x-3y+2z=0\\ \frac{3}{2}x+\frac{7}{2}z=\frac{1}{2}\end{cases}$

$\underset{L_3 \leftarrow 2L_3}{\iff}\begin{cases}x+2y-z+4t=1 \\ -x-3y+2z=0 \\ 3x+7z=1\end{cases}$

$\iff \exists \lambda \in \R$ tel que $\begin{cases}t = \frac{2}{9}\\y = \frac{13}{9}\lambda - \frac{1}{9} \\ x = \frac{1}{3} - \frac{7}{3}\lambda \\ z = \lambda\end{cases}$

Donc l'ensemble des solutions de $(E_4)$ est: 

$S=\{(\frac{1}{3}-\frac{7}{3}\lambda, \frac{13}{9}\lambda - \frac{1}{9}, \lambda, \frac{2}{9}+\frac{1}{9}\lambda), \lambda \in \R\}$

### Exercice 8

> $(S):\begin{cases}x+y+z+t = 1 \\ x+2y + 3z+4t=2 \\ x+3y+6z+10t=4\\x+4y+10z+20t=6\end{cases}$

$\underset{L_4 \leftarrow L_4 - L_1}{\underset{L_3 \leftarrow L_3 - 1}{\underset{L_2\leftarrow L_2 - L_1}{\iff}}} \begin{cases}x+y+z+t = 1 \\ y + 2z+3t = 1 \\ 2y+5z+9t = 3\\ 3y+9z+19t=5\end{cases}$

$\underset{5L_4 \leftarrow L_4 - 3L_2}{\underset{L_3 \leftarrow L_3 - 2L_2}{\iff}}\begin{cases}x+y+z+t = 1 \\ y +2z+3t=1\\z+3t=1\\3z+10t = 2\end{cases}$

$\underset{2L_4\leftarrow L_4 - 3L_3}{\iff}\begin{cases}x+y+z+t=1 \\ y+2z+3t=1\\z+3t=1 \\ t = -1\end{cases}$

$\iff \begin{cases}x=2 \\ y = -4 \\ z = 4 \\ t = -1\end{cases}$

Soit $S$ l'ensemble des solutions de $S=\{(2,-4, 4, -1)\}$

### Exercice 7 

> Déterminer le ou les polynômes $P$ de degré inférieur ou égal à $2$ tels que:
>
> $P(-3)=4, P(1)=1$ et $P(2)=-1$

Soit $P=aX^2+bX+c \in \R_2[X]$ tel que 
- $P(-3)=4, $
- $P(1)=1$
- $P(2)=-1$

C'est à dire

$(S):\begin{cases}9a-3b+c=4 \\ a+b+c = 1 \\ 4a + 2b+c = -1\end{cases}$

$\underset{L_3 \leftarrow L_3 - L_1}{\underset{L_2\leftarrow L_2-L_1}{\iff}}\begin{cases}9a - 3b+ c = 4 \\ -8a +4b = -3 \\ -5a + 5b= -5\end{cases}$

$\underset{L_3\leftarrow -\frac{1}{5}L_3}{\iff}\begin{cases}9a-3b+c = 4 \\ -8a + 4b = -3 \\a - b =1\end{cases}$

$\underset{L_2 \leftrightarrow}{\iff}\begin{cases}9a - 3b+c = 4 \\ a - b = 1 \\ -8a - 4b = -3\end{cases}$

$\underset{L_3\leftarrow L_3+8L_2}{\iff}\begin{cases}9a-3b+c = 4 \\ a-b=1\\-4b = 5\end{cases}$

$\iff \begin{cases}c= \frac{5}{2}\\a = -\frac{1}{4}\\b = -\frac{5}{4}\end{cases}$

D'où $P=-\frac{1}{4}X^2-\frac{5}{4}X+\frac{5}{2}$

**Réciproquement** le polynôme $P$ vérifie $\begin{cases}P(-3) = 4\\ P(1) = 1\\ P(2) = -1\end{cases}$

> $P(-1)=1$ et $P(1)=1$

Soit $P=aX^2+bX+c \in \R_2[X]$ tel que 
- $P(-1)=1$
- $P(1)=1$

c'est-à-dire que:

$(S):\begin{cases}a-b+c=1 \\ a+b+c = 1\end{cases}$

Or, $(S) \underset{L_2\leftarrow L_2 - L_1}{\iff}\begin{cases}a-b+c=1 \\ 2b = 0\end{cases}$

$\iff \begin{cases}a+c = 1 \\ b = 0\end{cases}$

Donc $P=aX^2+(1-a)$

**Reciproquement**, les polynômes $P=aX^2+(1-a)\in\R_2[X]$ avec $a\in\R$ vérifient $\begin{cases}P(-1)=1\\P(1)=1\end{cases}$

> $P(-1)=1$ et $P(1)=1$ et $P'(0)=3$

Soit $P=aX^2+bX+c \in \R_2[X]$ tel que 
- $P(-1)=1$
- $P(1)=1$
- $P'(0)=3$

$(S):\begin{cases}a-b+c=1 \\ a+b+c = 1 \\ b=3\end{cases}$

Or $(S)\underset{L_2 \leftarrow L_2 - L_1}{\iff} \begin{cases}a-b+c = 1 \\ 2b = 0 \\ b = 3\end{cases}$

Et il n'existe donc pas de polynômes de $\R_2[X]$ vérifiant $P(-1)=1, P(1)=1$ et $P'(0)=3$

### Exercice 9

> Résoudre en fonction du paramètre réel $m$, les systèmes linéaires suivants:
>
> $(S_1)\begin{cases}mx-1 &= 1 \\ x+(m-2)y&=-1\end{cases}$

Alors $(S_1)\underset{L_2 \leftarrow L_2 + (m-2)L_1}{\iff}\begin{cases}mx-y = 1 \\ (m-1)^2x=m-3\end{cases}$

- Si $m = 1$

Alors $(S_1)\Rightarrow \begin{cases}x-y=1 \\ 0 =2\end{cases}$ 

Donc $(S_1)$ n'a pas de solutions.

- Si $m≠1$

Alors $(S_1)\iff \begin{cases}y = \frac{m+1}{(m-1)^2}\\ x = \frac{m-3}{(m-1)^2}\end{cases}$

Et donc $(S_1)$ a une unique solution, le couple $\left(\frac{m-3}{(m-1)^2}, \frac{m+1}{(m-1)^2}\right)$


