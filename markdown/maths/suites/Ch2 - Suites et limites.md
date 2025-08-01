
# I - Définitions
## Définition - *Suite*

Une suite (réelle) est une application de $I \sub\N$  non bornée dans $\R$.

## Définition - *Limite*

Soit $l \in \R$ et $(u_n)_{n \in I}$ converge vers $l$ si:
- $\forall \epsilon \in 0, \exists n_{\epsilon}\in \N, \forall n \in I,$ si $n≥n_{\epsilon} \Rightarrow |u_n-l|≤\epsilon$

### Exemple

$1+\frac{1}{n}$ converge vers $1$.

Soit $\epsilon>0$:
- On veut $|1+\frac{1}{n}-1|≤\epsilon$
- C'est à dire $\frac{1}n ≤\epsilon$
- ou $n≥\frac{1}{\epsilon}$

Si on prend
- $n_\epsilon = E(\frac{1}{\epsilon})+1$ et $n≥n_{\epsilon}$, on a bien 
- $n≥\frac{1}{\epsilon}$ et donc $|1+\frac{1}{n}-1|≤\epsilon$

Donc $1+\frac{1}{n}$ converge vers $1$

### Proposition

Si une suite est convergente, alors sa limite est unique (on pourra noter $\lim{n\to+\infty}{u_n=l}$)

### Preuve 

