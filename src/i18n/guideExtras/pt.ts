import type { GuideExtrasRecord } from "./types";

export const ptGuideExtras: GuideExtrasRecord = {
  "podcast-sponsorship-cpm-guide-2026": {
    metaTitle: "Guia de Patrocínio e CPM para Podcast 2026 | Pod Studio",
    readMinutes: 5,
    sections: [
      {
        heading: "Exemplo prático: precificando um episódio",
        paragraphs: [
          "Imagine que seus episódios têm em média 5.000 downloads nos primeiros 30 dias. Divida por 1.000 para obter 5 “unidades” e multiplique pelo CPM de cada espaço.",
          "Com US$ 18 por pre-roll, US$ 25 por mid-roll lido pelo apresentador e US$ 10 por post-roll, um episódio totalmente vendido vale US$ 90 + US$ 125 + US$ 50 = US$ 265. Publicando quatro episódios por mês e vendendo todos os espaços, são cerca de US$ 1.060 por mês antes da comissão de agência ou rede.",
        ],
        formula: "5.000 ÷ 1.000 = 5 → (5 × US$ 18) + (5 × US$ 25) + (5 × US$ 10) = US$ 265 por episódio",
      },
      {
        heading: "Anúncios lidos pelo apresentador vs. programáticos",
        paragraphs: [
          "Anúncios lidos pelo apresentador são escritos ou aprovados pelo patrocinador e lidos com a sua voz. Os ouvintes confiam neles, por isso têm os maiores valores. Podem ser gravados dentro do episódio ou inseridos dinamicamente para serem trocados depois.",
          "Anúncios programáticos são comprados automaticamente por uma rede de anúncios e inseridos pela sua hospedagem. Costumam pagar CPMs menores, mas preenchem o inventário que você não vendeu diretamente — útil para episódios antigos que continuam recebendo downloads.",
        ],
      },
      {
        heading: "O que incluir em uma proposta para patrocinadores",
        paragraphs: ["Patrocinadores querem avaliar rápido o encaixe e o risco. Um mídia kit de uma página deve trazer:"],
        list: [
          { title: "Perfil da audiência", description: "Quem ouve, o que interessa a essas pessoas e por que isso combina com os clientes do patrocinador." },
          { title: "Downloads verificados", description: "Média de downloads em 30 dias por episódio, com prints da hospedagem se pedirem." },
          { title: "Espaços e valores", description: "Quais espaços estão disponíveis, a duração e o seu CPM ou valor fechado." },
          { title: "Prova de resultado", description: "Uma leitura de exemplo, resultados anteriores ou um cupom que permita medir a resposta." },
        ],
      },
      {
        heading: "Opções para programas menores",
        paragraphs: [
          "Se acordos por CPM ainda não compensam, muitos programas independentes começam com valor fixo por episódio, links de afiliado ou cupons que pagam por venda e apoio direto dos ouvintes por assinaturas. Isso cria um histórico para negociar acordos por CPM conforme a audiência cresce.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual é um bom CPM para um podcast pequeno?",
        answer:
          "Não existe valor fixo. As faixas deste guia são um ponto de partida: programas de nicho com público bem definido e com intenção de compra costumam cobrar mais, e os de entretenimento amplo, menos. Muitos programas pequenos começam com acordos fixos ou de afiliados e passam ao CPM quando os downloads se estabilizam.",
      },
      {
        question: "Quantos downloads preciso para conseguir patrocinadores?",
        answer:
          "Não há um limite universal. Redes de anúncios costumam exigir um mínimo de downloads, mas patrocinadores diretos de um nicho específico podem trabalhar com programas menores se o público combinar. Constância e dados confiáveis valem mais que um número alto isolado.",
      },
      {
        question: "Patrocinadores pagam por download ou por episódio?",
        answer:
          "Acordos por CPM são cobrados a cada 1.000 downloads, geralmente contados nos primeiros 30–45 dias. Alguns patrocinadores preferem valor fixo por episódio ou campanha, e acordos de afiliado pagam por venda ou cadastro. Combine sempre por escrito como os downloads serão medidos e reportados.",
      },
    ],
  },
  "apple-spotify-cover-art-specs-guide": {
    metaTitle: "Capa de Podcast: Especificações Apple e Spotify | Pod Studio",
    readMinutes: 5,
    sections: [
      {
        heading: "Crie primeiro para a miniatura",
        paragraphs: [
          "A maioria das pessoas vê sua capa pela primeira vez do tamanho da ponta de um dedo — em buscas, rankings e listas de “a seguir”. Uma arte linda em tamanho grande pode virar uma mancha ilegível quando reduzida.",
        ],
        list: [
          { title: "Poucas palavras, bem grandes", description: "Normalmente o nome do programa em uma fonte forte basta. Deixe slogans para a descrição." },
          { title: "Contraste máximo", description: "Texto claro sobre fundo escuro ou o contrário. Evite fotos poluídas atrás do texto." },
          { title: "Um único ponto focal", description: "Um rosto, um ícone ou o título — não os três disputando atenção." },
        ],
      },
      {
        heading: "Áreas seguras e cortes",
        paragraphs: [
          "Alguns apps arredondam os cantos ou sobrepõem pequenos selos. Mantenha título, logo e rostos na área central do quadrado — cerca de 80% do centro — para que nada importante seja cortado.",
        ],
      },
      {
        heading: "Motivos comuns de rejeição",
        paragraphs: ["Além de tamanho e formato, os diretórios avaliam conteúdo e qualidade. Evite:"],
        list: [
          { title: "Logos e marcas das plataformas", description: "Não use os logos do Apple Podcasts ou do Spotify nem sugira um apoio que você não tem." },
          { title: "Imagens de baixa resolução ou distorcidas", description: "Arte ampliada, borrada ou esticada pode ser rejeitada ou parecer amadora." },
          { title: "Imagens explícitas ou enganosas", description: "A capa deve ser apropriada e representar o programa com honestidade." },
        ],
      },
      {
        heading: "Checklist antes de enviar",
        paragraphs: ["Antes de enviar, confirme que o arquivo:"],
        list: [
          { title: "É quadrado com 3000 × 3000 px", description: "Exatamente 1:1, dentro da faixa de 1400–3000 px." },
          { title: "É JPEG ou PNG em RGB", description: "Use o espaço de cor RGB, não CMYK, com a extensão .jpg ou .png correta." },
          { title: "É legível em 50 × 50 px", description: "Confira em uma prévia pequena antes de publicar." },
          { title: "Tem um novo nome de arquivo", description: "Ao atualizar a capa, um nome novo ajuda os apps a perceberem a mudança." },
        ],
      },
    ],
    faqs: [
      {
        question: "Qual deve ser o tamanho da capa de um podcast?",
        answer:
          "Use uma imagem quadrada de 3000 × 3000 pixels. O Apple Podcasts aceita de 1400 × 1400 a 3000 × 3000 pixels em JPEG ou PNG com espaço de cor RGB; um quadrado de 3000 px também funciona no Spotify e em outros apps.",
      },
      {
        question: "Posso usar a mesma capa no Apple Podcasts e no Spotify?",
        answer:
          "Sim. Ambos leem a capa do seu feed RSS ou das configurações da hospedagem, então um único quadrado de 3000 × 3000 px que atenda aos requisitos da Apple funciona nos principais apps.",
      },
      {
        question: "Por que minha nova capa não aparece?",
        answer:
          "Os apps de podcast guardam a capa em cache, então a atualização pode levar de horas a vários dias. Verifique se o feed aponta para a URL da nova imagem — usar um novo nome de arquivo ajuda — e se o arquivo ainda atende ao tamanho e ao formato exigidos.",
      },
    ],
  },
  "how-to-write-clickable-episode-titles": {
    metaTitle: "Como Escrever Títulos de Episódios de Podcast | Pod Studio",
    description:
      "Fórmulas testadas para títulos de episódios de podcast que se destacam no Apple Podcasts e no Spotify, com exemplos, dicas de busca e erros a evitar.",
    firstHeading: "Por que o título do episódio importa tanto",
    readMinutes: 5,
    sections: [
      {
        heading: "Mais cinco fórmulas para testar",
        paragraphs: ["Combine-as com os três arquétipos acima para explorar ângulos diferentes do mesmo episódio:"],
        list: [
          { title: "4. A promessa prática", description: "“Como lançar um podcast com R$ 500 de orçamento” — claro, buscável e útil." },
          { title: "5. A lista numerada", description: "“7 perguntas de entrevista que rendem histórias melhores” — a expectativa fica clara de cara." },
          { title: "6. O gancho do convidado", description: "“[Nome do convidado] sobre construir uma marca sem redes sociais” — quando o convidado é o atrativo." },
          { title: "7. A pergunta direta", description: "“O e-mail frio morreu em 2026?” — dá vontade de descobrir a resposta." },
          { title: "8. O enquadramento do erro", description: "“O erro de preço que nos custou o primeiro ano” — algo concreto em jogo e uma lição real." },
        ],
      },
      {
        heading: "Títulos e a busca de podcasts",
        paragraphs: [
          "A busca do Apple Podcasts e do Spotify considera as palavras dos títulos e descrições do programa e dos episódios. Usar as palavras que seus ouvintes digitariam — “orçamento”, “treino de maratona”, “true crime Brasil” — ajuda as pessoas certas a encontrar o episódio.",
          "Coloque essas palavras no início, porque os títulos costumam ser cortados em telas pequenas. Um tema claro logo de cara vale mais que uma frase espirituosa que só faz sentido depois de ouvir.",
        ],
      },
      {
        heading: "Erros comuns em títulos",
        paragraphs: ["Estes hábitos custam plays sem você perceber:"],
        list: [
          { title: "Começar pelo número do episódio", description: "Os apps já mostram o número; “Ep. 112:” desperdiça os caracteres mais visíveis." },
          { title: "Chamadas vagas", description: "“Uma ótima conversa” não diz a um ouvinte novo por que apertar o play." },
          { title: "Clickbait que não cumpre", description: "Prometer demais gera abandonos rápidos e avaliações negativas." },
          { title: "Piadas internas", description: "Referências que só os fiéis entendem deixam o episódio invisível para quem chega agora." },
        ],
      },
      {
        heading: "Uma rotina simples para titular",
        paragraphs: [
          "Escreva pelo menos dez opções com fórmulas diferentes, separe três e leia-as no celular como um ouvinte veria. Escolha a que deixa mais claro o benefício. Com o tempo, compare os downloads da primeira semana por estilo de título para aprender a que sua audiência responde.",
        ],
      },
    ],
    faqs: [
      {
        question: "Devo colocar o número do episódio no título?",
        answer:
          "Normalmente não. Os feeds de podcast têm um campo próprio para o número do episódio que os apps podem exibir; repeti-lo no título ocupa espaço que seria melhor usado para o tema. A principal exceção são programas seriados em que a ordem importa.",
      },
      {
        question: "Qual deve ser o tamanho do título de um episódio?",
        answer:
          "Não existe um limite oficial que valha em todo lugar, mas mais curto é mais seguro. Coloque a ideia principal nas primeiras palavras para que ela sobreviva ao corte em celulares, carros e relógios.",
      },
      {
        question: "Posso mudar o título de um episódio já publicado?",
        answer:
          "Sim. Atualize na sua hospedagem e a mudança chega ao feed RSS; os apps podem levar algum tempo para atualizar. Não altere o GUID do episódio, ou os apps podem tratá-lo como um episódio novo.",
      },
    ],
  },
};
