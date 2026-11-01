export type ApiEvent = {
  event_id: number; name: string | null; details: string | null; date: string | null;
  start_time: string | null; end_time: string | null; venue: string | null; rules: string | null;
  event_img_url: string | null; catagory: string | null; is_team: boolean; team_size: number | null;
  registrations: boolean; coordinators: string | null; contacts: string | null; status: string;
};

export type ApiTeamMember = {
  user_id: string; name: string; role: string; role_id?: string | null; img_url?: string | null;
  insta?: string | null; github?: string | null; linkedin?: string | null; contact_no?: string | null;
  email?: string | null; priority: number; status: string;
};

export type ApiGalleryItem = {
  id: string; title: string; image_url: string; image_url_large?: string | null;
  category: string; caption?: string | null; year: number;
};

export class ApiError extends Error {
  constructor(message: string, readonly status: number) { super(message); this.name = "ApiError"; }
}

export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, { ...init, credentials: "same-origin", cache: "no-store" });
  const body = await response.json().catch(() => null);
  if (!response.ok || body?.success === false) throw new ApiError(body?.message || `Request failed (${response.status})`, response.status);
  return body as T;
}

export async function getEvents() {
  const body = await apiRequest<{ data: ApiEvent[] }>("/api/events");
  return Array.isArray(body.data) ? body.data : [];
}

export async function getEventById(id: string | number) {
  const body = await apiRequest<{ data: ApiEvent | null }>(`/api/events/${encodeURIComponent(id)}`);
  return body.data;
}

export async function getMe() {
  return apiRequest<{ authenticated: true; user: { name: string; email: string }; profile: { name: string; email: string; contact_no: string | null; dept: string | null; year: number | null; college_roll: string | null; image_url: string | null } | null; participatedEvents: { event_id: number; team_name: string | null; name: string | null; date: string | null; venue: string | null }[]; historyUnavailable: boolean }>("/api/me");
}
