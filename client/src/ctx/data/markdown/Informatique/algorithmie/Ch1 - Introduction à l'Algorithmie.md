---
lang: fr
desc: Premier cours d'algorithmie
date: 19/09/2025
---
$\newcommand{\f}[2]{\underset{#2}{\fbox{#1}}}$

 
# I - Introduction

> *de quoi parle-t-on* ?

## 1. Définition d'un problème

Un **probleme (algorithmique)** est défini par la caractérisation:
- des **entrées** (ou données) du problèmes
- de la sortie (ou du résultat) attendu pour chaque entrée, et / ou la **transformation effectuée** sur les entrées

### 1.1 Recherche dans un tableau

- **entrée** - un tableau $T$ et un élément $x$
- **sortie** : VRAI si $x \in T$ et FAUX si $x \notin T$
- **transformation** - aucune

| L   | I   | C   | E   | N   | C   | E   |
| --- | --- | --- | --- | --- | --- | --- |
### 1.2 Exemple 2 - Puissance d'un nombre

- **entrées** - un nombre $x$ et un entier $n \geq 0$
- **sortie** - la valeur $x^n$ (x puissance n)


### 1.3 Trier un tableau
- **entrées** - un tableau $T$
- **sortie** - un nouveau tableau contenant exactement les mêmes valeurs que $T$, en ordre croissant
- **transformation** : aucune

$\f{L}{}\f{I}{}\f{C}{}\f{E}{}\f{N}{}\f{C}{}\f{E}{}\f{2}{} \to \f{2}{}\f{C}{}\f{C}{}\f{E}{}\f{E}{}\f{I}{}\f{I}{}\f{L}{}\f{N}{}$

### 1.4 Indice d'un élément

- **entrée** - un tableau $T$ et un élément $X$
- **sortie** - un indice $i$ tel que $T[i]=x$ ou FAUX si $x\notin T$
- **transformation** - aucune

> [!warn]
> Il peut y avoir plusieurs **résultats** corrects si $T = [2,5,1,5]$ et $x=5$, les indices $1$ et $3$ sont tous deux corrects.


## 2. Définition d'un algorithme

Un **algorithme** est une solution à un **problème** : c'est un *procédé automatique* pour calculer le résultat, ou pour effectuer la transformation, en un *nombre fini d'étapes*.

> [!tips]
> La notion d'algorithme est indépendante de l'ordinateur mais y prend tout so sens

> **Question** - Comment décrire un algorithme ?


### 2.1 Description d'un algorthme

- Pour s'affranchir d'un langage de programmation: il faudrait définir un langage mathématique abstrait: le **pseudo-code**
- Pour le début de ce cours, on s'en tiendra à présenter les algorithmes en **Python** pour ne pas compliquer le propos.

### 2.1.1 Python

```python
def recherche_min(T):
	"""
	Entrée: un tableau T
	Sortie: la plus petite valeur de T
	"""
	m = T[0]
	for i in range(1, len(T)):
		if T[i] < m:
			m = T[i]
	return m
```

### 2.1.2 Pseudo-code

- **Entrée** : tableau $T$ de taille $n ≥ 1$
- **Sortie** : Valeur minimale dans $T$.

$m \leftarrow T[0]$
pour $i \leftarrow 1$ à $n-1$ faire:
- si $T[i] < m$ alors:
	- $m \leftarrow T[i]$
retourner $m$

### 2.2 Exemple : recherche dans un tableau trié

**Problème : recherche dans un tableau trié**
- **entrées**: un tableau croissant de nombres $T$ et un nombre $x$
- **sortie**: une position $i$ telle que $T[i]=x$  si $x \in T$ et **FAUX** si $x \notin T$

### 2.2.1 Recherche dichotomique

- L'algorithme de **recherche dichotomique** fonctionne ainsi:
	- mémoriser la plage d'indices $[d,f[$   où peut se trouver $x$ s'il est dans $T$, initialement $d=0$ et $f=|T|$
	- comparer le milieu $m = \lfloor \frac{d+f}2 \rfloor$ 

**En python**

```python
def dichotomie(T, x):
	"""
	Entrée : un tableau T
	Résultat: i tel que $T[i] = x$, False si x pas dans T
	"""
	d, f = 0, len(T)
	while d < f:
		m = (d+f) // 2
		if T[m] == x: return m
		elif x < T[m]: f = m
		else: d = m + 1
	return False
```

> Comment justifier que cet algorithme est correct?

On fait une **todo-list** de « validité »

- [ ] Renvoie le bon résultat?
	- Un indice où se trouve $x$ si cela existe
	- `False` s'il n'y en a pas
- [ ] S'arrête toujours (pas de boucle infinie)
- [ ] Y a-t-il des bugs

- Si un entier $i$ est renvoyé, c'est donc nécessairement ligne $5$, et donc bien un tel indice el que $T[i]=x$
- La **réciproque** est vraie?

*Il faut montrer que si $x \in T$, un indice correct est renvoyé*

> [!check]
> **Propriété** : au début de chaque itération de la boucle `while` pour tout indice de `i` de `T` : si `i < d` alors `T[i]<x` et si `i>=f` alors `T[i]>f`

$\Rightarrow$ on dit qu'en dehors de l'intervalle $[d,f[$ il ne peut pas y avoir $x$. 

### 2.2.2 Preuve algorithme correct

- 1ère iteration: pas d'indice en dehors de $[d, f[$ donc c'est vrai
- Si ce'st vrai au début d'une itération et que `T[m]≠x` alors affectant la valeur `m` à `f`.
	- Si `x < T[m]` alors par croissance de `T`, c'est toujours vrai en affectant la valeur `m` à `f`
	- Si `x > T[m]` alors, par croissance de `T` c'est toujours vrai en affectant la valeur `m+1` à `d`.
- La propriété est donc vérifiée à la fin de l'itération
- ... est donc au début de la suivante.

Par ailleurs, on doit vérifier deux choses:
1. Il n'y a pas de problème d'accès dans le tableau
2. Il n'y a pas a de boucle 

> [!tips]
> On utilise la descente infinie de Fermat

1. On va montrer qu'à chaque itération de la boucle la quantité $f-d$ décroit et donc cas d'arrêt $f-d ≤ 0$.
	- On note $d'$ et $f'$ les valeurs après une itération de la boucle `while` pour tout indice `i` de `T` : si $i<d$ alos $T[i]<x$ et si $i ≥ f$ alors `T[i]=x`

> Faut-il supposer que les entrées sont valides ou prendre en 
> compte leur non-validabilité pour l'algorithme. 

Ça va dépendre du langage, on parlera de **préconditions** dans une fonction, tester les **préconditions** est une bonne pratique selon le langage (Java oui, Python non)


### 3. À savoir sur la partie I

- La différence entre un **problème** et un **algorithme**
- Notion de **sureté**, **terminaison**...

# II - Correction d'un algorithme

## 1. Propriété

### 1.1 Définition

Une propriété est un énoncé qui peut être soit VRAI soit FAUx.
En général une propriétés depend de paramètres:
- Le tableau $T$ est trié est
	- **VRAI** pour $T = [2,3,5,7,11]$

## 2. Invariant de boucle

```python
def minimum(T):
	"""
	entree: T tableau de nombres non vide
	sortie : la plus petite valeur de T
	"""
	min_actuel = T[0]
	i = 1
	while i < len(T):
		if T[i] < min_actual:
			min_actuel = T[i]
		# mise a jour de 
		i += 1
	return min_actuel
```

### 3.1 Définition

Un **invariant de boucle** est une propriété qui peut dépendre des paramètres (variables) telle que:
- elle est **vraie** au début d'une ite2ration
- si elle est **vraie** au début d'une itération
	- elle est encore **vraie** à la fin de cette itération (pour tous les scénarios possibles)

> [!tips]
> L'invariant permet de décrire à quel point l'algorithme a progressé. 

## 4. Terminologie

### 4.1 Définition

Un mot $X$ de longueur $m$ est **facteur** d'un mot $T$ de longueur $n lorsqu'il existe un indice $i$ de $\{0, ..., n-m\}$ tel que:
- $X = T_iT_{i+1}\cdots T_{i+m-1}$
où $T_i$ est le $i$-ème caractère de $T$


### 4.2 Exemples

- $X = tourne$ est un facteur de $T = de\color{orange}tourn$$er$
- $X = tourner$ est un facteur de $T = de\color{orange}tourne$$r$

### 4.3 Recherche de motif

#### 4.3.1 Problème

Le problème **recherche motif** consiste, étant donné eux chaînes de caractères $X$ (le motif) et $T$ (le texte) à déterminer si $X$ est inclut.

**Algorithme** naïf pour le résoudre appelé **fenêtre glissante** consiste à vérifier chaque position dans $T$ si on voit $X$, en parcourant de gauche à droite

### 4.3.2 Algorithme

```python
def recherche_fenetre(X,T):
	"""
	Entree: X et T chaines de caracteres non vides
	Sortie: True si X est un facteur de T False sinon
	"""
	m, n = len(X), len(T)
	for i in range(n-m+1):
		k = 0
		while k < m and X[k] == T[i+k]:
			k += 1
		if k == m:
			return True
	return False
```

- Invariant de la boucle `while` nous assure que si l'algo renvoie `True` alors $T[i]\cdots T[i+m-1]$ est égal à $X$ car c'est un préfixe X. 
- L'algorithme renvoie donc correctement `True`
- **Réciproquement**...

> [!warn]
> À compléter

**Preuve de correction**
- Si l'algo renvoie `True`, $X$ est facteur de $T$ (invariant)
- Si $X$ est facteur de $T$ l'algorithme renvoie `True`
- Si l'algorithme ne renvoie pas `True`, il renvoie `False`
- L'algorithme est donc **correct**

## 5. Correction d'un algorithme recursif

### 5.1 Définition - naive

Algorithme naïf
- $x^n = \cases{1 \text{ si } x= 0\\ x \times x^n \text{ sinon}}$

```python
def puissance(x,n):
	"""
	Entree: x \in \N
	resultat: le nombre x puissance n
	"""
	if n ==0:
		return 1
	return x * puissance(x, n-1)
```

### 5.2 Preuve

**Initialisation**
Le seul cas de base est $n=0$ et l'algo renvoie 1, qui est le résultat souhaité.

**Héredité**
Pour $n ≥ 1,$ si pour tout $k \in \{0, ..., n-1\}$ (strictement plus petit que $n$) l'algorithme renvoie la réponse correcte pour les paramètres $x$ et $k$ alors, si on l'appelle avec les paramètres $x$ et $n$
- il renvoie `x * puissance(x,n-1)`

### 5.2 Définition Rapide

> [!info]
> Exponentielle rapide est un autre algorithme pour calculer $x^n$

$x^n = \cases{1 \text{ si n = 0} \\ (x^2)^{n/2} \\ x(x^2)^{(n-1)/2} \text{ si pair} \text{ si n > 0 et est impair}}$

```python
def expo_rapide(x, n):
	"""
	Entree: x \in \N
	Resultat: x^n
	"""
	if n ==0:
		return 1
	if n % 2 == 0: 
		return expo_rapide(x*x, n // 2)
	else:
		return x * expo_rapide(x*x, (n-1)//2)
```

Montrons qu'il est correct par récurrence sur $n$:
- **Initialisation** - le cas de base est $n=0$ et le resultat est correct
- **Hérédité** supposons que `expo_rapide(y,k)` renvoie $y^k$ pour tout $y$ et pour tout $k \in \{0, ..., n-1\}$

### 6. À savoir sur la correction d'un algorithme

On a vu **deux techniques** fondamentales pour établir la correction d'un algorithme.
- Les **invaraints** pour les boucles `for` et `while`.
