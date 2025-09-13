---
lang: fr
date: 11/02/2025
desc: Ce cours couvre les espaces vectoriels finis, leurs bases, sous-espaces et dimension, avec des propriétés clés comme l'égalité des tailles de bases et la formule de Grassmann.
---
$\newcommand{\card}{\text{card}}$
$\newcommand{\R}{\mathbb{R}}\newcommand{\sub}{\subset}\newcommand{\N}{\mathbb{N}}\newcommand{\K}{\mathbb{K}}$
# I - Espace vectorielle de dimension finie

## 1. Définition - *EV Dim finie*

On dit qu'un $\mathbb{K}-$espace vectoriel $E$ s'il admet une famille génératrice finie. 
Dans le cas contraire, on parle de __dimension infinie__. 

## 1.1 Exemples

- $\R^2, \R^3,\R^4...$etc (dimension finie) (base canonique)
- $\R_n[X]$ (dim finie)
- $\R[X]$ (dim infinie)
- espace des suites (dim infinie)
- espace des fonctions (dim infinie)


## 1.2 Exemples

Supposons que $\R[X]$ soit de dimension finie. 
- Notons, $\{P_1, ..., P_n\}$ une famille génératrice finie de $\R[X].$
- Comme $\{P_1, ..., P_n\}$ est un ensemble fini. 
Il existe un degré maximal pour ces polynômes. Notons-le $k$. Il est évident que $\{(P_1, ..., P_n)\}$  ne peut engendrer que des polynômes de degré $≤k$.
- Contradiction, cette famille n'engendre pas $\R[X]$ en entier.

# II -  Existence de bases

## 1. Théorème de la base extraite

Soit $E$ un $\mathbb{K}-$espace vectoriel de dimension finie non réduit à $\{0\}$.
- De toute famille génératrice $\mathscr{G}$ de $E$, on peut extraire une base de $E$. 
Autrement dit, il existe une base $\mathscr{B} \sub \mathscr{G}$

## 1.1 Corollaire

Tout espace vectoriel de dimension finie admet une base. 

### 1.2 Preuve du Théorème

#### 1.2.1 Preuve 1

Soit $\mathscr{G} = (e_1, ..., e_n)$ une famille génératrice de $E$.
- On considère les sous-familles de $G$ qui sont encore génératrices. 
- Parmi ces sous-familles, il existe une ou plusieurs familles de cardinal (taille de l'ensemble) minimal. 
- **existence garantie car ensemble fini**
Soit $\mathscr{B}$ une telle famille de cardinal minimal. Elle est génératrice par définition. 
- Est-elle libre? Supposons qu'elle ne soit pas libre. Dans ce cas, un des vecteurs est combinaison linéaire des autres. On peut le retirer pour obtenir une famille encore génératrice. 
- __Contradiction__ : on a une famille génératrice de cardinal plus petit que le cardinal minimum.

### 1.2.2 Preuve 2

On part de la famille $\mathscr{G}$
- Si elle est libre, c'est finie, on a une base
- Si elle est liée: un vecteur est une combinaison linéaire des autres. On le retire de la famille et on continue.
À la fin, on aboutit à une famille libre et génératrice.

## 2. Théorème de la base incomplète

Soit $E$ un $\mathbb{K}$-ev non réduit à $\{0\}$. Toute famille libre de $E$ peut être complétée en une base de $E$. 

### 2.1 Preuve 1

Puisque $E$ est de dimension finie, il existe une famille génératrice $\mathscr{G} = (e_1, ..., e_n)$

Soit $\mathscr{L}$ une famille libre de $E$. On considère les familles $\mathscr{F}$ telles que:
- $\mathscr{L} \sub \mathscr{F}, \mathscr{F} \sub \mathscr{L} \cup \mathscr{G}, \mathscr{F}$ libre.
C'est un ensemble fini, non-vide, de familles donc il existe une ou plusieurs familles de cardinal maximal. 
Par l'absurde, on démontre qu'une famille libre de cardinal maximal est nécessairement génératrice. 

### 2.2 Preuve 2 - Algorithme

On part de la famille $\mathscr{L}$
- Si elle est génératrice, c'est fini: on a une base.
- Sinon, il y a nécessairement un élément de $\mathscr{G}$ qui n'est pas une combinaison linéaire de $\mathscr{L}$. On ajoute cet élément et on continue.
à la fin, on aboutit à une famille libre et génératrice. 

# III - Dimension

## 1. Lemme

Soit $E$ un $\mathbb{K}$-espace vectoriel admettant une base de cardinal $n$. Alors, toute famille constituée de $n+1$ vecteurs ou plus est libre.  

### 1.1 Preuve

*(Admise)*

## 2. Proposition

Dans un $\mathbb{K}$-espace vectoriel de dimension finie. Toutes les bases ont le même cardinal. 

### 2.1 Preuve

Soit $\mathscr{B}_1$ et $\mathscr{B}_2$ deux bases d'un même espace vectoriel. Supposons $card(\mathscr{B}_1) > card(\mathscr{B}_2)$
- D'après le lemme précédent, $\mathscr{B}_1$ est liée. *Contradiction* car une base est une famille liée.

## 3. Définition

La dimension d'un $\mathbb{K}$-espace vectoriel non-réduit à $\{0\}$ est le cardinal de ses bases. La dimension de l'espace nul $\{0\}$ est $0$)

