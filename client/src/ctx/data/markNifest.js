export const manifestData = {
    "/blog":[
        [
            "1 an de ChatGPT",
            "Carnets d'Anatolie",
            "DiaFox",
            "Sommaire déroulant",
            "AI, empowering or parasiting"
            // "Découverte des Pays-Bas"
        ],
        {
            "icon": null,
            "color": "purple",
            "title": "blog",
            "closed": true,
            "posts": true
        }
    ],
    "/maths":[
        [
            "/suites",
            "/algebre",
            "/integrales",
            "/algebre II",
            "/groupes"
        ],
        {
            "icon": null,
            "title": "maths"
        }
    ],
    "/algebre":[
        [
            "Ch0 - Systèmes",
            "Ch1 - Espaces vectoriels",
            "Ch2 - EV dim finie",
            "Ch3 - Application linéaires",
            "Ch4 - Calcul matriciel",
            "Ch5 - Matrices d'applications linéaires",
        ],
        {
            "icon": null,
            "child": true,
            "color": "green",
            "title": "Algèbre Linéaire"
        }
    ],
    "/suites":[
        [
            "Ch1 - Nombres réels",
            "Ch2 - Suites et limites",
            "Ch3 - Limites de fonctions et continuité",
            "Ch4 - Dérivabilité",
            "Ch5 - Formule de Taylor et développement limité",
        ],
        {
            "icon": null,
            "child": true,
            "title": "Suites & Fonctions"
        }
    ],
    "/integrales":[
        [
            "Ch1 - Relations de comparaisons",
            "Ch2 - Développements limités"
        ],
        {
            "icon": null,
            "child": true,
            "title": "Séries & Intégrales",
            "color": "pink"
        }
    ],
    "/informatique":[
        [
            "/langage C",
            "/bdd"
        ],
        {
            "icon":null,
            "child":false,
            "title":"informatique",
            "color":'green'
        }
    ],
    "/langage C":[
        [
            "Ch1 - Syntaxe de base"
        ],
        {
            "icon":null,
            "child":true,
            "title":"Langage C"
        }
    ],
    "/algebre II":[
        [
            "Ch1 - Déterminant"
        ],
        {
            "icon":null,
            "child":true,
            "title":'Algèbre Linéaire II'
        }
    ],
    "/bdd":[
        [
            "Ch1 - Modélisation & Syntaxe"
        ],
        {
            "icon":null,
            "child":true,
            "title":'Base de données'
        }
    ],
    "/groupes":[
        [
            "Ch1 - Nombres entiers et divisibilité",
            "Ch2 - Groupes"
        ],
        {
            "icon":null,
            "child":true,
            "title":'Groupes et arithmétique'
        }
    ],
}
