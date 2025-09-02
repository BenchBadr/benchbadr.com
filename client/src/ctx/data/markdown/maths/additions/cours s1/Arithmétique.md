$\newcommand{\N}{\mathbb{N}}\newcommand{\Z}{\mathbb{Z}}$
# I - Définitions et premières propriétés

## Définition - Divisibilité

Soient $a,b \in \Z$.
On dit que $a|b$ lorsqu'il existe $k \in \Z$ tel que $b = ak$

## Propriété
Soit $b$ un entier non nul.
- Si $a|b$ alors $|a|≤|b|$
- L'entier $b$ admet donc un nombre fini de diviseurs.

## Propriétés de la divisibilité

### Transitivité
Soient $a,b,c \in \Z$
- Si $(a|b$ et $b|c)\Rightarrow a|c$

> [!info]
> $3|9$ et $9|45 \Rightarrow 3|45$

### Combinaison linéaire
Soient $a,b,c \in \Z$ tels que $a|b$ et $a|c$
- $\forall m, n \in \Z, a|(mb+nc)$
- En particulier,
	- $a|(b+c)$ et $a|(b-c)$

## Division euclidienne

## Proposition
Soient $a \in \N$ et $b \in \N\backslash \{0\}$
Il existe un unique couple $(q,r) \in \N \times \N$  tel que $a=bq+r$ et $0≤r<b$
L'entier $q$ est le quotient de $a$ par $b$

## Définition - Euclidienne dans $\Z$
Soient $a \in \Z$ et $b \in \Z\backslash\{0\}$
- $\exists(q,r)\in\Z \cdot \N | a = bq+r$ et $0≤r≤|b|$

# II - Congruence
### Définition
Soit $m \in \N^*$ et $a,b\in\Z$
- On dit que $a$ et $b$ sont congrus modulo $m$ s'ils ont le même modulo par $m$
- On note $a \equiv b[m]$ et $a \equiv b \text{ mod } m$

## Proposition
Soit $m \in \N^*$ et $a,b \in \Z$
- $a \equiv b[m] \iff m|(b-a)$

## Proposition - Calcul
Soit $m \in \N^*$ et $a,b,c,d \in \Z$

### Addition
Si $a \equiv b[m]$ et $c \equiv d[m]$ alors $a+c \equiv b+d[m]$

### Multiplication
Si $a \equiv b[m]$ et $c \equiv d[m]$ alors $a \times c \equiv b \times d[m]$

### Puissances
Si $a \equiv b[m]$ alors pour tout $p \in \N^*, a^p \equiv b^p[m]$
