import type { GuideExtrasRecord } from "./types";

export const enGuideExtras: GuideExtrasRecord = {
  "podcast-sponsorship-cpm-guide-2026": {
    metaTitle: "Podcast Sponsorship & CPM Rates Guide (2026) | Pod Studio",
    readMinutes: 5,
    sections: [
      {
        heading: "Worked Example: Pricing One Episode",
        paragraphs: [
          "Say your episodes average 5,000 downloads in their first 30 days. Divide by 1,000 to get 5 “units”, then multiply by the CPM for each placement.",
          "At $18 for a pre-roll, $25 for a host-read mid-roll and $10 for a post-roll, one fully sold episode is worth $90 + $125 + $50 = $265. If you publish four episodes a month and sell every slot, that is about $1,060 a month before any agency or network commission.",
        ],
        formula: "5,000 ÷ 1,000 = 5 → (5 × $18) + (5 × $25) + (5 × $10) = $265 per episode",
      },
      {
        heading: "Host-Read vs. Programmatic Ads",
        paragraphs: [
          "Host-read ads are written or approved by the sponsor and read in your own voice. Listeners trust them, which is why they earn the highest rates. They can be recorded into the episode (“baked in”) or inserted dynamically so they can be swapped later.",
          "Programmatic ads are bought automatically through an ad network and inserted by your hosting platform. They usually pay lower CPMs but can fill inventory you have not sold directly — useful for back-catalog episodes that keep getting downloads.",
        ],
      },
      {
        heading: "What to Include in a Sponsor Pitch",
        paragraphs: ["Sponsors want to judge fit and risk quickly. A one-page media kit should cover:"],
        list: [
          { title: "Audience profile", description: "Who listens, what they care about and why that matches the sponsor’s customers." },
          { title: "Verified downloads", description: "Average 30-day downloads per episode, with screenshots from your host if asked." },
          { title: "Placements and rates", description: "Which slots are available, their length and your CPM or flat price." },
          { title: "Proof of performance", description: "A sample read, past results or a promo-code offer that lets the sponsor measure response." },
        ],
      },
      {
        heading: "Options for Smaller Shows",
        paragraphs: [
          "If CPM deals do not add up yet, many independent shows start with a flat fee per episode, affiliate links or promo codes that pay per sale, and direct listener support through memberships. These build a track record you can use to negotiate CPM-based deals as your audience grows.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a good CPM for a small podcast?",
        answer:
          "There is no fixed rate. The ranges in this guide are a starting point; niche shows with a clearly defined, high-intent audience can often charge more, while broad entertainment shows may charge less. Many small shows begin with flat-fee or affiliate deals and move to CPM pricing once downloads are consistent.",
      },
      {
        question: "How many downloads do I need to get sponsors?",
        answer:
          "There is no universal threshold. Ad networks often set minimum download requirements, but direct sponsors in a specific niche may work with smaller shows if the audience is a strong match. Consistent publishing and accurate download data matter more than a single big number.",
      },
      {
        question: "Do sponsors pay per download or per episode?",
        answer:
          "CPM deals are priced per 1,000 downloads, usually counted over the first 30–45 days after release. Some sponsors prefer a flat fee per episode or per campaign, and affiliate deals pay per sale or sign-up. Always agree in writing how downloads are measured and reported.",
      },
    ],
  },
  "apple-spotify-cover-art-specs-guide": {
    metaTitle: "Podcast Cover Art Specs for Apple & Spotify | Pod Studio",
    readMinutes: 5,
    sections: [
      {
        heading: "Design for the Thumbnail First",
        paragraphs: [
          "Most people first see your artwork at roughly the size of a fingertip — in search results, charts and “up next” lists. Artwork that looks great at full size can turn into an unreadable smudge when shrunk.",
        ],
        list: [
          { title: "Use few, large words", description: "Your show name, in a bold typeface, is usually enough. Leave taglines for your description." },
          { title: "Maximize contrast", description: "Light text on dark, or dark on light. Avoid busy photos behind text." },
          { title: "Pick one focal point", description: "A face, an icon or the title — not all three competing for attention." },
        ],
      },
      {
        heading: "Safe Zones and Cropping",
        paragraphs: [
          "Some apps round the corners of artwork or overlay small badges. Keep your title, logo and any faces inside the central area of the square — roughly the middle 80% — so nothing important gets clipped.",
        ],
      },
      {
        heading: "Common Reasons Artwork Gets Rejected",
        paragraphs: ["Beyond size and format, directories review artwork for content and quality. Avoid:"],
        list: [
          { title: "Platform logos and trademarks", description: "Do not use the Apple Podcasts or Spotify logos, or imply an endorsement you do not have." },
          { title: "Low-resolution or stretched images", description: "Upscaled, blurry or distorted artwork may be rejected or look unprofessional." },
          { title: "Explicit or misleading imagery", description: "Artwork must be appropriate and represent the show honestly." },
        ],
      },
      {
        heading: "Pre-Upload Checklist",
        paragraphs: ["Before you upload, confirm that your file is:"],
        list: [
          { title: "Square at 3000 × 3000 px", description: "Exactly 1:1, within the 1400–3000 px range." },
          { title: "JPEG or PNG in RGB", description: "Use the RGB color space, not CMYK, with the correct .jpg or .png extension." },
          { title: "Readable at 50 × 50 px", description: "Check it in a small preview before publishing." },
          { title: "Saved with a new file name", description: "When you update artwork, a new file name helps apps notice the change." },
        ],
      },
    ],
    faqs: [
      {
        question: "What size should podcast cover art be?",
        answer:
          "Use a square image of 3000 × 3000 pixels. Apple Podcasts accepts 1400 × 1400 to 3000 × 3000 pixels in JPEG or PNG format with an RGB color space; a 3000 px square also works for Spotify and other apps.",
      },
      {
        question: "Can I use the same artwork on Apple Podcasts and Spotify?",
        answer:
          "Yes. Both read the artwork from your RSS feed or hosting settings, so a single 3000 × 3000 px square that meets Apple’s requirements will work across the major apps.",
      },
      {
        question: "Why isn’t my new cover art showing up?",
        answer:
          "Podcast apps cache artwork, so updates can take from hours to several days to appear. Make sure your feed points to the new image URL — using a new file name helps — and that the file still meets the size and format requirements.",
      },
    ],
  },
  "how-to-write-clickable-episode-titles": {
    metaTitle: "How to Write Clickable Podcast Episode Titles | Pod Studio",
    description:
      "Proven formulas for podcast episode titles that stand out in Apple Podcasts and Spotify — with examples, search tips and the mistakes to avoid.",
    firstHeading: "Why Your Episode Title Matters",
    readMinutes: 5,
    sections: [
      {
        heading: "Five More Formulas to Try",
        paragraphs: ["Combine these with the three archetypes above to explore different angles for the same episode:"],
        list: [
          { title: "4. The How-To Promise", description: "“How to Launch a Podcast on a $100 Budget” — clear, searchable and useful." },
          { title: "5. The Numbered List", description: "“7 Interview Questions That Unlock Better Stories” — sets expectations at a glance." },
          { title: "6. The Guest-Led Hook", description: "“[Guest Name] on Building a Brand Without Social Media” — when the guest is the draw." },
          { title: "7. The Direct Question", description: "“Is Cold Email Dead in 2026?” — invites the listener to find out." },
          { title: "8. The Mistake Frame", description: "“The Pricing Mistake That Cost Us Our First Year” — specific stakes, real lesson." },
        ],
      },
      {
        heading: "Titles and Podcast Search",
        paragraphs: [
          "Apple Podcasts and Spotify search look at the words in your show and episode titles and descriptions. Using the words your listeners would actually type — “budgeting”, “marathon training”, “true crime Ohio” — helps the right people find the episode.",
          "Put those words early, because titles are often cut off on small screens. A clear subject at the start beats a clever phrase that only makes sense once someone has listened.",
        ],
      },
      {
        heading: "Common Title Mistakes",
        paragraphs: ["These habits quietly cost plays:"],
        list: [
          { title: "Leading with the episode number", description: "Apps already show episode numbers; “Ep. 112:” wastes your most visible characters." },
          { title: "Vague teasers", description: "“A Great Conversation” tells new listeners nothing about why to press play." },
          { title: "Clickbait that doesn’t pay off", description: "Over-promising leads to early drop-offs and negative reviews." },
          { title: "Inside jokes", description: "References only regular listeners understand make the episode invisible to newcomers." },
        ],
      },
      {
        heading: "A Simple Title Routine",
        paragraphs: [
          "Write at least ten options using different formulas, shortlist three, and read them on your phone the way a listener would see them. Pick the one that is clearest about the payoff. Over time, compare first-week downloads across title styles to learn what your audience responds to.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I put the episode number in the title?",
        answer:
          "Usually not. Podcast feeds have a separate episode-number field that apps can display, so repeating it in the title takes up space that is better used for the topic. Serialized shows where order matters are the main exception.",
      },
      {
        question: "How long should a podcast episode title be?",
        answer:
          "There is no official limit that applies everywhere, but shorter is safer. Keep the core idea in the first few words so it survives truncation on phones, car screens and watch apps.",
      },
      {
        question: "Can I change an episode title after publishing?",
        answer:
          "Yes. Update it in your hosting platform and the change will flow through your RSS feed; apps may take some time to refresh. Do not change the episode’s GUID, or apps may treat it as a new episode.",
      },
    ],
  },
};
