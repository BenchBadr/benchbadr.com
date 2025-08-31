---
lang: fr
desc: Analyse du théorème de Taylor-Young, ses formules et applications clés avec exemples.
date: 02/04/2025
---

$\newcommand{\sub}{\subset}\newcommand{\R}{\mathbb{R}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\N}{\mathbb{N}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}$
> C'est un théorème des accroissements finis qui fait intervenir les dérivées $n$-ièmes.
# I - Formules de Taylor

## Théorème de Taylor-Young

> [!tips]
> Généralisation du théorème des accroissements finis

Soit $n \in \N, a<b$ et $f:[a,b]\to\R$ 
- tel que $f$ soit de classe $\mathcal{C}^n$ sur $[a,b]$ et $(n+1)$-fois dérivable sur $]a,b[$
Alors, il existe $c \in ]a,b[$ tq
- $f(b) = f(a) + f'(c)(b-a) + f''(a)\frac{(b-a)^2}{2}+f^{(3)}(a)\frac{(b-a)^3}6+...+f^{(n)}(a)\frac{(b-a)^n}{n!} + f^{(n+1)}(c)\frac{(b-a)^{n+1}}{(n+1)!}$

> Cela permet d'approcher ma fonction $f$ par un polynôme

### Preuve
Soit $g:[a,b]\to\R$ définie par:
- $g(x)=f(b) - f(x)-f'(x)(b-x)-f''(x)\frac{(b-x)^2}2-...-f^{(n)}(x)\frac{(b-x)^n}{n!}-A\frac{(b-x)^{n+1}}{(n+1)!}$
Avec
- $A = \frac{(n+1)!}{(b-a)^{n+1}}\left(f(b)-f(a)-f'(a)(b-a)+...-f^{(n)}(a)\frac{(b-a)^n}{(n)!}\right)$
On a:
- $g$ est continue sur $[a,b]$ car
	- $f$ est de classe $\mathcal{C}^n$ sur $[a,b]$
	- $g$ est dérivable sur $]a,b[$ car $f$ est $(n+1)-$dérivable sur $]a,b[$
	- $g(a) = g(b)$ (par choix de $A$)
Donc d'après le théorème de Rolle, il existe $c \in ]a,b[$ tq
- $g'(c) = 0$
Or, pour $x\in ]a,b[$
- $g'(x) = 0-f'(x)-\sum_{k=1}^n(f^{(k)}(b-x))'+A\frac{(b-x)^n}{n!}$
- $\phantom{g'(x)} = f'(x) - \sum_{k=1}^n\left( f^{(k+1)}(x)\frac{(b-x)^k}{k!}-f^{(k)}(x)\frac{(b-x)^{k-1}}{(k-1)!}\right)+A\frac{(b-x)^n}{n!}$
- $\phantom{g'(x)} = \cancel{\sum_{k=0}^{n-1}\left(f^{(k+1)}(x)\frac{(b-x)^k}{k!}\right)}+\cancel{\sum{k=0}{n-1}f^{(k+1)}(x)}\frac{(b-x)^k}{k!} - f^{(n+1)}(x) \frac{(b-x)^n}{n!} + A\frac{(b-x)^n}{n!}$
- $g'(x) = (A-f^{(n+1)}(x))\frac{(b-x)^n}{n!}$

Donc $g'(c) = 0$ signifie que:
- $A = f^{(n+1)}(c) = 0$
C'est-à-dire,
- $A = f^{(n+1)}(c)$
C'est-à-dire, 
- $\frac{(n+1)!}{(b-a)^{n+1}}\left(f(b) - f(a) - \sum{k=1}{n}\frac{f^{(k)}(a)}{k!}(b-a)^k\right) = f^{(n+1)}(c)$
On obtient donc:
- $f(b) = f(a) + \sum{k=1}{n}f^{(k)}\frac{(b-a)^k}{k!} + f^{(n+1)}(c) \frac{(b-a)^{n+1}}{(n+1)!}$
$\square$

### Corollaire - Formule de Taylor-Lagrange
#Taylor-Lagrange

Sous les mêmes hypothèses.
En supposant $\left|f^{(n+1)}\right|$ majorée sur $]a,b[.$ Alors :
- $\left|f(b) - f(a) - \sum{k=1}{n}f^{(k)}(a)\frac{(b-a)^k}{c}\right|≤\frac{(b-a)^{n+1}}{(n+1)!}\underset{x \in ]a,b[]}{\sup}\left|f^{(n+1)(a)}\right|$

### Corollaire - Formule de Taylor-Young (2)
#Taylor-Young 

Soit $a \in \R$ et $\alpha > 0$.
Soit $f:[a-\alpha;a+\alpha]\to \R$ avec $f$ de classe $\mathcal{C}^n$ sur ce $[a-\alpha;a+\alpha]$.  (ce voisinnage)
- Alors il existe un $\epsilon \in ]-\alpha ; +\alpha[\to\R$ 
- tq $\lim{h\to0}\epsilon(h) = 0$ tq, pour tout $h \in ]-\alpha;\alpha[$:
	- $f(x) = f(a) + f'(a)(x-a)+...+f^{(n)}(a)\frac{(x-a)^n}{n!}+h^n\epsilon(h)$

#### Preuve
En appliquant #Taylor-Young à l'ordre $n-1$, on a u'il existe $c$ entre $a$ et $a+h$ tq:
- $f(a+h) = f(a)+f'(a) h+...+f^{(n-1)}\frac{h^{n-1}}{(n-1)!}+f^{(n)}(c_h)\frac{h^n}{n!}$
Posons $\epsilon(h) = \frac{f^{(n)}(c_k)-f^{(n)}(a)}{n!}$
On a alors:
- $f(a+h)=f(a)+f'(a)h+f''(a)\frac{h^2}2+...+f^{(n)}(a)\frac{h^n}{n!}+h^n\epsilon(h)$
Mq $\lim{h\to0} \ \epsilon(h) = 0$
c'est-à-dire,
- $\lim{h\to0}\frac{f^{(n)(c_h)}-f^{(n)}(a)}{n!}=0$
c'est-à-dire,
- $\lim{h\to0}f^{(n)}(c_h)=f^{(n)}(a)$
On a $c_h$ entre $a$ et $a+h$. Puisque $\lim{h\to0}a+h = a$
- Par encadrement, 
	- $\lim{h\to0}c_h=0$
	- Donc, puisque $f^{(n)}$ est continue,
		- $\lim{h\to0}f^{(n)}(c_h) = f^{(n)}(a)$

## Proposition
Soit $I$ un intervalle ouvert de $\R, I ≠ \phi$
et $f:I \to \R$
de classe $\mathcal{C}^2$ sur $I$.
Soit $x_0 \in I$ tel que $f'(x_0)=0$.

> [!tips]
> je suis sur un endroit que je pense être un extremum

- si $f''(x_0)>0$ Alors $f$ admet un minimum local en $x_0$. 
- si $f''(x_0)<0$ Alors $f$ admet un maximum local en $x_0$. 

---
**Exercice pour la prochaine fois**
Concave / Convexe / comparer avec la tangente.

#### Preuve
Soit $I$ un intervalle ouvert non-vide.
Soit $f:I \to \R$ une fonction deux fois dérivable. 
Soit $x_0 \in I$ tel que $f'(x_0) = 0$

Supposons $f''(x) > 0$.
Mq $f$ admet un minimum local en $x_0$. 
- c'est-à-dire,
	- il existe $\delta > 0$ tel que:
		- $\forall x \in [x_0 - \delta;x_0 + \delta], \ub{f(x) ≥ f(x_0)}{f(x)-  f(x_0)≥0}$
	- $f$ est de classe $\mathcal{C}^2$ sur $I$ donc par la formule de Taylor-Young 2:
		- on a pour $x \in I$
			- $f(x) = f(x_0) + (x-x_0)\ub{f'(x_0)}{=0}+\frac{(x-x_0)^2}{2}f''(x)+(x-x_0)^2\epsilon(x-x_0)$
			- $\epsilon \underset{h\to0}{\to}0$
		- Donc $f(x) - f(x_0) = (x-x_0)^2\left(\frac{f''(x_0)}2+\epsilon(x-x_0)\right)$
		- Puisque $\lim{h\to 0}\epsilon(h) = 0,$ il existe $\delta > 0$ tel que:
			- pour tout $|h|<\delta$ on a $|e(h)|≤\frac{f''(x_0)}{4}$
		- Donc pour $x \in [x_0 - \delta;x_0+\delta]$ on a
		- $f(x)-f(x_0) ≥ (x-x_0)^2\frac{f''(x_0)}4≥0$
- Donc $f$ admet bien un minimum en $x_0$
	- De même, si $f''(x_0) < 0,$ $f$ admet un maximum en $x_0$
$\square$

## Proposition

Soit $I \sub \R$  intervalle ouvert non-vide et $f:I \to \R$ une fonction de classe $\mathcal{C}^{2n}$ sur $I$ avec $n≥1$.
Soit $x_0 \in I$ tel que:
- $f'(x_0) = f''(x_0) = ... = f^{(2n-1)}(x_0) = 0$

### Cas 1
Si $f^{(2n)}(x_0) > 0$ alors:
- $f$ a un minimum local en $x_0$
### Cas 2
Si $f^{(2n)}(x_0) < 0$ alors
- $f$ a un maximum local en $x_0$. 

### Preuve - Cas 1 & 2
Puisque $f$ est $\mathcal{C}^{(2n)}$ sur $I$. On peut appliquer la formule de Taylor-Young à l'ordre $2n$.
On a alors, poru $x\in I,$
- $f(x) = f(x_0)+\ub{(x-x_0)f'(x_0)+...+}{= 0}\frac{(x-x_0)^{2n}}{2n!}f^{(2n)}(x_0)+(x-x_0)^{2n}\ub{\epsilon}{\to 0}(x-x_0)$
Donc,
- $f(x) - f(x_0) = (x-x_0)^{2n} \left(\frac{f^{(2n)}}{(2n)}+\epsilon(x-x_0)\right)$
Il existe $\delta > 0$ tq si $|x-x_0|≤\delta$
- $f(x)-f(x_0)≥(x-x_0)^{2n}\frac{f^{(2n)}(x_0)}{2(2n)!}>0$
De même, si:
- $f^{(2n)}(x_0)<0$
$\square$

# II - $o$ et $O$

## Définition
Soit $f$ et $g$ deux fonctions de $I \to \R$ ($I$ intervalle non-vide et ouvert).
Soit $x_0 \in I$. 
On dit que $f = \underset{x_0}{o}(g)$ (on néglige en $x_0$)

> [!info]
> Pour les suites, on n'écrivait rien puisqu'il s'agissait forcément de $+\infty$

Si il existe $h:I \to \R$ tel que $f= hg$ 
- sur $[x_0-\delta ; x_0+\delta]$, avec un certain $\delta > 0$
et $\lim{x\to x_0}h(x) = 0$

On note $f = O_{x_0}(g)$ si il existe $h:I \to \R$ 
- $f=hg$ sur $[x_0-\delta;x_0+\delta]$
avec $h$ bornée.

## Proposition
Les $o$ et les $O$ sont compatibles avec les opérations usuelles (cf. $o$ et $O$ pour les suites)

> [!tips]
> Quelque part... $o$ est un inférieur strict et $O$ un inférieur ou égal.

### Exemple

$\frac{\sin(\frac1x)}{x} = O_0\left(\frac{1}x\right)$
$\phantom{\frac{\sin(\frac1x)}{x}} = O_0\left(\frac1{x^2}\right)$
$\frac{1}{x^2} = O_{+\infty}\left(\frac{1}x\right)$

**Intérêt** - $f$ est une fonction à approcher.
$\hat{f}$ est une approximation.
- $|f(x) - \hat{f}(x)| = O(x)$
Évaluer la qualité d'une approximation

# III - Développement limité

## Définition
Soit $I$ un intervalle ouvert de $\R : I ≠ \phi$ et $a \in I$. 
Soit $n\in \N$ et $f:I \to \R$. 
On dit que $f$ admet un développement limité en $a$ si, et seulement si il existe un polynôme $P$ tel que: 
- $h$ tel que $a+h \in I$
- $\deg(P) = n$ et $f(a+h) = f(a)+P(h)+o(h^n)$

### Remarque
La formule de Taylor-Young 2 permet de constuire des DL (développements limités)

## Proposition
Si $f$ admet en $DL_n(a)$ ($DL$ à l'ordre $n$ en $a$) alors il est unique, c'est-à-dire il existe un unique polynôme $P$ de degré $≤ n$ tel que:
- $\forall k ≥ 0, f(a+h) = f(a) + P(h) + o_a(h^n)$
($P$ est la partie régulière du $DL_n(a)$ de $f$)

### Preuve - *Question de cours*
Soit $P_1, P_2$ deux polynômes de degré $≤ n$ tels que:
- $\forall k > 0, f(a+h) =f(a) + P_1(h)+o_a(h^n)$
- $\phantom{\forall k > 0, f(a+h)} = f(a)+P_2(h)+o_a(h^n)$
Soit $h>0,$ 
- on a $\ub{P_1(h) - P_2(h)}{= Q(h)}+\ub{o_a(h^n)-o_a(h^n)}{= o_a(h^n)}=0$
- avec $\ub{Q}{h^NR}$ un polynôme de degré $≤ n$
- Donc $h^NR(h)=o_a(h^n)$
- Donc $R(h)=o_a(h^{n-N})$
 - Donc $\lim{h\to 0}R(h) = 0$
Or, $R$ est continue car polynôme.
- Donc $\lim{h\to 0}R(h) = R(0)$
- Donc $R(0)=0$
**Contradiction** avec $(*)$ donc:
- $R = 0$
- $Q= 0$
- $P_1 = P_2$
Donc un développement limité est unique.
$\square$

## Théorème
Soit $n\in\N$ sur $I$ (intervalle ouvert non-vide) de $\R$ et $O \in I$
- Si $f$ est de classe $\mathcal{C}^n$ sur $I$ et $a \in I$ alors $f$ admet un $DL_n(a)$ dont la partie régulière est:
	- $P(k) = \sum^{n}_{k=1}\frac{f^{(k)}(a)}{k!}h^k$
 
## Proposition
oit $f$ admettant un $DL_n(0)$ de partie régulière $P$
- Si $f$ est paire alors $P$ aussi.
- Si $f$ est impaire alors $P$ aussi.
### Preuve
Supposons $f$ paire, c'est-à-dire
- $\forall x \in \R, f(x) = f(-x)$
- Or, $f(x) = f(0) + P(x) + o_0(x^n)$
	- $= f(0)+P(x)+x^n\ub{\epsilon}{\to 0}(x)$
	- et, $f(-x) = f(0) + P(-x)+(-x)^n$

### Exemples de $DL_n(0)$
- $e^x = 1+x+\frac{x^2}{2}+\frac{x^3}{6}+...+\frac{x^n}{n!} + o(x^n)$
- $\sin(x) = 0 = x + 0 -\frac{x^3}{6}+0+\frac{x^5}{5!}+ ... + \cases{(-1)^N\frac{x^{2N+1}}{(2N+1)!} \text{ si }n=2N+1 \\ (-1)^{N-2}\frac{x^{2N-1}}{(2N-1)!} \text { si }n=2N}$
- $\cos(x) = 1+0-\frac{x^2}{2}+...+\cases{(-1)^N\frac{x^{2N}}{2N!} \text{ si }n=2N \\ (-1)^{N-2}\frac{x^{(2N-1)}}{(2N-1)!} \text{ si }n=2N-1}$
- Si $\alpha \in \R$
	- $(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)x^2}{2}+...+\frac{\alpha(\alpha-1)(\alpha - 2)....(\alpha - n+1)}{n!}x^n + o_0(n)$
- Cas particulier:
	- $\frac1{1+x} = 1-x+x^2-x^3+...+(-1)^nx^n+o_0(x^n)$
- $\ln(1+x) = 0+x-\frac{x^2}{2}+\frac{x^3}{3}-...+(-1)^n\frac{x^n}n+o_0(x^n)$

### Cas d'usages

$\frac{\sin(x)\cos(x)}{\ln(x)} = \frac{(x+o(x))(1+o(x))}{\ln(x)} = \frac{x+o(x)}{\ln(x)} = \frac{O(x)}{\ln(x)}$
$(1+x)^{1/x}=e^{1/x\ln(1+x)}$
$= e^{1/x(x+o(x))}$
$= e^{1+o(x)} - 1 + o(x) + o(1+o(x))$
$= 1+o(1)$
$\lim{x\to0} = 1$

# IV - Exercices et ouvertures

> [!tips]
> Le cours étant fini pour le dernier amphi, cette séance a partiellement fait office de TD, le reste fait office d'ouverture.

## TD
### Exercice 1

> Calculer un DL à l'ordre 4 en $0$ des fonctions:
> 1. $x \mapsto (1+\sqrt{1+x^2})^{1/2}$ 
> 2. $x\mapsto \ln\left(\frac{\sin(x)}{x}\right)$
> 3. $x \mapsto (1+2x)^{\frac{1}{1+x}}$
> 4. $x \mapsto \frac{x}{e^x-1}$

### Exercice 2

> Écrire les $DL$ en $)$ de:
> 1. $\tan(x)$ à l'ordre $n=7$
> 2. $\frac1{\cos(x)}$ à l'ordre $n = 7$
> 3. $\arccos(x)$ à l'ordre $n =7$

### Exercice 3

> Calculer 
> 1. $\lim{x\to 0}\frac{\sqrt{1+x^2}-\cos(x)}{x^2\tan^2(x)}$ 
> 2. $\lim{x\to0}\frac{(1-e^x)\sin(x)}{x^2+x^3}$
> 3. $\lim{x\to+\infty}(x-x^2\ln(1+\frac1x))$

### Correction
#### Exercice 1

> $x \mapsto (1+\sqrt{1+x^2})^{1/2}$ 

Soit $x \in \R$, on a: $\newcommand{\pa}{(1+\sqrt{1+x^2})}$
- On a: $\sqrt{1+x^2}=1+\frac12x^2-\frac14x^2 + o(x^4)$

> [!warn]
> $(*)$ **Rappel:** $(1+h)^{\alpha}=1+\alpha h + \alpha\frac{(\alpha - 1)}{2}h^2 + o(h^2)$ 

Et on applique avec $a = \frac12$ et $h = x^2$
Donc:
$\pa = (1+1+\frac12x^2-\frac18x^4 + o(x^4))^{1/2}$
$\phantom{\pa} = (2+\frac12x^2+\frac18x^4+o(x^4))^{1/2}$
$\phantom{\pa} = \sqrt{2}(1+\frac14x^2-\frac1{16}x^2+o(x^4))^{1/2}$
On pose $h = \frac14x^2 - \frac1{16}x^4+o(x^4)$
Par $(*)$
$\pa = \sqrt2(1+\frac{h}2-\frac{h^2}8+o(h^2))$

Soit $x \in \R,$
Donc $(1+\sqrt{1+x^2})^{1/2} = \sqrt2(1+\frac12(\frac14x^2-\frac1{16}x^4+o(x^4))) - \frac18(\frac14x^2+o(x^2))^2+o(x^4))$
Donc 
$\pa = \sqrt{2}(1+\frac18x^2-\frac1{32}x^4-\frac18\cdot\frac1{16}x^4+o(x^4))$  
$\phantom{\pa} = \sqrt2(1+\frac18x^2-5{128}x^2+o(x^4))$


>  $x\mapsto \ln\left(\frac{\sin(x)}{x}\right)$

Soit $x \in ]-\frac\pi2;\frac\pi2[\backslash\{0\}$ 
$\sin(x) = x-\frac{x^3}{3!}+\frac{x^5}{5!}+o(x^5)$
Donc:
- $\frac{\sin(x)}x = 1 - \frac{x^2}{3!}+\frac{x^4}{5!}+o(x^4)$
- En posant $h = -\frac{x^2}{3!}+\frac{x^4}{5!}+o(x^4)$
En posant $h = -\frac{x^2}{3!}+\frac{x^4}{5!}+o(x^4)$
On a:
- $h(1+h)=h-\frac{h^2}2+o(h^2)$
Donc:
- $\ln(\frac{sin(x)}{x}) = -\frac{x^2}{3!}+\frac{x^4}{5!}+o(x^4) - \frac12\left(\frac{x^2}{3!}+\frac{x^4}{5!}+o(x^4)\right)$ 
- $\ln(\frac{\sin(x)}{x}) = -\frac{x^2}6 - \frac{x^4}{180}+o(x^4)$
- $\ln\left(\frac{\sin(x)}x\right) = -\frac{x^2}6-\frac{x^4}{180}+o(x^4)$ 
$o(h^2)=o((-\frac{x^2}6+\frac{x^4}{120})^2)$ 
$\phantom{o(h^2)} = o\left(\frac{x^4}{36}+C_1x^6+C_2x^8+o(x^6)\right)$
$\phantom{o(h^2)} = o(x^4)$
Puis $DL$ de $e^h$

---

**FIN**
