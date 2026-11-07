export interface ToolDefinition {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  category: "ideation" | "content" | "technical" | "growth";
  categoryLabel: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  status: "available" | "coming_soon" | "beta";
  icon: string; // Lucide icon name
  badge?: string;
  featured?: boolean;
  image: string;
}

export interface GuideDefinition {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  publishedAt: string;
  /** ISO date of the last substantive content update; falls back to publishedAt */
  updatedAt?: string;
  category: string;
}

export const siteConfig = {
  name: "Pod Studio",
  brandName: "Pod Studio Tools",
  domain: "podstudiotools.com",
  url: "https://podstudiotools.com",
  ogImage: "https://podstudiotools.com/og-image.png", // 1200x630 brand card (regenerate: scripts/generate-og-images.mjs)
  description:
    "Free, 100% client-side tools for podcast creators. Generate episode titles, format professional show notes, estimate sponsorship revenue, and preview Apple/Spotify cover art without signups or server uploads.",
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  creator: {
    name: "Pod Studio Engineering Team",
    contactEmail: "support@podstudiotools.com",
  },
};

export const toolCategories = [
  {
    id: "ideation",
    label: "Ideation & Branding",
    description: "Brainstorm viral episode titles, hooks, interview questions, and show names.",
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    accent: "#7c3aed",
  },
  {
    id: "content",
    label: "Content & Scripting",
    description: "Build run-of-show outlines, generate markdown show notes, and polish scripts.",
    color: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
    badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    accent: "#ea580c",
  },
  {
    id: "technical",
    label: "Audio & Technical",
    description: "Validate RSS feeds, check cover art specs for Apple/Spotify, and format timestamps.",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    accent: "#0284c7",
  },
  {
    id: "growth",
    label: "Growth & Monetization",
    description: "Calculate CPM sponsorship earnings, estimate download growth, and reply to reviews.",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    accent: "#16a34a",
  },
] as const;

