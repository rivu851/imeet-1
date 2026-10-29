"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { lenis } from "./SmoothScroll";
import SectionBackdrop from "./SectionBackdrop";
import { TEXT_OUTLINE } from "./styles";

const IMG = "/imeet/";

const FRAMES = [
  { src: `${IMG}valley.jpg`, alt: "Placeholder artwork: moonlit valley", size: "col-span-2 h-[260px] md:col-span-8 md:h-[480px]" },
  { src: `${IMG}lanterns.jpg`, alt: "Placeholder artwork: lanterns", size: "col-span-1 h-[220px] md:col-span-4 md:h-[480px]" },
  { src: `${IMG}workshop.jpg`, alt: "Placeholder artwork: workshop", size: "col-span-1 h-[220px] md:col-span-4 md:h-[340px]" },
  { src: `${IMG}torii.jpg`, alt: "Placeholder artwork: torii in mist", size: "col-span-2 h-[220px] md:col-span-5 md:h-[340px]" },
  { src: `${IMG}scroll.jpg`, alt: "Placeholder artwork: scroll and lantern", size: "col-span-1 h-[220px] md:col-span-3 md:h-[340px]" },
  { src: `${IMG}courtyard.jpg`, alt: "Placeholder artwork: lantern courtyard", size: "col-span-1 h-[220px] md:col-span-12 md:h-[300px]" },
];

const wrap = (i: number) => (i + FRAMES.length) % FRAMES.length;

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    document.body.classList.add("overflow-hidden");
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : wrap(i - 1)));
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : wrap(i + 1)));
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("overflow-hidden");
      lenis?.start();
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = open === null ? FRAMES[0] : FRAMES[open];

  return (
    <>
      <section id="gallery" className="relative overflow-clip bg-midnight py-24 md:py-32">
        <SectionBackdrop sticky src="/imeet/lanterns.jpg" opacity={0.4} position="object-[50%_35%]" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(197,42,44,0.12),transparent_65%)]"></div>
        <div data-petals="8" className="pointer-events-none absolute inset-0 overflow-hidden"></div>
        <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-10 lg:px-14">
          <div id="gallery-head" className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="js-reveal [&.is-in]:animate-reveal">
              <p className="flex items-center gap-4 font-nav text-xs font-bold tracking-[0.45em] text-vermilion">
                06 <span className="h-px w-10 bg-vermilion/70"></span> THE ARCHIVE
              </p>
              <h2 className="mt-5 font-display text-[13vw] uppercase leading-[0.9] text-moon md:text-7xl md:leading-none lg:text-[7rem]">
                Fragments of <span className={TEXT_OUTLINE}>the journey.</span>
              </h2>
            </div>
            <p className="js-reveal [&.is-in]:animate-reveal max-w-xs text-sm leading-relaxed text-mist">
              Placeholder frames shown. Official festival photographs will replace this artwork. Select any frame to view
              it full-screen.
            </p>
          </div>
          <div id="gallery-grid" className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
            {FRAMES.map((frame, i) => (
              <button
                key={frame.src}
                onClick={() => setOpen(i)}
                className={`gallery-item js-reveal [&.is-in]:animate-reveal group relative overflow-hidden bg-navy ${frame.size}`}
              >
                <img
                  src={frame.src}
                  alt={frame.alt}
                  className="h-full w-full object-cover opacity-80 grayscale-[35%] transition duration-[1200ms] group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <span className="absolute left-4 top-4 font-nav text-[10px] font-bold tracking-[0.4em] text-moon/80">{`0${i + 1}`}</span>
                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center border border-moon/40 text-moon opacity-0 transition group-hover:opacity-100">
                  <i className="fa-solid fa-expand text-xs"></i>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div
        id="lightbox"
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        className={`fixed inset-0 z-[100] ${open === null ? "hidden" : "flex"} items-center justify-center bg-midnight/95 p-4 backdrop-blur-sm md:p-14`}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
      >
        <button
          id="lb-close"
          onClick={() => setOpen(null)}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-moon/25 text-moon transition-colors hover:border-vermilion hover:text-vermilion"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <button
          id="lb-prev"
          onClick={() => setOpen((i) => wrap((i ?? 0) - 1))}
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-moon/25 text-moon transition-colors hover:border-vermilion md:left-8"
          aria-label="Previous"
        >
          <i className="fa-solid fa-arrow-left-long text-sm"></i>
        </button>
        <button
          id="lb-next"
          onClick={() => setOpen((i) => wrap((i ?? 0) + 1))}
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-moon/25 text-moon transition-colors hover:border-vermilion md:right-8"
          aria-label="Next"
        >
          <i className="fa-solid fa-arrow-right-long text-sm"></i>
        </button>
        <figure className="flex max-w-6xl flex-col items-center">
          <img id="lb-img" src={current.src} alt={current.alt} className="max-h-[78vh] w-auto object-contain" />
          <figcaption id="lb-cap" className="mt-5 font-nav text-xs font-semibold tracking-[0.4em] text-moon/70">
            {open === null ? "" : `FRAME 0${open + 1} · PLACEHOLDER`}
          </figcaption>
        </figure>
      </div>
    </>
  );
}
