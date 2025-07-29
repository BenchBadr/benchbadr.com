$\newcommand{\R}{\mathbb{R}}\newcommand{\sub}{\subset}$
# Démo Alg-lin

> L'intersection de deux sous-espaces vectirels est un sous-espace vectoriel

D'une part,
- $0_E \in F$ et $0_E \in G$ car $F$ et $G$ sont deux sous-espaces vectoriels.
- Ainsi, $0_E \in F \cap G$

D'autre part,
- Soit $\lambda \in \R$ et $u,v \in F \cap G.$
- Comme $F$ est un sous-espace vectoriel et $u,v \in F,$ alors $\lambda u +v \in F$
- Comme $G$ est un sous-espace vectoriel et $u,v \in G$ alors $\lambda u+v \in G$

D'où,
- $\lambda u + \mu \in F \cap G$

Finalement, $F \cap G$ est bien un sous-espace vectoriel.

---

> La somme de deux sous-espaces vectoriels est un sous-espace vectoriel.

D'une part,
- $0_E = 0_E + 0_E$. 
- Or, puisque $F$ et $G$ 

D'autre part,
- Soit $\lambda \in \mathbb{K}$. Soit $u,v \in F + G$. Alors, il existe 
    - $u_F \in F$  et $u_G \in G$ tq $u = u_F + u_G$ 
    - et il existe  $v_F \in F$ et $v_G \in G$ tels que $v = v_F + v_G$
        - D'où $\lambda u + v = (\lambda u_F + u_G) + (\lambda v_F + v_G)$
- Puisque $F$ et $G$ sont des sous-espaces vectoriels:
- $\lambda u_F + v_F \in F$ et $\lambda u_G +  v_G \in G$

Ainsi, $\lambda u + v \in F +G$

Donc $F+G$ est un sous-espace vectoriel.

---

> Le sous-espace vectoriel engendré par une famille finie de vecteurs est un sous-espace vectoriel

Le vecteur nul $0_E$ peut s'écrire:
- $0_E = 0\cdot v_1 + ... + 0 \cdot v_n$
- Donc $0_E \in \text{Vect}(v_1, ..., v_n)$

Soit $\lambda \in \mathbb{K}$. Soit $u,v \in \text{Vect}(v_1, ..., v_n)$
- Alors il existe des scalaire $\alpha_1, ..., \alpha_n$ tels que:
    - $u = \alpha_1v_1 + ... + \alpha_n v_n$,
- et des scalaires $\beta_1, ..., \beta_n$ tels que
    - $v = \beta_1v_1 + ... + \beta_n v_n$
- D'où
    - $\lambda u+ v = (\lambda\alpha _1+\beta_1)v_1+....+(\lambda \alpha_n + \beta_n)$ 

Ainsi, $\lambda u + v \in \text{Vect}(v_1, ..., v_n)$

---

> Deux sous-espaces sont supplémentaires ssi tout vecteur se décompose de manière unique sur ces sous-espaces

