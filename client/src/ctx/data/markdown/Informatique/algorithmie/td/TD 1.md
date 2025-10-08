---
lang: fr
date: 26/09/2025
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}$

# Exercice 1

> Sans regarder votre cours, indiquez la différence entre un *problème* et un *algorithme*. Donnez également les définitions de la *correction*, la *sureté* et la *terminaison* d'un algorithme.

- **Problème**
	- Un problème est une tâche à accomplir 
	- impliquant une résolution
	- Plus spécifiquement, des données en entrées et un résultat attendu en sortie
- **Algorithme**
	- Résolution dudit problème
	- Transforme les données afin de répondre au problème
- **Correction**
	- Respecte le cahier des charges
	- Renvoie les résultats attendus
- **Sureté**
	- Pas d'erreur fondamentale d'accès de données
- **Terminaison**
	- Impossibilité d'avoir un cas de non-finitude d'avoir un algorithme
	- On traîtera les cas par disjonction afin de les énumerer de façon exhaustive selon leur traîtement
- **Sureté**
	- Multiples tests afin de vérifier l'efficacité et la confiance d'un algorithme



# Exercice 2

> 1. Écrire une fonction avec juste une boucle `while` qui, étant donné un tableau non vide d'entiers renvoie sa plus grande valeur parmi celles qui sont en positions paires.
> 2. Prouvez la correction de votre algorithme

## Question 1

> Écrire une fonction avec juste une boucle `while` qui, étant donné un tableau non vide d'entiers renvoie sa plus grande valeur parmi celles qui sont en positions paires.

```python
def max(T):
	i = 2
	max_courant = 0
	while i < len(L):
		if T[i] > L[max_courant]:
			M = i
		i += 2
	return T[M]
```

- **Sureté**
	- On suppose le tableau de notre entrée non-vide.
	- Condition préliminaire assurant la sureté.
	- Le `while` strict garantit de ne pas dépasser l'index courant. 
- **Terminaison**
	- La longueur du tableau est finie
	- On augmente la valeur d'indice
	- Virtuellement le nombre de cas décrit une descente d'entiers


## Question 2

> Prouvez la correction de votre algorithme
### Invariant de boucle


Soit $P_n$ l'invariant de boucle tel que:
- $P_n:$ `max_courant` est la plus grande valeur d'un élément d'indice pair dans `T[:i]` avec `i` pair (tel que `i = 2n`)
**Initialisation**
Pour $n=1$,
- avant la 1ère itération de boucle, on a $i=2$ et `max_courant = T[0]`
- $\texttt{T[:i]} = \texttt{T[:2]} = \cases{\texttt{[T[0]]} \text{ si }\texttt{len(T)} = 1 \\ \texttt{[T[0], T[1]]} \text{ si }\texttt{len(T)} > 1}$ 
- Donc `T[0]` est bien la plus grande valeur d'un élément d'indice pair dans `T[:i]` (en fait, la seule) et `i` est bien pair.
- $\Rightarrow P_1$ vraie.

**Hérédité** (Correction)
- Soit $i_0$ la valeur de $i$ et $\max_0$  la valeur de `max_courant` au début de chaque itération.
- Par hypothèse, on a : $\max_0$ est la plus grande valeur d'un élément d'indice pair dans $\texttt{T[}i_0\texttt{]}$ et $i_0$ pair. 

> [!tips]
> **Remarque clé** : les éléments d'indices pairs de $\texttt{T[:}i_0 + 2\texttt{]}$ sont les mêmes que ceux de $\texttt{T[:}i_0\texttt{]}$ ainsi que $\texttt{T[}i_0\texttt{]}$.

- Si la condition de la ligne 5 est vérifiée
	- $\texttt{T[}i_0\texttt{]} > \max_0$
	- On a donc que $\texttt{T[:}i_0\texttt{]}$ (par hypothèse)
	- donc $\texttt{max\_courant = T[:}i_0 + 2 \texttt{]}$
- Sinon,
	- $\texttt{T[}i_0\texttt{]} ≤ \max_0$
	- La valeur de `max_courant` est inchangée
	- On a donc $\texttt{T[}i_0\texttt{]} ≤ \max_0$ par des éléments d'indices pairs dans $\texttt{T[:}i_0\texttt{]}$ et $\texttt{T[:}i_0+2\texttt{]}$
- À la fin de l'itération,
	- On a $i = i_0 + 2$ c'est bien pair.
	- Donc l'invariant est vrai. 

> [!pencil]- **Hérédité** (Brouillon)
> Soit $n\in\N$ tel que $P_n$ vraie. Montrons que $P_n \Rightarrow P_{n+1}$
> - Par H.R
> 	- $\forall k \in \N, k ≤ \frac{\texttt{len(T)}}2, \texttt{max\_courant} ≥ \texttt{T[k]}$  $(*)$
> 	- D'une part,
> 		- $i \equiv 0[2]$ 
> 		- Par stabilité des nombres pairs,
> 			- $i + 2 \equiv 0 + 0[2]$
> 	- D'autre part,
> 		- `T[:(i+2)] = T[:i] + [T[i+2]]` $(**)$
> 		- Or, par $(*)$ `max_courant` majore les éléments d'indice pair de `T[:i]`
> 		- Par $(**)$ il suffit que `max_courant >= T[i+2]`
> 			- Or, si `max_courant < T[i+2]`
> 				- Alors `max_courant <- T[i+2]`
> 			- Ainsi, `max_courant >= T[i+2]` $(***)$
> 	- Enfin, par $(***)$
> 	- On a bien $P_{n+1}$
> - $\Rightarrow P_{n+1}$ vraie.
> 

- **Invariant de boucle**
	- `max_courant` est la plus grande valeur d'un élément d'indice pair dans 1

