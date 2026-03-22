"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    num: "01",
    name: "Define",
    desc: "Identify the capabilities your organisation needs. Start with strategy, not assumption.",
    emoji: "🎯",
    color: "#16855B",
  },
  {
    num: "02",
    name: "Translate",
    desc: "Map the behaviours that drive those capabilities. Make the intangible concrete.",
    emoji: "🔀",
    color: "#059669",
  },
  {
    num: "03",
    name: "Detect",
    desc: "Surface signals and risks in real time. See what's changing before it becomes a problem.",
    emoji: "👁️",
    color: "#0D9488",
  },
  {
    num: "04",
    name: "Reinforce",
    desc: "Drive adoption through incentives and engagement. Reward the behaviours that matter.",
    emoji: "💪",
    color: "#0891B2",
  },
  {
    num: "05",
    name: "Build & Prove",
    desc: "Turn behaviour into measurable capability. Prove the impact of culture.",
    emoji: "📈",
    color: "#6366F1",
  },
];

// Node positions on a circle (r=160, center=200,200), starting from top
const RADIUS = 160;
const CENTER = 200;
function nodePos(i: number) {
  const angle = (i / 5) * 2 * Math.PI - Math.PI / 2;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
}

export default function CapabilityLoop() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [litSteps, setLitSteps] = useState<number[]>([]);
  const [allLit, setAllLit] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    steps.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top ${70 - i * 10}%`,
        once: true,
        onEnter: () => {
          setLitSteps((prev) => {
            const next = [...prev, i];
            if (next.length === steps.length) setAllLit(true);
            return next;
          });
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
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
          className="text-center mb-16"
        >
          <span
            className="tag-green inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide mb-5"
          >
            The Workenvo Capability Loop
          </span>
          <h2
            className="text-4xl lg:text-[48px] leading-tight mb-4 mx-auto"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#111827",
              fontWeight: 400,
              maxWidth: "800px",
            }}
          >
            Strategy doesn&apos;t fail because it&apos;s wrong.
            <br />
            It fails because it doesn&apos;t show up in behaviour.
          </h2>
          <p
            className="text-lg font-medium"
            style={{ color: "#16855B", fontFamily: "var(--font-sans)" }}
          >
            Workenvo closes that gap.
          </p>
        </motion.div>

        {/* Orbital diagram + step labels */}
        <div className="flex flex-col lg:flex-row items-center gap-16 justify-center">
          {/* Orbital SVG */}
          <div className="relative flex-shrink-0" style={{ width: "400px", height: "400px" }}>
            {/* Background ring */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
            >
              {/* Dashed orbital track */}
              <circle
                cx="200"
                cy="200"
                r={RADIUS}
                fill="none"
                stroke="#D1FAE5"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              {/* Connecting lines between nodes */}
              {steps.map((_, i) => {
                const from = nodePos(i);
                const to = nodePos((i + 1) % steps.length);
                const isConnected =
                  litSteps.includes(i) && litSteps.includes((i + 1) % steps.length);
                return (
                  <motion.line
                    key={i}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={isConnected ? steps[i].color : "#E5E7EB"}
                    strokeWidth="1.5"
                    strokeOpacity={isConnected ? 0.5 : 0.3}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isConnected ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                );
              })}
            </svg>

            {/* Orbiting dot */}
            {allLit && (
              <div
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  width: "10px",
                  height: "10px",
                  marginTop: "-5px",
                  marginLeft: "-5px",
                  animation: "orbit-dot 4s linear infinite",
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: "#16855B",
                    boxShadow: "0 0 8px rgba(22,133,91,0.8)",
                  }}
                />
              </div>
            )}

            {/* Nodes */}
            {steps.map((step, i) => {
              const pos = nodePos(i);
              const isLit = litSteps.includes(i);
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  className="absolute flex items-center justify-center rounded-2xl cursor-pointer"
                  style={{
                    left: pos.x - 28,
                    top: pos.y - 28,
                    width: "56px",
                    height: "56px",
                    background: isLit ? step.color : "#FFFFFF",
                    border: `2px solid ${isLit ? step.color : "#E5E7EB"}`,
                    boxShadow: isLit
                      ? `0 0 0 6px ${step.color}20, 0 8px 16px rgba(0,0,0,0.1)`
                      : "0 2px 8px rgba(0,0,0,0.08)",
                    transition: "all 0.4s ease",
                    zIndex: 10,
                  }}
                  animate={
                    isLit ? { scale: [1, 1.15, 1] } : { scale: 1 }
                  }
                  transition={{ duration: 0.4 }}
                >
                  <span style={{ fontSize: "20px" }}>{step.emoji}</span>
                </motion.button>
              );
            })}

            {/* Center reveal */}
            <AnimatePresence>
              {allLit && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute rounded-full flex items-center justify-center text-center"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "120px",
                    height: "120px",
                    background: "rgba(22,133,91,0.08)",
                    border: "1px solid rgba(22,133,91,0.15)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <p
                    className="text-xs font-medium px-3 leading-snug"
                    style={{
                      color: "#16855B",
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                    }}
                  >
                    Strategy shows up in behaviour.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Step labels */}
          <div className="space-y-4 max-w-xs w-full">
            {steps.map((step, i) => {
              const isLit = litSteps.includes(i);
              const isActive = activeStep === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  className="flex gap-4 items-start cursor-pointer rounded-xl p-3 transition-all duration-300"
                  style={{
                    background: isActive ? `${step.color}10` : "transparent",
                    border: isActive
                      ? `1px solid ${step.color}30`
                      : "1px solid transparent",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-all duration-400"
                    style={{
                      background: isLit ? step.color : "#F3F4F6",
                      color: isLit ? "#FFFFFF" : "#9CA3AF",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3
                      className="text-base mb-0.5 transition-colors duration-400"
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: isLit ? "#111827" : "#9CA3AF",
                        fontWeight: 400,
                      }}
                    >
                      {step.name}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs leading-relaxed overflow-hidden"
                          style={{
                            color: "#6B7280",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
