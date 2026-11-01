import { Suspense } from "react";
import PageShell from "@/components/common/PageShell";
import AuthCompletion from "@/components/account/AuthCompletion";

export default function AuthCompletePage() {
  return <PageShell><main className="min-h-[70svh] px-6 pb-24 pt-32 text-moon md:px-10 lg:px-14 lg:pt-48"><section className="mx-auto w-full max-w-4xl"><p className="font-nav text-xs font-bold tracking-[0.4em] text-vermilion">IMEET 2026 · ACCOUNT</p><h1 className="mt-5 font-display text-5xl uppercase md:text-7xl">Finishing sign in</h1><div className="mt-8 rounded-xl border border-moon/15 bg-midnight/70 p-6"><Suspense fallback={<p role="status">Checking your account…</p>}><AuthCompletion /></Suspense></div></section></main></PageShell>;
}
