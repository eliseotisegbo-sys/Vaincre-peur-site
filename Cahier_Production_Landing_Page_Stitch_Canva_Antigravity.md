# CAHIER DE PRODUCTION --- LANDING PAGE PREMIUM

## Design UI/UX + Assets visuels + Motion design + Vidéo publicitaire

### Workflow : Stitch → Canva → Antigravity

**Version :** 1.0\
**Objectif :** produire une page web professionnelle, claire,
attractive, réaliste et prête à convertir, avec un système cohérent de
design, d'images, de vidéos et d'animations.

------------------------------------------------------------------------

# 1. VISION GÉNÉRALE

La page ne doit pas être conçue comme une simple succession de blocs
décoratifs.

Elle doit raconter une histoire visuelle :

**Problème → Compréhension → Solution → Preuve → Fonctionnement →
Réassurance → Action**

Chaque section doit répondre à une question précise de l'utilisateur.

### Principe directeur

> **Information → Compréhension → Décision → Action**

Le visiteur doit toujours comprendre : 1. Où il est. 2. Ce que le
produit/service lui apporte. 3. Pourquoi cela répond à son problème. 4.
Comment cela fonctionne. 5. Ce qu'il doit faire ensuite.

------------------------------------------------------------------------

# 2. OBJECTIFS DE LA PAGE

La page doit :

-   donner une impression professionnelle dès les premières secondes ;
-   expliquer rapidement la proposition de valeur ;
-   utiliser des visuels concrets plutôt que des illustrations
    génériques ;
-   montrer le produit dans son contexte réel ;
-   utiliser la vidéo pour démontrer, pas seulement décorer ;
-   utiliser le motion design pour guider le regard ;
-   conserver une hiérarchie visuelle forte ;
-   être parfaitement lisible sur mobile ;
-   être rapide malgré les médias ;
-   permettre une intégration propre dans le code ;
-   être facilement maintenable par Antigravity.

------------------------------------------------------------------------

# 3. RÔLE DE CHAQUE OUTIL

## 3.1 Stitch --- conception UI/UX

Stitch sert de **laboratoire de conception**.

Il doit servir à :

-   définir la structure de la page ;
-   produire les écrans haute fidélité ;
-   tester plusieurs variantes de hero ;
-   tester les espacements ;
-   construire les parcours ;
-   relier les écrans en prototype ;
-   vérifier la cohérence mobile/desktop ;
-   définir les règles du design system ;
-   préparer le passage vers le développement.

Stitch permet également de transformer des idées textuelles en
interfaces haute fidélité et de prototyper les parcours en reliant les
écrans.

### Livrable Stitch

À la fin de cette phase, il faut avoir :

-   Desktop homepage ;
-   Mobile homepage ;
-   Hero ;
-   Sections principales ;
-   États interactifs importants ;
-   Navigation ;
-   CTA ;
-   composants réutilisables ;
-   design system ;
-   prototype navigable ;
-   règles visuelles ;
-   `DESIGN.md` si utilisé dans le workflow.

------------------------------------------------------------------------

# 4. WORKFLOW STITCH

## Étape 1 --- Définir le contexte

Avant de générer l'interface, donner à Stitch :

-   nom du projet ;
-   public cible ;
-   problème ;
-   proposition de valeur ;
-   fonctionnalités ;
-   objectif commercial ;
-   ton ;
-   couleurs ;
-   contraintes ;
-   références visuelles ;
-   composants indispensables.

### Prompt maître Stitch

``` text
Conçois l’interface haute fidélité d’une landing page SaaS premium.

Objectif :
faire comprendre la valeur du produit en moins de 10 secondes et conduire
l’utilisateur vers une action principale.

Principes :
- design moderne et professionnel ;
- forte hiérarchie visuelle ;
- beaucoup d’espace respirable ;
- aucun effet décoratif inutile ;
- visuels réalistes ;
- interface crédible ;
- priorité mobile ;
- CTA très visibles ;
- animations pensées dès la conception ;
- accessibilité ;
- responsive desktop/tablette/mobile.

Structure :
1. Navigation
2. Hero
3. Preuve ou bénéfice principal
4. Problème
5. Solution
6. Démonstration visuelle
7. Fonctionnement en 3 étapes
8. Fonctionnalités
9. Preuves / réassurance
10. FAQ
11. CTA final
12. Footer

Crée une hiérarchie visuelle forte et transforme chaque section en
composant réutilisable.
```

