$\newcommand{\N}{\mathbb{N}}$
## Correction 2-3

> Montrer que pour toute fonction $f:\N\mapsto \N,$ si $f$ est strictement croissante alors pour tout $n, f(n)≥n$

$f$ strictement croissante, $\forall n \in \N, f(n) ≥ n$
#### __Initialisation__

Mq $f(0) ≥ 0$
$f(0)\in\N,$ donc $f(0)≥0$ 

#### __Hérédité__

Soit $k\in\N$, on suppose $P(k)$

- $f(k)≥k$

On veut montrer que

- $f(k+1)≥k+1$

$f$ est strictement croissnte, donc 

- $f(k+1)>f(k)≥k$ (hypothèse de récurrence)

Donc $f(k+1)>k$

Donc $f(k+1)≥k+1$

#### __Conclusion__

Par $P_3, \forall n \in \N, f(n) ≥ n$

## Correction 3

### Récurrence double

$Q(n)=P(n)$ et $P(n+1)$

$Q$ satisfait les hypothèses de la récurrence simple, $H_s(Q)$. En supposant que $P$ satsifait les hypothèses de la récurrence double ($H_q(P)$)



## IIII - Différents types de récurrence

> Ordre bien fondé

On va énoncer d'autres types de récurrence qui sont toutes sous la forme

$H \Rightarrow \forall x P(x)$

Dans le cas de la récurrence simple. $H_s:P(0)$ et $\forall k\in\N, (P(k)\Rightarrow P(k+1))$ (hypothèse de récurrence simple).

---

