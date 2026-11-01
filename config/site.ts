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
}

export interface GuideDefinition {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  publishedAt: string;
  category: string;
}

export const siteConfig = {
  name: "Pod Studio",
  brandName: "Pod Studio Tools",
  domain: "podstudiotools.com",
  url: "https://podstudiotools.com",
  ogImage: "https://podstudiotools.com/og-image.png",
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
  },
  {
    id: "content",
    label: "Content & Scripting",
    description: "Build run-of-show outlines, generate markdown show notes, and polish scripts.",
    color: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
    badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  },
  {
    id: "technical",
    label: "Audio & Technical",
    description: "Validate RSS feeds, check cover art specs for Apple/Spotify, and format timestamps.",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  {
    id: "growth",
    label: "Growth & Monetization",
    description: "Calculate CPM sponsorship earnings, estimate download growth, and reply to reviews.",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
] as const;

export const toolRegistry: ToolDefinition[] = [
  {
    id: "episode-title-generator",
    slug: "episode-title-generator",
    title: "Podcast Episode Title Generator",
    shortTitle: "Episode Title Generator",
    description:
      "Generate high-CTR, click-worthy podcast episode titles using tested psychological formulas and audience hooks.",
    longDescription:
      "Stuck on naming your podcast episode? Enter your topic, guest name, and episode format to instantly produce 30+ clickable, searchable titles tested for high listener conversion across Apple Podcasts and Spotify.",
    category: "ideation",
    categoryLabel: "Ideation & Branding",
    primaryKeyword: "podcast episode title generator",
    secondaryKeywords: ["podcast episode title ideas", "podcast title formulas", "catchy episode names"],
    searchIntent: "podcast episode title ideas",
    status: "available",
    icon: "Sparkles",
    badge: "Popular",
    featured: true,
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
    primaryKeyword: "podcast show notes generator",
    secondaryKeywords: ["podcast show notes template", "how to write podcast show notes", "podcast show notes format"],
    searchIntent: "podcast show notes template",
    status: "available",
    icon: "FileText",
    badge: "Essential",
    featured: true,
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
  },
  {
    id: "episode-outline-builder",
    slug: "episode-outline-builder",
    title: "Podcast Episode Outline Builder",
    shortTitle: "Episode Outline Builder",
    description:
      "Structure your episode with an interactive run-of-show planner, segment timers, and talking point notes.",
    longDescription:
      "Never run out of things to say or lose control of pacing. Plan your hook, intro, core segments, ad breaks, Q&A, and outro with live time budgeting.",
    category: "content",
    categoryLabel: "Content & Scripting",
    primaryKeyword: "podcast episode outline",
    secondaryKeywords: ["podcast script template", "podcast run of show", "interview outline structure"],
    searchIntent: "podcast episode outline",
    status: "available",
    icon: "ListOrdered",
    badge: "Workflow",
    featured: true,
  },
  {
    id: "guest-question-generator",
    slug: "guest-question-generator",
    title: "Podcast Interview Question Generator",
    shortTitle: "Guest Question Generator",
    description:
      "Generate deep, engaging podcast interview questions categorized by icebreakers, career breakthroughs, tactical secrets, and hot takes.",
    longDescription:
      "Avoid asking the same boring questions your guest has answered on 10 other podcasts. Generate customized interview arcs that unlock untold stories and actionable insights.",
    category: "ideation",
    categoryLabel: "Ideation & Branding",
    primaryKeyword: "podcast interview questions generator",
    secondaryKeywords: ["podcast interview questions", "deep interview questions", "guest interview prep"],
    searchIntent: "podcast interview questions",
    status: "available",
    icon: "HelpCircle",
    badge: "Host Favorite",
    featured: true,
  },
  {
    id: "monetization-calculator",
    slug: "monetization-calculator",
    title: "Podcast Sponsorship & Monetization Calculator",
    shortTitle: "Monetization Calculator",
    description:
      "Calculate potential ad revenue based on download numbers, episode frequency, and 2026 industry CPM rates.",
    longDescription:
      "Estimate your monthly and annual podcast revenue with realistic industry CPM rates for Pre-roll ($15-$18), Mid-roll ($25-$32), and Post-roll ($10-$14), plus dynamic host-read vs programmatic models.",
    category: "growth",
    categoryLabel: "Growth & Monetization",
    primaryKeyword: "podcast sponsorship calculator",
    secondaryKeywords: ["podcast monetization calculator", "podcast ad revenue calculator", "podcast CPM calculator"],
    searchIntent: "podcast sponsorship calculator",
    status: "available",
    icon: "DollarSign",
    badge: "Financial",
    featured: true,
  },
  {
    id: "cover-art-preview",
    slug: "cover-art-preview",
    title: "Podcast Cover Art Preview & Size Checker",
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
    secondaryKeywords: ["podcast timestamp generator", "youtube podcast chapters", "podcast chapter markers"],
    searchIntent: "podcast timestamp format",
    status: "available",
    icon: "Clock",
    badge: "Utility",
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
    secondaryKeywords: ["podcast intro generator", "podcast script template", "how to start a podcast intro"],
    searchIntent: "podcast intro script",
    status: "available",
    icon: "Headphones",
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
  },
  {
    id: "category-finder",
    slug: "category-finder",
    title: "Apple Podcasts & Spotify Category Finder",
    shortTitle: "Category Finder",
    description:
      "Explore official Apple Podcasts taxonomy and subcategories to find low-competition genres where your show can rank.",
    longDescription:
      "Search the complete Apple Podcasts category and subcategory hierarchy. Discover which primary and secondary categories maximize your discoverability on directory charts.",
    category: "technical",
    categoryLabel: "Audio & Technical",
    primaryKeyword: "best podcast category apple",
    secondaryKeywords: ["apple podcast categories", "podcast category list", "spotify podcast genres"],
    searchIntent: "best podcast category Apple",
    status: "available",
    icon: "FolderSearch",
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
  },
  {
    id: "transcript-formatter",
    slug: "transcript-formatter",
    title: "Podcast Transcript Formatter & Cleaner",
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
  },
];

export const guidesRegistry: GuideDefinition[] = [
  {
    slug: "podcast-sponsorship-cpm-guide-2026",
    title: "Podcast Sponsorship & CPM Guide (2026 Benchmarks)",
    description: "Everything you need to know about pre-roll, mid-roll, host-read ads, dynamic insertion, and industry CPM benchmarks.",
    readTime: "7 min read",
    publishedAt: "2026-10-15",
    category: "Monetization",
  },
  {
    slug: "apple-spotify-cover-art-specs-guide",
    title: "Apple Podcasts & Spotify Cover Art Specs: The Definitive Checklist",
    description: "Master dimensions, color profile, safe zones, text hierarchy, and why 3000x3000px square art is required.",
    readTime: "6 min read",
    publishedAt: "2026-10-18",
    category: "Design",
  },
  {
    slug: "how-to-write-clickable-episode-titles",
    title: "How to Write Podcast Episode Titles That Actually Get Clicks",
    description: "The 12 psychological title formulas top 1% podcasts use to stand out in Apple Podcasts and Spotify feeds.",
    readTime: "8 min read",
    publishedAt: "2026-10-22",
    category: "Marketing",
  },
];
