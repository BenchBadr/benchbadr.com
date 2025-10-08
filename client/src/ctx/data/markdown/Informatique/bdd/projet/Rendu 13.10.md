## Explication des choix

Dans cette section, nous expliquerons nos différents choix de créations de table selon les données requises et à prévoir. À noter qu'il y aura ambiguïté entre table entité en prévision de l'implémentation en code. Les associations et cardinalités seront quant à elles détaillées dans la section suivante dans le schéma. Les tables mentionnées ici sont celles sujettes à justifications.
### La table `profil`

> [!tips]
> Pourquoi une table profil distincte de la table adhérent ?

D'après l'énoncé, des animateurs peuvent être des adhérents ou des personnes extérieures à l'association. 
- Cela introduit une redondance si l'on décide de créer une table comme suit: `adhérent(*num, prenom, nom, date\_naissance, adresse)`, en effet un adhérent peut quitter l'association et éventuellement devenir animateur, sans contre-indication il nous faut traiter cela comme une éventualité de fait, créer une table profile qui elle pourra décrire l'ensemble des personnes impliquées, qu'elles soient adhérentes ou non. 
Puisqu'on a besoin d'un numéro d'adhérent, celui-ci se retrouvera dans une table dédié `adhérent`. 
- Elle servira à stocker toutes les données relatives aux membres, 
	- les associations avec leurs inscriptions successives aux sorties
	- le mode de paiement utilisé et date éventuelle
	- Un numéro d'adhérent unique
	- Un identifiant de statut (détaillé la partie suivante)
Et, on disposera d'une table plus générale, s'associant dans une moindre mesure aux adhérents pour éviter la redondance comme suit:
- On a donc besoin d'une table `profil(*numero, prenom, nom, date_naissance, adresse)`

Ainsi, on peut avoir des profils non-adhérent en prévision de la contrainte selon laquelle un animateur n'est pas forcément adhérent.

### Stockage des coordonnées

> [!info]
> Des coordonnées... diverses?
 
 Par ailleurs, une question subsiste qui est celle du stockage des coordonnées, leur type n'étant pas renseigné et leur aspect divers étant mis en exergue dans l'énoncé. 
 On crée une table permettant de stocker individuellement toute coordonnée selon un numéro d'adhérent et un type associé. 

- Et `coordonnées(#numero, type_coord, value)`
	- Avec `type_coord` un type de données facile à interpréter, permettant donc la diversité sus-mentionnée.
	- Par exemple, on pourrait avoir 
		- `290620, 'tel', '061413490'`
		- `290620, 'mail', test@gmail.com`
		- Et on peut imaginer des types additionnels comme suit:
			- `290620, 'discord', @benchbadr`
	- Les données quant à elles seront des chaînes de caractères car c'est le format le plus flexible et convenant à tous les types.


### Gestion des statuts

> [!warn]
> Des prix de statuts, des statut d'adhérent... que faire?

Traitons maintenant la question du statut. 
- On sait qu'un adhérent a un statut donné (étudiant / membre du personnel...) et selon son statut paye un tarif différent.
- Stocker directement un attribut `statut` dans `profil` crée de nouveau de la redondance puisqu'on stocke répétitivement une même chaîne de caractère d'autant plus que l'on doit pouvoir stocker le prix quelque part.
- Et cela implique que devoir renommer un statut serait coûteux et peu viable

On crée donc une table `statut` permettant de stocker le prix, le libellé et l'identifiant de chaque statut.
- En effet, si un statut donné change de nom, cela impliquerait une modification de chaque instance pour chaque personne ayant le ztatut ce qui n'est pas du tout optimal.
- On décide donc de stocker l'association avec un `id`, permettant à tout moment de changer le nom d'un statut donné ou son prix avec une complexité constante.

Ensuite, tout adhérent se voit attribuer l'identifiant de son statut associé. Par exemple `3` désignerait le statut d'étudiant.


---
## Schéma




![Premier schéma illustratif](assets/mcd.png)

