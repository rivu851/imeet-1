import PillarsStack from "./PillarsStack";
import SectionBackdrop from "./SectionBackdrop";
import { TEXT_OUTLINE } from "./styles";

export default function Pillars() {
  return (
    <section id="pillars" className="relative overflow-clip bg-midnight py-24 md:py-32">
      <SectionBackdrop sticky src="/images/imeet/moon.jpg" opacity={0.55} position="object-[50%_30%]" />
      <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-10 lg:px-14">
        <div id="pillars-head" className="flex flex-col gap-6 border-b border-moon/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="js-reveal [&.is-in]:animate-reveal">
            <p className="flex items-center gap-4 font-nav text-xs font-bold tracking-[0.45em] text-vermilion">
              02 <span className="h-px w-10 bg-vermilion/70"></span> THE THREE PATHS
            </p>
            <h2 className="mt-5 font-display text-5xl uppercase leading-[0.95] text-moon md:text-7xl md:leading-none">
              Three paths. <span className={TEXT_OUTLINE}>One journey.</span>
            </h2>
          </div>
          <p className="js-reveal [&.is-in]:animate-reveal max-w-sm text-base font-light leading-relaxed text-moon/60">
            Every story at IMEET follows three paths: a way of seeing, a way of building, and a way of leaving a mark.
          </p>
        </div>
      </div>

      <PillarsStack />
    </section>
  );
}
