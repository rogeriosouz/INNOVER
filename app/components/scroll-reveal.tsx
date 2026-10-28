"use client";

import { animate } from "animejs";
import { useLayoutEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "section" | "card";
};

export function ScrollReveal({ children, className = "", delay = 0, variant = "section" }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const trigger = variant === "card" ? 0.78 : 0.88;
    const bounds = element.getBoundingClientRect();
    if (variant === "section" && bounds.top < window.innerHeight * trigger && bounds.bottom > 0) return;

    // Prepara fora da tela antes do primeiro paint, sem animar de visível para oculto.
    const distance = variant === "card" ? 24 : 40;
    element.style.opacity = "0";
    element.style.transform = `translateY(-${distance}px)`;

    let animation: ReturnType<typeof animate> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animation = animate(element, {
          opacity: [0, 1],
          translateY: [-distance, 0],
          duration: variant === "card" ? 950 : 1150,
          delay,
          ease: "out(3)",
          onComplete: () => {
            element.style.opacity = "";
            element.style.transform = "";
          },
        });
      },
      { rootMargin: `0px 0px -${Math.round((1 - trigger) * 100)}% 0px`, threshold: 0.01 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      animation?.cancel();
      element.style.opacity = "";
      element.style.transform = "";
    };
  }, [delay, variant]);

  return (
    <div className={className}>
      <div ref={elementRef}>{children}</div>
    </div>
  );
}
