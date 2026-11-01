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
  ticketId?: string;
};
