import type { ToolContentRecord } from "./types";

export const ptToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Gerador de Títulos de Episódio para Podcast | Pod Studio",
    metaDescription:
      "Gere títulos de episódios com alto clique usando nosso gerador gratuito. Fórmulas de curiosidade, tutoriais e convidados testadas. Grátis, sem cadastro.",
    overview: [
      "O Gerador de Títulos transforma um tema, e opcionalmente o nome de um convidado, em uma lista de ideias baseadas em padrões testados: promessas práticas, curiosidade, opiniões contrárias, listas e ganchos centrados no convidado.",
      "Criado para apresentadores que sabem exatamente o que o episódio aborda, mas precisam de manchetes atraentes testadas para alta conversão no Apple Podcasts e Spotify.",
    ],
    steps: [
      { title: "Descreva o episódio", text: "Digite o tema principal em poucas palavras, como “orçamento para freelancers” ou “os primeiros 100 inscritos”." },
      { title: "Adicione um convidado (opcional)", text: "Inclua o nome ou a especialidade do convidado quando ele for o principal motivo para ouvir." },
      { title: "Filtre por estilo", text: "Alterne entre fórmulas de curiosidade, tutorial, contrárias e outras para comparar ângulos." },
      { title: "Copie ou exporte", text: "Copie um título ou exporte a lista completa como arquivo de texto para compartilhar com a equipe." },
    ],
    tips: [
      "Coloque as palavras mais específicas e buscáveis na primeira metade do título — os apps costumam cortar após 60 caracteres.",
      "Prometa só o que o episódio entrega. Títulos precisos retêm mais ouvintes e evitam avaliações negativas.",
      "Deixe de fora o número do episódio e o nome do programa, a menos que seus ouvintes precisem deles.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Gerador de Show Notes de Podcast e Modelo | Pod Studio",
    metaDescription:
      "Crie notas de episódios organizadas com nosso modelo de show notes gratuito. Resumos, timestamps, biografias e links em Markdown. Grátis e sem cadastro.",
    overview: [
      "O Gerador de Show Notes organiza os dados do episódio em notas bem estruturadas: um resumo atraente, o convidado, capítulos com marcações de tempo, as principais lições e os recursos citados.",
      "O resultado sai em Markdown, HTML ou texto simples, pronto para colar no Buzzsprout, Libsyn, Podbean, Spotify for Creators, YouTube ou no seu site sem reformatar.",
    ],
    steps: [
      { title: "Preencha o básico", text: "Digite o título do episódio e um resumo de uma ou duas frases que explique por que ouvir." },
      { title: "Adicione convidados e capítulos", text: "Informe os convidados e cole as marcações no formato “00:00 Tema”, uma por linha." },
      { title: "Adicione lições e links", text: "Escreva os principais aprendizados e os livros, ferramentas ou sites mencionados." },
      { title: "Escolha o formato e copie", text: "Selecione Markdown, HTML ou texto conforme sua plataforma e copie as notas prontas." },
    ],
    tips: [
      "Escreva a primeira frase para pessoas e para buscadores — é o que a maioria dos apps mostra antes do “mais”.",
      "Inclua apenas marcações conferidas na edição final; capítulos errados frustram os ouvintes.",
      "Use a mesma estrutura toda semana para que os ouvintes fiéis saibam onde encontrar os links.",
    ],
    sections: [
      {
        heading: "Modelo de show notes de podcast",
        intro: "Notas de episódio limpas e otimizadas ajudam os ouvintes a acompanhar o conteúdo e fornecem texto rico para os mecanismos de busca indexarem:",
        template: `# Título do Episódio: Dominando o Crescimento de Audiência em 2026

## Resumo do Episódio
Neste episódio, conversamos com a estrategista de áudio Elena Rostova para dissecar as métricas reais de retenção de ouvintes. Elena explica por que a consistência semanal supera picos virais transitórios, como estruturar capítulos para máxima retenção e o que patrocinadores procuram no seu mídia kit.

## Marcações de Tempo e Capítulos
- [00:00] Abertura e visão geral do episódio
- [02:15] Trajetória de Elena na produção de áudio
- [07:45] A regra dos 30 segundos para retenção
- [14:20] Como precificar seu primeiro anúncio patrocinado
- [23:10] Erros comuns de SEO em show notes para evitar
- [31:00] Perguntas rápidas e considerações finais

## Principais Aprendizados
1. Prenda a atenção do ouvinte com uma promessa clara nos primeiros 30 segundos.
2. Estruture suas show notes com cabeçalhos de capítulos claros para melhorar o SEO.
3. Anúncios lidos pelo apresentador retêm mais de 85% da atenção dos ouvintes.

## Mencionado Neste Episódio
- Livro: *Sound Reporting: The NPR Guide to Audio Journalism*
- Ferramenta: Criador de Pauta e Roteiro de Pod Studio
- Conecte-se com Elena: @elenaaudio nas redes

## Apoie o Podcast
Se gostou deste episódio, deixe uma avaliação de 5 estrelas no Apple Podcasts e siga-nos no Spotify!`,
      },
    ],
  },
  "podcast-name-generator": {
    metaTitle: "Gerador de Nomes para Podcast: Ideias de Nomes | Pod Studio",
    metaDescription:
      "Descubra ideias criativas de nomes para podcast por nicho com nosso gerador gratuito. Nomes marcantes para seu novo programa de áudio. Grátis e rápido.",
    overview: [
      "O Gerador de Nomes para Podcast ajuda você a encontrar ideias memoráveis e marcantes para seu programa em qualquer nicho. Seja procurando um gerador aleatório de nomes para podcast para superar bloqueios criativos ou uma alternativa com inteligência artificial para títulos de marca, explore abordagens desde as descritivas até as mais autênticas.",
      "Use essas ideias para montar uma lista selecionada para seu novo podcast e verifique a disponibilidade no Apple Podcasts, Spotify e registradores de domínio antes do lançamento.",
    ],
    steps: [
      { title: "Escolha seu nicho", text: "Selecione o gênero do programa: tecnologia, finanças, esportes, comédia, true crime ou desenvolvimento pessoal." },
      { title: "Adicione uma palavra (opcional)", text: "Digite uma palavra ou tema que deve aparecer no nome — um assunto, um lugar ou uma ideia recorrente." },
      { title: "Escolha um estilo ou gere aleatório", text: "Troque o estilo de marca, experimente combinações aleatórias e salve os três a cinco nomes favoritos." },
      { title: "Confira antes de lançar", text: "Procure duplicados no Apple Podcasts e no Spotify e verifique você mesmo o domínio e as redes sociais." },
    ],
    tips: [
      "Fale cada nome em voz alta — se as pessoas não conseguem escrevê-lo depois de ouvir uma vez, o boca a boca sofre.",
      "Uma palavra clara sobre o tema ajuda novos ouvintes a encontrar você na busca de podcasts.",
      "Evite nomes presos a uma moda ou a um ano; o ideal é algo que ainda sirva no episódio 200.",
    ],
    sections: [
      {
        heading: "Ideias de nomes de podcast por nicho",
        intro: "Procurando ideias de nomes de podcast criativas? Explore estes conceitos de títulos selecionados pelas principais categorias de podcasts:",
        groups: [
          {
            category: "Negócios e Startups",
            items: [
              "O Fundador Resiliente",
              "Escala e Estratégia",
              "Do Zero ao Aporte",
              "Podcast Movimentos do Mercado",
            ],
          },
          {
            category: "True Crime e Mistério",
            items: [
              "Casos Ocultos",
              "Almanaque do Crime",
              "Além da Fita Amarela",
              "Sombra da Suspeita",
            ],
          },
          {
            category: "Comédia e Humor",
            items: [
              "Ninguém Pediu Minha Opinião",
              "Levemente Cínico",
              "Rindo do Imprevisto",
              "O Absurdo do Dia",
            ],
          },
          {
            category: "Esportes e Atletismo",
            items: [
              "O Protocolo de Lateral",
              "Áudio da Prorrogação",
              "O Manual de Resistência",
              "Na Zona de Ataque",
            ],
          },
          {
            category: "Saúde e Bem-Estar",
            items: [
              "Mente e Foco Diário",
              "O Hábito da Longevidade",
              "Saúde na Raiz",
              "Laboratório do Bem-Estar",
            ],
          },
          {
            category: "Tecnologia e Inteligência Artificial",
            items: [
              "Código e Consciência",
              "A Virada Neural",
              "Silício e Bytes",
              "À Prova de Futuro",
            ],
          },
          {
            category: "Fé e Espiritualidade",
            items: [
              "Graça no Silêncio",
              "O Caminho da Paz",
              "Enraizados na Verdade",
              "Fé no Cotidiano",
            ],
          },
        ],
      },
    ],
  },
  "episode-outline-builder": {
    metaTitle: "Modelo de Roteiro e Pauta de Podcast Grátis | Pod Studio",
    metaDescription:
      "Estruture seu episódio com nosso modelo de roteiro de podcast gratuito. Planeje blocos, pausas de anúncios, tempos e tópicos-chave. Grátis, sem cadastro.",
    overview: [
      "O Criador de Pautas e Roteiros gera uma linha de produção com tempos: um roteiro interativo que divide minutos entre gancho, trilha de abertura, blocos principais, anúncios e chamadas para ação.",
      "Ele ajuda apresentadores, convidados e produtores a manter o ritmo da conversa e cumprir a duração prevista sem precisar roteirizar palavra por palavra.",
    ],
    steps: [
      { title: "Dê um nome ao episódio", text: "Digite um título provisório para identificar a pauta depois." },
      { title: "Defina a duração", text: "Informe a duração total em minutos para ver como os tempos dos blocos se somam." },
      { title: "Edite os blocos", text: "Ajuste ou adicione cold open, abertura, atos principais, intervalo comercial e encerramento, com notas para cada um." },
      { title: "Exporte a pauta", text: "Exporte em Markdown e envie ao convidado ou produtor antes de gravar." },
    ],
    tips: [
      "Coloque o patrocínio do meio em uma pausa natural, entre um terço e a metade do episódio.",
      "Deixe alguns minutos de folga para desvios — os melhores momentos muitas vezes não foram planejados.",
      "Envie a pauta aos convidados com antecedência para que preparem histórias, não só respostas.",
    ],
    sections: [
      {
        heading: "Modelo de roteiro de podcast grátis",
        intro: "Use este modelo de roteiro de podcast modular e testado para estruturar seus episódios com clareza, seja em gravações solo, em dupla ou com convidados:",
        template: `[00:00 - 01:00] COLD OPEN / GANCHO INICIAL
- Gancho: Citação marcante, declaração provocadora ou pergunta em aberto.
- Promessa do Episódio: "No episódio de hoje, você vai aprender como..."

[01:00 - 02:30] ABERTURA E PATROCÍNIO PRE-ROLL
- Trilha sonora / Vinheta de abertura
- Boas-vindas e introdução: Apresentador, slogan e contexto rápido do tema.
- Anúncio Pre-Roll (15-30s): "O episódio de hoje é um oferecimento de..."

[02:30 - 12:00] BLOCO 1: O FUNDAMENTO / ORIGEM DO PROBLEMA
- Apresentação do desafio central.
- Anedota pessoal, apresentação do convidado ou estudo de caso.
- Lição prática #1.

[12:00 - 13:30] INTERVALO COMERCIAL (MID-ROLL)
- Transição natural: "Voltamos em um minuto para revelar o maior aprendizado..."
- Anúncio Mid-Roll (60s lido pelo apresentador com cupom exclusivo).

[13:30 - 25:00] BLOCO 2: O APROFUNDAMENTO TÁTICO
- Quebra passo a passo: metodologia, framework ou bastidores do projeto.
- Ideias contraintuitivas e erros mais frequentes a evitar.
- Lição prática #2.

[25:00 - 35:00] BLOCO 3: IMPLEMENTAÇÃO PRÁTICA E PERGUNTAS DA AUDIÊNCIA
- Passos de aplicação direta para o ouvinte.
- Rodada rápida de perguntas ou áudio de ouvintes.
- Lição prática #3.

[35:00 - 38:00] RECAPITULAÇÃO, CTA E ENCERRAMENTO
- Resumo em 60 segundos dos pontos principais.
- Chamada para Ação Única: "Deixe sua avaliação no Apple Podcasts ou siga no Spotify."
- Prévia do próximo episódio.
- Vinheta final em fade out.`,
        link: {
          text: "Baixar modelo de roteiro de podcast grátis (PDF e Google Docs) →",
          href: "/downloads/podcast-script-template.pdf",
        },
      },
    ],
  },
  "guest-question-generator": {
    metaTitle: "Perguntas para Entrevista de Podcast (Grátis) | Pod Studio",
    metaDescription:
      "Gere perguntas marcantes para entrevistas de podcast com qualquer convidado. Quebra-gelos, histórias reais, viradas e rodada rápida. Grátis, sem cadastro.",
    overview: [
      "O Gerador de Perguntas para Entrevistas de Podcast monta um arco equilibrado de conversa para seus convidados: de quebra-gelos envolventes a momentos de virada, metodologias práticas e rodada rápida final.",
      "Digite o nome do convidado, profissão e tema do episódio para gerar um roteiro de perguntas que foge do básico e revela histórias autênticas.",
    ],
    steps: [
      { title: "Informe o convidado", text: "Digite o nome, a profissão ou função e o tema central do episódio." },
      { title: "Navegue por etapa", text: "Filtre as perguntas por etapa — quebra-gelo, origem, fracassos e viradas, até o fechamento." },
      { title: "Revise o arco", text: "Fique com as perguntas que geram histórias, não respostas de uma palavra." },
      { title: "Copie ou exporte o roteiro", text: "Copie o roteiro de perguntas ou exporte em texto e acrescente perguntas sobre o trabalho recente do convidado." },
    ],
    tips: [
      "Peça um momento específico — “Conte sobre o dia em que…” — em vez de opiniões gerais.",
      "Tenha duas ou três perguntas indispensáveis e deixe o resto seguir a conversa.",
      "Guarde a pergunta mais pessoal para o meio da entrevista, quando o convidado estiver à vontade.",
    ],
    sections: [
      {
        heading: "Perguntas de entrevista para convidados de podcast",
        intro: "Ótimas conversas acontecem quando você deixa o currículo de lado e foca em histórias reais. Aqui estão 18 perguntas de alto impacto agrupadas por etapa:",
        groups: [
          {
            category: "Quebra-Gelo e Primeiras Impressões",
            items: [
              "Qual foi uma certeza que você tinha no início da carreira que hoje considera um erro?",
              "Qual foi o primeiro projeto ou experiência profissional que despertou sua paixão pela área?",
              "Se você não estivesse na sua profissão atual, qual caminho inesperado teria seguido?",
              "Qual é o conselho mais repetido no seu setor que as pessoas deveriam simplesmente ignorar?",
            ],
          },
          {
            category: "Histórias, Desafios e Viradas",
            items: [
              "Conte sobre o momento mais difícil da sua jornada — como foi o dia seguinte?",
              "Qual foi o ponto de virada crucial em que desistir parecia o mais fácil, mas você continuou?",
              "Quem foi a pessoa ou crítico cujas palavras mudaram para sempre sua forma de trabalhar?",
              "O que você precisou desaprender para conseguir atingir o próximo nível de maturidade?",
            ],
          },
          {
            category: "Metodologias Práticas e Lições",
            items: [
              "Explique passo a passo como você organiza suas horas de maior foco toda manhã.",
              "Qual é a ferramenta, hábito ou métrica única responsável por 80% dos seus resultados?",
              "Quando tudo parece caótico ou sob pressão, qual é o protocolo exato que você segue?",
              "Qual foi a decisão contraintuitiva que você tomou quando todos diziam o oposto?",
              "Qual é um problema do seu mercado que quase ninguém comenta hoje, mas será pauta daqui a dois anos?",
            ],
          },
          {
            category: "Reflexões Finais e Rodada Rápida",
            items: [
              "Qual é o livro ou recurso que você mais recomendou ou presenteou na vida?",
              "Qual foi o melhor investimento abaixo de R$ 500 que você fez nos últimos 12 meses?",
              "O que sucesso significa para você hoje em comparação com quando começou?",
              "Se você pudesse colocar uma mensagem em um outdoor visto por milhões de criadores, o que diria?",
              "Onde os ouvintes podem encontrar você, acompanhar seus projetos e apoiar seu trabalho?",
            ],
          },
          {
            category: "Negócios e Empreendedorismo",
            items: [
              "Qual foi o erro de contratação ou estratégico mais caro que você cometeu nos primeiros dois anos do seu negócio?",
              "Qual é uma realidade operacional desconfortável sobre escalar empresas que ninguém admite publicamente?",
              "Se você perdesse seus 3 maiores clientes ou 50% da sua receita amanhã, qual seria o seu plano de ação para o primeiro dia?",
              "Qual é a métrica financeira ou operacional que você acompanha obsessivamente toda segunda-feira de manhã?",
            ],
          },
          {
            category: "Perguntas Divertidas e Descontraídas",
            items: [
              "Qual é o conselho profissional mais bizarro que alguém já lhe deu com a maior seriedade do mundo?",
              "Qual é uma opinião fútil ou ridícula que você está pronto para defender até o fim?",
              "Se você pudesse substituir nossa música de abertura por qualquer hit pop constrangedor dos anos 90, qual tocaria?",
              "Qual foi o seu pior desastre ao vivo, em palestra ou em reunião no Zoom?",
            ],
          },
        ],
      },
    ],
  },
  "monetization-calculator": {
    metaTitle: "Calculadora de Renda e CPM para Podcast | Pod Studio",
    metaDescription:
      "Calcule os ganhos do seu podcast com nossa calculadora de receita de anúncios e CPM. Projete patrocínios por downloads e anúncios. Grátis e sem cadastro.",
    overview: [
      "A Calculadora de Renda e CPM estima o potencial de receita do seu podcast usando as taxas e fórmulas padrão do mercado: (downloads ÷ 1.000) × CPM × espaços vendidos.",
      "Simule projeções mensais e anuais em posições pre-roll, mid-roll e post-roll, taxas de preenchimento de anúncios e programas de assinaturas para negociar patrocínios com segurança.",
    ],
    steps: [
      { title: "Informe os downloads", text: "Use a média de downloads por episódio nos primeiros 30 dias, segundo sua hospedagem." },
      { title: "Defina a frequência", text: "Informe quantos episódios você publica por mês." },
      { title: "Configure os espaços", text: "Ative pre-roll, mid-roll e post-roll, defina um CPM para cada um e estime a ocupação." },
      { title: "Revise e exporte", text: "Compare a divisão da receita, some assinaturas se tiver e exporte a projeção." },
    ],
    tips: [
      "Mid-rolls lidos pelo apresentador costumam ter o CPM mais alto, porque a atenção está no auge.",
      "Seja conservador com a taxa de ocupação — a maioria dos programas independentes não vende todos os espaços.",
      "Use números verificados na negociação; patrocinadores podem pedir prints da sua hospedagem.",
    ],
    sections: [
      {
        heading: "Quanto ganha um podcast?",
        paragraphs: [
          "Os rendimentos de um podcast variam conforme o número verificado de downloads em 30 dias, a frequência de episódios e o inventário comercial. Programas com 1.000 a 5.000 downloads por episódio costumam faturar entre US$ 50 e US$ 300 por episódio combinando anúncios CPM e links de afiliados.",
          "Podcasts independentes consolidados que alcançam de 10.000 a 50.000 downloads por episódio atingem taxas CPM de US$ 25 a US$ 35 para anúncios lidos pelo apresentador, gerando milhares de dólares mensais com patrocinadores diretos, clubes de membros e produtos.",
        ],
        link: {
          text: "Leia o relatório de dados completo: Quanto Ganha um Podcast em 2026? →",
          href: "/guides/how-much-do-podcasts-make",
        },
      },
    ],
  },
  "cover-art-preview": {
    metaTitle: "Tamanho de Capa de Podcast: Apple e Spotify | Pod Studio",
    metaDescription:
      "Verifique o tamanho da capa do seu podcast para Apple e Spotify. Teste artes de 3000x3000px na tela de bloqueio, temas escuros e feeds. Grátis e seguro.",
    overview: [
      "O Verificador de Tamanho e Prévia de Capa de Podcast testa sua arte gráfica em feeds realistas do Apple Podcasts e Spotify, telas de bloqueio de smartphones e miniaturas de 50x50px.",
      "Sua imagem é verificada 100% no seu navegador em conformidade com as regras oficiais dos diretórios: proporção quadrada 1:1, espaço de cores RGB e dimensões entre 1400x1400px e 3000x3000px.",
    ],
    steps: [
      { title: "Envie sua arte", text: "Arraste um arquivo JPG ou PNG (ou teste a arte de exemplo). Tudo é processado só no navegador." },
      { title: "Confira as especificações", text: "Veja se a imagem é quadrada e está na faixa de pixels recomendada." },
      { title: "Troque de visualização", text: "Compare o feed do Apple Podcasts, a tela de reprodução do Spotify, a tela de bloqueio, a área segura e a miniatura de 50 × 50 px." },
      { title: "Ajuste e teste de novo", text: "Mude o tamanho do texto ou o contraste no seu editor e envie a nova versão para comparar." },
    ],
    tips: [
      "Se o título não for legível na miniatura, use menos palavras ou uma fonte maior.",
      "Não coloque textos importantes perto das bordas — alguns apps arredondam os cantos.",
      "Teste nos modos claro e escuro; texto fino e escuro some em fundos escuros.",
    ],
    sections: [
      {
        heading: "Requisitos de tamanho de capa de podcast",
        paragraphs: [
          "Tanto o Apple Podcasts quanto o Spotify exigem que a arte de capa do podcast seja uma imagem quadrada com proporção perfeita de 1:1, medindo entre 1400 × 1400 e 3000 × 3000 pixels. A recomendação padrão do setor é de 3000 × 3000 pixels a 72 DPI, garantindo máxima nitidez em telas Retina de smartphones e televisores.",
          "Os arquivos devem ser salvos no formato JPEG ou PNG no espaço de cores sRGB. Evite perfis de cor CMYK, que geram erros de validação nos diretórios ou causam cores desbotadas em aparelhos móveis. Mantenha todos os textos essenciais, o nome do programa e fotos dos apresentadores na área de segurança central de 80%, evitando que cantos arredondados ou botões do tocador cubram as informações.",
        ],
        link: {
          text: "Consulte o guia completo de especificações: Guia de Medidas e Requisitos de Capas para Apple Podcasts e Spotify →",
          href: "/guides/apple-spotify-cover-art-specs-guide",
        },
      },
    ],
  },
  "rss-feed-validator": {
    metaTitle: "Validador e Verificador de Feed RSS de Podcast | Pod Studio",
    metaDescription:
      "Verifique tags ausentes, enclosures quebrados, capa e GUID no feed RSS do seu podcast antes de enviar ao Apple Podcasts ou Spotify. Grátis e no navegador.",
    overview: [
      "O Validador de Feed RSS procura os problemas que mais bloqueiam ou atrasam a publicação: XML inválido, metadados do programa ausentes, problemas na capa, GUIDs duplicados ou ausentes e episódios sem enclosure de áudio válido.",
      "Cada resultado é explicado em linguagem simples, com o que corrigir, para você resolver tudo no painel da hospedagem antes que o Apple Podcasts ou o Spotify rejeitem o feed.",
    ],
    steps: [
      { title: "Cole seu feed", text: "Cole o XML do seu feed (ou carregue o exemplo) no validador." },
      { title: "Execute a verificação", text: "O validador analisa o feed no navegador e confere as tags obrigatórias e recomendadas." },
      { title: "Leia os resultados", text: "Resolva primeiro os erros, depois os avisos. Cada item explica por que importa." },
      { title: "Corrija e verifique de novo", text: "Ajuste as configurações na hospedagem, cole o feed atualizado e rode a verificação novamente." },
    ],
    tips: [
      "Nunca mude o GUID de um episódio publicado — os apps podem tratá-lo como episódio novo.",
      "Confira se a tag explicit está correta; ela afeta onde seu programa pode aparecer.",
      "Valide de novo após trocar de hospedagem ou de capa; são as causas mais comuns de novos erros.",
    ],
  },
  "episode-timestamp-generator": {
    metaTitle: "Gerador de Capítulos e Marcações de Tempo | Pod Studio",
    metaDescription:
      "Gere marcações de tempo e capítulos do YouTube para suas show notes e descrições. Crie marcadores clicáveis para Spotify e Apple. Grátis e sem cadastro.",
    overview: [
      "O Gerador de Capítulos e Marcações de Tempo converte suas anotações em marcações no formato padrão e capítulos do YouTube, ativando barras interativas no YouTube, Spotify e players de podcast.",
      "Permita que seus ouvintes naveguem rapidamente entre tópicos e ajude buscadores a indexar momentos específicos do episódio para impulsionar a descoberta.",
    ],
    steps: [
      { title: "Adicione os capítulos", text: "Informe cada capítulo com horário de início e título, ou cole uma lista rápida como “0:00 Intro, 5:30 Virada”." },
      { title: "Mantenha o formato", text: "Use um único formato de tempo e liste os capítulos na ordem em que acontecem." },
      { title: "Confira a linha do tempo", text: "Use a linha do tempo para achar lacunas, duplicados ou capítulos curtos demais." },
      { title: "Copie os capítulos", text: "Copie a lista formatada para as show notes, a descrição do YouTube ou sua hospedagem." },
    ],
    tips: [
      "O YouTube exige que a primeira marcação seja 00:00 para exibir os capítulos.",
      "Escreva capítulos como mini manchetes — específico vence vago (“Erros de preço no primeiro ano” em vez de “Parte 2”).",
      "Prefira capítulos de pelo menos alguns minutos; muitos capítulos curtos dificultam a leitura.",
    ],
    sections: [
      {
        heading: "Como formatar marcações de tempo e capítulos do YouTube",
        paragraphs: [
          "Capítulos clicáveis tornam episódios longos mais acessíveis e ajudam o público a encontrar diretamente os pontos de maior interesse. No YouTube, timestamps no formato “00:00 Introdução” inseridos na descrição ativam automaticamente a barra de capítulos segmentada no player.",
          "Para que suas marcações funcionem no YouTube e no Spotify, inclua sempre uma primeira marcação iniciando em 00:00 (ou 0:00), adicione no mínimo três capítulos em ordem cronológica e certifique-se de que cada bloco tenha pelo menos dez segundos de duração.",
        ],
      },
    ],
  },
  "intro-script-generator": {
    metaTitle: "Roteiro de Introdução e Exemplos de Podcast | Pod Studio",
    metaDescription:
      "Escreva aberturas curtas com gancho usando nosso gerador de introdução de podcast. Veja exemplos práticos para programas solo e com convidados. Grátis.",
    overview: [
      "O Gerador de Roteiro de Introdução cria aberturas dinâmicas de 30 a 60 segundos com ganchos de alta retenção, reduzindo drasticamente o abandono nos minutos iniciais.",
      "Selecione o formato do programa, detalhes do convidado e tom de fala para gerar roteiros prontos para teleprompter com perguntas provocadoras e promessas claras.",
    ],
    steps: [
      { title: "Escolha formato e tom", text: "Selecione entrevista, solo ou narrativa, e uma entrega enérgica, reflexiva ou conversacional." },
      { title: "Adicione os detalhes", text: "Informe o tema ou a promessa do episódio e, se for o caso, o nome e o cargo do convidado." },
      { title: "Gere o roteiro", text: "Receba um roteiro curto que vai do gancho à apresentação e ao “é isso que você vai aprender”." },
      { title: "Leia em voz alta", text: "Ensaie uma ou duas vezes e corte qualquer frase que não soe como você." },
    ],
    tips: [
      "Vá direto ao ponto nos primeiros 15 segundos — é ali que muitos ouvintes decidem ficar.",
      "Uma boa frase do convidado é um ótimo cold open antes da vinheta.",
      "Mantenha aberturas recorrentes curtas; avisos e patrocínios longos ficam para depois.",
    ],
    sections: [
      {
        heading: "Exemplos de roteiro de introdução de podcast",
        intro: "Os primeiros trinta segundos definem se o ouvinte continuará ouvindo ou passará para o próximo programa. Aqui estão cinco exemplos de introdução comprovados para adaptar ao seu show:",
        list: [
          {
            title: "1. O Gancho Solo de Alto Impacto",
            description: "“A maioria dos empreendedores passa cinco anos trabalhando duro antes de perceber que construiu o produto errado. Hoje, vou compartilhar os três testes de validação que teriam me economizado R$ 100.000. Bem-vindos ao Manual do Fundador.”",
          },
          {
            title: "2. A Conversa Entre Coapresentadores",
            description: "“Bem-vindos de volta ao Café com Código. Eu sou o Lucas e comigo está o Rafael. Rafael, antes de debatermos os lançamentos da Apple, conte para todo mundo por que você quase perdeu o voo ontem...”",
          },
          {
            title: "3. O Teaser com Convidado Especial",
            description: "““Se você não demitir seu maior cliente até o sexto mês, sua agência não sobrevive.” Foi exatamente isso que o convidado de hoje, David Miller, me disse dez minutos antes de gravarmos. Veja como ele escalou para 7 dígitos sem burnout.”",
          },
          {
            title: "4. A Narrativa e Storytelling Imersivo",
            description: "“Em uma manhã fria de terça-feira em fevereiro de 2014, trinta e dois servidores de um datacenter na Virgínia desligaram repentinamente. O que se seguiu foi o maior mistério não resolvido de criptomoedas da história. Este é o Arquivo Oculto.”",
          },
          {
            title: "5. A Promessa Direta de Negócios",
            description: "“Quer ranquear na primeira página do Google sem gastar fortunas com anúncios? Nos próximos vinte minutos, vamos revelar a arquitetura de conteúdo exata que utilizamos para gerar 400.000 visitas mensais.”",
          },
        ],
      },
      {
        heading: "Modelo de roteiro de introdução de podcast",
        intro: "Use este modelo modular de roteiro de introdução para episódios solo, em dupla ou com convidados:",
        template: `[00:00 - 00:15] COLD OPEN HOOK
APRESENTADOR: "E se o conselho que todo mundo repete no seu setor estivesse, na verdade, custando milhares de reais a você?"

[00:15 - 00:30] INTRO DO SHOW E PROMESSA DO EPISÓDIO
APRESENTADOR: "Bem-vindos de volta ao [Nome do Podcast]. Eu sou [Nome do Apresentador]. No episódio de hoje, vamos dissecar [Tema do Episódio] para que você possa [benefício concreto para o ouvinte]."

[00:30 - 00:45] APRESENTAÇÃO DO CONVIDADO OU PAUTA
APRESENTADOR: "[Entrevista]: O convidado de hoje é [Nome do Convidado], [Cargo/Empresa]. Conversamos sobre os momentos decisivos e a metodologia exata que ele usou para alcançar [Grande Meta]."
APRESENTADOR: "[Episódio Solo]: Nos próximos 20 minutos, compartilho a estrutura em 3 passos que desenvolvemos para solucionar esse problema do zero."

[00:45 - 01:00] CHAMADA PARA AÇÃO E VINHETA
APRESENTADOR: "Inscreva-se no Apple Podcasts ou Spotify para não perder nenhum episódio novo. Vamos direto ao assunto!"

[VINHETA MUSICAL SOBE E ABRE O EPISÓDIO]`,
      },
    ],
  },
  "audience-growth-estimator": {
    metaTitle: "Simulador de Crescimento de Ouvintes de Podcast | Pod Studio",
    metaDescription:
      "Projete o crescimento de downloads do podcast em 12 meses com base nos números atuais, frequência e taxa mensal. Grátis e sem necessidade de cadastro.",
    overview: [
      "O Simulador de Crescimento projeta downloads futuros aplicando uma taxa de crescimento mensal aos seus downloads atuais por episódio e multiplicando pela frequência de publicação.",
      "É uma ilustração simples de crescimento composto, não uma previsão: não considera sazonalidade, picos virais nem perda de ouvintes. Use para definir metas realistas e ver como pequenas melhorias se somam em um ano.",
    ],
    steps: [
      { title: "Informe os downloads atuais", text: "Adicione sua média atual de downloads em 30 dias por episódio." },
      { title: "Defina a frequência", text: "Informe quantos episódios você publica por mês." },
      { title: "Escolha uma taxa", text: "Selecione um percentual mensal que reflita sua tendência recente ou sua meta." },
      { title: "Leia o gráfico", text: "Veja a trajetória de 12 meses e compare-se com os percentis globais de downloads." },
    ],
    tips: [
      "Comece com uma taxa moderada — o crescimento composto faz números otimistas dispararem rápido.",
      "Combine esta projeção com a calculadora de CPM para ver quando o patrocínio se torna realista.",
      "Compare todo mês a projeção com seus números reais e ajuste os dados.",
    ],
  },
  "description-generator": {
    metaTitle: "Gerador de Descrição de Podcast e Episódio | Pod Studio",
    metaDescription:
      "Escreva descrições claras para o podcast e episódios no Apple Podcasts e Spotify. Veja a prévia do corte móvel e otimize palavras-chave. Grátis e online.",
    overview: [
      "O Gerador de Descrições cria dois tipos de texto: a descrição geral do programa, que apresenta proposta de valor e público, e as descrições de episódio individuais.",
      "Boas descrições incentivam o ouvinte a clicar em seguir e ajudam os algoritmos a classificar o conteúdo. A ferramenta posiciona as informações essenciais logo no início.",
    ],
    steps: [
      { title: "Escolha o modo", text: "Indique se vai escrever a descrição do programa ou de um episódio." },
      { title: "Adicione o essencial", text: "Informe o público-alvo, os temas e lições principais e seus links ou chamada para ação." },
      { title: "Confira o corte", text: "Veja onde os apps móveis cortam o texto em “…mais” e coloque o gancho e a palavra-chave primeiro." },
      { title: "Edite e cole", text: "Ajuste o texto à sua voz e cole na sua plataforma de hospedagem." },
    ],
    tips: [
      "A primeira frase é a mais importante — muitos apps mostram só uma ou duas linhas antes do “mais”.",
      "Nomeie seu público diretamente (“para quem está abrindo o primeiro negócio”) para que ele se reconheça.",
      "Use palavras-chave naturais, nunca listas; a Apple pode rejeitar descrições com spam.",
    ],
  },
  "category-finder": {
    metaTitle: "Categorias do Apple Podcasts e Buscador | Pod Studio",
    metaDescription:
      "Explore a lista completa de categorias do Apple Podcasts e gêneros do Spotify. Encontre subcategorias ideais para destacar seu podcast. Grátis e prático.",
    overview: [
      "O Buscador de Categorias do Apple Podcasts e Spotify ajuda você a navegar na taxonomia oficial para encontrar categorias e subcategorias onde seu programa tem maior relevância e facilidade de ranqueamento.",
      "Pesquise por tema, veja a classificação completa e copie as tags iTunes correspondentes prontas para o seu feed RSS.",
    ],
    steps: [
      { title: "Busque por tema", text: "Digite seu tema principal, como “finanças pessoais” ou “true crime”." },
      { title: "Compare as opções", text: "Veja as categorias e subcategorias sugeridas." },
      { title: "Escolha a principal", text: "Fique com a categoria que melhor descreve a maioria dos episódios." },
      { title: "Copie a tag XML", text: "Clique numa subcategoria para copiar a tag do iTunes ou selecione-a no painel da hospedagem." },
    ],
    tips: [
      "Escolha a categoria que seus ouvintes explorariam, não a que tem menos concorrência.",
      "Uma subcategoria precisa costuma dar mais visibilidade a um programa novo.",
      "Confira a lista oficial atual da Apple antes de publicar; os nomes mudam de vez em quando.",
    ],
    sections: [
      {
        heading: "Lista de categorias do Apple Podcasts",
        intro: "Abaixo está a taxonomia oficial completa de categorias primárias e secundárias reconhecidas pelo Apple Podcasts e Spotify:",
        groups: [
          {
            category: "Artes",
            items: ["Livros", "Design", "Moda e Beleza", "Gastronomia", "Artes Cênicas", "Artes Visuais"],
          },
          {
            category: "Negócios",
            items: ["Carreiras", "Empreendedorismo", "Investimentos", "Gestão", "Marketing", "Sem Fins Lucrativos"],
          },
          {
            category: "Comédia",
            items: ["Entrevistas de Comédia", "Improviso", "Stand-Up"],
          },
          {
            category: "Educação",
            items: ["Cursos", "Tutoriais e Guias", "Aprendizado de Idiomas", "Autoaperfeiçoamento"],
          },
          {
            category: "Ficção",
            items: ["Comédia de Ficção", "Drama", "Ficção Científica"],
          },
          {
            category: "Governo",
            items: ["Governo", "Municipal", "Nacional", "Administração Pública"],
          },
          {
            category: "História",
            items: ["Antiga", "Medieval", "Militar", "Moderna", "História Regional"],
          },
          {
            category: "Saúde e Boa Forma",
            items: ["Saúde Alternativa", "Condicionamento Físico", "Medicina", "Saúde Mental", "Nutrição", "Sexualidade"],
          },
          {
            category: "Crianças e Família",
            items: ["Educação Infantil", "Criação de Filhos", "Pets e Animais", "Histórias Infantis"],
          },
          {
            category: "Lazer e Estilo de Vida",
            items: ["Animação e Mangá", "Automobilismo", "Aviação", "Artesanato", "Jogos", "Hobbies", "Casa e Jardim", "Videogames"],
          },
          {
            category: "Música",
            items: ["Comentários Musicais", "História da Música", "Entrevistas Musicais"],
          },
          {
            category: "Notícias",
            items: ["Notícias de Negócios", "Notícias Diárias", "Entretenimento", "Comentários", "Política", "Esportes", "Tecnologia"],
          },
          {
            category: "Religião e Espiritualidade",
            items: ["Budismo", "Cristianismo", "Hinduísmo", "Islamismo", "Judaísmo", "Religião", "Espiritualidade"],
          },
          {
            category: "Ciência",
            items: ["Astronomia", "Química", "Ciências da Terra", "Ciências Biológicas", "Matemática", "Ciências Naturais", "Física", "Ciências Sociais"],
          },
          {
            category: "Sociedade e Cultura",
            items: ["Documentários", "Diários Pessoais", "Filosofia", "Lugares e Viagens", "Relacionamentos"],
          },
          {
            category: "Esportes",
            items: ["Beisebol", "Basquete", "Futebol", "Golfe", "Artes Marciais", "Corrida", "Natação", "Tênis", "Vôlei", "Esportes Radicais"],
          },
          {
            category: "Tecnologia",
            items: ["Inteligência Artificial", "Programação", "Tecnologia de Consumo", "Segurança Digital", "Software", "Notícias Tech"],
          },
          {
            category: "True Crime",
            items: ["Investigações", "Crimes em Série", "Mistérios Não Resolvidos"],
          },
          {
            category: "TV e Cinema",
            items: ["Pós-Shows", "Crítica de Cinema", "História do Cinema", "Entrevistas", "Séries de TV"],
          },
        ],
      },
    ],
  },
  "hook-generator": {
    metaTitle: "Gerador de Ganchos para Cortes de Podcast | Pod Studio",
    metaDescription:
      "Crie ganchos irresistíveis para TikTok, Reels e Shorts com o gerador de hooks de podcast. Aumente o engajamento dos seus cortes. Grátis.",
    overview: [
      "O Gerador de Ganchos para Cortes de Podcast cria aberturas impactantes e ganchos de alta curiosidade para TikTok, Instagram Reels e YouTube Shorts a partir das ideias dos seus episódios.",
      "Projetado para podcasters que desejam transformar trechos de áudio em vídeos virais nas redes sociais, prendendo a atenção dos espectadores nos primeiros dois segundos e conquistando novos assinantes.",
    ],
    steps: [
      { title: "Insira o tema do corte", text: "Descreva o assunto principal ou o grande aprendizado que o vídeo curto apresenta." },
      { title: "Mencione o convidado (opcional)", text: "Inclua o convidado ou uma frase de impacto quando sua autoridade chamar a atenção." },
      { title: "Filtre por estilo de gancho", text: "Escolha entre ângulos contrários, alta tensão, métricas surpreendentes, looping de curiosidade e quebra de padrão." },
      { title: "Copie e publique", text: "Cole o gancho como legenda ou texto na tela do vídeo, com link para o episódio completo." },
    ],
    tips: [
      "Os primeiros três segundos definem se o espectador vai deslizar a tela: comece com alta tensão ou uma pergunta aberta.",
      "Combine texto destacado na tela com legendas animadas: mais de 70% dos vídeos nas redes sociais são assistidos sem som.",
      "Certifique-se de que o corte realmente entregue o que o gancho promete; promessas falsas arruínam a confiança do público.",
    ],
    sections: [
      {
        heading: "Exemplos de ganchos para cortes de podcast",
        intro: "Em plataformas como TikTok, Instagram Reels e YouTube Shorts, o sucesso de um vídeo é definido nos dois primeiros segundos. Aqui estão cinco fórmulas comprovadas com exemplos práticos:",
        list: [
          {
            title: "1. O Quebrador de Mitos Contraintuitivo",
            description: "«Parem de dizer aos novos criadores para postar todos os dias. É exatamente esse conselho que esgota 95% dos podcasts antes do episódio 10». (Contesta a sabedoria popular para gerar comentários imediatos).",
          },
          {
            title: "2. A Abertura de História de Alta Tensão",
            description: "«Num domingo às 2 da manhã, nosso banco de dados principal caiu com 400 mil reais em pagamentos de clientes pendentes. Isto foi exatamente o que fizemos nos 60 minutos seguintes». (Cria suspense e narrativa envolvente na hora).",
          },
          {
            title: "3. O Gancho com Dados Reveladores",
            description: "«Analisamos 1.200 episódios de podcasts lançados este ano. Uma única tática de retenção dobrou a taxa de conclusão em todos os gêneros». (Promete evidências sólidas em vez de achismos).",
          },
          {
            title: "4. O Loop Aberto de Curiosidade",
            description: "«Existe um motivo secreto pelo qual os maiores podcasts do Spotify nunca falam cupons de desconto nos primeiros cinco minutos. Até o final deste corte, você vai entender por quê». (Segura a resolução até o fim).",
          },
          {
            title: "5. A Quebra de Padrão",
            description: "«Feche o painel de estatísticas agora mesmo. Se o seu programa não está crescendo, checar downloads cinco vezes ao dia só piora as coisas». (Ordem direta e enérgica que interrompe a rolagem da tela).",
          },
        ],
      },
    ],
  },
  "transcript-formatter": {
    metaTitle: "Formatador de Transcrição para Podcast | Pod Studio",
    metaDescription:
      "Formate transcrições de áudio no padrão ideal de podcast. Adicione nomes de locutores, organize parágrafos e remova vícios de fala. Grátis e no navegador.",
    overview: [
      "O Formatador de Transcrições de Podcast transforma textos brutos de reconhecimento de voz no formato de transcrição padrão com identificação clara de locutores, parágrafos limpos e remoção de vícios de fala.",
      "Processado 100% no seu navegador com total privacidade, gerando transcrições acessíveis prontas para páginas de episódios, show notes e artigos de blog.",
    ],
    steps: [
      { title: "Cole a transcrição", text: "Copie o texto exportado do serviço de transcrição e cole no editor." },
      { title: "Nomeie os falantes", text: "Troque “SPEAKER_00” e similares por nomes reais e escolha se quer remover as marcações de tempo." },
      { title: "Revise o resultado", text: "Confira a transcrição formatada e faça correções manuais se precisar." },
      { title: "Copie ou baixe", text: "Copie o texto limpo ou baixe para publicar no site ou na hospedagem." },
    ],
    tips: [
      "Publicar transcrições torna os episódios acessíveis e dá aos buscadores texto real para indexar.",
      "Remova vícios para facilitar a leitura, mas mantenha o que muda o sentido de uma citação.",
      "Revise nomes e termos técnicos — as ferramentas de transcrição erram muito neles.",
    ],
    sections: [
      {
        heading: "Padrão de formatação de transcrição de podcast (exemplo)",
        intro: "Diretórios de podcasts e buscadores exigem transcrições com marcações consistentes de interlocutor e timestamps precisos:",
        template: `[00:00:02] Sarah Jenkins (Apresentadora):
Bem-vindos de volta ao Fronteiras Criativas. Hoje vamos mergulhar em como criadores de áudio independentes constroem fontes sustentáveis de receita. Meu convidado hoje é Marcus Vance, fundador da AudioFirst Media. Marcus, seja bem-vindo ao programa.

[00:00:24] Marcus Vance (Convidado):
Obrigado pelo convite, Sarah. É ótimo estar aqui. Sinceramente, o maior erro que vejo novos apresentadores cometerem é focar no CPM de anúncios antes mesmo de construírem um ciclo consistente de retenção de ouvintes.

[00:00:41] Sarah Jenkins (Apresentadora):
Vamos aprofundar nisso. Quando você diz "ciclo de retenção", como isso funciona na prática para quem está publicando seus primeiros vinte episódios?

[00:00:52] Marcus Vance (Convidado):
Tudo se resume a três pilares: uma abertura consistente que promete valor direto nos primeiros trinta segundos, ritmo equilibrado de blocos para que o ouvinte nunca se sinta perdido e uma chamada para ação única e objetiva no final.`,
      },
    ],
  },
  "trailer-script-builder": {
    metaTitle: "Criador de Roteiro para Trailer de Podcast | Pod Studio",
    metaDescription:
      "Escreva um trailer que explique seu programa, para quem ele é e por que seguir. Estrutura testada para trailers de 60–90 segundos. Grátis e sem cadastro.",
    overview: [
      "O Criador de Roteiro de Trailer oferece uma estrutura comprovada para apresentar seu programa: gancho provocador, proposta de valor, público-alvo, diferenciais e uma chamada direta para seguir.",
      "Muitos diretórios destacam o trailer no topo da página do programa, sendo o primeiro contato do público. Esta ferramenta ajuda a aproveitar cada segundo desse áudio introdutório.",
    ],
    steps: [
      { title: "Dados do programa", text: "Adicione o título do programa, o nome do apresentador e a frequência de lançamento." },
      { title: "Formule a grande pergunta", text: "Escreva a pergunta central que o programa explora e a promessa feita aos ouvintes." },
      { title: "Gere o roteiro", text: "Receba um roteiro estruturado com gancho, corpo e chamada para ação." },
      { title: "Grave e corte", text: "Leia em voz alta, cronometre e corte as frases que repetem ideias." },
    ],
    tips: [
      "Inclua um trecho real de um episódio, se tiver — mostre em vez de contar.",
      "Termine com uma única ação clara: seguir o programa no app do ouvinte.",
      "Atualize o trailer quando o foco ou o formato do programa mudar.",
    ],
  },
  "review-response-generator": {
    metaTitle: "Respostas a Avaliações e Menções no Podcast | Pod Studio",
    metaDescription:
      "Responda a avaliações de ouvintes e crie menções no ar para elogios e críticas construtivas. Modelos profissionais e rápidos. Ferramenta grátis.",
    overview: [
      "O Gerador de Respostas a Avaliações ajuda você a responder avaliações nos diretórios e escrever agradecimentos no ar que valorizam os ouvintes e incentivam novos reviews positivos.",
      "Abrange avaliações entusiasmadas de 5 estrelas, sugestões construtivas e críticas duras, mantendo tom profissional, sem atitudes defensivas e com foco em melhorias reais.",
    ],
    steps: [
      { title: "Adicione a avaliação", text: "Informe o nome ou usuário do ouvinte e o que ele disse." },
      { title: "Defina o tom", text: "Marque a avaliação como elogio de 5 estrelas, construtiva ou crítica." },
      { title: "Escolha o formato", text: "Receba um texto para ler no ar, uma resposta para redes sociais e uma mensagem privada de agradecimento." },
      { title: "Personalize", text: "Cite um detalhe da avaliação para o ouvinte saber que você leu." },
    ],
    tips: [
      "Leia algumas avaliações no ar todo mês — é um dos jeitos mais simples de ganhar mais notas.",
      "Nunca cite nem ridicularize quem criticou; responda ao argumento, não à pessoa.",
      "Agradeça o feedback específico e conte o que mudou por causa dele.",
    ],
  },
  "collab-finder": {
    metaTitle: "Convites para Convidados e Parcerias Podcast | Pod Studio",
    metaDescription:
      "Escreva propostas de participação e emails de colaboração entre podcasts que geram respostas. Defina proposta de valor e próximos passos. Modelos grátis.",
    overview: [
      "O Construtor de Convites e Parcerias redige emails objetivos para você se candidatar como convidado, convidar especialistas para seu podcast ou propor divulgações cruzadas.",
      "Cada modelo destaca o perfil dos seus ouvintes, formato sugerido, benefício mútuo claro e um próximo passo simples — os pontos essenciais que criadores ocupados avaliam antes de aceitar.",
    ],
    steps: [
      { title: "Escolha o objetivo", text: "Ofereça-se como convidado, convide alguém para o seu programa ou proponha uma troca de divulgação." },
      { title: "Informe os dois programas", text: "Indique o programa e o apresentador de destino, o nome do seu podcast e o ângulo ou valor que você oferece." },
      { title: "Gere o e-mail", text: "Receba um rascunho curto com assunto, proposta de valor e chamada para ação clara." },
      { title: "Personalize e envie", text: "Cite um episódio deles de que você gostou e envie do seu próprio e-mail." },
    ],
    tips: [
      "Mantenha o primeiro e-mail curto — cinco ou seis frases bastam.",
      "Compartilhe apenas números de audiência verificáveis; números inflados destroem a confiança.",
      "Faça um único follow-up depois de uma semana e, sem resposta, siga em frente com educação.",
    ],
  },
};
