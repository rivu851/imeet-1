/* eslint-disable @next/next/no-img-element */

import HeroClouds from "./HeroClouds";
import HeroCountdown from "./HeroCountdown";
import SamuraiVideo from "./SamuraiVideo";
import { GRAIN } from "./styles";

// same box as object-cover on hero.webp (1672x941), so the cut-out layers line up
const PAINTING_FRAME =
  "absolute left-[19%] top-1/2 [will-change:transform,scale] h-[max(100cqh,56.28cqw)] w-[max(100cqw,177.68cqh)] -translate-x-[19%] -translate-y-1/2 md:left-[24%] md:-translate-x-[24%] lg:left-1/2 lg:top-[max(calc(470*var(--u)+1cqh-0.38*max(100cqh,56.28cqw)),calc(100cqh-max(100cqh,56.28cqw)))] lg:-translate-x-1/2 lg:translate-y-0";

const SCENE_BOX = "animate-scene-in pointer-events-none absolute inset-x-0 top-0 h-[680px] md:h-full";
const PARALLAX_BOX = "parallax absolute will-change-transform -inset-[4%] [container-type:size] lg:-inset-x-[1%] lg:-inset-y-[1%]";

// hill.webp is 1024x1536; the samurai is positioned in % of this box
const HILL_BOX =
  "absolute bottom-0 left-0 aspect-[1024/1536] h-[min(105cqh,135cqw)] md:h-[min(132cqh,135cqw)] lg:h-[min(136cqh,175cqw)]";

const MIST =
  "absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(140,160,185,0.22),rgba(140,160,185,0)_70%)] animate-mist in-[.fx-off]:[animation-play-state:paused]";

const DIAMOND = "size-[1.4vw] rotate-45 bg-red-hi [box-shadow:0_0_8px_rgba(208,40,43,0.55)] md:size-[calc(9*var(--u))]";
const META_ITEM = "inline-flex items-center gap-[0.6em]";
const BUTTON =
  "group relative inline-flex h-[11vw] items-center justify-center gap-[0.8em] whitespace-nowrap px-[5vw] font-nav text-[3.6vw] font-bold tracking-[0.2em] text-ivory [clip-path:polygon(var(--cut)_0,100%_0,100%_calc(100%-var(--cut)),calc(100%-var(--cut))_100%,0_100%,0_var(--cut))] [text-shadow:none] [transition:background-color_0.3s_ease,filter_0.3s_ease,color_0.3s_ease] md:h-[calc(72*var(--u))] md:px-[calc(44*var(--u))] md:text-[calc(24*var(--u))]";
