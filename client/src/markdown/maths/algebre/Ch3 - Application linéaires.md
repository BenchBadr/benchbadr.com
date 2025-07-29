## I - Définitions
$\newcommand{\K}{\mathbb{K}}\newcommand{\R}{\mathbb{R}}$
## Définition
Soit $E$ et $F$ deux $\K$-ev. 
Soit $f$ une application de $E$ dans $f$. On dit que $f$ est une *application linéaire* si:
- $\forall u,v \in E, f(u+v) = f(u) + f(v)$
- $\forall \lambda \in \K, \forall u \in E, f(\lambda u) = \lambda f(u)$

### Remarque
Les applications linéaires sont donc des applications « compatibles » avec les opérations d'un espace vectoriel.
... Dans le sens où on peut faire les opérations avant ou après l'application.

Dans le langage de l'algèbre, une application linéaire est aussi appelée *morphisme* d'espace vectoriel. 

> [!tips]
> Morphisme c'est le grec pour dire transformation

## Proposition
Soit $f$ une application linéaire de $E$ dans $F$. Soit $v_1, ..., v_n \in E$ et $\lambda_1, ..., \lambda_n \in \K$ alors:
- $f(\lambda_1v_1 + ..., \lambda_nv_n) = \lambda_1f(v_1)+...+\lambda_nf(v_n)$

### Remarque
- Si $f:E \to F$ est une application linéaire, alors $f(0_E) = 0_E$.
- C'est donc une conséquence
- En effet, $f(0_E) = f(0 \cdot 0_E) = 0\cdot f(0_E) = 0_F$

## Proposition
Soit $f:E\to F$ une application. Cette application est linéaire _ssi_ : $\forall \lambda \in \K, \forall u,v \in E, f(\lambda u + v) = \lambda f(u) + f(v)$ 

### **Exemples** - *Applications linéaires de $\R$ dans $\R$*

- Applications de la forme $x \mapsto ax$
- les autres applications (fonctions) ne sont pas linéaires. 
- $x \mapsto ax+b$ (avec $b≠0$) n'est pas linéaire. (affine), $x\mapsto x^2, x \mapsto \sin(x)...$

### Exemples - Applications linéaires entre espaces $\R^n$
- Voici une application linéaire de $\R^2$ dans $\R^3$.
	- $(x,y) \mapsto (x-y, x+y, 2x-y)$
- Voici une application linéaire de $\R^3$ dans $\R^2$
	- $(x,y,z)\mapsto (x-2y+z, 3x-z)$
... grosso modo, que des combinaisons linéaires, pas de constantes

### Exemples - APL sur les espaces vectoriels de fonctions 

- L'application qui prend une fonction dérivable et renvoie sa fonction dérivée
	- En effet, $(f+g)' = f'+g'$ et $(\lambda f)' = \lambda f'$.
- L'application qui prend une fonction continue sur $[a,b]$ et on renvoie son intégrale sur $[a,b]$, c'est linéaire
	- En effet, $\int^b_af(x)+g(x) = \int^b_a g(x) + \int^b_a g(x)$

### Exemples
- L'application nulle de $E$ dans $F$ est linéaire. 
	- $\forall u \in E, f(u) = 0_F$
- L'application identité de $E$ dans $E$, notée $\text{id}_E$ est linéaire.
	-  $\forall u \in E, \text{id}_E(u) = u$

### Vocabulaire et notations

- Soit $f:E\to F$ une application linéaire
	- Si $E=F,$ $f$ est appelée *endomorphisme* de $E$.  ... application linéaire avec le même ensemble d'arrivée et de départ $\biggl{|}\begin{matrix}\text{de E}\\\text{surE}\end{matrix}$
	- Si $f$ est bijective, $f$ est appelée *isomorphisme.*
	- Si $F=\K, f$ est appelée *forme linéaire*
- L'ensemble des APL de $E$ dans $F$ est noté $\mathscr{L}(E,F)$
- L'ensemble des endomorphisme de $E$ dans $F$ est noté $\mathscr{L}(E)$

# II - Opérations sur les applications linéaire

## Proposition

Soit $E$ et $F$ deux $\K$-espaces vectoriels. 
Soit $f$ et $g$ deux applications linéaires de $E$ dans $F$. Soit $\lambda \in \K$
Alors: 
- $f +g$ est une application linéaire 
- et $\lambda_f$ est aussi une application linéaire

