import type { LocalizedGuideArticle } from "../guidesData";

export const catchyTitlesGuideEn: Record<string, LocalizedGuideArticle> = {
  "how-to-come-up-with-catchy-podcast-episode-titles": {
    title: "How to Come Up With a Catchy Podcast Episode Title",
    metaTitle: "How to Come Up With a Catchy Podcast Episode Title | Pod Studio",
    description:
      "Not sure how to title your next episode? Use this 5-step process, do's and don'ts, and before/after examples to write catchy podcast episode titles fast.",
    readTime: "6 min read",
    publishedAt: "2026-11-06",
    category: "Marketing",
    sections: [
      {
        heading: "How Do You Come Up With a Catchy Podcast Episode Title?",
        paragraphs: [
          "Start with the one thing a listener gets from the episode, put the words they would search for at the front, then write several versions and pick the clearest. A catchy title is specific, short enough to survive truncation on a phone, and promises a payoff you actually deliver.",
          "Most creators stall because they try to be clever on the first draft. The process below separates idea generation from editing, so you always have options to choose from instead of staring at a blank field.",
        ],
      },
      {
        heading: "A 5-Step Process for Naming Any Episode",
        paragraphs: [
          "Run this routine after you finish recording, while the episode is still fresh. It takes about ten minutes.",
        ],
        list: [
          { title: "1. Name the payoff in one sentence", description: "Finish this line: “After this episode, the listener will know or feel ___.” That sentence is the raw material for every title option." },
          { title: "2. Pull out the searchable keyword", description: "Pick the two or three words a stranger would type into Apple Podcasts or Spotify, such as “meal prep”, “first marathon” or “cold email”." },
          { title: "3. Write at least eight drafts", description: "Use different angles: a question, a number, a how-to, a mistake, a guest name, a bold claim. Do not judge yet; quantity is the point." },
          { title: "4. Cut each draft down", description: "Remove filler words and anything that repeats your show name. Aim to land the main idea within the first 40 characters." },
          { title: "5. Test on a phone-sized preview", description: "Read your top three the way a listener sees them in a feed. Choose the one that is clearest about what they get, not the cleverest." },
        ],
      },
      {
        heading: "Before and After: Weak Titles Made Catchy",
        paragraphs: [
          "Small rewrites make a big difference. Notice that each stronger version is more specific, not just more dramatic.",
        ],
        cards: [
          {
            title: "Vague",
            value: "“Episode 42: A Great Chat”",
            description: "Says nothing about the topic, the guest or the benefit.",
          },
          {
            title: "Catchy",
            value: "“Why Most First Marathons End at Mile 20”",
            description: "Specific, curiosity-driven and searchable for beginner runners.",
            highlight: true,
          },
          {
            title: "Keyword-first",
            value: "“Cold Email Templates That Still Get Replies in 2026”",
            description: "The searchable phrase leads, and the promise is clear.",
            highlight: true,
          },
        ],
      },
      {
        heading: "Title Do's: Habits That Earn Plays",
        paragraphs: ["Build these into your routine and your titles will improve without extra effort."],
        list: [
          { title: "Do lead with the topic", description: "Phones and car screens cut titles short, so the subject belongs in the first few words." },
          { title: "Do promise something concrete", description: "A number, a result or a clear question gives the listener a reason to press play." },
          { title: "Do use your audience's own words", description: "Match how listeners describe the problem, not your industry jargon." },
          { title: "Do keep one idea per title", description: "One clear angle is easier to remember and share than three squeezed together." },
          { title: "Do name a guest when they are the draw", description: "A recognizable name is a search term and a trust signal." },
          { title: "Do stay consistent", description: "A repeatable pattern across episodes helps regular listeners scan your feed." },
        ],
      },
      {
        heading: "Title Don'ts: Mistakes That Quietly Cost Downloads",
        paragraphs: ["Avoid these even when a title feels fun to write."],
        list: [
          { title: "Don't start with the episode number", description: "Apps already show it in a separate field, and it uses up your most visible characters." },
          { title: "Don't write clickbait you can't back up", description: "Over-promising leads to early drop-offs and weak reviews." },
          { title: "Don't use inside jokes", description: "If only regulars understand it, newcomers will scroll past." },
          { title: "Don't stuff keywords", description: "A string of search terms reads as spam. One natural phrase is enough." },
          { title: "Don't make it long", description: "Very long titles get cut off, and the payoff is lost." },
          { title: "Don't rename after launch without care", description: "Edit the title in your host if needed, but never change the episode's GUID or apps may treat it as a new episode." },
        ],
      },
      {
        heading: "Stuck? Generate Options in Seconds",
        paragraphs: [
          "If step 3 feels slow, paste your episode topic into the free Episode Title Generator below. It produces a spread of formulas you can edit, and you can pair it with our guide on clickable episode title formulas for deeper examples.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long should a catchy podcast episode title be?",
        answer:
          "There is no universal limit, but shorter is safer. Aim for roughly 50 to 60 characters and put the main idea in the first few words so it still makes sense when an app truncates it.",
      },
      {
        question: "Should I include keywords in my episode title?",
        answer:
          "Yes, one natural keyword phrase that your listeners would actually search for. Place it early, and avoid stringing several keywords together.",
      },
      {
        question: "Is it okay to use a question as a title?",
        answer:
          "Yes. A direct question that your episode answers works well, as long as the answer is clear in the episode and the question matches what people really ask.",
      },
      {
        question: "Should the episode title match the title of the audio file or the show notes?",
        answer:
          "The RSS episode title is what apps display, so write that one carefully. Your show notes page can use a longer, search-focused headline as long as both describe the same topic.",
      },
    ],
    cta: {
      title: "Generate Catchy Episode Titles Now",
      description: "Turn your episode topic into a spread of title options with our free generator.",
      buttonText: "Open Episode Title Generator",
      toolSlug: "episode-title-generator",
    },
  },
};
