
$\newcommand{\R}{\mathbb{R}}\newcommand{\N}{\mathbb{N}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\ncr}[2]{\begin{pmatrix}#1 \\ #2\end{pmatrix}}$
# Exercice 4

> Soit $f:\R \to \R$ la fonction définie par $f(x) = \cases{x\sin(e^{1/x}) \text{ si }x≠0 \\ 0 \text{ si }x=0}$
> Montrer que $f$ est continue sur $\R$, et dérivable sur $\R^*$. 

Soit $x \in \R^*$ est continue comme produit et composé de fonctions continues. 
Soit $x \in \R,$ puisque $|\sin(e^{1/x})| ≤ 1$
- $|f(x)| ≤ |x|$
- Donc, par encadrement,
- Vrai aussi pour $x=0$
- Donc par encadrement, 
	- $\lim{x\to 0}f(x) = 0$
- Donc $f$ est continue en $0$. 

> Calculer $f'(x)$ pour tout $x≠0$

Soit $x\in\R^*,$ on a:
- $f'(x) = \sin(e^{1/x})+x(\sin(e^{1/x}))'$
- $\phantom{f'(x)}= \sin(e^{1/x})+x(e^{1/x})'\cos(e^{1/x})$
- $\phantom{f'(x)} = \sin(e^{1/x}) + x(-\frac1{x^2}e^{1/x})\cos(e^{1/x})$
- $f'(x) = \sin(e^{1/x})-\frac1xe^{1/x}\cos(e^{1/x})$

> Étudier la dérivabilité à gauche et à droite de $f$ en $0$. La fonction $f$ est-elle dérivable sur $\R$. 

$\newcommand{\m}[1]{\begin{matrix}#1\end{matrix}}$
**Dérivabilité à gauche**
Soit $x\in\R^*$, on a $\frac{f(x)-0}{x-0}=\sin(e^{1/x})$ 
- On a $\lim{\m{x\to0 \\ x < 0}}\frac{1}{x} = -\infty$
- donc $\lim{\m{x\to0 \\ x<0}}e^{1/x}=0$
- Donc, par continuité de sinus,
	- $\lim{\m{x\to0 \\ x<0}}\frac{f(x)}x=0$

**Dérivabilité à droite

---
*Brouillon*
$\sin(e^{1/x}) = 1 \Leftarrow e^{1/x}=\frac\pi2+2k\pi$
$\phantom{\sin(e^{1/x})} \Leftarrow \frac1x = \ln(\frac\pi2+2k\pi)$
$\phantom{\sin(e^{1/x})} \Leftarrow x = \frac1{\ln(\frac\pi2+2k\pi)}$
---
Considérons $(u_n)_{n\in\N}$ et $(v_n)_{n\in\N}$ définies par:
- $\forall n\in \N, u_n = \frac1{\ln(\frac\pi2+2\pi n)}$
- $\forall n \in \N, v_n = \frac1{\ln(\frac{3\pi}2+2\pi n)}$
$\cases{\lim{n\to+\infty}u_n = \lim{n\to+\infty}v_n = 0^+ \\ \text{et} \\ \lim{n\to+\infty}\frac{f(u_n)}{u_n}=1 ≠ \lim{n\to+\infty}\frac{f(v_n)}{v_n}=-1}$
Donc, $f$ n'est pas dérivable à droite en $0$ et donc n'est pas dérivable en $0$. 
# Exercice 2

> Soient $g$ et $h$ deux fonctions dérivables sur $\R$. Calculer la dérivée de $f$ en fonction des dérivées de $g$ et $h$ lorsque:
> $f(x) = (x-a)g(x)$

$\forall x \in \R, f'(x) = g(x) + (x-a)g'(x)$

> $f(x) = g(x^2+ax+b)$

$\forall x \in \R, f'(x) = (2x+a)g'(x^2+ax+b)$ 

> $g(x+h(x))$

$\forall x \in \R, f'(x) = (h'(x)+1)g'(h(x)+x)$


# Exercice 5

> Soit $f,g,h$ les fonctions définies sur $\R$ par $f(x)=\sqrt{|x|}, g(x) = \sin(\sqrt{|x|})$ et:
> $h(x) = \cases{x^2 \text{ si }x≥0 \\ -x^2 \text{ si }x<0}$
> Montrer que $f$ et $g$ sont continues sur $\R$ mais qu'elles ne sont pas dérivables en $0$. 

Soit $x,y \in \R$
- $||x| - |y|| ≤ |x-y|$ (i$\triangle$ inverse)
- Donc $x \mapsto |x|$ est $1-$Lipschitzienne donc elle est continue. 
Or, $x\mapsto \sqrt{x}$ est continue sur $\R^+$
- Étant réciproque de $\cases{\R^+ \to \R^+ \\ x \mapsto x^2}$ qui est continue.
Donc $f$ est continue comme composée de fonctions continues. 
De même, pour $g$
 


**$f$ n'est pas dérivable en 0 parce que:**
- $\frac{\sqrt{|x|}}{x}$ ne converge pas en $0$.
	- en effet, si $x>0, \frac{\sqrt{x}}{x} = \frac{1}{\sqrt{x}}$ (tend vers $+\infty$)
	- qui n'a pas de limites finie en $0$, donc pas dérivable. 
- *Alternativement,*
	- Si $f$ est dérivable en $0$ alors
	- $f^2 : x \mapsto |x|$ aussi. 
	- Or $f^2$ pas dérivable
		- Contradiction

**$g$ pas dérivable en 0**
- Soit $x > 0,$ on a: 
	- $\frac{\sin(|x|)}{x} = \frac{\sin(\sqrt{x})}{x} = \frac{\sin(y)}{y^2}$ avec $y=\sqrt{x}$
- Donc $\lim{\m{x\to0\\ x>0}}\frac{g(x)}{x} = \lim{\m{y \to 0 \\ y > 0}}\ub{\frac{\sin(y)}{y}}{\to 1} \cdot \frac1{y} = +\infty$
- Donc $g$ pas dérivable en $0$. 

> Montrer que $h$ est de classe $\mathcal{C}^1$ sur $\R$ mais qu'elle n'est pas deux fois dérivable.

Pour $x<0, h(x)=-x^2$ donc $h$ est dérivable sur $\R^-$.
- De dérivée $h'(x) \mapsto -2x$
- Donc elle est de classe $\mathcal{C}^1$ sur $\R^{-+}$ $\color{green}(1)$
De même, elle est $\mathcal{C}^1$ sur $\R^{+*}$  $\color{green}(2)$
- de dérivée $h'(x) : x\mapsto 2x$
**Mq $h$ dérivable en $0$**
- Soit $x \in \R$, on a $\left|\frac{h(x)-h(0)}{x-0}\right| = \frac{|x^2|}{|x|}$
	- Donc $\lim{x\to0}\left|\frac{h(x)-h(0)}{x-0}\right|=0=h'(0)$ $\color{green}(3)$
- $(1)+(2)+(3)$ donne $\lim{x\to 0}h'(x)=0=h'(0)$
- Donc $h'$ est continue en $(0)$
- Par $(+)$ et $(-)$, on a donc $h \ \mathcal{C}^1$ sur $\R$.
- On a $h'=2|x|,$ donc $h'$ n'est pas dérivable en $0$ donc $h'$ n'est donc pas deux fois dérivable en $0$. (cf. Correction $\fbox1$)
## Exercice 9 (brouillon)

> Soit $f : \mathbb{R} \to \mathbb{R}$ la fonction définie par $$ f(x) = \begin{cases} \exp\left(\frac{1}{x}\right) & \text{si } x < 0, \\ 0 & \text{si } x \geq 0 \end{cases} $$
> Montrer que $f$ est dérivable sur $\mathbb{R}$ et déterminer $f'(x)$.

**Pour $x>0$
- $f(x) = 0$
- $f$ est constante sur l'intervalle, donc indéfiniment dérivable et continue sur $\R_+$
**Pour $x≤0$
- $\exp(\frac1x)$ est la composée de deux fonctions continues, donc continue.
**Enfin**,
- Montrons la continuité par prolongement en $0$.
- $\lim{\begin{matrix}x\to0 \\ x>0\end{matrix}}f(x) = 0$
-  $\lim{\begin{matrix}x\to0 \\ x<0\end{matrix}}f(x) = 0$
- Les limites à gauche et à droite sont égales. $f$ est prolongeable donc continue sur son intervalle de définition.

Par la règle de dérivée composée,
- $f'(x) = -\frac{1}{x^2}e^{\frac1x}$ pour $x≥0$
- $f'(x) = 0$ sinon.

> La dérivée seconde de $f$ en $0$ existe-t-elle ?

Oui, il suffit de sortir de nouveau le $\frac1x$ ou directement $0$ car $(0)' = 0$
- $f'(x) = \frac{1}{x^4}e^{\frac1x}$
- $f'(x) = 0$

> Démontrer par récurrence que, pour tout $n$, il existe un polynôme $P_n$ (dont on précisera le degré), tel que
> $$ \forall x < 0, \quad f^{(n)}(x) = \frac{P_n(x)}{x^{2n}} \exp\left(\frac{1}{x}\right). $$

**Initialisation**
$f'(x) = -\frac{1}{x^2}e^{\frac1x} \iff \frac{-1}{x^{2(1)}}e^{\frac1x} = P_1(x)$
- Vraie
**Hérédité**
Soit $n \in \N$. Supposons $P(n)$ vraie, montrons alors que $P(n+1)$ vraie.
Par HR, 
- $f^n = \frac{P_n(x)}{x^{2n}}e^{\frac1x}$
- $f^{n+1} = \frac{P_n'(x)}{(x^{2n})^2}e^{\frac1x}$

# Exercice 7

> Soit $f$ une fonction dérivable sur $\R$. Montrer que si $f$ est paire, sa dérivée est impaire.

Soit $x \in \R,$ puisque $f$ est paire:
- $f(x) = f(-x)$
Donc, par composition,
- $f'(x) = -f'(-x)$
Ainsi, $f'$ st impaire

# Exercice 8

> Soit $f$ et $g$ deux fonctions continues $n$ fois dérivables sur un intervalle $I$.
> 
> Énoncer la formule de Leibniz en donnant la dérivée $n$-ième de $fg$ sur $I$.


 $(fg)^{(n)} = \sum^n_{k=0}\ncr{n}{k}f^kg^{n-k}$  
...
 
> Application: Soit $a,b,c$ trois réels. Soit $f$ définie sur $\R$ par:
> $f(x) = (ax^2+bx+c)e^x$
> Montrer que $f$ est $\mathcal{C}^\infty$ et calculer $f^{(n)}$ pour tout $n$.

$f^{(n)} = (ax^2+bx+c)^ke^{xn-kn}$ 
- $(ax^2+bx+c)$ est de classe $\mathcal{C}^{\infty}$  car c'est un polynôme
- $e^x$ est classe $\mathcal{C}^\infty$
- Donc par application de la formule de Leibniz:
	- $f^{(n)} = \sum^{n}_{k=0}\ncr{n}{k}(ax^2+bx+c)^{k}(e^x)^{(n-k)}$
		- Notons $(ax^2+bx+c)^{(3)} = 0$
	- $f^{(n)}(x) = e^x\left(ax^2+bx+c + \ncr{n}{1}(2ax+b)+\ncr{n}{2} 2a\right)$
	- $= e^x\left(ax^2+\left(b+2\ncr{n}{1}a\right)x+\left(c+\ncr{n}1 b + 2 \ncr{n}{2}a\right)\right)$
En particulier,
- $f^{(n)}(x) = e^x\left(ax^2+(2na+b)x+\left(n(n-1)a+nb+c\right)\right)$
# Exercice 10

> Dans chacun des cas suivants, préciser si la fonction $f:[a,b]\to\R$ satisfait aux conditions du théorème de Rolle. Si oui, déterminer explicitement les réels $c$ tels que $f'(c) = 0$. 
> Dans tous les cas, illustrer graphiquement!
> $e^{|x|}, x\in[-1,1]$

```desmos-graph
f(x)=\exp(\abs(x))
```

La fonction ne'st pas dérivable en $0$ donc ne satisfait pas les conditions du théorème de **Rolle**.

> $e^{x^2}, x \in [-1, 1]$

```desmos-graph
f(x) = e^{x^2}
```

On a $f$ dérivable sur $\R$ comme composée de fonctions continues et $f(-1)=e^{1} = f(1)$
Donc $f$ vérifie les conditions du théorème de Rolle sur $[-1;1]$.
On a $f'(0) = 0$

```desmos-graph
f(x)=\log(1+\abs(x))
```

$\log(1+|x|), x \in [-1;1]$ 
- La fonction n'est pas dérivable en $0,$ donc elle ne satisfait pas les conditions du Théorème de Rolle
**Preuve**
$\log(1+|x|) = \ub{\log(1)}{0}+|x|$
$g:y\mapsto \log(1+y)$
$g'(0) = \frac{1}{1+0}$
$\frac{\log(1+|x|)-0}{x-0} = \frac{|x|}{\ub{x}{\text{Signe de } x}}(1+\epsilon(|x|))$

> [!tips]
> $0$ est un point de rebroussement

```desmos-graph
\{0\leq x\leq\pi/4:\tan(x)\}
```

$\tan(x), x \in [0,\frac{\pi}4]$
- La dérivée ne s'annule jamais.

```desmos-graph
\{\frac{4}{33\pi} \leq x \leq \frac{4}{\pi}:\sin(\frac{1}x)\}
```
La fonction $x\mapsto \frac{1}{x}$ est $\mathcal{C}^1$ sur $\left[ \frac{4}{33\pi} ; \frac{4}\pi\right]$ comme composée de fonctions $\mathcal{C}^1$ et $\sin\left( \frac{1}{\frac{4}{33\pi}} \right) = \sin\left( \frac{33\pi}4 \right) = \sin\left( \frac{\pi}{4}+8\pi \right) = \sin\left( \frac{\pi}{4} \right)$
Donc les conditions du théorème de Rolle sont bien vérifiées donc les conditions du théorème de Rolle sont bien vérifiées. 

# Exercice 13

> Soit $f$ une fonction dérivable sur $[0,1]$. On suppose que $f(0)=1$ et que pour tout $x \in [0,1]$, $|f'(x)|≤1$. Montrer que pour tout $x \in [0,1], 1-x≤f(x) ≤ 1+x$

Soit $f$ dérivable sur $[0,1]$ tq
- $f(0)=1$ et $|f'|≤1$
- Soit $x \in [0,1]$
- Mq $1-x≤f(x)≤1+x$
	- $f$ étant dérivable sur $[0,x]$
	- On a, d'après le TAF
		- $\frac{f(x)-f(0)}{x-0}=f'(c)$
		- $f(x) = xf'(c)+1$
			- Or, $f'(c) \in [-1;1]$
		- $-1≤f'(c) ≤ 1$
		- Donc $-x+1 ≤ f(x) ≤ x+1$
$\square$
# Exercice 12

> Dans chacun des cas suivants, préciser si la fonction $f$ satisfait sur l'intervalle $[a,b]$ aux conditions du théorèmes des accroissements finis.
> Si oui, déterminer explicitement les réels $c$ tels que $f(b) - f(a) = (b-a)f'(c)$. Dans tous les cas, illustrer graphiquement.
## Cas 1
> $x \mapsto x^2 - 8x + 12, x \in [0,1]$

```desmos-graph
bottom=-1;top=15;left=-1;right=2
---
f(x) = \{0\leq x \leq 1:x^2-8x+12\}
```

On a
- $f(b) = f(1) = 1-8+12 = 5$
- $f(a) = f(0) = 12$
et $f(b) - f(a) = (b-a)f'(c)$
donc $f'(c)=\frac{f(b)-f(a)}{b-a}=\frac{5-12}{1}=-7$
On a d'autre part, 
- $f'(c) = 2c - 8$
- Or, 
	- $f'(c) = -7$
	- donc
		- $-7=2c-8$
		- $c = \frac12$
## Cas 2
> $x \mapsto 2x+\sin(x), x \in[0,\pi]$

```desmos-graph
left=-1;bottom=-1;right=4
---
f(x)=\{0 \leq x \leq \pi : \sin(x)+2x\}
```

On a $f$ continue sur $[0, \pi]$ car c'est une somme de fonctions continues et dérivable sur $]0;\pi[$ car somme de fonctions dérivables.
- $f(0)=0$
- $f(\pi)=2\pi+\sin(\pi)$
- $= 2\pi$
$f'(c) = \frac{f(\pi)-f(0)}{\pi-0} = \frac{2\pi}\pi = 2$

## Cas 3
> $x\mapsto \sqrt{x^2+4x+1}-1$ dérivable sur $[0;1]$

$f:\cases{[0,2]\to [4, 20] \\ x \mapsto x^2+4x+4}$ $f$ est continue et dérivable.

$g:\cases{[4,20] \to \R \\ x \mapsto \sqrt{x}}$ est continue est dérivable.

donc $g \circ f - 1$ est dérivable sur $[0,2]$
On peut donc appliquer le TAF. 

$f:\cases{[-2,0]\to [0,+\infty[ \\ x\mapsto x^2+4x+4}$ est dérivable. 

> [!warn]
> $g \circ f$ est continue sur $[-2, 0]$ mais pas dérivable.

Mais $g \circ f$ est bien dérivable sur $]-2, 0[$
Donc on peut appliquer le TAF.

$x^2+4x+4 = (x+2)^2$
$\sqrt{(x+2)^2} = |x+2|$

# Exercice 16

> Soit $f$ une fonction continue sur $[0,2]$, de classe $\mathcal{C}^2$ sur $]0,2[$ telle que $f(0)=0, f(1) = 2$ et $f(2) = 1$.
> Montrer qu'il existe $x_1 \in ]0,1[, x_2 \in ]1,2[$ tels que $f(x_1)=f(x_2) = \frac{3}{2}$.

On sait que:
- $f$ est continue sur $[0,1]$
- $f(0)=0, f(1)=2$ donc $\frac{3}{2} \in ]f(0),f(1)[$
Ainsi, d'après le **théorème des valeurs intermédiaires**, 
- il existe (au moins) un élément $x_1 \in ]0,1[$  tel que $f(x_1) = \frac32$.
D'autre part,
- On sait que:
	- $f$ est continue sur $[1,2]$
	- $f(1)=2, f(2) =1$ donc $\frac{3}{2}\in]f(2),f(1)[$
- Alors, d'après le **théorème des valeurs intermédiaires:**
	- Il existe (au moins) un élément $x_2 \in ]1,2[$ tel que $f(x_2)=\frac{3}{2}$
- Finalement,
	- $f(x_1)=f(x_2) = \frac{3}{2}$

> En déduire qu'il existe $x_3 \in ]0,2[$ tel que $f'(x_3)=0$.

On sait que:
- $f(x_1) = f(x_2) = \frac{3}{2}$ avec $x_1 < x_2$
- $f$ est continue sur $[0,2]$ donc $f$ est en particulier continue sur $[x_1, x_2]$
- $f$ est dérivable sur $]0,2[$ donc sur $]x_1, x_2[ \sub ]0,2[$
Alors, d'après le théorème de Rolle, 
- il existe $x_3 \in ]x_1, x_2[$ tel que:
	- $f'(x_3)=0$
Donc il existe bien $x_3 \in ]0,2[$ tel que
- $f'(x_3)=0$

# Exercice 20

> **Suites récurrentes et accroissements finis**
> Soit $(u_n)_{n\in\N}$ la suite définie par $u_0 = 1$ et, pour tout $n \in \N,$ $u_{n+1}=\cos(u_n)$
> 1. Montrer que pour tout $n, u_n \in [0,1]$

Montrons la propriété: $P_n :u_n \in [0,1], \forall n \in \N$

**Initialisation**
$u_0 = 1 \in [0,1]$
$\Rightarrow$ *Init OK*

**Hérédité**
Supposons qu'il existe $k \in \N$ tel que $P_k$ vraie. 
Montrons alors que $P_{n+1}$ vraie.
On a:
- $u_{k+1} = \cos(u_k)$
- $u_k\in[0,1]$
- $[0,1]\sub[0,\pi/2]$
- La fonction $\cos$ est continue sur $[0,\pi/2]$.
D'après le T.V.I
- Donc, $\cos([0,1]) \sub \cos([0,\pi/2]) \sub [0,1]$
Alors:
- $u_k \in [0,1] \Rightarrow \cos(u_k)$ i.e $u_{k+1} \in [0,1]$
Donc $P_{k+1}$ est vérifiée

**Conclusion**
La propriété $P$ est initialisée à $n=0$ et héréditaire, alors $P_n$ est vérifiée pour tout $n \in \N$

> Montrer que l'équation $\cos(x)=x$ admet une unique solution réelle, et qu'elle appartient à $[0,1]$. On la note $\lambda$.

On sait que:
- Pour tout $x \in \R, \cos(x) \in [-1, 1]$ 
- Donc l'équation 
	- $\cos(x)=x$
- n'admet pas de solution sur $\R\backslash[-1, 1]$.

On peut donc restreinte l'étude sur $[-1, 1]$. 
Or, sur $[-1, 1]$ $\cos(x)≥0$ donc l'équation $\cos(x)=x$ n'admet pas de solution sur $[-1, 0[$.
Finalement, s'il existe une solution $x_0$ donc $x_0\in [0,1]$.

On pose:
- $f:x \in \R \mapsto \cos(x) - x$
Alors,
- $\cos(x) = x \iff f(x) = 0$

La fonction $f$ est:
- continue sur $[0,1]$ comme différence de fonctions continues
- strictement décroissante sur $[0,1]$ comme différence d'une fonction croissante et décroissante. 
- $f(0)=1$ et $f(1)\cos(1) - 1 = 0$
- donc $0\in ]f(1), f(0)[$
D'après le TVI, 
- il existe un **unique** $\lambda \in ]0,1[$ tel que:
	- $f(\lambda) = 0 \iff \cos(\lambda) = \lambda$

> Exprimer $|u_{n+1}- \lambda|$ en fonction de $\cos(u_n)$ et de $\cos(\lambda)$. Montrer que, pour tout $n \in \N,$
> $|u_{n+1}- \lambda| ≤ \sin(1)|u_n - \lambda|$
> En déduire que $(u_n)_{n\in\N}$ converge vers $\lambda$

Pour tout $n \in \N,$
- $|u_{n+1} - \lambda| = |\cos u_n - \cos \lambda|$
On sait que:
- $\cos$ est continue sur $[0,1]$
- $\cos$ est dérivable sur $]0,1[$
- $u_n \in [0,1], \lambda \in [0,1]$
D'après le théorème des accroissements finis, il existe $c \in I,$ où $I = ]u_n, \lambda[$ si $\lambda > u_n$ et $I = ]\lambda, -u_n[$ si $\lambda < u_n$ tel que:
- $|cos'(c)| = \frac{|\cos u_n - \cos(\lambda)|}{|u_n - \lambda|}$
Donc,
- $|u_{n+1}- \lambda| = |\cos u_n - \cos \lambda| = |\sin c| \times |u_n - \lambda|$
Or,
- $c \in [0,1]$ et $\sin$ est croissante sur $[0,1]$ et positive donc:
- $|\sin c| = \sin c ≤ \sin 1$
Alors,
- $|u_{n+1} - \lambda| ≤ \sin(1)$. $|u_n - \lambda|$
Par itération, (comme la récurrence)
- $|u_n - \lambda| ≤ \sin(1)^n|u_0 -\lambda| = \sin(1)^n(1-\lambda)$
or,
- $\sin 0 < \sin 1 < \sin \frac{\pi}2$ i.e $0 < \sin(1) < 1$
Donc,
- $\lim{n\to+\infty}(\sin 1)^n = 0$
alors
- $\lim{n\to+\infty}|u_n - \lambda| = 0$ i.e $\lim{n\to+\infty}u_n = \lambda$

# Exercice 19

> On cherche à étudier la suite $(S_n)_{n ≥ 2}$ définie par:
> $S_n = \sum^n_{k=2}\frac1{k\ln(k)}$
> Soit $f:]1,\infty[\to\R$ la fonction définie par $f(x) = \ln(\ln(x))$
> Appliquer le théorème des accroissements finis à $f$ sur $[k,k+1]$ pour tout entier $k≥2$. 

On sait que:
- $x \in ]1;+\infty[ \mapsto \ln(x)$ est dérivable et à valeurs dans $]0;+\infty[$
- $y \in ]0;+\infty[ \mapsto \ln(y)$ est dérivable
Donc par composition, $f$ est dérivable sur $]1;+\infty[$

Donc par composition, $f$ est dérivable sur $]1;+\infty[$. Elle est en particulier dérivable sur tout $[k;k+1]$ avec $k ≥ 2$ et donc continue. 

D'après le théorème des accroissements finis, il exsite $c_k \in ]k;k+1[$ tel que:
- $\frac{f(k+1) - f(k)}{k+1-k} = f'(c)$
Or,
- (composée) 
- $f'(x) = \frac1x \cdot \frac1{\ln(x)}$
Donc,
- $f(k+1) - f(k) = \frac1{c_k\ln(c_k)}$ avec $c_k \in ]k;k+1[$

> En déduire que:
> $S_n ≥ \ln(\ln(n+1)) - \ln(\ln(2))$
> Que peut-on déduire sur le comportement de la suite $(S_n)_{n≥2}$

On a:
- $\begin{rcases}0 < k < c_k \\ 0 < \ln(k) < \ln(c_k)\end{rcases}$ donc $0 < k \ln k < c_k \ln(c_k)$
On obtient:
- $\forall k ≥ 2, \frac1{k\ln k} > \frac1{c_k \ln(c_k)}$
Alors,
- $S_n = \sum^n_{k=2}\frac1{k\ln k}>\sum^n_{k=2}\frac1{c_k\ln(c_k)}$
D'après $\fbox1$, on obtient alors:
- $S_n > \sum^n_{k=2}(f(k)-f(k+1))$
- $S_n > \sum^n_{k=2}(f(k)-f(k+1))$ (somme téléscopique)
	- Or,
	- $\sum^n_{k=2}(f(k)-f(k+1))= \sum^n_{k=2}f(k) - \sum^n_{k=2}f(k+1)$
		- $= \sum^n_{k=2}f(k) - \sum^{n+1}_{l=3} f(l)$
		- $= f(2) + \sum^n_{k=3}f(k) - (\sum^n_{l=3} + f(n+1))$
		- $= f(2) - f(n+1)$
		- $= \ln(\ln(2)) - \ln(\ln(n+1))$
- $\sum^n_{k=2}f(k+1) - f(k) = \ln(\ln(n+1)) - \ln(\ln 2)$
Finalement,
 - $S_n > \ln(\ln(n+1)) - \ln(\ln 2)$
Or,
- $\lim{n\to+\infty}\ln(\ln(n+1)) - \ln(\ln 2)= +\infty$
Donc, par comparaison,
- $\lim{n\to+\infty} S_n = +\infty$

$\square$

