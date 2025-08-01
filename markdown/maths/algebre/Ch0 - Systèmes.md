
# Résolution (pratique) de systèmes linéaires

## Définitions

**Définition** - *Système linéaire*

Un système linéaire (réel) est un ensemble d'équation de la forme:

$$
\begin{cases}
a_{11}x_1+...+a_{1p}x_p = b_1 \\
... n\text{ équations}, p\text{ inconnus}\\
a_{p1}x_1+...+a_{pp}x_p=b_n
\end{cases}
$$

__où__

- Les $x_i$ sont les inconnus
- Les $a_{ij}$ et $b_{i}$ sont des nombres donnés
    - les $a_{ij}$ sont appelés coefficients du système
    - les $b_{i}$ forment le « second membre » du système.

On dit qu'un $p$-uplet $(s_1,...,s_p)$ est une solution de ce système si les égalités sont vérifiées quand on remplace les inconnus $x_1, ..., x_p$ par les valeurs $s_1,...,s_p$.

On dira que ce $p$-uplet est un ensemble de solutions.

**Définition** - *Équivalence*

On dit que deux systèmes sont __équivalents__ quand ils ont les mêmes solutions. 

**Théorème**

Un système linéaire a soit:
- une unique solution
    - un unique $p$-uplet
- aucune solution
- une infinité de solutions.

# II -  Algorithme de Gauss

## Système échelonné

### **Définition** - *Système échelonné*

On dit qu'un système linéaire est échelonné par rapport à la liste d'inconnues $x_1, ..., x_p$ si lorsqu'il est ordonné selon cette liste, le nombre de coefficients nuls commençant une ligne croît strictement ligne après ligne.

#### __Exemples__



$$
\begin{cases}
2x-z+2y=1\\
\color{red}0\color{g}\cdot x+z-y=-1\\
\color{red}0\cdot\color{g}x+\color{red}0\color{g}\cdot z+y=4
\end{cases}
$$

### Résolution par la méthode de remontée (cas $p=n$, solution unique)

$$\begin{cases}
2x-3+8=1 \Rightarrow x=-2 \\
z = 3\\
y=4
\end{cases} \Rightarrow S=\{(-2,3,4)\}
$$
$\to$ échelonné par rapport à $x,z,y$

$$
\newcommand{\z}{\color{red}0\color{g}}
\begin{cases}
x+2y-3z=4\\
\z \cdot y+z=1\\
\z \cdot x + 2y-z=-2
\end{cases}
$$

$\to$ pas échelonné par rapport à $x,y,z$

Il est facile de résoudre un système échelonné par une méthode de remontée. 

## Théorème

Soit un système échelonné à $n$ équations et $p$ inconnues.
- Si $p=n$ (système triangulaire), alors le système a une unique solution.
- Et si $p>n$, le système a une infinité de solutions.
- Si $p<n$, non échelonné.  

### Exemple

$$
\begin{cases}
x+2y+z=1\\
y-z=3
\end{cases}
$$

On a deux inconnues en tête de ligne, on peut ainsi exprimer les solutions $(x,y)$ en fonction de celle qui n'est pas en tête de ligne.

$$
\iff \begin{cases}
x+ 2y+z = 1\\
y = z+3
\end{cases} \\ 
\iff \begin{cases}
x+2(z+3)+z=1 \\
y = z+3
\end{cases} \\
\iff \begin{cases}
x = -3z-5 \\
y= z+3
\end{cases}
$$

On a exprimé les inconnues en « tête de ligne » en fonction des autres inconnues. Ainsi, le choix de $z$ est libre. $z$ est ainsi un paramètre à fixer déterminant les autres inconnues.

L'ensemble des solutions de ce système s'écrit donc:

$\{(-3z-5, z+3,z)/z\in\R\}$

### Exemple 2

$$
\begin{cases}
x+2y+2z-t=3\\
z+t=2\end{cases}
$$

L'ensemble des solutions est

$\{(-1-2y+3t, y, 2-t, t)/y\in\R, t\in\R\}$ (espace deux dimensions)

Pour produire une solution il suffira de choisir des paramètres.

## Opérations élémentaires sur les systèmes

- Échanger la $i$-ème équation et la $j$-ième équatoin. 
    - $(L_i \leftrightarrow L_j)$
- Multiplier la $i$-ème équation par un réel $\lambda\neq0$
    - $(L_i \leftarrow \lambda L_i)$ 
- Ajouter la $j$-ième équation multipliée par $\lambda≠0$ à la $i$-ème équation (avec $i≠j$)
    - $(L_i \leftarrow L_i+\lambda L_j)$ 

### Théorème

Ces opérations élémentaires transforment un système linéaire en un système équivalent. 

# II -  Méthode d'élimination de Gauss

> Autre nom : méthode du pivot de Gauss

**Systématique** : qui marche tout le temps
Méthode systématique pour résoudre les systèmes linéaires.

### Idée

- Mettre sous forme échelonnée par des combinaisons de lignes.
- Ensuite, méthode de remontée.

Si lors de l'échelonnement, on arrive à des équations incompatibles $\to$ pas de solutions.

Si l'on arrive à échelonner $\to$ une seule solution ou une infinité

## Exemple

$$
\begin{cases}
x+2y-2z=6 \ (L_1)\\
\color{green}-2x\color{g}+y+2z=2 \ (L_2)\\
\color{green}x\color{g}+y+4z=6 \ (L_3)
\end{cases} \\ \iff \begin{cases}
x+2y-2z=6 \\
5y-2z=14 \\
-y+6z=0
\end{cases} \begin{matrix}L_2\leftarrow L_2+\lambda L_1\\ L_3 \leftarrow L_3 - L_1\end{matrix} 
\\ \iff \begin{cases}
x+2y-2z&=6\\
5y-2z&=14\\
28z &= 14 \ ( L_3 \leftarrow 5L_3+l_2)
\end{cases}
$$

On retrouve finalement un système échelonné, il est donc possible d'effectuer la remontée.

$\iff \begin{cases} x=1\\y=3\\z=\frac{1}{2}\end{cases}$

> Exemple typique

### Exemple 2

$$
\begin{cases}
x+y+3z&=1\\
-x+2y+2z&=-3\\
2x-y+z&=2
\end{cases} \\ \iff \begin{cases}
x+y+3z&=1\\
3y+5z&=-2 \\
-3y-5z=0
\end{cases} \begin{matrix}L_2\leftarrow L_1+L_2 \\ L_3\leftarrow L_3 - 2L_1 \end{matrix}
$$

La 2$^e$ et la 3$^e$ équation sont incompatibles.
Ainsi, le système n'a pas de solutions.

---

Il arrive aussi que lors de l'échelonnement, on se retrouve avec deux équations identiques. Il suffira d'en retirer une.
Il arrive qu'au cours de l'équation on en supprime une (par redondance).
- On peut utiliser une autre équation que la 1ère comme pivot, 
- On peut échelonner dans l'ordre de son choix
Vérifier vos solutions! En particulier si le calcul a été long.
Il suffira de réinjecter dans les équations initiale. 