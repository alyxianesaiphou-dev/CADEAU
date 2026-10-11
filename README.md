# Cadeau d'anniversaire

Un petit site surprise à offrir pour un anniversaire, fait en HTML, CSS et JavaScript, sans aucune bibliothèque.

## Le parcours

1. **Le code secret** : un clavier à six chiffres à côté d'un Polaroïd.
2. **La date** : elle s'affiche en grand et clignote, avec un feu d'artifice.
3. **Le chargement** : un gâteau pistache, une barre de progression et une pluie de cœurs.
4. **Le gâteau** : la lumière s'éteint, décompte 3, 2, 1, les bougies se soufflent, feu d'artifice.
5. **L'enveloppe** : on touche le sceau pour l'ouvrir.
6. **La lettre** : un papier déchiré avec une bande de trois photos.

## Lancer le site

Ouvrir `index.html` dans un navigateur. Dans VS Code, clic droit sur le fichier puis « Open with Live Server » pour que la page se recharge à chaque enregistrement.

La version de démonstration s'ouvre avec le code **010101**.

## Les fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | Le contenu des six écrans |
| `design.css` | L'apparence et les animations |
| `script.js` | Le code secret, l'enchaînement des écrans, la pluie de cœurs, le gâteau |
| `feux.js` | Le feu d'artifice |

## Personnaliser

### L'essentiel

| Quoi | Fichier | Où le trouver |
| --- | --- | --- |
| Le code secret | `script.js` | `const bonCode = "010101";` tout en haut. Six chiffres. |
| La date affichée | `index.html` | `<p class="date">01/01/01</p>` |
| La lettre | `index.html` | La boîte `papier` : le titre est dans `titre-lettre`, chaque `<p>` est un paragraphe, la fin est dans `signature`. Ajouter autant de `<p>` que nécessaire, le papier s'allonge tout seul. |
| La photo du Polaroïd | `design.css` | Dans `.photo`, remplacer les trois lignes `radial-gradient` par `background-image: url("maphoto.jpg");` |
| Les trois photos de la bande | `index.html` | Sur chaque `<div class="cliche">`, ajouter `style="background-image: url('photo1.jpg');"` |

Les photos se mettent dans le même dossier que `index.html`. Elles sont recadrées automatiquement pour remplir leur cadre.

### Les textes

Tous dans `index.html` :

| Texte actuel | Où |
| --- | --- |
| `Cadeau` (le nom de l'onglet) | `<title>` |
| `Entre le code` | `<h1>` |
| `Hi my love !` | classe `coucou` |
| `Ça arrive…` | classe `texte-chargement` |
| `Fais un vœu pour nous !` | classe `voeu` |
| `Souffle nos bougies` | classe `bouton-souffle` |
| `Je t'aime` (sur la carte de l'enveloppe) | classe `titre` |
| `pour toi` (sur la lettre qui sort de l'enveloppe) | classe `env-lettre` |
| `Touche le sceau pour ouvrir` | classe `indice` |

### Les durées

En JavaScript les durées sont en millisecondes : `5000` vaut 5 secondes.

| Quoi | Où |
| --- | --- |
| Temps d'affichage de la date et du premier feu d'artifice | `script.js`, dans `verifier` : `5000` |
| Durée du chargement | Deux endroits à garder identiques : `10s` dans `.remplissage` (`design.css`) et `10000` dans `verifier` (`script.js`) |
| Rythme du décompte et du gâteau | `script.js`, les `setTimeout` du clic sur `boutonSouffle` : `1500`, `2500`, `3500` pour 3, 2, 1, puis `4500` pour souffler, `5500` pour le feu d'artifice, `12000` pour passer à l'enveloppe |
| Attente après l'ouverture de l'enveloppe | `script.js`, dans le clic sur `sceau` : `1700` |
| Fondu entre deux écrans | `0.6s` dans `.sort` (`design.css`) et `600` dans `changer` (`script.js`), à garder identiques. L'apparition est réglée par `apparait 0.8s`. |

### Les couleurs

| Quoi | Où |
| --- | --- |
| Le rouge du fond | `design.css`, `background-color` de `body` |
| Les touches du clavier | `design.css`, le `radial-gradient` du bloc `button` |
| Le gâteau | `index.html`, les `fill` du dessin. Il existe en deux copies, une par écran (`gateau` et `grand-gateau`) : changer les deux. |
| Le fond de l'écran du gâteau | `design.css`, `.ecran-gateau` pour le rose et `.ecran-gateau.nuit` pour le noir |
| Le papier de la lettre | `design.css`, `background` de `.papier` |

### La pluie de cœurs

Dans `script.js` :

- `symboles` : les caractères qui tombent. Préférer des symboles texte aux émojis, qui ne prennent pas la couleur.
- `teintes` : leurs couleurs.
- `30` : le nombre de colonnes. Il apparaît deux fois, changer les deux.
- `20` : le nombre de cœurs par colonne.

Leur transparence se règle avec `opacity` dans `.colonne` (`design.css`).

### Le feu d'artifice

Dans `feux.js` :

- `couleurs` : la liste des couleurs.
- `60` : le nombre d'étincelles par explosion.
- `450` : le temps entre deux explosions, en millisecondes.
- `0.7` : la part de l'écran, en partant du haut, où les explosions apparaissent. `1` pour tout l'écran.
- `0.012` : la vitesse à laquelle les étincelles s'éteignent.

### Les polices

Elles viennent de Google Fonts, chargées dans le `<head>` de `index.html` : **Parisienne** pour les titres manuscrits et **Josefin Sans** pour les chiffres et les petits textes en majuscules. Pour en changer, modifier le lien et les `font-family` correspondants dans `design.css`.

## Avant de partager

- Garder dans ce dépôt la version de démonstration. La version personnalisée, avec la vraie date, la vraie lettre et les vraies photos, a sa place dans une copie à part ou dans un dépôt privé.
- Le code secret est écrit en clair dans `script.js`. N'importe qui peut le lire en affichant le code de la page : il sert à la surprise, pas à protéger quoi que ce soit.
