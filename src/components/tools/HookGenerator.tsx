"use client";

import React, { useState, useMemo } from "react";
import { Zap, Copy, Check, Sparkles, Filter } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

type HookText = {
  topic: string; topicHint: string; topicPh: string; guest: string; opt: string; style: string;
  all: string; copied: string; copy: string; fb: string; defTopic: string; defGuest: string;
  s: string[]; w: string[];
  h: [(t: string) => string, (t: string) => string, (t: string) => string, (t: string) => string, (t: string) => string, (t: string, g: string) => string];
};

// Order of s / w / h: contrarian, openLoop, highStakes, bigMetric, patternInterrupt, interview
const TEXT: Record<SupportedLocale, HookText> = {
  en: {
    topic: "Social Clip Topic / Industry", topicHint: "(TikTok, Reels, Shorts)", topicPh: "e.g. Venture Capital Funding, Fitness Myths, True Crime...",
    guest: "Featured Guest", opt: "(Optional)", style: "Hook Style:", all: "All Hooks", copied: "Copied!", copy: "Copy Hook",
    fb: "this industry", defTopic: "Venture Capital Funding", defGuest: "Marc Andreessen",
    s: ["Contrarian", "Open Loop", "High Stakes", "Big Metric", "Pattern Interrupt", "Interview"],
    w: [
      "Challenges prevailing assumptions, triggering instant defensive curiosity.",
      "Creates an irresistible curiosity gap listeners must stay to resolve.",
      "Elevates the emotional stakes and urgency.",
      "Promises hard data and empirical evidence rather than opinions.",
      "Tells the listener to stop doing what they're currently doing, resetting attention.",
      "Teases an authentic, spontaneous host reaction to a shocking guest quote.",
    ],
    h: [
      (t) => `“If you still believe that ${t} works the way it did two years ago, you're about to lose a lot of money.”`,
      (t) => `“There is a private conversation happening among leaders in ${t} right now that nobody is admitting publicly. By the end of this episode, you'll know why.”`,
      (t) => `“In 2026, there are only two types of people in ${t}: those who leverage modern automation, and those who are about to become obsolete.”`,
      (t) => `“We spent 18 months analyzing $50M in transactions across ${t}. Here is the single outlier factor that accounted for 80% of the profits.”`,
      (t) => `“Stop reading the blog posts. Stop buying the courses. Everything you actually need to win at ${t} comes down to one uncomfortable habit.”`,
      (t, g) => `“When ${g} said that 99% of people in ${t} are optimizing for the wrong metric, I had to stop the recording and make them explain why.”`,
    ],
  },
  es: {
    topic: "Tema o sector del clip social", topicHint: "(TikTok, Reels, Shorts)", topicPh: "p. ej. Capital de riesgo, Mitos del fitness, Crimen real...",
    guest: "Invitado destacado", opt: "(Opcional)", style: "Estilo de gancho:", all: "Todos los ganchos", copied: "¡Copiado!", copy: "Copiar gancho",
    fb: "este sector", defTopic: "Capital de riesgo", defGuest: "Marc Andreessen",
    s: ["Contrario", "Bucle abierto", "Alto riesgo", "Gran cifra", "Rompepatrones", "Entrevista"],
    w: [
      "Cuestiona las creencias establecidas y despierta una curiosidad defensiva inmediata.",
      "Crea una brecha de curiosidad irresistible que el oyente quiere resolver.",
      "Eleva lo que está en juego a nivel emocional y la urgencia.",
      "Promete datos reales y evidencia empírica en lugar de opiniones.",
      "Pide al oyente que deje de hacer lo que hace y reinicia su atención.",
      "Adelanta una reacción auténtica y espontánea del anfitrión ante una cita impactante del invitado.",
    ],
    h: [
      (t) => `“Si todavía crees que ${t} funciona como hace dos años, estás a punto de perder mucho dinero.”`,
      (t) => `“Ahora mismo hay una conversación privada entre los líderes de ${t} que nadie admite en público. Al final de este episodio sabrás por qué.”`,
      (t) => `“En 2026 solo hay dos tipos de personas en ${t}: las que aprovechan la automatización moderna y las que están a punto de quedar obsoletas.”`,
      (t) => `“Pasamos 18 meses analizando 50 millones de dólares en transacciones de ${t}. Este es el único factor atípico que explicó el 80 % de los beneficios.”`,
      (t) => `“Deja de leer blogs. Deja de comprar cursos. Todo lo que necesitas para ganar en ${t} se reduce a un hábito incómodo.”`,
      (t, g) => `“Cuando ${g} dijo que el 99 % de la gente en ${t} optimiza la métrica equivocada, tuve que parar la grabación y pedirle que lo explicara.”`,
    ],
  },
  fr: {
    topic: "Sujet / secteur du clip social", topicHint: "(TikTok, Reels, Shorts)", topicPh: "ex. Capital-risque, Mythes du fitness, Faits divers...",
    guest: "Invité à l'honneur", opt: "(Facultatif)", style: "Style d'accroche :", all: "Toutes les accroches", copied: "Copié !", copy: "Copier l'accroche",
    fb: "ce secteur", defTopic: "Capital-risque", defGuest: "Marc Andreessen",
    s: ["À contre-courant", "Boucle ouverte", "Enjeu élevé", "Chiffre choc", "Rupture de schéma", "Interview"],
    w: [
      "Remet en cause les idées reçues et déclenche une curiosité immédiate.",
      "Crée un manque de curiosité irrésistible que l'auditeur veut combler.",
      "Augmente les enjeux émotionnels et l'urgence.",
      "Promet des données concrètes plutôt que des opinions.",
      "Demande à l'auditeur d'arrêter ce qu'il fait et relance son attention.",
      "Laisse entrevoir une réaction spontanée et authentique de l'animateur face à une citation choc de l'invité.",
    ],
    h: [
      (t) => `« Si vous croyez encore que ${t} fonctionne comme il y a deux ans, vous allez perdre beaucoup d'argent. »`,
      (t) => `« Une conversation privée a lieu en ce moment entre les leaders de ${t}, et personne ne l'admet en public. À la fin de cet épisode, vous saurez pourquoi. »`,
      (t) => `« En 2026, il n'y a que deux types de personnes dans ${t} : celles qui exploitent l'automatisation moderne et celles qui vont devenir obsolètes. »`,
      (t) => `« Nous avons passé 18 mois à analyser 50 M$ de transactions dans ${t}. Voici l'unique facteur atypique qui explique 80 % des profits. »`,
      (t) => `« Arrêtez de lire des articles. Arrêtez d'acheter des formations. Tout ce qu'il faut pour réussir dans ${t} se résume à une habitude inconfortable. »`,
      (t, g) => `« Quand ${g} a dit que 99 % des gens dans ${t} optimisent la mauvaise métrique, j'ai dû arrêter l'enregistrement pour lui demander de s'expliquer. »`,
    ],
  },
  de: {
    topic: "Thema / Branche des Social Clips", topicHint: "(TikTok, Reels, Shorts)", topicPh: "z. B. Venture Capital, Fitness-Mythen, True Crime...",
    guest: "Vorgestellter Gast", opt: "(Optional)", style: "Hook-Stil:", all: "Alle Hooks", copied: "Kopiert!", copy: "Hook kopieren",
    fb: "diese Branche", defTopic: "Venture Capital", defGuest: "Marc Andreessen",
    s: ["Konträr", "Offene Schleife", "Hoher Einsatz", "Große Zahl", "Musterbruch", "Interview"],
    w: [
      "Stellt gängige Annahmen infrage und weckt sofort Neugier.",
      "Erzeugt eine unwiderstehliche Wissenslücke, die Hörer schließen wollen.",
      "Erhöht den emotionalen Einsatz und die Dringlichkeit.",
      "Verspricht harte Daten und Belege statt Meinungen.",
      "Fordert Hörer auf, ihr aktuelles Verhalten zu stoppen, und setzt die Aufmerksamkeit zurück.",
      "Deutet eine echte, spontane Reaktion des Hosts auf ein überraschendes Gastzitat an.",
    ],
    h: [
      (t) => `„Wenn du noch glaubst, dass ${t} so funktioniert wie vor zwei Jahren, verlierst du bald viel Geld.“`,
      (t) => `„Unter Führungskräften in ${t} läuft gerade ein privates Gespräch, das niemand öffentlich zugibt. Am Ende dieser Folge weißt du, warum.“`,
      (t) => `„2026 gibt es in ${t} nur zwei Arten von Menschen: die, die moderne Automatisierung nutzen, und die, die bald überflüssig sind.“`,
      (t) => `„Wir haben 18 Monate lang 50 Mio. $ an Transaktionen in ${t} analysiert. Das ist der eine Ausreißer-Faktor, der 80 % der Gewinne ausmachte.“`,
      (t) => `„Hör auf, Blogartikel zu lesen. Hör auf, Kurse zu kaufen. Alles, was du in ${t} zum Gewinnen brauchst, läuft auf eine unbequeme Gewohnheit hinaus.“`,
      (t, g) => `„Als ${g} sagte, dass 99 % der Leute in ${t} die falsche Kennzahl optimieren, musste ich die Aufnahme stoppen und um eine Erklärung bitten.“`,
    ],
  },
  it: {
    topic: "Argomento / settore della clip social", topicHint: "(TikTok, Reels, Shorts)", topicPh: "es. Venture capital, Miti del fitness, True crime...",
    guest: "Ospite in evidenza", opt: "(Facoltativo)", style: "Stile dell'hook:", all: "Tutti gli hook", copied: "Copiato!", copy: "Copia hook",
    fb: "questo settore", defTopic: "Venture capital", defGuest: "Marc Andreessen",
    s: ["Controcorrente", "Ciclo aperto", "Alta posta", "Grande numero", "Rottura di schema", "Intervista"],
    w: [
      "Mette in discussione le convinzioni comuni e crea subito curiosità.",
      "Crea un vuoto di curiosità irresistibile che l'ascoltatore vuole colmare.",
      "Alza la posta emotiva e l'urgenza.",
      "Promette dati concreti ed evidenze invece di opinioni.",
      "Invita l'ascoltatore a smettere ciò che sta facendo e riporta l'attenzione a zero.",
      "Anticipa una reazione autentica e spontanea del conduttore a una citazione sorprendente dell'ospite.",
    ],
    h: [
      (t) => `“Se credi ancora che ${t} funzioni come due anni fa, stai per perdere un sacco di soldi.”`,
      (t) => `“In questo momento tra i leader di ${t} c'è una conversazione privata che nessuno ammette in pubblico. Alla fine dell'episodio capirai perché.”`,
      (t) => `“Nel 2026 in ${t} ci sono solo due tipi di persone: chi sfrutta l'automazione moderna e chi sta per diventare obsoleto.”`,
      (t) => `“Abbiamo passato 18 mesi ad analizzare 50 milioni di dollari di transazioni in ${t}. Ecco l'unico fattore anomalo che ha generato l'80% dei profitti.”`,
      (t) => `“Smetti di leggere i blog. Smetti di comprare corsi. Tutto ciò che serve per vincere in ${t} si riduce a un'abitudine scomoda.”`,
      (t, g) => `“Quando ${g} ha detto che il 99% delle persone in ${t} ottimizza la metrica sbagliata, ho dovuto fermare la registrazione e chiedere una spiegazione.”`,
    ],
  },
  pt: {
    topic: "Tema / setor do clipe social", topicHint: "(TikTok, Reels, Shorts)", topicPh: "ex.: Capital de risco, Mitos do fitness, True crime...",
    guest: "Convidado em destaque", opt: "(Opcional)", style: "Estilo de gancho:", all: "Todos os ganchos", copied: "Copiado!", copy: "Copiar gancho",
    fb: "este setor", defTopic: "Capital de risco", defGuest: "Marc Andreessen",
    s: ["Contrário", "Ciclo aberto", "Alto risco", "Grande número", "Quebra de padrão", "Entrevista"],
    w: [
      "Desafia suposições comuns e desperta curiosidade imediata.",
      "Cria uma lacuna de curiosidade irresistível que o ouvinte quer resolver.",
      "Eleva o que está em jogo emocionalmente e a urgência.",
      "Promete dados reais e evidências em vez de opiniões.",
      "Pede ao ouvinte que pare o que está fazendo e reinicia a atenção.",
      "Antecipa uma reação autêntica e espontânea do apresentador a uma frase chocante do convidado.",
    ],
    h: [
      (t) => `“Se você ainda acredita que ${t} funciona como há dois anos, está prestes a perder muito dinheiro.”`,
      (t) => `“Existe uma conversa privada entre os líderes de ${t} agora que ninguém admite publicamente. No fim deste episódio, você vai saber por quê.”`,
      (t) => `“Em 2026, só existem dois tipos de pessoas em ${t}: as que usam a automação moderna e as que estão prestes a ficar obsoletas.”`,
      (t) => `“Passamos 18 meses analisando US$ 50 milhões em transações de ${t}. Este é o único fator fora da curva que respondeu por 80% dos lucros.”`,
      (t) => `“Pare de ler blogs. Pare de comprar cursos. Tudo o que você precisa para vencer em ${t} se resume a um hábito desconfortável.”`,
      (t, g) => `“Quando ${g} disse que 99% das pessoas em ${t} otimizam a métrica errada, tive que parar a gravação e pedir que explicasse.”`,
    ],
  },
  ja: {
    topic: "ソーシャルクリップのテーマ／業界", topicHint: "（TikTok、リール、ショート）", topicPh: "例：ベンチャーキャピタル、フィットネスの誤解、実録犯罪…",
    guest: "ゲスト", opt: "（任意）", style: "フックのタイプ：", all: "すべてのフック", copied: "コピーしました！", copy: "フックをコピー",
    fb: "この業界", defTopic: "ベンチャーキャピタル", defGuest: "マーク・アンドリーセン",
    s: ["逆説", "オープンループ", "ハイステークス", "インパクト数値", "パターン中断", "インタビュー"],
    w: [
      "常識に異を唱え、すぐに興味を引きます。",
      "リスナーが答えを知りたくなる好奇心のギャップを作ります。",
      "感情的な緊張感と切迫感を高めます。",
      "意見ではなく、具体的なデータと根拠を約束します。",
      "今していることをやめるよう促し、注意をリセットします。",
      "ゲストの衝撃的な発言に対するホストの自然な反応を予告します。",
    ],
    h: [
      (t) => `「${t}が2年前と同じ仕組みだと思っているなら、大きな損をしますよ。」`,
      (t) => `「今、${t}のリーダーたちの間で、誰も公には認めない非公開の会話が交わされています。このエピソードが終わる頃には、その理由がわかります。」`,
      (t) => `「2026年、${t}には2種類の人しかいません。最新の自動化を活用する人と、時代遅れになる人です。」`,
      (t) => `「私たちは${t}における5,000万ドルの取引を18か月かけて分析しました。利益の80％を生んだ、たった1つの例外的な要因とは。」`,
      (t) => `「ブログを読むのはやめましょう。講座を買うのもやめましょう。${t}で勝つために必要なのは、たった1つの不快な習慣です。」`,
      (t, g) => `「${t}の99％の人が間違った指標を最適化していると${g}さんが言ったとき、私は録音を止めて説明を求めずにはいられませんでした。」`,
    ],
  },
  ko: {
    topic: "소셜 클립 주제 / 업계", topicHint: "(틱톡, 릴스, 쇼츠)", topicPh: "예: 벤처캐피털, 피트니스 속설, 실화 범죄...",
    guest: "출연 게스트", opt: "(선택)", style: "훅 스타일:", all: "모든 훅", copied: "복사됨!", copy: "훅 복사",
    fb: "이 업계", defTopic: "벤처캐피털", defGuest: "마크 앤드리슨",
    s: ["역발상", "오픈 루프", "높은 위험", "충격적 수치", "패턴 깨기", "인터뷰"],
    w: [
      "통념에 도전해 즉각적인 호기심을 불러일으킵니다.",
      "청취자가 끝까지 들으며 해소하고 싶어지는 호기심의 틈을 만듭니다.",
      "감정적 긴장감과 긴박감을 높입니다.",
      "의견이 아닌 구체적인 데이터와 근거를 약속합니다.",
      "지금 하던 일을 멈추라고 말해 주의를 환기합니다.",
      "충격적인 게스트 발언에 대한 진행자의 솔직한 반응을 예고합니다.",
    ],
    h: [
      (t) => `“${t}이(가) 2년 전과 똑같이 돌아간다고 믿는다면, 큰 손해를 보게 될 겁니다.”`,
      (t) => `“지금 ${t} 리더들 사이에서는 누구도 공개적으로 인정하지 않는 비공개 대화가 오가고 있습니다. 이 에피소드가 끝나면 그 이유를 알게 됩니다.”`,
      (t) => `“2026년, ${t}에는 두 부류의 사람만 있습니다. 최신 자동화를 활용하는 사람과 곧 도태될 사람입니다.”`,
      (t) => `“저희는 ${t} 분야의 5천만 달러 규모 거래를 18개월간 분석했습니다. 수익의 80%를 만든 단 하나의 예외적 요인을 공개합니다.”`,
      (t) => `“블로그 읽기를 멈추세요. 강의 사는 것도 멈추세요. ${t}에서 이기는 데 필요한 건 불편한 습관 하나입니다.”`,
      (t, g) => `“${g}이(가) ${t}의 99%가 잘못된 지표를 최적화하고 있다고 말했을 때, 저는 녹음을 멈추고 설명을 부탁해야 했습니다.”`,
    ],
  },
};

