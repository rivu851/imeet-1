"use client";

import { useEffect, useState } from "react";
import LoaderVisual from "@/components/common/LoaderVisual";

export default function IntroLoader() {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => setLeaving(true), 1450);
    const removeTimer = window.setTimeout(
      () => {
        setVisible(false);
        document.body.style.overflow = previousOverflow;
      },
      2000,
    );

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`site-loader${leaving ? " site-loader--leaving" : ""}`}
      role="status"
      aria-label="Loading iMeet"
    >
      <LoaderVisual />
    </div>
  );
}