### 3.1 Exemples

- $\R^2$ (dim: 2) $\{(0,1),(1,0)\}$
- $\R^3$ (dim: 3)
- $\R^n$ (dim: n)
- $\R_2[X]$ (dim: 3)
- $\R_3[X]$ (dim: 4)
- $\R_n[X]$ (dim: n+1)

## 4. Proposition 

Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension $n$. Alors:
1. Toute famille libre a au plus $n$ éléments.
2. Toute famille génératrice a au moins $n$ éléments.

### 4.1 Preuve 1

Lemme précédent: si l'espace admet une base de $card(N),$ les familles de $n+1$ sont liées.

### 4.2 Preuve 2

Soit $\mathscr{G}$ une famille génératrice de $E$. D'après le théorème de la base extraite, il existe une base $B\sub \mathscr{G}$. D'où $\card(B) < \card(\mathscr{G}).$

## 5. Proposition 2

Soit $E$ un $\mathbb{K}$-ev de dimension $n≥1$. 

Soit $\mathcal{F}$ une famille de vecteurs de $E$.
- Si $\mathcal{F}$ est libre et $card(\mathcal{F})=n$ alors $\mathcal{F}$ est une base de $E$.
- Si $\mathcal{F}$ est génératrice et $card(\mathcal{F})=n$ alors $\mathcal{F}$ est une base de $E$.

### Preuve

Soit $\mathcal{F}$ une famille libre de cardinal $n$. D'après le théorème de la base incomplète, il existe une base $B$ telle que $\mathcal{F}\sub B$.
- Or, puisque $\mathscr{B}$ est une base. $\card(\mathscr{B}) = n = \card(\mathcal{F})$.
- D'où $B= \mathcal{F}$
D'où $B=\mathcal{F}$ donc $\mathcal{F}$ est une base.

... avec la base extraite

Soit $\mathcal{F}$ une famille génératrice de cardinal $n$.
- D'après le théorème de la base extraite, il existe une base $B\sub \mathcal{F}$
- Or, $\card(B) = n = \card(\mathcal{F})$
D'où $B = F$ Donc $\mathcal{F}$ est une base.

# IV - Sous-espaces et dimension

## 1. Proposition 

Soit $E$ un $\mathbb{K}$-ev de dimension finie. 
Soit $F$ un sous-espace vectoriel de $E$. 
- Alors $F$ est de dimension finie et $\dim(F) ≤ \dim(E)$

### 1.1 Preuve

On suppose que $F$ n'est pas réduit à $\{0\}$
- Autrement, la proposition est immédiatement vraie. 
	- $\{0\}$ est de dimension finie et sa dimension est égale à $0$. 
Considérons l'ensemble des familles libres de vecteurs de $F$.
- Cet ensemble n'est pas vide, en effet, puisque $F≠\{0\},$ il existe forcément un vecteur $v\in F$ non nul. La famille $\{v\}$ est vide.  
- Toute famille libre de $F$  est aussi une famille libre de $E$. Donc toute famille libre de $F$ a un nombre d'élemtns $≤ \dim E$
Il existe donc un cardinal maximal $p$ pour les familles libres de $F$. De plus, $p≤\dim E.$ 
- Soit $\mathcal{F}$ une famille libre de $F$ de cardinal $p$ (cardinal maximal). Montrons que $\mathcal{F}$ est une base de $F$.

 
Montrons que $\mathcal{F}$ est génératrice en raisonnant par l'absurde.
- Suppsons que $\mathcal{F}$ n'engendre pas $F$. Donc, il existe $v\in F$ qui ne s'écrit pas comme une combinaison linéaire des vecteurs de $\mathcal{F}$. Donc $\mathscr{F}\cup \{v\}$ est libre.
- **Contradiction** avec la maximalité de $\mathcal{F}$.

