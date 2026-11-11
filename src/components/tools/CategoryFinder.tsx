"use client";

import React, { useState, useMemo } from "react";
import { FolderSearch, Search, Copy, Check, Sparkles, Filter } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

interface CategoryData {
  primary: string;
  subcategories: string[];
  competition: "Very High" | "High" | "Moderate" | "Low Opportunity";
  tip: string;
}

const OFFICIAL_TAXONOMY: CategoryData[] = [
  {
    primary: "Business",
    subcategories: ["Careers", "Entrepreneurship", "Investing", "Management", "Marketing", "Non-Profit"],
    competition: "Very High",
    tip: "Highly competitive at top level. Niche into 'Management' or 'Careers' for faster chart ranking.",
  },
  {
    primary: "Technology",
    subcategories: ["AI & Machine Learning", "Tech News", "Software Engineering", "Cybersecurity"],
    competition: "High",
    tip: "Tech has high CPM sponsors. Subcategories give better algorithmic discovery on Apple Podcasts.",
  },
  {
    primary: "Health & Fitness",
    subcategories: ["Alternative Health", "Fitness", "Medicine", "Mental Health", "Nutrition", "Sexuality"],
    competition: "High",
    tip: "'Mental Health' and 'Nutrition' have dedicated loyal audiences but high medical scrutiny.",
  },
  {
    primary: "Education",
    subcategories: ["Courses", "How To", "Language Learning", "Self-Improvement"],
    competition: "Moderate",
    tip: "'How To' and 'Language Learning' have strong search intent with steady evergreen downloads.",
  },
  {
    primary: "True Crime",
    subcategories: ["Investigative", "Historical Crime", "Courtroom", "Serial Cases"],
    competition: "Very High",
    tip: "Massive listener appetite, but requires high narrative audio production value.",
  },
  {
    primary: "Leisure",
    subcategories: ["Animation & Manga", "Automotive", "Aviation", "Crafts", "Games", "Hobbies", "Home & Garden", "Video Games"],
    competition: "Low Opportunity",
    tip: "Excellent low-competition gem! 'Aviation', 'Crafts', and 'Automotive' have passionate micro-audiences.",
  },
  {
    primary: "Science",
    subcategories: ["Astronomy", "Chemistry", "Earth Sciences", "Life Sciences", "Mathematics", "Nature", "Physics", "Social Sciences"],
    competition: "Moderate",
    tip: "'Earth Sciences' and 'Astronomy' rank easily in top category charts with consistent release schedules.",
  },
  {
    primary: "Arts",
    subcategories: ["Books", "Design", "Fashion & Beauty", "Food", "Performing Arts", "Visual Arts"],
    competition: "Moderate",
    tip: "'Design' and 'Books' have high affiliate and sponsorship conversion potential.",
  },
  {
    primary: "History",
    subcategories: ["Ancient History", "Military History", "Biographies", "Cultural History"],
    competition: "Moderate",
    tip: "One of the highest retention genres in podcasting. Listeners consume full multi-hour archives.",
  },
  {
    primary: "Society & Culture",
    subcategories: ["Documentary", "Personal Journals", "Philosophy", "Places & Travel", "Relationships"],
    competition: "Very High",
    tip: "Broad catchment area. Choose specific subcategories to avoid being drowned out.",
  },
  {
    primary: "Sports",
    subcategories: ["Running", "Basketball", "Football", "Golf", "Soccer", "Tennis", "Wilderness"],
    competition: "High",
    tip: "Local team coverage or niche sports (like 'Running' and 'Wilderness') achieve top chart ranks rapidly.",
  },
];

// Display text only: the copied <itunes:category> XML must keep Apple's official English names (OFFICIAL_TAXONOMY above).
type CatUi = {
  title: string; sub: string; ph: string; hint: string; copyTag: (p: string) => string; clickTitle: string;
  comp: Record<CategoryData["competition"], string>;
};
type CatLoc = CatUi & { p: string[]; s: string[][]; tips: string[] };

