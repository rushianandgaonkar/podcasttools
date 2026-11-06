import type { ToolContentRecord } from "./types";

export const enToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Free Podcast Title Generator for Episodes | Pod Studio",
    metaDescription:
      "Generate high-CTR episode titles with our free podcast title generator. Browse curiosity, how-to, and guest formulas for Apple and Spotify. Free, no sign-up.",
    overview: [
      "The Podcast Title Generator turns your episode topic, and optionally a guest name, into high-CTR title ideas built on proven psychological frameworks: curiosity gaps, how-to promises, contrarian viewpoints, and guest-led hooks.",
      "Built for podcast hosts who know what their episode covers but need click-worthy headlines tested for high listener conversion across Apple Podcasts and Spotify phone screens.",
    ],
    steps: [
      { title: "Describe the episode", text: "Type the main topic in a few words, such as “budgeting for freelancers” or “first 100 subscribers”." },
      { title: "Add a guest (optional)", text: "Include the guest’s name or expertise when they are the main reason people will press play." },
      { title: "Filter by style", text: "Switch between curiosity, how-to, contrarian and listicle formulas to compare angles side by side." },
      { title: "Copy or export", text: "Copy a single title or export your favorite titles as a text file to share with your co-host or editor." },
    ],
    tips: [
      "Put the most specific, searchable words in the first half of the title — mobile apps often cut off after 60 characters.",
      "Promise only what the episode delivers. Accurate titles earn better completion rates and fewer negative reviews.",
      "Leave episode numbers and your show name out of the title unless your listeners rely on them.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Free Podcast Show Notes Generator & Template | Pod Studio",
    metaDescription:
      "Create structured episode notes with a free podcast show notes template. Export summaries, timestamps, guest bios, and resource links. Free, no sign-up.",
    overview: [
      "The Show Notes Generator assembles your episode details into clean, search-optimized show notes featuring an episode summary, featured guest bio, chapter timestamps, key takeaways, and referenced resource links.",
      "Output is formatted in Markdown, HTML, or plain text, ready to paste directly into Buzzsprout, Libsyn, Podbean, Spotify for Podcasters, YouTube descriptions, or your website.",
    ],
    steps: [
      { title: "Fill in the basics", text: "Enter the episode title and a one- or two-sentence summary that explains why someone should listen." },
      { title: "Add guests and chapters", text: "List your guests and paste timestamps in a simple “00:00 Topic” format, one per line." },
      { title: "Add takeaways and links", text: "Write the main lessons and any books, tools or websites mentioned in the episode." },
      { title: "Pick a format and copy", text: "Choose Markdown, HTML or plain text to match your hosting platform, then copy the finished notes." },
    ],
    tips: [
      "Write the first sentence for humans and search engines alike — it is the part most apps show before “more”.",
      "Only include timestamps you have checked against the final edit; wrong chapters frustrate listeners.",
      "Reuse the same structure every week so regular listeners know where to find links and resources.",
    ],
    sections: [
      {
        heading: "Podcast show notes template",
        intro: "Clean, search-optimized show notes help listeners follow along and give search engines rich text to index:",
        template: `# Episode Title: Mastering Audience Growth in 2026

## Episode Summary
In this episode, we sit down with audio strategist Elena Rostova to dissect the latest listener retention benchmarks. Elena shares why weekly release consistency beats viral social spikes, how to structure chapter markers for maximum completion rates, and the metrics sponsors actually look for when evaluating your media kit.

## Timestamps & Chapters
- [00:00] Cold open & episode overview
- [02:15] Elena's background in audio production
- [07:45] The 30-second rule for hook retention
- [14:20] How to price your first sponsor read
- [23:10] The biggest show note SEO mistakes to avoid
- [31:00] Rapid-fire Q&A and closing thoughts

## Key Takeaways
1. Hook listeners with a specific promise in the first 30 seconds.
2. Structure your show notes with clear timestamp headers to improve search engine rankings.
3. Mid-roll host-read endorsements retain 85%+ listener attention compared to programmatic ads.

## Mentioned in This Episode
- Book: *Sound Reporting: The NPR Guide to Audio Journalism*
- Tool: Pod Studio Episode Outline Builder
- Connect with Elena: @elenaaudio on Twitter / LinkedIn

## Support the Show
If you enjoyed this episode, please leave a 5-star rating on Apple Podcasts and follow us on Spotify!`,
      },
    ],
  },
  "podcast-name-generator": {
    metaTitle: "Podcast Name Generator: Free Podcast Name Ideas | Pod Studio",
    metaDescription:
      "Generate catchy show names with our free podcast name generator. Explore creative podcast name ideas by niche and check availability. Free, no sign-up.",
    overview: [
      "The Podcast Name Generator helps you brainstorm memorable, brandable podcast name ideas categorized by niche, custom keywords, and creative tone — from direct and searchable to playful and authoritative.",
      "Use these podcast name ideas to build a strong shortlist for your new show, then verify directory availability on Apple Podcasts, Spotify, and domain registrars before announcing your brand.",
    ],
    steps: [
      { title: "Pick your niche", text: "Choose the genre that fits your show, such as tech, finance, true crime or personal growth." },
      { title: "Add a custom word (optional)", text: "Enter a word or theme you want in the name — a topic, place or recurring idea." },
      { title: "Choose a brand style and shortlist", text: "Switch brand styles, then save the three to five names you could imagine saying out loud every episode." },
      { title: "Verify before you launch", text: "Search Apple Podcasts and Spotify for duplicates, then check the domain and social handles yourself." },
    ],
    tips: [
      "Say each name out loud — if people cannot spell it after hearing it once, word-of-mouth will suffer.",
      "Including a clear topic word helps new listeners find you in podcast search.",
      "Avoid names that depend on a trend or a year; you want something that still fits in episode 200.",
    ],
    sections: [
      {
        heading: "Podcast name ideas by niche",
        intro: "Looking for creative podcast name ideas? Browse these curated title concepts across top podcasting categories:",
        groups: [
          {
            category: "Business & Startups",
            items: [
              "The Bootstrapped Founder",
              "Scale & Strategy",
              "Zero to Seed",
              "Market Movers Podcast",
            ],
          },
          {
            category: "True Crime & Mystery",
            items: [
              "Unsolved & Unspoken",
              "Cold Case Almanac",
              "Behind the Yellow Tape",
              "Shadow of Suspicion",
            ],
          },
          {
            category: "Comedy & Entertainment",
            items: [
              "Nobody Asked For This",
              "Slightly Cynical",
              "Laughing Through It",
              "The Daily Ridiculous",
            ],
          },
          {
            category: "Health & Wellness",
            items: [
              "Mind & Muscle Protocol",
              "The Longevity Habit",
              "Root Cause Radio",
              "Modern Wellness Lab",
            ],
          },
          {
            category: "Tech & Artificial Intelligence",
            items: [
              "Prompt & Paradigm",
              "The Neural Shift",
              "Silicon & Code",
              "Future Proofed",
            ],
          },
          {
            category: "Faith & Spirituality",
            items: [
              "Grace in the Quiet",
              "The Pilgrim Way",
              "Rooted & Reaching",
              "Everyday Faith",
            ],
          },
        ],
      },
    ],
  },
  "episode-outline-builder": {
    metaTitle: "Podcast Script Template & Outline Builder | Pod Studio",
    metaDescription:
      "Structure your show with a free podcast script template and outline builder. Plan segments, ad breaks, timecodes, and talking points. Free, no sign-up.",
    overview: [
      "The Episode Outline Builder creates a timed podcast run of show: an interactive production roadmap that allocates minutes across hooks, intro music, core segments, sponsor reads, and calls to action.",
      "It helps hosts, co-hosts, and producers maintain conversational pacing and hit target episode lengths without scripting every single word.",
    ],
    steps: [
      { title: "Name the episode", text: "Enter a working title so the run of show is easy to identify later." },
      { title: "Set the target length", text: "Enter the total episode length in minutes so you can see how the segment timings add up." },
      { title: "Edit your segments", text: "Adjust or add blocks such as the cold open, intro, main acts, mid-roll break and outro, with notes for each." },
      { title: "Export the run of show", text: "Export the outline as Markdown and send it to your guest or producer before recording." },
    ],
    tips: [
      "Plan mid-roll sponsor reads at a natural break, roughly a third to halfway through the episode.",
      "Leave a few minutes of buffer for tangents — the best moments are often unplanned.",
      "Send guests the outline in advance so they can prepare stories, not just answers.",
    ],
    sections: [
      {
        heading: "Free podcast script template",
        intro: "Use this battle-tested, modular podcast script template to structure your episodes cleanly, whether you record solo, with a co-host, or with an interview guest:",
        template: `[00:00 - 01:00] COLD OPEN / HOOK
- Hook: High-stakes quote, provocative statement, or open loop that grabs attention.
- Episode Promise: "In today's episode, you're going to learn..."

[01:00 - 02:30] INTRO & SPONSOR PRE-ROLL
- Show Intro Music / Stinger
- Welcome & Host Intro: Name, show tagline, and brief episode context.
- Pre-Roll Sponsor (15-30s): "Support for today's episode comes from..."

[02:30 - 12:00] SEGMENT 1: THE FOUNDATION / ORIGIN
- Core problem or theme setup.
- Personal anecdote, guest introduction, or case study background.
- Key takeaway #1.

[12:00 - 13:30] MID-ROLL SPONSOR BREAK
- Natural transition: "We'll be right back with the biggest takeaway after a quick word..."
- Mid-Roll Sponsor 1 & 2 (60s host-read endorsement + promo code).

[13:30 - 25:00] SEGMENT 2: THE DEEP DIVE / BREAKTHROUGH
- Tactical breakdown: steps, framework, or behind-the-scenes discussion.
- Counter-intuitive insights or common mistakes to avoid.
- Key takeaway #2.

[25:00 - 35:00] SEGMENT 3: ACTIONABLE IMPLEMENTATION & AUDIENCE Q&A
- Practical implementation steps for the listener.
- Rapid-fire round, community voicemail, or hot take.
- Key takeaway #3.

[35:00 - 38:00] RECAP, CTA & OUTRO
- 60-second summary of main points.
- Single Call to Action (CTA): "Leave a review on Apple Podcasts / Subscribe on Spotify."
- Next episode teaser.
- Outro music fade out.`,
      },
    ],
  },
  "guest-question-generator": {
    metaTitle: "Podcast Interview Questions Generator (Free) | Pod Studio",
    metaDescription:
      "Generate memorable podcast interview questions for any guest. Get thoughtful icebreakers, deep story prompts, and rapid-fire questions. Free, no sign-up.",
    overview: [
      "The Podcast Interview Questions Generator builds a comprehensive question arc for your guest interviews, transitioning naturally from friendly icebreakers and origin stories to vulnerable pivot points, tactical frameworks, and rapid-fire rounds.",
      "Enter your guest’s name, profession, and episode topic to generate tailored interview prep sheets that bypass standard PR talking points and uncover untold insights.",
    ],
    steps: [
      { title: "Add guest details", text: "Enter the guest’s name, their profession or role, and the core episode topic." },
      { title: "Browse by interview stage", text: "Filter questions by stage — icebreakers, origin story, failures and pivots, through to the closing round." },
      { title: "Review the question arc", text: "Read through each section and keep the questions that lead to stories rather than one-word answers." },
      { title: "Copy or export the prep sheet", text: "Copy the prep sheet or export it as a text file, then add follow-ups based on the guest’s recent work." },
    ],
    tips: [
      "Ask for a specific moment — “Tell me about the day…” — instead of general opinions.",
      "Keep two or three must-ask questions and let the rest flex around the conversation.",
      "Save your most personal question for the middle, once the guest is comfortable.",
    ],
    sections: [
      {
        heading: "Podcast interview questions to ask any guest",
        intro: "Great interviews happen when you skip the resume and dig into the real stories. Here are 18 high-impact interview questions grouped by conversation stage:",
        groups: [
          {
            category: "Icebreakers & First Impressions",
            items: [
              "What is something you believed early in your career that you now think is completely wrong?",
              "What was the very first project or job that made you fall in love with your field?",
              "If you were not doing what you do today, what unexpected path would you be on?",
              "What is the most common piece of advice in your industry that people should ignore?",
            ],
          },
          {
            category: "Stories, Failures & Turning Points",
            items: [
              "Tell me about the single lowest moment in your journey — what did the day after look like?",
              "What was the critical turning point where giving up was the easiest option, but you pushed through?",
              "Who was the one mentor or critic whose words permanently altered how you work?",
              "What did you have to unlearn in order to reach your next level of growth?",
            ],
          },
          {
            category: "Tactical Insights & Masterclass",
            items: [
              "Walk us step-by-step through how you structure your highest-focus hours each morning.",
              "What is the single most effective tool, metric, or habit that drives 80% of your current results?",
              "When everything feels chaotic or overwhelming, what is the exact protocol you run?",
              "What is the counter-intuitive decision you made that everyone warned you against?",
              "What is a problem in your space that nobody is talking about yet, but everyone will be in two years?",
            ],
          },
          {
            category: "Closing Reflections & Rapid-Fire",
            items: [
              "What is the one book or resource you have gifted or recommended more than any other?",
              "What is the best investment of under $100 you have made in the last 12 months?",
              "What does success actually look like to you today compared to when you started?",
              "If you could put one billboard up in front of millions of creators, what would it say?",
              "Where can listeners find you, support your work, and follow your latest projects?",
            ],
          },
        ],
      },
    ],
  },
  "monetization-calculator": {
    metaTitle: "Podcast Income Calculator: Ad Revenue & CPM | Pod Studio",
    metaDescription:
      "Calculate your show earnings with our free podcast income calculator. Model host-read CPM ad revenue, downloads, and sponsorship deals. Free, no sign-up.",
    overview: [
      "The Podcast Income Calculator estimates your potential earnings using standard industry CPM rates and download benchmarks: (downloads ÷ 1,000) × CPM × filled ad inventory slots.",
      "Model monthly and annual projections across pre-roll, mid-roll, and post-roll slots, dynamic fill rates, and direct listener memberships to negotiate sponsorship deals with confidence.",
    ],
    steps: [
      { title: "Enter your downloads", text: "Use your average downloads per episode in the first 30 days, as reported by your host." },
      { title: "Set episode frequency", text: "Add how many episodes you publish each month." },
      { title: "Configure ad slots", text: "Turn pre-roll, mid-roll and post-roll on or off, set a CPM for each and estimate your fill rate." },
      { title: "Review and export", text: "Compare the revenue breakdown, add membership income if you have it, and export the projection." },
    ],
    tips: [
      "Host-read mid-rolls usually command the highest CPMs because listeners are most engaged mid-episode.",
      "Be conservative with fill rate — most independent shows do not sell every slot every month.",
      "Use verified download numbers when you pitch; sponsors may ask for screenshots from your host.",
    ],
    sections: [
      {
        heading: "How much do podcasts make?",
        paragraphs: [
          "Podcast earnings vary widely based on verified 30-day download volume, release frequency, and ad slot inventory. Shows with 1,000 to 5,000 downloads per episode typically earn between $50 and $300 per episode through a combination of CPM sponsorship slots and affiliate links.",
          "Larger independent podcasts averaging 10,000 to 50,000 downloads per episode command premium host-read CPM rates between $25 and $35, generating thousands of dollars per month in direct sponsor revenue alongside listener memberships and merch.",
        ],
        link: {
          text: "Read the full data report: How Much Do Podcasts Make in 2026? →",
          href: "/guides/how-much-do-podcasts-make",
        },
      },
    ],
  },
  "cover-art-preview": {
    metaTitle: "Podcast Cover Art Size Checker: Apple & Spotify | Pod Studio",
    metaDescription:
      "Verify your podcast cover art size and specs for Apple and Spotify. Preview 3000x3000px artwork on mobile locks, dark mode, and feeds. Free, no sign-up.",
    overview: [
      "The Podcast Cover Art Size Checker & Preview tool tests your artwork in realistic Apple Podcasts and Spotify directory feeds, mobile lock screen players, and 50x50px thumbnail views.",
      "Your image is verified 100% locally in your browser against strict directory specifications: exactly 1:1 square aspect ratio, RGB color space, and dimensions between 1400x1400px and 3000x3000px.",
    ],
    steps: [
      { title: "Upload your artwork", text: "Drop a JPG or PNG file (or try the sample artwork). It is processed only in your browser." },
      { title: "Check the specs", text: "See whether the image is square and within the recommended pixel range." },
      { title: "Switch mockups", text: "Compare the Apple Podcasts feed, Spotify now-playing, phone lock screen, safe-zone crop and 50 × 50 px thumbnail previews." },
      { title: "Refine and re-test", text: "Adjust text size or contrast in your design tool, then upload the new version to compare." },
    ],
    tips: [
      "If your title is not readable at thumbnail size, use fewer words or a bigger font.",
      "Avoid placing important text near the edges — some apps round the corners.",
      "Test in both light and dark mode; thin dark text can disappear on dark backgrounds.",
    ],
  },
  "rss-feed-validator": {
    metaTitle: "Free Podcast RSS Feed Validator & Checker | Pod Studio",
    metaDescription:
      "Check your podcast RSS feed for missing tags, broken enclosures, artwork and GUID problems before submitting to Apple Podcasts or Spotify. Free and private.",
    overview: [
      "The RSS Feed Validator inspects your podcast feed for the issues that most often block or delay publishing: invalid XML, missing show metadata, artwork problems, duplicate or missing GUIDs and episodes without a usable audio enclosure.",
      "Each finding is explained in plain language with a pointer to what to fix, so you can resolve problems in your hosting dashboard before Apple Podcasts or Spotify rejects the feed.",
    ],
    steps: [
      { title: "Paste your feed", text: "Paste your feed’s XML (or load the sample) into the validator." },
      { title: "Run the check", text: "The validator parses the feed in your browser and checks required and recommended tags." },
      { title: "Review the findings", text: "Read errors first, then warnings. Each item explains why it matters." },
      { title: "Fix and re-check", text: "Update the settings in your podcast host, then paste the updated feed and run the check again." },
    ],
    tips: [
      "Never change an episode’s GUID after publishing — apps may treat it as a brand-new episode.",
      "Make sure the explicit tag is set correctly; it affects where your show can appear.",
      "Re-validate after switching hosts or redesigning artwork; those are the most common causes of new errors.",
    ],
  },
  "episode-timestamp-generator": {
    metaTitle: "Podcast Timestamp & Chapter Marker Generator | Pod Studio",
    metaDescription:
      "Generate clean podcast timestamp format and YouTube chapters generator timecodes. Create clickable markers for Spotify, Apple, and web. Free, no sign-up.",
    overview: [
      "The Timestamp Generator converts your production notes into formatted timecodes and YouTube chapter markers that trigger interactive scrub bars on YouTube, Spotify, and podcast player apps.",
      "Give listeners easy navigation between topics and help search engines index individual segments to improve discoverability across Google and directory charts.",
    ],
    steps: [
      { title: "Add your chapters", text: "Enter each chapter as a start time and a short title, or paste a quick list such as “0:00 Intro, 5:30 Breakthrough”." },
      { title: "Keep the format consistent", text: "Use one time format throughout and list chapters in the order they happen." },
      { title: "Check the timeline", text: "Review the visual timeline to spot gaps, duplicates or chapters that are too short." },
      { title: "Copy the chapters", text: "Copy the formatted list into your show notes, YouTube description or podcast host." },
    ],
    tips: [
      "YouTube requires the first timestamp to be 00:00 for chapters to appear.",
      "Write chapter labels as mini headlines — specific beats vague (“Pricing mistakes in year one” vs. “Part 2”).",
      "Aim for chapters of at least a few minutes; too many tiny chapters are hard to scan.",
    ],
    sections: [
      {
        heading: "How to format timestamps and YouTube chapters",
        paragraphs: [
          "Clickable chapters make long episodes approachable and let listeners navigate directly to the topics they care about most. On YouTube, timestamps formatted as “00:00 Intro” placed in the video description automatically generate a segmented scrub bar on the video player.",
          "To ensure your timecodes trigger YouTube chapters and Spotify chapter markers correctly, always include a timestamp starting at 00:00 (or 0:00), provide at least three chapters in ascending chronological order, and ensure each segment is at least ten seconds long.",
        ],
      },
    ],
  },
  "intro-script-generator": {
    metaTitle: "Podcast Intro Script Generator + Intro Examples | Pod Studio",
    metaDescription:
      "Write hook-driven hooks with our podcast intro script generator. Explore proven intro examples for solo, co-host, and interview shows. Free, no sign-up.",
    overview: [
      "The Podcast Intro Script Generator drafts punchy 30-to-60 second cold opens and episode introductions that hook listener attention and drastically reduce first-minute abandonment rates.",
      "Select your show format, guest details, and delivery tone to generate teleprompter-ready scripts built on curiosity triggers, bold promises, and high-stakes teasers.",
    ],
    steps: [
      { title: "Choose format and tone", text: "Pick guest interview, solo or story format, and a high-energy, reflective or conversational delivery." },
      { title: "Add your details", text: "Enter the episode topic or promise and, if relevant, the guest’s name and title." },
      { title: "Generate the script", text: "Get a short script that moves from hook to introduction to “here’s what you’ll learn”." },
      { title: "Read it aloud", text: "Practice it once or twice and trim any line that does not sound like you." },
    ],
    tips: [
      "Get to the point within the first 15 seconds — that is where many listeners decide to stay or skip.",
      "A strong guest quote makes an excellent cold open before your theme music.",
      "Keep recurring intros short; long sponsor or housekeeping segments belong later.",
    ],
    sections: [
      {
        heading: "Podcast intro examples",
        intro: "The first thirty seconds decide whether a listener finishes your episode or taps away. Here are five proven podcast intro examples you can adapt for your show:",
        list: [
          {
            title: "1. The Solo High-Stakes Hook",
            description: "“Most people spend five years grinding at their startup before discovering they built the wrong product. Today, I'm sharing the three validation tests that would have saved me $80,000. Welcome to Founders Playbook.”",
          },
          {
            title: "2. The Co-Host Banter & Teaser",
            description: "“Welcome back to The Watercooler. I'm Alex, and with me as always is Jordan. Jordan, before we debate today's Apple event, tell everyone why you almost got arrested at the airport yesterday...”",
          },
          {
            title: "3. The Guest Interview Teaser",
            description: "““If you don't fire your biggest client by month six, your agency will die.” That's what today's guest, David Miller, told me ten minutes before we hit record. Here's how he scaled to seven figures without burnout.”",
          },
          {
            title: "4. The Narrative Storytelling Cold Open",
            description: "“On a freezing Tuesday morning in February 2014, thirty-two servers in a Virginia datacenter went dark. What followed was the largest unsolved cryptocurrency breach in history. This is Darknet Chronicles.”",
          },
          {
            title: "5. The Actionable Business & Tech Intro",
            description: "“Want to rank on page one of Google without building hundreds of backlinks? In the next twenty minutes, we're breaking down the exact programmatic content architecture we used to generate 450,000 monthly visits.”",
          },
        ],
      },
    ],
  },
  "audience-growth-estimator": {
    metaTitle: "Podcast Download & Audience Growth Forecaster | Pod Studio",
    metaDescription:
      "Project your podcast downloads over 12 months from your current numbers, release schedule and monthly growth rate. Simple, free growth calculator.",
    overview: [
      "The Audience Growth Forecaster projects future downloads by applying a monthly growth rate to your current downloads per episode and multiplying by how often you publish.",
      "It is a simple compounding illustration rather than a prediction: it does not account for seasonality, viral spikes or churn. Use it to set realistic goals and to see how small improvements add up over a year.",
    ],
    steps: [
      { title: "Enter current downloads", text: "Add your current average 30-day downloads per episode." },
      { title: "Set your schedule", text: "Enter how many episodes you release each month." },
      { title: "Choose a growth rate", text: "Pick a monthly growth percentage that reflects your recent trend or your goal." },
      { title: "Read the chart", text: "Review the 12-month trajectory and see where you stand against global download percentiles." },
    ],
    tips: [
      "Use a modest growth rate first; compounding makes optimistic inputs look dramatic very quickly.",
      "Pair this forecast with the CPM calculator to see when sponsorship becomes realistic.",
      "Compare your forecast with actual numbers each month and adjust your inputs.",
    ],
  },
  "description-generator": {
    metaTitle: "Podcast Show & Episode Description Generator | Pod Studio",
    metaDescription:
      "Write clear podcast show and episode descriptions for Apple Podcasts and Spotify. Separate modes for your show summary and each episode. Free, no sign-up.",
    overview: [
      "The Description Generator drafts two kinds of copy: a show description that explains your podcast’s promise and audience, and episode descriptions that summarize a single recording.",
      "Good descriptions help listeners decide to follow and help podcast apps understand what your show is about, so the tool keeps the key information at the start where apps display it.",
    ],
    steps: [
      { title: "Choose a mode", text: "Select whether you are writing the show description or an episode description." },
      { title: "Add the essentials", text: "Enter your target audience, key topics and takeaways, and your links or call to action." },
      { title: "Check the cut-off", text: "See where mobile apps cut text off at “…more”, and make sure your hook and main keyword come first." },
      { title: "Edit and paste", text: "Adjust the wording to your voice and paste it into your hosting platform." },
    ],
    tips: [
      "Your first sentence matters most — many apps show only one or two lines before “more”.",
      "Name your audience directly (“for first-time founders”) so the right people recognize themselves.",
      "Use natural keywords, but never stuff lists of search terms; Apple may reject spammy descriptions.",
    ],
  },
  "category-finder": {
    metaTitle: "Apple Podcast Categories List & Category Finder | Pod Studio",
    metaDescription:
      "Browse the complete list of official apple podcast categories and Spotify genres. Find low-competition subcategories to rank your show. Free, no sign-up.",
    overview: [
      "The Category Finder helps you navigate the official Apple Podcasts taxonomy and Spotify podcast genres to find primary and secondary categories where your show has the best discoverability and chart ranking potential.",
      "Explore official category tiers, search by topic, and compare niche competition levels to position your podcast effectively.",
    ],
    steps: [
      { title: "Search by topic", text: "Type your main subject, such as “personal finance” or “true crime”." },
      { title: "Compare matches", text: "Review the suggested categories and subcategories side by side." },
      { title: "Pick a primary category", text: "Choose the category that best describes most of your episodes." },
      { title: "Copy the XML tag", text: "Click a subcategory to copy its iTunes category tag, or select the same category in your hosting dashboard." },
    ],
    tips: [
      "Choose the category your listeners would browse, not the one with the fewest competitors.",
      "A precise subcategory often gives a new show a better chance of being discovered.",
      "Check Apple’s current official list before publishing, as category names occasionally change.",
    ],
    sections: [
      {
        heading: "Apple Podcasts categories list",
        intro: "Below is the complete official taxonomy of primary and secondary categories recognized by Apple Podcasts and Spotify for directory placement and chart ranking:",
        groups: [
          {
            category: "Arts",
            items: ["Books", "Design", "Fashion & Beauty", "Food", "Performing Arts", "Visual Arts"],
          },
          {
            category: "Business",
            items: ["Careers", "Entrepreneurship", "Investing", "Management", "Marketing", "Non-Profit"],
          },
          {
            category: "Comedy",
            items: ["Comedy Interviews", "Improv", "Stand-Up"],
          },
          {
            category: "Education",
            items: ["Courses", "How To", "Language Learning", "Self-Improvement"],
          },
          {
            category: "Fiction",
            items: ["Comedy Fiction", "Drama", "Science Fiction"],
          },
          {
            category: "Government",
            items: ["Government", "Municipal", "National", "Public Administration"],
          },
          {
            category: "History",
            items: ["Ancient", "Medieval", "Military", "Modern", "Regional History"],
          },
          {
            category: "Health & Fitness",
            items: ["Alternative Health", "Fitness", "Medicine", "Mental Health", "Nutrition", "Sexuality"],
          },
          {
            category: "Kids & Family",
            items: ["Education for Kids", "Parenting", "Pets & Animals", "Stories for Kids"],
          },
          {
            category: "Leisure",
            items: ["Animation & Manga", "Automotive", "Aviation", "Crafts", "Games", "Hobbies", "Home & Garden", "Video Games"],
          },
          {
            category: "Music",
            items: ["Music Commentary", "Music History", "Music Interviews"],
          },
          {
            category: "News",
            items: ["Business News", "Daily News", "Entertainment News", "News Commentary", "Politics", "Sports News", "Tech News"],
          },
          {
            category: "Religion & Spirituality",
            items: ["Buddhism", "Christianity", "Hinduism", "Islam", "Judaism", "Religion", "Spirituality"],
          },
          {
            category: "Science",
            items: ["Astronomy", "Chemistry", "Earth Sciences", "Life Sciences", "Mathematics", "Natural Sciences", "Nature", "Physics", "Social Sciences"],
          },
          {
            category: "Society & Culture",
            items: ["Documentary", "Personal Journals", "Philosophy", "Places & Travel", "Relationships"],
          },
          {
            category: "Sports",
            items: ["Baseball", "Basketball", "Cricket", "Football", "Golf", "Hockey", "Rugby", "Running", "Soccer", "Swimming", "Tennis", "Volleyball", "Wilderness", "Wrestling"],
          },
          {
            category: "Technology",
            items: ["Artificial Intelligence", "Coding", "Consumer Tech", "Cybersecurity", "Software", "Tech News"],
          },
          {
            category: "True Crime",
            items: ["Investigations", "Serial Cases", "Unsolved Mysteries"],
          },
          {
            category: "TV & Film",
            items: ["After Shows", "Film Criticisms", "Film History", "Film Interviews", "TV Reviews"],
          },
        ],
      },
    ],
  },
  "hook-generator": {
    metaTitle: "Podcast Hook & Cold Open Generator | Pod Studio",
    metaDescription:
      "Craft punchy cold opens and audio hooks with our free podcast hook generator. Stop listener drop-off in the first 60 seconds of show. Free, no sign-up.",
    overview: [
      "The Podcast Hook & Cold Open Generator creates scroll-stopping opening lines and high-curiosity video hooks from your episode concepts, keeping listeners engaged from the first few seconds.",
      "Enter your episode topic and guest to generate hooks optimized for TikTok, Instagram Reels, YouTube Shorts, and on-air podcast cold opens.",
    ],
    steps: [
      { title: "Enter the subject", text: "Describe the episode subject or industry the clip is about." },
      { title: "Add a guest (optional)", text: "Include the featured guest when their name or expertise is the draw." },
      { title: "Pick a hook style", text: "Filter by hook style and compare several opening lines." },
      { title: "Copy and post", text: "Use the best hook as on-screen text or caption, and link back to the full episode." },
    ],
    tips: [
      "The first line has about two seconds to earn attention — lead with the most specific claim.",
      "Make sure the clip actually delivers on the hook; misleading hooks hurt trust.",
      "Add captions to every video clip; many people watch with the sound off.",
    ],
  },
  "transcript-formatter": {
    metaTitle: "Podcast Transcript Format & Cleaner Tool | Pod Studio",
    metaDescription:
      "Clean AI audio text into standard podcast transcript format. Add speaker tags, format clean paragraphs, and remove filler words easily. Free, no sign-up.",
    overview: [
      "The Podcast Transcript Formatter cleans raw automated speech-to-text exports into standard podcast transcript format with clean speaker tags, stripped filler words, and publication-ready paragraphs.",
      "Runs 100% in your browser for complete privacy, preparing accessible transcripts ready for episode web pages, SEO show notes, and blog adaptations.",
    ],
    steps: [
      { title: "Paste your transcript", text: "Copy the text export from your transcription service and paste it into the editor." },
      { title: "Name your speakers", text: "Replace generic labels such as “SPEAKER_00” with real names, and choose whether to remove inline timestamps." },
      { title: "Preview the result", text: "Check the formatted transcript and make any manual corrections." },
      { title: "Copy or download", text: "Copy the clean text or download it to publish on your website or host." },
    ],
    tips: [
      "Publishing transcripts makes episodes accessible and gives search engines real text to index.",
      "Remove fillers for readability, but keep wording that changes the meaning of a quote.",
      "Proofread names and technical terms — transcription tools often get these wrong.",
    ],
    sections: [
      {
        heading: "Standard podcast transcript format (example)",
        intro: "Podcast directories and web crawlers expect transcripts formatted with clear speaker labels, consistent timestamp markers, and clean paragraphs:",
        template: `[00:00:02] Sarah Jenkins (Host):
Welcome back to The Creative Frontier. Today we're diving into how independent audio creators can build sustainable revenue without selling out. My guest today is Marcus Vance, founder of AudioFirst Media. Marcus, welcome to the show.

[00:00:24] Marcus Vance (Guest):
Thanks for having me, Sarah. It's great to be here. Honestly, the biggest mistake I see new hosts make is focusing on sponsor CPMs before they've even built a predictable listener retention loop.

[00:00:41] Sarah Jenkins (Host):
Let's unpack that. When you say "retention loop", what does that look like in practice for someone publishing their first twenty episodes?

[00:00:52] Marcus Vance (Guest):
It comes down to three things: a repeatable episode opening that promises clear value within thirty seconds, consistent segment pacing so the listener never gets lost, and a single, focused call to action at the end.`,
      },
    ],
  },
  "trailer-script-builder": {
    metaTitle: "Podcast Trailer Script Builder & Template | Pod Studio",
    metaDescription:
      "Write a short podcast trailer script that explains your show, who it is for and why to subscribe. Structured template for 60–90 second trailers. Free.",
    overview: [
      "The Trailer Script Builder gives you a proven structure for a short podcast trailer: a hook, what the show is about, who it is for, what makes it different and a clear call to follow.",
      "Many directories feature a trailer prominently on your show page, so it is often the first thing new listeners hear. This tool helps you make those 60–90 seconds count.",
    ],
    steps: [
      { title: "Enter the show basics", text: "Add your show title, host name and release schedule." },
      { title: "State the big question", text: "Write the central question your show explores and the promise you make to listeners." },
      { title: "Generate the script", text: "Get a structured script with hook, body and call to action." },
      { title: "Record and trim", text: "Read it aloud, time it, and cut any line that repeats an idea." },
    ],
    tips: [
      "Include a short real clip from an episode if you have one — it shows instead of tells.",
      "End with one clear action: follow the show on the listener’s app.",
      "Update your trailer when the show’s focus or format changes.",
    ],
  },
  "review-response-generator": {
    metaTitle: "Podcast Review Response & Shoutout Generator | Pod Studio",
    metaDescription:
      "Write thoughtful replies to podcast reviews and on-air listener shoutouts — for praise and criticism alike. Professional, friendly templates. Free tool.",
    overview: [
      "The Review Response Generator helps you reply to listener reviews and write on-air shoutouts that thank supporters and encourage more people to rate the show.",
      "It covers glowing reviews, constructive feedback and unfair criticism, with responses that stay respectful, avoid defensiveness and mention concrete improvements where they make sense.",
    ],
    steps: [
      { title: "Add the review", text: "Enter the reviewer’s name or handle and what they said." },
      { title: "Set the sentiment", text: "Mark the review as 5-star praise, constructive feedback or critical." },
      { title: "Pick a format", text: "Get an on-air shoutout script, a social media reply and a private thank-you message." },
      { title: "Personalize it", text: "Add a detail from the review so the listener knows you read it." },
    ],
    tips: [
      "Read a few reviews on air each month — it is one of the simplest ways to get more ratings.",
      "Never name or mock a critical reviewer; respond to the point, not the person.",
      "Thank listeners for specific feedback and mention what you changed because of it.",
    ],
  },
  "collab-finder": {
    metaTitle: "Podcast Guest Pitch & Collab Email Builder | Pod Studio",
    metaDescription:
      "Write podcast guest pitches and cross-promotion emails that get replies. Explain mutual value, format and next steps clearly. Free outreach templates.",
    overview: [
      "The Guest Pitch & Collab Outreach builder drafts emails for pitching yourself as a guest, inviting a guest onto your show or proposing a cross-promotion with another podcast.",
      "Each draft explains who your show serves, the proposed format, the value for both sides and a simple next step — the elements busy hosts look for before saying yes.",
    ],
    steps: [
      { title: "Choose your goal", text: "Pitch yourself as a guest, invite a guest to your show, or propose a promo or feed swap." },
      { title: "Add both shows", text: "Enter the target show and host, your podcast name, and the specific angle or value you offer." },
      { title: "Generate the email", text: "Get a concise draft with subject line, value proposition and clear call to action." },
      { title: "Personalize and send", text: "Mention a specific episode of theirs you enjoyed, then send from your own email." },
    ],
    tips: [
      "Keep the first email short — five or six sentences is plenty.",
      "Only share audience numbers you can verify; overstated stats damage trust quickly.",
      "Follow up once after a week, then move on politely if you do not hear back.",
    ],
  },
};
