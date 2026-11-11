"use client";

import React, { useState } from "react";
import { Rss, CheckCircle2, AlertTriangle, XCircle, RotateCcw, FileCode, ExternalLink, ClipboardCheck } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

type RssText = {
  // chrome
  head: string; loadSample: string; ph: string; foot: string; run: string; empty: string; result: string; defTitle: string;
  det: [string, string]; pass: string; warn: string; err: string; recent: string; untitled: string; na: string;
  // health ring
  vFail: string; vWarn: string; vOk: string; aria: (n: number) => string;
  // validation items (tags such as <title> stay literal; they are XML)
  xmlLabel: string; xmlMsg: string; chLabel: string; chMsg: string;
  titleLabel: string; titleOk: (t: string) => string; titleMiss: string;
  descLabel: string; descOk: (n: number) => string; descMiss: string;
  imgLabel: string; imgOk: (u: string) => string; imgWarn: string; imgMiss: string;
  catLabel: string; catOk: (t: string) => string; catMiss: string;
  expLabel: string; expOk: (t: string) => string; expWarn: string;
  langLabel: string; langOk: (t: string) => string; langWarn: string;
  epLabel: string; epOk: (n: number) => string; epWarn: string;
  excLabel: string; excFallback: string;
  // sample feed text (category tags stay English: Apple requires its official names)
  s: { title: string; desc: string; lang: string; author: string; epTitle: string; epDesc: string };
};