Donc $\mathcal{F}$ est une base de $F$ et $\dim(F) = card(\mathcal{F}) ≤ \dim E$. 

## 2. Proposition

Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension finie.
- Soit $F$ un sous-espace vectoriel de $E$.  ($F\sub E)$
- Si $\dim E = \dim F$ alors $F=E$

### 2.1 Preuve

Soit $B$ une base de $F$.
- $B$ est une famille libre de $F$ et donc de $E$.
- De plus, $card(B) = \dim F$ or $\dim F = \dim E$ donc $card B = \dim E$

Donc $B$ est une base de de $E$.

Ainsi, $B$ est à la fois une base de $F$ et de $E$. 
- Donc $B$ engendre $F$ et $E$ 
- donc $F = E.$

## 3. Proposition - *Formule de Grassmann*

Soit $E$ un $\mathbb{K}$-espace vectoriel. 

Soit $F$ et $G$ deux sous-espaces vectoriels de dimension finie. Alors:
- $\dim(F+G) = \dim(F)- \dim(F\cap G)$


### 3.1 __Remarque__ - Résultat analogue

- à : $\card(A\cup B) = \card(A) + \card(B) = -\card(A\cap B)$
où $A$ et $B$ sont des ensembles finis. 

### 3.2 Remarque

En particulier, on a: $\dim(F+G) ≤ \dim(F)+\dim(G)$

### 3.3 Preuve

On suppose d'abord que $F\cap G ≠ \{0\}$

On pose $p = \dim F \cap G$. Soit $\{e_1, ..., e_p\}$ est une base de $F\cap G$

