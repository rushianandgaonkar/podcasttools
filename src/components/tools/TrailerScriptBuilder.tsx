"use client";

import React, { useState } from "react";
import { Film, Copy, Check, Download, Clock, Sparkles } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

type TrailerText = {
  title: string; show: string; host: string; q: string; promise: string; schedule: string;
  script: string; pace: (s: number) => string; copy: string; copied: string; foot: string;
  d: { show: string; host: string; q: string; promise: string; launch: string };
  build: (v: { show: string; host: string; q: string; promise: string; launch: string }) => string;
};

const TEXT: Record<SupportedLocale, TrailerText> = {
  en: {
    title: "Trailer Blueprint Parameters", show: "Podcast Show Title", host: "Host Name",
    q: "The Big Provocative Question (First 15s Hook)", promise: "The Promise to the Listener (What they will learn)", schedule: "Release Schedule",
    script: "Trailer Audio Script", pace: (s) => `~${s}s audio pace`, copy: "Copy Trailer Script", copied: "Copied!",
    foot: "A 60 to 90-second trailer is the single highest-converting audio asset you can publish before your official Episode 1 drops.",
    d: { show: "The Midnight Architect", host: "David Miller", q: "What does it really take to build something enduring in an era of hyper-distraction?", promise: "Unfiltered case studies from designers, architects, and founders who chose craftsmanship over speed.", launch: "Every Tuesday starting this November" },
    build: ({ show, host, q, promise, launch }) => `[INTRO: CINEMATIC, ATMOSPHERIC AUDIO SWELLS]

HOST (${host}):
"${q}"

[MUSIC DROPS INTO A PERSISTENT, DRIVING BEAT]

HOST:
"I'm ${host}, and welcome to ${show}.

For the past ten years, I've watched creators sacrifice their health, their vision, and their art chasing algorithm vanity metrics. But there is another way.

On this show, we sit down with the quiet innovators—the engineers, architects, and writers who build category-defining work without burning out.

[QUICK SOUNDBYTE MONTAGE SFX: 3 RAPID GUEST QUOTES]
Guest 1: 'Everyone told us we were crazy to turn down that term sheet.'
Guest 2: 'The craft takes whatever time it takes. You can't microwave excellence.'
Guest 3: 'When we focused on retention instead of acquisition, the whole business unlocked.'

[MUSIC BUILDS TO A CLIMAX]

HOST:
"You will learn:
${promise}

Whether you're in the trenches of your first venture or scaling a legacy studio, this show is your weekly sanctuary for thoughtful building.

${show} launches ${launch}.

Tap that follow button right now on Apple Podcasts, Spotify, or wherever you listen so you don't miss Episode 1.

Welcome to the studio."

[OUTRO MUSIC HITS FINAL RESONANT CHORD AND FADES OUT]`,
  },
  es: {
    title: "Parámetros del tráiler", show: "Título del pódcast", host: "Nombre del anfitrión",
    q: "La gran pregunta provocadora (gancho de los primeros 15 s)", promise: "La promesa al oyente (qué aprenderá)", schedule: "Calendario de publicación",
    script: "Guion de audio del tráiler", pace: (s) => `~${s} s de audio`, copy: "Copiar guion del tráiler", copied: "¡Copiado!",
    foot: "Un tráiler de 60 a 90 segundos es el recurso de audio que más convierte antes de publicar tu episodio 1 oficial.",
    d: { show: "El arquitecto de medianoche", host: "David Miller", q: "¿Qué hace falta realmente para construir algo duradero en una era de hiperdistracción?", promise: "Casos de estudio sin filtros de diseñadores, arquitectos y fundadores que eligieron la artesanía antes que la velocidad.", launch: "Todos los martes a partir de este noviembre" },
    build: ({ show, host, q, promise, launch }) => `[INTRO: SUBEN LOS SONIDOS CINEMATOGRÁFICOS Y ATMOSFÉRICOS]

ANFITRIÓN (${host}):
"${q}"

[LA MÚSICA ENTRA CON UN RITMO CONSTANTE E IMPULSOR]

ANFITRIÓN:
"Soy ${host} y te doy la bienvenida a ${show}.

Durante los últimos diez años he visto a creadores sacrificar su salud, su visión y su arte persiguiendo métricas de vanidad del algoritmo. Pero hay otra forma.

En este programa conversamos con los innovadores discretos: ingenieros, arquitectos y escritores que crean obras que definen su categoría sin quemarse.

[MONTAJE RÁPIDO DE SONIDOS: 3 CITAS BREVES DE INVITADOS]
Invitado 1: 'Todos nos decían que estábamos locos por rechazar esa oferta.'
Invitado 2: 'El oficio lleva el tiempo que lleva. No se puede calentar la excelencia en el microondas.'
Invitado 3: 'Cuando nos centramos en la retención en lugar de la captación, todo el negocio se desbloqueó.'

[LA MÚSICA CRECE HASTA EL CLÍMAX]

ANFITRIÓN:
"Aprenderás:
${promise}

Ya estés en las trincheras de tu primer proyecto o escalando un estudio consolidado, este programa es tu refugio semanal para construir con criterio.

${show} se estrena: ${launch}.

Pulsa ahora mismo el botón de seguir en Apple Podcasts, Spotify o donde escuches para no perderte el episodio 1.

Bienvenido al estudio."

[LA MÚSICA FINAL LLEGA A UN ÚLTIMO ACORDE RESONANTE Y SE DESVANECE]`,
  },
  fr: {
    title: "Paramètres de la bande-annonce", show: "Titre du podcast", host: "Nom de l'animateur",
    q: "La grande question provocante (accroche des 15 premières secondes)", promise: "La promesse faite à l'auditeur (ce qu'il va apprendre)", schedule: "Calendrier de publication",
    script: "Script audio de la bande-annonce", pace: (s) => `~${s} s d'audio`, copy: "Copier le script", copied: "Copié !",
    foot: "Une bande-annonce de 60 à 90 secondes est le contenu audio qui convertit le mieux avant la sortie officielle de l'épisode 1.",
    d: { show: "L'Architecte de minuit", host: "David Miller", q: "Que faut-il vraiment pour construire quelque chose de durable à l'ère de l'hyper-distraction ?", promise: "Des études de cas sans filtre de designers, d'architectes et de fondateurs qui ont choisi le savoir-faire plutôt que la vitesse.", launch: "Chaque mardi à partir de novembre" },
    build: ({ show, host, q, promise, launch }) => `[INTRO : MONTÉE SONORE CINÉMATOGRAPHIQUE ET ATMOSPHÉRIQUE]

ANIMATEUR (${host}) :
« ${q} »

[LA MUSIQUE BASCULE SUR UN BEAT ENTRAÎNANT ET CONTINU]

ANIMATEUR :
« Je suis ${host}, et bienvenue dans ${show}.

Depuis dix ans, je vois des créateurs sacrifier leur santé, leur vision et leur art à la poursuite de métriques de vanité. Mais il existe une autre voie.

Dans cette émission, nous recevons les innovateurs discrets : ingénieurs, architectes et auteurs qui créent des œuvres de référence sans s'épuiser.

[MONTAGE RAPIDE D'EXTRAITS : 3 CITATIONS D'INVITÉS]
Invité 1 : 'Tout le monde nous disait qu'on était fous de refuser cette offre.'
Invité 2 : 'Le savoir-faire prend le temps qu'il faut. On ne passe pas l'excellence au micro-ondes.'
Invité 3 : 'Quand on s'est concentrés sur la rétention plutôt que sur l'acquisition, toute l'entreprise s'est débloquée.'

[LA MUSIQUE MONTE JUSQU'AU CLIMAX]

ANIMATEUR :
« Vous allez apprendre :
${promise}

Que vous soyez dans la tranchée de votre première aventure ou en train de faire grandir un studio établi, cette émission est votre refuge hebdomadaire pour construire avec soin.

${show} arrive : ${launch}.

Appuyez dès maintenant sur le bouton S'abonner sur Apple Podcasts, Spotify ou votre plateforme d'écoute pour ne pas manquer l'épisode 1.

Bienvenue au studio. »

[LA MUSIQUE DE FIN ATTEINT UN DERNIER ACCORD RÉSONANT ET S'ESTOMPE]`,
  },
  de: {
    title: "Trailer-Parameter", show: "Podcast-Titel", host: "Name des Hosts",
    q: "Die große provokante Frage (Hook der ersten 15 Sek.)", promise: "Das Versprechen an die Hörer (was sie lernen werden)", schedule: "Veröffentlichungsplan",
    script: "Trailer-Audioskript", pace: (s) => `~${s} Sek. Audio`, copy: "Trailer-Skript kopieren", copied: "Kopiert!",
    foot: "Ein 60- bis 90-sekündiger Trailer ist das Audio-Asset mit der höchsten Conversion, bevor deine offizielle Folge 1 erscheint.",
    d: { show: "Der Mitternachtsarchitekt", host: "David Miller", q: "Was braucht es wirklich, um in Zeiten ständiger Ablenkung etwas Beständiges zu schaffen?", promise: "Ungefilterte Fallstudien von Designern, Architekten und Gründern, die Handwerkskunst über Tempo stellten.", launch: "Jeden Dienstag ab diesem November" },
    build: ({ show, host, q, promise, launch }) => `[INTRO: FILMISCHER, ATMOSPHÄRISCHER SOUND SCHWILLT AN]

HOST (${host}):
„${q}“

[MUSIK GEHT IN EINEN TREIBENDEN BEAT ÜBER]

HOST:
„Ich bin ${host}, und willkommen bei ${show}.

Seit zehn Jahren sehe ich Creator, die ihre Gesundheit, ihre Vision und ihre Kunst für Algorithmus-Eitelkeitsmetriken opfern. Aber es gibt einen anderen Weg.

In dieser Show sprechen wir mit den leisen Innovatoren – Ingenieuren, Architekten und Autoren, die kategorieprägende Arbeit schaffen, ohne auszubrennen.

[SCHNELLE SOUNDBITE-MONTAGE: 3 KURZE GASTZITATE]
Gast 1: ‚Alle sagten, wir seien verrückt, dieses Angebot abzulehnen.‘
Gast 2: ‚Handwerk braucht, so lange es braucht. Exzellenz lässt sich nicht in der Mikrowelle machen.‘
Gast 3: ‚Als wir uns auf Kundenbindung statt Neukundengewinnung konzentrierten, ging das ganze Geschäft auf.‘

[MUSIK STEIGERT SICH ZUM HÖHEPUNKT]

HOST:
„Du wirst lernen:
${promise}

Ob du mitten in deinem ersten Projekt steckst oder ein etabliertes Studio skalierst – diese Show ist dein wöchentlicher Zufluchtsort für durchdachtes Bauen.

${show} startet: ${launch}.

Tippe jetzt auf Folgen – bei Apple Podcasts, Spotify oder wo immer du hörst –, damit du Folge 1 nicht verpasst.

Willkommen im Studio.“

[OUTRO-MUSIK ERREICHT DEN LETZTEN NACHHALLENDEN AKKORD UND BLENDET AUS]`,
  },
  it: {
    title: "Parametri del trailer", show: "Titolo del podcast", host: "Nome del conduttore",
    q: "La grande domanda provocatoria (gancio dei primi 15 s)", promise: "La promessa all'ascoltatore (cosa imparerà)", schedule: "Calendario di uscita",
    script: "Script audio del trailer", pace: (s) => `~${s} s di audio`, copy: "Copia script del trailer", copied: "Copiato!",
    foot: "Un trailer di 60-90 secondi è il contenuto audio che converte di più prima dell'uscita ufficiale dell'episodio 1.",
    d: { show: "L'architetto di mezzanotte", host: "David Miller", q: "Che cosa serve davvero per costruire qualcosa di duraturo nell'era dell'iperdistrazione?", promise: "Casi di studio senza filtri di designer, architetti e fondatori che hanno scelto l'artigianalità invece della velocità.", launch: "Ogni martedì a partire da novembre" },
    build: ({ show, host, q, promise, launch }) => `[INTRO: CRESCONO SUONI CINEMATOGRAFICI E ATMOSFERICI]

CONDUTTORE (${host}):
"${q}"

[LA MUSICA ENTRA CON UN BEAT INCALZANTE]

CONDUTTORE:
"Sono ${host} e benvenuti a ${show}.

Negli ultimi dieci anni ho visto creator sacrificare salute, visione e arte inseguendo metriche di vanità. Ma esiste un'altra strada.

In questo programma incontriamo gli innovatori silenziosi: ingegneri, architetti e scrittori che creano opere di riferimento senza bruciarsi.

[MONTAGGIO RAPIDO DI SUONI: 3 BREVI CITAZIONI DI OSPITI]
Ospite 1: 'Tutti dicevano che eravamo pazzi a rifiutare quell'offerta.'
Ospite 2: 'Il mestiere richiede il tempo che richiede. L'eccellenza non si scalda al microonde.'
Ospite 3: 'Quando ci siamo concentrati sulla fidelizzazione invece che sull'acquisizione, tutto il business si è sbloccato.'

[LA MUSICA SALE FINO AL CLIMAX]

CONDUTTORE:
"Imparerai:
${promise}

Che tu sia nel pieno della tua prima avventura o stia facendo crescere uno studio consolidato, questo programma è il tuo rifugio settimanale per costruire con cura.

${show} debutta: ${launch}.

Premi subito il pulsante Segui su Apple Podcasts, Spotify o dove ascolti, per non perdere l'episodio 1.

Benvenuti nello studio."

[LA MUSICA FINALE RAGGIUNGE UN ULTIMO ACCORDO RISONANTE E SVANISCE]`,
  },
  pt: {
    title: "Parâmetros do trailer", show: "Título do podcast", host: "Nome do apresentador",
    q: "A grande pergunta provocativa (gancho dos primeiros 15 s)", promise: "A promessa ao ouvinte (o que ele vai aprender)", schedule: "Cronograma de lançamento",
    script: "Roteiro de áudio do trailer", pace: (s) => `~${s} s de áudio`, copy: "Copiar roteiro do trailer", copied: "Copiado!",
    foot: "Um trailer de 60 a 90 segundos é o conteúdo de áudio que mais converte antes do lançamento oficial do episódio 1.",
    d: { show: "O Arquiteto da Meia-Noite", host: "David Miller", q: "O que realmente é preciso para construir algo duradouro na era da hiperdistração?", promise: "Estudos de caso sem filtro de designers, arquitetos e fundadores que escolheram o ofício em vez da velocidade.", launch: "Toda terça-feira a partir de novembro" },
    build: ({ show, host, q, promise, launch }) => `[ABERTURA: SOM CINEMATOGRÁFICO E ATMOSFÉRICO CRESCE]

APRESENTADOR (${host}):
"${q}"

[A MÚSICA ENTRA COM UMA BATIDA CONSTANTE E ENVOLVENTE]

APRESENTADOR:
"Eu sou ${host} e boas-vindas ao ${show}.

Nos últimos dez anos, vi criadores sacrificarem a saúde, a visão e a arte atrás de métricas de vaidade do algoritmo. Mas existe outro caminho.

Neste programa, conversamos com os inovadores discretos: engenheiros, arquitetos e escritores que criam trabalhos de referência sem se esgotar.

[MONTAGEM RÁPIDA DE TRECHOS: 3 FRASES CURTAS DE CONVIDADOS]
Convidado 1: 'Todo mundo dizia que éramos loucos por recusar aquela proposta.'
Convidado 2: 'O ofício leva o tempo que leva. Não dá para esquentar excelência no micro-ondas.'
Convidado 3: 'Quando focamos em retenção em vez de aquisição, o negócio inteiro destravou.'

[A MÚSICA CRESCE ATÉ O CLÍMAX]

APRESENTADOR:
"Você vai aprender:
${promise}

Esteja você no meio do seu primeiro projeto ou escalando um estúdio consolidado, este programa é o seu refúgio semanal para construir com cuidado.

${show} estreia: ${launch}.

Toque agora no botão de seguir no Apple Podcasts, no Spotify ou onde você ouve, para não perder o episódio 1.

Bem-vindo ao estúdio."

[A MÚSICA FINAL ATINGE UM ÚLTIMO ACORDE RESSONANTE E SE DISSIPA]`,
  },
  ja: {
    title: "トレーラー設計パラメーター", show: "ポッドキャストのタイトル", host: "ホスト名",
    q: "印象的な問いかけ（冒頭15秒のフック）", promise: "リスナーへの約束（何が学べるか）", schedule: "配信スケジュール",
    script: "トレーラー音声スクリプト", pace: (s) => `約${s}秒`, copy: "トレーラースクリプトをコピー", copied: "コピーしました！",
    foot: "60〜90秒のトレーラーは、正式な第1回を公開する前に出せる音声コンテンツの中で最も成果につながりやすい施策です。",
    d: { show: "真夜中の建築家", host: "デイビッド・ミラー", q: "過剰な情報に気が散る時代に、本当に長く続くものを築くには何が必要でしょうか？", promise: "スピードよりも職人技を選んだデザイナー、建築家、創業者たちの飾らない事例を紹介します。", launch: "今年11月から毎週火曜日" },
    build: ({ show, host, q, promise, launch }) => `[イントロ：映画のような雰囲気のあるサウンドが高まる]

ホスト（${host}）：
「${q}」

[音楽が力強く続くビートに切り替わる]

ホスト：
「${host}です。${show}へようこそ。

この10年、多くのクリエイターがアルゴリズムの見せかけの数字を追い、健康やビジョン、作品を犠牲にするのを見てきました。でも、別の道があります。

この番組では、静かなイノベーターたち、つまり燃え尽きることなくジャンルを定義する仕事を生み出すエンジニア、建築家、作家をお迎えします。

[短いサウンドバイトのモンタージュ：ゲストの声3つ]
ゲスト1：『あの条件を断るなんてどうかしていると、みんなに言われました。』
ゲスト2：『職人技には必要な時間がかかります。卓越さは電子レンジでは温められません。』
ゲスト3：『新規獲得ではなく継続に集中したら、事業全体が動き出しました。』

[音楽がクライマックスへ高まる]

ホスト：
「この番組でわかること：
${promise}

初めての挑戦の真っ只中でも、歴史あるスタジオを拡大している最中でも、この番組は丁寧にものづくりをする人のための毎週の拠り所です。

${show}は${launch}にスタートします。

第1回を聴き逃さないよう、今すぐApple PodcastsやSpotifyなど、お使いのアプリでフォローボタンをタップしてください。

スタジオへようこそ。」

[アウトロ音楽が最後の余韻ある和音を鳴らしてフェードアウト]`,
  },
  ko: {
    title: "트레일러 구성 요소", show: "팟캐스트 제목", host: "진행자 이름",
    q: "강렬한 핵심 질문 (처음 15초 훅)", promise: "청취자에게 하는 약속 (무엇을 배우게 되는지)", schedule: "공개 일정",
    script: "트레일러 오디오 스크립트", pace: (s) => `약 ${s}초 분량`, copy: "트레일러 스크립트 복사", copied: "복사됨!",
    foot: "60~90초 트레일러는 공식 1화를 공개하기 전에 올릴 수 있는 오디오 콘텐츠 중 전환율이 가장 높습니다.",
    d: { show: "한밤의 건축가", host: "데이비드 밀러", q: "끊임없이 산만해지는 시대에 오래가는 무언가를 만들려면 정말 무엇이 필요할까요?", promise: "속도보다 장인정신을 택한 디자이너, 건축가, 창업자들의 꾸밈없는 사례를 들려드립니다.", launch: "올해 11월부터 매주 화요일" },
    build: ({ show, host, q, promise, launch }) => `[인트로: 영화 같은 분위기의 사운드가 고조된다]

진행자 (${host}):
"${q}"

[음악이 힘 있게 이어지는 비트로 전환된다]

진행자:
"${host}입니다. ${show}에 오신 것을 환영합니다.

지난 10년간 많은 크리에이터가 알고리즘이 만든 허울뿐인 지표를 쫓느라 건강과 비전, 작품을 희생하는 모습을 지켜봤습니다. 하지만 다른 길이 있습니다.

이 프로그램에서는 번아웃 없이 분야를 대표할 작품을 만들어 내는 조용한 혁신가들, 즉 엔지니어, 건축가, 작가들을 만납니다.

[짧은 사운드바이트 몽타주: 게스트 발언 3개]
게스트 1: '그 제안을 거절하다니 미쳤다고 모두가 말했어요.'
게스트 2: '장인정신에는 필요한 만큼의 시간이 걸립니다. 탁월함은 전자레인지에 데울 수 없어요.'
게스트 3: '신규 확보 대신 리텐션에 집중하자 사업 전체가 풀리기 시작했어요.'

[음악이 클라이맥스를 향해 고조된다]

진행자:
"이 프로그램에서 배우게 될 내용:
${promise}

첫 도전의 한가운데에 있든, 오래된 스튜디오를 키우고 있든, 이 프로그램은 신중하게 만들어 가는 사람들을 위한 매주의 쉼터입니다.

${show}는 ${launch} 시작합니다.

1화를 놓치지 않도록 지금 바로 Apple Podcasts, Spotify 등 사용 중인 앱에서 팔로우 버튼을 눌러 주세요.

스튜디오에 오신 것을 환영합니다."

[아웃트로 음악이 마지막 여운 있는 화음을 울리며 페이드아웃된다]`,
  },
};

