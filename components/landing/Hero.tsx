export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ background: "#0a0f0d" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Floating orbs */}
      <div
        className="absolute right-[10%] top-[20%] w-96 h-96 orb float-orb pointer-events-none"
        style={{ background: "rgba(20, 83, 45, 0.3)" }}
      />
      <div
        className="absolute right-[25%] bottom-[20%] w-64 h-64 orb float-orb-2 pointer-events-none"
        style={{ background: "rgba(34, 197, 94, 0.08)" }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text block */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center rounded-md px-3 py-1.5 mb-8 animate-fade-up"
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
                Behaviour Intelligence Platform
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-6 animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#f0fdf4",
                fontWeight: 400,
              }}
            >
              Turn{" "}
              <span className="wavy-underline" style={{ color: "#f0fdf4" }}>
                behaviour
              </span>{" "}
              into organisational capability
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg leading-relaxed mb-4 animate-fade-up delay-200"
              style={{
                color: "#86efac",
                fontFamily: "var(--font-sans)",
                maxWidth: "560px",
              }}
            >
              Most organisations invest in people, culture, and
              sustainability — but still discover problems too late. Workenvo
              helps you detect behavioural signals early, reinforce the right
              actions, and build the capabilities your organisation needs to
              perform and scale.
            </p>

            {/* Supporting line */}
            <p
              className="text-base italic mb-10 animate-fade-up delay-300"
              style={{
                color: "#4ade80",
                fontFamily: "var(--font-sans)",
              }}
            >
              Not another HR system. A system for making strategy real.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-up delay-400">
              <a
                href="#"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 text-base font-medium transition-all duration-200 glow"
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
                className="inline-flex items-center gap-2 text-base transition-colors duration-200 group"
                style={{
                  color: "#86efac",
                  fontFamily: "var(--font-sans)",
                }}
              >
                See how it works
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right: Capability Loop Diagram */}
          <div className="hidden lg:flex items-center justify-center">
            <CapabilityDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityDiagram() {
  const nodes = [
    { label: "Define", angle: -90, icon: "◈" },
    { label: "Translate", angle: -18, icon: "⇄" },
    { label: "Detect", angle: 54, icon: "◉" },
    { label: "Reinforce", angle: 126, icon: "↑" },
    { label: "Build & Prove", angle: 198, icon: "✦" },
  ];

  const r = 140; // radius

  return (
    <div className="relative w-[380px] h-[380px] flex items-center justify-center">
      {/* Outer spinning ring */}
      <div
        className="absolute inset-0 rounded-full spin-slow"
        style={{
          border: "1px dashed rgba(34, 197, 94, 0.2)",
        }}
      />
      {/* Inner ring */}
      <div
        className="absolute rounded-full"
        style={{
          inset: "40px",
          border: "1px solid rgba(34, 197, 94, 0.1)",
        }}
      />
      {/* Center */}
      <div
        className="absolute w-20 h-20 rounded-full flex items-center justify-center glow"
        style={{
          background: "rgba(20, 83, 45, 0.5)",
          border: "1px solid rgba(34, 197, 94, 0.4)",
        }}
      >
        <span
          className="text-xs text-center leading-tight"
          style={{
            color: "#4ade80",
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          WORKENVO
          <br />
          LOOP
        </span>
      </div>

      {/* Nodes */}
      {nodes.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = 50 + (r / 3.8) * Math.cos(rad) * 100 * 0.01 * 3.8;
        const y = 50 + (r / 3.8) * Math.sin(rad) * 100 * 0.01 * 3.8;

        return (
          <div
            key={node.label}
            className="absolute flex flex-col items-center gap-1"
            style={{
              left: `calc(${50 + ((r * Math.cos(rad)) / 190) * 100}% - 48px)`,
              top: `calc(${50 + ((r * Math.sin(rad)) / 190) * 100}% - 36px)`,
              width: "96px",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg glow-hover transition-all duration-300"
              style={{
                background: "rgba(17, 30, 20, 0.9)",
                border: "1px solid rgba(34, 197, 94, 0.4)",
                color: "#4ade80",
              }}
            >
              {node.icon}
            </div>
            <span
              className="text-center leading-tight"
              style={{
                color: "#86efac",
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                fontWeight: 500,
              }}
            >
              {node.label}
            </span>
          </div>
        );
      })}

      {/* Connector lines (SVG overlay) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 380 380"
      >
        {nodes.map((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length];
          const rad1 = (node.angle * Math.PI) / 180;
          const rad2 = (nextNode.angle * Math.PI) / 180;
          const x1 = 190 + r * Math.cos(rad1);
          const y1 = 190 + r * Math.sin(rad1);
          const x2 = 190 + r * Math.cos(rad2);
          const y2 = 190 + r * Math.sin(rad2);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(34, 197, 94, 0.15)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          );
        })}
      </svg>
    </div>
  );
}