export const toolRegistry: ToolDefinition[] = [
  {
    id: "episode-title-generator",
    slug: "episode-title-generator",
    title: "Podcast Title Generator",
    shortTitle: "Episode Title Generator",
    description:
      "Generate high-CTR, click-worthy podcast episode titles using tested psychological formulas and audience hooks.",
    longDescription:
      "Stuck on naming your podcast episode? Enter your topic, guest name, and episode format to instantly produce 15+ clickable, searchable titles tested for high listener conversion across Apple Podcasts and Spotify.",
    category: "ideation",
    categoryLabel: "Ideation & Branding",
    primaryKeyword: "podcast title generator",
    secondaryKeywords: ["podcast episode title generator", "podcast episode title ideas", "podcast title formulas"],
    searchIntent: "podcast episode title ideas",
    status: "available",
    icon: "Sparkles",
    badge: "Popular",
    featured: true,
    image: "/images/tools/podcasttools_01_title-generator-lg.webp",
  },
  {
    id: "show-notes-generator",
    slug: "show-notes-generator",
    title: "Podcast Show Notes Generator",
    shortTitle: "Show Notes Generator",
    description:
      "Create beautifully structured, SEO-friendly podcast show notes with timestamps, guest bios, key takeaways, and links.",
    longDescription:
      "Turn your episode details into clean Markdown, HTML, or plain text show notes ready to paste into Libsyn, Buzzsprout, Podbean, Spotify for Podcasters, or your website.",
    category: "content",
    categoryLabel: "Content & Scripting",
    primaryKeyword: "podcast show notes template",
    secondaryKeywords: ["podcast show notes generator", "how to write podcast show notes", "podcast show notes format"],
    searchIntent: "podcast show notes template",
    status: "available",
    icon: "FileText",
    badge: "Essential",
    featured: true,
    image: "/images/tools/podcasttools_02_show-notes-generator-lg.webp",
  },
  {
    id: "podcast-name-generator",
    slug: "podcast-name-generator",
    title: "Podcast Name Generator",
    shortTitle: "Podcast Name Generator",
    description:
      "Discover memorable, brandable podcast name ideas categorized by style, niche, tone, and format.",
    longDescription:
      "Generate unique podcast names across 6 distinct creative angles: Clever & Punny, Direct & Descriptive, Playful & Casual, Minimalist & Modern, Authority & Expert, and Narrative.",
    category: "ideation",
    categoryLabel: "Ideation & Branding",
    primaryKeyword: "podcast name generator",
    secondaryKeywords: ["podcast name ideas", "how to name a podcast", "creative podcast names"],
    searchIntent: "podcast name ideas",
    status: "available",
    icon: "Mic",
    badge: "Creative",
    featured: true,
    image: "/images/tools/podcasttools_03_name-domain-checker-lg.webp",
  },
  {
    id: "episode-outline-builder",
    slug: "episode-outline-builder",
    title: "Podcast Script Template & Episode Outline Builder",
    shortTitle: "Episode Outline Builder",
    description:
      "Structure your episode with an interactive run-of-show planner, segment timers, and talking point notes.",
    longDescription:
      "Never run out of things to say or lose control of pacing. Plan your hook, intro, core segments, ad breaks, Q&A, and outro with live time budgeting.",
    category: "content",
    categoryLabel: "Content & Scripting",
    primaryKeyword: "podcast script template",
    secondaryKeywords: ["podcast episode outline", "podcast run of show", "podcast outro script"],
    searchIntent: "podcast episode outline",
    status: "available",
    icon: "ListOrdered",
    badge: "Workflow",
    featured: true,
    image: "/images/tools/podcasttools_04_episode-outline-builder-lg.webp",
  },
  {
    id: "guest-question-generator",
    slug: "guest-question-generator",
    title: "Podcast Interview Questions Generator",
    shortTitle: "Guest Question Generator",
    description:
      "Generate deep, engaging podcast interview questions categorized by icebreakers, career breakthroughs, tactical secrets, and hot takes.",
    longDescription:
      "Avoid asking the same boring questions your guest has answered on 10 other podcasts. Generate customized interview arcs that unlock untold stories and actionable insights.",
    category: "ideation",
    categoryLabel: "Ideation & Branding",
    primaryKeyword: "podcast interview questions",
    secondaryKeywords: ["podcast interview questions generator", "questions to ask podcast guests", "guest interview prep"],
    searchIntent: "podcast interview questions",
    status: "available",
    icon: "HelpCircle",
    badge: "Host Favorite",
    featured: true,
    image: "/images/tools/podcasttools_05_guest-interview-questions-lg.webp",
  },
  {
    id: "monetization-calculator",
    slug: "monetization-calculator",
    title: "Podcast Income Calculator",
    shortTitle: "Monetization Calculator",
    description:
      "Calculate potential ad revenue based on download numbers, episode frequency, and 2026 industry CPM rates.",
    longDescription:
      "Estimate your monthly and annual podcast revenue with realistic industry CPM rates for Pre-roll ($15-$18), Mid-roll ($25-$32), and Post-roll ($10-$14), plus dynamic host-read vs programmatic models.",
    category: "growth",
    categoryLabel: "Growth & Monetization",
    primaryKeyword: "podcast income calculator",
    secondaryKeywords: ["how much do podcasts make", "podcast cpm calculator", "podcast sponsorship calculator"],
    searchIntent: "podcast income calculator",
    status: "available",
    icon: "DollarSign",
    badge: "Financial",
    featured: true,
    image: "/images/tools/podcasttools_06_sponsorship-cpm-calculator-lg.webp",
  },
  {
    id: "cover-art-preview",
    slug: "cover-art-preview",
    title: "Podcast Cover Art Size Checker & Preview",
    shortTitle: "Cover Art Preview",
    description:
      "Test how your podcast cover art looks at Apple Podcasts and Spotify thumbnails, dark/light modes, and mobile lock screens.",
    longDescription:
      "Apple Podcasts and Spotify reject artwork under 1400x1400px or over 3000x3000px. Preview your artwork client-side in realistic app mockups to ensure text legibility at tiny 50x50px thumbnail sizes.",
    category: "technical",
    categoryLabel: "Audio & Technical",
    primaryKeyword: "podcast cover art size",
    secondaryKeywords: ["podcast cover art preview", "podcast artwork specifications", "spotify podcast cover size"],
    searchIntent: "podcast cover art size",
    status: "available",
    icon: "Image",
    badge: "Visual QA",
    featured: true,
    image: "/images/tools/podcasttools_07_cover-art-previewer-lg.webp",
  },
  {
    id: "rss-feed-validator",
    slug: "rss-feed-validator",
    title: "Podcast RSS Feed Validator & Linter",
    shortTitle: "RSS Feed Validator",
    description:
      "Validate your podcast RSS XML feed for required iTunes tags, cover artwork specifications, audio enclosures, and Apple compliance.",
    longDescription:
      "Check your podcast feed against official Apple Podcasts and Spotify specifications. Paste XML or an RSS URL to detect missing tags, invalid durations, or unsecure image URLs instantly.",
    category: "technical",
    categoryLabel: "Audio & Technical",
    primaryKeyword: "podcast rss feed checker",
    secondaryKeywords: ["podcast rss validator", "apple podcast rss feed test", "podcast feed linter"],
    searchIntent: "podcast rss feed checker",
    status: "available",
    icon: "Rss",
    badge: "Technical",
    featured: true,
    image: "/images/tools/podcasttools_08_rss-feed-validator-lg.webp",
  },
  {
    id: "episode-timestamp-generator",
    slug: "episode-timestamp-generator",
    title: "Podcast Timestamp & Chapter Marker Generator",
    shortTitle: "Timestamp Generator",
    description:
      "Format episode chapters and timecodes into one-click copyable formats for YouTube descriptions and Spotify chapter markers.",
    longDescription:
      "Convert your episode notes into properly formatted timecodes (00:00 Intro, 02:45 Discussion) that trigger clickable chapter bars on YouTube, Spotify, and podcast player apps.",
    category: "technical",
    categoryLabel: "Audio & Technical",
    primaryKeyword: "podcast timestamp format",
    secondaryKeywords: ["podcast timestamp generator", "youtube chapters generator", "youtube podcast chapters", "podcast chapter markers"],
    searchIntent: "podcast timestamp format",
    status: "available",
    icon: "Clock",
    badge: "Utility",
    image: "/images/tools/podcasttools_09_chapter-timestamp-generator-lg.webp",
  },
  {
    id: "intro-script-generator",
    slug: "intro-script-generator",
    title: "Podcast Intro Script Generator",
    shortTitle: "Intro Script Generator",
    description:
      "Generate punchy, listener-retaining podcast intro scripts for solo shows, co-hosted chats, and guest interviews.",
    longDescription:
      "The first 30 seconds dictate whether a listener stays or bounces. Create structured, authentic intro scripts with a high-stakes hook, episode teaser, and call-to-action.",
    category: "content",
    categoryLabel: "Content & Scripting",
    primaryKeyword: "podcast intro script",
    secondaryKeywords: ["podcast intro examples", "podcast intro generator", "how to start a podcast intro"],
    searchIntent: "podcast intro script",
    status: "available",
    icon: "Headphones",
    image: "/images/tools/podcasttools_10_hook-intro-script-generator-lg.webp",
  },
  {
    id: "audience-growth-estimator",
    slug: "audience-growth-estimator",
    title: "Podcast Audience & Download Growth Estimator",
    shortTitle: "Audience Growth Estimator",
    description:
      "Model realistic podcast audience growth over 12 months based on release cadence, listener retention, and word-of-mouth compounding.",
    longDescription:
      "Understand what it takes to reach the top 10%, 5%, and 1% of podcasts. Compare your 30-day download metrics against verified Podtrac and Libsyn industry distribution percentiles.",
    category: "growth",
    categoryLabel: "Growth & Monetization",
    primaryKeyword: "podcast download estimator",
    secondaryKeywords: ["podcast audience growth", "podcast download statistics", "average podcast downloads"],
    searchIntent: "podcast download estimator",
    status: "available",
    icon: "TrendingUp",
    image: "/images/tools/podcasttools_11_audience-download-growth-lg.webp",
  },
  {
    id: "description-generator",
    slug: "description-generator",
    title: "Podcast Show & Episode Description Generator",
    shortTitle: "Description Generator",
    description:
      "Craft searchable, conversion-focused podcast descriptions that boost your show in Apple and Spotify search algorithms.",
    longDescription:
      "Create both high-level show descriptions (for your podcast channel page) and episode descriptions with keyword placement, subscriber CTAs, and disclaimers.",
    category: "content",
    categoryLabel: "Content & Scripting",
    primaryKeyword: "podcast description generator",
    secondaryKeywords: ["podcast description template", "how to write a podcast description", "apple podcast description seo"],
    searchIntent: "podcast description generator",
    status: "available",
    icon: "AlignLeft",
    image: "/images/tools/podcasttools_12_show-episode-description-lg.webp",
  },
  {
    id: "category-finder",
    slug: "category-finder",
    title: "Apple Podcast Categories & Spotify Category Finder",
    shortTitle: "Category Finder",
    description:
      "Explore official Apple Podcasts taxonomy and subcategories to find low-competition genres where your show can rank.",
    longDescription:
      "Search the complete Apple Podcasts category and subcategory hierarchy. Discover which primary and secondary categories maximize your discoverability on directory charts.",
    category: "technical",
    categoryLabel: "Audio & Technical",
    primaryKeyword: "apple podcast categories",
    secondaryKeywords: ["podcast category list", "best podcast category apple", "spotify podcast genres"],
    searchIntent: "apple podcast categories",
    status: "available",
    icon: "FolderSearch",
    image: "/images/tools/podcasttools_13_apple-spotify-category-finder-lg.webp",
  },
  {
    id: "hook-generator",
    slug: "hook-generator",
    title: "Podcast Hook & Cold Open Generator",
    shortTitle: "Hook Generator",
    description:
      "Create irresistible cold opens and curiosity hooks that keep listeners from dropping off in the first 60 seconds.",
    longDescription:
      "Select from 8 psychological retention hooks: Contrarian Opinion, High-Stakes Story, Big Promise, Pattern Interrupt, Behind-the-Scenes Secret, and Shocking Statistic.",
    category: "ideation",
    categoryLabel: "Ideation & Branding",
    primaryKeyword: "podcast hook ideas",
    secondaryKeywords: ["podcast hook generator", "podcast cold open ideas", "how to hook podcast listeners"],
    searchIntent: "podcast hook ideas",
    status: "available",
    icon: "Zap",
    image: "/images/tools/podcasttools_14_social-hook-clip-quotes-lg.webp",
  },
  {
    id: "transcript-formatter",
    slug: "transcript-formatter",
    title: "Podcast Transcript Formatter",
    shortTitle: "Transcript Formatter",
    description:
      "Clean raw automated AI audio transcripts into formatted paragraphs with speaker tags, timestamps, and readability improvements.",
    longDescription:
      "Format raw Whisper, Otter, or Descript text exports into publication-ready transcripts with clean speaker tags, stripped filler words, and readable paragraphs 100% in your browser.",
    category: "content",
    categoryLabel: "Content & Scripting",
    primaryKeyword: "podcast transcript format",
    secondaryKeywords: ["clean podcast transcript", "podcast transcript formatter", "format audio transcript online"],
    searchIntent: "podcast transcript format",
    status: "available",
    icon: "FileCode",
    image: "/images/tools/podcasttools_15_transcript-cleaner-formatter-lg.webp",
  },
  {
    id: "trailer-script-builder",
    slug: "trailer-script-builder",
    title: "Podcast Trailer Script Builder",
    shortTitle: "Trailer Script Builder",
    description:
      "Write a compelling 60 to 90-second launch trailer script that converts casual browsers into dedicated subscribers.",
    longDescription:
      "A great trailer is your permanent billboard on Apple Podcasts and Spotify. Follow a proven 5-part audio trailer framework to script a trailer that hooks your target listener.",
    category: "content",
    categoryLabel: "Content & Scripting",
    primaryKeyword: "podcast trailer template",
    secondaryKeywords: ["podcast trailer script", "how to make a podcast trailer", "podcast trailer examples"],
    searchIntent: "podcast trailer template",
    status: "available",
    icon: "Film",
    image: "/images/tools/podcasttools_16_trailer-script-builder-lg.webp",
  },
  {
    id: "review-response-generator",
    slug: "review-response-generator",
    title: "Podcast Review Response Generator",
    shortTitle: "Review Response Generator",
    description:
      "Generate heartfelt thank-you shoutouts and diplomatic replies to 5-star praises and critical listener feedback.",
    longDescription:
      "Turn listener reviews into on-air relationship builders. Generate ready-to-read on-air shoutout scripts and social media responses for all types of reviews.",
    category: "growth",
    categoryLabel: "Growth & Monetization",
    primaryKeyword: "reply to podcast review",
    secondaryKeywords: ["podcast review response", "how to thank podcast reviewers", "podcast listener shoutout script"],
    searchIntent: "reply to podcast review",
    status: "available",
    icon: "MessageSquare",
    image: "/images/tools/podcasttools_17_review-response-shoutout-lg.webp",
  },
  {
    id: "collab-finder",
    slug: "collab-finder",
    title: "Podcast Guest Pitch & Collab Outreach Builder",
    shortTitle: "Guest Pitch & Collab Outreach",
    description:
      "Craft high-converting guest interview pitches and cross-promotion swap proposals tailored to other podcast hosts.",
    longDescription:
      "Stop sending generic pitch emails. Generate customized guest pitches, feed drop proposals, and interview swap requests that highlight mutual value and listener overlap.",
    category: "growth",
    categoryLabel: "Growth & Monetization",
    primaryKeyword: "find podcast guests",
    secondaryKeywords: ["podcast guest pitch template", "podcast cross promotion pitch", "how to pitch a podcast guest"],
    searchIntent: "find podcast guests",
    status: "available",
    icon: "Users",
    image: "/images/tools/podcasttools_18_guest-pitch-collab-outreach-lg.webp",
  },
];