------------------------------------------------------------------------

# 5. DESIGN SYSTEM STITCH

Créer un système avant de multiplier les écrans.

## Couleurs

Créer les tokens :

``` text
--color-primary
--color-primary-dark
--color-primary-light
--color-background
--color-surface
--color-surface-muted
--color-text
--color-text-muted
--color-border
--color-success
--color-warning
--color-error
```

Ne pas utiliser une couleur uniquement parce qu'elle est esthétique.

Chaque couleur doit avoir une fonction.

### Exemple

-   primaire = action principale ;
-   fond = respiration ;
-   texte = lecture ;
-   accent = information importante ;
-   succès = confirmation ;
-   erreur = problème ;
-   border = séparation légère.

------------------------------------------------------------------------

# 6. TYPOGRAPHIE

Définir :

``` text
Display
H1
H2
H3
Body Large
Body
Body Small
Caption
Button
Navigation
```

Règles :

-   H1 très lisible ;
-   paragraphes courts ;
-   lignes de texte limitées ;
-   contraste élevé ;
-   CTA facilement identifiable ;
-   jamais de paragraphes énormes dans le hero.

------------------------------------------------------------------------

# 7. GRILLE ET ESPACEMENT

Définir :

``` text
4px
8px
12px
16px
24px
32px
48px
64px
80px
96px
120px
```

La page doit utiliser une logique cohérente.

Éviter les espacements arbitraires section par section.

------------------------------------------------------------------------

# 8. ARCHITECTURE DE LA LANDING PAGE

## SECTION 01 --- NAVIGATION

### Objectif

Permettre de comprendre immédiatement :

-   marque ;
-   produit ;
-   navigation ;
-   action principale.

### Contenu

-   logo ;
-   navigation courte ;
-   CTA principal ;
-   menu mobile.

### Motion

Au chargement :

-   apparition légère ;
-   aucun effet spectaculaire.

Au scroll :

-   navbar sticky ;
-   réduction légère de hauteur ;
-   ombre/border discret.

------------------------------------------------------------------------

# 9. SECTION 02 --- HERO

Le hero est le bloc le plus important.

## Composition

### Colonne gauche

-   badge éventuel ;
-   H1 ;
-   sous-titre ;
-   CTA principal ;
-   CTA secondaire éventuel ;
-   micro-réassurance.

### Colonne droite

Un visuel principal.

Priorité :

1.  vraie interface ;
2.  capture produit ;
3.  vidéo courte ;
4.  scène réaliste montrant l'utilisation.

Éviter :

-   illustration générique ;
-   personnage IA sans contexte ;
-   écran fictif ;
-   mockup impossible à utiliser.

------------------------------------------------------------------------

# 10. HERO --- MOTION DESIGN

Durée recommandée de l'animation initiale :

**1 à 2 secondes.**

Séquence :

``` text
0.00s → fond
0.10s → badge
0.20s → H1
0.35s → sous-titre
0.50s → CTA
0.65s → visuel
```

Les éléments ne doivent pas tous arriver simultanément.

### Règle

Le mouvement doit attirer l'attention vers :

**H1 → bénéfice → CTA → démonstration**

------------------------------------------------------------------------

# 11. SECTION 03 --- PROBLÈME

Le visiteur doit reconnaître sa situation.

### Structure

Titre :

> Vous perdez du temps parce que...

Puis 3 problèmes maximum.

Chaque problème :

-   icône simple ;
-   phrase courte ;
-   conséquence concrète.

### Motion

Les cartes apparaissent une par une au scroll.

Pas de rotation 3D.

Pas de bouncing excessif.

------------------------------------------------------------------------

# 12. SECTION 04 --- SOLUTION

Cette section doit expliquer :

> Voici comment le produit transforme la situation.

Utiliser :

-   capture réelle ;
-   animation de curseur ;
-   surbrillance ;
-   zoom contrôlé ;
-   transition entre états.

------------------------------------------------------------------------

# 13. SECTION 05 --- DÉMONSTRATION

C'est la section la plus importante après le hero.

