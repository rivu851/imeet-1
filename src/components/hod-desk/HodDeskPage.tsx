/* eslint-disable @next/next/no-img-element */

import { GRAIN, PAUSE_OFFSCREEN, TEXT_OUTLINE } from "@/components/home/styles";
import HodPhoto from "./HodPhoto";

// Stepped tag silhouette matching the desktop reference label.
const TAG_CLIP =
  "[clip-path:polygon(3%_0,97%_0,97%_12%,100%_12%,100%_88%,97%_88%,97%_100%,3%_100%,3%_88%,0_88%,0_12%,3%_12%)]";

export default function HodDeskPage() {
  return (
    <section
      id="hod-desk-page"
      className="relative flex min-h-screen items-center overflow-hidden bg-midnight px-4 py-16 sm:px-10 sm:py-20 md:px-16 md:py-28 lg:px-20"
      aria-label="HOD's Desk"
    >
      {/* ── Background scene: background.jpg clearly visible ─────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src="/images/imeet/moonlight with sakura.png"
          alt=""
          className="h-full w-full object-cover object-[75%_center] opacity-95"
        />

        {/* Dark gradients keep the content legible across desktop and mobile crops. */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, #080b14 0%, rgba(8,11,20,0.92) 32%, rgba(8,11,20,0.72) 46%, rgba(8,11,20,0.2) 56%, transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,11,20,0.55) 0%, rgba(8,11,20,0.72) 35%, #080b14 100%)",
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
      <div className="relative z-20 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-7 md:gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
        {/* The title leads on mobile; desktop places it beside the portrait. */}
        <div className="flex flex-col gap-6 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:gap-7">
          <div className="js-reveal [&.is-in]:animate-reveal flex items-center">
            <span
              className={`inline-flex items-center border border-tag-cyan px-6 py-2 font-nav text-[13px] font-bold uppercase tracking-[0.25em] text-white md:text-[14px] ${TAG_CLIP}`}
            >
              From the HOD&apos;s Desk
            </span>
          </div>

          <h1 className="js-reveal [&.is-in]:animate-reveal font-display text-[clamp(2.35rem,3.8vw,4.5rem)] uppercase leading-[0.92] text-white">
            GUIDING
            <br />
            MINDS
            <br />
            <span className={TEXT_OUTLINE}>BEYOND</span>
            <br />
            TECHNOLOGY.
          </h1>
        </div>

        {/* ── Portrait: second on mobile, right column on desktop ─── */}
        <div className="flex flex-col items-center justify-center lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
          <div className="js-reveal [&.is-in]:animate-reveal flex flex-col items-center">
            <HodPhoto />

            {/* Muted caption */}
            <p className="mt-4 text-center font-nav text-xs font-semibold tracking-[0.35em] text-mist">
              HOD OF IT DEPT
            </p>
          </div>
        </div>

        {/* ── Body content: third on mobile, below the title on desktop ─ */}
        <div className="flex flex-col gap-6 lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:gap-7">
          {/* Credentials */}
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

          <p className="js-reveal [&.is-in]:animate-reveal max-w-xl text-base font-light leading-[1.5] text-white md:text-[18px]">
            Dr. Soumyadip Dhar leads the Department of Information Technology,
            fostering academic excellence, innovation, and practical learning to
            prepare students for the evolving world of technology.
          </p>

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
