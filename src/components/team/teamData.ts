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
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export interface CategoryTab {
  id: "all" | "core" | "tech" | "design" | "events" | "pr" | "mentors";
  label: string;
  kanji: string;
}

export const CATEGORIES: CategoryTab[] = [
  { id: "all", label: "All Nakama", kanji: "全員" },
  { id: "core", label: "Core Committee", kanji: "首脳部" },
  { id: "tech", label: "Technical & Web", kanji: "開発陣" },
  { id: "design", label: "Design & Media", kanji: "意匠部" },
  { id: "events", label: "Events & Operations", kanji: "執行部" },
  { id: "pr", label: "PR & Sponsorship", kanji: "広報部" },
  { id: "mentors", label: "Faculty Mentors", kanji: "顧問" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  // Faculty Mentors
  {
    id: "mentor-1",
    name: "Dr. Abhijit Das",
    role: "Head of Department & Chief Patron",
    category: "mentors",
    categoryLabel: "Faculty Mentors",
    badge: "Sensei",
    department: "Dept. of Information Technology, RCCIIT",
    spiritQuote: "Guiding minds beyond technology, inspiring tomorrow's innovations.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:hod_it@rcciit.org.in",
    },
  },
  {
    id: "mentor-2",
    name: "Prof. Hrishikesh Bhaumik",
    role: "Faculty Advisor & Coordinator",
    category: "mentors",
    categoryLabel: "Faculty Mentors",
    badge: "Mentor",
    department: "Dept. of Information Technology, RCCIIT",
    spiritQuote: "Fostering synergy between engineering rigor and creative brilliance.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:hrishikesh@rcciit.org.in",
    },
  },

  // Core Committee
  {
    id: "core-1",
    name: "Rivu Chattopadhyay",
    role: "General Convenor & Lead Architect",
    category: "core",
    categoryLabel: "Core Committee",
    badge: "Captain",
    department: "IT · 4th Year",
    spiritQuote: "Turning wild visions into unforgettable code and community.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "core-2",
    name: "Ananya Sen",
    role: "Joint Convenor & Operations Head",
    category: "core",
    categoryLabel: "Core Committee",
    badge: "Strategist",
    department: "IT · 4th Year",
    spiritQuote: "Precision in execution, passion in collaboration.",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "core-3",
    name: "Soumyadeep Ghosh",
    role: "Treasurer & Logistics Director",
    category: "core",
    categoryLabel: "Core Committee",
    badge: "Quartermaster",
    department: "IT · 3rd Year",
    spiritQuote: "Keeping every gear turning seamlessly behind the curtain.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },

  // Technical & Web
  {
    id: "tech-1",
    name: "Aritra Mukherjee",
    role: "Tech Lead & Frontend Engineer",
    category: "tech",
    categoryLabel: "Technical & Web",
    badge: "Shinobi Dev",
    department: "IT · 3rd Year",
    spiritQuote: "Crafting fluid 60fps animations and resilient UI architecture.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "tech-2",
    name: "Debanjan Saha",
    role: "Full-Stack Architect & DevOps",
    category: "tech",
    categoryLabel: "Technical & Web",
    badge: "Backend Sorcerer",
    department: "IT · 3rd Year",
    spiritQuote: "Zero downtime, distributed scale, pure infrastructure alchemy.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "tech-3",
    name: "Soham Banerjee",
    role: "Competitive Programming & Bot Lead",
    category: "tech",
    categoryLabel: "Technical & Web",
    badge: "Algorithmist",
    department: "IT · 2nd Year",
    spiritQuote: "Optimizing time complexity until problems yield in O(1).",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },

  // Design & Media
  {
    id: "design-1",
    name: "Poulami Roy",
    role: "Creative Director & UI/UX Lead",
    category: "design",
    categoryLabel: "Design & Media",
    badge: "Artisan",
    department: "IT · 3rd Year",
    spiritQuote: "Weaving Japanese aesthetics and cyber-punk visual identity.",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "design-2",
    name: "Rohit Biswas",
    role: "Motion Graphics & 3D Visualizer",
    category: "design",
    categoryLabel: "Design & Media",
    badge: "VFX Alchemist",
    department: "IT · 2nd Year",
    spiritQuote: "Bringing static frames to life through kinetic energy.",
    socials: {
      instagram: "https://instagram.com",
      github: "https://github.com",
    },
  },
  {
    id: "design-3",
    name: "Sneha Mukherjee",
    role: "Graphic Designer & Brand Stylist",
    category: "design",
    categoryLabel: "Design & Media",
    badge: "Illustrator",
    department: "IT · 2nd Year",
    spiritQuote: "Every poster tells an epic tale waiting to unfold.",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },

  // Events & Operations
  {
    id: "events-1",
    name: "Sayak Chakraborty",
    role: "Head of Technical Events",
    category: "events",
    categoryLabel: "Events & Operations",
    badge: "Grandmaster",
    department: "IT · 3rd Year",
    spiritQuote: "Designing hackathons and battlegrounds that test real grit.",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "events-2",
    name: "Shreya Bhattacharya",
    role: "Head of Gaming & Esports",
    category: "events",
    categoryLabel: "Events & Operations",
    badge: "Vanguard",
    department: "IT · 3rd Year",
    spiritQuote: "High-octane tournament brackets and fair arena showdowns.",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "events-3",
    name: "Arindam Dutta",
    role: "Stage & Venue Coordinator",
    category: "events",
    categoryLabel: "Events & Operations",
    badge: "Tactician",
    department: "IT · 2nd Year",
    spiritQuote: "Flawless backstage synchronization under high pressure.",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },

  // PR & Sponsorship
  {
    id: "pr-1",
    name: "Tanmay Karmakar",
    role: "Head of Corporate Relations & Sponsorship",
    category: "pr",
    categoryLabel: "PR & Sponsorship",
    badge: "Envoy",
    department: "IT · 4th Year",
    spiritQuote: "Bridging industry titans with student talent and potential.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:sponsorship@imeet.org",
    },
  },
  {
    id: "pr-2",
    name: "Ritika Chatterjee",
    role: "Public Relations & Campus Ambassador Lead",
    category: "pr",
    categoryLabel: "PR & Sponsorship",
    badge: "Voice",
    department: "IT · 3rd Year",
    spiritQuote: "Spreading the IMEET wave across colleges across the state.",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "pr-3",
    name: "Anik Samanta",
    role: "Social Media & Community Manager",
    category: "pr",
    categoryLabel: "PR & Sponsorship",
    badge: "Herald",
    department: "IT · 2nd Year",
    spiritQuote: "Building hype, viral buzz, and genuine community engagement.",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
];
