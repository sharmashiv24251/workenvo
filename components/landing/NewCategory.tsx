"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const categoryText = "Behaviour Intelligence";

export default function NewCategory() {
  const [showCursor, setShowCursor] = useState(true);
  const [typedChars, setTypedChars] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(160deg, #0D3D2A 0%, #0A5435 40%, #063D28 100%)",
        minHeight: "100vh",
        padding: "120px 24px",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(22,133,91,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(5,150,105,0.1) 0%, transparent 50%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-widest uppercase mb-8"
          style={{ color: "rgba(167,243,208,0.7)", fontFamily: "var(--font-sans)" }}
        >
          A new category
        </motion.p>

        {/* Main declaration */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="leading-tight mb-8"
          style={{
            fontFamily: "var(--font-serif)",
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: "clamp(40px, 7vw, 96px)",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: "0.55em" }}
          >
            A new category:
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{ display: "block", color: "#6EE7B7" }}
          >
            Behaviour Intelligence
          </motion.span>
        </motion.h2>

        {/* One-liner */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl leading-relaxed mx-auto"
          style={{
            color: "rgba(209,250,229,0.7)",
            fontFamily: "var(--font-sans)",
            maxWidth: "560px",
          }}
        >
          Not HR software. Not engagement surveys. A system for understanding,
          influencing, and scaling organisational behaviour.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-12"
          style={{
            width: "80px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #6EE7B7, transparent)",
            transformOrigin: "center",
          }}
        />
      </div>
    </section>
  );
}
