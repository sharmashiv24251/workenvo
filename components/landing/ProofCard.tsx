import ScrollReveal from "./ScrollReveal";

export default function ProofCard() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0f1a12" }}
    >
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <ScrollReveal>
              <h2
                className="text-4xl lg:text-[48px] leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#f0fdf4",
                  fontWeight: 400,
                }}
              >
                From conversation to clarity
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p
                className="text-lg leading-relaxed"
                style={{
                  color: "#86efac",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Every interaction becomes structured insight: objectives,
                performance gaps, sentiment, and actions. Workenvo transforms
                unstructured signals into decisions you can act on today.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Terminal card */}
          <ScrollReveal delay={200}>
            <div
              className="scan-line rounded-2xl overflow-hidden glow"
              style={{
                background: "#0a0f0d",
                border: "1px solid rgba(34, 197, 94, 0.25)",
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-5 py-3"
                style={{
                  borderBottom: "1px solid rgba(34, 197, 94, 0.15)",
                  background: "rgba(17, 30, 20, 0.5)",
                }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#ff5f57" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#ffbd2e" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#22c55e" }}
                />
                <span
                  className="ml-3 text-xs"
                  style={{
                    color: "rgba(134, 239, 172, 0.5)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  workenvo — insight.engine
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 space-y-4">
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "#4ade80",
                      fontSize: "12px",
                    }}
                  >
                    ▸ Employee Profile
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "#86efac",
                      fontSize: "12px",
                      marginTop: "4px",
                    }}
                  >
                    Strong potential detected.
                  </p>
                </div>

                <div
                  className="rounded-lg p-4"
                  style={{
                    background: "rgba(20, 83, 45, 0.2)",
                    border: "1px solid rgba(34, 197, 94, 0.2)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      lineHeight: "1.8",
                    }}
                  >
                    <span style={{ color: "#f59e0b" }}>⚠</span>{" "}
                    <span style={{ color: "#4ade80" }}>Signal:</span>{" "}
                    <span style={{ color: "#86efac" }}>
                      Declining motivation — perceived unfair lead distribution
                    </span>
                    <br />
                    <span style={{ color: "#ef4444" }}>📉</span>{" "}
                    <span style={{ color: "#4ade80" }}>Activity trend:</span>{" "}
                    <span style={{ color: "#86efac" }}>-34% over 6 weeks</span>
                    <br />
                    <span style={{ color: "#22c55e" }}>🔁</span>{" "}
                    <span style={{ color: "#4ade80" }}>
                      Recommended action:
                    </span>{" "}
                    <span style={{ color: "#86efac" }}>
                      Manager review + rebalancing
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "rgba(134, 239, 172, 0.4)",
                      fontSize: "12px",
                    }}
                  >
                    ▸ Confidence score: 0.91 · Priority: HIGH
                  </span>
                  <span className="cursor-blink" style={{ color: "#22c55e" }}>
                    █
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
