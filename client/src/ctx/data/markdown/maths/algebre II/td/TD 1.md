---
lang: fr
date: 15/09/2025
desc: Groupe symétrique, définition du déterminant
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}$
 
> [!info]
> Enseignant: **Julien Roth** (julien.roth@univ-eiffel.fr) Copernic 4B060

# I - Groupe symétrique
## Exercice 1 - Calculs élémentaires

> 1. Dans le groupe $\mc{S}_4$, vérifier que $(1,4)(4,3)$ est un 3-cycle.
> 2. Déterminer le groupe $\mc{S}_5$ inverse du cycle $(1,3,5,4)$
> 3. Dans le groupe $\mc{S}_7$ calculer le produit $(3,5,6)(5,6,7)(6,2,1)(1,2)$. Décomposer cette permutation en produits de cycles à supports disjoints.
> 4. Dans le groupe $\mc{S}_9$, calculer le produit $aba^{-1}$ pour $a=(1,2,6)(1,3)$ et $b=(1,5,7,9)$, puis pour $a=(1,2,9,7,5,3)$ et $b=(1,7,3)$. Dans ce dernier cas, comparer le résultat avec le cycle $(a(1), a(7), a(3))$.

### Question 1
> Dans le groupe $\mc{S}_4$, vérifier que $\sigma = (1,4)(4,3)$ est un 3-cycle.

$\sigma = \ub{(1,4)}{\tau_1}\ub{(4,3)}{\tau_2}$
- $\sigma = \tau_1 \circ \tau_2$
	- $\sigma(1) = \tau_1(\tau_2(1))$
	- $\phantom{\sigma(1)} = \tau_1(1)$ (car $\tau_2(1)=1$)
	- $\phantom{\sigma(1)} = 4$
	- $\sigma(2) = \tau_1(\tau_2(2))$
	- $\phantom{\sigma(2)} = \tau_1(2)$
	- $\phantom{\sigma(2)} = 2$
	- $\sigma(3) = \tau_1(\tau_2(3))$
	- $\phantom{\sigma(3)} = \tau_1(4)$
	- $\phantom{\sigma(3)} = 1$
	- $\sigma(4) = \tau_1(\tau_2(4))$
	- $\phantom{\sigma(4)} = \tau_1(3)$
	- $\phantom{\sigma(3)} = 3$
- On a donc $\sigma = (1, 4, 3)$

### Question 2

> Déterminer le groupe $\mc{S}_5$ inverse du cycle $(1,3,5,4)$

L'écriture du cycle $(1,3,5,4)$ dans $\mathcal{S}_6$  est:
- $(4,5,3,1)=(1,4,5,3)$

#### Point méthode - Inversion

**Étape 1** - Écrire la "matrice" du cycle initial.
- $\sigma = \m{1 & 2 & 3 & 4 & 5 \\ 3 & 2 & 5 & 1 & 4}$ 

**Étape 2** - L'inverser (et re-trier)
- $\sigma^{-1} = \m{3 & 2 & 5 & 1 & 4 \\ 1 & 2 & 3 & 4 & 5}$
- $\sigma^{-1} = \m{1 & 2 & 3 & 4 & 5 \\ 4 & 2 & 1 & 5 & 3}$

**Étape 3** - Extraire les valeurs et construire le cycle inverse
- $\sigma^{-1}(1) = 4$
- $\sigma^{-1}(2)=2$
- $\sigma^{-1}(3)=1$
- $\sigma^{-1}(4)=5$
- $\sigma^{-1}(5)=3$

**Étape 4** - Assembler
- $(1, 4, 5, 3)$
- **Réponse non-unique**

> [!warn]
> L'écriture d'un cycle n'est pas unique (... car on peut décaler l'écriture) donc l'inverse n'est pas unique non plus.

### Point méthode 2 - Inversion rapide

- $a = (1,2,6)(1,3)$
- $a^{-1} = (1,3)^{-1}(1,2,6)^{-1}$
	- On peut comparer ça au produit d'une matrice
	- $(AB)^{-1} = B^{-1}A^{-1}$
- $a^{-1} = (1,3)(1,6,2)$
### Question 3

> Dans le groupe $\mc{S}_7$ calculer le produit $(3,5,6)(5,6,7)(6,2,1)(1,2)$. Décomposer cette permutation en produits de cycles à supports disjoints.

> [!tips]
> Le support d'un cycle désigne l'écriture du cycle (eg. $(1,3,5)(2,4,7)$)
> Des supports disjoints désignent des cycles n'ayant pas d'éléments en commun.

> [!check]
> Si les supports sont disjoints alors les cycles commutent.

$\sigma = (3,5,6)(5,6,7)(6,2,1)(1,2) = \m{1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 1 & 7 & 5 & 4 & 3 & 2 & 6}$
$\phantom{\sigma = (3,5,6)(5,6,7)(6,2,1)(1,2)} = (2,7,6)(3,5)$

