"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Stop = { x: number; y: number };
type RouteAnchor = { y: number; length: number };

export function SiteJourney() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const routeRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGGElement>(null);
  const [stops, setStops] = useState<Stop[]>([]);

  useLayoutEffect(() => {
    const journey = journeyRef.current;
    const route = routeRef.current;
    const progressPath = progressRef.current;
    const marker = markerRef.current;
    const main = journey?.parentElement;
    if (!journey || !route || !progressPath || !marker || !main) return;

    let frame = 0;
    let routeLength = 0;
    let anchors: RouteAnchor[] = [];

    const lengthAtScrollPosition = (y: number) => {
      for (let index = 1; index < anchors.length; index++) {
        const next = anchors[index];
        if (y > next.y) continue;
        const previous = anchors[index - 1];
        const progress = Math.max(0, (y - previous.y) / (next.y - previous.y));
        return previous.length + progress * (next.length - previous.length);
      }
      return routeLength;
    };

    const updatePosition = () => {
      frame = 0;
      if (!routeLength) return;

      const mainRect = main.getBoundingClientRect();
      const scrollRange = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const scrollProgress = scrollRange > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollRange))
        : 1;

      // Mantém a seta próxima ao centro da tela durante a leitura, mas garante
      // que ela percorra o trecho inteiro do footer ao chegar ao fim da página.
      const visibleCenterY = -mainRect.top + window.innerHeight * 0.48;
      const endAlignedY = mainRect.height * scrollProgress;
      const cursorY = Math.min(
        mainRect.height,
        Math.max(0, visibleCenterY + (endAlignedY - visibleCenterY) * scrollProgress),
      );
      const length = Math.min(routeLength, Math.max(0, lengthAtScrollPosition(cursorY)));

      progressPath.style.strokeDashoffset = String(routeLength - length);
      const point = route.getPointAtLength(length);
      marker.setAttribute("transform", `translate(${point.x} ${point.y})`);

      // Ao alcançar o último trecho, a seta some suavemente; a linha segue completa.
      const remainingScroll = Math.max(0, scrollRange - window.scrollY);
      const fadeDistance = Math.min(100, window.innerHeight * 0.12);
      const markerOpacity = scrollRange > 0
        ? Math.min(1, remainingScroll / Math.max(1, fadeDistance))
        : 0;
      marker.style.opacity = String(markerOpacity);
    };

    const schedulePosition = () => {
      if (!frame) frame = requestAnimationFrame(updatePosition);
    };

    const measureRoute = () => {
      const sections = Array.from(main.children).filter(
        (child) => child.tagName === "SECTION" || child.tagName === "FOOTER",
      );
      const mainRect = main.getBoundingClientRect();
      const crossingOffsets = [42, 64, 36, 58, 46, 70, 40, 62, 34, 54];
      const boundaries = sections.slice(1).map((section, index) => {
        const sectionTop = section.getBoundingClientRect().top - mainRect.top;
        const offset = section.tagName === "FOOTER" ? 22 : crossingOffsets[index % crossingOffsets.length];
        return sectionTop + Math.min(offset, section.getBoundingClientRect().height * 0.12);
      });
      const width = mainRect.width;
      const height = mainRect.height;
      const inset = width < 768 ? 21 : Math.min(56, Math.max(21, width * 0.035));
      const left = inset;
      const right = width - inset;
      let path = `M ${left} 0`;
      let travelled = 0;
      let previousBoundary = 0;
      const nextAnchors: RouteAnchor[] = [{ y: 0, length: 0 }];
      const nextStops: Stop[] = [];

      boundaries.forEach((boundary, index) => {
        const from = index % 2 === 0 ? left : right;
        const to = index % 2 === 0 ? right : left;
        const next = boundaries[index + 1] ?? height;
        const crossingWindow = Math.min(width < 768 ? 72 : 110, (boundary - previousBoundary) * 0.2, (next - boundary) * 0.2);
        const beforeCrossing = travelled + boundary - previousBoundary;
        const afterCrossing = beforeCrossing + Math.abs(to - from);

        path += ` L ${from} ${boundary} L ${to} ${boundary}`;
        nextAnchors.push({ y: boundary - crossingWindow, length: beforeCrossing });
        nextAnchors.push({ y: boundary + crossingWindow, length: afterCrossing });
        nextStops.push({ x: (from + to) / 2, y: boundary });
        travelled = afterCrossing;
        previousBoundary = boundary;
      });

      const lastSide = boundaries.length % 2 === 0 ? left : right;
      path += ` L ${lastSide} ${height}`;
      nextAnchors.push({ y: height, length: travelled + height - previousBoundary });
      route.setAttribute("d", path);
      progressPath.setAttribute("d", path);
      routeLength = route.getTotalLength();
      anchors = nextAnchors;
      progressPath.style.strokeDasharray = `${routeLength} ${routeLength}`;
      setStops(nextStops);
      schedulePosition();
    };

    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measureRoute);
    observer?.observe(main);
    window.addEventListener("resize", measureRoute);
    window.addEventListener("scroll", schedulePosition, { passive: true });
    measureRoute();

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measureRoute);
      window.removeEventListener("scroll", schedulePosition);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={journeyRef} data-site-journey aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full overflow-visible" fill="none" aria-hidden="true">
        <path ref={routeRef} data-journey-route stroke="rgba(198,210,239,.21)" strokeWidth="1.5" />
        <path ref={progressRef} data-journey-fill stroke="#aebeff" strokeOpacity=".82" strokeWidth="1.5" strokeLinecap="round" className="drop-shadow-[0_0_6px_rgba(174,190,255,.6)]" />
        {stops.map((stop, index) => (
          <circle key={index} cx={stop.x} cy={stop.y} r="3.5" fill="#111a26" stroke="#aebeff" strokeOpacity=".75" />
        ))}
        <g ref={markerRef} data-journey-marker opacity="0" className="transition-opacity duration-300 ease-out motion-reduce:transition-none">
          <circle r="19" fill="#aebeff" fillOpacity=".1" />
          <circle r="15.5" fill="#0b1018" stroke="#aebeff" strokeOpacity=".95" strokeWidth="1.5" />
          <circle r="10.5" fill="#1d2a3a" />
          <path d="M0 -6 V6 M-4 2 L0 6 L4 2" fill="none" stroke="#dbe4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10.5" cy="-10.5" r="2.5" fill="#aebeff" />
        </g>
      </svg>
    </div>
  );
}
