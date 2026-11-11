"use client";

import React, { useState, useMemo } from "react";
import { Headphones, Copy, Check, Download, Clock, Mic, Sparkles } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

// Script order: interview/punchy, interview/deep, interview/casual, solo, narrative
type Tpl = (t: string, g: string) => string;
type IntroText = {
  topic: string; guest: string; opt: string; format: string; tone: string;
  formats: [string, string, string]; tones: [string, string, string];
  view: string; runtime: (s: number, w: number) => string; copy: string; copied: string;
  defTopic: string; defGuest: string; fbTopic: string;
  scripts: [Tpl, Tpl, Tpl, Tpl, Tpl];
};

const TEXT: Record<SupportedLocale, IntroText> = {
  en: {
    topic: "Episode Topic / Promise", guest: "Guest Name & Title", opt: "(If applicable)", format: "Show Format:", tone: "Delivery Tone:",
    formats: ["Guest Interview", "Solo Monologue", "Story / Narrative"], tones: ["High-Energy", "Deep & Reflective", "Conversational"],
    view: "Teleprompter & Script View", runtime: (s, w) => `~${s}s audio runtime (${w} words)`, copy: "Copy Script", copied: "Copied Script!",
    defTopic: "Why 90% of Startups Run Out of Cash in Year Two", defGuest: "Marcus Sterling (Serial Tech Founder)", fbTopic: "today's topic",
    scripts: [
      (t, g) => `[UPBEAT THEME MUSIC - FADES UNDER AT 0:03]

HOST:
"What if the standard advice everyone gives about ${t} is actually the fastest way to hit a wall?

Today on the show, we are joined by ${g || "one of the top minds in the space"}. We are pulling back the curtain on the metrics that actually matter, the near-fatal mistakes made along the way, and the exact playbook you can execute starting this week.

If you enjoy conversations that cut through the fluff, hit that follow button on Spotify or Apple Podcasts right now.

Let's dive in with ${g || "our guest"}."

[THEME MUSIC SWELLS THEN DIPS INTO INTERVIEW]`,
      (t, g) => `[SUBTLE AMBIENT PAD MUSIC - FADES UNDER]

HOST:
"There are moments in your career where a single decision changes everything. Today, we're exploring ${t}—not from the theoretical perspective, but from the messy, unfiltered reality of someone who lived it.

Our guest today is ${g || "an industry pioneer"}. We explore the turning points, the hard-won philosophy, and the unspoken rules of modern success.

Pour a cup of coffee, settle in, and let's get into the episode."

[MUSIC FADES OUT]`,
      (t, g) => `[CASUAL INTRO MUSIC]

HOST:
"Hey everyone, welcome back to the show! Today is an episode I've been wanting to record for months because we are tackling ${t}.

And joining us today is none other than ${g || "our fantastic guest"}! We got into some wild stories, practical tools, and a few things that might surprise you.

Before we start, do us a quick favor—drop a quick rating or review if you've been finding value in the podcast.

Alright, here is my conversation with ${g || "our guest"}!"`,
      (t) => `[ENERGETIC THEME MUSIC - FADES UNDER AT 0:04]

HOST:
"Welcome back to another solo episode. Today, we need to have an honest conversation about ${t}.

Over the last few months, I've noticed a dangerous pattern among creators and builders. Everyone is focusing on the surface-level vanity metrics, while completely ignoring the core foundation that actually moves the needle.

In the next 20 minutes, I'm breaking down the 3-part framework I use to solve this. Grab a notebook, turn off distractions, and let's jump straight into it."

[MUSIC STING]`,
      (t) => `[SUSPENSEFUL ATMOSPHERIC TONE]

HOST:
"In the early hours of a Tuesday morning, everything seemed normal. Until the numbers came in...

This is the story of ${t}. It's a tale of ambition, unforeseen bottlenecks, and the critical lessons that followed.

Over the next 30 minutes, you'll hear how one pivotal decision changed the entire trajectory.

I'm your host, and this is today's deep dive."

[AUDIO TRANSITION SFX]`,
    ],
  },
  es: {
    topic: "Tema / promesa del episodio", guest: "Nombre y cargo del invitado", opt: "(si aplica)", format: "Formato del programa:", tone: "Tono de la locución:",
    formats: ["Entrevista con invitado", "Monólogo en solitario", "Historia / Narrativa"], tones: ["Alta energía", "Profundo y reflexivo", "Conversacional"],
    view: "Vista de teleprompter y guion", runtime: (s, w) => `~${s} s de audio (${w} palabras)`, copy: "Copiar guion", copied: "¡Guion copiado!",
    defTopic: "Por qué el 90 % de las startups se quedan sin dinero en el segundo año", defGuest: "Marcus Sterling (fundador tecnológico en serie)", fbTopic: "el tema de hoy",
    scripts: [
      (t, g) => `[MÚSICA DE CABECERA ANIMADA - BAJA A SEGUNDO PLANO EN EL 0:03]

ANFITRIÓN:
"¿Y si el consejo habitual que todos dan sobre ${t} fuera en realidad la forma más rápida de chocar con un muro?

Hoy nos acompaña ${g || "una de las mentes más brillantes del sector"}. Vamos a destapar las métricas que de verdad importan, los errores casi fatales del camino y el plan exacto que puedes ejecutar desde esta misma semana.

Si te gustan las conversaciones que van al grano, pulsa ahora mismo el botón de seguir en Spotify o Apple Podcasts.

Empezamos con ${g || "nuestro invitado"}."

[LA MÚSICA CRECE Y BAJA PARA DAR PASO A LA ENTREVISTA]`,
      (t, g) => `[MÚSICA AMBIENTAL SUTIL - BAJA A SEGUNDO PLANO]

ANFITRIÓN:
"Hay momentos en la carrera en los que una sola decisión lo cambia todo. Hoy exploramos ${t}, no desde la teoría, sino desde la realidad caótica y sin filtros de alguien que la vivió.

Nuestro invitado de hoy es ${g || "un pionero del sector"}. Repasamos los puntos de inflexión, la filosofía ganada a pulso y las reglas no escritas del éxito moderno.

Sírvete un café, ponte cómodo y vamos con el episodio."

[LA MÚSICA SE DESVANECE]`,
      (t, g) => `[MÚSICA DE INTRO RELAJADA]

ANFITRIÓN:
"¡Hola a todos, bienvenidos otra vez al programa! Hoy toca un episodio que llevaba meses queriendo grabar, porque nos metemos de lleno con ${t}.

¡Y nos acompaña nada menos que ${g || "nuestro fantástico invitado"}! Salieron historias increíbles, herramientas prácticas y un par de cosas que pueden sorprenderte.

Antes de empezar, hazme un favor: deja una valoración o una reseña si el pódcast te está aportando valor.

¡Muy bien, aquí tienes mi conversación con ${g || "nuestro invitado"}!"`,
      (t) => `[MÚSICA DE CABECERA ENÉRGICA - BAJA A SEGUNDO PLANO EN EL 0:04]

ANFITRIÓN:
"Bienvenidos a otro episodio en solitario. Hoy necesitamos tener una conversación sincera sobre ${t}.

Durante los últimos meses he notado un patrón peligroso entre creadores y emprendedores. Todos se centran en métricas de vanidad superficiales y pasan por alto la base que de verdad marca la diferencia.

En los próximos 20 minutos desgloso el marco de 3 partes que uso para resolverlo. Coge una libreta, apaga las distracciones y vamos directos al grano."

[ESTRIBILLO MUSICAL]`,
      (t) => `[TONO ATMOSFÉRICO DE SUSPENSE]

ANFITRIÓN:
"En las primeras horas de una mañana de martes, todo parecía normal. Hasta que llegaron los números...

Esta es la historia de ${t}. Un relato de ambición, cuellos de botella imprevistos y las lecciones cruciales que vinieron después.

En los próximos 30 minutos oirás cómo una decisión decisiva cambió toda la trayectoria.

Soy tu anfitrión y esta es la inmersión de hoy."

[EFECTO DE TRANSICIÓN DE AUDIO]`,
    ],
  },
  fr: {
    topic: "Sujet / promesse de l'épisode", guest: "Nom et fonction de l'invité", opt: "(le cas échéant)", format: "Format de l'émission :", tone: "Ton de la narration :",
    formats: ["Interview d'invité", "Monologue en solo", "Récit / Narration"], tones: ["Très énergique", "Profond et réfléchi", "Conversationnel"],
    view: "Vue téléprompteur et script", runtime: (s, w) => `~${s} s d'audio (${w} mots)`, copy: "Copier le script", copied: "Script copié !",
    defTopic: "Pourquoi 90 % des startups manquent de trésorerie dès la deuxième année", defGuest: "Marcus Sterling (fondateur tech en série)", fbTopic: "le sujet du jour",
    scripts: [
      (t, g) => `[MUSIQUE DE GÉNÉRIQUE ENTRAÎNANTE - BAISSE À 0:03]

ANIMATEUR :
« Et si le conseil que tout le monde donne sur ${t} était en réalité le chemin le plus rapide vers le mur ?

Aujourd'hui, nous accueillons ${g || "l'un des esprits les plus brillants du domaine"}. Nous levons le voile sur les indicateurs qui comptent vraiment, les erreurs presque fatales commises en chemin et la méthode exacte à appliquer dès cette semaine.

Si vous aimez les conversations qui vont droit au but, appuyez dès maintenant sur S'abonner sur Spotify ou Apple Podcasts.

Plongeons avec ${g || "notre invité"}. »

[LA MUSIQUE MONTE PUIS BASCULE EN DOUCEUR VERS L'INTERVIEW]`,
      (t, g) => `[MUSIQUE D'AMBIANCE DISCRÈTE - BAISSE EN FOND]

ANIMATEUR :
« Il y a des moments dans une carrière où une seule décision change tout. Aujourd'hui, nous explorons ${t} — non pas sous l'angle théorique, mais à travers la réalité brute et sans filtre de quelqu'un qui l'a vécu.

Notre invité du jour est ${g || "un pionnier du secteur"}. Nous revenons sur les tournants, la philosophie acquise à la dure et les règles tacites de la réussite moderne.

Servez-vous un café, installez-vous, et entrons dans l'épisode. »

[LA MUSIQUE S'ESTOMPE]`,
      (t, g) => `[MUSIQUE D'INTRO DÉTENDUE]

ANIMATEUR :
« Salut tout le monde, bienvenue ! Aujourd'hui, c'est un épisode que j'avais envie d'enregistrer depuis des mois, car nous nous attaquons à ${t}.

Et avec nous, rien de moins que ${g || "notre formidable invité"} ! Au programme : des histoires folles, des outils pratiques et quelques surprises.

Avant de commencer, rendez-nous un petit service : laissez une note ou un avis si le podcast vous apporte de la valeur.

C'est parti, voici ma conversation avec ${g || "notre invité"} ! »`,
      (t) => `[GÉNÉRIQUE ÉNERGIQUE - BAISSE À 0:04]

ANIMATEUR :
« Bienvenue dans un nouvel épisode en solo. Aujourd'hui, nous devons avoir une conversation franche sur ${t}.

Ces derniers mois, j'ai remarqué un schéma dangereux chez les créateurs et les entrepreneurs. Tout le monde se concentre sur des indicateurs de vanité superficiels, en ignorant complètement la base qui fait vraiment la différence.

Dans les 20 prochaines minutes, je détaille la méthode en 3 étapes que j'utilise pour y remédier. Prenez un carnet, coupez les distractions, et allons droit au but. »

[JINGLE MUSICAL]`,
      (t) => `[AMBIANCE SONORE À SUSPENSE]

ANIMATEUR :
« Aux premières heures d'un mardi matin, tout semblait normal. Jusqu'à ce que les chiffres tombent...

Voici l'histoire de ${t}. Un récit d'ambition, de goulots d'étranglement imprévus et des leçons cruciales qui ont suivi.

Dans les 30 prochaines minutes, vous entendrez comment une décision charnière a changé toute la trajectoire.

Je suis votre animateur, et voici la plongée du jour. »

[EFFET SONORE DE TRANSITION]`,
    ],
  },
  de: {
    topic: "Episodenthema / Versprechen", guest: "Name & Titel des Gasts", opt: "(falls zutreffend)", format: "Show-Format:", tone: "Vortragston:",
    formats: ["Gastinterview", "Solo-Monolog", "Geschichte / Erzählung"], tones: ["Energiegeladen", "Tiefgründig & nachdenklich", "Locker im Gespräch"],
    view: "Teleprompter- & Skriptansicht", runtime: (s, w) => `~${s} Sek. Audio (${w} Wörter)`, copy: "Skript kopieren", copied: "Skript kopiert!",
    defTopic: "Warum 90 % der Startups im zweiten Jahr das Geld ausgeht", defGuest: "Marcus Sterling (Serien-Tech-Gründer)", fbTopic: "das heutige Thema",
    scripts: [
      (t, g) => `[SCHWUNGVOLLE TITELMUSIK - BLENDET BEI 0:03 UNTER]

HOST:
„Was, wenn der Standardrat, den alle zu ${t} geben, in Wahrheit der schnellste Weg gegen die Wand ist?

Heute ist ${g || "einer der klügsten Köpfe der Branche"} bei uns zu Gast. Wir ziehen den Vorhang weg: Welche Kennzahlen wirklich zählen, welche fast fatalen Fehler unterwegs passiert sind und welchen konkreten Plan du schon diese Woche umsetzen kannst.

Wenn du Gespräche ohne Geschwafel magst, tippe jetzt auf Folgen – bei Spotify oder Apple Podcasts.

Los geht's mit ${g || "unserem Gast"}.“

[TITELMUSIK SCHWILLT AN UND GLEITET INS INTERVIEW]`,
      (t, g) => `[DEZENTE AMBIENT-KLÄNGE - BLENDEN UNTER]

HOST:
„Es gibt Momente in einer Laufbahn, in denen eine einzige Entscheidung alles verändert. Heute geht es um ${t} – nicht aus theoretischer Sicht, sondern aus der chaotischen, ungefilterten Realität von jemandem, der es erlebt hat.

Unser Gast ist ${g || "ein Pionier der Branche"}. Wir sprechen über Wendepunkte, hart erarbeitete Überzeugungen und die ungeschriebenen Regeln modernen Erfolgs.

Schenk dir einen Kaffee ein, lehn dich zurück, und los geht's mit der Folge.“

[MUSIK BLENDET AUS]`,
      (t, g) => `[LOCKERE INTRO-MUSIK]

HOST:
„Hallo zusammen, willkommen zurück! Heute ist eine Folge, die ich seit Monaten aufnehmen wollte, denn wir nehmen uns ${t} vor.

Und bei uns ist niemand Geringeres als ${g || "unser fantastischer Gast"}! Es gab wilde Geschichten, praktische Tools und ein paar Dinge, die dich überraschen könnten.

Bevor wir starten, tu uns einen kleinen Gefallen: Hinterlasse eine Bewertung, wenn dir der Podcast etwas bringt.

Alles klar, hier ist mein Gespräch mit ${g || "unserem Gast"}!“`,
      (t) => `[ENERGISCHE TITELMUSIK - BLENDET BEI 0:04 UNTER]

HOST:
„Willkommen zu einer weiteren Solo-Folge. Heute müssen wir ehrlich über ${t} sprechen.

In den letzten Monaten ist mir ein gefährliches Muster bei Creatorn und Gründern aufgefallen. Alle konzentrieren sich auf oberflächliche Eitelkeitskennzahlen und ignorieren das Fundament, das wirklich etwas bewegt.

In den nächsten 20 Minuten zeige ich dir das dreiteilige Framework, mit dem ich das löse. Schnapp dir ein Notizbuch, schalte Ablenkungen aus, und los.“

[MUSIKALISCHER AKZENT]`,
      (t) => `[SPANNUNGSGELADENE ATMOSPHÄRE]

HOST:
„In den frühen Morgenstunden eines Dienstags schien alles normal. Bis die Zahlen kamen ...

Das ist die Geschichte von ${t}. Eine Geschichte über Ehrgeiz, unvorhergesehene Engpässe und die entscheidenden Lehren danach.

In den nächsten 30 Minuten hörst du, wie eine einzige Entscheidung den gesamten Kurs verändert hat.

Ich bin dein Host, und das ist der heutige Deep Dive.“

[AUDIO-ÜBERGANGSEFFEKT]`,
    ],
  },
  it: {
    topic: "Argomento / promessa dell'episodio", guest: "Nome e ruolo dell'ospite", opt: "(se applicabile)", format: "Formato del programma:", tone: "Tono della narrazione:",
    formats: ["Intervista a un ospite", "Monologo in solitaria", "Storia / Narrazione"], tones: ["Alta energia", "Profondo e riflessivo", "Colloquiale"],
    view: "Vista teleprompter e script", runtime: (s, w) => `~${s} s di audio (${w} parole)`, copy: "Copia script", copied: "Script copiato!",
    defTopic: "Perché il 90% delle startup resta senza liquidità al secondo anno", defGuest: "Marcus Sterling (fondatore tech seriale)", fbTopic: "l'argomento di oggi",
    scripts: [
      (t, g) => `[SIGLA VIVACE - SFUMA SOTTO A 0:03]

CONDUTTORE:
"E se il consiglio che tutti danno su ${t} fosse in realtà la via più rapida per sbattere contro un muro?

Oggi con noi c'è ${g || "una delle menti più brillanti del settore"}. Sveliamo le metriche che contano davvero, gli errori quasi fatali commessi lungo il percorso e il piano esatto che puoi applicare già da questa settimana.

Se ami le conversazioni che vanno dritte al punto, premi subito Segui su Spotify o Apple Podcasts.

Iniziamo con ${g || "il nostro ospite"}."

[LA SIGLA CRESCE E POI SCENDE PER LASCIARE SPAZIO ALL'INTERVISTA]`,
      (t, g) => `[MUSICA AMBIENT DISCRETA - SFUMA SOTTO]

CONDUTTORE:
"Ci sono momenti nella carriera in cui una sola decisione cambia tutto. Oggi esploriamo ${t}, non dal punto di vista teorico, ma dalla realtà caotica e senza filtri di chi l'ha vissuta.

Il nostro ospite di oggi è ${g || "un pioniere del settore"}. Parliamo dei punti di svolta, della filosofia conquistata a fatica e delle regole non scritte del successo moderno.

Versati un caffè, mettiti comodo e cominciamo l'episodio."

[LA MUSICA SVANISCE]`,
      (t, g) => `[MUSICA DI INTRO RILASSATA]

CONDUTTORE:
"Ciao a tutti, bentornati! Oggi è un episodio che volevo registrare da mesi, perché affrontiamo ${t}.

E con noi c'è nientemeno che ${g || "il nostro fantastico ospite"}! Abbiamo parlato di storie pazzesche, strumenti pratici e qualche cosa che potrebbe sorprenderti.

Prima di iniziare, fammi un favore: lascia una valutazione o una recensione se il podcast ti è utile.

Bene, ecco la mia conversazione con ${g || "il nostro ospite"}!"`,
      (t) => `[SIGLA ENERGICA - SFUMA SOTTO A 0:04]

CONDUTTORE:
"Bentornati a un nuovo episodio in solitaria. Oggi dobbiamo fare una chiacchierata sincera su ${t}.

Negli ultimi mesi ho notato uno schema pericoloso tra creator e imprenditori. Tutti si concentrano su metriche di vanità superficiali, ignorando le fondamenta che fanno davvero la differenza.

Nei prossimi 20 minuti ti spiego il metodo in 3 parti che uso per risolvere il problema. Prendi un taccuino, spegni le distrazioni e partiamo subito."

[STACCO MUSICALE]`,
      (t) => `[ATMOSFERA SONORA DI SUSPENSE]

CONDUTTORE:
"Nelle prime ore di un martedì mattina, tutto sembrava normale. Finché non sono arrivati i numeri...

Questa è la storia di ${t}. Un racconto di ambizione, colli di bottiglia imprevisti e lezioni cruciali che ne sono seguite.

Nei prossimi 30 minuti sentirai come una decisione cruciale ha cambiato l'intera traiettoria.

Sono il tuo conduttore e questo è l'approfondimento di oggi."

[EFFETTO DI TRANSIZIONE AUDIO]`,
    ],
  },
  pt: {
    topic: "Tema / promessa do episódio", guest: "Nome e cargo do convidado", opt: "(se aplicável)", format: "Formato do programa:", tone: "Tom de entrega:",
    formats: ["Entrevista com convidado", "Monólogo solo", "História / Narrativa"], tones: ["Alta energia", "Profundo e reflexivo", "Conversacional"],
    view: "Visão de teleprompter e roteiro", runtime: (s, w) => `~${s} s de áudio (${w} palavras)`, copy: "Copiar roteiro", copied: "Roteiro copiado!",
    defTopic: "Por que 90% das startups ficam sem caixa no segundo ano", defGuest: "Marcus Sterling (fundador de tecnologia serial)", fbTopic: "o tema de hoje",
    scripts: [
      (t, g) => `[VINHETA ANIMADA - BAIXA PARA SEGUNDO PLANO EM 0:03]

APRESENTADOR:
"E se o conselho padrão que todo mundo dá sobre ${t} for, na verdade, o caminho mais rápido para bater na parede?

Hoje recebemos ${g || "uma das mentes mais brilhantes do setor"}. Vamos revelar as métricas que realmente importam, os erros quase fatais cometidos no caminho e o plano exato que você pode executar já nesta semana.

Se você gosta de conversas que vão direto ao ponto, toque agora no botão de seguir no Spotify ou no Apple Podcasts.

Vamos mergulhar com ${g || "o nosso convidado"}."

[A VINHETA CRESCE E DEPOIS ABAIXA PARA A ENTREVISTA]`,
      (t, g) => `[MÚSICA AMBIENTE SUTIL - BAIXA PARA SEGUNDO PLANO]

APRESENTADOR:
"Há momentos na carreira em que uma única decisão muda tudo. Hoje exploramos ${t} — não pela teoria, mas pela realidade bagunçada e sem filtro de quem viveu isso.

Nosso convidado de hoje é ${g || "um pioneiro do setor"}. Falamos sobre os pontos de virada, a filosofia conquistada a duras penas e as regras não ditas do sucesso moderno.

Sirva um café, fique à vontade e vamos ao episódio."

[A MÚSICA SE DISSIPA]`,
      (t, g) => `[MÚSICA DE ABERTURA DESCONTRAÍDA]

APRESENTADOR:
"Oi, pessoal, bem-vindos de volta! Hoje é um episódio que eu queria gravar há meses, porque vamos falar sobre ${t}.

E quem está com a gente é nada menos que ${g || "o nosso fantástico convidado"}! Rolaram histórias malucas, ferramentas práticas e algumas coisas que podem te surpreender.

Antes de começar, faça um favor: deixe uma avaliação ou um comentário se o podcast tem sido útil para você.

Beleza, aqui está a minha conversa com ${g || "o nosso convidado"}!"`,
      (t) => `[VINHETA ENÉRGICA - BAIXA PARA SEGUNDO PLANO EM 0:04]

APRESENTADOR:
"Bem-vindos a mais um episódio solo. Hoje precisamos ter uma conversa honesta sobre ${t}.

Nos últimos meses, notei um padrão perigoso entre criadores e empreendedores. Todo mundo está focado em métricas de vaidade superficiais e ignorando a base que realmente faz a diferença.

Nos próximos 20 minutos, vou detalhar o framework de 3 partes que uso para resolver isso. Pegue um caderno, desligue as distrações e vamos direto ao ponto."

[EFEITO MUSICAL]`,
      (t) => `[CLIMA SONORO DE SUSPENSE]

APRESENTADOR:
"Nas primeiras horas de uma manhã de terça-feira, tudo parecia normal. Até que os números chegaram...

Esta é a história de ${t}. Uma história de ambição, gargalos imprevistos e as lições cruciais que vieram depois.

Nos próximos 30 minutos, você vai ouvir como uma decisão decisiva mudou toda a trajetória.

Eu sou o seu apresentador, e este é o mergulho de hoje."

[EFEITO SONORO DE TRANSIÇÃO]`,
    ],
  },
  ja: {
    topic: "エピソードのテーマ／約束", guest: "ゲストの名前と肩書き", opt: "（該当する場合）", format: "番組形式：", tone: "話し方のトーン：",
    formats: ["ゲストインタビュー", "ひとり語り", "ストーリー／ナラティブ"], tones: ["ハイテンション", "深く内省的", "会話調"],
    view: "プロンプター＆スクリプト表示", runtime: (s, w) => `約${s}秒（${w}語）`, copy: "スクリプトをコピー", copied: "コピーしました！",
    defTopic: "なぜスタートアップの90％は2年目に資金が尽きるのか", defGuest: "マーカス・スターリング（連続テック創業者）", fbTopic: "今日のテーマ",
    scripts: [
      (t, g) => `[アップテンポなテーマ曲 - 0:03でフェードダウン]

ホスト：
「${t}について誰もが口にする定番のアドバイスが、実は壁にぶつかる最短ルートだとしたらどうでしょう？

今日は${g || "この分野を代表する第一人者"}をお迎えします。本当に重要な指標、道中で犯した致命的に近い失敗、そして今週から実行できる具体的な手順を、包み隠さずお話しします。

無駄のない会話がお好きなら、今すぐSpotifyかApple Podcastsでフォローしてください。

それでは${g || "ゲスト"}さんとさっそく始めましょう。」

[テーマ曲が盛り上がり、インタビューへ移行]`,
      (t, g) => `[控えめなアンビエント音楽 - フェードダウン]

ホスト：
「キャリアには、たった一つの決断がすべてを変える瞬間があります。今日は${t}について、理論ではなく、実際に経験した人の生々しい現実から探ります。

本日のゲストは${g || "業界のパイオニア"}です。転機、苦労して得た哲学、そして現代の成功にまつわる暗黙のルールを掘り下げます。

コーヒーを淹れて、ゆっくりお聴きください。エピソードを始めましょう。」

[音楽がフェードアウト]`,
      (t, g) => `[カジュアルなイントロ音楽]

ホスト：
「皆さん、おかえりなさい！今日は何か月も前から収録したかった回です。テーマは${t}です。

そしてゲストは、なんと${g || "素晴らしいゲスト"}さん！驚きのエピソードや実用的なツール、意外な話まで飛び出しました。

始める前に一つお願いです。番組が役に立っていたら、評価やレビューを残してもらえると嬉しいです。

それでは、${g || "ゲスト"}さんとの対談をどうぞ！」`,
      (t) => `[エネルギッシュなテーマ曲 - 0:04でフェードダウン]

ホスト：
「ひとり語りの回へようこそ。今日は${t}について、正直に話したいと思います。

ここ数か月、クリエイターや起業家の間に危うい傾向があると感じています。誰もが表面的な見せかけの数字ばかり追い、本当に成果を動かす土台を完全に無視しているのです。

これから20分で、私が使っている3つのステップの枠組みを解説します。ノートを用意して、気が散るものを消して、さっそく始めましょう。」

[ミュージカルスティング]`,
      (t) => `[緊張感のある雰囲気のサウンド]

ホスト：
「火曜日の早朝、すべてはいつも通りに見えました。数字が届くまでは…

これは${t}の物語です。野心、予期せぬボトルネック、そしてその後に得た大切な教訓の物語です。

これから30分で、たった一つの決断が軌道をどう変えたのかをお聴きいただきます。

ホストです。今日の深掘りを始めましょう。」

[トランジション効果音]`,
    ],
  },
  ko: {
    topic: "에피소드 주제 / 약속", guest: "게스트 이름 및 직함", opt: "(해당하는 경우)", format: "프로그램 형식:", tone: "전달 톤:",
    formats: ["게스트 인터뷰", "나 홀로 독백", "스토리 / 내러티브"], tones: ["에너지 넘치게", "깊고 사색적으로", "대화체"],
    view: "텔레프롬프터 및 스크립트 보기", runtime: (s, w) => `약 ${s}초 (${w}단어)`, copy: "스크립트 복사", copied: "스크립트 복사됨!",
    defTopic: "스타트업의 90%가 2년 차에 자금이 바닥나는 이유", defGuest: "마커스 스털링 (연쇄 테크 창업가)", fbTopic: "오늘의 주제",
    scripts: [
      (t, g) => `[경쾌한 테마 음악 - 0:03에 페이드 다운]

진행자:
"${t}에 대해 모두가 하는 뻔한 조언이 사실은 벽에 부딪히는 가장 빠른 길이라면 어떨까요?

오늘은 ${g || "이 분야 최고의 전문가 중 한 분"}을 모셨습니다. 정말 중요한 지표, 과정에서 겪은 치명적일 뻔한 실수, 그리고 이번 주부터 바로 실행할 수 있는 구체적인 방법을 숨김없이 이야기합니다.

군더더기 없는 대화를 좋아하신다면, 지금 바로 Spotify나 Apple Podcasts에서 팔로우를 눌러 주세요.

${g || "게스트"}님과 바로 시작하겠습니다."

[테마 음악이 고조되었다가 인터뷰로 이어지며 낮아진다]`,
      (t, g) => `[은은한 앰비언트 음악 - 페이드 다운]

진행자:
"커리어에는 단 한 번의 결정이 모든 것을 바꾸는 순간이 있습니다. 오늘은 ${t}에 대해 이론이 아니라, 직접 겪은 사람의 투박하고 꾸밈없는 현실에서 살펴봅니다.

오늘의 게스트는 ${g || "업계의 선구자"}입니다. 전환점, 어렵게 얻은 철학, 그리고 현대적 성공의 말하지 않는 규칙을 짚어 봅니다.

커피 한 잔 따르고 편하게 앉아서 에피소드를 시작하겠습니다."

[음악이 페이드아웃된다]`,
      (t, g) => `[편안한 인트로 음악]

진행자:
"안녕하세요 여러분, 다시 오신 걸 환영합니다! 오늘은 몇 달 전부터 꼭 녹음하고 싶었던 에피소드예요. 바로 ${t}를 다루거든요.

그리고 오늘의 게스트는 바로 ${g || "멋진 게스트"}! 놀라운 이야기, 실용적인 도구, 그리고 의외의 이야기까지 나눴습니다.

시작하기 전에 부탁 하나만요. 팟캐스트가 도움이 되셨다면 별점이나 리뷰를 남겨 주세요.

그럼 ${g || "게스트"}님과의 대화를 시작합니다!"`,
      (t) => `[에너지 넘치는 테마 음악 - 0:04에 페이드 다운]

진행자:
"또 한 번의 솔로 에피소드에 오신 것을 환영합니다. 오늘은 ${t}에 대해 솔직하게 이야기해 보려 합니다.

지난 몇 달간 크리에이터와 창업가들 사이에서 위험한 패턴을 발견했습니다. 모두가 겉으로 보이는 허울뿐인 지표에만 매달리고, 정작 결과를 좌우하는 핵심 토대는 완전히 외면하고 있다는 점입니다.

앞으로 20분 동안 제가 이 문제를 풀 때 쓰는 3단계 프레임워크를 설명하겠습니다. 노트를 준비하고 방해 요소를 끄고 바로 시작해 볼까요."

[음악 스팅]`,
      (t) => `[긴장감 있는 분위기의 사운드]

진행자:
"화요일 이른 아침, 모든 것이 평범해 보였습니다. 숫자가 들어오기 전까지는...

이것은 ${t}의 이야기입니다. 야망, 예상치 못한 병목, 그리고 이어진 중요한 교훈에 관한 이야기죠.

앞으로 30분 동안, 단 하나의 결정적 선택이 전체 궤도를 어떻게 바꿨는지 들려드리겠습니다.

저는 진행자입니다. 오늘의 깊이 있는 이야기를 시작합니다."

[오디오 전환 효과음]`,
    ],
  },
};

