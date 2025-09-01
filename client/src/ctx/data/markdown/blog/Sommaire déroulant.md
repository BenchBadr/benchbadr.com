---
title: Sommaire déroulant
date: 30/07/2025
type: Concept
---

# Sommaire déroulant

Imaginez-vous tenant un magazine. Il y a de fortes chances qu'il se trouve à son début un sommaire et que vous y reveniez au fil de votre lecture pour situer votre "section active".  
  
Lorsqu'on lit un article en ligne, parfois on peut trouver une table des matières dynamique, à savoir qui vous indique la section courante avec un style différent (couleur, épaisseur...).  
  
Mais avoir une énorme table des matières affichée en permanence peut surcharger le lecteur d'informations.  
Ainsi, les sections sont souvent munies de petites flèches permettant de dérouler les sections et le font automatiquement pour la section active et ses parents (sections contenant cette dernière).  
  
Sauf qu'on s'y perd rapidement, ça devient assez vite contre-intuitif et particulièrement désagréable sur téléphone où il est compliqué d'appuyer sur les petites flèches sans toucher le titre (qui lui nous dirige vers la section). Certaines interfaces remédient à cela en ajoutant un bouton pour tout fermer ou tout ouvrir, mais ça reste particulièrement artificiel comme solution.  
  
J'ai donc décidé d'afficher le sommaire en son intégralité (toutes les sections dépliées) si et seulement si l'utilisateur est en tête de page (donc aucune section active) à la manière du magazine.  
Si vous voulez consulter le sommaire, il vous suffit de retourner au début de l'article et tout est déplié pour vous.  
  
J'ai supprimé les flèches pour déplier les sections les jugeant contre-intuitives.  
Lorsqu'une section active ses ascendants sont dépliés et ses descendants directs le sont aussi. Le groupe actif (contenu d'une section ascendante, contenant toutes les sections voisines de même ordre) est marqué par une bordure plus épaisse.  
  
Si vous voulez déplier une section spécifique sans afficher le sommaire en entier, il vous suffira de cliquer dessus. Cela vous y mènera et la dépliera pour vous (à la manière du magazine, quand feuilleté rapidement pour avoir un aperçu des sections ultérieures).  
  
Résultat: un design simple, intuitif et naturel.