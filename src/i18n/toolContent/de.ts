import type { ToolContentRecord } from "./types";

export const deToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Kostenloser Podcast-Titel-Generator | Pod Studio",
    metaDescription:
      "Erstelle klickstarke Folgentitel mit unserem kostenlosen Podcast-Titel-Generator. Formeln für Neugier, How-To und Gäste für Apple und Spotify. Gratis.",
    overview: [
      "Der Podcast-Titel-Generator verwandelt das Thema deiner Episode und den Namen eines Gastes in klickstarke Titelideen, basierend auf psychologisch bewährten Mustern: Neugier-Gaps, konkrete How-To-Versprechen und pointierte Gegenthesen.",
      "Entwickelt für Hosts, die genau wissen, worum es in der Folge geht, aber nach prägnanten Titeln suchen, die auf Smartphone-Bildschirmen in Apple Podcasts und Spotify sofort ins Auge fallen.",
    ],
    steps: [
      { title: "Beschreibe die Folge", text: "Gib das Hauptthema in wenigen Worten ein, etwa «Budget für Freelancer» oder «Die ersten 100 Abonnenten»." },
      { title: "Gast ergänzen (optional)", text: "Füge den Namen oder die Expertise des Gastes hinzu, wenn dieser der Hauptgrund zum Einschalten ist." },
      { title: "Nach Stil filtern", text: "Wechsle zwischen Neugier-, How-To-, Contrarian- und Listen-Formeln, um verschiedene Blickwinkel zu vergleichen." },
      { title: "Kopieren oder exportieren", text: "Kopiere einzelne Favoriten oder exportiere die Titelauswahl als Textdatei für dein Team." },
    ],
    tips: [
      "Platziere die wichtigsten Suchbegriffe in der ersten Hälfte des Titels – viele Podcast-Apps kürzen nach 60 Zeichen ab.",
      "Versprich nur, was die Folge auch hält. Treffende Titel sorgen für längere Hörzeiten und bessere Bewertungen.",
      "Lass Folgennummern und den Podcast-Namen weg, sofern deine Hörer nicht zwingend darauf angewiesen sind.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Podcast-Show-Notes-Generator & Vorlage | Pod Studio",
    metaDescription:
      "Erstelle strukturierte Folgentexte mit unserer Podcast-Show-Notes-Vorlage. Exportiere Zusammenfassungen, Zeitstempel, Gast-Infos und Links. Gratis.",
    overview: [
      "Der Show-Notes-Generator strukturiert alle Angaben deiner Aufnahme in professionelle, suchmaschinenoptimierte Episoden-Texte: Folgen-Zusammenfassung, Gast-Kurzbiografie, Zeitstempel-Kapitel und Link-Listen.",
      "Die Ausgabe erfolgt wahlweise als Markdown, HTML oder reiner Text – bereit zum direkten Einfügen in Buzzsprout, Libsyn, Podbean, Spotify for Podcasters, YouTube oder deine eigene Website.",
    ],
    steps: [
      { title: "Grunddaten eintragen", text: "Gib den Episodentitel und eine Zusammenfassung ein, die den Hörer-Mehrwert auf den Punkt bringt." },
      { title: "Gäste & Kapitel ergänzen", text: "Trage Gäste ein und füge Zeitstempel im Format «00:00 Thema» zeilenweise ein." },
      { title: "Takeaways & Links festhalten", text: "Notiere die wichtigsten Erkenntnisse sowie erwähnte Bücher, Tools oder Websites." },
      { title: "Format wählen & kopieren", text: "Wähle Markdown, HTML oder Plain Text passend zu deinem Hoster und kopiere die fertigen Notizen." },
    ],
    tips: [
      "Formuliere den ersten Satz für Menschen und Suchmaschinen gleichermaßen – er ist der sichtbare Teil vor dem «Mehr»-Button.",
      "Verwende nur Zeitstempel, die du mit dem finalen Master abgeglichen hast; falsche Kapitelangaben frustrieren Hörer.",
      "Behalte jede Woche dieselbe Struktur bei, damit Stammhörer empfohlene Ressourcen sofort finden.",
    ],
    sections: [
      {
        heading: "Podcast-Show-Notes-Vorlage",
        intro: "Klare, suchmaschinenoptimierte Notizen helfen deinen Hörern und bieten Suchmaschinen wertvollen Text zum Indexieren:",
        template: `# Episodentitel: Hörerwachstum meistern im Jahr 2026

## Episoden-Zusammenfassung
In dieser Folge sprechen wir mit der Audio-Strategin Elena Rostova über aktuelle Benchmarks der Hörerbindung. Elena erklärt, warum wöchentliche Verlässlichkeit kurzfristige Social-Media-Hypes schlägt, wie du Kapitelmarken für maximale Durchhörquoten setzt und welche Kennzahlen Werbepartner bei Sponsoring-Anfragen wirklich sehen wollen.

## Zeitstempel & Kapitel
- [00:00] Teaser & Themenüberblick
- [02:15] Elenas Werdegang in der Audioproduktion
- [07:45] Die 30-Sekunden-Regel für den Erhalt der Aufmerksamkeit
- [14:20] Die Bepreisung deiner ersten Sponsor-Platzierung
- [23:10] Häufige SEO-Fehler in Show Notes vermeiden
- [31:00] Schnellfragerunde & abschließende Gedanken

## Zentrale Erkenntnisse
1. Fessele Hörer mit einem konkreten Nutzenversprechen in den ersten 30 Sekunden.
2. Strukturiere Show Notes mit klaren Zeitstempel-Überschriften, um Suchmaschinen-Rankings zu verbessern.
3. Vom Host persönlich gelesene Mid-Roll-Ads erzielen über 85 % Hörer-Aufmerksamkeit im Vergleich zu programmatischer Werbung.

## In dieser Folge erwähnt
- Buch: *Sound Reporting: The NPR Guide to Audio Journalism*
- Tool: Pod Studio Episoden-Ablauf-Planer
- Vernetze dich mit Elena: @elenaaudio auf LinkedIn & Twitter

## Unterstütze die Show
Wenn dir diese Folge gefallen hat, hinterlasse uns gerne eine 5-Sterne-Bewertung auf Apple Podcasts und folge uns auf Spotify!`,
      },
    ],
  },
  "podcast-name-generator": {
    metaTitle: "Podcast-Namen-Generator: Kostenlose Namensideen | Pod Studio",
    metaDescription:
      "Finde einen Namen für deinen Podcast mit unserem kostenlosen Podcast-Namen-Generator. Podcast-Namen-Ideen nach Genre, dazu Verfügbarkeitscheck. Gratis.",
    overview: [
      "Der Podcast-Namen-Generator hilft dir, einprägsame Namen für deine Show in jedem Genre zu entwickeln. Ob du einen Zufallsgenerator für Podcast-Namen suchst, um kreative Blockaden zu lösen, oder eine KI-Alternative für markenfähige Titel – entdecke vielfältige Ansätze von beschreibend bis verspielt.",
      "Nutze diese Podcast-Namen-Ideen, um eine überzeugende Auswahlliste zu erstellen, und prüfe die Verfügbarkeit bei Apple Podcasts, Spotify und Domain-Registraren vor dem offiziellen Start.",
    ],
    steps: [
      { title: "Genre auswählen", text: "Wähle die passende Kategorie: Tech, Finanzen, Sport, Comedy, True Crime oder persönliche Weiterentwicklung." },
      { title: "Wunschbegriff ergänzen (optional)", text: "Gib ein Wort oder Motiv ein, das im Titel vorkommen soll: ein Ort, ein Kernbegriff oder ein Fachgebiet." },
      { title: "Stil wählen oder zufällig generieren", text: "Wechsle zwischen Marken-Stilen, teste Zufallskombinationen und sichere dir deine drei bis fünf Favoriten." },
      { title: "Vor dem Launch prüfen", text: "Suche auf Apple Podcasts und Spotify nach Duplikaten und prüfe Webdomains und Social-Media-Handles." },
    ],
    tips: [
      "Sprich jeden Namen laut aus: Wenn Hörer ihn nach einmaligem Hören nicht fehlerfrei tippen können, leidet die Weiterempfehlung.",
      "Ein klarer Fachbegriff im Titel hilft neuen Hörern, deine Sendung in der Podcast-Suche zu entdecken.",
      "Vermeide Namen, die an Jahreszahlen oder kurzlebige Trends gebunden sind; der Titel soll auch in Folge 200 noch passen.",
    ],
    sections: [
      {
        heading: "Podcast-Namen-Ideen nach Genre",
        intro: "Auf der Suche nach kreativen Podcast-Namen-Ideen? Entdecke diese kuratierten Titelkonzepte nach Themenfeldern:",
        groups: [
          {
            category: "Business & Startups",
            items: [
              "Der Bootstrapped Gründer",
              "Skalieren mit System",
              "Von Null zur Seed-Runde",
              "Marktmacher Podcast",
            ],
          },
          {
            category: "True Crime & Kriminalfälle",
            items: [
              "Ungelöst & Verschwiegen",
              "Cold-Case-Chroniken",
              "Hinter dem Absperrband",
              "Im Schatten des Zweifels",
            ],
          },
          {
            category: "Comedy & Humor",
            items: [
              "Niemand Hat Gefragt",
              "Leicht Zynisch",
              "Mit Humor Genommen",
              "Der Alltägliche Wahnsinn",
            ],
          },
          {
            category: "Sport & Athletik",
            items: [
              "Das Seitenlinien-Protokoll",
              "Nachspielzeit Audio",
              "Das Ausdauer-Playbook",
              "Vollgas Sportfunk",
            ],
          },
          {
            category: "Gesundheit & Wohlbefinden",
            items: [
              "Körper & Geist Protokoll",
              "Die Langlebigkeits-Formel",
              "Ursachen-Forschung Radio",
              "Das Vitalitäts-Labor",
            ],
          },
          {
            category: "Technologie & Künstliche Intelligenz",
            items: [
              "Prompt & Paradigma",
              "Der Neuronale Wandel",
              "Silizium & Code",
              "Zukunftssicher",
            ],
          },
          {
            category: "Glaube & Spiritualität",
            items: [
              "Stille & Einkehr",
              "Der Pilgerpfad",
              "Verwurzelt Leben",
              "Glaube im Alltag",
            ],
          },
        ],
      },
    ],
  },
  "episode-outline-builder": {
    metaTitle: "Podcast-Skript-Vorlage & Beispiele | Pod Studio",
    metaDescription:
      "Strukturiere deine Show mit einer kostenlosen Podcast-Skript-Vorlage und Ablauf-Planer. Plane Segmente, Werbepausen, Timecodes und Leitfäden. Gratis.",
    overview: [
      "Der Episoden-Ablauf-Planer erstellt einen getakteten Sendeplan für deine Aufnahmen: Ordne Gesprächszeit für Teaser, Intromusik, Themenschwerpunkte, Sponsoren-Einblendungen und Call-to-Actions übersichtlich an.",
      "Er hilft Moderatoren, Co-Hosts und Produzenten, das Sendetempo zu halten und verlässliche Episodenlängen zu erreichen, ohne jedes einzelne Wort ausformulieren zu müssen.",
    ],
    steps: [
      { title: "Episode benennen", text: "Trage einen Arbeitstitel ein, damit der Sendeplan später eindeutig zugeordnet werden kann." },
      { title: "Ziel-Dauer festlegen", text: "Gib die geplante Gesamtdauer in Minuten ein, um zu sehen, wie sich die Abschnitte addieren." },
      { title: "Blöcke bearbeiten", text: "Passe Kaltstart, Intro, Hauptteile, Werbeinseln und Outro an und hinterlege kurze Stichpunkte." },
      { title: "Ablauf exportieren", text: "Exportiere den Ablauf als Markdown und sende ihn vor der Aufnahme an Gast oder Toningenieur." },
    ],
    tips: [
      "Platziere Mid-Roll-Sponsoren bei natürlichen Themenwechseln, etwa in der Mitte der Folge.",
      "Plane einige Minuten Puffer für spontane Anekdoten ein – die besten Momente entstehen ungeplant.",
      "Schicke Gästen den Ablauf vorab, damit sie konkrete Geschichten statt allgemeiner Antworten parat haben.",
    ],
    sections: [
      {
        heading: "Kostenlose Podcast-Skript-Vorlage",
        intro: "Nutze diese modulare Podcast-Skript-Vorlage, um deine Aufnahmen professionell zu gliedern – ganz gleich ob für Solo-Episoden oder ausführliche Interviews:",
        template: `[00:00 - 01:00] COLD OPEN / HOOK
- Hook: Prägnantes Zitat, provokante These oder offene Frage, die Hörer sofort packt.
- Episoden-Versprechen: "In der heutigen Folge erfährst du, wie..."

[01:00 - 02:30] INTRO & PRE-ROLL-SPONSOR
- Show-Jingle / Musikalischer Trenner
- Begrüßung: Host-Vorstellung, Sendungs-Claim und kurzer Themenkontext.
- Pre-Roll-Sponsor (15-30s): "Diese Episode wird unterstützt von..."

[02:30 - 12:00] ABSCHNITT 1: DIE GRUNDLAGE & DAS PROBLEM
- Ausgangssituation und Themenaufschlag.
- Persönliche Anekdote oder Vorstellung des Interviewgastes.
- Erste zentrale Erkenntnis #1.

[12:00 - 13:30] MID-ROLL-WERBEBLOCK
- Flüssige Überleitung: "Gleich geht es weiter mit der wichtigsten Lektion nach einem kurzen Hinweis..."
- Mid-Roll-Sponsoren 1 & 2 (vom Host persönlich gelesene 60-Sekunden-Empfehlung mit Rabattcode).

[13:30 - 25:00] ABSCHNITT 2: DER DEEP DIVE & DER DURCHBRUCH
- Methodische Aufarbeitung: Schritte, Arbeitsrahmen oder Blick hinter die Kulissen.
- Typische Fallstricke und kontraintuitive Erkenntnisse.
- Zweite zentrale Erkenntnis #2.

[25:00 - 35:00] ABSCHNITT 3: PRAKTISCHE UMSETZUNG & HÖRER-Q&A
- Direkt umsetzbare Tipps für die Hörer.
- Schnellfragerunde oder Beantwortung von Community-Sprachnachrichten.
- Dritte zentrale Erkenntnis #3.

[35:00 - 38:00] ZUSAMMENFASSUNG, CALL-TO-ACTION & OUTRO
- 60-Sekunden-Zusammenfassung der wichtigsten Punkte.
- Klarer Call-to-Action (CTA): "Abonniere die Show auf Spotify und bewerte uns auf Apple Podcasts."
- Ausblick auf die nächste Episode.
- Musikalisches Ausblenden.`,
        link: {
          text: "Kostenlose Podcast-Skript-Vorlage herunterladen (PDF & Google Docs) →",
          href: "/downloads/podcast-script-template.pdf",
        },
      },
    ],
  },
  "guest-question-generator": {
    metaTitle: "Podcast-Interviewfragen-Generator | Pod Studio",
    metaDescription:
      "Erstelle fesselnde Podcast-Interviewfragen für jeden Gast. Eisbrecher, spannende Anekdoten, Wendepunkte und prägnante Schnellfragerunden. Kostenlos.",
    overview: [
      "Der Podcast-Interviewfragen-Generator entwirft einen durchdachten Gesprächsbogen für deine Gäste-Interviews: von sympathischen Eisbrechern über persönliche Wendepunkte bis hin zu tiefgehenden Praxis-Frameworks und prägnanten Schnellfragerunden.",
      "Gib Name, Fachgebiet und Folgenthema deines Gastes ein, um maßgeschneiderte Fragenkataloge zu generieren, die oberflächliche PR-Standardantworten umgehen und echte Insights zutage fördern.",
    ],
    steps: [
      { title: "Gastdaten eingeben", text: "Trage Name, Berufsbezeichnung und das Kern-Thema der Episode ein." },
      { title: "Nach Gesprächsphase filtern", text: "Strukturiere Fragen nach Phasen: Einstieg, Werdegang, Hürden und Schnellfragerunde." },
      { title: "Gesprächsbogen prüfen", text: "Wähle Fragen aus, die lebhafte Geschichten statt knapper Ja/Nein-Antworten provozieren." },
      { title: "Vorbereitungsbogen sichern", text: "Kopiere den Bogen oder lade ihn als Textdatei herunter, um eigene Anmerkungen zu ergänzen." },
    ],
    tips: [
      "Frage nach einem konkreten Tag oder Schlüsselmoment («Erzähl vom Tag, an dem...») statt nach abstrakten Meinungen.",
      "Lege zwei bis drei unverzichtbare Kernfragen fest und halte den Rest flexibel.",
      "Hebe dir die persönlichste Frage für die Mitte auf, sobald eine vertraute Atmosphäre herrscht.",
    ],
    sections: [
      {
        heading: "Podcast-Interviewfragen für jeden Gast",
        intro: "Herausragende Interviews entstehen dann, wenn man den Lebenslauf hinter sich lässt und echte Geschichten erforscht. Hier sind 18 wirkungsvolle Fragen nach Phasen:",
        groups: [
          {
            category: "Eisbrecher & Erste Eindrücke",
            items: [
              "Welche Überzeugung aus deinen ersten Karrierejahren hältst du heute für komplett falsch?",
              "Was war das allererste Projekt, das in dir die Leidenschaft für dein Fachgebiet entfacht hat?",
              "Wenn du heute nicht in diesem Bereich tätig wärst: Auf welchem unerwarteten Pfad wärst du gelandet?",
              "Welcher Ratschlag wird in deiner Branche ständig wiederholt, sollte aber ignoriert werden?",
            ],
          },
          {
            category: "Geschichten, Wendepunkte & Rückschläge",
            items: [
              "Erzähl uns vom tiefsten Tiefpunkt deiner Reise – wie sah der Morgen danach aus?",
              "An welchem Scheideweg war Aufgeben die einfachste Option, und was ließ dich weitermachen?",
              "Welcher Mentor oder Kritiker hat mit einem einzigen Satz deine Arbeitsweise für immer verändert?",
              "Was musstest du aktiv verlernen, um dein heutiges Niveau zu erreichen?",
            ],
          },
          {
            category: "Taktische Einblicke & Meisterklasse",
            items: [
              "Führe uns Schritt für Schritt durch deine fokussiertesten Stunden am Vormittag.",
              "Welches Tool, welcher Hebel oder welche Gewohnheit treibt 80 % deiner heutigen Ergebnisse?",
              "Wenn alles gleichzeitig chaotisch wirkt: Welches genaue Protokoll arbeitest du dann ab?",
              "Welche kontraintuitive Entscheidung hast du getroffen, vor der dich alle gewarnt hatten?",
              "Welches unterschätzte Problem in deiner Nische wird in zwei Jahren jedes Unternehmen beschäftigen?",
            ],
          },
          {
            category: "Abschluss & Schnellfragerunde",
            items: [
              "Welches Buch oder welche Ressource hast du öfter verschenkt oder empfohlen als jede andere?",
              "Was war deine beste Investition von unter 100 Euro in den letzten zwölf Monaten?",
              "Was bedeutet Erfolg heute für dich im Vergleich zu deinen Anfängen?",
              "Wenn du eine Botschaft auf eine Plakatwand vor Millionen Kreativen schreiben könntest: Was stünde dort?",
              "Wo können Hörer dich finden und deine aktuellen Projekte unterstützen?",
            ],
          },
          {
            category: "Business & Unternehmertum",
            items: [
              "Was war der teuerste personelle oder strategische Fehler, den du in den ersten zwei Jahren deines Unternehmens gemacht hast?",
              "Welche unangenehme operative Wahrheit über das Skalieren von Unternehmen gibt niemand öffentlich zu?",
              "Wenn du morgen deine drei größten Kunden oder 50 % deines Umsatzes verlieren würdest: Wie sieht dein Rettungsplan für Tag eins aus?",
              "Welche finanzielle oder operative Kennzahl überprüfst du jeden Montagmorgen mit größter Akribie?",
            ],
          },
          {
            category: "Lustige & Unterhaltsame Fragen",
            items: [
              "Was ist der absolut bizarrste Karriererat, den dir jemals jemand mit völlig ernster Miene gegeben hat?",
              "Welche völlig banale oder absurde Meinung verteidigst du bis aufs Blut?",
              "Wenn du unsere Intro-Musik durch einen peinlichen 90er-Jahre-Popsong ersetzen müsstest: Welcher Track läuft?",
              "Was war dein bisher peinlichster Moment bei einem Live-Auftritt, Podcast oder Video-Call?",
            ],
          },
        ],
      },
    ],
  },
  "monetization-calculator": {
    metaTitle: "Podcast-Einnahmen & CPM-Rechner | Pod Studio",
    metaDescription:
      "Berechne deine Einnahmen mit dem Podcast-Einnahmen- & CPM-Rechner. Plane Werbeumsätze, CPM-Preise und Hörer-Werte. Gratis und ohne Anmeldung.",
    overview: [
      "Der Podcast-Einnahmen- & CPM-Rechner ermittelt dein potenzielles Einkommen anhand branchenüblicher CPM-Preise und Download-Zahlen: (Downloads ÷ 1.000) × CPM × belegte Werbeplätze.",
      "Modelliere Monats- und Jahresprognosen für Pre-Roll-, Mid-Roll- und Post-Roll-Plätze, Auslastungsquoten und Mitgliedschaften, um Sponsoring-Gespräche mit fundierten Zahlen zu führen.",
    ],
    steps: [
      { title: "Downloads eingeben", text: "Trage deine durchschnittlichen Downloads pro Episode in den ersten 30 Tagen laut Hoster ein." },
      { title: "Episodenfrequenz wählen", text: "Gib an, wie viele Folgen du pro Monat veröffentlichst." },
      { title: "Werbeplätze einstellen", text: "Aktiviere Pre-Roll, Mid-Roll oder Post-Roll, bestimme den TKP und schätze die Auslastung." },
      { title: "Übersicht prüfen & exportieren", text: "Vergleiche die Erlösströme, ergänze Mitgliedschaften und exportiere deine Hochrechnung." },
    ],
    tips: [
      "Persönlich gelesene Mid-Roll-Spots erzielen meist die höchsten TKPs, da Hörer zur Folgenmitte maximal aufmerksam sind.",
      "Kalkuliere bei der Auslastung konservativ – die meisten Indie-Podcasts verkaufen nicht jeden Slot in jedem Monat.",
      "Nutze für Angebote stets belegbare Zahlen; Werbekunden fordern oft Screenshots aus dem Hoster-Dashboard an.",
    ],
    sections: [
      {
        heading: "Wie viel verdienen Podcasts?",
        paragraphs: [
          "Die Einnahmen eines Podcasts hängen stark von den verifizierten 30-Tage-Downloads, der Veröffentlichungsfrequenz und den verfügbaren Werbeplätzen ab. Shows mit 1.000 bis 5.000 Downloads pro Episode verdienen typischerweise zwischen 50 und 300 Euro pro Folge durch eine Kombination aus TKP-Sponsorings und Affiliate-Links.",
          "Etablierte Independent-Podcasts mit 10.000 bis 50.000 Downloads erzielen TKP-Raten von 25 bis 35 Euro für persönliche Empfehlungen und erwirtschaften so mehrere tausend Euro monatlich, ergänzt durch Fan-Mitgliedschaften und Merchandising.",
        ],
        link: {
          text: "Lies den vollständigen Datenreport: Wie viel verdienen Podcasts 2026? →",
          href: "/guides/how-much-do-podcasts-make",
        },
      },
    ],
  },
  "cover-art-preview": {
    metaTitle: "Podcast-Cover-Größe & Vorgaben: Apple & Spotify | Pod Studio",
    metaDescription:
      "Prüfe deine Podcast-Cover-Größe für Apple und Spotify. Teste 3000x3000px Grafiken auf Smartphones, Sperrbildschirmen und Feeds. Kostenlos.",
    overview: [
      "Der Podcast-Cover-Größenprüfer simuliert dein Cover-Design in realistischen Verzeichnis-Ansichten von Apple Podcasts und Spotify, auf Smartphone-Sperrbildschirmen und als 50x50px Miniaturansicht.",
      "Die Prüfung erfolgt zu 100 % lokal in deinem Browser und verifiziert offizielle Richtlinien: quadratisches 1:1-Seitenverhältnis, RGB-Farbraum und Abmessungen zwischen 1400x1400px und 3000x3000px.",
    ],
    steps: [
      { title: "Grafik hochladen", text: "Ziehe eine JPG- oder PNG-Datei per Drag & Drop hinein (oder teste das Beispielbild). Alles bleibt privat im Browser." },
      { title: "Spezifikationen prüfen", text: "Erkenne sofort, ob das Bild quadratisch ist und im empfohlenen Pixelbereich liegt." },
      { title: "Mockups durchschalten", text: "Vergleiche Apple-Podcasts-Feed, Spotify-Player, Sperrbildschirm und die 50 × 50 px Miniaturansicht." },
      { title: "Optimieren & neu testen", text: "Passe Schriftgröße oder Kontraste in deinem Grafikprogramm an und lade die neue Version erneut hoch." },
    ],
    tips: [
      "Wenn der Show-Name in der Miniaturansicht unlesbar ist, wähle weniger Text oder eine größere Typografie.",
      "Platziere wichtige Elemente nicht zu nah am Rand – manche Apps schneiden die Ecken abgerundet ab.",
      "Teste die Darstellung im Hell- und Dunkelmodus; filigrane dunkle Schriften gehen auf schwarzem Grund schnell verloren.",
    ],
    sections: [
      {
        heading: "Anforderungen an die Podcast-Cover-Größe",
        paragraphs: [
          "Sowohl Apple Podcasts als auch Spotify verlangen für Podcast-Coverbilder ein quadratisches 1:1-Seitenverhältnis mit Abmessungen zwischen 1400 × 1400 und 3000 × 3000 Pixeln. Der empfohlene Industriestandard liegt bei 3000 × 3000 Pixeln bei 72 DPI, was eine gestochen scharfe Darstellung auf hochauflösenden Retina-Displays und TV-Geräten gewährleistet.",
          "Bilddateien müssen im JPEG- oder PNG-Format mit dem sRGB-Farbprofil vorliegen. Vermeide CMYK-Farbmodelle, da diese bei Verzeichnissen zu Validierungsfehlern oder Farbverfälschungen auf Mobilgeräten führen. Platziere alle wichtigen Bildelemente, Host-Fotos und Schriften innerhalb des mittleren Sicherheitsbereichs von 80 %, damit sie nicht durch abgerundete Ecken oder Bedienelemente verdeckt werden.",
        ],
        link: {
          text: "Vollständige Vorgabenliste ansehen: Leitfaden für Apple Podcasts & Spotify Cover-Spezifikationen →",
          href: "/guides/apple-spotify-cover-art-specs-guide",
        },
      },
    ],
  },
  "rss-feed-validator": {
    metaTitle: "Podcast RSS-Feed Validator & Checker | Pod Studio",
    metaDescription:
      "Überprüfe deinen Podcast RSS-Feed vor dem Einreichen bei Apple Podcasts und Spotify auf fehlende Tags, defekte Audio-Links und Cover-Fehler. Kostenlos.",
    overview: [
      "Der RSS-Feed Validator spürt typische Ursachen auf, die Veröffentlichungen verzögern oder ablehnen lassen: fehlerhaftes XML, fehlende Metadaten, unpassende Cover-Grafiken, doppelte GUIDs oder nicht erreichbare Audiodateien.",
      "Jeder Befund wird verständlich erläutert, damit du gezielte Korrekturen im Dashboard deines Podcast-Hosters vornehmen kannst, bevor Verzeichnisse den Feed abweisen.",
    ],
    steps: [
      { title: "Feed einfügen", text: "Füge die XML-URL deines Feeds ein (oder lade den Beispielfeed) in das Prüffeld." },
      { title: "Prüfung starten", text: "Der Validator analysiert die Tags direkt im Browser auf Pflicht- und Empfehlungsangaben." },
      { title: "Ergebnisse durchsehen", text: "Lies zuerst kritische Fehler und anschließend Optimierungshinweise mit Erklärung." },
      { title: "Beheben & erneut prüfen", text: "Passe die Einstellungen bei deinem Hoster an und teste den aktualisierten Feed erneut." },
    ],
    tips: [
      "Ändere niemals die GUID einer bereits veröffentlichten Episode – Apps könnten sie sonst doppelt listen.",
      "Achte auf die korrekte Explicit-Kennzeichnung, da sie Einfluss auf die Sichtbarkeit in verschiedenen Regionen hat.",
      "Führe nach einem Hoster-Wechsel oder Cover-Update stets eine Re-Validierung durch.",
    ],
  },
  "episode-timestamp-generator": {
    metaTitle: "Podcast-Zeitstempel & Kapitel-Generator | Pod Studio",
    metaDescription:
      "Erstelle saubere Podcast-Zeitstempel und YouTube-Kapitel für deine Folgen. Generiere klickbare Markierungen für Spotify, Apple Podcasts und Web. Gratis.",
    overview: [
      "Der Zeitstempel-Generator formatiert deine Produktionsnotizen in einheitliche Kapitel-Zeitstempel und klickbare YouTube-Kapitel für Videobeschreibungen, Spotify-Markierungen und Show Notes.",
      "Ermögliche deinen Hörern das direkte Ansteuern gewünschter Themenblöcke und helfe Suchmaschinen, einzelne Abschnitte deiner Episoden präzise zu indexieren.",
    ],
    steps: [
      { title: "Kapitel hinzufügen", text: "Trage Startzeit und Kurztitel für jedes Kapitel ein oder füge eine rohe Liste ein." },
      { title: "Format einheitlich halten", text: "Nutze ein durchgängiges Zeitformat und ordne die Kapitel streng chronologisch." },
      { title: "Zeitstrahl kontrollieren", text: "Prüfe die visuelle Zeitleiste auf Lücken, Dopplungen oder zu kurze Abschnitte." },
      { title: "Kapitel kopieren", text: "Füge die Liste mit einem Klick in deine Show Notes, Videobeschreibungen oder den Hoster ein." },
    ],
    tips: [
      "YouTube verlangt zwingend, dass der erste Zeitstempel bei 00:00 beginnt, um die Kapitelanzeige im Player zu aktivieren.",
      "Formuliere Kapitelüberschriften prägnant: «Preisfindungs-Fehler im ersten Jahr» ist wirksamer als «Teil 2».",
      "Plane Abschnitte von mindestens einigen Minuten ein, um die Übersichtlichkeit zu wahren.",
    ],
    sections: [
      {
        heading: "So formatierst du Zeitstempel und YouTube-Kapitel",
        paragraphs: [
          "Klickbare Kapitel machen lange Episoden zugänglich und erlauben es Hörern, gezielt zu den relevantesten Themen zu springen. Auf YouTube erzeugen Zeitangaben im Format «00:00 Intro» in der Videobeschreibung automatisch sichtbare Abschnitte auf der Fortschrittsleiste des Players.",
          "Damit deine Zeitangaben sowohl YouTube-Kapitel als auch Spotify-Kapitelmarken zuverlässig aktivieren, starte stets mit einem Zeitstempel bei 00:00 (oder 0:00), erstelle mindestens drei aufeinanderfolgende Kapitel und stelle sicher, dass jeder Abschnitt mindestens zehn Sekunden lang ist.",
        ],
      },
    ],
  },
  "intro-script-generator": {
    metaTitle: "Podcast-Intro-Skript-Generator & Beispiele | Pod Studio",
    metaDescription:
      "Schreibe ein Podcast-Intro-Skript in wenigen Minuten. Entdecke Beispiele und eine kostenlose Skript-Vorlage für Solos und Interviews. Gratis.",
    overview: [
      "Der Podcast-Intro-Skript-Generator hilft dir beim Verfassen der ersten 30 bis 60 Sekunden einer Episode: eine mitreißende Hook gefolgt von einer präzisen Begrüßung, die Absprungraten drastisch senkt.",
      "Wähle Sendeformat, Gastdetails und Vortragston, um teleprompter-taugliche Manuskripte mit Neugier-Triggern und klaren Hörer-Mehrwerten zu erstellen.",
    ],
    steps: [
      { title: "Format & Tonfall wählen", text: "Entscheide dich für Interview, Solo oder Story und wähle zwischen dynamisch, reflektiert oder locker." },
      { title: "Details ergänzen", text: "Trage Folgenthema, Kernversprechen und gegebenenfalls den Namen deines Gastes ein." },
      { title: "Skript generieren", text: "Erhalte ein kurzes Manuskript mit Einstiegshook, Vorstellung und klarem Episodenausblick." },
      { title: "Laut vorlesen", text: "Sprich den Text probeweise ein und passe Formulierungen an deine persönliche Sprechweise an." },
    ],
    tips: [
      "Komm in den ersten 15 Sekunden auf den Punkt – hier entscheidet sich, ob der Hörer dranbleibt.",
      "Ein prägnantes Originalzitat deines Gastes eignet sich hervorragend als Cold Open vor dem Intro-Jingle.",
      "Halte die Standardbegrüßung kurz; organisatorische Hinweise gehören in spätere Abschnitte.",
    ],
    sections: [
      {
        heading: "Podcast-Intro-Skript-Beispiele",
        intro: "Die ersten dreißig Sekunden entscheiden darüber, ob ein Hörer die Folge beendet oder weiterspringt. Hier sind fünf praxiserprobte Podcast-Intro-Beispiele:",
        list: [
          {
            title: "1. Die Solo-Hook mit hohem Einsatz",
            description: "«Die meisten Gründer arbeiten fünf Jahre an ihrem Startup, bevor sie merken, dass sie am falschen Produkt bauen. Heute teile ich die drei Validierungstests, die mir 80.000 Euro erspart hätten. Willkommen beim Gründer-Playbook».",
          },
          {
            title: "2. Der lebhafte Co-Host-Dialog",
            description: "«Schön, dass ihr wieder dabei seid beim Kaffeeklatsch. Ich bin Alex und wie immer mit mir am Mikrofon: Jordan. Jordan, bevor wir über das Apple-Event diskutieren: Erzähl allen kurz, warum du gestern fast deinen Zug verpasst hättest...».",
          },
          {
            title: "3. Der Interview-Teaser mit Schlüsselzitat",
            description: "«“Wenn du deinen größten Kunden nicht vor dem sechsten Monat kündigst, geht deine Agentur unter.” Das sagte mein heutiger Gast David Miller zehn Minuten vor Aufnahmebeginn. Heute erklärt er, wie er ohne Burnout siebenstellige Umsätze aufbaute».",
          },
          {
            title: "4. Der immersive narrative Einstieg",
            description: "«An einem eisigen Dienstagmorgen im Februar 2014 gingen in einem Rechenzentrum in Virginia zweiunddreißig Server auf einmal offline. Was folgte, war der bis heute größte ungeklärte Krypto-Raub der Geschichte. Ihr hört Schattenwelten».",
          },
          {
            title: "5. Der pragmatische Business- & Tech-Einstieg",
            description: "«Möchtest du auf Platz eins bei Google ranken, ohne hunderte Backlinks aufzubauen? In den nächsten zwanzig Minuten zerlegen wir exakt jene Content-Architektur, mit der wir monatlich 450.000 Besucher generieren».",
          },
        ],
      },
      {
        heading: "Podcast-Intro-Skript-Vorlage",
        intro: "Nutze diese modulare Podcast-Intro-Vorlage für Solo-Episoden, Co-Host-Gespräche oder Interviews:",
        template: `[00:00 - 00:15] COLD-OPEN-HOOK
HOST: „Was wäre, wenn der eine Ratschlag, den jeder in deiner Branche gibt, dich in Wahrheit tausende Euro kostet?“

[00:15 - 00:30] SHOW-INTRO & EPISODENVERSPRECHEN
HOST: „Willkommen zurück bei [Name der Show]. Ich bin [Name des Hosts]. In der heutigen Episode analysieren wir [Thema der Folge], damit du [konkreter Nutzen für den Hörer] erreichst.“

[00:30 - 00:45] GAST-VORSTELLUNG ODER AGENDA
HOST: „[Interview-Show]: Unser heutiger Gast ist [Name des Gastes], [Titel/Unternehmen]. Wir sprechen über die Wendepunkte und den genauen Plan, mit dem er [Meilenstein] erreicht hat.“
HOST: „[Solo-Show]: In den nächsten 20 Minuten teile ich den 3-Schritte-Plan, mit dem wir dieses Problem von Grund auf gelöst haben.“

[00:45 - 01:00] CALL-TO-ACTION & INTRO-MUSIK
HOST: „Abonniere die Show am besten direkt auf Apple Podcasts oder Spotify, um keine neue Folge zu verpassen. Legen wir direkt los.“

[INTRO-MUSIK BLENDET EIN UND LEITET ZUR FOLGE ÜBER]`,
      },
    ],
  },
  "audience-growth-estimator": {
    metaTitle: "Podcast-Hörer- & Download-Wachstumsprognose | Pod Studio",
    metaDescription:
      "Berechne deine Podcast-Downloads auf 12 Monate basierend auf aktuellen Zahlen, Veröffentlichungsrhythmus und Monatsrate. Kostenloser Wachstumsrechner.",
    overview: [
      "Der Wachstumsrechner simuliert die Entwicklung deiner Downloadzahlen, indem er eine monatliche Wachstumsrate auf deine aktuellen Werte anwendet und mit der Veröffentlichungsfrequenz hochrechnet.",
      "Er dient als anschauliches Rechenmodell für den Zinseszinseffekt im Audio-Bereich und hilft dir dabei, erreichbare Meilensteine zu definieren und den Effekt stetiger kleiner Verbesserungen einzuschätzen.",
    ],
    steps: [
      { title: "Aktuelle Downloads eingeben", text: "Trage deinen 30-Tage-Downloadschnitt pro Episode laut Hoster ein." },
      { title: "Frequenz bestimmen", text: "Gib an, wie viele Folgen du regulär pro Monat veröffentlichst." },
      { title: "Wachstumsrate wählen", text: "Wähle einen Prozentsatz pro Monat, der zu deinen Zielen oder bisherigen Trends passt." },
      { title: "Entwicklung ablesen", text: "Verfolge die 12-Monats-Kurve und vergleiche deine Werte mit globalen Verteilungs-Percentilen." },
    ],
    tips: [
      "Beginne mit einer moderaten Wachstumsannahme; Zinseszinseffekte lassen optimistische Zahlen rasch unrealistisch wirken.",
      "Kombiniere diese Prognose mit dem TKP-Rechner, um zu planen, ab wann Sponsoring wirtschaftlich sinnvoll wird.",
      "Gleiche deine Prognose monatlich mit den tatsächlichen Zahlen ab und passe die Werte an.",
    ],
  },
  "description-generator": {
    metaTitle: "Podcast-Beschreibung Generator & Beispiele | Pod Studio",
    metaDescription:
      "Schreibe treffende Beschreibungen für deinen Podcast-Kanal und einzelne Episoden auf Apple Podcasts und Spotify. Kostenloses SEO-Text-Werkzeug.",
    overview: [
      "Der Beschreibungs-Generator verfasst zwei Arten von Texten: die übergeordnete Sendungsbeschreibung (Konzept und Zielgruppe) sowie pointierte Teaser für jede einzelne Folge.",
      "Treffsichere Beschreibungen erleichtern Hörern das Abonnieren und signalisieren Streaming-Verzeichnissen eindeutig, worum es geht – mit den wichtigsten Schlüsselbegriffen direkt im sichtbaren Textanfang.",
    ],
    steps: [
      { title: "Textart wählen", text: "Entscheide dich zwischen einer allgemeinen Show-Beschreibung oder einem Folgentext." },
      { title: "Eckdaten erfassen", text: "Gib Zielgruppe, Kerninhalte, wesentliche Learnings und Handlungsaufrufe ein." },
      { title: "Sichtbarkeitsgrenze prüfen", text: "Prüfe, wo Mobil-Apps den Text vor dem «Mehr»-Button abschneiden, und setze Kern-Keywords nach vorne." },
      { title: "Feinschliff & übernehmen", text: "Passe Formulierungen an deinen Stil an und füge den fertigen Text bei deinem Hoster ein." },
    ],
    tips: [
      "Der erste Satz ist entscheidend: Viele Apps zeigen nur eine oder zwei Zeilen vor dem Weiterlesen-Link an.",
      "Sprich deine Wunschhörer direkt an («Für Startup-Gründer»), damit sich die Richtigen sofort angesprochen fühlen.",
      "Nutze natürliche Suchbegriffe und vermeide aneinandergereihte Keyword-Listen.",
    ],
  },
  "category-finder": {
    metaTitle: "Apple Podcasts Kategorien-Finder | Pod Studio",
    metaDescription:
      "Durchsuche die vollständige Liste der Apple Podcasts Kategorien und Spotify-Genres. Finde Nischenkategorien mit geringer Konkurrenz für deine Show. Gratis.",
    overview: [
      "Der Kategorie-Finder navigiert dich durch die offizielle Taxonomie von Apple Podcasts und Spotify, um Haupt- und Unterkategorien mit den besten Auffindbarkeits- und Chart-Chancen für deine Sendung zu ermitteln.",
      "Durchsuche offizielle Kategorien, vergleiche nach Themenbereichen und schätze die Wettbewerbsdichte ab, um deine Show optimal zu platzieren.",
    ],
    steps: [
      { title: "Nach Thema suchen", text: "Tippe dein Hauptthema ein, zum Beispiel «Persönliche Finanzen» oder «True Crime»." },
      { title: "Vorschläge vergleichen", text: "Prüfe die passenden Kategorien und Unterkategorien übersichtlich nebeneinander." },
      { title: "Hauptkategorie festlegen", text: "Wähle die Kategorie, die den Schwerpunkt der meisten Episoden am besten beschreibt." },
      { title: "XML-Tag übernehmen", text: "Kopiere den passenden iTunes-Kategorie-Tag oder wähle ihn im Dashboard deines Hosters aus." },
    ],
    tips: [
      "Wähle die Kategorie, in der deine Zielgruppe stöbert – nicht zwingend die mit den wenigsten Mitbewerbern.",
      "Eine präzise Unterkategorie bietet neuen Sendungen oft bessere Chancen, in Charts wahrgenommen zu werden.",
      "Prüfe vor Veröffentlichung die aktuelle Liste von Apple, da Kategorie-Bezeichnungen gelegentlich angepasst werden.",
    ],
    sections: [
      {
        heading: "Übersicht der Apple Podcasts Kategorien",
        intro: "Nachfolgend findest du die vollständige offizielle Taxonomie der von Apple Podcasts und Spotify unterstützten Haupt- und Unterkategorien:",
        groups: [
          {
            category: "Kunst & Gestaltung",
            items: ["Bücher", "Design", "Mode & Beauty", "Essen & Trinken", "Darstellende Künste", "Bildende Kunst"],
          },
          {
            category: "Wirtschaft & Karriere",
            items: ["Karriere", "Unternehmertum", "Investieren", "Management", "Marketing", "Gemeinnützige Organisationen"],
          },
          {
            category: "Comedy & Unterhaltung",
            items: ["Comedy-Interviews", "Improvisation", "Stand-Up"],
          },
          {
            category: "Bildung & Wissen",
            items: ["Kurse", "Anleitungen & How-To", "Sprachenlernen", "Persönlichkeitsentwicklung"],
          },
          {
            category: "Fiktion & Hörspiel",
            items: ["Comedy-Fiktion", "Drama", "Science-Fiction"],
          },
          {
            category: "Politik & Verwaltung",
            items: ["Öffentliche Verwaltung", "Kommunalpolitik", "Bundespolitik"],
          },
          {
            category: "Geschichte",
            items: ["Antike", "Mittelalter", "Militärgeschichte", "Zeitgeschichte", "Regionalgeschichte"],
          },
          {
            category: "Gesundheit & Fitness",
            items: ["Alternative Medizin", "Fitness", "Medizin", "Mentale Gesundheit", "Ernährung", "Sexualität"],
          },
          {
            category: "Kinder & Familie",
            items: ["Lerninhalte für Kinder", "Elternschaft", "Haustiere", "Geschichten für Kinder"],
          },
          {
            category: "Freizeit & Hobbys",
            items: ["Anime & Manga", "Automobil", "Luftfahrt", "Handwerk", "Spiele & Gaming", "Haus & Garten", "Videospiele"],
          },
          {
            category: "Musik",
            items: ["Musik-Kritik", "Musikgeschichte", "Musiker-Interviews"],
          },
          {
            category: "Nachrichten & Politik",
            items: ["Wirtschaftsnachrichten", "Tagesnachrichten", "Unterhaltung", "Politischer Kommentar", "Sportnachrichten", "Tech-News"],
          },
          {
            category: "Religion & Spiritualität",
            items: ["Buddhismus", "Christentum", "Hinduismus", "Islam", "Judentum", "Spiritualität"],
          },
          {
            category: "Wissenschaft",
            items: ["Astronomie", "Chemie", "Geowissenschaften", "Biologie", "Mathematik", "Physik", "Sozialwissenschaften"],
          },
          {
            category: "Gesellschaft & Kultur",
            items: ["Dokumentationen", "Persönliche Tagebücher", "Philosophie", "Reisen & Orte", "Beziehungen"],
          },
          {
            category: "Sport",
            items: ["Fußball", "Basketball", "Radsport", "Laufsport", "Schwimmen", "Tennis", "Wintersport", "Motorsport"],
          },
          {
            category: "Technologie",
            items: ["Künstliche Intelligenz", "Programmierung", "Consumer Tech", "Cyber-Sicherheit", "Software"],
          },
          {
            category: "True Crime & Kriminalfälle",
            items: ["Kriminal-Ermittlungen", "Serientäter", "Ungelöste Rätsel"],
          },
          {
            category: "Film & Fernsehen",
            items: ["Serien-Reviews", "Filmkritiken", "Filmgeschichte", "Regisseur-Interviews"],
          },
        ],
      },
    ],
  },
  "hook-generator": {
    metaTitle: "Podcast-Hook-Generator für Social Clips | Pod Studio",
    metaDescription:
      "Erstelle virale Video-Hooks für TikTok, Reels und Shorts mit unserem Podcast-Hook-Generator. Steigere Interaktionen auf Social Media. Gratis.",
    overview: [
      "Der Podcast-Hook-Generator für Social Clips erstellt scroll-stoppende Eröffnungszeilen und neugierig machende Video-Hooks für TikTok, Instagram Reels und YouTube Shorts aus deinen Episodenthemen.",
      "Entwickelt für Podcaster, die Audio-Highlights in virale Kurzvideos verwandeln wollen, die Zuschauer in den ersten zwei Sekunden fesseln und neue Abonnenten zur vollständigen Folge führen.",
    ],
    steps: [
      { title: "Thema des Clips eingeben", text: "Beschreibe den Kernaspekt oder die zentrale Erkenntnis, die das Social-Video behandelt." },
      { title: "Gast erwähnen (optional)", text: "Füge den Gast oder dessen Zitat hinzu, wenn dessen Bekanntheit Aufmerksamkeit stiftet." },
      { title: "Hook-Stil wählen", text: "Wähle zwischen konträren Thesen, hohem Einsatz, überraschenden Zahlen, Neugier-Lücken und Musterunterbrechungen." },
      { title: "Kopieren & posten", text: "Verwende die Hook als Text-Overlay im Video und Caption, verlinkt mit der ganzen Folge." },
    ],
    tips: [
      "Die ersten drei Sekunden entscheiden, ob Zuschauer weiterscrollen – beginne mit hoher Spannung oder einer offenen Frage.",
      "Kombiniere markanten On-Screen-Text mit animierten Untertiteln; über 70 % der Social Feeds werden stumm konsumiert.",
      "Achte darauf, dass der Clip das Versprechen der Hook einlöst; irreführende Klick-Köder zerstören langfristiges Vertrauen.",
    ],
    sections: [
      {
        heading: "Podcast-Social-Clip-Hook-Beispiele",
        intro: "Kurzvideos auf TikTok, Instagram Reels und YouTube Shorts stehen und fallen mit den ersten zwei Sekunden. Hier sind fünf bewährte Hook-Formeln mit Beispielen:",
        list: [
          {
            title: "1. Der provokante Mythos-Zerstörer",
            description: "«Hört auf, neuen Creatorn zu sagen, sie sollen täglich posten. Genau dieser Rat führt bei 95 % aller Podcasts vor Folge 10 zum Burnout». (Widerspricht der gängigen Meinung und provoziert sofortige Kommentare).",
          },
          {
            title: "2. Der dramatische Story-Opener",
            description: "«An einem Sonntag um 2 Uhr nachts stürzte unsere Hauptdatenbank ab – mit 400.000 Euro an ausstehenden Kundenzahlungen. Hier ist, was wir in den nächsten 60 Minuten taten». (Baut sofortige narrative Spannung auf).",
          },
          {
            title: "3. Die überraschende Daten-Hook",
            description: "«Wir haben 1.200 Podcast-Episoden analysiert, die dieses Jahr erschienen sind. Genau eine Retention-Taktik hat die Durchhörquote über alle Genres hinweg verdoppelt». (Verspricht harte Fakten statt Meinungen).",
          },
          {
            title: "4. Die offene Neugier-Lücke",
            description: "«Es gibt einen geheimen Grund, warum die erfolgreichsten Spotify-Shows in den ersten fünf Minuten niemals Rabattcodes erwähnen. Am Ende dieses Clips wisst ihr, warum». (Hält die Auflösung zurück, damit das Video bis zum Ende geschaut wird).",
          },
          {
            title: "5. Die Musterunterbrechung",
            description: "«Schließe dein Analytics-Dashboard sofort. Wenn deine Show stagniert, macht der fünfmal tägliche Blick auf deine Downloads alles nur noch schlimmer». (Direkter, fordernder Appell, der das Weiterscrollen stoppt).",
          },
        ],
      },
    ],
  },
  "transcript-formatter": {
    metaTitle: "Podcast-Transkript-Formatierer & Cleaner | Pod Studio",
    metaDescription:
      "Bringe Audiotexte in das offizielle Podcast-Transkript-Format. Füge Sprecher-Labels hinzu, glätte Absätze und entferne Füllwörter mühelos. Kostenlos.",
    overview: [
      "Der Podcast-Transkript-Formatierer bereinigt automatisierte Sprach-zu-Text-Exporte und bringt sie in das saubere Podcast-Transkript-Format: mit Sprecher-Zuweisung, Zeitstempeln und gut lesbaren Absätzen.",
      "Die Bereinigung erfolgt vollständig lokal in deinem Browser, sodass deine Texte privat bleiben und direkt für Episoden-Websites oder Blogbeiträge bereitstehen.",
    ],
    steps: [
      { title: "Transkript einfügen", text: "Kopiere den Textexport deines Transkriptionsdienstes in den Editor." },
      { title: "Sprecher benennen", text: "Ersetze generische Labels wie «SPRECHER_0» durch echte Namen und entscheide über Zeitstempel." },
      { title: "Vorschau prüfen", text: "Überprüfe das formatierte Transkript und nimm letzte manuelle Korrekturen vor." },
      { title: "Kopieren oder herunterladen", text: "Kopiere den sauberen Text oder lade ihn zur Veröffentlichung auf deiner Website herunter." },
    ],
    tips: [
      "Veröffentlichte Transkripte machen deinen Podcast barrierefrei und liefern Suchmaschinen indexierbaren Volltext.",
      "Entferne Füllwörter für bessere Lesbarkeit, behalte aber charakteristische Wendungen bei.",
      "Lies Fachbegriffe und Eigennamen gegen; automatische Tools machen hier die meisten Fehler.",
    ],
    sections: [
      {
        heading: "Standardmäßiges Podcast-Transkript-Format (Beispiel)",
        intro: "Streaming-Dienste und Suchmaschinen erwarten Transkripte mit klar gekennzeichneten Sprechern, konsistenten Zeitstempeln und sauberen Absätzen:",
        template: `[00:00:02] Sarah Lindemann (Host):
Willkommen zurück bei Kreative Horizonte. Heute sprechen wir darüber, wie unabhängige Podcaster planbare Einnahmen erzielen können, ohne ihre redaktionelle Unabhängigkeit aufzugeben. Mein heutiger Gast ist Markus Winter, Gründer von AudioFirst Media. Markus, herzlich willkommen in der Show.

[00:00:24] Markus Winter (Gast):
Vielen Dank für die Einladung, Sarah. Freut mich sehr, hier zu sein. Ehrlich gesagt sehe ich den größten Fehler bei neuen Hosts darin, dass sie sich zu früh auf Sponsoren-TKPs versteifen, bevor sie überhaupt eine verlässliche Hörerbindung aufgebaut haben.

[00:00:41] Sarah Lindemann (Host):
Lass uns das genauer beleuchten. Wenn du von "Hörerbindung" sprichst: Wie sieht das in der Praxis für jemanden aus, der gerade seine ersten zwanzig Folgen veröffentlicht?

[00:00:52] Markus Winter (Gast):
Das steht und fällt mit drei Faktoren: einem verlässlichen Einstieg, der innerhalb der ersten dreißig Sekunden klaren Mehrwert verspricht, einem strukturierten Spannungsbogen und einem einzelnen, glasklaren Call-to-Action am Ende der Folge.`,
      },
    ],
  },
  "trailer-script-builder": {
    metaTitle: "Podcast-Trailer-Skript-Baukasten & Vorlage | Pod Studio",
    metaDescription:
      "Schreibe ein kurzes Podcast-Trailer-Skript, das dein Konzept erklärt und Hörer zum Abonnieren bewegt. Strukturierte 60-90-Sekunden-Vorlage. Kostenlos.",
    overview: [
      "Der Trailer-Skript-Baukasten liefert eine praxiserprobte Struktur für den Trailer deines Podcasts: eine starke Einstiegshook, das Sende-Versprechen, die Zielgruppe und ein eindeutiger Handlungsaufruf.",
      "Da viele Verzeichnisse den Trailer prominent oben auf deiner Sendungsseite platzieren, ist er oft der allererste Eindruck für neue Hörer. Mit diesem Tool machst du diese 60 bis 90 Sekunden wirkungsvoll.",
    ],
    steps: [
      { title: "Eckdaten angeben", text: "Trage Sendungstitel, deinen Namen und den geplanten Veröffentlichungsrhythmus ein." },
      { title: "Leitfrage formulieren", text: "Formuliere die Kernfrage, um die sich dein Podcast dreht, und das Versprechen an die Hörer." },
      { title: "Skript generieren", text: "Erhalte ein gegliedertes Manuskript mit Einstieg, Hauptteil und Call-to-Action." },
      { title: "Einsprechen & kürzen", text: "Lies das Manuskript laut vor, stoppe die Zeit und streiche redundante Sätze." },
    ],
    tips: [
      "Binde einen echten kurzen O-Ton aus einer Episode ein, wenn du schon einen hast – Hören überzeugt mehr als Erzählen.",
      "Schließe mit einer einzelnen klaren Handlung ab: Die Show in der bevorzugten App abonnieren.",
      "Aktualisiere deinen Trailer, falls sich der Schwerpunkt oder das Format deiner Sendung spürbar ändert.",
    ],
  },
  "review-response-generator": {
    metaTitle: "Podcast-Rezensions-Danksagungen & Feedback | Pod Studio",
    metaDescription:
      "Verfasse herzliche Antworten auf Podcast-Bewertungen und Hörer-Danksagungen für Lob und Kritik gleichermaßen. Professionelle Vorlagen. Kostenlos.",
    overview: [
      "Der Rezensions-Danksagungs-Generator unterstützt dich dabei, wertschätzend auf Hörer-Feedback zu reagieren und persönliche Shoutouts für die nächste Aufnahme vorzubereiten.",
      "Er deckt begeistertes Lob, konstruktive Kritik und schwierige Rückmeldungen ab – stets mit einem respektvollen, professionellen und verbindlichen Tonfall.",
    ],
    steps: [
      { title: "Bewertung einfügen", text: "Trage Name oder Pseudonym des Hörers und den Text der Bewertung ein." },
      { title: "Grundstimmung wählen", text: "Wähle zwischen 5-Sterne-Lob, konstruktivem Feedback oder kritischer Rückmeldung." },
      { title: "Format aussuchen", text: "Erhalte einen Text zum Vorlesen in der Sendung, eine Social-Media-Antwort und ein Dankesschreiben." },
      { title: "Persönlich anpassen", text: "Ergänze ein konkretes Detail aus dem Feedback, um zu zeigen, dass du es aufmerksam gelesen hast." },
    ],
    tips: [
      "Lies jeden Monat einige Bewertungen in der Sendung vor – das motiviert andere Hörer am wirksamsten zur Sterne-Vergabe.",
      "Stelle kritische Hörer niemals öffentlich bloß; antworte sachlich auf den Inhalt, nicht auf die Person.",
      "Bedanke dich für konkrete Anregungen und erwähne, was du daraufhin in der Show verbessert hast.",
    ],
  },
  "collab-finder": {
    metaTitle: "Gast-Pitches & Podcast-Kooperations-Mails | Pod Studio",
    metaDescription:
      "Schreibe Gast-Anfragen und Kooperations-Mails zwischen Podcasts, die Antworten erhalten. Stelle gegenseitigen Nutzen und Format klar heraus. Kostenlos.",
    overview: [
      "Der Kooperations-Pitch-Generator entwirft individuelle Anschreiben, um dich als Gast vorzuschlagen, Wunschgäste in deine Show einzuladen oder gemeinsame Cross-Promotionen zu vereinbaren.",
      "Jeder Entwurf bringt Zielgruppe, vorgeschlagenes Format, beiderseitigen Nutzen und den nächsten unkomplizierten Schritt auf den Punkt.",
    ],
    steps: [
      { title: "Ziel festlegen", text: "Bewirb dich als Gast, lade einen Experten ein oder schlage gegenseitige Promo vor." },
      { title: "Beide Shows beschreiben", text: "Gib den Ziel-Podcast, den Host-Namen und den konkreten Mehrwert an, den du beisteuern kannst." },
      { title: "Pitch generieren", text: "Erhalte ein kompaktes Anschreiben mit Betreffzeile, Nutzenversprechen und Call-to-Action." },
      { title: "Personalisieren & absenden", text: "Erwähne eine konkrete Folge, die du gehört hast, und sende die Nachricht über dein Mailprogramm." },
    ],
    tips: [
      "Halte die erste Nachricht kurz: Fünf bis sechs präzise Sätze genügen völlig.",
      "Nenne nur Hörerzahlen, die du bei Nachfrage belegen kannst; übertriebene Zahlen kosten sofort Vertrauen.",
      "Hake nach einer Woche freundlich nach, falls du noch keine Rückmeldung erhalten hast.",
    ],
  },
  "lufs-meter": {
    metaTitle: "LUFS-Meter: Lautheit online kostenlos messen | Pod Studio",
    metaDescription:
      "Kostenloses Online-LUFS-Meter. Audiodatei ablegen und integrierte Lautheit, True Peak und Lautheitsbereich mit dem Zielwert −16 LUFS vergleichen. Ohne Upload.",
    overview: [
      "Das LUFS-Meter misst, wie laut eine Folge wirklich ist. Es ermittelt die integrierte Lautheit in LUFS, den True Peak in dBTP und den Lautheitsbereich nach dem Verfahren ITU-R BS.1770, auf das sich Podcast- und Streaming-Plattformen stützen.",
      "Anschließend vergleicht es deine Datei mit dem Zielwert der Plattform und zeigt dir, um wie viele Dezibel du den Pegel anheben oder absenken solltest. Das Audio wird in deinem Browser dekodiert und gemessen, die Datei verlässt dein Gerät also nie.",
    ],
    steps: [
      { title: "Zielwert wählen", text: "Wähle Apple Podcasts (−16 LUFS), Spotify (−14 LUFS) oder den Rundfunkstandard (−23 LUFS)." },
      { title: "Datei ablegen", text: "Füge die exportierte Folge als MP3, WAV, M4A, FLAC oder OGG hinzu. Bei langen Folgen kann die Messung einige Sekunden dauern." },
      { title: "Ergebnis lesen", text: "Vergleiche integrierte Lautheit und True Peak mit dem Zielwert und prüfe im Zeitverlauf, ob einzelne Abschnitte deutlich lauter oder leiser sind." },
      { title: "Anpassen und neu exportieren", text: "Übernimm die vorgeschlagene Pegeländerung in deinem Editor, nutze einen Limiter, falls der Spitzenpegel zu hoch wird, und miss die neue Datei." },
    ],
    tips: [
      "Miss die fertig exportierte Datei, nicht das Projekt. Die MP3-Kodierung kann den True Peak leicht anheben.",
      "Bei einer Mono-Datei solltest du etwa −19 LUFS anpeilen, gemessen als einzelner Kanal. Sie klingt so laut wie eine Stereo-Datei mit −16 LUFS.",
      "Ein Lautheitsbereich über etwa 10 LU bedeutet oft, dass leise Passagen im Auto oder in der Bahn schwer zu hören sind. Sanfte Kompression hilft.",
    ],
    sections: [
      {
        heading: "Was bedeutet −16 LUFS und warum ist das für Podcasts wichtig?",
        paragraphs: [
          "LUFS (Loudness Units relative to Full Scale) misst die wahrgenommene Lautheit der gesamten Datei statt ihres höchsten Spitzenpegels. Apple Podcasts verlangt eine Gesamtlautheit von etwa −16 dB LKFS mit einer Toleranz von ±1 dB und einen True Peak von höchstens −1 dBFS. LKFS und LUFS sind dieselbe Einheit unter zwei Namen.",
          "Spotify passt die Wiedergabe auf −14 LUFS an, deshalb liefern viele Podcaster weiterhin mit −16 LUFS und überlassen jeder App die eigene Anpassung. Wer nah am Zielwert bleibt, klingt ähnlich laut wie die Folgen davor und danach, und niemand muss zum Lautstärkeregler greifen.",
        ],
      },
    ],
  },
  "script-timer": {
    metaTitle: "Skript-Timer: Wörter in Minuten umrechnen | Pod Studio",
    metaDescription:
      "Kostenloser Skript-Timer für Podcasts. Skript einfügen, Wörter in Minuten umrechnen, mit der Ziellänge vergleichen und jedes Segment timen. Ohne Anmeldung.",
    overview: [
      "Der Skript-Timer rechnet die Wörter deines Skripts in Sprechdauer um. Füge ein Intro, einen Werbespot oder ein ganzes Folgenskript ein und sieh, wie lange das Vorlesen in deinem Tempo dauert – dazu Wortzahl und Anzahl der Absätze.",
      "Lege eine Ziellänge fest, um zu sehen, ob das Skript zu lang oder zu kurz ist und um wie viele Wörter. Beginne Zeilen mit #, um das Skript in Segmente zu teilen; der Timer erstellt daraus einen Ablaufplan mit Startzeit und Dauer für jedes Segment. Hinweise in [eckigen Klammern] und Sprecherangaben wie HOST: werden nicht mitgezählt.",
    ],
    steps: [
      { title: "Tempo wählen", text: "Wähle langsam, natürlich oder schnell oder gib deine eigenen Wörter pro Minute ein. Viele Podcast-Hosts sprechen etwa 150 Wörter pro Minute." },
      { title: "Skript einfügen", text: "Tippe oder füge das Skript ein. Markiere Segmente mit #-Überschriften oder füge einen Ablaufplan aus dem Episoden-Ablauf-Planer ein." },
      { title: "Ziellänge festlegen", text: "Wähle ein Ziel wie 1, 15 oder 30 Minuten und plane Zeit für Musik und Werbepausen ein." },
      { title: "Kürzen oder ergänzen", text: "Nutze den Hinweis zu Über- oder Unterlänge, um Wörter zu streichen oder hinzuzufügen, und prüfe im Ablaufplan, welche Segmente zu lang sind." },
    ],
    tips: [
      "Stopp die Zeit, während du eine Minute deines Skripts vorliest, und trag diese Zahl als eigenes Tempo ein. Das ist genauer als jeder Durchschnittswert.",
      "Werbespots in Podcasts werden oft als 30 oder 60 Sekunden verkauft. Bei natürlichem Tempo sind das etwa 75 oder 150 Wörter.",
      "Plane etwas Puffer ein. Spontane Einschübe, Lacher und Pausen machen die Aufnahme meist länger als das Skript.",
    ],
    sections: [
      {
        heading: "Wie viele Wörter hat ein Podcast-Skript für 1, 5 oder 30 Minuten?",
        intro: "Bei einem natürlichen Podcast-Tempo von 150 Wörtern pro Minute sind diese Werte ein guter Ausgangspunkt. Passe sie an dein eigenes Tempo an.",
        list: [
          {
            title: "30 Sekunden",
            description: "Etwa 75 Wörter, so lang wie ein kurzer Werbespot.",
          },
          {
            title: "1 Minute",
            description: "Etwa 150 Wörter, genug für ein komplettes Intro oder einen 60-Sekunden-Spot.",
          },
          {
            title: "5 Minuten",
            description: "Etwa 750 Wörter.",
          },
          {
            title: "10 Minuten",
            description: "Etwa 1.500 Wörter.",
          },
          {
            title: "20 Minuten",
            description: "Etwa 3.000 Wörter.",
          },
          {
            title: "30 Minuten",
            description: "Etwa 4.500 Wörter.",
          },
          {
            title: "60 Minuten",
            description: "Etwa 9.000 Wörter.",
          },
        ],
        link: {
          text: "Plane zuerst deine Segmente mit dem Episoden-Ablauf-Planer",
          href: "/tools/episode-outline-builder",
        },
      },
    ],
  },
};
