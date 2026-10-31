import Image from "next/image";

export default function HodPhoto() {
  return (
    <Image
      src="/images/imeet/hod-portrait.png"
      alt="Dr. Soumyadip Dhar, Head of the Department of Information Technology"
      width={768}
      height={768}
      className="h-auto w-[min(100%,42rem)] object-contain sm:w-[min(100%,46rem)] lg:w-[min(48vw,48rem)]"
    />
  );
}
