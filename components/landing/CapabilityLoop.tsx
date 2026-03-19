import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    name: "Define",
    desc: "Identify the capabilities your organisation needs to succeed. Start with strategy, not assumption.",
  },
  {
    num: "02",
    name: "Translate",
    desc: "Map the behaviours that drive those capabilities. Make the intangible concrete.",
  },
  {
    num: "03",
    name: "Detect",
    desc: "Surface behavioural signals and risks in real time. See what&apos;s changing before it becomes a problem.",
  },
  {
    num: "04",
    name: "Reinforce",
    desc: "Drive adoption through incentives and engagement. Reward the behaviours that matter.",
  },
  {
    num: "05",
    name: "Build & Prove",
    desc: "Turn behaviour into measurable capability and outcomes. Prove the impact of culture.",
  },
];

export default function CapabilityLoop() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0f1a12" }}
    >
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                color: "#4ade80",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.15em",
              }}
            >
              The Workenvo Capability Loop
            </span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={100}>
          <h2
            className="text-4xl lg:text-[48px] leading-tight text-center mb-4 mx-auto"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#f0fdf4",
              fontWeight: 400,
              maxWidth: "800px",
            }}
          >
            Strategy doesn&apos;t fail because it&apos;s wrong. It fails because
            it doesn&apos;t show up in behaviour.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p
            className="text-lg text-center mb-20"
            style={{
              color: "#86efac",
              fontFamily: "var(--font-sans)",
            }}
          >
            Workenvo closes that gap.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-[28px] top-8 bottom-8 w-px hidden lg:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(34, 197, 94, 0.3) 10%, rgba(34, 197, 94, 0.3) 90%, transparent)",
            }}
          />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="flex gap-8 items-start group">
                  {/* Step number */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: "rgba(20, 83, 45, 0.3)",
                        border: "1px solid rgba(34, 197, 94, 0.3)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "#4ade80",
                          fontSize: "13px",
                          fontWeight: 600,
                        }}
                      >
                        {step.num}
                      </span>
                    </div>
                    {/* Watermark number */}
                    <span
                      className="absolute -right-4 top-0 text-7xl font-bold select-none pointer-events-none hidden lg:block"
                      style={{
                        color: "rgba(34, 197, 94, 0.04)",
                        fontFamily: "var(--font-mono)",
                        lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    <h3
                      className="text-2xl mb-2"
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: "#f0fdf4",
                        fontWeight: 400,
                      }}
                    >
                      {step.name}
                    </h3>
                    <p
                      className="text-base leading-relaxed max-w-2xl"
                      style={{
                        color: "#86efac",
                        fontFamily: "var(--font-sans)",
                      }}
                      dangerouslySetInnerHTML={{ __html: step.desc }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
