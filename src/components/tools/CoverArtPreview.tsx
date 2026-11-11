"use client";

import React, { useState, useRef } from "react";
import { Image as ImageIcon, Upload, CheckCircle2, AlertTriangle, XCircle, RotateCcw, Smartphone, ShieldCheck } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

type CoverText = {
  drop: string; supports: string; client: string; sample: string; audit: string; empty: string;
  ratio: string; min: string; passed: string; under: string; rec: string; perfect: string; valid: string; weight: string; large: string;
  mode: string; tabs: [string, string, string, string, string];
  appleHead: string; newShow: string; show: string; meta: string; spotifyHead: string; ep: string; date: string;
  safe: string; safeT: string; edge: string; edgeT: string; circle: string; circleT: string; tinyH: string; tinyT: string;
  alts: [string, string, string, string, string, string]; // apple, spotify, lock, safe, 50px, 80px
  cv: [string, string, string, string]; // canvas: title, host, tags, file name
};

const TEXT: Record<SupportedLocale, CoverText> = {
  en: { drop: "Drop your podcast cover art here or click to browse", supports: "Supports PNG & JPG (Square 1400x1400px to 3000x3000px)", client: "100% Client-Side. Never uploaded to cloud.", sample: "Or test with our sample 3000x3000px artwork",
    audit: "Apple & Spotify 2026 Spec Audit", empty: "Upload your image to run the instant specification audit.", ratio: "1:1 Square Ratio:", min: "Apple/Spotify Min (1400px):", passed: "Passed", under: "Under 1400px (Rejected)",
    rec: "Recommended 3000x3000px:", perfect: "Perfect", valid: "Valid, but 3000px optimal", weight: "File Weight:", large: "(Large)", mode: "Preview Mode:",
    tabs: ["Apple Podcasts Feed", "Spotify Now Playing", "Phone Lock Screen", "Safe Zone & Crop Check", "50x50px Search Thumbnail (Legibility Test)"],
    appleHead: "Apple Podcasts • Show Page", newShow: "New Show", show: "Deep Signal with Sarah Chen", meta: "Weekly Episodes • Tech", spotifyHead: "Spotify • Now Playing", ep: "Ep. 1: Future of Audio", date: "Tuesday, 14 April",
    safe: "Safe area (80%)", safeT: " — keep your show title and face inside this box.", edge: "Edge margin", edgeT: " — rounded corners and app chrome can clip anything here.", circle: "Circle crop", circleT: " — how your art looks as a round avatar in some apps and social shares.",
    tinyH: "Thumbnail Legibility Stress Test", tinyT: "This simulates how your cover appears on a smartphone screen in Apple Podcasts search results. If your text is unreadable here, consider increasing your title font size and contrast.",
    alts: ["Apple Podcasts show page artwork preview", "Spotify player now playing cover art preview", "Lock screen now playing artwork preview", "Cover art with safe zone overlay", "Apple Podcasts search results 50x50px miniature thumbnail preview", "Spotify mobile player 80x80px album thumbnail preview"],
    cv: ["DEEP SIGNAL", "WITH SARAH CHEN", "TECH • FUTURE • AUDIO", "deep-signal-cover.jpg"] },
  es: { drop: "Suelta aquí la portada de tu pódcast o haz clic para buscarla", supports: "Admite PNG y JPG (cuadrada, de 1400x1400 px a 3000x3000 px)", client: "100 % en tu navegador. Nunca se sube a la nube.", sample: "O prueba con nuestra ilustración de muestra de 3000x3000 px",
    audit: "Auditoría de especificaciones 2026 de Apple y Spotify", empty: "Sube tu imagen para ejecutar la auditoría de especificaciones al instante.", ratio: "Proporción cuadrada 1:1:", min: "Mínimo Apple/Spotify (1400 px):", passed: "Superado", under: "Menos de 1400 px (rechazada)",
    rec: "Recomendado 3000x3000 px:", perfect: "Perfecto", valid: "Válida, pero lo óptimo son 3000 px", weight: "Peso del archivo:", large: "(Grande)", mode: "Modo de vista previa:",
    tabs: ["Feed de Apple Podcasts", "Reproduciendo en Spotify", "Pantalla de bloqueo del móvil", "Zona segura y recorte", "Miniatura de búsqueda de 50x50 px (prueba de legibilidad)"],
    appleHead: "Apple Podcasts • Página del programa", newShow: "Programa nuevo", show: "Señal Profunda con Sara Chen", meta: "Episodios semanales • Tecnología", spotifyHead: "Spotify • Reproduciendo", ep: "Ep. 1: El futuro del audio", date: "martes, 14 de abril",
    safe: "Zona segura (80 %)", safeT: " — mantén el título del programa y las caras dentro de este recuadro.", edge: "Margen del borde", edgeT: " — las esquinas redondeadas y la interfaz de la app pueden recortar cualquier cosa aquí.", circle: "Recorte circular", circleT: " — cómo se ve tu portada como avatar redondo en algunas apps y al compartir en redes.",
    tinyH: "Prueba de legibilidad de la miniatura", tinyT: "Simula cómo se ve tu portada en un teléfono en los resultados de búsqueda de Apple Podcasts. Si el texto no se lee aquí, aumenta el tamaño de la fuente del título y el contraste.",
    alts: ["Vista previa de la portada en la página del programa de Apple Podcasts", "Vista previa de la portada en el reproductor de Spotify", "Vista previa de la portada en la pantalla de bloqueo", "Portada con superposición de zona segura", "Miniatura de 50x50 px en los resultados de búsqueda de Apple Podcasts", "Miniatura de álbum de 80x80 px en el reproductor móvil de Spotify"],
    cv: ["SEÑAL PROFUNDA", "CON SARA CHEN", "TECNOLOGÍA • FUTURO • AUDIO", "senal-profunda-portada.jpg"] },
  fr: { drop: "Déposez la pochette de votre podcast ici ou cliquez pour parcourir", supports: "Formats PNG et JPG (carré, de 1400x1400 px à 3000x3000 px)", client: "100 % dans votre navigateur. Jamais envoyé dans le cloud.", sample: "Ou testez avec notre visuel d'exemple de 3000x3000 px",
    audit: "Audit des spécifications 2026 d'Apple et Spotify", empty: "Importez votre image pour lancer l'audit instantané des spécifications.", ratio: "Format carré 1:1 :", min: "Minimum Apple/Spotify (1400 px) :", passed: "Validé", under: "Moins de 1400 px (refusé)",
    rec: "Recommandé 3000x3000 px :", perfect: "Parfait", valid: "Valide, mais 3000 px est l'idéal", weight: "Poids du fichier :", large: "(Lourd)", mode: "Mode d'aperçu :",
    tabs: ["Flux Apple Podcasts", "Lecture en cours sur Spotify", "Écran de verrouillage du téléphone", "Zone de sécurité et recadrage", "Miniature de recherche 50x50 px (test de lisibilité)"],
    appleHead: "Apple Podcasts • Page de l'émission", newShow: "Nouvelle émission", show: "Signal Profond avec Sarah Chen", meta: "Épisodes hebdomadaires • Tech", spotifyHead: "Spotify • En cours de lecture", ep: "Ép. 1 : L'avenir de l'audio", date: "mardi 14 avril",
    safe: "Zone de sécurité (80 %)", safeT: " — gardez le titre de l'émission et les visages dans ce cadre.", edge: "Marge du bord", edgeT: " — les coins arrondis et l'interface de l'app peuvent couper tout ce qui se trouve ici.", circle: "Recadrage circulaire", circleT: " — l'aspect de votre pochette en avatar rond dans certaines apps et partages sociaux.",
    tinyH: "Test de lisibilité de la miniature", tinyT: "Simule l'affichage de votre pochette sur un smartphone dans les résultats de recherche d'Apple Podcasts. Si le texte est illisible ici, augmentez la taille et le contraste du titre.",
    alts: ["Aperçu de la pochette sur la page de l'émission Apple Podcasts", "Aperçu de la pochette dans le lecteur Spotify", "Aperçu de la pochette sur l'écran de verrouillage", "Pochette avec superposition de la zone de sécurité", "Aperçu miniature 50x50 px dans les résultats de recherche Apple Podcasts", "Aperçu miniature d'album 80x80 px dans le lecteur mobile Spotify"],
    cv: ["SIGNAL PROFOND", "AVEC SARAH CHEN", "TECH • FUTUR • AUDIO", "signal-profond-pochette.jpg"] },
  de: { drop: "Podcast-Cover hierher ziehen oder zum Auswählen klicken", supports: "Unterstützt PNG & JPG (quadratisch, 1400x1400 px bis 3000x3000 px)", client: "100 % im Browser. Wird nie in die Cloud hochgeladen.", sample: "Oder teste mit unserem Beispielbild (3000x3000 px)",
    audit: "Spezifikations-Check 2026 für Apple & Spotify", empty: "Lade dein Bild hoch, um sofort den Spezifikations-Check zu starten.", ratio: "Quadratisches Format 1:1:", min: "Apple/Spotify-Minimum (1400 px):", passed: "Bestanden", under: "Unter 1400 px (abgelehnt)",
    rec: "Empfohlen 3000x3000 px:", perfect: "Perfekt", valid: "Gültig, aber 3000 px sind optimal", weight: "Dateigröße:", large: "(Groß)", mode: "Vorschaumodus:",
    tabs: ["Apple-Podcasts-Feed", "Spotify „Läuft gerade“", "Handy-Sperrbildschirm", "Sicherheitszone & Zuschnitt", "Such-Thumbnail 50x50 px (Lesbarkeitstest)"],
    appleHead: "Apple Podcasts • Show-Seite", newShow: "Neue Show", show: "Tiefes Signal mit Sarah Chen", meta: "Wöchentliche Folgen • Tech", spotifyHead: "Spotify • Läuft gerade", ep: "Folge 1: Die Zukunft des Audios", date: "Dienstag, 14. April",
    safe: "Sicherer Bereich (80 %)", safeT: " — halte Showtitel und Gesichter innerhalb dieses Rahmens.", edge: "Randbereich", edgeT: " — abgerundete Ecken und App-Elemente können hier alles abschneiden.", circle: "Kreisförmiger Zuschnitt", circleT: " — so sieht dein Cover als runder Avatar in manchen Apps und beim Teilen in sozialen Netzwerken aus.",
    tinyH: "Lesbarkeitstest für Thumbnails", tinyT: "Simuliert, wie dein Cover auf einem Smartphone in den Apple-Podcasts-Suchergebnissen erscheint. Wenn dein Text hier unlesbar ist, vergrößere die Titelschrift und erhöhe den Kontrast.",
    alts: ["Vorschau des Covers auf der Apple-Podcasts-Show-Seite", "Vorschau des Covers im Spotify-Player", "Vorschau des Covers auf dem Sperrbildschirm", "Cover mit Sicherheitszonen-Overlay", "Miniaturansicht 50x50 px in den Apple-Podcasts-Suchergebnissen", "Album-Miniaturansicht 80x80 px im mobilen Spotify-Player"],
    cv: ["TIEFES SIGNAL", "MIT SARAH CHEN", "TECH • ZUKUNFT • AUDIO", "tiefes-signal-cover.jpg"] },
  it: { drop: "Trascina qui la copertina del tuo podcast o clicca per sfogliare", supports: "Supporta PNG e JPG (quadrata, da 1400x1400 px a 3000x3000 px)", client: "100% nel browser. Mai caricata sul cloud.", sample: "Oppure prova con la nostra grafica di esempio 3000x3000 px",
    audit: "Verifica delle specifiche 2026 di Apple e Spotify", empty: "Carica la tua immagine per avviare subito la verifica delle specifiche.", ratio: "Rapporto quadrato 1:1:", min: "Minimo Apple/Spotify (1400 px):", passed: "Superato", under: "Sotto i 1400 px (rifiutata)",
    rec: "Consigliato 3000x3000 px:", perfect: "Perfetto", valid: "Valida, ma 3000 px è l'ideale", weight: "Peso del file:", large: "(Grande)", mode: "Modalità anteprima:",
    tabs: ["Feed di Apple Podcasts", "In riproduzione su Spotify", "Schermata di blocco del telefono", "Zona sicura e ritaglio", "Miniatura di ricerca 50x50 px (test di leggibilità)"],
    appleHead: "Apple Podcasts • Pagina del programma", newShow: "Nuovo programma", show: "Segnale Profondo con Sarah Chen", meta: "Episodi settimanali • Tech", spotifyHead: "Spotify • In riproduzione", ep: "Ep. 1: Il futuro dell'audio", date: "martedì 14 aprile",
    safe: "Area sicura (80%)", safeT: " — tieni il titolo del programma e i volti dentro questo riquadro.", edge: "Margine del bordo", edgeT: " — angoli arrotondati e interfaccia dell'app possono tagliare qualsiasi cosa qui.", circle: "Ritaglio circolare", circleT: " — come appare la tua copertina come avatar rotondo in alcune app e nelle condivisioni social.",
    tinyH: "Test di leggibilità della miniatura", tinyT: "Simula come appare la tua copertina su uno smartphone nei risultati di ricerca di Apple Podcasts. Se qui il testo non si legge, aumenta la dimensione del titolo e il contrasto.",
    alts: ["Anteprima della copertina nella pagina del programma di Apple Podcasts", "Anteprima della copertina nel player di Spotify", "Anteprima della copertina nella schermata di blocco", "Copertina con sovrapposizione della zona sicura", "Anteprima miniatura 50x50 px nei risultati di ricerca di Apple Podcasts", "Anteprima miniatura album 80x80 px nel player mobile di Spotify"],
    cv: ["SEGNALE PROFONDO", "CON SARAH CHEN", "TECH • FUTURO • AUDIO", "segnale-profondo-copertina.jpg"] },
  pt: { drop: "Solte aqui a capa do seu podcast ou clique para procurar", supports: "Aceita PNG e JPG (quadrada, de 1400x1400 px a 3000x3000 px)", client: "100% no navegador. Nunca é enviada para a nuvem.", sample: "Ou teste com nossa arte de exemplo de 3000x3000 px",
    audit: "Auditoria de especificações 2026 do Apple e Spotify", empty: "Envie sua imagem para executar a auditoria de especificações na hora.", ratio: "Proporção quadrada 1:1:", min: "Mínimo Apple/Spotify (1400 px):", passed: "Aprovada", under: "Abaixo de 1400 px (rejeitada)",
    rec: "Recomendado 3000x3000 px:", perfect: "Perfeita", valid: "Válida, mas 3000 px é o ideal", weight: "Tamanho do arquivo:", large: "(Grande)", mode: "Modo de visualização:",
    tabs: ["Feed do Apple Podcasts", "Tocando agora no Spotify", "Tela de bloqueio do celular", "Zona segura e corte", "Miniatura de busca 50x50 px (teste de legibilidade)"],
    appleHead: "Apple Podcasts • Página do programa", newShow: "Novo programa", show: "Sinal Profundo com Sarah Chen", meta: "Episódios semanais • Tecnologia", spotifyHead: "Spotify • Tocando agora", ep: "Ep. 1: O futuro do áudio", date: "terça-feira, 14 de abril",
    safe: "Área segura (80%)", safeT: " — mantenha o título do programa e os rostos dentro desta caixa.", edge: "Margem da borda", edgeT: " — cantos arredondados e a interface do app podem cortar qualquer coisa aqui.", circle: "Corte circular", circleT: " — como sua capa aparece como avatar redondo em alguns apps e compartilhamentos sociais.",
    tinyH: "Teste de legibilidade da miniatura", tinyT: "Simula como sua capa aparece em um smartphone nos resultados de busca do Apple Podcasts. Se o texto estiver ilegível aqui, aumente o tamanho e o contraste do título.",
    alts: ["Prévia da capa na página do programa no Apple Podcasts", "Prévia da capa no player do Spotify", "Prévia da capa na tela de bloqueio", "Capa com sobreposição da zona segura", "Prévia da miniatura 50x50 px nos resultados de busca do Apple Podcasts", "Prévia da miniatura de álbum 80x80 px no player móvel do Spotify"],
    cv: ["SINAL PROFUNDO", "COM SARAH CHEN", "TECNOLOGIA • FUTURO • ÁUDIO", "sinal-profundo-capa.jpg"] },
  ja: { drop: "ポッドキャストのカバーアートをここにドロップ、またはクリックして選択", supports: "PNG／JPG対応（正方形、1400x1400px〜3000x3000px）", client: "100％ブラウザ内で処理。クラウドには一切アップロードされません。", sample: "または、3000x3000pxのサンプル画像で試す",
    audit: "Apple＆Spotify 2026年仕様チェック", empty: "画像をアップロードすると、すぐに仕様チェックを実行します。", ratio: "1:1の正方形比率：", min: "Apple／Spotify最小サイズ（1400px）：", passed: "合格", under: "1400px未満（却下）",
    rec: "推奨の3000x3000px：", perfect: "完璧", valid: "有効ですが、3000pxが最適です", weight: "ファイルサイズ：", large: "（大きい）", mode: "プレビューモード：",
    tabs: ["Apple Podcastsのフィード", "Spotifyの再生画面", "スマホのロック画面", "セーフゾーンとトリミング確認", "50x50px検索サムネイル（視認性テスト）"],
    appleHead: "Apple Podcasts • 番組ページ", newShow: "新番組", show: "ディープ・シグナル with サラ・チェン", meta: "毎週配信 • テクノロジー", spotifyHead: "Spotify • 再生中", ep: "第1回：オーディオの未来", date: "4月14日 火曜日",
    safe: "セーフエリア（80％）", safeT: " — 番組タイトルと顔はこの枠内に収めましょう。", edge: "端の余白", edgeT: " — 角丸やアプリのUIで、この部分は切れることがあります。", circle: "円形トリミング", circleT: " — 一部のアプリやSNSシェアで丸いアイコンとして表示されたときの見え方です。",
    tinyH: "サムネイル視認性ストレステスト", tinyT: "Apple Podcastsの検索結果でスマートフォン上にカバーがどう表示されるかを再現します。ここで文字が読めない場合は、タイトルの文字サイズとコントラストを上げましょう。",
    alts: ["Apple Podcasts番組ページのアートワークプレビュー", "Spotifyプレーヤーのカバーアートプレビュー", "ロック画面のアートワークプレビュー", "セーフゾーンを重ねたカバーアート", "Apple Podcasts検索結果の50x50pxサムネイルプレビュー", "Spotifyモバイルプレーヤーの80x80pxアルバムサムネイルプレビュー"],
    cv: ["ディープ・シグナル", "サラ・チェン", "テック • 未来 • 音声", "deep-signal-cover.jpg"] },
  ko: { drop: "팟캐스트 커버 아트를 여기에 끌어다 놓거나 클릭해서 찾아보세요", supports: "PNG 및 JPG 지원 (정사각형, 1400x1400px ~ 3000x3000px)", client: "100% 브라우저에서 처리됩니다. 클라우드에 업로드되지 않습니다.", sample: "또는 3000x3000px 샘플 이미지로 테스트하기",
    audit: "Apple & Spotify 2026 규격 점검", empty: "이미지를 업로드하면 즉시 규격 점검을 실행합니다.", ratio: "1:1 정사각형 비율:", min: "Apple/Spotify 최소 (1400px):", passed: "통과", under: "1400px 미만 (거부됨)",
    rec: "권장 3000x3000px:", perfect: "완벽", valid: "유효하지만 3000px이 최적입니다", weight: "파일 크기:", large: "(큼)", mode: "미리보기 모드:",
    tabs: ["Apple Podcasts 피드", "Spotify 재생 화면", "휴대폰 잠금 화면", "안전 영역 및 잘림 확인", "50x50px 검색 썸네일 (가독성 테스트)"],
    appleHead: "Apple Podcasts • 프로그램 페이지", newShow: "새 프로그램", show: "딥 시그널 with 사라 천", meta: "주간 에피소드 • 기술", spotifyHead: "Spotify • 재생 중", ep: "1화: 오디오의 미래", date: "4월 14일 화요일",
    safe: "안전 영역 (80%)", safeT: " — 프로그램 제목과 얼굴은 이 박스 안에 두세요.", edge: "가장자리 여백", edgeT: " — 둥근 모서리와 앱 UI 때문에 이 부분은 잘릴 수 있습니다.", circle: "원형 자르기", circleT: " — 일부 앱과 SNS 공유에서 둥근 아바타로 보일 때의 모습입니다.",
    tinyH: "썸네일 가독성 스트레스 테스트", tinyT: "Apple Podcasts 검색 결과에서 스마트폰 화면에 커버가 어떻게 보이는지 시뮬레이션합니다. 여기서 글자를 읽을 수 없다면 제목 글자 크기와 대비를 높이세요.",
    alts: ["Apple Podcasts 프로그램 페이지 아트워크 미리보기", "Spotify 플레이어 커버 아트 미리보기", "잠금 화면 재생 아트워크 미리보기", "안전 영역이 겹쳐진 커버 아트", "Apple Podcasts 검색 결과 50x50px 썸네일 미리보기", "Spotify 모바일 플레이어 80x80px 앨범 썸네일 미리보기"],
    cv: ["딥 시그널", "사라 천 진행", "기술 • 미래 • 오디오", "deep-signal-cover.jpg"] },
};

