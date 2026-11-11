"use client";

import React, { useState, useMemo } from "react";
import { Users, Copy, Check, Download, Mail, Sparkles } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

type Mail = (host: string, show: string, mine: string, exp: string) => { subject: string; body: string };
type CollabText = {
  goal: string; goals: [string, string, string]; target: string; host: string; mine: string; angle: string; out: string;
  subjectLabel: string; mailSubject: string; copy: string; copied: string; tip: string;
  d: { show: string; host: string; mine: string; exp: string }; fb: { host: string; show: string; mine: string };
  mails: [Mail, Mail, Mail];
};

const TEXT: Record<SupportedLocale, CollabText> = {
  en: {
    goal: "Outreach Goal:", goals: ["Pitch Myself as Guest", "Invite Guest to My Show", "Promo / Feed Swap"], target: "Target Podcast Show", host: "Target Host Name", mine: "Your Podcast Name", angle: "Specific Angle / Value Proposition",
    out: "Personalized Outreach Pitch", subjectLabel: "Subject: ", mailSubject: "Subject", copy: "Copy Pitch Email", copied: "Copied Pitch!",
    tip: "Tip: Always customize the first sentence to mention a specific quote or idea from their recent episode to prove you are an actual listener.",
    d: { show: "The Indie Hacker Podcast", host: "Courtland", mine: "Bootstrapped Signals", exp: "How we scaled an AI developer tool to $30k MRR with zero marketing spend using GitHub SEO" },
    fb: { host: "there", show: "your show", mine: "my podcast" },
    mails: [
      (host, show, mine, exp) => ({ subject: `Guest Idea for ${show}: ${exp.slice(0, 45)}...`, body: `Hi ${host},

Big fan of ${show}—really loved your recent episode on building sustainable software businesses.

I'm reaching out because I think your listeners would get massive tactical value from a breakdown of: ${exp}.

A few specific, counter-intuitive lessons I can share with zero fluff:
• Why conventional wisdom in this space failed us for 9 months
• The 3 exact levers that moved conversion rates by 40%
• What I would do differently if starting over from scratch today

No promotional pitch or product selling—just a raw, transparent deep dive into the numbers and lessons.

If this sounds like a fit for an upcoming slot, let me know and I'll send over a 2-minute audio teaser and outline.

Thanks for all the great episodes!

Best,
Host of ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Interview Invitation for ${host} on ${mine}`, body: `Hi ${host},

I host ${mine}, a podcast dedicated to deep, tactical conversations for creators and founders.

I've been following your work on ${show} and would love to invite you for a 35-minute conversation on our show.

Specifically, I'd love to unpack:
1. Your approach to ${exp}
2. The operational frameworks that most people overlook
3. Your predictions for where the industry is heading in 2026

We handle all audio editing and preparation, and we provide clean video clips and audiograms for your team to use however you like.

Would you be open to a recording session next month? Happy to work around your calendar.

Warm regards,
Host of ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Audience Swap / Cross-Promo Proposal: ${mine} & ${show}`, body: `Hi ${host},

Hope you're having a great week! I host ${mine}, and our shows share a massive overlap in audience interest around ${exp}.

I wanted to propose a simple, high-value cross-promotion between our feeds:
• A mutual 30-second host-read shoutout exchange, OR
• A curated holiday feed drop where we share each other's best evergreen episode.

It's a completely free way for both of us to introduce our shows to thousands of engaged, high-retention listeners who already love audio in this genre.

Let me know if you're open to exploring this—happy to share our listener demographics and download analytics!

Cheers,
Host of ${mine}` }),
    ],
  },
  es: {
    goal: "Objetivo del contacto:", goals: ["Proponerme como invitado", "Invitar a un invitado a mi programa", "Promoción cruzada / intercambio de feeds"], target: "Pódcast de destino", host: "Nombre del anfitrión de destino", mine: "Nombre de tu pódcast", angle: "Enfoque concreto / propuesta de valor",
    out: "Propuesta de contacto personalizada", subjectLabel: "Asunto: ", mailSubject: "Asunto", copy: "Copiar correo de propuesta", copied: "¡Propuesta copiada!",
    tip: "Consejo: personaliza siempre la primera frase mencionando una cita o idea concreta de su episodio reciente para demostrar que de verdad los escuchas.",
    d: { show: "El pódcast del indie hacker", host: "Courtland", mine: "Señales Autofinanciadas", exp: "Cómo escalamos una herramienta de IA para desarrolladores a 30 000 $ de MRR sin gastar en marketing usando SEO en GitHub" },
    fb: { host: "hola", show: "tu programa", mine: "mi pódcast" },
    mails: [
      (host, show, mine, exp) => ({ subject: `Idea de invitado para ${show}: ${exp.slice(0, 45)}...`, body: `Hola, ${host}:

Soy muy fan de ${show}; me encantó tu episodio reciente sobre cómo construir negocios de software sostenibles.

Te escribo porque creo que tus oyentes sacarían un enorme valor táctico de un análisis sobre: ${exp}.

Algunas lecciones concretas y contraintuitivas que puedo compartir, sin relleno:
• Por qué la sabiduría convencional del sector nos falló durante 9 meses
• Las 3 palancas exactas que subieron la conversión un 40 %
• Qué haría distinto si empezara de cero hoy

Nada de venta de productos ni de promoción: solo un análisis crudo y transparente de las cifras y las lecciones.

Si te encaja para un próximo hueco, avísame y te envío un avance de audio de 2 minutos y un esquema.

¡Gracias por todos los buenos episodios!

Un saludo,
Anfitrión de ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Invitación a entrevista para ${host} en ${mine}`, body: `Hola, ${host}:

Presento ${mine}, un pódcast dedicado a conversaciones profundas y tácticas para creadores y fundadores.

Sigo tu trabajo en ${show} y me encantaría invitarte a una conversación de 35 minutos en nuestro programa.

En concreto, me gustaría desgranar:
1. Tu enfoque sobre ${exp}
2. Los marcos operativos que la mayoría pasa por alto
3. Tus predicciones sobre hacia dónde va el sector en 2026

Nos encargamos de toda la edición y preparación del audio, y entregamos clips de vídeo y audiogramas listos para que tu equipo los use como quiera.

¿Te animarías a una sesión de grabación el mes que viene? Me adapto a tu agenda.

Un cordial saludo,
Anfitrión de ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Propuesta de intercambio de audiencia / promoción cruzada: ${mine} y ${show}`, body: `Hola, ${host}:

¡Espero que tengas una gran semana! Presento ${mine} y nuestros programas comparten una gran coincidencia de audiencia en torno a ${exp}.

Quería proponerte una promoción cruzada sencilla y de gran valor entre nuestros feeds:
• Un intercambio de menciones de 30 segundos leídas por cada anfitrión, O BIEN
• Un episodio especial en el feed donde compartamos el mejor episodio atemporal del otro.

Es una forma totalmente gratuita de presentar nuestros programas a miles de oyentes comprometidos y fieles que ya aman el audio de este género.

Dime si te interesa explorarlo; ¡con gusto comparto la demografía de oyentes y las analíticas de descargas!

Un saludo,
Anfitrión de ${mine}` }),
    ],
  },
  fr: {
    goal: "Objectif de la prise de contact :", goals: ["Me proposer comme invité", "Inviter quelqu'un dans mon émission", "Promo / échange de flux"], target: "Podcast ciblé", host: "Nom de l'animateur ciblé", mine: "Nom de votre podcast", angle: "Angle précis / proposition de valeur",
    out: "Proposition personnalisée", subjectLabel: "Objet : ", mailSubject: "Objet", copy: "Copier l'e-mail de proposition", copied: "Proposition copiée !",
    tip: "Astuce : personnalisez toujours la première phrase en citant une idée ou une phrase précise de leur dernier épisode pour prouver que vous les écoutez vraiment.",
    d: { show: "Le Podcast de l'Indie Hacker", host: "Courtland", mine: "Signaux Autofinancés", exp: "Comment nous avons fait passer un outil IA pour développeurs à 30 000 $ de MRR sans budget marketing grâce au SEO sur GitHub" },
    fb: { host: "bonjour", show: "votre émission", mine: "mon podcast" },
    mails: [
      (host, show, mine, exp) => ({ subject: `Idée d'invité pour ${show} : ${exp.slice(0, 45)}...`, body: `Bonjour ${host},

Grand fan de ${show}, j'ai adoré votre récent épisode sur la construction d'entreprises de logiciels durables.

Je vous écris car je pense que vos auditeurs tireraient une énorme valeur pratique d'une analyse de : ${exp}.

Quelques enseignements précis et contre-intuitifs que je peux partager, sans blabla :
• Pourquoi la sagesse conventionnelle du secteur nous a fait défaut pendant 9 mois
• Les 3 leviers exacts qui ont augmenté les conversions de 40 %
• Ce que je ferais différemment si je repartais de zéro aujourd'hui

Aucun argumentaire commercial ni vente de produit : juste une plongée brute et transparente dans les chiffres et les leçons.

Si cela peut convenir pour un prochain créneau, dites-le-moi et je vous enverrai un teaser audio de 2 minutes et un plan.

Merci pour tous ces excellents épisodes !

Cordialement,
Animateur de ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Invitation à une interview pour ${host} sur ${mine}`, body: `Bonjour ${host},

J'anime ${mine}, un podcast consacré à des conversations approfondies et concrètes pour créateurs et fondateurs.

Je suis votre travail sur ${show} et je serais ravi de vous inviter pour une conversation de 35 minutes dans notre émission.

Plus précisément, j'aimerais aborder :
1. Votre approche de ${exp}
2. Les cadres opérationnels que la plupart des gens négligent
3. Vos prévisions sur l'avenir du secteur en 2026

Nous gérons tout le montage et la préparation audio, et nous fournissons des extraits vidéo et des audiogrammes que votre équipe peut utiliser librement.

Seriez-vous partant pour une session d'enregistrement le mois prochain ? Je m'adapte à votre agenda.

Bien cordialement,
Animateur de ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Proposition d'échange d'audience / promotion croisée : ${mine} et ${show}`, body: `Bonjour ${host},

J'espère que votre semaine se passe bien ! J'anime ${mine}, et nos émissions partagent un large recoupement d'audience autour de ${exp}.

Je souhaitais vous proposer une promotion croisée simple et à forte valeur entre nos flux :
• Un échange de mentions de 30 secondes lues par chaque animateur, OU
• Un épisode spécial dans le flux où nous partageons le meilleur épisode intemporel de l'autre.

C'est un moyen totalement gratuit de présenter nos émissions à des milliers d'auditeurs engagés et fidèles qui aiment déjà l'audio de ce genre.

Dites-moi si cela vous intéresse ; je partagerai volontiers nos données démographiques et nos statistiques de téléchargement !

Bien à vous,
Animateur de ${mine}` }),
    ],
  },
  de: {
    goal: "Ziel der Kontaktaufnahme:", goals: ["Mich selbst als Gast vorschlagen", "Gast in meine Show einladen", "Promo / Feed-Tausch"], target: "Ziel-Podcast", host: "Name des Ziel-Hosts", mine: "Name deines Podcasts", angle: "Konkreter Blickwinkel / Nutzenversprechen",
    out: "Personalisierte Kontaktanfrage", subjectLabel: "Betreff: ", mailSubject: "Betreff", copy: "Anfrage-E-Mail kopieren", copied: "Anfrage kopiert!",
    tip: "Tipp: Passe den ersten Satz immer an und nenne ein konkretes Zitat oder eine Idee aus der letzten Folge, um zu zeigen, dass du wirklich zuhörst.",
    d: { show: "Der Indie-Hacker-Podcast", host: "Courtland", mine: "Bootstrapped Signals", exp: "Wie wir ein KI-Entwicklertool ohne Marketingbudget mit GitHub-SEO auf 30.000 $ MRR skaliert haben" },
    fb: { host: "du", show: "deine Show", mine: "mein Podcast" },
    mails: [
      (host, show, mine, exp) => ({ subject: `Gastidee für ${show}: ${exp.slice(0, 45)}...`, body: `Hallo ${host},

ich bin großer Fan von ${show} – deine letzte Folge über nachhaltige Softwareunternehmen hat mir sehr gefallen.

Ich schreibe dir, weil deine Hörer meiner Meinung nach enorm viel praktischen Nutzen aus einer Analyse zu diesem Thema ziehen würden: ${exp}.

Ein paar konkrete, kontraintuitive Erkenntnisse, die ich ohne Geschwafel teilen kann:
• Warum uns das gängige Branchenwissen 9 Monate lang im Stich gelassen hat
• Die 3 genauen Hebel, die die Conversion um 40 % verbessert haben
• Was ich heute anders machen würde, wenn ich bei null anfinge

Kein Verkaufsgespräch und keine Produktwerbung – nur ein ehrlicher, transparenter Blick auf Zahlen und Lehren.

Wenn das für einen kommenden Termin passt, sag Bescheid, dann schicke ich dir einen 2-minütigen Audio-Teaser und eine Gliederung.

Danke für all die tollen Folgen!

Viele Grüße
Host von ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Interview-Einladung für ${host} bei ${mine}`, body: `Hallo ${host},

ich hoste ${mine}, einen Podcast für tiefgehende, praxisnahe Gespräche für Creator und Gründer.

Ich verfolge deine Arbeit bei ${show} und würde dich gern zu einem 35-minütigen Gespräch in unsere Show einladen.

Konkret würde ich gern besprechen:
1. Deinen Ansatz zu ${exp}
2. Die operativen Frameworks, die die meisten übersehen
3. Deine Prognosen, wohin sich die Branche 2026 entwickelt

Wir übernehmen den gesamten Audioschnitt und die Vorbereitung und liefern saubere Videoclips und Audiogramme, die dein Team frei nutzen kann.

Hättest du nächsten Monat Zeit für eine Aufnahme? Ich richte mich gern nach deinem Kalender.

Herzliche Grüße
Host von ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Vorschlag für Publikumstausch / Cross-Promo: ${mine} & ${show}`, body: `Hallo ${host},

ich hoffe, du hast eine tolle Woche! Ich hoste ${mine}, und unsere Shows haben eine große Schnittmenge im Publikumsinteresse rund um ${exp}.

Ich möchte eine einfache, wertvolle Cross-Promotion zwischen unseren Feeds vorschlagen:
• Ein gegenseitiger Austausch von 30-sekündigen, vom Host gesprochenen Empfehlungen, ODER
• Eine kuratierte Sonderfolge im Feed, in der wir jeweils die beste Evergreen-Folge des anderen teilen.

Es ist ein völlig kostenloser Weg, unsere Shows Tausenden engagierter, treuer Hörer vorzustellen, die Audio in diesem Genre bereits lieben.

Sag mir, ob du Interesse hast – ich teile gern unsere Hörerdemografie und Download-Statistiken!

Beste Grüße
Host von ${mine}` }),
    ],
  },
  it: {
    goal: "Obiettivo del contatto:", goals: ["Propormi come ospite", "Invitare un ospite nel mio programma", "Promo / scambio di feed"], target: "Podcast di destinazione", host: "Nome del conduttore di destinazione", mine: "Nome del tuo podcast", angle: "Angolo specifico / proposta di valore",
    out: "Proposta di contatto personalizzata", subjectLabel: "Oggetto: ", mailSubject: "Oggetto", copy: "Copia e-mail di proposta", copied: "Proposta copiata!",
    tip: "Suggerimento: personalizza sempre la prima frase citando un'idea o una frase specifica del loro episodio recente, per dimostrare che li ascolti davvero.",
    d: { show: "Il podcast dell'indie hacker", host: "Courtland", mine: "Segnali Autofinanziati", exp: "Come abbiamo portato uno strumento AI per sviluppatori a 30.000 $ di MRR senza spese di marketing grazie alla SEO su GitHub" },
    fb: { host: "ciao", show: "il tuo programma", mine: "il mio podcast" },
    mails: [
      (host, show, mine, exp) => ({ subject: `Idea di ospitata per ${show}: ${exp.slice(0, 45)}...`, body: `Ciao ${host},

sono un grande fan di ${show}: mi è piaciuto molto il tuo episodio recente sulla creazione di attività software sostenibili.

Ti scrivo perché credo che i tuoi ascoltatori otterrebbero un enorme valore pratico da un'analisi su: ${exp}.

Alcune lezioni specifiche e controintuitive che posso condividere, senza fronzoli:
• Perché la saggezza convenzionale del settore ci ha fatto fallire per 9 mesi
• Le 3 leve esatte che hanno aumentato le conversioni del 40%
• Cosa farei diversamente se ripartissi da zero oggi

Nessuna vendita o promozione di prodotti: solo un'analisi cruda e trasparente di numeri e lezioni.

Se può andare bene per uno dei prossimi slot, fammi sapere e ti invio un teaser audio di 2 minuti con una scaletta.

Grazie per tutti i bellissimi episodi!

Un saluto,
Conduttore di ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Invito a un'intervista per ${host} su ${mine}`, body: `Ciao ${host},

conduco ${mine}, un podcast dedicato a conversazioni approfondite e pratiche per creator e fondatori.

Seguo il tuo lavoro su ${show} e mi piacerebbe invitarti a una conversazione di 35 minuti nel nostro programma.

In particolare, vorrei approfondire:
1. Il tuo approccio a ${exp}
2. I framework operativi che la maggior parte delle persone trascura
3. Le tue previsioni su dove sta andando il settore nel 2026

Ci occupiamo di tutto il montaggio e della preparazione audio e forniamo clip video e audiogrammi che il tuo team può usare come preferisce.

Saresti disponibile per una registrazione il mese prossimo? Mi adatto volentieri al tuo calendario.

Cordiali saluti,
Conduttore di ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Proposta di scambio di pubblico / cross-promo: ${mine} e ${show}`, body: `Ciao ${host},

spero tu stia passando un'ottima settimana! Conduco ${mine} e i nostri programmi condividono una grande sovrapposizione di pubblico intorno a ${exp}.

Vorrei proporti una cross-promozione semplice e di grande valore tra i nostri feed:
• Uno scambio reciproco di menzioni di 30 secondi lette dai conduttori, OPPURE
• Un episodio speciale nel feed in cui ciascuno condivide il miglior episodio sempreverde dell'altro.

È un modo del tutto gratuito per far conoscere i nostri programmi a migliaia di ascoltatori coinvolti e fedeli che amano già l'audio di questo genere.

Fammi sapere se ti interessa: condividerò volentieri la demografia degli ascoltatori e le analisi dei download!

Un saluto,
Conduttore di ${mine}` }),
    ],
  },
  pt: {
    goal: "Objetivo do contato:", goals: ["Propor-me como convidado", "Convidar alguém para o meu programa", "Promo / troca de feeds"], target: "Podcast de destino", host: "Nome do apresentador de destino", mine: "Nome do seu podcast", angle: "Ângulo específico / proposta de valor",
    out: "Proposta de contato personalizada", subjectLabel: "Assunto: ", mailSubject: "Assunto", copy: "Copiar e-mail de proposta", copied: "Proposta copiada!",
    tip: "Dica: personalize sempre a primeira frase mencionando uma citação ou ideia específica do episódio recente deles para provar que você realmente ouve o programa.",
    d: { show: "O Podcast do Indie Hacker", host: "Courtland", mine: "Sinais Bootstrapped", exp: "Como escalamos uma ferramenta de IA para desenvolvedores até US$ 30 mil de MRR sem gastar com marketing, usando SEO no GitHub" },
    fb: { host: "olá", show: "seu programa", mine: "meu podcast" },
    mails: [
      (host, show, mine, exp) => ({ subject: `Ideia de convidado para ${show}: ${exp.slice(0, 45)}...`, body: `Olá, ${host},

Sou muito fã de ${show} — adorei o seu episódio recente sobre como construir negócios de software sustentáveis.

Escrevo porque acredito que seus ouvintes teriam um enorme valor prático com uma análise sobre: ${exp}.

Algumas lições específicas e contraintuitivas que posso compartilhar, sem enrolação:
• Por que a sabedoria convencional do setor falhou conosco por 9 meses
• As 3 alavancas exatas que aumentaram a conversão em 40%
• O que eu faria diferente se começasse do zero hoje

Sem venda de produtos nem propaganda — apenas um mergulho transparente nos números e nas lições.

Se isso fizer sentido para uma próxima vaga, me avise que envio um teaser de áudio de 2 minutos e um roteiro.

Obrigado por todos os ótimos episódios!

Abraço,
Apresentador de ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Convite para entrevista de ${host} no ${mine}`, body: `Olá, ${host},

Eu apresento o ${mine}, um podcast dedicado a conversas profundas e práticas para criadores e fundadores.

Acompanho o seu trabalho em ${show} e adoraria convidar você para uma conversa de 35 minutos no nosso programa.

Em especial, gostaria de explorar:
1. A sua abordagem sobre ${exp}
2. Os frameworks operacionais que a maioria das pessoas ignora
3. As suas previsões sobre o rumo do setor em 2026

Cuidamos de toda a edição e preparação do áudio e fornecemos clipes de vídeo e audiogramas para a sua equipe usar como quiser.

Você topa uma gravação no mês que vem? Me adapto à sua agenda.

Atenciosamente,
Apresentador de ${mine}` }),
      (host, show, mine, exp) => ({ subject: `Proposta de troca de audiência / promoção cruzada: ${mine} e ${show}`, body: `Olá, ${host},

Espero que a sua semana esteja ótima! Eu apresento o ${mine}, e nossos programas têm uma grande sobreposição de audiência em torno de ${exp}.

Quero propor uma promoção cruzada simples e de alto valor entre nossos feeds:
• Uma troca de menções de 30 segundos lidas pelos apresentadores, OU
• Um episódio especial no feed em que cada um compartilha o melhor episódio atemporal do outro.

É uma forma totalmente gratuita de apresentar nossos programas a milhares de ouvintes engajados e fiéis que já amam áudio nesse gênero.

Me avise se topa explorar a ideia — compartilho com prazer a demografia dos ouvintes e as métricas de downloads!

Abraço,
Apresentador de ${mine}` }),
    ],
  },
  ja: {
    goal: "アプローチの目的：", goals: ["自分をゲストとして売り込む", "自分の番組にゲストを招待する", "相互プロモ／フィード交換"], target: "対象のポッドキャスト", host: "対象ホストの名前", mine: "あなたのポッドキャスト名", angle: "具体的な切り口／提供価値",
    out: "パーソナライズされた依頼文", subjectLabel: "件名：", mailSubject: "件名", copy: "依頼メールをコピー", copied: "コピーしました！",
    tip: "ヒント：最初の一文には、相手の最近のエピソードの具体的な言葉やアイデアを必ず入れ、本当にリスナーであることを示しましょう。",
    d: { show: "インディーハッカー・ポッドキャスト", host: "コートランド", mine: "ブートストラップ・シグナルズ", exp: "マーケティング費ゼロで、GitHubのSEOを使ってAI開発者ツールを月商3万ドルまで伸ばした方法" },
    fb: { host: "ご担当者", show: "貴番組", mine: "私のポッドキャスト" },
    mails: [
      (host, show, mine, exp) => ({ subject: `${show}へのゲスト出演のご提案：${exp.slice(0, 45)}...`, body: `${host}様

${show}の大ファンです。持続可能なソフトウェア事業の構築を扱った最近のエピソードも拝聴し、とても勉強になりました。

ご連絡したのは、次のテーマの解説がリスナーの皆さんに大きな実践的価値をもたらすと考えたためです：${exp}。

無駄なく共有できる、意外性のある具体的な学びをいくつかご紹介します：
• この分野の通説が9か月間うまくいかなかった理由
• コンバージョン率を40％押し上げた3つの具体的な施策
• 今ゼロからやり直すなら、何を変えるか

商品やサービスの宣伝は一切なく、数字と学びを率直かつ透明にお話しします。

今後の収録枠に合いそうでしたらお知らせください。2分の音声ティザーと構成案をお送りします。

いつも素晴らしいエピソードをありがとうございます！

どうぞよろしくお願いいたします。
${mine}ホスト` }),
      (host, show, mine, exp) => ({ subject: `${host}様へ：${mine}へのインタビュー出演のお誘い`, body: `${host}様

私は${mine}のホストを務めています。クリエイターや創業者向けに、深く実践的な対話をお届けする番組です。

${show}でのご活動を拝見しており、当番組で35分ほどお話を伺えないかとご連絡しました。

特に次の点を深掘りしたいと考えています：
1. ${exp}に対するお考え
2. 多くの人が見落としている運営上のフレームワーク
3. 2026年に向けた業界の見通し

音声の編集と準備はすべて当方で行い、チームの皆様が自由にお使いいただける動画クリップとオーディオグラムもご提供します。

来月、収録のお時間をいただけないでしょうか。ご都合に合わせます。

どうぞよろしくお願いいたします。
${mine}ホスト` }),
      (host, show, mine, exp) => ({ subject: `オーディエンス交換／相互プロモのご提案：${mine}と${show}`, body: `${host}様

お元気でお過ごしでしょうか。私は${mine}のホストです。${exp}をめぐって、私たちの番組はリスナー層が大きく重なっています。

互いのフィードで行える、シンプルで価値の高い相互プロモーションをご提案します：
• ホストが読み上げる30秒の紹介を相互に行う、または
• 互いのおすすめの定番エピソードを紹介する特別編をフィードで配信する。

この分野の音声をすでに愛する、熱量の高い数千人のリスナーに、費用をかけず番組を知ってもらえる方法です。

ご興味があればお知らせください。リスナーの属性やダウンロード分析データもお見せできます！

どうぞよろしくお願いいたします。
${mine}ホスト` }),
    ],
  },
  ko: {
    goal: "연락 목적:", goals: ["나를 게스트로 제안", "내 프로그램에 게스트 초대", "프로모션 / 피드 교환"], target: "대상 팟캐스트", host: "대상 진행자 이름", mine: "내 팟캐스트 이름", angle: "구체적인 각도 / 제공 가치",
    out: "맞춤형 제안 메시지", subjectLabel: "제목: ", mailSubject: "제목", copy: "제안 이메일 복사", copied: "제안 복사됨!",
    tip: "팁: 첫 문장에는 항상 상대방의 최근 에피소드에서 나온 구체적인 말이나 아이디어를 넣어, 실제 청취자임을 보여 주세요.",
    d: { show: "인디 해커 팟캐스트", host: "코틀랜드", mine: "부트스트랩 시그널스", exp: "마케팅 비용 없이 GitHub SEO로 AI 개발자 도구를 월 3만 달러 MRR까지 키운 방법" },
    fb: { host: "안녕하세요", show: "귀하의 프로그램", mine: "제 팟캐스트" },
    mails: [
      (host, show, mine, exp) => ({ subject: `${show} 게스트 제안: ${exp.slice(0, 45)}...`, body: `${host}님께,

${show}의 열렬한 팬입니다. 지속 가능한 소프트웨어 사업 구축을 다룬 최근 에피소드도 정말 잘 들었습니다.

연락드린 이유는 다음 주제에 대한 분석이 청취자분들께 큰 실전 가치를 줄 것이라고 생각했기 때문입니다: ${exp}.

군더더기 없이 나눌 수 있는, 통념과 다른 구체적인 교훈 몇 가지입니다:
• 이 분야의 통념이 9개월 동안 우리에게 통하지 않았던 이유
• 전환율을 40% 끌어올린 정확히 3가지 레버
• 지금 처음부터 다시 시작한다면 다르게 할 것

제품 홍보나 판매는 전혀 없고, 숫자와 교훈을 솔직하고 투명하게 풀어놓는 이야기입니다.

다가오는 녹음 일정에 맞을 것 같으시면 알려 주세요. 2분짜리 오디오 티저와 개요를 보내 드리겠습니다.

늘 훌륭한 에피소드 감사드립니다!

감사합니다.
${mine} 진행자 드림` }),
      (host, show, mine, exp) => ({ subject: `${host}님께 ${mine} 인터뷰 초대`, body: `${host}님께,

저는 크리에이터와 창업가를 위한 깊이 있고 실전적인 대화를 다루는 팟캐스트 ${mine}의 진행자입니다.

${show}에서의 활동을 지켜보고 있었고, 저희 프로그램에서 35분 정도 대화를 나누고 싶어 초대드립니다.

특히 다음 내용을 깊이 이야기하고 싶습니다:
1. ${exp}에 대한 접근 방식
2. 대부분이 놓치는 운영 프레임워크
3. 2026년 업계가 나아갈 방향에 대한 예측

오디오 편집과 준비는 모두 저희가 맡고, 팀에서 자유롭게 쓰실 수 있는 영상 클립과 오디오그램도 제공합니다.

다음 달에 녹음 시간을 내 주실 수 있을까요? 일정은 최대한 맞추겠습니다.

감사합니다.
${mine} 진행자 드림` }),
      (host, show, mine, exp) => ({ subject: `청취자 교환 / 교차 홍보 제안: ${mine} & ${show}`, body: `${host}님께,

한 주 잘 보내고 계시길 바랍니다! 저는 ${mine}의 진행자이며, 저희 프로그램은 ${exp}와(과) 관련해 청취자 관심사가 크게 겹칩니다.

두 프로그램의 피드에서 할 수 있는 간단하고 가치 높은 교차 홍보를 제안드립니다:
• 진행자가 직접 읽는 30초 소개를 서로 교환하거나,
• 서로의 대표 에버그린 에피소드를 소개하는 특별 에피소드를 피드에 공개.

이 장르의 오디오를 이미 좋아하는 열성적인 수천 명의 청취자에게 비용 없이 프로그램을 알릴 수 있는 방법입니다.

관심 있으시면 알려 주세요. 청취자 인구 통계와 다운로드 분석도 기꺼이 공유하겠습니다!

감사합니다.
${mine} 진행자 드림` }),
    ],
  },
};

