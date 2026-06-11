"use client";

import { useEffect, useRef } from "react";

const ROOM_COUNT = 3;

export default function CinematicEnvironment() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      const reduced = media.matches || mobile.matches;
      const roomPosition = progress * (ROOM_COUNT - 1);

      root.style.setProperty("--cinema-progress", progress.toFixed(4));
      root.style.setProperty(
        "--camera-scale",
        reduced ? "1.015" : (1.025 + progress * 0.1).toFixed(4),
      );
      root.style.setProperty(
        "--camera-y",
        reduced ? "0px" : `${(progress * -3.5).toFixed(2)}vh`,
      );
      root.style.setProperty(
        "--fog-shift",
        reduced ? "0px" : `${(progress * 11).toFixed(2)}vh`,
      );
      root.style.setProperty(
        "--light-shift",
        reduced ? "0px" : `${(progress * 42 - 18).toFixed(2)}vw`,
      );
      root.style.setProperty(
        "--floor-stretch",
        reduced ? "1" : (1 + progress * 0.22).toFixed(4),
      );

      for (let index = 0; index < ROOM_COUNT; index += 1) {
        const distance = Math.abs(roomPosition - index);
        root.style.setProperty(
          `--room-${index}-opacity`,
          Math.max(0, 1 - distance).toFixed(4),
        );
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const sections = Array.from(document.querySelectorAll("main section"));
    sections.forEach((section) => section.classList.add("cinematic-section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-cinematic-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "-8% 0px -12%", threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    media.addEventListener("change", requestUpdate);
    mobile.addEventListener("change", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      media.removeEventListener("change", requestUpdate);
      mobile.removeEventListener("change", requestUpdate);
      sections.forEach((section) => {
        section.classList.remove("cinematic-section", "is-cinematic-visible");
      });
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="cinematic-environment"
      aria-hidden="true"
    >
      <div className="cinematic-room cinematic-room-entry" />
      <div className="cinematic-room cinematic-room-salon" />
      <div className="cinematic-room cinematic-room-archive" />
      <div className="cinematic-text-safety" />
      <div className="cinematic-fog cinematic-fog-back" />
      <div className="cinematic-light-sweep" />
      <div className="cinematic-fog cinematic-fog-front" />
      <div className="cinematic-floor" />
      <div className="cinematic-grain" />
    </div>
  );
}
