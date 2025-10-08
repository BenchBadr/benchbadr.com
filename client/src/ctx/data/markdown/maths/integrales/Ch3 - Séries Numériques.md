---
lang: fr
date: 08/10/2025
desc: Séries numériques
---
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}\newcommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}\newcommand{\piv}[1]{\underset{\begin{array}{l}#1\end{array}}{=}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\com}{\text{com}}\newcommand{\td}[1]{\underset{#1}{\longrightarrow}}\newcommand{\Q}{\mathbb{Q}}\newcommand{\supp}{\text{supp}}\newcommand{\card}{\text{card}}\newcommand{\sp}{\text{Sp}}\newcommand{\vect}[1]{\text{Vect}\left(#1\right)}\newcommand{\ifff}[1]{\underset{#1}{\iff}}\newcommand{\eqv}[1]{\underset{#1}{\sim}}$
> [!info]
> Cours présenté par **M. Ribaud**

# I - Définition et propriétés de base

Soit $\{u_n\}_{n≥n_0}$ une suite à valeurs réelles, définie pour $n ≥ n_0$
- On appelle somme partielle de terme général $u_n$ la suite $\{\mc{S}_n\}_{n≥n_0}$ définie par:
	- $\mc{S}_n = \sun{k = n_0}{n}u_k = u_{n_0} + \dots + u_n$

**Exemple**

Si $\forall n \in \N, u_n = 1$ alors 
- $\mc{S}_n = u_0 + \dots + u_n$
- $\phantom{\mc{S}_n} = \ub{1+...+1}{(n+1) \text{ fois}} = u+1$

## 1. Définition (con/di - verge)

Soit $\{u_n\}_{n ≥ n_0}$ une suite. 
On dira que la **série** :
- $\left(\sun{n=n_0}{+\infty}u_n\right)$ **converge** si la suite $\{\mc{S}_n\}_{n ≥ n_0}$ des sommes partielles est convergente.
- Dans le cas contraire, on dira que la série $\left(\sun{n=n_0}{+\infty}u_n\right)$ **diverge**.

> [!check]
> On a trois objets: 
> - Le terme général donné par la suite $\{u_n\}_{n ≥ 0}$
> - Les sommes partielles $\{\mc{S}_n\}_{n ≥ n_0}$
> - La série $\left(\sun{n = n_0}{+\infty}u_n\right)$ (éventuellement un nombre s'il y a divergence).

### 1.1 Point de notation

Si $\left(\sun{n = n_0}n u_n \right)$ converge, on note alors:
- $S = \sun{n = n_0}{+\infty} u_n = \sun{n ≥ n_0}{} u_n = \lim{n\to+\infty}\left(\sun{k = n_0}n u_k\right)$ 

## 2. Définition 2

Si $\left(\sun{n ≥ n_0}{} u_n\right)$ converge, on définit alors le reste d'ordre $N$ de la série par:
- $\forall n ≥ n_0, R_n = \lim{p \to +\infty}\left(\sun{k=n+1}{n+p}u_k\right)$

## 3. Proposition 1

Si $\left(\sun{n ≥ n_0}{}u_n\right)$ converge, alors, $\forall n ≥ n_0, \sun{n ≥ n_0}{+\infty}u_n = \mc{S}_n + R_n$ 

> [!tips]
> Comprendre: la somme infinie de notre série se casse en somme partielle et reste d'où l'intérêt du décalage.

### 3.1 Preuve

$S = \left(\lim{p \to +\infty}\sun{k = n_0}p u_k\right),$ on prend $p ≥ N$
- $= \lim{p \to +\infty}\left(\sun{k=n_0}N u_k + \sun{k=n+1}{p}u_k\right)$
- $= \sun{k=n_0}N u_k + \lim{p \to +\infty}\left(\sun{k = n+1}p u_k\right)$
- $= S_n + R_n$

### 3.2 Exemple

> La série géométrique

On pose $\forall n ≥ 0, u_n = q^n,$ où $q \in \R$
- On a alors 
	- $S_0 = q^0 = 1$
	- $S_1 = q^0 + q = 1 + q$
	- $\vdots$
	- $S_n = 1 + q + ... + q^n$
- On a:
	- $(1-q)S_n = S_n - qS_n$
	- $(1-q)S_n = (1+q+...+q^n) - (q+q^2+...+q^{n+1})$
	- $(1-q)S_n= 1 - q^{n+1}$
	- $S_n = \frac{1-q^{n+1}}{1-q}$

**CCL 1** : $\forall n ≥ 0,$
- $(1-q)S_n = 1 - q^{n+1}$
- $S_n = \frac{1-q^{n+1}}{1-q},$ pour $q ≠ 1$

On traite le cas $q=1$ à part,
- $\forall n ≥ 0, q = 1$ alors $S_n = n+1$

$\boxed{\align{\forall n ≥ 0, S_n = \frac{1-q^{n+1}}{1-q}, q ≠ 1 \\ \forall n ≥ 0, S_n = n+1,q = 1}}$  

On en déduit que $\{S_n\}_{n ≥ 0}$ converge ssi:
- $|q| < 1$ et alors,
- $\boxed{\sun{n=0}{+\infty}q^n = \frac1{1-q}}$

Pour finir, 
- On a $R_n$ qui est donné par:
	- $R_n = S-S_N$
	- $\phantom{R_n} = \frac1{1-q} - \frac{1-q^{n+1}}{1-q}$
Soit $\boxed{R_n = \frac{q^{n+1}}{1-q}}$


## 4. Proposition 2 (divergence triviale)

Soit $\{u_n\}_{n ≥ n_0}$ si $\left(\sun{n ≥ n_0}{} u_n\right)$ converge
- alors, nécessairement, 
	- $\lim{n\to+\infty}u_n = 0$

### 4.1 Remarque

On utilise souvent la contraposée:
- Si $\{u_n\}_{n ≥ n_0}$ ne converge pas vers $0$, alors la série diverse.

### 4.2 Preuve

Si $\left(\sun{n ≥ n_0}{} u_n\right)$ converge, alors on peut définir $R_n$ et $R_{n - 1}$ qui converge tout deux vers $0$. 
- On a alors,
	- $R_N - R_{N-1} = \lim{p \to +\infty}\left(\sun{k=n+1}{p}u_k\right)-\lim{p\to +\infty}\left(\sun{k=n}p u_k\right)$
	- $= \lim{p \to +\infty}\left(\sun{k = n+1}{p}u_k - \sun{k=u}p u_k\right)$
	- $= \lim{p\to +\infty}(-u_n) = -u_n$
- donc $u_n = -R_n + R_{n - 1}$
	- $\lim{n \to +\infty}u_n = \lim{n\to +\infty(-R_n + R_{n-1})}$
	- $= 0$

### 4.3 Remarque

La convergence vers $0$ de la suite $\{u_n\}_{n ≥ n_0}$ n'implique pas la convergence de la série. 
Par exemple, 
- Pour $u_n = \frac1n, n ≥ 1,$ on a la série harmonique, 
	- $H_n = \sun{k=1}n \frac1k = 1+\frac12+\frac13+ ... + \frac1n$
- Alors $\left(\sun{1}{+\infty}\frac1n\right)$ converge et en fat, $H_n \eqv{+\infty} \ln(n) + \gamma$.

## 5. Proposition 3

Soit $\{u_n\}_{n ≥ n_0}$ et $\{v_n\}_{n ≥ n_0}$ deux suites réelles. 
Soient $(\alpha, \beta) \in \R^2$ alors,
- Si $\left(\sun{n ≥ n_0}{}u_n\right)$ et $\left(\sun{n ≥ n_0}{} v_n\right)$ convergent, il vient que la série $\sun{n ≥ n_0}{}(\alpha u_n + \beta v_n)$ converge.

### 5.1 Preuve

*Laissé au lecteur*

> [!tips]
> On repasse aux sommes partielles et réutilise les propriétés usuelles de combinaisons linéaires de limites.

## 6. Proposition 4

SI $\left(\sun{n ≥ n_0}{} u_n\right)$ converge et si $\left(\sun{n ≥ n_0}{} v_n\right)$ diverge.
- Alors $\left(\sun{n ≥ n_0}{} u_n + v_n\right)$ diverge.

### 6.1 Preuve

Par l'absurde,
- On suppose que $\left(\sun{n ≥ n_0}{} u_n + v_n\right)$ converge.
- On utilise la **Proposition.3** avec:
	- $\cases{(u_n + v_n) \text{ et }\alpha = 1 \\ (u_n) \text{ et }\beta = -1}$ 
- Alors, par **Prop.3** on a:
	- $\sun{n ≥ n_0}{} 1 \cdot (u_n + v_n - 1(u_n))$ converge.
- et donc,
	- $\left(\sun{n ≥ n_0}{} v_n\right)$ converge : **absurde** 

$\square$

## 7. Proposition 5.

Si on change les $n_1$ premiers termes d'une série, on ne change pas sa nature. 

### 7.1. Preuve

Soit $\sun{n ≥ n_0}{} u_n$ et soit $\{\tilde{u_n}\}_{n ≥ n_0}$ telle que:
- $\forall n ≥ n_1 ≥ n_0, u_n = \tilde{u_n}$

On a alors, pour $p ≥ n_1 ≥ n_0,$
- $\sun{k = n_0}p u_k = \sun{k = n_0}{n_1-1}u_k + \sun{k = n_1}{p}u_k$
- $\phantom{\sun{k = n_0}p u_k} = \sun{k = n_0}{n_1 - 1}u_n + \sun{k = n_1}p \tilde{u_n}$
- $\phantom{\sun{k = n_0}p u_k} = \ub{\left(\sun{k = n_0}{n_1 - 1}u_k - \sun{k = n_0}{n_1-1}\tilde{u_k}\right)}{(*)} + \sun{k = n_0}p \tilde{u_k}$
	- $(*)$ : c'est une constante indépendante de $p$. Notons la $C$.
- $\boxed{\sun{k = n_0}p u_k = \sun{k = n_0}p \tilde{u_k} + C}$ 

# II - Séries à termes positifs

> [!info]
> Dans tout ce chapitre, on considère des séries de terme général $u_n$ avec $u_n$ défini pour $n ≥ 0$ et $u_n ≥ 0$.

Sous cette hypothèse, on a alors que la somme $\{S_n\}_{n ≥ 0}$ est croissante.
- $S_{n+1} - S_n = \left(\sun{k=0}{n+1}u_k\right) - \left(\sun{k=0}n u_k\right)$
- $\phantom{S_{n+1} - S_n} = u_{n+1} ≥ 0$
Donc on a $S_{n+1} ≥ S_n$
- Par suite,
	- pour que $\{S_n\}_{n ≥ 0}$ soit convergente, il suffit que $S_n$ oit majorée.

## 0. Rappel - Critère de Cauchy

On dit que la suite $\{u_n\}_{n ≥ 0}$ vérifie le critère de Cauchy si:
- $\forall \eps > 0, \exists N / \forall p ≥ n ≥ N$ on a $|u_n - u_p| ≤ \eps$

## 1. Théorème

Soit $\{u_n\}_{n ≥ 0}$ à valeurs réelles,
- Si $\{u_n\}_{n ≥ 0}$ vérifie le critère de Cauchy,
	- elle converge vers $l$ et réciproquement.

Dans le cas des sommes partielles, $\{S_n\}_{n ≥ 0}$ vérifie le critère de Cauchy si:
- $\forall \eps > 0, \exists n, \forall p ≥ n ≥ N, |-S_{n-1} + S_p| ≤ \eps$
- $\boxed{\Rightarrow \forall \eps > 0,\exists N, \forall p ≥ n ≥ N, \left| \sun{k=n}p u_k\right|≤\eps}$ $(*)$

## 2. Proposition 1

$\left(\sun{n ≥ 0}{} u_n\right)$ converge ssi $(*)$ est vérifiée.

## 2.1 Définition

On dira que la série $\left(\sun{n ≥ 0}{} u_n\right)$ est absolument convergente si $\left(\sun{n ≥ 0}{} |u_n|\right)$ converge.
- $\left(\sun{n ≥ 0}{}u_n\right)$ est convergente, mais pas absolument convergente, on dira que la série est semi-convergente.

## 3. Proposition 2

Si $\left(\sun{n ≥ 0}{}u_n\right)$ est absolument convergente alors elle est convergente.

### 3.1. Preuve

Par hypothèse,
- On a $\left(\sun{n ≥ 0}{}|u_n|\right)$ converge
	- Donc $\lim{p \to +\infty}\left(\sun{k=0}{+\infty}|u_k| - \sun{k=0}{n-1}|u_k|\right) = 0$
	- Donc $\lim{n\to+\infty}\left(\sun{k=n}{+\infty}|u_k|\right)= 0$
- $\Rightarrow \forall \eps > 0, \exists N, \forall n ≥ N, \sun{k=n}{+\infty} |u_k| ≤ \eps$   $\color{blue}(*)$
Pour montrer que $\left(\sun{n≥0}{} u_n\right)$ converge, on utilise le **critère de Cauchy**.
- Soit $p ≥ n$
	- $\left| \sun{k=n}p u_k\right| ≤ \sun{k=n}p |u_k| ≤ \sun{k=n}{+\infty}|u_k| ≤ \eps$
- Par $\color{blue}(*)$ dès qu'on a pris $n ≥ N$

Donc $\left(\sun{n ≥ 0}u_n\right)$ vérifie le critère de Cauchy donc elle converge.

### 3.2 Exemple

> $\sun{1}{+\infty}\frac1n$ diverge

On considère $\sun{k=n}{2n}\frac1k$
- $= \frac1n + \frac1{n+1}+ ... +\frac1{2n}$ ($n$ termes)
- donc $\sun{k=n}{2n}\frac1k ≥ n \cdot \frac1{2n} = \frac12$

Donc $\exists \eps = \frac12 / \forall N, \exists n, p = 2n$ avec  $2n ≥ n ≥ N$
- et $\left| \sun{n}p \frac1k\right| ≥ \eps = \frac12$

$\Rightarrow$ Cauchy n'est pas vérifié $\Rightarrow \left(\sun{n ≥ 1}{} \frac1n\right)$ diverge.