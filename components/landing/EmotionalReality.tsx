"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const quotes = [
  {
    text: "Something feels off — but I can't prove it yet.",
    role: "People Manager, Series B",
    depth: -20,
    delay: 0,
    x: -40,
  },
  {
    text: "We're always reacting instead of leading.",
    role: "HR Director, 800 employees",
    depth: 0,
    delay: 0.15,
    x: 60,
  },
  {
    text: "Leadership expects answers I don't have.",
    role: "VP People, Scale-up",
    depth: 20,
    delay: 0.3,
    x: -20,
  },
];

export default function EmotionalReality() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#131825", minHeight: "100vh", paddingTop: "120px", paddingBottom: "120px" }}
    >
      {/* Blurred dashboard background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='800' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='500' fill='%230F172A'/%3E%3Crect x='40' y='40' width='200' height='120' rx='8' fill='%231E293B'/%3E%3Crect x='260' y='40' width='200' height='120' rx='8' fill='%231E293B'/%3E%3Crect x='480' y='40' width='280' height='120' rx='8' fill='%231E293B'/%3E%3Crect x='40' y='180' width='480' height='200' rx='8' fill='%231E293B'/%3E%3Crect x='540' y='180' width='220' height='200' rx='8' fill='%231E293B'/%3E%3Crect x='60' y='60' width='80' height='8' rx='4' fill='%2316855B' opacity='0.4'/%3E%3Crect x='60' y='76' width='120' height='6' rx='3' fill='%23334155' opacity='0.6'/%3E%3Crect x='60' y='200' width='200' height='6' rx='3' fill='%23334155' opacity='0.4'/%3E%3Crect x='60' y='216' width='160' height='6' rx='3' fill='%23334155' opacity='0.3'/%3E%3C/svg%3E\")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px)",
          opacity: 0.08,
        }}
      />

      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(22,133,91,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(99,102,241,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest uppercase mb-6 text-center"
          style={{ color: "#16855B", fontFamily: "var(--font-sans)" }}
        >
          Emotional Reality
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl lg:text-5xl leading-tight text-center mb-6 mx-auto"
          style={{
            fontFamily: "var(--font-serif)",
            color: "#E2E8F0",
            fontWeight: 400,
            maxWidth: "640px",
          }}
        >
          Behind the dashboards
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base text-center mb-24 mx-auto"
          style={{
            color: "#64748B",
            fontFamily: "var(--font-sans)",
            maxWidth: "480px",
          }}
        >
          There&apos;s uncertainty that data doesn&apos;t capture — and
          conversations that happen before the reports.
        </motion.p>

        {/* Floating quotes */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 + quote.depth, x: quote.x * 0.5 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: quote.delay,
                type: "spring",
                stiffness: 60,
                damping: 18,
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="flex-1 max-w-sm mx-auto lg:mx-0"
            >
              <div
                className="h-full rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: "rgba(30,41,59,0.6)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {/* Inner shine */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                  }}
                />

                {/* Quote mark */}
                <div
                  className="text-5xl leading-none mb-4 font-serif"
                  style={{ color: "rgba(22,133,91,0.3)", fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </div>

                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{
                    color: "#CBD5E1",
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  {quote.text}
                </p>

                <p
                  className="text-xs"
                  style={{ color: "#475569", fontFamily: "var(--font-sans)" }}
                >
                  — {quote.role}
                </p>

                {/* Subtle glow */}
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(22,133,91,0.1) 0%, transparent 70%)",
                    filter: "blur(10px)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 text-sm font-medium"
          style={{ color: "#16855B", fontFamily: "var(--font-sans)" }}
        >
          The cost of not knowing shows up too late.
        </motion.p>
      </div>
    </section>
  );
}
