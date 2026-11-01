import type { EventGroup } from "@/types/event";

export const EVENT_GROUPS: { id: EventGroup; label: string; title: string; summary: string; image: string }[] = [
  {
    id: "technical",
    label: "TECHNICAL",
    title: "Technical",
    summary: "Capture the flag, bug hunts, competitive programming, circuit debugging, a technical quiz and a debate.",
    image: "/images/imeet/technical-event-bg.webp",
  },
  {
    id: "non-technical",
    label: "NON-TECHNICAL",
    title: "Non-Technical",
    summary: "A pop-culture fandom quiz for those who know their favourite worlds inside out.",
    image: "/images/imeet/Moonlit Sakura Poster-Making Festival.png",
  },
  {
    id: "gaming",
    label: "GAMING",
    title: "Gaming",
    summary: "FIFA 23, eFootball and BGMI, for those who play to win.",
    image: "/images/events/Neon Anime Gaming Squad (1).png",
  },
  {
    id: "creative",
    label: "CREATIVE / SHOWCASE",
    title: "Creative / Showcase",
    summary: "Photography, poster making and a startup pitchathon.",
    image: "/images/events/Anime Project Showcase Under Comet Skies.png",
  },
];
