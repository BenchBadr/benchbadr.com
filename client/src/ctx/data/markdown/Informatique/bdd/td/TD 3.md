---
lang: fr
desc: Modélisation
date: 29/09/2023
---
> [!info]
> Encadré par **M. Boussidan**

# Exercice 1 - Type de données

> 1. Résultat d’un QCM sur 0 à 200, en entier.
> 2. Numéro de série d’un produit d’un catalogue d’un million de produits.
> 3. Température extérieure relevée à Paris (ex : -13.5°C, +38.3°C).
> 4. Température en chimie (ex : 453.125K, 3.57×10⁻⁷K).
> 5. Résumé d’un article, 5000 caractères max.
> 6. Nom d’une personne.
> 7. Code postal en France.
> 8. Adresse postale (numéro, voie, nom de rue).
> 9. Durée d’un saut à l’élastique en secondes.
> 10. Date et heure de naissance des résidents d’une maison de retraite.
> 11. Durée pour compléter un marathon (heures, minutes, secondes).
> 12. Image d’une affiche de film dans une base de données de cinéma.

## Question 1

> Résultat d’un QCM sur 0 à 200, en entier.

`int` ou `int(8)` ou encore `numeric(3)`

## Question 2

> Numéro de série d’un produit d’un catalogue d’un million de produits.

- `varchar(7)` $\to$ 7 caractères max.
	- Autoriserait des chiffres et des lettres
- `serial`
	- pas idéal car automatique or on veut des références de produit
- `int` - Solution la plus simple


## Question 3

> Température extérieure relevée à Paris (ex : -13.5°C, +38.3°C).

- `numeric(3,1)` - ne permet pas les températures négatives
- `float` - précision double. Sur $p$ bits
- `real` 

## Question 4

> Température en chimie (ex : 453.125K, 3.57×10⁻⁷K).

- `double` - flottant
- `numeric` - précision arbitraire
	- `numeric(12,6)`

## Question 5

> Résumé d’un article, 5000 caractères max.

- `varchar(5000)`
	- mieux pour limiter à 5000 caractères

## Question 6

> Nom d’une personne.

- `varchar(260)`
	- par exemple

## Question 7

> Code postal en France.

- `char(5)`
	- Codes types `ZA064` pour la corse, on a besoin des lettres

## Question 8

> Adresse postale (numéro, voie, nom de rue).

- `varchar(200)`
	- circonstanciel, selon les cas

## Question 9

> Durée d’un saut à l’élastique en secondes.

- `interval` : permet de représenter une durée

## Question 10

> Date et heure de naissance des résidents d’une maison de retraite.

- `timestamp` - horaire précis
	- with timezone ? si besoin

## Question 11

> Durée pour compléter un marathon (heures, minutes, secondes).

Durée d'un marathon, `interval`

## Question 12

> Image d’une affiche de film dans une base de données de cinéma.

 `bytea` si on veut stocker l'image.

> [!tips]
> En général, on stockera des URL pointant vers l'image. (avec un `vachar`)

# Exercice 2 - 