const BUTTON_ICON = "fa-solid fa-arrow-right text-[0.8em] [transition:translate_0.3s_ease] [.group:hover_&]:[translate:0.3em_0]";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[900px] w-full overflow-hidden bg-midnight md:h-svh md:min-h-[620px]"
      aria-label="IMEET 2026"
    >
      <div id="layer-scene" className={SCENE_BOX}>
        <div className={PARALLAX_BOX} data-depth="10" data-scroll="0.3">
          <div className="absolute inset-0 bg-[rgb(2,18,47)]"></div>
          <div className={PAINTING_FRAME} data-hero-zoom>
            <img
              src="/imeet/hero.webp"
              alt="Hand-painted night valley under a starry sky, with a river and village lights"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="pointer-events-none opacity-0 animate-unveil absolute inset-0 bg-[radial-gradient(38%_55%_at_24%_60%,rgba(8,11,20,0.95),rgba(8,11,20,0.45)_70%,transparent)]"></div>
      </div>
      <div id="layer-stars" className="parallax pointer-events-none absolute inset-x-0 top-0 h-[50%] will-change-transform" data-depth="4" data-scroll="0.45"></div>
      <div id="layer-clouds" className="parallax pointer-events-none absolute inset-0 will-change-transform" data-depth="7" data-scroll="0.4">
        <HeroClouds />
      </div>
      <div className="animate-scene-in pointer-events-none absolute right-[6%] top-[84px] w-[18vw] md:right-[calc(570*var(--u))] md:top-[calc(118*var(--u))] md:w-[calc(150*var(--u))]">
        <div className="parallax will-change-transform" data-depth="5" data-scroll="0.35">
          <img src="/imeet/moon-hero.webp" alt="" aria-hidden="true" className="h-auto w-full mix-blend-screen drop-shadow-[0_0_40px_rgba(170,200,255,0.35)] animate-moon-float in-[.fx-off]:[animation-play-state:paused]" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-midnight/80 via-midnight/30 to-transparent"></div>

      <div className={SCENE_BOX}>
        <div className={PARALLAX_BOX} data-depth="0" data-scroll="0.3">
          <div className={HILL_BOX}>
            <img src="/imeet/hill.webp" alt="" aria-hidden="true" className="h-full w-full" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 animate-title-in">
        <div className="absolute left-1/2 top-[96px] flex w-[92vw] -translate-x-1/2 flex-col items-center gap-[8px] md:bottom-[calc(100%-490*var(--u))] md:left-auto md:right-[calc(70*var(--u))] md:top-auto md:w-[max(calc(100%-70*var(--u)-79svh),40vw)] md:translate-x-0 md:items-end md:gap-[calc(25*var(--u))]">
          <img src="/imeet/departmentofitwhite.png" alt="Departmental fest of IT" className="w-[62vw] md:w-[calc(465*var(--u))]" />
          <h1 className="m-0 w-full">
            <img src="/imeet/imeet-white.png" alt="IMEET 2026" className="w-full" />
          </h1>
        </div>
      </div>

      <div className={SCENE_BOX}>
        <div
          className={`${PARALLAX_BOX} [-webkit-mask-composite:xor] [-webkit-mask-image:linear-gradient(#000,#000),url('/imeet/hill.webp')] [-webkit-mask-position:0_0,left_bottom] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%,90%_auto] [mask-composite:exclude] [mask-image:linear-gradient(#000,#000),url('/imeet/hill.webp')] [mask-position:0_0,left_bottom] [mask-repeat:no-repeat] [mask-size:100%_100%,90%_auto] md:[-webkit-mask-size:100%_100%,auto_132%] md:[mask-size:100%_100%,auto_132%] lg:[-webkit-mask-size:100%_100%,auto_136%] lg:[mask-size:100%_100%,auto_136%]`}
          data-depth="10"
          data-scroll="0.3"
        >
          <div className={PAINTING_FRAME} data-hero-zoom>
            <img src="/imeet/mountain-layer.webp" alt="" aria-hidden="true" className="h-full w-full" />
          </div>
        </div>
      </div>

      <div className={`${SCENE_BOX} z-30`}>
        <div className={PARALLAX_BOX} data-depth="0" data-scroll="0.3">
          <div className={HILL_BOX}>
            <div className="absolute left-[66.2%] top-[69.2%] h-[1.8%] w-[11.6%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(0,0,0,0.8),rgba(0,0,0,0.4)_55%,transparent)] blur-[2px]"></div>
            <SamuraiVideo className="absolute left-[50.4%] top-[44.6%] h-auto w-[70%] max-w-none" />
          </div>
        </div>
      </div>

      <div id="layer-mist" className="parallax pointer-events-none absolute -inset-x-[10%] bottom-[14%] h-[38%] will-change-transform" data-depth="14" data-scroll="0.22">
        <div className={MIST}></div>
        <div className={`${MIST} opacity-70`}></div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-[440px] h-[260px] bg-gradient-to-b from-transparent to-midnight md:hidden"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[40%] bg-gradient-to-t from-midnight via-midnight/50 to-transparent md:block"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[65%] w-[62%] bg-[radial-gradient(70%_70%_at_85%_88%,rgba(8,11,20,0.78),transparent_70%)] md:block"></div>
      <div className={GRAIN}></div>
      <svg
        id="layer-grass"
        className="parallax pointer-events-none absolute -bottom-2 -left-4 hidden will-change-transform h-[28%] w-[48%] blur-[0.6px] md:block lg:h-[30%] lg:w-[36%]"
        data-depth="22"
        data-scroll="0.05"
        viewBox="0 0 600 220"
        preserveAspectRatio="xMinYMax slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bladeA" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#05080f" />
            <stop offset=".7" stopColor="#121e2c" />
            <stop offset="1" stopColor="#3b4f66" />
          </linearGradient>
          <linearGradient id="bladeB" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#070b13" />
            <stop offset=".75" stopColor="#18283a" />
            <stop offset="1" stopColor="#5d728a" />
          </linearGradient>
        </defs>
        <g id="grass-blades"></g>
      </svg>
      <div id="layer-leaves" className="pointer-events-none absolute inset-0 z-10 overflow-hidden"></div>

      <div
        id="hero-ui"
        className="absolute inset-x-0 top-[200px] z-20 flex flex-col items-center gap-[7vw] px-[4vw] text-ivory [--cut:2.4vw] [text-shadow:0_2px_0_rgba(0,0,0,0.55),0_2px_16px_rgba(2,6,18,0.9)] animate-info-in md:inset-0 md:block md:p-0 md:[--cut:calc(14*var(--u))]"
      >
        <div className="flex flex-col items-center gap-[3vw] md:absolute md:right-[calc(70*var(--u))] md:top-[calc(528*var(--u))] md:items-end md:gap-[calc(22*var(--u))]">
          <p className="m-0 flex items-center gap-[3vw] whitespace-nowrap font-display text-[4.6vw] leading-none tracking-[0.06em] md:gap-[calc(24*var(--u))] md:text-[calc(38*var(--u))]">
            <span>INSPIRE</span>
            <i className={DIAMOND} aria-hidden="true"></i>
            <span>INNOVATE</span>
            <i className={DIAMOND} aria-hidden="true"></i>
            <span>IMPACT</span>
          </p>
          <p className="m-0 flex items-center gap-[3vw] whitespace-nowrap font-nav text-[3.4vw] font-semibold tracking-[0.18em] text-muted md:gap-[calc(24*var(--u))] md:text-[calc(25*var(--u))]">
            <span className={META_ITEM}>
              <i className="fa-regular fa-calendar text-red-hi" aria-hidden="true"></i>19–20 NOV 2026
            </span>
            <span className={`${META_ITEM} h-[1.2em] w-px bg-line`} aria-hidden="true"></span>
            <span className={META_ITEM}>
              <i className="fa-solid fa-location-dot text-red-hi" aria-hidden="true"></i>RCCIIT, KOLKATA
            </span>
          </p>
        </div>

        <div className="flex items-center gap-[3vw] md:absolute md:right-[calc(70*var(--u))] md:top-[calc(672*var(--u))] md:gap-[calc(18*var(--u))]">
          <a
            href="#"
            className={`${BUTTON} bg-[linear-gradient(180deg,#d0282b,#a8181b_55%,#5e090b)] [filter:drop-shadow(0_6px_16px_rgba(120,12,14,0.55))] [&:hover]:[filter:drop-shadow(0_6px_22px_rgba(208,40,43,0.6))_brightness(1.12)]`}
            title="Official registration link to be announced"
          >
            GET TICKETS <i className={BUTTON_ICON} aria-hidden="true"></i>
          </a>
          <a
            href="#events"
            className={`${BUTTON} isolate bg-silver before:absolute before:inset-px before:z-[-1] before:bg-[rgba(5,12,30,0.75)] before:[clip-path:inherit] before:[transition:background-color_0.3s_ease] [&:hover]:bg-ivory [&:hover]:before:bg-[rgba(14,26,54,0.85)] md:before:inset-[max(1px,calc(1.5*var(--u)))]`}
          >
            EXPLORE EVENTS
          </a>
        </div>

        <HeroCountdown />
      </div>
    </section>
  );
}
