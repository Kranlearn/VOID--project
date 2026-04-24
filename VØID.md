# VØID — Timepieces 🕐


Une landing page haut de gamme pour une marque de montres fictive mais ambitieuses — construite en HTML, CSS et JavaScript pur. 
Design minimaliste, élégant et entièrement responsive.

---
## Description du projet
---
"Landing pour une marque fictif de montre minimalistes mais pro"
-Mon choix se porte sur un style élégant, sophistiquer au style original
-Les choix sont un style serif pour affirmer cette élégance.

---
## Aperçu

- Montre CSS animée affichant l'heure en temps réel
- Carousel de produits avec navigation précédent / suivant
- Animations au scroll avec IntersectionObserver
- Formulaire de réservation fonctionnel
- Design responsive mobile
- Typographie haut de gamme — Playfair Display + DM Sans

---

## Stack technique

- **HTML** — structure sémantique propre
- **CSS** — variables, animations, responsive
- **JavaScript** — vanilla, aucun framework
- **Fonts** — Google Fonts (Playfair Display, DM Sans)

---

## Structure du projet

```
void-watch/
├── index.html    ← Structure HTML
├── style.css     ← Styles et animations
└── script.js     ← Logique et interactions
```

---

## Fonctionnalités détaillées

### ⌚ Montre en temps réel
La montre est entièrement dessinée en CSS. JavaScript récupère l'heure actuelle avec `new Date()` et calcule l'angle de rotation de chaque aiguille. La trotteuse se met à jour chaque seconde via `setInterval`.

### 🎠 Carousel produits
Un index `currentSlide` garde en mémoire la carte visible. Les boutons précédent/suivant appellent une fonction qui retire la classe `active` de la carte actuelle et l'ajoute à la suivante. Les dots de navigation se synchronisent automatiquement.

### 👁️ Scroll Reveal
Utilisation de l'`IntersectionObserver` — une API native du navigateur qui détecte quand un élément entre dans le champ de vision. Quand c'est le cas, une classe `visible` est ajoutée et déclenche une animation CSS.

### 📋 Formulaire de réservation
Validation des champs en JavaScript pur — nom, email et modèle obligatoires. Confirmation personnalisée affichée après soumission.

---

## Lancer le projet

Aucune dépendance, aucune installation requise.

```bash


```


## Choix techniques

**Pourquoi pas React ou Vue ?**
Pour une landing page statique, HTML/CSS/JS pur est plus rapide à charger, plus simple à déployer, et suffisant. Le bon outil pour le bon besoin.

**Pourquoi Playfair Display ?**
Cette serif élégante donne un caractère luxueux et intemporel — parfaitement cohérent avec l'univers d'une montre haut de gamme.

---

## Auteur

**Christophe** — Développeur Fullstack
Stack : HTML · CSS · JavaScript · Node.js · Python · SQL · Linux

---

> Projet réalisé dans le cadre de mon portfolio — orienté design et intégration web.
