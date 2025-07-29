## Quelques exemples

On note $n$ `len(lst)`, $k$ `len(lst2)`
1. `lst[i]` en $O(1)$. 
	- On peut aller « directement » à l'élément.
	- Les cases sont côte à côte et de même taille et de même taille $T$.
	- La position de la case `lst[i]` est ... adresse
	- $@debut + T \cdot i$
	- ≠ liste récursive $\to O(i)$
2. `lst[i] = e` en $O(1)$
	- Même raisonnement que (1)
3. `len(lst)` en $O(1)$
	- la taille est un attribut en mémoire
4. `lst.append(e)` en $O(1)$
	- On se place à $@debut + T \cdot n \to O(1)$
	- On peut ajouter l'élément en $O(1)$
		- si la case est libre
	- Sinon
		- Il faudrait trouver plus de place
		- Donc déplacer toute la liste
		- La taille de la liste est « généreuse »
		- de l'espace est gaspillé mais cela permet d'éviter ce déplacement
		- Donc très rare, on néglige ce cas
	- On appelle cette négligence de la complexité « amortie »
5. `lst.extend(lst2)` en $O(k)$
	- revient à parcourir `lst2` et `append` ses éléments
	- $k \cdot O(1) \to O(k)$
	- Encore une fois, c'est un mensonge partant du principe que la place est disponible (cf. cas précédent)
6. `lst.insert(i,e)` : $O(n)$ (ou pire)
	- Pire cas: `i = 0`
	- On doit de2placer tous les éléments d'un cran vers la droite.
7. `e = lst.pop(i)` : $O(n)$
	- `lst.remove(e)`
	- Pire cas: `i=0` ou `x==lst[0]`
	- On doit décaler d'un cran vers la « gauche »
8. `lst2 = lst[:]` $O(n)$,
	- $\iff$ `lst[0:n]`
	- $O(n)$ car il faut recopier tous les éléments
	- Il s'agit d'une copie superficielle.
9. `lst2 = lst[i:i+k]` : $O(k)$
	- On recopie $k$ « flèches » ($k$ adresses)
on saute 10 et 11,
---
12. `lst1 + lst2 ` : $O(n+k)$
	- On recopie chaque case des deux listes
13. `lst * k` : $O(n \cdot k)$
	- On recopie la list entière $k$ fois
14. `e in lst` : $O(1)$
	- $O(n)$
	- Algorithme de recherche exhaustive
15. `min(lst)` et `max(lst)`
	- idem