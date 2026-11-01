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
