"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://nqspbtenbeyfvpyqwigb.supabase.co/storage/v1/object/public/envo-public-assets/testvid.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dimming + colour-grade overlay */}
      <div className="animate-overlay-in absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/55 via-black/30 to-black/60" />

      {/* Subtle green tint at bottom */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-t from-[#0F6E50]/20 via-transparent to-transparent" />

      {/* Centred hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 py-24">
        <div className="animate-hero-in liquid-glass-panel-white rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center max-w-4xl w-full mx-auto">

          {/* Eyebrow badge */}
          <div className="green-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#16855B" }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#D1FAE5", fontFamily: "var(--font-sans)" }}
            >
              Behaviour Intelligence Platform
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl leading-[1.04] tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Turn{" "}
            <span
              className="wavy-underline"
              style={{
                color: "#ffffff",
                textDecorationColor: "#16855B",
                textDecorationThickness: "2px",
              }}
            >
              behaviour
            </span>{" "}
            into{" "}
            <em
              className="not-italic"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              organisational capability
            </em>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl mb-2"
            style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-sans)" }}
          >
            Understand what&apos;s really happening inside your organisation.
            Then shape what happens next.
          </p>

          {/* Green supporting line */}
          <p
            className="text-sm font-medium mb-10"
            style={{ color: "#6EE7B7", fontFamily: "var(--font-sans)" }}
          >
            Not another HR system. A system for making strategy real.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
              style={{
                background: "#16855B",
                boxShadow: "0 4px 20px rgba(22, 133, 91, 0.45)",
                fontFamily: "var(--font-sans)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#0F6E50")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#16855B")
              }
            >
              Book a demo
            </a>

            <a
              href="#"
              className="liquid-glass-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium text-white group"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              See how it works
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {["#16855B", "#0F6E50", "#1A9A6B", "#12785A"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white text-[11px] font-semibold"
                  style={{ background: c, borderColor: "rgba(255,255,255,0.25)" }}
                >
                  {["A", "B", "C", "D"][i]}
                </div>
              ))}
            </div>
            <p
              className="text-sm"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Trusted by forward-thinking HR teams
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
