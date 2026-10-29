"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export let lenis: Lenis | null = null;

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      wheelMultiplier: 0.9,
      anchors: { offset: -80, duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4) },
    });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
