"use client";

import React, { useState, useMemo } from "react";
import { HelpCircle, Copy, Check, Download, Sparkles, Filter, Bookmark } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

export type QuestionCategory = "Icebreaker" | "Tactical" | "Failure & Pivot" | "Hot Take" | "Closing";

export interface QuestionItem {
  question: string;
  category: QuestionCategory;
  context: string;
}

interface GuestQuestionGeneratorProps {
  lang?: SupportedLocale;
}

interface QuestionDictionary {
  guestNameLabel: string;
  professionLabel: string;
  topicLabel: string;
  filterLabel: string;
  allQuestions: string;
  categories: Record<QuestionCategory, string>;
  copyPrepSheet: string;
  copiedPrepSheet: string;
  exportTxt: string;
  copy: string;
  copied: string;
  whyItWorks: string;
  defaultGuest: string;
  defaultProfession: string;
  defaultTopic: string;
  prepSheetHeader: string;
  questions: Array<{
    question: (g: string, p: string, t: string) => string;
    category: QuestionCategory;
    context: string;
  }>;
}

const DICTIONARY: Record<SupportedLocale, QuestionDictionary> = {
  en: {
    guestNameLabel: "Guest Name",
    professionLabel: "Profession / Role",
    topicLabel: "Core Episode Topic",
    filterLabel: "Interview Arc",
    allQuestions: "All Questions",
    categories: {
      "Icebreaker": "Icebreaker",
      "Tactical": "Tactical",
      "Failure & Pivot": "Failure & Pivot",
      "Hot Take": "Hot Take",
      "Closing": "Closing",
    },
    copyPrepSheet: "Copy Prep Sheet",
    copiedPrepSheet: "Copied Prep Sheet!",
    exportTxt: "Export TXT",
    copy: "Copy",
    copied: "Copied!",
    whyItWorks: "Why it works:",
    defaultGuest: "Alex Hormozi",
    defaultProfession: "Entrepreneur & Investor",
    defaultTopic: "Bootstrapping to $100M",
    prepSheetHeader: "PODCAST INTERVIEW PREP SHEET - POD STUDIO",
    questions: [
      {
        question: (g, p, t) => `When you look back at your first year in ${t}, what is one belief you held that you now find completely ridiculous?`,
        category: "Icebreaker",
        context: "Reveals personal growth and breaks the guest out of rehearsed PR talking points.",
      },
      {
        question: (g, p, t) => `What was the very first dollar you ever earned from ${t}, and how did that moment feel?`,
        category: "Icebreaker",
        context: "Taps into origin nostalgia and creates instant emotional connection with the audience.",
      },
      {
        question: (g, p, t) => `What is one question you wish interviewers asked you that nobody ever does?`,
        category: "Icebreaker",
        context: "Gives the guest permission to discuss their favorite unscripted passion project.",
      },
      {
        question: (g, p, t) => `If you had to recreate your success in ${t} starting today with $1,000 and zero network, what are the first 3 things you would do?`,
        category: "Tactical",
        context: "Forces actionable, non-fluffy frameworks listeners can execute immediately.",
      },
      {
        question: (g, p, t) => `What does your actual day-to-day workflow look like when you're executing deep work in ${t}?`,
        category: "Tactical",
        context: "Peeks behind the curtain into calendar discipline and operational habits.",
      },
      {
        question: (g, p, t) => `What is a tool, software, or framework in ${t} that feels like an unfair advantage for your team?`,
        category: "Tactical",
        context: "Listeners love specific software recommendations and proprietary setups.",
      },
      {
        question: (g, p, t) => `Take us to the darkest moment you experienced while building in ${t}—the moment you genuinely contemplated walking away.`,
        category: "Failure & Pivot",
        context: "Explores authentic vulnerability and emotional resilience under high stakes.",
      },
      {
        question: (g, p, t) => `What is the most expensive mistake you've made in ${t}, and what did the tuition cost you?`,
        category: "Failure & Pivot",
        context: "Extracts hard-won lessons so listeners don't repeat the same error.",
      },
      {
        question: (g, p, t) => `Who in ${p} did you once admire that you now see through a very different lens?`,
        category: "Failure & Pivot",
        context: "Generates high curiosity and honest evaluations of industry dogma.",
      },
      {
        question: (g, p, t) => `What is an industry consensus in ${t} that everyone agrees with, but you are 100% convinced is dead wrong?`,
        category: "Hot Take",
        context: "Creates viral audio clips and strong contrarian debate.",
      },
      {
        question: (g, p, t) => `If you could ban one buzzword or phrase from ${p}, what would it be?`,
        category: "Hot Take",
        context: "Lighthearted but reveals authentic frustration with industry clichés.",
      },
      {
        question: (g, p, t) => `Where will ${t} be in 5 years, and who is going to be wiped out by that shift?`,
        category: "Hot Take",
        context: "Positions the guest as a visionary predicting macro trends and disruptions.",
      },
      {
        question: (g, p, t) => `If this was the final interview you ever gave on ${t}, what is the one lesson you want etched into the listener's memory?`,
        category: "Closing",
        context: "Produces a powerful, inspirational summary soundbite for the outro.",
      },
      {
        question: (g, p, t) => `What is the best advice you've ever received that you initially ignored?`,
        category: "Closing",
        context: "Reflective, memorable final takeaway that sticks with listeners.",
      },
      {
        question: (g, p, t) => `What was the single most expensive hiring or strategic mistake you made in the first two years of building around ${t}?`,
        category: "Tactical",
        context: "Reveals the messy operational reality of business scaling and capital allocation.",
      },
      {
        question: (g, p, t) => `If your business lost its top 20% of revenue tomorrow, what is your day-one recovery playbook?`,
        category: "Tactical",
        context: "High-stakes business resilience question that forces concrete risk-management advice.",
      },
      {
        question: (g, p, t) => `What is the most hilariously terrible piece of professional advice you've ever received with a straight face?`,
        category: "Icebreaker",
        context: "Lighthearted question that immediately breaks tension and elicits authentic laughter.",
      },
      {
        question: (g, p, t) => `What is a completely petty or ridiculous opinion about ${t} that you are ready to die on a hill for?`,
        category: "Hot Take",
        context: "Playful contrarian prompt that reveals entertaining personality traits.",
      },
    ],
  },
  fr: {
    guestNameLabel: "Nom de l'Invité",
    professionLabel: "Profession / Rôle",
    topicLabel: "Sujet Principal de l'Épisode",
    filterLabel: "Phase de l'Interview",
    allQuestions: "Toutes les Questions",
    categories: {
      "Icebreaker": "Brise-Glace",
      "Tactical": "Tactique & Méthode",
      "Failure & Pivot": "Échecs & Pivots",
      "Hot Take": "Opinions Tranchées",
      "Closing": "Conclusion",
    },
    copyPrepSheet: "Copier la Fiche d'Interview",
    copiedPrepSheet: "Fiche Copiée !",
    exportTxt: "Exporter en TXT",
    copy: "Copier",
    copied: "Copié !",
    whyItWorks: "Pourquoi ça marche :",
    defaultGuest: "Guillaume Moubeche",
    defaultProfession: "Fondateur & Entrepreneur SaaS",
    defaultTopic: "Scaler une Entreprise sans Lever de Fonds",
    prepSheetHeader: "FICHE DE PRÉPARATION D'INTERVIEW - POD STUDIO",
    questions: [
      {
        question: (g, p, t) => `Quand vous repensez à votre première année dans ${t}, quelle est la croyance que vous aviez et qui vous paraît aujourd'hui totalement absurde ?`,
        category: "Icebreaker",
        context: "Révèle l'évolution personnelle et brise les éléments de langage prévisibles.",
      },
      {
        question: (g, p, t) => `Quel a été le tout premier euro que vous avez gagné grâce à ${t}, et qu'avez-vous ressenti à cet instant précis ?`,
        category: "Icebreaker",
        context: "Crée une connexion émotionnelle immédiate en évoquant les débuts authentiques.",
      },
      {
        question: (g, p, t) => `Quelle est la question que vous aimeriez qu'on vous pose en interview, mais que personne ne pose jamais ?`,
        category: "Icebreaker",
        context: "Donne à l'invité l'opportunité de partager son sujet de cœur sans filtre.",
      },
      {
        question: (g, p, t) => `Si vous deviez réitérer votre succès dans ${t} en partant de zéro aujourd'hui avec 1 000 € et aucun réseau, quelles seraient vos 3 premières actions ?`,
        category: "Tactical",
        context: "Force des réponses ultra-concrètes et applicables dès la fin de l'écoute.",
      },
      {
        question: (g, p, t) => `À quoi ressemble concrètement votre emploi du temps hebdomadaire quand vous travaillez en profondeur sur ${t} ?`,
        category: "Tactical",
        context: "Permet de découvrir l'organisation réelle du travail et les routines productives.",
      },
      {
        question: (g, p, t) => `Quel outil, logiciel ou méthodologie dans ${t} constitue un avantage concurrentiel injuste pour votre équipe ?`,
        category: "Tactical",
        context: "Les auditeurs adorent les recommandations précises de logiciels et d'outils méconnus.",
      },
      {
        question: (g, p, t) => `Racontez-nous le moment le plus sombre que vous avez traversé en bâtissant dans ${t}—le moment où vous avez sincèrement songé à tout abandonner.`,
        category: "Failure & Pivot",
        context: "Explore la vulnérabilité réelle et la résilience face à l'adversité.",
      },
      {
        question: (g, p, t) => `Quelle a été l'erreur la plus coûteuse de votre parcours dans ${t}, et quelle leçon inestimable en avez-vous tirée ?`,
        category: "Failure & Pivot",
        context: "Extrait une leçon difficile pour éviter aux auditeurs de reproduire la même faute.",
      },
      {
        question: (g, p, t) => `Y a-t-il une figure dans ${p} que vous admiriez à vos débuts et que vous percevez aujourd'hui sous un jour totalement différent ?`,
        category: "Failure & Pivot",
        context: "Provoque une réflexion franche sur les dogmes et les figures établies du secteur.",
      },
      {
        question: (g, p, t) => `Quel est le consensus dans ${t} que tout le monde accepte aveuglément, mais dont vous êtes convaincu qu'il est fondamentalement faux ?`,
        category: "Hot Take",
        context: "Idéal pour créer des extraits vidéo viraux et susciter un débat passionnant.",
      },
      {
        question: (g, p, t) => `Si vous pouviez bannir un mot à la mode ou un cliché dans ${p}, lequel choisiriez-vous ?`,
        category: "Hot Take",
        context: "Léger mais révélateur d'une frustration sincère envers les banalités de l'industrie.",
      },
      {
        question: (g, p, t) => `Où en sera ${t} dans 5 ans, et qui sont ceux qui vont disparaître à cause de cette transformation ?`,
        category: "Hot Take",
        context: "Positionne l'invité comme un visionnaire prédisant les grandes mutations macroéconomiques.",
      },
      {
        question: (g, p, t) => `Si c'était la toute dernière interview que vous donniez sur ${t}, quelle est l'unique règle que vous voudriez graver dans l'esprit des auditeurs ?`,
        category: "Closing",
        context: "Génère une conclusion mémorable et inspirante parfaite pour la fin d'épisode.",
      },
      {
        question: (g, p, t) => `Quel est le meilleur conseil qu'on vous ait jamais donné et que vous avez stupidement ignoré au début ?`,
        category: "Closing",
        context: "Une prise de recul personnelle forte qui marque durablement l'audience.",
      },
    ],
  },
  es: {
    guestNameLabel: "Nombre del Invitado",
    professionLabel: "Profesión / Rol",
    topicLabel: "Tema Principal del Episodio",
    filterLabel: "Arco de la Entrevista",
    allQuestions: "Todas las Preguntas",
    categories: {
      "Icebreaker": "Rompehielos",
      "Tactical": "Táctico y Acción",
      "Failure & Pivot": "Fracasos y Giros",
      "Hot Take": "Debate y Polémica",
      "Closing": "Cierre",
    },
    copyPrepSheet: "Copiar Guion de Preguntas",
    copiedPrepSheet: "¡Guion Copiado!",
    exportTxt: "Exportar en TXT",
    copy: "Copiar",
    copied: "¡Copiado!",
    whyItWorks: "Por qué funciona:",
    defaultGuest: "Marian Rojas Estapé",
    defaultProfession: "Psiquiatra y Escritora",
    defaultTopic: "Gestión Emocional y Alto Rendimiento",
    prepSheetHeader: "GUION DE PREPARACIÓN DE ENTREVISTA - POD STUDIO",
    questions: [
      {
        question: (g, p, t) => `Cuando miras hacia atrás a tu primer año en ${t}, ¿cuál es una creencia que tenías y que hoy te parece completamente absurda?`,
        category: "Icebreaker",
        context: "Muestra el crecimiento personal y rompe los discursos ensayados de relaciones públicas.",
      },
      {
        question: (g, p, t) => `¿Cómo fue el primer dólar que ganaste con ${t} y qué sentiste en ese momento exacto?`,
        category: "Icebreaker",
        context: "Conecta con la nostalgia del origen y genera empatía inmediata con los oyentes.",
      },
      {
        question: (g, p, t) => `¿Cuál es esa pregunta que desearías que te hicieran en las entrevistas pero que nadie te hace nunca?`,
        category: "Icebreaker",
        context: "Le da libertad al invitado para hablar de su verdadera pasión.",
      },
      {
        question: (g, p, t) => `Si tuvieras que recrear todo tu éxito en ${t} empezando hoy desde cero con $1,000 y sin contactos, ¿cuáles serían tus 3 primeras acciones?`,
        category: "Tactical",
        context: "Exige respuestas prácticas y marcos de trabajo que los oyentes pueden ejecutar hoy.",
      },
      {
        question: (g, p, t) => `¿Cómo es realmente tu rutina de trabajo profundo cuando estás ejecutando en ${t}?`,
        category: "Tactical",
        context: "Permite asomarse a los hábitos de calendario y disciplina operativa del invitado.",
      },
      {
        question: (g, p, t) => `¿Qué herramienta o software en ${t} sientes que le da una ventaja injusta a tu equipo?`,
        category: "Tactical",
        context: "A la audiencia le fascinan las recomendaciones específicas de herramientas comprobadas.",
      },
      {
        question: (g, p, t) => `Llévanos al momento más oscuro que viviste construyendo en ${t}—ese instante en el que pensaste seriamente en tirar la toalla.`,
        category: "Failure & Pivot",
        context: "Explora la vulnerabilidad real y la resiliencia bajo máxima presión.",
      },
      {
        question: (g, p, t) => `¿Cuál ha sido el error más caro que has cometido en ${t} y cuánto te costó esa lección?`,
        category: "Failure & Pivot",
        context: "Extrae aprendizajes difíciles para que la audiencia no repita el mismo tropiezo.",
      },
      {
        question: (g, p, t) => `¿A quién en ${p} admirabas en tus inicios y hoy ves con ojos completamente diferentes?`,
        category: "Failure & Pivot",
        context: "Provoca reflexiones honestas sobre el dogma y los líderes del sector.",
      },
      {
        question: (g, p, t) => `¿Cuál es un consenso en ${t} que todo el mundo da por bueno, pero del que estás 100% convencido de que es un error?`,
        category: "Hot Take",
        context: "Genera clips virales ideales para redes sociales y un debate apasionante.",
      },
      {
        question: (g, p, t) => `Si pudieras prohibir una palabra de moda o cliché en ${p}, ¿cuál sería?`,
        category: "Hot Take",
        context: "Divertido pero revela frustraciones genuinas ante tópicos vacíos de la industria.",
      },
      {
        question: (g, p, t) => `¿Dónde estará ${t} dentro de 5 años y quiénes van a quedar obsoletos con ese cambio?`,
        category: "Hot Take",
        context: "Posiciona al invitado como un visionario que anticipa macrotendencias.",
      },
      {
        question: (g, p, t) => `Si esta fuera la última entrevista que pudieras dar sobre ${t}, ¿cuál es la lección que querrías dejar grabada en los oyentes?`,
        category: "Closing",
        context: "Produce una frase de cierre inspiradora y memorable para despedir el episodio.",
      },
      {
        question: (g, p, t) => `¿Cuál es el mejor consejo que has recibido en tu vida y que al principio ignoraste por completo?`,
        category: "Closing",
        context: "Una reflexión final enriquecedora que resonará en la mente del oyente.",
      },
    ],
  },
  de: {
    guestNameLabel: "Name des Gastes",
    professionLabel: "Beruf / Rolle",
    topicLabel: "Hauptthema der Episode",
    filterLabel: "Interview-Dramaturgie",
    allQuestions: "Alle Fragen",
    categories: {
      "Icebreaker": "Eisbrecher",
      "Tactical": "Taktisch & Praxis",
      "Failure & Pivot": "Fehler & Pivot",
      "Hot Take": "Heiße Thesen",
      "Closing": "Abschluss",
    },
    copyPrepSheet: "Interview-Leitfaden kopieren",
    copiedPrepSheet: "Leitfaden kopiert!",
    exportTxt: "Als TXT exportieren",
    copy: "Kopieren",
    copied: "Kopiert!",
    whyItWorks: "Warum es wirkt:",
    defaultGuest: "Philipp Westermeyer",
    defaultProfession: "Digital-Unternehmer & Podcaster",
    defaultTopic: "Aufbau einer Medienmarke von Null",
    prepSheetHeader: "INTERVIEW-VORBEREITUNGSBOGEN - POD STUDIO",
    questions: [
      {
        question: (g, p, t) => `Wenn du an dein erstes Jahr in ${t} zurückdenkst: Welche damalige Überzeugung findest du heute völlig absurd?`,
        category: "Icebreaker",
        context: "Offenbart persönliche Reife und bricht einstudierte PR-Floskeln auf.",
      },
      {
        question: (g, p, t) => `Wie hast du den allerersten Euro mit ${t} verdient und wie fühlte sich dieser Moment an?`,
        category: "Icebreaker",
        context: "Weckt authentische Emotionen und verbindet mit den Anfängen.",
      },
      {
        question: (g, p, t) => `Welche Frage würdest du dir in Interviews öfter wünschen, die dir aber fast nie gestellt wird?`,
        category: "Icebreaker",
        context: "Gibt dem Gast Raum, über sein liebstes Herzensthema zu sprechen.",
      },
      {
        question: (g, p, t) => `Wenn du heute mit 1.000 € und ohne Netzwerk bei ${t} neu anfangen müsstest: Was wären deine ersten 3 Schritte?`,
        category: "Tactical",
        context: "Erzwingt konkrete, praxiserprobte Handlungsanleitungen für die Hörer.",
      },
      {
        question: (g, p, t) => `Wie sieht dein tatsächlicher Arbeitsalltag aus, wenn du fokussiert an ${t} arbeitest?`,
        category: "Tactical",
        context: "Gewährt Einblicke in Kalenderdisziplin und reale Arbeitsroutinen.",
      },
      {
        question: (g, p, t) => `Welches Tool oder welche Methode bei ${t} verschafft deinem Team einen unfairen Wettbewerbsvorteil?`,
        category: "Tactical",
        context: "Hörer schätzen konkrete Tool-Empfehlungen und Insider-Setups.",
      },
      {
        question: (g, p, t) => `Nimm uns mit in den dunkelsten Moment bei ${t}—den Moment, in dem du kurz davor warst, alles hinzuwerfen.`,
        category: "Failure & Pivot",
        context: "Zeigt authentische Verletzlichkeit und Durchhaltevermögen unter Druck.",
      },
      {
        question: (g, p, t) => `Was war dein teuerster Fehler bei ${t} und was hat dich dieses Lehrgeld gekostet?`,
        category: "Failure & Pivot",
        context: "Vermittelt wertvolle Learnings, damit Hörer dieselben Fehler vermeiden.",
      },
      {
        question: (g, p, t) => `Wen in ${p} hast du früher bewundert und siehst diese Person heute mit ganz anderen Augen?`,
        category: "Failure & Pivot",
        context: "Regt zu ehrlicher Reflexion über Branchen-Mythen und Vorbilder an.",
      },
      {
        question: (g, p, t) => `Welche gängige Branchenmeinung zu ${t} teilen fast alle, aber du hältst sie für grundfalsch?`,
        category: "Hot Take",
        context: "Erzeugt provokante Statements und Stoff für virale Social-Media-Clips.",
      },
      {
        question: (g, p, t) => `Wenn du ein Buzzword aus ${p} verbieten könntest: Welches wäre es?`,
        category: "Hot Take",
        context: "Humorvoll, deckt aber echte Frustrationen über Branchenklischees auf.",
      },
      {
        question: (g, p, t) => `Wo steht ${t} in 5 Jahren und wer wird von diesem Wandel verdrängt werden?`,
        category: "Hot Take",
        context: "Positioniert den Gast als Vordenker, der Makrotrends prognostiziert.",
      },
      {
        question: (g, p, t) => `Wenn dies dein allerletztes Interview zu ${t} wäre: Welche zentrale Botschaft soll den Hörern im Gedächtnis bleiben?`,
        category: "Closing",
        context: "Liefert ein starkes, inspirierendes Schlusswort für das Episoden-Outro.",
      },
      {
        question: (g, p, t) => `Was war der beste Ratschlag, den du je erhalten hast, den du aber anfangs ignoriert hast?`,
        category: "Closing",
        context: "Ein reflektiertes Fazit, das beim Publikum noch lange nachwirkt.",
      },
    ],
  },
  ja: {
    guestNameLabel: "ゲストの氏名",
    professionLabel: "肩書・専門分野",
    topicLabel: "エピソードの主題",
    filterLabel: "インタビュー構成",
    allQuestions: "すべての質問",
    categories: {
      "Icebreaker": "アイスブレイク",
      "Tactical": "実践・ノウハウ",
      "Failure & Pivot": "挫折と転換点",
      "Hot Take": "持論・逆張り",
      "Closing": "クロージング",
    },
    copyPrepSheet: "質問シートをコピー",
    copiedPrepSheet: "シートをコピーしました！",
    exportTxt: "TXTで保存",
    copy: "コピー",
    copied: "コピー完了！",
    whyItWorks: "質問の意図・狙い:",
    defaultGuest: "落合 陽一",
    defaultProfession: "メディアアーティスト・大学教授",
    defaultTopic: "テクノロジーと未来社会の創造",
    prepSheetHeader: "ポッドキャスト インタビュー構成シート - POD STUDIO",
    questions: [
      {
        question: (g, p, t) => `【${t}】を始めた当初を振り返って、今思えば『なぜあんなことを信じていたのか』と笑ってしまう固定観念は何ですか？`,
        category: "Icebreaker",
        context: "用意されたPR回答を崩し、ゲストの生の本音と成長を引き出します。",
      },
      {
        question: (g, p, t) => `【${t}】で初めて自分のお金（初収益）を手にした瞬間、どんな感情が込み上げましたか？`,
        category: "Icebreaker",
        context: "原点の感動を呼び起こし、リスナーとの強い共感を生みます。",
      },
      {
        question: (g, p, t) => `インタビューで『これを聞いてくれたら熱く語れるのに』とずっと思っているテーマは何ですか？`,
        category: "Icebreaker",
        context: "ゲスト自身が最も情熱を注いでいるトピックを引き出します。",
      },
      {
        question: (g, p, t) => `もし今日、資金10万円・人脈ゼロで【${t}】をやり直すとしたら、最初の3日間で何をしますか？`,
        category: "Tactical",
        context: "机上の空論を排除し、リスナーが明日から実践できる具体的行動を引き出します。",
      },
      {
        question: (g, p, t) => `【${t}】で最大の集中力を発揮している時、1日のスケジュールや作業環境はどうなっていますか？`,
        category: "Tactical",
        context: "一流のスケジュール管理法や仕事のルーティンを深掘りします。",
      },
      {
        question: (g, p, t) => `【${t}】の実践において、チームに圧倒的な差をもたらしている秘密のツールや仕組みは何ですか？`,
        category: "Tactical",
        context: "リスナーの関心が高い具体的なソフトウェアやツールの活用法を引き出します。",
      },
      {
        question: (g, p, t) => `【${t}】に取り組む中で、本気で『もう辞めよう』と絶望した最大の修羅場を教えてください。`,
        category: "Failure & Pivot",
        context: "成功の裏にある脆さと、そこから這い上がった強靭なメンタリティを探ります。",
      },
      {
        question: (g, p, t) => `【${t}】で支払った最も高くついた失敗の授業料と、そこから得た絶対の教訓は何ですか？`,
        category: "Failure & Pivot",
        context: "リスナーが同じ過ちを犯さないための貴重な学びを言語化します。",
      },
      {
        question: (g, p, t) => `かつて憧れていたけれど、経験を積んだ今では見方が180度変わった【${p}】の常識や人物はいますか？`,
        category: "Failure & Pivot",
        context: "業界の神話や固定観念に切り込む鋭い視点を引き出します。",
      },
      {
        question: (g, p, t) => `世間や業界では『正しい』と信じられているけれど、自分は100%間違いだと確信している【${t}】の常識は何ですか？`,
        category: "Hot Take",
        context: "SNSの切り抜き動画で拡散されやすい強力な逆張りオピニオンを生みます。",
      },
      {
        question: (g, p, t) => `【${p}】界隈で飛び交う流行語やバズワードの中で、今すぐ禁止にしたい言葉は何ですか？`,
        category: "Hot Take",
        context: "ユーモアを交えつつ、業界の形骸化したフレーズに対する本音に迫ります。",
      },
      {
        question: (g, p, t) => `5年後の【${t}】はどう変化し、その変化に適応できず淘汰されるのはどんな層ですか？`,
        category: "Hot Take",
        context: "マクロトレンドを見通す先見の明と業界予測を引き出します。",
      },
      {
        question: (g, p, t) => `もしこれが人生最後の【${t}】に関するインタビューだとしたら、リスナーの記憶に刻みたい唯一の言葉は何ですか？`,
        category: "Closing",
        context: "エピソードのアウトロを飾る、力強く感動的なメッセージを生み出します。",
      },
      {
        question: (g, p, t) => `過去にもらったアドバイスの中で、最初は無視していたけれど後になって痛感した最高のアドバイスは何ですか？`,
        category: "Closing",
        context: "リスナーが深く噛み締めることができる味わい深い結びの言葉になります。",
      },
    ],
  },
  pt: {
    guestNameLabel: "Nome do Convidado",
    professionLabel: "Profissão / Cargo",
    topicLabel: "Tema Central do Episódio",
    filterLabel: "Arco da Entrevista",
    allQuestions: "Todas as Perguntas",
    categories: {
      "Icebreaker": "Quebra-Gelo",
      "Tactical": "Prático & Estratégico",
      "Failure & Pivot": "Erros & Pivôs",
      "Hot Take": "Opinião Polêmica",
      "Closing": "Fechamento",
    },
    copyPrepSheet: "Copiar Roteiro de Perguntas",
    copiedPrepSheet: "Roteiro Copiado!",
    exportTxt: "Exportar em TXT",
    copy: "Copiar",
    copied: "Copiado!",
    whyItWorks: "Por que funciona:",
    defaultGuest: "Nathalia Arcuri",
    defaultProfession: "Educadora Financeira & Empresária",
    defaultTopic: "Independência Financeira e Investimentos",
    prepSheetHeader: "ROTEIRO DE PREPARAÇÃO DE ENTREVISTA - POD STUDIO",
    questions: [
      {
        question: (g, p, t) => `Quando você olha para o seu primeiro ano em ${t}, qual é uma crença que você tinha e que hoje considera completamente absurda?`,
        category: "Icebreaker",
        context: "Revela maturidade e quebra discursos decorados de assessoria de imprensa.",
      },
      {
        question: (g, p, t) => `Qual foi o primeiro real que você ganhou com ${t} e como você se sentiu naquele instante?`,
        category: "Icebreaker",
        context: "Desperta conexão emocional e nostalgia sobre os primeiros passos.",
      },
      {
        question: (g, p, t) => `Qual é uma pergunta que você sempre quis que te fizessem em entrevistas, mas que ninguém nunca faz?`,
        category: "Icebreaker",
        context: "Dá liberdade para o convidado falar sobre o que realmente o empolga.",
      },
      {
        question: (g, p, t) => `Se você tivesse que reconstruir todo o seu sucesso em ${t} começando hoje com R$ 1.000 e zero contatos, quais seriam seus 3 primeiros passos?`,
        category: "Tactical",
        context: "Exige direcionamentos práticos e métodos que os ouvintes podem replicar.",
      },
      {
        question: (g, p, t) => `Como é sua rotina real de trabalho focado quando você está produzindo em ${t}?`,
        category: "Tactical",
        context: "Mostra a disciplina de agenda e a rotina operacional por trás dos resultados.",
      },
      {
        question: (g, p, t) => `Qual ferramenta, aplicativo ou framework em ${t} você considera uma vantagem injusta para a sua equipe?`,
        category: "Tactical",
        context: "Ouvintes adoram recomendações específicas de softwares comprovados.",
      },
      {
        question: (g, p, t) => `Conte sobre o momento mais difícil que você enfrentou construindo em ${t}—o momento em que você quase desistiu de tudo.`,
        category: "Failure & Pivot",
        context: "Explora vulnerabilidade genuína e resiliência sob extrema pressão.",
      },
      {
        question: (g, p, t) => `Qual foi o erro mais caro da sua trajetória em ${t} e quanto custou esse aprendizado?`,
        category: "Failure & Pivot",
        context: "Extrai lições valiosas para que o público não cometa os mesmos deslizes.",
      },
      {
        question: (g, p, t) => `Quem em ${p} você admirava no começo e hoje enxerga com outros olhos?`,
        category: "Failure & Pivot",
        context: "Gera curiosidade e avaliações honestas sobre dogmas do setor.",
      },
      {
        question: (g, p, t) => `Qual é um consenso comum em ${t} que quase todo mundo aceita, mas você tem 100% de certeza de que está errado?`,
        category: "Hot Take",
        context: "Cria cortes perfeitos para vídeos curtos e debates envolventes.",
      },
      {
        question: (g, p, t) => `Se você pudesse proibir um termo da moda ou jargão em ${p}, qual seria?`,
        category: "Hot Take",
        context: "Descontraído, mas revela incômodos reais com clichês vazios.",
      },
      {
        question: (g, p, t) => `Onde ${t} vai estar daqui a 5 anos e quem vai ser varrido do mapa por essa transformação?`,
        category: "Hot Take",
        context: "Posiciona o convidado como um visionário que antecipa o futuro.",
      },
      {
        question: (g, p, t) => `Se esta fosse a última entrevista que você pudesse dar sobre ${t}, qual é a lição definitiva que você deixaria gravada na memória de quem ouve?`,
        category: "Closing",
        context: "Gera um desfecho inspirador e marcante para o encerramento do episódio.",
      },
      {
        question: (g, p, t) => `Qual foi o melhor conselho que você já recebeu na vida e que no início você simplesmente ignorou?`,
        category: "Closing",
        context: "Uma reflexão madura que permanece na cabeça do ouvinte por muito tempo.",
      },
    ],
  },
  ko: {
    guestNameLabel: "게스트 성명",
    professionLabel: "직업 및 전문 분야",
    topicLabel: "에피소드 핵심 주제",
    filterLabel: "인터뷰 구성 단계",
    allQuestions: "전체 질문",
    categories: {
      "Icebreaker": "아이스브레이크",
      "Tactical": "실전 전술 & 실행법",
      "Failure & Pivot": "실패와 전환점",
      "Hot Take": "도발적 질문 & 반론",
      "Closing": "마무리 & 통찰",
    },
    copyPrepSheet: "질문지 시트 복사",
    copiedPrepSheet: "질문지가 복사되었습니다!",
    exportTxt: "TXT 파일 저장",
    copy: "복사",
    copied: "복사됨!",
    whyItWorks: "질문의 의도:",
    defaultGuest: "슈카",
    defaultProfession: "경제·시사 전문 크리에이터",
    defaultTopic: "경제 인사이트와 자산 배분 전략",
    prepSheetHeader: "팟캐스트 인터뷰 준비 시트 - POD STUDIO",
    questions: [
      {
        question: (g, p, t) => `처음 【${t}】 분야에 발을 들였을 당시 믿었지만, 지금 생각하면 완전히 터무니없다고 느끼는 고정관념은 무엇인가요?`,
        category: "Icebreaker",
        context: "틀에 박힌 답변을 깨고 게스트의 진솔한 성장 서사를 이끌어냅니다.",
      },
      {
        question: (g, p, t) => `【${t}】에서 처음으로 내 힘으로 돈을 벌었던 순간, 당시 어떤 감정이 들었나요?`,
        category: "Icebreaker",
        context: "초심의 감정선을 자극하여 청취자의 깊은 공감을 유도합니다.",
      },
      {
        question: (g, p, t) => `평소 인터뷰에서 꼭 질문받고 싶었지만 아무도 묻지 않았던 본인만의 주제가 있나요?`,
        category: "Icebreaker",
        context: "게스트가 진정으로 열정을 갖고 있는 비하인드 스토리를 이끌어냅니다.",
      },
      {
        question: (g, p, t) => `오늘 자본금 100만 원과 인맥 제로 상태로 【${t}】을(를) 다시 시작해야 한다면, 첫 3일간 무엇을 실행하시겠습니까?`,
        category: "Tactical",
        context: "청취자가 방송 후 즉시 실행할 수 있는 현실적 로드맵을 도출합니다.",
      },
      {
        question: (g, p, t) => `【${t}】 분야에서 고도의 집중이 필요한 일을 할 때, 실제 하루 일정과 작업 루틴은 어떻게 구성되어 있나요?`,
        category: "Tactical",
        context: "업계 최고 수준의 일정 관리 및 생산성 비밀을 엿볼 수 있습니다.",
      },
      {
        question: (g, p, t) => `팀이나 개인에게 압도적인 경쟁 우위를 안겨준 【${t}】 관련 숨은 소프트웨어나 프레임워크가 있나요?`,
        category: "Tactical",
        context: "청취자들이 가장 선호하는 구체적인 툴 추천과 시스템 노하우를 제공합니다.",
      },
      {
        question: (g, p, t) => `【${t}】을(를) 만들어오면서 모든 것을 포기하고 도망치고 싶었던 가장 어두웠던 순간의 이야기를 들려주세요.`,
        category: "Failure & Pivot",
        context: "위기 속 인간적인 취약성과 이를 극복한 회복 탄력성을 조명합니다.",
      },
      {
        question: (g, p, t) => `【${t}】에서 겪은 가장 값비싼 실수와 그 대가로 얻은 절대 잊을 수 없는 교훈은 무엇인가요?`,
        category: "Failure & Pivot",
        context: "청취자가 동일한 실패를 피할 수 있도록 귀중한 오답 노트를 공유합니다.",
      },
      {
        question: (g, p, t) => `【${p}】 분야에서 예전엔 존경했지만, 경험이 쌓인 지금은 전혀 다른 시선으로 보게 된 인물이나 통념이 있나요?`,
        category: "Failure & Pivot",
        context: "업계의 맹신과 통념에 도전하는 솔직한 인사이트를 이끌어냅니다.",
      },
      {
        question: (g, p, t) => `【${t}】 업계에서 모두가 정답이라고 말하지만, 본인은 100% 틀렸다고 확신하는 주장은 무엇인가요?`,
        category: "Hot Take",
        context: "쇼츠 및 릴스 클립으로 바이럴되기 좋은 강렬한 반론을 생성합니다.",
      },
      {
        question: (g, p, t) => `【${p}】 관련 업계에서 쓰이는 유행어 중 지금 당장 금지하고 싶은 진부한 단어가 있다면요?`,
        category: "Hot Take",
        context: "위트 있으면서도 업계의 피로감과 허상을 꼬집는 흥미로운 질문입니다.",
      },
      {
        question: (g, p, t) => `앞으로 5년 뒤 【${t}】 시장은 어떻게 재편될 것이며, 어떤 사람들이 가장 먼저 도태될까요?`,
        category: "Hot Take",
        context: "게스트를 거시적 트렌드를 꿰뚫어보는 통찰력 있는 전문가로 조명합니다.",
      },
      {
        question: (g, p, t) => `만약 이것이 【${t}】에 관해 남기는 인생 마지막 인터뷰라면, 청취자들의 뇌리에 남기고 싶은 단 하나의 문장은 무엇인가요?`,
        category: "Closing",
        context: "에피소드의 여운을 극대화하는 감동적이고 강력한 마무리 멘트를 만듭니다.",
      },
      {
        question: (g, p, t) => `지금까지 받은 조언 중 처음엔 무시했지만 나중에 뼈저리게 깨달은 최고의 조언은 무엇이었나요?`,
        category: "Closing",
        context: "오랫동안 생각할 거리를 던져주는 성찰 깊은 클로징을 완성합니다.",
      },
    ],
  },
  it: {
    guestNameLabel: "Nome dell'Ospite",
    professionLabel: "Professione / Ruolo",
    topicLabel: "Tema Principale della Puntata",
    filterLabel: "Struttura Intervista",
    allQuestions: "Tutte le Domande",
    categories: {
      "Icebreaker": "Rompighiaccio",
      "Tactical": "Pratico & Tattico",
      "Failure & Pivot": "Errori & Svolte",
      "Hot Take": "Opinioni Forti",
      "Closing": "Chiusura",
    },
    copyPrepSheet: "Copia Scheda Intervista",
    copiedPrepSheet: "Scheda Copiata!",
    exportTxt: "Esporta in TXT",
    copy: "Copia",
    copied: "Copiato!",
    whyItWorks: "Perché funziona:",
    defaultGuest: "Marco Montemagno",
    defaultProfession: "Imprenditore Digitale & Creator",
    defaultTopic: "Scalare un Business Digitale",
    prepSheetHeader: "SCHEDA DI PREPARAZIONE INTERVISTA - POD STUDIO",
    questions: [
      {
        question: (g, p, t) => `Ripensando al tuo primo anno in ${t}, qual è una convinzione che avevi allora e che oggi trovi del tutto ridicola?`,
        category: "Icebreaker",
        context: "Mostra l'evoluzione personale e supera le risposte da comunicato stampa.",
      },
      {
        question: (g, p, t) => `Qual è stato il primissimo euro guadagnato grazie a ${t} e che cosa hai provato in quel momento?`,
        category: "Icebreaker",
        context: "Crea un legame emotivo immediato rievocando gli inizi del percorso.",
      },
      {
        question: (g, p, t) => `Qual è una domanda che vorresti ti facessero nelle interviste ma che nessuno ti pone mai?`,
        category: "Icebreaker",
        context: "Dà spazio all'ospite per parlare con autentica passione di argomenti inediti.",
      },
      {
        question: (g, p, t) => `Se dovessi ripartire oggi da zero in ${t} con 1.000 € e zero contatti, quali sarebbero le prime 3 azioni concrete che faresti?`,
        category: "Tactical",
        context: "Fornisce schemi pratici e immediatamente azionabili per chi ascolta.",
      },
      {
        question: (g, p, t) => `Come si svolge la tua reale giornata di lavoro quando sei concentrato al massimo su ${t}?`,
        category: "Tactical",
        context: "Svela l'organizzazione del tempo e le abitudini operative concrete dell'ospite.",
      },
      {
        question: (g, p, t) => `Quale strumento o software in ${t} consideri un vantaggio competitivo sleale per il tuo team?`,
        category: "Tactical",
        context: "Il pubblico adora i consigli operativi su strumenti e piattaforme concrete.",
      },
      {
        question: (g, p, t) => `Raccontaci il momento più buio che hai vissuto costruendo in ${t}—il momento in cui hai pensato seriamente di mollare tutto.`,
        category: "Failure & Pivot",
        context: "Esplora la vulnerabilità autentica e la determinazione sotto pressione.",
      },
      {
        question: (g, p, t) => `Qual è stato l'errore più costoso che hai commesso in ${t} e quanto ti è costata quella lezione?`,
        category: "Failure & Pivot",
        context: "Estrae insegnamenti preziosi per evitare che gli ascoltatori ripetano lo stesso sbaglio.",
      },
      {
        question: (g, p, t) => `Chi ammiravi all'inizio in ${p} che oggi vedi sotto una luce completamente diversa?`,
        category: "Failure & Pivot",
        context: "Incoraggia una valutazione onesta dei dogmi e delle figure di riferimento del settore.",
      },
      {
        question: (g, p, t) => `Qual è un consenso diffuso in ${t} che tutti danno per scontato, ma di cui sei convinto al 100% che sia falso?`,
        category: "Hot Take",
        context: "Ideale per clip virali sui social e dibattiti accesi.",
      },
      {
        question: (g, p, t) => `Se potessi eliminare per legge un cliché o una parola vuota in ${p}, quale sarebbe?`,
        category: "Hot Take",
        context: "Leggero ma rivelatore di frustrazioni autentiche verso le mode passeggere.",
      },
      {
        question: (g, p, t) => `Dove sarà ${t} tra 5 anni e chi verrà spazzato via da questa trasformazione?`,
        category: "Hot Take",
        context: "Inquadra l'ospite come un visionario capace di anticipare i trend futuri.",
      },
      {
        question: (g, p, t) => `Se questa fosse l'ultima intervista della tua vita su ${t}, qual è l'unica lezione che vorresti scolpire nella memoria degli ascoltatori?`,
        category: "Closing",
        context: "Produce una chiusura potente e memorabile ideale per l'outro dell'episodio.",
      },
      {
        question: (g, p, t) => `Qual è il miglior consiglio che tu abbia mai ricevuto e che inizialmente hai ignorato?`,
        category: "Closing",
        context: "Una riflessione finale profonda che rimane impressa nella mente del pubblico.",
      },
    ],
  },
};

