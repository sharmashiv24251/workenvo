import ScrollReveal from "./ScrollReveal";

export default function Problem() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0f1a12" }}
    >
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline */}
        <ScrollReveal>
          <h2
            className="text-4xl lg:text-[52px] leading-tight mb-12 max-w-3xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#f0fdf4",
              fontWeight: 400,
            }}
          >
            You don&apos;t have a people problem. You have a{" "}
            <span style={{ color: "#22c55e" }}>visibility problem.</span>
          </h2>
        </ScrollReveal>

        {/* Reality Block */}
        <ScrollReveal delay={100}>
          <div className="mb-10">
            <p
              className="text-xl leading-relaxed mb-4 max-w-4xl"
              style={{
                color: "#86efac",
                fontFamily: "var(--font-sans)",
              }}
            >
              Teams burn out. Managers underperform. Culture drifts. ESG
              commitments don&apos;t translate into behaviour. And the same
              question always comes up:{" "}
              <span
                className="px-2 py-0.5 rounded"
                style={{
                  color: "#22c55e",
                  background: "#14532d",
                }}
              >
                &ldquo;Why didn&apos;t we see this earlier?&rdquo;
              </span>
            </p>
            <p
              className="text-base max-w-3xl"
              style={{ color: "rgba(134, 239, 172, 0.6)", fontFamily: "var(--font-sans)" }}
            >
              Organisations invest in engagement surveys, performance tools, ESG
              platforms, and leadership programmes — but these systems only show
              what already happened, not what&apos;s changing or what to do next.
            </p>
          </div>
        </ScrollReveal>

        {/* Emotional Reality Card */}
        <ScrollReveal delay={200}>
          <div
            className="glass-card rounded-2xl p-10"
          >
            <h3
              className="text-2xl lg:text-3xl mb-8"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#f0fdf4",
                fontWeight: 400,
              }}
            >
              Behind the dashboards, there&apos;s uncertainty
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                "Something feels off — but I can&apos;t prove it yet.",
                "We&apos;re always reacting instead of leading.",
                "Leadership expects answers I don&apos;t have.",
              ].map((quote, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "#111e14",
                    borderLeft: "3px solid #22c55e",
                  }}
                >
                  <p
                    className="text-lg italic leading-relaxed"
                    style={{
                      color: "#f0fdf4",
                      fontFamily: "var(--font-serif)",
                    }}
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${quote}&rdquo;` }}
                  />
                </div>
              ))}
            </div>

            <p
              className="text-base font-medium text-center"
              style={{ color: "#4ade80", fontFamily: "var(--font-sans)" }}
            >
              The cost of not knowing is high — and it shows up too late.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
