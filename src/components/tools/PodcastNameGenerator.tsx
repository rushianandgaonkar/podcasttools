"use client";

import React, { useState, useMemo } from "react";
import { Mic, Sparkles, Copy, Check, Heart, Bookmark, Filter, Download } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

interface NameIdea {
  name: string;
  tagline: string;
  style: "Clever" | "Authoritative" | "Modern" | "Playful" | "Narrative";
}

type StyleId = NameIdea["style"];
type Tpl = (n: string) => [string, string]; // [name, tagline]
const STYLE_IDS: StyleId[] = ["Authoritative", "Modern", "Clever", "Playful", "Narrative"];

type NameText = {
  niche: string; niches: string[]; custom: string; opt: string; ph: string; randomTitle: string; random: string;
  style: string; all: string; styles: Record<StyleId, string>; exportN: (n: number) => string;
  favRemove: string; favSave: string; ready: string; copy: string; copied: string; and: string; kw: string[]; file: string;
  t: Record<StyleId, Tpl[]>;
};

// Patterns avoid articles/gender agreement so any niche label slots in grammatically (colon / "of"-free forms).
const TEXT: Record<SupportedLocale, NameText> = {
  en: {
    niche: "Podcast Niche / Genre",
    niches: ["Tech & Startups", "Business & Entrepreneurship", "Sports & Athletics", "Finance & Crypto", "True Crime & Mystery", "Funny & Satire", "Health & Longevity", "Personal Growth & Mindset", "Pop Culture & Movies", "B2B Marketing & Sales", "Comedy & Casual", "History & Culture"],
    custom: "Custom Word or Theme", opt: "(Optional)", ph: "e.g. AI Agents, Sports, True Crime, Startup...", randomTitle: "Generate random / AI topic ideas", random: "Random / AI",
    style: "Brand Style:", all: "All Styles", styles: { Authoritative: "Authoritative", Modern: "Modern", Clever: "Clever", Playful: "Playful", Narrative: "Narrative" },
    exportN: (n) => `Export ${n} Saved`, favRemove: "Remove from favorites", favSave: "Save to favorites", ready: "Ready to brand", copy: "Copy", copied: "Copied", and: "and",
    kw: ["AI Frontier", "Sunday Long Run", "Midnight Mystery", "Unfiltered Hustle", "The Daily Grind", "Inside Edge", "Behind The Scenes", "Silicon Valley", "Fourth Quarter", "True Crime Files", "Laugh Track", "Coffee Break"],
    file: "SAVED PODCAST NAMES - POD STUDIO",
    t: {
      Authoritative: [
        (n) => [`The ${n} Blueprint`, `The definitive masterclass for ${n} practitioners.`],
        (n) => [`${n} Unfiltered`, `Hard-hitting insights and real strategies in ${n}.`],
        (n) => [`The ${n} Ledger`, `Decoding the business and mechanics of ${n}.`],
        (n) => [`Masters of ${n}`, `Interviews with top 1% leaders in ${n}.`],
        (n) => [`The ${n} Standard`, `Setting the benchmark for excellence in ${n}.`],
      ],
      Clever: [
        (n) => [`Between the ${n}`, `The stories and nuances between the lines.`],
        (n) => [`Plot Twist ${n}`, `Unexpected perspectives on modern ${n}.`],
        (n) => [`${n} & Chill`, `Relaxed conversations about serious ${n} topics.`],
        (n) => [`The ${n} Paradox`, `Exploring what everyone gets wrong about ${n}.`],
        (n) => [`Off the ${n} Record`, `Candid audio backstage passes to ${n}.`],
      ],
      Modern: [
        (n) => [`Signal: ${n}`, `Filtering high-impact signal from the noise.`],
        (n) => [`${n} Lab`, `Experiments, hypotheses, and breakdowns in ${n}.`],
        (n) => [`The Next ${n}`, `Where ${n} is heading in the next 5 years.`],
        (n) => [`Compound ${n}`, `Small daily habits that yield exponential ${n} gains.`],
        (n) => [`Pulse of ${n}`, `The weekly heartbeat of the ${n} industry.`],
      ],
      Playful: [
        (n) => [`Don't Panic, It's ${n}`, `Demystifying ${n} without the corporate jargon.`],
        (n) => [`The Happy ${n} Hour`, `End-of-week banter and laughs about ${n}.`],
        (n) => [`Holy ${n}!`, `Mind-blowing discoveries and entertaining chats.`],
        (n) => [`Confessions of a ${n} Geek`, `Unapologetically obsessed with ${n}.`],
        (n) => [`${n} After Dark`, `Late night, no-holds-barred commentary.`],
      ],
      Narrative: [
        (n) => [`The Anatomy of ${n}`, `Serial investigative deep dives into ${n}.`],
        (n) => [`Chasing ${n}`, `Human stories and pivotal turning points in ${n}.`],
        (n) => [`The ${n} Chronicles`, `Documentary audio memoirs from the front lines.`],
        (n) => [`Origins of ${n}`, `How today's biggest ${n} milestones actually started.`],
      ],
    },
  },
  es: {
    niche: "Nicho / género del pódcast",
    niches: ["Tecnología y startups", "Negocios y emprendimiento", "Deportes y atletismo", "Finanzas y cripto", "Crimen real y misterio", "Humor y sátira", "Salud y longevidad", "Crecimiento personal y mentalidad", "Cultura pop y cine", "Marketing y ventas B2B", "Comedia y desenfado", "Historia y cultura"],
    custom: "Palabra o tema personalizado", opt: "(Opcional)", ph: "p. ej. Agentes de IA, Deportes, Crimen real, Startup...", randomTitle: "Generar ideas de temas aleatorias / con IA", random: "Aleatorio / IA",
    style: "Estilo de marca:", all: "Todos los estilos", styles: { Authoritative: "Autoridad", Modern: "Moderno", Clever: "Ingenioso", Playful: "Divertido", Narrative: "Narrativo" },
    exportN: (n) => `Exportar ${n} guardados`, favRemove: "Quitar de favoritos", favSave: "Guardar en favoritos", ready: "Listo para tu marca", copy: "Copiar", copied: "Copiado", and: "y",
    kw: ["Frontera de la IA", "Tirada larga del domingo", "Misterio de medianoche", "Ambición sin filtros", "El día a día", "Ventaja desde dentro", "Entre bastidores", "Silicon Valley", "Último cuarto", "Expedientes de crimen real", "Risas enlatadas", "Pausa para el café"],
    file: "NOMBRES DE PÓDCAST GUARDADOS - POD STUDIO",
    t: {
      Authoritative: [
        (n) => [`${n}: la guía definitiva`, `La clase magistral definitiva para quienes trabajan en ${n}.`],
        (n) => [`${n} sin filtros`, `Ideas contundentes y estrategias reales en ${n}.`],
        (n) => [`${n}: el libro de cuentas`, `Descifrando el negocio y la mecánica de ${n}.`],
        (n) => [`Maestros de ${n}`, `Entrevistas con el 1 % de los líderes en ${n}.`],
        (n) => [`${n}: el estándar`, `Marcando la referencia de excelencia en ${n}.`],
      ],
      Clever: [
        (n) => [`${n} entre líneas`, `Las historias y los matices que no se dicen.`],
        (n) => [`Giro de guion: ${n}`, `Perspectivas inesperadas sobre ${n} hoy.`],
        (n) => [`${n} y relax`, `Conversaciones relajadas sobre temas serios de ${n}.`],
        (n) => [`La paradoja de ${n}`, `Explorando lo que todos entienden mal sobre ${n}.`],
        (n) => [`${n} fuera de micrófono`, `Pases de acceso sonoros a los bastidores de ${n}.`],
      ],
      Modern: [
        (n) => [`Señal: ${n}`, `Separando la señal de alto impacto del ruido.`],
        (n) => [`Laboratorio de ${n}`, `Experimentos, hipótesis y análisis sobre ${n}.`],
        (n) => [`${n}: lo próximo`, `Hacia dónde va ${n} en los próximos 5 años.`],
        (n) => [`${n} compuesto`, `Pequeños hábitos diarios que dan resultados exponenciales en ${n}.`],
        (n) => [`El pulso de ${n}`, `El latido semanal del sector de ${n}.`],
      ],
      Playful: [
        (n) => [`Sin pánico: es ${n}`, `Desmitificando ${n} sin jerga corporativa.`],
        (n) => [`Hora feliz de ${n}`, `Charla y risas de fin de semana sobre ${n}.`],
        (n) => [`¡Madre mía, ${n}!`, `Descubrimientos alucinantes y charlas entretenidas.`],
        (n) => [`Confesiones de un fan de ${n}`, `Obsesionados con ${n} sin pedir perdón.`],
        (n) => [`${n} de madrugada`, `Comentario nocturno y sin censura.`],
      ],
      Narrative: [
        (n) => [`Anatomía de ${n}`, `Investigaciones en serie y a fondo sobre ${n}.`],
        (n) => [`Tras la pista de ${n}`, `Historias humanas y puntos de inflexión en ${n}.`],
        (n) => [`Crónicas de ${n}`, `Memorias sonoras documentales desde primera línea.`],
        (n) => [`Orígenes de ${n}`, `Cómo empezaron de verdad los grandes hitos actuales de ${n}.`],
      ],
    },
  },
  fr: {
    niche: "Niche / genre du podcast",
    niches: ["Tech et startups", "Business et entrepreneuriat", "Sport et athlétisme", "Finance et crypto", "Faits divers et mystère", "Humour et satire", "Santé et longévité", "Développement personnel et état d'esprit", "Culture pop et cinéma", "Marketing et ventes B2B", "Comédie et décontraction", "Histoire et culture"],
    custom: "Mot ou thème personnalisé", opt: "(Facultatif)", ph: "ex. Agents IA, Sport, Faits divers, Startup...", randomTitle: "Générer des idées de sujets aléatoires / par IA", random: "Aléatoire / IA",
    style: "Style de marque :", all: "Tous les styles", styles: { Authoritative: "Expert", Modern: "Moderne", Clever: "Malin", Playful: "Ludique", Narrative: "Narratif" },
    exportN: (n) => `Exporter ${n} enregistrés`, favRemove: "Retirer des favoris", favSave: "Enregistrer dans les favoris", ready: "Prêt à devenir une marque", copy: "Copier", copied: "Copié", and: "et",
    kw: ["Frontière de l'IA", "Sortie longue du dimanche", "Mystère de minuit", "Ambition sans filtre", "Le quotidien", "L'avantage de l'intérieur", "Dans les coulisses", "Silicon Valley", "Dernier quart-temps", "Dossiers criminels", "Fou rire", "Pause café"],
    file: "NOMS DE PODCAST ENREGISTRÉS - POD STUDIO",
    t: {
      Authoritative: [
        (n) => [`${n} : le guide de référence`, `La masterclass de référence pour les professionnels de ${n}.`],
        (n) => [`${n} sans filtre`, `Des analyses percutantes et de vraies stratégies sur ${n}.`],
        (n) => [`${n} : le grand livre`, `Décrypter le business et les rouages de ${n}.`],
        (n) => [`Maîtres de ${n}`, `Interviews des 1 % de leaders de ${n}.`],
        (n) => [`${n} : le standard`, `Fixer la référence de l'excellence en ${n}.`],
      ],
      Clever: [
        (n) => [`${n} entre les lignes`, `Les histoires et les nuances que l'on ne dit pas.`],
        (n) => [`Coup de théâtre : ${n}`, `Des points de vue inattendus sur ${n} aujourd'hui.`],
        (n) => [`${n} et détente`, `Des conversations détendues sur des sujets sérieux de ${n}.`],
        (n) => [`Le paradoxe de ${n}`, `Explorer ce que tout le monde comprend de travers sur ${n}.`],
        (n) => [`${n} hors micro`, `Des coulisses sonores de ${n}, en toute franchise.`],
      ],
      Modern: [
        (n) => [`Signal : ${n}`, `Filtrer le signal à fort impact du bruit ambiant.`],
        (n) => [`Labo ${n}`, `Expériences, hypothèses et analyses autour de ${n}.`],
        (n) => [`${n} : la suite`, `Vers où va ${n} dans les 5 prochaines années.`],
        (n) => [`${n} composé`, `De petites habitudes quotidiennes aux gains exponentiels en ${n}.`],
        (n) => [`Le pouls de ${n}`, `Le battement hebdomadaire du secteur ${n}.`],
      ],
      Playful: [
        (n) => [`Pas de panique : ${n}`, `Démystifier ${n} sans jargon d'entreprise.`],
        (n) => [`Happy hour ${n}`, `Blagues et discussions de fin de semaine sur ${n}.`],
        (n) => [`Waouh, ${n} !`, `Des découvertes bluffantes et des discussions divertissantes.`],
        (n) => [`Confessions d'un fou de ${n}`, `Passionnés de ${n} sans complexe.`],
        (n) => [`${n} la nuit`, `Un commentaire nocturne, sans filtre.`],
      ],
      Narrative: [
        (n) => [`Anatomie de ${n}`, `Des enquêtes approfondies en série sur ${n}.`],
        (n) => [`À la poursuite de ${n}`, `Des histoires humaines et des tournants décisifs dans ${n}.`],
        (n) => [`Chroniques de ${n}`, `Des mémoires audio documentaires depuis le terrain.`],
        (n) => [`Aux origines de ${n}`, `Comment les grandes étapes actuelles de ${n} ont vraiment commencé.`],
      ],
    },
  },
  de: {
    niche: "Podcast-Nische / Genre",
    niches: ["Tech & Startups", "Business & Unternehmertum", "Sport & Leichtathletik", "Finanzen & Krypto", "True Crime & Mystery", "Comedy & Satire", "Gesundheit & Langlebigkeit", "Persönlichkeitsentwicklung & Mindset", "Popkultur & Filme", "B2B-Marketing & Vertrieb", "Humor & Lockeres", "Geschichte & Kultur"],
    custom: "Eigenes Wort oder Thema", opt: "(Optional)", ph: "z. B. KI-Agenten, Sport, True Crime, Startup...", randomTitle: "Zufällige / KI-Themenideen erzeugen", random: "Zufall / KI",
    style: "Markenstil:", all: "Alle Stile", styles: { Authoritative: "Autoritativ", Modern: "Modern", Clever: "Clever", Playful: "Verspielt", Narrative: "Erzählend" },
    exportN: (n) => `${n} Gespeicherte exportieren`, favRemove: "Aus Favoriten entfernen", favSave: "In Favoriten speichern", ready: "Bereit zum Branding", copy: "Kopieren", copied: "Kopiert", and: "und",
    kw: ["KI-Grenzbereich", "Langer Sonntagslauf", "Mitternachtsmysterium", "Ungefiltert am Hustle", "Der tägliche Grind", "Insider-Vorsprung", "Hinter den Kulissen", "Silicon Valley", "Viertes Viertel", "True-Crime-Akten", "Lachkonserve", "Kaffeepause"],
    file: "GESPEICHERTE PODCAST-NAMEN - POD STUDIO",
    t: {
      Authoritative: [
        (n) => [`${n}: Das Standardwerk`, `Die ultimative Masterclass für alle, die mit ${n} arbeiten.`],
        (n) => [`${n} ungefiltert`, `Knallharte Einblicke und echte Strategien zu ${n}.`],
        (n) => [`${n}: Das Hauptbuch`, `Das Geschäft und die Mechanik hinter ${n} entschlüsselt.`],
        (n) => [`Meister des Themas ${n}`, `Interviews mit den besten 1 % der Köpfe bei ${n}.`],
        (n) => [`${n}: Der Maßstab`, `Den Maßstab für Exzellenz bei ${n} setzen.`],
      ],
      Clever: [
        (n) => [`${n} zwischen den Zeilen`, `Die Geschichten und Nuancen zwischen den Zeilen.`],
        (n) => [`Plot-Twist: ${n}`, `Unerwartete Perspektiven auf ${n} von heute.`],
        (n) => [`${n} & Chill`, `Entspannte Gespräche über ernste Themen rund um ${n}.`],
        (n) => [`Das ${n}-Paradox`, `Was alle bei ${n} falsch verstehen.`],
        (n) => [`${n} Off the Record`, `Ehrliche Audio-Backstage-Pässe zu ${n}.`],
      ],
      Modern: [
        (n) => [`Signal: ${n}`, `Wirkungsstarkes Signal vom Rauschen trennen.`],
        (n) => [`${n}-Labor`, `Experimente, Hypothesen und Analysen rund um ${n}.`],
        (n) => [`${n}: Was kommt als Nächstes`, `Wohin sich ${n} in den nächsten 5 Jahren entwickelt.`],
        (n) => [`${n} mit Zinseszins`, `Kleine tägliche Gewohnheiten mit exponentiellem Gewinn bei ${n}.`],
        (n) => [`Puls von ${n}`, `Der wöchentliche Herzschlag der ${n}-Branche.`],
      ],
      Playful: [
        (n) => [`Keine Panik: ${n}`, `${n} entmystifiziert – ohne Fachchinesisch.`],
        (n) => [`${n} Happy Hour`, `Wochenend-Geplauder und Lacher rund um ${n}.`],
        (n) => [`Heilige ${n}!`, `Verblüffende Entdeckungen und unterhaltsame Gespräche.`],
        (n) => [`Geständnisse eines ${n}-Nerds`, `Ohne Reue besessen von ${n}.`],
        (n) => [`${n} nach Mitternacht`, `Kommentare spät in der Nacht, ohne Tabus.`],
      ],
      Narrative: [
        (n) => [`Anatomie von ${n}`, `Investigative Deep Dives in Serie zu ${n}.`],
        (n) => [`Auf der Jagd nach ${n}`, `Menschliche Geschichten und Wendepunkte bei ${n}.`],
        (n) => [`${n}-Chroniken`, `Dokumentarische Audio-Memoiren von der Front.`],
        (n) => [`Ursprünge von ${n}`, `Wie die größten ${n}-Meilensteine von heute wirklich begannen.`],
      ],
    },
  },
  it: {
    niche: "Nicchia / genere del podcast",
    niches: ["Tech e startup", "Business e imprenditoria", "Sport e atletica", "Finanza e crypto", "True crime e mistero", "Umorismo e satira", "Salute e longevità", "Crescita personale e mindset", "Cultura pop e cinema", "Marketing e vendite B2B", "Comicità e leggerezza", "Storia e cultura"],
    custom: "Parola o tema personalizzato", opt: "(Facoltativo)", ph: "es. Agenti IA, Sport, True crime, Startup...", randomTitle: "Genera idee di argomenti casuali / con IA", random: "Casuale / IA",
    style: "Stile del brand:", all: "Tutti gli stili", styles: { Authoritative: "Autorevole", Modern: "Moderno", Clever: "Brillante", Playful: "Giocoso", Narrative: "Narrativo" },
    exportN: (n) => `Esporta ${n} salvati`, favRemove: "Rimuovi dai preferiti", favSave: "Salva nei preferiti", ready: "Pronto per il brand", copy: "Copia", copied: "Copiato", and: "e",
    kw: ["Frontiera dell'IA", "Lungo della domenica", "Mistero di mezzanotte", "Grinta senza filtri", "Il quotidiano", "Vantaggio dall'interno", "Dietro le quinte", "Silicon Valley", "Ultimo quarto", "Fascicoli true crime", "Risate registrate", "Pausa caffè"],
    file: "NOMI DI PODCAST SALVATI - POD STUDIO",
    t: {
      Authoritative: [
        (n) => [`${n}: la guida definitiva`, `La masterclass definitiva per chi lavora in ${n}.`],
        (n) => [`${n} senza filtri`, `Approfondimenti diretti e strategie reali su ${n}.`],
        (n) => [`${n}: il libro mastro`, `Decifrare il business e i meccanismi di ${n}.`],
        (n) => [`Maestri di ${n}`, `Interviste al top 1% dei leader di ${n}.`],
        (n) => [`${n}: lo standard`, `Fissare il riferimento di eccellenza in ${n}.`],
      ],
      Clever: [
        (n) => [`${n} tra le righe`, `Le storie e le sfumature che non si dicono.`],
        (n) => [`Colpo di scena: ${n}`, `Prospettive inattese su ${n} oggi.`],
        (n) => [`${n} e relax`, `Conversazioni rilassate su temi seri di ${n}.`],
        (n) => [`Il paradosso di ${n}`, `Cosa tutti sbagliano su ${n}.`],
        (n) => [`${n} fuori onda`, `Pass sonori dietro le quinte di ${n}, senza filtri.`],
      ],
      Modern: [
        (n) => [`Segnale: ${n}`, `Separare il segnale ad alto impatto dal rumore.`],
        (n) => [`Laboratorio ${n}`, `Esperimenti, ipotesi e analisi su ${n}.`],
        (n) => [`${n}: la prossima mossa`, `Dove sta andando ${n} nei prossimi 5 anni.`],
        (n) => [`${n} composto`, `Piccole abitudini quotidiane che generano guadagni esponenziali in ${n}.`],
        (n) => [`Il polso di ${n}`, `Il battito settimanale del settore ${n}.`],
      ],
      Playful: [
        (n) => [`Niente panico: è ${n}`, `Demistificare ${n} senza gergo aziendale.`],
        (n) => [`Happy hour ${n}`, `Chiacchiere e risate di fine settimana su ${n}.`],
        (n) => [`Santo cielo, ${n}!`, `Scoperte pazzesche e chiacchierate divertenti.`],
        (n) => [`Confessioni di un fissato di ${n}`, `Ossessionati da ${n} senza vergogna.`],
        (n) => [`${n} a notte fonda`, `Commenti a tarda notte, senza freni.`],
      ],
      Narrative: [
        (n) => [`Anatomia di ${n}`, `Inchieste approfondite in serie su ${n}.`],
        (n) => [`Alla ricerca di ${n}`, `Storie umane e svolte decisive in ${n}.`],
        (n) => [`Cronache di ${n}`, `Memorie audio documentaristiche dalla prima linea.`],
        (n) => [`Le origini di ${n}`, `Come sono davvero iniziati i grandi traguardi di ${n} di oggi.`],
      ],
    },
  },
  pt: {
    niche: "Nicho / gênero do podcast",
    niches: ["Tecnologia e startups", "Negócios e empreendedorismo", "Esportes e atletismo", "Finanças e cripto", "True crime e mistério", "Humor e sátira", "Saúde e longevidade", "Crescimento pessoal e mentalidade", "Cultura pop e cinema", "Marketing e vendas B2B", "Comédia e descontração", "História e cultura"],
    custom: "Palavra ou tema personalizado", opt: "(Opcional)", ph: "ex.: Agentes de IA, Esportes, True crime, Startup...", randomTitle: "Gerar ideias de tema aleatórias / com IA", random: "Aleatório / IA",
    style: "Estilo da marca:", all: "Todos os estilos", styles: { Authoritative: "Autoridade", Modern: "Moderno", Clever: "Inteligente", Playful: "Divertido", Narrative: "Narrativo" },
    exportN: (n) => `Exportar ${n} salvos`, favRemove: "Remover dos favoritos", favSave: "Salvar nos favoritos", ready: "Pronto para virar marca", copy: "Copiar", copied: "Copiado", and: "e",
    kw: ["Fronteira da IA", "Longão de domingo", "Mistério da meia-noite", "Garra sem filtro", "O dia a dia", "Vantagem de dentro", "Nos bastidores", "Vale do Silício", "Último quarto", "Arquivos de true crime", "Trilha de risadas", "Pausa para o café"],
    file: "NOMES DE PODCAST SALVOS - POD STUDIO",
    t: {
      Authoritative: [
        (n) => [`${n}: o guia definitivo`, `A masterclass definitiva para quem atua em ${n}.`],
        (n) => [`${n} sem filtro`, `Insights contundentes e estratégias reais em ${n}.`],
        (n) => [`${n}: o livro-razão`, `Decifrando o negócio e a mecânica de ${n}.`],
        (n) => [`Mestres de ${n}`, `Entrevistas com o 1% dos líderes em ${n}.`],
        (n) => [`${n}: o padrão`, `Definindo o referencial de excelência em ${n}.`],
      ],
      Clever: [
        (n) => [`${n} nas entrelinhas`, `As histórias e nuances que ficam entre as linhas.`],
        (n) => [`Reviravolta: ${n}`, `Perspectivas inesperadas sobre ${n} hoje.`],
        (n) => [`${n} e relax`, `Conversas descontraídas sobre assuntos sérios de ${n}.`],
        (n) => [`O paradoxo de ${n}`, `Explorando o que todo mundo entende errado sobre ${n}.`],
        (n) => [`${n} fora do ar`, `Passes de áudio para os bastidores de ${n}, sem filtro.`],
      ],
      Modern: [
        (n) => [`Sinal: ${n}`, `Separando o sinal de alto impacto do ruído.`],
        (n) => [`Laboratório de ${n}`, `Experimentos, hipóteses e análises sobre ${n}.`],
        (n) => [`${n}: o próximo passo`, `Para onde ${n} vai nos próximos 5 anos.`],
        (n) => [`${n} composto`, `Pequenos hábitos diários que geram ganhos exponenciais em ${n}.`],
        (n) => [`Pulso de ${n}`, `O batimento semanal do setor de ${n}.`],
      ],
      Playful: [
        (n) => [`Sem pânico: é ${n}`, `Desmistificando ${n} sem jargão corporativo.`],
        (n) => [`Happy hour de ${n}`, `Papo e risadas de fim de semana sobre ${n}.`],
        (n) => [`Meu Deus, ${n}!`, `Descobertas de explodir a cabeça e conversas divertidas.`],
        (n) => [`Confissões de um nerd de ${n}`, `Obcecados por ${n} sem pedir desculpas.`],
        (n) => [`${n} de madrugada`, `Comentários noturnos, sem rédeas.`],
      ],
      Narrative: [
        (n) => [`Anatomia de ${n}`, `Mergulhos investigativos em série sobre ${n}.`],
        (n) => [`Em busca de ${n}`, `Histórias humanas e viradas decisivas em ${n}.`],
        (n) => [`Crônicas de ${n}`, `Memórias de áudio documentais direto da linha de frente.`],
        (n) => [`Origens de ${n}`, `Como os maiores marcos de ${n} de hoje realmente começaram.`],
      ],
    },
  },
  ja: {
    niche: "ポッドキャストのジャンル",
    niches: ["テック・スタートアップ", "ビジネス・起業", "スポーツ・陸上", "金融・暗号資産", "実録犯罪・ミステリー", "お笑い・風刺", "健康・長寿", "自己成長・マインドセット", "ポップカルチャー・映画", "BtoBマーケティング・営業", "コメディ・カジュアル", "歴史・文化"],
    custom: "好きな言葉・テーマ", opt: "（任意）", ph: "例：AIエージェント、スポーツ、実録犯罪、スタートアップ…", randomTitle: "ランダム／AIでテーマ案を生成", random: "ランダム／AI",
    style: "ブランドスタイル：", all: "すべてのスタイル", styles: { Authoritative: "権威的", Modern: "モダン", Clever: "ひねり", Playful: "遊び心", Narrative: "物語調" },
    exportN: (n) => `保存した${n}件をエクスポート`, favRemove: "お気に入りから削除", favSave: "お気に入りに保存", ready: "ブランド化の準備完了", copy: "コピー", copied: "コピーしました", and: "・",
    kw: ["AIの最前線", "日曜のロング走", "真夜中のミステリー", "本音のハッスル", "日々の格闘", "内側のアドバンテージ", "舞台裏", "シリコンバレー", "第4クォーター", "実録犯罪ファイル", "笑い声", "コーヒーブレイク"],
    file: "保存したポッドキャスト名 - POD STUDIO",
    t: {
      Authoritative: [
        (n) => [`${n}の教科書`, `${n}に携わる人のための決定版マスタークラス。`],
        (n) => [`${n} ノーカット`, `${n}の核心を突く知見と本物の戦略。`],
        (n) => [`${n}の台帳`, `${n}のビジネスと仕組みを読み解きます。`],
        (n) => [`${n}の達人たち`, `${n}の上位1％のリーダーへのインタビュー。`],
        (n) => [`${n}スタンダード`, `${n}における卓越性の基準を打ち立てます。`],
      ],
      Clever: [
        (n) => [`${n}の行間`, `行間にある物語とニュアンス。`],
        (n) => [`どんでん返し ${n}`, `今の${n}に対する意外な視点。`],
        (n) => [`${n} ＆ チル`, `${n}の真面目な話題を気楽に語り合います。`],
        (n) => [`${n}のパラドックス`, `${n}についてみんなが誤解していることを探ります。`],
        (n) => [`${n} オフレコ`, `${n}の舞台裏への率直な音声パス。`],
      ],
      Modern: [
        (n) => [`シグナル：${n}`, `ノイズの中から価値あるシグナルを選び出します。`],
        (n) => [`${n}ラボ`, `${n}の実験、仮説、分析。`],
        (n) => [`次の${n}`, `今後5年で${n}が向かう先。`],
        (n) => [`複利の${n}`, `小さな日々の習慣が${n}で指数関数的な成果を生みます。`],
        (n) => [`${n}の鼓動`, `${n}業界の毎週の脈拍。`],
      ],
      Playful: [
        (n) => [`慌てないで、${n}です`, `専門用語なしで${n}をわかりやすく。`],
        (n) => [`${n}ハッピーアワー`, `週末の${n}談義と笑い。`],
        (n) => [`なんと${n}！`, `驚きの発見と楽しいおしゃべり。`],
        (n) => [`${n}オタクの告白`, `${n}に堂々と夢中です。`],
        (n) => [`深夜の${n}`, `夜更けのノンストップ・コメンタリー。`],
      ],
      Narrative: [
        (n) => [`${n}の解剖学`, `${n}を連続で掘り下げる調査型ディープダイブ。`],
        (n) => [`${n}を追って`, `${n}における人間ドラマと転機。`],
        (n) => [`${n}クロニクル`, `最前線からのドキュメンタリー音声の回想録。`],
        (n) => [`${n}の起源`, `今日の${n}の大きな節目が実際にどう始まったか。`],
      ],
    },
  },
  ko: {
    niche: "팟캐스트 분야 / 장르",
    niches: ["기술 및 스타트업", "비즈니스 및 창업", "스포츠 및 육상", "금융 및 암호화폐", "실화 범죄 및 미스터리", "유머 및 풍자", "건강 및 장수", "자기계발 및 마인드셋", "대중문화 및 영화", "B2B 마케팅 및 영업", "코미디 및 캐주얼", "역사 및 문화"],
    custom: "원하는 단어 또는 주제", opt: "(선택)", ph: "예: AI 에이전트, 스포츠, 실화 범죄, 스타트업...", randomTitle: "무작위 / AI 주제 아이디어 생성", random: "무작위 / AI",
    style: "브랜드 스타일:", all: "모든 스타일", styles: { Authoritative: "권위형", Modern: "모던", Clever: "재치형", Playful: "유쾌형", Narrative: "서사형" },
    exportN: (n) => `저장된 ${n}개 내보내기`, favRemove: "즐겨찾기에서 제거", favSave: "즐겨찾기에 저장", ready: "브랜딩 준비 완료", copy: "복사", copied: "복사됨", and: "및",
    kw: ["AI 최전선", "일요일 장거리 달리기", "한밤의 미스터리", "거침없는 분투", "일상의 고군분투", "내부자의 우위", "비하인드 스토리", "실리콘밸리", "4쿼터", "실화 범죄 파일", "웃음 효과음", "커피 브레이크"],
    file: "저장된 팟캐스트 이름 - POD STUDIO",
    t: {
      Authoritative: [
        (n) => [`${n} 블루프린트`, `${n} 실무자를 위한 결정판 마스터클래스.`],
        (n) => [`${n} 날것 그대로`, `${n}의 핵심을 찌르는 통찰과 실전 전략.`],
        (n) => [`${n} 장부`, `${n}의 비즈니스와 구조를 해독합니다.`],
        (n) => [`${n}의 거장들`, `${n} 상위 1% 리더들과의 인터뷰.`],
        (n) => [`${n} 스탠더드`, `${n}에서 탁월함의 기준을 세웁니다.`],
      ],
      Clever: [
        (n) => [`${n}의 행간`, `행간에 숨은 이야기와 뉘앙스.`],
        (n) => [`반전 ${n}`, `오늘날 ${n}에 대한 뜻밖의 시각.`],
        (n) => [`${n} & 칠`, `${n}의 진지한 주제를 편하게 이야기합니다.`],
        (n) => [`${n}의 역설`, `${n}에 대해 모두가 오해하는 것을 탐구합니다.`],
        (n) => [`${n} 오프 더 레코드`, `${n}의 무대 뒤를 솔직하게 들려주는 오디오 패스.`],
      ],
      Modern: [
        (n) => [`시그널: ${n}`, `소음 속에서 영향력 큰 신호를 골라냅니다.`],
        (n) => [`${n} 랩`, `${n}의 실험, 가설, 분석.`],
        (n) => [`다음 ${n}`, `향후 5년간 ${n}이(가) 나아갈 방향.`],
        (n) => [`복리 ${n}`, `작은 일상 습관이 ${n}에서 기하급수적 성과를 만듭니다.`],
        (n) => [`${n}의 맥박`, `${n} 업계의 주간 심장박동.`],
      ],
      Playful: [
        (n) => [`당황하지 마세요, ${n}입니다`, `전문 용어 없이 ${n}을(를) 쉽게 풀어드립니다.`],
        (n) => [`${n} 해피 아워`, `주말을 앞둔 ${n} 수다와 웃음.`],
        (n) => [`세상에, ${n}!`, `놀라운 발견과 유쾌한 대화.`],
        (n) => [`${n} 덕후의 고백`, `${n}에 당당하게 빠져 있습니다.`],
        (n) => [`심야의 ${n}`, `늦은 밤, 거침없는 코멘터리.`],
      ],
      Narrative: [
        (n) => [`${n}의 해부`, `${n}을(를) 연재로 파고드는 탐사형 딥다이브.`],
        (n) => [`${n}을(를) 쫓아서`, `${n}의 인간적인 이야기와 결정적 전환점.`],
        (n) => [`${n} 연대기`, `최전선에서 전하는 다큐멘터리 오디오 회고록.`],
        (n) => [`${n}의 기원`, `오늘날 ${n}의 큰 이정표가 실제로 어떻게 시작됐는지.`],
      ],
    },
  },
};

