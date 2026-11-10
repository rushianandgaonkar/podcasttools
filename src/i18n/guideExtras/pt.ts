import type { GuideExtrasRecord } from "./types";

export const ptGuideExtras: GuideExtrasRecord = {
  "podcast-sponsorship-cpm-guide-2026": {
    metaTitle: "Preços de Patrocínio de Podcast e CPM 2026 | Pod Studio",
    firstHeading: "Como funcionam as taxas de anúncio e o CPM de podcast",
    readMinutes: 6,
    sections: [
      {
        heading: "Taxas de Anúncio em Podcasts e CPMs Médios em 2026",
        paragraphs: [
          "Segundo benchmarks da AdvertiseCast e estudos da IAB/PwC, os anúncios em podcast continuam entre os mais valorizados da mídia digital. Os patrocinadores pagam valores premium porque as recomendações feitas pelo próprio apresentador conquistam muito mais atenção e lembrança de marca do que banners convencionais.",
        ],
      },
      {
        heading: "Exemplo Prático: Precificando um Episódio",
        paragraphs: [
          "Imagine que seus episódios tenham média de 5.000 downloads nos primeiros 30 dias. Divida por 1.000 para obter 5 «unidades» e multiplique pelo CPM de cada espaço comercial.",
          "Cobrando US$ 18 (ou R$ 90) por um pre-roll, US$ 25 (R$ 130) por um mid-roll e US$ 10 (R$ 50) por um post-roll, um episódio totalmente vendido rende US$ 265 (cerca de R$ 1.350). Publicando quatro episódios por mês com todas as cotas fechadas, isso representa mais de R$ 5.000 mensais.",
        ],
        formula: "5.000 ÷ 1.000 = 5 → (5 × R$ 90) + (5 × R$ 130) + (5 × R$ 50) = R$ 1.350 por episódio",
      },
      {
        heading: "Anúncios Lidos pelo Apresentador vs. Programáticos",
        paragraphs: [
          "Anúncios lidos pelo apresentador são gravados com sua própria voz e estilo. Os ouvintes confiam nessas indicações, por isso elas atingem os valores mais altos. Podem ser gravados fixos no áudio («baked-in») ou inseridos dinamicamente pela plataforma para substituição posterior.",
          "Anúncios programáticos são intermediados automaticamente por redes de áudio. Pagam CPMs menores, mas monetizam o catálogo antigo de episódios que continua recebendo ouvintes.",
        ],
      },
      {
        heading: "O que Colocar na Proposta de Patrocínio",
        paragraphs: ["Marcas querem avaliar afinidade e retorno com agilidade. Um mídia kit de uma página deve ter:"],
        list: [
          { title: "Perfil da audiência", description: "Quem escuta, quais são seus hábitos e por que combinam com o cliente ideal do patrocinador." },
          { title: "Downloads comprovados", description: "Média de downloads por episódio em 30 dias com prints reais da hospedagem." },
          { title: "Formatos e valores", description: "Quais posições estão disponíveis, a duração e sua tabela de CPM ou valor fixo." },
          { title: "Exemplo prático de áudio", description: "Um trecho de 30 segundos demonstrando sua leitura comercial natural." },
        ],
      },
      {
        heading: "Caminhos para Podcasts Menores",
        paragraphs: [
          "Se o CPM tradicional ainda não fecha a conta no seu volume atual, muitos programas começam com pacotes de valor fixo fechado, comissões de afiliados com cupons e clubes de apoiadores recorrentes. Isso cria histórico sólido para negociar contratos maiores à medida que sua audiência cresce.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual é um bom CPM para um podcast menor?",
        answer:
          "Não há taxa única. As médias deste guia servem de ponto de partida: podcasts de nicho com público altamente qualificado cobram mais, enquanto programas de humor amplo cobram menos. Muitos começam com valores fixos por episódio.",
      },
      {
        question: "De quantos downloads preciso para conseguir patrocínio?",
        answer:
          "Não existe número mágico. Redes de mídia exigem patamares mínimos, mas empresas do seu nicho anunciam até em podcasts de 500 ouvintes se o público for exatamente quem compra o produto delas.",
      },
      {
        question: "Patrocinadores pagam por download ou por episódio?",
        answer:
          "Modelos de CPM pagam por cada 1.000 downloads nos primeiros 30 a 45 dias. Já acordos diretos de nicho costumam pagar valores fixos por episódio ou pacote fechado de temporada.",
      },
    ],
  },
  "apple-spotify-cover-art-specs-guide": {
    metaTitle: "Especificações de Capa para Apple e Spotify | Pod Studio",
    firstHeading: "Requisitos de tamanho de capa de podcast",
    readMinutes: 6,
    sections: [
      {
        heading: "Pense Primeiro na Miniatura",
        paragraphs: [
          "A maioria dos ouvintes vê sua capa pela primeira vez do tamanho da ponta de um dedo nos resultados de busca do celular. Uma arte que parece linda em tela cheia pode virar um borrão ilegível ao ser reduzida.",
        ],
        list: [
          { title: "Poucas palavras e fonte grande", description: "O nome do podcast em letras grossas e legíveis é suficiente. Deixe slogans para a descrição." },
          { title: "Contraste máximo", description: "Texto claro em fundo escuro, ou o inverso. Evite fotos complexas por trás do nome." },
          { title: "Um único ponto focal", description: "Um rosto expressivo, um ícone marcante ou a tipografia — nunca os três disputando espaço." },
        ],
      },
      {
        heading: "Áreas de Segurança e Cortes dos Apps",
        paragraphs: [
          "Muitos aplicativos arredondam os cantos ou sobrepõem ícones de reprodução. Mantenha títulos e rostos no centro da imagem (os 80% centrais do quadrado) para nada ser cortado.",
        ],
      },
      {
        heading: "Motivos Comuns para Recusa de Capas",
        paragraphs: ["Além das medidas, os diretórios analisam conteúdo e qualidade. Evite a todo custo:"],
        list: [
          { title: "Logos da Apple ou do Spotify", description: "Não use logotipos oficiais dos diretórios nem insinue parcerias que você não tem." },
          { title: "Imagens esticadas ou em baixa resolução", description: "Artes pixeladas ou distorcidas são rejeitadas por falta de profissionalismo." },
          { title: "Imagens ofensivas ou apelativas", description: "A arte deve ser adequada para todas as idades e representar honestamente o programa." },
        ],
      },
      {
        heading: "Checklist Antes de Enviar a Capa",
        paragraphs: ["Antes do upload na sua hospedagem, confirme que o arquivo é:"],
        list: [
          { title: "Quadrado com 3000 × 3000 px", description: "Proporção 1:1 rigorosa, entre 1400 e 3000 pixels." },
          { title: "JPEG ou PNG em perfil RGB", description: "Espaço de cores RGB (nunca CMYK) com a extensão correta." },
          { title: "Legível em 50 × 50 px", description: "Teste a leitura em tamanho minúsculo antes de publicar." },
          { title: "Salvo com novo nome de arquivo", description: "Ao trocar de arte, um nome novo ajuda os apps a atualizar o cache mais rápido." },
        ],
      },
    ],
    faqs: [
      {
        question: "Qual é o tamanho exato da capa de podcast?",
        answer:
          "Recomenda-se imagem quadrada de 3000 × 3000 pixels. Apple Podcasts e Spotify aceitam de 1400 × 1400 a 3000 × 3000 px em formato JPEG ou PNG com cores RGB.",
      },
      {
        question: "Posso usar a mesma imagem na Apple e no Spotify?",
        answer:
          "Sim. As duas plataformas importam a imagem diretamente do seu feed RSS. Uma única arte de 3000 × 3000 px atende perfeitamente a todos os tocadores.",
      },
      {
        question: "Por que minha capa nova ainda não apareceu nos aplicativos?",
        answer:
          "Os aplicativos guardam as imagens em cache, e a atualização pode levar de algumas horas a alguns dias. Verifique se o feed aponta para a nova URL e altere o nome do arquivo da imagem para forçar a atualização.",
      },
    ],
  },
  "how-to-write-clickable-episode-titles": {
    metaTitle: "Como Criar Títulos de Podcast Atraentes | Pod Studio",
    description:
      "Fórmulas testadas para títulos de episódios de podcast que se destacam no Apple Podcasts e Spotify — com exemplos, dicas de SEO e erros para evitar.",
    firstHeading: "Por Que o Título do Episódio Define os Cliques",
    readMinutes: 5,
    sections: [
      {
        heading: "Outras Cinco Fórmulas para Testar",
        paragraphs: ["Combine estes modelos com os formatos principais para encontrar o melhor ângulo para o mesmo assunto:"],
        list: [
          { title: "4. A Promessa de Tutorial", description: "«Como criar um podcast com R$ 500 de orçamento» — claro, pesquisável e útil." },
          { title: "5. A Lista Numerada", description: "«7 perguntas de entrevista que revelam grandes histórias» — alinha expectativas de imediato." },
          { title: "6. O Gancho com Convidado", description: "«[Nome do Convidado] revela como criar audiência sem redes sociais» — quando a autoridade dele atrai." },
          { title: "7. A Pergunta Direta", description: "«O e-mail marketing morreu em 2026?» — desperta a curiosidade de ouvir a resposta." },
          { title: "8. O Erro Marcante", description: "«O erro de precificação que nos custou o primeiro ano todo» — aprendizado real com risco tangível." },
        ],
      },
      {
        heading: "Títulos e a Busca nos Aplicativos",
        paragraphs: [
          "A busca do Apple Podcasts e do Spotify analisa as palavras do título e da descrição. Usar os termos que seu público digitaria — «investimentos», «maratona», «inteligência artificial» — ajuda os ouvintes certos a encontrarem seu programa.",
          "Coloque essas palavras logo no começo, já que telas de celulares costumam cortar títulos compridos após cerca de 60 caracteres.",
        ],
      },
      {
        heading: "Erros Comuns em Títulos de Episódios",
        paragraphs: ["Estes hábitos custam ouvintes silenciosamente toda semana:"],
        list: [
          { title: "Começar pelo número do episódio", description: "Os apps já mostram a numeração; colocar «Ep. 112:» desperdiça seus caracteres mais visíveis." },
          { title: "Frases vagas demais", description: "«Um bate-papo incrível» não explica a um novo ouvinte por que apertar o play." },
          { title: "Títulos caça-cliques enganosos", description: "Prometer o que não cumpre gera abandono imediato e avaliações negativas de 1 estrela." },
          { title: "Piadas internas do grupo", description: "Referências que apenas seus amigos entendem afastam qualquer ouvinte novo." },
        ],
      },
    ],
    faqs: [
      {
        question: "Devo colocar o número do episódio no título?",
        answer:
          "Normalmente não. Os feeds de podcast possuem um campo específico para numeração que os aplicativos já exibem. Repetir o número no título só rouba espaço das palavras-chave do tema.",
      },
      {
        question: "Qual deve ser o tamanho do título de um episódio?",
        answer:
          "Não há limite rígido, mas quanto mais direto, melhor. Concentre o assunto principal nas primeiras palavras para que continue legível em celulares e relógios inteligentes.",
      },
      {
        question: "Posso mudar o título de um episódio depois de publicado?",
        answer:
          "Sim. Altere na sua plataforma de hospedagem e o feed RSS atualizará as plataformas. Só não mexa no código GUID do episódio, para ele não ser duplicado.",
      },
    ],
  },
  "how-much-do-podcasts-make": {
    metaTitle: "Quanto Ganha um Podcast em 2026? | Pod Studio",
    readMinutes: 8,
    sections: [
      {
        heading: "As Três Alavancas que Multiplicam a Renda",
        paragraphs: [
          "Os podcasts que faturam muito acima da média em relação aos seus ouvintes ativam três alavancas fundamentais: poder aquisitivo do nicho, frequência regular de lançamentos e canais de venda direta.",
          "Um podcast de negócios que fala para 1.000 diretores de empresas gera muito mais receita fechando contratos de consultoria do que um programa de entretenimento de 50.000 jovens monetizado com anúncios genéricos.",
        ],
        list: [
          {
            title: "Poder de Compra da Audiência",
            description: "Setores B2B, tecnologia e investimentos negociam CPMs de R$ 150 a R$ 250 contra R$ 60 a R$ 90 de temas generalistas.",
          },
          {
            title: "Frequência e Volume de Episódios",
            description: "Publicar duas vezes por semana dobra seu estoque de anúncios no mês sem precisar do dobro de ouvintes únicos.",
          },
          {
            title: "Canais Diretos de Conversão",
            description: "Construir lista própria de e-mails para vender mentorias, cursos práticos e acessos a comunidades VIP.",
          },
        ],
      },
      {
        heading: "Quando é Viável Viver Apenas do Podcast?",
        paragraphs: [
          "A transição para dedicação exclusiva geralmente ocorre quando o faturamento combinado de patrocínios, membros e prestação de serviços cobre seus custos de vida com folga por pelo menos seis meses seguidos. Isso costuma acontecer na faixa de 10.000 a 20.000 downloads por episódio ou com uma esteira ativa de clientes corporativos.",
        ],
      },
    ],
    faqs: [
      {
        question: "De quantos downloads preciso para começar a ganhar dinheiro?",
        answer:
          "Você pode faturar a partir de 200 a 500 ouvintes fiéis se oferecer consultorias, serviços ou produtos afiliados especializados. Para patrocínios tradicionais de CPM, a maioria das marcas procura programas com pelo menos 1.000 a 5.000 downloads por episódio em 30 dias.",
      },
      {
        question: "Qual é o ganho médio de um podcast com 1.000 downloads?",
        answer:
          "Um podcast semanal com 1.000 downloads costuma faturar entre R$ 500 e R$ 1.500 por mês somando anúncios com 30 apoiadores em financiamento coletivo e indicações de produtos afiliados.",
      },
      {
        question: "Como os maiores podcasters ganham milhões sem depender só de anúncios?",
        answer:
          "Eles usam a audiência como vitrine para criar empresas de software, marcas de produtos próprios, contratos de livros, participações em startups e turnês de eventos ao vivo.",
      },
      {
        question: "Dá para monetizar um podcast com menos de 500 ouvintes?",
        answer:
          "Com certeza. Micro-podcasts funcionam como ferramenta de autoridade para consultores e agências, onde um único cliente conquistado paga o ano inteiro de gravações.",
      },
    ],
  },
  "how-to-monetize-a-podcast": {
    metaTitle: "Como Monetizar um Podcast e Ter Patrocinadores | Pod Studio",
    readMinutes: 8,
    sections: [
      {
        heading: "O Método de 4 Passos para Abordar Patrocinadores",
        paragraphs: [
          "Siga este roteiro de contato para atrair seus primeiros parceiros comerciais:",
        ],
        list: [
          {
            title: "1. Liste 20 Marcas Ativas",
            description: "Mapeie empresas que já anunciam em podcasts ou canais do YouTube do mesmo segmento que o seu.",
          },
          {
            title: "2. Encontre o Decisor no LinkedIn",
            description: "Procure cargos como «Gerente de Marketing», «Head de Parcerias» ou «Mídia».",
          },
          {
            title: "3. Envie uma Mensagem Curta e Específica",
            description: "Elogie uma campanha recente deles, compartilhe os dados do seu público e proponha um pacote-teste de 2 episódios.",
          },
          {
            title: "4. Faça um Único Follow-up com Valor",
            description: "Após 5 dias úteis, reforce a mensagem compartilhando uma avaliação recente de ouvinte citando a categoria de produto da empresa.",
          },
        ],
      },
      {
        heading: "Valores Fechados vs. Negociação por CPM",
        paragraphs: [
          "Para podcasts com menos de 10.000 downloads por episódio, fechar valores fixos (por exemplo, R$ 1.500 por 4 episódios) é muito mais vantajoso do que contas rígidas de CPM. Garante receita certa para você e previsibilidade para a marca.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quando começar a procurar patrocinadores para o podcast?",
        answer:
          "Assim que tiver pelo menos 10 episódios consistentes publicados e conseguir demonstrar uma base de ouvintes engajada. A afinidade do público vale mais para marcas de nicho do que números gigantes e dispersos.",
      },
      {
        question: "Qual a diferença entre anúncio CPM e patrocínio por afiliação?",
        answer:
          "O CPM paga um valor fixo a cada 1.000 downloads independentemente das vendas. A afiliação paga uma comissão percentual somente quando um ouvinte compra usando seu link ou cupom.",
      },
      {
        question: "Como montar um mídia kit de uma página profissional?",
        answer:
          "Mantenha em uma única folha. Mostre o logo do podcast, perfil do apresentador, público-alvo, média de downloads reais em 30 dias, opções de anúncios e e-mail de contato direto.",
      },
      {
        question: "Vale mais a pena Catarse/Apoia.se ou Apple Podcasts Subscriptions?",
        answer:
          "Ambos têm pontos fortes. A Apple permite assinar com um toque no app (mas retém 15 a 30%). Plataformas nacionais de financiamento coletivo dão acesso direto aos e-mails dos apoiadores e aceitam Pix.",
      },
    ],
  },
  "podcast-topic-ideas": {
    metaTitle: "100 Ideias de Temas e Episódios para Podcast | Pod Studio",
    readMinutes: 9,
    sections: [
      {
        heading: "Como Validar um Assunto Antes de Gravar",
        paragraphs: [
          "Antes de gastar horas na pauta e na gravação, teste o tema com estas 3 perguntas simples:",
          "1. Este assunto resolve uma dúvida urgente ou problema real do meu ouvinte agora?",
          "2. Tenho um ponto de vista original, experiência prática ou um convidado de peso que traga profundidade além do básico?",
          "3. Consigo resumir o tema em um título instigante com menos de 60 caracteres que faça o ouvinte parar o feed?",
        ],
      },
      {
        heading: "Montando um Calendário de Conteúdo para 90 Dias",
        paragraphs: [
          "Para evitar o cansaço mental, divida seu ano em temporadas de 12 semanas. Alterne episódios solo educativos, entrevistas práticas com especialistas e edições especiais respondendo dúvidas de ouvintes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Como saber se uma ideia rende um episódio inteiro?",
        answer:
          "O tema é bom se você conseguir estruturar pelo menos três tópicos principais, ilustrar com um estudo de caso real e deixar uma lição clara. Se for apenas uma dica rápida, use como quadro de 5 minutos.",
      },
      {
        question: "Como ter ideias novas para o podcast toda semana?",
        answer:
          "Leia os comentários dos vídeos mais vistos no YouTube da sua área, acompanhe perguntas frequentes em fóruns e no Reddit, e incentive os ouvintes a enviarem áudios com dúvidas.",
      },
      {
        question: "O podcast deve falar sempre de um único nicho?",
        answer:
          "Nos primeiros 50 episódios, mantenha o foco bem direcionado para novos ouvintes entenderem seu valor logo de cara. Com o público fidelizado, você pode expandir para áreas correlatas aos poucos.",
      },
      {
        question: "O que torna um quadro fixo marcante no podcast?",
        answer:
          "Um quadro inesquecível tem um nome curto e sonoro, uma vinheta musical própria, duração controlada (3 a 5 minutos) e uma dinâmica que o ouvinte já espera com curiosidade toda semana.",
      },
    ],
  },
  "how-to-start-a-podcast": {
    metaTitle: "Como Criar um Podcast em 2026: Passo a Passo | Pod Studio",
    readMinutes: 12,
    sections: [
      {
        heading: "Configurando a Hospedagem e a Distribuição do Feed RSS",
        paragraphs: [
          "Ao contratar uma hospedagem de áudio como Buzzsprout, Libsyn ou Podbean, ela cria o endereço do seu feed RSS. Você cadastra esse link uma única vez no Apple Podcasts Connect e no Spotify for Creators.",
          "Cada novo episódio publicado no seu painel será distribuído automaticamente para todos os aplicativos de podcast em poucas horas, sem necessidade de enviar arquivo por arquivo de novo.",
        ],
      },
      {
        heading: "Plano de Divulgação para os Primeiros 30 Dias",
        paragraphs: [
          "O dia da estreia é apenas o início da jornada. No primeiro mês, concentre esforços em transformar ouvintes em inscritos assíduos:",
        ],
        list: [
          {
            title: "Mobilização Direta de Contatos",
            description: "Mande mensagens individuais para amigos e colegas de trabalho pedindo que sigam o canal e deixem uma avaliação de 5 estrelas na Apple.",
          },
          {
            title: "Material Pronto para Convidados",
            description: "Entregue a cada entrevistado cortes de vídeo em formato vertical e artes prontas para postar no dia em que o episódio sair.",
          },
          {
            title: "Presença em Podcasts Parceiros",
            description: "Participe como convidado em outros 2 ou 3 programas do seu segmento para se apresentar diretamente a quem já tem o hábito de ouvir áudio.",
          },
        ],
      },
      {
        heading: "Erros Comuns que Derrubam Podcasters Iniciantes",
        paragraphs: [
          "Fuja das armadilhas que fazem 70% dos programas pararem: gastar meses escolhendo microfones caros e esquecer a acústica do quarto, publicar sem dia fixo, colocar números de episódio na frente do título e desistir antes do episódio 25.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quanto custa começar um podcast em 2026?",
        answer:
          "É possível estrear com som profissional gastando menos de R$ 600. Um bom microfone dinâmico USB (como o ATR2100x) custa em torno de R$ 450, o software Audacity é gratuito e a hospedagem custa a partir de R$ 60 por mês.",
      },
      {
        question: "Dá para gravar um podcast só pelo celular?",
        answer:
          "Sim, plataformas permitem gravar pelo celular. Mas para reter público no longo prazo, usar um microfone USB conectado ao computador em um ambiente silencioso garante a qualidade esperada pelos ouvintes.",
      },
      {
        question: "Com quantos episódios devo estrear no lançamento?",
        answer:
          "O recomendado é lançar o trailer curto mais 3 episódios completos no primeiro dia. Se o ouvinte gostar do primeiro, já tem outros dois para ouvir em sequência, o que estimula a inscrição imediata.",
      },
      {
        question: "Quanto tempo a Apple leva para aprovar um podcast?",
        answer:
          "O processo de revisão no Apple Podcasts costuma levar de 24 horas a 5 dias úteis. Submeta seu feed com pelo menos 1 a 2 semanas de antecedência da data planejada para o anúncio.",
      },
      {
        question: "Qual é o maior erro de quem começa um podcast?",
        answer:
          "Falta de constância. Pular semanas de lançamento quebra o hábito do ouvinte e faz com que os algoritmos deixem de recomendar o programa. A disciplina regular vence a perfeição em todas as etapas.",
      },
    ],
  },
  "how-to-start-a-podcast-on-spotify": {
    metaTitle: "Como Criar um Podcast no Spotify (Guia 2026) | Pod Studio",
    firstHeading: "Como Criar um Podcast no Spotify em 2026",
    readMinutes: 9,
    sections: [
      {
        heading: "Hospedagem Direta no Spotify vs Feed RSS Externo",
        paragraphs: [
          "Se hospedar diretamente com o Spotify for Creators, seus episódios entram no ar na hora e você tem acesso a enquetes interativas, upload de vídeos e capítulos. Caso use uma hospedagem externa como Buzzsprout ou Libsyn, o Spotify sincroniza pelo seu feed RSS, assegurando posse plena dos arquivos de mídia e gestão de anúncios.",
        ],
      },
    ],
    faqs: [
      {
        question: "É de graça criar um podcast no Spotify?",
        answer:
          "Sim, hospedar diretamente pelo Spotify for Creators (antigo Anchor) é 100% gratuito, com armazenamento ilimitado, tráfego livre e distribuição aberta por feed RSS.",
      },
      {
        question: "Quanto tempo demora para um podcast aparecer no Spotify?",
        answer:
          "Usando um feed RSS externo, o Spotify costuma validar e listar novos programas entre 1 e 24 horas. Uploads feitos direto no Spotify for Creators publicam na hora.",
      },
      {
        question: "Posso enviar podcasts em vídeo para o Spotify?",
        answer:
          "Sim, o Spotify aceita videocasts em alta resolução (1080p em MP4 ou MOV). Eles podem ser enviados via Spotify for Creators ou hospedagens externas compatíveis.",
      },
      {
        question: "Preciso ter 1.000 ouvintes para estar no Spotify?",
        answer:
          "Não, o Spotify não exige nenhum número mínimo de downloads ou seguidores. Qualquer criador com um feed RSS ativo e um episódio de áudio pode ser indexado.",
      },
    ],
  },
  "how-to-start-a-podcast-for-free": {
    metaTitle: "Como Criar um Podcast Grátis: Guia Custo Zero | Pod Studio",
    firstHeading: "Como Criar um Podcast Grátis em 2026",
    readMinutes: 10,
    sections: [
      {
        heading: "Softwares de Gravação Gratuitos vs DAWs Pagos",
        paragraphs: [
          "O Audacity é de código aberto, inteiramente gratuito e bate de frente com softwares pagos como o Adobe Audition no tratamento vocal. Com supressão de ruído, equalização e compressor de dinâmica, você gera arquivos MP3 prontos para distribuição sem pagar licenças.",
        ],
      },
    ],
    faqs: [
      {
        question: "É realmente possível começar um podcast sem gastar nada?",
        answer:
          "Sim. Utilizando o microfone do celular em um quarto com tecidos e cortinas, o editor gratuito Audacity, modelos do Canva e hospedagem sem custos no Spotify for Creators ou RedCircle, você estreia com custo zero.",
      },
      {
        question: "Qual a melhor hospedagem gratuita de podcast?",
        answer:
          "O Spotify for Creators é o serviço gratuito mais utilizado, com espaço ilimitado para áudio e vídeo. RedCircle e Acast também oferecem planos gratuitos muito consistentes.",
      },
      {
        question: "Qual programa gratuito usar para editar o áudio?",
        answer:
          "O Audacity é a escolha de referência em código aberto para Windows, Mac e Linux. Usuários da Apple também têm acesso gratuito ao GarageBand.",
      },
      {
        question: "Como os podcasts gratuitos conseguem faturar?",
        answer:
          "Logo nas primeiras edições por meio de links de afiliados nas descrições, apoio financeiro voluntário (Buy Me a Coffee ou chave Pix) e contratos de patrocínio com o crescimento da audiência.",
      },
    ],
  },
  "best-podcast-equipment-for-beginners": {
    metaTitle: "Equipamento Podcast Iniciantes: Guia 2026 | Pod Studio",
    firstHeading: "O Melhor Equipamento de Podcast para Iniciantes em 2026",
    readMinutes: 11,
    sections: [
      {
        heading: "Por que Ambientes Domésticos Pedem Microfones Dinâmicos",
        paragraphs: [
          "Microfones condensadores possuem cápsulas hipersensíveis que captam qualquer barulho da casa: ar-condicionado, carros na rua e eco nas paredes. Os microfones dinâmicos pedem voz próxima e rejeitam sons distantes, sendo muito superiores para home office.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual o melhor microfone de entrada para podcasts?",
        answer:
          "O Audio-Technica ATR2100x-USB (~R$ 550) ou o Samson Q2U (~R$ 480). Ambos trazem conexões USB e XLR e contam com cápsulas dinâmicas que eliminam ruídos externos.",
      },
      {
        question: "Por que microfones dinâmicos são melhores para iniciantes do que condensadores?",
        answer:
          "Microfones condensadores (como o Blue Yeti) são ultrassensíveis e capturam o eco do quarto e cliques do teclado. Os dinâmicos só gravam a voz projetada bem próxima à cápsula.",
      },
      {
        question: "Iniciantes precisam de uma interface de áudio cara?",
        answer:
          "Não. Um microfone dinâmico USB de qualidade liga direto na porta do computador. A interface de áudio só é necessária se você optar por modelos analógicos com cabo XLR.",
      },
      {
        question: "Posso gravar utilizando fones Bluetooth sem fio?",
        answer:
          "Não. Fones Bluetooth geram latência (atraso de áudio) que causa eco perturbador nos seus ouvidos enquanto você fala. Use sempre fones de ouvido fechados com fio como o Audio-Technica ATH-M20x (~R$ 350).",
      },
    ],
  },
  "how-to-start-a-podcast-on-youtube": {
    metaTitle: "Criar um Podcast no YouTube: Guia em Vídeo | Pod Studio",
    firstHeading: "Como Criar um Podcast no YouTube em 2026",
    readMinutes: 10,
    sections: [
      {
        heading: "Como o Algoritmo do YouTube Avalia Vídeos de Podcast",
        paragraphs: [
          "O YouTube analisa principalmente a taxa de cliques (CTR) nas capas em 16:9 e a porcentagem média de visualização. Episódios longos que mantêm o público conectado por mais de 20 minutos enviam fortes sinais de retenção para a aba de recomendações.",
        ],
      },
    ],
    faqs: [
      {
        question: "Posso conectar um feed RSS de podcast em áudio ao YouTube?",
        answer:
          "Sim. O YouTube Studio permite integrar seu feed RSS de podcast atual. O YouTube cria automaticamente vídeos estáticos com a imagem de capa para o YouTube e YouTube Music.",
      },
      {
        question: "O YouTube exige que o podcast tenha vídeo obrigatoriamente?",
        answer:
          "Não, a ingestão de áudio via feed RSS funciona normalmente. No entanto, programas gravados em vídeo com os apresentadores alcançam taxas de cliques e indicações no algoritmo substancialmente maiores.",
      },
      {
        question: "Quantos inscritos são necessários para criar um podcast no YouTube?",
        answer:
          "Nenhum. Qualquer canal verificado do YouTube pode criar playlists de podcast, submeter feeds RSS ou subir episódios em formato de vídeo.",
      },
      {
        question: "Como organizar marcações de tempo e capítulos no YouTube?",
        answer:
          "Insira horários começando em 00:00 com descrições curtas no texto do vídeo. Formate tudo em segundos com o nosso Gerador de Capítulos para o YouTube.",
      },
    ],
  },
  "how-to-start-a-podcast-with-no-audience": {
    metaTitle: "Criar Podcast Sem Audiência: Guia 2026 | Pod Studio",
    firstHeading: "Como Criar um Podcast Sem Audiência em 2026",
    readMinutes: 10,
    sections: [
      {
        heading: "O Impulso Inicial dos Primeiros 30 Dias",
        paragraphs: [
          "Durante o primeiro mês, faça contato individual com 50 amigos, colegas de profissão e contatos próximos pedindo avaliações no Apple Podcasts. Esse ritmo inicial de resenhas sinaliza aos algoritmos dos diretórios que o público está ouvindo de verdade.",
        ],
      },
    ],
    faqs: [
      {
        question: "Como conseguir ouvintes começando do zero absoluto?",
        answer:
          "Aproveitando a audiência de terceiros: convidando pessoas com público próprio, participando de outros podcasts, publicando cortes dinâmicos no TikTok/Reels e focando em termos específicos nos títulos.",
      },
      {
        question: "Por que as plataformas não recomendam podcasts novos sozinhas?",
        answer:
          "Apple Podcasts e Spotify funcionam como diretórios e não como feeds virais de recomendação. Você precisa gerar tráfego externo através do Google, redes sociais e e-mails para o seu feed.",
      },
      {
        question: "Quantos episódios publicar no dia da estreia sem audiência?",
        answer:
          "Lance um trailer curto de 60 a 90 segundos mais 3 episódios completos no dia da estreia. Isso oferece conteúdo suficiente para maratonar e eleva seu ranking nas plataformas.",
      },
      {
        question: "Quanto tempo leva para bater 1.000 downloads por episódio?",
        answer:
          "Com consistência semanal, entrevistas e atenção ao SEO, alcançar 1.000 downloads por episódio costuma levar de 6 a 12 meses.",
      },
    ],
  },
  "how-to-start-a-podcast-and-make-money": {
    metaTitle: "Criar Podcast e Ganhar Dinheiro: 7 Vias | Pod Studio",
    firstHeading: "Como Criar um Podcast e Ganhar Dinheiro em 2026",
    readMinutes: 10,
    sections: [
      {
        heading: "Construindo um Mídia Kit de Alta Conversão",
        paragraphs: [
          "Os patrocinadores precisam checar três dados essenciais: perfil do público (dados demográficos e interesse de compra), downloads reais confirmados em 30 dias e formatos de inserção disponíveis. Resuma tudo em um PDF direto de uma página.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quantos downloads são necessários para lucrar com um podcast?",
        answer:
          "É possível lucrar sem limites mínimos usando marketing de afiliados e venda de serviços. Patrocinadores tradicionais de CPM normalmente exigem entre 1.000 e 5.000 downloads, mas podcasts segmentados fecham cotas fixas com 200 a 500 ouvintes qualificados.",
      },
      {
        question: "Quanto pagam as propagandas de podcast em 2026?",
        answer:
          "A média de mercado fica entre US$ 18 e US$ 35 por 1.000 downloads (CPM). Um anúncio de 60 segundos no meio do episódio lido pelo podcaster vale cerca de US$ 25 a US$ 35 CPM, contra US$ 15 a US$ 18 CPM para inserções no início.",
      },
      {
        question: "Qual a modalidade mais lucrativa para quem tem poucos ouvintes?",
        answer:
          "A prestação de consultoria, mentorias ou produtos digitais próprios de alto valor. O podcast cria uma relação de confiança tão profunda que poucos ouvintes já geram contratos de milhares de reais.",
      },
      {
        question: "Como estimar o faturamento previsto do meu podcast?",
        answer:
          "Utilize a fórmula CPM: (Downloads em 30 dias / 1.000) × Tarifa CPM × Cotas de Anúncio. Simule seus números com a nossa Calculadora de Renda e CPM de Podcast gratuita.",
      },
    ],
  },
};