## Format recommandé

Vidéo courte ou animation d'interface :

``` text
État initial
↓
Action utilisateur
↓
Transformation
↓
Résultat
```

### Exemple

``` text
Utilisateur arrive
↓
choisit une action
↓
le système traite
↓
résultat visible
```

La démonstration doit être compréhensible sans audio.

------------------------------------------------------------------------

# 14. VIDÉO PRINCIPALE DE LA PAGE

## Format

Desktop : 16:9 ou 4:3 selon emplacement.

Mobile : 9:16 pour les contenus plein écran.

Hero : vidéo courte de 5 à 12 secondes.

Démonstration : 10 à 30 secondes.

Publicité : 15 à 45 secondes.

------------------------------------------------------------------------

# 15. RÈGLES DE RÉALISME POUR LES VISUELS

Tous les visuels générés doivent paraître crédibles.

### À rechercher

-   lumière naturelle ;
-   textures réalistes ;
-   proportions humaines correctes ;
-   profondeur cohérente ;
-   matériaux crédibles ;
-   environnement plausible ;
-   appareils réalistes ;
-   ombres naturelles ;
-   imperfections légères.

### À éviter

-   peau plastique ;
-   mains déformées ;
-   écrans illisibles ;
-   texte généré approximatif ;
-   interfaces inventées ;
-   logos faux ;
-   lumière excessive ;
-   glow ;
-   esthétique « image IA ».

------------------------------------------------------------------------

# 16. CANVA --- PRODUCTION DES IMAGES

Canva doit servir à créer les assets marketing et visuels qui seront
réellement utilisés sur la page.

## Assets à produire

### A. Hero

-   image principale ;
-   variante mobile ;
-   arrière-plan ;
-   mockup ;
-   visuel de démonstration.

### B. Sections

-   3 à 6 images réalistes ;
-   illustrations secondaires si nécessaires ;
-   images de contexte ;
-   visuels de preuve.

### C. Social proof

-   avatars uniquement s'ils sont autorisés/réels ;
-   captures réelles ;
-   logos autorisés.

### D. Vidéo

-   publicité ;
-   teaser ;
-   démonstration ;
-   vidéo verticale ;
-   vidéo horizontale.

------------------------------------------------------------------------

# 17. PROMPT CANVA --- IMAGE HERO

``` text
Créer un visuel premium, réaliste et professionnel pour une landing page SaaS.

Sujet :
un utilisateur réel dans un environnement professionnel moderne utilisant
le produit présenté.

Style :
photographie réaliste haut de gamme, lumière naturelle, profondeur réaliste,
composition éditoriale, matériaux crédibles, peau naturelle, détails fins.

Composition :
laisser une zone négative importante pour le texte,
sujet placé sur le côté droit,
regard et mouvement orientés vers le contenu principal.

Ne pas ajouter :
texte généré, logo inventé, watermark, interface fictive,
éléments futuristes inutiles, glow excessif, esthétique CGI.
```

------------------------------------------------------------------------

# 18. CANVA --- IMAGES PAR SECTION

## Section problème

Créer des scènes réalistes représentant :

-   surcharge ;
-   désorganisation ;
-   perte de temps ;
-   difficulté opérationnelle.

## Section solution

Créer :

-   utilisateur concentré ;
-   interface sur ordinateur ;
-   smartphone ;
-   environnement professionnel ;
-   interaction naturelle.

## Section résultat

Créer :

-   situation organisée ;
-   utilisateur satisfait sans exagération ;
-   environnement propre ;
-   résultat concret.

------------------------------------------------------------------------

# 19. SYSTÈME DE FICHIERS DES ASSETS

Créer cette structure :

``` text
/public
  /images
    /hero
    /problem
    /solution
    /features
    /proof
    /team
  /video
    /hero
    /demo
    /ads
    /background
  /icons
  /logos
  /screens
  /fonts
```

Nommer les fichiers :

``` text
hero-desktop.webp
hero-mobile.webp
problem-01.webp
problem-02.webp
problem-03.webp
solution-main.webp
feature-01.webp
feature-02.webp
demo-main.mp4
ad-vertical-01.mp4
hero-motion.mp4
```

------------------------------------------------------------------------

# 20. OPTIMISATION DES ASSETS

