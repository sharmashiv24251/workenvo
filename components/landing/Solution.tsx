"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  { label: "Define", color: "#16855B" },
  { label: "Detect", color: "#059669" },
  { label: "Reinforce", color: "#0D9488" },
  { label: "Build", color: "#0891B2" },
];

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate SVG path drawing
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");
      paths.forEach((path) => {
        const len = (path as SVGPathElement).getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            once: true,
          },
        });
      });
    }

    // Activate steps one by one
    steps.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top ${60 - i * 8}%`,
        once: true,
        onEnter: () => setActiveSteps((prev) => [...prev, i]),
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#16855B", fontFamily: "var(--font-sans)" }}
          >
            The Solution
          </p>
          <h2
            className="text-4xl lg:text-[52px] leading-tight mb-6 mx-auto"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#111827",
              fontWeight: 400,
              maxWidth: "640px",
            }}
          >
            From behaviour to capability
          </h2>
          <p
            className="text-lg mx-auto"
            style={{
              color: "#6B7280",
              fontFamily: "var(--font-sans)",
              maxWidth: "540px",
            }}
          >
            Workenvo connects what organisations say matters to what actually
            happens every day.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative">
          {/* SVG connecting lines (desktop) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg
              ref={svgRef}
              className="w-full h-full"
              style={{ position: "absolute", top: 0, left: 0 }}
              viewBox="0 0 800 120"
              preserveAspectRatio="none"
            >
              <path
                d="M100,60 C200,60 200,60 300,60"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M300,60 C400,60 400,60 500,60"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M500,60 C600,60 600,60 700,60"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              {/* Arrow heads */}
              <path
                d="M290,54 L302,60 L290,66"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M490,54 L502,60 L490,66"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M690,54 L702,60 L690,66"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#16855B" />
                  <stop offset="100%" stopColor="#0891B2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Step nodes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const isActive = activeSteps.includes(i);
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Node circle */}
                  <motion.div
                    animate={
                      isActive
                        ? {
                            boxShadow: `0 0 0 8px ${step.color}20, 0 0 0 16px ${step.color}0a`,
                            scale: 1.05,
                          }
                        : { boxShadow: "none", scale: 1 }
                    }
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 relative"
                    style={{
                      background: isActive ? step.color : "#F3F4F6",
                      border: `2px solid ${isActive ? step.color : "#E5E7EB"}`,
                      transition: "background 0.5s ease, border-color 0.5s ease",
                    }}
                  >
                    <span
                      className="text-xl font-bold"
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: isActive ? "#FFFFFF" : "#9CA3AF",
                        transition: "color 0.5s ease",
                        fontSize: "14px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      0{i + 1}
                    </span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0 rounded-2xl"
                        style={{ background: step.color }}
                      />
                    )}
                  </motion.div>

                  {/* Label */}
                  <h3
                    className="text-2xl mb-2 transition-colors duration-500"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: isActive ? step.color : "#9CA3AF",
                      fontWeight: 400,
                    }}
                  >
                    {step.label}
                  </h3>

                  {/* Arrow between steps (mobile) */}
                  {i < steps.length - 1 && (
                    <div
                      className="lg:hidden text-lg mt-1"
                      style={{ color: "#D1D5DB" }}
                    >
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Description paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: "#6B7280", fontFamily: "var(--font-sans)" }}
          >
            Define the behaviours that drive capability → Detect gaps and risks
            in real time → Reinforce through incentives and nudges → Build
            measurable capability and prove impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
