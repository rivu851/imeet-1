export type ProfileUser = {
  name: string;
  email: string;
  contactNumber: string;
  department: string;
  year: string;
  rollNumber: string;
};

export type RegisteredEvent = {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  status: "Confirmed" | "Pending";
  ticketId: string;
};

export const PLACEHOLDER_USER: ProfileUser = {
  name: "Aarav Sharma",
  email: "aarav.sharma@example.com",
  contactNumber: "9876543210",
  department: "Information Technology",
  year: "3rd Year",
  rollNumber: "IT2024001",
};

export const REGISTERED_EVENTS: RegisteredEvent[] = [
  {
    id: "hackathon-2026",
    name: "Hackathon",
    date: "19 Nov 2026",
    time: "10:00 AM",
    venue: "RCCIIT, Kolkata",
    status: "Confirmed",
    ticketId: "IM26-001",
  },
  {
    id: "tech-quiz-2026",
    name: "Tech Quiz",
    date: "20 Nov 2026",
    time: "2:00 PM",
    venue: "RCCIIT, Kolkata",
    status: "Pending",
    ticketId: "IM26-014",
  },
];