# Exercice 3

> Prouvez la correction de cette version itérative de l'exponentiation rapide
 
```python
def expo_rapide(x, n):
	y, m, res = x, n, 1
	while m > 0: # invariant de x^n = y^m * res
		if m % 2 == 1:
			res = res * y
		y, m = y * y, m // 2
	return res
```

### 1. Terminaison
Soit $\sigma$ l'association de l'état de la puissance en chaque itération
- $\sigma(m) \mapsto \cases{\frac{m}2 \text{ si pair} \\ \frac{m - 1}2 \text{ sinon}}$
- On a $\sigma(m) ≥ \frac{m-1}2$
- Or, $m ≥ \frac{m-1}2$
- Par transitivité,
	- $\sigma(m) ≤ m$
- Enfin, notons $m_i$ l'état en une itération donnée et $m_n$ l'état initial.
	- $\sigma(m_i) ≤ m_i$
	- Et, $m_{i+1} = \sigma(m_i)$
	- Par itération
	- $\vdots$
	- $0 ≤ 1 ≤ m_i ≤ ... ≤ m_n$
	- Par **descente infinie** de fermat (i.e minoration des entiers naturels)
		- on en déduit la terminaison du calcul de l'exponentiation rapide.

> [!info]
> On parlera ici de variant de boucle.
### 2. Correction de l'algorithme

$P_{n-1} :$ $x^n= y^m \cdot \texttt{res}$ pour $(n,m)$ avec $m$ déterministe et déterminé en fonction de $n$.
**Initialisation**
Pour $m=n$
- $\texttt{res}=\texttt{res}\cdot y^1$
- $\Rightarrow P_{0}$ vraie
**Hérédité**
Soit $k \in \N$ tel que $P_{n-k}$ vraie. Mq $P_{n-k+1}$ est vraie.
- Par H.R,
	- $x^n= y^m \cdot \texttt{res}$
	- À l'itération suivante on obtient:
		- Si $m$ impair,
			- $x^{n+1} = y^m \cdot \texttt{res} \cdot x$
			- $\phantom{x^{n+1}}$


# Exercice 4

> On propose cette version récursive de la recherche dichotomique:

```python
def dichotomie(T, x):
	if len(T) == 0:
		rteturn False
	m = len(T)//2
	if x == T[m]:
		return True
	if x < T[m]:
		return dichotomie(T[:m], x)
	return dichotomie(T[m+1:], x)
```

> 1. Prouvez la correction de cet algorithme
> 2. (facultative) modifier le programme Python pour ne plus perdre du temps et de la mémoire, en n'utilisant plus les slices `T[:m]` et `T[m+1:]`

# Exercice 5

> Pour chacune des questions suivantes, est-ce que l'algorithme proposé est une solution correcte au problème posé ? Prouvez votre réponse. 
> Si l'algorithme est incorrect, modifiez-le pour le rendre correct.

## Question 1

> Problème : étant donné un tableau d'entiers, renvoyer vrai s'il ne contient que des nombres pairs et faux sinon.

```python
def tous_pairs(T):
	i = 0
	while i < len(T):
		if T[i] % 2 == 0:
			return True
		i += 1
	return False
```

- **Solution correcte**
	- Non, ce dernier renvoie `True` si le tableau contient au moins un entier pair et non que des entiers pairs.
	- Cas particulier ≠ Généralité
	- En effet, pour la liste `[1,2,3]`. Soit $i$ la $i$-ème itération
		- $i = 0 :$ `i+=1`
		- $i = 1$ : `return True`
	- Ce qui est absurde.

## Question 2

> Problème : étant donné un tableau d'entiers, renvoyer son nombre d'éléments positifs ou nuls.

```python
def nombre_positifs(T):
	nb = 0
	for i in range(len(T)):
		if T[i] >= 0:
			nb += 1
	return nb
```


## Question 3

> Problème : étant donné un tableau d'entiers de longueur $≥2$, tester si ses valeurs sont en ordre croissant.

```python
def croissant(T):
	i = 0
	while i+1 < len(T):
		if T[i] > T[i+1]:
			return False
		i += 2
	return True
```

- **Contre-exemple**
	- n saute une comparaison
	- insérer un contre-exemple
## Question 4

> Problème : étant donné deux chaînes $X$ et $T$ renvoyer vrai si $X$ est un facteur de $T$ et faux sinon.

```python
def motif(X,T):
	if len(T) < len(X):
		return False
	i = 0
	while i < len(X) and X[i] == T[i]:
		i += 1
	i == len(X):
		return True
	return motif(X, T[i:])
```

- **Contre-exemple**
- 
## Question 5

> Problème : étant donné un tableau d'entiers de taille impaire et au moins $2$, renvoyer sa plus petite et sa plus grande valeur.

```python
def min_max(T):
	min_record = max_record = T[0]
	for i in range(1, len(T), 2):
		if T[i] < T[i+1]:
			if T[i] < min_record:
				min_record = T[i]
			if [i+1] < max_record:
				max_record = T[i+1]
		else:
			if T[i+1]< min_record:
				min_record = T[i+1]
			if T[i] < max_record:
				max_record = T[i]
	return min_record, max_record
```

## Question 6

> On considère le programme ci-dessous où $T$ est un tableau de nombres non-vide.

```python
def f(T):
	for i in range(len(T) - 1):
		if T[i] > T[i+1]:
			T[i], T[i+1] = T[i+1], T[i]
```

> 1. Montrez qu'après l'appel à `f`. L'entrée $T$ est transformée de sorte qu'elle contienne les mêmes valeurs avec sa lus grande valeur dans la dernière case
> 2. Est-ce qu'après l'appel à `f`, le tableau est trié?