### Question 4

>  Dans le groupe $\mc{S}_9$, calculer le produit $aba^{-1}$ pour $a=(1,2,6)(1,3)$ et $b=(1,5,7,9)$, puis pour $a=(1,2,9,7,5,3)$ et $b=(1,7,3)$. Dans ce dernier cas, comparer le résultat avec le cycle $(a(1), a(7), a(3))$.

$a = \ub{(1,2,6)}{\sigma}\ub{(1,3)}\sigma$ et $b = (1,5,7,9)$
$a^{-1} = \tau^{-1}\circ c^{-1}$
$\phantom{a^{-1}} = (1,3)(1,6,2)$

$aba^{-1} = (1,2,6)(1,3)(1,5,7,9)(1,3)(1,6,2) = \m{1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\ 1 & 2 & 5 & 4 & 7 & 6 & 9 & 8 & 3} = (3, 5, 7, 9)$

> Dans ce dernier cas, comparer le résultat avec le cycle $(a(1), a(7), a(3))$.

$a = (1,2,9 ,7, 5, 3)$
$b= (1,7,3)$
$aba^{-1}=(1,2,5)=(2,5,1)=(a(1), a(7), a(3))$


### Point méthode 3 - Cycles disjoints

**Étape 1** - (Re)construire le cycle en calculant les "associations"
- $1 \mapsto 1, 2 \mapsto 7, 3 \mapsto 5, 4 \mapsto 4, 5 \mapsto 3, 6 \mapsto 2, 7 \mapsto 6$
- $\m{1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 1& 7 & 5 & 4 & 3 & 2 & 6}$

**Étape 2** - Écrire naturellement les cycles (puis composer les indépendants)
- $(2,7,6)(3,5)$



## Exercice 2 - Définition de la signature

> 1. Déterminer la signature des permutations suivantes:
>
> $\sigma = \m{1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 4 & 1 & 5 & 3 & 8 & 7 & 2 & 6}$ 
> $\tau = \m{1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 7 & 2 & 4 & 8 & 5 & 3 & 1 & 6}$
> 
> 1. Même question, pour $n ≥ 2$
>
> $\sigma = \m{1 & 2 & ... & n-1 & n \\ n & n-1 & ... & 2 & 1}$ 

### Question 1

> Déterminer la signature des permutations suivantes:
>
> $\sigma = \m{1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 4 & 1 & 5 & 3 & 8 & 7 & 2 & 6}$ 

> [!check]
> **Rappel cours**
> $\sigma$ permutation $(i,j)$ avec $i<j$ est une inversion si $\sigma(i)>\sigma(j)$ .
> La signature de $\sigma$ est $(-1)^{I(\sigma)}$ où $I(\sigma)$ est le nombre d'inversions.

$\sigma = \m{1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 4 & 1 & 5 & 3 & 8 & 7 & 2 & 6}$

$I(\sigma) = 3+2+1+3+2 = 11$
- $(1,2);(1,4);(1;7)$
- $(3;4);(3;7)$
- $(4;7)$
- $(5,6);(5,7);(5,8)$
- $(6,7);(6,8)$

$\Rightarrow \eps(\sigma)=-1$

**Méthode alternative**,

> [!tips]
> Puisque une signature de produit est le produit des signatures. Par ailleurs, on sait qu'un $p$-cycle se décompose en $p-1$ permutations
> On peut ainsi procéder comme suit:

$\sigma = (1,4,3,5,8,6,7,2)$
- C'est un $8$-cycle
- Donc $\eps(\sigma) = (-1)^{8-1}=-1$

> $\tau = \m{1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 7 & 2 & 4 & 8 & 5 & 3 & 1 & 6}$


$\tau = \ub{(1,7)}{c_1}\ub{(3,4,8,6)}{c_2}$

> [!check]
> $\eps(\tau) = \eps(c_1 \circ c_2)$
> $\phantom{\eps{\tau}} = \eps(c_1) \times \eps(c_2)$
> $\phantom{\eps{\tau}} = (-1)^1 \times (-1)^3$
> $\phantom{\eps{\tau}} = 1$

**Deuxième méthode**,
- $I(\sigma) = 6+1+2+4 + 2 + 1$
- $\phantom{I(\sigma)} = 16$
- Donc, $\eps(\sigma) = (-1)^{16}=1$

### Question 2

> Même question, pour $n ≥ 2$
>
> $\sigma = \m{1 & 2 & ... & n-1 & n \\ n & n-1 & ... & 2 & 1}$ 

$I(\sigma) = (n-1)+(n-2)+...+2+1$
$\phantom{I(\sigma)} = \sun{k=1}{n-1} k$
$\phantom{I(\sigma)} = \frac{n(n-1)}{2}$

