import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-midnight px-6 text-center text-moon">
      <p className="font-nav text-sm font-bold tracking-[0.4em] text-vermilion">404 · PAGE NOT FOUND</p>
      <h1 className="font-display text-5xl uppercase md:text-7xl">Lost in the night.</h1>
      <Link
        href="/"
        className="border border-vermilion px-6 py-3 font-nav text-sm font-bold tracking-[0.25em] transition-colors hover:bg-vermilion"
      >
        BACK TO HOME
      </Link>
    </main>
  );
}
