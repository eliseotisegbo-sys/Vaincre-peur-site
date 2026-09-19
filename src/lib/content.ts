export const product = {
  brand: "MotivaShop",
  author: "SEFO",
  name: "Vaincre la Peur en un clin d'œil : Agir en 7 jours",
  shortName: "Vaincre la Peur en un clin d'œil",
  subtitle: "Le guide pratique pour comprendre vos blocages et passer à l'action sans attendre d'être prêt",
  price: "3 000 FCFA",
  compareAt: "8 000 FCFA",
  discountPercent: "-62%",
  checkoutUrl: "https://motivasefo.mychariow.shop/vaincre-la-peur/checkout",
  storeUrl: "https://motivasefo.mychariow.shop",
  tiktok: "https://tiktok.com/@motivationsefo",
  whatsapp: "https://wa.me/22946347988",
  whatsappInfoUrl: "https://wa.me/22946347988?text=Bonjour%20Sefo%2C%20j%27ai%20une%20question%20avant%20de%20prendre%20le%20guide%20Vaincre%20la%20Peur.",
  whatsappRefundUrl: "https://wa.me/22946347988?text=Bonjour%20Sefo%2C%20je%20souhaite%20demander%20le%20remboursement%20de%20ma%20commande%20du%20guide%20Vaincre%20la%20Peur.",
  ratings: { count: 12, label: "12 lecteurs. 12 avis vérifiés (5/5)." },
  files: [
    {
      title: "Guide Principal : Vaincre la Peur en un Clin d'Œil",
      meta: "Livre numérique · 35 pages · Format PDF",
      description: "Les 7 chapitres fondamentaux, les mécanismes de la peur, les 11 techniques concrètes et le plan d'action en 7 jours.",
      tag: "Guide essentiel",
    },
    {
      title: "Bonus Pratique : 12 Défis Réels Pour Vaincre la Peur",
      meta: "Cahier d'exercices · 13 pages · Format PDF",
      description: "Des exercices quotidiens progressifs pour développer votre courage dans des situations réelles.",
      tag: "Offert aujourd'hui",
    },
    {
      title: "Bonus Rituel : Les 12 Mantras du Courage",
      meta: "Fiche pratique · Format PDF",
      description: "Des affirmations directes pour orienter votre esprit avant chaque situation intimidante.",
      tag: "Inclus",
    },
  ],
  paymentsText: "Wave, MTN MoMo, Moov Money, Carte Visa, Mastercard",
  cover: "/images/product/vaincre-peur-cover.jpg",
  thumb: "/images/product/vaincre-peur-thumb.png",
  logo: "/logos/motivashop.png",
  video: {
    src: "/video/pub-peur-2.mp4",
    poster: "/images/product/vaincre-peur-cover.jpg",
  },
} as const;

export const paymentLogos = [
  { name: "Wave", src: "/logos/paiement/wave.png", isSvg: false },
  { name: "MTN MoMo", src: "/logos/paiement/mtn-momo.svg", isSvg: true },
  { name: "Moov Africa", src: "/logos/paiement/moov-africa.png", isSvg: false },
  { name: "Visa", src: "/logos/paiement/visa.svg", isSvg: true },
  { name: "Mastercard", src: "/logos/paiement/mastercard.svg", isSvg: true },
];

export const previewPages = [
  {
    title: "Le sommaire des 7 chapitres",
    src: "/images/preview/sommaire.jpg",
    desc: "Découvrez l'étendue du contenu et l'articulation des modules.",
  },
  {
    title: "La fiche complète de la Respiration 4-7-8",
    src: "/images/preview/technique-4-7-8.jpg",
    desc: "Un protocole physique guidé étape par étape pour calmer le stress.",
  },
  {
    title: "Le plan d'action, jour par jour",
    src: "/images/preview/plan-7-jours.jpg",
    desc: "Une action simple chaque matin pour progresser sans blocage.",
  },
  {
    title: "Un défi du cahier pratique",
    src: "/images/preview/cahier-defis.jpg",
    desc: "Des mises en situation réelles pour ancrer le courage au quotidien.",
  },
];

