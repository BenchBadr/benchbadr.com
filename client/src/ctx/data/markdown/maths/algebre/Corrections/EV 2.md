# Exercice 1

> Soit $\mathcal{B} = \{e_1, e_2, e_3\}$ la base canonique de $\R^3$. On considère l'application linéaire de $\R^3$ dans $\R^3$ donnée par:
> $f(e_1) = (1,-1,0)$
> $f(e_2)=(-1, 0, 1)$
> $f(e_3)=(-3, 1, 2)$
> 1. Rappeler pourquoi une telle application linéaire $f$ existe et est unique
> 2. Soit $(x,y,z)\in\R^3$. Montrer que $f((x,y,z))=(x-y-3z, -x+z, y+2z)$
> 3. Déterminer une base et la dimension de $\ker(f)$
> 4. En déduire $\Im(f)$
> 5. $f$ est-elle injective? Surjective?

## Question 1

> Rappeler pourquoi une telle application linéaire $f$ existe et est unique

Puisque $\{e_1, e_2, e_3\}$ est une bas, il existe une unique application linéaire $f$ telle que:
- $f(e_1) = (1,-1, 0)$
- $f(e_2) = (-1, 0, 1)$
- $f(e_3) = (-3,1,2)$

## Question 2
> Soit $(x,y,z)\in\R^3$. Montrer que $f((x,y,z))=(x-y-3z, -x+z, y+2z)$

Soit $(x,y,z)\in\R^3$
Alors $(x,y,z) = x\cdot e_1 + y \cdot e_2 + z \cdot e_3$ donc par linéarité de $f$, on a:
- $f((x,y,z)) = xf(e_1)+yf(e_2)+zf(e_3)$
- $= (x,-x,0)+(-y, 0, y)+(-3z, z,2z)$
- $= (x-y-3z, -x+z, y+2z)$

## Question 3
> Déterminer une base et la dimension de $\ker(f)$

Soit $(x,y,z) \in \R^3$. Alors,
$(x,y,z) \in \ker(f) \iff \cases{x-y-3z = 0 \\ -x+z = 0 \\ y+2z=0}$
$\phantom{(x,y,z) \in \ker(f) } \ifff{L_2 \leftarrow L_2 + L_1} \cases{x-y-3z =0 \\ -y -2z = 0 \\ y+2z = 0}$
$\phantom{(x,y,z) \in \ker(f) } \iff \cases{x-y-3z= 0 \\ y+2z = 0}$
$\phantom{(x,y,z) \in \ker(f) } \iff \exists \lambda \in \R$ tel que $\cases{x = \lambda \\ y = -2\lambda \\ z = \lambda}$
D'où $\ker(f) = \Vect(\{(1, -2, 1)\})$
Alors, $\{(1,-2,1)\}$ est génératrice de $\ker(f)$ et c'est une famille libre car famille à un seul élément il est non nul, donc c'est une base de $\ker(f)$.
D'où:
$\dim(\ker(f)) = \card(\{(1,-2,1)\}) = 1$
## Question 4
> En déduire $\Im(f)$

D'après la formule du rang:
$\dim(\Im(f)) = \dim(\R^3) - \dim(\ker(f)) = 2$
Par ailleurs, 
- $\Im(f) = \Vect\{f(e_1), f(e_2), f(e_3)\}$
- $= \Vect(\{(1,-1,0), (-1,0,1),(-3,1,2)\})$
Il suffit d'en prendre 2 non colinéaires, par exemple $\{(1,-1,0), (-1, 0, 1)\}$ est une base de $\Im(f)$

## Question 5
>  $f$ est-elle injective? Surjective?

$\ker(f) ≠ \{0_{\R^3}\}$ donc $f$ est non injective et non surjective puisque c'est un endomorphisme en dimension finie.

# Exercice 2
> Soit $E,F$ et $G$ trois $\K$-espaces vectoriels .Soit $f \in \mathcal{L}(E, F)$ et $g \in \mathcal{L}(F,G)$. Montrer que:
> 1. $\ker(g\circ f) = f^{-1}(\ker(g))$
> 2. $\ker(f) \sub \ker(g \circ f)$
> 3. $\Im(g \circ f) \sub \Im(g)$

## Question 1
> $\ker(g\circ f) = f^{-1}(\ker(g))$

($\sub$) Soit $x \in \ker(g \circ f)$
- Alors $g(f(x)) = (g\circ f)(x) = 0$ (car $x \in g \circ f$)
- Donc $f(x) \in \ker(g)$ c'est-à-dire $x \in f^{-1}(\ker(g))$ 
Donc $\ker(g \circ f) \sub f^{-1}(\ker(g))$
$(\supset)$ Soit $x \in f^{-1}(\ker(g))$
- Alors $(g \circ f)(x) = g(f(x))$ (car $f(x) \in \ker(g)$)
- $= 0_G$
- Donc $x\in \ker(g \circ f)$. 

## Question 2
> $\ker(f) \sub \ker(g \circ f)$

Soit $x \in \ker(f)$
- Alors, $(g \circ f)(x) = g(f(x)) \ub{=}{x \in \ker(f)} g(0_F) \ov{=}{\text{car} g \text{est linéaire}}0_G$ donc $x\in \ker(g\circ f)$
## Question 3
> $\Im(g \circ f) \sub \Im(g)$

Soit $z \in \Im(g \circ f)$. 
Par définition, 
- Il existe $x \in E$ tel que $z = (g \circ f)(x)$
- c'est-à-dire, tel que $z = g(\ub{f(x)}{\in F})$ donc $z \in \Im(g)$
