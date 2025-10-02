---
lang: fr
desc: Suites numériques et intégrales généralisées, comparaison de fonctions et de suites
date: 11/09/2025
---
> [!info]
> TD présenté par **Mme. Bigot**

$\newcommand{\sub}{\subset}\newcommand{\R}{\mathbb{R}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\N}{\mathbb{N}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\eq}[1]{\underset{#1}{\sim}}\newcommand{\eps}{\varepsilon}\newcommand{\td}[1]{\underset{#1}{\longrightarrow}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\neqv}[1]{\underset{#1}{\cancel \sim}}$
# Exercice 1

> Parmi les équivalents proposés, indiquez ceux qui sont corrects
> 1. $n^2 \eq{+\infty}n^2+n$ 
> 2. $\ln(n)\eq{+\infty}\ln(10^6n)$
> 3. $e^n \eq{+\infty}e^{n+10^{-6}}$
> 4. $\sin\left(\frac1n\right) \eq{+\infty}\frac1{n^2}$
>  5. $e^n \eq{+\infty}e^{2n}$
> 6. $\ln(n)\eq{+\infty}\ln(n+1)$
> 7. $n+\sin(n)\eq{+\infty}n$
> 8. $\sqrt{1+\frac1n}-1\eq{+\infty}\frac14$

## Question 1

>  $n^2 \eq{+\infty}n^2+n$ 

Pour tout $n ≥ 1,$
- $\frac{n^2}{n^2+n}=\frac1{n^2(1+\frac1n)}=\frac{1}{1+\frac1n} \td{n\to+\infty}1$

Donc $n^2 \eq{+\infty} n^2+n$
## Question 2

>  $\ln(n)\eq{+\infty}\ln(10^6n)$

Pour tout $n ≥ 1,$
- $\frac{\ln(n)}{\ln(10^6n)}=\frac{\ln(n)}{\ln(n) + \ln(10^6)} = \frac{1}{1+\frac{\ln(10^6)}{\ln(n)}} \td{n \to +\infty} 1$ 

 $\ln(n)\eq{+\infty}\ln(10^6n)$
## Question 3

 > $e^n \eq{+\infty}e^{n+10^{-6}}$

$\frac{e^n}{e^{n+10^-6}}=\frac{1}{e^{10^{-6}}} \td{n \to + \infty} e^{10^{6}} ≠ 1$  

## Question 4

> $\sin\left(\frac1n\right) \eq{+\infty}\frac1{n^2}$

Pour tout $n ≥ 1$,
- $\frac{\sin\left(\frac1n\right)}{\frac1{n^2}}=\frac{\sin\left(\frac1n\right)}{\frac1n \cdot \frac1n}=\frac{\sin\left(\frac1n\right) - \sin(0)}{\frac1n - 0} \times \frac1{\frac1n}$ 
Or, $\sin$ est dérivable en $0$ donc:
- $\frac{\sin\left(\frac1n\right)-\sin(0)}{\frac1n - 0} \td{n\to +\infty}\sin'(0) = \cos(0) = 1$
et,
- $\frac1{\frac1n} = n \td{n\to+\infty} +\infty$
Donc,
- $\frac{\sin\left(\frac1n\right)}{\frac1{n^2}} \td{n \to +\infty} +\infty$ 
Finalement, $\sin\left(\frac1n\right) \neqv{+\infty} \frac1{n^2}$


## Question 5

>  $e^n \eq{+\infty}e^{2n}$

Pour tout $n \in \N$,
- $\frac{e^{2n}}{e^n} = \frac{(e^n)^2}{e^n}=e^n \td{n\to+\infty}+\infty$

Donc $e^n \neqv{+\infty} e^{2n}$


## Question 6

> $\ln(n)\eq{+\infty}\ln(n+1)$

Pour tout $n ≥ 1$,
- $\frac{\ln(n+1)}{\ln(n)} = \frac{\ln(n(1+\frac1n))}{\ln(n)} = \frac{\ln(n)+\ln(1+\frac1n)}{\ln(n)}= 1+\frac{\ln(1+\frac1n)}{\ln(n)} \td{n\to+\infty}1$
Donc $\ln(n) \eq{+\infty} \ln(n+1)$

## Question 7

> $n+\sin(n)\eq{+\infty}n$

$\frac{n+\sin(n)}{n}=1+\frac{\sin(n)}{n}$
- Or, $-1 ≤ \sin(n) ≤ 1$
- donc $\frac{-1}n ≤ \frac{\sin(n)}{n} ≤ \frac1n$
- Donc, par comparaison
	- $\lim{n\to +\infty}\frac{\sin(n)}n = 0$
- Finalement,
	- $\frac{n+\sin(n)}{n} \td{n\to+\infty} 1$, i.e $n + \sin(n) \eq{+\infty} n$ 

## Question 8

> $\sqrt{1+\frac1n}-1\eq{+\infty}\frac14$

$\sqrt{1+\frac1n}-1 = \frac{\left(\sqrt{1+\frac1n}\right)\left(\sqrt{1+\frac1n}+1\right)}{\sqrt{1+\frac1n}+1}$ 
$\phantom{\sqrt{1+\frac1n}-1} = \frac{\frac1n}{\sqrt{1+\frac1n}+1}\td{n\to+\infty}0$
Donc,
$\sqrt{1+\frac1n}-1 \neqv{+\infty} \frac14$



# Exercice 2

> Déterminer les limites ci-dessous (en donnant si possible un équivalent simple de celles-ci).
> 1. $\{\frac{n^2+1+e^{3n}}{n+2n^2+e^n}\}_{n≥0}$
> 2. $\{\frac{n^3+1+(\ln(n))^4}{1+n+n^2+n^3+(\ln(n))^5}\}_{n≥1}$
> 3. $\{\frac{2^{n+1}+3^{n+1}}{2^n+3^n}\}_{n≥0}$
> 4. $\{(2^n+3^n)^{\frac1n}\}_{n≥1}$
> 5. $\{\sqrt{n+1}+\sqrt{n}\}_{n≥0}$ 
> 6. $\{\sqrt{n+1}-\sqrt{n}\}_{n≥0}$
> 7. $\{\frac{n!}{n^n}\}_{n≥1}$
> 8. $\{n\sin\left(\frac1n\right)\}_{n≥1}$
> 9. $\{\frac{n\sin(n)}{n^2+1}\}_{n≥0}$
> 10. $\{\frac{\ln(n)}{2+\sin(n)}\}_{n≥1}$
> 11. $\{\frac{(-1)^nn}{n+1}\}_{n≥0}$
> 12. $\{\frac{n\sin(n)}{n+1}\}_{n≥0}$

## Question 1

> $\{\frac{n^2+1+e^{3n}}{n+2n^2+e^n}\}_{n≥0}$

$a_n = \frac{n^2+1+e^{3n}}{n+2n^2+e^n}=\frac{e^3n}{e^n} \cdot \frac{n^2e^{-3n}+e^{-3n}+1}{ne^{-n}+2n^2e^{-n}+1}$
$\phantom{a_n}= e^{2n} \cdot \frac{n^2e^{-3n}+e^{-3n}+1}{ne^{-n}+2n^2e^{-n}+1}$

Or, par croissance comparées,
- $n^2e^{-3n}+e^{-3n}+1 \td{n\to+\infty}1$
- $ne^{-n}+2n^2e^{-n}+1\td{n\to+\infty}1$

Donc, 
- $\lim{n\to+\infty}a_n = +\infty$
- et, $a_n \td{+\infty} e^{2n}$
## Question 2

> $\{\frac{n^3+1+(\ln(n))^4}{1+n+n^2+n^3+(\ln(n))^5}\}_{n≥1}$

Soit $n ≥ 1$,
- $b_n = \frac{n^3+1+(\ln(n))^4}{1+n+n^2+n^3+(\ln(n))^5}$
- $\phantom{b_n} = \frac{\cancel n^3}{\cancel n^3} \cdot \frac{1+\frac1{n^3}+\frac{\ln(n)^4}{n^3}}{\frac1{n^3}+\frac1{n^2}+\frac1n+1+\frac{\ln(n)^5}{n^3}}$
Par croissance comparées,
- $1+\frac1{n^3}+\frac{\ln(n)^4}{n^3} \td{n\to+\infty} 1$
et,
- $\frac1{n^3}+\frac1{n^2}+\frac1n+1+\frac{\ln(n)^5}{n^3} \td{n\to +\infty}1$
Donc,
- $\lim{n\to+\infty}b_n = 1$
- et $b_n \eq{+\infty}1$
## Question 3

> $\{\frac{2^{n+1}+3^{n+1}}{2^n+3^n}\}_{n≥0}$

$c_n = \frac{2^{n+1}+3^{n+1}}{2^n+3^n} = \frac{3^{n+1}\left(\left(\frac23\right)^{n+1}+1\right)}{3^n\left(\left(\frac23\right)^n + 1\right)} = 3\frac{1+\left(\frac23\right)^{n+1}}{1+\left(\frac23\right)^n}$

Or, $0 < \frac23 < 1$ donc:
- $\lim{n\to+\infty}1+\left(\frac23\right)^n = 1 + 0 = 1$
- et, $\lim{n\to+\infty}1+\left(\frac23\right)^{n+1} = 1 + 0 = 1$

Ainsi,
- $\lim{n\to +\infty}c_n = 3$
- et $c_n \eq{+\infty} 3$
## Question 4

> $\{(2^n+3^n)^{\frac1n}\}_{n≥1}$

$d_n = (2^n + 3^n)^{1/n} = \left(3^n\left(\frac23\right)^n+1\right)^{1/n}$
- $= 3\left(\left(\frac23\right)^n + 1\right)^{1/n}$
- $= 3e^{\frac1n\ln\left(\left(\frac23\right)^n + 1\right)}$

Or, 
- $0 < \frac23 < 1$ donc $\left(\frac23\right)^n + 1 \td{n \to +\infty} 1$
- $\ln$ est continue en $1$ donc $\ln\left(1+\left(\frac23\right)^n\right) \td{n\to+\infty}\ln(1)$
Et,
- $\exp$ est continue en $0$ et $\frac1n\ln\left(\left(\frac23\right)^n + 1\right)\td{n\to+\infty}0$
Donc,
- $e^{\frac1n\ln\left(\left(\frac23\right)^n + 1\right)}\td{n\to+\infty}e^0 = 1$
Finalement,
- $\lim{n\to+\infty}d_n = 3$
- et, $d_n \eq{+\infty} 3$

## Question 5

> $\{\sqrt{n+1}+\sqrt{n}\}_{n≥0}$ 


$e_n = \sqrt{n+1}+\sqrt{n}$
$\phantom{e_n} = \sqrt{n\left(1+\frac1n\right)}$ 
$\phantom{e_n} = \sqrt{n}\left(\sqrt{1+\frac1n}+1\right)$
Or,
- $\sqrt{1+\frac1n}+1 \td{n\to+\infty}2$
Donc,
- $\lim{n\to+\infty}e_n = +\infty$
- $e_n \eq{+\infty} 2 \sqrt{n}$


## Question 6

> $\{\sqrt{n+1}-\sqrt{n}\}_{n≥0}$


$f_n = \sqrt{n+1}-\sqrt{n}$
$\phantom{f_n} = \frac{(\sqrt{n+1} - \sqrt{n})(\sqrt{n+1} - \sqrt{n})}{\sqrt{n+1} - \sqrt{n}}$
$\phantom{f_n} = \frac{(n+1)-n}{\sqrt{n+1}+\sqrt{n}}$
$\phantom{f_n} = \frac1{\sqrt{n}\left(\sqrt{1+\frac1n}+1\right)}$ et $\sqrt{1+\frac1n}+1 \td{n\to+\infty}2$
Donc,
- $\lim{n\to+\infty}f_n = 0$ et $f_n \eq{+\infty}\frac1{2\sqrt{n}}$
## Question 7

> $\{\frac{n!}{n^n}\}_{n≥1}$

> [!tips]
> À traiter plus tard car nécessite la formule de Stirling.


## Question 8

> $\{n\sin\left(\frac1n\right)\}_{n≥1}$

$h_n = n\sin\left(\frac1n\right)$
$\phantom{h_n} = \frac1{\frac1n}\sin\left(\frac1n\right)$
$\phantom{h_n} = \frac{\sin\left(\frac1n\right) - \sin(0)}{\frac1n - 0} \td{n \to +\infty} \sin'(0) = \cos(0) = 1$

> [!check]
> Par dérivabilité de $\sin$ en 0.

Alors,
- $\lim{n\to + \infty}h_n = 1$ et $h_n \eq{+\infty} 1$.

## Question 9

> $\{\frac{n\sin(n)}{n^2+1}\}_{n≥0}$

$i_n = \frac{n\sin(n)}{n^2+1}$
$\phantom{i_n} = \frac{\sin(n)}{n(1+1/n)}$
Or,
- $1+\frac1n \td{n\to+\infty}1$
On obtient,
- $i_n \eq{+\infty}\frac{\sin(n)}{n}$
Et, par le **théorème de comparaison**, puisque,
- $-\frac1n≤ \frac{\sin(n)}{n} ≤ \frac1n, \lim{n\to+\infty}\frac{\sin(n)}{n} = 0$
Donc,
- $\lim{n\to+\infty}i_n = 0$

## Question 10

> $\{\frac{\ln(n)}{2+\sin(n)}\}_{n≥1}$

$j_n = \frac{\ln(n)}{2+\sin(n)}$
$\phantom{j_n}= \frac{\ln(n)}{\ln(n)\left(\frac2{\ln(n)}+\frac{\sin(n)}{\ln(n)}\right)}$
$\phantom{j_n} = \frac1{\frac{2}{\ln(n)} + \frac{\sin(n)}{\ln(n)}}$

On a par ailleurs:
- $-1 ≤ \sin(n) ≤ 1$
$\iff 1 ≤ 2 + \sin(n) ≤ 3$
$\iff 1 ≤ 2 + \sin(n) ≤ 3$
$\iff \frac13 ≤ \frac1{2+\sin(n)} ≤ 1$

- $\iff \frac{\ln(n)}3 ≤ \frac{\ln(n)}{2+\sin(n)}≤\ln(n)$
Et,
- $\lim{n\to+\infty}\frac{\ln(n)}3 = +\infty$

Donc, par comparaison,
- $\lim{n\to +\infty}j_n = +\infty$

## Question 11

> $\left\{\frac{(-1)^nn}{n+1}\right\}_{n≥0}$

$k_n = \frac{(-1)^nn}{n+1} = \frac{(-1)^n}{1+1/n}$
Or,
- $\lim{n\to+\infty}1+\frac1n= 1$
Donc,
- $k_n \eq{+\infty} (-1)^n$ et $(k_n)_n$ n'admet pas de limite.
- $k_{2n} \td{n\to+\infty}1$ et $k_{2n+1}\td{n\to+\infty}1$



# Exercice 3

## Question 1


> Donner un équivalent simple pour chacune des suites :
> 
> 1. $\left\{\frac{2n^2+1}{n^3-n^2+3}\right\}_{n\ge 1}$, 
> 2. $\left\{n \sin\left(\frac{1}{n^3}\right)\right\}_{n\ge 1}$, 
> 3. $\left\{\ln(n+1)-\ln(n)\right\}_{n\ge 1}$,
> 4. $\left\{\frac{n\ln(n)}{n^2+1}\right\}_{n\ge 1}$,
> 5. $\left\{\exp\left(\frac{-n^2+n}{n+1}\right)\right\}_{n\ge 0}$,
> 6. $\left\{n^3e^{-n}\right\}_{n\ge 1}$,
> 7. $\left\{\frac{1}{n^2+1}\right\}_{n\ge 0}$,
> 8. $\left\{\frac{n^2}{2^n}\right\}_{n\ge 1}$,
> 9. $\left\{\frac{\ln(n)}{n^3}\right\}_{n\ge 1}$,
> 10. $\left\{\frac{1}{n\ln^2(n)}\right\}_{n\ge 2}$.

### Question 1.1

> $\left\{\frac{2n^2+1}{n^3-n^2+3}\right\}_{n\ge 1}$


$a_n = \frac{2n^2+1}{n^3-n^2+3}$ 
Or,
- $2n^2+1 \eq{+\infty}2n^2$
- $n^3 - n^2 + 3 \eq{+\infty} n^3$
Donc,
- $a_n \eq{+\infty}\frac{2n^2}{n^3} = \frac2n$

### Question 1.2

> $\left\{n \sin\left(\frac{1}{n^3}\right)\right\}_{n\ge 1}$, 

$b_n = \sin\left(\frac1{n^3}\right)$
$\phantom{b_n}=n \times \frac1{n^3}\frac{\sin\left(\frac1{n^3}\right)}{\frac1{n^3}}$
$\phantom{b_n} = \frac1{n^2}\ub{\frac{\sin\left(\frac1{n^3}\right)-\sin(0)}{\frac1{n^3}- 0}}{\td{n\to+\infty}\sin'(0)=1}$ 
Donc,
- $b_n \eq{+\infty} \frac1{n^2}$

### Question 1.3

> $\left\{\ln(n+1)-\ln(n)\right\}_{n\ge 1}$,

$c_n = \ln(n+1)-\ln(n)$
$\phantom{c_n} = \ln\left(\frac{n+1}{n}\right)$
$\phantom{c_n} = \frac{\ln(1+\frac1n)-\ln(1+0)}{\frac1n - 0}\times\frac1n$ 


> [!tips]
> On utilise le TAF

Or, $x \ov{\mapsto}{f} \ln(1+x)$ est dérivable en $0$ et $f'(x) = \frac1{1+x}$ donc $f'(0) = \frac1{1+0}=1$
Donc, 
- $\frac{\ln\left(1+\frac1n\right) - \ln(1+0)}{\frac1n - 0}{\frac1n - 0} \td{n\to+\infty} 1$

Ainsi, 
- $c_n \eq{+\infty}\frac1n$


### Question 1.4

> $\left\{\frac{n\ln(n)}{n^2+1}\right\}_{n\ge 1}$,

- $d_n = \frac{n\ln(n)}{n^2+1} \eq{+\infty} \frac{n\ln(n)}{n^2} = \frac{\ln(n)}n$ 
### Question 1.5

> $\left\{\exp\left(\frac{-n^2+n}{n+1}\right)\right\}_{n\ge 0}$,

$e_n = \exp\left(\frac{-n^2+1}{n+1}\right) = \exp\left(-n\frac{1-1/n}{1+\frac1n}\right)$
On a:
- $\frac{e^n}{\exp(-n)} =\exp(-n\frac{1 - 1/n}{1 + 1/n} - (-n))$
- $\phantom{\frac{e^n}{\exp(-n)}} = \exp\left(-n\left(\frac{1 - 1/n}{1+1/n}\right)\right)$
-  $\phantom{\frac{e^n}{\exp(-n)}} = \exp\left(-n\frac{-2/n}{1+1/n}\right)$

$\td{n\to+\infty}e^2$ par continuité de $\exp$ en $2$.

Ainsi:
- $\lim{n\to+\infty}\frac{e_n}{\exp(-n)}=\exp(2)$ donc $\lim{n\to+\infty}\frac{e_n}{\exp(2)\exp(-n)}=1$

Alors, $e_n \eq{+\infty} \exp(2)\exp(-n) = e^{2-n}$


### Question 1.6

> $\left\{\frac{1}{n^2+1}\right\}_{n\ge 0}$,

$g_n = \frac1{n^2+1}\eq{+\infty}\frac1{n^2}$

### Question 1.7

>  $\left\{n^3e^{-n}\right\}_{n\ge 1}$,

$h_n = \frac{n^2}{2^n}=n^22^{-n}$

### Question 1.8

> $\left\{\frac{n^2}{2^n}\right\}_{n\ge 1}$,

$i_n = \frac{\ln(n)}{n^3}$

### Question 1.9

>  $\left\{\frac{\ln(n)}{n^3}\right\}_{n\ge 1}$,


### Question 1.10

> $\left\{\frac{1}{n\ln^2(n)}\right\}_{n\ge 2}$.



## Question 2

> Donner les relations de négligeabilité en l'infini entre ces suites.

est un petit $o$ de:

- $a_n \sim \frac2n, f_n = n^3 e^{-n}$
- $b_n \sim \frac1{n^2}, g_n \sim \frac1{n^2}$
- $c_n \sim \frac1n, h_n = n^22^{-n}$
- $d_n \sim \frac{\ln(n)}n, i_n = \frac{\ln(n)}n^3$
- $e_n \sim e^2e^{-n}, d_n= \frac1{n\ln^2n}$

|       | $a_n$ | $b_n$ | $c_n$ | $d_n$ | $e_n$ | $f_n$ | $g_n$ | $h_n$ | $i_n$ | $j_n$ |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| $a_n$ | x     |       |       | x     |       |       |       |       |       |       |
| $b_n$ | x     | x     | x     | x     |       |       |       |       |       |       |
| $c_n$ |       |       | x     | x     |       |       |       |       |       | x     |
| $d_n$ |       |       |       | x     |       |       |       |       |       |       |
| $e_n$ | x     | x     | x     | x     | x     | x     | x     | x     | x     | x     |
| $f_n$ | x     | x     | x     | x     |       | x     | x     | x     | x     | x     |
| $g_n$ | x     |       | x     | x     |       |       | x     |       |       |       |
| $h_n$ | x     |       | x     | x     |       |       | x     | x     | x     | x     |
| $i_n$ | x     | x     | x     | x     |       |       | x     |       | x     |       |
| $j_n$ | x     |       | x     | x     |       |       |       |       |       | x     |
# Exercice 4 - Vrai ou Faux?

> Pour chacune des propositions suivantes, dites si elle est vraie ou fausse en justifiant votre réponse.
> 
> 1. Si $\{u_n\}_{n\geq 0}$ a une limite $l$, finie ou infinie, et si $u_n \underset{+\infty}{\sim} v_n$, alors $\{v_n\}_{n\geq 0}$ admet la même limite.
> 2. Si $\{u_n\}$ et $\{v_n\}$ convergent et ont même limite, alors $u_n \underset{+\infty}{\sim} v_n$.
> 3. Si $u_n \underset{+\infty}{\sim} v_n$, alors $\lim{n \to +\infty} u_n - v_n = 0$.
> 4. Si $\lim{n \to +\infty} u_n - v_n = 0$, alors $u_n \underset{+\infty}{\sim} v_n$.
> 5. Si $\{u_n\}$ converge, alors $u_n \underset{+\infty}{\sim} u_{n+1}$.
> 6. Si $u_n \underset{+\infty}{\sim} v_n$ et si $\{u_n\}$ est strictement positive à partir d'un certain rang, alors $\{v_n\}$ l'est également.
> 7. Si $u_n \underset{+\infty}{\sim} v_n$ et si $\{u_n\}$ est croissante, alors $\{v_n\}$ est croissante à partir d'un certain rang.
> 8. Si $u_n = o(v_n)$ et si $\{v_n\}$ tend vers l'infini, alors $\{u_n\}$ tend vers 0.
> 9. $u_n = o(1)$ si et seulement si $\{u_n\}$ converge vers 0.


## Question 1

> Si $\{u_n\}_{n\geq 0}$ a une limite $l$, finie ou infinie, et si $u_n \underset{+\infty}{\sim} v_n$, alors $\{v_n\}_{n\geq 0}$ admet la même limite.

**VRAI**. Justification possible:
- $u_{n}\eq{+\infty}v_n \iff \exists a_n \to 1, v_n = a_n u_n$.
Comme $1>0$, par multiplication de limites,
- $\lim{n\to+\infty}v_n = \lim{n\to+\infty}u_n$.

## Question 2

> Si $\{u_n\}$ et $\{v_n\}$ convergent et ont même limite, alors $u_n \underset{+\infty}{\sim} v_n$.

**Faux**.
Contre-exemple, $u_n = \frac1n$, $v_n = \frac2n$
- On a bien $\lim{n\to+\infty}u_n = \lim{n\to+\infty}v_n$
Mais, $\frac{u_n}{v_n}= \frac{1/n}{2/n}=\frac12 \td{n \to +\infty}\frac12 ≠ 1$

Donc $u_n \neqv{+\infty} v_n$

## Question 3

> Si $u_n \underset{+\infty}{\sim} v_n$, alors $\lim{n \to +\infty} u_n - v_n = 0$.

**Faux**,
Contre-exemple: $u_n = n+1$ et $v_n = n$
- On a : $u_n \eq{+\infty} v_n$
- Mais $u_n - v_n = 1 \td{n\to+\infty} 1 ≠ 0$

## Question 4

> Si $\lim{n \to +\infty} u_n - v_n = 0$, alors $u_n \underset{+\infty}{\sim} v_n$.

**Faux**,
Contre-exemple, $u_n = \frac1n$ et $v_n = -\frac1n$
On a:
- $u_n - v_n = \frac2n \td{n\to+\infty}0$
- mais
	- $\frac{u_n}{v_n}=-1 \td{n\to+\infty} 1$ donc $u_n \neqv{+\infty}v_n$

## Question 5

> Si $\{u_n\}$ converge, alors $u_n \underset{+\infty}{\sim} u_{n+1}$.

**Faux**,
Contre-exemple: $u_n = \frac{(-1)^n}{n}$
- On a:
	- $u_n \td{n\to+\infty}0$
- Et,
	- $\frac{u_{n+1}}{u_n} = \frac{(-1)^{n+1}}{n+1} \times \frac{n}{(-1)^n} = -1 \times \frac{n}{n+1}=-1\left(1- \frac{1}{n+1}\right)$
	- Donc, $\frac{u_{n+1}}{u_n} \td{n\to+\infty} -1 ≠ 1$

## Question 6

> Si $u_n \underset{+\infty}{\sim} v_n$ et si $\{u_n\}$ est strictement positive à partir d'un certain rang, alors $\{v_n\}$ l'est également.

**Vrai**,
Justification possible: $u_n \eq{+\infty} v_n \iff \exists a_n \to 1, v_n = a_n u_n$ 
Or, 
- Il existe $n_0$ tel que: $\forall n ≥ n_0, u_n >0$
- $a_n \to 1$ donc il existe $n_1$ tel que $\forall n ≥ n_1, |a_n - 1| < 1 \iff 0 < a_n < 2$
Donc, pour $n ≥ \max(n_0, n_1)$,
- $v_n = \ub{a_n}{>0}\ub{u_n}{> 0} > 0$ 

## Question 7

> Si $u_n \underset{+\infty}{\sim} v_n$ et si $\{u_n\}$ est croissante, alors $\{v_n\}$ est croissante à partir d'un certain rang.

**Faux**,
Contre-exemple: $u_n = 1-\frac1n$ et $v_n = 1+\frac1n$
On a $u_n \eq{+\infty}$ et $v_n \eq{+\infty}1$ donc $u_n \eq{+\infty}v_n$
- $(u_n)_{n\in\N}$ est croissante et $(v_n)_{n\in\N}$ est décroissante

## Question 8

> Si $u_n = o(v_n)$ et si $\{v_n\}$ tend vers l'infini, alors $\{u_n\}$ tend vers 0.

**Faux**,
Contre-exemple : $u_n = \ln(n)$ et $v_n = e^n$
On a:
- $\frac{u_n}{v_n} = \frac{\ln(n)}{e^n} \td{n\to+\infty} 0$ par croissances comparées.

## Question 9

>  $u_n = o(1)$ si et seulement si $\{u_n\}$ converge vers 0.

**Vrai**,
$u_n = o(1) \iff \frac{u_n}1 \td{n\to+\infty}0$
$\iff u_n \td{n\to+\infty}0$
# Exercice 5 - Composition d'équivalence

> 1. Soit $a > 0$ un nombre réel. Si $u_n \underset{+\infty}{\sim} v_n$ montrer que $(u_n)^a \underset{+\infty}{\sim} (v_n)^a$.
> 2. Si $\{u_n\}$ et $\{v_n\}$ sont deux suites vérifiant $u_n \underset{+\infty}{\sim} v_n$, a-t-on $e^{u_n} \underset{+\infty}{\sim} e^{v_n}$ ?
> 3. Si $\{u_n\}$ et $\{v_n\}$ sont deux suites vérifiant $u_n \underset{+\infty}{\sim} v_n$, et si de plus, une de ces deux suites est bornée, a-t-on $e^{u_n} \underset{+\infty}{\sim} e^{v_n}$ ?
> 4. Si $\{u_n\}$ et $\{v_n\}$ sont deux suites strictement positives, vérifiant $u_n \underset{+\infty}{\sim} v_n$, a-t-on $\ln(u_n) \underset{+\infty}{\sim} \ln(v_n)$ ?
> 5. Si $\{u_n\}$ et $\{v_n\}$ sont deux suites strictement positives, vérifiant $u_n \underset{+\infty}{\sim} v_n$, et si de plus, une de ces deux suites admet une limite $a \neq 1$, a-t-on $\ln(u_n) \underset{+\infty}{\sim} \ln(v_n)$ ?

## Question 1

> Soit $a > 0$ un nombre réel. Si $u_n \underset{+\infty}{\sim} v_n$ montrer que $(u_n)^a \underset{+\infty}{\sim} (v_n)^a$.

Soit $a>0,$

> [!info]
> Remarque, $(u_n)_{n\in\N}$ et $(v_n)_{n\in\N}$ supposés $>0$ sinon $u_n^a$ et $v_n^a$ pour $a \notin \N$ n'a pas de sens.

On écrit:
- $\frac{u_n^a}{v_n^a}=\left(\frac{u_n}{v_n}\right)^\alpha=e^{a\ln(u_n/v_n)}$
Or,
- $\frac{u_n}{v_n}\to 1$ donc par continuité de $\ln$, $a\ln\left(\frac{u_n}{v_n}\right) \td{n\to+\infty} a\ln 1 = 0$.
Et, par continuité de $\exp$
- $e^{a\ln(u_n/v_n)}\td{n\to+\infty}e^0 = 1$

Donc,
- $u_n^a \td{+\infty} v_n^a$

## Question 2

> Si $\{u_n\}$ et $\{v_n\}$ sont deux suites vérifiant $u_n \underset{+\infty}{\sim} v_n$, a-t-on $e^{u_n} \underset{+\infty}{\sim} e^{v_n}$ ?

**Faux**. Contre-exemple $u_n = n$ et $v_n = n+1$.
On a:
- $u_n \td{+\infty} v_n$
- $\frac{e^{u_n}}{e^{v_n}} = \frac{e^n}{e^{n+1}}=e^{-1} \td{+\infty} e^{-1} ≠ 1$, donc $e^{u_n} \neqv{+\infty}e^{v_n}$.

## Question 3

>  Si $\{u_n\}$ et $\{v_n\}$ sont deux suites vérifiant $u_n \underset{+\infty}{\sim} v_n$, et si de plus, une de ces deux suites est bornée, a-t-on $e^{u_n} \underset{+\infty}{\sim} e^{v_n}$ ?

**Vrai**
Justification possible,
- Si $u_n \td{+\infty}v_n$ alors il existe $a_n \td{n \to +\infty}1$ tel que $v_n = a_nu_n$
On écrit:
- $\frac{e^{u_n}}{e^{v_n}}=e^{u_n - v_n} = e^{u_n(1- a_n)}$

Et on note une borne de $(u_n)_{n\in\N} : \forall n, |u_n| ≤ m$.
On a: (puisque $a_n \to 1$)
- $|u_n(1-a_n)| = |u_n| \times |1 - a_n| ≤ m \times |1 - a_n| \td{n \to +\infty}0$

Donc, $u_n(1- a_n) \td{n\to+\infty}$ et par continuité de $\exp$ en $0$, en $e^{u_n(1-a_n)} \to e^0 = 1$ i.e $e^{u_n} \eq{+\infty} e^{v_n}$.
## Question 4




# Exercice 6

> Déterminer les relations de négligeabilité en $+\infty$ entre les fonctions suivantes :
> 
> 1. $f_1(x) = x^2$
> 2. $f_2(x) = x$
> 3. $f_3(x) = \frac{e^x}{\sqrt{x}}$
> 4. $f_4(x) = 1$
> 5. $f_5(x) = \ln(x)$
> 6. $f_6(x) = e^{-x}$
> 7. $f_7(x) = e^x$
> 8. $f_8(x) = \frac{1}{x}$
> 9. $f_9(x) = x^2e^{x/2}$

| $\nearrow$ est o de $\swarrow$ | $f_1(x)$ | $f_2(x)$ | $f_3(x)$ | $f_4(x)$ | $f_5(x)$ | $f_6(x)$ | $f_7(x)$ | $f_8(x)$ | $f_9(x)$ |
| ------------------------------ | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| $f_1(x)$                       | x        |          | x        |          |          |          | x        |          | x        |
| $f_2(x)$                       | x        | x        | x        |          |          |          | x        |          | x        |
| $f_3(x)$                       |          |          | x        |          |          |          | x        |          |          |
| $f_4(x)$                       | x        | x        | x        | x        | x        |          | x        |          | x        |
| $f_5(x)$                       | x        | x        | x        |          | x        |          | x        |          | x        |
| $f_6(x)$                       | x        | x        | x        | x        | x        | x        |          | x        | x        |
| $f_7(x)$                       |          |          |          |          |          |          | x        |          |          |
| $f_8(x)$                       | x        | x        | x        | x        | x        |          | x        | x        | x        |
| $f_9(x)$                       |          |          | x        |          |          |          | x        |          | x        |
# Exercice 7

> Déterminer des équivalents simples en $+\infty$ pour les fonctions suivantes :
> 
> 1. $f_1(x) = \frac{x^3+x^2+1}{x^4+1}$
> 2. $f_2(x) = \frac{e^x+e^{-x}}{2}$
> 3. $f_3(x) = \sin\left(\frac{1}{x}\right)$
> 4. $f_4(x) = \sqrt{x+1}-\sqrt{x}$
> 5. $f_5(x) = \cos(e^{-x})$
> 6. $f_6(x) = \sqrt{x^2+e^{2x}+1}$
> 7. $f_7(x) = \ln(x+1)-\ln(x)$
> 8. $f_8(x) = \ln(x^4+x^2+1)$
> 9. $f_9(x) = E(x)$

## Question 1

> $f_1(x) = \frac{x^3+x^2+1}{x^4+1}$

$\frac{x^3+x^2+1}{x^4+1} \eq{+\infty}\frac{x^3}{x^4}=\frac1x$

## Question 2

> $f_2(x) = \frac{e^x+e^{-x}}{2}$

$\frac{e^x + e^{-x}}2 \eq{+\infty} \frac{e^{x}}2$ 

## Question 3

> $f_3(x) = \sin\left(\frac{1}{x}\right)$

> [!check]
> On utilise le TAF

$f_3(x) = \frac{\sin\m{\frac1x} - \sin(0)}{\frac1x - 0}\times \frac1x \eq{+\infty} \sin'(0) \times \frac1x = \frac1x$  

## Question 4

> $f_4(x) = \sqrt{x+1}-\sqrt{x}$

$f_4(x) = \sqrt{x+1} - \sqrt{x} = \frac{(\sqrt{x+1} - \sqrt{x})(\sqrt{x+1} + \sqrt{x})}{\sqrt{x+1} + \sqrt{x}} = \frac{x+1-x}{\sqrt{x+1}+\sqrt{x}}$ 
Or $\sqrt{x+1} + \sqrt{x} = \sqrt{x}\ub{\left(\sqrt{1+\frac1x} + 1\right)}{\td{x\to +\infty} 2} \eq{+\infty} 2\sqrt{x}$.
Donc $f_4(x) \eq{+\infty} \frac1{2\sqrt{x}}$

## Question 5

> $f_5(x) = \cos(e^{-x})$

$f_5(x) = \cos(e^{-x})$
On a:
- On a $\lim{x\to +\infty}e^{-x}=0$
Donc, par continuité de $\cos$ en $0$,
- $\lim{x\to+\infty}\cos(e^{-x})=\cos(0) = 1$
Donc $f_5(x) \eq{+\infty} 1$

## Question 6

> $f_6(x) = \sqrt{x^2+e^{2x}+1}$

$f_6(x) = \sqrt{x^2+e^{2x}+1}$
$\phantom{f_6(x)} = \sqrt{e^{2x}(e^{-2x}x^2+1+e^{-2x})}$
$\phantom{f_6(x)} = \sqrt{e^x}\ub{\sqrt{e^{-2x}x^2+1+e^{-2x}}}{\td{+\infty} 1 (*)}$ 
- $(*)$ Par continuité et croissance comparée de $t \mapsto \sqrt{t}$ en $1$
donc,
- $f_6(x) \eq{+\infty}e^x$

## Question 7

> $f_7(x) = \ln(x+1)-\ln(x)$

$f_7(x) = \ln(x+1)-\ln(x)$
$\phantom{f_7(x)} = \ln\left(\frac{x+1}{x}\right)$
$\phantom{f_7(x)} = \frac{\ln(1+\frac1x) - \ln(1)}{(1+\frac1x) - 1} \times \frac1x$
Or,
- $\lim{t\to 1}\frac{\ln(t) - \ln(1)}{t-1} = \ln'(1) = \frac11 = 1$ 
Donc,
- $f_7(x) \eq{+\infty}\frac1x$

## Question 8

> $f_8(x) = \ln(x^4+x^2+1)$

$f_8(x) = \ln(x^4+x^2+ 1)$
$\phantom{f_8(x)} = \ln\left(x^4(1+x^{-2}+x^{-4})\right)$
$\phantom{f_8(x)} = \ln(x^4) + \ln(1+x^{-2}+x^{-4})$
Donc,
- $\frac{f_8(x)}{\ln(x^4)} = 1 + \frac{\ln(1+x^{-2}+x^{-4})}{\ln(x^4)} \td{x\to+\infty}1$
Ainsi,
- $f_8(x) \td{+\infty} \ln(x^4)=4\ln(x)$

## Question 9

> $f_9(x) = E(x)$

On a pour $x>0$,
- $x-1 ≤ f_9(x) ≤ x \Rightarrow \frac{x-1}{x} ≤ \frac{f_9(x)}{x} ≤ \frac{x}x$
- $\phantom{x-1 ≤ f_9(x) ≤ x \Rightarrow \frac{x-1}{x}} \Rightarrow 1 - \frac1x ≤ \frac{f_9(x)}x ≤ 1$
Or, 
- $\lim{x\to +\infty} 1 - \frac1x = \lim{x\to+\infty}1=1$
Donc, par comparaison,
- $\lim{x\to +\infty} \frac{f_9(x)}x = 1$ i.e $f_9(x) \eq{+\infty} x$

# Exercice 8

> 1. Montrer que $\ln(1+x) \underset{0}{\sim} x$ et $x^2+x^3 \underset{0}{\sim} x^2$ et en déduire $\lim{x \to 0^+} \frac{\ln(1+x)+x^2}{x^2+x^3}$.
> 2. Montrer que $\sin(2x) \underset{0}{\sim} 2x$ et $\tan(3x) \underset{0}{\sim} 3x$ et en déduire $\lim{x \to 0} \frac{\sin(2x)}{\tan(3x)}$.

## Question 1

> Montrer que $\ln(1+x) \underset{0}{\sim} x$ et $x^2+x^3 \underset{0}{\sim} x^2$ et en déduire $\lim{x \to 0^+} \frac{\ln(1+x)+x^2}{x^2+x^3}$.


Soit $x > -1, x ≠0$
- $\frac{\ln(1+x)+x^2}{x} = \frac{\ln(1+x)}{x} + x$
Or,
- $\frac{\ln(1+x)}{x}= \frac{\ln(1+x) - \ln(1+0)}{x-0}$
- $\td{x \to 0} \frac1{1+0} = 1$
- car $t \underset{f}\mapsto \ln(1+t)$ est dérivable en $0$ de dérivée $f'(t) = \frac1{1+t}$.
Donc,
- $\frac{\ln(1+x)+x^2}{x}\td{x\to 0}1$ i.e $\ln(1+x)+x^2 \eq{0} x$
De plus,
- $\frac{x^2 + x^3}{x^2} = 1 + x \td{x \to 0} 1$
Donc,
- $x^2 + x^3 \eq{0} x^2$
Par quotient d'équivalents,
- $\frac{\ln(1+x)+x^2}{x^2+x^3} \eq{0} \frac{x}{x^2} = \frac1x$

## Question 2

> Montrer que $\sin(2x) \underset{0}{\sim} 2x$ et $\tan(3x) \underset{0}{\sim} 3x$ et en déduire $\lim{x \to 0} \frac{\sin(2x)}{\tan(3x)}$.

**D'une part**
Soit $x ≠0$
- $\frac{\sin(2x)}{2x} = \frac{\sin(2x) -\sin(0)}{2x - 0}$
Or,
- $\frac{\sin(y)-0}{y - 0} \td{y \to 0} \sin'(0) = \cos(0) = 1$
Et,
- $2x \td{x\to 0} 0$
Donc,
- $\frac{\sin(2x)}{2x}\td{x\to 1}1$ i.e $\sin(2x) \eq{0} 2x$. 

**D'autre part**,
- $\frac{\tan(3x)}{3x} = \frac{\tan(3x) - \tan(0)}{3x - 0}$
Or,
- $3x \td{x \to 0}0$
et,
- $\frac{\tan(y) - \tan(0)}{y - 0} \td{y \to 0}\tan'(0) = 1 + \tan^2(0) = 1$
Donc,
- $\frac{\tan(3x)}{3x} \td{x\to 0} 1$ i.e $\tan(3x) \eq{0} 3x$



# Exercice 9

> Soit $P(x) = a_n x^n + ... + a_1 x + a_0$ un polynôme à coefficients réels, avec $a_n \neq 0$. Soit $p$ le plus petit indice tel que $a_p \neq 0$.
> 
> 1. Déterminer un équivalent simple de $P$ en $+\infty$.
> 2. Déterminer un équivalent simple de $P$ en 0.


## Question 1

> Déterminer un équivalent simple de $P$ en $+\infty$.

Pour $x>0$,
- $\frac{P(x)}{a_nx^n}=\frac{a_nx^n + a_{n-1}x^{n-1}+...+a_1x+a_0}{a_nx^n}$
- $= 1 + \frac{a_{n-1}}{a_n} \times \frac1x + \frac{a_{n-2}}{a_n} \times \frac1{x^2} + ... + \frac{a_1}{a_n} \times \frac1{x^{n-1}}+\frac{a_0}{a_n}\times\frac1{x^n}$
Donc,
- $P(x) \eq{+\infty} a_nx^n$

## Question 2

> Déterminer un équivalent simple de $P$ en 0.

Pour $x ≠ 0$,
- $\frac{P(x)}{a_px^p} = \frac{a_nx^n + a_{n-1}x^{n-1}+...+a_px^p+0}{a_px^p}$
- $= \frac{a_n}{a_p}x^{\ov{n-p}{>0}}{>0}+\frac{a_{n-1}}{a_p}x^{\ov{n-1-p}{>0}}+...+\frac{a_{p-1}}{a_p}x+1$
- $\td{x \to 0}1$
i.e $P(x) \eq{0} a_px^p$

# Exercice 10

> 1. Soit $f$ une fonction définie sur l'intervalle $]a, b[$, et soit $x_0 \in ]a, b[$. Montrer que $f$ est dérivable au point $x_0$ si et seulement si $f(x) \underset{x_0}{\sim} f(x_0) + f'(x_0)(x-x_0)$.
> 2. Donner un équivalent simple en $x_0 = 0$ de la fonction $f(x) = \sqrt{1+x}$.

