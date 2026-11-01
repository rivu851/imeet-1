export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "core" | "tech" | "design" | "events" | "pr" | "mentors";
  categoryLabel: string;
  badge?: string;
  department: string;
  spiritQuote: string;
  avatar?: string;
  socials: { github?: string; linkedin?: string; instagram?: string; email?: string };
}

export interface CategoryTab {
  id: "all" | "core" | "tech" | "design" | "events" | "pr" | "mentors";
  label: string;
  kanji: string;
}

export const CATEGORIES: CategoryTab[] = [
  { id: "all", label: "All Members", kanji: "全員" },
  { id: "mentors", label: "Faculty Mentors", kanji: "顧問" },
  { id: "core", label: "Core Committee", kanji: "首脳部" },
  { id: "tech", label: "Technical & Web", kanji: "開発陣" },
  { id: "design", label: "Design & Media", kanji: "意匠部" },
  { id: "events", label: "Events & Operations", kanji: "執行部" },
  { id: "pr", label: "PR & Sponsorship", kanji: "広報部" },
];
