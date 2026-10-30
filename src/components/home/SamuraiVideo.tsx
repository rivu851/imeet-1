"use client";

import { useEffect, useRef } from "react";

export default function SamuraiVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src="/media/samurai_video.webm"
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      className={`brightness-[0.88] ${className}`}
    />
  );
}
