import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: "◈",
    label: "Define",
    desc: "Identify the capabilities your organisation needs to succeed",
  },
  {
    icon: "⇄",
    label: "Detect",
    desc: "Surface behavioural signals and risks in real time",
  },
  {
    icon: "↑",
    label: "Reinforce",
    desc: "Drive adoption through incentives and targeted engagement",
  },
  {
    icon: "✦",
    label: "Build & Prove",
    desc: "Turn behaviour into measurable capability and outcomes",
  },
];

export default function Solution() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0a0f0d" }}
    >
      {/* Diagonal separator */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, #0f1a12 50%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 pt-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Headline + Copy */}
          <div>
            <ScrollReveal>
              <h2
                className="text-4xl lg:text-[52px] leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#f0fdf4",
                  fontWeight: 400,
                }}
              >
                From behaviour to capability
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
                Workenvo connects what organisations say matters to what
                actually happens every day. Define behaviours, detect gaps,
                reinforce actions, and turn behaviour into measurable capability.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.label} delay={i * 80}>
                <div
                  className="glass-card rounded-xl p-6 glow-hover transition-all duration-300 group"
                  style={{ cursor: "default" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                    style={{
                      background: "rgba(20, 83, 45, 0.4)",
                      color: "#4ade80",
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <h3
                    className="text-lg mb-2"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "#f0fdf4",
                    }}
                  >
                    {pillar.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#86efac",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {pillar.desc}
                  </p>
                  {/* Arrow connector */}
                  {i < pillars.length - 1 && (
                    <div
                      className="absolute -right-2 top-1/2 -translate-y-1/2 text-xs hidden"
                      style={{ color: "#22c55e" }}
                    >
                      →
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
