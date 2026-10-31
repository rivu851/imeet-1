"use client";

import type { GalleryGroup } from "@/data/gallery";

export default function GalleryFilters({
  groups,
  activeGroup,
  onChange,
}: {
  groups: GalleryGroup[];
  activeGroup: string | null;
  onChange: (group: string | null) => void;
}) {
  return (
    <div className="mt-12 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter gallery by group">
      <button
        type="button"
        aria-pressed={activeGroup === null}
        onClick={() => onChange(null)}
        className={`shrink-0 border px-4 py-2 font-nav text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
          activeGroup === null ? "border-vermilion bg-vermilion/15 text-moon" : "border-moon/20 text-mist hover:border-vermilion/70"
        }`}
      >
        All
      </button>
      {groups.map((group) => (
        <button
          key={group.id}
          type="button"
          aria-pressed={activeGroup === group.id}
          onClick={() => onChange(group.id)}
          className={`shrink-0 border px-4 py-2 font-nav text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
            activeGroup === group.id ? "border-vermilion bg-vermilion/15 text-moon" : "border-moon/20 text-mist hover:border-vermilion/70"
          }`}
        >
          {group.label}
        </button>
      ))}
    </div>
  );
}
