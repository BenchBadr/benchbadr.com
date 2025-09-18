
$\renewcommand{\lim}[1]{\underset{\begin{matrix}#1\end{matrix}}{\text{lim}}}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\ms}[1]{\ \text{m}\cdot\text{s}^{-#1}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\kmh}[1]{\ \text{km}\cdot \text{h}^{-#1}}$

> [!info]
> Les exercices proviennent de **Dunod** si leur nom est `13.X`
> Sinon source : [Nicolas Hergott](https://www.youtube.com/watch?v=BC5QGeIX6AU)
# Exercice 1

> La position d'une bille est donnée dans un plan de référentiel orthonormé:
> $(O, \vec{e_x}, \vec{e_y})$ par $\cases{x = 2t \\ y = -5t^2 + 4t + 2}$
> 1. Donner l'expression de son vecteur vitesse et de son vecteur accélération.
> 2. À quels instants le mouvement est-il accéléré? Ralenti?

## 1. Question 1

> Donner l'expression de son vecteur vitesse et de son vecteur accélération.

**Le vecteur position à l'instant $t$** 
$\vec{OM}\m{2t \\ -5t^2+4t+2}$

**Le vecteur vitesse**
$\vec{v}\m{2 \\ -10t + 4}$

**Le vecteur accélération**
$\vec{a}\m{0 \\ -10}$


## 2. Question 2

> À quels instants le mouvement est-il accéléré? Ralenti?


--- 
*Brouillon*

1. Sens de la question
	- Quand est-ce que la norme du vecteur vitesse augmente
2. Calcul de la norme de la vitesse
3. Recherche du minimum de la norme

$v = \sqrt{4 + 100t^2 - 80t + 16} = \sqrt{100t^2 - 80t + 20}$
---
$v = \sqrt{4 + (4-10t)^2}$
- La valeur minimale est obtenue lorsque $t = 0.4s$ soit $2$.
- Puisqu'il s'agit d'un polynôme, on en déduit les variations.

**Rappel du cours**
$v \nearrow$ lorsque $\vec{v} \cdot \vec{a} > 0$
- On a $\vec{v} \cdot \vec{a} = 2 \cdot 0 + (-10t + 4) \cdot -10$
	- $= 10(10t - 4)$
- **Condition** $t ≥ 4$

Le mouvement est donc ralenti entre $t=0$ et $t = 0.4$
# Exercice 2 : Problème inverse

> Prenons la vitesse à l'instant $0$, notée $\vec{v_0}$.
> SI $\vec{v}(0) = \vec{v_0}$
> Ce vecteur forme un angle de $30°$ avec l'axe des abscisses. 
> $\cases{\alpha = 30° \\ v_0 = 4ms^{-1} \\ \forall t, \vec{a} = \vec{a_0}\vec{e_y}}$

$\vec{a}\m{0 \\ 10}$ $\to$ $\vec{v}\m{c_1 \\ 10t+c_2}$

- or, d'après l'énoncé: *(par utilisation des composantes)*
	- $\vec{v}(0)\m{v_0\cos\alpha \\ v_0\sin\alpha} = \m{4\frac{\sqrt{3}}{2} \\ \frac42} = \m{3.46 \ms1 \\ 2.00 \ms1}$    

- Par utilisation de ces valeurs, on en déduit $c_1$ et $c_2$ dans l'expression de $\vec{v}$.

$\vec{v}(0)\m{c_1 = 3,46 \ms \\ c_2 = 2 \ms1}$

**Conclusion**

$\vec{v}\m{3,46 \ms \\ 10t + 2 \ms1}$ 

**Enfin, trouvons un vecteur position**
$\vec{OM}\m{3.46t +c_3 \\ 5t^2 + 2t + c_4}$

Or, à $t = 0, \m{x=  0 \\ y = 0}$ donc ces constantes sont nulles. 

$\vec{OM}\m{3.46t \\ 5t^2 + 2t}$


# Exercice 3 : Mongolfière

> Une mongolfière part du point d'origine, et a une vitesse d'ascension verticale $v_0$ indépendante de son altitude. 
> 
> Le vent lui communique une vitesse horizontale $v_x = \frac{z}{t_e}$ proportionelle à l'altitude $z$ atteinte.
> **Précision** : $t_e$ est une constante.
> Déterminer $z(t), x(t), x(z)$ et calculer le vecteur accélération.

- $\forall t, v_z(t) = v_0$
- $z(t) = v_0t+c_1$
	- $c_1$ est de 0, la position initiale étant l'origine.
	- Autrement dit, $\vec{OM}(0)=\vec0$ en

**Que vaut $v_x$** ?
- $v_x=\frac{z}{t_e}=\frac{v_0t}{t_e}$
	- Par définition de $z$
- D'où $x(t)=\frac{v_0}{2 \cdot t_e}t^2+c_2$ 
	- $c_2$ est nul car à l'instant $t=0$, la mongolfière est au point d'origine (l'abscisse vaut 0)

> [!tips]
> $x(z)$ est une relation entre coordonnées. 

On sait que $t = \frac{z}{v_0}$ et $x = \frac12\frac{v_0}{t_e}t^2$. On remplace $t$ par sonexpression:
- $x = \frac12\frac{v_0}{t_e}\frac{z^2}{v_0^2}$
- $x = \frac1{2 \cdot t_e \cdot v_0}\cdot z^2$

> [!info]
> Avec ça, il est possible de représenter graphiquement la trajectoire (l'ensemble des points par lesquels passe l'objet).

> Représenter graphiquement

Ça ressemblera grossièrement à ca:

```desmos-graph
left=0;bottom=0
---
f(x)=\sqrt{x*2*5}
```

**Pourquoi ça ressemble à ça?**
- Car plus on monte en altitude $(\nearrow z)$ le vent souffle fort $(\nearrow x)$



# Exercice 13.1 - Test d'accélération d'une voiture 

> Une voiture est chronométrée pour un test d'accélération en ligne droite avec départ arrêté (vitesse initiale nulle).
> 1. Elle est chronométrée à 26.6s au bout d'une distance $D=180$ m. Déterminer l'accélération (supposée constante) et la vitesse atteinte à la distance $D$
> 2. Quelle est alors la distance d'arrêt pour une décélération de $7 \ms{2}$ 

## Question 1

> Elle est chronométrée à 26.6s au bout d'une distance $D=180$ m. 
> Déterminer l'accélération (supposée constante) et la vitesse atteinte à la distance $D$

- Le mouvement est rectiligne à accélération constante $\vec{a_0}$.
- On choisit l'axe $(Ox)$ comme axe du mouvement
- Le point $O$ comme point de départ

L'intégration de l'accélération donne:
- $\vec{a} = \vec{a_0} = a_0\vec{u_x}$
- $\Rightarrow \vec{v} = (a_0t + C)\vec{u_x}$
Puisque départ arrêté,
- $\vec{v}(t = 0) = 0$ d'où $C=0$

La position est donc donnée par:
- $\vec{OM} = \frac{a_0t^2}2 + C'$ or $C=0 \to C' = 0$ 

Il suffit donc de trouver $a_0$.
- $\frac{a_0t^2}2 = 180$
- $a_0 = \frac{360}{t^2} = \frac{360}{26.6^2}$
- $a_0 = 0.509$

Par constance de l'accélération, on en déduit:
- $\vec{a} = 0.509 \ms2$
Par extension,
- $\vec{v} = a_0t + 0 = 0.509 \cdot 26.6 = \frac{360}{26.6} = 13.5 \ms1$ 

**Conclusion**
- $\vec{v} = 13.5 \ms1$
- $\vec{a} = 0.509 \ms2$

## Question 2

> Quelle est alors la distance d'arrêt pour une décélération de $7 \ms{2}$ 

Nous allons procéder à des substitutions,
- Vitesse au temps initial: $13.5 \ms1$
- Accélération: $-7\ms2$

Trouvons les vecteurs:
- $\vec{a}=-7\vec{u_x}$
- $\Rightarrow \vec{v} = (-7\cdot t + 13.5) \cdot \vec{u_x}$
- $\Rightarrow \vec{OM} = (-3.5 \cdot t^2 + 13.5 t) \cdot \vec{u_x}$

L'arrêt a lieu pour $\vec{v} = 0$ soit:
- $-7t + 13.5 = 0 \iff t = \frac{13.5}7 = 1.93s$

Or,
- $\vec{OM}(1.93)=-3.5\cdot1.93^{2}+13.5\cdot1.93 = 13$ m.

**Conclusion**
- La distance de freinage est de 13 m.


# Exercice 13.2 - Interpellation pour vitesse excessive

> Un conducteur roule à une vitesse constante $v_0$ sur une route rectiligne.
> Comme il est en excès de vitesse à $100\kmh1$, un gendarme à moto démarre à l'instant où la voiture passe à sa hauteur et accélère uniformément.
> Le gendarme atteint la vitesse de $90 \kmh1$ au bout de 10 secondes.
> 1. Quel sera le temps nécessaire au motard pour rattraper la voiture?
> 2. Quelle distance aura-t-il parcouru?
> 3. Quel vitesse aura-t-il atteinte?

## Question 1

> Quel sera le temps nécessaire au motard pour rattraper la voiture?

D'après les informations de la moto du gendarme,
- $\vec{v}(10) = 90 \kmh1$
- $\vec{v} = 9 \cdot t \kmh1$
- $\Rightarrow \vec{OM}=\frac92t^2 \ \text{km}$ 
D'après les informations du véhicule en infraction:
- $\vec{v} = 100 \kmh1$ (vitesse constante)
- $\vec{OM} = 100 \cdot t \ \text{km}$

Il suffit de résoudre:
- $4.5 \cdot t^2 = 100 \cdot t$
- $4.5 \cdot t = 100$
- $t = \frac{100}{4.5}$
- $t = 22.2s$

**Conclusion**
- Le temps nécessaire pour rattraper la voiture est d'environ 22.2 secondes.

## Question 2
> Quelle distance aura-t-il parcouru?

- $\vec{OM} = \frac{100}{3.6} \cdot t = 100 \cdot 22.2 = \frac{4.5}{3.6} \cdot 22.2^2 = 617 \ m$

**Conclusion**
- Les deux véhicules auront parcouru 617 m entre le départ de la moto et l'arrestation.

## Question 3
> Quel vitesse aura-t-il atteinte?

Reprenons le vecteur vitesse de la moto,
- $\vec{v}(t) = 9 \cdot t \kmh1$ 
- $\vec{v}(22.2) = 9 \cdot 22.2 = 199.8 \kmh1$


# Exercice 13.3 - Satellite géostationnaire (brouillon)

> Un satellite géostationnaire est en **mouvement circulaire uniforme** autour de la Terre. Il ressent une accélération $a = g_0\left(\frac{R}r\right)^2$ où:
> $R=6380$ km (rayon de la Terre) / $g_0 = 9.81 \ms1$ / $r$ rayon de l'orbite.
> La période de révolution du satellite est égale à la période de rotation de la Terre sur elle-même. (\*)
> 1. Calculer la période $T$ de rotation de la Terre en secondes, puis sa vitesse angulaire $\Omega$
> 2. Déterminer l'altitude du satellite en orbite géostationnaire.
> 3. Déterminer sa vitesse sur sa trajectoire et calculer sa norme.

## Question 1

> Calculer la période $T$ de rotation de la Terre en secondes, puis sa vitesse angulaire $\Omega$

**Calculons $T$**
- La Terre met 24h à tourner sur elle-même
- $T = 24 \cdot 60^2 = 86.4 \cdot 10^3 \ s$ 

**Calculons sa vitesse angulaire**
- $\frac{2\pi}{T} = 7.27 \cdot 10^{-5}$

## Question 2

> Déterminer l'altitude du satellite en orbite géostationnaire.

On note:
- $\vec{TM} = R\vec{u_r}$
- Le vecteur position du satellite en coordonnées polaires:
	- $(r, \theta)$ d'origine $T$
- La période de révolution du satellite coïncide donc sa vitesse angulaire (\*)
- Le mouvement est circulaire uniforme

D'après l'énoncé,
- $\vec{a} = g_0\left(\frac{R}r\right)^2 = -\frac{v^2}2 \vec{u_r} = -r \cdot \theta^2 \vec{u_r}$ 
- $\vec{a} = 9.81$

*À finir*

# Exercice 4 - PFD

> Un skieur de masse $m = 60$ kg monte à vitesse constante et en ligne droite sur un téléski.
> Les forces de frottement (parallèles à la piste) valent $f=100$ N.
> On donne $g = 10 \ms2$
> 1. Calculer la force $F$ exercée par la perche sur le skieur (on suppose que la perche se comporte comme un fil).
> 2. Que vaut la force exercée par le skieur sur la perche?


