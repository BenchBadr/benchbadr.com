---
lang: fr
date: 16/09/2025
desc: Variables, instructions, conditionnelles
---
> Dans cette séance de travaux dirigés, nous abordons les points suivants:
> - Les entrées / sorties en C;
> - Les déclarations de variables et de constantes;
> - Les types de base;
> - Les structures condtiionnelles `if`, `if ... else` et `switch`

# Révisions

- `int` - $[|-2^{31},2^{31}-1|]$

# Exercice 1 

> **Déclaration de variables, les types en C**
> Dans tout programme, le programmeur fait appel à des données. Ces données peuvent prendre des valeurs qui peuvent évoluer pendant toute l'exécution du programme.
> On parle alors de *variables*.
> Une variable a un *type* qui détermine les valeurs que la variable peut prendre, ainsi que les opérations pouvant s'y appliquer.
> Nous utiliserons les types standards de C suivant : `int`, `float` et `char`
> 
> Commentez le programme suivant:

```c
#include <stdio.h> 

int main(void) {
	int i, j;
	float x, y, z;
	i = 3;
	j = 5;
	x = 3.0;
	printf("i = %d j = %d sommme = %d\n", i, j, i+j);
	i = j / 2; y = x / 2; z = j / 2;
	printf("i = %d \ny = %f z = %f\n", i, y, z);
	return 0;
}
```


- Import de `stdio` (bibliothèque standard + I/O pour le `printf`)
- Des déclarations
- Puis des affectations


# Exercice 2

> **Saisie**
> Écrire un programme qui demande un entier à l'utilisateur, le lit au clavier puis l'affiche entre deux lignes vides.

```c
#include <stdio.h>

int main(void) {
	int entier;
	printf("Veuillez entrer un entier >>> ");
	scanf("%d", &entier);
	printf("\n %d \n\n", entier);
	return 0;
}
```



# Exercice 3

> **Manipulation de nombres**
> Écrire un programme lisant quatre variables du type `int`, affiche ensuite chaque valeur sur une ligne, puis leur somme et leur moyenne sur la liste suivante.
>
> Par exemple, si l'utilisateur entre les valeurs `12 3 14`  alors le programme affichera:
> `5`
> `somme = 34, moyenne = 8.5`

```c
#include <stdio.h>

int main(void) {

    // Déclaration des quatre valeurs
	int a,b,c,d;

    // Demande des valeurs
    printf(">>> ");
    scanf("%d", &a);
    printf("\n>>> ");
    scanf("%d", &b);
    printf("\n>>> ");
    scanf("%d", &c);
    printf("\n>>> ");
    scanf("%d", &d);

    // Afficher
    printf("\n%d \n%d \n%d \n%d \n", a,b,c,d);

    // Calcul de la moyenne
    float avg = (a+b+c+d)/4;

    // Calcul de la somme
    int somme = a+b+c+d;

    printf("somme = %d, moyenne = %f", somme, avg);

	return 0;
}
```


On peut réecrire tous les `scanf` sous la forme d'un seul `scanf`:
- `scanf()`
# Exercice 4

> **Structure conditionnelles**
> 1. Écrire un programme qui lit un entier affiche s'il est positif.
> 2. Écrire un programme qui lui un entier et affiche sa parité. 

```c
#include <stdio.h>

int main(void) {

    // Déclaration des quatre valeurs
	int a;

    // Read number
    printf(">>> ");
    scanf("%d",&a);

    // Positif?
    if (a >= 0) {
        printf("%d est positif\n", a);
    } else {
        printf("%d est négatif\n", a);
    }

    // Pair?
    if (a % 2 == 0) {
        printf("%d est pair", a);
    } else {
        printf("%d est impair", a);
    }


	return 0;
}
```

# Exercice 5

> **Échange de valeurs**
> On suppose que l'on dispose de deux variables `a` et `b` de type `int`, saisies par l'utilisateur.
> 1. Écrire une suite d'instructions échangeant le contenu des deux variables `a` et `b`
> 2. En déduire un programme qui effectue l'échange de `a` et `b` si `a` est inférieur à `b` et qui augmente de 10 la valeur de `b` sinon.
> 	- Les nouvelles valeurs de `a` et `b` seront affichées à la fin du programme

## Question 1

```c
#include <stdio.h>

int main(void) {
	int a,b,temp;
	a = 5; b; 6;
	temp = a;
	a = b;
	b = temp;
	return 0;
}
```

## Question 2

# Exercice 6

> Écrire un programme qui lit en entier au clavier et affiche:
> - `premier choix` si l'entier vaut 1
> - `second choix` si l'entier vaut 2
> - `troisieme choix` si l'entier vaut 3
> - `choix incorrect` sinon.

```c
#include <stdio.h>

int main(void) {

    // Déclaration des quatre valeurs
	int a;

    // Read number
    printf(">>> ");
    scanf("%d",&a);

    // cases
    switch (a) {
        case 1:
            printf("Premier choix\n");
            break;

        case 2:
            printf("Second choix\n");
            break;

        case 3:
            printf("Troisième choix\n");
            break;

        default:
            printf("Choix incorrect\n");
            break;
    }

	return 0;
}
```
