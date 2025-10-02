---
lang: fr
desc: Cours introductif au langage C
date: 11/09/2025
---
> [!info]
> **Cours présenté par** : M. Bouillot

# I - Introduction

## 1. Historique `Unix` et `C`

- 1969
	- Naissance du système d'exploitation `Unix` (K. Thompson et D. Ritchie) écrit en assembleur
- 1970
	- K. Thompson et D. Ritchie écrivent un nouveau langage pour réécrire `Unix`
- 1972
	- Première version du `C` développé dans les Laboratoires Bell, D. Ritchie et K. Thompson
- 1989
	- Norme ANSI du langage C
- 1991
	- Linus Torvalds, étudiant finlandais, propose une réécriture libre du noyau `Unix` : `Linux`
- 2011
	- Norme C17, formellement ISO / CEI 14882:2017

| Thompson                                                                                  | Ritchie                                                                                                                     | Torvalds                                                                                                                                       |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![thompson](https://upload.wikimedia.org/wikipedia/commons/d/dd/Ken_Thompson%2C_2019.jpg) | ![ritchie](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dennis_Ritchie_2011.jpg/250px-Dennis_Ritchie_2011.jpg) | ![torvalds](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Linus_Torvalds_%28cropped%29.jpg/188px-Linus_Torvalds_%28cropped%29.jpg) |
> *Source images : Wikimédia*

Une bonne référence tout le long du semestre:
- Le Kernighan & Ritchie, **The C Programming Language**, Prentice-Hall, 1988, 2nd edition


## 2. Pourquoi le C

### 2.1 Raisons générales

- Proche de la machine : oblige à se poser des questions ur le déroulement en mémoire
- Syntaxe relativement simple (pas d'ES, pas de fonctions prédéfinies)
	- Reprise par de nombreux langages plus modernes
- Crée des executables rapides (entre 20 et 100 fois plus rapides que Python)
- Encore très répandu et portable

### 2.2 Raisons pédagogiques

- Python est (partiellement) écrit en C
- Utile pour faire de la programmation système (noyau Linux)

## 3. Différences avec le Python

- le C est compilé
	- pas d'interpréteur permettant de tester des instructions à la volée
	- écriture d'un programme complet, puis traduction en un fichier exécutable à l'aide d'un logiciel de compilation `gcc` ou `clang`.

> [!check]
> **Exemple**
> `clang projet.c -o monjeu` traduit le fichier `projet.c` contenant le code C en un fichier en langage machine de nom `monjeu`

- Les instructions simples se terminent par un `;` (semicolon)
	- `a=a+1;`
- Les blocs doivent être explicitement indiqués à l'aide d'accolades ouvrantes et fermantes
- Pour la lisibilité du code
	- Préserver les habitudes d'indentation acquises avec `python`.

- En `Python`, le type est déterminer à l'utilisation
	- Le type d'une variable peut changer au cours de l'exécution
	- Il s'agit d'un langage **faiblement typé**
	- En C, c'est le programmeur qui doit décider ce que sera le type : il ne pourra pas changer.
- Avant d'être utilisé, tout élément doit avoir été déclaré
	- La déclaration permet au compilateur de fixer le type d'une variable et de lui laisser un emplacement en mémoire:
	- L'instruction `int a` indique que `a` désignera dans la suite une variable de type entier (dont la valeur n'a pas encore été fixée).

# II - Les fichiers sources

- Le code d'un programme écrit en `C` doit être contenu dans un fichier dont le nom se termine par `.c`
	- Nous verrons plus tard que l'interface peut être précisée dans un fichier d'extension `.h`
- La syntaxe, très précise, doit être respectée!
- Les séparateurs sont: espace, tabulation, retour ligne
- La programmation est modulaire : un fichier par thème
	- bibliothèque mathématique
	- interface graphique
	- entrée / sorties (`<stdio.h>`)
	- ...
	- Aspect vu plus tard dans le semestre

## 1. Le premier programme: `HelloWorld.c`

```c
/* Affichage du message Hello world! */
#include <stdio.h>

int main(void) {
	printf("Hello world!\n")
	return 0;
}
```

- Commentaires entre `/* ... */`
	- Désactiver temporairement parties du code
	- Commentaires détaillés ($\iff$ jsdoc? ...)
- Double slash `//` dans la norme c17
	- Commentaires rapides, inline.
- Intructions commençant par `#`
	- directives pour le préprocesseur
	- exécutées lors d'une première phase de la traduction
- Ici, on demande l'inclusion de la bibliothèque standard[^1] du C, `stdio.h` permettant l'utilisation de la fonction `printf`.
- `return 0` 
	- signale qu'il n'y a pas eu d'erreur
	- compte les erreurs
- Fonction `main`[^2]
	- Point d'entrée de l'éxecutable : c'est la fonction qui sera exécutée au lancement du programme


[^1]:https://fr.wikipedia.org/wiki/POSIX
[^2]:Convention posix

## 2. Compilation d'un programme `C`

`clang` est le programme de compilation sous `Linux`
L'option `-o` de `clang` demande la compilation en précisant le nom à donner à l'éxecutable (ici `hello`)
- **Compilation** - `clang hello.c -o hello`
- **Exécution** - `./hello`
- **Quelques options courantes de `clang`**
	- `-ansi` - compilation de `C` à la norme ANSI
	- `-std=c17` - compilation de C à la norme C17
	- `-Wall` - Mise en œuvre de certains warnings très utiles (mais pas tous)
		- moins pédantique
	- `-E` - préprocesseur uniquement
	- `-pedantic` - applique strictement les standards

Même s'ils sont parfois durs à lire, les messages d'erreur du compilateur doivent être pris en compte. Lorsqu'ils sont nombreux corriger les premières erreurs puis recompiler. Si vous êtes dans un environement à compilation automatique corriger les erreurs dans l'ordre.

## 3. La variable `PATH` du shell

- Ajouter ceci dans votre fichier `$HOME/.bashrc`
- `export PATH=$PATH`
- Cela vous évitera de taper `./` à chaque fois que vous souhaitez lancer un exécutable qui est dans votre répertoire de travail actuel.

## 4. Exemple d'utilisation des flags de `clang`

- Une faiblesse du langage `C` - l'utilisation d'une variable non initialisée
- Des flags de `clang` peuvent détecter ce genre de problèmes
	- La commade de compilation
		- `clang -Wall non_init.c -o non_init`
	- peut alors produire la sortie suivante:

```
06_variable_non_init.c:17:14: note: initialize the variable 'd' to silence this warning
^
= 0.0
1 warning generated
```

## 5. Exemple d'utilisation des flags de `gcc`

```c
/* Contenu du fichier non_init.c */
#include <stdio.h>
#define PI 3.14 /* une constante */

/* variables globales : BEURK */
float a,b;

float sum(float x, float y) { /* une fonction */
	return x+y;
}

int main(void){
	float c,d;
	a = PI;
	b = 1;
	c = sum(a,b);
	printf("%f + $f = %f\n", a,b,c);
	printf("d = %f", d); /* d n'est pas initialisée! */
	return 0;
}
```

- `void` $\iff$ `None` en Python ou `null` en JS


# II - Syntaxe du C

## 1. Les types numériques

- Le type permet de préciser au compilateur la taille nécessaire pour représenter une donnée et la manière de la représenter.
	- Il s'agit dans tous les cas de suites de `0` et de `1`.
- En `Python`, le type est déterminé à l'utilisation
	- En `C`, c'est le programmeur qui décide.
- **Les types entiers**
	- Ils désignent des intervalles finis de l'ensemble des entiers relatifs
		- le type `int` pour les entiers 
			- compris entre $-2147483648 = 2^{-31}$ et $2^{31}-1$
			- Les `int` sont représentés avec 4 octets. 
		- Le type `unsigned int` pour des entiers positifs compris entre $0$ et $2^{32}-1$
		- Le type `char` et le type `unsigned char` pour les caractères (identifiés à leur code ASCII)
			- `'a'+1` vaut `b`

> [!warn]
> Attention aux débordement avec un type signé, la somme de deux `int` positifs peut donner une valeur négative. (Overflow error)

- **Les types décimaux**
	- Ils désignent des sous ensembles de l'ensemble des nombres décimaux, avec une précision donnée
		- `float` - précision simple
		- `double` - double précision (64-bit) 
			- bit de signe, 
			- exposant (11), 
			- mantisse (53), (un bit implicite)
			- De l'ordre de $2^{53}$ donc de l'ordre de $10^{15}$ (15-16 décimales)
		- `long double` - grande précision

> [!warn]
> On peut avoir `a+b == a` si `a` est beaucoup plus grand que `b`, en raison des erreurs d'arrondis.

## 2. Conversion entre les types

Il est possible de convertir des données d'un type en un autre type:

### 2.1. Syntaxe générale

```c
nv_var = (nouveau type) var
```

### 2.2 Exemples

### 2.2.1 Exemple 1

```c
int n = 3;
float f = (float) n;
printf("n = %d. -->  f = %f\n", n, f);
```

```
n = 3 --> f = 3.000000
```
### 2.2.2 Exemple 2

```c
float f = 3.14159;
int n = (int) f;
printf("n = %f. -->  f = %d\n", n, f);
```

## 3. Les opérateurs

- Les opérateurs `+`, `-`, `*`, `/` s'appliquent uniquement à des types numériques
	- Pas de mélange `int` et `string` comme en `Python`
- Contrairement à `Python`, un seul symbole de division

## 4. Les variables

L'utilisation des variables en `C` est proche de celles des variables en `Python`, MAIS...
- ... elles doivent être **explicitement** déclarées avec leur type avant d'être utilisées;
- Une bonne habitude est de les déclarer au début du bloc[^bloc] où on les utilise:

```c
int main(void){
	int a, b = 0;
	double x;
	a = 2;
	...
}
```

[^bloc]:De préférence le bloc de la fonction englobante.

- Une variable désigne directement un emplacement en mémoire où est stockée la valeur
- C'est le type de la variable qui détermine la taille de ;'emplacement et la manière d'interpréter la suite de bits qu'on y trouve
- Le type est décidée par le développeur et positionné en mémoire par le compilateur
- L'emplacement mémoire a **une adresse** dans la mémoire de la machine
- L'adresse d'une variable se récupère avec l'opérateur `&`

## 5. Les instructions simples

- **Instructions de déclarations**
	- Elle précisent le statut d'élément utilisés ensuite
- **Instructions basées sur une évaluation**
	- Elle correspondent à "évaluer l'expression"
	- Si l'expression n'a pas d'effet de bord (i.e d'action), l'instruction ne sert à rien!
