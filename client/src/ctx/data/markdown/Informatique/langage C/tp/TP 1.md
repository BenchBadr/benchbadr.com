---
lang: fr
desc: Initiation à la Programmation C. Travaux Pratiques - L2. Variables, instructions, conditionnelles
date: 23/09/2025
---
# Exercice 1 : Compilation, création dun exécutable

## Question 1

> Dans votre répertoire personnel, créer un répertoire Prog_C ainsi qu’un sous-répertoire TP_1 soit à l’aide du terminal pour les plus joueurs, soit avec la souris pour les moins joueurs :-).

## Question 2

> A l’aide de votre éditeur “préféré”, créez un fichier dont le nom est Exo_1_Compilation.c et
> écrivez un programme C qui affiche votre nom et votre prénom dans cet ordre, séparé par un
> espace. Vous ajouterez aussi un retour à la ligne.

```c
#include <stdio.h>

int main(void) {
    printf("BENCHEKROUN-BADR\n");
    return 0;
}

```

## Question 3

> Compiler ce programme à l’aide du compilateur clang, avec l’option -std=c17.
>
>Quel est le résultat de la compilation ?
> On notera qu’aucun paramètre autre que le nom du fichier à compiler n’a été fourni à l’utilitaire
> de compilation.

Rien n'est affiché, ce qui semble être bon signe étant donné que rien n'est affiché à fortiori pas d'erreurs ni de warnings. 

Cependant, on constante qu'un fichier `a.out` est créé. 

En lançant `a.out` on obtient le résultat désiré précédent. Par ailleurs un fichier `Exo_1_Compilation` est aussi créé.

## Question 4

> Quels sont les droits associés au fichier exécutable créé ? Pourquoi ?

```
➜  progc cd TP_1 && ls -la
total 160
drwxr-xr-x  6 arl  staff    192 Sep 23 16:34 .
drwxr-xr-x  3 arl  staff     96 Sep 23 16:20 ..
-rwxr-xr-x  1 arl  staff  33440 Sep 23 16:27 Exo_1_Compilation
-rw-r--r--  1 arl  staff    183 Sep 23 16:27 Exo_1_Compilation.c
-rw-r--r--  1 arl  staff   1223 Sep 23 16:34 TP1-Badr-Benchekroun.md
-rwxr-xr-x  1 arl  staff  33432 Sep 23 16:34 a.out
```

On dispose des associations suivantes:
- `-rw-r--r--` : pas d'éxecution car c'est un fichier source (donc pas exécutable accessoirement)
    - On vérifie cela avec `cat Exo_1_Compilation.c`
    - `zsh: permission denied: ./Exo_1_Compilation.c`
- En contraste `drwxr-xr-x` dispose de toutes les permissions
    - On peut lire le contenu de l'exécutable bien ue le résultat soit complètement incohérent une fois ouvert. 

## Question 5
>  Vérifier que l’exécution est correcte

Une fois qu'on lance `./a.out` ou `./Exo_1_Compilation.c` on obtient bien le résultat souhaité.


## Question 6

> Comment donner le nom CV au fichier exécutable.