const TEXT: Record<SupportedLocale, RssText> = {
  en: { head: "Paste Podcast RSS XML", loadSample: "Load Sample Valid Feed", ph: "Paste your podcast RSS feed XML here (starts with <?xml version='1.0' ...> <rss>)...", foot: "Validated 100% in your browser using standard DOMParser.", run: "Run RSS Audit",
    empty: "Paste your feed (or load the sample) and run the audit — a scored checklist of every Apple & Spotify requirement appears here.", result: "Validation Result", defTitle: "Podcast RSS Feed Audit", det: ["", " episode(s) detected"], pass: "Pass", warn: "Warning", err: "Error", recent: "Recent Episodes in Feed", untitled: "Untitled Episode", na: "N/A",
    vFail: "Fix errors before submitting", vWarn: "Submittable, with warnings", vOk: "Ready for Apple & Spotify", aria: (n) => `Feed health ${n} out of 100`,
    xmlLabel: "XML Parsing Error", xmlMsg: "Invalid XML formatting. Please ensure all tags are closed properly.", chLabel: "Missing Channel Element", chMsg: "Podcast RSS feeds must contain a parent <channel> tag inside <rss>.",
    titleLabel: "Show Title", titleOk: (t) => `Found: "${t}"`, titleMiss: "Missing mandatory <title> tag.", descLabel: "Show Description", descOk: (n) => `Length: ${n} characters.`, descMiss: "Missing mandatory <description> tag.",
    imgLabel: "Podcast Artwork", imgOk: (u) => `Artwork URL configured via HTTPS: ${u}...`, imgWarn: "Artwork URL should use secure HTTPS to avoid rejection by Apple Podcasts.", imgMiss: "Missing <itunes:image href='...'>. Apple Podcasts will reject this feed.",
    catLabel: "iTunes Category", catOk: (t) => `Primary category: "${t}"`, catMiss: "Missing <itunes:category text='...'>.", expLabel: "Parental Advisory / Explicit Tag", expOk: (t) => `Setting: "${t}"`, expWarn: "Missing explicit rating tag. Recommended values: 'clean' or 'yes'.",
    langLabel: "Language Tag", langOk: (t) => `Language: ${t}`, langWarn: "Missing <language> (e.g. 'en-us').", epLabel: "Audio Episodes", epOk: (n) => `Found ${n} episode(s) with audio enclosure links.`, epWarn: "No <item> elements found. You can submit a feed with a trailer episode to Apple.",
    excLabel: "Validation Exception", excFallback: "Failed to parse feed.",
    s: { title: "Deep Signal Podcast", desc: "Weekly deep dives into artificial intelligence, startups, and creative technology.", lang: "en-us", author: "Sarah Chen", epTitle: "Episode 1: The Frontier of Local AI Models", epDesc: "We explore how on-device AI is reshaping software development in 2026." } },
  es: { head: "Pega el XML del RSS de tu pódcast", loadSample: "Cargar feed de ejemplo válido", ph: "Pega aquí el XML del feed RSS de tu pódcast (empieza con <?xml version='1.0' ...> <rss>)...", foot: "Se valida al 100 % en tu navegador con el DOMParser estándar.", run: "Ejecutar auditoría RSS",
    empty: "Pega tu feed (o carga el ejemplo) y ejecuta la auditoría: aquí aparecerá una lista puntuada con cada requisito de Apple y Spotify.", result: "Resultado de la validación", defTitle: "Auditoría del feed RSS del pódcast", det: ["", " episodio(s) detectado(s)"], pass: "Correcto", warn: "Aviso", err: "Error", recent: "Episodios recientes del feed", untitled: "Episodio sin título", na: "N/D",
    vFail: "Corrige los errores antes de enviarlo", vWarn: "Se puede enviar, con avisos", vOk: "Listo para Apple y Spotify", aria: (n) => `Salud del feed: ${n} de 100`,
    xmlLabel: "Error de análisis XML", xmlMsg: "Formato XML no válido. Asegúrate de que todas las etiquetas estén bien cerradas.", chLabel: "Falta el elemento channel", chMsg: "Los feeds RSS de pódcast deben contener una etiqueta <channel> principal dentro de <rss>.",
    titleLabel: "Título del programa", titleOk: (t) => `Encontrado: «${t}»`, titleMiss: "Falta la etiqueta obligatoria <title>.", descLabel: "Descripción del programa", descOk: (n) => `Longitud: ${n} caracteres.`, descMiss: "Falta la etiqueta obligatoria <description>.",
    imgLabel: "Portada del pódcast", imgOk: (u) => `URL de la portada configurada con HTTPS: ${u}...`, imgWarn: "La URL de la portada debe usar HTTPS para evitar el rechazo de Apple Podcasts.", imgMiss: "Falta <itunes:image href='...'>. Apple Podcasts rechazará este feed.",
    catLabel: "Categoría de iTunes", catOk: (t) => `Categoría principal: «${t}»`, catMiss: "Falta <itunes:category text='...'>.", expLabel: "Aviso parental / etiqueta de contenido explícito", expOk: (t) => `Valor: «${t}»`, expWarn: "Falta la etiqueta de clasificación explícita. Valores recomendados: 'clean' o 'yes'.",
    langLabel: "Etiqueta de idioma", langOk: (t) => `Idioma: ${t}`, langWarn: "Falta <language> (p. ej. 'es-es').", epLabel: "Episodios de audio", epOk: (n) => `Se encontraron ${n} episodio(s) con enlaces de audio.`, epWarn: "No se encontraron elementos <item>. Puedes enviar a Apple un feed con un episodio tráiler.",
    excLabel: "Excepción de validación", excFallback: "No se pudo analizar el feed.",
    s: { title: "Pódcast Señal Profunda", desc: "Análisis semanales en profundidad sobre inteligencia artificial, startups y tecnología creativa.", lang: "es-es", author: "Sara Chen", epTitle: "Episodio 1: La frontera de los modelos de IA locales", epDesc: "Exploramos cómo la IA en el propio dispositivo está transformando el desarrollo de software en 2026." } },
  fr: { head: "Collez le XML RSS de votre podcast", loadSample: "Charger un flux d'exemple valide", ph: "Collez ici le XML du flux RSS de votre podcast (commence par <?xml version='1.0' ...> <rss>)...", foot: "Validé à 100 % dans votre navigateur avec le DOMParser standard.", run: "Lancer l'audit RSS",
    empty: "Collez votre flux (ou chargez l'exemple) et lancez l'audit : une liste notée de chaque exigence d'Apple et Spotify s'affichera ici.", result: "Résultat de la validation", defTitle: "Audit du flux RSS du podcast", det: ["", " épisode(s) détecté(s)"], pass: "Valide", warn: "Avertissement", err: "Erreur", recent: "Épisodes récents du flux", untitled: "Épisode sans titre", na: "N/D",
    vFail: "Corrigez les erreurs avant l'envoi", vWarn: "Soumissible, avec avertissements", vOk: "Prêt pour Apple et Spotify", aria: (n) => `Santé du flux : ${n} sur 100`,
    xmlLabel: "Erreur d'analyse XML", xmlMsg: "Format XML invalide. Vérifiez que toutes les balises sont correctement fermées.", chLabel: "Élément channel manquant", chMsg: "Les flux RSS de podcast doivent contenir une balise parente <channel> dans <rss>.",
    titleLabel: "Titre de l'émission", titleOk: (t) => `Trouvé : « ${t} »`, titleMiss: "Balise obligatoire <title> manquante.", descLabel: "Description de l'émission", descOk: (n) => `Longueur : ${n} caractères.`, descMiss: "Balise obligatoire <description> manquante.",
    imgLabel: "Pochette du podcast", imgOk: (u) => `URL de la pochette configurée en HTTPS : ${u}...`, imgWarn: "L'URL de la pochette doit utiliser HTTPS pour éviter un rejet par Apple Podcasts.", imgMiss: "<itunes:image href='...'> manquant. Apple Podcasts rejettera ce flux.",
    catLabel: "Catégorie iTunes", catOk: (t) => `Catégorie principale : « ${t} »`, catMiss: "<itunes:category text='...'> manquant.", expLabel: "Avertissement parental / balise de contenu explicite", expOk: (t) => `Valeur : « ${t} »`, expWarn: "Balise de classification explicite manquante. Valeurs recommandées : 'clean' ou 'yes'.",
    langLabel: "Balise de langue", langOk: (t) => `Langue : ${t}`, langWarn: "<language> manquant (ex. 'fr-fr').", epLabel: "Épisodes audio", epOk: (n) => `${n} épisode(s) avec liens audio trouvé(s).`, epWarn: "Aucun élément <item> trouvé. Vous pouvez soumettre à Apple un flux avec un épisode bande-annonce.",
    excLabel: "Exception de validation", excFallback: "Impossible d'analyser le flux.",
    s: { title: "Podcast Signal Profond", desc: "Chaque semaine, des analyses approfondies sur l'intelligence artificielle, les startups et la technologie créative.", lang: "fr-fr", author: "Sarah Chen", epTitle: "Épisode 1 : La frontière des modèles d'IA locaux", epDesc: "Nous explorons comment l'IA embarquée transforme le développement logiciel en 2026." } },
  de: { head: "Podcast-RSS-XML einfügen", loadSample: "Gültigen Beispiel-Feed laden", ph: "Füge hier das XML deines Podcast-RSS-Feeds ein (beginnt mit <?xml version='1.0' ...> <rss>)...", foot: "Zu 100 % in deinem Browser mit dem Standard-DOMParser geprüft.", run: "RSS-Prüfung starten",
    empty: "Füge deinen Feed ein (oder lade das Beispiel) und starte die Prüfung – hier erscheint eine bewertete Checkliste aller Apple- und Spotify-Anforderungen.", result: "Prüfergebnis", defTitle: "Podcast-RSS-Feed-Prüfung", det: ["", " Folge(n) erkannt"], pass: "Bestanden", warn: "Warnung", err: "Fehler", recent: "Neueste Folgen im Feed", untitled: "Folge ohne Titel", na: "k. A.",
    vFail: "Fehler vor dem Einreichen beheben", vWarn: "Einreichbar, mit Warnungen", vOk: "Bereit für Apple & Spotify", aria: (n) => `Feed-Zustand ${n} von 100`,
    xmlLabel: "XML-Parsing-Fehler", xmlMsg: "Ungültiges XML-Format. Bitte stelle sicher, dass alle Tags korrekt geschlossen sind.", chLabel: "Channel-Element fehlt", chMsg: "Podcast-RSS-Feeds müssen ein übergeordnetes <channel>-Tag innerhalb von <rss> enthalten.",
    titleLabel: "Show-Titel", titleOk: (t) => `Gefunden: „${t}“`, titleMiss: "Pflicht-Tag <title> fehlt.", descLabel: "Show-Beschreibung", descOk: (n) => `Länge: ${n} Zeichen.`, descMiss: "Pflicht-Tag <description> fehlt.",
    imgLabel: "Podcast-Cover", imgOk: (u) => `Cover-URL über HTTPS konfiguriert: ${u}...`, imgWarn: "Die Cover-URL sollte HTTPS verwenden, damit Apple Podcasts sie nicht ablehnt.", imgMiss: "<itunes:image href='...'> fehlt. Apple Podcasts wird diesen Feed ablehnen.",
    catLabel: "iTunes-Kategorie", catOk: (t) => `Hauptkategorie: „${t}“`, catMiss: "<itunes:category text='...'> fehlt.", expLabel: "Jugendschutz- / Explicit-Tag", expOk: (t) => `Einstellung: „${t}“`, expWarn: "Explicit-Kennzeichnung fehlt. Empfohlene Werte: 'clean' oder 'yes'.",
    langLabel: "Sprach-Tag", langOk: (t) => `Sprache: ${t}`, langWarn: "<language> fehlt (z. B. 'de-de').", epLabel: "Audiofolgen", epOk: (n) => `${n} Folge(n) mit Audio-Enclosure-Links gefunden.`, epWarn: "Keine <item>-Elemente gefunden. Du kannst Apple einen Feed mit einer Trailer-Folge einreichen.",
    excLabel: "Prüfungsausnahme", excFallback: "Der Feed konnte nicht geparst werden.",
    s: { title: "Tiefes-Signal-Podcast", desc: "Wöchentliche Deep Dives zu künstlicher Intelligenz, Startups und kreativer Technologie.", lang: "de-de", author: "Sarah Chen", epTitle: "Folge 1: Die Grenze lokaler KI-Modelle", epDesc: "Wir erkunden, wie KI direkt auf dem Gerät die Softwareentwicklung 2026 verändert." } },
  it: { head: "Incolla l'XML RSS del tuo podcast", loadSample: "Carica un feed di esempio valido", ph: "Incolla qui l'XML del feed RSS del tuo podcast (inizia con <?xml version='1.0' ...> <rss>)...", foot: "Validato al 100% nel tuo browser con il DOMParser standard.", run: "Avvia l'audit RSS",
    empty: "Incolla il tuo feed (o carica l'esempio) e avvia l'audit: qui apparirà una checklist con punteggio di tutti i requisiti di Apple e Spotify.", result: "Risultato della validazione", defTitle: "Audit del feed RSS del podcast", det: ["", " episodio/i rilevato/i"], pass: "Superato", warn: "Avviso", err: "Errore", recent: "Episodi recenti nel feed", untitled: "Episodio senza titolo", na: "N/D",
    vFail: "Correggi gli errori prima dell'invio", vWarn: "Inviabile, con avvisi", vOk: "Pronto per Apple e Spotify", aria: (n) => `Salute del feed: ${n} su 100`,
    xmlLabel: "Errore di parsing XML", xmlMsg: "Formattazione XML non valida. Assicurati che tutti i tag siano chiusi correttamente.", chLabel: "Elemento channel mancante", chMsg: "I feed RSS dei podcast devono contenere un tag <channel> principale dentro <rss>.",
    titleLabel: "Titolo del programma", titleOk: (t) => `Trovato: «${t}»`, titleMiss: "Tag obbligatorio <title> mancante.", descLabel: "Descrizione del programma", descOk: (n) => `Lunghezza: ${n} caratteri.`, descMiss: "Tag obbligatorio <description> mancante.",
    imgLabel: "Copertina del podcast", imgOk: (u) => `URL della copertina configurato con HTTPS: ${u}...`, imgWarn: "L'URL della copertina deve usare HTTPS per evitare il rifiuto da parte di Apple Podcasts.", imgMiss: "<itunes:image href='...'> mancante. Apple Podcasts rifiuterà questo feed.",
    catLabel: "Categoria iTunes", catOk: (t) => `Categoria principale: «${t}»`, catMiss: "<itunes:category text='...'> mancante.", expLabel: "Avviso per i genitori / tag esplicito", expOk: (t) => `Impostazione: «${t}»`, expWarn: "Tag di classificazione esplicita mancante. Valori consigliati: 'clean' o 'yes'.",
    langLabel: "Tag della lingua", langOk: (t) => `Lingua: ${t}`, langWarn: "<language> mancante (es. 'it-it').", epLabel: "Episodi audio", epOk: (n) => `Trovato/i ${n} episodio/i con link audio.`, epWarn: "Nessun elemento <item> trovato. Puoi inviare ad Apple un feed con un episodio trailer.",
    excLabel: "Eccezione di validazione", excFallback: "Impossibile analizzare il feed.",
    s: { title: "Podcast Segnale Profondo", desc: "Approfondimenti settimanali su intelligenza artificiale, startup e tecnologia creativa.", lang: "it-it", author: "Sarah Chen", epTitle: "Episodio 1: La frontiera dei modelli di IA locali", epDesc: "Esploriamo come l'IA sul dispositivo sta cambiando lo sviluppo software nel 2026." } },
  pt: { head: "Cole o XML RSS do seu podcast", loadSample: "Carregar feed de exemplo válido", ph: "Cole aqui o XML do feed RSS do seu podcast (começa com <?xml version='1.0' ...> <rss>)...", foot: "Validado 100% no seu navegador com o DOMParser padrão.", run: "Executar auditoria RSS",
    empty: "Cole seu feed (ou carregue o exemplo) e execute a auditoria — uma lista pontuada de todos os requisitos do Apple e do Spotify aparece aqui.", result: "Resultado da validação", defTitle: "Auditoria do feed RSS do podcast", det: ["", " episódio(s) detectado(s)"], pass: "Aprovado", warn: "Aviso", err: "Erro", recent: "Episódios recentes no feed", untitled: "Episódio sem título", na: "N/D",
    vFail: "Corrija os erros antes de enviar", vWarn: "Pode ser enviado, com avisos", vOk: "Pronto para Apple e Spotify", aria: (n) => `Saúde do feed: ${n} de 100`,
    xmlLabel: "Erro de análise XML", xmlMsg: "Formatação XML inválida. Verifique se todas as tags estão fechadas corretamente.", chLabel: "Elemento channel ausente", chMsg: "Feeds RSS de podcast devem conter uma tag <channel> pai dentro de <rss>.",
    titleLabel: "Título do programa", titleOk: (t) => `Encontrado: “${t}”`, titleMiss: "Tag obrigatória <title> ausente.", descLabel: "Descrição do programa", descOk: (n) => `Tamanho: ${n} caracteres.`, descMiss: "Tag obrigatória <description> ausente.",
    imgLabel: "Capa do podcast", imgOk: (u) => `URL da capa configurada com HTTPS: ${u}...`, imgWarn: "A URL da capa deve usar HTTPS para evitar rejeição pelo Apple Podcasts.", imgMiss: "<itunes:image href='...'> ausente. O Apple Podcasts rejeitará este feed.",
    catLabel: "Categoria do iTunes", catOk: (t) => `Categoria principal: “${t}”`, catMiss: "<itunes:category text='...'> ausente.", expLabel: "Classificação indicativa / tag explícita", expOk: (t) => `Configuração: “${t}”`, expWarn: "Tag de classificação explícita ausente. Valores recomendados: 'clean' ou 'yes'.",
    langLabel: "Tag de idioma", langOk: (t) => `Idioma: ${t}`, langWarn: "<language> ausente (ex.: 'pt-br').", epLabel: "Episódios de áudio", epOk: (n) => `Encontrado(s) ${n} episódio(s) com links de áudio.`, epWarn: "Nenhum elemento <item> encontrado. Você pode enviar ao Apple um feed com um episódio de trailer.",
    excLabel: "Exceção de validação", excFallback: "Falha ao analisar o feed.",
    s: { title: "Podcast Sinal Profundo", desc: "Mergulhos semanais em inteligência artificial, startups e tecnologia criativa.", lang: "pt-br", author: "Sarah Chen", epTitle: "Episódio 1: A fronteira dos modelos de IA locais", epDesc: "Exploramos como a IA no próprio dispositivo está transformando o desenvolvimento de software em 2026." } },
  ja: { head: "ポッドキャストのRSS XMLを貼り付け", loadSample: "有効なサンプルフィードを読み込む", ph: "ポッドキャストのRSSフィードXMLをここに貼り付けてください（<?xml version='1.0' ...> <rss> で始まります）…", foot: "標準のDOMParserを使い、100％ブラウザ内で検証します。", run: "RSS監査を実行",
    empty: "フィードを貼り付けて（またはサンプルを読み込んで）監査を実行すると、AppleとSpotifyの全要件のスコア付きチェックリストがここに表示されます。", result: "検証結果", defTitle: "ポッドキャストRSSフィード監査", det: ["", "件のエピソードを検出"], pass: "合格", warn: "警告", err: "エラー", recent: "フィード内の最新エピソード", untitled: "無題のエピソード", na: "なし",
    vFail: "提出前にエラーを修正してください", vWarn: "警告ありで提出可能", vOk: "AppleとSpotifyに提出可能", aria: (n) => `フィードの健全性：100点中${n}点`,
    xmlLabel: "XML解析エラー", xmlMsg: "XMLの形式が無効です。すべてのタグが正しく閉じられているか確認してください。", chLabel: "channel要素がありません", chMsg: "ポッドキャストのRSSフィードには、<rss>内に親となる<channel>タグが必要です。",
    titleLabel: "番組タイトル", titleOk: (t) => `検出：「${t}」`, titleMiss: "必須の<title>タグがありません。", descLabel: "番組の説明", descOk: (n) => `長さ：${n}文字。`, descMiss: "必須の<description>タグがありません。",
    imgLabel: "ポッドキャストのアートワーク", imgOk: (u) => `アートワークURLはHTTPSで設定されています：${u}...`, imgWarn: "Apple Podcastsに拒否されないよう、アートワークURLはHTTPSにしてください。", imgMiss: "<itunes:image href='...'>がありません。Apple Podcastsはこのフィードを拒否します。",
    catLabel: "iTunesカテゴリ", catOk: (t) => `メインカテゴリ：「${t}」`, catMiss: "<itunes:category text='...'>がありません。", expLabel: "保護者向け警告／Explicitタグ", expOk: (t) => `設定：「${t}」`, expWarn: "Explicit指定のタグがありません。推奨値：'clean'または'yes'。",
    langLabel: "言語タグ", langOk: (t) => `言語：${t}`, langWarn: "<language>がありません（例：'ja-jp'）。", epLabel: "音声エピソード", epOk: (n) => `音声エンクロージャーのリンク付きエピソードを${n}件検出しました。`, epWarn: "<item>要素が見つかりません。トレーラーエピソードのみのフィードをAppleに提出することもできます。",
    excLabel: "検証例外", excFallback: "フィードを解析できませんでした。",
    s: { title: "ディープ・シグナル・ポッドキャスト", desc: "人工知能、スタートアップ、クリエイティブ・テクノロジーを毎週深掘りします。", lang: "ja-jp", author: "サラ・チェン", epTitle: "第1回：ローカルAIモデルの最前線", epDesc: "2026年、オンデバイスAIがソフトウェア開発をどう変えているのかを探ります。" } },
  ko: { head: "팟캐스트 RSS XML 붙여넣기", loadSample: "유효한 샘플 피드 불러오기", ph: "팟캐스트 RSS 피드 XML을 여기에 붙여넣으세요 (<?xml version='1.0' ...> <rss>로 시작)...", foot: "표준 DOMParser를 사용해 100% 브라우저에서 검증합니다.", run: "RSS 점검 실행",
    empty: "피드를 붙여넣고(또는 샘플을 불러와) 점검을 실행하면, Apple과 Spotify의 모든 요건에 대한 점수 체크리스트가 여기에 표시됩니다.", result: "검증 결과", defTitle: "팟캐스트 RSS 피드 점검", det: ["에피소드 ", "개 감지됨"], pass: "통과", warn: "경고", err: "오류", recent: "피드의 최근 에피소드", untitled: "제목 없는 에피소드", na: "해당 없음",
    vFail: "제출 전에 오류를 수정하세요", vWarn: "경고가 있지만 제출 가능", vOk: "Apple 및 Spotify 제출 준비 완료", aria: (n) => `피드 상태: 100점 만점에 ${n}점`,
    xmlLabel: "XML 구문 분석 오류", xmlMsg: "XML 형식이 올바르지 않습니다. 모든 태그가 제대로 닫혔는지 확인하세요.", chLabel: "channel 요소 없음", chMsg: "팟캐스트 RSS 피드에는 <rss> 안에 상위 <channel> 태그가 있어야 합니다.",
    titleLabel: "프로그램 제목", titleOk: (t) => `발견됨: "${t}"`, titleMiss: "필수 <title> 태그가 없습니다.", descLabel: "프로그램 설명", descOk: (n) => `길이: ${n}자.`, descMiss: "필수 <description> 태그가 없습니다.",
    imgLabel: "팟캐스트 아트워크", imgOk: (u) => `아트워크 URL이 HTTPS로 설정됨: ${u}...`, imgWarn: "Apple Podcasts에서 거부되지 않도록 아트워크 URL은 HTTPS여야 합니다.", imgMiss: "<itunes:image href='...'>가 없습니다. Apple Podcasts가 이 피드를 거부합니다.",
    catLabel: "iTunes 카테고리", catOk: (t) => `기본 카테고리: "${t}"`, catMiss: "<itunes:category text='...'>가 없습니다.", expLabel: "청소년 유해 / 명시적 콘텐츠 태그", expOk: (t) => `설정: "${t}"`, expWarn: "명시적 콘텐츠 등급 태그가 없습니다. 권장 값: 'clean' 또는 'yes'.",
    langLabel: "언어 태그", langOk: (t) => `언어: ${t}`, langWarn: "<language>가 없습니다 (예: 'ko-kr').", epLabel: "오디오 에피소드", epOk: (n) => `오디오 인클로저 링크가 있는 에피소드 ${n}개를 찾았습니다.`, epWarn: "<item> 요소를 찾을 수 없습니다. Apple에 트레일러 에피소드만 있는 피드를 제출할 수도 있습니다.",
    excLabel: "검증 예외", excFallback: "피드를 분석하지 못했습니다.",
    s: { title: "딥 시그널 팟캐스트", desc: "인공지능, 스타트업, 크리에이티브 기술을 매주 깊이 있게 다룹니다.", lang: "ko-kr", author: "사라 천", epTitle: "1화: 로컬 AI 모델의 최전선", epDesc: "2026년 온디바이스 AI가 소프트웨어 개발을 어떻게 바꾸고 있는지 살펴봅니다." } },
};