const EN_UI: CatUi = {
  title: "Apple Podcasts & Spotify 2026 Taxonomy Explorer", sub: "Search official genres to find high-growth, low-competition subcategories for your show.",
  ph: "Search category (e.g. AI, gaming, design)...", hint: "Click any subcategory to copy XML tag", copyTag: (p) => `Copy <${p}> Tag`, clickTitle: "Click to copy iTunes XML tag",
  comp: { "Very High": "Very High", High: "High", Moderate: "Moderate", "Low Opportunity": "Low Opportunity" },
};

const LOC: Partial<Record<SupportedLocale, CatLoc>> = {
  es: {
    title: "Explorador de categorías 2026 de Apple Podcasts y Spotify", sub: "Busca géneros oficiales para encontrar subcategorías de alto crecimiento y poca competencia para tu programa.",
    ph: "Buscar categoría (p. ej. IA, videojuegos, diseño)...", hint: "Haz clic en una subcategoría para copiar su etiqueta XML", copyTag: (p) => `Copiar etiqueta <${p}>`, clickTitle: "Haz clic para copiar la etiqueta XML de iTunes",
    comp: { "Very High": "Muy alta", High: "Alta", Moderate: "Moderada", "Low Opportunity": "Oportunidad (baja competencia)" },
    p: ["Negocios", "Tecnología", "Salud y bienestar", "Educación", "Crimen real", "Ocio", "Ciencia", "Artes", "Historia", "Sociedad y cultura", "Deportes"],
    s: [["Carreras", "Emprendimiento", "Inversión", "Gestión", "Marketing", "Sin ánimo de lucro"], ["IA y aprendizaje automático", "Noticias tecnológicas", "Ingeniería de software", "Ciberseguridad"], ["Salud alternativa", "Fitness", "Medicina", "Salud mental", "Nutrición", "Sexualidad"], ["Cursos", "Cómo hacer", "Aprendizaje de idiomas", "Superación personal"], ["Investigación", "Crímenes históricos", "Juicios", "Casos en serie"], ["Animación y manga", "Automoción", "Aviación", "Manualidades", "Juegos", "Aficiones", "Hogar y jardín", "Videojuegos"], ["Astronomía", "Química", "Ciencias de la Tierra", "Ciencias de la vida", "Matemáticas", "Naturaleza", "Física", "Ciencias sociales"], ["Libros", "Diseño", "Moda y belleza", "Gastronomía", "Artes escénicas", "Artes visuales"], ["Historia antigua", "Historia militar", "Biografías", "Historia cultural"], ["Documental", "Diarios personales", "Filosofía", "Lugares y viajes", "Relaciones"], ["Running", "Baloncesto", "Fútbol americano", "Golf", "Fútbol", "Tenis", "Naturaleza salvaje"]],
    tips: ["Muy competitiva en el nivel superior. Especialízate en «Gestión» o «Carreras» para subir antes en las listas.", "Tecnología atrae patrocinadores con CPM altos. Las subcategorías mejoran el descubrimiento algorítmico en Apple Podcasts.", "«Salud mental» y «Nutrición» tienen audiencias fieles y dedicadas, pero con mucho escrutinio médico.", "«Cómo hacer» y «Aprendizaje de idiomas» tienen una fuerte intención de búsqueda y descargas constantes a largo plazo.", "Enorme apetito de oyentes, pero exige una producción de audio narrativa de alta calidad.", "¡Una joya de baja competencia! «Aviación», «Manualidades» y «Automoción» tienen microaudiencias apasionadas.", "«Ciencias de la Tierra» y «Astronomía» llegan fácilmente a lo alto de las listas con un calendario de publicación constante.", "«Diseño» y «Libros» tienen gran potencial de conversión en afiliación y patrocinio.", "Uno de los géneros con mayor retención del pódcast. Los oyentes consumen archivos completos de varias horas.", "Área de captación muy amplia. Elige subcategorías específicas para no quedar sepultado.", "La cobertura de equipos locales o deportes de nicho (como «Running» y «Naturaleza salvaje») sube rápido en las listas."],
  },
  fr: {
    title: "Explorateur de catégories 2026 d'Apple Podcasts et Spotify", sub: "Recherchez les genres officiels pour trouver des sous-catégories à forte croissance et faible concurrence pour votre émission.",
    ph: "Rechercher une catégorie (ex. IA, jeux, design)...", hint: "Cliquez sur une sous-catégorie pour copier sa balise XML", copyTag: (p) => `Copier la balise <${p}>`, clickTitle: "Cliquez pour copier la balise XML iTunes",
    comp: { "Very High": "Très élevée", High: "Élevée", Moderate: "Modérée", "Low Opportunity": "Opportunité (faible concurrence)" },
    p: ["Business", "Technologie", "Santé et forme", "Éducation", "Faits divers", "Loisirs", "Sciences", "Arts", "Histoire", "Société et culture", "Sports"],
    s: [["Carrières", "Entrepreneuriat", "Investissement", "Management", "Marketing", "Associatif"], ["IA et apprentissage automatique", "Actualité tech", "Génie logiciel", "Cybersécurité"], ["Santé alternative", "Fitness", "Médecine", "Santé mentale", "Nutrition", "Sexualité"], ["Cours", "Tutoriels", "Apprentissage des langues", "Développement personnel"], ["Enquêtes", "Crimes historiques", "Procès", "Affaires en série"], ["Animation et manga", "Automobile", "Aviation", "Loisirs créatifs", "Jeux", "Passe-temps", "Maison et jardin", "Jeux vidéo"], ["Astronomie", "Chimie", "Sciences de la Terre", "Sciences de la vie", "Mathématiques", "Nature", "Physique", "Sciences sociales"], ["Livres", "Design", "Mode et beauté", "Cuisine", "Arts de la scène", "Arts visuels"], ["Histoire ancienne", "Histoire militaire", "Biographies", "Histoire culturelle"], ["Documentaire", "Journaux intimes", "Philosophie", "Lieux et voyages", "Relations"], ["Course à pied", "Basketball", "Football américain", "Golf", "Football", "Tennis", "Nature sauvage"]],
    tips: ["Très concurrentiel au niveau supérieur. Visez « Management » ou « Carrières » pour grimper plus vite dans les classements.", "La tech attire des sponsors à CPM élevé. Les sous-catégories améliorent la découverte algorithmique sur Apple Podcasts.", "« Santé mentale » et « Nutrition » ont des audiences fidèles, mais font l'objet d'une forte vigilance médicale.", "« Tutoriels » et « Apprentissage des langues » ont une forte intention de recherche et des téléchargements réguliers dans la durée.", "Un énorme appétit des auditeurs, mais une production audio narrative de grande qualité est indispensable.", "Une perle à faible concurrence ! « Aviation », « Loisirs créatifs » et « Automobile » ont des micro-audiences passionnées.", "« Sciences de la Terre » et « Astronomie » montent facilement dans les classements avec un rythme de publication régulier.", "« Design » et « Livres » ont un fort potentiel de conversion en affiliation et sponsoring.", "L'un des genres à plus forte rétention du podcast. Les auditeurs consomment des archives entières de plusieurs heures.", "Zone de chalandise très large. Choisissez des sous-catégories précises pour ne pas être noyé.", "La couverture d'équipes locales ou de sports de niche (comme « Course à pied » et « Nature sauvage ») atteint vite le haut des classements."],
  },
  de: {
    title: "Kategorie-Explorer 2026 für Apple Podcasts & Spotify", sub: "Durchsuche die offiziellen Genres, um wachstumsstarke Unterkategorien mit wenig Konkurrenz für deine Show zu finden.",
    ph: "Kategorie suchen (z. B. KI, Gaming, Design)...", hint: "Klicke auf eine Unterkategorie, um das XML-Tag zu kopieren", copyTag: (p) => `<${p}>-Tag kopieren`, clickTitle: "Klicken, um das iTunes-XML-Tag zu kopieren",
    comp: { "Very High": "Sehr hoch", High: "Hoch", Moderate: "Mittel", "Low Opportunity": "Chance (wenig Konkurrenz)" },
    p: ["Wirtschaft", "Technologie", "Gesundheit & Fitness", "Bildung", "True Crime", "Freizeit", "Wissenschaft", "Kunst", "Geschichte", "Gesellschaft & Kultur", "Sport"],
    s: [["Karriere", "Unternehmertum", "Investieren", "Management", "Marketing", "Non-Profit"], ["KI & maschinelles Lernen", "Tech-News", "Softwareentwicklung", "Cybersicherheit"], ["Alternative Gesundheit", "Fitness", "Medizin", "Psychische Gesundheit", "Ernährung", "Sexualität"], ["Kurse", "Anleitungen", "Sprachenlernen", "Selbstverbesserung"], ["Ermittlungen", "Historische Verbrechen", "Gerichtssaal", "Serienfälle"], ["Animation & Manga", "Automobil", "Luftfahrt", "Handwerk", "Spiele", "Hobbys", "Haus & Garten", "Videospiele"], ["Astronomie", "Chemie", "Geowissenschaften", "Biowissenschaften", "Mathematik", "Natur", "Physik", "Sozialwissenschaften"], ["Bücher", "Design", "Mode & Beauty", "Essen", "Darstellende Künste", "Bildende Kunst"], ["Antike", "Militärgeschichte", "Biografien", "Kulturgeschichte"], ["Dokumentation", "Persönliche Tagebücher", "Philosophie", "Orte & Reisen", "Beziehungen"], ["Laufen", "Basketball", "American Football", "Golf", "Fußball", "Tennis", "Wildnis"]],
    tips: ["Auf oberster Ebene sehr umkämpft. Spezialisiere dich auf „Management“ oder „Karriere“, um schneller in die Charts zu kommen.", "Tech hat Sponsoren mit hohem TKP. Unterkategorien verbessern die algorithmische Auffindbarkeit bei Apple Podcasts.", "„Psychische Gesundheit“ und „Ernährung“ haben treue Zielgruppen, stehen aber unter starker medizinischer Beobachtung.", "„Anleitungen“ und „Sprachenlernen“ haben starke Suchabsicht und stetige Evergreen-Downloads.", "Riesiger Hörerhunger, erfordert aber hochwertige erzählerische Audioproduktion.", "Eine Perle mit wenig Konkurrenz! „Luftfahrt“, „Handwerk“ und „Automobil“ haben leidenschaftliche Mikro-Zielgruppen.", "„Geowissenschaften“ und „Astronomie“ erreichen mit regelmäßigem Veröffentlichungsplan leicht die oberen Kategorie-Charts.", "„Design“ und „Bücher“ haben hohes Affiliate- und Sponsoring-Potenzial.", "Eines der Genres mit der höchsten Hörerbindung. Hörer konsumieren ganze mehrstündige Archive.", "Breites Einzugsgebiet. Wähle spezifische Unterkategorien, um nicht unterzugehen.", "Lokale Teamberichte oder Nischensportarten (wie „Laufen“ und „Wildnis“) erreichen schnell Spitzenplätze."],
  },
  it: {
    title: "Esploratore delle categorie 2026 di Apple Podcasts e Spotify", sub: "Cerca tra i generi ufficiali per trovare sottocategorie ad alta crescita e bassa concorrenza per il tuo programma.",
    ph: "Cerca categoria (es. IA, gaming, design)...", hint: "Clicca su una sottocategoria per copiare il tag XML", copyTag: (p) => `Copia tag <${p}>`, clickTitle: "Clicca per copiare il tag XML di iTunes",
    comp: { "Very High": "Molto alta", High: "Alta", Moderate: "Moderata", "Low Opportunity": "Opportunità (bassa concorrenza)" },
    p: ["Business", "Tecnologia", "Salute e fitness", "Istruzione", "True crime", "Tempo libero", "Scienza", "Arte", "Storia", "Società e cultura", "Sport"],
    s: [["Carriere", "Imprenditoria", "Investimenti", "Management", "Marketing", "Non profit"], ["IA e machine learning", "Notizie tech", "Ingegneria del software", "Cybersecurity"], ["Salute alternativa", "Fitness", "Medicina", "Salute mentale", "Nutrizione", "Sessualità"], ["Corsi", "Guide pratiche", "Apprendimento delle lingue", "Crescita personale"], ["Inchieste", "Crimini storici", "Aule di tribunale", "Casi seriali"], ["Animazione e manga", "Automotive", "Aviazione", "Artigianato", "Giochi", "Hobby", "Casa e giardino", "Videogiochi"], ["Astronomia", "Chimica", "Scienze della Terra", "Scienze della vita", "Matematica", "Natura", "Fisica", "Scienze sociali"], ["Libri", "Design", "Moda e bellezza", "Cibo", "Arti performative", "Arti visive"], ["Storia antica", "Storia militare", "Biografie", "Storia culturale"], ["Documentario", "Diari personali", "Filosofia", "Luoghi e viaggi", "Relazioni"], ["Corsa", "Basket", "Football americano", "Golf", "Calcio", "Tennis", "Natura selvaggia"]],
    tips: ["Molto competitiva al livello principale. Specializzati in «Management» o «Carriere» per salire più in fretta in classifica.", "La tecnologia attira sponsor con CPM alti. Le sottocategorie migliorano la scoperta algoritmica su Apple Podcasts.", "«Salute mentale» e «Nutrizione» hanno pubblici fedeli ma un forte controllo medico.", "«Guide pratiche» e «Apprendimento delle lingue» hanno forte intento di ricerca e download evergreen costanti.", "Enorme appetito degli ascoltatori, ma richiede una produzione audio narrativa di alta qualità.", "Una gemma a bassa concorrenza! «Aviazione», «Artigianato» e «Automotive» hanno micro-pubblici appassionati.", "«Scienze della Terra» e «Astronomia» salgono facilmente nelle classifiche di categoria con un calendario di uscite costante.", "«Design» e «Libri» hanno un alto potenziale di conversione per affiliazioni e sponsorizzazioni.", "Uno dei generi con la più alta fidelizzazione nel podcasting. Gli ascoltatori consumano interi archivi di molte ore.", "Bacino molto ampio. Scegli sottocategorie specifiche per non essere sommerso.", "La copertura di squadre locali o sport di nicchia (come «Corsa» e «Natura selvaggia») raggiunge presto le prime posizioni."],
  },
  pt: {
    title: "Explorador de categorias 2026 do Apple Podcasts e Spotify", sub: "Pesquise os gêneros oficiais para encontrar subcategorias de alto crescimento e baixa concorrência para o seu programa.",
    ph: "Pesquisar categoria (ex.: IA, games, design)...", hint: "Clique em uma subcategoria para copiar a tag XML", copyTag: (p) => `Copiar tag <${p}>`, clickTitle: "Clique para copiar a tag XML do iTunes",
    comp: { "Very High": "Muito alta", High: "Alta", Moderate: "Moderada", "Low Opportunity": "Oportunidade (baixa concorrência)" },
    p: ["Negócios", "Tecnologia", "Saúde e fitness", "Educação", "True crime", "Lazer", "Ciência", "Artes", "História", "Sociedade e cultura", "Esportes"],
    s: [["Carreiras", "Empreendedorismo", "Investimentos", "Gestão", "Marketing", "Sem fins lucrativos"], ["IA e aprendizado de máquina", "Notícias de tecnologia", "Engenharia de software", "Cibersegurança"], ["Saúde alternativa", "Fitness", "Medicina", "Saúde mental", "Nutrição", "Sexualidade"], ["Cursos", "Como fazer", "Aprendizado de idiomas", "Autodesenvolvimento"], ["Investigativo", "Crimes históricos", "Tribunal", "Casos em série"], ["Animação e mangá", "Automotivo", "Aviação", "Artesanato", "Jogos", "Hobbies", "Casa e jardim", "Videogames"], ["Astronomia", "Química", "Ciências da Terra", "Ciências da vida", "Matemática", "Natureza", "Física", "Ciências sociais"], ["Livros", "Design", "Moda e beleza", "Gastronomia", "Artes cênicas", "Artes visuais"], ["História antiga", "História militar", "Biografias", "História cultural"], ["Documentário", "Diários pessoais", "Filosofia", "Lugares e viagens", "Relacionamentos"], ["Corrida", "Basquete", "Futebol americano", "Golfe", "Futebol", "Tênis", "Natureza selvagem"]],
    tips: ["Muito competitiva no nível principal. Especialize-se em “Gestão” ou “Carreiras” para subir mais rápido nas paradas.", "Tecnologia atrai patrocinadores com CPM alto. As subcategorias melhoram a descoberta algorítmica no Apple Podcasts.", "“Saúde mental” e “Nutrição” têm públicos fiéis e dedicados, mas com muito escrutínio médico.", "“Como fazer” e “Aprendizado de idiomas” têm forte intenção de busca e downloads perenes constantes.", "Enorme apetite dos ouvintes, mas exige produção de áudio narrativa de alta qualidade.", "Uma joia de baixa concorrência! “Aviação”, “Artesanato” e “Automotivo” têm microaudiências apaixonadas.", "“Ciências da Terra” e “Astronomia” chegam facilmente ao topo das paradas da categoria com um calendário de lançamentos consistente.", "“Design” e “Livros” têm alto potencial de conversão em afiliados e patrocínios.", "Um dos gêneros de maior retenção do podcasting. Os ouvintes consomem acervos inteiros de várias horas.", "Área de captação ampla. Escolha subcategorias específicas para não ficar perdido.", "Cobertura de times locais ou esportes de nicho (como “Corrida” e “Natureza selvagem”) sobe rapidamente nas paradas."],
  },
  ja: {
    title: "Apple Podcasts＆Spotify 2026年カテゴリ探索ツール", sub: "公式ジャンルを検索して、あなたの番組に合う成長性が高く競合の少ないサブカテゴリを見つけましょう。",
    ph: "カテゴリを検索（例：AI、ゲーム、デザイン）…", hint: "サブカテゴリをクリックするとXMLタグをコピーできます", copyTag: (p) => `<${p}>タグをコピー`, clickTitle: "クリックしてiTunes XMLタグをコピー",
    comp: { "Very High": "非常に高い", High: "高い", Moderate: "中程度", "Low Opportunity": "狙い目（競合が少ない）" },
    p: ["ビジネス", "テクノロジー", "健康・フィットネス", "教育", "実録犯罪", "レジャー", "科学", "アート", "歴史", "社会・文化", "スポーツ"],
    s: [["キャリア", "起業", "投資", "マネジメント", "マーケティング", "非営利"], ["AI・機械学習", "テックニュース", "ソフトウェア開発", "サイバーセキュリティ"], ["代替医療", "フィットネス", "医学", "メンタルヘルス", "栄養", "セクシュアリティ"], ["講座", "ハウツー", "語学学習", "自己啓発"], ["調査報道", "歴史的事件", "法廷", "連続事件"], ["アニメ・マンガ", "自動車", "航空", "クラフト", "ゲーム", "趣味", "住まい・ガーデン", "ビデオゲーム"], ["天文学", "化学", "地球科学", "生命科学", "数学", "自然", "物理学", "社会科学"], ["書籍", "デザイン", "ファッション・美容", "フード", "舞台芸術", "視覚芸術"], ["古代史", "軍事史", "伝記", "文化史"], ["ドキュメンタリー", "個人の日記", "哲学", "場所・旅行", "人間関係"], ["ランニング", "バスケットボール", "アメリカンフットボール", "ゴルフ", "サッカー", "テニス", "アウトドア"]],
    tips: ["最上位は競争が非常に激しいカテゴリです。「マネジメント」や「キャリア」に絞るとランキング入りが早まります。", "テックはCPMの高いスポンサーがつきます。サブカテゴリを使うとApple Podcastsでの発見されやすさが高まります。", "「メンタルヘルス」と「栄養」には熱心な固定ファンがいますが、医療面での目も厳しくなります。", "「ハウツー」と「語学学習」は検索意図が強く、長期的に安定したダウンロードが見込めます。", "リスナーの需要は非常に大きいものの、高品質な物語性のある音声制作が求められます。", "競合が少ない穴場です！「航空」「クラフト」「自動車」には熱心なマイクロオーディエンスがいます。", "「地球科学」と「天文学」は、安定した配信スケジュールがあればカテゴリ上位に入りやすいです。", "「デザイン」と「書籍」はアフィリエイトやスポンサーの成約率が高い傾向があります。", "ポッドキャストで最もリテンションが高いジャンルの一つ。リスナーは数時間分の過去回をまとめて聴きます。", "間口が広いため、埋もれないよう具体的なサブカテゴリを選びましょう。", "地元チームやニッチなスポーツ（「ランニング」「アウトドア」など）は、短期間で上位にランクインできます。"],
  },
  ko: {
    title: "Apple Podcasts & Spotify 2026 카테고리 탐색기", sub: "공식 장르를 검색해 내 프로그램에 맞는 성장성 높고 경쟁이 적은 하위 카테고리를 찾아보세요.",
    ph: "카테고리 검색 (예: AI, 게임, 디자인)...", hint: "하위 카테고리를 클릭하면 XML 태그가 복사됩니다", copyTag: (p) => `<${p}> 태그 복사`, clickTitle: "클릭하여 iTunes XML 태그 복사",
    comp: { "Very High": "매우 높음", High: "높음", Moderate: "보통", "Low Opportunity": "기회 (낮은 경쟁)" },
    p: ["비즈니스", "기술", "건강 및 피트니스", "교육", "실화 범죄", "여가", "과학", "예술", "역사", "사회 및 문화", "스포츠"],
    s: [["커리어", "창업", "투자", "경영", "마케팅", "비영리"], ["AI 및 머신러닝", "기술 뉴스", "소프트웨어 엔지니어링", "사이버 보안"], ["대체 의학", "피트니스", "의학", "정신 건강", "영양", "성"], ["강좌", "하우투", "언어 학습", "자기계발"], ["탐사", "역사적 범죄", "법정", "연쇄 사건"], ["애니메이션 및 만화", "자동차", "항공", "공예", "게임", "취미", "집 및 정원", "비디오 게임"], ["천문학", "화학", "지구과학", "생명과학", "수학", "자연", "물리학", "사회과학"], ["도서", "디자인", "패션 및 뷰티", "음식", "공연 예술", "시각 예술"], ["고대사", "군사사", "전기", "문화사"], ["다큐멘터리", "개인 일기", "철학", "장소 및 여행", "관계"], ["러닝", "농구", "미식축구", "골프", "축구", "테니스", "야생"]],
    tips: ["최상위 레벨은 경쟁이 매우 치열합니다. '경영'이나 '커리어'로 좁히면 차트 진입이 더 빠릅니다.", "기술 분야는 CPM이 높은 스폰서가 많습니다. 하위 카테고리는 Apple Podcasts에서 알고리즘 노출에 유리합니다.", "'정신 건강'과 '영양'은 충성도 높은 청취자가 있지만 의학적 검증이 엄격합니다.", "'하우투'와 '언어 학습'은 검색 의도가 강하고 꾸준한 장기 다운로드가 나옵니다.", "청취자 수요가 매우 크지만 높은 수준의 서사형 오디오 제작이 필요합니다.", "경쟁이 낮은 숨은 보석입니다! '항공', '공예', '자동차'에는 열정적인 소규모 청중이 있습니다.", "'지구과학'과 '천문학'은 꾸준한 발행 일정만 있으면 카테고리 상위 차트에 쉽게 오릅니다.", "'디자인'과 '도서'는 제휴 및 스폰서십 전환 가능성이 높습니다.", "팟캐스트에서 리텐션이 가장 높은 장르 중 하나입니다. 청취자가 수 시간 분량의 전체 아카이브를 듣습니다.", "포괄 범위가 넓습니다. 묻히지 않도록 구체적인 하위 카테고리를 선택하세요.", "지역 팀 중계나 '러닝', '야생' 같은 틈새 스포츠는 빠르게 상위 차트에 오릅니다."],
  },
};

