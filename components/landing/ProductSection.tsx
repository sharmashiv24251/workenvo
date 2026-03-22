"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useAnimation } from "motion/react";
import WorkenvoDashboard from "./WorkenvoDashboard";

const personas = [
  {
    id: "employees" as const,
    label: "Employees",
    emoji: "🌟",
    pills: ["Log behaviours", "Earn rewards", "Participate in surveys", "Receive AI nudges"],
  },
  {
    id: "managers" as const,
    label: "Managers",
    emoji: "🧭",
    pills: ["Real-time alerts", "Behaviour insights", "Recommended actions", "Performance tracking"],
  },
  {
    id: "leadership" as const,
    label: "HR & Leadership",
    emoji: "🏢",
    pills: ["Org-wide insights", "Capability tracking", "ESG metrics", "Risk detection"],
  },
];

export default function ProductSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const chipControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Drive tab from scroll position
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.33) setActiveIdx(0);
    else if (v < 0.66) setActiveIdx(1);
    else setActiveIdx(2);
  });

  // Staggered chip slide on every tab change
  useEffect(() => {
    chipControls.set({ y: 6 });
    chipControls.start((i) => ({
      y: 0,
      transition: { delay: (i as number) * 0.08, duration: 0.3, ease: "easeOut" },
    }));
  }, [activeIdx, chipControls]);

  const persona = personas[activeIdx];

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ minHeight: "300vh", background: "#FFFFFF" }}
    >
      <div
        style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}
        className="flex flex-col items-center justify-center px-6"
      >
        {/* Subtle bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(22,133,91,0.03) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1.5"
              style={{ color: "#16855B", fontFamily: "var(--font-sans)" }}
            >
              Product Experience
            </p>
            <h2
              className="text-2xl lg:text-[32px] leading-tight mb-0 mx-auto"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#111827",
                fontWeight: 400,
                maxWidth: "560px",
              }}
            >
              Built for everyone who shapes performance
            </h2>
          </div>

          {/* Persona tabs */}
          <div className="flex justify-center gap-2 mb-5">
            {personas.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(i)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-400"
                style={{
                  background: activeIdx === i ? "#16855B" : "#F9FAFB",
                  color: activeIdx === i ? "#FFFFFF" : "#6B7280",
                  border: activeIdx === i ? "none" : "1px solid #E5E7EB",
                  boxShadow: activeIdx === i ? "0 4px 12px rgba(22,133,91,0.25)" : "none",
                  fontFamily: "var(--font-sans)",
                  transform: activeIdx === i ? "scale(1.05)" : "scale(1)",
                }}
              >
                <span>{p.emoji}</span>
                <span>{p.label}</span>
              </button>
            ))}
          </div>

          {/* Dashboard — 16:9, width-capped so it always fits in viewport height */}
          <div style={{ maxWidth: "calc((100vh - 270px) * 1.44)", margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            {/* Glow beneath */}
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                width: "60%",
                height: "40px",
                background: "radial-gradient(ellipse, rgba(22,133,91,0.18) 0%, transparent 70%)",
                filter: "blur(14px)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.05)",
              }}
            >
              <WorkenvoDashboard activeTab={persona.id} />
            </div>
          </div>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {personas[activeIdx].pills.map((pill, i) => (
              <motion.span
                key={i}
                custom={i}
                animate={chipControls}
                className="tag-green px-4 py-2 rounded-full text-xs font-medium"
              >
                {pill}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
