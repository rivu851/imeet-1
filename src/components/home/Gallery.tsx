"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { galleryItems, groups, type GalleryItem } from "@/data/gallery";
import { lenis } from "@/components/common/SmoothScroll";
import GalleryBackdrop from "@/components/gallery/GalleryBackdrop";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import MasonryGrid from "@/components/gallery/MasonryGrid";

const wrap = (index: number, items: GalleryItem[]) => (index + items.length) % items.length;

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>(galleryItems);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({});
  const [pendingFocusId, setPendingFocusId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const activeTileRef = useRef<HTMLButtonElement | null>(null);
  const tileRefs = useRef(new Map<string, HTMLButtonElement>());
  const touchStartX = useRef<number | null>(null);

  const registerTile = (item: GalleryItem, element: HTMLButtonElement | null) => {
    if (element) tileRefs.current.set(item.id, element);
    else tileRefs.current.delete(item.id);
  };

  useEffect(() => {
    if (pendingFocusId) {
      tileRefs.current.get(pendingFocusId)?.focus();
    }
  }, [pendingFocusId, visibleCounts, activeGroup]);

  useEffect(() => {
    if (open === null) {
      activeTileRef.current?.focus();
      return;
    }

    document.body.classList.add("overflow-hidden");
    lenis?.stop();
    dialogRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(null);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setOpen((index) => (index === null ? index : wrap(index - 1, lightboxItems)));
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setOpen((index) => (index === null ? index : wrap(index + 1, lightboxItems)));
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("overflow-hidden");
      lenis?.start();
      document.removeEventListener("keydown", onKey);
    };
  }, [open, lightboxItems]);

  const openLightbox = (item: GalleryItem, items: GalleryItem[]) => {
    activeTileRef.current = tileRefs.current.get(item.id) ?? null;
    setLightboxItems(items);
    setOpen(items.findIndex((entry) => entry.id === item.id));
  };

  const move = (direction: -1 | 1) => {
    setOpen((index) => (index === null ? index : wrap(index + direction, lightboxItems)));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0]?.clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) >= 50) move(distance < 0 ? 1 : -1);
  };

  const current = open === null ? lightboxItems[0] : lightboxItems[open];
  const previous = lightboxItems[wrap((open ?? 0) - 1, lightboxItems)];
  const next = lightboxItems[wrap((open ?? 0) + 1, lightboxItems)];
  const visibleGroups = activeGroup ? groups.filter((group) => group.id === activeGroup) : groups;
  const archiveItemsForGroup = (groupId: string) => galleryItems.filter((item) => item.group === groupId);
  const visibleArchiveItems = visibleGroups.flatMap((group) => archiveItemsForGroup(group.id).slice(0, visibleCounts[group.id] ?? 12));

  const showMore = (groupId: string) => {
    const currentCount = visibleCounts[groupId] ?? (activeGroup ? 24 : 12);
    const nextItems = archiveItemsForGroup(groupId).slice(currentCount, currentCount + 24);
    setVisibleCounts((counts) => ({ ...counts, [groupId]: currentCount + 24 }));
    if (nextItems[0]) setPendingFocusId(nextItems[0].id);
  };

  const handleFilterChange = (group: string | null) => {
    setActiveGroup(group);
    setVisibleCounts(group ? { [group]: 24 } : {});
  };

  return (
    <>
      <section id="gallery" className="relative overflow-clip bg-midnight py-24 md:py-32">
        <GalleryBackdrop
          src="/images/imeet/bg-gallery.webp"
          mobileSrc="/images/imeet/bg-gallery-mobile.webp"
          position="object-[50%_35%]"
        />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(197,42,44,0.12),transparent_65%)]"></div>
        <div data-petals="8" className="pointer-events-none absolute inset-0 overflow-hidden"></div>
        <div className="relative mx-auto w-[calc(100%-3rem)] lg:w-[62vw] lg:max-w-[1100px]">
          <div id="gallery-head" className="pt-20 lg:pt-[calc(165*var(--u))]">
            <div className="js-reveal [&.is-in]:animate-reveal">
              <p className="flex items-center gap-3 font-nav text-[12px] font-bold uppercase tracking-[0.3em] text-amber">
                <span className="h-px w-10 bg-amber/70"></span> THE ARCHIVE · 06 FRAMES
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[0.95] text-moon">
                Fragments of <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(220,229,241,0.7)]">the journey.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-moon/80">A night-by-night record of IMEET 2026.</p>
            </div>
          </div>

          <GalleryFilters groups={groups} activeGroup={activeGroup} onChange={handleFilterChange} />
          <div aria-live="polite" className="sr-only">
            Showing {visibleArchiveItems.length} of {activeGroup ? archiveItemsForGroup(activeGroup).length : galleryItems.length}
          </div>
          <div className="mt-12 space-y-14">
            {visibleGroups.map((group) => {
              const items = archiveItemsForGroup(group.id);
              const shown = items.slice(0, visibleCounts[group.id] ?? (activeGroup ? 24 : 12));
              const remaining = items.length - shown.length;
              return (
                <section key={group.id} aria-labelledby={`${group.id}-heading`}>
                  <h3 id={`${group.id}-heading`} className="flex items-center gap-3 font-nav text-[12px] font-bold uppercase tracking-[0.3em] text-amber">
                    <span className="h-px w-10 bg-amber/70"></span>{group.label}
                  </h3>
                  <div className="mt-6">
                    <MasonryGrid items={shown} onOpen={(item) => openLightbox(item, visibleArchiveItems)} tileRefs={registerTile} />
                  </div>
                  {remaining > 0 && (
                    <button
                      type="button"
                      onClick={() => showMore(group.id)}
                      className="mt-8 border border-vermilion/60 px-5 py-3 font-nav text-xs font-bold uppercase tracking-[0.2em] text-moon transition-colors hover:bg-vermilion/15"
                    >
                      Show more ({remaining})
                    </button>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <div
        id="lightbox"
        ref={dialogRef}
        tabIndex={-1}
        onClick={(event) => event.target === event.currentTarget && setOpen(null)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`fixed inset-0 z-[100] ${open === null ? "hidden" : "flex"} items-center justify-center bg-midnight/95 p-4 backdrop-blur-sm md:p-14`}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
      >
        <button id="lb-close" type="button" onClick={() => setOpen(null)} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-moon/25 text-moon transition-colors hover:border-vermilion hover:text-vermilion" aria-label="Close image viewer">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <button id="lb-prev" type="button" onClick={() => move(-1)} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-moon/25 text-moon transition-colors hover:border-vermilion md:left-8" aria-label="Previous image">
          <i className="fa-solid fa-arrow-left-long text-sm"></i>
        </button>
        <button id="lb-next" type="button" onClick={() => move(1)} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-moon/25 text-moon transition-colors hover:border-vermilion md:right-8" aria-label="Next image">
          <i className="fa-solid fa-arrow-right-long text-sm"></i>
        </button>
        <figure className="flex max-w-6xl flex-col items-center">
          <img id="lb-img" src={current.src} alt={current.alt} className="max-h-[78vh] w-auto object-contain" style={{ objectPosition: current.position }} />
          <figcaption id="lb-cap" className="mt-5 text-center font-nav text-xs font-semibold uppercase tracking-[0.3em] text-moon/70">
            <span className="block text-amber">{open === null ? "01 / 06" : `${String(open + 1).padStart(2, "0")} / ${String(lightboxItems.length).padStart(2, "0")}`}</span>
            <span className="mt-2 block text-moon">{current.title} · {current.year}</span>
          </figcaption>
        </figure>
        <img src={previous.src} alt="" aria-hidden="true" className="hidden" />
        <img src={next.src} alt="" aria-hidden="true" className="hidden" />
      </div>
    </>
  );
}
