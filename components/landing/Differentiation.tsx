import { Fragment } from "react";
import ScrollReveal from "./ScrollReveal";

const comparisons = [
  { traditional: "Dashboards", workenvo: "Behavioural signals" },
  { traditional: "Surveys", workenvo: "Real-time insights" },
  { traditional: "Reports", workenvo: "Action + capability building" },
  { traditional: "Past data", workenvo: "What&apos;s changing now" },
  { traditional: "Reactive", workenvo: "Predictive" },
  { traditional: "Siloed tools", workenvo: "Connected intelligence" },
];

export default function Differentiation() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0a0f0d" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2
            className="text-4xl lg:text-[48px] leading-tight mb-4 max-w-3xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#f0fdf4",
              fontWeight: 400,
            }}
          >
            A new category:{" "}
            <span style={{ color: "#22c55e" }}>Behaviour Intelligence</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p
            className="text-lg mb-16 max-w-2xl"
            style={{
              color: "#86efac",
              fontFamily: "var(--font-sans)",
            }}
          >
            Workenvo is not HR software. It is a system for understanding,
            influencing, and scaling organisational behaviour.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto">
          {/* Traditional header */}
          <ScrollReveal>
            <div
              className="rounded-tl-2xl p-6 border-b"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                borderColor: "rgba(34, 197, 94, 0.1)",
              }}
            >
              <p
                className="text-sm uppercase tracking-widest"
                style={{
                  color: "rgba(134, 239, 172, 0.4)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Traditional Tools
              </p>
            </div>
          </ScrollReveal>

          {/* Workenvo header */}
          <ScrollReveal delay={50}>
            <div
              className="rounded-tr-2xl p-6 border-b"
              style={{
                background: "rgba(20, 83, 45, 0.2)",
                borderColor: "rgba(34, 197, 94, 0.2)",
                borderLeft: "1px solid rgba(34, 197, 94, 0.2)",
              }}
            >
              <p
                className="text-sm uppercase tracking-widest"
                style={{
                  color: "#4ade80",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Workenvo
              </p>
            </div>
          </ScrollReveal>

          {/* Comparison rows */}
          {comparisons.map((row, i) => (
            <Fragment key={i}>
              <ScrollReveal delay={i * 60}>
                <div
                  className={`p-6 flex items-center border-b ${
                    i === comparisons.length - 1 ? "rounded-bl-2xl" : ""
                  }`}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    borderColor: "rgba(34, 197, 94, 0.08)",
                  }}
                >
                  <span
                    className="text-base"
                    style={{
                      color: "rgba(134, 239, 172, 0.5)",
                      fontFamily: "var(--font-sans)",
                    }}
                    dangerouslySetInnerHTML={{ __html: row.traditional }}
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={i * 60 + 30}>
                <div
                  className={`p-6 flex items-center gap-3 border-b ${
                    i === comparisons.length - 1 ? "rounded-br-2xl" : ""
                  }`}
                  style={{
                    background: "rgba(20, 83, 45, 0.12)",
                    borderColor: "rgba(34, 197, 94, 0.12)",
                    borderLeft: "1px solid rgba(34, 197, 94, 0.15)",
                  }}
                >
                  <span
                    className="text-xs flex-shrink-0"
                    style={{ color: "#22c55e" }}
                  >
                    ✓
                  </span>
                  <span
                    className="text-base"
                    style={{
                      color: "#86efac",
                      fontFamily: "var(--font-sans)",
                    }}
                    dangerouslySetInnerHTML={{ __html: row.workenvo }}
                  />
                </div>
              </ScrollReveal>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
