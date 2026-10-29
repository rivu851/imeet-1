export default function HodsDesk() {
  return (
    <section id="hods-desk" className="relative overflow-hidden bg-navy py-24 md:py-36">
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full opacity-60"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 160 Q120 90 240 130 T480 100 Q600 50 720 110 T980 90 Q1100 40 1220 105 T1440 80 V220 H0Z" fill="#25354A" opacity=".45" />
        <path d="M0 190 Q160 140 300 175 T600 160 Q760 120 900 170 T1200 150 Q1320 130 1440 165 V220 H0Z" fill="#080B14" opacity=".7" />
      </svg>
      <span className="pointer-events-none absolute right-[4%] top-10 select-none font-jp text-[14rem] leading-none text-moon/[0.04] md:text-[22rem]">
        道
      </span>
      <div className="relative mx-auto grid w-full max-w-[1480px] items-center gap-14 px-6 md:px-10 lg:grid-cols-12 lg:px-14">
        <div id="hod-portrait" className="js-reveal [&.is-in]:animate-reveal relative mx-auto w-full max-w-sm lg:col-span-4 lg:max-w-none">
          <div className="pointer-events-none absolute inset-0 -translate-x-4 translate-y-4 border border-crimson/50"></div>
          <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 overflow-hidden border border-moon/15 bg-gradient-to-b from-storm/70 to-midnight">
            <span className="absolute right-10 top-10 h-16 w-16 rounded-full shadow-[inset_-10px_6px_0_0_rgba(220,229,241,0.25)]"></span>
            <svg className="absolute inset-x-0 bottom-0 h-24 w-full" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 70 L70 35 L130 60 L200 20 L270 55 L330 30 L400 60 V100 H0Z" fill="#080B14" opacity=".8" />
            </svg>
            <i className="fa-regular fa-user text-4xl text-moon/30"></i>
            <span className="font-nav text-[11px] font-bold tracking-[0.4em] text-moon/60">OFFICIAL PORTRAIT</span>
            <span className="text-xs text-mist">To be supplied</span>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="js-reveal [&.is-in]:animate-reveal flex items-center gap-4 font-nav text-xs font-bold tracking-[0.45em] text-vermilion">
            05 <span className="h-px w-10 bg-vermilion/70"></span> HOD&apos;S DESK
          </p>
          <h2 className="js-reveal [&.is-in]:animate-reveal mt-5 font-display text-[12vw] uppercase leading-[0.9] text-moon md:text-7xl md:leading-none lg:text-[6.2rem]">
            A message for the journey.
          </h2>
          <i className="fa-solid fa-quote-left mt-10 text-3xl text-vermilion"></i>
          <p className="js-reveal [&.is-in]:animate-reveal mt-5 text-xl font-light italic leading-relaxed text-moon/75 md:text-2xl md:leading-8">
            The official message from the Head of the Department will appear here once it has been supplied.
          </p>
          <div className="mt-7 space-y-3" aria-hidden="true">
            <span className="block h-2 w-full bg-moon/[0.07]"></span>
            <span className="block h-2 w-11/12 bg-moon/[0.07]"></span>
            <span className="block h-2 w-3/4 bg-moon/[0.07]"></span>
          </div>
          <div className="mt-10 flex items-center gap-5 border-t border-moon/10 pt-7">
            <span className="h-12 w-px bg-vermilion"></span>
            <div>
              <p className="font-display text-2xl uppercase tracking-wide text-moon md:text-3xl">[ Name of the HOD ]</p>
              <p className="mt-1 font-nav text-xs font-semibold tracking-[0.3em] text-mist">
                [ DESIGNATION ] · DEPARTMENT OF INFORMATION TECHNOLOGY, RCCIIT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