Avant intégration :

-   WebP/AVIF pour images ;
-   MP4/WebM pour vidéos ;
-   compression ;
-   dimensions adaptées ;
-   lazy loading hors hero ;
-   poster image pour vidéo ;
-   `preload="metadata"` lorsque nécessaire ;
-   pas de vidéo lourde en arrière-plan mobile sans stratégie.

------------------------------------------------------------------------

# 21. CANVA --- VIDÉO PUBLICITAIRE

## Objectif

Créer une publicité qui ressemble à une vraie création professionnelle
et non à une présentation de produit artificielle.

## Structure

``` text
HOOK
↓
PROBLÈME
↓
SOLUTION
↓
DÉMONSTRATION
↓
PREUVE
↓
CTA
```

------------------------------------------------------------------------

# 22. PUBLICITÉ --- TIMELINE 30 À 45 SECONDES

### 0--3 secondes

HOOK.

Image forte + mouvement caméra léger.

Texte :

**Le problème n'est peut-être pas celui que tu crois.**

Adapter la phrase au produit réel.

### 3--10 secondes

Montrer le problème.

Utiliser une scène réaliste.

### 10--20 secondes

Présenter la solution.

Montrer l'interface réelle.

### 20--32 secondes

Démonstration.

Montrer :

``` text
Action
→ transformation
→ résultat
```

### 32--40 secondes

Bénéfice principal.

### 40--45 secondes

CTA très lisible.

------------------------------------------------------------------------

# 23. MOTION DESIGN PUBLICITAIRE

### Mouvement caméra

Très léger :

-   push-in ;
-   pan ;
-   slide ;
-   rack focus simulé avec parcimonie.

### Interface

Utiliser :

-   zoom ;
-   highlight ;
-   curseur ;
-   apparition progressive ;
-   déplacement de cartes ;
-   changement d'état.

### Texte

Animations :

-   fade + translate ;
-   mask reveal ;
-   word-by-word seulement pour un hook ;
-   aucun effet type PowerPoint.

------------------------------------------------------------------------

# 24. AUDIO PUBLICITAIRE

Voix :

-   naturelle ;
-   articulation claire ;
-   rythme conversationnel ;
-   respiration légère ;
-   aucune voix robotique.

Musique :

-   instrumentale ;
-   discrète ;
-   volume inférieur à la voix ;
-   montée légère avant CTA.

SFX :

-   clic ;
-   confirmation ;
-   transition légère.

Ne jamais laisser les effets audio dominer la voix.

------------------------------------------------------------------------

# 25. SOUS-TITRES

Les vidéos sociales doivent être compréhensibles sans son.

Style :

-   police simple ;
-   contraste élevé ;
-   1 à 2 lignes maximum ;
-   mots importants éventuellement accentués ;
-   position basse mais hors zone des boutons de plateforme.

------------------------------------------------------------------------

# 26. STITCH → ANTIGRAVITY

Le transfert doit être considéré comme un passage :

**Design → Système → Code → Vérification**

## Dans Stitch

Préparer :

-   écrans ;
-   composants ;
-   couleurs ;
-   typographie ;
-   espacements ;
-   états ;
-   responsive ;
-   interactions.

## Puis exporter vers Antigravity

Stitch peut servir de pont vers les outils de développement, notamment
Antigravity.

------------------------------------------------------------------------

# 27. DESIGN.MD

Créer un fichier :

``` text
DESIGN.md
```

Il doit contenir :

``` text
# Design System

## Brand
Nom :
Positionnement :
Ton :

## Colors
Primary :
Secondary :
Background :
Surface :
Text :
Muted :

## Typography
Heading :
Body :
Button :

## Spacing
4
8
12
16
24
32
48
64
80
96

## Radius
Small :
Medium :
Large :

## Shadows
Soft :
Medium :

## Components
Button
Card
Navbar
Hero
Input
Modal
Toast
Badge

## Motion
Duration :
Easing :
Hover :
Entrance :
Scroll :

## Accessibility
Contrast :
Focus :
Keyboard :
Reduced motion :
```

Stitch dispose désormais d'un format `DESIGN.md` permettant de partager
les règles visuelles entre projets et outils.

------------------------------------------------------------------------