> [!hint]- Extrait du cours
clang` est le programme de compilation sous `Linux`
> L'option `-o` de `clang` demande la compilation en précisant le nom à donner à l'éxecutable (ici `hello`)
> - **Compilation** - `clang hello.c -o hello`
> - **Exécution** - `./hello`
> - **Quelques options courantes de `clang`**
> 	- `-ansi` - compilation de `C` à la norme ANSI
> 	- `-std=c17` - compilation de C à la norme C17
> 	- `-Wall` - Mise en œuvre de certains warnings très utiles (mais pas tous)
> 		- moins pédantique
> 	- `-E` - préprocesseur uniquement
> 	- `-pedantic` - applique strictement les standards
> 
> Même s'ils sont parfois durs à lire, les messages d'erreur du compilateur doivent être pris en compte. Lorsqu'ils sont nombreux corriger les premières erreurs puis recompiler. Si vous êtes dans un environement à compilation automatique corriger les erreurs dans l'ordre.


On peut utiliser la commande `-o` afin de spécifier le nom à utiliser comme suit:

```
clang -std=c17 Exo_1_Compilation.c -o CV  
```

# Exercice 2 : Messages d’erreur, erreurs de conception

> Récupérer le fichier `moyenne.c` sur le elearning du cours.

## Question 1

> À l’aide d’un éditeur, indentez correctement ce programme.

```c
#include <stdio.h>
int main(void) {
    /* données */
    int n, q;  /*2 nombres entiers fournis par l’utilisateur */
    /* resultat */
    double moyenne;  /* moyenne des nombres n et p */
    
    printf("Ce programme calcule la moyenne de deux entiers\n");
    printf("Donnez le premier nombre : ");
    scanf("%", &n);  /* saisie du premier nombre */
    print("Donnez le deuxième nombre : ");
    scanf("%d", p);  /* saisie du deuxième nombre */

    if (n > 0 || p > 0) {
        moyenne = (n + p) / 2; /* calcul de la moyenne */
        printf("La moyenne des deux nombres est : %5.2f, moynne");
    } else {
        printf("Les deux nombres doivent être positifs ou nuls");
    }
}

```

## Question 2

> Compiler avec `clang` pour obtenir une exécutable de nom `moyenne`

On obtient une série d'erreurs et de warning.

```
moyenne.c:10:12: warning: incomplete format specifier [-Wformat]
    scanf("%", &n);  /* saisie du premier nombre */
           ^
moyenne.c:11:5: error: call to undeclared function 'print'; ISO C99 and later do not support implicit function declarations [-Wimplicit-function-declaration]
    print("Donnez le deuxième nombre : ");
    ^
moyenne.c:11:5: note: did you mean 'printf'?
/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/stdio.h:167:6: note: 'printf' declared here
int      printf(const char * __restrict, ...) __printflike(1, 2);
         ^
moyenne.c:12:17: error: use of undeclared identifier 'p'
    scanf("%d", p);  /* saisie du deuxième nombre */
                ^
