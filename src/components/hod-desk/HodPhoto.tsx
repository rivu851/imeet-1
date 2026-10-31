import Image from "next/image";

export default function HodPhoto() {
  return (
    <Image
      src="/images/imeet/hod-portrait.png"
      alt="Dr. Soumyadip Dhar, Head of the Department of Information Technology"
      width={768}
      height={768}
      sizes="(min-width: 1024px) 24vw, 22rem"
      className="h-auto w-[min(62%,22rem)] object-contain md:w-[min(100%,22rem)] lg:w-full"
    />
  );
}
