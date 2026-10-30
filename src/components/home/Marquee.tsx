import TextLoop from "@/components/ui/TextLoop";

const TEXT = "Inspire ✦ Innovate ✦ Impact ✦ IMEET 2026 ✦ 19–20 November ✦ RCCIIT · Kolkata";

export default function Marquee() {
  return (
    <div
      className="relative h-[clamp(240px,28vw,520px)] overflow-hidden bg-midnight"
      aria-label="Inspire, Innovate, Impact, IMEET 2026"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[70%] -translate-y-1/2 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(139,92,246,0.22),transparent_75%)]"></div>
      <div className="absolute left-1/2 top-1/2 w-[200%] -translate-x-1/2 -translate-y-1/2 md:w-[130%] lg:w-full">
        <TextLoop
          text={TEXT}
          shape="wave"
          curviness={28}
          speed={70}
          separator="✦"
          fontSize={40}
          fontWeight={400}
          letterSpacing={2}
          color="#DCE5F1"
          ribbonColor="#6D28D9"
          ribbonWidth={76}
          cross
          crossColor="#111B2A"
          crossAngle={8}
          tilt={-2}
          pauseOnHover
          scrollBoost={1}
          className="font-display"
        />
      </div>
    </div>
  );
}