export function CategoryFinder({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const loc = LOC[lang];
  const ui: CatUi = loc || EN_UI;
  const [search, setSearch] = useState("");
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  // Localized display names, indexed like OFFICIAL_TAXONOMY; fall back to English
  const view = useMemo(
    () =>
      OFFICIAL_TAXONOMY.map((cat, i) => ({
        cat,
        name: loc?.p[i] ?? cat.primary,
        subs: cat.subcategories.map((s, j) => ({ xml: s, label: loc?.s[i]?.[j] ?? s })),
        tip: loc?.tips[i] ?? cat.tip,
      })),
    [loc]
  );

  const filtered = useMemo(() => {
    if (!search.trim()) return view;
    const q = search.toLowerCase();
    return view.filter(
      (v) =>
        v.cat.primary.toLowerCase().includes(q) ||
        v.name.toLowerCase().includes(q) ||
        v.subs.some((s) => s.xml.toLowerCase().includes(q) || s.label.toLowerCase().includes(q)) ||
        v.tip.toLowerCase().includes(q)
    );
  }, [search, view]);

  const handleCopyXml = (primary: string, sub?: string) => {
    const xml = sub
      ? `<itunes:category text="${primary}">\n  <itunes:category text="${sub}" />\n</itunes:category>`
      : `<itunes:category text="${primary}" />`;
    navigator.clipboard.writeText(xml);
    setCopiedTag(sub || primary);
    setTimeout(() => setCopiedTag(null), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Search Header */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-2">
              <FolderSearch className="w-4 h-4 text-orange-500 dark:text-orange-400" />
              {ui.title}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              {ui.sub}
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={ui.ph}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map(({ cat, name, subs, tip }, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-studio-card border border-studio-border hover:border-studio-border-hover transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  {name}
                </p>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    cat.competition === "Low Opportunity"
                      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                      : cat.competition === "Moderate"
                      ? "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20"
                      : "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20"
                  }`}
                >
                  {ui.comp[cat.competition]}
                </span>
              </div>

              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                {tip}
              </p>

              {/* Subcategories tags */}
              <div className="flex flex-wrap gap-1.5">
                {subs.map(({ xml: sub, label }, sIdx) => {
                  const isCopied = copiedTag === sub;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => handleCopyXml(cat.primary, sub)}
                      className="px-2.5 py-1 rounded-lg bg-studio-darkest hover:bg-studio-elevated border border-studio-border text-xs text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1 group cursor-pointer"
                      title={ui.clickTitle}
                    >
                      <span>{label}</span>
                      {isCopied ? (
                        <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 text-neutral-400 group-hover:text-orange-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-studio-border/60 flex items-center justify-between text-[11px] text-slate-500">
              <span>{ui.hint}</span>
              <button
                onClick={() => handleCopyXml(cat.primary)}
                className="text-orange-400 hover:text-orange-300 font-medium"
              >
                {ui.copyTag(name)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