# 28. ANTIGRAVITY --- RÔLE

Antigravity devient le **centre d'exécution technique**.

Il doit gérer :

-   architecture ;
-   code ;
-   intégration du design ;
-   intégration des assets ;
-   responsive ;
-   animations ;
-   composants ;
-   tests ;
-   navigateur ;
-   correction des bugs ;
-   vérification visuelle.

Antigravity fonctionne avec des agents capables d'agir sur l'éditeur, le
terminal et le navigateur et de produire des artifacts de vérification.

------------------------------------------------------------------------

# 29. ANTIGRAVITY --- PROMPT INITIAL

``` text
Tu es l'agent principal de développement frontend.

Ta mission est de transformer le design fourni dans Stitch en une landing page
production-ready.

OBJECTIFS :
- fidélité au design ;
- responsive mobile-first ;
- performance ;
- accessibilité ;
- SEO ;
- animations sobres ;
- composants réutilisables ;
- code maintenable.

AVANT DE CODER :
1. Analyse le repository.
2. Identifie le framework.
3. Identifie les conventions existantes.
4. Analyse les assets.
5. Analyse DESIGN.md.
6. Compare le design Stitch avec le code existant.
7. Crée un plan d'implémentation.

NE MODIFIE PAS :
- les fonctionnalités backend existantes ;
- les API existantes ;
- les variables d'environnement ;
- les routes critiques sans justification.

APRÈS IMPLEMENTATION :
1. Lance le projet.
2. Vérifie le navigateur.
3. Teste desktop.
4. Teste mobile.
5. Vérifie les animations.
6. Vérifie les CTA.
7. Vérifie les images.
8. Vérifie les vidéos.
9. Corrige les problèmes.
10. Fournis un walkthrough final.
```

------------------------------------------------------------------------

# 30. ANTIGRAVITY --- AGENTS SPÉCIALISÉS

Utiliser plusieurs agents lorsque le projet devient important.

## Agent 1 --- UX

Mission :

-   vérifier hiérarchie ;
-   parcours ;
-   CTA ;
-   responsive.

## Agent 2 --- Frontend

Mission :

-   composants ;
-   CSS ;
-   intégration.

## Agent 3 --- Motion

Mission :

-   animations ;
-   scroll ;
-   micro-interactions.

## Agent 4 --- QA

Mission :

-   tests ;
-   responsive ;
-   bugs ;
-   accessibilité.

## Agent 5 --- Performance

Mission :

-   poids images ;
-   vidéos ;
-   Core Web Vitals ;
-   chargement.

------------------------------------------------------------------------

# 31. MOTION DESIGN DANS ANTIGRAVITY

Créer un système plutôt que des animations isolées.

## Tokens

``` text
--motion-fast: 150ms
--motion-normal: 300ms
--motion-slow: 600ms

--ease-standard:
--ease-emphasized:
--ease-enter:
```

### Types

#### Entrance

Fade + translate.

#### Hover

Scale maximum très faible.

#### Scroll

Reveal progressif.

#### CTA

Micro-interaction.

#### Video

Play/pause selon visibilité.

------------------------------------------------------------------------

# 32. RÈGLE DE MOTION

Chaque animation doit avoir une fonction.

### Elle peut :

-   attirer l'attention ;
-   montrer une relation ;
-   indiquer une action ;
-   confirmer une action ;
-   raconter une transformation.

### Elle ne doit pas :

-   ralentir la lecture ;
-   distraire ;
-   faire « gadget » ;
-   provoquer une surcharge visuelle.

------------------------------------------------------------------------

# 33. MICRO-INTERACTIONS

Prévoir :

### Bouton

Normal → Hover → Active → Disabled.

### Carte

Normal → Hover → Focus.

### FAQ

Fermée → Ouverture → Contenu → Fermeture.

### Navigation

Top → Sticky.

### Vidéo

Poster → Play → Pause → Replay.

------------------------------------------------------------------------

# 34. SECTION FAQ

Utiliser des accordéons.

Animation :

``` text
height: 0
opacity: 0
↓
height: auto
opacity: 1
```

Durée :

250--350 ms.

Respecter :

-   clavier ;
-   focus ;
-   aria-expanded ;
-   aria-controls.

------------------------------------------------------------------------

