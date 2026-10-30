"use client";

/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FAR_SRC = "/images/imeet/clouds-far.webp";
const NEAR_SRC = "/images/imeet/clouds-near.webp";

const OVERLAP = 12;
const STEP = 100 - OVERLAP;
const COPIES = [-1, 0, 1, 2];
const EDGE_FADE = `linear-gradient(to right, transparent 0%, #000 ${OVERLAP}%, #000 ${STEP}%, transparent 100%)`;

function Track({ trackRef, src, className }: { trackRef: React.Ref<HTMLDivElement>; src: string; className: string }) {
  return (
    <div ref={trackRef} className={`relative w-full will-change-transform ${className}`}>
      {COPIES.map((i) => (
        <img
          key={i}
          src={src}
          decoding="async"
          alt=""
          draggable={false}
          className="absolute top-0 h-full w-full object-cover object-top"
          style={{ left: `${i * STEP}%`, maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
        />
      ))}
    </div>
  );
}

export default function HeroClouds() {
  const backRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline();
      tl.fromTo(backRef.current, { xPercent: 0 }, { xPercent: -STEP, duration: 240, ease: "none", repeat: -1 }, 0);
      tl.fromTo(frontRef.current, { xPercent: -STEP }, { xPercent: 0, duration: 160, ease: "none", repeat: -1 }, 0);
      tl.to(backRef.current, { y: 10, duration: 11, ease: "sine.inOut", repeat: -1, yoyo: true }, 0);
      tl.to(frontRef.current, { y: -14, scaleY: 1.03, duration: 8, ease: "sine.inOut", repeat: -1, yoyo: true }, 0);
      const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? tl.resume() : tl.pause()));
      if (rootRef.current) io.observe(rootRef.current);
      return () => io.disconnect();
    });
    return () => mm.revert();
  });

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 [mask-composite:intersect] [-webkit-mask-composite:source-in] [mask-image:linear-gradient(to_right,transparent_18%,#000_44%),linear-gradient(to_bottom,#000_30%,transparent_58%)] [-webkit-mask-image:linear-gradient(to_right,transparent_18%,#000_44%),linear-gradient(to_bottom,#000_30%,transparent_58%)]"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 -top-[6%] h-[52%] overflow-hidden opacity-30">
        <Track trackRef={backRef} src={FAR_SRC} className="h-full" />
      </div>
      <div className="absolute inset-x-0 top-0 h-[56%] overflow-hidden opacity-55">
        <Track trackRef={frontRef} src={NEAR_SRC} className="h-full" />
      </div>
    </div>
  );
}
