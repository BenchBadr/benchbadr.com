# Logique et prueve assistée: Les entiers

$\newcommand{\N}{\mathbb{N}}$


Les mathématiques sont fondées sur des axiomes. C'est une matière, contrairement à d'autres domaines car se doit d'être universelle.

On peut parler avec n'impiorte quel mathématicien tout en s'accordant, n'importe où dans le monde. L'antiquité ce n'est pas seulement les grecs. À un moment donné on a voulu formaliser les mathématiques, plus précisément au __19ème siècle__, où on a commencé à vraiment formaliser les mathématiques. On a commencé à écrire les mathématiques comme on le fait aujourd'hui. La formalisation des mathématiques c'est d'abord une écriture mais aussi trouver une __axiomatique__, permettant de théoriser les maths.

Tout ce que l'on sait se démontre selon les axiomes de la théorie des ensembles. On peut voir les maths comme il suit:

$$
\boxed{\fbox{Axiomes} Prop}
$$

Les maths ne sont pas figées car on découvre, démontre continuellement. Cela s'enrichit faisant du cercle extérieur un cercle grandissant. Ces axiomes ont été pris de façon à ne pas contredire notre  intuition. On a des idées de géométrie.

En théorie des ensembles est proche de notre intuition. 

## Construction des entiers et existence de deux ensembles de $\N$

### Axiomes

> -Il existe un ensemble qui est vide. On l'appelle $\phi$ (0).
> - Si $x$ est un ensemble alors $\{x\}$
> - Si $x$ et $y$ sont deux ensembles, on sait construire $x\cup y$. 
>     - C'est l'ensemble dont les éléments sont les éléments de $x$ et les éléments de $y$.
> - Axiome de l'infini. 
>     - On note $x\cup \{x\}=S(x)$
>     - Il existe un ensemble $N$ qui vérifie les propriétés suivantes. 
>         - $\phi \in N$
>         - Pour tout ensemble $x$, si
>             - $x\in N$ alors $S(x)=x\cup\{x\}$ 

### Définitions

- $\phi $ (0 éléments)
- D'après mon 2ème axiome, $\{\phi\}$ (1 élément)
- $\{\phi\}\cup \{\{\phi\}\}=\{\phi, \{\phi\}\} = \{0,1\}$ (2 éléments) 
- $3=\{\phi, \{\phi\}, \{\phi, \{\phi\}\}\} $

On peut montrer qu'il existe un __plus petit ensemble__ (au sens de l'inclusion) qui vérifie l'axiome de l'infini. 
- Le plus petit ensemble est en fait l'intersection de tous les ensembles qui vérifient l'axiome de l'infini.
- On a ainsi construit $N$ est on sait que $N$ satisfait l'axiome de l'infini. 
##  Les axiomes de Péano[^peano]

[^peano]:wiki:fr/Peano

On a la donnée de $\N$ qui contient $0$ qui est clos par $\\S:\N\to\N\\n\to n\cup\{n\}$. 

Les axiomes de Péano c'est un ensemble de propriétés. 
- C'est 3 propriétés qui vérifient $\N$ à partir desquelles on pourra déduire (presque) tout ce que l'on sait sur $\N$.

Ce sont les suivantes:

- $0\in\N$
- $\forall (x,y)\in\N^2$
    - $x\neq y \Rightarrow S(x)\neq S(y)$ 
    - La fonction $S$ est injective. 
- Pour tout sous-ensemble $A$ de $\N$, si $(0\in A$ et $\forall x\in\N)$
    - $(x\in A \Rightarrow S(x)\in A)$ alors __$A$ est clos par $S$__
    - $\Rightarrow A = \N$
    - C'est exactement le concept de récurrence

