"use client";

import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section
      className="relative py-40 px-6 flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0f0d", minHeight: "80vh" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(20, 83, 45, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute left-[15%] top-[20%] w-80 h-80 orb float-orb pointer-events-none"
        style={{ background: "rgba(34, 197, 94, 0.06)" }}
      />
      <div
        className="absolute right-[10%] bottom-[25%] w-64 h-64 orb float-orb-2 pointer-events-none"
        style={{ background: "rgba(20, 83, 45, 0.2)" }}
      />
      <div
        className="absolute right-[30%] top-[15%] w-48 h-48 orb float-orb pointer-events-none"
        style={{ background: "rgba(34, 197, 94, 0.04)", animationDelay: "3s" }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <h2
            className="text-6xl lg:text-8xl leading-tight mb-8"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#f0fdf4",
              fontWeight: 400,
            }}
          >
            Stop reacting.
            <br />
            <span style={{ color: "#22c55e" }}>Start seeing.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p
            className="text-xl leading-relaxed mb-12 mx-auto"
            style={{
              color: "#86efac",
              fontFamily: "var(--font-sans)",
              maxWidth: "600px",
            }}
          >
            Understand what&apos;s changing before it becomes a problem. Build
            the organisation you&apos;ll need in the future.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-xl border-2 text-lg font-medium transition-all duration-200 glow"
              style={{
                background: "#14532d",
                color: "#4ade80",
                borderColor: "#22c55e",
                fontFamily: "var(--font-sans)",
              }}
            >
              Book a demo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl border-2 text-lg font-medium transition-all duration-200"
              style={{
                background: "transparent",
                color: "#86efac",
                borderColor: "rgba(34, 197, 94, 0.3)",
                fontFamily: "var(--font-sans)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#22c55e";
                e.currentTarget.style.color = "#4ade80";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.3)";
                e.currentTarget.style.color = "#86efac";
              }}
            >
              Speak to an expert
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
