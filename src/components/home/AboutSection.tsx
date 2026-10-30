/* eslint-disable @next/next/no-img-element */

import SectionBackdrop from "./SectionBackdrop";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-midnight pb-24 pt-16 md:pb-32 md:pt-28 lg:pt-36">
      <SectionBackdrop src="/images/backgrounds/background.jpg" opacity={0.65} />
      <img
        src="/images/imeet/samurai.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-11%] h-[88%] w-auto opacity-50 drop-shadow-[0_0_60px_rgba(197,42,44,0.25)] [mask-image:linear-gradient(to_bottom,#000_75%,transparent)] md:right-[-10%] md:[mask-image:linear-gradient(to_bottom,#000_55%,transparent_98%)] md:h-[78%] md:w-auto md:opacity-45 lg:right-[-7%] lg:h-[88%] lg:opacity-60 xl:right-[-2%]"
      />
      <div id="about-dust" className="pointer-events-none absolute inset-0"></div>
      <div className="pointer-events-none absolute -right-[8%] bottom-[-10%] h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(197,42,44,0.16),transparent_65%)]"></div>
      <div data-petals="8" className="pointer-events-none absolute inset-0 overflow-hidden"></div>
      <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div id="about-marker" className="js-reveal [&.is-in]:animate-reveal flex items-center gap-4 lg:col-span-2 lg:flex-col lg:items-start">
            <span className="font-nav text-sm font-bold tracking-[0.4em] text-vermilion">01</span>
            <span className="h-px w-12 bg-moon/20 lg:h-24 lg:w-px"></span>
            <span className="font-jp text-xl text-moon/70 lg:text-2xl lg:[writing-mode:vertical-rl]">地平線の彼方</span>
            <span className="font-nav text-[11px] font-semibold tracking-[0.4em] text-mist">THE WORLD</span>
          </div>
          <div className="lg:col-span-10">
            <h2
              id="about-title"
              className="js-reveal [&.is-in]:animate-reveal font-display text-[15vw] uppercase leading-[0.9] text-moon md:text-[10vw] lg:text-[7rem] xl:text-[8rem]"
            >
              About
              <br />
              {/* outer edge only: the stroke is painted under a dark fill, so the font's inner overlaps stay hidden */}
              <span className="text-[#0a0e18] [-webkit-text-stroke:3px_rgba(220,229,241,0.7)] [paint-order:stroke_fill]">IMEET</span>
            </h2>
            <p className="js-reveal [&.is-in]:animate-reveal mt-10 max-w-2xl text-lg font-light leading-relaxed text-moon/75 md:text-xl md:leading-8">
              “IMEET brings together curious minds, creative thinkers, and future innovators to explore ideas, challenge
              boundaries, and build something meaningful.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
