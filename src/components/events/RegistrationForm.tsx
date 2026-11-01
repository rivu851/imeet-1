"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { ApiEvent } from "@/lib/api";

export default function RegistrationForm({ event }: { event: ApiEvent }) {
  const [teamName, setTeamName] = useState("");
  const [emails, setEmails] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [signInRequired, setSignInRequired] = useState(false);
  const router = useRouter();
  const submit = async (form: FormEvent) => {
    form.preventDefault(); setBusy(true); setMessage("");
    try {
      const response = await fetch("/api/registrations", { method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" }, body: JSON.stringify({ event_id: event.event_id, team_name: event.is_team ? teamName.trim() || null : null, team_members: event.is_team ? emails.split(/[\s,;]+/).filter(Boolean).map((email) => ({ email })) : [] }) });
      const result = await response.json().catch(() => null);
      if (!response.ok) { if (response.status === 401) { setSignInRequired(true); throw new Error(result?.message || "Sign in to register."); } throw new Error(result?.message || "Registration failed."); }
      setSuccess(true); setMessage(result?.message || "Registration successful.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Registration failed."); }
    finally { setBusy(false); }
  };
  return <form onSubmit={submit} className="mt-6 grid max-w-lg gap-3 border-t border-moon/10 pt-5">
    {event.is_team && <><label className="grid gap-1 text-sm">Team name<input value={teamName} onChange={(e) => setTeamName(e.target.value)} maxLength={50} className="rounded border border-moon/25 bg-midnight px-3 py-2 text-white" /></label><label className="grid gap-1 text-sm">Teammate college emails<input value={emails} onChange={(e) => setEmails(e.target.value)} placeholder="Separate emails with commas" className="rounded border border-moon/25 bg-midnight px-3 py-2 text-white" /></label></>}
    <button disabled={busy || success} className="w-fit border border-vermilion bg-vermilion px-5 py-3 font-nav text-xs font-bold tracking-[0.2em] disabled:opacity-50">{busy ? "SUBMITTING…" : success ? "REGISTERED" : "REGISTER FOR THIS EVENT"}</button>
    {message && <p role={success ? "status" : "alert"} className="text-sm text-moon/75">{message}{signInRequired && <span> · <button type="button" onClick={() => router.push(`/auth/login?returnTo=${encodeURIComponent(`/events/${event.event_id}`)}`)} className="underline">Sign in</button></span>}</p>}
  </form>;
}
