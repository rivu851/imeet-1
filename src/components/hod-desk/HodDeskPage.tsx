import { GRAIN, PAUSE_OFFSCREEN } from "@/components/home/styles";
import HodPhoto from "./HodPhoto";

// Stepped tag silhouette matching the desktop reference label.
const TAG_CLIP =
  "[clip-path:polygon(3%_0,97%_0,97%_12%,100%_12%,100%_88%,97%_88%,97%_100%,3%_100%,3%_88%,0_88%,0_12%,3%_12%)]";

export default function HodDeskPage() {
  return (
    <section
      id="hod-desk-page"
      className="relative flex min-h-svh items-center overflow-hidden bg-midnight px-4 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 lg:px-0 lg:py-[calc(3.5*var(--vw))]"
      aria-label="HOD's Desk"
    >
      {/* ── Background scene: background.jpg clearly visible ─────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/imeet/bg-hod-mobile.webp" />
          <img
            src="/images/imeet/moonlight with sakura.png"
            alt=""
            className="h-full w-full object-cover object-right opacity-95"
          />
        </picture>

        {/* Dark gradients keep the content legible across desktop and mobile crops. */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, #080b14 0%, rgba(8,11,20,0.92) 32%, rgba(8,11,20,0.72) 46%, rgba(8,11,20,0.2) 56%, transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,11,20,0.45) 0%, rgba(8,11,20,0.2) 30%, rgba(8,11,20,0.35) 70%, rgba(8,11,20,0.85) 100%)",
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

      {/* ── Main content grid: lines up with the About section on desktop ── */}
      <div className="relative z-20 mx-auto grid w-full grid-cols-1 gap-8 lg:max-w-[calc(100*var(--vw))] lg:grid-cols-[minmax(0,1fr)_calc(24*var(--vw))] lg:items-start lg:gap-x-[calc(3*var(--vw))] lg:gap-y-[calc(1.8*var(--vw))] lg:pl-[calc(5.4*var(--vw))] lg:pr-[calc(18*var(--vw))]">
        {/* The title leads on mobile; desktop places it beside the portrait. */}
        <div className="flex flex-col items-start gap-5 lg:col-start-1 lg:row-start-1 lg:gap-[calc(1.5*var(--vw))]">
          <span
            className={`js-reveal [&.is-in]:animate-reveal inline-flex items-center border border-tag-cyan px-6 py-2 font-nav text-[13px] font-bold uppercase tracking-[0.25em] text-white md:text-[14px] ${TAG_CLIP}`}
          >
            From the HOD&apos;s Desk
          </span>

          <h1 className="js-reveal [&.is-in]:animate-reveal font-display whitespace-nowrap text-[10vw] uppercase leading-none sm:text-[9.3vw] text-white lg:text-[length:calc(3.9*var(--vw))] lg:leading-[1.05]">
            Guiding Minds
            <br />
            {/* outer edge only: the stroke is painted under a dark fill, so the font's inner overlaps stay hidden */}
            <span className="text-[#0a0e18] [-webkit-text-stroke:2px_rgba(220,229,241,0.75)] [paint-order:stroke_fill]">Beyond</span>{" "}
            <br className="lg:hidden" />
            Technology.
          </h1>
        </div>

        {/* ── Portrait: second on mobile, right column on desktop ─── */}
        <div className="js-reveal [&.is-in]:animate-reveal flex flex-col items-start md:items-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <HodPhoto />

          <div className="-mt-2 w-[min(58%,19.5rem)] border border-moon/15 bg-midnight/85 px-2 py-2.5 text-center backdrop-blur-sm md:px-4 md:py-3 lg:w-[88%] lg:py-[calc(0.9*var(--vw))]">
            <p className="font-nav text-sm font-bold uppercase tracking-[0.08em] text-white md:text-lg md:tracking-[0.12em] lg:text-[length:max(16px,calc(1.25*var(--vw)))]">
              Dr. Soumyadip Dhar
            </p>
            <p className="mt-1 font-nav text-[10px] font-semibold uppercase tracking-[0.12em] text-sakura/80 md:text-xs md:tracking-[0.25em] lg:text-[length:max(11px,calc(0.72*var(--vw)))]">
              Head of Department, IT
            </p>
          </div>
        </div>

        {/* ── Body content: third on mobile, below the title on desktop ─ */}
        <div className="flex flex-col gap-6 text-base font-light leading-relaxed text-white/90 border border-moon/10 bg-midnight/80 p-4 backdrop-blur-sm md:p-6 md:text-lg lg:col-start-1 lg:row-start-2 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:gap-[calc(1.5*var(--vw))] lg:text-[length:max(15px,calc(1.1*var(--vw)))] lg:leading-[1.55]">
          {/* Credentials */}
          <div className="js-reveal [&.is-in]:animate-reveal space-y-1">
            <p className="font-normal text-white">Associate Professor &amp; Head, Department of Information Technology</p>
            <p>RCC Institute of Information Technology (RCCIIT)</p>
            <p>Ph.D. (Tech.), Computer Science and Engineering, University of Calcutta</p>
          </div>

          <p className="js-reveal [&.is-in]:animate-reveal lg:max-w-[calc(46*var(--vw))]">
            Dr. Soumyadip Dhar leads the Department of Information Technology, fostering academic excellence, innovation,
            and practical learning to prepare students for the evolving world of technology.
          </p>

          <div className="js-reveal [&.is-in]:animate-reveal flex flex-col gap-2.5 border-l-2 border-vermilion pl-5 lg:gap-[calc(0.6*var(--vw))] lg:pl-[calc(1.4*var(--vw))]">
            <i className="fa-solid fa-quote-left text-2xl text-vermilion lg:text-[length:calc(1.5*var(--vw))]" aria-hidden="true" />
            <blockquote className="italic">
              &ldquo;It doesn&apos;t matter how beautiful your theory is, it doesn&apos;t matter how smart you are. If it
              doesn&apos;t agree with experiment, it&apos;s wrong.&rdquo;
            </blockquote>
            <p className="font-nav text-sm font-semibold not-italic tracking-[0.2em] text-white/80 lg:text-[length:max(13px,calc(0.85*var(--vw)))]">
              — Richard P. Feynman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
