import type { GuideExtrasRecord } from "./types";

export const frGuideExtras: GuideExtrasRecord = {
  "podcast-sponsorship-cpm-guide-2026": {
    metaTitle: "Guide du Sponsoring et des CPM Podcast 2026 | Pod Studio",
    readMinutes: 5,
    sections: [
      {
        heading: "Exemple chiffré : tarifer un épisode",
        paragraphs: [
          "Imaginons que vos épisodes atteignent en moyenne 5 000 téléchargements sur leurs 30 premiers jours. Divisez par 1 000 pour obtenir 5 « unités », puis multipliez par le CPM de chaque emplacement.",
          "À 18 $ le pre-roll, 25 $ le mid-roll lu par l'animateur et 10 $ le post-roll, un épisode entièrement vendu vaut 90 $ + 125 $ + 50 $ = 265 $. Avec quatre épisodes par mois et tous les emplacements vendus, cela représente environ 1 060 $ par mois avant commission d'agence ou de régie.",
        ],
        formula: "5 000 ÷ 1 000 = 5 → (5 × 18 $) + (5 × 25 $) + (5 × 10 $) = 265 $ par épisode",
      },
      {
        heading: "Publicités lues par l'animateur ou programmatiques",
        paragraphs: [
          "Les publicités lues par l'animateur sont rédigées ou validées par le sponsor et lues avec votre voix. Les auditeurs leur font confiance, d'où les tarifs les plus élevés. Elles peuvent être enregistrées dans l'épisode ou insérées dynamiquement pour être remplacées plus tard.",
          "Les publicités programmatiques sont achetées automatiquement via une régie et insérées par votre hébergeur. Leur CPM est généralement plus bas, mais elles remplissent l'inventaire non vendu en direct — pratique pour les anciens épisodes qui continuent d'être téléchargés.",
        ],
      },
      {
        heading: "Ce qu'il faut mettre dans une proposition aux sponsors",
        paragraphs: ["Les sponsors veulent évaluer vite l'adéquation et le risque. Un kit média d'une page doit couvrir :"],
        list: [
          { title: "Profil de l'audience", description: "Qui écoute, ce qui l'intéresse et pourquoi cela correspond aux clients du sponsor." },
          { title: "Téléchargements vérifiés", description: "Moyenne de téléchargements à 30 jours par épisode, avec captures de l'hébergeur si besoin." },
          { title: "Emplacements et tarifs", description: "Les emplacements disponibles, leur durée et votre CPM ou prix forfaitaire." },
          { title: "Preuves d'efficacité", description: "Une lecture d'exemple, des résultats passés ou un code promo permettant de mesurer la réponse." },
        ],
      },
      {
        heading: "Pistes pour les petites émissions",
        paragraphs: [
          "Si les contrats au CPM ne sont pas encore rentables, beaucoup d'émissions indépendantes commencent par un forfait par épisode, des liens d'affiliation ou des codes promo rémunérés à la vente, et le soutien direct des auditeurs via des abonnements. Ces premiers résultats servent ensuite à négocier des contrats au CPM quand l'audience grandit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quel est un bon CPM pour un petit podcast ?",
        answer:
          "Il n'existe pas de tarif fixe. Les fourchettes de ce guide sont un point de départ : les émissions de niche avec un public bien défini et prêt à acheter peuvent souvent facturer davantage, les émissions de divertissement généralistes moins. Beaucoup de petites émissions commencent par des forfaits ou de l'affiliation, puis passent au CPM quand leurs téléchargements se stabilisent.",
      },
      {
        question: "Combien de téléchargements faut-il pour trouver des sponsors ?",
        answer:
          "Il n'y a pas de seuil universel. Les régies fixent souvent des minimums, mais des sponsors directs dans une niche précise peuvent travailler avec de petites émissions si l'audience correspond bien. La régularité et des données fiables comptent plus qu'un gros chiffre ponctuel.",
      },
      {
        question: "Les sponsors paient-ils au téléchargement ou à l'épisode ?",
        answer:
          "Les contrats au CPM sont tarifés pour 1 000 téléchargements, généralement comptés sur les 30 à 45 premiers jours. Certains sponsors préfèrent un forfait par épisode ou par campagne, et l'affiliation rémunère à la vente ou à l'inscription. Mettez toujours par écrit la façon dont les téléchargements sont mesurés et rapportés.",
      },
    ],
  },
  "apple-spotify-cover-art-specs-guide": {
    metaTitle: "Pochette Podcast : Specs Apple et Spotify | Pod Studio",
    readMinutes: 5,
    sections: [
      {
        heading: "Concevoir d'abord pour la vignette",
        paragraphs: [
          "La plupart des gens découvrent votre pochette à la taille d'un bout de doigt : dans les résultats de recherche, les classements et les listes « à suivre ». Un visuel superbe en grand peut devenir une tache illisible une fois réduit.",
        ],
        list: [
          { title: "Peu de mots, en grand", description: "Le nom de l'émission dans une police affirmée suffit souvent. Gardez les slogans pour la description." },
          { title: "Contraste maximal", description: "Texte clair sur fond foncé, ou l'inverse. Évitez les photos chargées derrière le texte." },
          { title: "Un seul point focal", description: "Un visage, une icône ou le titre — pas les trois en concurrence." },
        ],
      },
      {
        heading: "Zones de sécurité et recadrage",
        paragraphs: [
          "Certaines applis arrondissent les coins ou ajoutent de petits badges. Gardez titre, logo et visages dans la zone centrale du carré — environ les 80 % du centre — pour que rien d'important ne soit coupé.",
        ],
      },
      {
        heading: "Motifs de refus fréquents",
        paragraphs: ["Au-delà de la taille et du format, les annuaires vérifient le contenu et la qualité. Évitez :"],
        list: [
          { title: "Logos et marques des plateformes", description: "N'utilisez pas les logos d'Apple Podcasts ou de Spotify et ne suggérez pas un partenariat inexistant." },
          { title: "Images basse résolution ou déformées", description: "Un visuel agrandi, flou ou étiré peut être refusé ou paraître peu professionnel." },
          { title: "Images explicites ou trompeuses", description: "La pochette doit être appropriée et représenter honnêtement l'émission." },
        ],
      },
      {
        heading: "Check-list avant l'envoi",
        paragraphs: ["Avant l'envoi, vérifiez que votre fichier est :"],
        list: [
          { title: "Carré en 3000 × 3000 px", description: "Exactement 1:1, dans la plage 1400–3000 px." },
          { title: "En JPEG ou PNG RVB", description: "Espace colorimétrique RVB, pas CMJN, avec la bonne extension .jpg ou .png." },
          { title: "Lisible en 50 × 50 px", description: "Contrôlez-le dans un petit aperçu avant de publier." },
          { title: "Enregistré sous un nouveau nom", description: "Lors d'une mise à jour, un nouveau nom de fichier aide les applis à détecter le changement." },
        ],
      },
    ],
    faqs: [
      {
        question: "Quelle taille pour une pochette de podcast ?",
        answer:
          "Utilisez une image carrée de 3000 × 3000 pixels. Apple Podcasts accepte de 1400 × 1400 à 3000 × 3000 pixels en JPEG ou PNG, en RVB ; un carré de 3000 px convient aussi à Spotify et aux autres applis.",
      },
      {
        question: "Puis-je utiliser la même pochette sur Apple Podcasts et Spotify ?",
        answer:
          "Oui. Les deux lisent la pochette depuis votre flux RSS ou les réglages de votre hébergeur : un seul carré de 3000 × 3000 px conforme aux exigences d'Apple fonctionne sur les principales applis.",
      },
      {
        question: "Pourquoi ma nouvelle pochette ne s'affiche-t-elle pas ?",
        answer:
          "Les applis mettent les pochettes en cache : une mise à jour peut prendre de quelques heures à plusieurs jours. Vérifiez que votre flux pointe vers l'URL de la nouvelle image — un nouveau nom de fichier aide — et que le fichier respecte toujours la taille et le format requis.",
      },
    ],
  },
  "how-to-write-clickable-episode-titles": {
    metaTitle: "Écrire des Titres d'Épisodes de Podcast | Pod Studio",
    description:
      "Des formules éprouvées pour des titres d'épisodes qui se démarquent sur Apple Podcasts et Spotify, avec exemples, conseils de recherche et erreurs à éviter.",
    firstHeading: "Pourquoi le titre de l'épisode compte autant",
    readMinutes: 5,
    sections: [
      {
        heading: "Cinq autres formules à essayer",
        paragraphs: ["Combinez-les avec les trois archétypes ci-dessus pour explorer plusieurs angles d'un même épisode :"],
        list: [
          { title: "4. La promesse pratique", description: "« Comment lancer un podcast avec 100 € de budget » — clair, recherché et utile." },
          { title: "5. La liste numérotée", description: "« 7 questions d'interview qui font naître de meilleures histoires » — l'attente est claire d'un coup d'œil." },
          { title: "6. L'accroche par l'invité", description: "« [Nom de l'invité] : bâtir une marque sans réseaux sociaux » — quand l'invité est l'attraction." },
          { title: "7. La question directe", description: "« L'e-mail de prospection est-il mort en 2026 ? » — donne envie de connaître la réponse." },
          { title: "8. Le récit d'erreur", description: "« L'erreur de prix qui nous a coûté notre première année » — un enjeu concret, une vraie leçon." },
        ],
      },
      {
        heading: "Titres et recherche de podcasts",
        paragraphs: [
          "Les moteurs de recherche d'Apple Podcasts et de Spotify tiennent compte des mots présents dans les titres et descriptions de l'émission et des épisodes. Employer les mots que vos auditeurs taperaient — « budget », « préparation marathon », « true crime Lyon » — aide les bonnes personnes à trouver l'épisode.",
          "Placez-les tôt, car les titres sont souvent coupés sur petit écran. Un sujet clair au début vaut mieux qu'une formule astucieuse qu'on ne comprend qu'après l'écoute.",
        ],
      },
      {
        heading: "Erreurs de titre fréquentes",
        paragraphs: ["Ces habitudes font perdre des écoutes sans bruit :"],
        list: [
          { title: "Commencer par le numéro d'épisode", description: "Les applis affichent déjà le numéro ; « Ép. 112 : » gaspille les caractères les plus visibles." },
          { title: "Teasers vagues", description: "« Une super conversation » ne dit rien à un nouvel auditeur sur la raison d'écouter." },
          { title: "Clickbait non tenu", description: "Trop promettre entraîne des abandons rapides et des avis négatifs." },
          { title: "Blagues d'initiés", description: "Les références comprises seulement des habitués rendent l'épisode invisible pour les nouveaux." },
        ],
      },
      {
        heading: "Une routine simple pour titrer",
        paragraphs: [
          "Écrivez au moins dix options avec différentes formules, gardez-en trois et lisez-les sur votre téléphone comme un auditeur. Choisissez celle qui annonce le plus clairement le bénéfice. Avec le temps, comparez les téléchargements de la première semaine selon le style de titre pour savoir ce qui parle à votre public.",
        ],
      },
    ],
    faqs: [
      {
        question: "Faut-il mettre le numéro d'épisode dans le titre ?",
        answer:
          "En général non. Les flux de podcast disposent d'un champ dédié au numéro d'épisode que les applis peuvent afficher ; le répéter dans le titre prend une place mieux utilisée pour le sujet. Les émissions feuilletonnantes où l'ordre compte sont la principale exception.",
      },
      {
        question: "Quelle longueur pour un titre d'épisode ?",
        answer:
          "Il n'existe pas de limite officielle valable partout, mais plus court est plus sûr. Placez l'idée principale dans les premiers mots pour qu'elle résiste à la troncature sur téléphone, en voiture ou sur une montre.",
      },
      {
        question: "Puis-je modifier le titre d'un épisode déjà publié ?",
        answer:
          "Oui. Modifiez-le chez votre hébergeur et le changement passera dans votre flux RSS ; les applis peuvent mettre un peu de temps à se mettre à jour. Ne changez pas le GUID de l'épisode, sinon les applis risquent de le traiter comme un nouvel épisode.",
      },
    ],
  },
};
