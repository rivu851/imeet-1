"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#hero", label: "HOME" },
  { href: "#about", label: "ABOUT IMEET" },
  { href: "#hods-desk", label: "HOD'S DESK" },
  { href: "#events", label: "EVENTS" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#", label: "SIGN IN" },
];

export default function Header() {
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 120) setHiddenByScroll(false);
      else if (y - lastY > 4) setHiddenByScroll(true);
      else if (lastY - y > 4) setHiddenByScroll(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeOnMobile = () => {
    if (window.innerWidth < 1024) setMenuOpen(false);
  };

  return (
    <header
      id="header"
      className={`animate-nav-in fixed inset-x-0 top-0 z-50 transition-[translate] duration-500 ease-out [text-shadow:0_2px_10px_rgba(0,0,0,0.85)] ${
        hiddenByScroll && !menuOpen ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav
        id="main-nav"
        className="relative flex h-20 w-full items-center justify-between px-6 md:px-10 lg:h-[calc(165*var(--u))] lg:px-[calc(40*var(--u))]"
        aria-label="Primary"
      >
        <a id="logo-slot" href="#hero" className="flex items-center" aria-label="IMEET home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imeet/logo.svg" alt="IMEET" className="h-14 w-14 lg:h-[calc(100*var(--u))] lg:w-[calc(100*var(--u))]" />
        </a>
        <ul
          id="nav-links"
          className={`absolute inset-x-0 top-full ${
            menuOpen ? "flex" : "hidden"
          } flex-col border-y border-moon/10 bg-midnight/95 px-6 py-3 text-lg text-white backdrop-blur-md [font-family:var(--font-shuriken),var(--font-anton),sans-serif] lg:absolute lg:inset-x-auto lg:left-[calc(470*var(--u))] lg:top-1/2 lg:flex lg:-translate-y-1/2 lg:flex-row lg:items-center lg:gap-[calc(100*var(--u))] lg:border-0 lg:bg-transparent lg:p-0 lg:text-[calc(24*var(--u))] lg:backdrop-blur-none`}
        >
          {LINKS.map((link) => (
            <li key={link.label} className="border-b border-moon/10 py-4 lg:border-0 lg:py-0">
              <a href={link.href} onClick={closeOnMobile} className="whitespace-nowrap transition-colors hover:text-[#ff2a1f]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          id="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center border border-moon/25 text-moon transition-colors hover:border-vermilion lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label="Open menu"
        >
          <i className={menuOpen ? "fa-solid fa-xmark text-sm" : "fa-solid fa-bars-staggered text-sm"}></i>
        </button>
      </nav>
    </header>
  );
}
