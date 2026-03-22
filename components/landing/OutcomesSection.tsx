"use client";

import { motion } from "motion/react";

const outcomes = [
  {
    emoji: "🔭",
    label: "Early Visibility",
    quote: "We saw this coming sooner.",
    desc: "Surface risks before they become crises.",
    wide: false,
    rotation: -2,
  },
  {
    emoji: "🧠",
    label: "Better Decisions",
    quote: "We knew what to do.",
    desc: "AI-powered recommendations, not just data.",
    wide: false,
    rotation: 1.5,
  },
  {
    emoji: "🤝",
    label: "Leadership Consistency",
    quote: "Managers behave more consistently.",
    desc: "Align behaviour with intent across the org.",
    wide: false,
    rotation: -1,
  },
  {
    emoji: "🌱",
    label: "Culture Strength",
    quote: "Culture is visible and reinforced.",
    desc: "Make culture measurable, not just aspirational.",
    wide: true,
    rotation: 0.5,
  },
  {
    emoji: "🌍",
    label: "ESG Impact",
    quote: "We can prove behavioural change.",
    desc: "From commitments to evidence.",
    wide: false,
    rotation: -1.5,
  },
  {
    emoji: "🚀",
    label: "Future Readiness",
    quote: "We are building capability, not just tracking it.",
    desc: "Build organisations that can adapt.",
    wide: false,
    rotation: 2,
  },
];

export default function OutcomesSection() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#F5F9F7" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#16855B", fontFamily: "var(--font-sans)" }}
          >
            Value & Outcomes
          </p>
          <h2
            className="text-4xl lg:text-[48px] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#111827",
              fontWeight: 400,
            }}
          >
            What Workenvo makes possible
          </h2>
          <p
            className="text-lg"
            style={{ color: "#6B7280", fontFamily: "var(--font-sans)" }}
          >
            Real outcomes for people who shape organisations.
          </p>
        </motion.div>

        {/* Card grid — dealt onto the table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {outcomes.map((outcome, i) => (
            <div
              key={outcome.label}
              className={outcome.wide ? "md:col-span-2" : ""}
            >
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
                rotate: outcome.rotation * 2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.08,
                type: "spring",
                stiffness: 80,
                damping: 18,
              }}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 16px 32px rgba(22,133,91,0.12), 0 4px 8px rgba(22,133,91,0.08)",
                transition: { duration: 0.25 },
              }}
              className="rounded-2xl p-8 relative overflow-hidden cursor-default h-full"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)",
                minHeight: "200px",
              }}
            >
              {/* Gradient border glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(22,133,91,0.08) 0%, transparent 100%)",
                }}
              />

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-bl-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(225deg, rgba(22,133,91,0.06) 0%, transparent 70%)",
                }}
              />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "#ECFDF5" }}
              >
                {outcome.emoji}
              </div>

              <p
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "#16855B", fontFamily: "var(--font-sans)" }}
              >
                {outcome.label}
              </p>

              <h3
                className="text-xl lg:text-2xl mb-3 italic leading-snug"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#111827",
                  fontWeight: 400,
                }}
              >
                &ldquo;{outcome.quote}&rdquo;
              </h3>

              <p
                className="text-sm"
                style={{ color: "#6B7280", fontFamily: "var(--font-sans)" }}
              >
                {outcome.desc}
              </p>
            </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
