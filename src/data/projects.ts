export type ProjectStatus = "live" | "building";
export type ProjectSize = "large" | "medium" | "small";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  studio: string;
  url: string | null;
  tag: string;
  tagline: string;
  description: string;
  features: ProjectFeature[];
  closingLine: string;
  status: ProjectStatus;
  size: ProjectSize;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "ministry-of-susan",
    name: "Ministry of Susan",
    studio: "Mnemo",
    url: "susan.mnemolabs.app",
    tag: "Eldercare AI",
    tagline: "The care team, finally on the same page.",
    description:
      "Role-aware AI care companion for families coordinating remote elderly care — one shared source of truth for schedule, notes, meds and invoices. Everyone sees exactly what they need, nothing more.",
    features: [
      {
        title: "Everyone gets their own view",
        description:
          "Magic-link login, no passwords. The family admin sees everything, carers see care info plus their own pay, family gets a warm read-only window in.",
      },
      {
        title: "Quick Add",
        description:
          "Speak it, snap it, or paste it — a dictated note, a receipt photo, a rota screenshot — parsed and filed automatically.",
      },
      {
        title: "A schedule that's always current",
        description:
          "Pulls straight from the calendar feed and ingests rota screenshots or PDFs directly, no manual re-typing.",
      },
      {
        title: "Smart Timeline",
        description:
          "A searchable life story and care history any new carer or family member can actually use.",
      },
      {
        title: "AI-parsed invoicing",
        description:
          "Carers dictate or photograph their hours and receipts; the app itemises, calculates and routes it for approval.",
      },
      {
        title: "Affairs stay private",
        description:
          "Finances and legal admin live behind an owner-only wall, never exposed to carers' devices.",
      },
    ],
    closingLine:
      "Built for the people actually doing the work — not another dashboard nobody opens.",
    status: "live",
    size: "large",
    accentColor: "#A8C5A0",
  },
  {
    id: "davanity",
    name: "Davanity",
    studio: "Mnemo",
    url: "dav.mnemolabs.app",
    tag: "Health AI",
    tagline: "Three sensors. One honest referee.",
    description:
      "Your food log, your wearable and your scale never agree, and each lies in a known direction. Davanity triangulates all three against the one referee that can't fib — your weight trend.",
    features: [
      {
        title: "The referee's verdict",
        description:
          "Every week is ruled by the scale, not your logging, and named as energy pulled from your own stores.",
      },
      {
        title: "Instrument calibration",
        description:
          "Learns your combined logging and wearable bias over time, so your real maintenance gets corrected, not guessed.",
      },
      {
        title: "Snap before you eat",
        description:
          "An honest calorie range and specific coaching — reads menus, barcodes and leftovers alike.",
      },
      {
        title: "Trend over daily",
        description:
          "The 7-day trend is the signal; the daily weigh-in is noise. A journey band shows how far you've really come.",
      },
      {
        title: "Progress photos, done honestly",
        description:
          "Matched pairs compared over weeks. No body-fat percentage, no invented daily score.",
      },
      {
        title: "Behaviour couplings",
        description:
          "Weekend leakage, short sleep, alcohol nights — joins across food, scale and wearable that no single device could make alone.",
      },
    ],
    closingLine:
      "Honest instruments that would rather tell you the truth than make you feel good.",
    status: "live",
    size: "medium",
    accentColor: "#C5A8B5",
  },
  {
    id: "pond-hopping",
    name: "Pond Hopping",
    studio: "eend.app",
    url: "pond.eend.app",
    tag: "Travel AI",
    tagline: "Every trip you've taken, one living map.",
    description:
      "AI travel planning built for people who move constantly — describe the trip in plain English and it drafts the flights and structure. Every booking confirmation turns into a reviewed itinerary, automatically.",
    features: [
      {
        title: "A living map",
        description:
          "Every trip draws itself onto a 3D globe as an animated flight path. Tap one to unfold flights, photos and journal.",
      },
      {
        title: "A planner that actually plans",
        description:
          "Describe the trip in plain English and a built-in AI chat keeps refining it as things change.",
      },
      {
        title: "A concierge that's actually useful",
        description:
          "Knows what's missing before you land, and surfaces loyalty-eligible hotels against your real status, not generic search.",
      },
      {
        title: "Forward an email, watch it appear",
        description:
          "Booking confirmations get parsed and added as a one-tap review — no inbox scraping, no OAuth maze.",
      },
      {
        title: "Every flight, tracked properly",
        description:
          "Real routes, aircraft type, terminal and baggage info, delay tracking — not a boarding-pass screenshot.",
      },
      {
        title: "Built for two",
        description:
          "Real shared accounts and trip-level permissions, so you can plan together and see what's already sorted.",
      },
    ],
    closingLine:
      "Actually installable — native apps on your home screen, not a website pretending to be one.",
    status: "live",
    size: "medium",
    accentColor: "#A8B5C5",
  },
  {
    id: "moritzwith",
    name: "DuckWorth",
    studio: "eend.app",
    url: "smith.eend.app",
    tag: "Finance AI",
    tagline: "The AI reads. The database counts.",
    description:
      "Household finance for money that moves between people — real shared balances, receipts that split themselves, net worth across two currencies. Every figure comes from your actual transactions, never a language model's guess.",
    features: [
      {
        title: "Balances between people, not just budgets",
        description:
          "An all-time ledger of who's owed what, built from every transaction and repayment since the line was drawn.",
      },
      {
        title: "Receipts that split themselves",
        description:
          "Photograph one and it's itemised line by line — discounts and surcharges land where they belong.",
      },
      {
        title: "It learns your merchants",
        description:
          "Categorise a charge once and it's remembered — and instantly correctable — from then on.",
      },
      {
        title: "Ask in plain English",
        description:
          "“How much have I paid Jennifer in the last 3 months?” The AI reads the question; the database does the arithmetic.",
      },
      {
        title: "Net worth, whole picture",
        description:
          "Pensions, shares with live quotes, property and super — GBP and AUD, side by side, never silently relabelled.",
      },
      {
        title: "Checks its own work",
        description:
          "Reconciles nightly, shows you what moved, and never deletes an attribution without showing you the list first.",
      },
    ],
    closingLine:
      "The AI reads. The database counts. No total in this app was ever written by a language model.",
    status: "live",
    size: "small",
    accentColor: "#C5C0A8",
  },
  {
    id: "nous",
    name: "Nous",
    studio: "eend.app",
    url: "nous.eend.app",
    tag: "Trading AI",
    tagline: "A panel of rival AIs calls the market — and grades its own homework, in public.",
    description:
      "A panel of AI models — GPT, Claude, Gemini and more — call the market independently, then get scored against what actually happened. No hindsight, no hiding the misses.",
    features: [
      {
        title: "A panel, not an oracle",
        description:
          "Each model makes an independent call: direction, conviction, and the one risk that would prove it wrong.",
      },
      {
        title: "Every call is falsifiable, and scored",
        description:
          "Checked against the real price days later. Nothing gets quietly deleted.",
      },
      {
        title: "A disagreement signal",
        description:
          "The ensemble reports how hard the models are fighting, not just their direction — a very different trade from a coin-flip.",
      },
      {
        title: "Models earn their vote",
        description:
          "Track record and calibration decide who the panel actually listens to. Lucky streaks don't count.",
      },
      {
        title: "Learns without retraining",
        description:
          "Each model is shown how its own recent calls landed before making the next one — the intelligence is in the loop, not the weights.",
      },
      {
        title: "A paper-trading scorecard",
        description:
          "Simulated P&L against a brutally simple market baseline, reported honestly either way.",
      },
    ],
    closingLine:
      "Radically honest by design — if a panel of AIs can't beat a dumb baseline, Nous says so.",
    status: "building",
    size: "small",
    accentColor: "#B5A8C5",
  },
  {
    id: "chinwag",
    name: "Chinwag",
    studio: "Personal",
    url: null,
    tag: "Messaging AI",
    tagline: "Every conversation, one inbox, still sounds like you.",
    description:
      "One inbox across WhatsApp, SMS, Google Messages, LinkedIn and more, with AI replies drafted in your own voice, per network. A self-hosted bridge, not another silo.",
    features: [
      {
        title: "One inbox, every network",
        description:
          "WhatsApp, SMS, Google Messages, LinkedIn, Messenger and more, bridged into a single thread list.",
      },
      {
        title: "Drafts that sound like you",
        description:
          "Learns your voice per network from your own message history, not a generic assistant tone.",
      },
      {
        title: "Favourites interrupt",
        description:
          "VIPs notify straight away, even during quiet hours. Everyone else gets batched into a digest.",
      },
      {
        title: "Quiet hours, actually quiet",
        description:
          "Nothing but favourites gets through overnight.",
      },
      {
        title: "Tidy one-time codes",
        description:
          "OTP and verification texts auto-mark read, so they don't clutter your unread list.",
      },
      {
        title: "Self-hosted, not another silo",
        description:
          "Your own bridge across networks — not a platform that owns your conversations.",
      },
    ],
    closingLine:
      "Built to sound like you, not like an assistant answering for you.",
    status: "building",
    size: "small",
    accentColor: "#A8C5C0",
  },
];
