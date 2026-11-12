import type { ToolContentRecord } from "./types";

export const itToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Generatore di Titoli per Episodi Podcast | Pod Studio",
    metaDescription:
      "Crea titoli per episodi podcast con il nostro generatore gratuito. Formule per curiosità, how-to e ospiti testate su Apple e Spotify. Gratis.",
    overview: [
      "Il Generatore di Titoli trasforma un argomento, e facoltativamente il nome di un ospite, in una lista di idee ad alto CTR basate su schemi psicologici collaudati: curiosità, promesse pratiche, opinioni controcorrente e ganci incentrati sull'ospite.",
      "Creato per i creator che sanno cosa tratta l'episodio ma cercano titoli accattivanti testati per massimizzare gli ascolti sugli schermi smartphone di Apple Podcasts e Spotify.",
    ],
    steps: [
      { title: "Descrivi l'episodio", text: "Scrivi l'argomento principale in poche parole, ad esempio «budget per freelance» o «i primi 100 iscritti»." },
      { title: "Aggiungi un ospite (facoltativo)", text: "Inserisci nome o competenza dell'ospite quando è il motivo principale per ascoltare." },
      { title: "Filtra per stile", text: "Passa tra formule di curiosità, tutorial, controcorrente e altre per confrontare gli angoli." },
      { title: "Copia o esporta", text: "Copia un titolo o esporta l'intera lista come file di testo da condividere con il team." },
    ],
    tips: [
      "Metti le parole più specifiche e cercate nella prima metà del titolo: le app spesso tagliano dopo 60 caratteri.",
      "Prometti solo ciò che l'episodio mantiene. Titoli precisi trattengono di più e riducono le recensioni negative.",
      "Lascia fuori numero dell'episodio e nome del programma, a meno che gli ascoltatori non ne abbiano bisogno.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Generatore di Show Notes e Modello Podcast | Pod Studio",
    metaDescription:
      "Crea note per episodi ordinate con il modello di show notes gratuito. Riassunti, timestamp, bio ospiti e link in Markdown. Gratis, senza iscrizione.",
    overview: [
      "Il Generatore di Show Notes organizza i dati dell'episodio in note strutturate e ottimizzate per la ricerca: riassunto coinvolgente, biografia dell'ospite, capitoli con timestamp, punti chiave e risorse citate.",
      "Il risultato è formattato in Markdown, HTML o testo semplice, pronto da incollare direttamente su Buzzsprout, Libsyn, Podbean, Spotify for Creators, YouTube o sul tuo sito senza riformattare.",
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
    sections: [
      {
        heading: "Modello di show notes per podcast",
        intro: "Note per gli episodi pulite e ottimizzate aiutano gli ascoltatori a seguire i contenuti e offrono ai motori di ricerca testo indicizzabile di valore:",
        template: `# Titolo dell'Episodio: Far Crescere il Tuo Pubblico nel 2026

## Riassunto dell'Episodio
In questo episodio ci confrontiamo con la stratega audio Elena Rostova per analizzare i benchmark reali di fidelizzazione degli ascoltatori. Elena spiega perché la costanza settimanale supera i picchi virali sui social, come strutturare i marcatori di capitolo per massimizzare il tempo di ascolto e quali metriche cercano gli sponsor.

## Timestamp e Capitoli
- [00:00] Apertura e panoramica dell'episodio
- [02:15] L'esperienza di Elena nella produzione audio
- [07:45] La regola dei 30 secondi per catturare l'attenzione
- [14:20] Come stabilire la tariffa del primo annuncio sponsorizzato
- [23:10] I più comuni errori SEO nelle show notes da evitare
- [31:00] Q&A rapido e considerazioni conclusive

## Punti Chiave da Ricordare
1. Conquista gli ascoltatori con una promessa specifica nei primi 30 secondi.
2. Struttura le note con intestazioni di capitolo chiare per scalare i motori di ricerca.
3. Le sponsorizzazioni lette direttamente dal conduttore mantengono oltre l'85% dell'attenzione.

## Risorse Citate in Questo Episodio
- Libro: *Sound Reporting: The NPR Guide to Audio Journalism*
- Strumento: Costruttore di Scaletta per Episodi di Pod Studio
- Contatta Elena: @elenaaudio su Twitter e LinkedIn

## Sostieni il Podcast
Se ti è piaciuto questo episodio, lascia una recensione a 5 stelle su Apple Podcasts e seguici su Spotify!`,
      },
    ],
  },
  "podcast-name-generator": {
    metaTitle: "Generatore di Nomi per Podcast: Idee di Nomi Gratis | Pod Studio",
    metaDescription:
      "Trova il nome giusto per il tuo podcast con il generatore gratuito. Idee di nomi per podcast per nicchia e verifica della disponibilità. Gratis.",
    overview: [
      "Il Generatore di Nomi per Podcast ti aiuta a trovare idee originali e memorabili per il tuo show in ogni categoria. Che tu stia cercando un generatore casuale di nomi per podcast per superare il blocco creativo o un'alternativa basata su intelligenza artificiale per creare un brand autorevole, scopri angolature che spaziano dai titoli descrittivi a quelli più brillanti.",
      "Usa queste idee per creare una lista ristretta per il tuo nuovo programma audio e controlla la disponibilità su Apple Podcasts, Spotify e registrar di domini prima del debutto.",
    ],
    steps: [
      { title: "Scegli la nicchia", text: "Seleziona il genere del programma: tecnologia, finanza, sport, comicità, true crime o crescita personale." },
      { title: "Aggiungi una parola (facoltativo)", text: "Inserisci una parola o un tema da includere nel nome: un argomento, un luogo, un'idea ricorrente." },
      { title: "Scegli uno stile o genera a caso", text: "Cambia stile di brand, testa combinazioni casuali e salva i tre-cinque nomi che preferisci." },
      { title: "Verifica prima del lancio", text: "Cerca doppioni su Apple Podcasts e Spotify e controlla tu stesso dominio e profili social." },
    ],
    tips: [
      "Pronuncia ogni nome ad alta voce: se non si riesce a scriverlo dopo averlo sentito una volta, il passaparola ne risente.",
      "Una parola chiara sull'argomento aiuta i nuovi ascoltatori a trovarti nella ricerca podcast.",
      "Evita nomi legati a una moda o a un anno: deve funzionare ancora all'episodio 200.",
    ],
    sections: [
      {
        heading: "Idee per nomi di podcast per nicchia",
        intro: "Cerchi idee creative per battezzare il tuo show? Esplora questi concetti di titoli selezionati nelle categorie di podcast più popolari:",
        groups: [
          {
            category: "Business e Startup",
            items: [
              "Il Founder Indipendente",
              "Strategia e Scala",
              "Da Zero al Round Seed",
              "Market Movers Podcast",
            ],
          },
          {
            category: "True Crime e Mistero",
            items: [
              "Casi Irrisolti",
              "Almanacco del Crimine",
              "Dietro il Nastro Giallo",
              "Ombra del Sospetto",
            ],
          },
          {
            category: "Commedia e Spettacolo",
            items: [
              "Nessuno L'Ha Chiesto",
              "Leggermente Cinici",
              "Ridere Davvero",
              "L'Assurdo Quotidiano",
            ],
          },
          {
            category: "Sport e Atletica",
            items: [
              "Il Protocollo da Bordo Campo",
              "Recupero Audio",
              "Il Manuale di Resistenza",
              "Fuorigioco e Tattica",
            ],
          },
          {
            category: "Salute e Benessere",
            items: [
              "Mente e Prestazione",
              "L'Abitudine della Longevità",
              "Salute alla Radice",
              "Laboratorio Benessere",
            ],
          },
          {
            category: "Tecnologia e Intelligenza Artificiale",
            items: [
              "Codice e Coscienza",
              "La Svolta Neurale",
              "Silicio e Futuro",
              "A Prova di Domani",
            ],
          },
          {
            category: "Fede e Spiritualità",
            items: [
              "Grazia nel Silenzio",
              "Il Cammino del Pellegrino",
              "Radici e Orizzonti",
              "Fede nel Quotidiano",
            ],
          },
        ],
      },
    ],
  },
  "episode-outline-builder": {
    metaTitle: "Modello ed Esempi di Copione per Podcast | Pod Studio",
    metaDescription:
      "Struttura l'episodio con il modello di scaletta per podcast. Pianifica blocchi, pause sponsor, tempi precisi e argomenti. Gratis, senza registrazione.",
    overview: [
      "La Scaletta Episodio crea un piano di produzione dettagliato e cadenzato: una roadmap interattiva che distribuisce i minuti tra gancio, stacco musicale, argomenti cardine, sponsor e call to action.",
      "Aiuta conduttori, co-host e produttori a mantenere il ritmo della conversazione e a rispettare la durata prestabilita senza dover scrivere ogni singola battuta.",
    ],
    steps: [
      { title: "Dà un nome all'episodio", text: "Digita un titolo provvisorio per identificare la scaletta in seguito." },
      { title: "Definisci la durata", text: "Indica la durata totale in minuti per verificare i tempi stimati di ogni blocco." },
      { title: "Modifica i blocchi", text: "Personalizza cold open, intro, argomenti cardine, stacchi commerciali e chiusura con note dedicate." },
      { title: "Esporta la scaletta", text: "Esporta in formato Markdown e condividila con ospiti o produttori prima della registrazione." },
    ],
    tips: [
      "Colloca la lettura dello sponsor a metà episodio in una pausa naturale della discussione.",
      "Prevedi qualche minuto di margine per le digressioni spontanee: spesso sono i momenti più apprezzati.",
      "Invia la scaletta agli ospiti in anticipo affinché preparino aneddoti e storie concrete anziché risposte telegrafiche.",
    ],
    sections: [
      {
        heading: "Modello di scaletta e script per podcast",
        intro: "Usa questo modello di script per podcast modulare e collaudato per organizzare i tuoi episodi in solitaria, in coppia o con ospiti:",
        template: `[00:00 - 01:00] COLD OPEN / GANCIO INIZIALE
- Gancio: Citazione forte, affermazione provocatoria o domanda aperta per agganciare l'attenzione.
- Promessa dell'Episodio: "Nell'episodio di oggi scoprirai esattamente come..."

[01:00 - 02:30] INTRODUZIONE & PRE-ROLL SPONSOR
- Sigla musicale / Stacco sonoro
- Saluto e benvenuto: Nome del conduttore, payoff dello show e breve inquadramento del tema.
- Sponsor Pre-Roll (15-30s): "Questo episodio è offerto da..."

[02:30 - 12:00] BLOCCO 1: FONDAMENTA ED ORIGINE DEL PROBLEMA
- Introduzione del problema o del tema principale.
- Esperienza personale, presentazione dell'ospite o case study concreto.
- Punto chiave #1.

[12:00 - 13:30] PAUSA PUBBLICITARIA (MID-ROLL)
- Transizione naturale: "Torniamo subito con il consiglio più importante dopo questo breve messaggio..."
- Annuncio Mid-Roll (lettura sponsor di 60s con codice promozionale dedicato).

[13:30 - 25:00] BLOCCO 2: APPROFONDIMENTO STRATEGICO
- Guida passo passo: metodologia pratica o retroscena inediti.
- Idee controintuitive ed errori frequenti da evitare.
- Punto chiave #2.

[25:00 - 35:00] BLOCCO 3: APPLICAZIONE PRATICA E DOMANDE DEGLI ASCOLTATORI
- Azioni concrete da mettere in pratica fin da oggi.
- Round di domande rapide o messaggi inviati dalla community.
- Punto chiave #3.

[35:00 - 38:00] RIEPILOGO, CTA E CONCLUSIONE
- Sintesi di 60 secondi dei concetti più importanti.
- Unica Call to Action: "Lascia una recensione su Apple Podcasts o seguici su Spotify."
- Anticipazione del prossimo episodio.
- Dissolvenza della sigla finale.`,
        link: {
          text: "Scarica il modello gratuito di script per podcast (PDF e Google Docs) →",
          href: "/downloads/podcast-script-template.pdf",
        },
      },
    ],
  },
  "guest-question-generator": {
    metaTitle: "Domande per Interviste Podcast (Gratis) | Pod Studio",
    metaDescription:
      "Genera domande memorabili per interviste podcast per ogni ospite. Rompighiaccio, storie autentiche, svolte e round finale. Gratis e senza registrazione.",
    overview: [
      "Il Generatore di Domande per Interviste Podcast crea un arco narrativo equilibrato per le tue interviste: dai rompighiaccio iniziali e aneddoti di esordio, fino a snodi cruciali, approfondimenti tecnici e round rapido finale.",
      "Inserisci nome dell'ospite, professione e argomento dell'episodio per ricevere una traccia di domande personalizzata che supera i cliché e svela storie inedite.",
    ],
    steps: [
      { title: "Inserisci i dati dell'ospite", text: "Indica nome, ruolo o professione e argomento principale dell'episodio." },
      { title: "Esplora per fase", text: "Filtra le domande per fase: rompighiaccio, esordi, fallimenti e svolte, fino al round conclusivo." },
      { title: "Perfeziona la scaletta", text: "Conserva le domande che stimolano aneddoti e racconti, evitando risposte monosillabiche." },
      { title: "Copia o esporta la traccia", text: "Copia la traccia o esportala come file di testo e aggiungi domande sui progetti più recenti dell'ospite." },
    ],
    tips: [
      "Chiedi un momento preciso («Raccontaci il giorno in cui...») anziché considerazioni generiche.",
      "Tieni pronte 2-3 domande irrinunciabili e lascia che il resto della conversazione si sviluppi spontaneamente.",
      "Riserva la domanda più personale e profonda a metà intervista, quando l'ospite è pienamente a suo agio.",
    ],
    sections: [
      {
        heading: "Domande per interviste podcast da fare a ogni ospite",
        intro: "Le grandi interviste nascono quando si mette da parte il curriculum e si scava nelle storie reali. Ecco 18 domande di grande impatto raggruppate per fase:",
        groups: [
          {
            category: "Rompighiaccio e Prime Impressioni",
            items: [
              "Qual è una convinzione che avevi a inizio carriera che oggi ritieni del tutto errata?",
              "Qual è stato il primissimo progetto o incarico che ti ha fatto innamorare del tuo settore?",
              "Se non facessi il lavoro di oggi, quale percorso inaspettato avresti intrapreso?",
              "Qual è il consiglio più comune nel tuo settore che le persone dovrebbero ignorare?",
            ],
          },
          {
            category: "Storie, Fallimenti e Punti di Svolta",
            items: [
              "Raccontaci il momento più difficile del tuo percorso: cosa è successo il giorno dopo?",
              "Qual è stato il punto di svolta critico in cui mollare sembrava la via più logica, ma hai scelto di insistere?",
              "Chi è stato il mentore o critico le cui parole hanno cambiato per sempre il tuo modo di lavorare?",
              "Cosa hai dovuto disimparare per raggiungere il tuo livello successivo di crescita?",
            ],
          },
          {
            category: "Metodi Pratici e Masterclass",
            items: [
              "Spiegaci passo dopo passo come organizzi le ore di massima concentrazione ogni mattina.",
              "Qual è il singolo strumento, metrica o abitudine responsabile dell'80% dei tuoi risultati odierni?",
              "Quando tutto sembra caotico o ingestibile, qual è il protocollo preciso che metti in atto?",
              "Qual è stata la decisione controintuitiva che hai preso quando tutti ti sconsigliavano di farlo?",
              "Qual è un problema del tuo settore di cui nessuno parla ancora ma di cui tutti parleranno tra due anni?",
            ],
          },
          {
            category: "Riflessioni Conclusive e Round Rapido",
            items: [
              "Qual è il libro o la risorsa che hai consigliato o regalato più spesso?",
              "Qual è stato il miglior acquisto sotto i 100 euro fatto negli ultimi 12 mesi?",
              "Cosa significa per te il successo oggi rispetto a quando hai cominciato?",
              "Se potessi mettere un cartellone visibile da milioni di creatori di contenuti, cosa ci scriveresti?",
              "Dove possono trovarti i nostri ascoltatori per sostenere il tuo lavoro e seguire i tuoi progetti?",
            ],
          },
          {
            category: "Domande su Business e Imprenditoria",
            items: [
              "Qual è stato l'errore di assunzione o strategico più costoso che hai commesso nei primi due anni della tua attività?",
              "Qual è una realtà operativa scomoda sulla crescita aziendale che nessuno ammette pubblicamente?",
              "Se domani perdessi i tuoi 3 clienti principali o il 50% del fatturato, qual è il tuo piano d'azione per il primo giorno?",
              "Qual è una metrica finanziaria o operativa che controlli ossessivamente ogni lunedì mattina?",
            ],
          },
          {
            category: "Domande Divertenti e Leggere",
            items: [
              "Qual è il consiglio professionale più bizzarro che qualcuno ti abbia mai dato con la massima serietà?",
              "Qual è una collina futile o ridicola su cui sei pronto a dare battaglia?",
              "Se potessi sostituire la nostra sigla con una canzone pop anni '90 imbarazzante, quale sceglieresti?",
              "Qual è stata la tua peggiore gaffe o disastro durante una diretta, presentazione o chiamata Zoom?",
            ],
          },
        ],
      },
    ],
  },
  "monetization-calculator": {
    metaTitle: "Calcolatore Guadagni e CPM per Podcast | Pod Studio",
    metaDescription:
      "Calcola le entrate del podcast con il calcolatore di guadagni e CPM. Modella sponsorizzazioni, download e spazi pubblicitari. Gratis, senza registrazione.",
    overview: [
      "Il Calcolatore di Guadagni e CPM per Podcast stima il tuo potenziale di guadagno basandosi sui tassi CPM standard del settore: (download ÷ 1.000) × CPM × spazi pubblicitari venduti.",
      "Simula proiezioni mensili e annuali su spazi pre-roll, mid-roll e post-roll, tassi di riempimento e abbonamenti ascoltatori per negoziare accordi con gli sponsor in modo consapevole.",
    ],
    steps: [
      { title: "Inserisci i download", text: "Usa la media dei download per episodio nei primi 30 giorni, fornita dalla tua piattaforma di hosting." },
      { title: "Imposta la frequenza", text: "Indica quanti episodi pubblichi ogni mese." },
      { title: "Configura gli spazi", text: "Attiva pre-roll, mid-roll e post-roll, inserisci il CPM desiderato e stima la percentuale di riempimento." },
      { title: "Esamina e salva", text: "Confronta la suddivisione delle entrate, aggiungi eventuali entrate da abbonamenti ed esporta la stima." },
    ],
    tips: [
      "I mid-roll letti dal conduttore ottengono generalmente i CPM più alti perché il livello di attenzione degli ascoltatori è massimo.",
      "Sii prudente con il tasso di riempimento: la maggior parte degli show indipendenti non vende tutti gli slot disponibili ogni mese.",
      "Presenta dati di ascolto verificati quando proponi partnership commerciali: gli sponsor potrebbero richiedere screenshot dalla tua dashboard.",
    ],
    sections: [
      {
        heading: "Quanto guadagna un podcast?",
        paragraphs: [
          "Le entrate di un podcast variano notevolmente in base ai download verificati a 30 giorni, alla frequenza delle pubblicazioni e agli slot disponibili. Show con una media tra 1.000 e 5.000 download a puntata guadagnano generalmente tra 50 e 300 euro per episodio combinando sponsorizzazioni CPM e affiliazioni.",
          "I podcast indipendenti affermati con 10.000 - 50.000 download a puntata ottengono tariffe CPM premium comprese tra 25 e 35 euro per annunci letti dal conduttore, generando migliaia di euro al mese tramite sponsor diretti, canali di membership e merchandising.",
        ],
        link: {
          text: "Leggi il report completo: Quanto Guadagna un Podcast nel 2026? →",
          href: "/guides/how-much-do-podcasts-make",
        },
      },
    ],
  },
  "cover-art-preview": {
    metaTitle: "Dimensioni Copertina Podcast: Apple e Spotify | Pod Studio",
    metaDescription:
      "Verifica dimensioni e requisiti della copertina podcast per Apple e Spotify. Anteprima immagini 3000x3000px su lock screen e dark mode. Gratis e sicuro.",
    overview: [
      "Il verificatore e visualizzatore di Copertine Podcast testa la tua grafica nei layout realistici delle directory di Apple Podcasts e Spotify, sulla schermata di blocco dello smartphone e nella miniatura di ricerca 50x50px.",
      "La tua immagine viene analizzata al 100% nel tuo browser secondo le specifiche ufficiali: rapporto 1:1 perfettamente quadrato, spazio colore RGB e risoluzione tra 1400x1400px e 3000x3000px.",
    ],
    steps: [
      { title: "Carica l'immagine", text: "Trascina un file JPG o PNG (o prova l'artwork di esempio). L'immagine resta esclusivamente sul tuo dispositivo." },
      { title: "Verifica i requisiti", text: "Controlla se l'immagine è quadrata e rispetta l'intervallo di pixel consigliato." },
      { title: "Alterna le anteprime", text: "Confronta la visualizzazione feed di Apple Podcasts, riproduzione Spotify, lock screen, safe zone e miniatura 50x50 px." },
      { title: "Ottimizza e ricontrolla", text: "Modifica le dimensioni del testo o il contrasto nel tuo editor di grafica e carica la nuova versione per confrontarla." },
    ],
    tips: [
      "Se il titolo non è leggibile nella miniatura, riduci il numero di parole o aumenta la dimensione del font.",
      "Evita di posizionare testi importanti troppo vicini ai bordi: molte app arrotondano gli angoli della grafica.",
      "Effettua la verifica sia in modalità chiara sia in modalità scura: testi scuri e sottili possono sparire sui temi dark.",
    ],
    sections: [
      {
        heading: "Requisiti di dimensione della copertina del podcast",
        paragraphs: [
          "Sia Apple Podcasts che Spotify richiedono che l'immagine di copertina del podcast sia un quadrato perfetto 1:1 con dimensioni comprese tra 1400 × 1400 e 3000 × 3000 pixel. Lo standard industriale consigliato è di 3000 × 3000 pixel a 72 DPI, garantendo una visualizzazione nitida sia sui display Retina degli smartphone che sugli schermi TV.",
          "I file grafici devono essere salvati in formato JPEG o PNG nello spazio colore sRGB. Evita i profili colore CMYK, che causano errori di validazione o colori alterati sui dispositivi mobili. Mantieni tutti gli elementi visivi critici, il titolo e i ritratti all'interno dell'area sicura centrale dell'80%, per evitare che vengano coperti da angoli arrotondati o pulsanti di riproduzione.",
        ],
        link: {
          text: "Consulta la checklist completa dei requisiti: Guida alle Specifiche di Copertina per Apple Podcasts e Spotify →",
          href: "/guides/apple-spotify-cover-art-specs-guide",
        },
      },
    ],
  },
  "rss-feed-validator": {
    metaTitle: "Validatore e Controllo Feed RSS per Podcast | Pod Studio",
    metaDescription:
      "Controlla tag mancanti, enclosure audio, copertina e GUID nel feed RSS del tuo podcast prima dell'invio ad Apple Podcasts o Spotify. Gratis, nel browser.",
    overview: [
      "Il Validatore di Feed RSS individua i problemi tecnici che più spesso ritardano o impediscono l'approvazione del tuo show: XML non valido, metadati assenti, copertina non conforme, GUID duplicati ed episodi privi di file audio valido.",
      "Ciascuna anomalia viene spiegata con indicazioni pratiche su dove intervenire, permettendoti di risolvere gli errori nella dashboard di hosting prima che Apple Podcasts o Spotify rifiutino il feed.",
    ],
    steps: [
      { title: "Incolla il feed", text: "Incolla l'URL o il codice XML del tuo feed (oppure carica l'esempio) nel validatore." },
      { title: "Avvia l'analisi", text: "Il tool scansiona il feed direttamente nel browser controllando tutti i tag obbligatori e consigliati." },
      { title: "Consulta i risultati", text: "Risolvi prima gli errori critici e poi gli avvisi. Ogni punto spiega la motivazione tecnica del controllo." },
      { title: "Correggi e riverifica", text: "Aggiorna le impostazioni sul tuo provider di hosting, incolla nuovamente il feed e ripeti il test." },
    ],
    tips: [
      "Non modificare mai il GUID di un episodio già pubblicato: le piattaforme lo considererebbero una puntata completamente nuova.",
      "Assicurati che il tag explicit sia impostato correttamente; incide sulla visibilità del programma in molti Paesi.",
      "Esegui una nuova validazione ogni volta che cambi servizio di hosting o aggiorni la copertina ufficiale.",
    ],
  },
  "episode-timestamp-generator": {
    metaTitle: "Generatore Timestamp e Capitoli per Podcast | Pod Studio",
    metaDescription:
      "Genera timestamp e capitoli YouTube per descrizioni e show notes. Crea marcatori cliccabili per Spotify e Apple Podcasts. Gratis e senza iscrizione.",
    overview: [
      "Il Generatore di Timestamp e Capitoli converte le note di produzione in marcatori temporali standard e capitoli per YouTube, abilitando le barre di navigazione interattive su YouTube, Spotify e player di podcast.",
      "Permetti al tuo pubblico di raggiungere subito gli argomenti di interesse e aiuta i motori di ricerca a indicizzare i singoli capitoli per migliorare la reperibilità del tuo show.",
    ],
    steps: [
      { title: "Inserisci i capitoli", text: "Indica ciascun capitolo con minutaggio di inizio e titolo sintetico, o incolla una lista rapida come «0:00 Intro, 5:30 Svolta»." },
      { title: "Mantieni coerenza di formato", text: "Usa un formato orario uniforme e disponi i capitoli in rigoroso ordine cronologico." },
      { title: "Controlla la timeline", text: "Osserva la timeline grafica per identificare sovrapposizioni, duplicati o segmenti troppo brevi." },
      { title: "Copia i capitoli", text: "Copia la lista formattata nelle tue show notes, nella descrizione del video YouTube o sul tuo host podcast." },
    ],
    tips: [
      "Per attivare i capitoli su YouTube, il primissimo timestamp deve obbligatoriamente iniziare a 00:00.",
      "Formula i titoli dei capitoli come micro-titoli informativi («Errori di prezzo del primo anno» è molto più efficace di «Parte 2»).",
      "Punta a capitoli di almeno 2-3 minuti: un numero eccessivo di micro-sezioni rende difficoltosa la consultazione.",
    ],
    sections: [
      {
        heading: "Come formattare i timestamp e i capitoli di YouTube",
        paragraphs: [
          "I capitoli cliccabili rendono fruibili anche gli episodi più lunghi e consentono agli ascoltatori di raggiungere direttamente gli argomenti che preferiscono. Su YouTube, i timestamp nel formato “00:00 Intro” posizionati nella descrizione attivano in automatico la barra di scorrimento segmentata.",
          "Per garantire il perfetto funzionamento dei capitoli su YouTube e Spotify, inserisci sempre un timestamp iniziale impostato su 00:00 (o 0:00), aggiungi almeno tre capitoli in ordine crescente di minutaggio e verifica che ogni segmento duri almeno dieci secondi.",
        ],
      },
    ],
  },
  "intro-script-generator": {
    metaTitle: "Script di Introduzione ed Esempi Podcast | Pod Studio",
    metaDescription:
      "Scrivi introduzioni accattivanti con il generatore di intro per podcast. Scopri esempi comprovati per show in singolo, in coppia o interviste. Gratis.",
    overview: [
      "Il Generatore di Script di Introduzione per Podcast compone cold open ed entrate efficaci da 30-60 secondi capaci di catturare l'attenzione e ridurre drasticamente l'abbandono nel primo minuto di ascolto.",
      "Seleziona il format del programma, i riferimenti dell'ospite e il tono di voce desiderato per generare copioni pronti per il gobbo ricchi di ganci di curiosità e promesse trasparenti.",
    ],
    steps: [
      { title: "Scegli format e tono", text: "Indica intervista con ospite, monologo o narrazione, con tono energico, riflessivo o colloquiale." },
      { title: "Aggiungi i dettagli", text: "Inserisci l'argomento centrale dell'episodio ed eventualmente nome e qualifica dell'ospite." },
      { title: "Genera il copione", text: "Ottieni un testo strutturato che passa dal gancio alla presentazione fino a «ecco cosa imparerai oggi»." },
      { title: "Leggi a voce alta", text: "Fai una o due prove di lettura ed elimina qualsiasi frase che non rispecchia la tua voce naturale." },
    ],
    tips: [
      "Arriva al punto focale entro i primi 15 secondi: è la finestra temporale in cui l'ascoltatore decide se rimanere o cambiare puntata.",
      "Una citazione forte dell'ospite funziona magnificamente come cold open prima della sigla.",
      "Mantieni brevi le presentazioni di rito: annunci e comunicazioni commerciali prolungate vanno posizionati più avanti.",
    ],
    sections: [
      {
        heading: "Esempi di script di introduzione per podcast",
        intro: "I primi trenta secondi determinano se l'ascoltatore completerà la puntata o passerà a un altro programma. Ecco cinque esempi comprovati di introduzione da riadattare al tuo podcast:",
        list: [
          {
            title: "1. Il Gancio ad Alta Tensione per Monologo",
            description: "“La maggior parte delle persone lavora cinque anni senza sosta prima di accorgersi di aver creato il prodotto sbagliato. Oggi condividerò i tre test di validazione che mi avrebbero fatto risparmiare 80.000 euro. Benvenuti a Founder Playbook.”",
          },
          {
            title: "2. La Chiacchierata tra Co-Host con Teaser",
            description: "“Bentornati su Dietro le Quinte. Sono Marco e con me c'è come sempre Matteo. Matteo, prima di commentare l'evento tecnologico di oggi, racconta a tutti perché ieri stavi per perdere il volo...”",
          },
          {
            title: "3. Il Teaser con Citazione dell'Ospite",
            description: "““Se non lasci andare il tuo cliente più grande entro sei mesi, la tua agenzia chiuderà i battenti.” È questo che il nostro ospite di oggi, David Miller, mi ha confidato dieci minuti prima di iniziare a registrare. Ecco come ha scalato il suo business senza andare in burnout.”",
          },
          {
            title: "4. Il Cold Open Narrativo e Immersivo",
            description: "“In un martedì gelido del febbraio 2014, trentadue server in un data center della Virginia si spensero all'improvviso. Quello che ne seguì fu la più grande violazione informatica mai risolta nel mondo crypto. Questo è Darknet Chronicles.”",
          },
          {
            title: "5. L'Intro Diretta e Formativa di Business",
            description: "“Vuoi posizionarti in prima pagina su Google senza investire migliaia di euro in campagne a pagamento? Nei prossimi venti minuti analizzeremo l'esatta architettura di contenuti che abbiamo utilizzato per generare 400.000 visite al mese.”",
          },
        ],
      },
      {
        heading: "Modello di script di introduzione per podcast",
        intro: "Usa questo modello modulare di script per intro di puntate in singolo, a due voci o interviste:",
        template: `[00:00 - 00:15] COLD OPEN HOOK
HOST: "E se l'unico consiglio che tutti ripetono nel tuo settore ti stesse in realtà costando migliaia di euro?"

[00:15 - 00:30] INTRO DELLO SHOW E PROMESSA DELLA PUNTATA
HOST: "Bentornati su [Nome Podcast]. Sono [Nome Host]. Nella puntata di oggi analizzeremo [Argomento della Puntata] per aiutarti a [beneficio specifico per l'ascoltatore]."

[00:30 - 00:45] PRESENTAZIONE OSPITE O SCALETTA
HOST: "[Intervista]: L'ospite di oggi è [Nome Ospite], [Ruolo/Azienda]. Esploriamo i punti di svolta cruciali e la strategia esatta che ha utilizzato per raggiungere [Traguardo Chiave]."
HOST: "[Puntata Singola]: Nei prossimi 20 minuti condividerò il framework in 3 passaggi che abbiamo ideato per risolvere questo problema partendo da zero."

[00:45 - 01:00] CALL TO ACTION E SIGLA
HOST: "Assicurati di iscriverti su Apple Podcasts o Spotify per non perdere le prossime uscite. Iniziamo subito!"

[LA SIGLA MUSICALE SALE E SFUMA NELL'EPISODIO]`,
      },
    ],
  },
  "audience-growth-estimator": {
    metaTitle: "Previsione di Crescita Ascolti del Podcast | Pod Studio",
    metaDescription:
      "Calcola le proiezioni di download del tuo podcast a 12 mesi in base a dati attuali, frequenza e tasso di crescita mensile. Gratis, senza iscrizione.",
    overview: [
      "Il Simulatore di Crescita del Pubblico stima i download futuri applicando un tasso di crescita mensile ai tuoi ascolti attuali per episodio, moltiplicato per la frequenza di pubblicazione.",
      "È un modello matematico di crescita composta a scopo orientativo, non una previsione assoluta: non calcola stagionalità o picchi virali. Usalo per impostare traguardi realistici e monitorare l'evoluzione annuale.",
    ],
    steps: [
      { title: "Inserisci i download attuali", text: "Aggiungi la media di download per episodio registrata nei primi 30 giorni." },
      { title: "Imposta la programmazione", text: "Indica il numero di episodi pubblicati ogni mese." },
      { title: "Seleziona il tasso di crescita", text: "Scegli una percentuale di crescita mensile in linea con i tuoi dati recenti o con i tuoi obiettivi." },
      { title: "Analizza il grafico", text: "Esamina la traiettoria a 12 mesi e scopri dove ti collochi rispetto ai percentili globali di ascolto." },
    ],
    tips: [
      "Inizia impostando un tasso prudente: l'interesse composto produce stime molto elevate in tempi brevi.",
      "Associa questa previsione al calcolatore CPM per capire quando le sponsorizzazioni diventeranno un'opzione concreta.",
      "Confronta periodicamente le stime con i dati reali del tuo hosting e perfeziona i parametri.",
    ],
  },
  "description-generator": {
    metaTitle: "Generatore di Descrizioni Podcast ed Esempi | Pod Studio",
    metaDescription:
      "Scrivi descrizioni chiare per il podcast e gli episodi su Apple Podcasts e Spotify. Verifica l'anteprima del taglio mobile e le parole chiave. Gratis.",
    overview: [
      "Il Generatore di Descrizioni compone due testi fondamentali: la descrizione generale dello show, che illustra tema e destinatari, e le descrizioni dei singoli episodi.",
      "Testi efficaci incentivano l'ascoltatore a seguire il podcast e permettono agli algoritmi di catalogare correttamente il programma. Lo strumento posiziona i punti salienti proprio all'inizio.",
    ],
    steps: [
      { title: "Seleziona la modalità", text: "Scegli se creare la descrizione generale dello show o quella di una puntata specifica." },
      { title: "Inserisci i dati essenziali", text: "Indica target di riferimento, argomenti chiave, lezioni salienti e link o call to action." },
      { title: "Verifica l'anteprima di taglio", text: "Controlla il punto in cui le app su smartphone troncano il testo con «...altro» e inserisci subito gancio e parole chiave." },
      { title: "Rivedi e incolla", text: "Adatta il testo al tuo stile comunicativo e incollalo sul tuo hosting di podcast." },
    ],
    tips: [
      "La prima frase è cruciale: molte app mostrano soltanto una o due righe prima del tasto «altro».",
      "Definisci chiaramente il pubblico di riferimento («per chi avvia la prima impresa») così che si riconosca all'istante.",
      "Usa parole chiave in modo naturale ed evita elenchi forzati: Apple potrebbe penalizzare descrizioni ingannevoli.",
    ],
  },
  "category-finder": {
    metaTitle: "Elenco Categorie Apple Podcasts e Trova Nick | Pod Studio",
    metaDescription:
      "Esplora l'elenco ufficiale delle categorie Apple Podcasts e generi Spotify. Trova le sottocategorie ideali per posizionare il tuo show. Gratis e veloce.",
    overview: [
      "Il Ricerca Categorie ti guida attraverso la tassonomia ufficiale di Apple Podcasts e i generi Spotify per identificare categorie primarie e secondarie in cui il tuo show può distinguersi e scalare le classifiche.",
      "Esplora la gerarchia completa, cerca per argomento e confronta i livelli di concorrenza di nicchia per posizionare al meglio il tuo podcast.",
    ],
    steps: [
      { title: "Cerca per argomento", text: "Digita il tema principale, ad esempio «finanza personale» o «true crime»." },
      { title: "Confronta i risultati", text: "Valuta le categorie e le sottocategorie suggerite." },
      { title: "Scegli la categoria principale", text: "Seleziona la categoria che descrive più fedelmente la maggior parte delle puntate." },
      { title: "Copia il tag XML", text: "Fai clic su una sottocategoria per copiare il tag iTunes o selezionala nella dashboard del tuo hosting." },
    ],
    tips: [
      "Scegli la categoria che il tuo pubblico esplorerebbe spontaneamente, non quella con meno concorrenza apparente.",
      "Una sottocategoria ben mirata offre a un nuovo show maggiori possibilità di farsi scoprire rispetto a una generica.",
      "Consulta l'elenco ufficiale di Apple prima di confermare, poiché le denominazioni possono variare nel tempo.",
    ],
    sections: [
      {
        heading: "Elenco delle categorie di Apple Podcasts",
        intro: "Di seguito trovi la tassonomia ufficiale completa delle categorie primarie e secondarie supportate da Apple Podcasts e Spotify per l'indicizzazione nelle classifiche:",
        groups: [
          {
            category: "Arte",
            items: ["Libri", "Design", "Moda e Bellezza", "Cucina", "Arti Performative", "Arti Visive"],
          },
          {
            category: "Business",
            items: ["Carriera", "Imprenditorialità", "Investimenti", "Management", "Marketing", "Non Profit"],
          },
          {
            category: "Commedia",
            items: ["Interviste Comiche", "Improvvisazione", "Stand-Up"],
          },
          {
            category: "Istruzione",
            items: ["Corsi", "Guide Pratiche", "Apprendimento Lingue", "Crescita Personale"],
          },
          {
            category: "Finzione",
            items: ["Commedia di Finzione", "Dramma", "Fantascienza"],
          },
          {
            category: "Governo",
            items: ["Governo", "Amministrazione Locale", "Nazionale", "Pubblica Amministrazione"],
          },
          {
            category: "Storia",
            items: ["Antica", "Medievale", "Militare", "Moderna", "Storia Locale"],
          },
          {
            category: "Salute e Fitness",
            items: ["Salute Naturale", "Fitness", "Medicina", "Salute Mentale", "Nutrizione", "Sessualità"],
          },
          {
            category: "Bambini e Famiglia",
            items: ["Educazione per Bambini", "Genitorialità", "Animali Domestici", "Storie per Bambini"],
          },
          {
            category: "Tempo Libero",
            items: ["Animazione e Manga", "Automobili", "Aviazione", "Fai da Te", "Giochi", "Hobby", "Casa e Giardino", "Videogiochi"],
          },
          {
            category: "Musica",
            items: ["Commento Musicale", "Storia della Musica", "Interviste Musicali"],
          },
          {
            category: "Notizie",
            items: ["Notizie Economiche", "Notizie del Giorno", "Spettacolo", "Commenti", "Politica", "Sport", "Tech News"],
          },
          {
            category: "Religione e Spiritualità",
            items: ["Buddismo", "Cristianesimo", "Induismo", "Islam", "Ebraismo", "Religione", "Spiritualità"],
          },
          {
            category: "Scienza",
            items: ["Astronomia", "Chimica", "Scienze della Terra", "Scienze della Vita", "Matematica", "Scienze Naturali", "Natura", "Fisica", "Scienze Sociali"],
          },
          {
            category: "Società e Cultura",
            items: ["Documentari", "Diari Personali", "Filosofia", "Luoghi e Viaggi", "Relazioni"],
          },
          {
            category: "Sport",
            items: ["Baseball", "Basket", "Cricket", "Calcio", "Golf", "Hockey", "Rugby", "Running", "Nuoto", "Tennis", "Pallavolo", "Wrestling"],
          },
          {
            category: "Tecnologia",
            items: ["Intelligenza Artificiale", "Coding", "Elettronica di Consumo", "Sicurezza Informatica", "Software", "News Tecnologiche"],
          },
          {
            category: "True Crime",
            items: ["Indagini", "Serial Killer", "Misteri Irrisolti"],
          },
          {
            category: "TV e Cinema",
            items: ["After Show", "Recensioni Film", "Storia del Cinema", "Interviste di Cinema", "Serie TV"],
          },
        ],
      },
    ],
  },
  "hook-generator": {
    metaTitle: "Generatore di Ganci per Clip Podcast | Pod Studio",
    metaDescription:
      "Crea ganci irresistibili per clip su TikTok, Reels e YouTube Shorts con il generatore di hook per podcast. Aumenta l'engagement video. Gratis.",
    overview: [
      "Il Generatore di Ganci per Clip Podcast crea frasi di apertura ad alto impatto e spunti video intriganti per TikTok, Instagram Reels e YouTube Shorts partendo dai temi delle tue puntate.",
      "Pensato per i podcaster che vogliono trasformare i momenti salienti dell'audio in video social virali che catturano gli spettatori nei primi due secondi e attirano nuovi ascoltatori alle puntate complete.",
    ],
    steps: [
      { title: "Inserisci l'argomento del clip", text: "Descrivi il tema centrale o la rivelazione chiave trattata nel video breve." },
      { title: "Aggiungi un ospite (opzionale)", text: "Includi l'ospite o la citazione quando la sua notorietà fa da gancio immediato." },
      { title: "Scegli lo stile del gancio", text: "Scegli tra prospettive contrarie, alta posta in gioco, dati sorprendenti, open loop e rottura di schema." },
      { title: "Copia e condividi", text: "Incolla il gancio come testo a schermo e didascalia, rimandando all'episodio completo." },
    ],
    tips: [
      "I primi tre secondi decidono se l'utente scorre via: parti con alta tensione o con una domanda aperta.",
      "Abbina un testo visibile a schermo a sottotitoli dinamici: oltre il 70% dei feed social viene guardato senza audio.",
      "Assicurati che il clip mantenga la promessa del gancio: i titoli ingannevoli distruggono la fiducia del pubblico.",
    ],
    sections: [
      {
        heading: "Esempi di ganci per clip podcast",
        intro: "Sui video brevi di TikTok, Instagram Reels e YouTube Shorts tutto si decide nei primi due secondi. Ecco cinque formule comprovate con esempi pratici:",
        list: [
          {
            title: "1. Lo Sfatatore di Miti Controintuitivo",
            description: "«Smettetela di dire ai nuovi creator di pubblicare ogni giorno. È il consiglio che porta al burnout il 95% dei podcast prima dell'episodio 10». (Mette in discussione un luogo comune per stimolare commenti immediati).",
          },
          {
            title: "2. L'Apertura Narrativa ad Alta Tensione",
            description: "«Domenica alle 2 di notte il nostro database principale è andato in crash con 400.000 euro di pagamenti in sospeso. Ecco esattamente cosa abbiamo fatto nei successivi 60 minuti». (Crea suspense narrativa istantanea).",
          },
          {
            title: "3. Il Gancio Basato sui Dati",
            description: "«Abbiamo analizzato 1.200 episodi di podcast pubblicati quest'anno. Una sola tattica di fidelizzazione ha raddoppiato la percentuale di completamento in ogni genere». (Promette evidenze concrete invece di opinioni).",
          },
          {
            title: "4. L'Open Loop della Curiosità",
            description: "«C'è un motivo segreto per cui i podcast più ascoltati su Spotify non nominano codici sconto nei primi cinque minuti. Entro la fine di questo clip scoprirai il perché». (Trattiene l'attenzione fino alla rivelazione).",
          },
          {
            title: "5. L'Interruzione di Schema",
            description: "«Chiudi subito la tua dashboard delle statistiche. Se il tuo show non cresce, controllare i download cinque volte al giorno peggiora solo le cose». (Invito diretto e perentorio che blocca lo scrolling).",
          },
        ],
      },
    ],
  },
  "transcript-formatter": {
    metaTitle: "Formattatore di Trascrizioni per Podcast | Pod Studio",
    metaDescription:
      "Formatta trascrizioni audio nello standard ideale per podcast. Inserisci etichette speaker, organizza paragrafi ed elimina riempitivi. Gratis nel browser.",
    overview: [
      "Il Formattatore di Trascrizioni per Podcast rielabora i testi grezzi generati dai software di trascrizione automatica trasformandoli in formati standard con identificazione degli interlocutori, rimozione delle intercalari e paragrafi ordinati.",
      "Funziona al 100% nel tuo browser tutelando la privacy, preparando testi accessibili ideali per pagine dedicate, show notes orientate alla SEO e articoli per il blog.",
    ],
    steps: [
      { title: "Incolla la trascrizione", text: "Copia il testo esportato dal servizio di trascrizione e incollalo nell'editor." },
      { title: "Identifica i relatori", text: "Sostituisci diciture generiche come «SPEAKER_00» con i nomi effettivi e decidi se rimuovere i timestamp interni." },
      { title: "Verifica l'anteprima", text: "Esamina il testo formattato ed esegui eventuali piccole correzioni manuali." },
      { title: "Copia o scarica", text: "Copia il testo rifinito o scaricalo per caricarlo sul tuo sito o provider di hosting." },
    ],
    tips: [
      "Pubblicare le trascrizioni rende i contenuti fruibili e offre ai motori di ricerca testo autentico da indicizzare.",
      "Elimina le intercalari per agevolare la lettura, ma mantieni espressioni che determinano il significato delle affermazioni.",
      "Rileggi con attenzione nomi propri e terminologia tecnica, dove gli strumenti automatici commettono frequenti imprecisioni.",
    ],
    sections: [
      {
        heading: "Formato standard per la trascrizione del podcast (esempio)",
        intro: "Le directory di podcast e i motori di ricerca richiedono trascrizioni formattate con chiare etichette di chi parla e timestamp temporali coerenti:",
        template: `[00:00:02] Sarah Jenkins (Conduttrice):
Bentornati su Frontiere Creative. Oggi esploriamo come i creator audio indipendenti possano generare entrate continuative senza snaturare il proprio format. Il mio ospite oggi è Marcus Vance, fondatore di AudioFirst Media. Marcus, benvenuto allo show.

[00:00:24] Marcus Vance (Ospite):
Grazie per l'invito, Sarah. È un grande piacere essere qui. Onestamente, il più grave errore che vedo compiere a chi inizia è focalizzarsi sui CPM pubblicitari prima ancora di aver creato un ciclo prevedibile di retention degli ascoltatori.

[00:00:41] Sarah Jenkins (Conduttrice):
Approfondiamo questo punto. Quando parli di "ciclo di retention", come si traduce in pratica per chi sta pubblicando i suoi primi venti episodi?

[00:00:52] Marcus Vance (Ospite):
Si riduce essenzialmente a tre elementi: un'apertura ripetibile che promette valore tangibile entro trenta secondi, un ritmo equilibrato dei blocchi per non disorientare chi ascolta e una sola call to action conclusiva, chiara e focalizzata.`,
      },
    ],
  },
  "trailer-script-builder": {
    metaTitle: "Costruttore di Script per Trailer Podcast | Pod Studio",
    metaDescription:
      "Scrivi un trailer breve che spiega il tuo podcast, a chi si rivolge e perché seguirlo. Struttura collaudata per trailer da 60–90 secondi. Gratis e veloce.",
    overview: [
      "Il Generatore di Script per Trailer fornisce una struttura collaudata per il trailer del tuo show: un gancio d'impatto, la promessa editoriale, il pubblico di riferimento, i tratti distintivi e una call to action trasparente.",
      "Molte piattaforme evidenziano il trailer in cima alla pagina del podcast: spesso è la primissima cosa ascoltata dai nuovi utenti. Questo strumento ti aiuta a rendere indimenticabili quei 60–90 secondi.",
    ],
    steps: [
      { title: "Inserisci i dati principali", text: "Indica titolo dello show, nome del conduttore e frequenza di pubblicazione." },
      { title: "Formula la domanda centrale", text: "Esplicita la domanda chiave esplorata dal podcast e la promessa rivolta a chi ascolta." },
      { title: "Genera il copione", text: "Ottieni uno script articolato con gancio, corpo centrale e invito finale all'azione." },
      { title: "Registra e rifinisci", text: "Fai una prova di lettura cronometrata ed elimina eventuali ridondanze concettuali." },
    ],
    tips: [
      "Inserisci un breve estratto audio autentico tratto da una puntata: dimostra la qualità del contenuto invece di limitarti a descriverla.",
      "Chiudi con un'unica azione inequivocabile: invitare a seguire lo show sulla propria app di ascolto preferita.",
      "Ricordati di aggiornare il trailer ogni volta che l'identità o il focus editoriale del podcast si evolvono.",
    ],
  },
  "review-response-generator": {
    metaTitle: "Risposte a Recensioni e Ringraziamenti Show | Pod Studio",
    metaDescription:
      "Rispondi alle recensioni degli ascoltatori e crea ringraziamenti da leggere in puntata, per complimenti e critiche. Modelli pronti. Gratis.",
    overview: [
      "Il Generatore di Risposte a Recensioni ti aiuta a replicare ai feedback degli utenti e a scrivere ringraziamenti in onda che valorizzano la community e stimolano nuove recensioni positive.",
      "Gestisce con misura recensioni entusiaste a 5 stelle, osservazioni costruttive e critiche ingenerose, mantenendo toni cortesi ed evidenziando miglioramenti concreti.",
    ],
    steps: [
      { title: "Inserisci la recensione", text: "Indica nome o nickname dell'utente e il contenuto del messaggio." },
      { title: "Imposta il sentimento", text: "Contrassegna la recensione come plauso a 5 stelle, riscontro costruttivo o nota critica." },
      { title: "Seleziona il formato", text: "Genera un testo da leggere in puntata, una risposta per i social o un messaggio privato di ringraziamento." },
      { title: "Personalizza il testo", text: "Aggiungi un riferimento specifico al messaggio per dimostrare che hai letto con reale attenzione." },
    ],
    tips: [
      "Leggi qualche recensione in onda ogni mese: è la strategia più immediata per incoraggiare altri ascoltatori a lasciarne una.",
      "Non deridere mai chi lascia un commento severo: rispondi al merito della questione con serenità.",
      "Ringrazia gli ascoltatori per i feedback precisi e racconta quali novità hai introdotto grazie ai loro suggerimenti.",
    ],
  },
  "collab-finder": {
    metaTitle: "Inviti per Ospiti e Collaborazioni Podcast | Pod Studio",
    metaDescription:
      "Scrivi proposte per proporti come ospite o inviti per collaborazioni tra podcast che ricevono risposta. Valore chiaro e prossimi passi. Modelli gratuiti.",
    overview: [
      "Il Generatore di Inviti e Collaborazioni stende email efficaci per proporti come ospite, invitare figure di spicco nel tuo programma o proporre scambi promozionali tra podcast affini.",
      "Ogni modello chiarisce a chi si rivolge il tuo show, il format previsto, il reciproco vantaggio e un passo successivo semplice: gli elementi chiave che i creator ricercano prima di dare risposta positiva.",
    ],
    steps: [
      { title: "Definisci l'obiettivo", text: "Proponiti come ospite, invita un relatore al tuo show o suggerisci uno scambio di visibilità." },
      { title: "Inserisci i dati dei due podcast", text: "Indica lo show e il conduttore di riferimento, il nome del tuo programma e l'angolo di valore offerto." },
      { title: "Genera l'email", text: "Ottieni una bozza sintetica con oggetto accattivante, proposta di valore e invito all'azione chiaro." },
      { title: "Personalizza e spedisci", text: "Menziona un episodio specifico che hai apprezzato e invia il messaggio direttamente dalla tua casella personale." },
    ],
    tips: [
      "Mantieni il primo messaggio breve: cinque o sei frasi ben calibrate sono più che sufficienti.",
      "Comunica unicamente dati di ascolto certificati: numeri gonfiati compromettono la credibilità.",
      "Invia un solo promemoria cortese a distanza di una settimana; se non ricevi risposta, prosegui con garbo.",
    ],
  },
  "lufs-meter": {
    metaTitle: "Misuratore LUFS Online Gratis per Podcast | Pod Studio",
    metaDescription:
      "Misuratore LUFS online gratuito. Trascina un file audio e controlla loudness integrato, true peak e gamma di loudness rispetto a −16 LUFS. Nessun caricamento.",
    overview: [
      "Il Misuratore LUFS indica quanto è davvero forte un episodio. Calcola il loudness integrato in LUFS, il true peak in dBTP e la gamma di loudness con il metodo ITU-R BS.1770 usato dalle piattaforme di podcast e streaming.",
      "Poi confronta il tuo file con l'obiettivo della piattaforma e ti dice di quanti decibel alzare o abbassare il livello. L'audio viene decodificato e misurato nel browser, quindi il file non lascia mai il tuo dispositivo.",
    ],
    steps: [
      { title: "Scegli un obiettivo", text: "Seleziona Apple Podcasts (−16 LUFS), Spotify (−14 LUFS) o lo standard broadcast (−23 LUFS)." },
      { title: "Trascina il file", text: "Aggiungi l'episodio esportato in MP3, WAV, M4A, FLAC o OGG. La misurazione di un episodio lungo può richiedere qualche secondo." },
      { title: "Leggi il risultato", text: "Confronta loudness integrato e true peak con l'obiettivo e scorri la timeline per individuare i passaggi molto più forti o più deboli." },
      { title: "Correggi ed esporta di nuovo", text: "Applica nel tuo editor la variazione di guadagno suggerita, usa un limiter se il picco sale troppo e misura il nuovo file." },
    ],
    tips: [
      "Misura il file finale esportato, non il progetto. La codifica in MP3 può alzare leggermente il true peak.",
      "Per un file mono punta a circa −19 LUFS misurati come singolo canale. Suona forte quanto un file stereo a −16 LUFS.",
      "Una gamma di loudness oltre i 10 LU circa indica spesso che i passaggi più deboli saranno difficili da sentire in auto o in treno. Una compressione leggera aiuta.",
    ],
    sections: [
      {
        heading: "Che cos'è −16 LUFS e perché conta per i podcast?",
        paragraphs: [
          "LUFS (Loudness Units relative to Full Scale) misura il volume percepito dell'intero file invece del suo picco più alto. Apple Podcasts richiede un loudness complessivo di circa −16 dB LKFS, con una tolleranza di ±1 dB e un true peak non superiore a −1 dBFS. LKFS e LUFS sono la stessa unità con due nomi.",
          "Spotify regola la riproduzione a −14 LUFS, perciò molti podcaster continuano a consegnare a −16 LUFS e lasciano che ogni app faccia la propria regolazione. Restare vicino all'obiettivo mantiene il tuo programma a un volume simile a quello degli episodi ascoltati prima e dopo, senza costringere chi ascolta a toccare il volume.",
        ],
      },
    ],
  },
  "script-timer": {
    metaTitle: "Calcolatore da Parole a Minuti per Script | Pod Studio",
    metaDescription:
      "Timer per script gratuito per podcast. Incolla uno script, converti le parole in minuti, confrontalo con la durata obiettivo e cronometra ogni segmento. Senza registrazione.",
    overview: [
      "Il Timer per Script converte le parole del tuo script in tempo di lettura. Incolla un'intro, uno spot letto o lo script completo di un episodio e vedrai quanto serve a leggerlo ad alta voce alla tua velocità, insieme al numero di parole e di paragrafi.",
      "Imposta una durata obiettivo per sapere se lo script sfora o resta sotto, e di quante parole. Inizia una riga con # per dividere lo script in segmenti: il timer crea una scaletta con l'orario di inizio e la durata di ciascuno. Le indicazioni tra [parentesi quadre] e i nomi di chi parla come HOST: non vengono conteggiati.",
    ],
    steps: [
      { title: "Scegli la velocità", text: "Seleziona lenta, naturale o veloce, oppure inserisci le tue parole al minuto. Molti conduttori di podcast parlano a circa 150 parole al minuto." },
      { title: "Incolla lo script", text: "Scrivi o incolla lo script. Segna i segmenti con titoli #, oppure incolla una scaletta esportata da Scaletta Episodio." },
      { title: "Imposta una durata obiettivo", text: "Scegli un obiettivo come 1, 15 o 30 minuti e aggiungi tempo per la musica e le pause pubblicitarie." },
      { title: "Taglia o amplia", text: "Usa l'avviso di sforamento o di margine per togliere o aggiungere parole, poi controlla nella scaletta quali segmenti durano troppo." },
    ],
    tips: [
      "Cronometrati mentre leggi un minuto del tuo script e inserisci quel numero come velocità personalizzata. È più preciso di qualsiasi media.",
      "Gli spot letti nei podcast si vendono spesso da 30 o 60 secondi. A velocità naturale sono circa 75 o 150 parole.",
      "Lascia un po' di margine. Battute improvvisate, risate e pause di solito allungano la registrazione rispetto allo script.",
    ],
    sections: [
      {
        heading: "Quante parole servono per uno script di podcast da 1, 5 o 30 minuti?",
        intro: "A una velocità naturale di 150 parole al minuto, questi valori sono un buon punto di partenza. Adattali alla tua velocità.",
        list: [
          {
            title: "30 secondi",
            description: "Circa 75 parole, la durata di uno spot breve.",
          },
          {
            title: "1 minuto",
            description: "Circa 150 parole, abbastanza per un'intro completa o uno spot da 60 secondi.",
          },
          {
            title: "5 minuti",
            description: "Circa 750 parole.",
          },
          {
            title: "10 minuti",
            description: "Circa 1.500 parole.",
          },
          {
            title: "20 minuti",
            description: "Circa 3.000 parole.",
          },
          {
            title: "30 minuti",
            description: "Circa 4.500 parole.",
          },
          {
            title: "60 minuti",
            description: "Circa 9.000 parole.",
          },
        ],
        link: {
          text: "Pianifica prima i segmenti con Scaletta Episodio",
          href: "/tools/episode-outline-builder",
        },
      },
    ],
  },
};
