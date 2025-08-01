# I - Complexité

## Notations
- **Notation $O$**
	- borne supérieure, donne le pire cas.
- **Notation $\Omega$**
	- borne inférieure (meilleur cas).
- **Notation $\Theta$**
	- borne exacte (cas moyen ou bornes identiques).
- Expression de $O$
	- $O(1)$ : temps constant, $O(n)$ : linéaire, $O(n^2)$ quadratique...

# II - Recherche
## Algorithmes

- **Exhaustif (iteratif)** : $O(n), \Omega(1)$
- **Récursif (naïf)** : $O(n^2)$ (coupable : `lst[1:]`)
- **Récurisif (amélioré)** : $O(n$)$

#### Dichotomie
```python
def dicho_iter(lst, x):
    g, d = 0, len(lst) - 1
    while g <= d:
        m = (g + d) // 2
        if lst[m] == x:
            return True
        elif lst[m] < x:
            g = m + 1
        else:
            d = m - 1
    return False
```
- **Complexité** : $O(\log_2(n))$

# III - Algorithmes de tri

## Tri à bulles

```python
def tri_bulle(lst):
    n = len(lst)
    # on fait croître la portion triée
    for i in range(0, n-1):
        # on fait remonter la bulle dans la portion non triée
        for j in range(n-1, i, -1):
            # échange si voisins mal ordonnés
            if lst[j-1] > lst[j]:
                echange(lst, j, j-1)
```
$O(n^2)$
### 