moyenne.c:14:18: error: use of undeclared identifier 'p'
    if (n > 0 || p > 0) {
                 ^
moyenne.c:15:24: error: use of undeclared identifier 'p'
        moyenne = (n + p) / 2; /* calcul de la moyenne */
                       ^
moyenne.c:16:55: warning: more '%' conversions than data arguments [-Wformat-insufficient-args]
        printf("La moyenne des deux nombres est : %5.2f, moynne");
                                                  ~~~~^
2 warnings and 4 errors generated.
```

## Question 3 et 4

> Tester et corriger les erreurs de compilation et conception.

> [!check]
> Par soucis de forme, on place les corrections d'erreurs de compilation et conception au même endroit. On précisera quand il s'agit d'erreurs de conception.

Listons et corrigeons les erreurs par ordre chronologique / linéaire.:
- **Ligne 4**
	- `int n, q;`
	- On définit `q` or il n'est jamais utilisé et `q` n'est jamais défini.
	- On en déduit qu'il s'agit ici d'une confusion, remplaçons donc `q`par `p`.
- **Ligne 10**
	- `scanf("%", &n);`
	- Le `%` doit être suivi d'un spécificateur de type
	- Comme vu en cours, cela correspond à `%d`
- **Ligne 11**
	- `print("Donnez le deuxième nombre : ");`
	- Cet usage de `print` est invalide en C.
	- Il faut remplacer par `printf`.
- **Ligne 12**
	- `scanf("%d", p);`
	- Il manque l'esperluette pour fournir l'adresse
- **Ligne 14** (conception)
	- `if (n > 0 || p > 0) {`
	- C'est incohérent car les deux nombres doivent être positifs ou nuls.
	- On corrige de la façon suivante:
	- `(n >= 0 && p >= 0)`
- **Ligne 15** (conception)
	- `moyenne = (n + p) / 2;`
	- Le résultat est tronqué car la division est entière
	- Le résultat n'est converti en flottant qu'après calcul
	- On peut remplacer par l'une des deux écritures suivantes, équivalentes par priorité de la conversion supérieure ou par influence d'un des deux membres.
		- `moyenne = (double) (n + p) / 2;`
		- `moyenne = ((double) n + p) / 2;`
		- `moyenne = (n + p) / 2.0;`
- **Ligne 16**
	- Faute à `moynne` $\to$ `moyenne`
	- *Conception*
		- Il faut ajouter un retour à la ligne
		- Guillemets fermés au mauvais endroit, on affiche le texte et non la variable.
- **Ligne 18** (Conception)
	- Il faut ajouter un retour à la ligne

> [!tips]
> **Écriture de flottants**
> `%f` = flottant, `%.2f` signifie arrondir à $10^{-2}$. `%X.2f`  ajustera la longueur en rajoutant des espaces afin de correspondre à une taille de caractères de `X`. Enfin, écrire `%0X.2f` implique l'utilisation de 0 plutôt que des espaces.

```diff
#include <stdio.h>
int main(void) {
    /* données */
-    int n, q;  /*2 nombres entiers fournis par l’utilisateur */
+    int n, p;  /*2 nombres entiers fournis par l’utilisateur */
    /* resultat */
    double moyenne;  /* moyenne des nombres n et p */
    
    printf("Ce programme calcule la moyenne de deux entiers\n");
    printf("Donnez le premier nombre : ");
-    scanf("%", &n);  /* saisie du premier nombre */
+    scanf("%d", &n);  /* saisie du premier nombre */
-    print("Donnez le deuxième nombre : ");
+    printf("Donnez le deuxième nombre : ");
-    scanf("%d", p);  /* saisie du deuxième nombre */
+    scanf("%d", &p);  /* saisie du deuxième nombre */

-    if (n > 0 || p > 0) {
+    if (n >= 0 && p >= 0) {
-        moyenne = (n + p) / 2; /* calcul de la moyenne */
+        moyenne = (n + p) / 2.0; /* calcul de la moyenne */
-        printf("La moyenne des deux nombres est : %5.2f, moynne");
+        printf("La moyenne des deux nombres est : %5.2f\n", moyenne);
    } else {
-        printf("Les deux nombres doivent être positifs ou nuls");
+        printf("Les deux nombres doivent être positifs ou nuls\n");
    }
}

```

# Exercice 3 : Nombre entier vs nombre décimal

> Ecrire un programme qui demande à l’utilisateur un nombre et affiche si celui-ci est un nombre
> entier ou un nombre à virgules.

> [!tips]
> Indication : Le test d’égalité `1 == 1.0` est vrai

```c
#include <stdio.h>

int main(void) {
    float x;
    printf(">>> ");
    scanf("%f", &x);

    if (x - (int) x == 0) {
        printf("%f est entier\n", x);
    } else {
        printf("%f est flottant\n", x);
    }

    return 0;
}
```

# Exercice 4 - FizzBuzz

> Ecrire un programme C qui :
## Question 1

> Lit un nombre entier n strictement positif saisi au clavier

On utilise pour se faire la fonction suivante qui redemandera tant que la valeur fournie n'est pas strictement positive, substitut à `scanf` pour cet exercice.

```c
void scanPositif(int *n) {
    do {
        printf("Entrez un entier strictement positif : ");
        scanf("%d", n);
    } while (*n <= 0);
}
```

## Question 2

> Affiche tous les entiers de 1 à n, un par ligne, mais :
> - Affiche le texte **"Fizz"** à la place de l’entier $k$ si celui‑ci est divisible par $2$ ;
> - Affiche le texte **"Buzz"** à la place de l’entier $k$ si celui‑ci est divisible par $3$ ;
> - Affiche le texte **"FizzBuzz"** à la place de l’entier $k$ si celui‑ci est divisible par $2$ et par $3$.

> [!check]
> On peut y voir un début de crible d'Ératosthène. Il suffirait de stocker les résultat (dans le `else` final) et les ajouter aux comparaisons. Comparer de fait dans le cadre d'une boucle dans cette liste de premiers produite.

```c
int main(void) {
    int x;
    
    scanPositif(&x);

    for (int i = 0; i < x; i++) {
        if (i % 6 == 0) {
            printf("FizzBuzz\n");
        } else  if (i % 2 == 0) {
            printf("Fizz\n");
        } else if (i % 3 == 0) {
            printf("Buzz\n");
        } else {
            printf("%d\n", i);
        }
    }

    return 0;
}
```


# Exercice 5 : Mise sous la forme siècles, années, mois, jours d’une durée

> Écrire un programme transformant un nombre de jours saisi par l’utilisateur en un nombre de siècles, d’années, de mois, de semaines et de jours restants.
> 
> - Pour simplifier le problème, on considérera que :
>   - 1 mois = 30 jours
>   - 1 année = 360 jours
>   - 1 siècle = 100 années = 36 000 jours
> 
> - Comportement attendu :
>   - Lire un entier (nombre de jours) éventuellement négatif ; si négatif, redemander.
>   - Afficher la décomposition en siècles / années / mois / semaines / jours restants.
>   - Respecter l’accord du pluriel dans l’affichage (ex. "11 années" et non "11 année").
> 
> Exemple de sortie :
> ```
> Saisissez un nombre de jours, svp : -42
> Saisissez un nombre de jours, svp : 4242
> 4242 jours correspondent à :
> 0 siècle 11 années 9 mois 1 semaine 5 jours
> ```

```c
#include <stdio.h>

int main(void) {
    int jours, reste;
    int siecles, annees, mois, semaines, jours_restants;

    // Impossible d'avoir des jours négatifs, on l'empêche
    do {
        printf("Saisissez un nombre de jours, svp : ");
        scanf("%d", &jours);
    } while (jours < 0);

    reste = jours;

    siecles = reste / 36000;
    reste = reste % 36000;

    annees = reste / 360;
    reste = reste % 360;

    mois = reste / 30;
    reste = reste % 30;

    semaines = reste / 7;
    jours_restants = reste % 7;

    printf("%d jours correspondent à :\n", jours);

    // On met les s accordément
    printf("%d %s ", siecles, siecles == 1 ? "siècle" : "siècles");
    printf("%d %s ", annees, annees == 1 ? "année" : "années");
    printf("%d %s ", mois, mois == 1 ? "mois" : "mois");
    printf("%d %s ", semaines, semaines == 1 ? "semaine" : "semaines");
    printf("%d %s\n", jours_restants, jours_restants == 1 ? "jour" : "jours");

    return 0;
}
```


# Exercice 6 (Bonus) - Équation de droites dans le plan

## Question 1

> Décrire l’algorithme permettant de déterminer les coefficients a et b de l’équation `y = ax + b` d’une droite du plan à partir de deux points n’ayant pas la même abscisse.

Soit $(x_1,y_1)$ et $(x_2, y_2)$ ces deux points,
- On peut trouver $a = \frac{y_2 - y_1}{x_2 - x_1}$
- Une fois $a$ trouvé, 
	- On refait le calcul puis la différence pour trouver $b$
## Question 2

> Ecrire un programme qui affiche l’équation de la d2roite passant par deux points P et Q dont les coordonnées auront été saisies au clavier.
> On notera la tentative pour avoir une écriture d’équation de droite la plus proche de celle qu’on utiliserait en mathématiques (pas de y = -1.000000 x + -3.000000 par exemple...)

```c
#include <stdio.h>

int main(void) {
    float x1, x2, y1, y2, a, b;

    do {
        
        printf("(x_1, y_1) >>>");
        scanf("%f %f", &x1, &y1);

        printf("(x_2, y_2) >>>");
        scanf("%f %f", &x2, &y2);

        if (x1 == x2) {
            printf("Rappel de collège: un point ne peut avoir deux images. \n Veuillez réessayer. \n");
        }

    } while (x1 == x2);


    // Calcul du coefficient directeur
    a = (y2 - y1)/(x2 - x1);

    // Calul de l'ordonnée à l'origine
    b = y1 - a * x1;


    // Affichage de la droite
    printf("y = %fx %c %f\n", a, b >= 0 ? '+' : '-',b);

    return 0;
}
```

