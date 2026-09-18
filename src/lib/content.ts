export const product = {
  brand: "MotivaShop",
  author: "SEFO",
  name: "Vaincre la Peur en un clin d’œil : Agir en 7 jours",
  shortName: "Vaincre la peur en un clin d’œil",
  subtitle: "Le guide pratique pour comprendre vos blocages et passer à l’action sans attendre d’être prêt",
  price: "3 000 FCFA",
  compareAt: "8 000 FCFA",
  discountPercent: "-62%",
  checkoutUrl: "https://motivasefo.mychariow.shop/vaincre-la-peur/checkout",
  storeUrl: "https://motivasefo.mychariow.shop",
  tiktok: "https://tiktok.com/@motivationsefo",
  whatsapp: "https://wa.me/2290146347988",
  ratings: { percent: "100%", count: 3, label: "avis vérifiés" },
  files: [
    {
      title: "Guide Principal : Vaincre la Peur en un Clin d’Œil",
      meta: "Livre numérique · 35 pages · Format PDF",
      description: "Les 7 chapitres fondamentaux, les mécanismes de la peur, les 11 techniques concrètes et le plan d'action en 7 jours.",
      tag: "Guide essentiel",
    },
    {
      title: "Bonus Pratique : 12 Défis Réels Pour Vaincre la Peur",
      meta: "Cahier d'exercices · 13 pages · Format PDF",
      description: "Des exercices quotidiens progressifs pour développer votre courage dans des situations réelles.",
      tag: "Offert aujourd’hui",
    },
    {
      title: "Bonus Rituel : Les 12 Mantras du Courage",
      meta: "Fiche pratique · Format PDF",
      description: "Des affirmations directes pour orienter votre esprit avant chaque situation intimidante.",
      tag: "Inclus",
    },
  ],
  payments: "Wave, Mobile Money (MTN, Moov), Carte Visa, Mastercard",
  cover: "/images/product/vaincre-peur-cover.jpg",
  thumb: "/images/product/vaincre-peur-thumb.png",
  logo: "/logos/motivashop.png",
  video: {
    desktop: "/video/landing/fear-motion-desktop.mp4",
    poster: "/images/product/vaincre-peur-cover.jpg",
  },
} as const;

export const cta = {
  primary: "Télécharger le guide",
  secondary: "Découvrir la méthode",
  offerTag: "Offre temporaire",
} as const;

export const scienceFacts = [
  {
    metric: "85%",
    title: "Des peurs ne se réalisent jamais",
    desc: "La majorité des scénarios catastrophes imaginés par notre esprit ne se produisent jamais. Quand un obstacle survient, nous trouvons presque toujours des solutions.",
  },
  {
    metric: "12 ms",
    title: "Réaction réflexe de l'amygdale",
    desc: "Le cerveau déclenche un signal d'alarme physique en 12 millisecondes. Apprendre à observer ce signal permet de reprendre le contrôle rapidement.",
  },
  {
    metric: "5 sec",
    title: "Délai de passage à l'action",
    desc: "Sans action dans les 5 secondes suivant une décision, le cerveau cherche des prétextes pour reporter l'effort.",
  },
];

export const techniques = [
  {
    num: "01",
    name: "La Règle des 5 Secondes",
    category: "Action immédiate",
    summary: "Comptez 5-4-3-2-1 et commencez l'action avant l'apparition des doutes.",
    highlight: "Utile pour passer un appel important ou lancer une tâche en attente.",
  },
  {
    num: "02",
    name: "La Respiration 4-7-8",
    category: "Contrôle physique",
    summary: "Inspirez pendant 4 secondes, retenez 7 secondes, expirez pendant 8 secondes. Répétez 4 fois.",
    highlight: "Ralentit le rythme cardiaque et détend les muscles en moins de 2 minutes.",
  },
  {
    num: "03",
    name: "La Pré-Mortem",
    category: "Méthode d'anticipation",
    summary: "Imaginez les obstacles éventuels à l'avance et définissez une parade pour chacun.",
    highlight: "Remplace l'angoisse par un plan clair et structuré.",
  },
  {
    num: "04",
    name: "La Fenêtre du Courage",
    category: "Progression graduée",
    summary: "Évaluez votre anxiété sur une échelle de 1 à 10. Agissez dans la zone de progrès située entre 4 et 7.",
    highlight: "Permet de sortir de sa zone habituelle sans céder à la panique.",
  },
  {
    num: "05",
    name: "L'Ancrage Physique",
    category: "Réflexe conditionné",
    summary: "Associez un geste précis à un souvenir de réussite pour retrouver votre calme rapidement.",
    highlight: "Un déclencheur discret avant une prise de parole ou un rendez-vous important.",
  },
  {
    num: "06",
    name: "L'Analyse du Pire Scénario",
    category: "Clarification",
    summary: "Identifiez le risque réel, vos ressources pour y faire face et la manière de rebondir.",
    highlight: "Supprime le flou qui alimente les scénarios excessifs.",
  },
  {
    num: "07",
    name: "La Question « Et alors ? »",
    category: "Raisonnement logique",
    summary: "Interrogez chaque crainte jusqu'à constater que les conséquences restent surmontables.",
    highlight: "Ramène les pensées anxieuses à des faits observables.",
  },
  {
    num: "08",
    name: "La Méthode des Petits Pas",
    category: "Décomposition",
    summary: "Divisez un objectif intimidant en plusieurs étapes très simples à réaliser.",
    highlight: "Facilite le premier pas sans demander un effort démesuré.",
  },
  {
    num: "09",
    name: "L'Exposition Volontaire",
    category: "Entraînement régulier",
    summary: "Pratiquez chaque jour un léger inconfort pour habituer votre organisme à l'inattendu.",
    highlight: "Les situations autrefois redoutées deviennent familières avec le temps.",
  },
  {
    num: "10",
    name: "La Visualisation Préparatoire",
    category: "Concentration",
    summary: "Visualisez posément le déroulement de votre action et votre réussite avant le moment venu.",
    highlight: "Prépare l'esprit et diminue la tension avant l'événement.",
  },
  {
    num: "11",
    name: "La Cohérence Respiratoire",
    category: "Équilibre nerveux",
    summary: "Inspirez 5 secondes, expirez 5 secondes pendant 5 minutes. Une pratique simple et efficace.",
    highlight: "Aide à réguler durablement le niveau de tension au cours de la journée.",
  },
];

