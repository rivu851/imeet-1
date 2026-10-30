/* eslint-disable @next/next/no-img-element */

import HeroClouds from "./HeroClouds";
import HeroCountdown from "./HeroCountdown";
import SamuraiVideo from "./SamuraiVideo";
import { GRAIN } from "./styles";

// same box as object-cover on hero.webp (1672x941), so the cut-out layers line up.
// On phones it's placed so the mountain ridge sits at the foot of the title and the
// lit village lands right of centre.
const PAINTING_FRAME =
  "absolute left-[calc(81.4vw-75.7cqh)] top-[11.65cqh] [will-change:transform,scale] h-[54.6cqh] w-[97cqh] hero-wide:top-1/2 hero-wide:h-[max(100cqh,56.28cqw)] hero-wide:w-[max(100cqw,177.68cqh)] hero-wide:-translate-y-1/2 hero-wide:left-[24%] hero-wide:-translate-x-[24%] hero-lg:left-[calc(50%+60*var(--u))] hero-lg:top-[max(calc(470*var(--u)+1cqh-0.38*max(100cqh,56.28cqw)),calc(100cqh-max(100cqh,56.28cqw)))] hero-lg:-translate-x-1/2 hero-lg:translate-y-0";

const SCENE_BOX = "animate-scene-in pointer-events-none absolute inset-0";
const PARALLAX_BOX = "parallax absolute will-change-transform -inset-[4%] [container-type:size] hero-lg:-inset-x-[1%] hero-lg:-inset-y-[1%]";

// cherry-cliff.webp is 1024x1536; the samurai is positioned in % of this box.
// On phones the tree runs off the top and the samurai stands ~26% across.
const HILL_BOX =
  "absolute bottom-[16.7%] left-[calc(23vw-43.85cqh)] aspect-[1024/1536] h-[92.6cqh] hero-wide:bottom-0 hero-wide:left-0 hero-wide:h-[min(132cqh,135cqw)] hero-lg:h-[min(136cqh,175cqw)]";

const MIST =
  "absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(140,160,185,0.22),rgba(140,160,185,0)_70%)] animate-mist in-[.fx-off]:[animation-play-state:paused]";

const DIAMOND = "size-[calc(0.9*var(--pu))] rotate-45 bg-red-hi [box-shadow:0_0_8px_rgba(208,40,43,0.55)] hero-wide:size-[calc(9*var(--u))]";
const META_ITEM = "inline-flex items-center gap-[0.6em]";
const BUTTON =
  "group relative inline-flex h-[calc(9.2*var(--pu))] items-center justify-center gap-[0.8em] whitespace-nowrap px-[calc(3*var(--pu))] font-nav text-[length:calc(3.4*var(--pu))] font-bold tracking-[0.3em] text-ivory hero-wide:tracking-[0.2em] [clip-path:polygon(var(--cut)_0,100%_0,100%_calc(100%-var(--cut)),calc(100%-var(--cut))_100%,0_100%,0_var(--cut))] [text-shadow:none] [transition:background-color_0.3s_ease,filter_0.3s_ease,color_0.3s_ease] hero-wide:h-[calc(72*var(--u))] hero-wide:px-[calc(44*var(--u))] hero-wide:text-[calc(24*var(--u))]";
