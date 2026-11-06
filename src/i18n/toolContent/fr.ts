import type { ToolContentRecord } from "./types";

export const frToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Générateur de Titres de Podcast Gratuit | Pod Studio",
    metaDescription:
      "Générez des titres d'épisodes accrocheurs avec notre générateur de titres de podcast gratuit. Formules testées pour Apple Podcasts et Spotify. Gratuit.",
    overview: [
      "Le Générateur de Titres de Podcast transforme le sujet de votre épisode et le nom d'un invité en titres à fort taux de clic inspirés des meilleurs ressorts psychologiques : curiosité, promesses concrètes et contre-pied.",
      "Conçu pour les créateurs qui maîtrisent leur sujet mais cherchent des accroches captivantes et optimisées pour les écrans mobiles d'Apple Podcasts et Spotify.",
    ],
    steps: [
      { title: "Décrivez l'épisode", text: "Saisissez le sujet principal en quelques mots, par exemple « budget des freelances » ou « les 100 premiers abonnés »." },
      { title: "Ajoutez un invité (facultatif)", text: "Indiquez le nom ou l'expertise de l'invité quand c'est la raison principale d'écouter." },
      { title: "Filtrez par style", text: "Passez des formules de curiosité aux tutoriels ou au contre-pied pour comparer les angles." },
      { title: "Copiez ou exportez", text: "Copiez un titre ou exportez la sélection sous forme de fichier texte pour la partager avec votre équipe." },
    ],
    tips: [
      "Placez les mots les plus précis et recherchés dans la première moitié du titre : les applis coupent souvent après 60 caractères.",
      "Ne promettez que ce que l'épisode tient. Un titre exact retient mieux l'audience et évite les avis négatifs.",
      "Laissez de côté le numéro d'épisode et le nom de l'émission, sauf si vos auditeurs en ont besoin.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Générateur de Show Notes pour Podcast | Pod Studio",
    metaDescription:
      "Créez des notes d'épisode avec notre modèle de show notes pour podcast gratuit. Exportez résumés, chapitres horodatés, bio des invités et liens. Gratuit.",
    overview: [
      "Le Générateur de Show Notes organise les détails de votre épisode en notes professionnelles optimisées pour le référencement : résumé attractif, biographie de l'invité, chapitres horodatés et liens vers les ressources citées.",
      "Le résultat s'exporte en Markdown, HTML ou texte brut, prêt à être collé dans Buzzsprout, Libsyn, Podbean, Spotify for Podcasters, YouTube ou votre propre site web.",
    ],
    steps: [
      { title: "Remplissez l'essentiel", text: "Saisissez le titre de l'épisode et un résumé d'une ou deux phrases qui donne envie d'écouter." },
      { title: "Ajoutez invités et chapitres", text: "Indiquez vos invités et collez les horodatages au format « 00:00 Sujet », un par ligne." },
      { title: "Ajoutez points clés et liens", text: "Notez les principales leçons et les livres, outils ou sites mentionnés." },
      { title: "Choisissez le format et copiez", text: "Sélectionnez Markdown, HTML ou texte brut selon votre hébergeur, puis copiez les notes." },
    ],
    tips: [
      "Soignez la première phrase pour les humains comme pour les moteurs de recherche : c'est ce que les applis affichent avant « plus ».",
      "N'incluez que des horodatages vérifiés sur le montage final ; des chapitres faux agacent les auditeurs.",
      "Gardez la même structure chaque semaine pour que les habitués retrouvent facilement les liens.",
    ],
    sections: [
      {
        heading: "Modèle de show notes pour podcast",
        intro: "Des notes structurées et soignées accompagnent efficacement l'auditeur et offrent aux moteurs de recherche un texte riche à indexer :",
        template: `# Titre de l'épisode : Maîtriser la Croissance d'Audience en 2026

## Résumé de l'épisode
Dans cet épisode, nous recevons la consultante audio Elena Rostova pour décrypter les données réelles de fidélisation des auditeurs. Elena explique pourquoi la régularité hebdomadaire surpasse les pics viraux éphémères, comment chapitrer son émission pour maximiser le taux de complétion et quels indicateurs intéressent réellement les marques partenaires.

## Horodatages et Chapitres
- [00:00] Accroche et aperçu de l'épisode
- [02:15] Parcours d'Elena dans la production audio
- [07:45] La règle des 30 secondes pour retenir l'attention
- [14:20] Comment tarifer son premier parrainage
- [23:10] Les pièges SEO courants dans les show notes
- [31:00] Questions rapides et mot de la fin

## Points Clés à Retenir
1. Captez vos auditeurs avec une promesse précise dès les 30 premières secondes.
2. Structurez vos notes avec des en-têtes horodatés clairs pour améliorer votre référencement naturel.
3. Les annonces lues par l'animateur retiennent plus de 85 % de l'attention par rapport aux spots programmatiques.

## Cités dans cet Épisode
- Livre : *Sound Reporting: The NPR Guide to Audio Journalism*
- Outil : Créateur de Conducteur Pod Studio
- Retrouvez Elena : @elenaaudio sur les réseaux sociaux

## Soutenez l'Émission
Si cet épisode vous a plu, laissez une note 5 étoiles sur Apple Podcasts et abonnez-vous sur Spotify !`,
      },
    ],
  },
  "podcast-name-generator": {
    metaTitle: "Générateur de Noms de Podcast Gratuit | Pod Studio",
    metaDescription:
      "Trouvez des idées de noms de podcast mémorables selon votre thématique avec notre générateur de noms de podcast gratuit. Testez la disponibilité. Gratuit.",
    overview: [
      "Le Générateur de Noms de Podcast vous propose des idées de noms de podcast mémorables et distinctives adaptées à votre domaine, vos mots-clés et le positionnement recherché : du titre descriptif au nom créatif.",
      "Utilisez ces idées de noms de podcast pour constituer une sélection resserrée, puis vérifiez la disponibilité sur Apple Podcasts, Spotify et les registres de noms de domaine avant le lancement officiel.",
    ],
    steps: [
      { title: "Choisissez votre thématique", text: "Sélectionnez le genre de votre émission : tech, finance, true crime, développement personnel, etc." },
      { title: "Ajoutez un mot (facultatif)", text: "Saisissez un mot ou thème à intégrer au nom : un sujet, un lieu, une idée récurrente." },
      { title: "Choisissez un style et sélectionnez", text: "Changez de style de marque et gardez les trois à cinq noms que vous pourriez prononcer à chaque épisode." },
      { title: "Vérifiez avant le lancement", text: "Cherchez les doublons sur Apple Podcasts et Spotify, puis vérifiez vous-même le domaine et les réseaux sociaux." },
    ],
    tips: [
      "Prononcez chaque nom à voix haute : s'il est impossible à écrire après une seule écoute, le bouche-à-oreille en souffrira.",
      "Un mot clair sur le sujet aide les nouveaux auditeurs à vous trouver dans la recherche de podcasts.",
      "Évitez les noms liés à une mode ou à une année ; visez un nom qui conviendra encore au 200e épisode.",
    ],
    sections: [
      {
        heading: "Idées de noms de podcast par thématique",
        intro: "En quête d'inspiration pour baptiser votre émission ? Découvrez ces idées de noms de podcast classées par univers :",
        groups: [
          {
            category: "Business et Entrepreneuriat",
            items: [
              "Le Fondateur Éclairé",
              "Croissance & Stratégie",
              "De Zéro à l'Amorçage",
              "Les Pionniers du Marché",
            ],
          },
          {
            category: "True Crime et Enquêtes",
            items: [
              "Non Résolu et Silencieux",
              "Les Dossiers Froids",
              "Derrière le Cordon de Police",
              "L'Ombre du Doute",
            ],
          },
          {
            category: "Humour et Culture",
            items: [
              "Personne N'a Demandé",
              "Légèrement Cynique",
              "En Rire pour Survivre",
              "L'Absurde du Quotidien",
            ],
          },
          {
            category: "Santé et Bien-être",
            items: [
              "Protocole Corps & Esprit",
              "L'Habitude Longévité",
              "Radio Cause Première",
              "Le Labo Vitalité",
            ],
          },
          {
            category: "Technologies et IA",
            items: [
              "Prompt & Paradigme",
              "Le Virage Neuronal",
              "Silicium & Code",
              "À l'Épreuve du Futur",
            ],
          },
          {
            category: "Spiritualité et Réflexion",
            items: [
              "Clarté dans le Silence",
              "La Voie du Voyageur",
              "Ancrés et Consciencieux",
              "La Foi au Quotidien",
            ],
          },
        ],
      },
    ],
  },
  "episode-outline-builder": {
    metaTitle: "Modèle de Script et Conducteur de Podcast | Pod Studio",
    metaDescription:
      "Structurez votre émission avec notre modèle de script de podcast gratuit et conducteur minuté. Planifiez séquences, sponsors et durées. Outil gratuit.",
    overview: [
      "Le Créateur de Conducteur génère une feuille de route minutée pour vos sessions d'enregistrement : répartissez vos temps d'antenne entre l'accroche, la musique, les sujets de fond, les annonces sponsors et la conclusion.",
      "Permettez aux animateurs, co-animateurs et techniciens de garder le fil et d'assurer une durée constante sans avoir à tout rédiger au mot près.",
    ],
    steps: [
      { title: "Nommez l'épisode", text: "Indiquez un titre provisoire pour repérer rapidement le conducteur plus tard." },
      { title: "Fixez la durée cible", text: "Saisissez la durée totale en minutes pour voir l'addition des différents blocs de timing." },
      { title: "Organisez vos séquences", text: "Ajustez l'amorce, l'introduction, les axes principaux, les pauses publicitaires et la conclusion." },
      { title: "Exportez le conducteur", text: "Téléchargez la trame au format Markdown et partagez-la avec votre invité ou monteur." },
    ],
    tips: [
      "Placez vos messages publicitaires lors des transitions naturelles, vers le milieu de l'épisode.",
      "Conservez une petite marge pour les apartés spontanés : les meilleurs échanges sont souvent imprévus.",
      "Transmettez le déroulé à l'invité quelques jours avant pour qu'il prépare des récits concrets.",
    ],
    sections: [
      {
        heading: "Modèle de script de podcast gratuit",
        intro: "Utilisez ce modèle modulaire de conducteur et script pour structurer proprement vos enregistrements, que vous animiez en solo ou avec un invité :",
        template: `[00:00 - 01:00] COLD OPEN / ACCROCHE
- Accroche : Citation forte, affirmation provocante ou question ouverte intrigante.
- Promesse de l'épisode : "Dans l'épisode d'aujourd'hui, vous allez découvrir..."

[01:00 - 02:30] INTRO & MESSAGE SPONSOR PRE-ROLL
- Générique musical / Virgule sonore
- Accueil et présentation : Nom de l'hôte, promesse du podcast et contexte de l'épisode.
- Sponsor Pre-Roll (15-30s) : "Cet épisode vous est présenté avec le soutien de..."

[02:30 - 12:00] SÉQUENCE 1 : LES FONDATIONS & LE CONTEXTE
- Présentation de la problématique principale.
- Récit personnel ou présentation détaillée de l'invité.
- Première grande leçon #1.

[12:00 - 13:30] PAUSE SPONSOR MID-ROLL
- Transition fluide : "On se retrouve dans un instant pour la suite après ce court message..."
- Sponsors Mid-Roll 1 & 2 (lecture incarnée de 60s avec code promo).

[13:30 - 25:00] SÉQUENCE 2 : L'ANALYSE APPROFONDIE & LE DÉCLIC
- Décorticage méthodique : étapes, cadre d'analyse ou coulisses.
- Idées reçues déconstruites et pièges à éviter.
- Deuxième grande leçon #2.

[25:00 - 35:00] SÉQUENCE 3 : CONSEILS PRATIQUES & QUESTIONS DES AUDITEURS
- Conseils applicables immédiatement par l'auditeur.
- Questions rapides ou retours de la communauté.
- Troisième grande leçon #3.

[35:00 - 38:00] RÉCAPITULATIF, APPEL À L'ACTION & CONCLUSION
- Synthèse des points essentiels en 60 secondes.
- Appel à l'action unique (CTA) : "Abonnez-vous sur Spotify et laissez un avis sur Apple Podcasts."
- Teaser du prochain épisode.
- Sortie musicale en fondu.`,
      },
    ],
  },
  "guest-question-generator": {
    metaTitle: "Générateur de Questions pour Podcast | Pod Studio",
    metaDescription:
      "Générez des questions d'interview de podcast captivantes. Questions brise-glace, histoires clés, leçons tactiques et questions rapides. Outil gratuit.",
    overview: [
      "Le Générateur de Questions d'Interview de Podcast conçoit un fil conducteur équilibré pour vos entretiens : des questions brise-glace chaleureuses aux tournants décisifs de carrière, leçons concrètes et questions rapides de clôture.",
      "Renseignez le nom de votre invité, sa fonction et le thème central pour obtenir une trame d'entretien personnalisée qui évite les réponses toutes faites et suscite des confidences enrichissantes.",
    ],
    steps: [
      { title: "Renseignez l'invité", text: "Indiquez le nom de l'invité, son domaine d'expertise et le sujet de la discussion." },
      { title: "Parcourez par séquence", text: "Organisez les questions par étape : brise-glace, genèse, échecs surmontés et questions rapides." },
      { title: "Affinez l'enchaînement", text: "Sélectionnez les questions qui mènent à des récits vécus plutôt qu'à des réponses théoriques." },
      { title: "Copiez ou exportez la fiche", text: "Récupérez la liste complète en texte pour préparer sereinement votre interview." },
    ],
    tips: [
      "Interrogez sur un moment précis — « Racontez-moi le jour où... » — plutôt que sur des généralités.",
      "Gardez deux ou trois questions indispensables et laissez la discussion respirer autour.",
      "Réservez la question la plus intime pour le milieu de l'entretien, quand la confiance est installée.",
    ],
    sections: [
      {
        heading: "Questions d'interview de podcast pour tout invité",
        intro: "Les entretiens mémorables débutent lorsqu'on laisse de côté le CV pour explorer des récits authentiques. Voici 18 questions réparties par moment fort :",
        groups: [
          {
            category: "Brise-Glace et Premières Impressions",
            items: [
              "Quelle conviction affirmiez-vous au début de votre carrière qui vous paraît aujourd'hui complètement fausse ?",
              "Quel projet ou mission vous a donné le véritable déclic pour votre métier actuel ?",
              "Si vous n'exerciez pas cette activité aujourd'hui, quelle voie surprenante auriez-vous suivie ?",
              "Quel est le conseil le plus répété dans votre milieu que les débutants devraient absolument ignorer ?",
            ],
          },
          {
            category: "Récits, Épreuves et Tournants",
            items: [
              "Racontez-nous le moment le plus sombre de votre parcours : à quoi ressemblait le lendemain matin ?",
              "Quel a été le point de bascule où abandonner semblait le plus simple, mais où vous avez tenu bon ?",
              "Quel mentor ou critique vous a dit un jour des mots qui ont transformé votre méthode de travail ?",
              "Qu'avez-vous dû désapprendre pour franchir votre dernier cap professionnel ?",
            ],
          },
          {
            category: "Méthodes et Leçons Tactiques",
            items: [
              "Expliquez-nous comment vous structurez vos heures de concentration maximale chaque matin.",
              "Quel outil, rituel ou indicateur génère 80 % de vos résultats actuels ?",
              "Quand tout semble partir dans tous les sens, quel est le protocole précis que vous appliquez ?",
              "Quelle décision contre-intuitive avez-vous prise alors que tout le monde vous la déconseillait ?",
              "Quel problème sous-estimé dans votre secteur sera sur toutes les lèvres d'ici deux ans ?",
            ],
          },
          {
            category: "Conclusions et Questions Rapides",
            items: [
              "Quel livre ou ressource offrez-vous ou recommandez-vous le plus régulièrement ?",
              "Quel a été votre meilleur investissement de moins de 100 euros ces douze derniers mois ?",
              "Que signifie réussir pour vous aujourd'hui par rapport à vos débuts ?",
              "Si vous aviez un panneau d'affichage visible par des millions de créateurs, qu'y écririez-vous ?",
              "Où nos auditeurs peuvent-ils vous suivre et soutenir vos projets en cours ?",
            ],
          },
        ],
      },
    ],
  },
  "monetization-calculator": {
    metaTitle: "Calculateur de Revenus de Podcast | Pod Studio",
    metaDescription:
      "Estimez les gains de votre émission avec notre calculateur de revenus de podcast gratuit. Modélisez les tarifs CPM, écoutes et sponsors. Sans inscription.",
    overview: [
      "Le Calculateur de Revenus de Podcast estime les rentrées financières de votre émission selon les formules standard de l'industrie : (écoutes ÷ 1 000) × CPM × espaces publicitaires commercialisés.",
      "Projetez vos gains mensuels et annuels en intégrant les créneaux pré-roll, mid-roll et post-roll, votre taux de remplissage et les adhésions payantes de votre communauté pour négocier sereinement.",
    ],
    steps: [
      { title: "Renseignez vos écoutes", text: "Indiquez votre moyenne de téléchargements par épisode sur les 30 premiers jours." },
      { title: "Définissez la fréquence", text: "Précisez combien d'épisodes vous publiez chaque mois." },
      { title: "Configurez les créneaux publicitaires", text: "Activez pré-roll, mid-roll ou post-roll, fixez le CPM souhaité et estimez votre taux de remplissage." },
      { title: "Consultez la synthèse", text: "Analysez la répartition des revenus, ajoutez les abonnements d'auditeurs et exportez votre plan." },
    ],
    tips: [
      "Les annonces mid-roll lues par l'hôte obtiennent les CPM les plus rémunérateurs en raison de l'attention maximale à ce stade.",
      "Restez prudent sur le taux de remplissage : la plupart des créateurs indépendants ne vendent pas tous les créneaux chaque mois.",
      "Présentez des chiffres certifiés lors de vos démarches : les annonceurs demandent souvent des captures de votre hébergeur.",
    ],
    sections: [
      {
        heading: "Combien gagne un podcast ?",
        paragraphs: [
          "Les revenus d'un podcast dépendent directement du volume d'écoutes certifiées à 30 jours, de la régularité de diffusion et du nombre d'emplacements sponsorisés disponibles. Les émissions réunissant entre 1 000 et 5 000 écoutes par épisode génèrent généralement entre 50 $ et 300 $ par numéro grâce aux parrainages au CPM et à l'affiliation.",
          "Les podcasts indépendants établis atteignant 10 000 à 50 000 écoutes par épisode obtiennent des tarifs CPM compris entre 25 $ et 35 $ pour les messages personnalisés, totalisant plusieurs milliers de dollars chaque mois en complétant avec des abonnements privés et du merchandising.",
        ],
        link: {
          text: "Consultez notre étude complète : Combien gagne un podcast en 2026 ? →",
          href: "/guides/how-much-do-podcasts-make",
        },
      },
    ],
  },
  "cover-art-preview": {
    metaTitle: "Taille de Pochette de Podcast: Vérificateur | Pod Studio",
    metaDescription:
      "Vérifiez la taille de pochette de podcast pour Apple et Spotify. Prévisualisez vos visuels 3000x3000px sur mobile, écran de veille et mode sombre. Gratuit.",
    overview: [
      "L'outil de Vérification de Taille et Aperçu de Pochette de Podcast simule votre visuel dans les flux réels d'Apple Podcasts, Spotify, les écrans de veille de smartphones et les vignettes en 50x50 pixels.",
      "Le contrôle s'effectue intégralement dans votre navigateur et vérifie la conformité aux spécifications officielles : ratio carré 1:1, espace colorimétrique RVB et résolution comprise entre 1400x1400px et 3000x3000px.",
    ],
    steps: [
      { title: "Importez votre pochette", text: "Déposez une image JPG ou PNG (ou testez le visuel d'exemple). Le traitement est 100 % local." },
      { title: "Vérifiez les critères techniques", text: "Contrôlez si l'image est parfaitement carrée et respecte les dimensions recommandées." },
      { title: "Basculez entre les maquettes", text: "Examinez l'affichage sur Apple Podcasts, Spotify, écran verrouillé et miniature de 50 × 50 px." },
      { title: "Corrigez et retestez", text: "Ajustez la taille des polices ou les contrastes dans votre logiciel graphique et réimportez la nouvelle version." },
    ],
    tips: [
      "Si le titre est illisible en format vignette, raccourcissez-le ou augmentez la taille de la police.",
      "Ne collez aucun texte important sur les bords : certaines applications appliquent des coins arrondis.",
      "Vérifiez le rendu en mode clair et en mode sombre pour vous assurer que les textes sombres ne disparaissent pas.",
    ],
  },
  "rss-feed-validator": {
    metaTitle: "Validateur de Flux RSS de Podcast Gratuit | Pod Studio",
    metaDescription:
      "Vérifiez votre flux RSS de podcast avant soumission à Apple Podcasts et Spotify. Repérez balises manquantes, erreurs XML et liens audio brisés. Gratuit.",
    overview: [
      "Le Validateur de Flux RSS analyse votre flux pour déceler les anomalies qui retardent ou bloquent la mise en ligne : XML non conforme, métadonnées absentes, pochette non conforme, GUID dupliqués ou fichiers audio inaccessibles.",
      "Chaque alerte est explicitée clairement pour vous permettre d'ajuster les paramètres sur votre plateforme d'hébergement avant la soumission aux annuaires.",
    ],
    steps: [
      { title: "Collez votre flux", text: "Collez l'adresse XML de votre flux (ou chargez l'exemple) dans l'outil d'analyse." },
      { title: "Lancez la vérification", text: "Le validateur contrôle le code dans votre navigateur et examine les balises obligatoires et conseillées." },
      { title: "Examinez les constats", text: "Consultez d'abord les erreurs bloquantes, puis les avertissements détaillés." },
      { title: "Rectifiez et revalidez", text: "Corrigez les options chez votre hébergeur et testez à nouveau le flux mis à jour." },
    ],
    tips: [
      "Ne modifiez jamais le GUID d'un épisode publié : les applications le traiteraient comme une nouvelle publication.",
      "Veillez à bien renseigner la balise de contenu explicite afin d'éviter les restrictions de diffusion.",
      "Revalidez votre flux après un changement d'hébergeur ou une refonte de pochette.",
    ],
  },
  "episode-timestamp-generator": {
    metaTitle: "Générateur d'Horodatages et Chapitres | Pod Studio",
    metaDescription:
      "Créez des horodatages cliquables et chapitres YouTube pour vos podcasts. Générez des marqueurs pour Spotify, Apple Podcasts et notes d'épisode. Gratuit.",
    overview: [
      "Le Générateur d'Horodatages et Chapitres convertit vos notes en codes temporels standardisés et chapitres YouTube cliquables pour les descriptions de vidéo, Spotify et vos notes d'émission.",
      "Offrez à vos auditeurs une navigation fluide entre les thèmes abordés et permettez aux moteurs de recherche d'indexer précisément les passages clés de vos enregistrements.",
    ],
    steps: [
      { title: "Ajoutez vos chapitres", text: "Saisissez chaque repère avec son temps de départ et un titre court, ou collez une liste rapide." },
      { title: "Gardez un format uniforme", text: "Conservez le même modèle horaire tout au long de l'épisode et ordonnez les chapitres par ordre chronologique." },
      { title: "Contrôlez la frise", text: "Inspectez la frise visuelle pour détecter les blancs éventuels ou les chapitres trop brefs." },
      { title: "Copiez les repères", text: "Collez la liste générée dans la description de votre vidéo YouTube ou dans votre gestionnaire d'épisodes." },
    ],
    tips: [
      "Sur YouTube, le premier repère doit obligatoirement démarrer à 00:00 pour que le chapitrage soit activé.",
      "Préférez des titres évocateurs : « Les pièges de tarification » est bien plus percutant que « Partie 2 ».",
      "Visitez des séquences d'au moins quelques minutes pour préserver une lecture fluide.",
    ],
    sections: [
      {
        heading: "Comment formater les horodatages et les chapitres YouTube",
        paragraphs: [
          "Les chapitres cliquables rendent les longs épisodes bien plus accessibles et permettent aux auditeurs de naviguer directement vers les sujets qui les intéressent le plus. Sur YouTube, les horodatages au format « 00:00 Introduction » insérés dans la description découpent automatiquement la barre de lecture en segments interactifs.",
          "Pour vous assurer que vos repères temporels déclenchent bien les chapitres sur YouTube et Spotify, commencez toujours par un repère à 00:00 (ou 0:00), proposez au moins trois chapitres distincts classés par ordre chronologique et veillez à ce que chaque séquence dure au minimum dix secondes.",
        ],
      },
    ],
  },
  "intro-script-generator": {
    metaTitle: "Générateur de Script d'Intro de Podcast | Pod Studio",
    metaDescription:
      "Rédigez des accroches percutantes avec notre générateur de script d'intro de podcast. Exemples d'introductions pour solos, duos et interviews. Gratuit.",
    overview: [
      "Le Générateur de Script d'Intro de Podcast vous aide à concevoir les 30 à 60 premières secondes d'un épisode : une accroche stimulante qui intrigue vos auditeurs et diminue drastiquement les départs précoces.",
      "Indiquez la forme de votre émission, vos invités et le ton désiré pour générer un texte prêt pour prompteur fondé sur des promesses directes et des révélations stimulantes.",
    ],
    steps: [
      { title: "Choisissez la forme et le ton", text: "Optez pour un entretien, un solo ou un récit, avec un débit posé, dynamique ou conversationnel." },
      { title: "Renseignez vos éléments", text: "Saisissez la thématique, la promesse forte de l'épisode et le nom de l'invité le cas échéant." },
      { title: "Générez le texte", text: "Obtenez une structure claire passant de l'accroche à la présentation et aux leçons à retenir." },
      { title: "Lisez à voix haute", text: "Testez votre débit une ou deux fois et simplifiez les tournures pour qu'elles restent naturelles." },
    ],
    tips: [
      "Énoncez l'essentiel dans les 15 premières secondes : c'est là que l'auditeur décide de rester.",
      "Une citation percutante de votre invité constitue une excellente amorce avant la musique de générique.",
      "Préservez la brièveté de votre introduction récurrente ; les annonces diverses trouveront mieux leur place plus loin.",
    ],
    sections: [
      {
        heading: "Exemples d'intro de podcast",
        intro: "Les trente premières secondes déterminent si un auditeur écoute l'épisode jusqu'au bout ou l'interrompt. Voici cinq exemples d'intro de podcast éprouvés :",
        list: [
          {
            title: "1. L'Accroche Forte en Solo",
            description: "« La plupart des créateurs travaillent cinq ans d'arrache-pied sur leur projet avant de s'apercevoir qu'ils ont conçu le mauvais produit. Aujourd'hui, je vous partage les trois tests de validation qui m'auraient fait économiser 80 000 euros. Bienvenue dans Le Guide du Fondateur ». ",
          },
          {
            title: "2. La Complicité entre Co-Animateurs",
            description: "« Ravis de vous retrouver dans Pause Café. Je suis Alex, et à mes côtés comme toujours, Jordan. Jordan, avant d'aborder la dernière actualité tech, explique à nos auditeurs pourquoi tu as failli rater ton train hier... ». ",
          },
          {
            title: "3. L'Amorce Choc avec Invité",
            description: "« “Si vous ne vous séparez pas de votre plus gros client avant le sixième mois, votre agence court à la catastrophe.” C'est ce que notre invité du jour, David Miller, m'a glissé dix minutes avant d'allumer les micros. Voici comment il a atteint les sept chiffres sans s'épuiser ». ",
          },
          {
            title: "4. Le Récit Narratif Immersif",
            description: "« Par un glacial mardi de février 2014, trente-deux serveurs d'un centre de données en Virginie se sont éteints brutalement. Ce qui s'en est suivi reste le plus grand piratage non élucidé de l'histoire des cryptomonnaies. Vous écoutez Chroniques Obscures ». ",
          },
          {
            title: "5. L'Intro Méthodologique Business & Tech",
            description: "« Vous souhaitez vous positionner en première page de Google sans passer vos journées à courir après les liens externes ? Durant les vingt prochaines minutes, nous décortiquons l'architecture de contenu exacte qui nous a permis de générer 450 000 visites mensuelles ». ",
          },
        ],
      },
    ],
  },
  "audience-growth-estimator": {
    metaTitle: "Prévision de Croissance d'Audience et d'Écoutes | Pod Studio",
    metaDescription:
      "Projetez l'évolution des écoutes de votre podcast sur 12 mois d'après vos chiffres actuels, votre rythme et votre taux de progression. Outil gratuit.",
    overview: [
      "Le Prévisionniste de Croissance d'Audience modélise l'évolution de vos écoutes en appliquant un taux de croissance mensuel à vos statistiques d'épisode selon votre cadence de publication.",
      "Il s'agit d'une simulation illustrative du phénomène de composition dans le temps, utile pour déterminer des objectifs réalistes et mesurer l'effet de petits progrès cumulés sur une année entière.",
    ],
    steps: [
      { title: "Renseignez vos écoutes actuelles", text: "Indiquez votre moyenne d'écoutes par épisode sur 30 jours." },
      { title: "Fixez votre cadence", text: "Précisez le nombre d'épisodes diffusés chaque mois." },
      { title: "Sélectionnez un taux de croissance", text: "Choisissez un pourcentage d'évolution mensuel représentatif de votre tendance ou de votre ambition." },
      { title: "Analysez la projection", text: "Découvrez la trajectoire sur 12 mois et comparez-la aux repères d'audience du secteur." },
    ],
    tips: [
      "Privilégiez d'abord une estimation modérée : les pourcentages cumulés produisent très vite des effets spectaculaires.",
      "Croisez cette prévision avec le calculateur de revenus pour savoir à partir de quand démarcher des sponsors.",
      "Comparez chaque mois vos prévisions avec vos chiffres réels et adaptez vos paramètres.",
    ],
  },
  "description-generator": {
    metaTitle: "Générateur de Descriptions de Podcast | Pod Studio",
    metaDescription:
      "Rédigez des descriptions efficaces pour votre chaîne de podcast et chaque épisode individuel sur Apple Podcasts et Spotify. Outil SEO gratuit.",
    overview: [
      "Le Générateur de Descriptions conçoit deux types de contenus : la présentation globale du podcast (sa promesse et son public cible) ainsi que les résumés d'épisodes individuels.",
      "Des descriptions bien rédigées incitent les auditeurs à s'abonner et aident les annuaires à cerner votre thématique en plaçant les informations stratégiques dès les premières lignes visibles.",
    ],
    steps: [
      { title: "Choisissez votre objectif", text: "Précisez si vous rédigez la présentation de l'émission ou le résumé d'un épisode particulier." },
      { title: "Renseignez l'essentiel", text: "Indiquez votre public visé, les thèmes abordés, les points forts et vos liens d'action." },
      { title: "Surveillez la ligne de coupure", text: "Repérez l'endroit où les applications coupent le texte avant le bouton « plus » et placez vos mots-clés en tête." },
      { title: "Ajustez et copiez", text: "Personnalisez les formulations à votre image et collez le résultat sur votre plateforme d'hébergement." },
    ],
    tips: [
      "Votre première phrase est primordiale : de nombreuses applications n'affichent qu'une ou deux lignes avant « plus ».",
      "Nommez expressément votre auditeur cible pour qu'il s'identifie instantanément en découvrant la description.",
      "Intégrez des mots-clés naturels et fuyez l'accumulation artificielle de termes de recherche.",
    ],
  },
  "category-finder": {
    metaTitle: "Catégories Apple Podcasts et Sélecteur | Pod Studio",
    metaDescription:
      "Consultez la liste officielle des catégories Apple Podcasts et genres Spotify. Trouvez les sous-catégories idéales pour faire émerger votre show. Gratuit.",
    overview: [
      "Le Sélecteur de Catégories vous guide au sein de la taxonomie officielle d'Apple Podcasts et Spotify pour choisir les catégories principales et secondaires offrant le meilleur potentiel de découverte.",
      "Consultez les arborescences officielles, cherchez par thématique et évaluez la concurrence pour inscrire votre émission au bon endroit.",
    ],
    steps: [
      { title: "Recherchez par thématique", text: "Saisissez votre sujet de prédilection, comme « finances personnelles » ou « true crime »." },
      { title: "Comparez les options", text: "Examinez les catégories et sous-catégories correspondantes côte à côte." },
      { title: "Déterminez la catégorie principale", text: "Retenez la catégorie qui caractérise le mieux la grande majorité de vos contenus." },
      { title: "Copiez la balise XML", text: "Copiez la balise iTunes dédiée ou sélectionnez directement la catégorie chez votre hébergeur." },
    ],
    tips: [
      "Privilégiez la catégorie que vos auditeurs consulteraient spontanément, pas seulement celle qui compte le moins de rivaux.",
      "Une sous-catégorie précise offre souvent à un nouveau podcast une meilleure visibilité dans les classements.",
      "Consultez la liste officielle d'Apple avant la mise en ligne, car les désignations évoluent régulièrement.",
    ],
    sections: [
      {
        heading: "Liste des catégories Apple Podcasts",
        intro: "Retrouvez ci-dessous la taxonomie officielle intégrale des catégories et sous-catégories reconnues par Apple Podcasts et Spotify pour le classement des émissions :",
        groups: [
          {
            category: "Arts et Création",
            items: ["Livres", "Design", "Mode et Beauté", "Gastronomie", "Spectacle Vivant", "Arts Visuels"],
          },
          {
            category: "Business et Entreprise",
            items: ["Carrières", "Entrepreneuriat", "Investissement", "Management", "Marketing", "Organisations à But Non Lucratif"],
          },
          {
            category: "Comédie et Humour",
            items: ["Interviews Comiques", "Improvisation", "Stand-Up"],
          },
          {
            category: "Éducation et Savoirs",
            items: ["Formations", "Tutoriels", "Apprentissage des Langues", "Développement Personnel"],
          },
          {
            category: "Fiction et Récits",
            items: ["Fiction Comique", "Drame", "Science-Fiction"],
          },
          {
            category: "Gouvernement et Politique",
            items: ["Administration Publique", "Politique Locale", "Affaires Nationales"],
          },
          {
            category: "Histoire",
            items: ["Histoire Antique", "Médiévale", "Militaire", "Histoire Moderne", "Histoire Régionale"],
          },
          {
            category: "Santé et Forme",
            items: ["Médecines Douces", "Fitness", "Médecine", "Santé Mentale", "Nutrition", "Sexualité"],
          },
          {
            category: "Enfants et Famille",
            items: ["Éveil et Éducation", "Parentalité", "Animaux de Compagnie", "Histoires pour Enfants"],
          },
          {
            category: "Loisirs et Passions",
            items: ["Animation et Manga", "Automobile", "Aviation", "Artisanat", "Jeux de Société", "Jeux Vidéo", "Maison et Jardin"],
          },
          {
            category: "Musique",
            items: ["Critique Musicale", "Histoire de la Musique", "Interviews d'Artistes"],
          },
          {
            category: "Actualités et Information",
            items: ["Économie", "Actualités Quotidiennes", "Culture et Médias", "Politique", "Sports", "Technologie"],
          },
          {
            category: "Religion et Spiritualité",
            items: ["Bouddhisme", "Christianisme", "Hindouisme", "Islam", "Judaïsme", "Spiritualité"],
          },
          {
            category: "Sciences",
            items: ["Astronomie", "Chimie", "Sciences de la Terre", "Biologie", "Mathématiques", "Physique", "Sciences Sociales"],
          },
          {
            category: "Société et Culture",
            items: ["Documentaires", "Journaux Intimes", "Philosophie", "Voyages et Lieux", "Relations Humaines"],
          },
          {
            category: "Sports",
            items: ["Football", "Basket-ball", "Cyclisme", "Running", "Natation", "Tennis", "Sports d'Hiver", "Rugby"],
          },
          {
            category: "Technologie",
            items: ["Intelligence Artificielle", "Développement Web", "High-Tech", "Cybersécurité", "Logiciels"],
          },
          {
            category: "True Crime et Faits Divers",
            items: ["Enquêtes Criminelles", "Affaires Non Résolues", "Grands Procès"],
          },
          {
            category: "Cinéma et Télévision",
            items: ["Débriefs de Séries", "Critiques de Films", "Histoire du Cinéma", "Interviews de Réalisateurs"],
          },
        ],
      },
    ],
  },
  "hook-generator": {
    metaTitle: "Générateur d'Accroches de Podcast | Pod Studio",
    metaDescription:
      "Créez des accroches percutantes et ouvertures audio avec notre générateur d'accroches de podcast gratuit. Réduisez les abandons dès la 1ère minute. Gratuit.",
    overview: [
      "Le Générateur d'Accroches de Podcast crée des ouvertures mémorables et des amorces vidéo intrigantes pour capter l'intérêt des auditeurs dès les toutes premières secondes de votre contenu.",
      "Générez des formulations optimisées pour vos extraits sur TikTok, Instagram Reels, YouTube Shorts et pour vos amorces audio en début d'épisode.",
    ],
    steps: [
      { title: "Renseignez le sujet", text: "Décrivez la thématique de l'épisode ou le secteur auquel s'adresse l'extrait." },
      { title: "Ajoutez un invité (facultatif)", text: "Mentionnez l'invité si sa présence représente un attrait fort." },
      { title: "Sélectionnez un style", text: "Filtrez par type d'accroche et comparez plusieurs formulations proposées." },
      { title: "Copiez et diffusez", text: "Reprenez l'accroche la plus percutante comme texte d'incrustation et liez l'épisode complet." },
    ],
    tips: [
      "Votre première phrase ne dispose que de deux secondes pour retenir l'attention : commencez par l'affirmation la plus concrète.",
      "Assurez-vous que l'extrait tienne réellement la promesse de l'accroche pour préserver la confiance de vos auditeurs.",
      "Ajoutez des sous-titres à chacune de vos vidéos : une large part des utilisateurs les regardent sans le son.",
    ],
  },
  "transcript-formatter": {
    metaTitle: "Format de Transcription de Podcast | Pod Studio",
    metaDescription:
      "Nettoyez vos textes audio vers le format de transcription de podcast standard. Ajoutez les intervenants et supprimez les tics de langage. Outil gratuit.",
    overview: [
      "Le Formateur de Transcriptions de Podcast nettoie les fichiers issus des outils de reconnaissance vocale pour les convertir au format de transcription de podcast standard : noms d'intervenants clairement identifiés, repères temporels ordonnés et paragraphes fluides.",
      "L'outil s'exécute entièrement dans votre navigateur pour une confidentialité totale, sans envoyer vos données vers des serveurs externes.",
    ],
    steps: [
      { title: "Collez votre transcription", text: "Copiez le texte exporté depuis votre service de transcription et déposez-le dans l'éditeur." },
      { title: "Nommez les intervenants", text: "Remplacez les étiquettes génériques comme « INTERVENANT_01 » par les vrais noms et choisissez de garder ou non les repères." },
      { title: "Contrôlez l'affichage", text: "Vérifiez le texte formaté et procédez aux ultimes corrections manuelles si nécessaire." },
      { title: "Copiez ou téléchargez", text: "Récupérez le texte nettoyé pour l'intégrer à votre site web ou dans la description de l'épisode." },
    ],
    tips: [
      "Publier des transcriptions rend vos contenus accessibles et fournit aux moteurs de recherche un texte riche à explorer.",
      "Supprimez les hésitations pour fluidifier la lecture, tout en veillant à préserver le sens initial des propos.",
      "Relisez systématiquement les noms propres et le jargon technique, souvent mal interprétés par les outils automatiques.",
    ],
    sections: [
      {
        heading: "Format standard de transcription de podcast (exemple)",
        intro: "Les annuaires de podcast et les moteurs de recherche attendent des transcriptions structurées avec des étiquettes de locuteur distinctes, des repères temporels réguliers et des paragraphes aérés :",
        template: `[00:00:02] Sarah Mercier (Animatrice) :
Bienvenue dans Frontières Créatives. Aujourd'hui, nous explorons comment les créateurs audio indépendants peuvent bâtir des revenus pérennes sans renier leur ligne éditoriale. Mon invité du jour est Marc Vaneau, fondateur d'AudioFirst Média. Marc, sois le bienvenu dans l'émission.

[00:00:24] Marc Vaneau (Invité) :
Merci infiniment pour ton accueil, Sarah. Très heureux d'échanger avec toi. Pour être franc, la principale erreur des animateurs débutants est de focaliser leur énergie sur les tarifs publicitaires au CPM avant même d'avoir stabilisé leur boucle de rétention d'écoute.

[00:00:41] Sarah Mercier (Animatrice) :
Approfondissons ce point. Quand tu parles de "boucle de rétention", comment cela se matérialise-t-il concrètement pour quelqu'un qui publie ses vingt premiers épisodes ?

[00:00:52] Marc Vaneau (Invité) :
Cela repose sur trois piliers : une amorce d'épisode prévisible qui annonce une valeur claire dès les trente premières secondes, une progression rythmée pour ne jamais perdre l'attention de l'auditeur, et un appel à l'action unique et précis en toute fin d'émission.`,
      },
    ],
  },
  "trailer-script-builder": {
    metaTitle: "Script de Bande-Annonce de Podcast | Pod Studio",
    metaDescription:
      "Rédigez la bande-annonce de votre podcast : promesse, public cible et appel à s'abonner. Modèle structuré pour format 60-90 secondes. Gratuit.",
    overview: [
      "Le Créateur de Script de Bande-Annonce vous propose une structure éprouvée pour présenter votre émission : une accroche intrigante, la promesse centrale, votre public de prédilection et une invitation claire à s'abonner.",
      "De nombreuses applications affichent cette bande-annonce tout en haut de votre page de podcast : c'est souvent le premier contact avec vos futurs fidèles auditeurs.",
    ],
    steps: [
      { title: "Renseignez votre projet", text: "Indiquez le titre du podcast, votre prénom et votre rythme de parution." },
      { title: "Formulez la promesse", text: "Énoncez la grande question que votre émission explore et le bénéfice promis aux auditeurs." },
      { title: "Générez la trame", text: "Obtenez un texte prêt à être enregistré avec accroche, développement et appel à l'action." },
      { title: "Enregistrez et ajustez", text: "Lisez-le au micro en chronométrant et supprimez toute redondance." },
    ],
    tips: [
      "Intégrez un court extrait d'un futur épisode si vous en disposez : c'est la meilleure preuve concrète de votre ton.",
      "Terminez sur un appel à l'action unique : suivre l'émission sur leur application préférée.",
      "Pensez à renouveler votre bande-annonce si le format ou l'angle de votre émission vient à évoluer.",
    ],
  },
  "review-response-generator": {
    metaTitle: "Remerciements pour Avis de Podcast | Pod Studio",
    metaDescription:
      "Rédigez des remerciements chaleureux pour les avis d'auditeurs de votre podcast, positifs comme constructifs. Modèles professionnels gratuits.",
    overview: [
      "Le Générateur de Réponses aux Avis vous accompagne pour remercier votre communauté et rédiger des messages de gratitude à lire au micro durant vos épisodes pour inciter d'autres personnes à noter votre émission.",
      "Il propose des réponses appropriées aux avis élogieux, aux critiques constructives et aux retours plus réservés, en conservant un ton chaleureux et diplomate.",
    ],
    steps: [
      { title: "Indiquez l'avis reçu", text: "Renseignez le prénom ou pseudonyme de l'auditeur ainsi que son commentaire." },
      { title: "Précisez l'esprit du message", text: "Sélectionnez s'il s'agit d'un retour 5 étoiles, d'une remarque constructive ou d'une critique." },
      { title: "Choisissez la formule", text: "Obtenez un texte à lire dans l'épisode, une réponse pour les réseaux et un mot de remerciement privé." },
      { title: "Personnalisez la formulation", text: "Reprenez un détail cité par l'auditeur pour montrer que son avis a été lu avec grande attention." },
    ],
    tips: [
      "Lisez un ou deux avis d'auditeurs au micro chaque mois : c'est le levier le plus efficace pour stimuler de nouvelles notes.",
      "Ne tournez jamais en dérision un auditeur critique ; répondez aux arguments avec courtoisie.",
      "Remerciez pour les suggestions précises et mentionnez les ajustements apportés grâce à elles.",
    ],
  },
  "collab-finder": {
    metaTitle: "Emails de Partenariat et Collab Podcast | Pod Studio",
    metaDescription:
      "Rédigez des propositions d'invitations et de partenariats entre podcasts qui obtiennent des réponses. Mettez en avant la valeur mutuelle. Outil gratuit.",
    overview: [
      "Le Rédacteur de Propositions de Partenariat élabore des modèles d'e-mails pour vous proposer comme invité, solliciter un intervenant de marque ou organiser une promotion croisée entre deux émissions complémentaires.",
      "Chaque message précise à qui s'adresse votre podcast, la dynamique proposée, le bénéfice réciproque et une étape suivante facile à valider pour les créateurs occupés.",
    ],
    steps: [
      { title: "Définissez votre démarche", text: "Proposez votre expertise comme invité, invitez une personnalité ou initiez un échange de visibilité." },
      { title: "Renseignez les deux podcasts", text: "Indiquez l'émission visée, le nom de l'hôte et la valeur concrète que vous apportez à son audience." },
      { title: "Générez la proposition", text: "Obtenez un texte clair avec un objet percutant, une argumentation ciselée et un appel à l'action simple." },
      { title: "Personnalisez et envoyez", text: "Mentionnez un épisode précis de leur chaîne que vous avez apprécié, puis envoyez depuis votre messagerie." },
    ],
    tips: [
      "Gardez votre premier message court : cinq à six phrases bien tournées suffisent amplement.",
      "Ne communiquez que des chiffres d'audience vérifiables ; des statistiques exagérées détruisent immédiatement la confiance.",
      "Effectuez une relance courtoise après sept jours si vous êtes resté sans réponse.",
    ],
  },
};
