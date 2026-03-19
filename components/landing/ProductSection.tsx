import ScrollReveal from "./ScrollReveal";

const personas = [
  {
    icon: "★",
    title: "Employees",
    features: [
      "Log behaviours, earn rewards",
      "Participate in surveys",
      "Access marketplace",
      "Receive AI nudges",
    ],
    featured: false,
  },
  {
    icon: "◉",
    title: "Managers",
    features: [
      "Real-time alerts",
      "Behaviour insights",
      "Recommended actions",
      "Performance tracking",
    ],
    featured: true,
  },
  {
    icon: "▤",
    title: "HR & Leadership",
    features: [
      "Organisation-wide insights",
      "Capability tracking",
      "ESG metrics",
      "Risk detection",
    ],
    featured: false,
  },
];

const aiSignals = [
  "Burnout detection",
  "Missed reviews",
  "Engagement drops",
  "Culture drift alerts",
  "Performance signals",
];

export default function ProductSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0a0f0d" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline */}
        <ScrollReveal>
          <h2
            className="text-4xl lg:text-[48px] leading-tight mb-16 max-w-3xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#f0fdf4",
              fontWeight: 400,
            }}
          >
            Built for everyone who shapes organisational performance
          </h2>
        </ScrollReveal>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {personas.map((persona, i) => (
            <ScrollReveal key={persona.title} delay={i * 100}>
              <div
                className="glass-card rounded-2xl p-8 glow-hover transition-all duration-300 h-full"
                style={{
                  borderTop: persona.featured
                    ? "3px solid #22c55e"
                    : "3px solid transparent",
                  transform: persona.featured ? "translateY(-4px)" : "none",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
                  style={{
                    background: persona.featured
                      ? "rgba(34, 197, 94, 0.15)"
                      : "rgba(20, 83, 45, 0.3)",
                    color: "#4ade80",
                  }}
                >
                  {persona.icon}
                </div>

                <h3
                  className="text-2xl mb-6"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#f0fdf4",
                    fontWeight: 400,
                  }}
                >
                  {persona.title}
                </h3>

                <ul className="space-y-3">
                  {persona.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                      style={{
                        color: "#86efac",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#22c55e" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* AI Layer Banner */}
        <ScrollReveal delay={300}>
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(20, 83, 45, 0.2)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#f0fdf4",
                    fontWeight: 400,
                  }}
                >
                  From signals to action
                </h3>
                <p
                  className="text-base"
                  style={{
                    color: "#86efac",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Workenvo doesn&apos;t just show data. It tells you what
                  matters and what to do next.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {aiSignals.map((signal) => (
                  <span
                    key={signal}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      background: "#14532d",
                      color: "#4ade80",
                      fontFamily: "var(--font-sans)",
                      border: "1px solid rgba(34, 197, 94, 0.3)",
                    }}
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