const STYLE_IDS = ["contrarian", "openLoop", "highStakes", "bigMetric", "patternInterrupt", "interview"] as const;

export function HookGenerator({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [topic, setTopic] = useState(ui.defTopic);
  const [guest, setGuest] = useState(ui.defGuest);
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const hooks = useMemo(() => {
    const t = topic.trim() || ui.fb;
    const g = guest.trim();
    return STYLE_IDS.map((id, i) => ({
      id,
      style: ui.s[i],
      hook: i === 5 ? ui.h[5](t, g) : (ui.h[i] as (t: string) => string)(t),
      why: ui.w[i],
    })).filter((h) => h.id !== "interview" || g);
  }, [topic, guest, ui]);

  const filteredHooks = useMemo(() => {
    if (selectedStyle === "all") return hooks;
    return hooks.filter((h) => h.id === selectedStyle);
  }, [hooks, selectedStyle]);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Controls */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              {ui.topic} <span className="text-neutral-500 font-normal">{ui.topicHint}</span>
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={ui.topicPh}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.guest} <span className="text-neutral-500 font-normal">{ui.opt}</span>
            </label>
            <input
              type="text"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Styles Filter */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-studio-border/60">
          <span className="text-xs text-neutral-600 dark:text-neutral-400 mr-1">{ui.style}</span>
          {(["all", ...STYLE_IDS.slice(0, 5)] as const).map(
            (style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  selectedStyle === style
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                }`}
              >
                {style === "all" ? ui.all : ui.s[STYLE_IDS.indexOf(style)]}
              </button>
            )
          )}
        </div>
      </div>

      {/* Hooks Grid */}
      <div className="grid grid-cols-1 gap-3">
        {filteredHooks.map((h, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-studio-card border border-studio-border hover:border-orange-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
          >
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-studio-dark border border-studio-border text-orange-500 dark:text-orange-400">
                  {h.style}
                </span>
                <span className="text-[11px] text-neutral-500">{h.why}</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white leading-relaxed">
                {h.hook}
              </p>
            </div>

            <button
              onClick={() => handleCopy(h.hook, i)}
              className="self-end sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:!bg-orange-500 hover:!text-white hover:!border-orange-500 text-xs font-semibold transition-all flex-shrink-0 cursor-pointer shadow-2xs"
            >
              {copiedIndex === i ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{ui.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{ui.copy}</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

