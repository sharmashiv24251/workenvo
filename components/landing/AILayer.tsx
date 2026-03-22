"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const notifications = [
  {
    id: 1,
    dot: "#EF4444",
    icon: "🔴",
    title: "Burnout risk detected",
    body: "Marketing team — 3 members flagged",
    time: "just now",
    priority: "high",
  },
  {
    id: 2,
    dot: "#F59E0B",
    icon: "⚠️",
    title: "3 reviews overdue",
    body: "Engineering leads — action required",
    time: "2m ago",
    priority: "medium",
  },
  {
    id: 3,
    dot: "#3B82F6",
    icon: "📉",
    title: "Engagement drop detected",
    body: "London office — −22% this week",
    time: "5m ago",
    priority: "medium",
  },
  {
    id: 4,
    dot: "#F59E0B",
    icon: "🌊",
    title: "Culture drift signal",
    body: "Finance team — values misalignment",
    time: "12m ago",
    priority: "medium",
  },
  {
    id: 5,
    dot: "#16855B",
    icon: "✅",
    title: "Capability milestone reached",
    body: "Product team — collaboration score +14%",
    time: "18m ago",
    priority: "low",
  },
];

export default function AILayer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEntered) {
          setHasEntered(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasEntered]);

  useEffect(() => {
    if (!hasEntered) return;
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= notifications.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [hasEntered]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(22,133,91,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          top: "-50px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#16855B", fontFamily: "var(--font-sans)" }}
          >
            AI Layer — From Signals to Action
          </p>
          <h2
            className="text-4xl lg:text-[48px] leading-tight mb-4 mx-auto"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#E2E8F0",
              fontWeight: 400,
              maxWidth: "640px",
            }}
          >
            Your organisation, live
          </h2>
        </motion.div>

        {/* Live feed card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden max-w-xl mx-auto"
          style={{
            background: "#1E293B",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
          }}
        >
          {/* Feed header */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{
              background: "#0F172A",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#22C55E" }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "#94A3B8", fontFamily: "var(--font-sans)" }}
              >
                Workenvo Intelligence Feed
              </span>
            </div>
            <span
              className="text-xs px-2 py-1 rounded-md"
              style={{
                background: "rgba(34,197,94,0.1)",
                color: "#22C55E",
                border: "1px solid rgba(34,197,94,0.2)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Live
            </span>
          </div>

          {/* Notifications */}
          <div className="p-3 space-y-2">
            <AnimatePresence>
              {notifications.slice(0, visibleCount).map((notif, i) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: 20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="flex items-start gap-3 rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Pulse dot */}
                  <div className="relative mt-1 flex-shrink-0">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: notif.dot }}
                    />
                    {i === 0 && visibleCount <= 2 && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ background: notif.dot }}
                        animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        className="text-sm font-medium truncate"
                        style={{ color: "#E2E8F0", fontFamily: "var(--font-sans)" }}
                      >
                        {notif.icon} {notif.title}
                      </p>
                      <span
                        className="text-xs flex-shrink-0"
                        style={{ color: "#475569", fontFamily: "var(--font-sans)" }}
                      >
                        {notif.time}
                      </span>
                    </div>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#64748B", fontFamily: "var(--font-sans)" }}
                    >
                      {notif.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 text-xl max-w-xl mx-auto"
          style={{
            color: "#94A3B8",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          Workenvo doesn&apos;t just show data.
          <br />
          <span style={{ color: "#E2E8F0" }}>
            It tells you what to do next.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
