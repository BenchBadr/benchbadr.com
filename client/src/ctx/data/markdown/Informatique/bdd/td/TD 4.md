---
lang: fr
date: 06/10/2025
desc: Révisions SQL
---
> [!info]
> TD encadré par M. Boussidan

On considère pour toute la suite du TD le schéma relationnel suivant:
```
personne(*surnom, nom, renom, age, taille)
soiree(*idS, lieu, date, prix , organisateur, nbmax)
participe(*[idS, surnom], avatar)
FK : organisateur dans soiree et surnom dans participe font reference a surnom dans personne.
FK : ids dans participe fait reference a ids dans soiree
```

# Exercice 1

> 1.  Les soirées organisées dans une ville dont le nom commence par **'Na'**.
> 2.  Les villes où sont organisées des soirées pouvant accueillir **au moins 500 personnes**.
> 3.  La liste des personnes de **moins de 165 cm** qui se sont déguisées au moins une fois en **petit chaperon rouge**.
> 4.  La liste des **prénoms** des personnes déguisées en **Père Noël** dans une soirée à **Paris**.
> 5.  Les soirées dont le lieu n'a **pas encore été fixé**.
> 6.  La liste des personnes qui ont déjà porté un déguisement de **princesse Leia** **et** un déguisement de **citrouille**.
> 7.  La liste des soirées dont l'organisateur a déjà porté un déguisement d'**alien**.
> 8.  La liste des personnes qui **ne se sont jamais déguisées** en **princesse Leia**.
> 9.  La liste des soirées auxquelles participent **deux personnes du même nom**.

## Question 1

> Les soirées organisées dans une ville dont le nom commence par **'Na'**.

```sql
SELECT * FROM
soiree WHERE
lieu LIKE 'Na%';
```

## Question 2

>  Les villes où sont organisées des soirées pouvant accueillir **au moins 500 personnes**.

```sql
SELECT DISTINCT lieu FROM
soiree WHERE
nbmax >= 500;
```

## Question 3

> La liste des personnes de **moins de 165 cm** qui se sont déguisées au moins une fois en **petit chaperon rouge**.

```sql
SELECT DISTINCT(nom, prenom)
FROM personne NATURAL JOIN
WHERE taille <= 165
AND avatar = 'Petit Chaperon';
```

## Question 4

> La liste des prénoms de personnes déguisées en Père Noël dans une soirée à Paris

```sql
SELECT DISTINCT prenom
FROM personne
JOIN participe ON personne.surnom = participe.surnom
JOIN soiree ON soiree.idS = participe.idS
WHERE avtr = 'Père Noël'
AND lieu = 'Paris';
```

## Question 5

>  Les soirées dont le lieu n'a **pas encore été fixé**.

```sql
SELECT * FROM soiree
WHERE lieu is NULL;
```

## Question 6

> La liste des personnes qui ont déjà porté un déguisement de **princesse Leia** **et** un déguisement de **citrouille**.

```sql
SELECT DISTINCT p1.surnom FROM participe as p1, participe as p2
WHERE p1.avatar = 'Leia' AND p2.avatar = 'citrouille'
AND p1.surnom = p2.surnom;
```

Solution plus simple

```sql
SELECT p.prenom, p.surnom FROM personne p WHERE
p.surnom IN (
	SELECT surnom FROM participe where avatar = 'Princesse Leia'
	INTERSECT
	SELECT surnom FROM participe where lower(avatar) LIKE '%citrouille%'
)
```

## Question 7

>  La liste des soirées dont l'organisateur a déjà porté un déguisement d'**alien**.

```sql
SELECT DISTINCT idS FROM 
soiree WHERE 
JOIN participe pa ON pa.surnom = organisateur AND avatar = '%alien%';
```

## Question 8

> La liste des personnes qui **ne se sont jamais déguisées** en **princesse Leia**.


```sql
SELECT surnom FROM personne
EXCEPT
SELECT surnom FROM personne WHERE
surnom IN (
	SELECT surnom FROM participe where avatar = 'Princesse Leia'
	INTERSECT
	SELECT surnom FROM participe where lower(avatar) LIKE '%citrouille%'
);
```

## Question 9

> La liste des soirées auxquelles participent **deux personnes du même nom**.

> [!check]
> NJ = Natural join, ne fonctionne pas en code mais on accepte ce raccourci sur papier.

```sql
SELECT idS
FROM personne NJ participe, personne NJ participe
WHERE p1.ids = p2.ids
AND p1.nom = p2.nom
```


## Question 10

> La liste de tous les gens et des costumes qu'ils n'ont jamais porté.