# 35. RESPONSIVE

## Mobile

Priorité absolue.

Tester :

-   320 px ;
-   360 px ;
-   390 px ;
-   430 px.

## Desktop

Tester :

-   1280 px ;
-   1440 px ;
-   1920 px.

------------------------------------------------------------------------

# 36. VIDÉO DANS LA PAGE

## Hero

Vidéo courte.

Conditions :

-   autoplay seulement si muted ;
-   poster ;
-   fallback image ;
-   pause lorsque hors écran ;
-   version mobile adaptée.

## Section démonstration

Vidéo contrôlée.

Afficher :

-   play ;
-   pause ;
-   replay ;
-   progression.

------------------------------------------------------------------------

# 37. PERFORMANCE

Priorités :

1.  contenu visible immédiatement ;
2.  image hero optimisée ;
3.  vidéo non bloquante ;
4.  lazy loading ;
5.  compression ;
6.  dimensions explicites ;
7.  éviter les bibliothèques inutiles.

------------------------------------------------------------------------

# 38. SEO

Antigravity doit intégrer :

``` text
<title>
<meta name="description">
Open Graph
Twitter/X metadata
canonical
robots
structured data si pertinent
alt text
semantic HTML
```

------------------------------------------------------------------------

# 39. ACCESSIBILITÉ

Vérifier :

-   contraste ;
-   navigation clavier ;
-   focus visible ;
-   alt text ;
-   labels ;
-   boutons réels ;
-   structure H1/H2/H3 ;
-   réduction des animations avec `prefers-reduced-motion`.

------------------------------------------------------------------------

# 40. QA VISUELLE

Comparer systématiquement :

``` text
STITCH
   ↓
CODE
   ↓
BROWSER
```

Pour chaque section :

-   position ;
-   taille ;
-   couleur ;
-   typographie ;
-   espacement ;
-   image ;
-   animation ;
-   responsive.

------------------------------------------------------------------------

# 41. CHECKLIST FINALE --- DESIGN

-   [ ] Hero immédiatement compréhensible
-   [ ] H1 clair
-   [ ] CTA visible
-   [ ] Navigation simple
-   [ ] Hiérarchie cohérente
-   [ ] Sections respirables
-   [ ] Visuels réalistes
-   [ ] Aucun visuel inutile
-   [ ] Design mobile validé
-   [ ] Design desktop validé

------------------------------------------------------------------------

# 42. CHECKLIST FINALE --- MOTION

-   [ ] Animations courtes
-   [ ] Aucun mouvement inutile
-   [ ] Scroll fluide
-   [ ] CTA animé avec sobriété
-   [ ] Respect de reduced-motion
-   [ ] Vidéo non bloquante
-   [ ] Transitions cohérentes
-   [ ] Micro-interactions cohérentes

------------------------------------------------------------------------

# 43. CHECKLIST FINALE --- VIDÉO

-   [ ] Hook immédiat
-   [ ] Image réaliste
-   [ ] Présentation claire
-   [ ] Démonstration réelle
-   [ ] Interface réelle
-   [ ] Audio clair
-   [ ] Musique discrète
-   [ ] Sous-titres lisibles
-   [ ] CTA final
-   [ ] Version verticale
-   [ ] Version horizontale si nécessaire

------------------------------------------------------------------------

# 44. CHECKLIST FINALE --- TECHNIQUE

-   [ ] Images optimisées
-   [ ] Vidéos optimisées
-   [ ] Lazy loading
-   [ ] SEO
-   [ ] Accessibilité
-   [ ] Responsive
-   [ ] Console sans erreur
-   [ ] Liens vérifiés
-   [ ] Formulaires vérifiés
-   [ ] CTA vérifiés
-   [ ] Analytics si prévu
-   [ ] Tests navigateur réalisés

------------------------------------------------------------------------

# 45. PIPELINE FINAL

Le workflow recommandé est :

``` text
BRIEF
  ↓
STITCH
  ↓
WIREFRAME
  ↓
HIGH-FIDELITY UI
  ↓
DESIGN SYSTEM
  ↓
DESIGN.md
  ↓
CANVA
  ↓
IMAGES + VIDÉOS + PUBLICITÉS
  ↓
ASSET LIBRARY
  ↓
ANTIGRAVITY
  ↓
IMPLEMENTATION
  ↓
MOTION DESIGN
  ↓
BROWSER QA
  ↓
RESPONSIVE QA
  ↓
PERFORMANCE
  ↓
FINAL PAGE
```