export function PodcastNameGenerator({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [nicheIdx, setNicheIdx] = useState(3); // Finance & Crypto
  const niche = ui.niches[nicheIdx];
  const [customKeyword, setCustomKeyword] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const generatedNames = useMemo(() => {
    const rawSubject = (customKeyword.trim() || niche).replace(/&/g, ui.and);
    const subject = rawSubject.charAt(0).toUpperCase() + rawSubject.slice(1);

    const results: NameIdea[] = [];

    STYLE_IDS.forEach((styleKey) => {
      ui.t[styleKey].forEach((fn) => {
        const [name, tagline] = fn(subject);
        results.push({ name, tagline, style: styleKey });
      });
    });

    return results;
  }, [niche, customKeyword, ui]);

  const filteredNames = useMemo(() => {
    if (selectedStyle === "all") return generatedNames;
    return generatedNames.filter((item) => item.style === selectedStyle);
  }, [generatedNames, selectedStyle]);

  const handleRandomize = () => {
    setCustomKeyword(ui.kw[Math.floor(Math.random() * ui.kw.length)]);
  };

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const handleExportFavorites = () => {
    if (favorites.length === 0) return;
    const text = `${ui.file}\n\n` + favorites.map((n, i) => `${i + 1}. ${n}`).join("\n");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `favorite-podcast-names.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* Control Panel */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Niche Selector */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              {ui.niche}
            </label>
            <select
              value={nicheIdx}
              onChange={(e) => setNicheIdx(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            >
              {ui.niches.map((label, i) => (
                <option key={i} value={i}>{label}</option>
              ))}
            </select>
          </div>

          {/* Custom Keyword */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.custom} <span className="text-neutral-500 font-normal">{ui.opt}</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={customKeyword}
                onChange={(e) => setCustomKeyword(e.target.value)}
                placeholder={ui.ph}
                className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
              />
              <button
                type="button"
                onClick={handleRandomize}
                title={ui.randomTitle}
                className="px-3 py-2 rounded-xl bg-studio-elevated hover:bg-studio-border text-orange-500 border border-studio-border text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{ui.random}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Style Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-studio-border/60">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-neutral-600 dark:text-neutral-400 mr-1">{ui.style}</span>
            {(["all", ...STYLE_IDS] as const).map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  selectedStyle === style
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-studio-elevated text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                }`}
              >
                {style === "all" ? ui.all : ui.styles[style]}
              </button>
            ))}
          </div>

          {/* Favorites Counter & Export */}
          {favorites.length > 0 && (
            <button
              onClick={handleExportFavorites}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border text-orange-500 hover:text-orange-600 border border-studio-border text-xs font-semibold transition-colors cursor-pointer"
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              {ui.exportN(favorites.length)}
            </button>
          )}
        </div>
      </div>

      {/* Grid of Generated Names */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNames.map((item, idx) => {
          const isFav = favorites.includes(item.name);
          const isCopied = copiedName === item.name;

          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-studio-card border border-studio-border hover:border-orange-500/40 hover:bg-studio-card/90 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-studio-dark border border-studio-border text-neutral-700 dark:text-neutral-300">
                    {ui.styles[item.style]}
                  </span>
                  <button
                    onClick={() => toggleFavorite(item.name)}
                    className="p-1.5 rounded-lg hover:bg-studio-elevated text-neutral-400 hover:text-red-500 transition-colors"
                    title={isFav ? ui.favRemove : ui.favSave}
                    aria-label={isFav ? ui.favRemove : ui.favSave}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
                  </button>
                </div>

                <p className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors mb-1.5">
                  {item.name}
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-studio-border/50 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500">
                  {ui.ready}
                </span>
                <button
                  onClick={() => handleCopy(item.name)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:!bg-orange-500 hover:!text-white hover:!border-orange-500 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? ui.copied : ui.copy}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

