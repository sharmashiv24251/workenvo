"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const insightFields = [
  {
    label: "Signal detected",
    value: "Declining motivation — perceived unfair lead distribution",
    icon: "⚠️",
    color: "#92400E",
    bg: "#FEF9EC",
    border: "#FDE68A",
  },
  {
    label: "Activity trend",
    value: "−34% over 6 weeks",
    icon: "📉",
    color: "#991B1B",
    bg: "#FEF2F2",
    border: "#FECACA",
  },
  {
    label: "Confidence",
    value: "91% · High priority",
    icon: "✅",
    color: "#065F46",
    bg: "#ECFDF5",
    border: "#A7F3D0",
  },
  {
    label: "Recommended action",
    value: "Manager review + rebalancing of lead assignments",
    icon: "💡",
    color: "#16855B",
    bg: "#F5F9F7",
    border: "#D1FAE5",
  },
];

export default function ProofCard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const [visibleFields, setVisibleFields] = useState(0);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 55%",
      once: true,
      onEnter: () => {
        setScanning(true);
        // Animate scan line
        if (scanLineRef.current) {
          gsap.fromTo(
            scanLineRef.current,
            { left: "0%", opacity: 1 },
            {
              left: "100%",
              duration: 1.2,
              ease: "power2.inOut",
              onComplete: () => {
                if (scanLineRef.current) {
                  scanLineRef.current.style.opacity = "0";
                }
                // Reveal fields one by one
                insightFields.forEach((_, i) => {
                  setTimeout(() => {
                    setVisibleFields((prev) => prev + 1);
                  }, i * 250);
                });
              },
            }
          );
        }
      },
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#16855B", fontFamily: "var(--font-sans)" }}
            >
              Proof / Output
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-[48px] leading-tight mb-6"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#111827",
                fontWeight: 400,
              }}
            >
              From conversation
              <br />
              to clarity
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed"
              style={{ color: "#6B7280", fontFamily: "var(--font-sans)" }}
            >
              Every interaction becomes structured insight: objectives,
              performance gaps, sentiment, and actions. Workenvo transforms
              unstructured signals into decisions you can act on today.
            </motion.p>

            {/* Before/after label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mt-8"
            >
              <div className="text-center">
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "#9CA3AF" }}
                >
                  Before
                </div>
                <div
                  className="text-sm px-3 py-1.5 rounded-lg"
                  style={{
                    background: "#F3F4F6",
                    color: "#6B7280",
                    fontFamily: "var(--font-sans)",
                    fontStyle: "italic",
                  }}
                >
                  Raw conversation
                </div>
              </div>
              <div
                className="text-2xl"
                style={{ color: "#16855B" }}
              >
                →
              </div>
              <div className="text-center">
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "#16855B" }}
                >
                  After
                </div>
                <div
                  className="text-sm px-3 py-1.5 rounded-lg"
                  style={{
                    background: "#ECFDF5",
                    color: "#16855B",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                  }}
                >
                  Structured insight
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Scanning card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Scanner container */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)",
              }}
            >
              {/* Scan line */}
              <div
                ref={scanLineRef}
                className="absolute top-0 bottom-0 w-1 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, #16855B 30%, #16855B 70%, transparent 100%)",
                  opacity: 0,
                  boxShadow: "0 0 12px rgba(22,133,91,0.6)",
                  left: "0%",
                }}
              />

              {/* Card header */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{
                  background: "#ECFDF5",
                  borderBottom: "1px solid #D1FAE5",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ background: "#16855B", color: "#FFFFFF" }}
                  >
                    👤
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#111827", fontFamily: "var(--font-sans)" }}
                    >
                      Employee Profile
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "#6B7280", fontFamily: "var(--font-sans)" }}
                    >
                      Insight summary · Updated just now
                    </p>
                  </div>
                </div>
                <span className="tag-green px-3 py-1 rounded-full text-xs font-semibold">
                  High potential
                </span>
              </div>

              {/* Fields */}
              <div className="p-5 space-y-3">
                <AnimatePresence>
                  {insightFields.slice(0, visibleFields).map((field, i) => (
                    <motion.div
                      key={field.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="rounded-xl p-4"
                      style={{
                        background: field.bg,
                        border: `1px solid ${field.border}`,
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-lg mt-0.5 flex-shrink-0">
                          {field.icon}
                        </span>
                        <div>
                          <p
                            className="text-xs font-semibold mb-1"
                            style={{
                              color: field.color,
                              fontFamily: "var(--font-sans)",
                            }}
                          >
                            {field.label}
                          </p>
                          <p
                            className="text-sm"
                            style={{
                              color: "#374151",
                              fontFamily: "var(--font-sans)",
                            }}
                          >
                            {field.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Placeholder lines while not yet scanned */}
                {visibleFields === 0 && (
                  <div className="space-y-3 py-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-16 rounded-xl"
                        style={{
                          background: "#F9FAFB",
                          border: "1px solid #F3F4F6",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
