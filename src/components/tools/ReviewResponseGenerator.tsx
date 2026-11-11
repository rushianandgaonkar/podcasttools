"use client";

import React, { useState, useMemo } from "react";
import { MessageSquare, Copy, Check, Star, Heart, Sparkles } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

type Sent = "praise" | "constructive" | "critical";
type Tpl = (n: string, q: string) => { onAir: string; social: string; email: string };
type ReviewText = {
  name: string; sentiment: string; said: string; fb: string; defName: string; defSnippet: string;
  labels: [string, string, string]; onAir: string; social: string; dm: string;
  onAirHint: string; socialHint: string; dmHint: string; copy: string; copied: string;
  t: Record<Sent, Tpl>;
};

const TEXT: Record<SupportedLocale, ReviewText> = {
  en: {
    name: "Reviewer Name / Handle", sentiment: "Review Sentiment", said: "What Did the Reviewer Say?", fb: "one of our listeners",
    defName: "AudioFanatic_99", defSnippet: "Episode 32 changed how I think about hiring. Best 40 minutes of my week!",
    labels: ["5-Star Praise", "Constructive", "Critical"],
    onAir: "On-Air Shoutout Script", social: "Social Media Reply", dm: "Host Direct Message",
    onAirHint: "Read on microphone during intro or outro", socialHint: "For Twitter, Threads, or Instagram", dmHint: "Private thank-you note or email",
    copy: "Copy", copied: "Copied!",
    t: {
      praise: (n, q) => ({
        onAir: `“Before we get into today's conversation, I want to give a huge on-air shoutout to ${n}, who left a 5-star review saying: '${q}'. ${n}, thank you so much for listening and supporting the show. If you're listening right now and enjoy these episodes, taking 30 seconds to drop a review on Apple Podcasts or Spotify means the world to our team.”`,
        social: `Huge thanks to @${n} for this incredible review on Apple Podcasts! 🙏 When you build in public, seeing that '${q}' makes all the late-night editing sessions 100% worth it. Thank you for listening! 🎙️`,
        email: `Hi ${n},\n\nJust wanted to personally reach out and say thank you so much for leaving that generous review for the podcast ('${q}'). Hearing that our episodes resonate with you keeps us motivated to bring on the best possible guests. Really appreciate your support!\n\nBest,\nYour Host`,
      }),
      constructive: (n, q) => ({
        onAir: `“I also want to acknowledge some thoughtful feedback from ${n}, who noted: '${q}'. We take listener suggestions seriously, and you'll notice in today's episode that we've adjusted our pacing and audio balance to address exactly that. Thank you ${n} for keeping us accountable!”`,
        social: `Really appreciate this constructive feedback from @${n}: '${q}'. You're completely right, and we've already adjusted our production workflow for upcoming episodes. Thanks for helping us improve the show!`,
        email: `Hi ${n},\n\nThank you for taking the time to share your honest feedback about the show ('${q}'). We genuinely appreciate constructive notes from dedicated listeners, and we are already implementing changes in our next recording session.\n\nWarmly,\nYour Host`,
      }),
      critical: (n, q) => ({
        onAir: `“We always want to be transparent with our community. We recently received a critical note from ${n} about '${q}'. We hear you, and while we might not get every episode right for every listener, we are dedicated to learning and leveling up our craft every single week.”`,
        social: `Thanks for sharing your thoughts @${n}. We're sorry this episode didn't hit the mark for you, but we appreciate the honesty and will take your points into our editorial meetings for future episodes.`,
        email: `Hi ${n},\n\nThanks for your honest feedback regarding '${q}'. I'm sorry the episode missed the mark for you. We take all feedback seriously as we work to make the podcast better. Hope you'll give future episodes another listen!\n\nSincerely,\nYour Host`,
      }),
    },
  },
  es: {
    name: "Nombre / usuario del reseñador", sentiment: "Tono de la reseña", said: "¿Qué dijo el reseñador?", fb: "uno de nuestros oyentes",
    defName: "AudioFanatic_99", defSnippet: "El episodio 32 cambió mi forma de pensar sobre contratar. ¡Los mejores 40 minutos de mi semana!",
    labels: ["Elogio de 5 estrellas", "Constructiva", "Crítica"],
    onAir: "Guion de mención en el aire", social: "Respuesta en redes sociales", dm: "Mensaje directo del anfitrión",
    onAirHint: "Se lee al micrófono en la intro o el cierre", socialHint: "Para Twitter, Threads o Instagram", dmHint: "Nota de agradecimiento privada o correo",
    copy: "Copiar", copied: "¡Copiado!",
    t: {
      praise: (n, q) => ({
        onAir: `“Antes de empezar la conversación de hoy, quiero dar un enorme saludo en el aire a ${n}, que dejó una reseña de 5 estrellas diciendo: '${q}'. ${n}, muchas gracias por escuchar y apoyar el programa. Si nos escuchas ahora y disfrutas los episodios, dedicar 30 segundos a dejar una reseña en Apple Podcasts o Spotify significa muchísimo para nuestro equipo.”`,
        social: `¡Mil gracias a @${n} por esta increíble reseña en Apple Podcasts! 🙏 Cuando creas en público, leer '${q}' hace que todas las noches de edición valgan la pena. ¡Gracias por escuchar! 🎙️`,
        email: `Hola ${n}:\n\nQuería escribirte personalmente para darte las gracias por dejar esa generosa reseña del pódcast ('${q}'). Saber que los episodios te llegan nos motiva a traer a los mejores invitados posibles. ¡Te agradecemos mucho tu apoyo!\n\nUn saludo,\nTu anfitrión`,
      }),
      constructive: (n, q) => ({
        onAir: `“También quiero reconocer los comentarios tan acertados de ${n}, que señaló: '${q}'. Nos tomamos en serio las sugerencias de los oyentes y notarás en el episodio de hoy que hemos ajustado el ritmo y el balance del audio justo por eso. ¡Gracias, ${n}, por mantenernos atentos!”`,
        social: `Agradecemos mucho esta crítica constructiva de @${n}: '${q}'. Tienes toda la razón y ya hemos ajustado nuestro flujo de producción para los próximos episodios. ¡Gracias por ayudarnos a mejorar el programa!`,
        email: `Hola ${n}:\n\nGracias por dedicar tiempo a compartir tu opinión sincera sobre el programa ('${q}'). Valoramos de verdad las notas constructivas de oyentes tan fieles y ya estamos aplicando cambios en nuestra próxima grabación.\n\nUn cordial saludo,\nTu anfitrión`,
      }),
      critical: (n, q) => ({
        onAir: `“Siempre queremos ser transparentes con nuestra comunidad. Recientemente recibimos una nota crítica de ${n} sobre '${q}'. Te escuchamos, y aunque quizá no acertemos con cada episodio para cada oyente, nos comprometemos a aprender y mejorar nuestro oficio cada semana.”`,
        social: `Gracias por compartir tu opinión, @${n}. Lamentamos que este episodio no cumpliera tus expectativas, pero agradecemos la sinceridad y llevaremos tus comentarios a nuestras reuniones editoriales para futuros episodios.`,
        email: `Hola ${n}:\n\nGracias por tus comentarios sinceros sobre '${q}'. Lamento que el episodio no estuviera a la altura. Nos tomamos en serio toda opinión para mejorar el pódcast. ¡Esperamos que le des otra oportunidad a los próximos episodios!\n\nAtentamente,\nTu anfitrión`,
      }),
    },
  },
  fr: {
    name: "Nom / pseudo de l'auteur de l'avis", sentiment: "Ton de l'avis", said: "Qu'a dit l'auteur de l'avis ?", fb: "l'un de nos auditeurs",
    defName: "AudioFanatic_99", defSnippet: "L'épisode 32 a changé ma façon de penser le recrutement. Les meilleures 40 minutes de ma semaine !",
    labels: ["Éloge 5 étoiles", "Constructif", "Critique"],
    onAir: "Script de remerciement à l'antenne", social: "Réponse sur les réseaux sociaux", dm: "Message direct de l'animateur",
    onAirHint: "À lire au micro pendant l'intro ou l'outro", socialHint: "Pour Twitter, Threads ou Instagram", dmHint: "Mot de remerciement privé ou e-mail",
    copy: "Copier", copied: "Copié !",
    t: {
      praise: (n, q) => ({
        onAir: `« Avant de commencer la conversation du jour, je veux adresser un immense merci à l'antenne à ${n}, qui a laissé un avis 5 étoiles : « ${q} ». ${n}, merci infiniment de nous écouter et de soutenir l'émission. Si vous nous écoutez en ce moment et aimez ces épisodes, prendre 30 secondes pour laisser un avis sur Apple Podcasts ou Spotify compte énormément pour notre équipe. »`,
        social: `Un immense merci à @${n} pour cet avis incroyable sur Apple Podcasts ! 🙏 Quand on construit en public, lire « ${q} » justifie toutes les nuits de montage. Merci de nous écouter ! 🎙️`,
        email: `Bonjour ${n},\n\nJe tenais à vous écrire personnellement pour vous remercier de ce généreux avis sur le podcast (« ${q} »). Savoir que nos épisodes vous parlent nous motive à inviter les meilleurs invités possibles. Merci vraiment pour votre soutien !\n\nCordialement,\nVotre animateur`,
      }),
      constructive: (n, q) => ({
        onAir: `« Je veux aussi saluer les remarques réfléchies de ${n}, qui a écrit : « ${q} ». Nous prenons les suggestions des auditeurs au sérieux, et vous remarquerez dans l'épisode du jour que nous avons ajusté le rythme et l'équilibre sonore pour y répondre. Merci ${n} de nous garder sur le qui-vive ! »`,
        social: `Merci pour ce retour constructif de @${n} : « ${q} ». Vous avez tout à fait raison, et nous avons déjà adapté notre production pour les prochains épisodes. Merci de nous aider à améliorer l'émission !`,
        email: `Bonjour ${n},\n\nMerci d'avoir pris le temps de partager votre avis sincère sur l'émission (« ${q} »). Nous apprécions vraiment les remarques constructives de nos auditeurs fidèles, et nous mettons déjà en place des changements lors du prochain enregistrement.\n\nChaleureusement,\nVotre animateur`,
      }),
      critical: (n, q) => ({
        onAir: `« Nous voulons toujours être transparents avec notre communauté. Nous avons récemment reçu une critique de ${n} à propos de « ${q} ». Nous vous entendons, et même si nous ne réussissons pas chaque épisode pour chaque auditeur, nous nous engageons à apprendre et à progresser chaque semaine. »`,
        social: `Merci d'avoir partagé votre avis @${n}. Nous sommes désolés que cet épisode ne vous ait pas convaincu, mais nous apprécions votre franchise et en parlerons lors de nos réunions éditoriales.`,
        email: `Bonjour ${n},\n\nMerci pour votre retour sincère concernant « ${q} ». Je suis désolé que l'épisode n'ait pas été à la hauteur. Nous prenons tous les avis au sérieux pour améliorer le podcast. J'espère que vous donnerez une nouvelle chance aux prochains épisodes !\n\nSincèrement,\nVotre animateur`,
      }),
    },
  },
  de: {
    name: "Name / Handle des Rezensenten", sentiment: "Tonalität der Rezension", said: "Was hat der Rezensent geschrieben?", fb: "einer unserer Hörer",
    defName: "AudioFanatic_99", defSnippet: "Folge 32 hat meine Sicht aufs Recruiting verändert. Die besten 40 Minuten meiner Woche!",
    labels: ["5-Sterne-Lob", "Konstruktiv", "Kritisch"],
    onAir: "Shoutout-Skript für die Sendung", social: "Social-Media-Antwort", dm: "Direktnachricht des Hosts",
    onAirHint: "Im Intro oder Outro ins Mikrofon sprechen", socialHint: "Für Twitter, Threads oder Instagram", dmHint: "Private Dankesnachricht oder E-Mail",
    copy: "Kopieren", copied: "Kopiert!",
    t: {
      praise: (n, q) => ({
        onAir: `„Bevor wir ins heutige Gespräch einsteigen, möchte ich ${n} ein riesiges Dankeschön aussprechen, der eine 5-Sterne-Bewertung hinterlassen hat: ‚${q}‘. ${n}, vielen Dank fürs Zuhören und Unterstützen der Show. Wenn du gerade zuhörst und die Folgen magst: 30 Sekunden für eine Bewertung bei Apple Podcasts oder Spotify bedeuten unserem Team die Welt.“`,
        social: `Riesigen Dank an @${n} für diese tolle Bewertung bei Apple Podcasts! 🙏 Wenn man öffentlich aufbaut, macht ein ‚${q}‘ alle nächtlichen Schnittsessions 100 % wett. Danke fürs Zuhören! 🎙️`,
        email: `Hallo ${n},\n\nich wollte mich persönlich bei dir für die großzügige Bewertung des Podcasts bedanken (‚${q}‘). Zu hören, dass unsere Folgen bei dir ankommen, motiviert uns, die bestmöglichen Gäste einzuladen. Vielen Dank für deine Unterstützung!\n\nBeste Grüße\nDein Host`,
      }),
      constructive: (n, q) => ({
        onAir: `„Außerdem möchte ich durchdachtes Feedback von ${n} würdigen, der schrieb: ‚${q}‘. Wir nehmen Hörervorschläge ernst, und du wirst in der heutigen Folge merken, dass wir Tempo und Audiobalance genau dafür angepasst haben. Danke, ${n}, dass du uns in die Pflicht nimmst!“`,
        social: `Vielen Dank für dieses konstruktive Feedback von @${n}: ‚${q}‘. Du hast völlig recht, und wir haben unseren Produktionsablauf für kommende Folgen bereits angepasst. Danke, dass du uns hilfst, besser zu werden!`,
        email: `Hallo ${n},\n\nvielen Dank, dass du dir die Zeit für ehrliches Feedback zur Show genommen hast (‚${q}‘). Wir schätzen konstruktive Hinweise treuer Hörer sehr und setzen schon in der nächsten Aufnahme Änderungen um.\n\nHerzliche Grüße\nDein Host`,
      }),
      critical: (n, q) => ({
        onAir: `„Wir wollen gegenüber unserer Community immer transparent sein. Kürzlich erhielten wir eine kritische Rückmeldung von ${n} zu ‚${q}‘. Wir hören dich, und auch wenn wir nicht jede Folge für jeden Hörer treffen, wollen wir jede Woche dazulernen und besser werden.“`,
        social: `Danke für deine Meinung, @${n}. Es tut uns leid, dass die Folge dich nicht überzeugt hat, aber wir schätzen die Ehrlichkeit und nehmen deine Punkte in unsere Redaktionssitzungen mit.`,
        email: `Hallo ${n},\n\ndanke für dein ehrliches Feedback zu ‚${q}‘. Es tut mir leid, dass die Folge deine Erwartungen nicht erfüllt hat. Wir nehmen jedes Feedback ernst, um den Podcast zu verbessern. Ich hoffe, du gibst kommenden Folgen noch eine Chance!\n\nMit freundlichen Grüßen\nDein Host`,
      }),
    },
  },
  it: {
    name: "Nome / handle del recensore", sentiment: "Tono della recensione", said: "Cosa ha scritto il recensore?", fb: "uno dei nostri ascoltatori",
    defName: "AudioFanatic_99", defSnippet: "L'episodio 32 ha cambiato il mio modo di pensare alle assunzioni. I migliori 40 minuti della mia settimana!",
    labels: ["Elogio a 5 stelle", "Costruttiva", "Critica"],
    onAir: "Script di ringraziamento in onda", social: "Risposta sui social", dm: "Messaggio diretto del conduttore",
    onAirHint: "Da leggere al microfono in apertura o chiusura", socialHint: "Per Twitter, Threads o Instagram", dmHint: "Nota di ringraziamento privata o e-mail",
    copy: "Copia", copied: "Copiato!",
    t: {
      praise: (n, q) => ({
        onAir: `“Prima di iniziare la conversazione di oggi, voglio fare un enorme saluto in onda a ${n}, che ha lasciato una recensione a 5 stelle scrivendo: '${q}'. ${n}, grazie mille per l'ascolto e per il sostegno. Se ci stai ascoltando e ti piacciono gli episodi, dedicare 30 secondi a una recensione su Apple Podcasts o Spotify per il nostro team vale moltissimo.”`,
        social: `Grazie di cuore a @${n} per questa splendida recensione su Apple Podcasts! 🙏 Quando si costruisce in pubblico, leggere '${q}' ripaga al 100% le notti passate a montare. Grazie per l'ascolto! 🎙️`,
        email: `Ciao ${n},\n\nvolevo scriverti di persona per ringraziarti della generosa recensione al podcast ('${q}'). Sapere che gli episodi ti piacciono ci motiva a portare i migliori ospiti possibili. Grazie davvero per il tuo supporto!\n\nUn saluto,\nIl tuo conduttore`,
      }),
      constructive: (n, q) => ({
        onAir: `“Voglio anche riconoscere il feedback ponderato di ${n}, che ha scritto: '${q}'. Prendiamo sul serio i suggerimenti degli ascoltatori e nell'episodio di oggi noterete che abbiamo adattato il ritmo e il bilanciamento audio proprio per questo. Grazie ${n} per tenerci sul pezzo!”`,
        social: `Grazie per questo feedback costruttivo di @${n}: '${q}'. Hai perfettamente ragione e abbiamo già modificato il nostro flusso di produzione per i prossimi episodi. Grazie per aiutarci a migliorare!`,
        email: `Ciao ${n},\n\ngrazie per aver dedicato del tempo a condividere un parere sincero sul programma ('${q}'). Apprezziamo molto i consigli costruttivi degli ascoltatori più affezionati e stiamo già applicando modifiche nella prossima registrazione.\n\nCordialmente,\nIl tuo conduttore`,
      }),
      critical: (n, q) => ({
        onAir: `“Vogliamo sempre essere trasparenti con la nostra community. Di recente abbiamo ricevuto una critica da ${n} riguardo a '${q}'. Ti ascoltiamo e, pur non riuscendo a centrare ogni episodio per ogni ascoltatore, ci impegniamo a imparare e a migliorare ogni settimana.”`,
        social: `Grazie per aver condiviso la tua opinione @${n}. Ci dispiace che l'episodio non ti abbia convinto, ma apprezziamo la sincerità e porteremo le tue osservazioni nelle nostre riunioni editoriali.`,
        email: `Ciao ${n},\n\ngrazie per il tuo feedback sincero su '${q}'. Mi dispiace che l'episodio non sia stato all'altezza. Prendiamo sul serio ogni parere per migliorare il podcast. Spero che darai un'altra possibilità ai prossimi episodi!\n\nCordiali saluti,\nIl tuo conduttore`,
      }),
    },
  },
  pt: {
    name: "Nome / usuário do avaliador", sentiment: "Tom da avaliação", said: "O que o avaliador disse?", fb: "um dos nossos ouvintes",
    defName: "AudioFanatic_99", defSnippet: "O episódio 32 mudou minha forma de pensar sobre contratação. Os melhores 40 minutos da minha semana!",
    labels: ["Elogio 5 estrelas", "Construtiva", "Crítica"],
    onAir: "Roteiro de agradecimento no ar", social: "Resposta nas redes sociais", dm: "Mensagem direta do apresentador",
    onAirHint: "Leia ao microfone na abertura ou no encerramento", socialHint: "Para Twitter, Threads ou Instagram", dmHint: "Bilhete de agradecimento privado ou e-mail",
    copy: "Copiar", copied: "Copiado!",
    t: {
      praise: (n, q) => ({
        onAir: `“Antes de começarmos a conversa de hoje, quero mandar um enorme salve no ar para ${n}, que deixou uma avaliação de 5 estrelas dizendo: '${q}'. ${n}, muito obrigado por ouvir e apoiar o programa. Se você está ouvindo agora e gosta dos episódios, dedicar 30 segundos para deixar uma avaliação no Apple Podcasts ou no Spotify significa muito para a nossa equipe.”`,
        social: `Muito obrigado, @${n}, por essa avaliação incrível no Apple Podcasts! 🙏 Quando você constrói em público, ver '${q}' faz todas as madrugadas de edição valerem 100%. Obrigado por ouvir! 🎙️`,
        email: `Olá, ${n},\n\nQueria entrar em contato pessoalmente para agradecer a avaliação tão generosa do podcast ('${q}'). Saber que os episódios fazem sentido para você nos motiva a trazer os melhores convidados possíveis. Agradeço muito o seu apoio!\n\nAbraço,\nSeu apresentador`,
      }),
      constructive: (n, q) => ({
        onAir: `“Também quero reconhecer o feedback cuidadoso de ${n}, que comentou: '${q}'. Levamos as sugestões dos ouvintes a sério e, no episódio de hoje, você vai notar que ajustamos o ritmo e o equilíbrio do áudio justamente por isso. Obrigado, ${n}, por nos manter atentos!”`,
        social: `Agradecemos muito esse feedback construtivo de @${n}: '${q}'. Você tem toda a razão e já ajustamos nosso fluxo de produção para os próximos episódios. Obrigado por nos ajudar a melhorar o programa!`,
        email: `Olá, ${n},\n\nObrigado por reservar um tempo para compartilhar sua opinião sincera sobre o programa ('${q}'). Valorizamos muito as observações construtivas de ouvintes dedicados e já estamos aplicando mudanças na próxima gravação.\n\nCom carinho,\nSeu apresentador`,
      }),
      critical: (n, q) => ({
        onAir: `“Sempre queremos ser transparentes com a nossa comunidade. Recentemente recebemos uma crítica de ${n} sobre '${q}'. Nós ouvimos você e, embora talvez não acertemos todos os episódios para todos os ouvintes, estamos dedicados a aprender e a evoluir a cada semana.”`,
        social: `Obrigado por compartilhar sua opinião, @${n}. Sentimos muito que o episódio não tenha agradado, mas agradecemos a sinceridade e levaremos seus pontos às nossas reuniões editoriais para os próximos episódios.`,
        email: `Olá, ${n},\n\nObrigado pelo seu feedback sincero sobre '${q}'. Sinto muito que o episódio não tenha correspondido às suas expectativas. Levamos todo feedback a sério para melhorar o podcast. Espero que você dê outra chance aos próximos episódios!\n\nAtenciosamente,\nSeu apresentador`,
      }),
    },
  },
  ja: {
    name: "レビュー投稿者の名前／ハンドル", sentiment: "レビューのトーン", said: "レビューにはどう書かれていましたか？", fb: "リスナーの方",
    defName: "AudioFanatic_99", defSnippet: "第32回で採用についての考え方が変わりました。今週で最高の40分でした！",
    labels: ["星5つの絶賛", "建設的", "批判的"],
    onAir: "番組内での紹介スクリプト", social: "SNS返信", dm: "ホストからのダイレクトメッセージ",
    onAirHint: "オープニングまたはエンディングでマイクに向けて読み上げます", socialHint: "Twitter、Threads、Instagram向け", dmHint: "個別のお礼メッセージまたはメール",
    copy: "コピー", copied: "コピーしました！",
    t: {
      praise: (n, q) => ({
        onAir: `「今日のトークに入る前に、星5つのレビューをくださった${n}さんに心からお礼を申し上げます。『${q}』というコメントをいただきました。${n}さん、番組を聴いて応援してくださり本当にありがとうございます。今聴いてくださっていて、エピソードを気に入っていただけたら、Apple PodcastsやSpotifyに30秒でレビューを書いていただけると、私たちチームにとって大きな励みになります。」`,
        social: `@${n}さん、Apple Podcastsに素敵なレビューをありがとうございます！🙏 『${q}』という言葉を読むと、深夜の編集作業も全部報われます。聴いてくださってありがとうございます！🎙️`,
        email: `${n}さん\n\nポッドキャストに温かいレビュー（『${q}』）をいただき、直接お礼を伝えたくご連絡しました。エピソードが響いたと聞いて、最高のゲストをお迎えする意欲がさらに湧いてきます。応援本当にありがとうございます！\n\nどうぞよろしくお願いします。\nホストより`,
      }),
      constructive: (n, q) => ({
        onAir: `「${n}さんからいただいた丁寧なご意見にも触れさせてください。『${q}』とのことでした。リスナーの声は真剣に受け止めており、今日のエピソードではまさにその点に対応するため、テンポと音のバランスを調整しています。${n}さん、気づかせてくださってありがとうございます！」`,
        social: `@${n}さん、建設的なご意見をありがとうございます：『${q}』。おっしゃる通りです。今後のエピソードに向けて制作の流れをすでに調整しました。番組を良くするお手伝いをありがとうございます！`,
        email: `${n}さん\n\n番組について率直なご意見（『${q}』）をお寄せいただき、ありがとうございます。熱心なリスナーの方からの建設的なご指摘は本当にありがたく、次回の収録からすでに改善に取り組んでいます。\n\n心を込めて\nホストより`,
      }),
      critical: (n, q) => ({
        onAir: `「私たちはコミュニティに対して常に誠実でありたいと思っています。先日、${n}さんから『${q}』について厳しいご意見をいただきました。真摯に受け止めます。すべてのリスナーに毎回満足していただけるとは限りませんが、毎週学び、腕を磨き続けることをお約束します。」`,
        social: `@${n}さん、ご意見をありがとうございます。今回のエピソードがご期待に添えず申し訳ありません。率直なご意見に感謝し、今後の編集会議で検討します。`,
        email: `${n}さん\n\n『${q}』について率直なご意見をありがとうございます。エピソードがご期待に添えず申し訳ありません。ポッドキャストをより良くするため、すべてのご意見を真剣に受け止めています。次回以降のエピソードもぜひお聴きいただけたら嬉しいです。\n\n敬具\nホストより`,
      }),
    },
  },
  ko: {
    name: "리뷰어 이름 / 핸들", sentiment: "리뷰 성향", said: "리뷰어는 뭐라고 썼나요?", fb: "청취자 한 분",
    defName: "AudioFanatic_99", defSnippet: "32화 덕분에 채용에 대한 생각이 바뀌었어요. 이번 주 최고의 40분이었습니다!",
    labels: ["별 5개 칭찬", "건설적", "비판적"],
    onAir: "방송 중 감사 멘트 스크립트", social: "소셜 미디어 답글", dm: "진행자 다이렉트 메시지",
    onAirHint: "오프닝 또는 엔딩에서 마이크로 읽어 주세요", socialHint: "트위터, 스레드, 인스타그램용", dmHint: "개인 감사 메모 또는 이메일",
    copy: "복사", copied: "복사됨!",
    t: {
      praise: (n, q) => ({
        onAir: `“오늘 대화를 시작하기 전에, 별 5개 리뷰를 남겨 주신 ${n}님께 큰 감사 인사를 드립니다. '${q}'라고 써 주셨어요. ${n}님, 방송을 들어 주시고 응원해 주셔서 정말 감사합니다. 지금 듣고 계신 분들도 에피소드가 마음에 드셨다면 Apple Podcasts나 Spotify에 30초만 투자해 리뷰를 남겨 주시면 저희 팀에 큰 힘이 됩니다.”`,
        social: `Apple Podcasts에 멋진 리뷰를 남겨 주신 @${n}님, 정말 감사합니다! 🙏 '${q}'라는 글을 보면 밤샘 편집이 100% 보람 있게 느껴져요. 들어 주셔서 감사합니다! 🎙️`,
        email: `${n}님께,\n\n팟캐스트에 따뜻한 리뷰('${q}')를 남겨 주셔서 직접 감사 인사를 드리고 싶었습니다. 에피소드가 마음에 와닿았다는 말씀에 최고의 게스트를 모실 힘이 납니다. 응원해 주셔서 정말 감사합니다!\n\n감사합니다.\n진행자 드림`,
      }),
      constructive: (n, q) => ({
        onAir: `“${n}님이 남겨 주신 정성스러운 피드백도 짚고 넘어가고 싶습니다. '${q}'라고 해 주셨어요. 청취자 의견을 진지하게 받아들이고 있으며, 오늘 에피소드에서는 바로 그 점을 반영해 진행 속도와 오디오 밸런스를 조정했습니다. ${n}님, 저희를 긴장하게 해 주셔서 감사합니다!”`,
        social: `@${n}님의 건설적인 피드백 감사합니다: '${q}'. 말씀하신 그대로이며, 앞으로의 에피소드를 위해 제작 과정을 이미 조정했습니다. 방송이 더 나아지도록 도와주셔서 감사합니다!`,
        email: `${n}님께,\n\n방송에 대한 솔직한 의견('${q}')을 나눠 주셔서 감사합니다. 열성 청취자분의 건설적인 의견은 정말 소중하며, 다음 녹음부터 이미 개선을 적용하고 있습니다.\n\n따뜻한 마음을 담아,\n진행자 드림`,
      }),
      critical: (n, q) => ({
        onAir: `“저희는 커뮤니티에 늘 투명하고 싶습니다. 최근 ${n}님께서 '${q}'에 대해 비판적인 의견을 주셨습니다. 말씀 잘 들었습니다. 모든 청취자에게 매번 만족을 드리지는 못하더라도, 매주 배우고 실력을 키우기 위해 최선을 다하겠습니다.”`,
        social: `@${n}님, 의견 감사합니다. 이번 에피소드가 기대에 못 미쳐 죄송합니다. 솔직한 말씀에 감사드리며, 앞으로의 편집 회의에서 반영하겠습니다.`,
        email: `${n}님께,\n\n'${q}'에 대한 솔직한 피드백 감사합니다. 에피소드가 기대에 미치지 못해 죄송합니다. 팟캐스트를 개선하기 위해 모든 의견을 진지하게 받아들이고 있습니다. 앞으로의 에피소드도 다시 한번 들어봐 주시면 감사하겠습니다!\n\n정중히,\n진행자 드림`,
      }),
    },
  },
};

