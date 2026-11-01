"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageShell from "@/components/common/PageShell";

const messages: Record<string, string> = {
  unauthenticated: "Your session could not be confirmed. Please sign in again.",
  "verification-required": "Use an account with a verified email address.",
  "participant-conflict": "This email is already linked to a participant record. Contact the organizers to review the account safely.",
  "participant-unavailable": "Participant setup is temporarily unavailable. Please try again later.",
  "participant-email-invalid": "Use your verified RCCIIT email address to create a participant account.",
  "participant-name-required": "Your sign-in provider must share a valid name to create a participant account.",
};

function SignInContent() {
  const params = useSearchParams();
  const requested = params.get("returnTo");
  const returnTo = requested && (/^\/events\/[1-9]\d*(?:\/register)?$/.test(requested) || requested === "/profile") ? requested : "/profile";
  const message = messages[params.get("auth") || ""];
  const encodedReturn = encodeURIComponent(returnTo);
  return <main className="min-h-[70svh] px-6 pb-24 pt-32 text-moon md:px-10 lg:px-14 lg:pt-48"><section className="mx-auto w-full max-w-3xl"><p className="font-nav text-xs font-bold tracking-[0.4em] text-vermilion">IMEET 2026 · ACCOUNT</p><h1 className="mt-5 font-display text-5xl uppercase md:text-7xl">Sign in</h1>{message && <p role="alert" className="mt-6 rounded-lg border border-vermilion/40 bg-vermilion/10 p-4">{message}</p>}<p className="mt-6 max-w-xl text-lg leading-relaxed text-moon/75">Sign in with your verified participant account to manage your profile and event registrations.</p><div className="mt-8 flex flex-wrap gap-4"><a className="border border-vermilion bg-vermilion px-6 py-3 font-nav text-sm font-bold tracking-[0.2em]" href={`/auth/login?returnTo=${encodedReturn}`}>LOG IN</a><a className="border border-moon/30 px-6 py-3 font-nav text-sm font-bold tracking-[0.2em]" href={`/auth/login?screen_hint=signup&returnTo=${encodedReturn}`}>SIGN UP</a></div></section></main>;
}

export default function SignInPage() {
  return <PageShell><Suspense fallback={<main className="min-h-[70svh] px-6 pt-32 text-moon">Loading sign-in…</main>}><SignInContent /></Suspense></PageShell>;
}
