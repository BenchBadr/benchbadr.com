---
lang: fr
desc: Suites numériques et intégrales généralisées, comparaison de fonctions et de suites
date: 11/09/2025
---


$\newcommand{\sub}{\subset}\newcommand{\R}{\mathbb{R}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\lim}[1]{\underset{#1}{\text{lim}}}\newcommand{\N}{\mathbb{N}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\eq}[1]{\underset{#1}{\sim}}\newcommand{\eps}{\varepsilon}\newcommand{\td}[1]{\underset{#1}{\to}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}$
# Exercice 1

> Parmi les équivalents proposés, indiquez ceux qui sont corrects
> 1. $n^2 \eq{+\infty}n^2+n$ 
> 2. $\ln(n)\eq{+\infty}\ln(10^6n)$
> 3. $e^n \eq{+\infty}e^{n+10^{-6}}$
> 4. $\sin\left(\frac1n\right) \eq{+\infty}\frac1{n^2}$
> 5. $e^n \eq{+\infty}e^{2n}$
> 6. $\ln(n)\eq{+\infty}\ln(n+1)$
> 7. $n+\sin(n)\eq{+\infty}n$
> 8. $\sqrt{1+\frac1n}-1\eq{+\infty}\frac14$


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
> 11. $\{\frac{(-1)^n}{n+1}\}_{n≥0}$
> 12. $\{\frac{n\sin(n)}{n+1}\}_{n≥0}$


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

## Question 2

> Donner les relations de négligeabilité en l'infini entre ces suites.

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

# Exercice 5 - Composition d'équivalence

> 1. Soit $a > 0$ un nombre réel. Si $u_n \underset{+\infty}{\sim} v_n$ montrer que $(u_n)^a \underset{+\infty}{\sim} (v_n)^a$.
> 2. Si $\{u_n\}$ et $\{v_n\}$ sont deux suites vérifiant $u_n \underset{+\infty}{\sim} v_n$, a-t-on $e^{u_n} \underset{+\infty}{\sim} e^{v_n}$ ?
> 3. Si $\{u_n\}$ et $\{v_n\}$ sont deux suites vérifiant $u_n \underset{+\infty}{\sim} v_n$, et si de plus, une de ces deux suites est bornée, a-t-on $e^{u_n} \underset{+\infty}{\sim} e^{v_n}$ ?
> 4. Si $\{u_n\}$ et $\{v_n\}$ sont deux suites strictement positives, vérifiant $u_n \underset{+\infty}{\sim} v_n$, a-t-on $\ln(u_n) \underset{+\infty}{\sim} \ln(v_n)$ ?
> 5. Si $\{u_n\}$ et $\{v_n\}$ sont deux suites strictement positives, vérifiant $u_n \underset{+\infty}{\sim} v_n$, et si de plus, une de ces deux suites admet une limite $a \neq 1$, a-t-on $\ln(u_n) \underset{+\infty}{\sim} \ln(v_n)$ ?

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


# Exercice 8

> 1. Montrer que $\ln(1+x) \underset{0}{\sim} x$ et $x^2+x^3 \underset{0}{\sim} x^2$ et en déduire $\lim{x \to 0^+} \frac{\ln(1+x)+x^2}{x^2+x^3}$.
> 2. Montrer que $\sin(2x) \underset{0}{\sim} 2x$ et $\tan(3x) \underset{0}{\sim} 3x$ et en déduire $\lim{x \to 0} \frac{\sin(2x)}{\tan(3x)}$.

# Exercice 9

> Soit $P(x) = a_n x^n + ... + a_1 x + a_0$ un polynôme à coefficients réels, avec $a_n \neq 0$. Soit $p$ le plus petit indice tel que $a_p \neq 0$.
> 
> 1. Déterminer un équivalent simple de $P$ en $+\infty$.
> 2. Déterminer un équivalent simple de $P$ en 0.

# Exercice 10

> 1. Soit $f$ une fonction définie sur l'intervalle $]a, b[$, et soit $x_0 \in ]a, b[$. Montrer que $f$ est dérivable au point $x_0$ si et seulement si $f(x) \underset{x_0}{\sim} f(x_0) + f'(x_0)(x-x_0)$.
> 2. Donner un équivalent simple en $x_0 = 0$ de la fonction $f(x) = \sqrt{1+x}$.