- **Instruction vide**
	- Fortement déconseillée, mais peut apparaître dans certaines constructions

```c
int a; // déclaration
float x=3.14; // declaration et initialisation
f(x); // valeur perdue si f renvoie une valeur!
a = 4; // l'affectation est une expression à effet de bord
6*7="Karembeu"; // Pasd'effet de bord
; // instruction vide
```

## 6. Les entrées sorties formatées

- S'effectuent grâce aux fonctions de la bibliothèque standard:
	- `printf()` pour l'affichage
	- `scanf()` pour la lecture
- Nécessite un formatage précis

## 6.1 Syntaxe

```c
printf(chaine formatee, parametres);
```

- Premier argument : est obligatoirement une chaîne de caractères formatée;
	- Tout ce qui n'est pas une précision de format sera affiché sans changement

## 6.2 `printf()`

### 6.2.1 Exemple 1

```c
printf("valeur = %d\n", x);
```

- Affiche la valeur de la variable `x` de type entière et passe à la ligne

Le formatage de la chaine est très riche!

### 6.2.3 Exemple 3

```c
#include <stdio.h>
#include <math.h>

int main(void) {
	float f_fl = M_PI
	double f_do = M_PI;
	printf("Le nombre pi vaut approx.")
}
```

## 6.3 `scanf()`

