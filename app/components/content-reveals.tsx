"use client";

import { animate } from "animejs";
import { useLayoutEffect } from "react";

export function ContentReveals() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const elements = [...document.querySelectorAll<HTMLElement>("main [data-reveal]")];
    const animations = new Map<HTMLElement, ReturnType<typeof animate>>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          animations.set(element, animate(element, {
            opacity: [0, 1],
            translateY: [-28, 0],
            duration: 1050,
            ease: "out(3)",
            onComplete: () => {
              element.style.opacity = "";
              element.style.transform = "";
              animations.delete(element);
            },
          }));
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    for (const element of elements) {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.88 && bounds.bottom > 0) continue;
      element.style.opacity = "0";
      element.style.transform = "translateY(-28px)";
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      for (const animation of animations.values()) animation.cancel();
      for (const element of elements) {
        element.style.opacity = "";
        element.style.transform = "";
      }
    };
  }, []);

  return null;
}
