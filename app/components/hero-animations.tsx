"use client";

import { animate, createScope } from "animejs";
import { useEffect } from "react";

export function HeroAnimations() {
  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let removeTickerListeners = () => {};
    const scope = createScope({ root: hero }).add(() => {
      const orbit = hero.querySelector<HTMLElement>("[data-hero-orbit]");
      const sphere = hero.querySelector<HTMLElement>("[data-hero-sphere]");
      const ticker = hero.querySelector<HTMLElement>("[data-hero-ticker]");
      const tickerRegion = hero.querySelector<HTMLElement>("[data-hero-ticker-region]");

      if (orbit) animate(orbit, { rotate: 360, duration: 32000, loop: true, ease: "linear" });
      if (sphere) animate(sphere, { scale: 1.015, duration: 3500, loop: true, alternate: true, ease: "inOutSine" });

      hero.querySelectorAll<HTMLElement>("[data-tech-float]").forEach((card, index) => {
        animate(card, {
          translateY: index === 1 ? 12 : -14,
          rotate: index === 1 ? -1 : 1,
          duration: [3000, 3500, 3250][index] ?? 3000,
          delay: index * 250,
          loop: true,
          alternate: true,
          ease: "inOutSine",
        });
      });

      if (ticker && tickerRegion) {
        const marquee = animate(ticker, { translateX: "-50%", duration: 28000, loop: true, ease: "linear" });
        const pause = () => marquee.pause();
        const resume = () => marquee.play();
        tickerRegion.addEventListener("mouseenter", pause);
        tickerRegion.addEventListener("mouseleave", resume);
        removeTickerListeners = () => {
          tickerRegion.removeEventListener("mouseenter", pause);
          tickerRegion.removeEventListener("mouseleave", resume);
        };
      }
    });

    return () => {
      removeTickerListeners();
      scope.revert();
    };
  }, []);

  return null;
}