On va remplacer $H_s$ par :
- $H_{≥n}$ (récurrence à partir d'un certain rang) 
- ou $H_{double}$ (récurrence double)
- ou $H_f$ (récurrence forte)
- ou $H_{bf}$ (récurrence bien fondée)

On considère une propriété $Q$ telle que:
- si $\forall x Q(x)$ alors $\forall x P(x)$

Grâce à $H'$ (une des hypothèses sur $P$) on va montrer que $Q$ satisfait $H_s,$ et donc on pourra en déduire $\forall x Q(x)$ et donc $\forall P(x)$

---

### Proposition 4.1

soit $P$ une propriété portant sur les entiers.

$P(0)$ et $P(1), \forall k(P(k)$ et $P(k+1) \Rightarrow P(k+2) \Rightarrow \forall n P(n)$

__Démonstration__

On pose $Q(n) = P(n)$ et $P(n+1)$. $\forall n Q(n) \Rightarrow \forall n P(n)$

$H_d: P(0)$ et $P(1)$

$\forall k (P(k)$ et $P(k+1) \Rightarrow P(k+2)$

je veux montrer en utilisant la récurrence simple et $H_d$ que $\forall n Q(n)$

Il faut donc que je démontre que:
- Initialiation $Q(0)$
- Hérédité $\forall k(Q(k) \Rightarrow Q(k+1))$

__Initialisation__

Montrons $Q(0) = P(0)$ et $P(1)$ vrai par $H_d$

__Hérédité__

Soit $k\in\N$.

On suppose $Q(k)$ on veut montrer $Q(k+1)$. On suppose donc $P(k)$ et $P(k+1)=Q(k)$.

Par $H_d$ on a donc $P(k+2)$. On a donc $P(k+1)$ et $P(k+2)$ donc $Q(k+1)$

__Conclusion__

$\forall n\in \N, Q(n)$ est vraie.

---

Donc $\forall n\in \N, P(n)$ est vraie.
- Récurrence à partir d'un certain rang.

Soit $n_0 \in \N$

$P_{(n_0)}$ est vraie.

$\forall n≥n_0, P(n) \Rightarrow P(n+1)$

RCases $\Rightarrow n ≥ n_0 \ P(n)$

## Exercice 3

> On définit la suite de Fibonnacci $(F_n)$ par $F_0=1$ et $F_1=1$ et par la relation de récurrence $F_{n+1}=F_n+F_{n-1}$.
> 
> Montrer que pour tout entier $n>0, F_n < (\frac{7}{4})^n$

Par récurrence double, 
- En commençant à $n=1$

__Initialisation__

- $F_1 = 1 < \frac{7}{4}$ oui
- $F_2 = F_1 + F_0 = 2$
- $2 < (\frac{7}{4})^2 = \frac{49}{16}$

__Hérédité__

Soit $n  ≥ 1$

On suppose que $F_n<(\frac{7}{4})^n$ et que $F_{n+1}<(\frac{7}{4})^{n+1}$

On veut montrer que $F_{n+2}<(\frac{7}{4})^{n+2}$

$F_{n+2} = F_{n+1}+F_n \underset{\text{P. Hyp. Réc}}{<}(\frac{7}{4})^{n+1}+(\frac{7}{4})^n$

$\phantom{F_{n+2} = F_{n+1}+F_n} = (\frac{7}{4})^n(\frac{7}{4}+1)$

$\phantom{F_{n+2} = F_{n+1}+F_n} = (\frac{7}{4})^n(\frac{11}{4})$

or $\frac{11}{4}-(\frac{7}{4})^2=\frac{11}{4}-\frac{49}{16} = \frac{44-49}{16} < 0$

$< (\frac{7}{4})^n(\frac{7}4)^2 = (\frac{7}{4})^{n+2}$

## Exercice 4

> Donner l'ensemble des entiers naturels $n$ tels que $2^n ≥ (n+1)^2$

__Initiatisation__

Pour $n=0, 2^0 = 1$

Or $1≥ (0+1)^2$

**vrai**

__Hérédité__

Soit $n\in\N, $ on suppose que $2^n ≥ (n+1)^2$ et on veut montrer que 

- $2^{n+1}≥(n+2)^2$
- $2^{n+1}-(n+2)^2 ≥ 2\cdot 2^n-  (n+1)^2$
- $\phantom{2^{n+1}-(n+2)^2} ≥ 2(n+1)^2-(n+2)^2$ (Hypothèse de récurrence)
- $= 2n^2+4n+2 - n^2-4n-4$
- $= n^2-2$

Or, $n^2-2≥0$ __ssi__ $n≥2$.

On ne peut ainsi pas appliquer la récurrence classique.

- __Initialisation $n=2$__ **FAUX**
- __Initialisation__ $n=3$ **FAUX**
- __Initialisation__ $n=4$ **FAUX**
- __Initialisation__ $n=5$ **FAUX**
- __Initialisation__ $n=6$ **VRAIE**

$\forall n ≥ 6, P(n) \Rightarrow P(n+1)$ (car vraie pour $n≥2$)

Donc ;\ensemble des entiers qui vérifie $2^n ≥ (n+1)^2$ est $\{0\}\cup\{n≥6\}$

### Théorème de récurrence forte

Si $P(0)$ et
- $(\forall n \in \N, P(0)$ et $P(1)$ et $P(n) \Rightarrow P(n+1))$

Alors, $\forall n \in \N, P(n)$

__Démonstration__ On suppose

*Hypothèse forte*

$P(0)$ et $\forall n \in \N (P(0)$ et $P(1)$ et $P(n) \Rightarrow P(n+1))$


On pose $Q(n) = P(0)$ et ... et $P(n)$

Montrons par récurrence que 
- $\forall n \in \N, Q(n)$ est vraie. 

Il faut donc montrer que les hypothèses du principe de récurrence sont satisfaites par $Q$.

- __Initialisation__

$Q(0) = P(0)$ vraie par $H_f$ (hypothèse de récurrence forte).

- __Hérédité__

Soit $n\in\N.$ 

On suppose $Q(n)$ et on veut montrer $Q(n+1)$. 

On suppose $P(0), P(1)$ et $P(n).$

Par $H_f$ on a alors $P(n+1)$.
- On a donc $P(0)$ et $P(1)$ et $P(n)$ et $P(n+1)$ et donc on a $Q(n+1)$

Donc $\forall n Q(n)$ est vrai, donc $\forall n, P(n)$ est vraie. 


---

Je veux montrer
- $H_f = 0$

Je suppose $H_f$ et je veux montrer $C$. 

On sait que $H_s \Rightarrow C'$

On va montrer $H_s,$ on va en déduire $C'$ et donc de $C'$ on en dédui $C$

## Exercice 5

$\forall n ≥ 2$

$H_n=\frac{1}{1}+\frac{1}2+...+\frac{1}n = \sum^n_{k=1}\frac{1}k$

$\forall n ≥ 1, \exists a \in \N$ et $b \in \N$ avec $b$ impair.

__Initialisation__

$m = 1 \\ H_{2m} = H_2=1+\frac{1}2 = \frac{3}2$

$H_m = \frac{1}{2}$ et $H_{2m}=\frac{H_m}2+\frac{1}1$

$a=1, b=1$

__Hérédité__

Soit $m≥1,$ on suppose qu'il existe $a,b$ avec $b$ impair.

Tel que $H_{2m}=\frac{H_m}2+\frac{a}b$

On veut montrer que $\exists a', b'$ impair tel que:

$H_{2m+2}=\frac{H_m+1}2+\frac{a'}{b'}$

$H_{2m+2}=H_{2m}+\frac{1}{2m+1}+\frac{1}{2m+2}$

On applique l'hypothèse de récurrence.

$H_{2m+2}=\frac{H_m}{2}+\frac{a}b+\frac{1}{2m+1}+\frac{1}{2m+2}$

$\phantom{H_{2m+2}}= \color{green}\frac{H_m}{2} + \frac{1}{2(m+1)}\color{g}+\frac{a}{b}+\frac{1}
{2m+1}$

$\phantom{H_{2m+2}} = \color{green}\frac{H_m+m+1}{2}\color{g}+\frac{a}{b}+\frac{1}{2m+1}$

$\phantom{H_{2m+2}} = \frac{H_{m+1}}{2}+\frac{(2m+1)a+b}{b(2m+1)}$

Posons $a'=(2m+1)a+b \in \N$

$b'. b(2m+1) \in \N$ est impair.

---

> En déduire...

$P(n):\exists p_n$ impair

$\phantom{P(n) :} \exists q_n$ pair non nul.

tel que $H_n = \frac{p_n}{q_n}$

Soit $n \in \N,$ on suppose

$P(2)$ et... $P(n)$ vrai.

On veut montrer que $P(n+1)$ vraie.

- on veut montrer qu'il existe $p_{n+1}$ impair et $q_{n+1}$ pair non nul.

tq $H_{n+1} = \frac{p_{n+1}}{q_{n+1}}$

__1er cas__

On suppose $n+1$ pair c'est-à-dire qu'il existe $m$ tel que:
- $n+1 = 2m$
- $H_{n+1} = H_{2m}=\frac{H_m}{2}+\frac{a}b$ avec $b$ impair.
- $n+1 = 2m$ donc $m = \frac{n+1}{2} ≤ m$

car $n ≥ 1$

Donc $P(m)$ est vrau donc il existe $P_m$ impair et $q_m$ pair.
- tel que $H_m = \frac{p_m}{q_m}$

$H_{n+1} = \frac{H_m}2+\frac{a}b$

$\phantom{H_{n+1}} = \frac{p_m}{q_m} + \frac{a}b = \frac{bp_m+ap_m}{2q_mb}$

Posons $p_n+1 = bp_m+2aq_m$

$q_{n+1} = 2q_mb$ pair

- $bp_m$ est impair car $b$ et $p_m$ sont imapairs.
- $2aq_m$ est pair

Donc $p_{n+1}$ est impair. 

__2ème cas__

On suppose que $n+1$ est impair. 

$n$ est pair, $n+1=2m+1$

$H_{n+1}=H_{2m+1}=H_{2m}+\frac{1}{2m+1} \underset{H_f}{=}\frac{p_{2m}}{q_{2m}}+\frac{1}{2m+1} = \frac{(2m+1)(p_{2m}+q_{2m})}{q_{2m}(2m+1)}$

- $(2n+1)$ impair
- $p_{2m}$ impair
- $q_{2m}$ pair
- $q_{2m}(2m+1)$ pair

Donc $q_{n+1} = q_{2m}(2m+1)$ pair.

$H_n = \frac{p_n}{q_n} = \frac{2k+1}{2l} \notin \N$

car $2$ ne divise pas $2k+1$

## Exercice 7

### Q1

$a$ est minimal si:
- $¬(\exists y \in A, y< a)$

Si l'ordre est total:
- $¬(\exists y \in A, y<a)$

$\iff \forall y \in A, ¬(y<a)$

$\iff \forall y \in A, a ≤ y$

$\iff a$ est le plus petit élément de $A$.


### Q2

$(\N, |)$ quels sont les éléments minimaux?
- les éléments minimaux sont les nombres premiers.

$p$ premier $\iff ¬(\exists y \in \N \backslash \{0,1\})$

tel que $y|p$

Pour $(3\N\backslash \{0\}, /)$
- $3$ est le seul élément minimal

### Q3

$(X, ≤)$ est un ensemble d'ordonné bien fondé.

Si $(\forall x \in X (\forall y < x \ y \in A \Rightarrow x \in A) \Rightarrow A = X)$

---

Sous l'hypothèse $\forall x \in A (\forall y < x \ y \in A \Rightarrow x \in A)$

On va montrer que:

$X \backslash A$ est vide. Par l'absurde:
- On suppose donc que $X \backslash A$ est non-vide. Alors $X \backslash A$ a un élément minimal $x_0$.

On veut utiliser $H$ en $x_0$
- $\forall y < x_0 \ y \in A \Rightarrow x_0 \in A$



Soit $y < x_0$ alors $y \in A$ car $x_0$ est élément minimal de $X \backslash A$ donc $x_0 \in A$

**Contradiction**

$\square$