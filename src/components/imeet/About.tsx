/* eslint-disable @next/next/no-img-element */

import SectionBackdrop from "./SectionBackdrop";
import { TEXT_OUTLINE } from "./styles";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-midnight pb-24 pt-16 md:pb-32 md:pt-28 lg:pt-36">
      <SectionBackdrop src="/assest/background.jpg" opacity={0.65} />
      <img
        src="/assest/samurai.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-7%] hidden h-[88%] w-auto opacity-60 xl:right-[-2%] drop-shadow-[0_0_60px_rgba(197,42,44,0.25)] [mask-image:linear-gradient(to_bottom,#000_55%,transparent_98%)] lg:block"
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
              className="js-reveal [&.is-in]:animate-reveal font-display text-[17vw] uppercase leading-[0.86] text-moon md:text-[12vw] lg:text-[8.6rem] xl:text-[10rem]"
            >
              Beyond <span className={TEXT_OUTLINE}>the</span>
              <br />
              <span className="inline-block lg:pl-[18%]">Horizon</span>
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-12">
              <h3 className="js-reveal [&.is-in]:animate-reveal font-nav text-2xl font-bold leading-snug tracking-[0.18em] text-vermilion md:col-span-5 md:text-[28px]">
                WHERE IDEAS FIND THEIR COURAGE.
              </h3>
              <p className="js-reveal [&.is-in]:animate-reveal text-lg font-light leading-relaxed text-moon/75 md:col-span-7 md:text-xl md:leading-7">
                “IMEET brings together curious minds, creative thinkers, and future innovators to explore ideas,
                challenge boundaries, and build something meaningful.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
