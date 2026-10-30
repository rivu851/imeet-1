"use client";

import { useEffect } from "react";
import { PAUSE_OFFSCREEN } from "./styles";

const SVG_NS = "http://www.w3.org/2000/svg";

const LEAF = `absolute will-change-transform animate-leaf-drift ${PAUSE_OFFSCREEN}`;
const BLADE = `[transform-box:fill-box] origin-bottom animate-sway ${PAUSE_OFFSCREEN}`;

function spawnStars(box: HTMLElement, count: number) {
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.className = `absolute rounded-[9999px] bg-moon [box-shadow:0_0_6px_rgba(220,229,241,0.8)] animate-twinkle ${PAUSE_OFFSCREEN}`;
    const z = Math.random() < 0.2 ? 2.6 : Math.random() < 0.5 ? 1.8 : 1.2;
    s.style.width = s.style.height = `${z}px`;
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${Math.random() * 90}%`;
    s.style.animationDuration = `${3 + Math.random() * 5}s`;
    s.style.animationDelay = `${-Math.random() * 6}s`;
    box.appendChild(s);
  }
}

function spawnGrass(group: SVGGElement, n: number) {
  for (let b = 0; b < n; b++) {
    const x = (b / n) * 600 + (Math.random() * 12 - 6);
    const h = (60 + Math.random() * 150) * (1 - (b / n) * 0.5);
    const bend = Math.random() * 44 - 12;
    const w = 2.5 + Math.random() * 4;
    const g = document.createElementNS(SVG_NS, "g");
    g.setAttribute("class", BLADE);
    g.style.animationDuration = `${3.5 + Math.random() * 4}s`;
    g.style.animationDelay = `${-Math.random() * 5}s`;
    const p = document.createElementNS(SVG_NS, "path");
    p.setAttribute(
      "d",
      `M${x - w},220 Q${x + bend * 0.3},${220 - h * 0.55} ${x + bend},${220 - h} Q${x + bend * 0.25 + w * 0.3},${220 - h * 0.5} ${x + w},220 Z`,
    );
    p.setAttribute("fill", Math.random() < 0.5 ? "url(#bladeA)" : "url(#bladeB)");
    g.appendChild(p);
    if (b % 9 === 0) {
      const c = document.createElementNS(SVG_NS, "circle");
      c.setAttribute("cx", String(x + bend));
      c.setAttribute("cy", String(220 - h));
      c.setAttribute("r", "2.4");
      c.setAttribute("fill", b % 2 ? "#F8DDE8" : "#DCE5F1");
      c.setAttribute("opacity", ".75");
      g.appendChild(c);
    }
    group.appendChild(g);
  }
}

function spawnLeaves(box: HTMLElement, count: number) {
  for (let i = 0; i < count; i++) {
    const l = document.createElement("span");
    l.className = LEAF;
    const petal = Math.random() < 0.6;
    let size = petal ? 6 + Math.random() * 8 : 8 + Math.random() * 10;
    if (Math.random() > 0.8) {
      size *= 1.7;
      l.style.filter = "blur(1.5px)";
    }
    l.style.width = `${size}px`;
    l.style.height = `${size * 0.62}px`;
    l.style.borderRadius = petal ? "80% 0 80% 0" : "0 100% 0 100%";
    l.style.background = petal
      ? "linear-gradient(135deg,#F8DDE8,#e2aac0)"
      : Math.random() < 0.5
        ? "linear-gradient(135deg,#4a6380,#25354A)"
        : "linear-gradient(135deg,#D8B77A,#94723d)";
    l.style.left = `${-10 + Math.random() * 70}%`;
    l.style.top = `${-10 + Math.random() * 60}%`;
    l.style.setProperty("--dx", `${35 + Math.random() * 55}vw`);
    l.style.setProperty("--dy", `${30 + Math.random() * 60}vh`);
    l.style.setProperty("--r", `${(180 + Math.random() * 540) * (Math.random() < 0.5 ? -1 : 1)}deg`);
    l.style.setProperty("--o", (0.45 + Math.random() * 0.5).toFixed(2));
    l.style.animationDuration = `${16 + Math.random() * 18}s`;
    l.style.animationDelay = `${-Math.random() * 30}s`;
    box.appendChild(l);
  }
}

const PETAL_URLS = ["/images/imeet/petal-1.webp", "/images/imeet/petal-2.webp", "/images/imeet/petal-3.webp", "/images/imeet/petal-4.webp"];

function spawnPetalSprites(box: HTMLElement, count: number, urls: string[]) {
  for (let i = 0; i < count; i++) {
    const l = document.createElement("span");
    l.className = LEAF;
    const size = 16 + Math.random() * 26;
    l.style.width = `${size}px`;
    l.style.perspective = "400px";
    if (Math.random() > 0.8) l.style.opacity = "0.7";
    l.style.left = `${-10 + Math.random() * 70}%`;
    l.style.top = `${-10 + Math.random() * 60}%`;
    l.style.setProperty("--dx", `${35 + Math.random() * 55}vw`);
    l.style.setProperty("--dy", `${30 + Math.random() * 60}vh`);
    l.style.setProperty("--r", `${(90 + Math.random() * 270) * (Math.random() < 0.5 ? -1 : 1)}deg`);
    l.style.setProperty("--o", (0.6 + Math.random() * 0.4).toFixed(2));
    l.style.animationDuration = `${18 + Math.random() * 18}s`;
    l.style.animationDelay = `${-Math.random() * 30}s`;
    const img = document.createElement("img");
    img.src = urls[Math.floor(Math.random() * urls.length)];
    img.decoding = "async";
    img.alt = "";
    img.className = `block h-auto w-full origin-center select-none will-change-transform animate-petal-tumble ${PAUSE_OFFSCREEN}`;
    img.style.animationDuration = `${2.4 + Math.random() * 2.4}s`;
    img.style.animationDelay = `${-Math.random() * 3}s`;
    l.appendChild(img);
    box.appendChild(l);
  }
}

function spawnDust(box: HTMLElement, count: number) {
  for (let d = 0; d < count; d++) {
    const e = document.createElement("span");
    e.className = `absolute rounded-[9999px] bg-moon animate-dust ${PAUSE_OFFSCREEN}`;
    const ds = 1 + Math.random() * 2.5;
    e.style.width = e.style.height = `${ds}px`;
    e.style.left = `${Math.random() * 100}%`;
    e.style.top = `${Math.random() * 100}%`;
    e.style.animationDuration = `${5 + Math.random() * 7}s`;
    e.style.animationDelay = `${-Math.random() * 8}s`;
    box.appendChild(e);
  }
}

export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const byId = (id: string) => document.getElementById(id);

    const stars = byId("layer-stars");
    const grass = byId("grass-blades") as SVGGElement | null;
    const leaves = byId("layer-leaves");
    const registerLeaves = byId("register-leaves");
    const dust = byId("about-dust");
    const petalBoxes = Array.from(document.querySelectorAll<HTMLElement>("[data-petals]"));
    const generated = [stars, grass, leaves, registerLeaves, dust, ...petalBoxes];

    if (stars) spawnStars(stars, isMobile ? 14 : 34);
    if (grass) spawnGrass(grass, isMobile ? 30 : 62);
    if (!reduce) {
      if (leaves) spawnLeaves(leaves, isMobile ? 7 : 16);
      if (registerLeaves) spawnLeaves(registerLeaves, isMobile ? 4 : 9);
      petalBoxes.forEach((box) => {
        const count = Number(box.dataset.petals) || 6;
        spawnLeaves(box, isMobile ? Math.ceil(count / 2) : count);
      });
      if (leaves) spawnPetalSprites(leaves, isMobile ? 10 : 22, PETAL_URLS);
      if (registerLeaves) spawnPetalSprites(registerLeaves, isMobile ? 6 : 12, PETAL_URLS);
      petalBoxes.forEach((box) => {
        const count = Number(box.dataset.petals) || 6;
        spawnPetalSprites(box, Math.ceil(count * (isMobile ? 0.75 : 1.5)), PETAL_URLS);
      });
    }
    if (dust) spawnDust(dust, isMobile ? 10 : 24);

    const cleanups: (() => void)[] = [];

    if (!reduce) {
      const layers = Array.from(document.querySelectorAll<HTMLElement>("#hero .parallax"));
      const k = isMobile ? 0.4 : 1;
      const depth = layers.map((el) => parseFloat(el.dataset.depth || "0") * k);
      const rate = layers.map((el) => parseFloat(el.dataset.scroll || "0") * k);
      const speeds = Array.from(document.querySelectorAll<HTMLElement>("[data-speed]"));
      const speedRate = speeds.map((el) => parseFloat(el.dataset.speed!) * k);
      const zooms = Array.from(document.querySelectorAll<HTMLElement>("[data-hero-zoom]"));
      const hero = byId("hero");
      let heroH = hero?.offsetHeight || window.innerHeight;
      let vh = window.innerHeight;
      let mx = 0,
        my = 0,
        tx = 0,
        ty = 0,
        sy = window.scrollY,
        heroDone = false;

      let raf = 0;
      const kick = () => {
        if (!raf) raf = requestAnimationFrame(tick);
      };
      const tick = () => {
        raf = 0;
        tx += (mx - tx) * 0.05;
        ty += (my - ty) * 0.05;
        const easing = Math.abs(mx - tx) > 0.0005 || Math.abs(my - ty) > 0.0005;

        const rects = speeds.map((el) => el.parentElement!.getBoundingClientRect());

        const inHero = sy < heroH + 400;
        if (inHero || !heroDone) {
          heroDone = !inHero;
          layers.forEach((el, i) => {
            el.style.transform = `translate3d(${(-tx * depth[i]).toFixed(2)}px,${(-ty * depth[i] + sy * rate[i]).toFixed(2)}px,0)`;
          });
          const zoom = (1 + 0.5 * Math.min(1, sy / heroH)).toFixed(4);
          zooms.forEach((el) => {
            el.style.scale = zoom;
          });
        }
        speeds.forEach((el, i) => {
          const r = rects[i];
          if (r.bottom < -50 || r.top > vh + 50) return;
          const c = r.top + r.height / 2 - vh / 2;
          el.style.transform = `translate3d(0,${(c * speedRate[i]).toFixed(2)}px,0) scale(1.12)`;
        });
        if (easing && inHero) kick();
      };

      const onPointer = (e: PointerEvent) => {
        mx = e.clientX / window.innerWidth - 0.5;
        my = e.clientY / window.innerHeight - 0.5;
        kick();
      };
      const onScroll = () => {
        sy = window.scrollY;
        kick();
      };
      const onResize = () => {
        heroH = hero?.offsetHeight || window.innerHeight;
        vh = window.innerHeight;
        kick();
      };
      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
      kick();

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      });

      const boxes = [byId("hero"), registerLeaves, dust, ...petalBoxes].filter((el): el is HTMLElement => !!el);
      const sleeper = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.target.classList.toggle("fx-off", !e.isIntersecting)),
        { rootMargin: "100px 0px" },
      );
      boxes.forEach((el) => sleeper.observe(el));
      cleanups.push(() => {
        sleeper.disconnect();
        boxes.forEach((el) => el.classList.remove("fx-off"));
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    document.querySelectorAll(".js-reveal").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    return () => {
      cleanups.forEach((fn) => fn());
      generated.forEach((el) => el?.replaceChildren());
    };
  }, []);

  return null;
}