export function ReviewResponseGenerator({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [reviewer, setReviewer] = useState(ui.defName);
  const [snippet, setSnippet] = useState(ui.defSnippet);
  const [sentiment, setSentiment] = useState<Sent>("praise");
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const responses = useMemo(
    () => ui.t[sentiment](reviewer.trim() || ui.fb, snippet.trim()),
    [reviewer, snippet, sentiment, ui]
  );

  const handleCopy = (text: string, tab: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Control Panel */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.name}
            </label>
            <input
              type="text"
              value={reviewer}
              onChange={(e) => setReviewer(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.sentiment}
            </label>
            <div className="flex gap-2">
              {[
                { id: "praise", label: ui.labels[0] },
                { id: "constructive", label: ui.labels[1] },
                { id: "critical", label: ui.labels[2] },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSentiment(item.id as any)}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    sentiment === item.id
                      ? "bg-orange-500 text-white shadow-sm"
                      : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            {ui.said}
          </label>
          <textarea
            rows={2}
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
          />
        </div>
      </div>

      {/* Generated Response Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* On Air Shoutout */}
        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-studio-border/60 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                🎙️ {ui.onAir}
              </span>
              <button
                onClick={() => handleCopy(responses.onAir, "onair")}
                className="text-xs text-orange-600 dark:text-orange-400 hover:text-orange-500 font-semibold cursor-pointer"
              >
                {copiedTab === "onair" ? ui.copied : ui.copy}
              </button>
            </div>
            <p className="text-xs text-neutral-800 dark:text-slate-200 leading-relaxed font-sans">
              {responses.onAir}
            </p>
          </div>
          <span className="text-[11px] text-neutral-500">{ui.onAirHint}</span>
        </div>

        {/* Social Media Reply */}
        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-studio-border/60 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                💬 {ui.social}
              </span>
              <button
                onClick={() => handleCopy(responses.social, "social")}
                className="text-xs text-orange-600 dark:text-orange-400 hover:text-orange-500 font-semibold cursor-pointer"
              >
                {copiedTab === "social" ? ui.copied : ui.copy}
              </button>
            </div>
            <p className="text-xs text-neutral-800 dark:text-slate-200 leading-relaxed font-sans">
              {responses.social}
            </p>
          </div>
          <span className="text-[11px] text-neutral-500">{ui.socialHint}</span>
        </div>

        {/* Host Email/DM */}
        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-studio-border/60 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                ✉️ {ui.dm}
              </span>
              <button
                onClick={() => handleCopy(responses.email, "email")}
                className="text-xs text-orange-600 dark:text-orange-400 hover:text-orange-500 font-semibold cursor-pointer"
              >
                {copiedTab === "email" ? ui.copied : ui.copy}
              </button>
            </div>
            <p className="text-xs text-neutral-800 dark:text-slate-200 leading-relaxed font-sans whitespace-pre-wrap">
              {responses.email}
            </p>
          </div>
          <span className="text-[11px] text-neutral-500">{ui.dmHint}</span>
        </div>
      </div>
    </div>
  );
}

