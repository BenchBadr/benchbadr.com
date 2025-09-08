$\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}$
# Exercice 1 

> Écrire à l'aide de quantificateurs les propositions suivantes:
> - La suite $(u_n)_{n\in \N}$ est croissante

$\forall n \in \N, u_n ≤ u_{n+1}$

> - La suite $(w_n)_{n\in\N}$ est bornée

$\exists m, M \in \R, \forall n \in \N, m≤w_n≤ M$

> La suite $(x_n)_{n\in\N}$ vérifie $\lim{n\to+\infty}x_n = 2$

$\forall \epsilon > 0, \exists n_\epsilon \in \N, \forall n \in \N, n≥ n_\epsilon \Rightarrow |x_n-2|≤\epsilon$

> La suite $(y_n)_{n\in\N}$ vérifie $\lim{n\to+\infty}y_n=+\infty$

$\forall M \in \R, \exists n_M \in \N, \forall n\in\N, n≥n_m \Rightarrow y_n ≥ M$

> La suite $(z_n)_{n\in\N}$ est convergente

$\exists l \in \R, \forall \epsilon > 0,\exists n_\epsilon \in \N, \forall n\in\N, n ≥ n_\epsilon \Rightarrow |z_n - l | ≤ \epsilon$

# Exercice 2

> En revenant à la définition, étudier la convergence de chacune des suites dont les termes sont définis par:
>
> $\forall n ≥ 2, u_n = \frac{1}{\ln(n)}$

Montrons que $\lim{n\to+\infty}u_n = 0$

Soit $\epsilon > 0,$ Montrons qu'il existe $n_\epsilon\in\N$ tel que
- $\forall n \in \N, n ≥ n_\epsilon \Rightarrow |u_n - 0| ≤ \epsilon$
Soit $n \in \N,$ on veut:
- $|u_n| ≤ \epsilon$

C'est-à-dire $\frac{1}{\ln(n)}≤ \epsilon$ ou $n≥e^{\frac{1}{\epsilon}}$

On pose $n_\epsilon = E(e^{\frac{1}{\epsilon}})+1$

Soit $n≥n_\epsilon$, on a, par définition de la partie entière. 

$n≥e^{\frac{1}{\epsilon}}$

Donc $\frac{1}{\ln(n)}≤\epsilon$ c'est-à-dire $|u_n| = \left|\frac{1}{\ln(n)}\right|≤\epsilon$

---

On a bien:

$\forall \epsilon > 0, \exists n_\epsilon \in \N, \forall n \in \N, n ≥ n_\epsilon \Rightarrow |u_n - 0|≤\epsilon$

> $\forall n ≥ 0, v_n = e^n$

$\forall M \in \R,$
- $\exists n_M\in\N, \forall n \in \N, n≥n_M \Rightarrow M_n ≥ M$

Soit $M\in\R^*,$ Mq il existe $n_M \in \N$ tel que $\forall n \in \N, n≥n_M \Rightarrow M_n ≥ M$

Soit $n\in\N,$ on veut $v_n≥M$

$e^n ≥ M$ il suffit que $n≥ln(|M|+1)$

On pose $n_M = E(\ln(|M|))+1$

Soit $n≥n_M,$ on a $n ≥ \ln(|M|)$

Donc $e^n ≥ M$ c'est-à-dire $u_n≥M$


Ainsi $\lim{n\to+\infty}u_n = +\infty$

# Exercice 3

> En utilisant les résultats de l’exercice précédent et les opérations usuelles sur les suites, étudier la convergence de chacune des suites dont les sont définis par:


> $\forall n≥2, a_n = \frac{1}{\ln(n)}+\frac{1}{n^2}$

D'après l'exercice $2$, $\lim{n\to+\infty}\frac{1}{\ln(n)}=0$
D'après le cours $\lim{n\to+\infty}\frac{1}{n^2} = 0$
Donc $\lim{n\to+\infty}a_n=\lim{n\to+\infty}\frac{1}{n^2}+\lim{n\to+\infty}\frac{1}{\ln(n)} = 0$

> $\forall n \in \N^*, e_n = \frac{3}{1+\frac{1}{n}}$

D'après le cours, $\lim{n\to+\infty}{\text{lim}}\frac{1}{n} = 0$
Donc par sommes de limites, $\lim{n\to-\infty}1+\frac{1}{n} = 1$
Donc comme $\forall n \in \N^*, 1+\frac{1}{n} ≠ 0$ par quotient $\lim{n\to+\infty}e_n = \frac{3}{1} = 3$

> Montrer que si une suite d’entiers est convergente alors la suite est constante à partir d’un certain rang

1. Montrer que la limite est entière
2. Montrer que la suite prend cette valeur

Soit $(u_n)$ une suite d'entiers telle que $\lim{n\to+\infty}u_n = l \in \R$ 
Montrons $l\in \N$. P

Par l'absurde, supposons $l\notin \N$.
- $\epsilon = \min(l-E(l), E(l)+1-l)$ *(distance entre $l$ et $\N$)

Puisque $\lim{n\to+\infty}u_n = l,$ il existe $n_\epsilon$ tel que $\forall n ≥ n_\epsilon$, $|u_n-l|≤\frac{\epsilon}{2}$ 
- Si $|u_n-l|=u_n-l$
	- Donc $u_n-l≥E(l)+1-l≥\epsilon$ 
	- Donc $\epsilon ≤ \frac{\epsilon}2$ 
	- C'est-à-dire $\epsilon ≤ 0$ (impossible)
- Sinon, $u_n ≤ l$. Or $u_n \in \N$ donc
	- $u_n ≤ E(l)$
	- Donc $l-u_n≥l-E(l)≥\epsilon$
	- Donc $\epsilon ≤ \frac{\epsilon}2$
	- C'est-à-dire $\epsilon ≤ 0$ (impossible)
Donc $l\in \N$

De plus, puisque $\lim{n\to+\infty} u_n = l$, il existe $n_{\frac{1}2}$ tel que:
$\forall n ≥ n_{\frac{1}2}, |u_n-l|≤\frac{1}2$
Soit $n≥n_\frac{1}2$. On a:
- $u_n-l\in\N$ donc
- $|u_n - l| \in \N$ 
Donc $|u_n-l|=0$

Donc $|u_n-l|=0$

Donc $u_n = l$

$\square$

## Preuve alternative

On pose $v_n = u_{n+1}-u_n$.
- $\lim{n\to+\infty}u_n=\lim{n\to+\infty}u_{n+1}=l$
Donc $\lim{n\to+\infty}v_n = 0$ 
Donc il existe $n_\frac{1}2$ tel que $\forall n ≥ n_\frac{1}2$
- $|u_{n+1}-u_n|≤\frac{1}2$
Soit $n ≥ n_\frac{1}2, |u_{n+1}-u_{n}|$  donc $|u_{n+1}-u_n|=0$ et $u_{n+1}=u_n$ 
