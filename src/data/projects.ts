export type ProjectStatus = "live" | "building";
export type ProjectSize = "large" | "medium" | "small";

export interface Project {
  id: string;
  name: string;
  studio: string;
  url: string | null;
  tag: string;
  description: string;
  status: ProjectStatus;
  size: ProjectSize;
  screengrab: string | null;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "ministry-of-susan",
    name: "Ministry of Susan",
    studio: "Mnemo",
    url: "susan.mnemolabs.app",
    tag: "Eldercare AI",
    description:
      "AI care companion for elderly people, those with disabilities, and their carers. Ambient monitoring. Proactive support.",
    status: "live",
    size: "large",
    screengrab: "/images/susan-preview.svg",
    accentColor: "#A8C5A0",
  },
  {
    id: "davanity",
    name: "Davanity",
    studio: "Mnemo",
    url: "dav.mnemolabs.app",
    tag: "Health AI",
    description:
      "Personal health and lifestyle tracker. Apple Health integration. Wearable signal interpretation.",
    status: "live",
    size: "medium",
    screengrab: "/images/davanity-preview.svg",
    accentColor: "#C5A8B5",
  },
  {
    id: "pond-hopping",
    name: "Pond Hopping",
    studio: "eend.app",
    url: "pond.eend.app",
    tag: "Travel AI",
    description: "AI travel planning. Built for people who move constantly.",
    status: "live",
    size: "medium",
    screengrab: "/images/pond-preview.svg",
    accentColor: "#A8B5C5",
  },
  {
    id: "moritzwith",
    name: "DuckWorth",
    studio: "eend.app",
    url: "smith.eend.app",
    tag: "Finance AI",
    description: "Personal AI finance. Your money, interpreted.",
    status: "live",
    size: "small",
    screengrab: "/images/smith-preview.svg",
    accentColor: "#C5C0A8",
  },
  {
    id: "nous",
    name: "Nous",
    studio: "eend.app",
    url: "nous.eend.app",
    tag: "Trading AI",
    description: "AI-powered market prediction and trading signals.",
    status: "building",
    size: "small",
    screengrab: "/images/nous-preview.svg",
    accentColor: "#B5A8C5",
  },
  {
    id: "chinwag",
    name: "Chinwag",
    studio: "Personal",
    url: null,
    tag: "Messaging AI",
    description:
      "Every message in one inbox — with AI replies drafted in your voice. A self-hosted bridge across WhatsApp, LinkedIn, Messenger and more.",
    status: "building",
    size: "small",
    screengrab: "/images/chinwag-preview.svg",
    accentColor: "#A8C5C0",
  },
];
