# TD 2

> Écrire la définition formelle (à l'aide de quantificateurs) de $(u_n),$ est une suite convergente. Montrer que si $(u_n)_{n\in\N}$ est une suite convergente alors sa limite est unique.

Soit $l \in \R,$ et $(u_n)_{n\in I}$ converge vers $l$ si:
- $\forall \epsilon > 0, \exists n_\epsilon \in I, \forall n \in I, \text{ si } n≥ n_\epsilon, |u_n - l| < \epsilon$

__Démo unicité lim__

Soit $(u_n)_{n\in I}$ convergente vers $2$ réels $l$ et $l'$.
- Par l'absurde, supposons $l ≠ l'$
- On pose $\epsilon = \frac{|l-l'|}2$
	- Puisque $(u_n)_{n\in\N}$ converge vers $l$:
	    - Il existe $n_\epsilon$ tel que:
	        - $\forall n ≥ n_\epsilon, |u_n- l| ≤ \epsilon$
	-  De même, puisque $(u_n)_{n\in\N}$ converge aussi vers $l'$
	    - $\exists n_\epsilon'$ tq $\forall n ≥ n_\epsilon, |u_n - l'|≤\epsilon$  
- On pose $n_{M} = \max(n_\epsilon, n'_\epsilon)$
- On a ainsi,
	- $\begin{cases}|u_n - l | ≤ \epsilon \\ et \\ |u_n - l'|≤\epsilon\end{cases},$ or,
- En additionnant, on obtient:
	- $|l-u_n|+|u_n-l| ≤ 2\epsilon$
- D'après l'inégalité triangulaire,
	- $|l-l'| ≤ |l-u_n|+|u_n-l| ≤ 2\epsilon$
- Donc
	- $|l-l'| ≤ \frac{|l-l'|}{2}$
- Or, on a supposé que $l≠l'$
	- Par **l'absurde**, $l = l'$
- On a bien montré l'unicité de la limite.
$\square$

---

> Soit $\alpha > 0$. Montrer que $\lim{n\to+\infty}\frac{1}{n^\alpha} = 0$

Soit $\alpha > 0.$ Soit $\epsilon > 0$.
- On cherche $n_\epsilon$ tel que $\forall n ≥ n_\epsilon$, $\frac{1}{n^{\alpha}} ≤ \epsilon$
- Il suffit que $n_\epsilon ≥ \frac{1}\epsilon$
- $n≥\sqrt[\alpha]{\frac{1}\epsilon}$
- $\forall n ≥ n_\epsilon, \frac{1}{n^\alpha} < \epsilon$

Donc $\lim{n\to+\infty}\frac{1}{n^\alpha} = 0$

---

> Soit $x\in \R.$ Montrer que $\lim{n\to \infty}\frac{E(10^nx)}{10^n} = x$

Pour $n \in \N,$ posons $x_n = \frac{E(10^nx)}{x}$
Montrons que $\lim{n\to+\infty}x_n = x$
- Soit $\epsilon > 0,$ on cherche $n_\epsilon$ tel que:
	- $\forall n \in \N,$ si $n ≥ n_\epsilon$ alors $|x_n - x| ≤ \epsilon$
- De plus,
	- $x_n - x =\frac{E(10^nx)}{10^n} - x = \frac{E(10^nx) - 10^nx}{10^n}$
- Or, par la définition de la partie entière, on a:
	- $E(10^nx) ≤ 10^nx < E(10^nx)+1$
- $\Rightarrow x_n ≤ x < x_n + \frac{1}{10^n}$ (on divise par $10^n$)

Donc:
- $x_n  - x ≤ 0$
- et $x-x_n < \frac{1}{10^n} \iff x_n - x > -\frac{1}{10^n}$
- $-\frac{1}{10^n} < x_n - x < 0$

Enfin,
- On a:
    - $|x-x_n|< \frac{1}{10^n}$ 
    - $|x-x_n|≤\epsilon$
- Il suffit que:

$\epsilon > \frac{1}{10^n} \iff \frac{1}{\epsilon} < 10^n$

$\phantom{\epsilon > \frac{1}{10^n}} \iff n > \frac{\log(\frac{1}\epsilon)}{\log(10)}$

Ainsi, 
- Si on prend $n_\epsilon = E(\frac{\log(\frac{1}{\epsilon})}{\log(10)}) + 1$
- On a bien $\forall n ≥ n_\epsilon, |x_n - x| ≤ \epsilon$

__Conclusion__:

$\lim{n\to+\infty}x_n = x$

$\square$

---

> Écrire la définition formalisée de $\lim{n\to+\infty}u_n=l.$ Montrer que si $(u_n)$ est une suite convergente alors elle est bornée.

__Définition formalisée__

Soit $l \in \R$, $(u_n)_{n\in I}$ converge vers $l$ si:

$\forall \epsilon > 0, \exists n_\epsilon \in \,  \forall n \in I, $ si $n≥ n_\epsilon \Rightarrow |u_n-l|≤\epsilon$

__Convergente / bornée__

Soit $(u_n)_{n\in I}$ converge vers $l\in\R$. Alors $\lim{n\to+\infty}u_n = l$.

En prenant $\epsilon = 1$

- Il existe $n_1 \in I$ tel que $\forall n \in I,$ si $n ≥ n_1$ alors $|u_n - l| ≤ 1$

C'est-à-dire,
- $l-1 ≤ u_n ≤ l+1$

On pose:
- $M = \max(u_0, ..., u_{n_1}, l+1)$
- $m = \min(u_0, ..., u_{n_2}, l-1)$

Alors, $\forall n \in I$
- $u_n ≤ M$
- $u_n ≥ m$

Ainsi,
- $(u_n)_{n\in I}$ est majorée
- De même, $(u_n)_{n\in\N}$ est minorée

**CCL** - $(u_n)_{n\in\N}$ est bornée

---

> Donner la définition formalisée de $(u_n)_{n\in\N}$ est une suite non majorée. Démontrer que si $(u_n)_{n\in\N}$ est une suite croissante non majorée alors elle tend vers $+\infty$

__Définition__

$\forall M \in \R, \exists n_M \in \N, u_{n_M}>M$

__Démonstration / Crois / Maj__

Soit $(u_n)_{n\in \N}$ une suite croissante non majorée.
1. $\forall M \in \R, \exists n_M \in \N, u_{n_M}> M$
2. $u_{n+1} ≥ u_n$

On a, d'après (1)
- $u_{n_M} > M$

Or, $\forall n ≥ n_M$:
- $u_n ≥ u_{n_M} > M$

Donc 
- $u_n > M$


On a $\forall M \in \R, u_n > M$. Ainsi, $(u_n)_{n\in\N}$ tend vers l'infini.

$\square$

---

> Soit $(u_n)_{n \in \N}$ une suite croissante et majorée. Donner la définition en langage mathématique de $s = \sup\{u_n, n\in \N\}$. Démontrer que $(u_n)_{n\in\N}$ converge vers $s$.


__Définition__

$s = \sup\{u_n, n\in\N\} \iff (\forall \epsilon > 0, \exists n_\epsilon \in \N, s-\epsilon < u_{n_{\epsilon}}≤s)$

__Démonstration / CV__

Montrons que $\lim{n\to+\infty}u_n = s$
- Soit $\epsilon > 0$,
- On sait qu'il existe $n_\epsilon$ tel que:
    - $s-\epsilon < u_n ≤ s$ 
- Or, $(u_n)_{n\in\N}$ est croissante donc on a:
    - $s-\epsilon < u_{n_\epsilon} ≤ u_{n} ≤ s$ 
- Donc:
    - $|u_n - s| = s-u_n < \epsilon$  

On a bien montré que pour tout $n ≥ n_\epsilon$:
- $|u_n-s| < \epsilon$ 

Donc, $\lim{n\to+\infty}u_n = s$

---

> Enoncer et démontrer le théorème de l’encadrement d’une suite réelle, appelé  aussi théorème des gendarmes.

Soit $(u_n)_{n\in\N}, (v_n)_{n\in\N}$ et $(w_n)_{n\in\N}$.
- $\exists n_0 \in \N$ tel que $\forall n ≥ n_0, u_n ≤ v_n ≤ w_n$
- et, $\underset{n\to+\infty}{u_n} = \underset{n\to+\infty}{w_n} = l \in \R$

Alors $\lim{n\to+\infty}v_n = l$.
