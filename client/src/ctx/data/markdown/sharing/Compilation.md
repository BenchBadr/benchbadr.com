$\newcommand{\Z}{\mathbb{Z}}\newcommand{\N}{\mathbb{N}}$
# I - Logique

- **Relation d'ordre**
	- Réflexive
	- Antisymétrique
	- Transitive
- **Relation d'équivalence**
	- Réflexive
	- Symétrique
	- Transitive
- **Injectif** : au plus un antécédant
- **Surjective** : au moins un antécédant
- **Bijective** : Injective + surjective

# II - Trigonométrie

> [!tips]
> $\cos$ est un connard, $\sin$ est sympa.


## 1. Formules 

- **Additivité**
	- $\cos(a+b) = \cos a \cos b - \sin a \sin b$
	- $\cos(a-b) = \cos a \cos b + \sin a \sin b$
	- $\sin(a+b) = \sin a \cos b + \sin b \cos a$
	- $\sin(a-b) = \sin a \cos b - \sin b \cos a$
- **Identité**
	- $\sin^2x+\cos^2x=1$

## 2. Exemples de corollaires

- $\cos(2x) = 2\cos^2x-1 = \cos^2x-\sin^2x$
- $\sin(2x) = 2\sin x\cos x$ 


# III - Complexes

- **Formules d'Euler**
	- $\cos\theta = \frac{e^{i\theta}+e^{-i\theta}}2$
	- $\sin\theta = \frac{e^{i\theta}-e^{-i\theta}}{2i}$

# III - Suites
## 1. Formules

- **Convergence** : $\forall \epsilon > 0, \exists N \in n_0 / \forall n \in \N (n ≥ N \Rightarrow |u_n - l| ≤ \epsilon)$

# IV. Arithmétique

> [!success]- **Rappels**
>- $a|b$ et $a|c$ alors $a|b+c$
>	- De même, $a|b-c$
>- $d|a$ et $d|b \Rightarrow d|a \wedge b$ 
>- $\text{pgcd}(a,b) \times \text{ppcm}(a,b)=|a,b|$
>- $a|c$ et $b|c$ alors $\text{ppcm}(a,b)|c$
>- **Existence et unicité** de décomposition de tout entier en premiers.
>- **Définition congruence**
>	-  $a \equiv b[n]$ si $n|b-a$ ($a$ et $b$ interchangeable)
>	- **Règles de calcul** - Soit $(a,b,c,d)\in\Z^4$ tq $a\equiv b[n]$ et $c\equiv d[n]$
>		- $a+c \equiv b+d[n]$
>		- $a \times c \equiv b \times d[n]$
>		- $a^k \equiv b^k[n]$ ($\forall k ≥ 0$)

- **Bézout**
	- Soit $(a,b)\in\Z^2$ des entiers. Il existe $(u,v)\in\Z^2$ tels que:
		- $au + bv = a \wedge b$
	- **Corollaire Bézout**
		- Si $(a,b)\in\Z^2$ premiers entre eux alors il existe $(u,v)\in\Z^2$ tq
			- $au+bv = 1$
- **Lemme de Gauss**
	- Si $a|bc$ et $a \wedge b = 1 \Rightarrow a|c$ 
- **Lemme d'Euclide**
	- Soit $p$ premier
	- $p | ab$ alors $p|a$ ou $p|b$
- **Petit théorème de Fermat**
	- $p$ premier, $a \in \Z$
	- $a^p \equiv a[p]$
	- **Corollaire**
		- Si $p$ ne divise pas $a$
			- $a^{p-1}\equiv 1[p]$

> [!tips]

> [!tip]- Informations générales
>- **Crible d'Ératosthène**
>	- On écrit une suite de nombre
>	- On parcourt successivement les nombres en grisant les multiples ultérieurs.
>	- Resteront non grisés seuls les non-multiples donc premiers.
>	- Exemple simplifié:
>	- **`2`** 3 `4` 5 `6` 7 `8` 9 `10` 11 `12` 13 `14` 15
>	- **`2`** **`3`** `4` 5 `6` 7 `8` `9` 11 `12` 13 `14` `15`
>	- 2, 3, 5, 7, 11, 13 sont bien premiers.
> - **Identifier un premier**
>	- Tester les premiers $< \sqrt{n}$ par l'absurde

### 3.1 Méthodes

#### 3.1.1 Solutions Diophantienne

> Trouver une solution particulière de:
> $161x+368y=115$ $(E)$

> [!note]- Solutions particulières
> $368 = 161 \cdot 2 + 46$
> $161 = 46 \cdot 3 + 23$
> $46 = 23 \cdot 2 + 0$
> 
> On a $368 \wedge 161 = 23$
> 
> Or, $115 = 5 \cdot 23$,
> - Donc par le **théorème de Bézout**,
> 	- $(E)$ admet des solutions entières
> 
> > [!tips]
> > Autrement, l'équation n'aurait pas de solution
> 
> **Remontée**:
> $23 = 161 - 46 \cdot 3$
> $\phantom{23} = 161 - (368 - 161 \cdot 2) \cdot 3$
> $\phantom{23} = (-7)161 + (-3)368$
> 
> **Déterminer une solution particulière**
> $(-7)161 + (-3)368 = 23$
> $(-35)161 + (-15)368 = 115$
> 
> $(x_0, y_0) = (35, -15)$ est une **solution particulière** de $(E)$ $\color{orange}(1)$


> [!success]- **Toutes les solutions**
> Soit $(x,y)\in\Z^2$ une solution de $(E)$.
> - $161x+368y=115$
> Or, par $\color{orange}(1)$
> - $161x_0+368y_0=115$
> - $161(-35)+368(-15)=115$
> Donc,
> - $161x+368y = 161(x_0)+368(y_0)$
> - $161(x-x_0)+368(y-y_0)=0$
> - $\cancel{23} \cdot 7(x-x_0)+\cancel{23} \cdot 16(y-y_0)=0$ 
> - $7(x-x_0)+16(y-y_0)=0$
> - $7(x-x_0)=-16(y-y_0)$
> 
> Ainsi, $7|16(y-y_0)$
> - Or, $7 \wedge 16 = 1$
> - Par le **Lemme de Gauss**
> 	- $7|(y-y_0)$
> - Donc, il existe $k \in \Z$ tel que:
> 	- $y-y_0=7k$ $(*)$
> - De même,
> 	- $7(x-x_0)=-16(y-y_0)$
> 	- $\cancel7(x-x_0)=-16 \cdot \cancel7 \cdot k$
> 	- $x-x_0=-16k$
> - Donc,
> 	- $(x,y)=(x_0-16k, y_0+7k)$.
> 	- $(x_0, y_0) = (35 - 16k, y_0+7k)$
> 
> Les solutions entières de $(E)$ sont:
> - $\{(35-16k, -15+7k), k \in \Z\}$

## V. Algèbre

## 1 Formules

- **Formule du Rang**
	- $f:E\to F$
	- $\dim(E) = \dim(\Im(f)) + \dim(\ker(f))$
