import type { SupportedLocale } from "@/i18n/languages";

/** Interface copy for the Script Timer (ScriptTimer.tsx), in all 8 site languages. */
export interface ScriptTimerText {
  pace: string;
  paces: { slow: string; natural: string; fast: string };
  customPace: string;
  /** Rate unit shown after the pace number */
  perMinute: { words: string; chars: string };
  /** Plural unit nouns used inside sentences */
  unitNoun: { words: string; chars: string };
  /** Column / stat labels */
  unitLabel: { words: string; chars: string };
  script: string;
  placeholder: string;
  example: string;
  clear: string;
  skipCues: string;
  speakingTime: string;
  /** {time} */
  withExtra: string;
  emptyHint: string;
  paragraphs: string;
  extra: string;
  minutes: string;
  target: string;
  targetMinutes: string;
  onTarget: string;
  /** {time} {n} {unit} */
  over: string;
  /** {time} {n} {unit} */
  under: string;
  /** {unit} {target} */
  needed: string;
  yourPace: string;
  runOfShow: string;
  segment: string;
  starts: string;
  length: string;
  opening: string;
  musicAds: string;
  targetMark: string;
  note: string;
  sample: string;
}

export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}

export const SCRIPT_TIMER_TEXT: Record<SupportedLocale, ScriptTimerText> = {
  en: {
    pace: "Speaking pace",
    paces: { slow: "Slow", natural: "Natural", fast: "Fast" },
    customPace: "Custom pace",
    perMinute: { words: "words/min", chars: "characters/min" },
    unitNoun: { words: "words", chars: "characters" },
    unitLabel: { words: "Words", chars: "Characters" },
    script: "Your script",
    placeholder: "Paste or type your script here. Start a line with # to mark a new segment, as in the Episode Outline Builder export.",
    example: "Try an example",
    clear: "Clear",
    skipCues: "Don't count [bracketed cues] or speaker labels such as HOST:",
    speakingTime: "Speaking time",
    withExtra: "{time} with music and ad breaks",
    emptyHint: "Paste a script to see how long it runs.",
    paragraphs: "Paragraphs",
    extra: "Music and ad breaks",
    minutes: "min",
    target: "Target length",
    targetMinutes: "Custom target in minutes",
    onTarget: "Right on target.",
    over: "{time} over the target. Cut about {n} {unit}.",
    under: "{time} under the target. Room for about {n} more {unit}.",
    needed: "{unit} needed for {target}",
    yourPace: "Your pace",
    runOfShow: "Run of show",
    segment: "Segment",
    starts: "Starts",
    length: "Length",
    opening: "Opening",
    musicAds: "Music & ads",
    targetMark: "Target",
    note: "Times are estimates at a steady pace. For the most accurate result, read one minute of your script aloud with a timer and enter that count as your custom pace.",
    sample: `# Cold open
[THEME MUSIC FADES IN]
HOST: What if the best part of your episode is the part nobody hears, because they left in the first minute?

# Main topic
Today we're looking at why the first sixty seconds decide whether a new listener stays. We'll cover three habits: getting to the point fast, telling people what they'll get, and saving the housekeeping for later.

# Outro
That's it for this week. If this helped, share it with one friend who's starting a show.
[MUSIC OUT]`,
  },
  es: {
    pace: "Ritmo al hablar",
    paces: { slow: "Lento", natural: "Natural", fast: "Rápido" },
    customPace: "Ritmo personalizado",
    perMinute: { words: "palabras/min", chars: "caracteres/min" },
    unitNoun: { words: "palabras", chars: "caracteres" },
    unitLabel: { words: "Palabras", chars: "Caracteres" },
    script: "Tu guion",
    placeholder: "Pega o escribe aquí tu guion. Empieza una línea con # para marcar un nuevo segmento, como en la exportación del Creador de Escaletas.",
    example: "Probar un ejemplo",
    clear: "Borrar",
    skipCues: "No contar [indicaciones entre corchetes] ni etiquetas de locutor como HOST:",
    speakingTime: "Tiempo de lectura",
    withExtra: "{time} con música y pausas publicitarias",
    emptyHint: "Pega un guion para ver cuánto dura.",
    paragraphs: "Párrafos",
    extra: "Música y pausas publicitarias",
    minutes: "min",
    target: "Duración objetivo",
    targetMinutes: "Objetivo personalizado en minutos",
    onTarget: "Justo en el objetivo.",
    over: "{time} por encima del objetivo. Recorta alrededor de {n} {unit}.",
    under: "{time} por debajo del objetivo. Caben alrededor de {n} {unit} más.",
    needed: "{unit} para {target}",
    yourPace: "Tu ritmo",
    runOfShow: "Escaleta",
    segment: "Segmento",
    starts: "Empieza",
    length: "Duración",
    opening: "Apertura",
    musicAds: "Música y anuncios",
    targetMark: "Objetivo",
    note: "Los tiempos son estimaciones a un ritmo constante. Para mayor precisión, lee en voz alta un minuto de tu guion con un cronómetro e introduce esa cifra como ritmo personalizado.",
    sample: `# Apertura en frío
[ENTRA LA MÚSICA DE CABECERA]
HOST: ¿Y si la mejor parte de tu episodio es la que nadie escucha porque se fueron en el primer minuto?

# Tema principal
Hoy vemos por qué los primeros sesenta segundos deciden si un oyente nuevo se queda. Veremos tres hábitos: ir al grano, decir qué van a obtener y dejar los avisos para después.

# Cierre
Eso es todo por esta semana. Si te ha servido, compártelo con un amigo que esté empezando un programa.
[SALE LA MÚSICA]`,
  },
  ja: {
    pace: "話す速さ",
    paces: { slow: "ゆっくり", natural: "標準", fast: "速め" },
    customPace: "カスタムの速さ",
    perMinute: { words: "語/分", chars: "文字/分" },
    unitNoun: { words: "語", chars: "文字" },
    unitLabel: { words: "語数", chars: "文字数" },
    script: "台本",
    placeholder: "台本をここに貼り付けるか入力してください。行頭に # を付けると新しいセグメントになります（エピソード構成ビルダーの書き出しと同じ形式）。",
    example: "例文を試す",
    clear: "クリア",
    skipCues: "［角かっこ］内の指示や「ホスト：」のような話者名を数えない",
    speakingTime: "読み上げ時間",
    withExtra: "音楽・広告枠を含めて {time}",
    emptyHint: "台本を貼り付けると、読み上げ時間が表示されます。",
    paragraphs: "段落",
    extra: "音楽・広告枠",
    minutes: "分",
    target: "目標の長さ",
    targetMinutes: "目標時間（分）を入力",
    onTarget: "目標どおりです。",
    over: "目標より {time} 長いです。約{n}{unit}削りましょう。",
    under: "目標より {time} 短いです。あと約{n}{unit}追加できます。",
    needed: "{target} に必要な{unit}",
    yourPace: "あなたの速さ",
    runOfShow: "進行表",
    segment: "セグメント",
    starts: "開始",
    length: "長さ",
    opening: "オープニング",
    musicAds: "音楽・広告",
    targetMark: "目標",
    note: "時間は一定の速さで話した場合の目安です。より正確に知るには、台本を1分間声に出して読み、その文字数をカスタムの速さに入力してください。",
    sample: `# コールドオープン
［テーマ曲 フェードイン］
ホスト：もしエピソードで一番いい部分を、誰も聞いていなかったら？最初の1分で離脱していたとしたら？

# 本題
今日は、新しいリスナーが聞き続けるかどうかを最初の60秒が決める理由を見ていきます。すぐに本題に入ること、何が得られるかを伝えること、お知らせは後に回すこと。この3つの習慣を紹介します。

# エンディング
今週はここまでです。役に立ったら、番組を始めたばかりの友だちにぜひシェアしてください。
［音楽 アウト］`,
  },
  fr: {
    pace: "Débit de parole",
    paces: { slow: "Lent", natural: "Naturel", fast: "Rapide" },
    customPace: "Débit personnalisé",
    perMinute: { words: "mots/min", chars: "caractères/min" },
    unitNoun: { words: "mots", chars: "caractères" },
    unitLabel: { words: "Mots", chars: "Caractères" },
    script: "Votre script",
    placeholder: "Collez ou tapez votre script ici. Commencez une ligne par # pour marquer un nouveau segment, comme dans l'export du Créateur de Conducteur.",
    example: "Essayer un exemple",
    clear: "Effacer",
    skipCues: "Ne pas compter les [indications entre crochets] ni les noms d'intervenants comme HOST :",
    speakingTime: "Temps de lecture",
    withExtra: "{time} avec musique et pauses publicitaires",
    emptyHint: "Collez un script pour voir sa durée.",
    paragraphs: "Paragraphes",
    extra: "Musique et pauses publicitaires",
    minutes: "min",
    target: "Durée cible",
    targetMinutes: "Cible personnalisée en minutes",
    onTarget: "Pile dans la cible.",
    over: "{time} au-dessus de la cible. Coupez environ {n} {unit}.",
    under: "{time} en dessous de la cible. Vous pouvez ajouter environ {n} {unit}.",
    needed: "{unit} pour {target}",
    yourPace: "Votre débit",
    runOfShow: "Conducteur",
    segment: "Segment",
    starts: "Début",
    length: "Durée",
    opening: "Ouverture",
    musicAds: "Musique et pubs",
    targetMark: "Cible",
    note: "Les durées sont estimées pour un débit régulier. Pour plus de précision, lisez une minute de votre script à voix haute avec un chronomètre et saisissez ce nombre comme débit personnalisé.",
    sample: `# Accroche
[LA MUSIQUE DU GÉNÉRIQUE MONTE]
HOST : Et si le meilleur moment de votre épisode était celui que personne n'entend, parce que tout le monde est parti dès la première minute ?

# Sujet principal
Aujourd'hui, on voit pourquoi les soixante premières secondes décident si un nouvel auditeur reste. Trois habitudes : aller droit au but, dire ce qu'on va apprendre et garder les annonces pour plus tard.

# Conclusion
C'est tout pour cette semaine. Si cet épisode vous a aidé, partagez-le avec un ami qui lance son émission.
[FIN DE LA MUSIQUE]`,
  },
  de: {
    pace: "Sprechtempo",
    paces: { slow: "Langsam", natural: "Natürlich", fast: "Schnell" },
    customPace: "Eigenes Tempo",
    perMinute: { words: "Wörter/Min.", chars: "Zeichen/Min." },
    unitNoun: { words: "Wörter", chars: "Zeichen" },
    unitLabel: { words: "Wörter", chars: "Zeichen" },
    script: "Dein Skript",
    placeholder: "Füge dein Skript hier ein oder tippe es. Beginne eine Zeile mit #, um ein neues Segment zu markieren – wie im Export des Episoden-Ablauf-Planers.",
    example: "Beispiel ausprobieren",
    clear: "Leeren",
    skipCues: "[Regieanweisungen in Klammern] und Sprecherangaben wie HOST: nicht mitzählen",
    speakingTime: "Sprechdauer",
    withExtra: "{time} mit Musik und Werbepausen",
    emptyHint: "Füge ein Skript ein, um zu sehen, wie lange es dauert.",
    paragraphs: "Absätze",
    extra: "Musik und Werbepausen",
    minutes: "Min.",
    target: "Ziellänge",
    targetMinutes: "Eigene Ziellänge in Minuten",
    onTarget: "Genau im Ziel.",
    over: "{time} über dem Ziel. Kürze etwa {n} {unit}.",
    under: "{time} unter dem Ziel. Platz für etwa {n} weitere {unit}.",
    needed: "Benötigte {unit} für {target}",
    yourPace: "Dein Tempo",
    runOfShow: "Ablaufplan",
    segment: "Segment",
    starts: "Beginn",
    length: "Dauer",
    opening: "Einstieg",
    musicAds: "Musik & Werbung",
    targetMark: "Ziel",
    note: "Die Zeiten sind Schätzungen bei gleichmäßigem Tempo. Am genauesten wird es, wenn du eine Minute deines Skripts mit Stoppuhr laut vorliest und diese Zahl als eigenes Tempo einträgst.",
    sample: `# Cold Open
[TITELMUSIK BLENDET EIN]
HOST: Was, wenn der beste Teil deiner Folge der ist, den niemand hört, weil alle schon in der ersten Minute abgesprungen sind?

# Hauptthema
Heute schauen wir uns an, warum die ersten sechzig Sekunden entscheiden, ob neue Hörer bleiben. Drei Gewohnheiten helfen: schnell auf den Punkt kommen, sagen, was man bekommt, und Hinweise auf später verschieben.

# Outro
Das war's für diese Woche. Wenn dir die Folge geholfen hat, teile sie mit einer Freundin oder einem Freund, die gerade einen Podcast starten.
[MUSIK AUS]`,
  },
  pt: {
    pace: "Ritmo de fala",
    paces: { slow: "Lento", natural: "Natural", fast: "Rápido" },
    customPace: "Ritmo personalizado",
    perMinute: { words: "palavras/min", chars: "caracteres/min" },
    unitNoun: { words: "palavras", chars: "caracteres" },
    unitLabel: { words: "Palavras", chars: "Caracteres" },
    script: "Seu roteiro",
    placeholder: "Cole ou digite seu roteiro aqui. Comece uma linha com # para marcar um novo segmento, como na exportação do Criador de Pautas.",
    example: "Testar um exemplo",
    clear: "Limpar",
    skipCues: "Não contar [indicações entre colchetes] nem nomes de locutor como HOST:",
    speakingTime: "Tempo de fala",
    withExtra: "{time} com música e intervalos comerciais",
    emptyHint: "Cole um roteiro para ver quanto tempo ele dura.",
    paragraphs: "Parágrafos",
    extra: "Música e intervalos comerciais",
    minutes: "min",
    target: "Duração-alvo",
    targetMinutes: "Duração-alvo personalizada em minutos",
    onTarget: "Exatamente no alvo.",
    over: "{time} acima do alvo. Corte cerca de {n} {unit}.",
    under: "{time} abaixo do alvo. Cabem cerca de {n} {unit} a mais.",
    needed: "{unit} para {target}",
    yourPace: "Seu ritmo",
    runOfShow: "Espelho do episódio",
    segment: "Segmento",
    starts: "Início",
    length: "Duração",
    opening: "Abertura",
    musicAds: "Música e anúncios",
    targetMark: "Alvo",
    note: "Os tempos são estimativas em ritmo constante. Para mais precisão, leia em voz alta um minuto do seu roteiro com um cronômetro e informe esse número como ritmo personalizado.",
    sample: `# Abertura
[ENTRA A MÚSICA TEMA]
HOST: E se a melhor parte do seu episódio for aquela que ninguém ouve, porque todo mundo saiu no primeiro minuto?

# Tema principal
Hoje vamos ver por que os primeiros sessenta segundos decidem se um ouvinte novo fica. São três hábitos: ir direto ao ponto, dizer o que a pessoa vai ganhar e deixar os avisos para depois.

# Encerramento
É isso por esta semana. Se este episódio ajudou, compartilhe com um amigo que está começando um programa.
[SAI A MÚSICA]`,
  },
  ko: {
    pace: "말하기 속도",
    paces: { slow: "느리게", natural: "보통", fast: "빠르게" },
    customPace: "직접 입력",
    perMinute: { words: "단어/분", chars: "글자/분" },
    unitNoun: { words: "단어", chars: "글자" },
    unitLabel: { words: "단어 수", chars: "글자 수" },
    script: "대본",
    placeholder: "대본을 여기에 붙여넣거나 입력하세요. 줄 앞에 #을 붙이면 새 구간이 됩니다(에피소드 구성표 작성기 내보내기와 같은 형식).",
    example: "예시 사용해 보기",
    clear: "지우기",
    skipCues: "[대괄호 안의 지시]와 '진행자:' 같은 화자 표시는 세지 않기",
    speakingTime: "읽는 시간",
    withExtra: "음악·광고 포함 {time}",
    emptyHint: "대본을 붙여넣으면 길이를 확인할 수 있습니다.",
    paragraphs: "문단",
    extra: "음악·광고 시간",
    minutes: "분",
    target: "목표 길이",
    targetMinutes: "목표 길이 직접 입력(분)",
    onTarget: "목표에 딱 맞습니다.",
    over: "목표보다 {time} 깁니다. 약 {n}{unit}를 줄이세요.",
    under: "목표보다 {time} 짧습니다. 약 {n}{unit}를 더 넣을 수 있습니다.",
    needed: "{target}에 필요한 {unit}",
    yourPace: "내 속도",
    runOfShow: "진행표",
    segment: "구간",
    starts: "시작",
    length: "길이",
    opening: "오프닝",
    musicAds: "음악·광고",
    targetMark: "목표",
    note: "시간은 일정한 속도로 말한다고 가정한 추정치입니다. 더 정확하게 하려면 대본을 1분 동안 소리 내어 읽고, 읽은 글자 수를 직접 입력 칸에 넣으세요. 글자 수는 공백과 문장 부호를 제외합니다.",
    sample: `# 콜드 오픈
[테마 음악 페이드 인]
진행자: 에피소드에서 가장 좋은 부분을 아무도 듣지 못한다면요? 다들 첫 1분 만에 나가 버렸다면요?

# 본론
오늘은 새 청취자가 계속 들을지를 왜 첫 60초가 결정하는지 살펴봅니다. 바로 본론으로 들어가기, 무엇을 얻을 수 있는지 알려 주기, 공지는 뒤로 미루기. 이 세 가지 습관을 소개합니다.

# 마무리
이번 주는 여기까지입니다. 도움이 되었다면 팟캐스트를 막 시작한 친구에게 공유해 주세요.
[음악 아웃]`,
  },
  it: {
    pace: "Velocità di lettura",
    paces: { slow: "Lenta", natural: "Naturale", fast: "Veloce" },
    customPace: "Velocità personalizzata",
    perMinute: { words: "parole/min", chars: "caratteri/min" },
    unitNoun: { words: "parole", chars: "caratteri" },
    unitLabel: { words: "Parole", chars: "Caratteri" },
    script: "Il tuo script",
    placeholder: "Incolla o scrivi qui il tuo script. Inizia una riga con # per segnare un nuovo segmento, come nell'esportazione di Scaletta Episodio.",
    example: "Prova un esempio",
    clear: "Cancella",
    skipCues: "Non contare le [indicazioni tra parentesi quadre] né i nomi di chi parla come HOST:",
    speakingTime: "Tempo di lettura",
    withExtra: "{time} con musica e pause pubblicitarie",
    emptyHint: "Incolla uno script per vedere quanto dura.",
    paragraphs: "Paragrafi",
    extra: "Musica e pause pubblicitarie",
    minutes: "min",
    target: "Durata obiettivo",
    targetMinutes: "Obiettivo personalizzato in minuti",
    onTarget: "Perfettamente in linea con l'obiettivo.",
    over: "{time} oltre l'obiettivo. Taglia circa {n} {unit}.",
    under: "{time} sotto l'obiettivo. C'è spazio per circa {n} {unit} in più.",
    needed: "{unit} per {target}",
    yourPace: "La tua velocità",
    runOfShow: "Scaletta",
    segment: "Segmento",
    starts: "Inizio",
    length: "Durata",
    opening: "Apertura",
    musicAds: "Musica e spot",
    targetMark: "Obiettivo",
    note: "I tempi sono stime a velocità costante. Per un risultato più preciso, leggi ad alta voce un minuto del tuo script con un cronometro e inserisci quel numero come velocità personalizzata.",
    sample: `# Apertura
[ENTRA LA SIGLA]
HOST: E se la parte migliore del tuo episodio fosse quella che nessuno sente, perché se ne sono andati tutti nel primo minuto?

# Argomento principale
Oggi vediamo perché i primi sessanta secondi decidono se un nuovo ascoltatore resta. Tre abitudini: arrivare subito al punto, dire cosa si otterrà e lasciare gli avvisi per dopo.

# Chiusura
Per questa settimana è tutto. Se l'episodio ti è stato utile, condividilo con un amico che sta avviando un podcast.
[ESCE LA MUSICA]`,
  },
};
