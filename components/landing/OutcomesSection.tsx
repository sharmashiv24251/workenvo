import ScrollReveal from "./ScrollReveal";

const outcomes = [
  {
    icon: "◎",
    label: "Early Visibility",
    quote: "We saw this coming sooner.",
    desc: "Surface risks before they become crises.",
    size: "tall",
  },
  {
    icon: "⬡",
    label: "Better Decisions",
    quote: "We knew what to do.",
    desc: "AI-powered recommendations, not just data.",
    size: "normal",
  },
  {
    icon: "≡",
    label: "Leadership Consistency",
    quote: "Managers behave more consistently.",
    desc: "Align behaviour with intent across the org.",
    size: "normal",
  },
  {
    icon: "◈",
    label: "Culture Strength",
    quote: "Culture is visible and reinforced.",
    desc: "Make culture measurable, not just aspirational.",
    size: "wide",
  },
  {
    icon: "✦",
    label: "ESG Impact",
    quote: "We can prove behavioural change.",
    desc: "From commitments to evidence.",
    size: "normal",
  },
  {
    icon: "→",
    label: "Future Readiness",
    quote: "We are building capability, not just tracking it.",
    desc: "Build organisations that can adapt.",
    size: "tall",
  },
];

export default function OutcomesSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0f1a12" }}
    >
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2
            className="text-4xl lg:text-[48px] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#f0fdf4",
              fontWeight: 400,
            }}
          >
            What Workenvo makes possible
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p
            className="text-lg mb-16"
            style={{
              color: "#86efac",
              fontFamily: "var(--font-sans)",
            }}
          >
            Real outcomes for people who shape organisations.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {outcomes.map((outcome, i) => (
            <ScrollReveal
              key={outcome.label}
              delay={i * 80}
              className={
                outcome.size === "wide"
                  ? "md:col-span-2"
                  : outcome.size === "tall"
                  ? ""
                  : ""
              }
            >
              <div
                className="glass-card rounded-2xl p-8 glow-hover transition-all duration-300 h-full"
                style={{ minHeight: outcome.size === "tall" ? "240px" : "200px" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-base mb-6"
                  style={{
                    background: "rgba(20, 83, 45, 0.4)",
                    color: "#4ade80",
                  }}
                >
                  {outcome.icon}
                </div>
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{
                    color: "rgba(74, 222, 128, 0.6)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {outcome.label}
                </p>
                <h3
                  className="text-xl lg:text-2xl mb-3 italic"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#f0fdf4",
                    fontWeight: 400,
                  }}
                >
                  &ldquo;{outcome.quote}&rdquo;
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "#86efac",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {outcome.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
