---
lang: fr
desc: Initiation à la Programmation C. Travaux Dirigés. Itérations, fonctions.
date: 23/09/2025
---
$\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}$
# Exercice 1 : Moyenne d'une suite d'entiers positifs

> Écrire un programme qui lit une suite d'entiers positifs au clavier puis affiche leur moyenne .La saisie s'arrêtera à la lecture d'un entier négatif. 
> > [!warn]
> > Si l'utilisateur donne immédiatement un négatif, la suite sera vide et la moyenne ne pourra ête calculée. On affichera alors un message d'erreur.

```c
#include <stdio.h>

int main(void) {

    int somme = 0;
    int cpt = 0;
    int fly_input;

    while (1) {
        printf("\n>>> ");
        scanf("%d", &fly_input);
        if (fly_input < 0) {
            break;
        }
        somme = somme + fly_input;
        cpt++;
    }

    if (somme == 0){
        printf("Saisie incorrecte, veuillez réessayer.\n");
    } else {
        printf("Somme: %d, \nCompteur: %d\n",somme, cpt);
        printf("\n Moyenne: %f\n", (float)somme/cpt);
    }
    return 0;
}
```

# Exercice 2 : Nombre de caractères qui renvoient un entier

> Écrire une fonction `int nbCaracteres(int n)` qui renvoie le nombre de caractères nécessaires pour afficher le nombre `n`. Par exemple `nbCaracteres(10)` et `nbCaracteres(-1)` renverront 2.

```c
int nbCaracteres(int n) {
    int count = 0;
    if (n <= 0) {
        n = -n;
        count = 1;
    }
    while (n > 0) {
        n = n / 10;
        count++;
    }

    return count;
}
```

# Exercice 3 : Valeur absolue

## Question 1.a

> Quel peut être le prototype d'une fonction `valAbs_V1` recevant un entier et renvoyant sa valeur absolue ?

On peut suivre le principe suivant: $\cases{-x \text{ si }x<0 \\ x \text{ sinon}}$
```c
int valAbs_V1 (int n) {
    if (n < 0) {
        return -n;
    } else {
        return n;
    }
}

```

## Question 1.b

```c
void valAbs_V1(int *n) {
    if (*n < 0) {
        *n = -(*n);
    }
}
```

# Exercice 4

> Écrire une fonction qui effectue l'échange des valeurs de deux variables de type entiers.
> On justifiera le prototype de la fonction.

```c
void echange(int *a, int *b) {
    *a = *a + *b;
    *b = *a - *b;
    *a = *a - *b;
}
```

# Exercice 5 : Saisie d'un nombre positif

> Écrire `scanPositif(int * val)` qui effectue la saisie d'un entier positif.

```c
```





# Exercice 7 : Puissance d'un nombre entier, exposant positif

> Écrire une fonction récursive qui reçoit deux entiers $n$ et $p≥0$ et renvoie $n^p$.
> Le calcul sera fait en utilisant l'algorithme d'exponentiation rapide.
> 
> $n^p = \cases{(n^{\frac{p}2}) \text{ si }p\text{ est pair}\\n^p = (n^{\frac{p-1}2})^2 \text{ si }p\text{ est impair.}}$

```c
#include <stdio.h>

int expo_rapide(int n, int p) {
	if (p == 0) {
		return 1;
	}
	
	if (p == 1) {
		return n;
	}
	
	int temp = expo_rapide(n, (p-1)/2);
	if (p % 2 == 0) {
		return temp * temp;
	} else {
		return temp * temp * n;
	}
}

int main(void) {
	int n, p;
	printf("Saisir n >>> ");
	scanf("%d", &n);
	printf("Saisir p >>> ");
	scanf("%d", &p);
	
	// Stabilité d'entiers <=> int reste int
	printf("%d\n", expo_rapide(n, p));
	
	return 0;
}
```

# Exercice 8 : Quotient, reste

> On souhaite écrire une fonction `QR` qui calcule le quotient et le reste de deux paramètres entiers reçus en argument.
> On rappelle que si $n$ et $d$ sont deux entiers, $d$ étant non nul, alors il existe deux entiers (uniques) $q$ et $r$ tels que:
> $n = qd + r$ avec $0 ≤ r < d$

> [!warn]
> Gérer le cas ou le diviseur est nul. Prototype, documentation, fonction

### 1. Prototype

```c
int QR(int q, int r, int * d)
```

### 2. Documentation

- La fonction prend deux entiers `q` et `r` tels qu'ils soient les entrées
- l'adresse de `d` pour renvoyer le diviseur tandis que le reste lui est retourné par l'exécution de la fonction.
### 3. Fonction


```c
#include <stdio.h>

int QR(int q, int r, int * d) {
	int reste = q;
	while (reste - r > 0) {
		reste -= r;
		(*d)++;
	}
	return r;
}

int main(void) {
	int q, r;
	printf("Saisir q >>> ");
	scanf("%d", &q);
	printf("Saisir r >>> ");
	scanf("%d", &r);
	
	int d = 0;
	
	int reste = QR(q, r, &d);
	
	printf("Quotient : %d, Reste : %d\n", d, reste);
	
	return 0;
}
```


# Exercice 9 - Somme des chiffres d'un nombre

> Écrire une fonction récursive qui reçoit un entier et renvoie la somem de ses chiffres.
> On écrira la documentation associée.

### 1. Prototype

```c
int sommeChiffre(int n)
```

### 2. Documentation

- La fonction procède comme suit:
- $\cases{}$
### 3. Fonction

```c
#include <stdio.h>


/**
*
*/
int sommeChiffres(int n) {
	int somme = 0;
    int reste = n;
    while (reste > 0) {
        somme += reste % 10;
        reste = (reste) / 10;
        printf("%d\n", reste);
    }
    return somme;
}

int main(void) {
	int n;
	
    printf(">>> ");
    scanf("%d", &n);

	printf("Somme des chiffres de %d : %d\n", n, sommeChiffres(n));
	
	return 0;
}
```

# Exercice 10 - Multiplication de deux entiers

## Question 1

> Écrire une fonction récursive `int multiRec(int g, int d)` qui effectue la multiplication des entiers $g$ par $d$ suivant la défini
> $g * d = \cases{g * (d - 1)+g \text{ si }d\text{ est impair} \\ (2g)*(d/2) \text{ si }d\text{ est pair}}$

```c
int multiRec(int g, int d) {
    if (d == 0) {
        return 0;
    }
	if (d % 2 == 1) {
        return multiRec(g, d-1) + g;
    } else {
        return multiRec(
            2*g,
            d/2
        );
    }
}
```

## Question 2

> Modifier la fonction précédente en une fonction `multiRec(int g, int d, int * cmpt)` permettant de compter le nombre d'appels récursif.


## Question 3

> On souhaite afficher chaque opération effectuée pour obtenir la suite d'affichage

$137*63=137*62+137$
$\phantom{137*63} = 274 * 31 + 137$
