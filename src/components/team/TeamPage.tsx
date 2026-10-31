"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { CATEGORIES, TEAM_MEMBERS, type TeamMember } from "./teamData";
import { PAUSE_OFFSCREEN } from "@/components/home/styles";

const TAG_CLIP =
  "[clip-path:polygon(4%_0,96%_0,96%_14%,100%_14%,100%_86%,96%_86%,96%_100%,4%_100%,4%_86%,0_86%,0_14%,4%_14%)]";

const CARD_CLIP =
  "[clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))]";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [cardsHidden, setCardsHidden] = useState<boolean>(false);

  const filteredMembers =
    activeTab === "all"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === activeTab);

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-moon">
      {/* ── High-Resolution Crystal Clear Background ── */}
      <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <img
          src="/images/team/team-hero.png"
          alt="IMEET 2026 team background"
          className="h-full w-full object-cover object-center"
        />

        {/* Minimal edge fade only at the very top and bottom for navbar & footer readability */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-midnight/85 via-midnight/25 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent" />
      </div>

      {/* ── Falling Petals layer over the entire background ── */}
      <div
        data-petals="14"
        className={`pointer-events-none fixed inset-0 z-10 overflow-hidden ${PAUSE_OFFSCREEN}`}
        aria-hidden="true"
      />

      {/* ── Foreground Content ── */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-28 md:px-12 md:pt-24 lg:px-16 lg:pb-36">
        {/* ── Page Header ── */}
        <div className="flex flex-col items-center text-center">
          <h1 className="js-reveal [&.is-in]:animate-reveal font-display text-2xl uppercase tracking-wider text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] sm:text-3xl md:text-4xl">
            ORGANISING TEAM
          </h1>

          {/* Action Row: Badge + Artwork View Mode Toggle */}
          <div className="js-reveal [&.is-in]:animate-reveal mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-midnight/85 px-4 py-1.5 shadow-lg backdrop-blur-md">
              <span className="flex size-5 items-center justify-center rounded-full bg-vermilion/20 font-jp text-xs font-bold text-vermilion">
                仲間
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-moon/90">
                Department of IT · United as One
              </span>
            </div>

            <button
              type="button"
              onClick={() => setCardsHidden(!cardsHidden)}
              className="inline-flex items-center gap-2 rounded-full border border-vermilion/50 bg-midnight/85 px-4 py-1.5 font-nav text-[11px] font-bold uppercase tracking-widest text-moon shadow-lg backdrop-blur-md transition-all hover:border-vermilion hover:bg-vermilion/20 hover:text-white"
            >
              <i className={`fa-solid ${cardsHidden ? "fa-id-card text-tag-cyan" : "fa-image text-vermilion"}`} />
              <span>{cardsHidden ? "Show Organising Cards" : "View Artwork Mode"}</span>
            </button>
          </div>
        </div>

        {/* ── Category Filter Tabs (hidden in artwork view mode) ── */}
        {!cardsHidden && (
          <div className="js-reveal [&.is-in]:animate-reveal mt-8 sm:mt-10">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {CATEGORIES.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative flex items-center gap-2 px-4 py-2.5 font-nav text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md transition-all duration-300 md:px-5 md:py-3 md:text-sm ${
                      isActive
                        ? "border border-vermilion bg-vermilion/30 text-white shadow-[0_0_25px_rgba(197,42,44,0.5)]"
                        : "border border-white/15 bg-midnight/85 text-moon/80 hover:border-white/40 hover:bg-midnight/95 hover:text-white"
                    } ${TAG_CLIP}`}
                  >
                    <span
                      className={`font-jp text-xs transition-colors ${
                        isActive ? "text-vermilion" : "text-moon/50 group-hover:text-moon/90"
                      }`}
                    >
                      {tab.kanji}
                    </span>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Team Member Cards Grid ── */}
        {!cardsHidden ? (
          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
              {filteredMembers.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div className="py-20 text-center font-mono text-sm text-mist">
                No members found in this category.
              </div>
            )}
          </div>
        ) : (
          <div className="py-32 text-center">
            <p className="font-nav text-sm uppercase tracking-[0.3em] text-moon/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Artwork Mode Active · Click &quot;Show Organising Cards&quot; to restore the team list
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  // Deterministic avatar gradient styling
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden border border-white/15 bg-midnight/90 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-vermilion/70 hover:bg-midnight/95 hover:shadow-[0_20px_50px_rgba(197,42,44,0.35)] ${CARD_CLIP}`}
    >
      {/* Top corner cyber accent */}
      <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-vermilion/40 transition-colors group-hover:border-vermilion" />

      <div>
        {/* Top bar: Badge & Category */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] font-medium tracking-wider text-tag-cyan">
            {member.categoryLabel}
          </span>
          {member.badge && (
            <span className="rounded-full border border-vermilion/40 bg-vermilion/15 px-2.5 py-0.5 font-nav text-[10px] font-bold uppercase tracking-widest text-vermilion">
              {member.badge}
            </span>
          )}
        </div>

        {/* Member Identity & Avatar Header */}
        <div className="mt-5 flex items-center gap-4">
          <div className="relative flex size-14 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-midnight via-navy to-midnight font-display text-lg tracking-wider text-moon shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:border-vermilion/70 group-hover:text-white">
            {initials}
            <span className="absolute -bottom-1 -right-1 size-3 rounded-full border-2 border-midnight bg-tag-cyan" />
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-display text-xl uppercase tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-colors group-hover:text-vermilion">
              {member.name}
            </h3>
            <p className="truncate font-nav text-xs font-semibold tracking-wider text-moon/90">
              {member.role}
            </p>
            <p className="mt-0.5 truncate font-mono text-[11px] text-mist">
              {member.department}
            </p>
          </div>
        </div>

        {/* Spirit Quote */}
        <div className="mt-5 rounded-lg border border-white/10 bg-midnight/70 p-3.5 backdrop-blur-sm">
          <p className="font-body text-xs italic leading-relaxed text-moon/85">
            &ldquo;{member.spiritQuote}&rdquo;
          </p>
        </div>
      </div>

      {/* Footer Socials */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="font-mono text-[10px] tracking-wider text-mist">
          NAKAMA #{String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-3">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s GitHub`}
              className="flex size-7 items-center justify-center rounded border border-white/15 bg-midnight/90 text-moon/80 transition-all hover:border-vermilion hover:text-vermilion"
            >
              <i className="fa-brands fa-github text-xs" />
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s LinkedIn`}
              className="flex size-7 items-center justify-center rounded border border-white/15 bg-midnight/90 text-moon/80 transition-all hover:border-vermilion hover:text-vermilion"
            >
              <i className="fa-brands fa-linkedin-in text-xs" />
            </a>
          )}
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s Instagram`}
              className="flex size-7 items-center justify-center rounded border border-white/15 bg-midnight/90 text-moon/80 transition-all hover:border-vermilion hover:text-vermilion"
            >
              <i className="fa-brands fa-instagram text-xs" />
            </a>
          )}
          {member.socials.email && (
            <a
              href={member.socials.email}
              aria-label={`Email ${member.name}`}
              className="flex size-7 items-center justify-center rounded border border-white/15 bg-midnight/90 text-moon/80 transition-all hover:border-vermilion hover:text-vermilion"
            >
              <i className="fa-regular fa-envelope text-xs" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