### Preuve

Soit $\lambda \in \K,$ soit $u,v \in E$
Alors 
$\newcommand{\p}{\phantom{(f+g)(\lambda u +v)}}$
$(f+g)(\lambda u +v) = f(\lambda u + v)+g(\lambda u +v)$ (définition de $f+g$)
$\p = \lambda f(u)+f(v) + \lambda g(u) + g(v)$ ($f$ et $g$ sont linéaires)
$\p = \lambda (f(u)+g(u))+f(v)+g(v)$
$\p = \lambda(f+g)(u)+(f+g)(v)$ (définition de $f+g$)

## Proposition

L'ensemble des applications linéaires de $E$ dans $F$ ($\mathscr{L}(E,F)$), muni de l'addition de la multiplication par un scalaire usuel, est un espace vectoriel.

### Preuve
$\mathscr{L}(E, F)$ est un sous-espace vectoriel de $\mathcal{F}(E,F)$. 
- En effet, l'application nulle est linéaire (exemple précédent)
- $\mathscr{L}(E,F)$ est stable par addition (prop precedente)
- $\mathscr{L}(E,F)$ est stable par multiplication par un scalaire (prop precedente)

## Proposition - Composition

Soit $E,F,G$ des $\K$-ev
- Soit $f:E\to F$ et $g:F \to G$ des applications linéaires
- Alors $g\circ f$ est une application linéaire de $E$ dans $G$ 

> **Preuve** - Peut tomber au CC2 /!\

Soit $\lambda \in \K,$ soit $u,v \in E,$
$\newcommand{\pp}{\phantom{g\circ f(\lambda u+v)}}$
$g\circ f(\lambda u+v) = g(f(\lambda u +v))$ (définition de la composition)
$\pp = g(\lambda f(u)+f(v))$  (linéarité de $f$)
$\pp = \lambda g(f(u)) + g(f(v))$ (linéarité de $g$)
$\pp = \lambda g \circ f(u) + g\circ f(v)$

### Remarque
Si $g:E \to E$ et $f:E \to E$ en général $g \circ f ≠ f \circ g$

## Proposition

Soit $f_1:E \to F, f_2 : E \to F, g:F\to G$ des applications linéaires.
Alors, $g \circ (f_1 + f_2) = g\circ f_1 + g \circ f_2$
Soit $f:E \to F, g_1 : F \to G, g_2 : F \to G$ des applications linéaires. 
- Alors, $(g_1 + g_2) \circ f = g_1 \circ f + g_2 \circ f$
Soit $\lambda \in \K$. Soit $f:E \to F, g:F \to G$ des applications linéaires.
- Alors: $(\lambda g)\circ f = g \circ (\lambda f) = \lambda(g \circ f)$

## Proposition

Soit $f:E \to F$ une application linéaire bijective (isomorphisme). Alors, l'application réciproque $f^{-1}:F \to E$   est aussi linéaire. 

### Preuve