On complète $\{e_1, ..., e_p\}$ en une base de $F$ (grâce au théorème de la base incomplète. Autrement dit, il existe des vecteurs $f_1, ..., f_q$ de $F$ tels que $\{e_1, ..., e_p, f_1, ..., f_q\}$ soit une bas de $F$.

On a nécessairement $p+q=\dim(F)$

On a aussi nécessairement $f_1,..., f_q \in F \backslash G$
- Si l'un des $f_i$ était dans $G$ (notons-le $f_{i_0}$) alors $\{e_1, ..., e_p, f_{i_0}\}$ serait une famille libre de $F\cap G,$ ce qui serait contradictoire avec $\dim F \cap G = p$.
- On complète $\{e_1, ..., e_p\}$ en une base de $G$. Il existe des vecteurs $g_1, ..., g_r$ de $G\backslash F$ tels que $\{e_1, ..., e_p, g_1, ..., g_r\}$ est une base de $G$. De plus, $p+r=\dim G$.
- Montrons que $\{e_1, ..., e_p, f_1, ..., f_q, g_1, ..., g_r\}$ est une base de $F+G$.
    - Soit $\lambda_1, ..., \lambda_p, \mu_1, ..., \mu_r, \nu_1, .., \nu_r$  des scalaires tels que:
        - $\lambda_1e_1+...+\lambda_pe_p+\mu_1f_1+...+\mu_qf_q + v_1g_1 + ... + v_rg_r = 0$

On pose:
- $u=\lambda_ee_1+...+\lambda_pe_p$
- $v = \mu_1f_1 + ... + \mu_qf_q$
- $w = v_1g_1 + .. + v_rg_r$

On veut $u+v + w = 0$
- Donc $v \in F\cap G$
- Donc $\mu_1f_1+...+\mu_qf_q \in F\cap G$
Or, $f_1, ..., f_q \notin F\cap G$
- Donc nécessairement, $\mu_1= ... = \mu_q = 0$
- $u+v \in F\cap G$
- Donc $v \in F\cap G$
- Donc $\mu_1f_1+...+\mu_qf_q \in F\cap G$
Or, $f_1,...,f_q \notin F\cap G$
- Donc nécessairement, $\mu_1 = ... = \mu_q = 0$
- Donc $v= 0$ Donc $u+w = 0$
- Donc $\lambda_1e_1.+ ... + \lambda p^2p +v_1g_1 + ... + v_rg_r = 0$
- Donc $\lambda_1 = ... = \lambda_p = \lambda_p = v_1 = ... = v_r = 0$ (car la famille $\{e_1, .., e_p, g_1, .. , g_r\}$ est libre)
- Donc la famille $\{e_1, ..., e_p, f_1, ..., f_q, g_1, ..., g_r\}$ est libre.

Soit $v \in F+G.$
- Alors $v = v_F + v_G$ avec $v_F \in F$ et $v_G \in G$
- Comme $\{e_1, ..., e_p, f_1, .., f_q\}$ est une base de $F$. 
    - Il existe $\lambda_1, ..., \lambda_p, \mu_1, ..., \mu_q$  tel que
    - $v_F =. \lambda_1e_1+...+\lambda p^2 p +\mu_1f_1 + ... + \mu_q f_q$ 

De même, i lexiste $\lambda_1', ..., \lambda_p', v_1', ..., v_r'$ tel que:
- $v_G = \lambda_1'e_1 + ... + \lambda_p ' e_p + v_1'g_1 + ... + v_r'g_r$

D'où $v = (\lambda_1+\lambda_1')e_1+... + (\lambda_p+\lambda_p')^2p \\ +\mu_1f_1 + ... + \mu_q f_q \\ + v_1'g_1 + ... + v_r'g_r$
- Donc la famille est bien génératrice de $F+G$

Finalement, 
- $\dim F+G = p+q+r \\ = (p+q)+(p+r)-q \\ = \dim F + \dim G - \dim F\cap G$

Revenons au cas où $F\cap G = \{0\}$

il suffit de considérer la famille $\{f_1, ..., f_q, g_1, ..., g_r\}$ où:
- $\{f_1, .., f_q\}$ est une base de $F$
- et $\{g_1, ..., g_r\}$ est une base de $G$. 

(détails de la preuve laissée au lecteur). 

Donc la famille est bien génératrice de $F+G$

## 4. Proposition - Dim / Supplémentaire

Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension finie.

Soit $F$ et $G$ deux sous-espaces vectoriels de $E$. 

- Si $F\cap G = \{0\}$ et $\dim(F)+\dim(G) = \dim(E)$ alors $F$ et $G$ sont supplémentaires dans $E$.
- Si $F+G = E$ et $\dim(F)+\dim(G)=\dim(E)$ alors ils sont supplémentaires dans $E$.

### 4.1 Preuve

Supposons $F\cap G = \{0\}$ et $\dim(E) = \dim(F) + \dim(G)$

il suffit de montrer que $F+G=E$

par la formule de Grassman, on trouve $\dim(F+G) = \dim(F)+\dim(G) = \dim(F\cap G) = \dim(E) - 0 \\ = \dim(E)$

Or, $F+G \sub E$ donc $F+G = E. $ (*trivial*)

- 2eme propriété laissée au lecteur.

## 5 **Proposition**   

Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension finie. Tout sous-espace vectoriel de $E$ admet un supplémentaire.

### 5.1 Preuve

Soit $F$ un sous-espace vectoriel.

Soit $\{f_1, ..., f_p\}$ une base de $F$.

Grâce au théorème de la base incomplète, on complète cettte base de $F$ en une base de $E$. 
- $\{f_1, ..., f_p, g_1, ..., g_q\}$

On peut montrer (facilement) que $G = \text{Vect}(\{g_1, ..., g_q\})$ est un supplémentaire de $F$ dans $E$. 

# V - Rang d'une famille de vecteurs

## 1. Définition

Soit $E$ un $\mathbb{K}$-espace vectoriel.

Soit $\{v_1, .., v_p\}$ une famille de vecteurs de $E$. Le rang de cette famille est égal à $\dim(\text{Vect}(\{v_1, ..., v_p\}))$

il est noté $r_g(\{v_1, ..., v_p\})$

## 2. Proposition

Soit $E$ un $\mathbb{K}$-ev. Soit $\{v_1, ..., v_p\}$ une famille de $E$.

- $rg(\{v_1, ..., v_p\}) ≤ p$
- $rg(\{v_1, ..., v_p\}) = p$ __ssi__ la famille est libre.
- $rg(\{v_1, ..., v_p\}) ≤ \dim(E)$