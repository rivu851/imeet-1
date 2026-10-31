"use client";

import { useRouter } from "next/navigation";
import CircularGallery from "@/components/ui/CircularGallery";

/* The event cards in a curve, each opening that event's page. */
export default function EventCategoryGallery({
  items,
}: {
  items: { title: string; description: string; image: string; href: string }[];
}) {
  const router = useRouter();

  return (
    <CircularGallery
      items={items.map((item) => ({ image: item.image, text: item.title, description: item.description, alt: item.title }))}
      bend={3}
      itemSize={0.86}
      itemAspect={1}
      gap={0.16}
      borderRadius={0.04}
      textColor="#ffffff"
      font="normal 30px var(--font-shuriken), var(--font-anton), sans-serif"
      textInside
      openOnClick={false}
      onItemClick={(_, index) => router.push(items[index].href)}
      data-lenis-prevent-wheel
      data-lenis-prevent-horizontal
    />
  );
}
