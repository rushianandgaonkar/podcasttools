import type { ToolContentRecord } from "./types";

export const deToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Kostenloser Podcast-Episodentitel-Generator | Pod Studio",
    metaDescription:
      "Machen Sie aus Ihrem Episodenthema Dutzende klare, klickstarke Titel. Nach Stil filtern – Neugier, How-to, Gegenthese – und Favoriten kopieren. Kostenlos.",
    overview: [
      "Der Episodentitel-Generator macht aus einem Thema – und optional einem Gastnamen – eine lange Liste von Titelideen nach bewährten Mustern: How-to-Versprechen, Neugier-Lücken, Gegenthesen, Zahlenlisten und gastzentrierte Hooks.",
      "Er ist für Hosts gedacht, die wissen, worum es in der Folge geht, aber nicht, wie sie es sagen sollen. Probieren Sie schnell verschiedene Blickwinkel aus und wählen Sie den Titel, der die Folge ehrlich beschreibt und auf dem Smartphone gut lesbar ist.",
    ],
    steps: [
      { title: "Folge beschreiben", text: "Geben Sie das Hauptthema in wenigen Worten ein, z. B. „Budgetplanung für Freelancer“ oder „die ersten 100 Abonnenten“." },
      { title: "Gast hinzufügen (optional)", text: "Nennen Sie Namen oder Fachgebiet des Gastes, wenn er der Hauptgrund zum Zuhören ist." },
      { title: "Nach Stil filtern", text: "Wechseln Sie zwischen Neugier-, How-to-, Gegenthese- und weiteren Formeln, um Blickwinkel zu vergleichen." },
      { title: "Kopieren oder exportieren", text: "Kopieren Sie einen Titel oder exportieren Sie die ganze Liste als Textdatei für Ihr Team." },
    ],
    tips: [
      "Setzen Sie die konkretesten, suchbaren Wörter in die erste Titelhälfte – Podcast-Apps schneiden das Ende oft ab.",
      "Versprechen Sie nur, was die Folge hält. Ehrliche Titel sorgen für mehr Durchhörer und weniger schlechte Bewertungen.",
      "Lassen Sie Episodennummer und Showname weg, sofern Ihre Hörer sie nicht brauchen.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Podcast-Shownotes-Generator & Vorlage | Pod Studio",
    metaDescription:
      "Erstellen Sie saubere Shownotes mit Zusammenfassung, Gast, Zeitstempeln, Kernaussagen und Links. Export als Markdown, HTML oder Text. Kostenlos.",
    overview: [
      "Der Show-Notes-Generator ordnet Ihre Episodendetails zu gut strukturierten Shownotes: kurze Zusammenfassung, Gast, Kapitel mit Zeitstempeln, Kernaussagen und erwähnte Ressourcen.",
      "Die Ausgabe gibt es als Markdown, HTML oder reinen Text – direkt einfügbar bei Buzzsprout, Libsyn, Podbean, Spotify for Creators, YouTube oder auf Ihrer Website, ohne neu zu formatieren.",
    ],
    steps: [
      { title: "Grunddaten eintragen", text: "Geben Sie den Episodentitel und eine Zusammenfassung in ein, zwei Sätzen ein, die zum Zuhören motiviert." },
      { title: "Gäste und Kapitel ergänzen", text: "Tragen Sie die Gäste ein und fügen Sie Zeitstempel im Format „00:00 Thema“ zeilenweise ein." },
      { title: "Kernaussagen und Links", text: "Notieren Sie die wichtigsten Learnings sowie erwähnte Bücher, Tools oder Websites." },
      { title: "Format wählen und kopieren", text: "Wählen Sie Markdown, HTML oder Text passend zu Ihrem Hoster und kopieren Sie die fertigen Notes." },
    ],
    tips: [
      "Schreiben Sie den ersten Satz für Menschen und Suchmaschinen – ihn zeigen die meisten Apps vor „mehr“.",
      "Nehmen Sie nur Zeitstempel auf, die Sie am finalen Schnitt geprüft haben; falsche Kapitel frustrieren.",
      "Nutzen Sie jede Woche dieselbe Struktur, damit Stammhörer Links schnell finden.",
    ],
  },
  "podcast-name-generator": {
    metaTitle: "Kostenloser Podcast-Namen-Generator | Pod Studio",
    metaDescription:
      "Finden Sie einprägsame Podcast-Namen nach Nische, Thema und Markenstil. Erstellen Sie eine Shortlist und prüfen Sie Domains und Marken selbst. Kostenlos.",
    overview: [
      "Der Podcast-Namen-Generator schlägt Shownamen auf Basis Ihrer Nische, eines optionalen eigenen Worts oder Themas und des gewünschten Markenstils vor – von klar und auffindbar bis verspielt und markenstark.",
      "Es ist ein Brainstorming-Tool: Domain- oder Markenverfügbarkeit wird nicht geprüft. Erstellen Sie eine Shortlist und prüfen Sie den Namen vor der Ankündigung bei einem Domain-Registrar, in Podcast-Verzeichnissen und per Markenrecherche.",
    ],
    steps: [
      { title: "Nische wählen", text: "Wählen Sie das passende Genre, etwa Tech, Finanzen, True Crime oder Persönlichkeitsentwicklung." },
      { title: "Eigenes Wort (optional)", text: "Geben Sie ein Wort oder Thema ein, das im Namen vorkommen soll – ein Thema, Ort oder wiederkehrende Idee." },
      { title: "Stil wählen und vormerken", text: "Wechseln Sie den Markenstil und merken Sie sich drei bis fünf Namen, die Sie jede Folge gern aussprechen würden." },
      { title: "Vor dem Start prüfen", text: "Suchen Sie bei Apple Podcasts und Spotify nach Dubletten und prüfen Sie Domain und Social-Handles selbst." },
    ],
    tips: [
      "Sprechen Sie jeden Namen laut aus – wer ihn nach einmal Hören nicht schreiben kann, empfiehlt ihn seltener weiter.",
      "Ein klares Themenwort hilft neuen Hörern, Sie in der Podcast-Suche zu finden.",
      "Vermeiden Sie Namen, die an einen Trend oder eine Jahreszahl gebunden sind – der Name soll auch in Folge 200 passen.",
    ],
  },
  "episode-outline-builder": {
    metaTitle: "Podcast-Ablaufplan & Run-of-Show-Planer | Pod Studio",
    metaDescription:
      "Erstellen Sie einen getimten Podcast-Ablaufplan mit Cold Open, Intro, Segmenten, Sponsoring und Outro. So bleibt die Aufnahme im Zeitplan. Kostenlose Vorlage.",
    overview: [
      "Der Ablauf-Planer erstellt einen getimten Run of Show: einen Produktionsfahrplan mit jedem Segment, seiner ungefähren Startzeit und der geplanten Länge.",
      "So sind Host, Gast und Produktion bei Musikakzenten, Sponsor-Reads, Interviewblöcken und Calls to Action synchron – ohne jedes Wort zu skripten.",
    ],
    steps: [
      { title: "Folge benennen", text: "Geben Sie einen Arbeitstitel ein, damit Sie den Ablauf später wiederfinden." },
      { title: "Ziel-Länge festlegen", text: "Tragen Sie die Gesamtdauer in Minuten ein und sehen Sie, wie sich die Segmentzeiten summieren." },
      { title: "Segmente bearbeiten", text: "Passen Sie Cold Open, Intro, Hauptteile, Mid-Roll-Pause und Outro an oder fügen Sie welche hinzu – mit Notizen." },
      { title: "Ablauf exportieren", text: "Exportieren Sie den Plan als Markdown und schicken Sie ihn vor der Aufnahme an Gast oder Produktion." },
    ],
    tips: [
      "Planen Sie das Mid-Roll-Sponsoring an einer natürlichen Pause, etwa nach einem Drittel bis zur Hälfte der Folge.",
      "Lassen Sie ein paar Minuten Puffer für Abschweifungen – die besten Momente sind oft ungeplant.",
      "Schicken Sie Gästen den Ablauf vorab, damit sie Geschichten vorbereiten, nicht nur Antworten.",
    ],
  },
  "guest-question-generator": {
    metaTitle: "Podcast-Interviewfragen-Generator | Pod Studio",
    metaDescription:
      "Erzeugen Sie Interviewfragen für jeden Gast: Eisbrecher, Werdegang, Fehler und Wendepunkte, Learnings und Schnellfragen. Kostenlos, ohne Anmeldung.",
    overview: [
      "Der Interviewfragen-Generator baut einen vollständigen Interviewbogen: von Eisbrechern und dem Werdegang über Wendepunkte und Learnings bis zu Prognosen und einer Schnellfragerunde.",
      "Geben Sie Namen, Beruf und Episodenthema ein und erhalten Sie eine passende Startliste, die Sie mit eigener Recherche verfeinern.",
    ],
    steps: [
      { title: "Gastdaten eingeben", text: "Tragen Sie Namen, Beruf oder Rolle des Gastes und das Hauptthema der Folge ein." },
      { title: "Nach Phase filtern", text: "Filtern Sie Fragen nach Phase – Eisbrecher, Werdegang, Fehler & Pivot bis zum Abschluss." },
      { title: "Bogen prüfen", text: "Behalten Sie Fragen, die Geschichten auslösen, statt Ein-Wort-Antworten." },
      { title: "Vorbereitungsblatt kopieren", text: "Kopieren Sie das Blatt oder exportieren Sie es als Text und ergänzen Sie Nachfragen zur aktuellen Arbeit des Gastes." },
    ],
    tips: [
      "Fragen Sie nach einem konkreten Moment – „Erzählen Sie vom Tag, an dem …“ – statt nach allgemeinen Meinungen.",
      "Legen Sie zwei, drei Pflichtfragen fest und lassen Sie den Rest dem Gesprächsfluss.",
      "Heben Sie die persönlichste Frage für die Mitte auf, wenn der Gast aufgetaut ist.",
    ],
  },
  "monetization-calculator": {
    metaTitle: "Podcast-TKP- & Sponsoring-Umsatzrechner | Pod Studio",
    metaDescription:
      "Schätzen Sie Werbeeinnahmen aus Downloads, TKP, Werbeplätzen und Auslastung. Vergleichen Sie Pre-, Mid- und Post-Roll plus Hörerunterstützung. Kostenlos.",
    overview: [
      "Der TKP- & Umsatzrechner schätzt, was Ihre Show mit Werbung verdienen kann – mit der Standardformel: (Downloads ÷ 1.000) × TKP × verkaufte Werbeplätze.",
      "Passen Sie Downloads pro Folge, Veröffentlichungsrhythmus, Pre-, Mid- und Post-Roll, Auslastung und Mitgliedschaften an und sehen Sie Prognosen pro Monat, pro Folge und pro Jahr – ideal für Sponsorenpreise und Ziele.",
    ],
    steps: [
      { title: "Downloads eingeben", text: "Nutzen Sie die durchschnittlichen Downloads pro Folge in den ersten 30 Tagen laut Ihrem Hoster." },
      { title: "Rhythmus festlegen", text: "Geben Sie an, wie viele Folgen Sie pro Monat veröffentlichen." },
      { title: "Werbeplätze einstellen", text: "Aktivieren Sie Pre-, Mid- und Post-Roll, legen Sie je einen TKP fest und schätzen Sie die Auslastung." },
      { title: "Prüfen und exportieren", text: "Vergleichen Sie die Aufschlüsselung, ergänzen Sie Mitgliedschaftseinnahmen und exportieren Sie die Prognose." },
    ],
    tips: [
      "Vom Host gelesene Mid-Rolls erzielen meist die höchsten TKPs, weil die Aufmerksamkeit dann am größten ist.",
      "Rechnen Sie bei der Auslastung vorsichtig – die meisten unabhängigen Shows verkaufen nicht jeden Platz.",
      "Nutzen Sie verifizierte Downloadzahlen im Pitch; Sponsoren fragen oft nach Screenshots vom Hoster.",
    ],
  },
  "cover-art-preview": {
    metaTitle: "Podcast-Cover-Vorschau für Apple & Spotify | Pod Studio",
    metaDescription:
      "Sehen Sie Ihr Podcast-Cover wie in Apple Podcasts, Spotify, auf dem Sperrbildschirm und als kleines Thumbnail. Größe und Lesbarkeit prüfen. Kostenlos.",
    overview: [
      "Die Cover-Vorschau zeigt Ihr Podcast-Artwork in Layouts im Stil von Apple Podcasts und Spotify, auf dem Smartphone-Sperrbildschirm und als winziges Such-Thumbnail.",
      "Ihr Bild verlässt nie Ihr Gerät. Es wird gegen die übliche Verzeichnisvorgabe geprüft – quadratisch, zwischen 1400 × 1400 und 3000 × 3000 Pixel –, damit Sie Probleme vor dem Upload erkennen.",
    ],
    steps: [
      { title: "Artwork laden", text: "Ziehen Sie eine JPG- oder PNG-Datei hinein (oder testen Sie das Beispiel). Die Verarbeitung erfolgt nur im Browser." },
      { title: "Vorgaben prüfen", text: "Sehen Sie, ob das Bild quadratisch ist und im empfohlenen Pixelbereich liegt." },
      { title: "Ansichten wechseln", text: "Vergleichen Sie Apple-Podcasts-Feed, Spotify-Wiedergabe, Sperrbildschirm, Safe-Zone und 50 × 50 px Thumbnail." },
      { title: "Anpassen und erneut testen", text: "Ändern Sie Schriftgröße oder Kontrast im Grafikprogramm und laden Sie die neue Version zum Vergleich." },
    ],
    tips: [
      "Ist der Titel als Thumbnail nicht lesbar, nutzen Sie weniger Wörter oder eine größere Schrift.",
      "Platzieren Sie wichtigen Text nicht am Rand – manche Apps runden die Ecken ab.",
      "Testen Sie im hellen und dunklen Modus; dünne dunkle Schrift verschwindet leicht auf dunklem Hintergrund.",
    ],
  },
  "rss-feed-validator": {
    metaTitle: "Kostenloser Podcast-RSS-Feed-Validator | Pod Studio",
    metaDescription:
      "Prüfen Sie Ihren Podcast-RSS-Feed auf fehlende Tags, defekte Enclosures, Artwork- und GUID-Probleme, bevor Sie bei Apple oder Spotify einreichen. Kostenlos.",
    overview: [
      "Der RSS-Feed Validator findet die Probleme, die eine Veröffentlichung am häufigsten blockieren oder verzögern: ungültiges XML, fehlende Show-Metadaten, Artwork-Probleme, doppelte oder fehlende GUIDs und Folgen ohne nutzbares Audio-Enclosure.",
      "Jeder Befund wird verständlich erklärt, inklusive Hinweis zur Behebung – so beheben Sie Fehler im Hoster-Dashboard, bevor Apple Podcasts oder Spotify den Feed ablehnen.",
    ],
    steps: [
      { title: "Feed einfügen", text: "Fügen Sie das XML Ihres Feeds ein (oder laden Sie das Beispiel)." },
      { title: "Prüfung starten", text: "Der Validator analysiert den Feed im Browser und prüft Pflicht- und empfohlene Tags." },
      { title: "Befunde lesen", text: "Erst Fehler, dann Warnungen. Jeder Punkt erklärt, warum er wichtig ist." },
      { title: "Beheben und erneut prüfen", text: "Passen Sie die Einstellungen beim Hoster an, fügen Sie den aktualisierten Feed ein und prüfen Sie erneut." },
    ],
    tips: [
      "Ändern Sie nie die GUID einer veröffentlichten Folge – Apps könnten sie als neue Folge behandeln.",
      "Prüfen Sie, ob das Explicit-Tag korrekt gesetzt ist; es beeinflusst, wo Ihre Show erscheint.",
      "Validieren Sie nach Hoster-Wechsel oder neuem Cover erneut – das sind die häufigsten Ursachen neuer Fehler.",
    ],
  },
  "episode-timestamp-generator": {
    metaTitle: "Podcast-Kapitelmarken & Zeitstempel-Generator | Pod Studio",
    metaDescription:
      "Machen Sie aus Notizen saubere Kapitelmarken für YouTube, Spotify und Shownotes. Einheitliches Zeitformat mit einem Klick. Kostenlos, ohne Anmeldung.",
    overview: [
      "Der Kapitelmarken-Generator macht aus Ihren Aufnahmenotizen saubere Kapitel wie „00:00 Einleitung“ und „05:12 Werdegang des Gastes“ – mit einer visuellen Zeitleiste der Folge.",
      "Nutzen Sie das Ergebnis in YouTube- und Spotify-Beschreibungen und Shownotes, damit Hörer direkt zur gewünschten Stelle springen und Suchmaschinen den Inhalt besser verstehen.",
    ],
    steps: [
      { title: "Kapitel hinzufügen", text: "Geben Sie jedes Kapitel mit Startzeit und Titel ein oder fügen Sie eine Liste wie „0:00 Intro, 5:30 Durchbruch“ ein." },
      { title: "Format einheitlich halten", text: "Verwenden Sie ein Zeitformat und listen Sie Kapitel in der richtigen Reihenfolge." },
      { title: "Zeitleiste prüfen", text: "Prüfen Sie die Zeitleiste auf Lücken, Dubletten oder zu kurze Kapitel." },
      { title: "Kapitel kopieren", text: "Kopieren Sie die Liste in Shownotes, YouTube-Beschreibung oder Ihren Hoster." },
    ],
    tips: [
      "YouTube zeigt Kapitel nur an, wenn der erste Zeitstempel 00:00 ist.",
      "Formulieren Sie Kapitel wie Mini-Überschriften – konkret schlägt vage („Preisfehler im ersten Jahr“ statt „Teil 2“).",
      "Planen Sie Kapitel von mindestens ein paar Minuten; zu viele Mini-Kapitel sind unübersichtlich.",
    ],
  },
  "intro-script-generator": {
    metaTitle: "Podcast-Intro- & Cold-Open-Skript-Generator | Pod Studio",
    metaDescription:
      "Schreiben Sie ein kurzes Podcast-Intro mit Hook, das Hörer zum Bleiben bringt. Für Interview-, Solo- und Story-Formate. Kostenloser Intro-Generator.",
    overview: [
      "Der Intro-Skript-Generator hilft bei den ersten 30–60 Sekunden einer Folge: einem Hook, der Neugier oder Relevanz weckt, gefolgt von einer kurzen Vorstellung, die Erwartungen setzt.",
      "Wählen Sie Format und Tonalität, ergänzen Sie ein paar Details und erhalten Sie ein sprechfertiges Skript in Teleprompter-Ansicht, das Sie an Ihren Stil anpassen.",
    ],
    steps: [
      { title: "Format und Ton wählen", text: "Wählen Sie Gastinterview, Solo oder Story sowie energiegeladen, nachdenklich oder locker." },
      { title: "Details ergänzen", text: "Geben Sie Thema oder Versprechen der Folge und ggf. Name und Titel des Gastes ein." },
      { title: "Skript erzeugen", text: "Sie erhalten ein kurzes Skript vom Hook über die Vorstellung bis „Das erfahren Sie heute“." },
      { title: "Laut lesen", text: "Üben Sie es ein-, zweimal und streichen Sie Sätze, die nicht nach Ihnen klingen." },
    ],
    tips: [
      "Kommen Sie in den ersten 15 Sekunden zur Sache – dort entscheiden viele Hörer, ob sie bleiben.",
      "Ein starkes Gastzitat ist ein hervorragender Cold Open vor der Titelmusik.",
      "Halten Sie wiederkehrende Intros kurz; lange Hinweise und Sponsoren gehören weiter nach hinten.",
    ],
  },
  "audience-growth-estimator": {
    metaTitle: "Podcast-Download- & Hörerwachstums-Rechner | Pod Studio",
    metaDescription:
      "Prognostizieren Sie Ihre Podcast-Downloads für 12 Monate aus aktuellen Zahlen, Veröffentlichungsrhythmus und monatlicher Wachstumsrate. Kostenlos.",
    overview: [
      "Der Wachstumsrechner prognostiziert künftige Downloads, indem er eine monatliche Wachstumsrate auf Ihre aktuellen Downloads pro Folge anwendet und mit Ihrem Veröffentlichungsrhythmus multipliziert.",
      "Das ist eine einfache Zinseszins-Illustration, keine Vorhersage: Saisonalität, virale Spitzen und Abwanderung fließen nicht ein. Nutzen Sie sie für realistische Ziele und um zu sehen, wie kleine Verbesserungen sich übers Jahr summieren.",
    ],
    steps: [
      { title: "Aktuelle Downloads", text: "Tragen Sie Ihre aktuellen durchschnittlichen 30-Tage-Downloads pro Folge ein." },
      { title: "Rhythmus festlegen", text: "Geben Sie an, wie viele Folgen Sie monatlich veröffentlichen." },
      { title: "Wachstumsrate wählen", text: "Wählen Sie einen monatlichen Prozentsatz, der Ihrem Trend oder Ziel entspricht." },
      { title: "Diagramm lesen", text: "Prüfen Sie den 12-Monats-Verlauf und sehen Sie, wo Sie im Vergleich zu weltweiten Download-Perzentilen stehen." },
    ],
    tips: [
      "Starten Sie mit einer moderaten Rate – durch den Zinseszins wirken optimistische Werte schnell dramatisch.",
      "Kombinieren Sie die Prognose mit dem TKP-Rechner, um zu sehen, wann Sponsoring realistisch wird.",
      "Vergleichen Sie die Prognose monatlich mit Ihren echten Zahlen und passen Sie die Eingaben an.",
    ],
  },
  "description-generator": {
    metaTitle: "Podcast- & Episodenbeschreibung-Generator | Pod Studio",
    metaDescription:
      "Schreiben Sie klare Show- und Episodenbeschreibungen für Apple Podcasts und Spotify – mit Hinweis, wo mobil „mehr“ abschneidet. Kostenlos, ohne Anmeldung.",
    overview: [
      "Der Beschreibungs-Generator entwirft zwei Arten von Texten: die Showbeschreibung, die Versprechen und Zielgruppe Ihres Podcasts erklärt, und Episodenbeschreibungen, die eine einzelne Folge zusammenfassen.",
      "Gute Beschreibungen helfen beim Abonnieren und helfen Apps, Ihre Show einzuordnen. Deshalb stehen die wichtigsten Infos am Anfang – dort, wo Apps sie anzeigen.",
    ],
    steps: [
      { title: "Modus wählen", text: "Wählen Sie, ob Sie die Showbeschreibung oder eine Episodenbeschreibung schreiben." },
      { title: "Das Wichtigste eintragen", text: "Geben Sie Zielgruppe, Kernthemen und Takeaways sowie Links oder Call to Action ein." },
      { title: "Abschneidepunkt prüfen", text: "Sehen Sie, wo mobile Apps bei „…mehr“ abschneiden, und stellen Sie Hook und Keyword nach vorne." },
      { title: "Bearbeiten und einfügen", text: "Passen Sie den Text an Ihren Stil an und fügen Sie ihn bei Ihrem Hoster ein." },
    ],
    tips: [
      "Der erste Satz zählt am meisten – viele Apps zeigen nur ein bis zwei Zeilen vor „mehr“.",
      "Sprechen Sie die Zielgruppe direkt an („für Gründer:innen am Anfang“), damit sie sich wiedererkennt.",
      "Nutzen Sie Keywords natürlich, niemals als Liste; Apple kann Spam-Beschreibungen ablehnen.",
    ],
  },
  "category-finder": {
    metaTitle: "Apple-Podcasts-Kategorie-Finder | Pod Studio",
    metaDescription:
      "Finden Sie die besten Apple-Podcasts-Kategorien und Unterkategorien für Ihre Show. Nach Thema suchen und den exakten XML-Tag kopieren. Kostenlos.",
    overview: [
      "Der Kategorie-Finder hilft bei der Wahl der passenden Apple-Podcasts-Kategorie und Unterkategorie. Apple erlaubt bis zu zwei Kategorien; die primäre ist am sichtbarsten.",
      "Suchen Sie nach Thema oder Stichwort, sehen Sie passende Kategorien und Unterkategorien und kopieren Sie den exakten XML-Tag für Ihren RSS-Feed mit einem Klick.",
    ],
    steps: [
      { title: "Nach Thema suchen", text: "Geben Sie Ihr Hauptthema ein, z. B. „persönliche Finanzen“ oder „True Crime“." },
      { title: "Optionen vergleichen", text: "Vergleichen Sie die vorgeschlagenen Kategorien und Unterkategorien." },
      { title: "Primäre Kategorie wählen", text: "Wählen Sie die Kategorie, die die meisten Ihrer Folgen am besten beschreibt." },
      { title: "XML-Tag kopieren", text: "Klicken Sie auf eine Unterkategorie, um ihren iTunes-Tag zu kopieren, oder wählen Sie sie im Hoster-Dashboard." },
    ],
    tips: [
      "Wählen Sie die Kategorie, die Ihre Hörer durchstöbern würden – nicht die mit der wenigsten Konkurrenz.",
      "Eine präzise Unterkategorie verschafft neuen Shows oft bessere Sichtbarkeit.",
      "Prüfen Sie vor der Veröffentlichung die aktuelle offizielle Apple-Liste; Kategorienamen ändern sich gelegentlich.",
    ],
  },
  "hook-generator": {
    metaTitle: "Hook-Generator für Podcast-Clips & Social Media | Pod Studio",
    metaDescription:
      "Schreiben Sie Hooks, die das Scrollen stoppen – für Podcast-Clips auf TikTok, Reels, Shorts und LinkedIn. Stil wählen, vergleichen, kopieren. Kostenlos.",
    overview: [
      "Der Social-Media-Hooks-Generator schreibt kurze, prägnante Einstiegssätze für Podcast-Clips und Posts, damit die besten Momente einer Folge auch für sich allein funktionieren.",
      "Geben Sie das Episodenthema und optional den Gast ein, wählen Sie einen Hook-Stil und erhalten Sie mehrere Zeilen für Bildschirmtext oder Captions auf TikTok, Reels, YouTube Shorts oder LinkedIn.",
    ],
    steps: [
      { title: "Thema eingeben", text: "Beschreiben Sie Thema oder Branche der Folge, aus der der Clip stammt." },
      { title: "Gast hinzufügen (optional)", text: "Nennen Sie den Gast, wenn Name oder Expertise das Zugpferd sind." },
      { title: "Hook-Stil wählen", text: "Filtern Sie nach Stil und vergleichen Sie mehrere Einstiege." },
      { title: "Kopieren und posten", text: "Nutzen Sie den besten Hook als Bildschirmtext oder Caption und verlinken Sie die ganze Folge." },
    ],
    tips: [
      "Die erste Zeile hat etwa zwei Sekunden – beginnen Sie mit der konkretesten Aussage.",
      "Der Clip muss halten, was der Hook verspricht; irreführende Hooks kosten Vertrauen.",
      "Untertiteln Sie jeden Clip – viele schauen ohne Ton.",
    ],
  },
  "transcript-formatter": {
    metaTitle: "Podcast-Transkript bereinigen & formatieren | Pod Studio",
    metaDescription:
      "Bereinigen Sie Podcast-Transkripte: Sprechernamen setzen, Füllwörter und Zeitstempel entfernen, Text veröffentlichungsfertig machen. Kostenlos und privat.",
    overview: [
      "Der Transkript-Bereiniger räumt Texttranskripte beliebiger Dienste auf. Ersetzen Sie generische Sprecherlabels durch echte Namen, entfernen Sie gängige englische Füllwörter (um, uh …) und behalten oder löschen Sie Inline-Zeitstempel.",
      "Er arbeitet mit eingefügtem Text – Audio wird nicht transkribiert. Das Ergebnis ist besser lesbar und bereit als barrierefreies Transkript, Blogartikel oder Shownotes-Auszug.",
    ],
    steps: [
      { title: "Transkript einfügen", text: "Kopieren Sie den Textexport Ihres Transkriptionsdienstes in den Editor." },
      { title: "Sprecher benennen", text: "Ersetzen Sie „SPEAKER_00“ & Co. durch echte Namen und entscheiden Sie, ob Zeitstempel entfernt werden." },
      { title: "Ergebnis prüfen", text: "Lesen Sie das formatierte Transkript und korrigieren Sie bei Bedarf manuell." },
      { title: "Kopieren oder herunterladen", text: "Kopieren Sie den sauberen Text oder laden Sie ihn für Website oder Hoster herunter." },
    ],
    tips: [
      "Veröffentlichte Transkripte machen Folgen barrierefrei und geben Suchmaschinen echten Text zum Indexieren.",
      "Entfernen Sie Füllwörter für die Lesbarkeit, aber behalten Sie, was den Sinn eines Zitats ändert.",
      "Prüfen Sie Namen und Fachbegriffe – hier irren Transkriptionstools oft.",
    ],
  },
  "trailer-script-builder": {
    metaTitle: "Podcast-Trailer-Skript-Baukasten | Pod Studio",
    metaDescription:
      "Schreiben Sie ein Trailer-Skript, das Ihre Show, die Zielgruppe und den Grund zum Abonnieren erklärt. Bewährte Struktur für 60–90 Sekunden. Kostenlos.",
    overview: [
      "Der Trailer-Skript-Baukasten liefert eine bewährte Struktur: Hook, worum es geht, für wen die Show ist, was sie besonders macht und eine klare Aufforderung zum Folgen.",
      "Viele Verzeichnisse zeigen den Trailer prominent auf der Showseite – oft hören neue Hörer ihn zuerst. Dieses Tool hilft, die 60–90 Sekunden optimal zu nutzen.",
    ],
    steps: [
      { title: "Show-Basisdaten", text: "Tragen Sie Showtitel, Host-Namen und Veröffentlichungsrhythmus ein." },
      { title: "Große Frage formulieren", text: "Schreiben Sie die zentrale Frage Ihrer Show und Ihr Versprechen an die Hörer." },
      { title: "Skript erzeugen", text: "Sie erhalten ein strukturiertes Skript mit Hook, Hauptteil und Call to Action." },
      { title: "Aufnehmen und kürzen", text: "Lesen Sie es laut, stoppen Sie die Zeit und streichen Sie Wiederholungen." },
    ],
    tips: [
      "Bauen Sie einen kurzen echten Ausschnitt aus einer Folge ein – zeigen statt erzählen.",
      "Enden Sie mit genau einer Aufforderung: der Show in der eigenen App folgen.",
      "Aktualisieren Sie den Trailer, wenn sich Fokus oder Format der Show ändern.",
    ],
  },
  "review-response-generator": {
    metaTitle: "Antworten auf Podcast-Rezensionen erstellen | Pod Studio",
    metaDescription:
      "Antworten Sie auf Hörerbewertungen und schreiben Sie On-Air-Shoutouts – für Lob wie Kritik. Freundliche, professionelle Vorlagen. Kostenloses Tool.",
    overview: [
      "Der Generator für Rezensions-Danksagungen hilft Ihnen, auf Hörerbewertungen zu antworten und On-Air-Shoutouts zu schreiben, die Unterstützern danken und mehr Menschen zum Bewerten anregen.",
      "Er deckt begeisterte Bewertungen, konstruktives Feedback und unfaire Kritik ab – mit respektvollen Antworten ohne Rechtfertigungsdruck, die bei Bedarf konkrete Verbesserungen nennen.",
    ],
    steps: [
      { title: "Rezension eingeben", text: "Tragen Sie Name oder Handle der Person und den Inhalt der Bewertung ein." },
      { title: "Tonalität festlegen", text: "Markieren Sie die Bewertung als 5-Sterne-Lob, konstruktiv oder kritisch." },
      { title: "Format wählen", text: "Sie erhalten ein On-Air-Shoutout-Skript, eine Social-Media-Antwort und eine private Dankesnachricht." },
      { title: "Persönlich machen", text: "Greifen Sie ein Detail der Bewertung auf, damit die Person merkt, dass Sie sie gelesen haben." },
    ],
    tips: [
      "Lesen Sie jeden Monat ein paar Bewertungen vor – einer der einfachsten Wege zu mehr Ratings.",
      "Nennen oder verspotten Sie nie kritische Rezensenten; antworten Sie auf das Argument, nicht die Person.",
      "Danken Sie für konkretes Feedback und sagen Sie, was Sie dadurch geändert haben.",
    ],
  },
  "collab-finder": {
    metaTitle: "Podcast-Gastanfrage & Kooperations-Pitch | Pod Studio",
    metaDescription:
      "Schreiben Sie Gast-Pitches und Cross-Promotion-Mails, die beantwortet werden. Gegenseitiger Nutzen und nächster Schritt klar formuliert. Kostenlose Vorlagen.",
    overview: [
      "Der Gast- & Kooperations-Pitch-Generator entwirft E-Mails, um sich als Gast vorzuschlagen, Gäste in Ihre Show einzuladen oder eine Cross-Promotion mit einem anderen Podcast vorzuschlagen.",
      "Jeder Entwurf erklärt, wen Ihre Show erreicht, das vorgeschlagene Format, den Nutzen für beide Seiten und einen einfachen nächsten Schritt – genau das, worauf vielbeschäftigte Hosts achten.",
    ],
    steps: [
      { title: "Ziel wählen", text: "Sich als Gast pitchen, einen Gast einladen oder einen Promo- bzw. Feed-Tausch vorschlagen." },
      { title: "Beide Shows eintragen", text: "Geben Sie Zielshow und Host, Ihren Podcastnamen und Ihren konkreten Mehrwert an." },
      { title: "E-Mail erzeugen", text: "Sie erhalten einen knappen Entwurf mit Betreff, Nutzenversprechen und klarem Call to Action." },
      { title: "Personalisieren und senden", text: "Nennen Sie eine Folge, die Ihnen gefallen hat, und senden Sie von Ihrer eigenen Adresse." },
    ],
    tips: [
      "Halten Sie die erste E-Mail kurz – fünf, sechs Sätze genügen.",
      "Teilen Sie nur überprüfbare Reichweitenzahlen; geschönte Zahlen zerstören schnell Vertrauen.",
      "Haken Sie nach einer Woche einmal nach und ziehen Sie dann freundlich weiter.",
    ],
  },
};
