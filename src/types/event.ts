export type EventGroup = "technical" | "non-technical" | "gaming" | "creative";

export interface Event {
  id: string;
  title: string;
  /* the anime the event is themed on */
  theme: string;
  /* what the event actually is, e.g. CTF or Photography */
  type: string;
  group: EventGroup;
  description: string;
  image: string;
  schedule: string;
}
