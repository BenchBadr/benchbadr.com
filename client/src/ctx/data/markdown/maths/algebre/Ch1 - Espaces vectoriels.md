lang:fr
desc:Ce cours présente les espaces vectoriels, leurs sous-espaces et bases. Il explique les notions de familles libres, génératrices et de décomposition unique. Enfin, il aborde la dimension comme outil de classification.
date:30/01/2025

===
$\newcommand{\R}{\mathbb{R}}\newcommand{\N}{\mathbb{N}}\newcommand{\sub}{\subset}$
# I -  Espaces vectoriels

### Exemple introductif

Considérons $\R^3$

> [!tips]
> $\R^3$ : ensemble des vecteurs à 3 coordonnées (réelles)

> [!check]
> Exemples d'éléments de $\R^3$ : $(1,0,-2),(-3,-1,\frac{1}{2})...$etc

- On peut additionner deux vecteurs de $\R^3$
    - $(1,-1,2)+(0,3,1)=(1,2,3)$ 
- On peut multiplier un vecteur par un nombre:
    - $3(1,-1,2) = (3,-3, 6)$ 

Grossièrement, un espace vectoriel est un ensemble qui se comporte comme $\R^3$. Un ensemble dans lequel on peut additionner deux éléments et multiplier un élément par un nombre.

# II -  Sous-espaces vectoriels: Conditions et définitions

### **Définition** - *Propriétés de l'espace vectoriel*

Soit $\mathbb{K}$ égal à $\R$ ou $\mathbb{C}$.

Un $\mathbb{K}$-espace vectoriel est un ensemble non-vide $E$ muni de deux opérations. 
- Une opération « $+$ »
    - compose deux éléments de $E$ pour en donner un seul.
- Une opération «$\cdot$»
    - compose un élément de $\mathbb{K}$ avec un élément de $E$ pour donner un élément de $E$.

De plus, ces opérations doivent vérifier les propriétés suivantes:
1. L'opération $+$ est commutative
    - $\forall (u,v)\in E^2, u+v = v+u$
2. L'opération $+$ est associative
    - $\forall (u,v,w)\in E^3, (u+v)+w=u+(v+w)$
3. L'opération $+$ possède un unique élément neutre, noté $0_E$
    - $\forall u\in E, u+0_E=u$
4. Tout élément de $E$ possède un symétrique pour l'opération $+$:
    - $\forall u \in E, \exists u'\in E, u+u'=0_E$
    - Le symétrique de $u$ est noté $-u'$
5. $\forall u\in E, 1\cdot u = u$
6. $\forall \lambda, \mu \in \mathbb{K}, \forall u\in E, (\lambda\mu)\cdot u=\lambda(\mu\cdot u)$
7. Distributivité de $+$ par rapport à $\cdot$.
    - $\forall \lambda \in \mathbb{K}, \forall u,v \in E, \lambda(u+v)=\lambda\cdot u + \lambda \cdot v$
8. Distributivité de $\cdot$ par rapport à l'addition dans $\mathbb{K}$
    - $\forall \lambda, \mu \in \mathbb{K}, \forall u \in E, (\lambda+\mu)\cdot u=\lambda \cdot u+\mu\cdot u$

### **Remarques**

- Les éléments de $E$ sont appelés vecteurs.
- Par opposition, les éléments de $\mathbb{K}$ sont appelés scalaires.
- L'élément neutre $0_E$ est aussi appelé vecteur nul ou élément nul et on le note parfois plus simplement $0$.
- On a supposé $\mathbb{K}=\R$ ou $\mathbb{K}=\mathbb{C}$. En fait, $\mathbb{K}$ peut être plus généralement un corps. En pratique, dans les exercices $\mathbb{K}=\R$ est pratiquement toujours le cas.
- Un $\mathbb{K}$-espace vectoriel est aussi appelé un espace vectoriel sur $\mathbb{K}$.
- Souvent, s'il n'y a pas d'ambiguïté, on ne précise pas $\mathbb{K}$. On dit simplement « un espace vectoriel ».
- En toute rigueur, un espace vectoriel est un triplet $(E, +, \cdot)$. En pratique, on dit souvent simplement « Soit $E$ un espace vectoriel ». 
- L'opération $+$ est appelée addition, c'est ce qu'on appelle une loi de composition interne sur $E$ (c'est-à-dire une application de $E\cdot E$ dans $E$).
- L'opération « $\cdot$ » est appelée une multiplication par un scalaire. C'est ce qu'on appelle une loi de composition externe sur $E$ (une application de $\mathbb{K} \cdot E$ dans $E$). On note souvent $\lambda\cdot u$ plus simplement $\lambda u$

