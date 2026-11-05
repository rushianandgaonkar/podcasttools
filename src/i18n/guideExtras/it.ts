import type { GuideExtrasRecord } from "./types";

export const itGuideExtras: GuideExtrasRecord = {
  "podcast-sponsorship-cpm-guide-2026": {
    metaTitle: "Guida a Sponsorizzazioni e CPM Podcast 2026 | Pod Studio",
    readMinutes: 5,
    sections: [
      {
        heading: "Esempio pratico: il prezzo di un episodio",
        paragraphs: [
          "Supponiamo che i tuoi episodi facciano in media 5.000 download nei primi 30 giorni. Dividi per 1.000 per ottenere 5 «unità», poi moltiplica per il CPM di ogni spazio.",
          "Con 18 $ per un pre-roll, 25 $ per un mid-roll letto dal conduttore e 10 $ per un post-roll, un episodio completamente venduto vale 90 $ + 125 $ + 50 $ = 265 $. Pubblicando quattro episodi al mese e vendendo tutti gli spazi, sono circa 1.060 $ al mese prima delle commissioni di agenzia o network.",
        ],
        formula: "5.000 ÷ 1.000 = 5 → (5 × 18 $) + (5 × 25 $) + (5 × 10 $) = 265 $ per episodio",
      },
      {
        heading: "Annunci letti dal conduttore vs. programmatici",
        paragraphs: [
          "Gli annunci letti dal conduttore sono scritti o approvati dallo sponsor e letti con la tua voce. Il pubblico si fida, per questo hanno le tariffe più alte. Possono essere registrati nell'episodio o inseriti dinamicamente per essere sostituiti in seguito.",
          "Gli annunci programmatici vengono acquistati automaticamente tramite un network pubblicitario e inseriti dal tuo hosting. Di solito pagano CPM più bassi, ma riempiono l'inventario non venduto direttamente: utile per gli episodi passati che continuano a essere scaricati.",
        ],
      },
      {
        heading: "Cosa includere in una proposta agli sponsor",
        paragraphs: ["Gli sponsor vogliono valutare in fretta affinità e rischio. Un media kit di una pagina dovrebbe contenere:"],
        list: [
          { title: "Profilo del pubblico", description: "Chi ascolta, cosa gli interessa e perché corrisponde ai clienti dello sponsor." },
          { title: "Download verificati", description: "Media dei download a 30 giorni per episodio, con screenshot dell'hosting se richiesti." },
          { title: "Spazi e tariffe", description: "Quali spazi sono disponibili, la durata e il tuo CPM o prezzo forfettario." },
          { title: "Prove di efficacia", description: "Una lettura di esempio, risultati passati o un codice promo che permetta di misurare la risposta." },
        ],
      },
      {
        heading: "Opzioni per programmi più piccoli",
        paragraphs: [
          "Se gli accordi a CPM non sono ancora convenienti, molti programmi indipendenti iniziano con un prezzo fisso per episodio, link di affiliazione o codici promo pagati a vendita e con il sostegno diretto degli ascoltatori tramite abbonamenti. Così costruisci uno storico con cui negoziare accordi a CPM quando il pubblico cresce.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual è un buon CPM per un podcast piccolo?",
        answer:
          "Non esiste una tariffa fissa. Gli intervalli di questa guida sono un punto di partenza: i programmi di nicchia con un pubblico ben definito e propenso all'acquisto spesso possono chiedere di più, quelli di intrattenimento generalista meno. Molti programmi piccoli iniziano con accordi forfettari o di affiliazione e passano al CPM quando i download si stabilizzano.",
      },
      {
        question: "Quanti download servono per trovare sponsor?",
        answer:
          "Non c'è una soglia universale. I network pubblicitari spesso fissano un minimo di download, ma sponsor diretti di una nicchia precisa possono lavorare con programmi più piccoli se il pubblico corrisponde bene. Costanza e dati affidabili contano più di un singolo numero alto.",
      },
      {
        question: "Gli sponsor pagano a download o a episodio?",
        answer:
          "Gli accordi a CPM si pagano ogni 1.000 download, di solito contati nei primi 30–45 giorni. Alcuni sponsor preferiscono un prezzo fisso per episodio o campagna, mentre l'affiliazione paga a vendita o iscrizione. Concorda sempre per iscritto come vengono misurati e riportati i download.",
      },
    ],
  },
  "apple-spotify-cover-art-specs-guide": {
    metaTitle: "Copertina Podcast: Specifiche Apple e Spotify | Pod Studio",
    readMinutes: 5,
    sections: [
      {
        heading: "Progetta prima per la miniatura",
        paragraphs: [
          "La maggior parte delle persone vede la tua copertina per la prima volta grande quanto un polpastrello: nei risultati di ricerca, nelle classifiche e nelle liste «in riproduzione dopo». Una grafica splendida a tutto schermo può diventare una macchia illeggibile quando si rimpicciolisce.",
        ],
        list: [
          { title: "Poche parole, grandi", description: "Di solito basta il nome del programma in un carattere deciso. Lascia gli slogan alla descrizione." },
          { title: "Contrasto massimo", description: "Testo chiaro su fondo scuro o viceversa. Evita foto affollate dietro al testo." },
          { title: "Un solo punto focale", description: "Un volto, un'icona o il titolo, non tutti e tre in competizione." },
        ],
      },
      {
        heading: "Aree sicure e ritagli",
        paragraphs: [
          "Alcune app arrotondano gli angoli o sovrappongono piccoli badge. Tieni titolo, logo e volti nell'area centrale del quadrato — circa l'80% centrale — così non viene tagliato nulla di importante.",
        ],
      },
      {
        heading: "Motivi comuni di rifiuto",
        paragraphs: ["Oltre a dimensioni e formato, le directory valutano contenuto e qualità. Evita:"],
        list: [
          { title: "Loghi e marchi delle piattaforme", description: "Non usare i loghi di Apple Podcasts o Spotify e non suggerire un sostegno che non hai." },
          { title: "Immagini a bassa risoluzione o deformate", description: "Una copertina ingrandita, sfocata o stirata può essere rifiutata o sembrare poco professionale." },
          { title: "Immagini esplicite o ingannevoli", description: "La copertina deve essere appropriata e rappresentare il programma con onestà." },
        ],
      },
      {
        heading: "Checklist prima del caricamento",
        paragraphs: ["Prima di caricarla, verifica che il file sia:"],
        list: [
          { title: "Quadrato da 3000 × 3000 px", description: "Esattamente 1:1, nell'intervallo 1400–3000 px." },
          { title: "JPEG o PNG in RGB", description: "Spazio colore RGB, non CMYK, con l'estensione .jpg o .png corretta." },
          { title: "Leggibile a 50 × 50 px", description: "Controllalo in un'anteprima piccola prima di pubblicare." },
          { title: "Salvato con un nuovo nome", description: "Quando aggiorni la copertina, un nuovo nome file aiuta le app ad accorgersi del cambiamento." },
        ],
      },
    ],
    faqs: [
      {
        question: "Che dimensioni deve avere la copertina di un podcast?",
        answer:
          "Usa un'immagine quadrata di 3000 × 3000 pixel. Apple Podcasts accetta da 1400 × 1400 a 3000 × 3000 pixel in JPEG o PNG con spazio colore RGB; un quadrato da 3000 px va bene anche per Spotify e le altre app.",
      },
      {
        question: "Posso usare la stessa copertina su Apple Podcasts e Spotify?",
        answer:
          "Sì. Entrambe leggono la copertina dal feed RSS o dalle impostazioni dell'hosting, quindi un unico quadrato da 3000 × 3000 px conforme ai requisiti di Apple funziona sulle principali app.",
      },
      {
        question: "Perché la nuova copertina non compare?",
        answer:
          "Le app di podcast memorizzano la copertina in cache, quindi l'aggiornamento può richiedere da qualche ora a diversi giorni. Verifica che il feed punti all'URL della nuova immagine — un nuovo nome file aiuta — e che il file rispetti ancora dimensioni e formato richiesti.",
      },
    ],
  },
  "how-to-write-clickable-episode-titles": {
    metaTitle: "Come Scrivere Titoli di Episodi Podcast | Pod Studio",
    description:
      "Formule collaudate per titoli di episodi che si fanno notare su Apple Podcasts e Spotify, con esempi, consigli per la ricerca ed errori da evitare.",
    firstHeading: "Perché il titolo dell'episodio conta così tanto",
    readMinutes: 5,
    sections: [
      {
        heading: "Altre cinque formule da provare",
        paragraphs: ["Combinale con i tre archetipi qui sopra per esplorare angoli diversi dello stesso episodio:"],
        list: [
          { title: "4. La promessa pratica", description: "«Come lanciare un podcast con 100 € di budget»: chiaro, cercabile e utile." },
          { title: "5. La lista numerata", description: "«7 domande d'intervista che tirano fuori storie migliori»: le aspettative sono chiare a colpo d'occhio." },
          { title: "6. Il gancio dell'ospite", description: "«[Nome dell'ospite] su come costruire un brand senza social»: quando l'ospite è il richiamo." },
          { title: "7. La domanda diretta", description: "«Le email a freddo sono morte nel 2026?»: fa venire voglia di scoprire la risposta." },
          { title: "8. La cornice dell'errore", description: "«L'errore di prezzo che ci è costato il primo anno»: posta in gioco concreta, lezione vera." },
        ],
      },
      {
        heading: "Titoli e ricerca dei podcast",
        paragraphs: [
          "La ricerca di Apple Podcasts e Spotify tiene conto delle parole nei titoli e nelle descrizioni del programma e degli episodi. Usare le parole che i tuoi ascoltatori digiterebbero — «budget», «allenamento maratona», «true crime Italia» — aiuta le persone giuste a trovare l'episodio.",
          "Mettile all'inizio, perché sugli schermi piccoli i titoli vengono spesso tagliati. Un argomento chiaro in apertura batte una frase brillante che si capisce solo dopo l'ascolto.",
        ],
      },
      {
        heading: "Errori comuni nei titoli",
        paragraphs: ["Queste abitudini fanno perdere ascolti senza che te ne accorga:"],
        list: [
          { title: "Iniziare con il numero dell'episodio", description: "Le app mostrano già il numero; «Ep. 112:» spreca i caratteri più visibili." },
          { title: "Anticipazioni vaghe", description: "«Una bella chiacchierata» non dice a un nuovo ascoltatore perché premere play." },
          { title: "Clickbait che non mantiene", description: "Promettere troppo porta ad abbandoni precoci e recensioni negative." },
          { title: "Battute interne", description: "Riferimenti che capiscono solo gli affezionati rendono l'episodio invisibile ai nuovi." },
        ],
      },
      {
        heading: "Una routine semplice per i titoli",
        paragraphs: [
          "Scrivi almeno dieci opzioni con formule diverse, scegline tre e leggile sul telefono come le vedrebbe un ascoltatore. Scegli quella che rende più chiaro il beneficio. Col tempo, confronta i download della prima settimana per stile di titolo per capire a cosa risponde il tuo pubblico.",
        ],
      },
    ],
    faqs: [
      {
        question: "Devo mettere il numero dell'episodio nel titolo?",
        answer:
          "Di solito no. I feed dei podcast hanno un campo apposito per il numero dell'episodio che le app possono mostrare; ripeterlo nel titolo occupa spazio meglio usato per l'argomento. L'eccezione principale sono i programmi seriali in cui l'ordine conta.",
      },
      {
        question: "Quanto deve essere lungo il titolo di un episodio?",
        answer:
          "Non esiste un limite ufficiale valido ovunque, ma più corto è più sicuro. Metti l'idea principale nelle prime parole, così resiste al taglio su telefoni, auto e smartwatch.",
      },
      {
        question: "Posso cambiare il titolo di un episodio già pubblicato?",
        answer:
          "Sì. Aggiornalo nell'hosting e la modifica arriverà al feed RSS; le app possono metterci un po' ad aggiornarsi. Non cambiare il GUID dell'episodio, altrimenti le app potrebbero considerarlo un episodio nuovo.",
      },
    ],
  },
};