export const guidesRegistry: GuideDefinition[] = [
  {
    slug: "podcast-sponsorship-cpm-guide-2026",
    title: "Podcast Ad Rates & CPM Benchmarks (2026)",
    description: "Learn current podcast ad rates and industry CPM benchmarks for 2026. Explore pricing for pre-roll, mid-roll, and host-read sponsorships. Free complete guide.",
    readTime: "6 min read",
    publishedAt: "2026-10-15",
    updatedAt: "2026-11-06",
    category: "Monetization",
  },
  {
    slug: "apple-spotify-cover-art-specs-guide",
    title: "Apple Podcasts & Spotify Cover Art Specs: The Definitive Checklist",
    description: "Complete podcast cover art size requirements for Apple Podcasts and Spotify. Master 3000x3000px dimensions, color profiles, and safe zones. Free checklist.",
    readTime: "5 min read",
    publishedAt: "2026-10-18",
    updatedAt: "2026-11-06",
    category: "Design",
  },
  {
    slug: "how-to-write-clickable-episode-titles",
    title: "How to Write Podcast Episode Titles That Actually Get Clicks",
    description: "Master 12 psychological formulas to write podcast episode titles that get clicks on Apple Podcasts and Spotify. Boost downloads and retention. Free guide.",
    readTime: "5 min read",
    publishedAt: "2026-10-22",
    updatedAt: "2026-11-05",
    category: "Marketing",
  },
  {
    slug: "how-to-come-up-with-catchy-podcast-episode-titles",
    title: "How to Come Up With a Catchy Podcast Episode Title",
    description: "Not sure how to title your next episode? Use this 5-step process, do's and don'ts, and before/after examples to write catchy podcast episode titles fast.",
    readTime: "6 min read",
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-06",
    category: "Marketing",
  },
  {
    slug: "how-much-do-podcasts-make",
    title: "How Much Do Podcasts Make? Real Numbers by Audience Size",
    description: "Discover how much podcasts make in 2026. Explore real ad CPM revenue, listener subscriptions, sponsorships, and earnings by download size. Free creator guide.",
    readTime: "8 min read",
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-06",
    category: "Monetization",
  },
  {
    slug: "how-to-monetize-a-podcast",
    title: "How to Monetize a Podcast (and Get Your First Sponsor)",
    description: "Learn how to monetize a podcast and land your first sponsor. Master 8 proven revenue streams, rate cards, and sponsor pitch templates.",
    readTime: "8 min read",
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-06",
    category: "Monetization",
  },
  {
    slug: "podcast-topic-ideas",
    title: "Podcast Topic Ideas, Episode Ideas & Segment Ideas",
    description: "Explore 100 podcast topic ideas, episode concepts, and segment formats across popular niches. Break creative blocks and hook listeners.",
    readTime: "9 min read",
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-06",
    category: "Content",
  },
  {
    slug: "how-to-start-a-podcast",
    title: "How to Start a Podcast: A Step-by-Step Guide",
    description: "Step-by-step guide on how to start a podcast in 2026. Learn concept planning, equipment, recording, hosting, RSS feeds, and directory distribution.",
    readTime: "12 min read",
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-06",
    category: "Production",
  },
];