export function CollabFinder({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [targetShow, setTargetShow] = useState(ui.d.show);
  const [targetHost, setTargetHost] = useState(ui.d.host);
  const [myShow, setMyShow] = useState(ui.d.mine);
  const [myExpertise, setMyExpertise] = useState(ui.d.exp);
  const [collabType, setCollabType] = useState<"pitch_self" | "invite_guest" | "feed_drop">("pitch_self");
  const [copied, setCopied] = useState(false);

  const pitch = useMemo(() => {
    const host = targetHost.trim() || ui.fb.host;
    const show = targetShow.trim() || ui.fb.show;
    const mine = myShow.trim() || ui.fb.mine;
    const exp = myExpertise.trim();
    const idx = collabType === "pitch_self" ? 0 : collabType === "invite_guest" ? 1 : 2;
    return ui.mails[idx](host, show, mine, exp);
  }, [targetShow, targetHost, myShow, myExpertise, collabType, ui]);

  const fullEmail = `${ui.mailSubject}: ${pitch.subject}\n\n${pitch.body}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Configuration Grid */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        {/* Collab Type */}
        <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-studio-border/60">
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mr-2">{ui.goal}</span>
          {[
            { id: "pitch_self", label: ui.goals[0] },
            { id: "invite_guest", label: ui.goals[1] },
            { id: "feed_drop", label: ui.goals[2] },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCollabType(item.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                collabType === item.id
                  ? "bg-orange-500 text-white shadow-sm"
                  : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.target}
            </label>
            <input
              type="text"
              value={targetShow}
              onChange={(e) => setTargetShow(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.host}
            </label>
            <input
              type="text"
              value={targetHost}
              onChange={(e) => setTargetHost(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.mine}
            </label>
            <input
              type="text"
              value={myShow}
              onChange={(e) => setMyShow(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.angle}
            </label>
            <input
              type="text"
              value={myExpertise}
              onChange={(e) => setMyExpertise(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>
      </div>

      {/* Generated Pitch Email Box */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-studio-border/60 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.out}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? ui.copied : ui.copy}
            </button>
          </div>

          <div className="space-y-3 font-sans text-xs text-neutral-900 dark:text-neutral-100">
            <div className="p-3 rounded-lg bg-studio-darkest border border-studio-border">
              <span className="text-neutral-600 dark:text-neutral-400 font-semibold">{ui.subjectLabel}</span>
              <span className="text-neutral-900 dark:text-white font-medium">{pitch.subject}</span>
            </div>

            <pre className="p-4 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-neutral-100 leading-relaxed whitespace-pre-wrap max-h-[380px] overflow-y-auto font-sans select-text">
              {pitch.body}
            </pre>
          </div>
        </div>

        <div className="text-[11px] text-neutral-500 pt-2 border-t border-studio-border/60">
          {ui.tip}
        </div>
      </div>
    </div>
  );
}

