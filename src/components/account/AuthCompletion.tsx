"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type AuthResult = { authenticated?: boolean; auth?: string; profileComplete?: boolean; redirectTo?: string; message?: string };

function safeReturnTo(value: string | null) {
  if (value === "/profile" || value === "/dashboard") return value;
  if (value && /^\/events\/[1-9]\d*(?:\/register)?$/.test(value)) return value.replace(/\/register$/, "");
  return "/profile";
}

export default function AuthCompletion() {
  const params = useSearchParams();
  const router = useRouter();
  const returnTo = safeReturnTo(params.get("returnTo"));
  const [result, setResult] = useState<AuthResult | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    fetch("/auth/status", { credentials: "same-origin", cache: "no-store" })
      .then(async (response) => ({ status: response.status, body: await response.json().catch(() => ({})) as AuthResult }))
      .then(({ status, body }) => {
        if (!active) return;
        setResult(body);
        if (status === 200 && body.auth === "confirmed") {
          if (returnTo.startsWith("/events/") && !body.profileComplete) router.replace(`/profile?returnTo=${encodeURIComponent(returnTo)}`);
          else if (returnTo.startsWith("/events/")) router.replace(returnTo);
          else router.replace("/profile");
        } else if (body.auth === "unauthenticated" || status === 401) router.replace("/signin?auth=unauthenticated");
      })
      .catch(() => { if (active) setResult({ auth: "unavailable", message: "Authentication is temporarily unavailable. Check your connection and retry." }); });
    return () => { active = false; };
  }, [returnTo, router, attempt]);

  if (!result || result.auth === "confirmed" || result.auth === "unauthenticated") return <p role="status">Checking your account and continuing…</p>;
  if (result.auth === "participant-missing") return <section role="alert"><h1>Participant record not found</h1><p>{result.message || "Your participant account could not be found."}</p><p><a href={`/auth/login?returnTo=${encodeURIComponent(returnTo)}`}>Try signing in again</a></p><p><a href="/auth/logout">Sign out</a></p></section>;
  if (result.auth === "participant-conflict") return <section role="alert"><h1>We need to review this account</h1><p>{result.message || "Contact the organizers to review this participant identity."}</p><a href="/auth/logout">Sign out</a></section>;
  return <section role="alert"><h1>Sign-in could not be completed</h1><p>{result.message || "Authentication is temporarily unavailable."}</p><button type="button" onClick={() => { setResult(null); setAttempt((value) => value + 1); }}>Retry</button><p><a href="/signin">Return to sign in</a></p></section>;
}
