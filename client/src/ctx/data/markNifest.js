export const manifestData = {
    "/maths":[
        [
            "/suites",
            "/algebre"
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
            "/td-alg"
        ],
        {
            "icon": null,
            "child": true,
            "color": "green",
            "title": "algebre"
        }
    ],
    "/suites":[
        [
            "Ch1 - Nombres réels",
            "Ch2 - Suites et limites",
            "Ch3 - Limites de fonctions et continuité",
            "Ch4 - Dérivabilité",
            "Ch5 - Formule de Taylor et développement limité",
            "/td"
        ],
        {
            "icon": null,
            "child": true,
            "title": "suites"
        }
    ],
    "/blog":[
        [
            "DiaFox"
        ],
        {
            "icon": null,
            "color": "purple",
            "title": "blog"
        }
    ],
    "/td":[
        [
            "TD 1",
            "TD 2"
        ],
        {
            "icon":null,
            "child":true,
            "title":"TD"
        }
    ],
    "/td-alg":[
        [
            "TD 1",
            "TD 2"
        ],
        {
            "icon":null,
            "child":true,
            "title":"TD",
            "path":'td'
        }
    ]
}
