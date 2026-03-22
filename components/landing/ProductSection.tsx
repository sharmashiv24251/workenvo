"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimation,
} from "motion/react";
import WorkenvoDashboard from "./WorkenvoDashboard";

const personas = [
  {
    id: "employees" as const,
    label: "Employees",
    pills: ["Log behaviours", "Earn rewards", "Participate in surveys", "Receive AI nudges"],
  },
  {
    id: "managers" as const,
    label: "Managers",
    pills: ["Real-time alerts", "Behaviour insights", "Recommended actions", "Performance tracking"],
  },
  {
    id: "leadership" as const,
    label: "HR & Leadership",
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

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.33) setActiveIdx(0);
    else if (v < 0.66) setActiveIdx(1);
    else setActiveIdx(2);
  });

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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(22,133,91,0.04) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-7">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#16855B", fontFamily: "var(--font-sans)" }}
            >
              Product Experience
            </p>
            <h2
              className="mx-auto"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(38px, 4.5vw, 56px)",
                lineHeight: 1.08,
                fontWeight: 600,
                color: "#111827",
                maxWidth: "660px",
              }}
            >
              Built for everyone who shapes performance
            </h2>
          </div>

          {/* Persona tabs */}
          <div className="flex justify-center gap-2 mb-6">
            {personas.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(i)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300"
                style={{
                  background: activeIdx === i ? "#111827" : "#F3F4F6",
                  color: activeIdx === i ? "#FFFFFF" : "#6B7280",
                  border: activeIdx === i ? "none" : "1px solid #E5E7EB",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.01em",
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Dashboard */}
          <div
            style={{
              maxWidth: "calc((100vh - 270px) * 1.44)",
              margin: "0 auto",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.05)",
            }}
          >
            <WorkenvoDashboard activeTab={persona.id} />
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
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