Supposons que tout vecteur de$E$ se décompose comme la somme d'un vecteur de $F$ et d'un vecteur de $G$.
- Puisque tout vecteur de $E$ se décompose comme la somme d'un vecteur de $F$ et d'un vecteur de $G$. Alors $E=F+G$
- Soit $v \in F \cap G$. Alors on peut écrire les deux décomposition s suivantes de $v$ sur $F$ et $G$:
    - $\newcommand{\ud}[2]{\underset{#2}{\underbrace{#1}}} \ud{0}{\in F}+\ud{v}{\in G} = \ud{v}{\in F} + \ud{0}{\in G}$ 
- Par unicité de cette décomposition sur $F$ et $G$, on obtient $v = 0$. D'où $F \cap G = \{0\}$

---

> Tout vecteur se décompose de manière unique sur une base

Soit $B = \{v_1, ..., v_n\}$

Comme $B$ est génératrice de $E$,
- Tout vecteur de $E$ se décompose comme une combinaison linéaire de $(v_1, ..., v_n)$

Soit $v \in E$
- Supposons deux décompositions d'un vecteur $v$ de $E$ dans $B$.
- Alors il existe $\lambda_1,..., \lambda_n$ et $\mu_1, ..., \mu_n$ des scalaires.
- $v =\lambda_1v_1+...+\lambda_nv_n = \mu_1v_1+...+v_n\lambda_n$
- $(\lambda_1-\mu_1)v_1+...+(\lambda_n-\mu_n)v_n = 0$ 
- Par liberté de la base;
    - $\lambda_1-\mu_1=0,...,\lambda_n-\mu_n = 0$ 
    - $\lambda_1=\mu_1, ..., \lambda_n = \mu_n$
- Les deux décompositions sont ainsi identiques.

---

> Dans un espace de dimension $n$, si une famille est libre de cardinal $n$ alors c'est une base de $E$.

Soit $\mathcal{F}$ une famille libre de cardinal $n$ non réduite à $\{0\}$

D'après le théorème de la base incomplète,
- Il existe une base $B$ de $E$ telle que:
    - $\mathcal{F} \sub B$
- De plus, $card(B) = n$
- Or, $\dim(\mathcal{F}) = n$

Donc $card(B) = \dim(\mathcal{F}) = n$ (n'a pas besoin d'être complétée), ainsi $\mathcal{F}=B$

---

> Dans un espace de dimension $n$, si une famille est génératrice et de cardinal $n$, alors c'est une base de $E$.

On a $\mathcal{F}$ est génératrice et $card(\mathcal{F}) = n$

D'après le théorème de la base extraite:
- Il existe une base $B$ telle que $B \sub \mathcal{F}$
- Or, $\dim(B) = n = card(\mathcal{F})$

Donc $\mathcal{F} = B$, d'où $\mathcal{F}$ est une base.

---

> Si $F$ est un sous-espace vectoriel de $E$ et $\dim(E) = \dim(F)$ alors $E=F$.

Soit $B$ une base de $F$. Par définition
- $B$ est une famille libre et génératrice de vecteurs de $F$.

Comme $F \sub E$
- $B$ est génératrice de $E$.

De plus, $card(B) = \dim(F)$ or $\dim(F) = \dim(E)$ donc $card(B) = \dim(E)$

On a bien $F=E.$

---

> Si $F \cap G = \{0\}$ et $\dim(F) + \dim(G) = \dim(E)$ alors $F$ et $G$ sont supplémentaires de $E$.

Supposons $F \cap G$ et $\dim(F) + \dim(G) = \dim(E)$

Mq $E = F\oplus G$
- Sachant $F \cap G = \{0\}$
- Il suffit de montrer $E = F+G$

Par la formule de Grassman
- $\dim(F \cap G) = \dim(F) +\dim(G) - \dim(F +G)$

Or, $F \cap G = \{0\}\iff \dim(F\cap G) = 0$


- $\dim(F) + \dim(G) - \dim(F+G) = 0$
    - On a $\dim(E) = \dim(F)+\dim(G)$ 
- $\dim(E) -\dim(F+G) = 0$

On a bien
- $\dim(E) = \dim(F+G)$

Et, on sait que
- $F \sub E, G\sub E$

Donc $E = F+G$

---

> Si $F+G = E$ et $\dim(F)+\dim(G) = \dim(E)$ alors $F$ et $G$ sont supplémentaires dans $E$

Supposons:
- $F \sub E$
- $G \sub E$
- $\dim(G ) + \dim(F) = \dim(E)$



Mq $E = F \oplus G$
- Il suffit que $F \cap G = \{0\}$
- Par la formule de Grassmann:
    - $\dim(F\cap G) = \dim(F) + \dim(G) - \dim(F+G)$ 
        - Or, $\dim(E) = \dim(F) + G$
        - et, $E = F+G$
        - $\dim(F+G) = \dim(F)+\dim(G)$
    - $\dim(F\cap G) = \dim(F)+\dim(G) - \dim(F+G) = 0$
    -  $\dim(F \cap G) = 0$
    - $F \cap G = 0$

Donc $E = F \oplus G$

---

> Dans un espace de dimnsion finie, tout sous-espace admet un supplémentaire.


D'une part,
- Si $F=\{0\}, E$ est un supplémentaire de $F$
- Si $F = E, \{0\}$  est un supplémentaire de $F$

D'autre part, supposons maintenant que $F ≠ \{0\}$ et $F ≠ E$.
- Notons $p = \dim(F)$
- Comme $F ≠ \{0\}$ et $F ≠ 0$
- $1 ≤ p ≤ n-1$ $(n = \dim(E))$
- Soit $(f_1, ..., f_p)$ une base de $F$.
- D'après le théorème de la base incomplète,
    - on peut compléter $(f_1, ..., f_p)$   en une base de $E$. 
    - Autrement dit, il existe:
        - Pour $q = n-p$    
        - des vecteurs $g_1, ..., g_q$  de $E$ tels que $f$ tels que $(f_1, ..., f_p, g_1, ..., g_q)$ est une base de $E$.
- Posons $G = \text{Vect}(\{g_1, ..., g_q\}),$ 
- Posons $F = \text{Vect}(\{f_1, ..., f_p\})$
- Montrons que $F$ et $G$ sont supplémentaires dans $E$
    - Soit $v \in F \cap G$. 
    - Comme $v \in F$. Il existe des scalaires $\lambda_1, ..., \lambda_p$ tels que:
        - $v= \lambda_1 f_1+...+\lambda_pf_p$
    - De même, $v \in G$  donc il existe des scalaires $\mu_1, ..., \mu_q$
        - $v = \mu_1g_1+...+\mu_qg_q$ 
    - D'où
        - $\lambda_1f_1+...+\lambda_pf_p-\mu_1g_1-...-mu_qg_q = 0$

Par liberté de la famille (car base de $E$),
- $\lambda_1 = ... = \lambda_p = \mu_1 = ... = \lambda_q = 0$ 
- D'où $v= 0$
- Ainsi, $F \cap G = \{0\}$

Finalement, montrons que $F+G = E$
- Soit $v \in E,$
- Puisque $(f_1, ..., f_p, g_1, ..., g_q)$ est une base de $E$, il existe des scalaires $\lambda_1, ..., \lambda_p, \mu_1, ..., \mu_q$ tels que:
    - $v = \lambda_1f_1 + ... + \lambda_pf_p+\mu_1g_1+...+\mu_qg_q$ 
- Or $\lambda_1f_1+...+\lambda_pf_p \in F$ 
- Et, $\mu_1g_1+...+\mu_qg_q \in G$
- D'où $v \in F+G$. 

Ainsi, $F+G = E$