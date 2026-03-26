"use client";

import { useRef, useEffect, useState, useCallback } from "react";

/* ── FitText — scales font-size so text fills its container exactly ────── */
function FitText({
  text,
  style,
}: {
  text: string;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(120);

  const fit = useCallback(() => {
    const container = containerRef.current;
    const probe = probeRef.current;
    if (!container || !probe) return;
    const available = container.offsetWidth;
    if (available === 0) return;
    // Measure at a known base size, then scale proportionally
    probe.style.fontSize = "100px";
    const textWidth = probe.scrollWidth;
    if (textWidth === 0) return;
    setFontSize((available / textWidth) * 100);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(container);
    return () => ro.disconnect();
  }, [fit]);

  return (
    <div ref={containerRef} style={{ width: "100%", lineHeight: 1, position: "relative", overflow: "hidden" }}>
      {/* Invisible probe at exactly 100px — clipped by overflow:hidden so it never causes horizontal scroll */}
      <span
        ref={probeRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-serif)",
          fontWeight: 900,
          fontSize: "100px",
          pointerEvents: "none",
          ...style,
        }}
      >
        {text}
      </span>
      {/* Visible text at computed size */}
      <span
        style={{
          display: "block",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-serif)",
          fontWeight: 900,
          fontSize: `${fontSize}px`,
          lineHeight: 1,
          ...style,
        }}
      >
        {text}
      </span>
    </div>
  );
}

/* ── Footer ────────────────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer
      style={{
        background: "#FFFFFF",
        paddingTop: "clamp(48px, 8vw, 120px)",
        paddingBottom: "clamp(32px, 5vw, 72px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative" }}>
        <FitText
          text="we don't measure work, we shape behavior"
          style={{ color: "#16855B" }}
        />

        <div style={{ height: "clamp(16px, 3vw, 48px)" }} />

        <FitText
          text="workenvo"
          style={{
            background: "linear-gradient(to bottom, #111827 0%, #6B7280 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        />
      </div>
    </footer>
  );
}