| $n$ | $\frac{n(n-1)}{2}$ | $\eps(\sigma)$ |
| --- | ------------------ | -------------- |
| $2$ | $1$                | $-1$           |
| $3$ | $3$                | $-1$           |
| $4$ | $6$                | $1$            |
| $5$ | $10$               | $1$            |
$n=4k+r$

$\frac{n(n-1)}2  = \left(\frac{(4k+2)(4k+2-1)}{2}\right)$
$\phantom{\frac{n(n-1)}2} = 2(4k^2+k(2+1)+kr) + \frac{r(r-1)}2$


## Exercice 3 - Décomposition en produits

> Décomposer les permutations suivantes en produits de cycles à supports disjoints, puis en produit de transpositions.
> $\sigma = \m{1 & 2 & 3 & 4 & 5 & 6 \\ 3 & 5 & 4 & 6 & 2 & 1}$
> $\tau = \m{1 &2& 3 & 4 & 5 & 6 & 7 & 8 \\ 6 & 2 & 5 & 7 & 8 & 1 & 3 & 4}$

### Question 1

> $\sigma = \m{1 & 2 & 3 & 4 & 5 & 6 \\ 3 & 5 & 4 & 6 & 2 & 1}$

$= (1,3,4,6)(2,5)$
$= (1,6)(1,4)(1,3)(2,5)$

> [!tips]
> Pour le cycle, on peut décomposer en mettant le 1er partout

### Question 2

>  $\tau = \m{1 &2& 3 & 4 & 5 & 6 & 7 & 8 \\ 6 & 2 & 5 & 7 & 8 & 1 & 3 & 4}$

$= (1,6)(3,5,8,4,7)$
$= (1,6)(3,5)(5,8)(8,4)(4,7)$
$=(1,6)(3,7)(3,4)(3,8)(3,5)$
## Exercice 4 - Décomposition en produits II

> 1. Dans $S_n,$ avec $n ≥ 4$, on considère une permutation $\sigma$ et un $p$-cycle $c=(x_1, x_2, ..., x_p), 2 ≤ p ≤ n$. Montrer que la permutation $\sigma \circ c \circ \sigma^{-1}$ est un $p$-cycle que l'on précisera.
> 2. Montrer que toute transposition de $S_n$ peut s'écrire comme le produit de transpositions de la forme $i \in \{2, ..., n\}$.
> 3. En déduire que toute permutation de $S_n$ peut s'écrire comme le produit de transpositions de la forme $(1, i) \in \{2, ..., n\}$
> 4. En s'inspirant de la première question, montrer que toute transposition $(1,i)\in\{2, ..., n\},$ s'écrit comme le produit composé uniquement des cycles. $(1,2), (2,3, ..., n-1, n), (n, n-1, n-2, ..., 3, 2)$
> 5. Déduire des questions précédentes que le groupe $S_n$ est engendré par les cycles $(1,2)$ et $(2,3, ..., n-1, n)$.


### Question 1

> Dans $S_n,$ avec $n ≥ 4$, on considère une permutation $\sigma$ et un $p$-cycle $c=(x_1, x_2, ..., x_p), 2 ≤ p ≤ n$. Montrer que la permutation $\sigma \circ c \circ \sigma^{-1}$ est un $p$-cycle que l'on précisera.


