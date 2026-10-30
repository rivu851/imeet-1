/* eslint-disable @next/next/no-img-element */

import FooterWordmark from "./FooterWordmark";

const EXPLORE = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#hods-desk", label: "HOD's Desk" },
  { href: "#gallery", label: "Gallery" },
];

const CONNECT = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "YouTube" },
];

const LABEL = "font-mono text-sm text-mist";
const LINK = "w-fit text-lg text-moon/85 transition-colors duration-300 hover:text-vermilion md:text-xl";

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-midnight">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-moon/[0.09]"
        viewBox="0 0 2000 1170"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M160 -20 C 200 40, 300 60, 420 60 C 440 200, 450 420, 470 700" />
        <path d="M60 -20 C 70 300, 80 500, 90 700" />
        <path d="M780 0 C 1000 120, 1250 260, 1340 300 C 1450 360, 1500 520, 1520 600" />
        <path d="M1220 0 C 1150 120, 1120 200, 1140 260 C 1200 330, 1500 360, 1960 320" />
        <path d="M1380 0 C 1420 120, 1480 300, 1700 420 C 1880 520, 1990 420, 1960 260 C 1930 140, 1800 80, 1600 0" />
        <path d="M700 680 C 900 560, 1100 420, 1330 300" />
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(30%_80%_at_5%_100%,rgba(240,120,70,0.8),transparent_72%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(38%_75%_at_36%_100%,rgba(205,48,60,0.8),transparent_72%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(38%_80%_at_66%_100%,rgba(232,130,185,0.72),transparent_72%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(28%_70%_at_95%_100%,rgba(248,221,232,0.45),transparent_72%)]"></div>
      </div>

      <div className="relative px-6 pb-10 pt-16 md:px-8 md:pt-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          <div>
            <p className={LABEL}>Explore</p>
            <ul className="mt-5 flex flex-col gap-2">
              {EXPLORE.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={LINK}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={LABEL}>Connect</p>
            <ul className="mt-5 flex flex-col gap-2">
              {CONNECT.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={LINK}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2">
            <p className={LABEL}>Contact</p>
            <div className="mt-5 flex flex-col gap-7 text-lg leading-relaxed text-moon/85 md:text-xl">
              <a href="#" className={LINK}>
                Reach out
              </a>
              <p>
                RCC Institute of Information Technology
                <br />
                Canal South Road, Beliaghata, Kolkata 700015
              </p>
              <p>
                Department of Information Technology
                <br />
                19–20 November 2026
              </p>
            </div>
          </div>
        </div>

        <a href="#hero" aria-label="IMEET, back to top" className="mt-24 flex items-end gap-[4.5vw] md:mt-[14.5vw]">
          <img src="/images/imeet/logo.svg" alt="" className="-mb-[1.2vw] h-[21vw] w-[21vw] shrink-0" />
          <FooterWordmark />
        </a>

        <div className="mt-10 flex flex-col gap-4 md:mt-14 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-8 text-base text-moon/80">
            <a href="#" className="transition-colors hover:text-vermilion">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-vermilion">
              Terms
            </a>
          </div>
          <p className="font-mono text-sm tracking-wide text-moon/70">© 2026 IMEET · Dept. of IT, RCCIIT</p>
        </div>
      </div>
    </footer>
  );
}
