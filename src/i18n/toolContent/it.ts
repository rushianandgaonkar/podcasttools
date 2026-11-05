import type { ToolContentRecord } from "./types";

export const itToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Generatore di Titoli per Podcast Gratis | Pod Studio",
    metaDescription:
      "Trasforma l'argomento dell'episodio in decine di titoli chiari e accattivanti. Filtra per stile — curiosità, tutorial, controcorrente — e copia. Gratis.",
    overview: [
      "Il Generatore di Titoli trasforma un argomento, e facoltativamente il nome di un ospite, in una lunga lista di idee basate su schemi collaudati: promesse pratiche, curiosità, opinioni controcorrente, liste numerate e ganci centrati sull'ospite.",
      "È pensato per chi sa di cosa parla l'episodio ma non sa come dirlo. Esplora rapidamente diversi angoli e scegli il titolo che descrive l'episodio con onestà e si legge bene sullo schermo di uno smartphone.",
    ],
    steps: [
      { title: "Descrivi l'episodio", text: "Scrivi l'argomento principale in poche parole, ad esempio «budget per freelance» o «i primi 100 iscritti»." },
      { title: "Aggiungi un ospite (facoltativo)", text: "Inserisci nome o competenza dell'ospite quando è il motivo principale per ascoltare." },
      { title: "Filtra per stile", text: "Passa tra formule di curiosità, tutorial, controcorrente e altre per confrontare gli angoli." },
      { title: "Copia o esporta", text: "Copia un titolo o esporta l'intera lista come file di testo da condividere con il team." },
    ],
    tips: [
      "Metti le parole più specifiche e cercate nella prima metà del titolo: le app spesso tagliano la fine.",
      "Prometti solo ciò che l'episodio mantiene. Titoli precisi trattengono di più e riducono le recensioni negative.",
      "Lascia fuori numero dell'episodio e nome del programma, a meno che gli ascoltatori non ne abbiano bisogno.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Generatore di Show Notes per Podcast Gratis | Pod Studio",
    metaDescription:
      "Crea show notes ordinate con riassunto, ospite, timestamp, punti chiave e link. Esporta in Markdown, HTML o testo semplice. Gratis, senza registrazione.",
    overview: [
      "Il Generatore di Show Notes organizza i dati dell'episodio in note ben strutturate: un breve riassunto, l'ospite, i capitoli con timestamp, i punti chiave e le risorse citate.",
      "Il risultato è disponibile in Markdown, HTML o testo semplice, da incollare direttamente su Buzzsprout, Libsyn, Podbean, Spotify for Creators, YouTube o sul tuo sito senza riformattare.",
    ],
    steps: [
      { title: "Compila le basi", text: "Inserisci il titolo dell'episodio e un riassunto di una o due frasi che spieghi perché ascoltarlo." },
      { title: "Aggiungi ospiti e capitoli", text: "Indica gli ospiti e incolla i timestamp nel formato «00:00 Argomento», uno per riga." },
      { title: "Aggiungi punti chiave e link", text: "Scrivi le lezioni principali e i libri, strumenti o siti citati." },
      { title: "Scegli il formato e copia", text: "Seleziona Markdown, HTML o testo in base alla tua piattaforma e copia le note finite." },
    ],
    tips: [
      "Scrivi la prima frase per le persone e per i motori di ricerca: è ciò che la maggior parte delle app mostra prima di «altro».",
      "Includi solo timestamp verificati sul montaggio finale; capitoli sbagliati frustrano gli ascoltatori.",
      "Usa la stessa struttura ogni settimana, così gli ascoltatori abituali trovano subito i link.",
    ],
  },
  "podcast-name-generator": {
    metaTitle: "Generatore di Nomi per Podcast Gratis | Pod Studio",
    metaDescription:
      "Trova idee di nomi memorabili per il tuo podcast per nicchia, tema e stile del brand. Crea una rosa di nomi e poi verifica domini e marchi. Gratis.",
    overview: [
      "Il Generatore di Nomi suggerisce nomi per il programma partendo dalla tua nicchia, da una parola o tema personalizzato facoltativo e dallo stile di brand che preferisci, dai nomi più diretti e trovabili a quelli più creativi.",
      "È uno strumento di brainstorming: non verifica la disponibilità di domini o marchi. Usalo per creare una rosa di nomi e poi controlla il nome presso un registrar, nelle directory di podcast e con una ricerca marchi prima di annunciarlo.",
    ],
    steps: [
      { title: "Scegli la nicchia", text: "Seleziona il genere del programma: tecnologia, finanza, true crime, crescita personale e altro." },
      { title: "Aggiungi una parola (facoltativo)", text: "Inserisci una parola o un tema da includere nel nome: un argomento, un luogo, un'idea ricorrente." },
      { title: "Scegli uno stile e salva", text: "Cambia stile di brand e salva i tre-cinque nomi che ti immagini di pronunciare a ogni episodio." },
      { title: "Verifica prima del lancio", text: "Cerca doppioni su Apple Podcasts e Spotify e controlla tu stesso dominio e profili social." },
    ],
    tips: [
      "Pronuncia ogni nome ad alta voce: se non si riesce a scriverlo dopo averlo sentito una volta, il passaparola ne risente.",
      "Una parola chiara sull'argomento aiuta i nuovi ascoltatori a trovarti nella ricerca podcast.",
      "Evita nomi legati a una moda o a un anno: deve funzionare ancora all'episodio 200.",
    ],
  },
  "episode-outline-builder": {
    metaTitle: "Scaletta Episodio Podcast con Tempi | Pod Studio",
    metaDescription:
      "Crea una scaletta con tempi per il podcast: cold open, intro, blocchi, letture sponsor e chiusura. Resta nei tempi durante la registrazione. Modello gratis.",
    overview: [
      "La Scaletta Episodio crea un piano di produzione con tempi: una tabella di marcia che elenca ogni blocco, quando inizia indicativamente e quanto deve durare.",
      "Aiuta conduttori, ospiti e produttori a coordinare stacchi musicali, letture sponsor, blocchi d'intervista e call to action, senza dover scrivere ogni parola della conversazione.",
    ],
    steps: [
      { title: "Dai un nome all'episodio", text: "Inserisci un titolo provvisorio per ritrovare facilmente la scaletta." },
      { title: "Imposta la durata", text: "Indica la durata totale in minuti per vedere come si sommano i tempi dei blocchi." },
      { title: "Modifica i blocchi", text: "Regola o aggiungi cold open, intro, atti principali, pausa pubblicitaria e chiusura, con note per ciascuno." },
      { title: "Esporta la scaletta", text: "Esportala in Markdown e inviala all'ospite o al produttore prima di registrare." },
    ],
    tips: [
      "Inserisci lo sponsor di metà episodio in una pausa naturale, tra un terzo e la metà della puntata.",
      "Lascia qualche minuto di margine per le digressioni: i momenti migliori spesso non sono pianificati.",
      "Invia la scaletta agli ospiti in anticipo, così preparano storie e non solo risposte.",
    ],
  },
  "guest-question-generator": {
    metaTitle: "Generatore di Domande per Interviste Podcast | Pod Studio",
    metaDescription:
      "Genera domande d'intervista per qualsiasi ospite: rompighiaccio, origini, errori e svolte, lezioni e domande a raffica. Gratis, senza registrazione.",
    overview: [
      "Il generatore di Domande per Ospiti costruisce un arco completo per l'intervista: dai rompighiaccio e dalla storia delle origini fino a svolte, lezioni apprese, previsioni e un giro finale di domande a raffica.",
      "Inserisci nome, professione dell'ospite e argomento dell'episodio per ottenere una lista iniziale su misura, da completare con le tue ricerche.",
    ],
    steps: [
      { title: "Inserisci i dati dell'ospite", text: "Scrivi nome, professione o ruolo dell'ospite e l'argomento principale dell'episodio." },
      { title: "Sfoglia per fase", text: "Filtra le domande per fase: rompighiaccio, origini, errori e svolte, fino alla chiusura." },
      { title: "Rivedi l'arco", text: "Tieni le domande che fanno nascere storie, non risposte di una parola." },
      { title: "Copia o esporta la scheda", text: "Copia la scheda intervista o esportala in testo e aggiungi domande di approfondimento sul lavoro recente dell'ospite." },
    ],
    tips: [
      "Chiedi un momento preciso — «Raccontami del giorno in cui…» — invece di opinioni generali.",
      "Tieni due o tre domande irrinunciabili e lascia che il resto segua la conversazione.",
      "Riserva la domanda più personale a metà intervista, quando l'ospite è a suo agio.",
    ],
  },
  "monetization-calculator": {
    metaTitle: "Calcolatore CPM e Ricavi Sponsor Podcast | Pod Studio",
    metaDescription:
      "Stima i ricavi pubblicitari del podcast da download, CPM, spazi e tasso di riempimento. Confronta pre-roll, mid-roll e post-roll. Calcolatore gratis.",
    overview: [
      "Il Calcolatore CPM e Ricavi stima quanto può guadagnare il tuo programma con la pubblicità usando la formula standard: (download ÷ 1.000) × CPM × spazi venduti.",
      "Regola download per episodio, frequenza di pubblicazione, spazi pre-roll, mid-roll e post-roll, tasso di riempimento e abbonamenti degli ascoltatori per vedere proiezioni mensili, per episodio e annuali.",
    ],
    steps: [
      { title: "Inserisci i download", text: "Usa la media di download per episodio nei primi 30 giorni, secondo il tuo hosting." },
      { title: "Imposta la frequenza", text: "Indica quanti episodi pubblichi al mese." },
      { title: "Configura gli spazi", text: "Attiva pre-roll, mid-roll e post-roll, imposta un CPM per ciascuno e stima il riempimento." },
      { title: "Rivedi ed esporta", text: "Confronta la ripartizione, aggiungi gli abbonamenti se li hai ed esporta la proiezione." },
    ],
    tips: [
      "I mid-roll letti dal conduttore ottengono di solito i CPM più alti, perché l'attenzione è massima.",
      "Sii prudente sul tasso di riempimento: la maggior parte dei programmi indipendenti non vende tutti gli spazi.",
      "Usa numeri di download verificati quando proponi sponsorizzazioni; gli sponsor possono chiedere screenshot dell'hosting.",
    ],
  },
  "cover-art-preview": {
    metaTitle: "Anteprima Copertina Podcast: Apple e Spotify | Pod Studio",
    metaDescription:
      "Guarda la tua copertina come appare su Apple Podcasts, Spotify, schermata di blocco e miniature piccole. Controlla dimensioni e leggibilità. Gratis.",
    overview: [
      "L'Anteprima Copertina mostra la tua grafica in layout in stile Apple Podcasts e Spotify, sulla schermata di blocco del telefono e come minuscola miniatura di ricerca.",
      "L'immagine non lascia mai il tuo dispositivo. Viene confrontata con il requisito comune delle directory — quadrata, tra 1400 × 1400 e 3000 × 3000 pixel — per individuare i problemi prima del caricamento.",
    ],
    steps: [
      { title: "Carica la copertina", text: "Trascina un file JPG o PNG (o prova la copertina di esempio). Viene elaborato solo nel browser." },
      { title: "Controlla le specifiche", text: "Verifica che l'immagine sia quadrata e nell'intervallo di pixel consigliato." },
      { title: "Cambia anteprima", text: "Confronta feed di Apple Podcasts, schermata di riproduzione Spotify, schermata di blocco, area sicura e miniatura 50 × 50 px." },
      { title: "Correggi e riprova", text: "Modifica dimensione del testo o contrasto nel tuo programma di grafica e carica la nuova versione." },
    ],
    tips: [
      "Se il titolo non si legge in miniatura, usa meno parole o un carattere più grande.",
      "Non mettere testo importante vicino ai bordi: alcune app arrotondano gli angoli.",
      "Prova in modalità chiara e scura; un testo sottile e scuro può sparire su sfondi scuri.",
    ],
  },
  "rss-feed-validator": {
    metaTitle: "Validatore Feed RSS per Podcast Gratis | Pod Studio",
    metaDescription:
      "Controlla il feed RSS: tag mancanti, enclosure non valide, copertina e GUID prima di inviarlo ad Apple Podcasts o Spotify. Gratis e privato, nel browser.",
    overview: [
      "Il Validatore Feed RSS cerca i problemi che più spesso bloccano o ritardano la pubblicazione: XML non valido, metadati del programma mancanti, problemi di copertina, GUID duplicati o assenti ed episodi senza un'enclosure audio utilizzabile.",
      "Ogni risultato è spiegato in modo semplice, con cosa correggere, così puoi risolvere nel pannello dell'hosting prima che Apple Podcasts o Spotify rifiutino il feed.",
    ],
    steps: [
      { title: "Incolla il feed", text: "Incolla l'XML del feed (o carica l'esempio) nel validatore." },
      { title: "Avvia il controllo", text: "Il validatore analizza il feed nel browser e verifica i tag obbligatori e consigliati." },
      { title: "Leggi i risultati", text: "Affronta prima gli errori, poi gli avvisi. Ogni voce spiega perché è importante." },
      { title: "Correggi e ricontrolla", text: "Aggiorna le impostazioni nell'hosting, incolla il feed aggiornato e rilancia il controllo." },
    ],
    tips: [
      "Non cambiare mai il GUID di un episodio pubblicato: le app potrebbero considerarlo un episodio nuovo.",
      "Verifica che il tag explicit sia corretto; incide su dove può comparire il programma.",
      "Ricontrolla dopo un cambio di hosting o di copertina: sono le cause più comuni di nuovi errori.",
    ],
  },
  "episode-timestamp-generator": {
    metaTitle: "Generatore di Capitoli e Timestamp Podcast | Pod Studio",
    metaDescription:
      "Trasforma i tuoi appunti in capitoli ordinati per YouTube, Spotify e show notes. Formato orario coerente con un clic. Gratis, senza registrazione.",
    overview: [
      "Il Generatore di Capitoli trasforma gli appunti di registrazione in segnaposto ordinati come «00:00 Introduzione» e «05:12 Il percorso dell'ospite», con una timeline visiva dell'episodio.",
      "Usa il risultato nelle descrizioni di YouTube e Spotify e nelle show notes, così gli ascoltatori saltano alla parte che interessa e i motori di ricerca capiscono meglio l'episodio.",
    ],
    steps: [
      { title: "Aggiungi i capitoli", text: "Inserisci ogni capitolo con orario d'inizio e titolo, o incolla una lista rapida come «0:00 Intro, 5:30 Svolta»." },
      { title: "Mantieni il formato coerente", text: "Usa un solo formato orario ed elenca i capitoli nell'ordine in cui avvengono." },
      { title: "Controlla la timeline", text: "Usa la timeline per individuare buchi, doppioni o capitoli troppo brevi." },
      { title: "Copia i capitoli", text: "Copia la lista formattata nelle show notes, nella descrizione di YouTube o nell'hosting." },
    ],
    tips: [
      "YouTube richiede che il primo timestamp sia 00:00 per mostrare i capitoli.",
      "Scrivi i capitoli come piccoli titoli: lo specifico batte il vago («Errori di prezzo nel primo anno» invece di «Parte 2»).",
      "Punta a capitoli di almeno qualche minuto; troppi capitoli brevi sono difficili da scorrere.",
    ],
  },
  "intro-script-generator": {
    metaTitle: "Generatore di Intro e Ganci per Podcast | Pod Studio",
    metaDescription:
      "Scrivi un'intro breve con un gancio che faccia restare chi ascolta. Formati intervista, monologo e racconto. Generatore di script d'introduzione gratis.",
    overview: [
      "Lo Script per Introduzione ti aiuta a scrivere i primi 30–60 secondi dell'episodio: un gancio che susciti curiosità, seguito da una breve presentazione che fissi le aspettative.",
      "Scegli formato e tono, aggiungi qualche dettaglio e ottieni uno script pronto da leggere in vista teleprompter, da adattare alla tua voce.",
    ],
    steps: [
      { title: "Scegli formato e tono", text: "Seleziona intervista, monologo o racconto, e un tono energico, riflessivo o colloquiale." },
      { title: "Aggiungi i dettagli", text: "Inserisci argomento o promessa dell'episodio e, se serve, nome e ruolo dell'ospite." },
      { title: "Genera lo script", text: "Ottieni uno script breve che va dal gancio alla presentazione fino a «ecco cosa imparerai»." },
      { title: "Leggilo ad alta voce", text: "Provalo una o due volte ed elimina le frasi che non suonano da te." },
    ],
    tips: [
      "Vai al punto nei primi 15 secondi: è lì che molti ascoltatori decidono se restare.",
      "Una frase forte dell'ospite è un ottimo cold open prima della sigla.",
      "Mantieni brevi le intro ricorrenti; avvisi e sponsor lunghi vanno più avanti.",
    ],
  },
  "audience-growth-estimator": {
    metaTitle: "Previsione di Crescita Download Podcast | Pod Studio",
    metaDescription:
      "Proietta i download del podcast a 12 mesi partendo dai numeri attuali, dal calendario di uscita e da un tasso di crescita mensile. Calcolatore gratis.",
    overview: [
      "La Previsione di Crescita proietta i download futuri applicando un tasso di crescita mensile ai tuoi download attuali per episodio e moltiplicando per la frequenza di pubblicazione.",
      "È una semplice illustrazione della crescita composta, non una previsione: non considera stagionalità, picchi virali o perdita di ascoltatori. Usala per fissare obiettivi realistici e vedere come piccoli miglioramenti si sommano in un anno.",
    ],
    steps: [
      { title: "Inserisci i download attuali", text: "Aggiungi la tua media attuale di download a 30 giorni per episodio." },
      { title: "Imposta il calendario", text: "Indica quanti episodi pubblichi al mese." },
      { title: "Scegli un tasso di crescita", text: "Seleziona una percentuale mensile che rifletta il tuo trend recente o il tuo obiettivo." },
      { title: "Leggi il grafico", text: "Guarda la traiettoria a 12 mesi e confrontati con i percentili globali dei download." },
    ],
    tips: [
      "Parti con un tasso moderato: la crescita composta fa esplodere in fretta le ipotesi ottimistiche.",
      "Abbina questa previsione al calcolatore CPM per capire quando le sponsorizzazioni diventano realistiche.",
      "Confronta ogni mese la previsione con i numeri reali e aggiorna i dati.",
    ],
  },
  "description-generator": {
    metaTitle: "Generatore di Descrizioni per Podcast ed Episodi | Pod Studio",
    metaDescription:
      "Scrivi descrizioni chiare del programma e di ogni episodio per Apple Podcasts e Spotify, con indicazione del taglio «altro» su mobile. Gratis.",
    overview: [
      "Il Generatore di Descrizioni scrive due tipi di testo: la descrizione del programma, che spiega la promessa e il pubblico del podcast, e le descrizioni degli episodi, che riassumono una singola puntata.",
      "Una buona descrizione aiuta a decidere di seguire il programma e aiuta le app a capirlo, per questo lo strumento mette le informazioni chiave all'inizio, dove le app le mostrano.",
    ],
    steps: [
      { title: "Scegli la modalità", text: "Indica se scrivi la descrizione del programma o di un episodio." },
      { title: "Aggiungi l'essenziale", text: "Inserisci pubblico di riferimento, temi e punti chiave, link o call to action." },
      { title: "Controlla il taglio", text: "Guarda dove le app mobili tagliano il testo con «…altro» e metti per primi il gancio e la parola chiave." },
      { title: "Modifica e incolla", text: "Adatta il testo alla tua voce e incollalo nella piattaforma di hosting." },
    ],
    tips: [
      "La prima frase è la più importante: molte app mostrano solo una o due righe prima di «altro».",
      "Nomina direttamente il tuo pubblico («per chi apre la prima startup») perché si riconosca.",
      "Usa parole chiave in modo naturale, mai elenchi; Apple può rifiutare descrizioni considerate spam.",
    ],
  },
  "category-finder": {
    metaTitle: "Ricerca Categorie Apple Podcasts | Pod Studio",
    metaDescription:
      "Trova le categorie e sottocategorie Apple Podcasts più adatte al tuo programma. Cerca per argomento e copia il tag XML esatto. Strumento gratuito.",
    overview: [
      "La Ricerca Categorie ti aiuta a scegliere categoria e sottocategoria Apple Podcasts giuste. Apple consente fino a due categorie e quella principale è la più visibile.",
      "Cerca per argomento o parola chiave per vedere categorie e sottocategorie corrispondenti e copia con un clic il tag XML esatto per il tuo feed RSS.",
    ],
    steps: [
      { title: "Cerca per argomento", text: "Scrivi il tema principale, ad esempio «finanza personale» o «true crime»." },
      { title: "Confronta le opzioni", text: "Esamina le categorie e sottocategorie suggerite." },
      { title: "Scegli la principale", text: "Tieni quella che descrive meglio la maggior parte degli episodi." },
      { title: "Copia il tag XML", text: "Fai clic su una sottocategoria per copiarne il tag iTunes o selezionala nel pannello dell'hosting." },
    ],
    tips: [
      "Scegli la categoria che i tuoi ascoltatori sfoglierebbero, non quella con meno concorrenza.",
      "Una sottocategoria precisa spesso dà più visibilità a un programma nuovo.",
      "Controlla l'elenco ufficiale aggiornato di Apple prima di pubblicare; i nomi a volte cambiano.",
    ],
  },
  "hook-generator": {
    metaTitle: "Generatore di Ganci per Clip di Podcast | Pod Studio",
    metaDescription:
      "Scrivi ganci che fermano lo scroll per le clip del podcast su TikTok, Reels, Shorts e LinkedIn. Scegli lo stile, confronta e copia. Gratis.",
    overview: [
      "Il generatore di Ganci per Clip Social scrive frasi d'apertura brevi e incisive per clip e post, così i momenti migliori di un episodio funzionano anche da soli.",
      "Inserisci l'argomento dell'episodio e, se vuoi, l'ospite, scegli uno stile di gancio e ottieni diverse frasi da usare come testo a schermo o didascalia su TikTok, Reels, YouTube Shorts o LinkedIn.",
    ],
    steps: [
      { title: "Inserisci l'argomento", text: "Descrivi l'argomento o il settore dell'episodio da cui nasce la clip." },
      { title: "Aggiungi un ospite (facoltativo)", text: "Includi l'ospite quando nome o competenza sono il richiamo." },
      { title: "Scegli uno stile", text: "Filtra per stile di gancio e confronta diverse aperture." },
      { title: "Copia e pubblica", text: "Usa il gancio migliore come testo a schermo o didascalia e collega l'episodio completo." },
    ],
    tips: [
      "La prima riga ha circa due secondi per catturare l'attenzione: parti dall'affermazione più specifica.",
      "Assicurati che la clip mantenga ciò che promette il gancio; i ganci ingannevoli minano la fiducia.",
      "Sottotitola ogni clip: molte persone guardano senza audio.",
    ],
  },
  "transcript-formatter": {
    metaTitle: "Pulizia Trascrizioni Podcast | Pod Studio",
    metaDescription:
      "Pulisci le trascrizioni del podcast: assegna i nomi ai parlanti, rimuovi intercalari e timestamp e ottieni un testo pronto da pubblicare. Gratis e privato.",
    overview: [
      "La Pulizia Trascrizioni riordina il testo esportato da qualsiasi servizio di trascrizione. Sostituisci le etichette generiche con nomi reali, rimuovi gli intercalari inglesi più comuni (um, uh…) ed elimina o mantieni i timestamp nel testo.",
      "Lavora sul testo incollato: non trascrive l'audio. Il risultato è più leggibile e pronto da pubblicare come trascrizione accessibile, articolo di blog o estratto delle show notes.",
    ],
    steps: [
      { title: "Incolla la trascrizione", text: "Copia il testo esportato dal servizio di trascrizione e incollalo nell'editor." },
      { title: "Dai un nome ai parlanti", text: "Sostituisci «SPEAKER_00» e simili con nomi reali e scegli se rimuovere i timestamp." },
      { title: "Controlla il risultato", text: "Rileggi la trascrizione formattata e correggi a mano se serve." },
      { title: "Copia o scarica", text: "Copia il testo pulito o scaricalo per pubblicarlo sul sito o sull'hosting." },
    ],
    tips: [
      "Pubblicare le trascrizioni rende gli episodi accessibili e dà ai motori di ricerca testo reale da indicizzare.",
      "Togli gli intercalari per la leggibilità, ma mantieni ciò che cambia il senso di una citazione.",
      "Ricontrolla nomi e termini tecnici: gli strumenti di trascrizione sbagliano spesso proprio lì.",
    ],
  },
  "trailer-script-builder": {
    metaTitle: "Script per Trailer di Podcast | Pod Studio",
    metaDescription:
      "Scrivi un trailer che spieghi il tuo programma, a chi si rivolge e perché seguirlo. Struttura collaudata per trailer da 60–90 secondi. Gratis.",
    overview: [
      "Lo Script per Trailer ti offre una struttura collaudata: un gancio, di cosa parla il programma, a chi si rivolge, cosa lo rende diverso e un invito chiaro a seguirlo.",
      "Molte directory mettono in evidenza il trailer nella pagina del programma, quindi spesso è la prima cosa che sentono i nuovi ascoltatori. Questo strumento ti aiuta a sfruttare quei 60–90 secondi.",
    ],
    steps: [
      { title: "Dati del programma", text: "Aggiungi titolo del programma, nome del conduttore e calendario di uscita." },
      { title: "Formula la grande domanda", text: "Scrivi la domanda centrale che il programma esplora e la promessa fatta agli ascoltatori." },
      { title: "Genera lo script", text: "Ottieni uno script strutturato con gancio, corpo e call to action." },
      { title: "Registra e taglia", text: "Leggilo ad alta voce, cronometralo ed elimina le frasi che ripetono un concetto." },
    ],
    tips: [
      "Inserisci un breve estratto reale di un episodio, se ce l'hai: mostra invece di raccontare.",
      "Chiudi con una sola azione chiara: seguire il programma nell'app dell'ascoltatore.",
      "Aggiorna il trailer quando cambiano focus o formato del programma.",
    ],
  },
  "review-response-generator": {
    metaTitle: "Risposte alle Recensioni del Podcast | Pod Studio",
    metaDescription:
      "Rispondi alle recensioni degli ascoltatori e scrivi ringraziamenti in onda, per complimenti e critiche. Modelli cordiali e professionali. Strumento gratis.",
    overview: [
      "Il generatore di Ringraziamenti Recensioni ti aiuta a rispondere alle recensioni e a scrivere ringraziamenti in onda che celebrano chi ti sostiene e invogliano altri a valutare il programma.",
      "Copre recensioni entusiaste, feedback costruttivi e critiche ingiuste, con risposte rispettose, senza mettersi sulla difensiva, che citano miglioramenti concreti quando ha senso.",
    ],
    steps: [
      { title: "Aggiungi la recensione", text: "Inserisci nome o nickname dell'ascoltatore e cosa ha scritto." },
      { title: "Indica il tono", text: "Segna la recensione come elogio a 5 stelle, costruttiva o critica." },
      { title: "Scegli il formato", text: "Ottieni un testo da leggere in onda, una risposta per i social e un messaggio privato di ringraziamento." },
      { title: "Personalizza", text: "Riprendi un dettaglio della recensione così l'ascoltatore sa che l'hai letta." },
    ],
    tips: [
      "Leggi qualche recensione in onda ogni mese: è uno dei modi più semplici per ottenere più valutazioni.",
      "Non nominare né deridere mai chi ti critica; rispondi all'argomento, non alla persona.",
      "Ringrazia per i feedback specifici e racconta cosa hai cambiato grazie a loro.",
    ],
  },
  "collab-finder": {
    metaTitle: "Proposte per Ospiti e Collaborazioni Podcast | Pod Studio",
    metaDescription:
      "Scrivi proposte da ospite ed email di promozione incrociata che ricevono risposta. Valore reciproco e prossimo passo chiari. Modelli gratuiti.",
    overview: [
      "Le Proposte di Collaborazione generano email per proporti come ospite, invitare qualcuno nel tuo programma o proporre una promozione incrociata con un altro podcast.",
      "Ogni bozza spiega a chi si rivolge il tuo programma, il formato proposto, il valore per entrambe le parti e un prossimo passo semplice: ciò che i conduttori impegnati cercano prima di dire sì.",
    ],
    steps: [
      { title: "Scegli l'obiettivo", text: "Proponiti come ospite, invita qualcuno nel tuo programma o proponi uno scambio di promozione." },
      { title: "Inserisci i due programmi", text: "Indica programma e conduttore di destinazione, il nome del tuo podcast e l'angolo o il valore che offri." },
      { title: "Genera l'email", text: "Ottieni una bozza concisa con oggetto, proposta di valore e call to action chiara." },
      { title: "Personalizza e invia", text: "Cita un loro episodio che ti è piaciuto e invia dal tuo indirizzo email." },
    ],
    tips: [
      "Mantieni breve la prima email: cinque o sei frasi bastano.",
      "Condividi solo numeri di ascolto verificabili; dati gonfiati distruggono la fiducia.",
      "Fai un solo sollecito dopo una settimana e, se non rispondono, passa oltre con garbo.",
    ],
  },
};
