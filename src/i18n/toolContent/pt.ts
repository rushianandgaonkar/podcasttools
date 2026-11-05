import type { ToolContentRecord } from "./types";

export const ptToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Gerador de Títulos para Podcast Grátis | Pod Studio",
    metaDescription:
      "Transforme o tema do episódio em dezenas de títulos claros e chamativos. Filtre por estilo — curiosidade, tutorial, contrário — e copie o favorito. Grátis.",
    overview: [
      "O Gerador de Títulos transforma um tema, e opcionalmente o nome de um convidado, em uma longa lista de ideias baseadas em padrões testados: promessas práticas, curiosidade, opiniões contrárias, listas numeradas e ganchos centrados no convidado.",
      "Ele foi feito para quem sabe sobre o que é o episódio, mas não sabe como dizer. Explore ângulos rapidamente e escolha o título que descreve o episódio com honestidade e fica legível na tela do celular.",
    ],
    steps: [
      { title: "Descreva o episódio", text: "Digite o tema principal em poucas palavras, como “orçamento para freelancers” ou “os primeiros 100 inscritos”." },
      { title: "Adicione um convidado (opcional)", text: "Inclua o nome ou a especialidade do convidado quando ele for o principal motivo para ouvir." },
      { title: "Filtre por estilo", text: "Alterne entre fórmulas de curiosidade, tutorial, contrárias e outras para comparar ângulos." },
      { title: "Copie ou exporte", text: "Copie um título ou exporte a lista completa como arquivo de texto para compartilhar com a equipe." },
    ],
    tips: [
      "Coloque as palavras mais específicas e buscáveis na primeira metade do título — os apps costumam cortar o final.",
      "Prometa só o que o episódio entrega. Títulos precisos retêm mais ouvintes e evitam avaliações negativas.",
      "Deixe de fora o número do episódio e o nome do programa, a menos que seus ouvintes precisem deles.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Gerador de Show Notes para Podcast Grátis | Pod Studio",
    metaDescription:
      "Crie show notes organizadas com resumo, convidado, marcações de tempo, principais lições e links. Exporte em Markdown, HTML ou texto. Grátis, sem cadastro.",
    overview: [
      "O Gerador de Show Notes organiza os dados do episódio em notas bem estruturadas: um resumo curto, o convidado, capítulos com marcações de tempo, as principais lições e os recursos citados.",
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
  },
  "podcast-name-generator": {
    metaTitle: "Gerador de Nomes para Podcast Grátis | Pod Studio",
    metaDescription:
      "Crie ideias de nomes memoráveis para podcast por nicho, tema e estilo de marca. Monte sua lista curta e depois confira domínios e marcas. Grátis.",
    overview: [
      "O Gerador de Nomes sugere nomes de programa com base no seu nicho, em uma palavra ou tema personalizado opcional e no estilo de marca desejado — dos mais diretos e fáceis de achar aos mais criativos.",
      "É uma ferramenta de brainstorming: ela não verifica a disponibilidade de domínios nem de marcas. Use-a para montar uma lista curta e depois confirme o nome em um registrador de domínios, nos diretórios de podcast e em uma busca de marcas antes de anunciar.",
    ],
    steps: [
      { title: "Escolha seu nicho", text: "Selecione o gênero do programa: tecnologia, finanças, true crime, desenvolvimento pessoal e outros." },
      { title: "Adicione uma palavra (opcional)", text: "Digite uma palavra ou tema que deve aparecer no nome — um assunto, um lugar ou uma ideia recorrente." },
      { title: "Escolha um estilo e favorite", text: "Troque o estilo de marca e salve os três a cinco nomes que você se imagina dizendo em cada episódio." },
      { title: "Confira antes de lançar", text: "Procure duplicados no Apple Podcasts e no Spotify e verifique você mesmo o domínio e as redes sociais." },
    ],
    tips: [
      "Fale cada nome em voz alta — se as pessoas não conseguem escrevê-lo depois de ouvir uma vez, o boca a boca sofre.",
      "Uma palavra clara sobre o tema ajuda novos ouvintes a encontrar você na busca de podcasts.",
      "Evite nomes presos a uma moda ou a um ano; o ideal é algo que ainda sirva no episódio 200.",
    ],
  },
  "episode-outline-builder": {
    metaTitle: "Criador de Pauta e Roteiro de Episódio de Podcast | Pod Studio",
    metaDescription:
      "Monte uma pauta com tempos para o podcast: cold open, abertura, blocos, patrocínios e encerramento. Mantenha a gravação no horário. Modelo grátis.",
    overview: [
      "O Criador de Pautas gera um roteiro de produção com tempos: um mapa que lista cada bloco, quando ele começa aproximadamente e quanto deve durar.",
      "Ele ajuda apresentadores, convidados e produtores a alinhar trilhas, patrocínios, blocos de entrevista e chamadas para ação, sem precisar roteirizar cada palavra da conversa.",
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
  },
  "guest-question-generator": {
    metaTitle: "Gerador de Perguntas para Entrevista de Podcast | Pod Studio",
    metaDescription:
      "Gere perguntas de entrevista para qualquer convidado: quebra-gelo, origem, fracassos e viradas, aprendizados e rodada rápida. Grátis e sem cadastro.",
    overview: [
      "O gerador de Perguntas para Convidados monta um arco completo para a entrevista: do quebra-gelo e da história de origem às viradas, lições aprendidas, previsões e uma rodada rápida final.",
      "Informe o nome do convidado, a profissão e o tema do episódio para receber uma lista inicial sob medida, que você complementa com sua própria pesquisa.",
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
  },
  "monetization-calculator": {
    metaTitle: "Calculadora de CPM e Receita de Podcast | Pod Studio",
    metaDescription:
      "Estime a receita de anúncios do podcast por downloads, CPM, espaços e taxa de ocupação. Compare pre-roll, mid-roll e post-roll. Calculadora grátis.",
    overview: [
      "A Calculadora de CPM estima quanto seu programa pode ganhar com anúncios usando a fórmula padrão: (downloads ÷ 1.000) × CPM × espaços vendidos.",
      "Ajuste downloads por episódio, frequência, espaços de pre-roll, mid-roll e post-roll, taxa de ocupação e assinaturas de ouvintes para ver projeções mensais, por episódio e anuais.",
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
  },
  "cover-art-preview": {
    metaTitle: "Visualizador de Capa de Podcast: Apple e Spotify | Pod Studio",
    metaDescription:
      "Veja sua capa como aparece no Apple Podcasts, Spotify, tela de bloqueio e miniaturas pequenas. Confira tamanho e legibilidade. Grátis e privado.",
    overview: [
      "O Visualizador de Capas mostra sua arte em layouts no estilo do Apple Podcasts e do Spotify, na tela de bloqueio do celular e como uma minúscula miniatura de busca.",
      "Sua imagem nunca sai do seu dispositivo. Ela é comparada à exigência comum dos diretórios — quadrada, entre 1400 × 1400 e 3000 × 3000 pixels — para você achar problemas antes de enviar.",
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
  },
  "rss-feed-validator": {
    metaTitle: "Validador de Feed RSS de Podcast Grátis | Pod Studio",
    metaDescription:
      "Verifique tags ausentes, enclosures quebrados, capa e GUID no seu feed RSS antes de enviar ao Apple Podcasts ou Spotify. Grátis e privado, no navegador.",
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
      "Transforme anotações em capítulos organizados para YouTube, Spotify e show notes. Formato de tempo consistente com um clique. Grátis e sem cadastro.",
    overview: [
      "O Gerador de Capítulos transforma suas anotações de gravação em marcações organizadas como “00:00 Introdução” e “05:12 Trajetória do convidado”, com uma linha do tempo visual do episódio.",
      "Use o resultado nas descrições do YouTube e do Spotify e nas show notes para que os ouvintes pulem direto ao trecho que interessa e os buscadores entendam melhor o episódio.",
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
  },
  "intro-script-generator": {
    metaTitle: "Gerador de Roteiro de Abertura para Podcast | Pod Studio",
    metaDescription:
      "Escreva uma abertura curta com gancho que faça o ouvinte ficar. Formatos de entrevista, solo e narrativa. Gerador de roteiro de introdução grátis.",
    overview: [
      "O gerador de Roteiro de Introdução ajuda a escrever os primeiros 30–60 segundos do episódio: um gancho que desperta curiosidade, seguido de uma breve apresentação que define expectativas.",
      "Escolha formato e tom, preencha alguns detalhes e receba um roteiro pronto para ler em modo teleprompter, que você adapta à sua voz.",
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
  },
  "audience-growth-estimator": {
    metaTitle: "Simulador de Crescimento de Downloads de Podcast | Pod Studio",
    metaDescription:
      "Projete os downloads do seu podcast para 12 meses com base nos números atuais, na frequência de publicação e numa taxa de crescimento mensal. Grátis.",
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
    metaTitle: "Gerador de Descrições de Podcast e Episódios | Pod Studio",
    metaDescription:
      "Escreva descrições claras do programa e de cada episódio para Apple Podcasts e Spotify, com aviso do corte “mais” no celular. Grátis e sem cadastro.",
    overview: [
      "O Gerador de Descrições cria dois tipos de texto: a descrição do programa, que explica a proposta e o público, e as descrições de episódio, que resumem uma gravação.",
      "Boas descrições ajudam o ouvinte a decidir seguir e ajudam os apps a entender o programa, por isso a ferramenta coloca a informação principal no início, onde os apps a exibem.",
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
    metaTitle: "Buscador de Categorias do Apple Podcasts | Pod Studio",
    metaDescription:
      "Encontre as melhores categorias e subcategorias do Apple Podcasts para o seu programa. Busque por tema e copie a tag XML exata. Ferramenta grátis.",
    overview: [
      "O Buscador de Categorias ajuda a escolher a categoria e a subcategoria certas no Apple Podcasts. A Apple permite até duas categorias, e a principal é a mais visível.",
      "Busque por tema ou palavra-chave para ver categorias e subcategorias correspondentes e copie com um clique a tag XML exata para o seu feed RSS.",
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
  },
  "hook-generator": {
    metaTitle: "Gerador de Ganchos para Cortes de Podcast | Pod Studio",
    metaDescription:
      "Escreva ganchos que param o scroll para cortes de podcast no TikTok, Reels, Shorts e LinkedIn. Escolha o estilo, compare e copie. Grátis e sem cadastro.",
    overview: [
      "O gerador de Ganchos para Vídeos e Redes escreve frases de abertura curtas e fortes para cortes e posts, para que os melhores momentos do episódio funcionem sozinhos.",
      "Informe o tema do episódio e, se quiser, o convidado; escolha um estilo de gancho e receba várias frases para usar como texto na tela ou legenda no TikTok, Reels, YouTube Shorts ou LinkedIn.",
    ],
    steps: [
      { title: "Informe o tema", text: "Descreva o tema ou setor do episódio de onde sai o corte." },
      { title: "Adicione um convidado (opcional)", text: "Inclua o convidado quando o nome ou a experiência dele for o atrativo." },
      { title: "Escolha um estilo", text: "Filtre por estilo de gancho e compare várias aberturas." },
      { title: "Copie e publique", text: "Use o melhor gancho como texto na tela ou legenda e coloque o link do episódio completo." },
    ],
    tips: [
      "A primeira linha tem uns dois segundos para prender a atenção — comece pela afirmação mais específica.",
      "Garanta que o corte cumpre o que o gancho promete; ganchos enganosos minam a confiança.",
      "Coloque legendas em todos os vídeos; muita gente assiste sem som.",
    ],
  },
  "transcript-formatter": {
    metaTitle: "Limpador de Transcrições de Podcast | Pod Studio",
    metaDescription:
      "Limpe transcrições de podcast: nomeie os falantes, remova vícios de linguagem e marcações de tempo e deixe o texto pronto para publicar. Grátis e privado.",
    overview: [
      "O Limpador de Transcrições organiza o texto exportado por qualquer serviço de transcrição. Troque rótulos genéricos por nomes reais, remova vícios de linguagem comuns em inglês (um, uh…) e retire ou mantenha as marcações de tempo.",
      "Ele trabalha com o texto colado — não transcreve áudio. O resultado fica mais legível e pronto para publicar como transcrição acessível, post de blog ou trecho das show notes.",
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
  },
  "trailer-script-builder": {
    metaTitle: "Criador de Roteiro para Trailer de Podcast | Pod Studio",
    metaDescription:
      "Escreva um trailer que explique seu programa, para quem ele é e por que seguir. Estrutura testada para trailers de 60–90 segundos. Grátis.",
    overview: [
      "O criador de Roteiro de Trailer oferece uma estrutura testada: gancho, sobre o que é o programa, para quem ele é, o que o diferencia e um convite claro para seguir.",
      "Muitos diretórios destacam o trailer na página do programa, então ele costuma ser a primeira coisa que novos ouvintes escutam. Esta ferramenta ajuda a aproveitar esses 60–90 segundos.",
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
    metaTitle: "Gerador de Respostas a Avaliações de Podcast | Pod Studio",
    metaDescription:
      "Responda avaliações de ouvintes e escreva agradecimentos no ar, para elogios e críticas. Modelos simpáticos e profissionais. Ferramenta grátis.",
    overview: [
      "O gerador de Agradecimentos a Ouvintes ajuda você a responder avaliações e escrever menções no ar que agradecem o apoio e incentivam mais pessoas a avaliar o programa.",
      "Ele cobre avaliações empolgadas, feedback construtivo e críticas injustas, com respostas respeitosas, sem defensiva, que citam melhorias concretas quando faz sentido.",
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
    metaTitle: "Convites para Convidados e Parcerias de Podcast | Pod Studio",
    metaDescription:
      "Escreva propostas de participação e e-mails de divulgação cruzada que recebem resposta. Valor mútuo e próximo passo claros. Modelos grátis.",
    overview: [
      "O criador de Convites e Colaborações redige e-mails para se oferecer como convidado, convidar alguém para o seu programa ou propor uma divulgação cruzada com outro podcast.",
      "Cada rascunho explica para quem é o seu programa, o formato proposto, o valor para os dois lados e um próximo passo simples — o que apresentadores ocupados procuram antes de dizer sim.",
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
