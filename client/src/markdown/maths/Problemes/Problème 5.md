> Interpolation de Lagrange

> [!info]
> **Théorème**
> Soit $n \in \N$ et $(x_0, x_1, ..., x_n)\in\R^{n+1}$ tels que pour tout $k ≠ l, x_k ≠ x_l$.
> Soit $(y_0, y_1, ..., y_n) \in \R^{n+1}$
> Il existe un unique polynôme tel que, pour tout $k \in \{0,...,n\}$,
> $P(x_k)=y_k$

# Partie 1 - Preuve de l'existence

> On considère $(x_0, x_1, ..., x_n) \in \R^{n+1}$ tel que pour tout $k ≠ l, x_k ≠ x_l$
> On considère par ailleurs $(y_0, y_1, .., y_n) \in \R^{n+1}$.
> Pour tout $i \in \{0,...,n\}$ on définit le polynôme $L_i(X) = \prod^{n}_{\begin{matrix}j = 0 \\ j ≠ i\end{matrix}}\frac{X-x_j}{x_i-x_j}$   

## Question 1
> Montrer que pour tout 
> $i \in \{0, ..., n\}, L_i(x_i) = 1$

Soit $i \in \{1, ..., n\},$
- $L_i(X) = \prod\frac{X-x_j}{x_i-x_j}$
- $L_i(x_i) = \prod \frac{x_i - x_j}{x_i - x_j} = \prod 1$
CQFD
$\square$

## Question 2
> Montrer que pour tout $j ≠ i, L_i(x_j) = 0$

$L_i(X_i) = \prod \frac{x_j - x_j}{x_i - x_j} = 0$

## Question 3

> On pose $L(X) = \prod^n_{i=0}y_iL_i(X)$
> Montrer que $L \in \R_n[X]$

$L_i(X_i) = \prod \frac{x_j - x_j}{xi - x_j}= 0$

> $L(x_k)=\Sigma^{n}_{i=0}y_iL_i(X)$

> Conclure

Il existe

## Question 4

> **Exemple**
> On considère le cas $n =3$ avec $(x_0, x_1, x_2, x_3)=(-1;3;4;6)$ et $(y_0, y_1, y_2, y_3)=(2;2;-3;0)$.
> Calculer les polynômes $L_i$ et le polynôme $L$ apparaissant dans la preuve de l'existence (il n'est pas nécessaire de simplifier les calculs).

$n = 3$
$L(X) = \Sigma^3_{i=0}y_iL_i(X)$
$= y_0L_0(X) + y_1L_1(X)+y_2L_2(X)+y_3L_3(X)$

# Partie II - Preuve de l'unicité

> Soit $(x_0, x_1, ..., x_n) \ in\R^{n+1}$ tel que pour tout $k ≠ l, x_k ≠ x_i$. Soit $(y_0, y_1, ..., y_n) \in \R^{n+1}$.
> On suppose qu'il existe $P \in \R_n[X]$ et $Q \in \R_n[X]$ tels que pour tout $k \in \{0, ..., n\}$.
> $P(x_k)=y_k$ et $Q(x_k) = y_k$

## Question 1

> Montrer que le polynôme $P-Q$ possède au moins $n+1$ racines.

$P(X) = \lambda_n X^n + ... + \lambda_0$
$Q(X) = P_nX^n + ... + P_0$

## Question 2

> En déduire que $P=Q$

$P-Q\in\R_n[X]$ or $P-Q$ admet $n+1$ racine.
Donc $(P-Q)(X) = 0$
Donc $P(X) = Q(X)$
Donc $P$ est unique 
CQFD = QED = $\square$

# Partie III

> Montrer que l'application $\Phi : \cases{|R_n[X] \to \R^{n+1} \\ P \mapsto \m{P(x_0) \\ \vdots \\ P(x_n)}}$

Soit $\lambda \in \R$. $P,Q \in \R_n[X]$
- $\Phi(\lambda + Q) = \m{((\lambda P+Q)(x_0)) \\ \vdots \\ (\lambda P + Q)(x_n)}+\m{Q(x_0) \\ \vdots \\ Q(x_n)} = \lambda \Phi(P)+\Phi(Q)$  

CQFD

## Question 2

D'après le théorème du rang, $\dim(\Im(\Phi)) = \dim(\R_n[X]) + 0 = n+1$
Or, $\dim(\R^{n+1})=n+1$ et $\Phi$ injectif.
Donc $\Im(\Phi) = \R^{n+1}$
Donc $\Phi$ injective.