export const cta = {
  header: "Je le veux · 3 000 F",
  heroPrimary: "Je télécharge mon guide maintenant · 3 000 FCFA",
  heroSecondary: "Découvrir la méthode",
  heroTrust: "Paiement Wave, MTN, Moov ou carte. Fichiers reçus en moins de 2 minutes. Garanti 7 jours.",
  methodEnd: "Je veux appliquer ces techniques · 3 000 FCFA",
  projectionEnd: "Je commence mes 7 jours maintenant",
  previewEnd: "Je veux les 48 pages · 3 000 FCFA",
  finalPrimary: "Oui, je passe à l'action maintenant · 3 000 FCFA",
  finalTrust: "Paiement sécurisé. Téléchargement immédiat. Remboursé sur simple message si ça ne vous convient pas.",
  whatsappQuestion: "Poser une question sur WhatsApp",
} as const;

export const scienceFacts = [
  {
    metric: "85%",
    title: "Des peurs ne se réalisent jamais",
    desc: "La majorité des scénarios catastrophes imaginés ne se produisent pas. Quand un imprévu survient, les solutions se trouvent sur le moment.",
    source: "Études cliniques sur l'anxiété d'anticipation (Borkovec et al.).",
  },
  {
    metric: "Quelques ms",
    title: "Réaction réflexe de l'amygdale",
    desc: "Le cerveau déclenche un signal d'alarme physique en une fraction de seconde, avant même toute réflexion logique. Observer ce signal permet d'agir sans paniquer.",
    source: "Neurosciences des circuits émotionnels de l'alerte.",
  },
  {
    metric: "5 sec",
    title: "Délai de passage à l'action",
    desc: "Sans geste concret dans les 5 secondes suivant une impulsion, le cerveau construit automatiquement des arguments pour reporter l'effort.",
    source: "Principe d'inhibition cognitive de la décision.",
  },
];

export const techniques = [
  {
    num: "01",
    name: "La Règle des 5 Secondes",
    category: "Action immédiate",
    summary: "Comptez 5-4-3-2-1 et commencez l'action avant l'apparition des doutes.",
    highlight: "Utile pour passer un appel important ou lancer une tâche en attente.",
    icon: "Timer",
    isLocked: false,
  },
  {
    num: "02",
    name: "La Respiration 4-7-8",
    category: "Contrôle physique",
    summary: "Inspirez pendant 4 secondes, retenez 7 secondes, expirez pendant 8 secondes. Répétez 4 fois.",
    highlight: "Ralentit le rythme cardiaque et détend les muscles en moins de 2 minutes.",
    icon: "Wind",
    isLocked: false,
  },
  {
    num: "03",
    name: "La Fenêtre du Courage",
    category: "Progression graduée",
    summary: "Évaluez votre anxiété sur une échelle de 1 à 10. Agissez dans la zone de progrès située entre 4 et 7.",
    highlight: "Permet de sortir de sa zone habituelle sans céder à la panique.",
    icon: "Gauge",
    isLocked: false,
  },
  {
    num: "04",
    name: "La Méthode des Petits Pas",
    category: "Décomposition",
    summary: "Divisez un objectif intimidant en plusieurs étapes très simples à réaliser.",
    highlight: "Facilite le premier pas sans demander un effort démesuré.",
    icon: "Footprints",
    isLocked: false,
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
    role: "Responsable d'équipe",
    initial: "Évitait systématiquement les prises de parole en réunion plénière en raison du stress physique.",
    method: "A suivi la méthode des petits pas en s'exprimant d'abord seul, puis devant un collègue, puis en petit comité avec la règle des 5 secondes.",
    result: "Marc anime désormais les réunions de service devant plus de 40 participants et a obtenu une évolution de poste 3 mois après.",
    badge: "Prise de parole",
  },
  {
    name: "Fatou",
    age: "29 ans",
    role: "Créatrice d'activité",
    initial: "Repoussait le lancement de son activité commerciale depuis plusieurs années par crainte de ne pas être à la hauteur.",
    method: "A utilisé l'inventaire des craintes et l'exposition progressive pour présenter ses premières créations à un cercle restreint.",
    result: "Son activité a rassemblé plus de 200 clients en 4 mois avant l'ouverture de son premier point de vente physique la même année.",
    badge: "Lancement de projet",
  },
];

