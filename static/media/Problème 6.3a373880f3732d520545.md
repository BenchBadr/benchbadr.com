# Partie I - Norme infinie et convergence uniforme

> Soit $f:[a,b]\to\R$ une fonction bornée. On définit:
> $\|f\|_\infty = \sup_{x \in [a,b]}|f(x)|$

## Question 1

$f$ converge uniformément donc:
- $\lim{n\to+\infty}\|f_n - f\|_\infty=0$ $(*)$
Donc $\lim{x \to +\infty}\sup_{x\in[a,b]}|f_n(x) - f(x)| = 0$
- Soit $x_0 \in [a,b]$
	- $0 ≤ |f_n(x_0) - f(x_0)| ≤ \|f_n - f(x)\|_\infty$
- Or, d'après $(*)$ + gendarmes,
	- $\lim{n\to+\infty}|f_n(x_0) - f(x_0)|$
	- donc $\lim{n\to+\infty}f_n(x) = f(x)$
$\square$

## Question 2

$f_n \cases{[0;1] \to \R \\ x \mapsto \cases{0 \text{ si }x≥\frac1n \\ x \mapsto 1-nx \text{ si }x ≤ \frac1n}}$
**Par disjonction de cas**
- Soit $x_0 \in ]0;1]$
- Donc $f(x_0) = 0$
- $\lim{n\to\infty}\frac1n=0$ donc $\exists n_0, \forall n \in \N, n ≥ n_0 \Rightarrow x_0 ≥ \frac1n$ est $f_n(x_0)=0$
	- donc $\lim{n\to\infty}f_n(x_0) = 0 = f(x_0)$
- Soit $x_0 = 0$
	- donc $f(x_0) = 1$
	- $f_n(x_0) = 1 - n \cdot 0 = 1$
	- donc $\lim{n\to+\infty}f_n(x_0) = 1 = f(x_0)$