const BUTTON_ICON = "fa-solid fa-arrow-right text-[0.8em] [transition:translate_0.3s_ease] [.group:hover_&]:[translate:0.3em_0]";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[max(100svh,640px)] w-full overflow-hidden bg-midnight hero-wide:h-svh hero-wide:min-h-[620px]"
      aria-label="IMEET 2026"
    >
      <div id="layer-scene" className={SCENE_BOX}>
        <div className={PARALLAX_BOX} data-depth="10" data-scroll="0.3">
          <div className="absolute inset-0 bg-[rgb(2,18,47)]"></div>
          <div className={PAINTING_FRAME} data-hero-zoom>
            <img
              src="/images/banners/hero.webp"
              alt="Hand-painted night valley under a starry sky, with a river and village lights"
              className="h-full w-full [mask-image:linear-gradient(to_bottom,#000_76%,transparent)] hero-wide:[mask-image:none]"
            />
          </div>
        </div>
        {/* phones: the painting stops above the buttons, so fade it into the night there */}
        <div className="pointer-events-none absolute inset-x-0 top-[50%] bottom-0 bg-[linear-gradient(to_bottom,transparent,#080b14_40%)] hero-wide:hidden"></div>
        <div className="pointer-events-none opacity-0 animate-unveil absolute inset-0 bg-[radial-gradient(38%_55%_at_24%_60%,rgba(8,11,20,0.95),rgba(8,11,20,0.45)_70%,transparent)]"></div>
      </div>
      <div id="layer-stars" className="parallax pointer-events-none absolute inset-x-0 top-0 h-[50%] will-change-transform" data-depth="4" data-scroll="0.45"></div>
      <div id="layer-clouds" className="parallax pointer-events-none absolute inset-0 will-change-transform" data-depth="7" data-scroll="0.4">
        <HeroClouds />
      </div>
      <div className="animate-scene-in pointer-events-none absolute right-[20vw] top-[8.7%] w-[calc(12*var(--pu))] hero-wide:right-[calc(570*var(--u))] hero-wide:top-[calc(118*var(--u))] hero-wide:w-[calc(150*var(--u))]">
        <div className="parallax will-change-transform" data-depth="5" data-scroll="0.35">
          <img src="/images/imeet/moon-hero.webp" alt="" aria-hidden="true" className="h-auto w-full mix-blend-screen drop-shadow-[0_0_40px_rgba(170,200,255,0.35)] animate-moon-float in-[.fx-off]:[animation-play-state:paused]" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-midnight/80 via-midnight/30 to-transparent"></div>

      <div className={SCENE_BOX}>
        <div className={PARALLAX_BOX} data-depth="0" data-scroll="0.3">
          <div className={HILL_BOX}>
            <img
              src="/images/imeet/cherry-cliff.webp"
              alt=""
              aria-hidden="true"
              className="h-full w-full [mask-image:linear-gradient(to_bottom,#000_86%,transparent)] hero-wide:[mask-image:none]"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 animate-title-in">
        <div className="absolute right-[3vw] top-[23.2%] flex w-[calc(70*var(--pu))] flex-col items-end gap-[calc(1.6*var(--pu))] hero-wide:bottom-[calc(100%-472*var(--u))] hero-wide:left-auto hero-wide:right-[calc(70*var(--u))] hero-wide:top-auto hero-wide:w-[max(calc(100%-70*var(--u)-79svh),40vw)] hero-wide:translate-x-0 hero-wide:items-end hero-wide:gap-[calc(25*var(--u))]">
          <img src="/images/imeet/departmentofitwhite.png" alt="Departmental fest of IT" className="w-[calc(46*var(--pu))] hero-wide:w-[calc(465*var(--u))]" />
          <h1 className="m-0 w-full">
            <img src="/images/imeet/imeet-white.png" alt="IMEET 2026" className="w-full" />
          </h1>
        </div>
      </div>

      <div className={SCENE_BOX}>
        <div
          className={`${PARALLAX_BOX} [-webkit-mask-composite:xor] [-webkit-mask-image:linear-gradient(#000,#000),url('/images/imeet/cherry-cliff.webp')] [-webkit-mask-position:0_0,calc(23vw-0.4736*max(100svh,640px))_calc(-0.1004*max(100svh,640px))] hero-wide:[-webkit-mask-position:0_0,left_bottom] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%,auto_92.6%] [mask-composite:exclude] [mask-image:linear-gradient(#000,#000),url('/images/imeet/cherry-cliff.webp')] [mask-position:0_0,calc(23vw-0.4736*max(100svh,640px))_calc(-0.1004*max(100svh,640px))] hero-wide:[mask-position:0_0,left_bottom] [mask-repeat:no-repeat] [mask-size:100%_100%,auto_92.6%] hero-wide:[-webkit-mask-size:100%_100%,auto_132%] hero-wide:[mask-size:100%_100%,auto_132%] hero-lg:[-webkit-mask-size:100%_100%,auto_136%] hero-lg:[mask-size:100%_100%,auto_136%]`}
          data-depth="10"
          data-scroll="0.3"
        >
          <div className={PAINTING_FRAME} data-hero-zoom>
            <img src="/images/imeet/mountain-layer.webp" alt="" aria-hidden="true" className="h-full w-full [mask-image:linear-gradient(to_bottom,#000_76%,transparent)] hero-wide:[mask-image:none]" />
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

      <img
        src="/images/imeet/blossom-foreground.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[2%] -left-[6vw] w-[calc(78*var(--pu))] opacity-90 [mask-image:radial-gradient(75%_80%_at_20%_80%,#000_45%,transparent_78%)] hero-wide:hidden"
      />
      <div id="layer-mist" className="parallax pointer-events-none absolute -inset-x-[10%] bottom-[14%] h-[38%] will-change-transform" data-depth="14" data-scroll="0.22">
        <div className={MIST}></div>
        <div className={`${MIST} opacity-70`}></div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-midnight via-midnight/60 to-transparent hero-wide:h-[40%]"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[65%] w-[62%] bg-[radial-gradient(70%_70%_at_85%_88%,rgba(8,11,20,0.78),transparent_70%)] hero-wide:block"></div>
      <div className={GRAIN}></div>
      <svg
        id="layer-grass"
        className="parallax pointer-events-none absolute -bottom-2 -left-4 hidden will-change-transform h-[28%] w-[48%] blur-[0.6px] hero-wide:block hero-lg:h-[30%] hero-lg:w-[36%]"
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
        className="absolute inset-0 z-20 text-ivory [--cut:calc(2.4*var(--pu))] [text-shadow:0_2px_0_rgba(0,0,0,0.55),0_2px_16px_rgba(2,6,18,0.9)] animate-info-in hero-wide:[--cut:calc(14*var(--u))]"
      >
        <div className="absolute left-[27vw] right-[3vw] top-[36.5%] flex flex-col items-center gap-[calc(2.4*var(--pu))] hero-wide:left-auto hero-wide:right-[calc(70*var(--u))] hero-wide:top-[calc(483*var(--u))] hero-wide:items-end hero-wide:gap-[calc(22*var(--u))]">
          <p className="m-0 flex items-center gap-[calc(1.8*var(--pu))] whitespace-nowrap font-display text-[length:calc(2.9*var(--pu))] leading-none tracking-[0.06em] hero-wide:gap-[calc(24*var(--u))] hero-wide:text-[calc(38*var(--u))]">
            <span>INSPIRE</span>
            <i className={DIAMOND} aria-hidden="true"></i>
            <span>INNOVATE</span>
            <i className={DIAMOND} aria-hidden="true"></i>
            <span>IMPACT</span>
          </p>
          <p className="m-0 flex items-center gap-[calc(3*var(--pu))] whitespace-nowrap font-nav text-[length:calc(2.8*var(--pu))] font-semibold tracking-[0.12em] text-muted hero-wide:tracking-[0.18em] hero-wide:gap-[calc(24*var(--u))] hero-wide:text-[calc(25*var(--u))]">
            <span className={META_ITEM}>
              <i className="fa-regular fa-calendar text-red-hi" aria-hidden="true"></i>19–20 NOV 2026
            </span>
            <span className={`${META_ITEM} h-[1.2em] w-px bg-line`} aria-hidden="true"></span>
            <span className={META_ITEM}>
              <i className="fa-solid fa-location-dot text-red-hi" aria-hidden="true"></i>RCCIIT, KOLKATA
            </span>
          </p>
        </div>

        <div className="absolute left-1/2 top-[67.4%] flex w-[calc(70*var(--pu))] -translate-x-1/2 hero-wide:w-auto hero-wide:translate-x-0 flex-col gap-[calc(2.4*var(--pu))] hero-wide:left-auto hero-wide:right-[calc(70*var(--u))] hero-wide:top-[calc(627*var(--u))] hero-wide:flex-row hero-wide:items-center hero-wide:gap-[calc(18*var(--u))]">
          <a
            href="#"
            className={`${BUTTON} bg-[linear-gradient(180deg,#d0282b,#a8181b_55%,#5e090b)] [filter:drop-shadow(0_6px_16px_rgba(120,12,14,0.55))] [&:hover]:[filter:drop-shadow(0_6px_22px_rgba(208,40,43,0.6))_brightness(1.12)]`}
            title="Official registration link to be announced"
          >
            GET TICKETS <i className={BUTTON_ICON} aria-hidden="true"></i>
          </a>
          <a
            href="#events"
            className={`${BUTTON} isolate bg-silver before:absolute before:inset-px before:z-[-1] before:bg-[rgba(5,12,30,0.75)] before:[clip-path:inherit] before:[transition:background-color_0.3s_ease] [&:hover]:bg-ivory [&:hover]:before:bg-[rgba(14,26,54,0.85)] hero-wide:before:inset-[max(1px,calc(1.5*var(--u)))]`}
          >
            EXPLORE EVENTS
          </a>
        </div>

        <HeroCountdown />
      </div>
    </section>
  );
}