```c
scanf(chaine formatee, adresse(s))
```

- Premier argument : est obligatoirement une chaine de caractères *formatée*;
- Autres paramètres : représentent les adresses des variables qui recevront les valeurs lues au clavier

### 6.3.1 Exemple

L'instruction:

```c
scanf("%d", &x)
```

Permet de lire un entier


### 6.3.2 Conseils

- Dans un premier temps, ne mettez qu'une seule précision de format par `scanf`;


# IV - Structure de contrôle

## 1. Instructions conditionnelles : `if`

```c
if (condition)
	instruction
```

La condition est évaluée et l'instruction est effectuée si la condition est vraie.

La condition, placée entre paranthèses, se construit à l'aide:
- Des comparateurs `==`, `!=`, `<`, `>`, `<=`, `>=`
- des connecteurs logiques `||` pour OU, `&&` pour ET, `!` pour non.

> [!info]
> L'évaluation est paresseuse.

## 2. Instructions conditionelles : `switch`

```c
switch(variable) {
	case valeur1: instructions1
	case valeur2: instructions2
	...
	case valeurn: instructionsn
	default: instruction ...
}
```

### 2.1 Exemple

```c
int i;
printf("Entrez un entier, svp:");
scanf("%d", &i);
switch(i) {
	case 1: printf(" 1");
	case 2: printf(" 2");
	...
	default: printf(" Coucou !\n")
}
```