/** Feed health ring: pass = 1, warning = 0.5, error = 0 */
function HealthRing({ items, ui }: { items: ValidationItem[]; ui: RssText }) {
  const pass = items.filter((i) => i.status === "pass").length;
  const warn = items.filter((i) => i.status === "warn").length;
  const fail = items.filter((i) => i.status === "fail").length;
  const score = items.length ? Math.round(((pass + warn * 0.5) / items.length) * 100) : 0;
  const r = 26;
  const c = 2 * Math.PI * r;
  const color = fail > 0 ? "#dc2626" : warn > 0 ? "#d97706" : "#059669";
  const verdict = fail > 0 ? ui.vFail : warn > 0 ? ui.vWarn : ui.vOk;

  return (
    <div className="flex items-center gap-3">
      <svg width="64" height="64" viewBox="0 0 64 64" role="img" aria-label={ui.aria(score)}>
        <circle cx="32" cy="32" r={r} fill="none" strokeWidth="6" className="stroke-neutral-200 dark:stroke-neutral-800" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${(score / 100) * c} ${c}`}
          transform="rotate(-90 32 32)"
          style={{ transition: "stroke-dasharray 600ms ease" }}
        />
        <text x="32" y="36.5" textAnchor="middle" fontSize="15" fontWeight="700" className="fill-neutral-900 dark:fill-white">
          {score}
        </text>
      </svg>
      <div className="space-y-1">
        <span className="block text-xs font-semibold text-neutral-900 dark:text-white">{verdict}</span>
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-3 h-3" />{pass}</span>
          <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400"><AlertTriangle className="w-3 h-3" />{warn}</span>
          <span className="inline-flex items-center gap-1 text-red-600 dark:text-red-400"><XCircle className="w-3 h-3" />{fail}</span>
        </div>
      </div>
    </div>
  );
}

interface ValidationItem {
  tag: string;
  label: string;
  status: "pass" | "warn" | "fail";
  message: string;
}

export function RssFeedValidator({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [feedXml, setFeedXml] = useState<string>("");
  const [results, setResults] = useState<{
    showTitle?: string;
    description?: string;
    episodeCount: number;
    items: ValidationItem[];
    episodes: Array<{ title: string; date: string; audioUrl: string }>;
  } | null>(null);

  const sampleValidFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${ui.s.title}</title>
    <link>https://deepsignal.example</link>
    <description>${ui.s.desc}</description>
    <language>${ui.s.lang}</language>
    <itunes:author>${ui.s.author}</itunes:author>
    <itunes:image href="https://deepsignal.example/cover-3000.jpg" />
    <itunes:category text="Technology">
      <itunes:category text="Tech News" />
    </itunes:category>
    <itunes:explicit>clean</itunes:explicit>
    <item>
      <title>${ui.s.epTitle}</title>
      <description>${ui.s.epDesc}</description>
      <pubDate>Sun, 25 Oct 2026 14:00:00 GMT</pubDate>
      <enclosure url="https://deepsignal.example/ep1.mp3" length="45210000" type="audio/mpeg" />
      <itunes:duration>42:15</itunes:duration>
      <itunes:explicit>clean</itunes:explicit>
    </item>
  </channel>
</rss>`;

  const handleValidate = () => {
    if (!feedXml.trim()) return;

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(feedXml, "application/xml");

      const parserError = doc.querySelector("parsererror");
      if (parserError) {
        setResults({
          episodeCount: 0,
          items: [
            {
              tag: "XML Syntax",
              label: ui.xmlLabel,
              status: "fail",
              message: ui.xmlMsg,
            },
          ],
          episodes: [],
        });
        return;
      }

      const channel = doc.querySelector("channel");
      if (!channel) {
        setResults({
          episodeCount: 0,
          items: [
            {
              tag: "channel",
              label: ui.chLabel,
              status: "fail",
              message: ui.chMsg,
            },
          ],
          episodes: [],
        });
        return;
      }

      const checkList: ValidationItem[] = [];

      // 1. Title
      const titleEl = channel.querySelector("title");
      const titleText = titleEl?.textContent?.trim() || "";
      if (titleText) {
        checkList.push({
          tag: "<title>",
          label: ui.titleLabel,
          status: "pass",
          message: ui.titleOk(titleText),
        });
      } else {
        checkList.push({
          tag: "<title>",
          label: ui.titleLabel,
          status: "fail",
          message: ui.titleMiss,
        });
      }

      // 2. Description
      const descEl = channel.querySelector("description");
      const descText = descEl?.textContent?.trim() || "";
      if (descText) {
        checkList.push({
          tag: "<description>",
          label: ui.descLabel,
          status: "pass",
          message: ui.descOk(descText.length),
        });
      } else {
        checkList.push({
          tag: "<description>",
          label: ui.descLabel,
          status: "fail",
          message: ui.descMiss,
        });
      }

      // 3. iTunes Image
      const imageEl = channel.getElementsByTagName("itunes:image")[0];
      const imageHref = imageEl?.getAttribute("href") || "";
      if (imageHref) {
        const isHttps = imageHref.startsWith("https://");
        checkList.push({
          tag: "<itunes:image>",
          label: ui.imgLabel,
          status: isHttps ? "pass" : "warn",
          message: isHttps ? ui.imgOk(imageHref.slice(0, 40)) : ui.imgWarn,
        });
      } else {
        checkList.push({
          tag: "<itunes:image>",
          label: ui.imgLabel,
          status: "fail",
          message: ui.imgMiss,
        });
      }

      // 4. Category
      const catEl = channel.getElementsByTagName("itunes:category")[0];
      const catText = catEl?.getAttribute("text") || "";
      if (catText) {
        checkList.push({
          tag: "<itunes:category>",
          label: ui.catLabel,
          status: "pass",
          message: ui.catOk(catText),
        });
      } else {
        checkList.push({
          tag: "<itunes:category>",
          label: ui.catLabel,
          status: "fail",
          message: ui.catMiss,
        });
      }

      // 5. Explicit tag
      const explicitEl = channel.getElementsByTagName("itunes:explicit")[0];
      const explicitText = explicitEl?.textContent?.toLowerCase().trim();
      if (explicitText === "clean" || explicitText === "yes" || explicitText === "no") {
        checkList.push({
          tag: "<itunes:explicit>",
          label: ui.expLabel,
          status: "pass",
          message: ui.expOk(explicitText),
        });
      } else {
        checkList.push({
          tag: "<itunes:explicit>",
          label: ui.expLabel,
          status: "warn",
          message: ui.expWarn,
        });
      }

      // 6. Language tag
      const langEl = channel.querySelector("language");
      if (langEl?.textContent?.trim()) {
        checkList.push({
          tag: "<language>",
          label: ui.langLabel,
          status: "pass",
          message: ui.langOk(langEl.textContent.trim()),
        });
      } else {
        checkList.push({
          tag: "<language>",
          label: ui.langLabel,
          status: "warn",
          message: ui.langWarn,
        });
      }

      // Episode Items
      const items = channel.querySelectorAll("item");
      const epList: Array<{ title: string; date: string; audioUrl: string }> = [];

      items.forEach((item) => {
        const epTitle = item.querySelector("title")?.textContent || ui.untitled;
        const pubDate = item.querySelector("pubDate")?.textContent || ui.na;
        const enclosure = item.querySelector("enclosure");
        const audioUrl = enclosure?.getAttribute("url") || "";

        epList.push({
          title: epTitle,
          date: pubDate,
          audioUrl,
        });
      });

      if (items.length > 0) {
        checkList.push({
          tag: "<item> Enclosures",
          label: ui.epLabel,
          status: "pass",
          message: ui.epOk(items.length),
        });
      } else {
        checkList.push({
          tag: "<item> Enclosures",
          label: ui.epLabel,
          status: "warn",
          message: ui.epWarn,
        });
      }

      setResults({
        showTitle: titleText,
        description: descText,
        episodeCount: items.length,
        items: checkList,
        episodes: epList,
      });
    } catch (err: any) {
      setResults({
        episodeCount: 0,
        items: [
          {
            tag: "Error",
            label: ui.excLabel,
            status: "fail",
            message: err?.message || ui.excFallback,
          },
        ],
        episodes: [],
      });
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Input Section */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-studio-border/60">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <Rss className="w-4 h-4 text-orange-400" />
            {ui.head}
          </h2>
          <button
            onClick={() => {
              setFeedXml(sampleValidFeed);
            }}
            className="text-xs text-orange-400 hover:text-orange-300 font-medium inline-flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> {ui.loadSample}
          </button>
        </div>

        <div className="space-y-1.5">
          <textarea
            rows={8}
            value={feedXml}
            onChange={(e) => setFeedXml(e.target.value)}
            placeholder={ui.ph}
            className="w-full px-4 py-3 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white font-mono text-xs focus:outline-none focus:border-orange-500/70"
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] text-neutral-500">
            {ui.foot}
          </span>
          <button
            onClick={handleValidate}
            className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all cursor-pointer"
          >
            {ui.run}
          </button>
        </div>
      </div>

      {/* Empty state: skeleton of the report that will appear */}
      {!results && (
        <div className="p-6 rounded-2xl border border-dashed border-studio-border bg-studio-card/40 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center shrink-0">
            <ClipboardCheck className="w-7 h-7" />
          </div>
          <div className="flex-1 w-full space-y-2" aria-hidden="true">
            {["w-2/3", "w-1/2", "w-3/4", "w-2/5"].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                <span className={`h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 ${w}`} />
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 max-w-[220px] text-center sm:text-left">
            {ui.empty}
          </p>
        </div>
      )}

      {/* Audit Report */}
      {results && (
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-studio-border/60">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-slate-400 block">
                {ui.result}
              </span>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                {results.showTitle || ui.defTitle}
              </h3>
            </div>
            <div className="flex flex-col sm:items-end gap-1.5">
              <HealthRing items={results.items} ui={ui} />
              <div className="text-xs text-neutral-600 dark:text-slate-400">
                {ui.det[0]}<span className="font-semibold text-neutral-900 dark:text-white">{results.episodeCount}</span>{ui.det[1]}
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-2.5">
            {results.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-studio-darkest border border-studio-border/80 flex items-start justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900 dark:text-white">{item.label}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-studio-card text-neutral-600 dark:text-slate-400 border border-studio-border">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-slate-400">{item.message}</p>
                </div>

                <div className="flex-shrink-0">
                  {item.status === "pass" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {ui.pass}
                    </span>
                  )}
                  {item.status === "warn" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      <AlertTriangle className="w-3.5 h-3.5" /> {ui.warn}
                    </span>
                  )}
                  {item.status === "fail" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                      <XCircle className="w-3.5 h-3.5" /> {ui.err}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Episode List Preview */}
          {results.episodes.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-studio-border/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                {ui.recent}
              </h4>
              <div className="space-y-2">
                {results.episodes.slice(0, 5).map((ep, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-studio-darkest/70 border border-studio-border/60 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="font-semibold text-neutral-900 dark:text-slate-200 line-clamp-1">{ep.title}</span>
                    <span className="text-[11px] text-neutral-500 font-mono whitespace-nowrap">
                      {ep.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

