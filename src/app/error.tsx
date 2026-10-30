"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-midnight px-6 text-center text-moon">
      <p className="font-nav text-sm font-bold tracking-[0.4em] text-vermilion">SOMETHING WENT WRONG</p>
      <h1 className="font-display text-5xl uppercase md:text-7xl">Please try again.</h1>
      <button
        onClick={reset}
        className="border border-vermilion px-6 py-3 font-nav text-sm font-bold tracking-[0.25em] transition-colors hover:bg-vermilion"
      >
        RETRY
      </button>
    </main>
  );
}
