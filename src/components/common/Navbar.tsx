"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/teams", label: "TEAMS" },
  { href: "/events", label: "EVENTS" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/signup", label: "SIGN UP" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountName, setAccountName] = useState("");
  const profileRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 120) setHiddenByScroll(false);
      else if (y - lastY > 4) setHiddenByScroll(true);
      else if (lastY - y > 4) setHiddenByScroll(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { fetch("/auth/status", { credentials: "same-origin", cache: "no-store" }).then((response) => response.json()).then((data) => { if (data?.auth === "confirmed") setAccountName(data.profile?.name || data.user?.name || data.user?.email || "Participant"); }).catch(() => {}); }, []);

  useEffect(() => {
    if (!profileOpen) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProfileOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [profileOpen]);

  const closeOnMobile = () => {
    if (window.innerWidth < 1024) setMenuOpen(false);
  };

  return (
    <header
      id="header"
      className={`animate-nav-in fixed inset-x-0 top-0 z-50 transition-[translate] duration-500 ease-out [text-shadow:0_2px_10px_rgba(0,0,0,0.85)] ${
        hiddenByScroll && !menuOpen ? "lg:-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav
        id="main-nav"
        className="relative flex h-[calc(var(--logo)+24px)] w-full items-center justify-between px-6 [--logo:clamp(64px,16vw,120px)] md:px-10 lg:h-[calc(165*var(--u))] lg:px-[calc(40*var(--u))]"
        aria-label="Primary"
      >
        {/* Phones and tablets: at the top of the page the logo floats in the middle of the bar;
            once the page is scrolled it glides back to the left and only bobs gently. */}
        <Link
          id="logo-slot"
          href="/"
          onClick={closeOnMobile}
          className={`flex items-center transition-[translate,scale] duration-[2400ms] ease-[cubic-bezier(0.45,0,0.2,1)] lg:translate-x-0 lg:scale-100 ${
            scrolled ? "" : "translate-x-[calc(50vw-24px-var(--logo)/2)] md:translate-x-[calc(50vw-40px-var(--logo)/2)]"
          } ${menuOpen ? "scale-110" : ""}`}
          aria-label="IMEET home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/imeet/logo.svg"
            alt="IMEET"
            className={`size-[var(--logo)] lg:size-[calc(100*var(--u))] lg:animate-none ${scrolled ? "animate-logo-bob" : "animate-logo-float"}`}
          />
        </Link>
        <ul
          id="nav-links"
          className={`absolute inset-x-0 top-full ${
            menuOpen ? "flex" : "hidden"
          } flex-col border-y border-moon/10 bg-midnight/95 px-6 py-3 text-lg text-white backdrop-blur-md [font-family:var(--font-shuriken),var(--font-anton),sans-serif] lg:absolute lg:left-[calc(470*var(--u))] lg:right-[calc(70*var(--u))] lg:top-1/2 lg:flex lg:-translate-y-1/2 lg:flex-row lg:items-center lg:justify-between lg:gap-[calc(24*var(--u))] lg:border-0 lg:bg-transparent lg:p-0 lg:text-[calc(24*var(--u))] lg:backdrop-blur-none`}
        >
          {LINKS.map((link) => (
            <li key={link.label} className="border-b border-moon/10 py-4 lg:border-0 lg:py-0">
              <Link href={link.href} onClick={closeOnMobile} className="whitespace-nowrap transition-colors hover:text-[#ff2a1f]">
                {link.label}
              </Link>
            </li>
          ))}
          <li ref={profileRef} className="relative border-b border-moon/10 py-4 lg:border-0 lg:py-0">
            <button
              type="button"
              onClick={() => setProfileOpen((open) => !open)}
              className="group flex size-10 items-center justify-center rounded-full border border-moon/25 bg-midnight/70 text-moon transition-all duration-300 hover:border-vermilion hover:text-vermilion hover:shadow-[0_0_16px_rgba(197,42,44,0.3)] lg:size-11"
              aria-label="Open participant account menu"
              aria-expanded={profileOpen}
              aria-haspopup="menu"
            >
              <i className="fa-solid fa-user text-base" aria-hidden="true"></i>
            </button>
            {profileOpen && (
              <div
                role="menu"
                aria-label="Profile menu"
                className="absolute right-0 top-full z-[100] mt-3 w-52 border border-vermilion/35 bg-midnight/98 p-2 font-display text-xs uppercase tracking-[0.16em] text-moon shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_18px_rgba(197,42,44,0.16)] backdrop-blur-xl [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%)]"
              >
                <div className="mb-1 flex items-center gap-3 border-b border-moon/10 px-3 py-3">
                  <span className="flex size-8 items-center justify-center rounded-full border border-vermilion/50 bg-vermilion/10 text-vermilion">
                    <i className="fa-solid fa-user text-xs" aria-hidden="true"></i>
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[10px] text-moon/60">Signed in as</span>
                    <span className="block truncate text-[11px]">{accountName || "Guest"}</span>
                  </span>
                </div>
                <Link
                  href={accountName ? "/profile" : "/auth/login?returnTo=%2Fprofile"}
                  role="menuitem"
                  onClick={() => { setProfileOpen(false); closeOnMobile(); }}
                  className="block px-3 py-3 transition-colors hover:bg-vermilion/10 hover:text-vermilion"
                >
                  My Profile
                </Link>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => { setProfileOpen(false); window.location.assign(accountName ? "/auth/logout" : "/auth/login?returnTo=%2Fprofile"); }}
                  className="block w-full px-3 py-3 text-left text-vermilion/90 transition-colors hover:bg-vermilion/10 hover:text-vermilion"
                >
                  {accountName ? "Logout" : "Sign in"}
                </button>
              </div>
            )}
          </li>
        </ul>
        <button
          id="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center text-moon transition-colors hover:text-vermilion lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label="Open menu"
        >
          <i className={menuOpen ? "fa-solid fa-xmark text-2xl" : "fa-solid fa-bars text-2xl"}></i>
        </button>
      </nav>
    </header>
  );
}
