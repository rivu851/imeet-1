/* eslint-disable @next/next/no-img-element */

import { GRAIN, PAUSE_OFFSCREEN, TEXT_OUTLINE } from "@/components/home/styles";
import HodPhoto from "./HodPhoto";

// Stepped badge silhouette used by the desktop HOD reference.
const STEPPED_CLIP =
  "[clip-path:polygon(25%_0,75%_0,75%_10%,85%_10%,85%_20%,95%_20%,95%_30%,100%_30%,100%_70%,95%_70%,95%_80%,85%_80%,85%_90%,75%_90%,75%_100%,25%_100%,25%_90%,15%_90%,15%_80%,5%_80%,5%_70%,0_70%,0_30%,5%_30%,5%_20%,15%_20%,15%_10%,25%_10%)]";

// Stepped tag silhouette matching the desktop reference label.
const TAG_CLIP =
  "[clip-path:polygon(3%_0,97%_0,97%_12%,100%_12%,100%_88%,97%_88%,97%_100%,3%_100%,3%_88%,0_88%,0_12%,3%_12%)]";

export default function HodDeskPage() {
  return (
    <section
      id="hod-desk-page"
      className="relative flex min-h-screen items-center overflow-hidden bg-midnight px-6 py-24 sm:px-10 md:px-16 md:py-28 lg:px-20"
      aria-label="HOD's Desk"
    >
      {/* ── Background scene: background.jpg clearly visible ─────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src="/images/imeet/moonlight with sakura.png"
          alt=""
          className="h-full w-full object-cover object-[75%_center] opacity-95"
        />

        {/* Dark gradient on the left ~55% only, fading smoothly into transparent on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #080b14 0%, rgba(8,11,20,0.92) 32%, rgba(8,11,20,0.72) 46%, rgba(8,11,20,0.2) 56%, transparent 68%)",
          }}
        />

        {/* Subtle top & bottom edge blend */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-midnight/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-midnight/80 to-transparent" />
      </div>

      {/* ── Falling Petals layer: picked up automatically by Effects.tsx ── */}
      <div
        data-petals="10"
        className={`pointer-events-none absolute inset-0 z-10 overflow-hidden ${PAUSE_OFFSCREEN}`}
        aria-hidden="true"
      />

      {/* Film-grain texture */}
      <div className={GRAIN} />

      {/* ── Main content grid: max-w-1440, vertically centered ───── */}
      <div className="relative z-20 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">

        {/* ── RIGHT COLUMN — photo frame (centered against text) ──── */}
        <div className="order-first flex flex-col items-center justify-center lg:order-last lg:col-span-5">
          <div className="js-reveal [&.is-in]:animate-reveal flex flex-col items-center">
            {/* LIME filled stepped geometric badge matching Figma */}
            <div
              className={`relative flex aspect-square w-[270px] items-center justify-center bg-lime drop-shadow-[0_0_40px_rgba(190,246,85,0.25)] sm:w-[310px] lg:w-[350px] xl:w-[370px] ${STEPPED_CLIP}`}
            >
              <div
                className="relative flex h-full w-[72%] items-center justify-center overflow-hidden"
              >
                <HodPhoto />
              </div>
            </div>

            {/* Muted caption */}
            <p className="mt-4 text-center font-nav text-xs font-semibold tracking-[0.35em] text-mist">
              HOD OF IT DEPT
            </p>
          </div>
        </div>

        {/* ── LEFT COLUMN — text content ─────────────────────────── */}
        <div className="flex flex-col gap-6 lg:col-span-7 lg:gap-7">

          {/* 1. Stepped tag outline */}
          <div className="js-reveal [&.is-in]:animate-reveal flex items-center">
            <span
              className={`inline-flex items-center border border-tag-cyan px-6 py-2 font-nav text-[13px] font-bold uppercase tracking-[0.25em] text-white md:text-[14px] ${TAG_CLIP}`}
            >
              From the HOD&apos;s Desk
            </span>
          </div>

          {/* 2. Heading: clamped to ~45% width, tight leading, hollow BEYOND */}
          <h1 className="js-reveal [&.is-in]:animate-reveal font-display text-[clamp(2.35rem,3.8vw,4.5rem)] uppercase leading-[0.92] text-white">
            GUIDING
            <br />
            MINDS
            <br />
            <span className={TEXT_OUTLINE}>BEYOND</span>
            <br />
            TECHNOLOGY.
          </h1>

          {/* 3. Credentials: white text, ~18px, line-height ~1.5 */}
          <div className="js-reveal [&.is-in]:animate-reveal space-y-1.5 text-base font-light leading-[1.5] text-white md:text-[18px]">
            <p>
              Ph.D. (Tech.), Computer Science and Engineering,
              University of Calcutta
            </p>
            <p>
              Associate Professor &amp; Head, Department of Information
              Technology,{" "}
              <br className="hidden sm:inline" />
              RCC Institute of Information Technology (RCCIIT)
            </p>
          </div>

          {/* 4. Bio paragraph: white text, ~18px, line-height ~1.5 */}
          <p className="js-reveal [&.is-in]:animate-reveal max-w-xl text-base font-light leading-[1.5] text-white md:text-[18px]">
            Dr. Soumyadip Dhar leads the Department of Information Technology,
            fostering academic excellence, innovation, and practical learning to
            prepare students for the evolving world of technology.
          </p>

          {/* 5. Quote block: red quote icon, vertical line, Feynman quote */}
          <div className="js-reveal [&.is-in]:animate-reveal flex gap-4 border-l-2 border-vermilion pl-5">
            <div className="flex flex-col gap-2.5">
              <i
                className="fa-solid fa-quote-left text-2xl text-vermilion md:text-3xl"
                aria-hidden="true"
              />
              <blockquote className="text-base font-light italic leading-[1.5] text-white md:text-[17px]">
                &ldquo;It doesn&apos;t matter how beautiful your theory is, it
                doesn&apos;t matter how smart you are. If it doesn&apos;t agree
                with experiment, it&apos;s wrong.&rdquo;
              </blockquote>
              <p className="font-nav text-sm font-semibold tracking-[0.2em] text-white/80 md:text-base">
                — Richard P. Feynman
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
