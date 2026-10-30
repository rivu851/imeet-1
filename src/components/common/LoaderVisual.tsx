import Image from "next/image";

export default function LoaderVisual() {
  return (
    <div className="site-loader__content" aria-hidden="true">
      <span className="site-loader__seal">祭</span>
      <div className="site-loader__rings">
        <span className="site-loader__ring site-loader__ring--outer" />
        <span className="site-loader__ring site-loader__ring--inner" />
        <div className="site-loader__logo">
          <Image
            src="/images/imeet/logo.svg"
            alt=""
            width={128}
            height={128}
            priority
          />
        </div>
      </div>
      <p className="site-loader__name">IMEET <span>2026</span></p>
      <p className="site-loader__tagline">INSPIRE · INNOVATE · IMPACT</p>
      <span className="site-loader__progress" />
    </div>
  );
}