export function GuestQuestionGenerator({ lang = defaultLocale }: GuestQuestionGeneratorProps) {
  const dict = DICTIONARY[lang] || DICTIONARY[defaultLocale];

  const [guestName, setGuestName] = useState(() => dict.defaultGuest);
  const [profession, setProfession] = useState(() => dict.defaultProfession);
  const [topic, setTopic] = useState(() => dict.defaultTopic);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const questions = useMemo(() => {
    const g = guestName.trim() || dict.defaultGuest;
    const p = profession.trim() || dict.defaultProfession;
    const t = topic.trim() || dict.defaultTopic;

    return dict.questions.map((item) => ({
      question: item.question(g, p, t),
      category: item.category,
      context: item.context,
    }));
  }, [guestName, profession, topic, dict]);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === "all") return questions;
    return questions.filter((q) => q.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [questions, selectedCategory]);

  const handleCopySingle = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const generateFullCheatSheet = () => {
    return (
      `${dict.prepSheetHeader}\n` +
      `${dict.guestNameLabel}: ${guestName} (${profession})\n` +
      `${dict.topicLabel}: ${topic}\n\n` +
      `==============================\n` +
      filteredQuestions
        .map((q, i) => `${i + 1}. [${(dict.categories[q.category] || q.category).toUpperCase()}]\nQ: ${q.question}\n${dict.whyItWorks} ${q.context}\n`)
        .join("\n")
    );
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(generateFullCheatSheet());
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleDownload = () => {
    const text = generateFullCheatSheet();
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `interview-questions-${guestName.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "podcast"}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const categoryKeys: Array<"all" | QuestionCategory> = [
    "all",
    "Icebreaker",
    "Tactical",
    "Failure & Pivot",
    "Hot Take",
    "Closing",
  ];

  return (
    <div className="w-full space-y-6">
      {/* Inputs */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {dict.guestNameLabel}
            </label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {dict.professionLabel}
            </label>
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {dict.topicLabel}
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-studio-border/60">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-neutral-600 dark:text-neutral-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> {dict.filterLabel}:
            </span>
            {categoryKeys.map((catKey) => {
              const label = catKey === "all" ? dict.allQuestions : dict.categories[catKey];
              return (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setSelectedCategory(catKey)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedCategory === catKey
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                      : "bg-studio-elevated text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? dict.copiedPrepSheet : dict.copyPrepSheet}</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" /> <span>{dict.exportTxt}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {filteredQuestions.map((q, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-studio-card border border-studio-border hover:border-orange-500/40 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-studio-dark border border-studio-border text-orange-500 dark:text-orange-400">
                  {dict.categories[q.category] || q.category}
                </span>
                <span className="text-[11px] text-neutral-500">{dict.whyItWorks} {q.context}</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white leading-relaxed group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                &ldquo;{q.question}&rdquo;
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleCopySingle(q.question, idx)}
              className="self-end sm:self-start flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:!bg-orange-500 hover:!text-white hover:!border-orange-500 text-xs font-semibold transition-all flex-shrink-0 cursor-pointer shadow-2xs"
            >
              {copiedIndex === idx ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{dict.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{dict.copy}</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