### 2.2 `switch + break`

L'instruction `break` permet de sortir immédiatement du bloc et donc de ne pas effectuer les instructions suivantes.

```c
int i;
printf("Entrez un entier, svp:");
scanf("%d", &i);
switch(i) {
	case 1: printf(" 1"); break;
	case 2: printf(" 2"); break;
	...
	default: printf(" Coucou !\n")
}
```


## 3. Boucle `for`

### 3.1 Syntaxe

```c
for (Initialisation; condition; Incrementation)
	instruction
```

- `Initialisation` est une expression évalue2e en premier, une et une seule fois
- `Condition` est évaluée
	- Si elle est vraie
		- `instruction` est effectuée
		- `Incrémentation` est évaluée
		- On recommence à l'évaluation de `Condition`
	- Si elle est fausse on sort de la boucle

> [!check]
> Structure à préférer quand la variable de boucle évolue toujours de la même manière.


### 3.2 Exemple

```c
int i, somme;
...
somme = 0;
for (i = 0; i < n; i = i + 1)
	somme = somme + i;
```

### 3.3 Exemple 2

Si la boucle porte sur plusieurs instructions on utilise un `bloc`.

```c
int i, somme, valeur;
somme = 0;
...
for (i = 0; i < n; i = i + 1) {
	printf("Entrez un entier : ");
	scanf("%d", &valeur);
	somme = somme + valeur;
}
```

### 3.4 Exemple 3 (extrême) - Syracuse

Dans la boucle `for`, seuls les deux `;` sont obligatoires.
- Si la condition est omise, elle est considérée vraie
- On obtient une boucle infinie dont il faudra sortir par exemple avec un `break` ou un `return`

```c
int terme;
printf("Donnez moi un entier svp : ");
scanf("%d", &n);
for (;;terme = (terme%2 == 0) ? terme/2 : 3*terme+1) {
	printf("%d\n", terme);
	if (terme == 1) {
		printf("1\n");
		break;
	}
}
```

> [!tips]
> Question à un million: prouver que ça s'arrête.

## 4. Boucle `while`

### 4.1 Exemple - Syracuse


