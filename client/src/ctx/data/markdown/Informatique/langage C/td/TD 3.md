$\providecommand{\K}{\mathbb{K}}\providecommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\providecommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\providecommand{\R}{\mathbb{R}}\providecommand{\id}{\text{id}}\providecommand{\eps}{\varepsilon}\providecommand{\cases}[1]{\begin{cases}#1\end{cases}}\providecommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\providecommand{\N}{\mathbb{N}}\providecommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\providecommand{\mc}{\mathcal}\providecommand{\ms}{\mathscr}\providecommand{\Z}{\mathbb{Z}}\providecommand{\sub}{\subset}\providecommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\providecommand{\C}{\mathbb{C}}\providecommand{\align}[1]{\begin{array}{l}#1\end{array}}\providecommand{\tr}{\text{tr}}\providecommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}\providecommand{\piv}[1]{\underset{\begin{array}{l}#1\end{array}}{=}}\providecommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\providecommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\providecommand{\com}{\text{com}}\providecommand{\td}[1]{\underset{#1}{\longrightarrow}}\providecommand{\Q}{\mathbb{Q}}\providecommand{\supp}{\text{supp}}\providecommand{\card}{\text{card}}$

# 1. Tableaux à une dimension

## Exercice 1 : Saisie et affichage d'un tableau 1D

1\. Écrire une fonction qui reçoit un tableau d'entiers et sa taille et le remplit avec des valeurs lues au clavier.

```c
void saisir(int tab[], int taille) { // int table \iff int * table
    printf("Entrez %d valeurs : ",taille);
    for (int i = 0;i < taille; i++) {
        scanf("%d", &tab[i]); // \iff *(table + i)
    }
}
```

2\. Écrire une fonction `afficheTableau` qui affiche 10 éléments par ligne, le contenu d'un tableau d'entier.

```c
void afficheTableau(int tableau[]) {
    for (int i = 0; i < TAILLE; i++) {
        printf("tableau[%d] = %d\n", i, tableau[i]);
    }
}
```

## Exercice 2 : Copie d'un tableau 1D

Écrire une fonction `void copie(int source[], int desc[], int taille)`
- Qui reçoit deux tableaux d'entiers ayant la même taille et copie le premier tableau dans le second.

```c
void copie(int source[], int dest[], int taille) {
    for (int i = 0; i < taille; i++) {
        dest[i] = source[i];
    }
}
```

## Exercice 3 - Somme, moyene

1\. Écrire une fonction qui reçoit un tableau d'entiers, sa taille et renvoie la somme de ses valeurs.

```c
void somme(int tab[], taille) {
    int acc = 0;
    for (int i = 0; i < taille;i++) {
        acc += tab[i];
    }
    return acc;
}
```

2\. Écrire une fonction qui reçoit un tableau d'entiers, sa taille et renvoie la moyenne de ses valeurs.


```c
float moyenne(tab[], taille) {
    return (float) somme(tab)/taille;
}
```


## Exercice 4 : Mirroir d'une tranche

Écrire une fonction `mirroirTranche` qui reçoit un tableau, sa taille et deux indices valides `min` et `max` (i.e tels que `0 ≤ min < max ≤ taille` où `taille` désigne la taille du tableau).

Cette fonction aura pour effet de bord de renverser les éléments situés entre les deux indices, `min` compris et `max` exclu.


```c
int reverseSlice(int tab[], int min, int max) {
    if (min >= max) {
        printf("Erreur. Indices invalides");
        return 0;
    }

    int i = min;
    int j = max - 1;
    while (i < j) {
        echanger(&tab[i], &tab[j]);
        i++;
        j--;
    }

}

```

## Exercice 5 - Décalage à droite

Écrire une fonction `void decalD(int tab[], int taille)` qui reçoit un tableau et sa taille. Après un appel à cette fonction, les éléments du tableau passé en paramètre auront réalisé un décalage circulaire d'une case vers la droite.

```c
void decalerD(int tab[], int taille) {
    int tmp = tab[taille - 1];
    for (int i = taille - 1; i > 0; i-=1) {
        tab[i] = tab[i - 1];
    }
    tab[0] = tmp;
}
```

## Exercice 6 : Décalage à droite de K

1. Version naive
    - En utilisant la fonction `decalD` ecrire une fonction `void decaleDk(int tab[], int taille, unsigned int k)` qui reçoit un tableau, sa taille et un entier positif `k` t efectue un décalage circulaire de `k` cases vers la droite
    - Combin d'affectation la fonction effectue-t-elle pour un `k` donné?

```c
void decaleDk(int tab[], int taille, unsigned int k) {
    for (int i = 0; i < taille; i++) {
        decaleD(tab, taille);
    }
}
```

2. Version efficace
    - Version 1 
        - Dessiner un tableau conteant les entiers de 0 à 9
        - Effectuer le miroir de la partie entre les indices 0 et 4 et le miroir de la partie entre les indices 4 à 10.
        - Effectuer enfin le miroir de la totalité du tableau obtenu
        - À quel décalage vers la droite le resultat correspond-il
    - Version 2
        - Écrire une version du décalage de $k$ éléments basée sur la méthode précédente
    - 


- $\ub{0 \ 1 \ 2 \ 3}{} \ \ub{4 \ 5 \ 6 \ 7 \ 8 \ 9}{}$
- $\ub{3 \ 2 \ 1 \ 0 \ 9 \ 8 \ 7 \ 6 \ 5 \ 4}{}$
- $4 \ 5 \ 6 \ 7 \ 8 \ 9 \ 0 \ 1 \ 2 \ 3$


```c
void decaleDk(int tab[], int taille, unsigned int k) {
    for 
}
```

On retient:

 - DK naive : $O(kn)$
 - DK miroir : $O(n\log(n))$
k