export const testimonials = [
  {
    quote: "J'ai enfin osé postuler et négocier mes conditions professionnelles avec calme. La règle des 5 secondes et l'exercice du pire scénario ont débloqué ma démarche.",
    author: "Alain K.",
    city: "Cotonou",
    tag: "Avis vérifié",
    rating: "5/5",
  },
  {
    quote: "Le livre va directement à l'essentiel. Les exercices physiques et respiratoires m'ont permis d'aborder mes rendez-vous professionnels avec beaucoup plus de sérénité.",
    author: "Béatrice D.",
    city: "Abidjan",
    tag: "Avis vérifié",
    rating: "5/5",
  },
  {
    quote: "Le cahier d'exercices propose des étapes très claires. À 3 000 FCFA, c'est un investissement particulièrement utile pour avancer dans mes projets.",
    author: "Gildas M.",
    city: "Porto-Novo",
    tag: "Avis vérifié",
    rating: "5/5",
  },
];

export const faqItems = [
  {
    q: "Est-ce que la peur disparaît totalement après la lecture ?",
    a: "Non. La peur est une réaction biologique normale qui signale une situation inhabituelle. Le but du guide n'est pas de la faire disparaître, mais d'apprendre à calmer les tensions physiques pour agir malgré l'appréhension.",
  },
  {
    q: "Et si le guide ne me convient pas ?",
    a: "Vous êtes remboursé. Vous avez 7 jours pour lire le guide et tester les exercices. Si vous estimez que ça ne vous a rien apporté, un message sur WhatsApp suffit et je vous renvoie vos 3 000 FCFA. Je ne vous demanderai pas pourquoi. Et vous gardez les fichiers : ce serait absurde de vous reprendre un PDF.",
  },
  {
    q: "Pourquoi 3 000 FCFA et pas 8 000 ?",
    a: "Parce que je préfère que 300 personnes lisent ce guide plutôt que 40. C'est un tarif de lancement en fenêtre de 24h : il est valable jusqu'à ce soir minuit. Après, le guide repasse à son prix normal de 8 000 FCFA.",
  },
  {
    q: "Comment je paie et comment je reçois le guide ?",
    a: "Vous payez avec Wave, MTN MoMo, Moov Money ou votre carte bancaire. Ça prend 30 secondes. Dès que le paiement passe, les 3 fichiers s'affichent directement sur votre écran, et un lien part aussi sur votre e-mail.",
  },
  {
    q: "Et si je ne reçois rien ?",
    a: "Vous m'écrivez sur WhatsApp au +229 46 34 79 88 et je vous renvoie vos fichiers moi-même. Pas de ticket, pas de robot, pas d'attente.",
  },
  {
    q: "Combien de temps ça me prend par jour ?",
    a: "Entre 10 et 20 minutes. Le plan est conçu pour quelqu'un qui travaille. Chaque journée a un exercice et une seule action à faire dans la vraie vie.",
  },
  {
    q: "Je suis vraiment très timide. C'est trop tard pour moi ?",
    a: "Non. Élise ne parlait pas du tout en réunion. On a commencé par un groupe de trois personnes. Le guide ne vous demande jamais de faire un grand saut : il vous demande de faire le plus petit pas possible, tous les jours.",
  },
  {
    q: "Est-ce que je peux le lire sur mon téléphone ?",
    a: "Oui. Les trois fichiers sont des PDF classiques. Ils s'ouvrent sur n'importe quel téléphone Android ou iPhone, sans application à installer.",
  },
];
