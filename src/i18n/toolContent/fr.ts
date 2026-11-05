import type { ToolContentRecord } from "./types";

export const frToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Générateur de Titres d'Épisode de Podcast | Pod Studio",
    metaDescription:
      "Transformez le sujet d'un épisode en dizaines de titres clairs et accrocheurs. Filtrez par style — curiosité, tutoriel, contre-pied — et copiez. Gratuit.",
    overview: [
      "Le Générateur de Titres transforme un sujet, et éventuellement le nom d'un invité, en une longue liste d'idées fondées sur des modèles éprouvés : promesses pratiques, curiosité, contre-pied, listes numérotées et accroches centrées sur l'invité.",
      "Il s'adresse aux animateurs qui savent de quoi parle l'épisode mais peinent à le formuler. Explorez rapidement plusieurs angles, puis choisissez le titre qui décrit honnêtement l'épisode et se lit bien sur un petit écran.",
    ],
    steps: [
      { title: "Décrivez l'épisode", text: "Saisissez le sujet principal en quelques mots, par exemple « budget des freelances » ou « les 100 premiers abonnés »." },
      { title: "Ajoutez un invité (facultatif)", text: "Indiquez le nom ou l'expertise de l'invité quand c'est la raison principale d'écouter." },
      { title: "Filtrez par style", text: "Passez des formules de curiosité aux tutoriels ou au contre-pied pour comparer les angles." },
      { title: "Copiez ou exportez", text: "Copiez un titre ou exportez toute la liste en fichier texte pour la partager avec votre équipe." },
    ],
    tips: [
      "Placez les mots les plus précis et recherchés dans la première moitié du titre : les applis coupent souvent la fin.",
      "Ne promettez que ce que l'épisode tient. Un titre exact retient mieux l'audience et évite les avis négatifs.",
      "Laissez de côté le numéro d'épisode et le nom de l'émission, sauf si vos auditeurs en ont besoin.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Générateur de Notes d'Épisode pour Podcast | Pod Studio",
    metaDescription:
      "Créez des notes d'épisode claires : résumé, invité, horodatages, points clés et liens. Export en Markdown, HTML ou texte brut. Gratuit, sans inscription.",
    overview: [
      "Le Générateur de Show Notes organise les informations de votre épisode en notes bien structurées : un court résumé, l'invité, les chapitres horodatés, les points clés et les ressources citées.",
      "Le résultat est disponible en Markdown, HTML ou texte brut : collez-le directement dans Buzzsprout, Libsyn, Podbean, Spotify for Creators, YouTube ou votre site sans le remettre en forme.",
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
  },
  "podcast-name-generator": {
    metaTitle: "Générateur de Noms de Podcast Gratuit | Pod Studio",
    metaDescription:
      "Trouvez des idées de noms de podcast mémorables selon votre thématique, un mot-clé et votre style de marque. Vérifiez ensuite domaines et marques. Gratuit.",
    overview: [
      "Le Générateur de Noms propose des noms d'émission à partir de votre thématique, d'un mot ou thème personnalisé facultatif et du style de marque souhaité, du plus explicite au plus créatif.",
      "C'est un outil de brainstorming : il ne vérifie pas la disponibilité des noms de domaine ni des marques. Utilisez-le pour établir une courte liste, puis vérifiez le nom auprès d'un registraire, dans les annuaires de podcasts et dans une base de marques avant de l'annoncer.",
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
  },
  "episode-outline-builder": {
    metaTitle: "Conducteur d'Épisode de Podcast (Run of Show) | Pod Studio",
    metaDescription:
      "Créez un conducteur minuté : cold open, intro, séquences, messages sponsors et conclusion. Gardez vos enregistrements dans les temps. Modèle gratuit.",
    overview: [
      "Le Créateur de Conducteur génère une feuille de route minutée qui liste chaque séquence, son horaire approximatif de début et sa durée prévue.",
      "Animateurs, invités et producteurs restent synchronisés sur les virgules musicales, les messages sponsors, les blocs d'interview et les appels à l'action, sans devoir scénariser chaque mot.",
    ],
    steps: [
      { title: "Nommez l'épisode", text: "Saisissez un titre provisoire pour retrouver facilement le conducteur." },
      { title: "Fixez la durée cible", text: "Indiquez la durée totale en minutes pour voir comment s'additionnent les séquences." },
      { title: "Modifiez les séquences", text: "Ajustez ou ajoutez cold open, intro, actes principaux, pause publicitaire et conclusion, avec des notes pour chacun." },
      { title: "Exportez le conducteur", text: "Exportez-le en Markdown et envoyez-le à votre invité ou producteur avant l'enregistrement." },
    ],
    tips: [
      "Placez le message sponsor de mi-parcours à une pause naturelle, entre le tiers et la moitié de l'épisode.",
      "Gardez quelques minutes de marge pour les digressions : les meilleurs moments sont souvent imprévus.",
      "Envoyez le conducteur à l'avance pour que vos invités préparent des histoires, pas seulement des réponses.",
    ],
  },
  "guest-question-generator": {
    metaTitle: "Générateur de Questions d'Interview pour Podcast | Pod Studio",
    metaDescription:
      "Générez des questions d'interview pour tout invité : brise-glace, parcours, échecs et rebonds, leçons et questions rapides. Gratuit, sans inscription.",
    overview: [
      "Le générateur de Questions pour Invités construit un arc complet d'interview : des brise-glace et du parcours jusqu'aux tournants, aux leçons apprises, aux prédictions et à une série de questions rapides.",
      "Saisissez le nom de l'invité, sa profession et le sujet de l'épisode pour obtenir une liste de départ adaptée, à compléter avec vos propres recherches.",
    ],
    steps: [
      { title: "Renseignez l'invité", text: "Indiquez son nom, sa profession ou son rôle, et le sujet principal de l'épisode." },
      { title: "Parcourez par étape", text: "Filtrez les questions par étape : brise-glace, parcours, échecs et rebonds, jusqu'à la conclusion." },
      { title: "Relisez l'arc", text: "Gardez les questions qui appellent des histoires plutôt que des réponses en un mot." },
      { title: "Copiez ou exportez la fiche", text: "Copiez la fiche de préparation ou exportez-la en texte, puis ajoutez des relances sur l'actualité de l'invité." },
    ],
    tips: [
      "Demandez un moment précis — « Racontez-moi le jour où… » — plutôt qu'une opinion générale.",
      "Gardez deux ou trois questions incontournables et laissez le reste suivre la conversation.",
      "Réservez la question la plus personnelle pour le milieu de l'entretien, quand l'invité est à l'aise.",
    ],
  },
  "monetization-calculator": {
    metaTitle: "Calculateur CPM et Revenus Sponsoring Podcast | Pod Studio",
    metaDescription:
      "Estimez vos revenus publicitaires selon les écoutes, le CPM, les emplacements et le taux de remplissage. Comparez pre-roll, mid-roll et post-roll. Gratuit.",
    overview: [
      "Le Calculateur de CPM estime ce que votre émission peut gagner en publicité avec la formule standard : (téléchargements ÷ 1 000) × CPM × emplacements vendus.",
      "Ajustez les téléchargements par épisode, la fréquence de publication, les emplacements pre-roll, mid-roll et post-roll, le taux de remplissage et les abonnements d'auditeurs pour voir des projections mensuelles, par épisode et annuelles.",
    ],
    steps: [
      { title: "Saisissez vos téléchargements", text: "Utilisez la moyenne de téléchargements par épisode sur 30 jours, fournie par votre hébergeur." },
      { title: "Indiquez la fréquence", text: "Ajoutez le nombre d'épisodes publiés chaque mois." },
      { title: "Configurez les emplacements", text: "Activez pre-roll, mid-roll et post-roll, fixez un CPM pour chacun et estimez le taux de remplissage." },
      { title: "Analysez et exportez", text: "Comparez la répartition, ajoutez les revenus d'abonnement si vous en avez, et exportez la projection." },
    ],
    tips: [
      "Les mid-rolls lus par l'animateur obtiennent généralement les CPM les plus élevés, car l'attention est maximale.",
      "Restez prudent sur le taux de remplissage : la plupart des émissions indépendantes ne vendent pas tout chaque mois.",
      "Utilisez des chiffres vérifiés pour démarcher ; les annonceurs peuvent demander des captures de votre hébergeur.",
    ],
  },
  "cover-art-preview": {
    metaTitle: "Aperçu de Pochette Podcast : Apple et Spotify | Pod Studio",
    metaDescription:
      "Visualisez votre pochette dans Apple Podcasts, Spotify, sur l'écran verrouillé et en petite vignette. Vérifiez taille et lisibilité. Gratuit et privé.",
    overview: [
      "L'Aperçu de Pochette montre votre visuel dans des mises en page de type Apple Podcasts et Spotify, sur l'écran verrouillé d'un téléphone et en minuscule vignette de recherche.",
      "Votre image ne quitte jamais votre appareil. Elle est comparée à l'exigence courante des annuaires — une image carrée entre 1400 × 1400 et 3000 × 3000 pixels — pour repérer les problèmes avant l'envoi.",
    ],
    steps: [
      { title: "Importez votre visuel", text: "Déposez un fichier JPG ou PNG (ou testez le visuel d'exemple). Il est traité uniquement dans votre navigateur." },
      { title: "Vérifiez les spécifications", text: "Contrôlez que l'image est carrée et dans la plage de pixels recommandée." },
      { title: "Changez d'aperçu", text: "Comparez le flux Apple Podcasts, l'écran de lecture Spotify, l'écran verrouillé, la zone de sécurité et la vignette 50 × 50 px." },
      { title: "Ajustez et retestez", text: "Modifiez la taille du texte ou le contraste dans votre logiciel, puis importez la nouvelle version." },
    ],
    tips: [
      "Si le titre est illisible en vignette, réduisez le nombre de mots ou agrandissez la police.",
      "Évitez le texte important près des bords : certaines applis arrondissent les coins.",
      "Testez en mode clair et sombre ; un texte fin et foncé peut disparaître sur fond sombre.",
    ],
  },
  "rss-feed-validator": {
    metaTitle: "Validateur de Flux RSS de Podcast Gratuit | Pod Studio",
    metaDescription:
      "Vérifiez votre flux RSS : balises manquantes, enclosures cassées, pochette et GUID avant de soumettre à Apple Podcasts ou Spotify. Gratuit et privé.",
    overview: [
      "Le Validateur de Flux RSS repère les problèmes qui bloquent ou retardent le plus souvent la publication : XML invalide, métadonnées manquantes, problèmes de pochette, GUID dupliqués ou absents et épisodes sans enclosure audio exploitable.",
      "Chaque résultat est expliqué simplement, avec ce qu'il faut corriger, pour régler le problème dans votre hébergeur avant qu'Apple Podcasts ou Spotify ne refuse le flux.",
    ],
    steps: [
      { title: "Collez votre flux", text: "Collez le XML de votre flux (ou chargez l'exemple) dans le validateur." },
      { title: "Lancez l'analyse", text: "Le validateur analyse le flux dans votre navigateur et vérifie les balises obligatoires et recommandées." },
      { title: "Lisez les résultats", text: "Traitez d'abord les erreurs, puis les avertissements. Chaque point explique pourquoi il compte." },
      { title: "Corrigez et revérifiez", text: "Modifiez les réglages chez votre hébergeur, collez le flux mis à jour et relancez l'analyse." },
    ],
    tips: [
      "Ne changez jamais le GUID d'un épisode publié : les applis pourraient le traiter comme un nouvel épisode.",
      "Vérifiez que la balise explicit est correcte ; elle influence où votre émission peut apparaître.",
      "Revalidez après un changement d'hébergeur ou de pochette : ce sont les causes d'erreurs les plus fréquentes.",
    ],
  },
  "episode-timestamp-generator": {
    metaTitle: "Générateur de Chapitres et Horodatages Podcast | Pod Studio",
    metaDescription:
      "Transformez vos notes en chapitres propres pour YouTube, Spotify et vos notes d'épisode. Format horaire cohérent en un clic. Gratuit, sans inscription.",
    overview: [
      "Le Générateur de Chapitres transforme vos notes d'enregistrement en repères propres comme « 00:00 Introduction » et « 05:12 Parcours de l'invité », avec une frise visuelle de l'épisode.",
      "Utilisez le résultat dans les descriptions YouTube et Spotify et dans vos notes pour que les auditeurs accèdent directement à ce qui les intéresse et que les moteurs de recherche comprennent mieux l'épisode.",
    ],
    steps: [
      { title: "Ajoutez vos chapitres", text: "Saisissez chaque chapitre avec une heure de début et un titre, ou collez une liste rapide comme « 0:00 Intro, 5:30 Déclic »." },
      { title: "Gardez un format cohérent", text: "Utilisez un seul format horaire et listez les chapitres dans l'ordre." },
      { title: "Vérifiez la frise", text: "Repérez sur la frise les trous, doublons ou chapitres trop courts." },
      { title: "Copiez les chapitres", text: "Copiez la liste dans vos notes, la description YouTube ou votre hébergeur." },
    ],
    tips: [
      "YouTube exige que le premier horodatage soit 00:00 pour afficher les chapitres.",
      "Rédigez les titres de chapitre comme des mini-titres : le précis l'emporte (« Erreurs de prix la première année » plutôt que « Partie 2 »).",
      "Visez des chapitres de quelques minutes au moins ; trop de micro-chapitres nuisent à la lecture.",
    ],
  },
  "intro-script-generator": {
    metaTitle: "Générateur d'Intro et d'Accroche pour Podcast | Pod Studio",
    metaDescription:
      "Écrivez une intro courte et une accroche qui donnent envie de rester. Formats interview, solo et récit. Générateur de script d'introduction gratuit.",
    overview: [
      "Le Générateur d'Intros vous aide à écrire les 30 à 60 premières secondes : une accroche qui suscite la curiosité, suivie d'une courte présentation qui fixe les attentes.",
      "Choisissez un format et un ton, ajoutez quelques détails et obtenez un script prêt à lire, en vue téléprompteur, à adapter à votre voix.",
    ],
    steps: [
      { title: "Choisissez format et ton", text: "Sélectionnez interview, solo ou récit, et un ton énergique, posé ou conversationnel." },
      { title: "Ajoutez les détails", text: "Indiquez le sujet ou la promesse de l'épisode et, le cas échéant, le nom et le titre de l'invité." },
      { title: "Générez le script", text: "Obtenez un court script qui va de l'accroche à la présentation puis à « voici ce que vous allez apprendre »." },
      { title: "Lisez-le à voix haute", text: "Répétez-le une ou deux fois et supprimez toute phrase qui ne vous ressemble pas." },
    ],
    tips: [
      "Entrez dans le vif du sujet en 15 secondes : c'est là que beaucoup d'auditeurs décident de rester.",
      "Une citation forte de l'invité fait un excellent cold open avant le générique.",
      "Gardez les intros récurrentes courtes ; les annonces et sponsors longs viennent plus tard.",
    ],
  },
  "audience-growth-estimator": {
    metaTitle: "Estimateur de Croissance d'Audience Podcast | Pod Studio",
    metaDescription:
      "Projetez vos téléchargements sur 12 mois à partir de vos chiffres actuels, de votre rythme de publication et d'un taux de croissance mensuel. Gratuit.",
    overview: [
      "L'Estimateur de Croissance projette vos téléchargements futurs en appliquant un taux de croissance mensuel à vos téléchargements actuels par épisode, multiplié par votre rythme de publication.",
      "C'est une illustration simple de la croissance composée, pas une prédiction : elle ne tient compte ni de la saisonnalité, ni des pics viraux, ni de l'attrition. Servez-vous-en pour fixer des objectifs réalistes.",
    ],
    steps: [
      { title: "Saisissez vos téléchargements", text: "Ajoutez votre moyenne actuelle de téléchargements à 30 jours par épisode." },
      { title: "Indiquez votre rythme", text: "Saisissez le nombre d'épisodes publiés chaque mois." },
      { title: "Choisissez un taux", text: "Sélectionnez un pourcentage mensuel correspondant à votre tendance récente ou à votre objectif." },
      { title: "Lisez le graphique", text: "Consultez la trajectoire sur 12 mois et situez-vous par rapport aux centiles mondiaux de téléchargements." },
    ],
    tips: [
      "Commencez par un taux modeste : la croissance composée fait vite exploser les hypothèses optimistes.",
      "Associez cette projection au calculateur de CPM pour voir quand le sponsoring devient réaliste.",
      "Comparez chaque mois la projection à vos chiffres réels et ajustez.",
    ],
  },
  "description-generator": {
    metaTitle: "Générateur de Descriptions de Podcast et d'Épisode | Pod Studio",
    metaDescription:
      "Rédigez des descriptions claires de votre émission et de chaque épisode pour Apple Podcasts et Spotify, avec repère de coupure « plus » sur mobile. Gratuit.",
    overview: [
      "Le Générateur de Descriptions rédige deux types de textes : la description de l'émission, qui présente sa promesse et son public, et les descriptions d'épisode, qui résument un enregistrement.",
      "Une bonne description aide à décider de s'abonner et aide les applis à comprendre votre émission : l'outil place donc l'essentiel au début, là où les applis l'affichent.",
    ],
    steps: [
      { title: "Choisissez un mode", text: "Indiquez si vous rédigez la description de l'émission ou d'un épisode." },
      { title: "Ajoutez l'essentiel", text: "Saisissez votre public cible, les sujets et enseignements clés, et vos liens ou appel à l'action." },
      { title: "Vérifiez la coupure", text: "Voyez où les applis mobiles coupent le texte avec « …plus » et placez l'accroche et le mot-clé en premier." },
      { title: "Modifiez et collez", text: "Adaptez le texte à votre voix et collez-le chez votre hébergeur." },
    ],
    tips: [
      "La première phrase compte le plus : beaucoup d'applis n'affichent qu'une ou deux lignes avant « plus ».",
      "Nommez directement votre public (« pour les fondateurs débutants ») pour qu'il se reconnaisse.",
      "Utilisez des mots-clés naturels, jamais des listes ; Apple peut refuser les descriptions jugées abusives.",
    ],
  },
  "category-finder": {
    metaTitle: "Sélecteur de Catégories Apple Podcasts | Pod Studio",
    metaDescription:
      "Trouvez les meilleures catégories et sous-catégories Apple Podcasts pour votre émission. Recherchez par sujet et copiez la balise XML exacte. Gratuit.",
    overview: [
      "Le Sélecteur de Catégories vous aide à choisir la bonne catégorie et sous-catégorie Apple Podcasts. Apple autorise jusqu'à deux catégories, la principale étant la plus visible.",
      "Recherchez par sujet ou mot-clé pour voir les catégories et sous-catégories correspondantes, puis copiez en un clic la balise XML exacte pour votre flux RSS.",
    ],
    steps: [
      { title: "Recherchez par sujet", text: "Saisissez votre thème principal, comme « finances personnelles » ou « true crime »." },
      { title: "Comparez les options", text: "Examinez les catégories et sous-catégories suggérées." },
      { title: "Choisissez la principale", text: "Retenez celle qui décrit le mieux la majorité de vos épisodes." },
      { title: "Copiez la balise XML", text: "Cliquez sur une sous-catégorie pour copier sa balise iTunes, ou sélectionnez-la chez votre hébergeur." },
    ],
    tips: [
      "Choisissez la catégorie que vos auditeurs parcourraient, pas celle où il y a le moins de concurrence.",
      "Une sous-catégorie précise donne souvent plus de visibilité à une nouvelle émission.",
      "Consultez la liste officielle actuelle d'Apple avant de publier ; les noms changent parfois.",
    ],
  },
  "hook-generator": {
    metaTitle: "Générateur d'Accroches pour Extraits de Podcast | Pod Studio",
    metaDescription:
      "Écrivez des accroches qui arrêtent le scroll pour vos extraits sur TikTok, Reels, Shorts et LinkedIn. Choisissez un style, comparez, copiez. Gratuit.",
    overview: [
      "Le générateur d'Accroches Réseaux Sociaux écrit des phrases d'ouverture courtes et percutantes pour vos extraits et publications, afin que les meilleurs moments d'un épisode fonctionnent seuls.",
      "Saisissez le sujet de l'épisode et, si besoin, l'invité, choisissez un style d'accroche et obtenez plusieurs phrases à utiliser en texte à l'écran ou en légende sur TikTok, Reels, YouTube Shorts ou LinkedIn.",
    ],
    steps: [
      { title: "Indiquez le sujet", text: "Décrivez le sujet ou le secteur de l'épisode dont provient l'extrait." },
      { title: "Ajoutez un invité (facultatif)", text: "Mentionnez l'invité quand son nom ou son expertise attire l'attention." },
      { title: "Choisissez un style", text: "Filtrez par style d'accroche et comparez plusieurs ouvertures." },
      { title: "Copiez et publiez", text: "Utilisez la meilleure accroche en texte à l'écran ou en légende, avec un lien vers l'épisode complet." },
    ],
    tips: [
      "La première ligne a environ deux secondes pour capter l'attention : commencez par l'affirmation la plus précise.",
      "Assurez-vous que l'extrait tient la promesse de l'accroche ; une accroche trompeuse abîme la confiance.",
      "Sous-titrez toutes vos vidéos : beaucoup de gens les regardent sans le son.",
    ],
  },
  "transcript-formatter": {
    metaTitle: "Nettoyeur de Transcriptions de Podcast | Pod Studio",
    metaDescription:
      "Nettoyez vos transcriptions : nommez les intervenants, supprimez tics de langage et horodatages, et obtenez un texte prêt à publier. Gratuit et privé.",
    overview: [
      "Le Nettoyeur de Transcription met en forme le texte exporté par n'importe quel service de transcription. Remplacez les étiquettes génériques par de vrais noms, supprimez les tics de langage anglais courants (um, uh…) et retirez ou conservez les horodatages.",
      "Il travaille sur le texte collé ; il ne transcrit pas l'audio. Le résultat est plus lisible et prêt à être publié comme transcription accessible, article de blog ou extrait de notes.",
    ],
    steps: [
      { title: "Collez votre transcription", text: "Copiez le texte exporté par votre service de transcription et collez-le dans l'éditeur." },
      { title: "Nommez les intervenants", text: "Remplacez « SPEAKER_00 » et autres par de vrais noms, et choisissez de garder ou non les horodatages." },
      { title: "Vérifiez le résultat", text: "Relisez la transcription mise en forme et corrigez si nécessaire." },
      { title: "Copiez ou téléchargez", text: "Copiez le texte propre ou téléchargez-le pour le publier sur votre site ou chez votre hébergeur." },
    ],
    tips: [
      "Publier des transcriptions rend vos épisodes accessibles et donne aux moteurs de recherche du vrai texte à indexer.",
      "Supprimez les tics pour la lisibilité, mais gardez ce qui change le sens d'une citation.",
      "Relisez les noms propres et termes techniques : les outils de transcription s'y trompent souvent.",
    ],
  },
  "trailer-script-builder": {
    metaTitle: "Script de Bande-Annonce de Podcast | Pod Studio",
    metaDescription:
      "Écrivez une bande-annonce qui présente votre émission, son public et pourquoi s'abonner. Structure éprouvée pour 60 à 90 secondes. Outil gratuit.",
    overview: [
      "Le créateur de Script de Bande-Annonce vous donne une structure éprouvée : une accroche, le sujet de l'émission, son public, ce qui la distingue et un appel clair à s'abonner.",
      "Beaucoup d'annuaires mettent la bande-annonce en avant sur la page de l'émission : c'est souvent la première chose qu'entendent les nouveaux auditeurs. Faites compter ces 60 à 90 secondes.",
    ],
    steps: [
      { title: "Infos de l'émission", text: "Ajoutez le titre de l'émission, le nom de l'animateur et le rythme de publication." },
      { title: "Posez la grande question", text: "Écrivez la question centrale que votre émission explore et la promesse faite aux auditeurs." },
      { title: "Générez le script", text: "Obtenez un script structuré avec accroche, corps et appel à l'action." },
      { title: "Enregistrez et coupez", text: "Lisez-le à voix haute, chronométrez et supprimez les phrases redondantes." },
    ],
    tips: [
      "Ajoutez un court extrait réel d'un épisode si vous en avez un : montrez plutôt que de raconter.",
      "Terminez par une seule action claire : s'abonner à l'émission dans son appli.",
      "Mettez à jour la bande-annonce quand l'orientation ou le format de l'émission change.",
    ],
  },
  "review-response-generator": {
    metaTitle: "Générateur de Réponses aux Avis de Podcast | Pod Studio",
    metaDescription:
      "Répondez aux avis d'auditeurs et préparez des remerciements à l'antenne, pour les compliments comme pour les critiques. Modèles chaleureux. Gratuit.",
    overview: [
      "Le générateur de Remerciements d'Avis vous aide à répondre aux avis et à écrire des remerciements à l'antenne qui saluent vos soutiens et encouragent d'autres auditeurs à noter l'émission.",
      "Il couvre les avis enthousiastes, les retours constructifs et les critiques injustes, avec des réponses respectueuses, sans défensive, qui mentionnent des améliorations concrètes quand c'est pertinent.",
    ],
    steps: [
      { title: "Ajoutez l'avis", text: "Saisissez le nom ou pseudo de l'auditeur et ce qu'il a écrit." },
      { title: "Indiquez la tonalité", text: "Classez l'avis en éloge 5 étoiles, retour constructif ou critique." },
      { title: "Choisissez le format", text: "Obtenez un texte à lire à l'antenne, une réponse pour les réseaux sociaux et un message privé de remerciement." },
      { title: "Personnalisez", text: "Reprenez un détail de l'avis pour montrer que vous l'avez lu." },
    ],
    tips: [
      "Lisez quelques avis à l'antenne chaque mois : c'est l'un des moyens les plus simples d'obtenir plus de notes.",
      "Ne nommez ni ne moquez jamais un auditeur critique ; répondez à l'argument, pas à la personne.",
      "Remerciez pour les retours précis et dites ce que vous avez changé grâce à eux.",
    ],
  },
  "collab-finder": {
    metaTitle: "Pitch d'Invité et Proposition de Collab Podcast | Pod Studio",
    metaDescription:
      "Rédigez des pitchs d'invité et des e-mails de promotion croisée qui obtiennent des réponses. Valeur mutuelle et prochaine étape claires. Modèles gratuits.",
    overview: [
      "L'outil Invitations & Collabs rédige des e-mails pour vous proposer comme invité, inviter quelqu'un dans votre émission ou proposer une promotion croisée avec un autre podcast.",
      "Chaque brouillon précise le public de votre émission, le format proposé, l'intérêt pour les deux parties et une prochaine étape simple : ce que les animateurs pressés cherchent avant d'accepter.",
    ],
    steps: [
      { title: "Choisissez l'objectif", text: "Proposez-vous comme invité, invitez quelqu'un dans votre émission ou proposez un échange de promotion." },
      { title: "Ajoutez les deux émissions", text: "Indiquez l'émission et l'animateur ciblés, le nom de votre podcast et l'angle ou la valeur que vous apportez." },
      { title: "Générez l'e-mail", text: "Obtenez un brouillon concis avec objet, proposition de valeur et appel à l'action clair." },
      { title: "Personnalisez et envoyez", text: "Citez un de leurs épisodes que vous avez aimé, puis envoyez depuis votre propre adresse." },
    ],
    tips: [
      "Gardez le premier e-mail court : cinq ou six phrases suffisent.",
      "Ne partagez que des chiffres d'audience vérifiables ; des chiffres gonflés ruinent vite la confiance.",
      "Relancez une seule fois après une semaine, puis passez poliment à autre chose.",
    ],
  },
};