Soit une suite $(u_n)_{n\in I}$ convergente vers deux réels $l$ et $l'$.
Par l'absurde, supposons $l≠l'$
Posons $\epsilon = \frac{|l-l'|}{4}$
Puisque $(u_n)_{n\in I}$ converge vers $l$, il existe $n_{\epsilon}$ tel que $\forall n ≥ n_{\epsilon}, |u_n-l|≤\epsilon$
De même, il existe $n'_{\epsilon}\in\N$ tel que $\forall n≥n'\epsilon, |u_n-l'|≤\epsilon$ 
On pose $n = \max(n_\epsilon, n'\epsilon)$
On a alors:

$$
\begin{cases}
|u_n-l|≤\epsilon \\ 
\text{et }\\
|u_n - l'| ≤ \epsilon
\end{cases}
$$

Or, on a:
$|l-l'|≤|u_n-l|+|u_n-l'|≤2\epsilon$ (in. tri)
Donc (par définition) $|l-l'|≤\frac{|l-l'|}{2}$
Possible uniquement si $l=l'$
Or, on a supposé $l≠l'$
**Absurde**
On en conclut que $l=l'$

## Proposition

Soit $\alpha>0$;
- On a $\lim{n\to+\infty}\frac{1}{n^\alpha}=0$

### Preuve

Soit $\alpha > 0.$ Soit $\epsilon > 0$.
- On cherche $n_{\epsilon}$ tel que $\forall n ≥ n_{\epsilon}, \frac{1}{n^\alpha} ≤ \epsilon$
- Soit $n\in\N,$ pour avoir $\frac{1}{n^{\alpha}}≤\epsilon$
	- Il suffit que $n^{\alpha}≥\frac{1}{\epsilon}$
	- Il suffit que $n≥a\sqrt{\frac{1}3}$
	- $\forall n ≥ n_\epsilon, \frac{1}{n^\alpha}≤\epsilon$
Donc $\lim{n\to+\infty}\frac{1}{n^\alpha}=0$

**Théorème

Tout nombre réel $x\in \R$ est la limite d'une suite de nombres rationnels.

|| Preuve
Pour $n\in \N,$ posons $x_n = \frac{E(10^nx)}{10^n}$

Montrons que $\lim{n\to+\infty}x_n=x$
Soit $\epsilon>0,$ on cherche $n_{\epsilon}\in\N$ tel que
$\forall n≥n_{\epsilon}, |x_n-x|≤\epsilon$
Soit $n\in\N,$ on veut que:
- $|x_n - x|≤\epsilon$
On a:
- $x_n-x=\frac{E(10^nx)}{10^n}-x=\frac{E(10^nx)-10^nx}{10^n}$

Par définition de $E, -\frac{1}{10^n}≤x_n-x≤0$
- Donc il suffit que $n≥\frac{\log(\frac{1}{\epsilon})}{\log(10)}$
Si on prend $n_{\epsilon} = E(\frac{\log(\frac{1}\epsilon)}{\log(10)})+1$
et $n≥n_\epsilon,$ on a:
$n>\frac{\log(\frac{1}{\epsilon})}{\log(10)}$ (définition de $E$)
Donc $\frac{1}{10^n}<\epsilon$
Donc $|x_n-x|<\epsilon$ (car $|x_n-x|≤\frac{1}{10^n}$)
Donc $\lim{x_n=x}x_n=x$


### Corollaire- *Densité*

Densité de $\mathbb{Q}$ et $\R\backslash \mathbb{Q}$ dans $\R$. Pour tout $a<b$, il existe un nombre infini d'éléments de $\mathbb Q$ et de $\mathbb{R} \backslash \mathbb{Q}$ dans $[a,b]$

#### Preuve
... il y a un infini plus grand que l'autre
Par l'absurde, soit $f$ une bijection de $\N$ sur $[0,1]$ 



## Définition

Une suite qui ne converge pas est dite divergente.

## Définition

On dit qu'une suite $(u_n)_{n\in x}$ tend vers $\begin{cases}+\infty \text{ si} \\ -\infty\end{cases}$

$\forall M \in \R, \exists n_M\in\N, \forall n \in I, n ≥ n_M \Rightarrow \begin{cases}u_n ≥ M (\text{vers }+\infty) \\ ≤ M (\text{vers }-\infty)\end{cases}$

## Proposition

On a 
- $\forall \alpha > 0, \lim{n\to+\infty}n^\alpha=+\infty$ et $\lim{n\to+\infty}-n^\alpha=-\infty$

### Preuve
Soit $\alpha > 0,$
Mq $\lim{n\to+\infty}n^\alpha = +\infty$
- Soit $M\in\R,$ cherchons $M_\epsilon$ tel que:
- $\forall n ≥ n_M, n^\alpha ≥ M$
Prenons $n_M = E(\sqrt[a]{|M|})+1$ et $n≥n_M$
On a alors $n≥\sqrt[a]{|M|}$ (définition de $E$) et $n^\alpha ≥ |M| ≥ M$


### Corollaire - *Densité*

Densité de $\mathbb{Q}$ et $\R\backslash \mathbb{Q}$ dans $\R$. Pour tout $a<b$, il existe un nombre infini d'éléments de $\mathbb Q$ et de $\mathbb{R} \backslash \mathbb{Q}$ dans $[a,b]$

## Définition

Une suite qui ne converge pas est dite divergente.

## Définition

On dit qu'une suite $(u_n)_{n\in x}$ tend vers $\begin{cases}+\infty \text{ si} \\ -\infty\end{cases}$

$\forall M \in \R, \exists n_M\in\N, \forall n \in I, n ≥ n_M \Rightarrow \begin{cases}u_n ≥ M (\text{vers }+\infty) \\ ≤ M (\text{vers }-\infty)\end{cases}$

## Proposition

On a 

$\forall \alpha > 0, \lim{n\to+\infty}n^\alpha=+\infty$ et $\lim{n\to+\infty}-n^\alpha=-\infty$

### Preuve
Soit $\alpha > 0,$ 
Mq $\lim{n\to+\infty}n^\alpha = +\infty$
- Soit $M\in\R,$ cherchons $M_\epsilon$ tel que:
- $\forall n ≥ n_M, n^\alpha ≥ M$
Prenons $n_M = E(\sqrt[a]{|M|})+1$ et $n≥n_M$
On a alors $n≥\sqrt[a]{|M|}$ (définition de $E$) et $n^\alpha ≥ |M| ≥ M$


## Proposition

Une suite convergente est bornée.

### Preuve
Soit $(u_n)_{n\in I}$ tel que $\lim{n\to+\infty}u_n=l\in\R$
- En prenant $\epsilon = 1,$ (puisque $\lim{n\to+\infty}u_n=l\in\R$)
- Il existe $n_1\in\N$ tel que, pour tout $n\in I,$ si $n≥n_1$ alors $|u_n-l|≤1$
- c'est-à-dire 
	- $l-1≤u_n≤l+1$
- En posant $M=\max(u_0, u_1,...,u_{n_1},l+1)$
	- On a alors $\forall n \in I, u_n ≤ M$
- Donc $(u_n)_{n\in I}$ est majorée.
- De même $(u_n)_{n\in I}$ est minorée.


### Remarque

Une suite bornée n'est pas nécessairement convergente.

## Proposition

Soit $(u_n)_{n\in I}$ et $(v_n)_{n\in I}$ tel que $\lim{n\to+\infty}v_n = l_v$

Alors
- $\lim{n\to +\infty}u_n+v_n=l_u+l_v$
- $\lim{n\to +\infty}u_nv_n=l_ul_v$
- Si $\begin{cases}l_v ≠ 0 \\ et \\ \forall n \in \N, v_n ≠ 0\end{cases}$ alors $\lim{n\to+\infty}\frac{u_n}{v_n}=\frac{l_u}{l_v}$

(en gros, les props par somme / produit / quotient)

### Preuve
- Mq $\lim{n\to+\infty}u_n+v_n = l_u+l_v$
    - Soit $\epsilon > 0$. On veut trouver $n\in\N$ tel que:
        - $|u_n+v_n-(l_u+l_v)|≤\epsilon$
	- Par l'inégalité triangulaire, on a
	- $|(u_n-l_v)+(v_n-l_v)| ≤ |u_n-l_v|+|u_n-l_v|$
	- Il suffit d'avoir $|u_n-l_v|+|v_n - l_v|≤\epsilon$ 
	- Il suffit d'avoir $|u_n-l_v|+|v_n-l_v|≤\epsilon$
- En posant $n_{u+v}=\max(n_v, n_u)$ on a 
$$
\forall n \in I, n ≥ n_{u+v} \Rightarrow \begin{cases}
|u_n-l_u|≤\frac{\epsilon}{2} \\
|v_n-l_v|≤\frac{\epsilon}{2}
\end{cases}
$$


---

$\lim{n\to+\infty}u_n+v_n = \lim{n\to+\infty}u_n+\lim{n\to+\infty}v_n$

$\lim{n\to+\infty}u_nv_n=\lim{n\to+\infty}u_n \lim{n\to +\infty}v_n$

### Preuve

**Écriture**


Soit $(u_n)_{n\in\N}, (v_n)_{n\in\N}$ telles que $\lim{n\to+\infty}u_n=l_v$ et $\lim{n\to+\infty}v_n = l_v$

**Logique**

Soit $\epsilon > 0,$ on cherche $n_{\epsilon}$ tel que $\forall n ≥ n_{\epsilon},$
- $|u_nv_n-l_ul_v|≤\epsilon$


Soit $n\in\N,$ on a:
- $|u_nv_n-l_ul_v| = |(u_n-l_u)v_n+l_u(v_n-l_v)|$
- $\phantom{|u_nv_n-l_ul_v|}≤ |v_n| |u_n-l_v|+|l_v| |u_n-l_v|$ ($i\triangle$)

Il suffit que
$\begin{cases}|v_n| |u_n-l_v|≤\frac{\epsilon}{2}\\ et \\ |l_v| |v_n-l_v|≤\frac{\epsilon}{2}\end{cases}$

Il suffit que 
$$
\begin{cases}M|u_n-l_u|≤\frac{\epsilon}{2} \text{ avec }M>0 \text{ majorant de }(v_n)_{n\in\N}\\
(|l_u| + 1)|v_n-l_v|≤\frac{\epsilon}{2}
\end{cases}
$$

Il suffit que

$\begin{cases}|u_n-l_u|≤\frac{\epsilon}{2M} \\ et  \\|v_n-l_v|≤\frac{\epsilon}{2(|l_u|+1)}\end{cases}$

Posons $\epsilon_u = \frac{\epsilon}{2M}$ et $\epsilon_v = \frac{\epsilon}{2(|l_u|+1)}$

Puisque $\lim{n\to+\infty}v_n = l_v,$ il existe $n_v \in \N$ tel que:
- $\forall n ≥ n_u, |v_n - l_v|≤\epsilon_v$

En posant $n_\epsilon = \max(n_u, n_v),$ on a, d'après les calculs précédents:
- $\forall n ≥ n_\epsilon, |u_nv_n - l_ul_v|≤\epsilon$


Si $u_n≠0, \lim{n\to+\infty}\frac{1}{u_n}=\frac{1}{\lim{n\to+\infty}u_n}$


# II - Limites et encadrement

## Théorème - Suites monotones

### Numéro 1

Si $(u_n)_{n\in\N}$ est $\left| \begin{matrix}\nearrow \\ \searrow \end{matrix}\text{et}\right|\begin{matrix}\text{majorée} \\ \text{minorée}\end{matrix}$

Alors, elle est convergente et

$\lim{n\to+\infty}u_n = |\begin{matrix}\sup(\{u_n|n\in\N\}) \\ \inf(\{v_n | n\in\N\})\end{matrix}$

### Numéro 2

Si $(u_n)_{n\in\N}$ est $\left| \begin{matrix}\nearrow \\ \searrow \end{matrix}\text{mais pas}\right|\begin{matrix}\text{majorée} \\ \text{minorée}\end{matrix}$

alors $\lim{n\to+\infty}u_n=|\begin{matrix}+\infty \\ -\infty\end{matrix}$

#### Preuve - Numéro 1

Soit $(u_n)_{n\in\N} \nearrow$
- Supposons $(u_n)_{n\in\N}$ majorée.
- L'ensemble $\{u_n|n\in\N\} (\sub \R)$ est majorée et non vide. 
Donc, (chapitre 1) admet un $\sup$, $P\in\R$
- Montrons $\lim{n\to\infty}u_n=l$
	- Soit $\epsilon>0,$ Mq il existe $n_\epsilon$ tel que:
	- $\forall n ≥ n_\epsilon, |u_n-l|≤\epsilon$
- càd, $|l-u_n|≤\epsilon$ (car $l≥u_n$)
Puisque $l=\sup(\{u_n|n\in \N\})$
- Il existe $n_\epsilon \in \N$ tel que $u_{n_\epsilon} >  l - \epsilon$
Or, $(u_n)_{n\in\N} \nearrow$ donc
- $\forall n ≥ n_\epsilon, u_n ≥ u_{n_{\epsilon}} > l-\epsilon$
On a bien montré que 
$\lim{n\to+\infty}u_n = l$
$\square$

#### Preuve - Numéro 2 

Supposons $(u_n)_{n\in\N}$ non majorée. 
- Mq $\lim{n\to+\infty}u_n = +\infty$

Soit $M\in \R$. $M$ ne majore pas $(u_n)_{n\in\N}$

Donc il existe $n_M \in \N$ tel que $u_{n_M}> M$

Or $(u_n)_{n\in \N} \nearrow$ donc
- $\forall n ≥ n_M, u_n ≥ u_{n_M} > M$
Donc $\lim{n\to+\infty}u_n = +\infty$

#### Remarque 
Si $(u_n)_{n\in\N}.$
- On considère $(-u_n)_{n\in\N}$ qui est $\nearrow$


## Théorème d'encadrement (gendarmes)

Soit $(u_n)_{n\in\N}, (v_n)_{n\in\N}, (w_n)_{n\in\N}$ tel que 
- $\exists n_0 \in \N$ tq $\forall n ≥ n_0, u_n ≤ v_n ≤ w_n$
- $\lim{n\to+\infty}u_n = \lim{n\to+\infty}w_n = l \in \R$

Alors $\lim{n\to+\infty}v_n = l$

__ Preuve__

![image](https://i.ibb.co/yBkbxWsx/275bf643d999.png)

Soit $\epsilon > 0$

Puisque $\lim{n\to+\infty} u_n = l,$ il existe $n_u$ tel que

- $\forall n ≥ n_u, u_n ≥ l-\epsilon$

Puisque $\lim{n\to+\infty}w_n = l$. Il existe $n_w$ tel que 

- $\forall n ≥ n_w, w_n ≤ l+\epsilon$

On pose $n_v = \max(n_v, n_w)$

Soit $n≥n_v,$ on a:
- $n ≥ n_u$ donc $u_n ≥ l-\epsilon$. 
    - Or, $v_n ≥ l-\epsilon$
    - Donc $v_n ≥ l-\epsilon$ $(1)$
- $n≥n_w$ donc $w_n≤l+\epsilon$. 
    - Or, $v_n ≤ w_n$
    - Donc $v_n ≤ l+\epsilon$ $(2)$
- $(1)+(2)$ donne $l+\epsilon ≤ v_n ≤ l+\epsilon$
    - c'est-à-dire $|v_n-l| ≤ \epsilon$

On a bien montré que 
- $\lim{n\to+\infty}v_n = l$

---

## Proposition

Soit $(u_n)_{n\in\N}$  et $(v_n)_{n\in\N}$

### Numéro 1
- S'il existe $n_0\in\N$ tel que $\forall n ≥ n_0, u_n ≤ v_n$
- et $\lim{n\to+\infty}u_n = |\begin{matrix}+\infty \\ - \infty\end{matrix}$
- Alors $\lim{n\to+\infty}v_n = |\begin{matrix}+\infty \\ - \infty\end{matrix}$

### Numéro 2

S'il existe $n_0 \in \N$ tel que $\forall n ≥ n_0 |\begin{matrix}u_n ≤ w_n \\ u_n ≥ v_n\end{matrix}$

et $\lim{n\to+\infty}u_n = l\in\R$ et $\lim{n\to+\infty}v_n = l_v$

Alors $l \bigg| \begin{matrix}≤ l_v\\ ≥\end{matrix}$

#### Preuve - Numéro 1

Supposons $\exists n_0, \forall n ≥ n_0, u_n ≤ v_n$

- $\lim{n\to+\infty}u_n = +\infty$

Soit $M\in\R$. Puisque $\lim{n\to+\infty}u_n = +\infty$

Il existe $n_u \in \N$ tel que:
- $\forall n ≥ n_u, u_n ≥ M$

Posons $n_v = \max(n_u, n_0)$. Soit $n≥n_v.$ On a:
- $v_n ≥ u_n$ car $n≥n_0$
- et $u_n ≥ M$ car $n≥M_u$

Donc $v_n ≥ M$. On a bien montré $\lim{n\to+\infty}v_n = +\infty$

- Si $\exists n_0, \forall n ≥ n_0, u_n ≥ v_n$
    - $\lim{n\to+\infty}u_n = -\infty$ 

On considère $(-u_n)_{n\in\N}$ et $(-v_n)_{n\in\N}$
 et on se reporte au cas précédent.

$\square$

#### Preuve - Numéro 2

Soit $(u_n)_{n\in\N}$ et $(v_n)_{n\in\N}$ tel que:
- $\exists n_0, \forall n ≥ n_0, u_n ≤ v_n$

et 
- $\lim{n\to+\infty}u_n = l_u$

et
- $\lim{n\to+\infty}v_n = l_v$

Par l'absurde, supposons:

- $l_u > l_v$

On note $l_u = l_v + \epsilon$ avec $\epsilon = l_u - lv > 0$

On a $\lim{n\to+\infty}u_n = l_u$ donc il existe $n_u \in \N$ tel que
- $\forall n ≥ n_u, |u_n - l_u| ≤ \epsilon'$

de même, il existe $n_v \in \N$ tel que:
- $\forall n ≥ n_v, |v_n - l_v| ≤ \epsilon'$

Soit $n_\epsilon = \max(n_u, n_v, N_0)$ et $n≥ n_\epsilon$

On a
- $u_n ≤ v_n$
- $|u_n - l_u| ≤ \epsilon'$
- $|v_n - l_v|≤\epsilon'$

On a 

$l_u - l_v = (l_u-u_n)+u_n -(l_v - v_n)-v_n$
$\\ \phantom{l_u - l_v }=(l_u-u_n)\color{red}(≤ \epsilon')\color{a}+(u_n-v_n) \color{red}(≤ 0)\color{g}-(l_v-v_n) \color{red}(≤ \epsilon')\color{g}$
$\\ \phantom{l_u - l_v }=l_u - l_v ≤ 2\epsilon'$
C'est-à-dire $\epsilon ≤ 2\epsilon'$
En prenant $\epsilon' = \frac{\epsilon}{4}$
On obtient $\epsilon ≤ \frac{\epsilon}{2}$ c'est-à-dire $\epsilon≤0$
Or $\epsilon > 0$ __Absurde__
$\square$

## Définition - *Adjacence*

$(u_n)_{n\in\N}$ et $(v_n)_{n\in\N}$ sont adjacentes si:
1. $(u_n)_{n\in\N} \nearrow$ et $(v_n)_{n\in\N}  \searrow$
2. $\lim{n\to+\infty}u_n - v_n = 0$

## Théorème

Deux suites adjacentes convergent vers la même limite.

### Preuve

Soit $(u_n)_{n\in\N} \nearrow$ et $(v_n)_{n\in\N}$ deux suites adjacentes.

- Mq $\forall n \in \N, u_n ≤ v_n$
- On a $(u_n - v_n)_{n\in\N} \nearrow$ et $\lim{n\to+\infty}u_n - v_n = 0$

Donc $0$ majore $(u_n - v_n)_{n\in\N}.$ (Théorème de convergence monotone)

Donc $\forall n \in \N, u_n - v_n ≤ 0, càd, u_n ≤ v_n$

- Montrons que $(u_n)_{n\in\N}$ converge. 

Soit $n\in\N$
- On a $u_n ≤ v_n$
- Or, $(v_n)_{n\in\N}\searrow$ donc $\forall n ≤ v_0$
- Donc $u_n ≤ v_0$
- Donc $(u_n)_{n\in\N}$ est $\nearrow +$ majorée
    - Donc converge
- De même, $(v_n)_{n\in\N}$ converge.

On a de plus:
- $\lim{n\to+\infty}u_n - \lim{n\to+\infty}v_n = 0$ (car $\lim{n\to+\infty}u_n - v_n)$
- Donc $\lim{n\to+\infty} u_n = \lim{n\to+\infty}$


$\square$

**Remarque** - Si $u_n < v_n$. On n'a pas nécessairement $\lim{n\to+\infty}u_n < \lim{n\to+\infty}{v_n}$

# III -  Suites extraites et théorème de Bolzano-Weierstrass

### Définition - Suite extraites

$(v_n)_{n\in\N}$ est extraite de $(u_n)_{n\in\N}$ si il existe

$\Phi:\N \to \N$ strictement croissante telle que $\forall n \in \N, v_n = u_{\Phi(n)}$

### Remarque

$\lim{n\to+\infty}\Phi(n)$

## Proposition

Si $\lim{n\to+\infty}u_n = l.$ Alors toute suite extraite de $(u_n)_{n\in\N}$ converge vers $l$.

### Remarque

Si $u_n = (-1)^n$

$\lim{n\to+\infty}u_{2n}=1$ et $\lim{n\to+\infty}u_{2n+1}=-1$

Donc $(-1)^n$ ne converge pas.

### Preuve

Soit $(v_n)_{n\in\N} = (u_{\Phi(n)})_{n\in\N}$ avec $\Phi$ strictement croissant. 

Soit $\epsilon > 0$
- On a $\lim{n\to+\infty}u_n = l$
- Donc il existe $n_\epsilon \in \N$ tel que:
    - $\forall n ≥ n_\epsilon, |u_n-l|≤\epsilon$ 
    - Puisque $\Phi:\N \to \N$ et $\Phi$ strictement croissant, on a:
        - $\forall n \in \N, \Phi(n)≥n$ 

Donc pour $n≥n_\epsilon, \Phi(n)≥n≥n_\epsilon$ donc $\left|\underset{v_n}{\underbrace{u_{\Phi(n)}}}-l\right| ≤ \epsilon$

$\square$

## Proposition

Si $\lim{n\to+\infty}u_{2n}=\lim{n\to+\infty}u_{2n+1}=l$

- Alors $\lim{n\to+\infty}u_n = l$

Plus généralement, si on a $(u_{\Phi_1(n)})_{n\in\N}, ..., (u_{\Phi_k(n)})_{n\in\N}$ qui convergent vers $l$ alors si:
- $\forall n \in \N, \exists k, m, \Phi_k(n) = n$
Alors $\lim{n\to+\infty}u_n = l$

__Preuve en exercice (ou sur Moodle)__

## Théorème de Bolzano-Weierstrass

De toute suite bornée, on peut extraire une suite convergente. 

__Preuve__

Soit $(u_n)_{n\in\N}$ une suite telle qu'il existe $M\in\R$
- tq $\forall n \in \N, -M ≤ u_n ≤ M$

Posons $a_0=-M$ et $b_0 = M$ et $\Phi(0)=0$

- Il y a une infinité de valeurs de $u_n$ dans $[a_0, b_0]$ donc 
- il doit y avoir un infinité entre $[a_0, \frac{a_0+b_0}{2}]$ *(cas 1)* et $[\frac{a_0+b_0}{2}]$ *(cas 2)*

Si on est dans le *cas 1*, on pose:
- $a_1 = \frac{a_0+b_0}{2}$
- $b_1 = b_0$
- $\Phi(1)=n_1$ avec $n_1>0$ et
- $u_{n_1}\in[a_1;b_1]$

Sinon, *cas 2*:
- $a_1 = a_0$
- $b_1 = \frac{a_0+b_0}{2}$

Par récurrence, on construit $(a_n)_{n\in\N}, (b_n)_{n\in\N}$ et:
- $\Phi:\N\to\N$ strictement croissante telle que:
    1. $(a_n)_{n\in\N}\nearrow$
    2. $(b_n)_{n\in\N}\searrow$
    3. $\forall n\in\N, b_n - a_n = \frac{b_{n-1}-a_{n-1}}{2}= \frac{2M}{2^n}$
    - En particulier, $\lim{n\to+\infty}b_n - a_n=0$
    1. $\forall n, a_n ≤ u_{\Phi(n)} ≤ b_n$

$(1)+(2)+(3)$ donne $(a_n)_{n\in\N}$ et $(b_n)_{n\in\N}$ adjacentes donc convergentes vers $l\in\R$.

D'après le Théorème des Gendarmes, $\lim{n\to+\infty}u_{\Phi(n)} = l$

$\square$

# IV - Suites de Cauchy

### Définition

Une suite de $(u_n)_{n\in\N}$ est dite de Cauchy si:
- $\forall \epsilon >0 , \exists n_\epsilon \in \N, \forall p,q \in \N,$
- $p,q ≥ n_\epsilon \Rightarrow |u_p-u_q|≤\epsilon$


### Théorème 

Une suite est de Cauchy __ssi__ elle est convergente.

__Preuve__

($\Leftarrow$) Soit $(u_n)_{n\in\N}$ tel que:
- $\lim{n\to+\infty}u_n=l\in\R$

Soit $\epsilon > 0,$ on cherche un $n_\epsilon \in \N$ tel que:
- $\forall p,q ≥ n_\epsilon, |u_p-u_q|≤\epsilon$

Soit $p,q\in\N, $on a 
- $|u_p-u_q| = |u_p-l+l-u_q|$
$\\\phantom{ |u_q+u_q|} ≤ |u_p-l|+|u_q-l|$

Puisque $\lim{n\to+\infty}u_n = l \in \R,$ il existe $n_\epsilon \in \N$ tel que:
- $\forall n ≥ n_\epsilon, |u_n-l|≤\frac{\epsilon}{2}$

Alors, pour $p,q ≥ n_\epsilon,$ on a bien:
- $|u_p-u_q|≤|u_p-l|+|u_q-l| ≤ \frac{\epsilon}{2}+\frac{\epsilon}{2}≤ \epsilon$

Donc $(u_n)_{n\in\N}$ est de Cauchy,

($\Rightarrow$) Soit $(u_n)_{n\in\N}$ une suite de Cauchy. Il existe $n_1$ tel $\forall p ≥ n_1, |u_p-u_{n_1}|≤1$

Donc pour $p≥n_1,$ on a $u_{n_1}≤u_p≤u_{n_1}+1$

Soit $M = \max(u_1,...,u_{n_1}, u_{n_1+1})$

Soit $n\in\N,$ on a:
- Soit $n\in\N,$ on a:
    - Soit $n≤n_1$ 

$u_n ≤ M$

Sinon, d'après $(*)$, $u_n ≤ M$

Donc $M$ majore la suite $(u_n)_{n\in\N}$ et de même, $(u_n)_{n\in\N}$

Donc $(u_n)_{n\in\N}$ est bornée.
Donc d'après #B_W, (Bolzano-Weierstrass)
- il existe $\Phi:\N\to\N$ strictement croissant et $P\in\R$
- tel que $\lim{n\to+\infty}u_{\Phi(n)} = l$

Donc il existe $n_1$ tq:
- $\forall n ≥ n_1, |u_{\Phi(n)}-l|≤\frac{\epsilon}{2}$

Or, puisque $(u_n)_{n\in\N}$ est de Cauchy, il existe $n_2$ tel que $\forall p,q ≥ n_2, |u_p-u_q|≤\frac{\epsilon}{2}$
On pose $n_\epsilon = \max(n_1, n_2)$
Soit $n ≥ n_\epsilon,$ on a:
- $\varphi(n) ≥ n ≥ n_\epsilon ≥ n_1$
donc $|u_n-u_{n_\epsilon}| ≤ \frac{\epsilon}{2}$
- $n_\epsilon ≥ n_2$
donc $|u_{n_\epsilon}-l|≤\frac{\epsilon}{2}$
Donc $|u_n-l|≤|u_n-u_{n_2}|+|u_{n_\epsilon}-l|$
Donc $\lim{n\to+\infty}u_n = l ≤ \epsilon$

$\square$

__Exemple__

Soit $(u_n)_{n\in\N}$ tel que:
- $\forall n \in \N, u_n = \frac{\sin(2)}{2}+\frac{\sin(4)}{2}+...+\frac{\sin(2n)}{2^n}$
Soit $p>q\in\N,$ on a:
$|u_p-u_q| = |\frac{1}{2^{q+1}}|+...+|\frac{1}{2^p}|$
$\phantom{|u_p-u_q|} ≤ \frac{1}{2^q}(\frac{1}{2}+...+\frac{1}{2^{p-q}})$
$\phantom{|u_p-u_q|} ≤ \frac{1}{2^q}$
Soit $\epsilon > 0,$ et $n_{\epsilon} = E(-\frac{\log(\epsilon)}{\log(2)})+1$
Soit $p>q≥n_\epsilon.$ On a:
- $|u_p-u_q| ≤ \frac{1}{2^q} ≤ \frac{1}{2^{n_\epsilon}} ≤\frac{1}{2^{-\frac{\log(\epsilon)}{\log(2)}}} ≤ \frac{1}{e^{\log(\epsilon)}} ≤ \epsilon$
Donc $(u_n)_{n\in\N}$ est de Cauchy donc convergente.

# V - Suites équivalentes

### Définition

$(u_n)_{n\in\N}$ et $(v_n)_{n\in\N}$ sont équivalentes (noté $((u_n)_{n\in\N}\sim (v_n)_{n\in\N})$)

S'il existe $(w_n)_{n\in\N}$ tel que $\lim{n\to+\infty}w_n = 1$ et $\forall n, u_n = w_nv_n$

### Exemple

- $3n^2+\frac{1}{n}+(-1)^n\sim3n^2$
- $\frac{1}{n}+\frac{1}{n^3} \sim \frac{1}{n}$
- $4+\frac{1}{2^n} \sim 4$


## Proposition

Si $(u_n) \sim (v_n)$ et $(w_n) \sim (x_n)$.

Alors $(u_nw_n)\sim (v_nx_n)$


### Exemple

$\frac{n^5+3n+4}{6n^2+8+2} \sim \frac{n^3}{6}$

## Définition

$(u_n)_{n\in\N}$ est négligeable devant $(v_n)_{n\in\N}$ (noté $u_n = o(v_n)$) s'il existe $(w_n)_{n\in\N}$ tel que:
- $\lim{n\to+\infty}w_n = 0$ et $\forall n, u_n = w_n v_n$

### Exemple

- $n = o(n^3)$
- $37n = o(n^3)$
- $\frac{1}{n^4} = o(\frac{1}{4})$
- $37n^2+\frac{1}{n}+(-1)^n = o(n^3)$

## Propriétés

- $o(u_n) + o(v_n) = o(u_n+v_n)$
- $k\in\R, o(ku_n) = o(u_n)$
- $o(o(u_n)) = o(u_n)$
- $o(u_n) \cdot o(v_n) = o(u_nv_n)$

### Remarque

$o$ définit presque une relation d'ordre stricte.

## Définition

On note $u_n = o(v_n)$ s'il existe $(w_n)_{n\in\N}$

tel que $(w_n)_{n\in\N}$ est bornée et $u_n=w_nv_n$

Toutes les propriétés d'avant + 
- $u_n = o(u_n)$

__Exemple__

- $3n^2 = o(n^2)$
- $3n^2+6n = o(n^2+n)=o(n^2)$