Une autre forme du 3ème axiome:
- $(3')$ Pour toute propriété $P$ portant sur les entiers __si__
    - $P(0)$ et $\forall x\in\N (P(x)\Rightarrow P(x+1))$ 
    - __Alors__ $\forall x\in\N $ $P(x)$
- $P_0:0\in\N\\ P_1 \forall x \in \N, S(x)≠0$
{tips}[/$S(x)$ désigne les successeurs./]

> __Exemple__:
> 
> $3 =\{0,1,2\}\\
> S(3)=3\cup\{0,1,2\}=\{0,1,2,3\}=4$

On suppose $(3')$, on montre $(3)$. On se donne $A \subset \N$. On suppose que:
- $0\in A$
- $\forall x \in A (x\in A \Rightarrow S(x) \in A)$
- On veut montrer que $A=\N$

---
__Initialisation__
- On pose $P(x):n\in A$
    - $0\in A: P(0)$ 

__Hérédité__


On suppose $\forall x\in\N (x\in A \Rightarrow S(x) \in A )$

$\forall x \in \N(P(x) \Rightarrow P(S(x))$

On applique $(3')$ donc:
- $\forall x \in \N$ $(P(x)))$

__Conclusion__

$\forall x \in \N, x\in A$ donc $A=\N$.

__Réciproquement__, on suppose $3$ et on veut montrer $(3')$. On se donne une propriété $P$. On pose: $A=\{n\in\N;P(n)\}$.

- $(3) \to (3')$
    - On pose $A=\{n\in\N, P(x)\}$ 
- $(3')\to(3)$ 
    - On pose $P(x)=n\in A$ 


### Proposotion

La fonction $S$ est bijective de $\N$ dans $\N\backslash\{0\}$

---
*Preuve* : $S$ est injective ($P_2$)

- Montrons que $S$ est surjective.
    - $S\in\N\to \N\backslash\{0\}$
    - $x\to y=S(x)$

$\forall y\in\N\backslash\{0\}, y $ admet un antécédent.

On va utiliser l'axiome $P_3$

$A=\{0\}\cup \{y\in\N\backslash\{0\}\}$

Démontrer que $S$ est surjective de $\N$ dans $\N\backslash\{0\}$.

Cela revient à démontrer que $A=\N$.

Vérifions les hypothèses de $P_3$ pour $A$. 

__Initialisation__

- $0\in A$ **OK**

__Hérédité__

- Soit $y\in \N$, on suppose que $y\in A$. 
    - $S(y)\in A$
    - $x=y$
    - $S(y)=S(y)$, 
    - Donc $S(y)\in A$
    - donc $A=\N$

###  Définition par récurrence

__Exemple__

*Définition par récurrence*

Soit $(u_n)$ la suite réelle définie par $u_0=\sqrt{2}$. 

$\forall n, u_{n+1}=\frac{1}{2}u_n-\frac{1}{3}$

### Proposition 2.3

Soit $E≠\phi$. 
- Soit $a\in E$
- Soit $h:E\to E$

$(C)$ Il __existe__ une __unique__ fonction (ou suite) $f:\N \to E$ vérifiant $f(0)=a$ et $\forall x \in \N\\ f(S(x))=h(f(x))$. 


### Unicité 2.3

on suppose qu'il existe deux fonctions $f,g:\N\mapsto E$  qui vérifient $(C)$.

$f(0)=g(0)=a$

$\forall x \in \N, f(S(x))=h(f(x))\\g(S(x))=h(g(x))$.

- Mq $A$ vérifie les hypothèses $P_3$ 
    - $0\in A$ car $f(0)=g(0)$
    - clôture par successeur

Soit $n\in\N,$ on suppose que $n\in A$ donc $f(n)=g(n)$

$f(S(x))=h(f(x)) \\ = h(g(x))\\= g(S(x))$

Donc $S(n)\in A$ donc par $P_3, A = \N$ (donc $f=g$).

### Existence 2.3 

$A=\{n\in\N, f(n)$ est définie$\}$

Si on montre que $A=\N$, on a fait. On utilise $P_3$

- $f(0)=a$ donc $0\in A$
- $f(x)$ est définie, c'est-à-dire $n\in A$.

Par $(C), f(S(x))=h(f(x))$ donc $f(S(n))$ est définie donc $S(n)\in A$.

Par $P_3, A=\N$ donc $f$ est définie partout.

### Corollaire 3.4

On peut définir une addition à gauche par $x$.

- $+x: \N \to \N$
- $y\mapsto x+y$

__Preuve__

On pose $+_x(0)=x, x+0=x\\+_x(S(y)) = S(+x(y))\\=(x+y)+1$

### Corollaire 3.5

On peut définir la multiplication à gauche par $x$

$m_x\mapsto \N\\y\mapsto x\cdot y$

__Preuve__

$m_x(0)=0$, $x\cdot0=0$

$m_x(S(y))=m_x(y)+x; x\cdot S(y)\\=x(y+1)$

### Corollaire / Factorielle

$\begin{cases}0!=1\\(S(x))!\mapsto (x+1)\cdot x!\end{cases}$ 


## Proposition 2.6

Démontrer par récurrence les propriétés suivantes:

$\forall x,y,z\in \N\\(x+y)+z=x+(y+z)\\\forall x,y\in\N, x+y=y+x\\\forall x,y,z\in \N, x\cdot(x+y)=x\cdot y+x\cdot z \\ \forall x, 1 \cdot x = x$

## Définition de l'ordre dans $\N$

### Définition 3.1

Pour tout $x\in\N$, on définit $I_x$ par récurrence.

$I_0=\phi\\I_{S(x)}=I_x \cup \{S(x)\}$.

On définit « $≤$ »:
- $x ≤ 0 \iff x = 0$

$\forall y ≠ 0, x≤y$

### Proposition 3.2

« $≤$ » est une relation d'ordre total. 

---

À faire en exercice (définition & proposition).

### Définition 3.3 - Bon ordre

Soit $E≠\phi$, muni d'une relation d'ordre $≤$.

On dit que $«≤»$ est un bon ordre sur $E$ si tout sous-ensemble de $E$ si tout sous-ensemble non vide de $E$ admet un plus petit élément.

$(R,≤)$ n'est pas un bon ordre $]-1,1[$ n'a pas de plus petit élément.

### Théorème 3.4

$(\N,≤)$ est bien ordonné c'est-à-dire toute partie non-vide de $\N$ admet un plus petit élément.

## Ordre sur $\N$ est axiomatisation par l'ordre

### Proposition 3.3
- Il existe une unique relation sur $\N$ qui vérifie $\forall x \in \N, x ≤ 0 \iff x=0$
- $\forall x,y \in \N, x≤ S(y) \iff x≤y$ ou $x=S(y)$

### Proposition 3.4

La relation $≤$ définie en 3.3 est une relation d'ordre totale (pour tout couple d'élément, l'un est plus petit que l'autre) sur $\N$ et qui verifie de plus.

$$
x≤y \iff S(x) ≤ S(y)
$$ 

On définit l'ordre strict sur $\N$

$$
x<y \iff x≤y \text{ et } x≠y
$$

$x<y\iff S(x)≤y$

$x<S(y)\iff x≤y$

$x<y\iff S(x) < S(y)$

> __ Preuve__ - Reflexivité (Prop.3.3)


$0≤0$ *vrai* par (1) avec $x=0$

- $x≠0$ donc $\exists y$ tel que $x=S(y)$
- On veut donc démontrer que $S(y)≤S(y)$ on applique $(2)$ avec $x=S(y).$
- Comme $S(y)=S(y)$ donc $S(y)≤S(y)$

> __Preuve__ - Transitivité

Soit $x,y,z\in\N,$ on suppose que $x≤y$ et $y≤z$. On veut montrer que $x≤z.$

On raisonne par récurrence sur $z$. 

$P(z): \forall x,y \in \N$ $(x≤y)$ et $y≤z \Rightarrow x≤z)$

Montrons $\forall z P(z)$ par récurrence sur $z$

__Initialisation__

$P(0): \forall x,y \in \N$ $(x≤y$ et $y≤0$ alors $x≤0)$

Si $y≤0$ alors, par $(p3.3)$ $y=0$ et:

- Si $x≤y=0$ alors $x=0$
- Et donc, on a bien $x≤0$ par $(1)$

__Hérédité__

Soit $z\in \N, $ on suppose $P(z) / P(z+1)$

On admet qu'on a démontré $x≤y \iff S(x) ≤ S(y)$

On suppose $P(z)$

- $\forall x,y \in \N, x≤y$ et $y≤z \Rightarrow x ≤ y$

on veut montrer 
- $\forall x,y \in \N, x ≤ y$ et $y ≤ z+1 \Rightarrow x ≤ z+1$

ou a $y≤z+1$ alors $y≤z$ ou $y=S(z)$

Si $y≤z$ on applique $P(z)$ donc $x≤y$. 

Si $y=S(z), x ≤ y$

Donc $x≤S(z)$ on a bien $P(S(z))$

__CCL__ vrai $\square$

### Prop 3.6

$\forall x,y \in \N, x ≤ y \iff \exists z \in \N | x+z = y$

__Preuve__

On pose $x≤y: \exists z | x+z = y$

On montre $≤$ vérifie $(1)$ et $(2)$

Par unicité, on a donc $x≤y \iff x ≤ y$

## Bon ordre sur $\N$

### Définition - Bon ordre 

On dit qu'un ensemble ordonné $(X, ≤)$ est un bon ordre si tout sous-ensemble de $X$ non-vide admet un plus petit élément.

### Théorème

$\N$ est bien ordonné.

__donc__ on fait une démonstration par contraposée. $\forall A \sub \N, (A≠\phi \Rightarrow A$ a un plus petit élément $)$

Soit $A\sub \N$

---
Supposons que $A$ n'a pas de plus petit élément. On va montrer que $A$ est vide. 

$P(n) : \forall k ≤ n, k \notin A$.

$A=\phi\iff \forall n P(x)$

Démontrons par récurrence que $\forall n \in \N, P(x)$

__Initialisation__

$P(0): 0 \notin A,$. Vrai, si $0 \in A, 0 $ serait forcément le plus petit élément de $A$. 

__Hérédité__

Soit $n \in \N$. Supposons $P_n$ et montrons $P_{n+1}. $ On suppose donc $\forall k \in \N, k ≤ n, k \notin A.$ On veut montrer $\forall k \in \N, k≤n+1, k\notin A$ ($P_{n+1}$)

Par hypothèse de récurrence, on sait déjà que $\forall k ≤ n, k\notin A.$

Il suffit de montrer que $n+1\notin A$

$[$car par $(p3.3)$ de l'ordre, dire que $k≤n+1 \iff k≤n$ ou $k≤n+1]$

Montrons par l'absurde que $n+1\notin A.$

Supposons que $n+1\in A.$

Alors $n+1$ est le plus petit élément de $A$, __contradiction__

Donc $n+1\notin A$.
- Donc $\forall k ≤ n+1, k\notin A$

Donc $P(n+1)$

__Conclusion__

$\forall n, P(n)$ vrai donc $A=\phi$ donc $(\N, ≤)$ est bien ordonné.

---

__Exercice__

{tips}[/L'ordre lexicographique:

$(x,y)≤(x',y')<x$

si $x<x'$ ou $x=x'$ et $y≤ y'$/]

> Montrer que $(\N\times \N)$ est bien ordonné.

__D'une part, montrons qu'il s'agit d'un ordre__

- Reflexive
    - $(E, ≤) \forall x\in E, x≤ x$ 


Soit $(x,y)\in \N\times\N$

Montrons que $(x,y)≤(x,y)$

On a $x=x$ et $y≤y$. On a $II$ donc $(x,y)≤(x,y)$

---

- Antisymétrique
    - $x≥y \text{ et } y≤x \Rightarrow x=y$ 

Soit $(x,y),(x',y')\in\N$

On suppose que $(x,y)≤(x',y')$
- $x<x'$
- $x=x'$ et $y≤y'$

$(x',y')≤(x,y)$
- $x'<x$
- $x=x'$ et $y'≤y$

$\fbox{1}$

$x<x' \\ x' < x$

Impossible

$\fbox{2}$

$x<x'$ et $(x=x'$ et $y'≤y)$ __impossible__

$\fbox{3}$

$(x=x'$ et $y≤y')$ et $x'<x$ __impossible__

$\fbox{4}$

$x=x'$ et $y≤y'$ et $y'≤y$
- donc $x=x'$ et $y=y'$

Donc $(x,y)=(x',y')$

---

- Transitivé
    - $\forall x,y,z\in E (x≤y$ et $y≤z\Rightarrow x≤z)$


Soit $(x,y), (x',y'), (x'', y'')\in\N^2.$ 

On suppose $(x,y)≤(x',y')$
- $x<x'$
- $x=x'$ et $y≤y'$

On suppose $(x',y')≤(x'', y'')$
- $x'<x''$
- $x'=x''$ et $y'≤y''$

$\fbox{1} x<x'$ et $x'<x''$ alors $x<x''$ et $(x',y)≤(x'', y'')$

$\fbox2 x<x'$ et $x'=x''$ et $y'≤y''$

Alors $x<x''$ donc $(par $I$)$ que $(x,y)≤(x'', y'')$

$\fbox3 x=x'$ et $y≤y'$ et $x'<x''$ alors $x<x''$ t donc $(I)$ $(x,y)≤(x'', y'')$

$\fbox4$

$x=x'$ et $y≤y'$ et $x'=x''$ et $y'≤y''$


$
x=x'=x''$ et $y≤y'≤y''$ donc $x=x''$ et $y≤y''$ donc $(II) (x,y)≤(x'',y'')$

---

__D'autre part, montrons qu'il s'agit d'un bon ordre__

On a $(\N\times\N, ≤)$, montrons qu'il est bien ordonné.  D'après def on a $(x,y)$ un plus petit élément au rang initial.

> Raisonnement par analyse synthèse

__Bon ordre__

Soit $A\sub \N^2, A = \phi$

__Analyse__ : Supposons que $A$ admette un plus petit élément que l'on appelle $(x_0, y_0).$

$$
\forall (x,y)\in A, (x_0, y_0)≤(x,y)
$$

Donc $\forall (x,y)\in A$ ou bien $x_0< x$ ou bien $x_0= x$ et $y_0≤y$

Donc dans tous les cas,

$\forall x $ tel que $\exists y, (x,y) \in A$

On a $x_0≤x$
- $\forall x,y\in A$
  - $x_0≤x$ 

Donc $A_1 = \{x\in\N, \exists y (x,y) \in A\}$

$x_0$ est le plus petit élément de $A_1$.

Soit $A_{x_0}=\{y\in\N, (x_0,y)\in A\}$ on a forcément:
- $y_0 ≤ y$ donc $y_0$ est le plus petit élément de $A_{x_0}$

__Synthèse__

Posons $x_0 = \min\{x\in\N, \exists y, (x,y)\in A\}$

$y_0 = \min\{y\in\N, (x_0, y) \in A\}$

$x_0$ et $y_0$ existent car $\N$ est bien ordonné et $A_1≠\phi$.

car $A_{x_0}≠\phi$

Mq $(x_0, y_0)$ est le plus petit élément de $A$. 
- Soit $(x,y)\in A$, on a $x_0 ≤ x$.
- On a bien $x_0<x$ et alors, par $(I)$ $(x_0, y_0)≤(x,y)$ ou bien $x_0=x$, alors $y_0≤y$ donc par $II$. $(x_0, y_0)≤(x,y)$