Soit $\lambda \in \K$. Soit $u,v \in F$.
$\newcommand{\ppp}{\phantom{f^{-1}(\lambda u + v)}}$
Comme $f$ est surjective, il existe $u' \in E$ et $v' \in E$ tel que $u = f(u')$ et $v=f(v')$.
On a:
$f^{-1}(\lambda u + v) = f^{-1}(\lambda f(u') + f(v'))$
$\ppp = f^{-1}(f(\lambda u'+v'))$ (linéarité de $f$)
$\ppp = \lambda u' + v'$ (car $f^{-1} \circ f = \text{id}$)
$\ppp = \lambda f^{-1} + f^{-1}(v)$ (car $u=f(u') \iff f^{-1}(u) = u'$ et $v = f(v') \iff f^{-1}(v)=v'$)


# III - Image des noyau d'une application linéaire

## Définition - Image
$\newcommand{\Im}{\text{Im}}$
Soit $f:E \to F$ une application linéaire. L'image de $f$ est l'ensemble:
- $\set{f(x) | v \in E}$
Elle est notée, $\Im{f}$

### Remarque

Dans le langage des applications, $\Im{f}$ est simplement l'image (directe) de $E$ par $f$, autrement dit $f(E)$.

### Définition - Noyau

Soit $f:E \to F$ une application linéaire. 
Le noyau de $F$ est l'ensemble:
- $\set{v \in E | f(v) = 0_F}$
Il est noté, $\ker(f)$. 

### Remarque
*Der Kern* : le noyau en allemand.

### Remarque
Dans le langage des applications, $\ker(f)$ est l'image réciproque de $\{0_F\}$. 

## Proposition 
$\newcommand{\Vect}{\text{Vect}}$
Soit $f:E \to F$ une application linéaire 
Si $\{v_1, ..., v_n\}$ est une famille génératrice finie de $E$ alors:
- $\Im(f) = \Vect{f(v_1), ..., f(v_n)}$
Plus généralement, si $A$ est une partie génératrice de $E$, alors:
- $\Im(f) = \Vect(f(A))$

### Exemples
Considérons l'application linéaire $f:\R^2 \to \R^3$ telle que:
- $f(x,y) = (x-y, x+y, 2x+y)$

$\Im f = \Vect(f(1,0), f(0,1))$
$\phantom{\Im f} = \Vect((1,1,2), (-1,1,1))$

$\ker(f) = \{(x,y) \in \R^2 | f(x,y) = (0,0,0)\}$
$\phantom{\ker(f)} = \{(x,y) \in \R^2 | x-y=0, x+y=0, 2x+y = 0\}$

## Proposition

$\Im f$ et $\ker f$ sont des sous-espaces vectoriels. 

## Proposition

Soit $E$ et $F$ deux $\K-$espaces vectoriels.
Soit $f:E \to F$ une application linéaire.
Alors $\ker f$ est un sous-espace vectoriel de $E$.

### Preuve - Exigible au CC2

- D'une part,
	- Puisque $f$ est linéaire, on sait que $f(0_E) = 0_F$  ($E$ espace de départ et $F$ d'arrivée)
	- (conséquence immédiate de la définition de l'application linéaire)
		- $f(\lambda x) = \lambda f(x)$
		- $f(0 \cdot 0_E) = 0 \cdot f(0_E)$
		- $\Rightarrow f(0_E) = 0_F$
	- Donc $0_E \in \ker(f)$
- D'autre part,
	- Soient $u,v \in \ker(f)$
	- Soit $\lambda \in \K$
		- Mq $\lambda u + v \in \ker f$ ...Il suffit que $f(\lambda u + v) = 0$
			-  $f(\lambda u+v) = \lambda f(u) + f(v)$
			- $= \lambda \cdot 0_F + 0_F$ (car $u,v \in \ker f$)
			- $= 0_F$
		- Donc $\lambda u + v = \ker(f)$

## Proposition

Soit $E$ et $F$ deux $\K$-espaces vectorie.s. 
Soit $f:E \to F$ une application linéaire. 
- Alors, $\Im f$ est un sous-espace vectoriel de $F$. 

### Preuve

D'une part,
- Puisque $f$ est linéaire, ... il suffit que $0_F$ ait un antécédent
- $f(0_E) = 0_F$ 
- Donc $0_F \in \Im(f)$
D'autre part
- Soit $u,v \in \Im f$ et Soit $\lambda \in \K$
	- Donc $\lambda u + v \in \Im(f)$
	- Alors il existe $u', v' \in E$ tel que $u=f(u')$ et $v = f(v')$
	- Donc $\lambda u + v = \lambda f (u') + f(v')$
	- $= f(\lambda u' + v')$ par linéarité
- Donc $\lambda u + v \in \Im f$

### Remarque

- L'image réciproque d'un sous-espace vectoriel par une application linéaire est un sous-espace vectoriel. 
- L'image directe d'un sous-espace vectoriel par une application linéaire est un sous-espace vectoriel. 
  
## Proposition - Injectivité

Soit $E$ et $F$ deux $\K$-espaces vectoriels.
Soit $f:E \to F$ une application linéaire. 
- L'application $f$ est injective ssi $\ker f=\{0_E\}$

### Preuve

($\Rightarrow$)
- Supposons $\ker f = \{0_E\}$
- Soit $u,v \in E$ tels que:
	- $f(u) = f(v)$
	- Donc $u = v$
	- Alors $f(u) - f(v) = 0_F$
		- Puisque $f$ est linéaire
		- Alors $f(u-v) = 0_F$
		- Donc $u-v \in \ker f$
		- Or, $\ker f = \{0_E\}$
		- D'où $u-v = 0_E$
	- Donc $u=v$
$(\Leftarrow)$
- Supposons $f$ injective
	- Soit $v \in \ker f$
		- Alors $f(v)=0_E$
		- De plus, $f(0_E) = 0_F$ (car $f$ est linéaire)
		- Par injectivité de $f$, on a donc $v = 0_E$
			- Donc $v = 0_E$
		- Donc $\ker f \sub \{0_E\}$
	- L'inclusion réciproque est évidente.

## Proposition

Soit $E$ et $F$ deux $\mathbb{K}-$espace vectoriel
Soit $f:E \to F$ une application linéaire
L'application $f$ est surjective ssi $\Im f = F$

### Preuve

$\Im f = f(E)$
- $f(E) = F \iff f$ surjective

# IV - Application linéaire en dimension finie

## Proposition

Soit $E$ et $F$ deux $\K$-espaces vectoriels, $E$ étant de dimension finie $n ≥ 1$
Soit $(e_1, ..., e_n)$ une base de $E$.
Alors, pour tout choix $(v_1, ..., v_n)$ de $n$ vecteurs de $F$. Il existe une, et une seule application linéaire telle que:
- $\forall i \in [|1, n|]$
- $f(e_i) = v_i$

### Remarque

Une application linéaire est entièrement caractérisée par l'image d'une base.
- On peut définir une application linéaire en donnant simplement l'image d'une base. 
- Pour montrer que deux applications linéaires sont égales:
	- Il suffit de montrer qu'elles coïncident sur une base. 
	  
### Preuve

- Analyse
	- Supposons qu'il existe un telle application $f$, 
		- Pour tout $x \in E,$ il existe des scalaires $x_1, ..., x_n$ uniques tels que $x = x_1e_1+...+x_ne_n$
		- D'où $f(x) = f(x_1e_1+...+x_ne_n)$
		- $= x_1f(e_1)+...+x_nf(e_n)$
		- $= x_1v_1+...+x_nv_n$
	- Ainsi, l'application $f$ est définie par 
		- $f(x) = x_1v_1+...+x_nv_n$
	- où $(x_1, .., x_n)$ sont les coordonnées de $x$ dans la base $(e_1, ..., e_n)$
- Synthèse
	- Montrons que l'application trouvée dans la phase d'analyse vérifie bien:
		- $\forall i \in [|1, n|], f(e_i)= v$
		- Soit $\lambda \in \K,$ soit $x,y \in E$
		- Notons $(x_1, ..., x_n)$ et $(y_1, ..., y_n)$ les coordonnées de $x$ et $y$ dans la base $(e_1, .., e_n)$
		- Il est facile de vérifier que les coordonnées de $\lambda x + y$ sont $(\lambda x_1+y_1 + ... + \lambda x_n + y _n)$
	- D'où $f(\lambda x + y) = (\lambda x_1 + y_1)v_1+ ... + (\lambda x_n+y_n) \cdot v_n$ (par définition de $f$
				  $= \lambda(x_1v_1+...+x_nv_n)+(y_1v_1+...+y_nv_n)$
				  $= \lambda f(x) + f(y)$ (par définition du cours)
	  - Soit $i \in [|1,n|]$ les coordonnées de $e_i$ dans la base $(e_1, ..., e_n)$ sont $(0, ..., 0, \underset{i\text{eme pos}}{1}, 0, ..., 0)$
	  - D'où $f(e_i) = 0 \cdot v_n + ... + 0 \cdot v_{i-1} + 1 \cdot v_i + 0 \cdot v_{i+1}+0\cdot v_n$
	  - $= v_i$

## Proposition

Soit $E$ et $F$ deux $\K$-espaces vectoriels : $E$ étant de dimension $n ≥ 1$.
Soit $\{e_1, ..., e_n\}$ une base de $E$. (accolades = sans ordre, parenthèses = avec ordre)
- $f$ est injective ssi $\{f(e_1), ..., f(e_n)\}$ est libre. 
- $f$ est surjective ssi $\{f(e_1), ..., f(e_n)\}$  est génératrice de $F$. 
- $f$ est bijective ssi $\{f(e_1), ..., f(e_n)\}$  est une base de $F$.

### Preuve

3ème point est une conséquence des deux 1ers. 
- On se contente de montrer le 1er point.
	- ($\Leftarrow$) Supposons $f$ injective
		- Soit $\lambda_1, ..., \lambda_n$ des scalaires tels que:
			- $\lambda_1f(e_1)+...+\lambda_nf(e_n) = 0_F$
			- Donc $f(\lambda_1e_1+....+\lambda_ne_n) = 0_F$ (par linéarité de $f$)
			- Donc $\lambda_1e_1+...+\lambda_ne_n \in \ker f$
			- Or, $\ker(f) = \{0_E\}$ car $f$ est injective
			- Donc $\lambda_1e_1 + ... + \lambda_n e_n = 0_E$
			- Or, $\lambda_1 = 0, ..., \lambda_n = 0$
			- Or, $\{e_1, ..., e_n\}$ est libre (c'est une base).
		- Donc $\lambda_1 = 0, ..., \lambda_n = 0$
	- $(\Rightarrow)$ Supposons $\{f(e_1), .., f(e_n)\}$ est libre
		- Soit $v \in \ker(f)$
			- Alors, $f(v)=0_F$
			- Puisque $(e_1, ..., e_n)$ est une base de $E$, il existe $\lambda_1, ..., \lambda_n$ des scalaires tels que
				-  $v = \lambda_1e_1 + ... + \lambda e_n$
				- D'où $f(\lambda_1e_1+...+\lambda_ne_n) = 0_F$
				- D'où $\lambda_1f(e_1)+...+\lambda_nf(e_n) = 0_F$ 
				- Or, $(f(e_1), ..., f(e_n))$ est libre
				- Donc $\lambda_1 = ... = \lambda_n = 0$
				- Donc $v = 0$
		- Donc $v = 0_E$
		- Ainsi, $\ker(f) \sub \{0_E\}$ et l'inclusion réciproque est évidente.

## Proposition

Soit $E$ et $F$ des $\K$-espaces vectoriels de dimension finie. 
Soit $f:E \to F$ une application linéaire. 
- Si $f$ est injective et $\dim E = \dim F$ alors $f$ est bijective. 
- Si $f$ est surjective et $\dim(E) = \dim(F)$ alors $f$ est bijective. 
  
### Preuve

Seulement le 1er point (le 2ème est analogue)
- Dans le cas où $\dim(E) = 0,$ 
	- c'est trivialement vrai.
- Supposons $f$ injective et $\dim(E) = \dim(F)$
	- Soit $(e_1, ..., e_n)$ une base de $E$.
	- D'après la proposition précédente, $(f(e_1, ..., f(e_n)))$ est libre 
		- or $\dim F = \dim E = n$
		- *... on sait que toute famille libre de $n$ vecteurs est une base.*
	- Donc $(f(e_1), ..., f(e_n))$ est une base de $F$.
- Ainsi $f$ transforme une base en une base. 
Elle est donc bijective.
$\square$

## Proposition

Soit $E$ et $F$ deux $\K$-espaces vectoriels
- Si $E$ est de dimension finie et s'il existe une application linéaire bijective entre $E$ et $F$.(isomorphisme)
- Alors $F$ est de dimension finie et $\dim F = \dim E$. 
Résultat analogue
- Si $F$ est de dimension finie et s'il existe une application linéaire bijective entre $E$ et $F$ alors $E$ est de dimension finie et $\dim(E) = \dim(F)$

### Remarque

- Ce résultat permet de déterminer dans certains cas la dimension d'un sous-espace vectoriel
- La réciproque est vraie. Si $\dim(E) = \dim(F)$ il existe un isomorphisme entre $E$ et $F$. 

## Théorème du rang

Soit $E$ et $F$ deux $\K$-espaces vectoriels ($E$ de dimension finie)
Soit $f:E\to F$ une application linéaire. Alors, 
- $\dim(E) = \dim(\ker(f)) + \underset{\text{rang de }f}{\dim(\Im(f))}$
### Exemple d'utilisation du Théorème du rang
Soit $f:\R^4 \to \R^4$ une application linéaire définie par:
- $f(x,y,z,t)=\cdots$
Déterminer $\ker(f)$ et $\Im(f)$. 
$\fbox{1}$ on détermine une base de $\ker(f)$ comme d'habitude.
$\fbox{2}$ On en déduit $\dim(\ker(f))$
$\fbox{3}$ Grâce au théorème du rang, on trouve $\dim(\Im(f))$ 
- **Exemple de $\dim(\ker(f)) = 2$
	- $\dim(\Im(f))$
$\fbox4$ Pour déterminer une base de $\Im(f)$
- Il suffit alors de prendre $p = \dim(\Im(f))$ vecteurs libres.
- Donc, $p$ vecteurs non colinéaires
- Si $\dim(\Im(f)) = 1 \to 1$ vecteur non-nul de $\Im(f)$
- Si $\dim(\Im(f)) = \dim(F) \to  \Im(f) = F$

### Preuve
... On distingue deux cas
*1er cas:* 
- Si $\dim(\ker(f)) = 0$
	- Alors, $\ker(f)=\{0_E\}$
	- $f$ est injective
- Soit $(e_1, ..., e_n)$ une base de $E$. 
	- Alors $(f(e_1), ..., f(e_n))$ est libre (car $f$ est injective)
	- De plus, $(f(e_1), ..., f(e_n))$ est une famille génératrice de $\Im(f)$
	- Donc $(f(e_1), ..., f(e_n))$
- Donc $\dim(\Im(f)) = n = \dim(E)$ donc on a bien:
	- $\dim(E) = \dim(\Im(f)) + \dim(\ker(f))$
	- On pose $\color{green}\dim(\Im(f)) = q$
*2ème cas:*
- Si $\dim(\ker(f)) > 0$. On pose $\color{green}p = \dim(\ker(f))$
- Soit $(u_1, ..., u_p)$ une base de $\ker(f)$
- Par le théorème de la base incomplète,
	- on complète cette base de $\ker(f)$ en une base de $E$.  $\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}$
	- $\ub{(\ub{u_1, ..., u_p}{\text{base du noyau}}, v_1, ..., v_q)}{\text{base de E}}$
- On a évidemment $p+q = r$
	- On a $\Im(f) = \Vect(f(u_1), ..., f(u_p), f(v_1), ..., f(v_q))$
	- $= \Vect(0_F, ..., 0_F, f(v_1), .., f(v_q))$
- Ainsi, $(f(v_1), ..., f(v_q))$ est une famille génératrice de $\Im(f)$
- Montrons que $f(v_1), ..., f(v_q)$ est libre.
	- Soit $\lambda_1, ..., \lambda_q$ des scalaires tels que:
		- $\lambda_1f(v_1)+...+\lambda_qf(v_q) = 0_F$
	- D'où, (par linéarité)
		- $f(\lambda_1v_1+ ...+\lambda_qv_q)=0_F$
	- D'où $\lambda_1v_1+...+\lambda_qv_q$ appartient au noyau.
		- or, $\ub{\Vect(v_1, ..., v_q)}{\in \Vect(v_1, .., v_q)} \cap \ker(f) = \{0_E\}$
	- D'où $\lambda_1v_1+...+\lambda_qv_q = 0_E$
	- D'où $\lambda_1 = ... = \lambda_q =$ ar la famille $v_1, ..., v_q$ est libre.
	- D'où $(f(v_1), ..., f(v_q))$ est libre
	- Finalement, $(f(v_1), ..., f(v_q))$ est une base de $\Im(f)$
	- Donc $\dim(\Im(f)) = q$
$\square$

$f\begin{pmatrix}E \\ \ub{(\ub{u_1, ..., u_p}{base \ker(f)}, v_1, ..., v_q)}{\text{base de E}} \\ F \\ \ub{(f(v_1), ..., f(v_q))}{\text{base de }\Im(f)}\end{pmatrix}$

## Définition
$\newcommand{\rg}{\text{rg}}$
Soit $E$ et $F$ deux espaces vectoriels ($E$ de dimension finie).
Soit $f:E \to F$ une application linéaire.
**Le rang** de $f$, noté $\rg(f)$ vaut,
- $\rg(f) = \dim(\Im(f))$

---

**Remarque** On a déjà défini la notion de rang d'une famille de vecteurs.
- $\rg(\{v_1, ..., v_n\}) = \dim(\Vect(\{v_1, ..., v_n\}))$

Si $(e_1, ..., e_n)$ est une base (ou simplement une famille génératrice de $E$). Alors $\rg(f) = \rg(f(e_1), ..., f(e_n))$ car $\Im(f) = \Vect(\{f(e_1), ..., f(e_n)\})$

# V - Projections vectorielles

Type d'applications linéaires particulier. 

## Définition

Soit $E$ un espace vectoriel de dimension quelconque.
Soit $F$ et $G$ deux sous-espaces vectoriels supplémentaires. 
On rappelle que, pour tout $u \in E$ il existe alors un unique couple $(u_F, u_G) \in F \times G$ tel que $u = u_F + u_G$

On appelle projection sur $F$ parallèlement à $G$ l'application:
- $p : E \to E$ telle que $p(u) = u_F$

### Exemple
On se place dans $\R^2$
- $F = \{(x,y) \in \R^2 | y = 0\}$
- $G = \{(x,y) \in \R^2 | x=y\}$
- On a bien $\R^2=F \oplus G$

Soit $P$ la projection sur $F$ parallèlement à $G$. 
- $p:\R^2\to\R^4$
- $p(x,y) = (?, ?)$
- $(x,y) = \ub{(x-y,0)}{\in F}+\ub{(y, y)}{\in G}$
- Donc, $p(x,y) = (x-y, 0)$

... Il faut écrire la décomposition et retenir la partie de l'espace de projection. 

![[Pasted image 20250325115424.png]]
## Proposition

Soit $p$ la projection de $F$ parallèlement à $G$. 
- $p$ est une application linéaire
- $\ker(p) = G$
- $\Im(p) = F$
- $p \circ p = p$

### Preuve
- On admet la linéarité de $p$
- On admet aussi $\ker(p) = G$ et $\Im(p) = F$
- Montrons que : $\forall x \in E, p \circ p(u) = p(u)$
	- Soit $n \in E$. On note $(u_F, u_G)$ la décomposition de $u$ sur $F+G$. $(u=u_F+u_G)$
	- On a $p \circ p(u) = p(p(u)) = p(u_F)$ (car $u_F = \ub{u_F}{\in F}+\ub{0_E}{\in G}$)
	- Par ailleurs, $p(u) = u_F$:
		- D'où $p \circ p(u) = p(u)$

## Proposition

Soit $f:E \to E$ un endomorphisme de $E$ tel que:
- $f \circ f = f$
Alors $f$ est la projection sur $\Im(f)$ parallèlement à $\ker(f)$.

> [!tips]
> En gros, associe à un vecteur sa composante de l'un de ses sev supplémentaires. 

> [!check]
> **Illustration**
> $E=F\oplus G$ alors $u=u_F+u_G$
> Soit $p$ une projection, $p:u\mapsto u_F$

### Preuve

Montrons que $\ker(f)$ et $\Im(f)$ sont supplémentaires dans $E$.
- Soit $u \in E,$ alors $u = \ub{f(u)}{\in \Im f} + \ub{u- f(u)}{\in \ker(f)}$
- En effet, $f(u-f(u)) = f(u)-f(f(u))$
- $= f(u) - f \circ f(u)$
- $= 0$ car $f = f\circ f$

Donc $E = \Im(f) + \ker(f)$
De plus, $\Im(f) \cap \ker(f) = \{0\}$
En effet, soit $u \in \Im(f) \cap \ker(f)$
Alors $u=f(u')$ et $f(u) = 0$

D'où $f(f(u')) = 0$
D'où $f(u') = 0$ car $f \circ f = f$
D'où $u = 0$
Ainsi, $\ker(f) \oplus \Im(f) = E$
La décomposition d'un vecteur $u \in E$ sur $\ker(f)$ et $\Im(f)$ s'écrit:
- $u = \ub{f(u)}{\in \Im f}+\ub{u - f(u)}{\in \ker(f)}$

La projection sur $\Im(f)$ parallèlement à $\ker(f)$ est donc l'application 
- $u \mapsto f(u)$
c'est-à-dire l'application $f$.