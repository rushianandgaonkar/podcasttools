import type { LocalizedGuideArticle } from "../guidesData";

export const itNewGuides: Record<string, LocalizedGuideArticle> = {
  "how-much-do-podcasts-make": {
    title: "Quanto Guadagna un Podcast? Cifre Reali per Numero di Ascolti",
    description: "Scopri quanto guadagna un podcast nel 2026. Analisi dei CPM pubblicitari reali, abbonamenti ascoltatori, sponsor e guadagni per download. Guida gratis.",
    readTime: "8 min di lettura",
    publishedAt: "2026-11-06",
    category: "Monetizzazione",
    sections: [
      {
        heading: "Quanto Guadagna un Podcast nel 2026?",
        paragraphs: [
          "I guadagni di un podcast spaziano da zero euro per trasmissioni amatoriali a decine di migliaia di euro al mese per i grandi network. Per la stragrande maggioranza dei creator indipendenti, gli incassi sono strettamente collegati ai download certificati nei primi 30 giorni, al potere di spesa degli ascoltatori e alla varietà dei canali di monetizzazione adottati.",
          "Studi di settore condotti da AdvertiseCast, il rapporto IAB/PwC sulla pubblicità audio e i dati di Patreon confermano che i podcaster di successo combinano annunci letti dal conduttore, affiliazioni, abbonamenti diretti dei sostenitori e vendita di prodotti o servizi propri. Usa il nostro <a href=\"/it/tools/monetization-calculator\" class=\"text-[#a9583e] underline font-medium\">Calcolatore Guadagni Podcast</a> gratuito per stimare le tue entrate.",
        ],
      },
      {
        heading: "Guadagni del Podcast in Base ai Download per Episodio",
        paragraphs: [
          "La maggior parte delle sponsorizzazioni viene negoziata sulla base del CPM (Costo Per Mille ascolti), oscillando generalmente tra 18 € e 35 € per 1.000 download per inserzioni mid-roll da 60 secondi lette dal conduttore. Ecco le stime medie mensili per un podcast a cadenza settimanale (4 episodi al mese):",
        ],
        cards: [
          {
            title: "Amatoriale (Meno di 1.000 download)",
            value: "0 € – 150 € / mese",
            description: "Monetizzazione tramite link di affiliazione, donazioni spontanee o piccoli sponsor locali a tariffa fissa.",
          },
          {
            title: "In Crescita (1.000 – 5.000 download)",
            value: "200 € – 1.200 € / mese",
            description: "Accesso a sponsor di settore al CPM (25 € mid-roll), canali di abbonamento e guide digitali.",
            highlight: true,
          },
          {
            title: "Podcast Affermato (10.000 – 50.000 download)",
            value: "2.500 € – 15.000 € / mese",
            description: "Spazi pubblicitari pre-roll e mid-roll costantemente esauriti, community Patreon solida ed eventi.",
            highlight: true,
          },
        ],
      },
      {
        heading: "Pubblicità al CPM vs Fonti Alternative di Guadagno",
        paragraphs: [
          "Affidarsi unicamente alle sponsorizzazioni al CPM richiede grandi volumi. Un podcast con 2.000 ascoltatori a puntata incassa circa 100-200 € a episodio tramite due inserzioni. I podcaster indipendenti più redditizi impiegano invece lo show come generatore di fiducia per offerte ad alto valore:",
        ],
        list: [
          {
            title: "Abbonamenti e Sostenitori (Patreon, Apple Subscriptions)",
            description: "Convertire solo il 2% di un pubblico di 3.000 ascoltatori in sostenitori a 6 € al mese genera 360 € mensili ricorrenti e prevedibili.",
          },
          {
            title: "Commissioni di Affiliazione Mirate",
            description: "Raccomandare software di settore, corsi o libri tramite codici sconto personalizzati supera spesso le tariffe fisse dei piccoli sponsor.",
          },
          {
            title: "Consulenze B2B e Acquisizione Clienti",
            description: "Per freelance, studi professionali e agenzie, il podcast è il canale più efficace per chiudere contratti a preventivo elevato.",
          },
          {
            title: "Prodotti Digitali e Workshop a Pagamento",
            description: "Vendita di modelli operativi, dispense e masterclass private rivolte direttamente ai fan più fedeli dello show.",
          },
        ],
      },
      {
        heading: "Esempio Reale: Il Podcast da 1.000 €/mese vs Quello da 10.000 €/mese",
        paragraphs: [
          "Podcast A: 2.500 download a puntata, cadenza settimanale. Vendendo due spazi mid-roll a 25 € CPM (125 €/episodio) e con 60 sostenitori Patreon a 6 €/mese, ottiene 500 € di pubblicità + 360 € di abbonamenti + 180 € di affiliazioni = 1.040 € al mese.",
          "Podcast B: 20.000 download a puntata. Vendendo 3 inserzioni per episodio (pre-roll a 18 € + due mid-roll a 28 € = 1.480 € a puntata), registra 5.920 € mensili di sponsor diretti. Con 400 iscritti alla community privata a 10 €/mese (4.000 €), i suoi incassi mensili superano i 10.000 €.",
        ],
      },
    ],
    cta: {
      title: "Calcola il Potenziale del Tuo Podcast",
      description: "Stima le entrate pubblicitarie e gli abbonamenti in base al tuo numero di ascoltatori.",
      buttonText: "Apri Calcolatore Guadagni",
      toolSlug: "monetization-calculator",
    },
  },

  "how-to-monetize-a-podcast": {
    title: "Come Monetizzare un Podcast (e Trovare il Tuo Primo Sponsor)",
    description: "Scopri come monetizzare un podcast e trovare sponsor. 8 canali di guadagno testati, listini prezzi e modelli di proposta commerciale. Guida gratuita.",
    readTime: "8 min di lettura",
    publishedAt: "2026-11-06",
    category: "Monetizzazione",
    sections: [
      {
        heading: "Gli 8 Metodi Collaudati per Monetizzare un Podcast",
        paragraphs: [
          "Guadagnare con un podcast non è più un traguardo riservato a produzioni con decine di migliaia di download. I creator contemporanei costruiscono entrate durature combinando più fonti tra loro, senza dover attendere le agenzie pubblicitarie.",
          "Che tu abbia 300 ascoltatori fidelizzati o 30.000, puoi monetizzare da subito allineando la tua offerta alla fiducia della tua community. Progetta le interruzioni pubblicitarie con la nostra <a href=\"/it/tools/episode-outline-builder\" class=\"text-[#a9583e] underline font-medium\">Scaletta Episodio Podcast</a>.",
        ],
        list: [
          {
            title: "1. Sponsor Diretti Letti dal Conduttore",
            description: "Contattare aziende di settore per citazioni personalizzate di 30-60 secondi inserite naturalmente nel discorso.",
          },
          {
            title: "2. Marketing di Affiliazione e Codici Promo",
            description: "Condividere link tracciati e codici sconto esclusivi per prodotti e strumenti che utilizzi e sostieni realmente.",
          },
          {
            title: "3. Feed Premium e Abbonamenti per Ascoltatori",
            description: "Offrire puntate senza pubblicità, interviste integrali o contenuti extra su Patreon o Apple Podcasts Subscriptions.",
          },
          {
            title: "4. Partnership di Brand e Miniserie Tematiche",
            description: "Collaborare con realtà aziendali per produrre miniserie speciali o tavole rotonde sponsorizzate.",
          },
          {
            title: "5. Prodotti Digitali, E-book e Schemi Operativi",
            description: "Vendere materiali operativi, guide e raccolte di risorse strettamente connesse ai temi affrontati nel podcast.",
          },
          {
            title: "6. Consulenze B2B e Acquisizione Clienti",
            description: "Usare il podcast come canale autorevole per attrarre contatti qualificati per la tua agenzia o attività professionale.",
          },
          {
            title: "7. Eventi dal Vivo e Workshop Online a Pagamento",
            description: "Organizzare registrazioni aperte al pubblico, masterclass con domande e risposte o corsi con biglietto d'ingresso.",
          },
          {
            title: "8. Monetizzazione Video e Clip Social",
            description: "Condividere le puntate in video e gli estratti salienti su YouTube per intercettare entrate pubblicitarie e nuovi utenti.",
          },
        ],
      },
      {
        heading: "Come trovare sponsor per un podcast",
        paragraphs: [
          "Trovare il primo sponsor non richiede intermediari. Consiste nell'individuare aziende che già investono per parlare con il tuo stesso target e nel dimostrare la forte credibilità del tuo show. Redigi proposte commerciali persuasive con il nostro <a href=\"/it/tools/collab-finder\" class=\"text-[#a9583e] underline font-medium\">Generatore di Proposte e Collaborazioni</a>.",
          "Secondo l'IAB e le ricerche di Edison Research, gli annunci letti dal conduttore raggiungono un ricordo spontaneo del brand superiore al 70%. Quando scrivi a un'azienda, valorizza la profilazione del pubblico e numeri di ascolto certificati.",
        ],
      },
      {
        heading: "Cosa Includere nel Tuo Media Kit per Sponsor",
        paragraphs: [
          "Sintetizza il tuo media kit in un'unica pagina o PDF pulito. I responsabili marketing ricevono decine di email a settimana; presenta subito i dati determinanti:",
        ],
        list: [
          {
            title: "Profilo e Dati Demografici del Pubblico",
            description: "Ruoli professionali, settori di appartenenza, età media e interessi che coincidono con il cliente tipo dell'azienda.",
          },
          {
            title: "Media Verificata dei Download a 30 Giorni",
            description: "Dati estratti direttamente dal tuo hosting (Buzzsprout, Podbean, Spotify for Creators).",
          },
          {
            title: "Formati Disponibili e Listino Prezzi",
            description: "Tariffe chiare per pre-roll (15-30s), mid-roll (60s) e menzione nelle show notes, con sconti per pacchetti da 4-8 puntate.",
          },
          {
            title: "Breve Campione Audio di Esempio",
            description: "Un file audio di 30 secondi che illustri come presenti un prodotto con spontaneità e senza risultare artefatto.",
          },
        ],
      },
    ],
    cta: {
      title: "Costruisci la Tua Strategia di Monetizzazione",
      description: "Modella tariffe CPM e canali di sostenitori con il nostro simulatore gratuito.",
      buttonText: "Apri Calcolatore Guadagni",
      toolSlug: "monetization-calculator",
    },
  },

  "podcast-topic-ideas": {
    title: "Idee per Argomenti di Podcast, Episodi e Rubriche",
    description: "Esplora 100 idee per argomenti di podcast, format di puntate e rubriche fisse. Supera il blocco creativo e conquista gli ascoltatori. Guida gratuita.",
    readTime: "9 min di lettura",
    publishedAt: "2026-11-06",
    category: "Contenuto",
    sections: [
      {
        heading: "Non Rimanere Mai Più Senza Argomenti per il Tuo Podcast",
        paragraphs: [
          "Il motivo principale che spinge molti podcaster a fermarsi è l'ansia settimanale di trovare qualcosa di interessante di cui parlare. I programmi di successo non improvvisano ogni volta da zero: attingono a una banca strutturata di temi validati e a rubriche ricorrenti.",
          "Di seguito trovi una raccolta di 100 idee pratiche tra argomenti per podcast, format di puntata e rubriche suddivise per le categorie più seguite. Una volta scelto il tema, usa il nostro <a href=\"/it/tools/episode-title-generator\" class=\"text-[#a9583e] underline font-medium\">Generatore di Titoli per Podcast</a> per formulare titoli accattivanti.",
        ],
      },
      {
        heading: "Idee per argomenti di podcast per nicchia",
        paragraphs: [
          "50 idee di argomenti distribuite su 5 tra i settori più popolari nelle piattaforme audio:",
        ],
        list: [
          {
            title: "Business & Startup (10 Argomenti)",
            description: "1. Da 0 a 10.000 € al mese senza investitori esterni. 2. Come assumere il primo collaboratore senza disperdere liquidità. 3. Analisi degli errori di un lancio di prodotto fallito. 4. Psicologia dei prezzi: perché alzare i listini oggi stesso. 5. Gestire il burnout e la stanchezza decisionale del fondatore. 6. Venture Capital contro Bootstrapping: tutta la verità. 7. Costruire un passaparola prevedibile ed efficace. 8. Email a freddo che ottengono risposte autentiche. 9. Superare le crisi di cassa durante il primo anno. 10. Costruire un'azienda in pubblico: vantaggi e rischi.",
          },
          {
            title: "True Crime & Misteri Reali (10 Argomenti)",
            description: "11. La rapina perfetta che ha beffato le forze dell'ordine internazionali. 12. Svolte della scientifica che hanno risolto casi aperti da 30 anni. 13. La psicologia delle false confessioni nei processi celebri. 14. Sparizioni inspiegabili nei parchi naturali tra miti e fatti. 15. Le tracce digitali che hanno incastrato un genio del crimine informatico. 16. Whistleblower che hanno fatto crollare colossi societari. 17. L'impiego della genealogia del DNA nelle indagini. 18. Le più grandi truffe della storia che hanno ingannato milioni di persone. 19. Nella mente dei maestri del raggiro. 20. Enigmi marittimi mai chiariti.",
          },
          {
            title: "Salute, Fitness & Benessere (10 Argomenti)",
            description: "21. La scienza del sonno ristoratore e i ritmi circadiani. 22. Digiuno intermittente: cosa provano le ricerche cliniche più recenti. 23. Allenamento aerobico in Zona 2 vs HIIT per il metabolismo. 24. Costruire forza fisica e massa muscolare dopo i 40 anni. 25. Miti alimentari smentiti da medici e nutrizionisti. 26. Gestire lo stress cronico nei lavori ad alta pressione. 27. Il microbiota intestinale e il legame diretto con l'umore. 28. Integratori utili vs promesse pubblicitarie. 29. Come concatenare le abitudini per renderle durature. 30. Bagni freddi e sauna: benefici documentati.",
          },
          {
            title: "Tecnologia & Intelligenza Artificiale (10 Argomenti)",
            description: "31. Come l'IA generativa sta trasformando lo sviluppo software. 32. Regole d'oro di sicurezza informatica personale. 33. Modelli open-source a confronto con i grandi ecosistemi chiusi. 34. La fisica quantistica applicata al calcolo spiegata a tutti. 35. Implicazioni etiche delle decisioni algoritmiche automatizzate. 36. Come progettare l'infrastruttura di un'app web per milioni di utenti. 37. Innovazioni nell'hardware per la transizione energetica. 38. La tutela della privacy nell'epoca dei big data. 39. Robotica industriale e scenari per il lavoro nel 2030. 40. Spatial computing e visori di realtà mista.",
          },
          {
            title: "Cultura, Filosofia & Crescita Personale (10 Argomenti)",
            description: "41. La filosofia stoica per affrontare l'ansia del mondo digitale. 42. L'importanza delle conversazioni autentiche nell'era dell'iperconnessione. 43. Perché la nostra soglia di attenzione cala e come rieducare la mente. 44. Superare la sindrome dell'impostore e i dubbi creativi. 45. Progettare la propria dieta informativa per conservare lucidità. 46. Indipendenza economica e il significato di essenzialità. 47. In che modo gli spazi e l'architettura influenzano le emozioni. 48. Storia dei riti e delle abitudini della vita di ogni giorno. 49. Il valore del lavoro profondo e concentrato. 50. Pianificare un cambio di carriera a metà percorso.",
          },
        ],
      },
      {
        heading: "Idee per episodi di podcast",
        paragraphs: [
          "La struttura determina il coinvolgimento. Usa questi 30 format per rendere ogni tema irresistibile:",
        ],
        list: [
          {
            title: "Casi Studio e Analisi Approfondite (10 Format)",
            description: "51. Analisi punto per punto di un grande successo. 52. Anatomia di un fallimento e lezioni ricavate. 53. Una giornata tipica nella vita di un professionista di alto livello. 54. Retrospettiva storica: cosa accadde veramente. 55. La sfida: raggiungere un obiettivo con zero budget. 56. Rendicontazione trasparente di numeri ed entrate reali. 57. Storia di una trasformazione prima e dopo. 58. Guida definitiva per padroneggiare un'abilità trascurata. 59. I retroscena e i segreti non detti di un settore. 60. Tendenze e previsioni per l'anno a venire.",
          },
          {
            title: "Format Partecipativi e con Ascoltatori (10 Format)",
            description: "61. Risposte rapide alle domande degli ascoltatori (AMA). 62. Consulenza o analisi in diretta per un membro della community. 63. Il confessionale delle storie inviate dagli utenti. 64. Il dibattito: due ospiti con tesi contrapposte. 65. Reazione agli audio vocali inviati dagli ascoltatori. 66. Cacciatori di miti: verifica di convinzioni diffuse. 67. L'episodio delle opinioni impopolari. 68. Il confronto tra l'esordiente e il professionista veterano. 69. Rassegna stampa senza filtri. 70. Tavola rotonda tra creator di podcast affini.",
          },
          {
            title: "Consigli ed Esperienze Personali (10 Format)",
            description: "71. I 5 strumenti che mi fanno risparmiare 10 ore a settimana. 72. I libri che hanno modificato per sempre il mio modo di pensare. 73. Cose che ho smesso totalmente di fare dopo 5 anni di esperienza. 74. I migliori acquisti a meno di 100 euro. 75. Una lettera a me stesso dieci anni fa. 76. Riflessioni sincere dopo un traguardo importante. 77. Il peggior consiglio comune nel mio settore. 78. Il dietro le quinte della produzione di questo show. 79. Routine quotidiane per conservare energia elevata. 80. Il kit di partenza irrinunciabile per chi comincia.",
          },
        ],
      },
      {
        heading: "Idee per rubriche di podcast",
        paragraphs: [
          "Le rubriche ricorrenti creano familiarità con gli ascoltatori e rendono agevole compilare la <a href=\"/it/tools/episode-outline-builder\" class=\"text-[#a9583e] underline font-medium\">Scaletta del Podcast</a>. Ecco 20 idee:",
        ],
        list: [
          {
            title: "20 Rubriche Fisse per la Tua Trasmissione",
            description: "81. La Segreteria degli Ascoltatori (audio di 30 secondi). 82. Il Round da 60 Secondi (botta e risposta). 83. Il Tool della Settimana. 84. L'Opinione Scomoda. 85. Errata Corrige e Aggiornamenti. 86. Successi e Scivoloni della Settimana. 87. Il Traduttore di Jargon Tecnico. 88. Rassegna Ironica dei Titoli del Giorno. 89. Un Libro, Una Lezione. 90. Recensioni e Ringraziamenti in Onda. 91. Il Dilemma del Giorno. 92. Sopravvalutato vs Sottovalutato. 93. La Citazione Ispiratrice. 94. L'Errore da Principiante della Settimana. 95. Il Dato del Mese. 96. Verifica delle Vecchie Previsioni. 97. L'Elevator Pitch di 30 Secondi dell'Ospite. 98. La Sfida Pratica per gli Ascoltatori. 99. La Buona Notizia nel Caos. 100. Il Pensiero Conclusivo.",
          },
        ],
      },
    ],
    cta: {
      title: "Trasforma le Idee in Titoli Efficaci",
      description: "Prendi il tuo tema preferito e genera oltre 15 titoli accattivanti in pochi istanti.",
      buttonText: "Genera Titoli per Episodio",
      toolSlug: "episode-title-generator",
    },
  },

  "how-to-start-a-podcast": {
    title: "Come Creare un Podcast: Guida Passo Passo per Iniziare nel 2026",
    description: "Guida passo passo per iniziare un podcast nel 2026. Format, microfoni, registrazione, montaggio, hosting RSS e distribuzione su Apple e Spotify. Gratis.",
    readTime: "12 min di lettura",
    publishedAt: "2026-11-06",
    category: "Produzione",
    sections: [
      {
        heading: "La Guida Completa Passo Passo per Lanciare il Tuo Podcast",
        paragraphs: [
          "Iniziare un podcast non è mai stato così alla portata di tutti, eppure oltre il 70% dei nuovi progetti viene abbandonato prima di arrivare alla decima puntata. La differenza tra gli show che si spengono rapidamente e quelli capaci di fidelizzare un pubblico affezionato risiede in un metodo di produzione ordinato fin dall'inizio.",
          "Milioni di persone ascoltano podcast ogni settimana. Questa guida dettagliata ti accompagna attraverso tutte le fasi essenziali nel 2026: ideazione del format, attrezzatura consigliata, registrazione, montaggio, copertina, hosting del feed RSS e distribuzione nelle principali directory come Apple Podcasts e Spotify.",
        ],
      },
      {
        heading: "Passo 1: Definisci Nicchia, Format e Pubblico di Riferimento",
        paragraphs: [
          "Ogni podcast di successo si fonda su una promessa editoriale trasparente: a chi si rivolge e quale vantaggio concreto riceve chi ascolta ogni puntata? Scegli una nicchia precisa così che l'ascoltatore ideale pensi subito: «questo podcast è pensato esattamente per me».",
          "Stabilisci il format principale: monologo, conduzione in coppia o interviste con ospiti. Usa la nostra <a href=\"/it/tools/episode-outline-builder\" class=\"text-[#a9583e] underline font-medium\">Scaletta Episodio Podcast</a> gratuita per pianificare i minuti di ogni blocco.",
        ],
      },
      {
        heading: "Passo 2: Scegli un Nome Accattivante e Facile da Trovare",
        paragraphs: [
          "Il nome del tuo podcast deve essere facile da ricordare, fluido da pronunciare e contenere parole chiave che gli ascoltatori cercano nelle app. Evita giochi di parole poco chiari e testa decine di opzioni con il nostro <a href=\"/it/tools/podcast-name-generator\" class=\"text-[#a9583e] underline font-medium\">Generatore di Nomi per Podcast</a>.",
        ],
      },
      {
        heading: "Passo 3: Microfono Consigliato e Software di Registrazione",
        paragraphs: [
          "Non occorre spendere migliaia di euro in uno studio professionale. La qualità finale dipende per l'80% dalla stanza e dalla corretta distanza dal microfono, e solo per il 20% dall'hardware. Setup base consigliato:",
        ],
        list: [
          {
            title: "Microfono Dinamico USB / XLR",
            description: "L'Audio-Technica ATR2100x-USB o il Samson Q2U si collegano direttamente via USB e catturano molto meno riverbero rispetto ai microfoni a condensatore troppo sensibili.",
          },
          {
            title: "Cuffie Chiuse da Monitoraggio",
            description: "Audio-Technica ATH-M20x o Sony MDR-7506 impediscono al suono delle cuffie di rientrare nel microfono durante la registrazione.",
          },
          {
            title: "Software di Registrazione e Montaggio",
            description: "Audacity (gratuito e open source) o Descript (montaggio audio tramite trascrizione testo); Riverside.fm per interviste a distanza senza perdita di qualità.",
          },
          {
            title: "Trattamento Acustico Fai-da-Te",
            description: "Registra in una stanza con tappeti, tende spesse e librerie per attenuare l'eco naturale dell'ambiente.",
          },
        ],
      },
      {
        heading: "Passo 4: Crea una Copertina Conforme agli Standard",
        paragraphs: [
          "La copertina è il biglietto da visita del tuo show nelle directory. Apple Podcasts e Spotify richiedono obbligatoriamente un formato perfettamente quadrato 1:1, risoluzione tra 1400x1400px e 3000x3000px e spazio colore RGB.",
          "Verifica che il titolo rimanga chiaramente leggibile anche nel formato miniatura 50x50 pixel testandolo sul nostro <a href=\"/it/tools/cover-art-preview\" class=\"text-[#a9583e] underline font-medium\">Verificatore Dimensioni Copertina Podcast</a>.",
        ],
      },
      {
        heading: "Passo 5: Registra il Trailer e i Primi Episodi",
        paragraphs: [
          "Prima del debutto ufficiale, registra un trailer di 60-90 secondi che illustri il concept e inviti a seguire lo show. Scrivi il testo con il nostro <a href=\"/it/tools/trailer-script-builder\" class=\"text-[#a9583e] underline font-medium\">Costruttore Script Trailer</a> e realizza introduzioni efficaci con il <a href=\"/it/tools/intro-script-generator\" class=\"text-[#a9583e] underline font-medium\">Generatore di Intro per Podcast</a>.",
          "Se il programma prevede interviste, prepara domande memorabili che vadano oltre il classico curriculum con il <a href=\"/it/tools/guest-question-generator\" class=\"text-[#a9583e] underline font-medium\">Generatore Domande per Interviste</a>.",
        ],
      },
      {
        heading: "Passo 6: Scegli l'Hosting e Valida il Feed RSS",
        paragraphs: [
          "I file audio non si caricano direttamente su Spotify o Apple Podcasts. Vengono caricati su una piattaforma di hosting specializzata (Buzzsprout, Podbean, Libsyn, Spotify for Creators) che genera il feed RSS in formato XML.",
          "Prima di inviare il feed alle directory, verifica che non vi siano tag mancanti o errori con il nostro <a href=\"/it/tools/rss-feed-validator\" class=\"text-[#a9583e] underline font-medium\">Validatore Feed RSS per Podcast</a>.",
        ],
      },
      {
        heading: "Passo 7: Ottimizza Titoli, Show Notes e Categorie per la SEO",
        paragraphs: [
          "La visibilità nelle ricerche dipende dai metadati. Componi titoli accattivanti con il <a href=\"/it/tools/episode-title-generator\" class=\"text-[#a9583e] underline font-medium\">Generatore di Titoli per Podcast</a>, prepara note dettagliate con il <a href=\"/it/tools/show-notes-generator\" class=\"text-[#a9583e] underline font-medium\">Generatore di Show Notes</a> e individua la categoria ideale con il <a href=\"/it/tools/category-finder\" class=\"text-[#a9583e] underline font-medium\">Ricerca Categorie Apple Podcasts</a>.",
        ],
      },
      {
        heading: "Checklist per il lancio del podcast",
        paragraphs: [
          "Verifica questi 12 punti chiave prima di annunciare ufficialmente il tuo debutto:",
        ],
        list: [
          { title: "1. Concept e Pubblico Definiti", description: "Promessa chiara e profilo dell'ascoltatore ideale documentati." },
          { title: "2. Nome Verificato", description: "Nessun conflitto con marchi registrati o podcast omonimi esistenti." },
          { title: "3. Copertina a Norma", description: "3000x3000px, RGB, JPG/PNG, perfettamente leggibile a 50px." },
          { title: "4. Trailer Registrato", description: "Audio di 60-90 secondi con invito chiaro a seguire il canale." },
          { title: "5. Prime 3 Puntate Pronte", description: "Lancia con il trailer più 3 puntate complete per incentivare l'ascolto continuativo." },
          { title: "6. Master Audio Eseguito", description: "Volume uniforme (-16 LUFS stereo / -19 LUFS mono) in MP3 a 128 kbps." },
          { title: "7. Piattaforma Hosting Configurato", description: "Profilo completo, cover caricata, note e diritti d'autore inseriti." },
          { title: "8. Feed RSS Convalidato", description: "Controllo superato senza errori nel validatore." },
          { title: "9. Invio ad Apple Podcasts", description: "Trasmesso su Apple Podcasts Connect almeno 5 giorni prima del lancio." },
          { title: "10. Profilo Spotify for Podcasters", description: "Profilo show riscattato e confermato." },
          { title: "11. Show Notes Pronte", description: "Sintesi, riferimenti citati e timestamp impostati per ogni episodio." },
          { title: "12. Piano di Comunicazione Attivo", description: "Messaggio alla propria rete, post sui social network e richiesta prime recensioni." },
        ],
      },
    ],
    cta: {
      title: "Trova Subito il Nome per il Tuo Podcast",
      description: "Genera idee originali, memorabili e facili da cercare per la tua nuova trasmissione.",
      buttonText: "Apri Generatore di Nomi",
      toolSlug: "podcast-name-generator",
    },
  },
};

