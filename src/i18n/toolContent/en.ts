import type { ToolContentRecord } from "./types";

export const enToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Free Podcast Episode Title Generator | Pod Studio",
    metaDescription:
      "Turn an episode topic into dozens of clear, clickable podcast titles. Filter by style — curiosity, how-to, contrarian — and copy your favorite. Free, no sign-up.",
    overview: [
      "The Episode Title Generator turns a topic, and optionally a guest name, into a long list of title ideas built on proven patterns: how-to promises, curiosity gaps, contrarian takes, numbered lists and guest-led hooks.",
      "It is built for hosts who know what the episode is about but are stuck on how to say it. Use it to explore angles quickly, then pick the title that describes the episode honestly and reads well on a small phone screen.",
    ],
    steps: [
      { title: "Describe the episode", text: "Type the main topic in a few words, such as “budgeting for freelancers” or “first 100 subscribers”." },
      { title: "Add a guest (optional)", text: "Include the guest’s name or expertise when they are the main reason people will press play." },
      { title: "Filter by style", text: "Switch between curiosity, how-to, contrarian and other formulas to compare different angles side by side." },
      { title: "Copy or export", text: "Copy a single title, or export the full list as a text file to share with your co-host or editor." },
    ],
    tips: [
      "Put the most specific, searchable words in the first half of the title — podcast apps often cut off the end.",
      "Promise only what the episode delivers. Accurate titles earn better completion rates and fewer negative reviews.",
      "Leave episode numbers and your show name out of the title unless your listeners rely on them.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Free Podcast Show Notes Generator & Template | Pod Studio",
    metaDescription:
      "Create clean podcast show notes with a summary, guest bio, timestamps, key takeaways and links. Export as Markdown, HTML or plain text. Free, no sign-up.",
    overview: [
      "The Show Notes Generator assembles your episode details into well-structured show notes: a short summary, featured guest, chapter timestamps, key takeaways and the resources you mentioned.",
      "Output is available as Markdown, HTML or plain text, so you can paste it straight into Buzzsprout, Libsyn, Podbean, Spotify for Creators, YouTube or your own website without reformatting.",
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
  },
  "podcast-name-generator": {
    metaTitle: "Free Podcast Name Generator — Show Name Ideas | Pod Studio",
    metaDescription:
      "Brainstorm memorable podcast name ideas by niche, theme and brand style. Shortlist your favorites, then check domains and trademarks yourself. Free, no sign-up.",
    overview: [
      "The Podcast Name Generator suggests show names based on your niche, an optional custom word or theme, and the brand style you want — from straightforward and searchable to playful and brandable.",
      "It is a brainstorming tool: it does not check domain or trademark availability. Use it to build a shortlist, then confirm the name with a domain registrar, podcast directories and a trademark search before you announce it.",
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
  },
  "episode-outline-builder": {
    metaTitle: "Podcast Episode Outline & Run-of-Show Builder | Pod Studio",
    metaDescription:
      "Build a timed podcast run of show with cold open, intro, segments, sponsor reads and outro. Keep recordings on schedule. Free template, no sign-up.",
    overview: [
      "The Episode Outline Builder creates a timed run of show: a production roadmap that lists each segment, roughly when it starts and how long it should last.",
      "It helps hosts, guests and producers stay in sync on music cues, sponsor reads, interview blocks and calls to action, without scripting every word of the conversation.",
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
  },
  "guest-question-generator": {
    metaTitle: "Podcast Interview Question Generator | Pod Studio",
    metaDescription:
      "Generate thoughtful podcast interview questions for any guest, from icebreakers to deep-dive stories and rapid-fire rounds. Free, no sign-up required.",
    overview: [
      "The Guest Question Generator builds a full question arc for your interview, moving from easy icebreakers and origin stories to turning points, lessons learned, predictions and a rapid-fire round.",
      "Enter the guest’s name, profession and the episode topic to get a tailored starting list you can refine with your own research.",
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
  },
  "monetization-calculator": {
    metaTitle: "Podcast CPM & Sponsorship Revenue Calculator | Pod Studio",
    metaDescription:
      "Estimate podcast ad revenue from downloads, CPM rates, ad slots and fill rate. Compare pre-roll, mid-roll and post-roll plus listener support. Free calculator.",
    overview: [
      "The CPM & Sponsorship Calculator estimates what your show could earn from ads using the standard formula: (downloads ÷ 1,000) × CPM × filled ad placements.",
      "Adjust downloads per episode, release frequency, pre-roll, mid-roll and post-roll slots, fill rate and listener memberships to see monthly, per-episode and annual projections — useful for pricing sponsors and setting goals.",
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
  },
  "cover-art-preview": {
    metaTitle: "Podcast Cover Art Previewer: Apple & Spotify | Pod Studio",
    metaDescription:
      "Preview your podcast cover art as it appears in Apple Podcasts, Spotify, lock screens and small thumbnails. Check size and readability. Free, private.",
    overview: [
      "The Cover Art Previewer shows how your podcast artwork looks in Apple Podcasts-style and Spotify-style layouts, on a mobile lock screen and as a tiny search thumbnail.",
      "Your image never leaves your device. It is checked against the common directory requirement of a square image between 1400 × 1400 and 3000 × 3000 pixels, so you can catch problems before you upload.",
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
    metaTitle: "Podcast Chapter Markers & Timestamp Generator | Pod Studio",
    metaDescription:
      "Turn rough notes into clean chapter timestamps for YouTube, Spotify and podcast show notes. Consistent HH:MM:SS formatting in one click. Free, no sign-up.",
    overview: [
      "The Timestamp & Chapter Generator turns your recording notes into tidy chapter markers such as “00:00 Introduction” and “05:12 Guest background”, with a visual timeline of the episode.",
      "Use the output in YouTube descriptions, Spotify episode descriptions and show notes to help listeners jump to the part they care about — and to give search engines a clearer picture of what the episode covers.",
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
  },
  "intro-script-generator": {
    metaTitle: "Podcast Intro Script & Cold Open Generator | Pod Studio",
    metaDescription:
      "Write a short podcast intro and cold open hook that tells listeners why to stay. Templates for interview and solo shows. Free intro script generator.",
    overview: [
      "The Intro Script Generator helps you write the first 30–60 seconds of an episode: a hook that creates curiosity or relevance, followed by a short host introduction that sets expectations.",
      "Choose a format and delivery tone, fill in a few details, and get a ready-to-read script in a teleprompter-style view that you can adapt to your voice.",
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
    metaTitle: "Apple Podcasts & Spotify Category Finder | Pod Studio",
    metaDescription:
      "Find the best Apple Podcasts categories and subcategories for your show. Search by topic, compare options and choose your primary category. Free tool.",
    overview: [
      "The Category Finder helps you choose the right Apple Podcasts category and subcategory for your show. Apple lets you select up to two categories, and the primary one is the most prominent.",
      "Search by topic or keyword to see matching categories and subcategories, then copy the exact XML tag for your RSS feed with one click.",
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
  },
  "hook-generator": {
    metaTitle: "Podcast Clip Hook & Social Quote Generator | Pod Studio",
    metaDescription:
      "Write scroll-stopping hooks for podcast clips on TikTok, Reels, YouTube Shorts and LinkedIn. Pick a style, compare options and copy. Free, no sign-up.",
    overview: [
      "The Social Hook & Clip Generator writes short, scroll-stopping opening lines for podcast clips and posts, so the best moments of an episode can work on their own.",
      "Enter the episode subject and, optionally, a featured guest, then pick a hook style to get several lines you can use as on-screen text or captions on TikTok, Instagram Reels, YouTube Shorts or LinkedIn.",
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
    metaTitle: "Podcast Transcript Cleaner & Formatter | Pod Studio",
    metaDescription:
      "Clean up podcast transcripts: standardize speaker labels, remove filler words and timestamps, and format for show notes or blogs. Free, private, in-browser.",
    overview: [
      "The Transcript Cleaner tidies text transcripts from any transcription service. Replace generic speaker labels with real names, remove common filler words such as “um” and “uh”, and strip or keep inline timestamps.",
      "It works on text you paste in — it does not transcribe audio. The result is easier to read and ready to publish as an accessible transcript, blog post or show-notes excerpt.",
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
