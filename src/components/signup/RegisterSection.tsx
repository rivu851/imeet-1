/* eslint-disable @next/next/no-img-element */

import { GRAIN } from "../home/styles";

export default function Register() {
  return (
    <section id="register" className="relative h-[780px] overflow-hidden md:h-[840px]">
      <img
        data-speed="-0.05"
        src="/images/imeet/stairway.jpg"
        alt="Lantern-lit stone stairway climbing toward a torii gate beneath a crescent moon"
        className="absolute inset-0 h-full w-full origin-right object-cover object-right md:origin-center md:object-[60%_50%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-midnight/60"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_15%_85%,rgba(8,11,20,0.85),transparent_70%)]"></div>
      <div id="register-leaves" className="pointer-events-none absolute inset-0 overflow-hidden"></div>
      <div className={GRAIN}></div>
      <div className="relative mx-auto flex h-full w-full max-w-[1480px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-24 lg:px-14">
        <p className="js-reveal [&.is-in]:animate-reveal flex items-center gap-4 font-nav text-xs font-bold tracking-[0.45em] text-vermilion">
          07 <span className="h-px w-10 bg-vermilion/70"></span> THE CALL
        </p>
        <h2 className="js-reveal [&.is-in]:animate-reveal mt-5 font-display text-[16vw] uppercase leading-[0.85] text-moon md:text-[10vw] lg:text-[9.5rem]">
          Your story
          <br />
          starts <span className="text-vermilion">here.</span>
        </h2>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="js-reveal [&.is-in]:animate-reveal max-w-md text-lg font-light leading-relaxed text-moon/80">
            “Step into a world of ideas, innovation, and unforgettable experiences at IMEET 2026.”
          </p>
          <div className="js-reveal [&.is-in]:animate-reveal flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              id="cta-register"
              href="/auth/login?screen_hint=signup&returnTo=%2Fprofile"
              title="Sign up to create your participant profile"
              className="group inline-flex items-center gap-4 border border-vermilion/70 bg-crimson px-8 py-5 font-nav text-[13px] font-bold tracking-[0.34em] text-moon shadow-[0_10px_40px_-12px_rgba(169,22,25,0.8)] transition-colors duration-500 hover:bg-vermilion"
            >
              REGISTER FOR IMEET <i className="fa-solid fa-arrow-right-long text-xs [transition:transform_0.45s_cubic-bezier(0.2,0.7,0.2,1)] [.group:hover_&]:[transform:translateX(6px)]"></i>
            </a>
            <a
              id="cta-explore-events"
              href="#events"
              className="relative font-nav text-xs after:absolute after:-bottom-[6px] after:left-0 after:right-full after:h-px after:bg-vermilion after:[transition:right_0.45s_cubic-bezier(0.2,0.7,0.2,1)] [&:hover]:after:right-0 font-bold tracking-[0.34em] text-moon/80 transition-colors hover:text-moon"
            >
              EXPLORE EVENTS
            </a>
          </div>
        </div>
        <p className="mt-8 flex items-center gap-3 text-xs text-mist">
          <i className="fa-solid fa-circle-info text-amber"></i>Sign in, complete your participant profile, then register for events.
        </p>
      </div>
    </section>
  );
}
