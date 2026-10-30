"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export let lenis: Lenis | null = null;

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.12,
      lerp: 0.12,
      wheelMultiplier: 0.85,
      anchors: { offset: -80, duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 4) },
    });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