export function CoverArtPreview({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageMeta, setImageMeta] = useState<{
    width: number;
    height: number;
    sizeKb: number;
    name: string;
    type: string;
  } | null>(null);

  const [previewTab, setPreviewTab] = useState<"apple" | "spotify" | "mobile" | "safe" | "tiny">("apple");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const sizeKb = Math.round(file.size / 1024);
    const reader = new FileReader();

    reader.onload = (event) => {
      const src = event.target?.result as string;
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setImageMeta({
          width: img.naturalWidth,
          height: img.naturalHeight,
          sizeKb,
          name: file.name,
          type: file.type,
        });
      };
      img.src = src;
    };

    reader.readAsDataURL(file);
  };

  const handleLoadSample = () => {
    // Generate a default high-res canvas SVG sample
    const sampleCanvas = document.createElement("canvas");
    sampleCanvas.width = 3000;
    sampleCanvas.height = 3000;
    const ctx = sampleCanvas.getContext("2d");
    if (ctx) {
      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 3000, 3000);
      grad.addColorStop(0, "#0F0F26");
      grad.addColorStop(0.5, "#1E1B4B");
      grad.addColorStop(1, "#31103F");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 3000, 3000);

      // Accent circle
      ctx.beginPath();
      ctx.arc(1500, 1500, 800, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(249, 115, 22, 0.15)";
      ctx.fill();

      // Text Title
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 260px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(ui.cv[0], 1500, 1400);

      ctx.fillStyle = "#F97316";
      ctx.font = "bold 130px sans-serif";
      ctx.fillText(ui.cv[1], 1500, 1650);

      ctx.fillStyle = "#94A3B8";
      ctx.font = "90px sans-serif";
      ctx.fillText(ui.cv[2], 1500, 1850);

      setImageSrc(sampleCanvas.toDataURL("image/jpeg", 0.9));
      setImageMeta({
        width: 3000,
        height: 3000,
        sizeKb: 420,
        name: ui.cv[3],
        type: "image/jpeg",
      });
    }
  };

  const isSquare = imageMeta ? imageMeta.width === imageMeta.height : false;
  const isOptimalSize = imageMeta
    ? imageMeta.width >= 1400 && imageMeta.width <= 3000 && isSquare
    : false;
  const isRecommended3000 = imageMeta
    ? imageMeta.width === 3000 && imageMeta.height === 3000
    : false;
  const isFileSizeOk = imageMeta ? imageMeta.sizeKb <= 1024 : false;

  return (
    <div className="w-full space-y-6">
      {/* Upload & Spec Status Section */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Upload Area */}
          <div>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-studio-border hover:border-orange-500/60 rounded-2xl p-6 text-center cursor-pointer bg-studio-darkest/60 hover:bg-studio-darkest transition-all group"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-neutral-900 dark:text-white mb-1">
                {ui.drop}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {ui.supports}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" /> {ui.client}
              </div>
            </div>

            <div className="mt-3 text-center">
              <button
                onClick={handleLoadSample}
                className="text-xs text-orange-600 dark:text-orange-400 hover:text-orange-500 font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> {ui.sample}
              </button>
            </div>
          </div>

          {/* Validation Checklist Card */}
          <div className="p-5 rounded-xl bg-studio-darkest border border-studio-border space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.audit}
            </h3>

            {imageMeta ? (
              <div className="space-y-2 text-xs">
                {/* Check 1: 1:1 Aspect ratio */}
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">{ui.ratio}</span>
                  <span className={`font-semibold flex items-center gap-1 ${isSquare ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
                    {isSquare ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {imageMeta.width} x {imageMeta.height} px
                  </span>
                </div>

                {/* Check 2: Resolution bounds */}
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">{ui.min}</span>
                  <span className={`font-semibold flex items-center gap-1 ${isOptimalSize ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
                    {isOptimalSize ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {isOptimalSize ? ui.passed : ui.under}
                  </span>
                </div>

                {/* Check 3: Optimal 3000x3000px */}
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">{ui.rec}</span>
                  <span className={`font-semibold flex items-center gap-1 ${isRecommended3000 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-500"}`}>
                    {isRecommended3000 ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                    {isRecommended3000 ? ui.perfect : ui.valid}
                  </span>
                </div>

                {/* Check 4: File size */}
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">{ui.weight}</span>
                  <span className={`font-semibold flex items-center gap-1 ${isFileSizeOk ? "text-emerald-600 dark:text-emerald-400" : "text-amber-500"}`}>
                    {isFileSizeOk ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                    {imageMeta.sizeKb} KB {imageMeta.sizeKb > 1024 && ui.large}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-neutral-500 py-4 text-center">
                {ui.empty}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Mockup Previews Tab Switcher */}
      {imageSrc && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mr-2">{ui.mode}</span>
            {[
              { id: "apple", label: ui.tabs[0] },
              { id: "spotify", label: ui.tabs[1] },
              { id: "mobile", label: ui.tabs[2] },
              { id: "safe", label: ui.tabs[3] },
              { id: "tiny", label: ui.tabs[4] },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPreviewTab(tab.id as any)}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  previewTab === tab.id
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-studio-card text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Preview Container */}
          <div className="p-8 rounded-2xl bg-studio-card border border-studio-border flex items-center justify-center min-h-[400px]">
            {previewTab === "apple" && (
              <div className="dark-surface w-full max-w-md bg-[#1C1C1E] rounded-3xl p-6 text-white shadow-2xl border border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-[#A1A1A6] mb-4">
                  {ui.appleHead}
                </div>
                <div className="flex gap-4 items-center">
                  <img
                    src={imageSrc}
                    alt={ui.alts[0]}
                    className="w-32 h-32 rounded-2xl shadow-lg flex-shrink-0 object-cover"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6482]">
                      {ui.newShow}
                    </span>
                    <h4 className="text-base font-bold text-white line-clamp-2">
                      {ui.show}
                    </h4>
                    <p className="text-xs text-[#A1A1A6]">{ui.meta}</p>
                  </div>
                </div>
              </div>
            )}

            {previewTab === "spotify" && (
              <div className="dark-surface w-full max-w-sm bg-gradient-to-b from-[#2B1B3D] to-[#121212] rounded-3xl p-6 text-white shadow-2xl border border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
                  {ui.spotifyHead}
                </div>
                <img
                  src={imageSrc}
                  alt={ui.alts[1]}
                  className="w-full aspect-square rounded-xl shadow-2xl object-cover mb-6"
                />
                <div className="space-y-1 mb-4">
                  <h4 className="text-base font-bold text-white">{ui.ep}</h4>
                  <p className="text-xs text-slate-400">{ui.show}</p>
                </div>
                {/* Audio scrubber mock */}
                <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mb-2">
                  <div className="bg-white w-1/3 h-full" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>14:20</span>
                  <span>45:00</span>
                </div>
              </div>
            )}

            {previewTab === "mobile" && (
              <div className="dark-surface">
              <div className="relative w-[260px] h-[520px] rounded-[44px] border-[10px] border-neutral-900 dark:border-neutral-700 bg-gradient-to-b from-[#1e1b4b] via-[#312e81] to-[#0f172a] shadow-2xl overflow-hidden text-white">
                {/* notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black" />
                <div className="pt-14 text-center">
                  <div className="text-[11px] font-medium text-white/80">{ui.date}</div>
                  <div className="text-6xl font-semibold tracking-tight leading-none mt-1 text-white">9:41</div>
                </div>
                {/* Now-playing widget */}
                <div className="absolute left-3 right-3 bottom-24 rounded-3xl bg-white/15 backdrop-blur-md p-3 border border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={imageSrc}
                      alt={ui.alts[2]}
                      className="w-14 h-14 rounded-lg object-cover shadow"
                    />
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-white truncate">{ui.ep}</p>
                      <p className="text-[11px] text-white/70 truncate">{ui.show}</p>
                    </div>
                  </div>
                  <div className="mt-3 h-1 rounded-full bg-white/25 overflow-hidden">
                    <div className="h-full w-2/5 bg-white" />
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-8 text-white" aria-hidden="true">
                    <span className="text-lg">⏮</span>
                    <span className="text-2xl">⏸</span>
                    <span className="text-lg">⏭</span>
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-white/70" />
              </div>
              </div>
            )}

            {previewTab === "safe" && (
              <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="relative mx-auto w-64 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img src={imageSrc} alt={ui.alts[3]} className="w-full h-full object-cover" />
                  {/* outer 10% margin shaded */}
                  <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 0 25.6px rgba(220,38,38,0.28)" }} />
                  {/* 80% safe area */}
                  <div className="absolute inset-[10%] border-2 border-dashed border-white/90 rounded-md pointer-events-none" />
                  {/* circular crop used by some apps & social avatars */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-300/90 pointer-events-none" />
                  {/* rule-of-thirds grid */}
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="border border-white/15" />
                    ))}
                  </div>
                </div>
                <ul className="space-y-3 text-xs text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 rounded border-2 border-dashed border-neutral-500 shrink-0" />
                    <span><b className="text-neutral-900 dark:text-white">{ui.safe}</b>{ui.safeT}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 rounded bg-red-500/40 shrink-0" />
                    <span><b className="text-neutral-900 dark:text-white">{ui.edge}</b>{ui.edgeT}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 rounded-full border-2 border-cyan-400 shrink-0" />
                    <span><b className="text-neutral-900 dark:text-white">{ui.circle}</b>{ui.circleT}</span>
                  </li>
                </ul>
              </div>
            )}

            {previewTab === "tiny" && (
              <div className="space-y-4 text-center max-w-md">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                  {ui.tinyH}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {ui.tinyT}
                </p>
                <div className="flex items-center justify-center gap-6 pt-4">
                  <div className="text-center space-y-1">
                    <img
                      src={imageSrc}
                      alt={ui.alts[4]}
                      style={{ width: "50px", height: "50px" }}
                      className="rounded-lg shadow object-cover mx-auto"
                    />
                    <span className="text-[10px] text-neutral-500 font-mono">50 x 50 px</span>
                  </div>
                  <div className="text-center space-y-1">
                    <img
                      src={imageSrc}
                      alt={ui.alts[5]}
                      style={{ width: "80px", height: "80px" }}
                      className="rounded-xl shadow object-cover mx-auto"
                    />
                    <span className="text-[10px] text-neutral-500 font-mono">80 x 80 px</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