------------------------------------------------------------------------

# 46. ORGANISATION DU PROJET

``` text
project/
│
├── public/
│   ├── images/
│   ├── video/
│   ├── icons/
│   ├── logos/
│   └── screens/
│
├── src/
│   ├── components/
│   ├── sections/
│   ├── pages/
│   ├── styles/
│   └── animations/
│
├── docs/
│   ├── DESIGN.md
│   ├── UX.md
│   ├── CONTENT.md
│   └── MOTION.md
│
└── README.md
```

------------------------------------------------------------------------

# 47. DOCUMENTATION DES ASSETS

Créer :

``` text
ASSETS.md
```

Pour chaque asset :

``` text
Nom :
Type :
Section :
Format :
Dimensions :
Poids :
Source :
Usage :
Mobile :
Desktop :
Alt text :
```

------------------------------------------------------------------------

# 48. DOCUMENTATION MOTION

Créer :

``` text
MOTION.md
```

Pour chaque animation :

``` text
Component:
Trigger:
Duration:
Delay:
Easing:
From:
To:
Mobile:
Desktop:
Reduced motion:
Purpose:
```

------------------------------------------------------------------------

# 49. PROMPT FINAL ANTIGRAVITY --- PRODUCTION

``` text
Prends maintenant le design Stitch, DESIGN.md et les assets présents dans
/public comme source de vérité.

Construis la landing page production-ready.

Règles :
- ne crée aucun visuel fictif si un asset réel existe ;
- ne remplace jamais une capture réelle par une interface inventée ;
- conserve les textes validés ;
- respecte DESIGN.md ;
- respecte la hiérarchie Stitch ;
- utilise les assets optimisés ;
- ajoute les animations uniquement lorsqu'elles améliorent la compréhension.

Procédure :

PHASE 1
Analyse.

PHASE 2
Planifie.

PHASE 3
Implémente la structure.

PHASE 4
Intègre les images.

PHASE 5
Intègre les vidéos.

PHASE 6
Ajoute le motion design.

PHASE 7
Responsive.

PHASE 8
Accessibilité.

PHASE 9
SEO.

PHASE 10
Performance.

PHASE 11
Teste dans le navigateur.

PHASE 12
Fournis un walkthrough visuel de la page.

Ne considère pas la tâche terminée tant que le résultat visuel n'est pas
vérifié dans le navigateur.
```

------------------------------------------------------------------------

# 50. RÈGLE D'OR

Le résultat final doit donner l'impression que :

> **le produit existe réellement, qu'il est maîtrisé, qu'il est simple à
> comprendre et qu'il mérite la confiance du visiteur.**

Le design ne doit jamais être plus spectaculaire que le produit.

La vidéo ne doit jamais promettre ce que le produit ne fait pas.

Les images doivent soutenir le message.

Les animations doivent soutenir la compréhension.

Le code doit respecter le design.

Et le design doit servir l'expérience utilisateur.

------------------------------------------------------------------------

# 51. SOURCES OFFICIELLES À CONSULTER

### Google Stitch

https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/

https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-updates/

https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/

### Google Antigravity

https://antigravity.google/

https://antigravity.google/docs/ide/overview/

https://antigravity.google/docs/agent/

https://www.antigravity.google/blog/introducing-google-antigravity-2

------------------------------------------------------------------------

# 52. RÉSUMÉ OPÉRATIONNEL

## STITCH

**Conçoit.**

``` text
UX
→ UI
→ composants
→ prototypes
→ design system
→ DESIGN.md
```

## CANVA

**Produit les assets.**

``` text
images
→ visuels réalistes
→ captures composées
→ vidéos
→ publicité
→ variantes sociales
```

## ANTIGRAVITY

**Construit et vérifie.**

``` text
code
→ intégration
→ responsive
→ motion
→ navigateur
→ tests
→ optimisation
→ livraison
```

### Chaîne complète

**Stitch pense l'expérience.\
Canva produit les médias.\
Antigravity transforme le tout en produit réel.**