```c
int terme;
printf("Donner moi un entier, svp : ");
scanf("%d", &terme);
while (terme != 1) {
	if (terme % 2 == 0)
		terme = terme / 2;
	else
		terme = 3 * terme + 1;
}
```

## 5. Boucles `do ... while`

### 5.1 Syntaxe

```
do
	instruction
while(condition);
```

- Même fonctionnement qu'une boucle `while`, sauf que `instruction` est effectuée au moins une fois, avant que `condition` ne soit évaluée pour la première fois.

### 5.2 Exemple

```c
int valuer;
do {
	printf("Entrez un entier positif, svp : ");
	scanf ...
	...
} while (condition)
```

## 6 Code propre

Un code propre doit, à minima, répondre aux critères suivants:
- Indentation claire et constante;
- Commentaires dans les zones critiques;
- Nom de variables, structures t fonctions avecdu sens et formalisées de manières unifiée dans tour le code:
	- `(nom_de_fonction, nomDeFonction, nom_De_Fonction, ...)`
- Code lisible par tous;
- Pas de mode gourou ou obscurantiste (du moins si vous voulez être lu... !!)
- Fixer et tenir des standards de développement:
	- entête de documentation avec référence de l'auteur
	- fonction documentées
	- disposition du code, sauts de ligne réguliers....


## 7. Aide sous `Unix`

Le manuel d'`Unix` constitue le juge de paix!
- Tout y est consigné
La politique de développement d'`Unix` impose que toutes les nouvelles fonctionnalités soient documentées. 

Pur toute précision sur une fonction `foo`


### 7.1 `man 3 qsort`

```bash
QSORT(3)                   Library Functions Manual                   QSORT(3)

  

**NAME**

     **heapsort**, **heapsort_b**, **mergesort**, **mergesort_b**, **qsort**, **qsort_b**, **qsort_r** –

     sort functions

  

**SYNOPSIS**

...
```

# V - Généralités

> [!check]
> Au départ, le C était tapé sur un téléscripteur sur papier. Il fallait ainsi écrire du code court, d'où l'intérêt des fonctions.

Pendant les calculs, les "étapes" intermédiaires du calcul sont stockées dans la pile dont la taille s'obtient dans le terminal avec la commande `ulimit -s`. À ne pas confondre avec l'accumulateur.

## 1. Syntaxe de définition d'une fonction

La définition d'une fonction se fait avec la syntaxe suivante:

```c
typeRetour nomFct(type1, nom1, ..., typen nomn){
	instructions
}
```

- **Nom de la fonction** - `nomFct`
- **Paramètres** : `nom1`, `...`, `nomn`
	- variables locales initialisées à l'appel (de fait, inconnues ailleurs que dans le scope).
	- affectées avec les valeurs des arguments fournis à l'appel.
	- à la fin e l'exécution de la fonction ces variables n'existent plus.
- **Type de retour**
	- Unicité du type possible
	- Unicité de la valeur de retour possible
	- Aucune valeur de retour implique `typeRetour = void` $\iff$ `JS:null` ou `PY:None`
- **Bloc de la fonction** (scope)
	- Peut contenir ses propres déclarations de variables (locales)
	- Adresses initialisées à l'exécution
		- Technique d'indirection
		- Les variables lcoales sont placées à partir d'une certaine adresse dans une pile.

> [!tips]
> **Rappel** - Comme tout élément manipulé par le programme une fonction doit avoir été **déclarée** avant d'être utilisée.

En tête d'un fichier, on peut déclarer des fonctions grâce aux prototypes. 
- La valeur retour d'un processus est de 16 bits et selon le signal on apprend quel "flag" a tué le process.

# VI - Fonctions

## 1. Changer la valeur d'une varaible par une fonction

- Toutes les transmissions de paramètres à des valeurs sont **des transmissions par valeur**
- Une fonction travaille toujours sur **des copies des arguments** qui lui ont été fournis. 
- Les arguments originaux ne sont donc jamais chargés par la fonction, en particulier si ces arguments sont des constantes ou des expressions.