export function TrailerScriptBuilder({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [showName, setShowName] = useState(ui.d.show);
  const [hostName, setHostName] = useState(ui.d.host);
  const [bigQuestion, setBigQuestion] = useState(ui.d.q);
  const [audiencePromise, setAudiencePromise] = useState(ui.d.promise);
  const [launchDate, setLaunchDate] = useState(ui.d.launch);
  const [copied, setCopied] = useState(false);

  const fullTrailerScript = ui.build({ show: showName, host: hostName, q: bigQuestion, promise: audiencePromise, launch: launchDate });

  // shortcut: ja/ko have no spaces, so estimate from characters (~7/s); tune with real read-aloud timing
  const cjk = lang === "ja" || lang === "ko";
  const wordCount = fullTrailerScript.split(/\s+/).filter(Boolean).length;
  const estimatedSeconds = cjk
    ? Math.round(fullTrailerScript.replace(/\s/g, "").length / 7)
    : Math.round((wordCount / 135) * 60);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullTrailerScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Form */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white pb-2 border-b border-studio-border/60 flex items-center gap-2">
            <Film className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            {ui.title}
          </h2>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.show}</label>
            <input
              type="text"
              value={showName}
              onChange={(e) => setShowName(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.host}</label>
            <input
              type="text"
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              {ui.q}
            </label>
            <textarea
              rows={2}
              value={bigQuestion}
              onChange={(e) => setBigQuestion(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              {ui.promise}
            </label>
            <textarea
              rows={2}
              value={audiencePromise}
              onChange={(e) => setAudiencePromise(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.schedule}</label>
            <input
              type="text"
              value={launchDate}
              onChange={(e) => setLaunchDate(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Right Output */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-studio-border/60 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                  {ui.script}
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {ui.pace(estimatedSeconds)}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? ui.copied : ui.copy}
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-studio-darkest border border-studio-border text-xs text-neutral-900 dark:text-neutral-100 font-sans leading-relaxed whitespace-pre-wrap max-h-[420px] overflow-y-auto select-text">
              {fullTrailerScript}
            </pre>
          </div>

          <div className="text-[11px] text-neutral-500 pt-2 border-t border-studio-border/60">
            {ui.foot}
          </div>
        </div>
      </div>
    </div>
  );
}

