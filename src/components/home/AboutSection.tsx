/* eslint-disable @next/next/no-img-element */

const CARD_CLIP =
  "[clip-path:polygon(0_0,calc(100%-28px)_0,100%_28px,100%_100%,28px_100%,0_calc(100%-28px))]";

/* On the home page the hero's petals drift on into this section; on its own page it brings its own. */
export default function About({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="about" className="relative overflow-hidden bg-midnight pb-[24vw] pt-8 md:pt-14 lg:min-h-[calc(47.25*var(--vw))] lg:pb-[calc(2*var(--vw))] lg:pt-[calc(2.2*var(--vw))]">
      {/* night valley with the moon, a cherry tree and blossom-strewn rocks; on desktop the top of the sky is cropped */}
      <img
        src="/images/imeet/about-bg.webp"
        alt=""
        aria-hidden="true"
        className="animate-scene-drift pointer-events-none absolute inset-0 h-full w-full origin-bottom object-cover object-[85%_center] lg:object-bottom"
      />

      {/* kept in the same centred box as the text, so the two stay together on very wide screens;
          slides in from the right, then breathes and sways gently */}
      <div data-reveal-late className="js-reveal [&.is-in]:animate-samurai-in [&:not(.is-in)]:opacity-0 pointer-events-none absolute inset-0 mx-auto lg:max-w-[calc(100*var(--vw))]">
        <img
          src="/images/imeet/about-samurai.webp"
          alt=""
          aria-hidden="true"
          className="animate-samurai-idle pointer-events-none absolute bottom-[18%] right-0 h-auto w-[25vw] origin-bottom brightness-[0.82] saturate-[0.85] drop-shadow-[0_0_60px_rgba(197,42,44,0.25)] lg:bottom-[calc(-0.5*var(--vw))] lg:right-[2%] lg:w-[calc(21.3*var(--vw))]"
        />
      </div>

      {/* the background's rocks cut out and laid exactly over it, so the samurai stands behind them */}
      <img
        src="/images/imeet/about-rocks.webp"
        alt=""
        aria-hidden="true"
        className="animate-scene-drift pointer-events-none absolute inset-0 h-full w-full origin-bottom object-cover object-[85%_center] lg:object-bottom"
      />

      {/* soft, blurred fades top and bottom so the section melts into its neighbours */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-midnight to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_bottom,#000_35%,transparent)] md:h-32"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-midnight to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_top,#000_35%,transparent)] lg:h-[calc(4*var(--vw))]"></div>
      <div id="about-dust" className="pointer-events-none absolute inset-0"></div>
      {standalone && <div data-petals="8" className="pointer-events-none absolute inset-0 overflow-hidden"></div>}
      <div className="relative mx-auto w-full max-w-[1480px] px-4 md:px-10 lg:max-w-[calc(100*var(--vw))] lg:px-[calc(5.4*var(--vw))]">
        <p id="about-marker" data-reveal-late className="js-reveal [&.is-in]:animate-reveal [&:not(.is-in)]:opacity-0 flex items-center gap-3 font-nav text-xs font-bold tracking-[0.3em] text-vermilion md:gap-4 md:tracking-[0.45em] lg:-translate-y-[calc(0.35*var(--vw))] lg:text-[length:max(12px,calc(0.78*var(--vw)))]">
          01 <span className="h-px w-10 bg-vermilion/70"></span> THE WORLD
          <span className="hidden font-jp text-base font-normal tracking-normal text-moon/60 md:inline lg:text-[length:max(16px,calc(1.05*var(--vw)))]">地平線の彼方</span>
        </p>
        <h2
          id="about-title"
          data-reveal-late
          className="js-reveal [&:not(.is-in)]:opacity-0 mt-10 whitespace-nowrap font-display text-[calc((75vw-16px)/7.75)] uppercase leading-[0.9] text-moon md:mt-12 md:text-[calc((75vw-40px)/7.75)] lg:mt-[calc(3*var(--vw))] lg:text-[length:calc(6.7*var(--vw))]"
        >
          <span className="inline-block in-[.is-in]:animate-reveal in-[.is-in]:[animation-delay:120ms]">About</span>{" "}
          {/* outer edge only: the stroke is painted under a dark fill, so the font's inner overlaps stay hidden */}
          <span className="inline-block text-[#0a0e18] [-webkit-text-stroke:2px_rgba(220,229,241,0.7)] lg:[-webkit-text-stroke:3px_rgba(220,229,241,0.7)] [paint-order:stroke_fill] in-[.is-in]:animate-reveal in-[.is-in]:[animation-delay:280ms]">IMEET</span>
        </h2>

        {/* Description card, as wide as the title above it: chamfered top-right and bottom-left corners, a hairline border
            (the outer layer showing round an equally clipped inner layer) and red accents. */}
        <div data-reveal-late className="js-reveal [&:not(.is-in)]:opacity-0 relative mt-6 w-[calc(75vw-16px)] md:mt-10 md:w-[calc(75vw-40px)] lg:mt-[calc(2*var(--vw))] lg:w-[calc(69.6*var(--vw))]">
          <div className="relative in-[.is-in]:animate-reveal in-[.is-in]:[animation-delay:350ms]">
            <div className={`${CARD_CLIP} bg-moon/20 p-px`}>
              <div className={`${CARD_CLIP} bg-[linear-gradient(160deg,rgba(14,19,32,0.92),rgba(8,11,20,0.86))] px-4 py-5 backdrop-blur-sm md:px-10 md:py-9 lg:px-[calc(2.8*var(--vw))] lg:py-[calc(2.4*var(--vw))]`}>
                <div className="flex items-center gap-4 in-[.is-in]:animate-reveal in-[.is-in]:[animation-delay:500ms]">
                  <span className="h-4 w-[3px] bg-vermilion" aria-hidden="true"></span>
                  <span className="font-nav text-xs font-bold tracking-[0.45em] text-vermilion lg:text-[length:max(12px,calc(0.82*var(--vw)))]">THE FEST</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-vermilion/70 to-vermilion/30" aria-hidden="true"></span>
                  <svg viewBox="0 0 24 24" className="size-6 shrink-0 text-vermilion lg:size-[calc(1.6*var(--vw))]" aria-hidden="true">
                    <g fill="none" stroke="currentColor" strokeWidth="1.4">
                      <path d="M12 2.5c2 2.6 2 5 0 7.5-2-2.5-2-4.9 0-7.5Z" />
                      <path d="M12 21.5c2-2.6 2-5 0-7.5-2 2.5-2 4.9 0 7.5Z" />
                      <path d="M2.5 12c2.6-2 5-2 7.5 0-2.5 2-4.9 2-7.5 0Z" />
                      <path d="M21.5 12c-2.6-2-5-2-7.5 0 2.5 2 4.9 2 7.5 0Z" />
                    </g>
                    <circle cx="12" cy="12" r="1.3" fill="currentColor" />
                  </svg>
                </div>

                <p className="mt-4 text-sm font-light leading-relaxed text-moon/90 md:mt-5 in-[.is-in]:animate-reveal in-[.is-in]:[animation-delay:650ms] md:text-lg md:leading-[1.7] lg:mt-[calc(1.5*var(--vw))] lg:text-[length:max(15px,calc(1.28*var(--vw)))] lg:leading-[1.62]">
                  IMEET is the annual technical fest of the IT department, a space where curiosity meets creativity and ideas turn
                  into impact. It brings together students, innovators and problem-solvers to explore technology, sharpen skills
                  and celebrate the spirit of learning through competitions, workshops and engaging events.
                </p>
              </div>
            </div>
            {/* red accents: down the left edge from the top-left corner, and the bottom-right corner */}
            <span className="pointer-events-none absolute left-0 top-0 h-[calc(100%-28px)] w-[2px] bg-gradient-to-b from-vermilion via-vermilion/85 to-vermilion/50" aria-hidden="true"></span>
            <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-10 bg-vermilion" aria-hidden="true"></span>
            <span className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-10 bg-vermilion" aria-hidden="true"></span>
            <span className="pointer-events-none absolute bottom-0 right-0 h-10 w-[2px] bg-vermilion" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