> Peut-on changer la valeur d'une variable à l'aide d'une fonction?

Oui. C'est ce que fait `scanf`. On peut changer le contenu de la mémoire à l'adresse donnée en argument. Ce qui nous amène à la section suviante.

## 2. Utilisation de l'adresse d'une variable

> [!check]
> L'opérateur `&` fournit l'adresse d'une variable

L'opérateur `*` permet:
- **dans une déclaration** de définir un élément de type `adresse`

```c
int p;
foo = &p;
*foo = 5; // met 5 dans la variable p
p = *foo + 1; // met 6 dans la variable p
```

> [!info]
> La bibliothèque standard avant utilisait des adresses fixes. Cela rendait la bibliothèque vulnérable à des modifications malicieuses, ainsi les adresses sont aujourd'hui réaffectées à chaque initialisation de la bibliothéque.

## 3. L'adresse Zéro et la terrible `segmentation fault`

- IL existe une adresse invalide : l'adresse zéro `NULL`
	- utile pour initialiser un pointeur
	- `int * n = NULL` signifie en fait que:
		- l'adresse `n` ne pointe pas encore sur une zone mémoire valide. 


## 4. Exemple

```c
#include <stdio.h>

int f(void) {
	return 5;
}

int g(int x) {
	int n = 3;
	prinf("Dans g n = %d\n", n);
	x = n * x;
	return x;
}

int main(void){
	int n = 10;
	printf("f() renvoie %d\n", f());
	printf("g(%d) renvoie %d\n", n, g(n));
	printf("Dans le main n = %d\n", n);
	return 0;
}
```

## 5. segfault

La `segfault` c'est quand on cherche à accéder à des adresses interdites ou inaccessible.

## 6. Bonne pratique de codage et structures conditionnelles

```c
int *p = NULL;
...
if (*p) // Erreur de sementation
```

## 7. Transmission par adresse à une fonction

> Changer la valeur d'une variale à l'aide d'une fonction

```c
#include <stdio.h>

void absolue(int * x) {
	if (*x < 0)
		*x = -*x;
}

int main(void) {
	int a = -5;
	printf("Valeur de a avant : %d\n", a);
	absolue(&a);
	printf("Valeur de a apres : %d\n",a);
	return 0;
}
```

### 7.1 Exemple

```c
void autre_sens(int n) {
	printf("Adrese de n = %p\n", &n);
}

```

# VII - Retour de valeurs

## 1. Retour de plusieurs valeurs

**Difficulté** : une fonction C ne peut renvoyer qu'une valeur (de type `void`, numérique, adresse, structure...).

> [!check]
> **Solution** : on fournit l'adresse des variables où l'on souhaite placer un résultat.

**Remarque** : on peut alors utiliser la valeur d retour pour indiquer d'autres informations.

## 2. Exemple : résolution d'une équation du seconde degré

On veut écrire une fonction qui calcule les racines réelles d'une équation du second degré:
- $ax^2+bx+c = 0$

Le prototype sera donc:

```c
int resoudre(int a, int b, int c, double * x, double * y)
```

- **But**
	- Résoudre une équation du second degré
- **Paramètres**
	- Valeurs : les coefficients entiers adresse : 2 solutions possibles
- **Retour**
	- Le nombre de solution de l'équation
		- -1 : équation dégénérée, infinité de solution
		- 0 : pas de solution
		- 1 : une racine double placée à l'adresse $x$
		- 2 : deux racines placées aux adresses de $x$ et $y$.
	- Les adresses non utilisées seront mises à `NULL`

## 3. Valeur de retour comme code d'erreur

> [!tips]
> Idée très utilisée dans les fonctions systèmes.

```c
int fact(int n){
	if (n < 0)
		return -1;
	...
}
```

## Gestion de la pile

> [!warn]
> Les variables locales doivent être initialisées. 
> **Leur adresse ne doit pas être renvoyée**

Cela peut engendrer une `segfault`