L'hypothèse d'unicité de $0_E$ est superflue. Si l'élément neutre $0_E$ existe, il est nécessairement unique (c'est une conséquence de la commutativité de l'opération $+$).

De même, si le symétrique d'un élément existe, il est nécessairement unique (c'est une conséquence de la commutativité et de l'associativité de $+$). 

### Exemples de $\R$-espaces vectoriels

- $\R^3$ (plus généralement $\R^n$ pour n'importe quel $n$)
- Ensemble des fonctions de $\R$ dans $\R$ ($\mathscr{F}(\R,\R)$ ou $\R^{\R}$). (l'élément neutre est la fonction nulle, la fonction qui vaut $0$ pour tout $x\in\R$
- Ensemble des suites (réelles) (l'élément neutre est la suite nulle, dont chaque terme vaut $0$)
- Ensemble des polynômes $\R[X]$ (l'élément neutre est le polynôme nul).

### **Remarque** 
- Les espaces vectoriels $\R^2$ et $\R^3$ s'interprètent géométriquement. Un vecteur de $\R^2$ s'interprète comme un point du plan. 
- Un vecteur de $\R^2$ s'interprète comme un point du plan. 
- Un vecteur de $\R^3$ s'interprète comme un point de l'espace.

## **Proposition** - *Règles de calcul*

Soit $E$ un $\mathbb{K}$-espace vectoriel. Alors:

- $\forall u \in E, 0\cdot u=0_E$

### Preuve
$
(0+0)u=0\cdot u+0\cdot u \\
\Rightarrow 0\cdot u = 0\cdot u+0\cdot u \\
\Rightarrow 0_E+0\cdot u=0\cdot u + 0\cdot u \\
\Rightarrow 0_E + 0_E = 0\cdot u + 0_E \
\\ \Rightarrow 0_E = 0\cdot u
$
- $\forall \lambda \in \mathbb{K}, \lambda \cdot 0_E = 0_E$
- $\forall u\in E, (-1)\cdot u = -u$
- $\forall \lambda\in\mathbb{K}, \forall u\in E, \lambda \cdot u = 0_E \Rightarrow \lambda = 0$ ou $u=0_E$

## **Définition** - *Soustraction*

Soit $E$ un $\mathbb{K}$-espace vectoriel. On peut définir l'opération $-$ (soustraction) de la façon suivante. 

$$
\forall (u,v) \in E, u-v = u+(-v)
$$

## **Proposition** 

L'opération de soustraction vérifie des propriétés de distributivité.  (comme l'addition)

- $\forall \lambda, \mu \in \mathbb{K}, \forall u \in E$,
    - $(\lambda - \mu)\cdot u=\lambda \cdot u - \mu \cdot u$
- $\forall \lambda \in \mathbb{K}, \forall u,v\in E$ 
    - $\lambda(u-v)=\lambda\cdot u-\lambda \cdot v$  

## **Définition**

Soit $F$ une partie de $E$. On dit que $F$ est un sous-espace vectoriel de $E$ si:
- (i) $0_E \in F$
- (ii) $F$ est stable par addition: $\forall u,v\in F, u+v\in F$
- (iii) $F$ est stable par multiplication par un scalaire: $\forall \lambda \in \mathbb{K}, \forall u \in F, \lambda u \in F$

> [!warn]
> À connaître absolument

### __Exemple__

On se place dans l'espace vectoriel $\R^2$. 

Soit $F = \{(x,y) \in \R^2|x=y\}$

Montrons que $F$ est sous-ensemble vectoriel de $\R^2$.
- $(0,0)\in F$ (car $0=0$)
- Soit $u,v\in F$
    - On note $(x,y)$ les coordonnées de $u$.
    - $(x',y')$ les coordonnées de $v$
    - On a 
        - $u+v=(x+y)+(x'+y')=(x+x',y+y')$ 
    - Or, $x+x'=y+y'$ (car $x=y$ et $x'=y')$
    - Donc $u+v\in F$
    - Soit $\lambda \in \R$.
        - Soit $u\in F$. On note $(x,y)$  les coordonnées de $u$.
            - On a $\lambda u = \lambda (x,y) = (\lambda x, \lambda y)$ 
            - Or, $\lambda x=\lambda y$ (car $x=y$)
            - Donc $\lambda \cdot u \in F$

### __Contre-exemple__

On se place dans l'espace vectoriel $\R^2.$ On considère:

$F=\{(x,y)\in\R^2 | y ≥ 0\}$

Il s'agit d'un sous-ensemble de $\R^2$.
- $(0,0)\in F$ **Vrai**
- Stable par addition (loi de composition interne « + ») **vraie**
- stable par multiplication par un scalaire **FAUX**
    - en multipliant par un scalaire négatif la 2ème composante ne respecte pas la condition
    - $(0,1)\in F$ mais $-1\cdot (0,1) \notin F$ 

{check}[/Il suffit de donner un contre-exemple pour dire si un ensemble n'est pas un sous-espace vectoriel./]

### __Remarque__

- Pour un espace vectoriel $E$, $\{0_E\}$ et $E$ sont des espaces vectoriels. 
- En revanche, l'ensemble-vide n'est pas un espace vectoriel car ne comprend pas l'élément nul.
- Dans la définition d'un sous-espace vectoriel, les propriétés de stabilité peuvent se  « condenser » en une propriété unique:
    - $\forall \lambda, \mu \in \mathbb{K}, \forall u,v \in R, \lambda u+\mu v \in F$   

En pratique, pour démontrer qu'un ensemble est un sous-espace vectoriel, on vérifie cette propriété unique (car plus rapide). 

## **Proposition** - *Reconnaître tout de suite un sev*

Les solutions d'un système à $p$ inconnues et à second membre nul forment un sous-espace vectoriel de $\R^p$.

### __Exemples__

$F=\{(x,y,z,t) \in \R^4 \left| \begin{matrix}x-z+2z-t=0\\\text{ et }2x+y+z+t=0\end{matrix}\right\}$

$F$ est un sous-espace vectoriel.

---

- $F=\{(x,y)\in\R^2 | 3x+y=0\}$
    - droite passant par l'origine 
    - droite du plan $\R^2$
- $F=\{(x,y,z)\in\R^3|2x-y+3z=0\}$
    - plan passant par l'origine $(0,0,0)$
- $F=\{(x,y,z)\in\R^2\left| \begin{matrix}x+y=z=0 \\ \text{ et }x-y+3z=0\end{matrix}\right\}$
    - droite de l'espace $\R^3$ (... théorème du toit?) passant par l'origine

Les espaces vectoriels s'interprètent comme des droites et des points. 

## **Proposition** - *Un sev est un ev*

Soit $E$ un $\mathbb{K}$-espace vectoriel.
- Soit $F$ un sous-espace vectoriel de $E$ 

Alors $F$, muni des opérations de $E$ est un espace vectoriels.

### Preuve
Les propriétés d'un sev garantissent que $F$ est non-vide, que $+$ est une loi interne sur $F$ et que $« \cdot »$ est une loi externe sur $F$. 

Parmi les 8 propriétés que doivent vérifier $+$ et $\cdot$ sur $F$, il n'y a que l'existence de l'élément neutre et l'existence du symétrique qui ne sont pas automatiques. 

Le fait que $0_E \in F$ est une propriété des sev.

Puisque $F$ est stable par multiplication par un scalaire.

$\forall u \in F, \lambda u \in F$

En particulier, $\forall u \in F, -u\in F$ .


### __Remarque__

En pratique, pour démontrer qu'un ensemble est un espace vectoriel. 

On peut démontrer qu'il est un sous-espace vectoriel d'un espace vectoriel usuel. 

### __Exemple__

Pour montrer que l'ensemble des fonctions continues est un espace vectoriel, on peut montrer que c'est un sous-espace vectoriel des fonctions réelles.

- On a, $\mathbb{K}[x], \R^n,\R^{\R}...$ (voir exemples de $\R$-espaces vectoriel.

## **Proposition**

Soit $E$ un $\mathbb{K}$-espace vectoriel. Soit $F$ et $G$ deux sous-espaces vectoriels de $E$. Alors $F\cap G$ est un sous-espace vectoriel.

### Preuve
- $0_E \in F$ (i) et $0_E\in G$ (ii) donc $0_E\in F\cap G$

- (i) car $F$ est un sev
- (ii) car $G$ est un sev

 - Soit $\lambda, \mu\in \mathbb{K}$. Soit $u,v \in F\cap G$
 - Puisque $F$ est un sev et $u,v\in F:$
     - $\lambda u + \mu v \in F$
-  Puisque $G$ est un sous-espace vectoriel et $u,v\in G$
    - $\lambda u + \mu v \in G$  

Donc $\lambda u+\mu u \in F\cap G$

Finalement, $F \cap G$ est bien un sous-espace vectoriel. 

## __Remarque__

En général $F \cup G$ n'est pas un sous-espace vectoriel. (voir exercice en TD) sauf si l'un est inclu dans l'autre.

# II -  Sous-espaces vectoriels engendrés

## **Définition** - *Combinaisons linéaires*

Soit $E$ un $\mathbb{K}$-espace vectoriel. 

Soit $v_1, ..., v_n$ des vecteurs de $E$. Une combinaison linéaire de $v_1, ..., v_n$ est un vecteur de la forme $\lambda_1v_1+...+\lambda_nv_n$  où $\lambda_1, ..., \lambda_n $ sont des scalaires (éléments de $\mathbb{K}$).

Les scalaires $\lambda_1, \lambda_n$ sont appelés coefficients de la combinaison linéaire. 

## **Définition** - *Sous-espace engendré*

Soit $v_1, ..., v_n$ des vecteurs de $E$. 

On appelle sous-espace vectoriel engendré par $v_1, ..., v_n$ l'ensemble des combinaisons linéaires de $v_1, ... , v_n$.

On note cet ensemble $\text{Vect}(\{v_1, ..., v_n\})$.
- Autrement dit
$\text{Vect}(\{v_1, ..., v_n\}) = \{\lambda_1v_1+...+\lambda_nv_n | \lambda_1, ..., \lambda_n \in \mathbb{K}\}$

## **Proposition** - *Vect est bien sev*

Un sous-espace engendré est bien un sous-espace vectoriel. C'est le plus petit (au sens de l'inclusion) sous-espace vectoriel contenant $v1, ..., v_n$.

Autrement dit, si $F$ est un sev contenant $v_1, ..., v_n$ alors $\text{Vect}(\{v_1, ..., v_n\})$

### Preuve
Laissée en exercice... (°°°)

### __Exemples__

- Dans $\R^3$
    - $\text{Vect}(\{(1,0,0), (0,1,0)\}) = \{a(1,0,0)+b(0,1,0)|a,b\in\R\} = \{(a,b,0)| a,b \in \R\} \\ = \{(x,y,z)\in\R^3 | z=0\}$ 
        - interprétation géométrique: plan passant par l'origine

$\text{Vect}(\{(1,1,1)\}) = \{\lambda(1,1,1)|\lambda \in \R\} = \{(\lambda, \lambda, \lambda)|\lambda\in\R\}$, 
    - __interprétation géométrique__ : il s'agit ainsi d'une droite passant par l'origine.


Dans $\R[X]$ (espace des polynômes)

$\text{Vect}(\{1,X^2,X^4\})\\= \{aX^4+bX^2+c|a,b,c\in\R\}$

### __Remarque__ 

Si l'on constate qu'un ensemble est écrit ou peut s'écrire comme un sous-espace engendré, on peut immédiatement dire que c'est un sous-espace vectoriel. 

### **Remarque** - *Définition de sevg*

On peut définir le sous-espace engendré par un ensemble $A$, non nécessairement fini. C'est l'ensemble des combinaisons linéaires construites à partir d'un ensemble fini de vecteurs de $A$. 

On le note $\text{Vect}(A)$

# IV -  Somme de sous-espaces vectoriels

## **Définition**

Soit $E$ un $\mathbb{K}$-espace vectoriel. Soit $F$ et $G$ deux sous-espaces vectoriels de $E$. 

On appelle somme de $F$ et $G$, et on note l'ensemble $\{u+v|u\in F, v\in G\}$

On note cet ensemble $F+G.$

### __Exemple__

Dans $\R^3:$
- $F=\text{Vect}(\{(1,0,0)\}) = \{(a,0,0)|a\in\R\}$
- $G=\text{Vect}(\{0,1,0\}) = \{(0,b,0)|b\in\R\}$
- $F+G = \{(a,b,0)|a\in\R, b \in \R\}$

Dans $\mathbb{R}[X]$ (espace des polynômes)
- $F = \text{Vect}(\{X,1\}) = \{aX+b | a,b \in \R\}$
- $G = \text{Vect}(\{X^2, 1\}) = \{aX^2+b | a,b \in \R\}$

$F+G=\{aX^2+bX+c | a,b,c\in\R\}$

## **Proposition** - *sum 2 sev = sev*

La somme de deux sous-espaces vectoriels est un sous-espace vectoriel. Plus particulièrement le plus petit sous-espace vectoriel contenant $F$ et $G$. (le plus petit au sens de l'inclusion)

Autrement dit, si $H$ est un sous-espace vectoriel tel que $F\cup G \sub H$ alors $F+G\sub H$

### Preuve
En exercice (°°°)


## **Définition** 

Soit $E$ un $\mathbb{K}-$espace vectoriel. Soit $F$ et $G$ deux sous-espaces vectoriels de $E$. 
On dit que $F$ et $G$ sont supplémentaires dans $E$ si:
- $F+G = E$ et,
- $F\cap G = \{0_E\}$

On note alors $F\oplus G = E$.

## **Proposition** - *Utilité de la supplémentarité*

Soit $E$ un $\mathbb{K}$-espace vectoriel . Soit $F$ et $G$ deux sous-espaces vectoriels supplémentaires dans $E$. Il y a équivalence entre: (ssi)
- (i) $F$ et $G$ sont supplémentaires dans $E$
- (ii) $\forall u \in E, \exists! u_F\in F, \exists! u_G \in G, u = u_F +u_G$ (décomposition unique de $u$ sur $F$ et $G$.)

--- 

## **Proposition** - *Supplémentarité* (autre façon de l'écrire)

Deux espaces $F$ et $G$ sont supplémentaires dans $E$ __ssi__ tout vecteur de $E$ se décompose de manière unique en une somme d'un élément de $F$ et d'un élément de $G$

...

$\begin{cases}F+G = E \\ F\cap G = \{0\}\end{cases}\iff \forall v \in E, v=v_E+v_F$ (écriture unique)

### Preuve

($\Rightarrow$) Supposons  $F$ et $G$ supplémentaires. Puisque $F+G=E$ alors: 
- $\forall u\in E, \exists v_F\in F, \exists v_G \in G, v=v_F+v_G$
- Supposons qu'il existe $v_F, v_F'\in F$ et $g_F, g_{F}'$
- Tels que $\begin{matrix}v=v_F+v_G & \text{et} & v=v_F'+v_G'\end{matrix}$
	- D'où $v_F+v_G = v_F'+v_G'$
	- D'où $v_F+v_G = v_F'+v_G'$. D'où $v_F-v_F' \ \color{green}\in F\color{r}=v_G'-v_G \ \color{green}\in G\color{g}$
- Donc $v_F - v_F' \in F\cap G. $ Donc $v_F-v_F'=0$.
- De même, $v_G-v_G'=0$
$\iff$ Supposons qu'il existe une décomposition unique de tout élément de $E$ sur $F$ et $G$.
Puisque $\forall v \in E, v =v_F+v_G,$ on a $E\sub F + G$
D'où $E=F+G$ car $F+G$ est nécessairement inclus dans $E$. 
- $v\in F\cap G$
On a $v = ? (\in F)+? (\in G)$
$= v (\in F) + 0 (\in G) = 0 (\in F) + v (\in G)$
Or, cette décomposition est unique. 
Donc $v=0$ d'où $F\cap G\in \{0\}$
L'inclusion réciproque étant évidente, on obtient $F\cap G=\{0\}$.

### __Exemples__

On se place dans $\R^2$. 

On considère 
- $F=\text{Vect}(\{(2,1)\})$
- $G = \text{Vect}(\{(0,1)\})$

### __Exemple 2__

On se place dans $\R^3$
- Deux droites : $F\cap G$
- Une droite et un plan 
- deux plans

Si $F$ est un plan et $G$ est une droite. 
- $F\cap G = \begin{cases}\text{la droite }G\text{ si }G\sub F\\ \text{l'origine si }G\not \sub F\end{cases}$
- $F+G = \begin{cases}F \text{ si }G\sub F \\ \R^3 \text{ si }G\not \sub F\end{cases}$

### __Exemple 3__

On se place dans $\R^3$

Si $F$ et $G$ sont deux plans distincts:
- $F\cap G = $ une droite
- $F+G = \R^3$

### __Exemple 4__

On se place dans l'espace des fonctions de $\R$ dans $\R$ $(\mathscr{F}(\R, \R))$

On note 
- $\mathscr{I}$ l'ensemble des fonctions impaires 
- $\mathscr{P}$ l'ensemble des fonctions paires

> [!tips]
> - $f$ paire: $\forall x \in \R, f(-x)=f(x)$
> - $f$ impaire: $\forall x \in \R, f(-x)=-f(x)$


Montrons que $\mathscr{F}(\R;\R) = P\oplus I$
- Soit $f \in P \cap I$. Alors $f$ est à la fois paire et impaire.
- Donc $\forall x \in \R, f(x) = f(x)$ et $f(-x)=-f(x)$
- D'où $f(x) + f(x) = f(-x) - f(-x)$
- $2f(x) = x$

Donc $f$ est la fonction nulle. Donc $P\cap I \sub \{0\}$

L'inclusion réciproque est évidente: $P\cap I = \{0\}$

> [!info]
> On a montré que l'intersection des fonctions paires et impaires est la fonction nulle.

## Raisonnement par analyse synthèse

Soit $f \in \mathscr(\R;\R)$

- Je suppose qu'il existe
- Je trouve la forme
- Je vérifie

### Analyse

Supposons que $f=g+h$ (g paire et h impaire)
Alors:
- $f(x) = g(x) +h(x) \forall x \in \R$
- $f(-x) = g(-x)+h(-x) \forall x \in \R$
- $f(-x) = g(x)  - h(x)$
D'où $f(x)+f(-x) = 2g(x) \forall x \in \R$
D'où $g(x) = \frac{1}{2}(f(x)+f(-x)) \forall x \in \R$
De même, $f(x) - f(-x) = 2h(x) \forall x \in \R$
$h(x)=\frac{1}{2}(f(x) - f(-x)) \forall x \in \R$

### Synthèse

On vérifie que cette décomposition fonctionne:

- $\forall x \in \R, \frac{1}{2}(f(x)+f(-x))+\frac{1}{2}(f(x) - f(-x))\\=f(x)$
- La fonction $x\mapsto \frac{1}{2}(f(x)+f(-x))$ est bien paire.
- La fonction $x\mapsto \frac{1}{2}(f(x)-f(-x))$ est bien impaire.

> [!tips]
> Un raisonnement par analyse synthèse démontre l'existence et l'unicité./]

# V - Familles libres

**Définition** - Soit $E$ un $\mathbb{K}$-espace vectoriel. Soit $\{v_1, ..., v_n\}$ une famille de vecteurs (ensemble fini de vecteurs).

- On dit que $\set{v_1, ..., v_n}$ est une famille __liée__ s'il existe une combinaison linéaire [des vecteurs de cette famille] dont les coefficients sont __non tous nuls__, égale au vecteur nul. 
- ... Une famille est liée si une combinaison linéaire de ses éléments donne $0$ et les vecteurs n'étant pas tous 0. 
- Autrement dit, si: 
    - $\exists (\lambda_1, ... , \lambda_n)\in\mathbb{K}^n\backslash(0,...,0), \lambda_1v_1+...+\lambda_nv_n=0$

> [!check]
> - tous non nuls: `0 not in set`
> - non tous nuls:  `any(x != 0 for x in set)`

- On dit que $\set{v_1, ..., v_n}$ est une famille libre si elle n'est pas liée, c'est-à-dire si la seule combinaison linéaire égale au vecteur nul est la combinaison dont tous les coefficients sont nuls.
- $\forall \lambda_1, ...., \lambda_n \in \mathbb{K}, \lambda_1v_1+...+\lambda_nv_n = 0 \Rightarrow \lambda_1 = ... = \lambda_n = 0 $
- $\overline{libre} = liée$

__Petit exemple de négation__

> $\exists \lambda_1, ...,\lambda_n \in \mathbb{K}, (\lambda_1, ..., \lambda_n)≠(0,...,0)$ et $\lambda_1v_1+...+\lambda_nv_n = 0$

$\forall \lambda_1v_1+...+\lambda_nv_n \in\mathbb{K}, (\lambda_1,...,\lambda_n)=(0,..,0)$ ou $\lambda_1v_1+...+\lambda_nv_n ≠ 0$

$\lambda_1v_1+...+\lambda_nv_n = 0 \Rightarrow \lambda_1 = ... = \lambda_n = 0$

__Remarque__

Quand une famille $\set{v_1, ... , v_n}$ est liée, on dit aussi que les vecteurs sont linéairement dépendants quand une famille est libre, on dit que linéairement indépendants.

### Exemple 
#famille #vecteurs_libres #vecteurs_lies

Dans $\mathbb{R}^3$
- La famille $\{(1,0,1), (1,1,0), (0,1,1)\}$ est-elle libre?
- Cherchons des réels $a,b,c$ tels que 
     - $a(1,0,1)+b(1,1,0)+c(0,1,1)=(0,0,0)$ 
     - càd $(a+b, b+c, a+c)=(0,0,0)$

Cette égalité est équivalente au système:

$$
\begin{cases}a+b=0\\b+c = 0 \\ a+c = 0\end{cases} \\
\iff \begin{cases}
a+b=0 \\ 
b+c = 0 \\ 
-b+c = 0
\end{cases} \\
\iff \begin{cases}a+b = 0 \\ b+c = 0 \\ c = 0\end{cases}\\
\iff \begin{cases}a = 0\\ b = 0\\ c = 0\end{cases}
$$

Donc la seule combinaison linéaire vérifiant cette égalité est la combinaison dont tous les coefficients sont nuls. Donc la famille est libre.

### Remarques

- Une famille qui contient le vecteur nul est liée
- Une famille à un vecteur est libre __ssi__ ce vecteur est non-nul.

## **Définition** - *Colinéarité*

Soit $E$ un $\mathbb{K}$-espace vectoriel, on dit que deux vecteurs $u$ et $v$ sont colinéaires si l'un est multiple de l'autre. 

Autrement dit, si $\exists \lambda \in \mathbb{K}, u = \lambda v$ ou $v = \lambda u$

On dit aussi que $u$ et colinéaire à $v$...

(ou que $v$ est colinéaire à $u$). 

### __Exemple__

$(-1,0,\frac{1}{2})$ et $(2,0,-1)$ sont colinéaire
- car $(2,0,-1) = -2(-1, 0, \frac{1}{2})$

$X^2-1$ et $3X^2-3$ sont colinéaires
- car $3X^2-3 = 3(X^2-1)$

### __Remarque__

Le vecteur nul est colinéaire à tout vecteur. (car $0$ est mulitple de tout nombre).

## **Proposition** - *Colinéarité et liberté*

Si $u$ et $v$ sont colinéaires, $\set{u,v}$ est liée.

Si $u$ et $v$ ne le sont pas, $\set{u,v}$ est libre.

### __Exemple__

Les vecteurs $(1,1,0)$ et $(2,1,1)$ ne sont pas colinéaires donc ils forment une famille libre. 

## **Proposition** 

Une famille de polynôme de degrés distincts est libre.

### __Exemple__

La famille $\set{X^5-X+2, X^2+X-1, 3X^3-1}$ est libre.

## **Proposition**
- Une sous-famille d'une famille libre est libre. 
- Une sur-famille d'une famille liée est liée.

# VI - Famille génératrice

## **Définition** - *Famille génératrice*

Soit $E$ un $\mathbb{K}$-espace vectoriel. Soit $\set{v_1, ..., v_n}$ une famille de vecteurs. On dit que $\set{v_1, ..., v_n}$ est __génératrice__ de $E$ si tout vecteur de $E$ s'écrit comme une combinaison linéaire des vecteurs $\set{v_1, ..., v_n}$.

Autrement dit, si $\forall v \in E, \exists \lambda_1,..., \lambda_n \in \mathbb{K}, \\v = \lambda_1v_1 + ... + \lambda_n v_n$

dit encore autrement, $\text{Vect}(\{v_1, ..., v_n\})=E$

### **Remarque**

On dit qu'une partie $A\sub E$ est génératrice de $E$ si tout élément de $E$ s'écrit comme une combinaison linéaire finie d'élément de $A$. 


### __Exemples__

$\{1, X, X^2, X^3\}$ est une famlile génératrice de $\R_3[X]$.

> [!tips]
> $\R_3[X]$ : L'ensemble des polynômes de degré $≤3$/]

$\{X^n | n\in \N\}$ est une famille génératrice infinie de l'ensemble des polynômes $\R[X]$.

### __Exemple__

> Est-ce que $\{(1,1,0), (1,2,1), (1,0,1)\}$  est une famille génératrice de $\R^3$

Soit $(x,y,z)\in\R^3$. Cherchons $a,b,c$ des réels tels que:

$(x,y,z) = a(1,1,0) + b(1,2,1)+c(1,0,1)$

c'est-à-dire $\begin{cases}a+b+c = x \\ a+2b = y \\ b+c = z\end{cases}$

Si ce système a une solution $\to$ famille génératric

Sinon $\to$ famille non génératrice.

---

Pour déterminer si le système a une solution, il suffit de réussir à l'échelonner. Pas besoin de faire la remontée. (la remontée fonctionnera toujours et permet d'avoir les valeurs explicites au besoin).

### **Remarque**

En pratique, avec la notion de dimension, on est rarement amenés à démontrer qu'une famille est génératrice. 

## **Proposition** 

Soit $\{v_1, ..., v_n\}$ une famille génératrice d'un espace vectoriel $E$. Supposons que $v_n$ soit une combinaison linéaire de $\{v_1, ..., v_{n-1}\}$.

Alors, $\{v_1, ..., v_{n-1}\}$ est une famille génératrice de $E$. 

### Preuve
On a $v_{n} = \alpha_1v_1 + ... + \alpha_{n-1}v_{n-1}$
Puisque $\{v_1, ..., v_n\}$ est génératrice. 
$\forall v \in E, \exists \lambda_1, ..., \lambda_n \in \mathbb{K}$
D'où $v = \lambda_1v_1+...+\lambda_{n-1}+\lambda_n(\alpha_1v_1+...+\alpha_{n-1}v_{n-1})$
$= (\lambda_1+\lambda_n\alpha_1)v_1+...+(\lambda_{n-1}-\lambda_n\alpha_{n-1})v_{n-1}$
Donc $v$ est une combinaison linéaire de $\{v_1, ..., v_{n-1}\}$
Donc $\{v_1, ..., v_{n-1}\}$ est une famille génératrice de $E$.

# VII - Bases

## **Définition** - *Bases*

Soit $E$ un $\mathbb{K}$-espace vectoriel. On dit qu'une famille $\{v_1, ..., v_n\}$ est une base si elle est libre est génératrice. 

### __Exemple__

- $\{1, X, X^2, X^3\}$ est un base $\R_3[X]$
- Plus généralement, la famille $\{1,X,...,X^n\}$ est une base de $\R_n[X]$. C'est la base __canonique__.
- $\{(1,0,0), (0,1,0), (0,0,1)\}$ est une base de $\R^3$. C'est la base canonique de $\R^3$.
- Plus généralement, $\{(1,0,...,0),(0,1,...,0), etc.\}$ est une base de $\R^n$. C'est la base canonique de $\R^n$

### __Remarque__

Base de l'espace vectoriel réduit au vecteur nul $\{0\}$ ?

Par convention, on dit parfois que $\{\}$ est une base de $\{0\}$

## **Proposition**

Tout élément d'un espace vectoriel $E$ se décompose de manière unique (comme une combinaison linéaire) dans une base.

Autrement dit, si $\{v_1, ..., v_n\}$ est une base de $E$. 

### __Preuve__

- existence de la décomposition car la famille est génératrice
- unicité de la décomposition car la famille est libre.

Supposons qu'il existe deux décompositions:

$$
\begin{cases}
v = \lambda_1v_1+...+\lambda_nv_n \\ 
v = \mu_1v_1+...+\mu_nv_n
\end{cases}
$$

En soustrayant ces égalités, on obtient

$0 = (\lambda_1-\mu_1)+...+(\lambda_1-\lambda_n)v_n$

Comme, $\{v_1, .., v_n\}$ est libre, on a nécessairement:
- $\lambda_1-\mu_1 = ... = \lambda_n - \mu_n = 0$

D'où $\lambda_1 = \mu_1, ..., \lambda_n = \mu_n$

La décomposition est ainsi unique.