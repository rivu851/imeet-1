/* eslint-disable @next/next/no-img-element */

import { GRAIN } from "@/components/home/styles";

export default function GalleryBackdrop({
  src,
  position = "object-center",
}: {
  src: string;
  position?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="sticky top-0 h-svh w-full">
        <img src={src} alt="" className={`h-full w-full object-cover ${position}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,20,0.85)_0%,rgba(8,11,20,0.45)_40%,rgba(8,11,20,0.8)_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent,rgba(8,11,20,0.6))]"></div>
        <div className={GRAIN} style={{ opacity: 0.06 }}></div>
      </div>
    </div>
  );
}
