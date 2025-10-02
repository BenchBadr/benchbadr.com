
# I - Introduction

Une association de découverte et protection de l'environnement, **hébergée** par une **université** propose à ses adhérents des sorties thématiques sur la faune et la flore locale et les milieux naturels. 

> Le but de ce projet est de proposer une base de données et un site web afin d'une part, permettre un accès généralisé aux activités proposées, d'autre part simplifier la gestion et création de nouvelles activités.

Dans le cadre de notre modélisation seront utilisés des diagrammes MCD (Modèle conceptuel de données). Nous utiliserons dans la suite de ce projet le site [Modoco](https://mocodo.net/ )&[^mocodo] afin de générer les visuels.

## 1. Informations

On dispose des informations suivantes au sujet de la modélisation. On notera sous forme de liste leurs différents attributs ainsi qu'une rapide description.
- **adhérents**
	- nom
	- prénom
	- coordonnées
		- diverse
	- statut
		- étudiant / membre du personnel...
	- moyen de paiement
		- espèce / chèque
	- date de paiement
	- rôle
		- permet de savoir si un adhérent donné est spécialiste dans l'un ou plusieurs des domaines liés à l'association comme l'ornithologie, la photographie ou la botanique.


De nombreuses sorties thématiques sont proposés aux adhérents.

- **sorties**
	- thème
		- les rapaces, les plantes, les insectes du milieu aquatique, comment installer un nichoir...
	- lieu
	- date
	- distance
		- nombre de km à parcourir
	- effectif maximal
	- liste des inscrits
	- le ou les animateurs

> [!check]
> Un adhérent peut s'inscrire à autant de sorties qu'il ne désire et naturellement ne peut s'inscrire à une sortie passée ou dont l'effectif maximal est atteint.

Une des premières activités de l'association a été de répertorier les principales espèces locales de plantes et d'animaux. L'association propose ainsi diverses informations d'ordre général sur les espèce et leur donne des outils pour reconnaître les espèces observées lors des sorties. 

Les adhérents peuvent consulter une application leur permettant d'identifier les espèces (Héron cendré, Faucon crécerelle) à partir de caractéristiques indiquées (taille, couleurs, forme des ailes, vols...).

- **Espèces locales**
	- Espèce
	- Taille
	- Couleur
	- Forme des ailes
	- Vols....

Des nichoirs de différents types ont été posés en différents points pour favoriser la nidification des oiseaux. 
Les adhérents prennent en note certaines informations come les périodes de nidification, le nombre et type d'occupants, le nombre d'œufs...

- **les nichoirs**
	- date d'installation
	- lieu d'installation
	- coordonnées
	- hauteur
	- support
	- type d'environnement
	- période de nidification
	- type d'occupants
	- nombre d'œufs
	- ...

[^1]:https://mocodo.net/ 

## 1. Objectifs

Dans cette section nous aborderons les différents objectifs 


```python
print("Hello world")
```