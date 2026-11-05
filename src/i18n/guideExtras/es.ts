import type { GuideExtrasRecord } from "./types";

export const esGuideExtras: GuideExtrasRecord = {
  "podcast-sponsorship-cpm-guide-2026": {
    metaTitle: "Guía de Patrocinio y CPM para Podcasts 2026 | Pod Studio",
    readMinutes: 5,
    sections: [
      {
        heading: "Ejemplo práctico: cómo tarifar un episodio",
        paragraphs: [
          "Supón que tus episodios promedian 5.000 descargas en sus primeros 30 días. Divide entre 1.000 para obtener 5 «unidades» y multiplica por el CPM de cada espacio.",
          "Con 18 $ por un pre-roll, 25 $ por un mid-roll leído por el presentador y 10 $ por un post-roll, un episodio totalmente vendido vale 90 $ + 125 $ + 50 $ = 265 $. Si publicas cuatro episodios al mes y vendes todos los espacios, son unos 1.060 $ al mes antes de comisiones de agencia o red.",
        ],
        formula: "5.000 ÷ 1.000 = 5 → (5 × 18 $) + (5 × 25 $) + (5 × 10 $) = 265 $ por episodio",
      },
      {
        heading: "Anuncios leídos por el presentador vs. programáticos",
        paragraphs: [
          "Los anuncios leídos por el presentador los redacta o aprueba el patrocinador y se leen con tu propia voz. La audiencia confía en ellos, por eso tienen las tarifas más altas. Pueden grabarse dentro del episodio o insertarse dinámicamente para cambiarlos más adelante.",
          "Los anuncios programáticos se compran automáticamente a través de una red publicitaria y los inserta tu plataforma de hosting. Suelen pagar CPM más bajos, pero llenan el inventario que no has vendido directamente, algo útil para episodios antiguos que siguen recibiendo descargas.",
        ],
      },
      {
        heading: "Qué incluir en una propuesta para patrocinadores",
        paragraphs: ["Los patrocinadores quieren valorar rápido el encaje y el riesgo. Un media kit de una página debería incluir:"],
        list: [
          { title: "Perfil de la audiencia", description: "Quién escucha, qué le interesa y por qué encaja con los clientes del patrocinador." },
          { title: "Descargas verificadas", description: "Media de descargas a 30 días por episodio, con capturas de tu hosting si te las piden." },
          { title: "Espacios y tarifas", description: "Qué espacios hay disponibles, su duración y tu CPM o precio cerrado." },
          { title: "Pruebas de resultados", description: "Una lectura de ejemplo, resultados anteriores o un código promocional que permita medir la respuesta." },
        ],
      },
      {
        heading: "Opciones para programas pequeños",
        paragraphs: [
          "Si los acuerdos por CPM aún no salen a cuenta, muchos programas independientes empiezan con una tarifa fija por episodio, enlaces de afiliado o códigos promocionales que pagan por venta, y apoyo directo de oyentes mediante membresías. Así construyes un historial con el que negociar acuerdos por CPM a medida que crece tu audiencia.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuál es un buen CPM para un podcast pequeño?",
        answer:
          "No hay una tarifa fija. Los rangos de esta guía son un punto de partida: los programas de nicho con una audiencia muy definida y con intención de compra suelen cobrar más, y los de entretenimiento general, menos. Muchos programas pequeños empiezan con acuerdos fijos o de afiliación y pasan al CPM cuando sus descargas son estables.",
      },
      {
        question: "¿Cuántas descargas necesito para conseguir patrocinadores?",
        answer:
          "No existe un umbral universal. Las redes publicitarias suelen fijar mínimos de descargas, pero los patrocinadores directos de un nicho concreto pueden trabajar con programas más pequeños si la audiencia encaja bien. La constancia y unos datos fiables importan más que una cifra grande.",
      },
      {
        question: "¿Los patrocinadores pagan por descarga o por episodio?",
        answer:
          "Los acuerdos por CPM se pagan por cada 1.000 descargas, normalmente contadas durante los primeros 30–45 días. Algunos patrocinadores prefieren una tarifa fija por episodio o por campaña, y los acuerdos de afiliación pagan por venta o registro. Acordad siempre por escrito cómo se miden y reportan las descargas.",
      },
    ],
  },
  "apple-spotify-cover-art-specs-guide": {
    metaTitle: "Portada de Podcast: Medidas Apple y Spotify | Pod Studio",
    readMinutes: 5,
    sections: [
      {
        heading: "Diseña primero para la miniatura",
        paragraphs: [
          "La mayoría de la gente ve tu portada por primera vez del tamaño de la yema de un dedo: en búsquedas, rankings y listas de «a continuación». Una portada que luce bien a tamaño completo puede convertirse en una mancha ilegible al reducirse.",
        ],
        list: [
          { title: "Pocas palabras y grandes", description: "Normalmente basta con el nombre del programa en una tipografía contundente. Deja los eslóganes para la descripción." },
          { title: "Máximo contraste", description: "Texto claro sobre oscuro u oscuro sobre claro. Evita fotos recargadas detrás del texto." },
          { title: "Un único punto focal", description: "Una cara, un icono o el título, no los tres compitiendo por la atención." },
        ],
      },
      {
        heading: "Zonas seguras y recortes",
        paragraphs: [
          "Algunas apps redondean las esquinas o superponen pequeñas insignias. Mantén el título, el logo y las caras dentro de la zona central del cuadrado —aproximadamente el 80 % central— para que no se corte nada importante.",
        ],
      },
      {
        heading: "Motivos habituales de rechazo",
        paragraphs: ["Además del tamaño y el formato, los directorios revisan el contenido y la calidad. Evita:"],
        list: [
          { title: "Logos y marcas de las plataformas", description: "No uses los logos de Apple Podcasts o Spotify ni sugieras un respaldo que no tienes." },
          { title: "Imágenes de baja resolución o deformadas", description: "Una portada ampliada, borrosa o estirada puede ser rechazada o parecer poco profesional." },
          { title: "Imágenes explícitas o engañosas", description: "La portada debe ser apropiada y representar el programa con honestidad." },
        ],
      },
      {
        heading: "Lista de comprobación antes de subirla",
        paragraphs: ["Antes de subirla, confirma que tu archivo:"],
        list: [
          { title: "Es cuadrado de 3000 × 3000 px", description: "Exactamente 1:1, dentro del rango de 1400–3000 px." },
          { title: "Es JPEG o PNG en RGB", description: "Usa el espacio de color RGB, no CMYK, con la extensión .jpg o .png correcta." },
          { title: "Se lee a 50 × 50 px", description: "Compruébalo en una vista previa pequeña antes de publicar." },
          { title: "Tiene un nombre de archivo nuevo", description: "Al actualizar la portada, un nombre nuevo ayuda a que las apps detecten el cambio." },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué tamaño debe tener la portada de un podcast?",
        answer:
          "Usa una imagen cuadrada de 3000 × 3000 píxeles. Apple Podcasts acepta de 1400 × 1400 a 3000 × 3000 píxeles en JPEG o PNG con espacio de color RGB; un cuadrado de 3000 px también sirve para Spotify y otras apps.",
      },
      {
        question: "¿Puedo usar la misma portada en Apple Podcasts y Spotify?",
        answer:
          "Sí. Ambas leen la portada de tu feed RSS o de la configuración de tu hosting, así que un único cuadrado de 3000 × 3000 px que cumpla los requisitos de Apple funciona en las principales apps.",
      },
      {
        question: "¿Por qué no aparece mi nueva portada?",
        answer:
          "Las apps de podcasts guardan la portada en caché, por lo que los cambios pueden tardar de horas a varios días. Asegúrate de que tu feed apunta a la URL de la nueva imagen —usar un nombre de archivo nuevo ayuda— y de que sigue cumpliendo el tamaño y el formato exigidos.",
      },
    ],
  },
  "how-to-write-clickable-episode-titles": {
    metaTitle: "Cómo Escribir Títulos de Episodios de Podcast | Pod Studio",
    description:
      "Fórmulas probadas para títulos de episodios de podcast que destacan en Apple Podcasts y Spotify, con ejemplos, consejos de búsqueda y errores que evitar.",
    firstHeading: "Por qué importa tanto el título del episodio",
    readMinutes: 5,
    sections: [
      {
        heading: "Cinco fórmulas más para probar",
        paragraphs: ["Combínalas con los tres arquetipos anteriores para explorar distintos ángulos del mismo episodio:"],
        list: [
          { title: "4. La promesa práctica", description: "«Cómo lanzar un podcast con 100 € de presupuesto»: claro, buscable y útil." },
          { title: "5. La lista numerada", description: "«7 preguntas de entrevista que sacan mejores historias»: fija expectativas de un vistazo." },
          { title: "6. El gancho del invitado", description: "«[Nombre del invitado] sobre crear una marca sin redes sociales»: cuando el invitado es el atractivo." },
          { title: "7. La pregunta directa", description: "«¿Ha muerto el email en frío en 2026?»: invita a descubrir la respuesta." },
          { title: "8. El marco del error", description: "«El error de precios que nos costó el primer año»: algo concreto en juego y una lección real." },
        ],
      },
      {
        heading: "Títulos y búsqueda de podcasts",
        paragraphs: [
          "Los buscadores de Apple Podcasts y Spotify tienen en cuenta las palabras de los títulos y descripciones del programa y de los episodios. Usar las palabras que tus oyentes escribirían —«presupuesto», «entrenar un maratón», «true crime España»— ayuda a que te encuentren las personas adecuadas.",
          "Colócalas al principio, porque los títulos suelen cortarse en pantallas pequeñas. Un tema claro al inicio gana a una frase ingeniosa que solo se entiende después de escuchar.",
        ],
      },
      {
        heading: "Errores comunes en los títulos",
        paragraphs: ["Estos hábitos restan reproducciones sin que te des cuenta:"],
        list: [
          { title: "Empezar por el número de episodio", description: "Las apps ya muestran el número; «Ep. 112:» desperdicia los caracteres más visibles." },
          { title: "Adelantos vagos", description: "«Una gran conversación» no le dice a un oyente nuevo por qué darle al play." },
          { title: "Clickbait que no cumple", description: "Prometer de más provoca abandonos tempranos y malas reseñas." },
          { title: "Bromas internas", description: "Las referencias que solo entienden los habituales hacen el episodio invisible para los nuevos." },
        ],
      },
      {
        heading: "Una rutina sencilla para titular",
        paragraphs: [
          "Escribe al menos diez opciones con distintas fórmulas, quédate con tres y léelas en tu móvil como las vería un oyente. Elige la que deja más clara la recompensa. Con el tiempo, compara las descargas de la primera semana según el estilo de título para aprender a qué responde tu audiencia.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Debo poner el número de episodio en el título?",
        answer:
          "Normalmente no. Los feeds de podcast tienen un campo propio para el número de episodio que las apps pueden mostrar, así que repetirlo en el título ocupa espacio que es mejor dedicar al tema. La excepción principal son los programas seriados en los que el orden importa.",
      },
      {
        question: "¿Qué longitud debe tener el título de un episodio?",
        answer:
          "No hay un límite oficial que valga en todas partes, pero lo corto es más seguro. Mantén la idea principal en las primeras palabras para que sobreviva al recorte en móviles, coches y relojes.",
      },
      {
        question: "¿Puedo cambiar el título de un episodio ya publicado?",
        answer:
          "Sí. Actualízalo en tu plataforma de hosting y el cambio llegará a tu feed RSS; las apps pueden tardar algo en refrescarse. No cambies el GUID del episodio o las apps podrían tratarlo como uno nuevo.",
      },
    ],
  },
};
