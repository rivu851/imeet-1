export default function EventsHeader({ note }: { note: string }) {
  return (
    <div id="events-head" className="grid gap-8 [text-shadow:0_2px_14px_rgba(0,0,0,0.9)] md:grid-cols-12 md:items-end">
      <div className="js-reveal [&.is-in]:animate-reveal md:col-span-7">
        <p className="flex items-center gap-4 font-nav text-xs font-bold tracking-[0.45em] text-vermilion">
          03 <span className="h-px w-10 bg-vermilion/70"></span> THE ARENA
        </p>
        <h2 className="mt-5 font-display text-[15vw] uppercase leading-[0.88] text-moon md:text-8xl md:leading-none lg:text-[8rem]">
          The arena awaits.
        </h2>
      </div>
      <div className="js-reveal [&.is-in]:animate-reveal md:col-span-5 md:pb-3">
        <p className="text-lg font-light leading-relaxed text-moon md:text-xl md:leading-7">
          “Discover the challenges, ideas, and experiences of IMEET 2026.”
        </p>
        <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-moon/85">
          <i className="fa-solid fa-circle-info mt-1 text-xs text-amber"></i>
          {note}
        </p>
      </div>
    </div>
  );
}