- [Détails de cette preuve](https://chatgpt.com/share/68d100bb-bbec-800e-ac69-5ed595563a77)

**Conjecture** - $c  = (\sigma(x_1), \sigma(x_2), ..., \sigma(x_p))$
$\sigma \in \mc{S}_n$
- Mq $\ub{\sigma \circ c \circ \sigma^{-1}}s = (\sigma(x_1), \sigma(x_2), ..., \sigma(x_p))$
- On a vu que $\cases{\forall i \in \{1, ..., p-1\}, s(\sigma(x_{i+1})) \\ s(\sigma(x_p)) = \sigma(x_1)}$
Il reste à voir que si $k \in \{1, ..., n\} \backslash \{\sigma(x_1), ..., \sigma(x_p)\}$
- Alors $s(k) = k$
- $s(k) = \sigma \circ c \circ \sigma^{-1}$
- $c(\sigma^{-1}(k)) = \sigma^{-1}(k)$
Mq $\sigma^{-1}(k)$ n'appartient pas au support de $c$.
- $k \notin \{\sigma(x_1), ..., \sigma(x_p)\}$ donc $\sigma^{-1}(k) \notin \{x_1, ..., x_p\} = \supp(c) \Rightarrow c(\sigma^{-1}(k))=\sigma^{-1}(k)$ 

Comme $c(\sigma^{-1}(k)) = \sigma^{-1}(k)$ on a:
$s(k) = \sigma(\ub{c(\sigma^{-1}(k))}{=\sigma^{-1}(k)})$
$\phantom{s(k)} = \sigma(\sigma^{-1}(k))$
$\phantom{s(k)}=k$

Donc $s = \sigma \circ c \circ \sigma^{-1}$ est bien le cycle $(\sigma(x_1), \sigma(x_2), ..., \sigma(x_p))$

### Question 2

> Montrer que toute transposition de $S_n$ peut s'écrire comme le produit de transpositions de la forme $i \in \{2, ..., n\}$.
> **Énoncé alternatif (notations tableau)**
> Montrer que toute transposition de $\mc{S}_n$ peut s'écrire comme produit de transposition de la forme $(1, i)$

Soit $i,j \in \{1, ..., n\}$ avec $i ≠ j$
- Si $i = 1$, alors $(i,j)=(1,j)$ donc c'est bon.
- Si $j=1$ alors $(i,j)=(i,1) = (1,i)$ donc c'est bon.


---
*Brouillon*

> [!tips]
> À l'aide de la question $\fbox1$ écrire $(i,j)=\sigma \circ \tau \circ \sigma^{-1}$ avec $\tau$ et $\sigma$ des transpositions de la forme souhaité. 


---

- $\tau = (1,a)$
- $\sigma = (1,b)$
$\sigma \circ \tau \circ \sigma^{-1} = (\ub{\sigma(1)}{i}, \ub{\sigma(a)}j)$
- $\sigma = (1,i), \tau = (1,j)$

Si $i$ et $j$ sont différents de $1$.
- $(i,j)=(1,i)(1,j)(1,i)$

> [!check]
> Toujours s'assurer que la signature est de -1. Ici on a rajouté une transposition pour s'y faire.


### Question 3

> En déduire que toute permutation de $S_n$ peut s'écrire comme le produit de transpositions de la forme $(1, i) \in \{2, ..., n\}$

Par le cours, toute permutation de $S_n$ peut s'écrire comme produit de transpositions de la forme $(1, i)$ par la question $\fbox2$. 

> [!info]
> **Exemple**
> $\sigma = \m{1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 3 & 5 & 6 & 1 & 2 & 8 & 4 & 6}$
> $\phantom{\sigma} = (1,3,7,4)(2,5)(6,8)$
> $\phantom{\sigma} = (1,3)(3,7)(7,4)(2,5)(6,8)$
> $\phantom{\sigma} = \cancel{(1,3)}\cancel{(1,3)}(1,7)(1,3)(1,7)(1,4)(1,7)(1,2)(1,5)(1,2)(1,6)(1,8)(1,6)$


### Question 4

> En s'inspirant de la première question, montrer que toute transposition $(1,i)\in\{2, ..., n\},$ s'écrit comme le produit composé uniquement des cycles. $(1,2), (2,3, ..., n-1, n), (n, n-1, n-2, ..., 3, 2)$

Montrons que pour tout $i \in \{2, ..., n\},$
- $(1,i)$ peut s'écrire comme composée de $\tau = (1,2)$ et des $(n-1)$-cycles.
- $c = (2,3,...,n-1, n)$
- et $c^{-1}=(n, n-1, ..., 3, 2)$
$c \circ \tau \circ c^{-1} = (c(1), c(2))$
$\phantom{c \circ \tau \circ c^{-1}} = (1,3)$
On a:
$(1,3) = c \circ (1,2) \circ c^{-1}$
$(1,4)=c \circ (1,3) \circ c^{-1}$
$\phantom{(1,4)} = c \circ (c \circ (1,2) \circ c^{-1}) \circ c^{-1}$
$\phantom{(1,4)} = c^2 \circ (1,2) \circ (c^{-1})^2$
$(1,i)=c^{i-2}\circ (1,2)\circ (c^{-1})^{i-2}$
Par une récurrence immédiate
**Remarque** - $c^{n-1} = \id_{\{1, ..., n\}} \Rightarrow \ub{c^{n-2}}{= c^{-1}}\circ c = \id_{\{1, ..., n-1\}}$ $\color{blue}(*)$    

### Question 5

> Déduire des questions précédentes que le groupe $S_n$ est engendré par les cycles $(1,2)$ et $(2,3, ..., n-1, n)$.

On a vu que toutes les transpositions $(1,i)$ peuvent s'écrire comme produit de $\tau = (1,2)$ et $c=(2,3, ..., n-1, n)$ et $c^{-1} = (n, n-1, ..., 3, 2)$
- Par $\fbox3$   permet d'écrire transposition comme produit de $(1,2)$ et $(2,3,...,n-1, n)$.

## Exercice 5 - Permutations paires et impaires

> 1. Montrer que l'ensemble $A_n$ des permutations paires de $S_n$ est un sous-groupe de $(S_n, \circ)$. Qu'en est-il de l'ensemble des permutations impaires $I_n$ ?
> 2. Rappeler quel est le cardinal de $A_n$ et $I_n$. Comment obtient-on ce résultat?
> 3. Déterminer tous les éléments de $A_3$ puis $A_4$.


### Question 1

> Montrer que l'ensemble $A_n$ des permutations paires de $S_n$ est un sous-groupe de $(S_n, \circ)$. Qu'en est-il de l'ensemble des permutations impaires $I_n$ ?

> [!info]
> **Remarque**
> $\mc{S}_n = \ms{A}_n \cup I_n$  et de plus, $\ms{A}_n \cap I_n = \varnothing$

$\cases{\ms{A}_n = \varnothing \\ \forall \sigma_1, \sigma_2 \in \ms{A}_n, \sigma_1 \circ \sigma_2 \in A_2 \\ \forall \sigma \in \ms{A}_n, \sigma^{-1}\in \ms{A}_n} \iff \forall \sigma_1, \sigma_2 \in \ms{A}_n, \sigma_1 \circ \sigma_2^{-1} \in \ms{A}_n$

$\ms{A}_n ≠ \varnothing$ car $\id_{[|1, n|]} \in \ms{A}_n$ 
Soient $\sigma_1, \sigma_2 \in \ms{A}_n$ on a $\eps(\sigma_1)=1=\eps(\sigma_2)$
- De plus, 
- $\eps(\sigma_1 \circ \sigma_2) = \eps(\sigma_1) \times \eps{\sigma_2}$ (cf. cours)
- $\phantom{\eps(\sigma_1 \circ \sigma_2)} = 1 \times 1 = 1$
- Donc $\sigma_1 \circ \sigma_2 \in \ms{A}_n$
Enfin, soit $\sigma \in \ms{A}_n$, on sait que 
- $\eps(\sigma^{-1}) = \eps(\sigma)= 1$
- Donc $\sigma^{-1} \in \ms{A}_n$

**Par ailleurs**, $\eps(\id) = \eps(\sigma \circ \sigma^{-1})$
- $= \eps(\sigma) \times \eps(\sigma^{-1})$
$\Rightarrow \eps(\sigma^{-1}) = \frac1{\eps(\sigma)} = \frac{\eps(\sigma)}{\ub{\eps(\sigma) \times \eps(\sigma)}{= \eps(\sigma)^2 = 1}}$

**Finalement,** $\ms{A}_n$ est bien un sous-groupe de $(\mc{S}_n, \circ)$
- Comme $\id_{\{1, .., n\}}\notin I_n, I_n$ n'est pas un sous-groupe de $(\mc{S}_n, \circ)$

### Question 2

> Rappeler quel est le cardinal de $A_n$ et $I_n$. Comment obtient-on ce résultat?

$\card(\mc{S}_n) = n!$ (on se sert de la propriété des $(n-1)$-transpositions)
- $\cases{\mc{S}_n = \ms{A}_n \cup I_n \\ \ms{A}_n \cap I_n = \varnothing}\Rightarrow \card(\mc{S}_n) = \card(\ms{A}_n)+\card(I_n)$
De plus, $\card(\ms{A}_n) = \card(I_n)=\frac{n!}2$ car:
- L'application $\varphi_i :\align{A_n \to I_n \\ \sigma \mapsto (1,2)\circ \sigma}$ est une bijection.

$(1,2)(\sigma) = (1,2)\sigma' \Rightarrow \cancel{(1,2)}\cancel{(1,2)}\sigma = \cancel{(1,2)}\cancel{(1,2)}\sigma'$
- $s \in I_n, (1,2)s \in \ms{A}_n$
- $\varphi((1,2)s) = \cancel{(1,2)(1,2)}s$

### Question 3

> Déterminer tous les éléments de $A_3$ puis $A_4$.

$A_3 = \{\id_{[|1,2,3|]}, (1,2,3), (1,3,2)\}$
$A_4 = \{\id_{[|1,4|]}, (1,2,3), (1,3,2), (1,2,4), (1,4,2), (1,3,4), (1,4,3), (2,3,4),(2,4,3), (1,2)(3,4), (1,4)(2,3), (1,3)(2,3)\}$
## Exercice 6 - Un groupe vraiment pas commutatif

> Pour tout $n \in \N^*$, on note $Z_n$ l'ensemble des permutations qui commutent avec toutes les autres:
> $Z_n = \{s \in S_n: \forall \sigma \in S_n, s \circ \sigma = \sigma \circ s\}$.
> 1. Déterminer $Z_1$ et $Z_2$.
> 2. On suppose à partir de maintenant que $n ≥ 3$. Pour tout $i \in \{1, ..., n\}$, montrer qu'il existe une permutation $\sigma_i \in S_n$ dont le seul point fixe est $i$.
> 3. En déduire que $Z_n = \{\id_{\{1, ..., n\}}\}$ 

### Question 1

> Déterminer $Z_1$ et $Z_2$.

> [!check]
> Le centre d'un groupe est l'ensemble des couples d'éléments commutant.

Soit $n \in \N^*$,
- On définit $Z_n = \{s\in \mc{S}_n / \forall \sigma \in \mc{S}_n, s \circ \sigma = \sigma \circ s\}$
	- On appelle cela le **centre** d'un groupe symétrique.
	- Si un groupe est commutatif, son centre lui est égal.
- $\mc{S}_n = \{\id_{\{1\}}\} = Z_1$ 
- $\mc{S}_2 = \{\id_{\{1,2\}}, (1,2)\} = Z_2$ 
	- car un élément commute avec lui-même
	- par ailleurs commute forcément avec l'identité

### Question 2

> On suppose à partir de maintenant que $n ≥ 3$. Pour tout $i \in \{1, ..., n\}$, montrer qu'il existe une permutation $\sigma_i \in S_n$ dont le seul point fixe est $i$.

Pour tout $i \in \{1, .., n\}$, Mq il existe $\sigma_i \in \mc{S}_n$ tel que $i$ est son seul point fixe, c'est-à-dire,
- $\sigma_i (i) = i$
$\forall j \in \{1, ..., n\},$ 
- $j ≠ i$
- $\sigma_i(j) ≠ j$

**Exemple**
Dans $\mc{S}_3$, on a $\sigma_1 = (2,3), \sigma_2 = (1,3)$ et $\sigma_3 = (1,2)$
En effet,
- $\sigma_1(1) = 1$
- $\sigma_1(2) = 3 ≠ 2$
- $\sigma_1(3) = 2 ≠ 3$

Dans $\mc{S}_n$ on peut choisir, par exemple:
- $\sigma_1 = (2,3,..,n-1, n)$
- $\sigma_2 = (1,3,...,n-1,n)$
- $\vdots$
- $\sigma_i = (1,...,i-1, i+1, ..., n)$
- $\vdots$
- $\sigma_n = (1,2,..,n-1)$

> [!tips]
> À partir de $n = 4$, il n'y a pas unicité du choix de $\sigma_i$.

**Remarque** - Comparons aux suites récurrentes
- $f:\R \to \R$
- $\cases{u_0 \in \R \\ u_{n+1} = f(u_n)}$ $\forall n \in \N$
- $u_n \to l \Rightarrow l = f(l)$

> [!check]
> Point fixe $\iff$ élément égal à son image

Ici, $i$ est un point fixe de $\sigma$ si $\sigma(i) = i$

**Exemple**
- Dans $\mc{S}_4$, on peut prendre $\sigma_1 = (2,3,4)$ ou $(2,4,3)$
- Les deux applications sont différentes mais dans les deux cas $i$ est un point fixe.
- De même,
	- Dans $\mc{S}_5$, on peut prendre:
		- $\sigma_1 = (2,3,4,5)$ ou $(2,3,5,4)$ ou $(2,4,3,5)$
		- ou $(2,4,5,3)$ ou $(2,5,3,4)$ ou $(2,5,4,3)$
	- On peut aussi prendre une composée de transpositions
		- ou $(2,3)(4,5)$ ou $(2,4)(3,5)$ ou $(2,5)(3,4)$


### Question 3

> En déduire que $Z_n = \{\id_{\{1, ..., n\}}\}$ 

Il est clair que $\forall \sigma \in \mc{S}_n, \id \circ \sigma = \sigma = \sigma \circ \id$
- Donc $\id \in Z_n$ i.e $\{\id\} \sub Z_n$ 
Réciproquement,
- Soit $s \in Z_n$ 
	- Par définition de $\forall \sigma \in \mc{S}_n$, on a:
		- $s \circ \sigma = \sigma \circ s$
- Soit $i \in \{1, ..., n\}$
	- On a $s(i) = s(\sigma_i(i)) = \sigma_i(s(i))$
		- car $\sigma_i(i) = i$ ($i$ est un point de $\sigma_i$)
		- où $\sigma_i$ est la permutation trouvée dans la question 2
	- car $s \in Z_n$ donc commute avec $\sigma_i$
- Donc $s(i)$ est un point fixe de $\sigma(i)$ et donc $s(i)=i$ car $i$ est l'unique point fixe de $\sigma(i)$
- On a montré que $\forall i \in \{1, ..., n\}$, $s(i)=i$ donc $s = \id$.
- On a donc $Z_n \sub \{\id\}$.

# II - Rappels sur les applications linéaires

## Exercice 7 - Trace d'une matrice et d'un endomorphisme

> On rappelle que la trace d'une matrice carrée $A=(a_{i,j})_{1≤i,j≤n}$ à coefficient dans $\R$ ou $\C$ est la somme de ses coefficients diagonaux:
> $\tr(A) = \sum^n_{i=1}a_{ii}$ 
> 1. Montrer que l'application $A \mapsto \tr(A)$ est une forme linéaire
> 2. Montrer que pour toute matrice carrée $A$ et $B$, $\tr(A)=\tr(BA)$. En déduire que pour toute matrice inversible $P\in GL_n(\K), \tr(PAP^{-1})=\tr(A)$.
> 3. Soit $f$ un endomorphisme sur un $\K$-espace vectoriel $E$ de dimension $n$, et $\eps$ une base de $E$. Montrer que le réel $\tr(\mathscr{M}_{\eps}(f))$ est indépendant de la base choisie $\eps$. On définit alors la trace de l'endomorphisme $f$ par:
> 	- $\tr(f) := \tr(\mathscr{M}_{\eps}(f))$
> 4. Dans l'espace vectoriel $E = \R_2[X]$ on considère l'endomorphisme $f$ défini par: pour tout polynôme $P \in \R_2[X]$
> 	- $f(P) = P'-X^2P(0)$
> 	- Après avoir vérifié que $f$ était bien un endomorphisme sur $\R_2[X]$, déterminer $\tr(f)$


> [!tips]
> La trace n'a de sens que pour une matrice carrée.


Soit $(a_{ij})_{i ≤ i,j ≤ n} \in \ms{M}_n(\K)$ avec $\K=\R$ ou $\C$
La trace e $A$ est le nombre $\tr(A) = \sun{i=1}n a_{i,i}$ (diagonale)
**Exemple**
Dans $\ms{M}_3{\R}, A = \m{1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9} = 1 + 5 + 9 = 15$

### Question 1

> Montrer que l'application $A \mapsto \tr(A)$ est une forme linéaire

**Rappel** :
- Soit $E$ un $\K$-espace vectoriel. Une forme linéaire sur $E$ est une application:
	- $f:E \longrightarrow \K$ : tq $\forall u, v \in E$ et $\forall \alpha, \beta \in \K$
	- $f(\alpha u + \beta v) = \alpha f(u) + \beta f(v)$

Ici, $\tr$ étant à valeurs dans $\K$, il suffit de vérifier la linéarité.
Soit $A, B \in \ms{M}_n(\K),$ soient $\alpha, \beta \in \K$
- $A = \m{a_{ij}}_{i ≤ i, j ≤ n}$
- $B = \m{b_{i,j}}_{1 ≤ i, j ≤ n}$

On a donc 
- $\alpha A (\alpha a_{ij})_{1 ≤ 1, j ≤ n}$
- $\beta B = (\beta b_{ij})_{1 ≤ i,j ≤ n}$
Et donc, $\alpha A + \beta B = (\alpha a_{i,j}+\beta b_{i,j})_{1 ≤ i, j ≤ n}$
$\tr(\alpha A + \beta B) = \sun{i = 1}n(\alpha a_{ii}+\beta)$
$\phantom{\tr(\alpha A + \beta B)} = \sun{i=1}n \alpha a_{ii} + \sun{i=1}n \beta b_{ii}$
$\phantom{\tr(\alpha A + \beta B)} = \alpha \sun{i=1}n a_{i,i} + \beta \sun{i=1}n b_{ii}$
$\phantom{\tr(\alpha A + \beta B)} = \alpha\tr(A) + \beta\tr(B)$

## Question 2

> Montrer que pour toute matrice carrée $A$ et $B$, $\tr(AB)=\tr(BA)$. En déduire que pour toute matrice inversible $P\in GL_n(\K), \tr(PAP^{-1})=\tr(A)$.

Soient $A,B \in \ms{M}_n(\K)$. Montrons que $\tr(AB) = \tr(BA)$.
On a $C = \ub{AB}{=(c_{ij})}$ et $D = \ub{BA}{= (d_{ij})}$
Pour $i,j \in \{1, ..., n\}$
- $c_{i,j}=\sun{k=1}n a_{i,k}b_{k,j}$
- $d_{i,j}=\sun{k=1}n b_{i,k}a_{k,j}$

$\tr(AB) = \tr(C)$
$\phantom{\tr(AB)} = \sun{i=1}n c_{ii}$
$\phantom{\tr(AB)} = \sun{i=1}n\sun{k=1}na_{ik}b_{ki}$
$\phantom{\tr(AB)} = \sun{i=1}n\sun{k=1}n b_{ki}a_{ik}$
$\phantom{\tr(AB)} = \sun{k=1}n\ub{\sun{i=1}n b_{ki}a_{ik}}{d_{kk}}$
$\phantom{\tr(AB)} = \tr(D)$
$\phantom{\tr(AB)} = \tr(BA)$
En déduire que $\forall A \in \ms{M}_n(\K)$ et $\forall P \in \ub{\text{GL}_n(\K)}{\align{\text{mat. invers. de}\\ \ms{M}_n(\K)}}$
- $\tr(PAP^{-1}) = \tr(A)$ 
- $\tr(PAP^{-1}) = \tr((PA)P^{-1})$
- $\phantom{\tr(PAP^{-1})} = \tr(P^{-1}(PA))$ par ce qu'on vient de montrer
- $\phantom{\tr(PAP^{-1})} = \tr(\ub{(P^{-1}P)A}{= I_n})$
- $\phantom{\tr(PAP^{-1})} = \tr(A)$

### Question 3

> Soit $f$ un endomorphisme sur un $\K$-espace vectoriel $E$ de dimension $n$, et $\eps$ une base de $E$. Montrer que le réel $\tr(\mathscr{M}_{\eps}(f))$ est indépendant de la base choisie $\eps$. On définit alors la trace de l'endomorphisme $f$ par:
> 	- $\tr(f) := \tr(\mathscr{M}_{\eps}(f))$


Par la question $\fbox{2}$, on a:
- D'où $\tr(\ms{M}_{\eps'}(f)) = \tr(P\ms{M}_{\eps}(f)P^{-1})$
	- $= \tr(\ms{M}_{\eps}(f))$

