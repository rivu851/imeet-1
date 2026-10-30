"use client";

import { useLayoutEffect, useRef } from "react";
import StrokeText from "@/components/ui/StrokeText";

const TEXT = "IMEET";
const FONT_SIZE = 200;
const STROKE = 1.6;

export default function FooterWordmark() {
  const boxRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const inner = innerRef.current;
    if (!box || !inner) return;
    const ctx = document.createElement("canvas").getContext("2d");

    const fit = () => {
      const svg = inner.querySelector("svg");
      const text = inner.querySelector(".stroke-text__fill");
      const vb = svg?.getAttribute("viewBox")?.split(" ").map(Number);
      if (!svg || !text || !ctx || !vb || vb.length !== 4 || !vb[2]) return;
      const [vx, vy, w, h] = vb;

      ctx.font = `${FONT_SIZE}px ${getComputedStyle(text).fontFamily}`;
      const m = ctx.measureText(TEXT);
      const inkLeft = -m.actualBoundingBoxLeft;
      const inkWidth = m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
      const ascent = m.actualBoundingBoxAscent;
      if (!inkWidth || !ascent) return;

      inner.style.width = `${w}px`;
      inner.style.height = `${h}px`;
      const sx = box.clientWidth / inkWidth;
      const sy = box.clientHeight / ascent;
      const tx = -(inkLeft - vx) * sx;
      const ty = -(-ascent - vy) * sy;
      inner.style.transform = `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})`;
    };

    fit();
    document.fonts?.ready.then(fit).catch(() => {});
    const resize = new ResizeObserver(fit);
    resize.observe(box);
    const svg = inner.querySelector("svg");
    const mutation = new MutationObserver(fit);
    if (svg) mutation.observe(svg, { attributes: true, attributeFilter: ["viewBox"] });
    return () => {
      resize.disconnect();
      mutation.disconnect();
    };
  }, []);

  return (
    <div ref={boxRef} className="relative h-[17vw] flex-1">
      <div ref={innerRef} className="absolute left-0 top-0 origin-top-left">
        <StrokeText
          text={TEXT}
          fontFamily="var(--font-shuriken), var(--font-anton), sans-serif"
          fontSize={FONT_SIZE}
          fontWeight={400}
          letterSpacing={0}
          strokeWidth={STROKE}
          strokeColor="#C52A2C"
          fillColor="#DCE5F1"
          trigger="scroll"
          fillMode="wipe"
          wipeFrom="left"
          drawDuration={1.8}
          stagger={0.12}
          hoverRedraw
          shadow
          shadowColor="#A91619"
        />
      </div>
    </div>
  );
}