export function IntroScriptGenerator({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [topic, setTopic] = useState(ui.defTopic);
  const [guest, setGuest] = useState(ui.defGuest);
  const [format, setFormat] = useState<"interview" | "solo" | "narrative">("interview");
  const [tone, setTone] = useState<"punchy" | "deep" | "casual">("punchy");
  const [copied, setCopied] = useState(false);

  const script = useMemo(() => {
    const t = topic.trim() || ui.fbTopic;
    const g = guest.trim();
    const idx = format === "interview" ? ["punchy", "deep", "casual"].indexOf(tone) : format === "solo" ? 3 : 4;
    return ui.scripts[idx](t, g);
  }, [topic, guest, format, tone, ui]);

  // shortcut: ja/ko have no spaces, so estimate from characters (~7/s); en pace is 140 wpm
  const cjk = lang === "ja" || lang === "ko";
  const wordCount = script.trim().split(/\s+/).length;
  const estimatedSeconds = cjk
    ? Math.round(script.replace(/\s/g, "").length / 7)
    : Math.round((wordCount / 140) * 60);

  const handleCopy = () => {
    navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Configuration Grid */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.topic}
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
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
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Format & Tone Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-studio-border/60">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.format}</label>
            <div className="flex gap-2">
              {[
                { id: "interview", label: ui.formats[0] },
                { id: "solo", label: ui.formats[1] },
                { id: "narrative", label: ui.formats[2] },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFormat(item.id as any)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    format === item.id
                      ? "bg-orange-500 text-white shadow-sm"
                      : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.tone}</label>
            <div className="flex gap-2">
              {[
                { id: "punchy", label: ui.tones[0] },
                { id: "deep", label: ui.tones[1] },
                { id: "casual", label: ui.tones[2] },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTone(item.id as any)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    tone === item.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Script Reader View */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-studio-border/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.view}
            </span>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {ui.runtime(estimatedSeconds, wordCount)}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? ui.copied : ui.copy}
          </button>
        </div>

        <div className="p-6 rounded-xl bg-studio-darkest border border-studio-border text-sm sm:text-base font-sans text-neutral-900 dark:text-neutral-100 leading-loose whitespace-pre-wrap select-text">
          {script}
        </div>
      </div>
    </div>
  );
}