La trace ne dépend pas de la base choisie et on peut définir:
- $\tr(s) := \tr(\ms{M}_{\eps}(f))$

> [!check]
> $« := »$ signifie « par définition »

### Question 4

> Dans l'espace vectoriel $E = \R_2[X]$ on considère l'endomorphisme $f$ défini par: pour tout polynôme $P \in \R_2[X]$
> 	- $f(P) = P'-X^2P(0)$
> 	- Après avoir vérifié que $f$ était bien un endomorphisme sur $\R_2[X]$, déterminer $\tr(f)$


**1. Montrons que $f$ est un endomorphisme**
On se place dans $E = \R_2[X]$. 
- $= \{P \in \R[X] / \deg(P) ≤ 2\}$
C'est bien un espace vectoriel de dimension $3$. 
- Une base en est la base canonique, $\{1, X, X^2\}$ (famille libre par définition, étagée en degrés).

On considère $f:\align{\R_2[X] \\ P \mapsto P'-X^2P(0)}$

**1.1 Linéarité**
Rapidement: car la dérivée est linéaire et le produit par une constante l'est aussi.
On vérifie facilement que $f$ est linéaire.

Donc, c'est un endomorphisme de $\R_2[X]$

**2. Déterminons la trace**
Déterminons $\ms{M}_{\mc{C}}(f)$ où $\mc{C}= \{1, X, X^2\}$ est la base canonique.
- $f(1)= -X^2$
- $f(X)= 1$
- $f(X^2) = 2X$
Donc $\ms{M}_{\mc{C}}(f) = \align{\underset{\align{f(1) & f(X) & f(X^2)}}{\m{0 & 1 & 0 \\ 0 & 0 & 2 \\ -1 & 0 & 0}} \align{1 \\ X \\ X^2}}$  

Donc $\boxed{\tr(f) = 0}$

****
# III - Applications multilinéaires et déterminant d'un endomorphisme

## Exercice 8

> **Question 1**
> Soit $E$ un $\K$-espace vectoriel de dimension finie $n ≥ 1$, muni d'une base $(e_i)_{1 ≤ i. n}$. Soit $f$ une application $3$-linéaire (ou trilinéaire) de $E$ dans un $\K$-espace vectoriel $F$. On considère trois vecteurs de $E$ $u_1, u_2, u_3$ tels que:
> $\forall j \in \{1, 2,3\}, u_j = \sun{i=1}n a_{i,j}e_i$
> Montrer que:
> $f(u_1, u_2, u_3) = \sun{k=1}n \sun{l=1}n \sun{m=1}n a_{k,1}a_{l,2}a_{m,3}f(e_k, e_l, e_m)$
> **Question 2**
> Soient $f:\R^2 \times \R^2 \times \R^2 \to \R^2$ et $g:\R^2 \to \R^2 \to \R^2 \to \R^2$ les applications linéaires définies par:
> - $f((x_1, x_2), (y_1, y_2), (z_1, z_2)) := (x_1y_1z_1 + 2x_2y_2z_2, 3x_2y_1z_2)$
> et,
> (a) Ces applications sont-elles 3-linéaires?
> (b) SI tel est le cas, vérifiez la formule précédente en choisissant pour base $(e_1, e_2)$ la base canonique de $\R^2$.


## Exercice 9

> Soit $f \in \mc{L}(E)$ et $\mc{B} = (e_1, ..., e_n)$ une base de $E$. 
> 1. Montrer que l'application $\psi:E^n \to \K$  définie par:
> 	 - $\psi(x_1, ..., x_n) := \sun{j=1}n\det_\mc{B}(x_1, ..., x_{j-1}, f(x_j), x_{j+1}, ..., x_n)$ 
> 	 - est une forme $n$-linéaire alternée. 
> 2. En déduire que pour tout $(x_1, ...n x_n) \in E^n$
> 	- $\sun{j=1}n\det_\mc{B}(x_1, ..., x_{j-1}, f(x_j), x_{j+1}, ..., x_n) = \tr(f)\det_\mc{B}(x_1, ..., x_n)$


