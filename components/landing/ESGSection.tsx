import ScrollReveal from "./ScrollReveal";

const metrics = [
  { label: "ESG Commitments", value: 100, suffix: "%" },
  { label: "Behavioural Adoption", value: 74, suffix: "%" },
  { label: "Measured Impact", value: 61, suffix: "%" },
  { label: "CSRD Ready", value: 89, suffix: "%" },
];

export default function ESGSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0a0f0d" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <ScrollReveal>
              <div
                className="inline-flex items-center rounded-md px-3 py-1.5 mb-6"
                style={{
                  background: "#14532d",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                }}
              >
                <span
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{
                    color: "#4ade80",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.12em",
                  }}
                >
                  ESG & CSRD
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="text-4xl lg:text-[48px] leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#f0fdf4",
                  fontWeight: 400,
                }}
              >
                From reporting to real impact
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p
                className="text-lg leading-relaxed"
                style={{
                  color: "#86efac",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Track sustainability, governance, and social behaviours. Measure
                adoption and impact. Generate CSRD-ready reports aligned to
                real behavioural change — not just intentions.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: ESG Progress Card */}
          <ScrollReveal delay={300}>
            <div
              className="glass-card rounded-2xl p-8 glow"
            >
              <h3
                className="text-lg mb-8"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "#86efac",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                ESG Commitments → Behaviours → Measured Impact
              </h3>

              <div className="space-y-6">
                {metrics.map((metric, i) => (
                  <div key={metric.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className="text-sm"
                        style={{
                          color: "#86efac",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {metric.label}
                      </span>
                      <span
                        className="text-sm"
                        style={{
                          color: "#4ade80",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {metric.value}
                        {metric.suffix}
                      </span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ background: "rgba(34, 197, 94, 0.1)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${metric.value}%`,
                          background: `linear-gradient(90deg, #14532d, #22c55e)`,
                          boxShadow: "0 0 8px rgba(34, 197, 94, 0.4)",
                          transition: "width 1s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 pt-6 flex items-center gap-3"
                style={{ borderTop: "1px solid rgba(34, 197, 94, 0.1)" }}
              >
                <span
                  className="text-xs"
                  style={{
                    color: "#4ade80",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  ✓ CSRD Report ready · Last updated: Q1 2026
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
