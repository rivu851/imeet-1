"use client";

/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/data/gallery";

const getColumnCount = (width: number) => {
  const gap = width >= 768 ? 16 : 12;
  return Math.min(4, Math.max(2, Math.floor((width + gap) / (220 + gap))));
};

export default function MasonryGrid({
  items,
  onOpen,
  tileRefs,
}: {
  items: GalleryItem[];
  onOpen: (item: GalleryItem) => void;
  tileRefs?: (item: GalleryItem, element: HTMLButtonElement | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columnCount, setColumnCount] = useState(2);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateColumns = () => {
      const nextCount = getColumnCount(container.getBoundingClientRect().width);
      setColumnCount((current) => (current === nextCount ? current : nextCount));
    };

    updateColumns();
    const observer = new ResizeObserver(updateColumns);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const columns = Array.from({ length: columnCount }, () => [] as GalleryItem[]);
  const heights = Array.from({ length: columnCount }, () => 0);
  for (const item of items) {
    const column = heights.indexOf(Math.min(...heights));
    columns[column].push(item);
    heights[column] += item.h / item.w;
  }

  return (
    <div ref={containerRef} className="flex gap-3 md:gap-4">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex min-w-0 flex-1 flex-col gap-3 md:gap-4">
          {column.map((item) => (
            <button
              key={item.id}
              ref={(element) => tileRefs?.(item, element)}
              type="button"
              onClick={() => onOpen(item)}
              aria-label={`Open ${item.title}`}
              className="group relative block w-full overflow-hidden text-left"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.w}
                height={item.h}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: item.position }}
                className="block h-auto w-full object-cover brightness-[0.85] grayscale-[0.15] transition duration-700 ease-out [@media(hover:none)]:brightness-100 [@media(hover:none)]:grayscale-0 [@media(hover:hover)]:group-hover:scale-[1.03] [@media(hover:hover)]:group-hover:brightness-100 [@media(hover:hover)]:group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-midnight/80 to-transparent px-3 pb-3 pt-10 opacity-0 transition duration-500 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100">
                <span className="block font-nav text-sm uppercase tracking-[0.16em] text-moon">{item.title}</span>
                <span className="mt-2 block h-px w-10 origin-left scale-x-0 bg-vermilion transition-transform duration-700 [@media(hover:hover)]:group-hover:scale-x-100"></span>
                <span className="mt-1 block font-nav text-xs tracking-[0.16em] text-amber">{item.year}</span>
              </span>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-moon/40 text-moon opacity-0 transition [@media(hover:none)]:opacity-100">
                <i className="fa-solid fa-expand text-xs"></i>
              </span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
