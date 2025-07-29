$\newcommand{\R}{\mathbb{R}}\newcommand{\sym}[1]{\underset{#1}{\sim}}$
# Exercice 1

> Trouver le polynôme de Taylor de degré $5$ approximant les fonctions suivantes au voisinage de $0$.

## Question 1
> $f_1(x) = \sin(2x)$

Pour $f_1$, le polynôme de Taylor est:
- $P_1(x) = 2x-\frac43x^3+\frac4{15}x^5$

*Aparté* - **Pour le retrouver** si oubli
$P_1(x) = f_1(0) + f_1'(0)x+f_1''(0)\frac{x^2}2+...+f_1^{(5)}(0)\frac{x^5}{5!}$

## Question 2
> $f_2(x) = e^{5x}$

Pour $f_2$,
- $P_2(x) = 1+5x+\frac{25}2x^2+\frac{125}6x^3+\frac{625}{24}x^4+\frac{625}{24}x^5+o(x^5)$

## Question 3
> $f_3(x) = \frac1{1+x}$

Pour $f_3,$
- $\forall x \in ]-1, 1[, P_3(x) = 1 - x + x^2 - x^3 + x^4 - x^5$

## Question 4
> $f_4(x) = \ln(1+x)$

Pour $f_5,$
- $P_4(x) = x-\frac{x^2}2+\frac{x^3}3 - \frac{x^4}4+\frac{x^5}5$

> [!warn]
> $P_3 ≈ P_4'$

# Exercice 2

> Trouver le polynôme de Taylor de degré $5$ approximant les fonctions suivantes au voisinage de $x_0:$

## Question 1
> $\sin(x)$ en $\frac{\pi}2$

Le polynôme est donné par:
- $\forall x \in \R$
- $P(x) = \sin\left(\frac\pi2\right)+\sin'(\frac\pi2) \cdot \left(x - \frac\pi2\right) + \sin''\left(\frac\pi2\right)\frac{(x-\frac\pi2)^2}2+...$
- $\phantom{P(x)}=1+0-\frac{(x-\frac\pi2)^2}2+0+\frac{(x-\frac\pi2)^4}{4!}+0$
Sinon,
- $\sin(x) = \sin(h+\frac\pi2)$ avec $h = x - \frac\pi2$
- Or, $\sin(h+\frac\pi2) = \cos(h)$

> $\ln(x)$ en $1$

Le polynôme est:
- $\forall x > 0, P(x) = 0 + 1 \cdot (x - 1) -\frac1{2}(x-1)^2+\frac13(x-1)^3-\frac14(x-1)^4+\frac15(x-1)^5$
Sinon,
- $\ln(x) = \ln(1+h)$ avec $h = (x-1)$

> $e^{-2x}$ en $\frac12$

Le polynôme est donné par:
- $\forall x\in\R, P(x) = e^{-1}-2e^{-1}(x-\frac12)+\frac{4e^{-1}}2(x-\frac12)^2 - \frac{8e^{-1}}{3!}(x-\frac12)^3+\frac{16e^{-1}}{4!}(x-\frac12)^4 - \frac{32e^{-1}}{5!}(x-\frac12)^5$

>  $\ln(2+x)$ en $2$

Le polynôme est donné par;
- $\forall x > -2, P(x) = h(4) + \frac14(x-2)-  \frac1{4^2 \cdot 2!}(x-2)^2+\frac2{4^3 \cdot 3!}(x-2)^3 - \frac{3!}{4^4 \cdot 4!}(x-2)^4+\frac{4!}{4^5 \cdot 5!}(x-2)^5$

# Exercice 4

> Calculer $l = \lim{x\to+\infty}\left(\tan\left(\frac1x\right)\right)^x$


**Par la formule de Taylor-Young,** on a,
$\tan(X) = \tan(0)+\tan'(0)X+o(X)$
$\phantom{\tan(X)} = 0+X+o(X)$
Donc,
$\left(\tan\left(\frac1x\right)\right)^x = e^{x\ln\left(\tan\left(\frac1x\right)\right)}$ 
$\phantom{\left(\tan\left(\frac1x\right)\right)} = e^{x\ln\left(\frac1x+o\left(\frac1x\right)\right)}$
$\phantom{\left(\tan\left(\frac1x\right)\right)} = e^{x\ln\left(\frac1x\right)+x\ln(1+o(1))}$
$\phantom{\left(\tan\left(\frac1x\right)\right)} = e^{x(-\ln(x)+\ln(1+o(1)))}$
$\phantom{\left(\tan\left(\frac1x\right)\right)} = e^{-x(\ln(x)-\ln(1+o(1)))}$
$\phantom{\left(\tan\left(\frac1x\right)\right)} = e^{-x\ln(x)+x\ln(1+o(1))}$
Donc $\lim{x\to+\infty}\left(\tan\left(\frac1x\right)\right)^x = 0$

> Donner un équivalent de $\left(\tan\left(\frac1x\right)\right)^x-l$
> lorsque $x \to +\infty$

Soit $x \in ]-\frac\pi2,\frac\pi2[$.
Par la formule de #Taylor-Young et puisque $X \to \tan(X)$ est impaire, on a:
- $\tan(X) = X+o(X^2)$
Donc, pour $x > \frac2\pi,$
- on pose $X = \frac1x$ et on a:
- $\left(\tan\left(\frac1x\right)\right)^x = e^{\frac1X\ln(X+o(X^2))}=e^{\frac{\ln(X)}{X}}e^{\frac1X\ln(1+o(X))}$
Par un **DL** du logarithme, on obtient:
- $\left(\tan\left(\frac1x\right)\right)^x = e^{\frac{\ln(X)}{X}}e^{\frac1X(o(X))} = e^{\frac{\ln(X)}{X}}e^{o(1)}$ 
Par un **DL** de la fonction exponentielle, on obtient:
- $\left(\tan\left(\frac1x\right)\right)^x = e^{\frac{\ln(X)}{X}}(1+\underset{X\to 0}{o(1)}) = e^{-x\ln(x)}$
Donc $\left(\tan\left(\frac1x\right)\right)^x \sim e^{-x\ln(x)} = \frac1{x^x}$

> [!info]
> **Rappel**, $f\sym{x \to +\infty} g$  s'il existe $h$ tel que $\cases{\lim{x \to +\infty}h(x) = 1 \\ f = gh}$


# Exercice 8

> Soit $f$ l'application de $\R$ dans $\R$ définie par $f(x) = \frac{x^3}{1+x^6}$.
> Calculer $f^{(n)}(0)$ pour tout $n \in \N$

**Cherchons DL en $0$ de $\frac1{1+x^6}$**
- Soit $x \in \R, n \in \N$
- Posons $X = x^6$
- On a:
	- $\frac1{1+X}=1-X+X^2-X^3+...+(-1)^nX^n+o(X^n)$
- Donc,
	- $\frac1{1+x^6} = 1 - x^6 + x^{12} - x^{x^18}+...+(-1^n)x^{6n}+o(x^{6n})$
- On a donc, 
	- $f(x) = x^3 - x^9 + x^{15}+...+(-1)^nx^{6n+3}+o(x^{6n+3})$
- Or, par la formule de **Taylor-Young**,
	- On a: 
		- $f(x) = f(0)+f'(0)x+\frac{f'(0)}2x^2+...+\frac{f^{(6n+3)}}{(6n+3)!}x^{6n+3}+o(x^{6n+3})$
	- On a deux $DL$s de $f$.
	- Or, le $DL$ d'une **fonction est unique**
	- Donc
		- $\forall x \in \R$
		- $f'(0) + \frac{f''(0)}2x^2+...+\frac{f^{(6n+3)}}{(6n+3)!} = x^3 - x^9 + ... + (-1)^nx^{6n+3}+o(x^{6n+3})$
		- ... on se sert des degrés et on résout (eg. $\frac{a}{3!}=1\iff a = 3!$)
- Donc, en particulier,
	- $f^{(n)}(0) = \cases{n! \text{ si }n = 6k+3\text{ aec }k \in 2\N \\ -n! \text{ si }n = 6k+3 \text{ avec }k\in2\N+1 \\ 0 \text{ sinon}}$
# Exercice 3

> Supposons que l'on veuille utiliser un développement de Taylor au voisinage de $0$ pour estimer la valeur de $\sin(2)$. Si nous voulions faire une erreur inférieure à $0.0000001$, à quel ordre devons-nous faire le calcul (ou quel degré de polynôme) ?

$\sin(2) = 2 - \frac{2^3}{3!} + \frac{2^5}{5!}-\frac{2^7}{7!}+\frac{2^9}{9!}+\epsilon$

> [!info]
> On sait que $\sin(2) = 0.9092974$

On trouve l'ordre à la calculatrice.

# Exercice 5

> Soit $f$ une fonction $\mathcal{C}^2$ sur $\R$, et soit $a \in \R$
> Montrer que:
> 
> $\frac{f(a+h)-f(a-h)}{2h} \underset{h \to 0}{\longrightarrow}f'(a)$

$f(a+h)= f(a)+ hf'(a) + \frac{h^2}2f''(a)+o(h^2)$
$f(a-h) = f(a) - hf'(a) + \frac{h^2}2f''(a)+o(h^2)$
$\frac{f(a+h)- f(a-h)}{2h} = f'(a) + o(h)$
$\frac{f(a+h)-f(a)}h = f'(a) + O(h)$

> Étudier la limite, pour $h \to 0$, de la quantité:
> 
> $\frac{f(a+h) - 2f(a) + f(a-h)}{h^2}$

Même chose mais avec la dérivée seconde.

# Exercice 10

> Donner le développement limité en $0$ des fonctions:
> 1. $x \mapsto \ln(\cos(x))$ (à l'ordre 6)
> 2. $x \mapsto \tan(x)$ (à l'ordre $7$)
> 3. $x \mapsto \sin(\tan(x))$ (à l'ordre $7$)
> 4. $x \mapsto (\ln(1+x))^2$ (à l'ordre 4)
> 5. $x \mapsto \exp(\sin(x))$ (à l'ordre 3)

## Question 1
> $x \mapsto \ln(\cos(x))$ (à l'ordre 6)

Pour $x \in \R,$
- $\cos(x) = 1 - \frac{x^2}2+\frac{x^3}{4!}-\frac{x^6}{6!}+o(x^6)$
	- Or, on sait que $\ln(1+X) = X - \frac{X^2}2+\frac{X^3}3+o(X^3)$
- $X \in ]-1;+\infty[$
- Donc, pour $x \in ]-\frac\pi2;\frac\pi2[$
- Posons $X = -\frac{x^2}2 + \frac{x^4}4 - \frac{x^6}{6!}$
- $\ln(\cos(x)) = \left(-\frac{x^2}2+\frac{x^4}{4!}-\frac{x^6}{6!}\right) - \frac12\left(-\frac{x^2}2+\frac{x^4}{4!}-\frac{x^6}{6!}\right)^2 + \frac13\left(-\frac{x^2}2+\frac{x^4}{4!}-\frac{x^6}{720}\right)^3 + o(x^6)$
- $\ln(\cos(x)) = -\frac{x^2}6-\frac{x^4}{12} - \frac{x^6}{45}+o(x^6)$


## Question 2
> $x \mapsto \tan(x)$ (à l'ordre $7$)

**Méthode 1 - Peu efficace**

> [!tips]
> Peu efficace car il faut passer à un rang supérieur (en prévision) pour garder le même ordre


$\ln(\cos(x))' = -\frac{\sin(x)}{\cos(x)} = -\tan(x)$
On a $\ln(\cos(x)) = \ln(1-\frac{x^2}2 + \frac{x^4}{4!} + \frac{x^6}{6!} - \frac{x^8}{8!} + o(x^8))$
On pose $h = -\frac{x^2}{2}+\frac{x^4}{4!}-\frac{x^6}{6!}+\frac{x^8}{8!}+o(x^8)$
$\ln(\cos(x)) = \ln(1+h)$
$\phantom{\ln(\cos(x))} = h - \frac{h^2}2+\frac{h^3}{3!}-\frac{h^4}{4!}+o(x^8)+(\frac12(\frac{x^4}4 + \frac{x^8}{4!^2}+o(x^8))) + (\frac16(-\frac{x^6}8+o(x^8)))+(-\frac1{24}(\frac{x^8}{256}+o(x^8)))$
$\phantom{\ln(\cos(x))} = -\frac{x^2}{2!}-\frac{x^4}{12}-\frac{x^6}{45}-\frac{x^8}{8!}-\frac{x^8}{2 \times 4!^2} - \frac{x^8}{4! \times 4 \times 8^2} + o(x^8)$
$\ln(\cos(x)) = -\frac{x^2}{2!} - \frac{x^4}{12}- \frac{x^6}{45} - \frac{x^8} + o(x^8)$
$\tan(x) = x + \frac{x^3}3 + \frac{2x^5}{15} + \frac{17x^7}{315}+o(x^7)$


**Méthode 2 - Méthode directe**
Soit $x \in ]-\frac\pi2;\frac\pi2[$
On a $\tan(x) = \frac{\sin(x)}{\cos(x)}$
- et $\sin(x) = x - \frac{x^3}{6}+\frac{x^5}{120}  - \frac{x^7}{7!}+o(x^7)$
- et $\cos(x) = 1 - \frac{x^2}2 + \frac{x^4}{4!} - \frac{x^6}{4!} - \frac{x^6}{6!} = o(x^6)$
On pose $h = \cos(x) - 1$ 
- Par définition de $x$, $h \in ]-1;0]$
On a $\frac1{1-h} =1 + h + h^2 + h^3+o(h^3)$
- Or, $h = \frac{x^2}2 - \frac{x^4}{4!} + \frac{x^6}{6!}+o(x^6)$
Donc,
- $\frac1{1-h} = 1 + \frac{x^2}2 - \frac{x^4}{4!} + \frac{x^6}{6!} + \frac{x^4}4 - \frac{x^6}{4!} + \frac{x^6}8+o(x^6)$
c'est-à-dire,
- $\frac1{\cos(x)} = 1+\frac{x^2}2+\frac{5x^4}{4!}+\frac{61}{6!}x^6$
- donc
$\tan(x) = (x - \frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+o(x^7))(1 + \frac{x^2}2 + \frac{5x^4}{4!}+\frac{61x^6}{6!}+o(x^6))$
$\phantom{\tan(x)} = x+\frac{x^3}3+\frac{2x^5}{15}+\frac{17}{315}x^7+o(x^7)$

## Question 3
> $x \mapsto \sin(\tan(x))$ (à l'ordre $7$)

Soit $x \in ]-\frac\pi2;\frac\pi2[$
- On a $\sin(h) = h-  \frac{h^3}{3!}+\frac{h^5}{5!}-\frac{h^7}{7!}+o(h^7)$
Donc, d'après $\fbox2$
- $\sin(\tan(x)) = x + \frac{x^3}{3!}- \frac{x^5}{40} - \frac{55x^7}{1008}+o(x^7)$

## Question 4
> $x \mapsto (\ln(1+x))^2$ (à l'ordre 4)

$\ln(1+x) = x - \frac{x^2}2 + \frac{x^3}3 - \frac{x^4}4 + o(x^4)$
donc,
$(\ln(1+x))^2 = ((x - \frac{x^2}2)^2 + o(x^2))^2$
$\phantom{(\ln(1+x))^2}= x^2-x^3+\frac{11x^4}{12}+o(x^4)$

## Question 5
> $x \mapsto \exp(\sin(x))$ (à l'ordre 3)

Soit $x \in \R,$ on a:
- $\sin(x) = x - \frac{x^3}{3!}+o(x^3)$
- Et,
	- $e^{\sin(x)}=1+\sin(x)+\frac{\sin(x)^2}2 + \frac{\sin(x)^3}{6!}+o(\sin(x)^3)$
- Donc $e^{\sin(x)} = 1+ x + \frac{x^2}2 + 0 + o(x^3)$

# Exercice 7

$$