export const sevenDaysPlan = [
  {
    day: "Jour 1",
    theme: "Identifier ses blocages",
    action: "Lister avec précision les 3 situations où l'hésitation vous freine le plus souvent.",
    tool: "Fiche d'auto-évaluation",
  },
  {
    day: "Jour 2",
    theme: "Comprendre les causes",
    action: "Distinguer les craintes réelles des simples suppositions non vérifiées.",
    tool: "Questionnement dirigé",
  },
  {
    day: "Jour 3",
    theme: "Calmer les réactions physiques",
    action: "Appliquer la respiration 4-7-8 dès que le rythme cardiaque s'accélère.",
    tool: "Exercice respiratoire guidé",
  },
  {
    day: "Jour 4",
    theme: "Corriger le dialogue intérieur",
    action: "Remplacer les pensées automatiques de découragement par des constats objectifs.",
    tool: "Recadrage des pensées",
  },
  {
    day: "Jour 5",
    theme: "Poser un premier acte",
    action: "Appliquer la règle des 5 secondes sur une décision en attente depuis plusieurs jours.",
    tool: "Décompte 5-4-3-2-1",
  },
  {
    day: "Jour 6",
    theme: "Élargir son champ d'action",
    action: "Réaliser une démarche légèrement inconfortable en dosant l'effort demandé.",
    tool: "La Fenêtre du Courage",
  },
  {
    day: "Jour 7",
    theme: "Consolider ses habitudes",
    action: "Noter ses progrès concrets et définir ses prochaines étapes professionnelles ou personnelles.",
    tool: "Carnet de suivi",
  },
];

export const liesOfFear = [
  {
    lie: "« Vous allez échouer »",
    truth: "L'échec ponctuel est une étape normale d'apprentissage. Toute réussite durable se construit à partir d'ajustements successifs.",
  },
  {
    lie: "« Vous n'êtes pas prêt »",
    truth: "Le moment idéal n'arrive jamais spontanément. C'est l'action sur le terrain qui permet de progresser.",
  },
  {
    lie: "« Tout le monde va vous juger »",
    truth: "Chacun accorde l'essentiel de son attention à ses propres priorités. Les remarques extérieures restent éphémères.",
  },
  {
    lie: "« Vous risquez de tout perdre »",
    truth: "L'anxiété exagère les conséquences négatives. En analysant calmement la situation, les solutions apparaissent nettement.",
  },
];

export const caseStudies = [
  {
    name: "Marc",
    age: "34 ans",
    role: "Responsable d’équipe",
    initial: "Évitait systématiquement les prises de parole en réunion plénière en raison du stress physique.",
    method: "A suivi la méthode des petits pas en s'exprimant d'abord seul, puis devant un collègue, puis en petit comité avec la règle des 5 secondes.",
    result: "Marc anime désormais les réunions de service devant plus de 40 participants et a obtenu une évolution de poste 3 mois après.",
    badge: "Prise de parole",
  },
  {
    name: "Fatou",
    age: "29 ans",
    role: "Créatrice d’activité",
    initial: "Repoussait le lancement de son activité commerciale depuis plusieurs années par crainte de ne pas être à la hauteur.",
    method: "A utilisé l'inventaire des craintes et l'exposition progressive pour présenter ses premières créations à un cercle restreint.",
    result: "Son activité a rassemblé plus de 200 clients en 4 mois avant l'ouverture de son premier point de vente physique la même année.",
    badge: "Lancement de projet",
  },
];

export const testimonials = [
  {
    quote: "J’ai enfin osé postuler et négocier mes conditions professionnelles avec calme. La règle des 5 secondes et l’exercice du pire scénario ont débloqué ma démarche.",
    author: "Alain K.",
    city: "Cotonou",
    tag: "Avis vérifié",
  },
  {
    quote: "Le livre va directement à l'essentiel. Les exercices physiques et respiratoires m'ont permis d'aborder mes rendez-vous professionnels avec beaucoup plus de sérénité.",
    author: "Béatrice D.",
    city: "Abidjan",
    tag: "Avis vérifié",
  },
  {
    quote: "Le cahier d'exercices propose des étapes très claires. À 3 000 FCFA, c'est un investissement particulièrement utile pour avancer dans mes projets.",
    author: "Gildas M.",
    city: "Porto-Novo",
    tag: "Avis vérifié",
  },
];
