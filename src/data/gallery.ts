export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  year: "2026";
  w: number;
  h: number;
  group: string;
  featured: boolean;
  position: string;
}

export interface GalleryGroup {
  id: string;
  label: string;
  order: number;
}

export const groups: GalleryGroup[] = [
  { id: "day-1", label: "Day 1 · Technical Events", order: 1 },
  { id: "day-2", label: "Day 2 · Prize Distribution", order: 2 },
];

export const thumb = (src: string) => src;

const baseItems: GalleryItem[] = [
  {
    id: "valley",
    src: thumb("/images/imeet/valley.jpg"),
    alt: "Moonlit valley beneath a dark sky",
    title: "Valley",
    year: "2026",
    w: 1600,
    h: 1000,
    group: "day-1",
    featured: true,
    position: "50% 50%",
  },
  {
    id: "torii",
    src: thumb("/images/imeet/torii.jpg"),
    alt: "Red torii gate fading into mist",
    title: "Torii",
    year: "2026",
    w: 1200,
    h: 1500,
    group: "day-1",
    featured: true,
    position: "50% 50%",
  },
  {
    id: "lanterns",
    src: thumb("/images/imeet/lanterns.jpg"),
    alt: "Warm lanterns glowing in the night",
    title: "Lanterns",
    year: "2026",
    w: 1200,
    h: 1500,
    group: "day-1",
    featured: true,
    position: "50% 50%",
  },
  {
    id: "workshop",
    src: thumb("/images/events/workshop.jpg"),
    alt: "Festival workshop with tables and lanterns",
    title: "Workshop",
    year: "2026",
    w: 1200,
    h: 1500,
    group: "day-1",
    featured: true,
    position: "50% 50%",
  },
  {
    id: "scroll",
    src: thumb("/images/events/scroll.jpg"),
    alt: "Open scroll beside a glowing lantern",
    title: "Scroll",
    year: "2026",
    w: 1200,
    h: 1500,
    group: "day-2",
    featured: true,
    position: "50% 50%",
  },
  {
    id: "courtyard",
    src: thumb("/images/events/courtyard.jpg"),
    alt: "Lantern-lit festival courtyard",
    title: "Courtyard",
    year: "2026",
    w: 1600,
    h: 1000,
    group: "day-2",
    featured: true,
    position: "35% 30%",
  },
];

// DEV TEST ONLY: remove this flag and the repeat block before production.
export const DEV_REPEAT = true;

const repeatedItems = Array.from({ length: 34 }, (_, index) => {
  const source = baseItems[index % baseItems.length];
  const copyNumber = Math.floor(index / baseItems.length) + 2;
  const portrait = index % 3 !== 0;
  return {
    ...source,
    id: `${source.id}-r${copyNumber}`,
    title: `${source.title} ${copyNumber}`,
    group: groups[index % groups.length].id,
    featured: false,
    w: portrait ? 1200 : 1600,
    h: portrait ? 1500 : 1000,
  };
});

export const galleryItems = DEV_REPEAT ? [...baseItems, ...repeatedItems] : baseItems;
