---
lang: fr
desc: Series numériques et intégrales généralisées. TD 2
date: 24/09/2025
---
> [!info]
> TD présenté par **Mme. Bigot**

$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}\newcommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}\newcommand{\piv}[1]{\underset{\begin{array}{l}#1\end{array}}{=}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\com}{\text{com}}\newcommand{\td}[1]{\underset{#1}{\longrightarrow}}$
# Exercice 1

> Soit $f$ une fonction de classe $\mc{C}^4$ au voisinage de $x_0 = 0$.
> 1. En vertu de quel résultat $f$ admet-elle un développement limité à l'ordre $4$ en $x_0 = 0$ ?
> 2. On suppose que $f(0)=2, f'(0) = 0, f''(0) = -4, f^{(3)}(0) = 0$ et $f^{(4)}(0)=6$. Donner le D.L de $f$ à l'ordre $4$ en $0$.
> 3. On suppose que $f(c)=1-x+3x^2+8x^4+o(x^4)$. Donner la valeur de $f^{(k)}(0)$ pour $k=0,1,...,4$.


## Question 1

> En vertu de quel résultat $f$ admet-elle un développement limité à l'ordre $4$ en $x_0 = 0$ ?

Il s'agit du théorème de Taylor. 

## Question 2

> On suppose que $f(0)=2, f'(0) = 0, f''(0) = -4, f^{(3)}(0) = 0$ et $f^{(4)}(0)=6$. Donner le D.L de $f$ à l'ordre $4$ en $0$.

> [!tips]
> On applique la formule de Taylor-Young

$f(x) = f(0) + f'(0)x + \frac{f''(0)}{2}x^2+\frac{f^{(3)}(0)}{3!}x^3+\frac{f^{(4)}(0)}{4!}x^4 + \ub{o(x^4)}{x\to 0}$
$\phantom{f(x)} = 2 - 2x^2 + \frac14x^4 + \ub{o(x^4)}{x\to 0}$

## Question 3

> On suppose que $f(c)=1-x+3x^2+8x^4+o(x^4)$. Donner la valeur de $f^{(k)}(0)$ pour $k=0,1,...,4$.

$f(x) = 1 - x+ 3x^2 + 8x^4 + o(x^4)$

On sait de plus par la formule de Taylor-Young que:
- $f(x) = f(0) = f'(0)x + \frac{f''(0)}2 + \frac{f^{(3)}(0)}{3!} + \frac{f^{(4)}(0)}{4!}x^4 + \ub{o(x^4)}{x\to 0}$
Il y a unicité du DL alors par identification:
- $f(0) = 1$
- $f'(0) = -1$
- $\frac{f''(0)}2 = 3 \iff f''(0) = 6$
- $\frac{f^{(3)}(0)}{3!} = 0 \iff f^{(3)}(0) = 0$
- $\frac{f^{(4)}(0)}{4!} = 8 \iff f^{(4)}(0) = 8 \times 4! = 192$.

# Exercice 2

> En utilisant une des trois formules de Taylor, montrer les inégalités suivantes:
> 1. $\forall x \in \R, e^x ≥ 1 + x + \frac{x^2}2 + \frac{x^3}6$
> 2. $\forall x \in [0,\pi], \sin(x) ≥ x - \frac{x^3}6$

## Question 1

> $\forall x \in \R, e^x ≥ 1 + x + \frac{x^2}2 + \frac{x^3}6$

La fonction $\exp$ est de classe $\mc{C}^{\infty}$ sur $\R$, on peut donc appliquer la formule de Taylor-Lagrange sur $[0,x]$ avec $x \in \R$ à l'ordre $3$.
- $\exists c \in [0,x], f(x) = f(0) + f'(0)x+\frac{f''(0)}{2}x^2 + \frac{f^{(3)}(0)}{3!}x^3+\frac{f^{(4)}(c)}{4!}x^4$
- i.e $e^x = 1+x + \frac{x^2}2 + \frac{x^3}6+\frac{e^c}{24}x^4$

Or,
- $\rcases{e^c > 0 \\ 24 > 0 \\ x^4 ≥ 0}\Rightarrow \frac{e^c}{24}x^4 ≥ 0$
Donc,
- $e^x ≥ 1 + x + \frac{x^2}2 + \frac{x^3}6$
## Question 2

> $\forall x \in [0,\pi], \sin(x) ≥ x - \frac{x^3}6$

La fonction est de classe $\mc{C}^{+\infty}$ sur $\R$, on peut don appliquer la formule de Taylor Lagrange sur $[0,x]$ avec $x \in [0, \pi]$, à l'ordre $3$,
- $\exists a \in [0,x], \sin(x) = \sin(0) + \sin'(0)x + \frac{\sin''(0)}{2!}x^2+\frac{\sin^{(3)}(0)}{3!}x^3 + \frac{\sin^{(4)}(a)}{4!}x^4$ 
Or,
- $\sin'(x) = \cos(x)$
- $\sin''(x)= -\sin(x)$
- $\sin^{(3)}(x)$
- $\sin^{(4)}x = \sin(x)$

Donc,
- $\sin(x) = x - \frac{x^3}6 + \frac{\sin(a)}{24}x^4$
Or,
- $\cases{x \in [0, \pi] \\ a \in [0,x]} \Rightarrow a \in [0,\pi]\Rightarrow \sin(a) ≥ 0$
- $\frac{x^4}{24}≥ 0$
Donc,
- $\frac{\sin(a)}{24}x^4 ≥ 0$
Finalement,
- $\sin(x) = x - \frac{x^3}{6}+\frac{\sin(a)}{24}x^4 ≥ x-\frac{x^3}6$


# Exercice 3

> 1. Soit $f$ de classe $\mc{C}^2$ au voisinage de $x_0$. Donner $\lim{h\to 0}\frac{f'(x_0)- \frac{f(x_0+h)-f(x_0)}{h}}{h}$
> 2. Soit $f$ de classe $\mc{C}^2$ au voisinage de $x_0$. Donner $\lim{h\to 0}\frac{f(x_0+h)+f(x_0-h)-2f(x_0)}{h^2}$


$f$ de classe $\mc{C}^2$ au voisinage de $x_0$,
## Question 1

>  Soit $f$ de classe $\mc{C}^2$ au voisinage de $x_0$. Donner $\lim{h\to 0}\frac{f'(x_0)- \frac{f(x_0+h)-f(x_0)}{h}}{h}$

On a $f'(x_0) - \frac{f(x_0+h) - f(x_0)}{h} = \frac{hf'(x_0)-(f(x_0+h) - f(x_0))}{h}$
- $= \frac{-(f(x_0+h)-f(x_0)-hf'(x_0))}{h}$
La fonction $f$ au $\mc{C}^2$ au voisinage de $x_0$ alors par la formule e Taylor-Young à l'ordre $2$ entre $x_0$ et $x_0+h$:
- $f(x_0 + h) = f(x_0) + f'(x_0) [(x_0 + h) - x_0] + \frac{f''(x_0)}{2}((x_0+h)-x_0)^2+o(((x_0+h)-x_0)^2)$ 
- $= f(x_0) + f'(x_0)h + \frac{f''(x_0)}2h^2 + \ub{o(h^2)}{h\to 0}$
Donc,
- $\frac{f'(x_0) - \frac{f(x_0+h) - f(x_0)}{h}}h = -\frac{f(x_0+h) - f(x_0) - hf'(x_0)}{h}$
- $= -\frac{\frac{f''(x_0)}{2}h^2+o(h^2)}{h^2}$
- $= -\frac{f''(x_0)}2 + \ub{u(1)}{h\to 0}$
- $\td{h\to 0}- \frac{f''(x_0)}2$

## Question 2

> Soit $f$ de classe $\mc{C}^2$ au voisinage de $x_0$. Donner $\lim{h\to 0}\frac{f(x_0+h)+f(x_0-h)-2f(x_0)}{h^2}$

La fonction $f$ est de classe $\mc{C}^2$ au voisinage de $x_0$,
- on peut donc, pour $h$ petit, appliquer la formule de #Taylor-Young  à l'ordre 2. 
- entre $x_0$ et $x_0 + h$.
	- $f(x_0 + h) = f(x_0) + f'(x_0)h + \frac{f''(x_0)}2h^2 + o(h^2)$
- entre $x_0$ et $x_0-h$
	- $f(x_0 - h) = f(x_0) - f'(x_0)h + \frac{f''(x_0)}2h^2 + o(h^2)$
- En sommant les deux égalités:
	- $f(x_0 + h) + f(x_0 - h) = 2f(x_0) + 0 + 2 \frac{f''(x_0)}2+o(h^2)$
- Donc:
	- $\frac{f(x_0+h)+f(x_0 - h) - 2f(x_0)}{h} = \frac{f''(x_0)h^2+o(h^2)}{h^2}$
	- $= f''(x_0) + \ub{o(1)}{h\to 0}$
	- $\td{h \to 0} f''(x_0)$

# Exercice 4

> Soit $f$ une fonction de classe $\mc{C}^2$ au voisinage de $x_0 = 0$ telle que $f(0) = 0$
> 1. On pose $g(x) = f(x)/x$. Montrer que la fonction $g$ se prolonge par continuité en $x_0 = 0$ en une fonction de classe $\mc{C}^1$ en $x_0 = 0$. Que vaut $g(0)$ ?
> 2. Que peut-on en déduire pour les fonctions $\frac{\sin(x)}x, \frac{e^x - 1}{x}$ et $\frac{\cos(x)-1}{x^2}$ ?


## Question 1

> On pose $g(x) = f(x)/x$. Montrer que la fonction $g$ se prolonge par continuité en $x_0 = 0$ en une fonction de classe $\mc{C}^1$ en $x_0 = 0$. Que vaut $g(0)$ ?

Soit $g : x \mapsto \frac{f(x)}x$

Par quotient de fonctions de classe $\mc{C}^1,$ la fonction $g$ sera $\mc{C}^1$ sur $]-a,0[$ et $]0,a[$.
Pour $x ≠ 0$,
- $g(x) = \frac{f(x)}x = \frac{f(x) - 0}{x -0} = \frac{f(x) - f(0)}{x-0}$
Or, $f$ est dérivable en $0$, donc:
- $\frac{f(x) - f(0)}{x - o}\td{x \to 0}f'(0)$
Ainsi, $g$ est prolongeable par continuité en $0$ et $g(0) = \lim{x\to 0} g(x) = f'(0)$ . 
En appliquant une forme de Taylor-Young à l'ordre $2$ de $f$ en $0$, pour $x$ dans un voisinage de $0$.
- $f(x) = \ov{f(0)}{= 0} + f'(0)x + \frac{f''(0)}{2}x^2 + o(x^2)+o(x^2)$ 
Alors,
- $g(x) = f'(0) + \frac{f''(0)}{2}x+o(1)$
D'où,
- $\frac{g(x)-g(0)}{x-0} = \frac{g(x) - f'(0)}{x} = \frac{f''(0)}{2} + o(1)$
Donc, par le théorème de prolongement de la dérivée,  est de classe $\mc{C}^1$ au voisinage de $0$ et $g'(0)=\frac{f''(0)}2$.
## Question 2

>  Que peut-on en déduire pour les fonctions $\frac{\sin(x)}x, \frac{e^x - 1}{x}$ et $\frac{\cos(x)-1}{x^2}$ ?

### Question 2.a

Soit $g_1 : x \mapsto \frac{\sin(x)}x$
On peut écrire:
- $g_1(x) = \frac{f_1(x)}x$ avec $f_1 = \sin$ qui est de classe $\mc{C}^\infty$ sur $\R$.
- Donc, en particulier de classe $\mc{C}^2$.
D'après $\fbox1$
- $g_1$ est prolongeable par continuité en une fonction de classe $\mc{C}^1$ en posant:
	- $g_1 : x \mapsto \cases{\frac{\sin(x)}x \text{ si }x ≠ 0 \\ 1 \text{ si }x = 0 \text{ car }\sin'(0) = \cos(0) = 1}$
- et, $g_1'(0)=\frac{f_1''(0)}2 = 0$

# Exercice 5

> 1. Soit $f(x) = 1+x^2+x^6\ln|x|$. À quel ordre $f$ admet-elle un développement limité en $x_0=0$ ? 
> 2. Soit $g(x) = x^\pi$. À quel ordre $g$ admet-elle un développement limité en $x_0 = 0$?
## Question 1

> Soit $f(x) = 1+x^2+x^6\ln|x|$. À quel ordre $f$ admet-elle un développement limité en $x_0=0$ ? 

Soit $f:x \mapsto 1 + x^2 + x^6 \ln|x|$
- On remarque que $\frac{x^6\ln|x|}{x^5} = x\ln|x| \td{\align{x \to 0 \\ x ≠ 0}}0$
	- Par croissance comparées,
	- donc,
		- $x^6 \ln|x| = \ub{o(x^5)}{x\to 0}$
	- D'où
		- $f(x) = 1 + x^2 + o(x^5)$
	- Ainsi, $f$ admet un DL à l'ordre $5$
- Supposons par l'absurde que $f$ admette un DL à l'ordre 6. Alors il existe $a_6 \in \R$ tel que:
	- $\phantom{\iff} f(x) = 1 + x^2 + a_6x^6 + o(x^6)$
	- $\iff 1 + x^2 + x^6 \ln|x| = 1 + x^2 + a_6 x^6 + o(x^6)$
	- $\iff x^6 (\ln|x| - a_6) = \ub{o(x^6)}{x\to 0}$
- Or,
	- $\lim{x\to 0}(\ln|x| - a_6) = -\infty$ **ABSURDE**
- Donc $f$ admet des DL jusqu'à l'ordre 5 mais pas au-delà.

## Question 2

> Soit $g(x) = x^\pi$. À quel ordre $g$ admet-elle un développement limité en $x_0 = 0$?

Pour $x ≠ 0$,
- $\frac{x^\pi}{x^3} = x^{\pi - 3}$ et $\pi - 3 > 0$
Donc,
- $\lim{x\to 0}\frac{x^\pi}{x^3} = \lim{x\to 0}x^{\pi -3}=0$
Ainsi,
- $g(x)=\ub{o(x)}{x \to 0}$ donc $g$ admet un DL à l'ordre 3 en 0.
- Supposons que $g$ admette en $0$ un DL à l'ordre 4, alors il existe $a_4 \in \R$ tel que:
	- $\phantom{\iff} g(x) = a_4x^4 + \ub{o(x^4)}{x \to 0}$
	- $\iff x^\pi = a_4x^4 + \ub{o(x^4)}{x \to 0}$
	- $\iff x^4(x^{\pi - 4} - a_4) = \ub{o(x^4)}{x\to 0}$
- Mais,
	- $\frac{x^4(x^{\pi -4}-a_4)}{x^4} = x^{\ov{\pi - 4}{\to 0}}-a_4 \td{x \to 0^+}+\infty$
- Donc $g$ admet des DL jusqu'à l'ordre 3 mais pas à un ordre supérieur. 
# Exercice 6

> Soit $f$ définie sur $\R$ par:
> - $f(x) = \cases{x^3\sin\left(\frac1x\right) \text{ si }x≠0 \\ 0 \text{ si }x = 0}$
> 1. Montrer que $f$ admet un DL à l'ordre $2$ en $0$.
> 2. Montrer que $f$ n'est pas deux fois dérivable en $0$.


## Question 1

> Montrer que $f$ admet un DL à l'ordre $2$ en $0$.

On a pour $x ≠ 0$,
- $\frac{f(x)}{x^2} = x\sin\left(\frac1x\right)$ et $|\sin(\frac1x)| ≤ 1$
Donc par comparaison,
- $\frac{f(x)}x^2 \td{x \to 0}0$ i.e $f(x) \ub{= o}{x\to 0}(x^2)$

## Question 2

> Montrer que $f$ n'est pas deux fois dérivable en $0$.

Sur $\R^*$, on a pas de problème.
Pour $x ≠ 0$
- $\frac{f(x) - f(0)}{x- 0} = \frac{x^3\sin\left(\frac1x\right) - 0}{x}$ 
- $= x^2\sin\left(\frac1x\right)$
- $\td{x \to 0 }0$ car $\sin\left(\frac1x\right)$ est borné.
Donc, $f$ est dérivable en $0$ et $f'(0)=0$

Pour $x≠ 0$,
- $f'(x) = 3x^2\sin\frac1x + x^3 \times -\frac1{x^2}\sin'(\frac1x)$
- $\phantom{f'(x)} = 3x^2\sin\frac1{x}-x\cos(\frac1x)$
Donc,
- $\frac{f'(x) - f'(0)}{x-0} = 3x\sin\frac1x - \cos\frac1x$
- Mais $\cos(\frac1x)$ n'admet pas de limite en $0$,
- donc le taux d'accroissement de $f'$ en $0$ n'admet pas de limite, autrement dit $f$ n'est pas 2 fois dérivable en $0$. 

# Exercice 7

> Donner le DL en $x_0=0$ des fonctions suivantes à l'ordre indiqué.
> 1. $f_1(x) = \frac1{1-x}-e^{x}$ (ordre 4)
> 2. $f_2(x) = \sqrt{1+x} - \sqrt{1-x}$ (ordre 4)
> 3. $f_3(x) = \sin(x)\cos(2x)$ (ordre 6)
> 4. $f_4(x) = \cos(x)\ln(1+x)$ (ordre 5)
> 5. $f_5(x) = (\ln(1+x))^2$ (ordre 5)
> 6. $f_6(x) = \tan(x)$ (ordre 5)
> 7. $f_7(x) = \frac1{1+x+x^2}$ (ordre 4)
> 8. $f_8(x) = \frac{\ln(1+x)}{\sin(x)}$ (ordre 4)
> 9. $f_9(x) = \frac{\sin(x) - 1}{1+\cos(x)}$ (ordre 4)


## Question 1

> $f_1(x) = \frac1{1-x}-e^{x}$ (ordre 4)

- $\frac1{1-x}=1+x+x^2+x^3+x^4 + o()e^4$
- $e^x = 1+x+\frac{x^2}2+\frac{x^3}6+\frac{x^4}{24}+o(x^4)$
alors,
- $f_1(x) = (1+x+x^2+x^3+x^4+o(x^4)) - (1+x+\frac{x^2}2+\frac{x^3}6+\frac{x^4}{24}+o(x^4))$
- $\phantom{f_1(x)} = \frac{x^2}2 + \frac{5}6x^3 + \frac{23}{24}x^4 + o(x^4)$

## Question 2

> $f_2(x) = \sqrt{1+x} - \sqrt{1-x}$ (ordre 4)

$\sqrt{1+x} = (1+x)^{1/2}$
$\phantom{\sqrt{1+x}} = 1 + \frac12x + \frac{\frac12 \times \m{-\frac12}}{2}x^2+\frac{\frac12\m{-\frac12}\m{-\frac52}}6x^3 + \frac{\frac12\m{-\frac12}\m{-\frac32}}{24}x^4 + o(x^4)$  
$\phantom{\sqrt{1+x}} = 1 + \frac{x}2 - \frac{x^2}8 + \frac{3}{48}x^3 - \frac{15}{16 \times 24}x^4 + \ub{o(x^4)}{x \to 0}$
$\sqrt{1+x} = \sqrt{1 + (-x)} = 1 + \frac{(-x)}2 - \frac{(-x)^2}8 + \frac{3(-x)^3}{48} - \frac{15(-x)^4}{16 \times 24} + \ub{o(x^4)}{x\to 0}$
$= 1 - \frac{x}2 - \frac{x^2}8 - \frac{3x^3}{48}- \frac{15x^4}{16 \times 24}+o(x^4)$

**Alors**,
$\sqrt{1+x}+\sqrt{1-x} = 2 - \frac28x^2 - \frac{2 \times 15x^4}{16 \times 24} + o(x^4)$
$\phantom{\sqrt{1+x}+\sqrt{1-x}} = 2 - \frac14x^2 - \frac{5}{64}x^4 + o(x^4)$

## Question 3

> $f_3(x) = \sin(x)\cos(2x)$ (ordre 6)

On écrit:
- $\sin(x) = x - \frac{x^3}6 + \frac{x^5}{120} + o(x^6)$
- $\cos(2x) = 1 - \frac{(2x)^2}{2} + \frac{(2x)^4}{24} - \frac{(2x)^6}{720}+o(x^6)$
- $\phantom{\cos(2x)} = 1 - 2x^2 + \frac{2x^4}3+\frac{2x^6}{3 \times 5 \times 3} + o(x^6)$
Alors,
- $f_3(x) = \left(x - \frac{x^3}6 + \frac{x^5}{120} + o(x^6)\right) \cdot \left(1 - 2x^2 + \frac{2x^4}3 - \frac{2x^6}{45} + o(x^6)\right)$
- $\phantom{f_3(x)}= x -2x^3 + \frac232x^5-\frac{x^3}6 + \frac{x^5}{3} + \frac{x^5}{120}+o(x^6)$
- $\phantom{f_3(x)} = x-\frac{13}6x^3 + \frac{121}{120}x^5 + o(x^6)$

## Question 4

> $f_4(x) = \cos(x)\ln(1+x)$ (ordre 5)

D'une part,
 - $\cos(x) = 1 - \frac{x^2}2 + \frac{x^4}{24} + o(x^5)$
 - $\ln(1+x) = x - \frac{x^2}{2}+\frac{x^3}3-\frac{x^4}4 + \frac{x^5}{5}+o(x^5)$
D'autre part,
- $f_4(x) = (1 - \frac12x^2 + \frac{x^4}{24 + o(x^5)})(x-\frac{x^2}2 + \frac{x^3}3 - \frac{x^4}4 + \frac{x^5}5 + o(x^5))$
- $\phantom{f_4(x)} = x -\frac{x^2}2 - \frac{x^3}3 - \frac{x^4}4 + \frac{x^5}5 - \frac{x^3}2 + \frac{x^4}4 - \frac{x^5}6 + \frac{x^5}24 + o(x^5)$
- $\phantom{f_4(x)} = x-\frac{x^2}2 - \frac{x^3}6 + \frac{3}{40}x^5 + o(x^5)$


## Question 5

> $f_5(x) = (\ln(1+x))^2$ (ordre 5)

On écrit:
- $\ln(1+x)^2 = (x-\frac{x^2}2+\frac{x^3}3 - \frac{x^4}4 + \frac{x^5}5 + o(x^5))^2$
- $\phantom{\ln(1+x)^2} = x^2+\left(\frac{-x}2\right)^2+2x\left(-\frac{x^2}2\right) + 2x\frac{x^3}3 + 2x(-\frac{-x^4}{4}) + 2(-\frac{x^2}2)\frac{x^3}{3} + o(x^5)$
- $\phantom{\ln(1+x)^2} = x^2+\frac{x^4}4 - x^3 + \frac{2x^4}3 - \frac{x^5}2 -\frac{x^5}3 o(x^5)$
- $\phantom{\ln(1+x)^5} = x^2 - x^3 + \frac{11}{12}x^4 - \frac{5}{6}x^5 + o(x^5)$

## Question 6

> $f_6(x) = \tan(x)$ (ordre 5)

**Méthode 1** - Produit

On écrit $\tan(x) = \frac{\sin(x)}{\cos(x)} = \sin(x) \cdot \frac1{\cos(x)}$
- $= \sin(x) \times \frac1{1 + (\cos(x) - 1)}$
Or,
- quand $x\to 0, u = \cos(x) - 1 \td{x\to 0}0$
- $\frac1{1+u}=1-u+u^2 - u^3 + u^4 - u^5 + o(u^5)$
- $u = 1 - \frac{x^2}2 + \frac{x^4}{24} + o(x^5)-1 = -\frac{x}2^2 + \frac{x^4}{24}+o(x^5)$
	 - $u^2 = \frac{x^4}4 + o(x^5)$
 - $u^3 = u^4 = u^5 = o(x^5)$
Donc,
- $\frac1{\cos(x)} = \frac1{1 + (\cos(x) - 1)} = 1 - (-\frac{x^2}2 + \frac{x^4}{24} + o(x^5)) + \frac{x^4}4 + o(x^5)$ 
- $= 1 + \frac{x^2}{2}+\frac{5x^4}{24}+o(x^5)$
Et, 
- $\sin(x) = x - \frac{x^3}6 + \frac{x^5}{120} + o(x^5)$
Donc,
- $\frac{\sin(x)}{\cos(x)} = x - \frac{x^3}6 + \frac{x^5}{120} + \frac{x^3}2 - \frac{x^5}{12} + \frac{5x^5}{24} + o(x^5)$
- $= x+\frac{x^3}{3}+\frac{2x^5}{15}+o(x^5)$

**Méthode 2** - Division euclidienne

$\sin(x) = x - \frac{x^3}6 + \frac{x^5}{120} + o(x^5)$
$\cos(x) = 1 - \frac{x^2}2 + \frac{x^4}4 + o(x^5)$
On écrit:

$\begin{array}{l|}X - \frac{X^3}6 + \frac{X^5}{120}  \\ -(X-\frac{X^3}2 + \frac{X^5}{24}) \\ \hline \frac{X^3}3 - \frac{X^5}{30} \\ -(\frac{X^3}3 - \frac{X^5}{6}+o(X^5)) \\ \hline \\ \frac{2X^5}{15} + o(X^5) \\ -(\frac{2X^5}{15} + o(X^5))\end{array}$ $\align{1-\frac{X^2}2 + \frac{X^4}4 \\ \hline X \\ \\ \\ \\ \\ \\ \\ }$

Alors,
- $\frac{\sin(x)}{\cos(x)} = x + \frac{x^3}3 + \frac{2x^5}{15} + o(x^5)$

## Question 7

> $f_7(x) = \frac1{1+x+x^2}$ (ordre 4)

**Méthode 1** - Division euclidienne

Effectuons la division euclidienne,

$\begin{array}{l|l}1 & \frac{1+X+X^2}{1-X+X^3} \\ -(1 + X + X^2) \\ \overline{X^3} \\ -(X^3+X^4+o(X^4)) \\ \overline{-X^4 + o(X^4)} \\ -(-X^4) \\ o(X^4)\end{array}$



**Méthode 2**

Posons $u = x+x^2, u \td{x \to 0} 0$ 
On a:
- $\frac1{1+u} = 1 - u + u^2 - u^3 + u^4 + o(u^4)$
- $u = x +x^2$
- $u^2 = x^2 + 2x^3 + x^4$
- $u^3 = x^3 +3x^2 \times x^2 + o(x^4)$
- $u^4 = x^4 + o(x^4)$

Donc,
- $\frac1{1+(x + x^2)} = 1 - (x+x^2) + (x^2 + 2x^3 + x^4) - (x^3 + 3x^4)+x^4+o(x^4)$
- $= 1 - x+x^3 - x^4 + o(x^4)$

## Question 8

>  $f_8(x) = \frac{\ln(1+x)}{\sin(x)}$ (ordre 4)

On a:
- $\ln(1+x) = x -\frac{x^2}2 + \frac{x^3}3 - \frac{x^4}4 + \frac{x^5}{5} o(x^4)$
- $\sin(x) = x - \frac{x^3}{6} + \frac{x^5}{5!} + o(x^4)$
Effectuons la division euclidienne, (en factorisant par $x$ pour simplifier les calculs)
- On obtient $1 - \frac{X}2 + \frac{X^2}2$

$\frac{\ln(1+x)}{\sin(x)} = 1 - \frac{x}2 + \frac{x^2}2 - \frac{x^3}3 + \frac{11}{40}x^4 + o(x^4)$
# Exercice 8

> Donner le Dl en $x_0 = 0$ des fonctions suivantes à l'ordre indiqué:
> 1. $f_1(x) = \ln\left(1 + \frac{\sin(x)}x \right)$ ordre 4
> 2. $f_2(x) = e^{\sin(x)}$ ordre 4
> 3. $f_3(x) = (\sin(x))^6$ ordre 9
> 4. $f_4(x) = \arctan(x)$ ordre 7
> 5. $f_5(x) = \arccos(x)$ ordre 5


# Exercice 9

> 1. Calculer les limites suivantes:
> 	- $\lim{x\to 0}\frac{\cos(x) - \sqrt{1 - x^2}}{x^4}$ 
> 	- $\lim{x\to 0}\frac{(e^x - \cos(x)^2)\sin(x^2)}{\sin(x) - x}$
> 	- $\lim{x\to 0}\left(\frac{a^{1/x}+b^{1/x}}2\right)^{1/x}$ 
> 2. Donner un équivalent en $x_0 = 0$ pour les fonctions suivantes,
> 	- $f_1(x) = \sin(x) - x$
> 	- $f_2(x) = e^{\cos(x)}-e^{\cos(2x)}$
> 	- $f_3(x) = x^x - e^x$

# Exercice 10

> On considère la fonction $f$ définie par $f(x) = \frac{\cos(x)}{1-x}$
> 1. Donner l'ensemble de définition de $f$
> 2. Déterminer le DL à l'ordre $3$ en $0$ de la fonction $f$
> 3. En déduire les valeurs de $f'(0), f''(0)$ et $f^{(3)}(0)$
> 4. En déduire l'équation de la tangente à la courbe de $f$ en $0$, ainsi que la position relative de la courbe par rapport à cette tangente.

# Exercice 11

> Calculer le développement limité des foonctions ci-dessous, aux points et aux ordres indiqués.
> 1. $f_1(x) = \cos(x)$ en $\frac\pi4$ à l'ordre 3
> 2. $f_2(x) = \frac1x$ en $3$ à l'ordre $2$
> 3. $f_3(x) = \sqrt{x}$ en $4$ à l'ordre $2$
> 4. $f_4(x) = e^{1-x}$ en $-1$ à l'ordre $3$.
> 5. $f_5(x) = \frac{\ln(x)}{x^2 - 1}$ en $1$ à l'ordre $2$
> 6. $f_6(x) = 2x-x^2$ en $2$ à l'ordre $2$


# Exercice 12

> Donner le DL en $+\infty$ des fonctions suivantes et donner leur asymptote ainsi que la position relative de leur graphe et de leur asymptote.
> 1. $f_1(x) = x^2\ln\m{\frac{x+1}x}$
> 2. $f_2(x) = x\exp\m{\frac{2x}{x^2-1}}$
> 3. $f_3(x) = \sqrt{x^2+4x+2}$

# Exercice 13

> On considère la fonction $f$ définie par $f(x) = xe^{x^2}$
> 1. Montrer que $f$ est bijective de $\R$ dans $\R$.
> 2. Montrer que $f^{-1}$ est de classe $\mc{C}^\infty$ sur $\R$ et y est impaire.
> 3. Montrer que $f$ admet un DL en $0$ à l'ordre $4$ et donner celui-ci.

# Exercice 14

> Pour $x \in \R,$ on définit la suite $\{\mc{S}_n(x)\}_{n ≥ 1}$ par $\mc{S}_n(x) = \sun{k=1}n (-1)^{k+1}\frac{x^k}k$
> 1. Montrer que pour $x \in ]-1,1]$ la suite $\{\mc{S}_n(x)\}_{n ≥ 1}$ converge vers $\ln(1+x)$
> 2. En déduire la valeur de $\mc{S}_n(x) = \sun{k=1}{+\infty}\frac{(-1)^k}{k}$

