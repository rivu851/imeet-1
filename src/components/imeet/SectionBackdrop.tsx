/* eslint-disable @next/next/no-img-element */

export default function SectionBackdrop({
  src,
  opacity = 0.35,
  position = "object-center",
  sticky = false,
}: {
  src: string;
  opacity?: number;
  position?: string;
  sticky?: boolean;
}) {
  const frame = (
    <>
      <img src={src} alt="" className={`h-full w-full object-cover ${position}`} style={{ opacity }} />
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          sticky ? "from-midnight/85 via-midnight/25 to-midnight/85" : "from-midnight via-midnight/40 to-midnight"
        }`}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent,rgba(8,11,20,0.6))]"></div>
    </>
  );

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {sticky ? <div className="sticky top-0 h-svh w-full">{frame}</div> : frame}
      {sticky && (
        <>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-midnight to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight to-transparent"></div>
        </>
      )}
    </div>
  );
}
