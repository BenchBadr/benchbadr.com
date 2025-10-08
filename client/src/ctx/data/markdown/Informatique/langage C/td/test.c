#include <stdio.h>

#define TAILLE 10

void decalerD(int tab[], int taille) {
    int tmp = tab[taille - 1];
    for (int i = taille - 1; i > 0; i-=1) {
        tab[i] = tab[i - 1];
    }
    tab[0] = tmp;
}
void afficheTableau(int tableau[]) {
    for (int i = 0; i < TAILLE; i++) {
        printf("tableau[%d] = %d\n", i, tableau[i]);
    }
}


int main(void) {
    int tableau[TAILLE] = {1,2,3,4,5,6,7,8, 9, 10};
    reverseSlice(tableau, 2, 5);
    afficheTableau(tableau);
    return 0;
}