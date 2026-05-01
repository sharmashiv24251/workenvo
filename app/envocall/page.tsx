"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/landing/Footer";

// ─── Design tokens ────────────────────────────────────────
const ACCENT = "#2d6a4f";
const ACCENT_RGB = "45,106,79";

const C = {
  bg: "#f9f9f6",
  bgSoft: "#f4f4f0",
  bgCard: "#ffffff",
  border: "#e2e2d8",
  textPri: "#1a1a17",
  textSec: "#5a5a50",
  textTer: "#8a8a80",
  white: "#ffffff",
};

// ─── Hooks ────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

// ─── FadeIn ───────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────
function EnvoCallNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const navBg = scrolled || menuOpen ? "rgba(249,249,246,0.96)" : "transparent";
  const navBorder = scrolled || menuOpen ? `1px solid ${C.border}` : "1px solid transparent";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isMobile ? "0 20px" : "0 32px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: navBg,
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: navBorder,
          transition: "all 0.3s ease",
        }}
      >
        <Link href="/envocall" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/logo.png"
            alt="envo"
            width={2521}
            height={1427}
            style={{ height: 32, width: "auto", objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "var(--font-brand), var(--font-sans), sans-serif",
              fontSize: 20,
              letterSpacing: "-0.03em",
              color: "#16855B",
              lineHeight: 1,
              textTransform: "lowercase",
            }}
          >
            <span style={{ fontWeight: 500 }}>envo</span>
            <span style={{ fontWeight: 700 }}>call</span>
          </span>
        </Link>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: C.textPri,
                borderRadius: 2,
                transformOrigin: "center",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                transition: "transform 0.25s ease",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: C.textPri,
                borderRadius: 2,
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.2s ease",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: C.textPri,
                borderRadius: 2,
                transformOrigin: "center",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                transition: "transform 0.25s ease",
              }}
            />
          </button>
        ) : (
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["Features", "How it works", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: C.textSec,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.textPri)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.textSec)}
              >
                {item}
              </a>
            ))}
            <a
              href={`mailto:saransh@envo.club?subject=Book%20a%20Demo%20-%20envoCall&body=Hi%2C%20I%27d%20like%20to%20book%20a%20demo%20for%20envoCall.`}
              style={{
                fontFamily: "var(--font-sans)",
                padding: "8px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                background: ACCENT,
                color: C.white,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Book a Demo
            </a>
          </div>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(249,249,246,0.97)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: `1px solid ${C.border}`,
            padding: menuOpen ? "20px 20px 28px" : "0 20px",
            maxHeight: menuOpen ? 320 : 0,
            overflow: "hidden",
            transition: "all 0.3s ease",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {["Features", "How it works", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 500,
                color: C.textPri,
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              {item}
            </a>
          ))}
          <a
            href={`mailto:saransh@envo.club?subject=Book%20a%20Demo%20-%20envoCall&body=Hi%2C%20I%27d%20like%20to%20book%20a%20demo%20for%20envoCall.`}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-sans)",
              marginTop: 12,
              padding: "14px 20px",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 600,
              background: ACCENT,
              color: C.white,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Book a Demo
          </a>
        </div>
      )}
    </>
  );
}

// ─── Hero Dashboard Visual ────────────────────────────────
const DASH_W = 960;
const DASH_H = 600; // 16:10

function HeroDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / DASH_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const hourly = [2, 5, 12, 21, 28, 25, 19, 17, 23, 20, 15, 9, 4];
  const maxH = 28;

  const recentRoutes = [
    { caller: "Emily Carter",  summary: "AC not cooling — bedroom unit",    routed: "Mike Davis",    ago: "2m" },
    { caller: "James Cooper",  summary: "Annual maintenance — wants quote",  routed: "Sarah Mitchell", ago: "9m" },
    { caller: "Tom Bradley",   summary: "Furnace making loud noise",         routed: "Mike Davis",    ago: "18m" },
  ];

  const statCols = [
    { cat: "CALLS TODAY", val: "47" },
    { cat: "ANSWERED",    val: "100%" },
    { cat: "AVG HANDLE",  val: "34s" },
    { cat: "MISSED",      val: "0" },
  ];

  const F = "var(--font-sans)";

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        aspectRatio: `${DASH_W} / ${DASH_H}`,
        position: "relative",
        overflow: "hidden",
        borderRadius: 20,
        border: `1px solid ${C.border}`,
        boxShadow: `0 10px 56px -4px rgba(${ACCENT_RGB},0.10), 0 2px 16px rgba(0,0,0,0.06)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: DASH_W,
          height: DASH_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          background: C.bgCard,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Window chrome */}
        <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "11px 20px", borderBottom: `1px solid ${C.border}`, background: C.bgSoft, flexShrink: 0 }}>
          {[ACCENT, "#f59e0b", "#ef4444"].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.75 }} />
          ))}
          <span style={{ fontFamily: F, fontSize: 12, color: C.textTer, marginLeft: 8, fontWeight: 500 }}>
            envoCall · HVAC Operations
          </span>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "block", animation: "ecPulse 2s infinite" }} />
            <span style={{ fontFamily: F, fontSize: 11, color: "#22c55e", fontWeight: 700 }}>LIVE</span>
          </div>
        </div>

        {/* Two-column body */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 248px", flex: 1, overflow: "hidden" }}>

          {/* Left: chart + stats + recent routes */}
          <div style={{ padding: "22px 26px", borderRight: `1px solid ${C.border}`, overflow: "hidden" }}>

            {/* Title + big number */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: C.textPri }}>Calls Received &amp; Routed</div>
                <div style={{ fontFamily: F, fontSize: 12, color: C.textSec, marginTop: 2 }}>AI answered every call — routed to WhatsApp</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: F, fontSize: 34, fontWeight: 900, color: ACCENT, lineHeight: 1, letterSpacing: "-0.02em" }}>47</div>
                <div style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: "#22c55e", marginTop: 2 }}>0 missed · 100% answered</div>
              </div>
            </div>

            {/* Arch bar chart */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 80 }}>
              {hourly.map((v, i) => (
                <div key={i} style={{
                  flex: 1, height: `${(v / maxH) * 100}%`,
                  borderRadius: "9999px 9999px 3px 3px",
                  background: v >= 20 ? ACCENT : `rgba(${ACCENT_RGB},0.2)`,
                }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 4, marginTop: 5 }}>
              {["6A","7A","8A","9A","10A","11A","12P","1P","2P","3P","4P","5P","6P"].map((h, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center", fontFamily: F, fontSize: 9, color: C.textTer }}>
                  {i % 2 === 0 ? h : ""}
                </div>
              ))}
            </div>

            {/* Stat columns */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 16, paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
              {statCols.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: F, fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: C.textTer, marginBottom: 4 }}>
                    {s.cat}
                  </div>
                  <div style={{ fontFamily: F, fontSize: 14, fontWeight: 800, color: C.textPri }}>{s.val}</div>
                </div>
              ))}
            </div>

            {/* Recent routes — compact rows */}
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${C.border}` }}>
              <div style={{ fontFamily: F, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: C.textTer, marginBottom: 10 }}>
                Recent Routes
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {recentRoutes.map((r, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "8px 11px", borderRadius: 10,
                    background: C.bgSoft,
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                      background: `rgba(${ACCENT_RGB},0.12)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: F, fontSize: 11, fontWeight: 800, color: ACCENT,
                    }}>
                      {r.caller[0]}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.textPri }}>{r.caller}</span>
                      <span style={{ fontFamily: F, fontSize: 11, color: C.textSec, marginLeft: 6 }}>— {r.summary}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                      <span style={{ fontFamily: F, fontSize: 10, color: C.textTer }}>→</span>
                      <span style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: ACCENT }}>{r.routed}</span>
                      <span style={{ fontFamily: F, fontSize: 10, color: C.textTer }}>{r.ago}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: dark green AI routing panel */}
          <div style={{ background: ACCENT, padding: "22px 20px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 18 }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>✦</span>
              <span style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: "#fff" }}>AI routing now</span>
            </div>

            {/* Active call */}
            <div style={{
              padding: "11px 13px", borderRadius: 11,
              background: "rgba(255,255,255,0.11)",
              border: "1px solid rgba(255,255,255,0.16)",
              marginBottom: 14,
            }}>
              <div style={{ fontFamily: F, fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 5 }}>
                ACTIVE CALL
              </div>
              <div style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 3 }}>Karen Willis</div>
              <div style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.78)", lineHeight: 1.5 }}>
                &ldquo;My AC stopped working since last night&rdquo;
              </div>
            </div>

            <div style={{ height: 1, background: "rgba(255,255,255,0.13)", marginBottom: 14 }} />

            <div style={{ marginBottom: 12 }}>
              <div style={{ fontFamily: F, fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 5 }}>
                AI DETECTED
              </div>
              <div style={{ fontFamily: F, fontSize: 12, color: "rgba(255,255,255,0.9)", lineHeight: 1.55 }}>
                AC breakdown · Urgent · Residential
              </div>
            </div>

            <div style={{ flex: 1, marginBottom: 16 }}>
              <div style={{ fontFamily: F, fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 5 }}>
                ROUTING VIA WHATSAPP
              </div>
              <div style={{ fontFamily: F, fontSize: 12, color: "rgba(255,255,255,0.9)", lineHeight: 1.55 }}>
                Mike Davis · Field Tech
              </div>
              <div style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                Summary + address sent
              </div>
            </div>

            {/* Delivered */}
            <div style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "9px 13px", borderRadius: 9,
              background: "rgba(255,255,255,0.13)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "block", flexShrink: 0, animation: "ecPulse 2s infinite" }} />
              <span style={{ fontFamily: F, fontSize: 11, fontWeight: 600, color: "#fff" }}>WhatsApp delivered · just now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────
function Hero() {
  const isMobile = useIsMobile();
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "90px 20px 60px" : "120px 32px 80px",
        position: "relative",
        overflow: "hidden",
        background: C.bg,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(${ACCENT_RGB},0.10) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 90% 80%, rgba(${ACCENT_RGB},0.05) 0%, transparent 55%)
          `,
        }}
      />

      <div
        style={{
          maxWidth: 820,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 100,
            border: `1px solid rgba(${ACCENT_RGB},0.3)`,
            background: `rgba(${ACCENT_RGB},0.07)`,
            marginBottom: 32,
            fontFamily: "var(--font-sans)",
            fontSize: isMobile ? 11 : 13,
            fontWeight: 500,
            color: ACCENT,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: ACCENT,
              animation: "ecPulse 2s infinite",
            }}
          />
          AI-powered call handling · Available 24/7
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 7vw, 78px)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: C.textPri,
            marginBottom: 24,
          }}
        >
          <div>Every call answered.</div>
          <div>
            <em style={{ fontStyle: "italic", color: ACCENT }}>
              Every lead captured.
            </em>
          </div>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: isMobile ? 16 : 20,
            color: C.textSec,
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          Your AI call agent answers every incoming call, captures customer
          needs, and instantly routes structured information to the right person
          — no missed calls, no manual follow-ups.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={`mailto:saransh@envo.club?subject=Book%20a%20Demo%20-%20envoCall&body=Hi%2C%20I%27d%20like%20to%20book%20a%20demo%20for%20envoCall.`}
            style={{
              fontFamily: "var(--font-sans)",
              padding: isMobile ? "13px 28px" : "14px 32px",
              borderRadius: 16,
              fontSize: isMobile ? 15 : 16,
              fontWeight: 600,
              background: ACCENT,
              color: C.white,
              textDecoration: "none",
              boxShadow: `0 4px 24px rgba(${ACCENT_RGB},0.35)`,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = `0 8px 32px rgba(${ACCENT_RGB},0.4)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = `0 4px 24px rgba(${ACCENT_RGB},0.35)`;
            }}
          >
            Book a Demo
          </a>
          <a
            href="#how"
            style={{
              fontFamily: "var(--font-sans)",
              padding: isMobile ? "13px 28px" : "14px 32px",
              borderRadius: 16,
              fontSize: isMobile ? 15 : 16,
              fontWeight: 500,
              border: `1px solid ${C.border}`,
              color: C.textPri,
              textDecoration: "none",
              background: C.bgCard,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = ACCENT)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = C.border)
            }
          >
            See how it works →
          </a>
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            marginTop: 48,
            fontSize: 13,
            color: C.textTer,
            fontWeight: 500,
          }}
        >
          Trusted by enterprise teams at Hilti and Whirlpool Europe
        </p>
      </div>

      <div
        style={{
          marginTop: 72,
          width: "100%",
          maxWidth: 920,
          position: "relative",
          zIndex: 1,
        }}
      >
        <HeroDashboard />
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────
function Problem() {
  const isMobile = useIsMobile();
  const problems = [
    {
      icon: "📵",
      title: "Missed calls cost you customers",
      body: "When no one answers, customers don't wait. They move on. Every unanswered call is a lost opportunity you'll never know about.",
    },
    {
      icon: "📝",
      title: "Manual follow-ups drain your team",
      body: "Writing down messages, calling back, chasing colleagues — your team spends hours on tasks that should happen automatically.",
    },
    {
      icon: "🔀",
      title: "Information falls through the cracks",
      body: "Phone notes get forgotten. The wrong person gets the message. By the time the right person knows, the moment has passed.",
    },
  ];

  return (
    <section style={{ padding: isMobile ? "72px 20px" : "100px 32px", background: C.bgSoft }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 600,
                color: ACCENT,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 12,
              }}
            >
              The Problem
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: C.textPri,
                marginBottom: 16,
              }}
            >
              Your phone is costing you more than you think
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: isMobile ? 16 : 18,
                color: C.textSec,
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              Every business with a phone line faces the same silent problems.
            </p>
          </div>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {problems.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "32px 28px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>{p.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 18,
                    fontWeight: 600,
                    color: C.textPri,
                    marginBottom: 10,
                    lineHeight: 1.35,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: C.textSec,
                    lineHeight: 1.7,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────
function HowItWorks() {
  const isMobile = useIsMobile();
  const steps = [
    {
      num: "01",
      title: "Call comes in",
      body: "Your AI agent answers instantly — any time, any day — with a professional, natural greeting tailored to your business.",
    },
    {
      num: "02",
      title: "Needs are captured",
      body: "The agent listens, asks clarifying questions, and structures the caller's request into a clean, actionable summary.",
    },
    {
      num: "03",
      title: "Right person is notified",
      body: "The summary is routed immediately via SMS or WhatsApp to the correct team member based on the request type.",
    },
    {
      num: "04",
      title: "Follow-up is handled",
      body: "Automated updates, confirmations, and feedback requests keep customers informed without any manual effort.",
    },
  ];

  return (
    <section id="how" style={{ padding: isMobile ? "72px 20px" : "100px 32px", background: C.bg }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 600,
                color: ACCENT,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 12,
              }}
            >
              How It Works
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: C.textPri,
              }}
            >
              Simple by design. Powerful in practice.
            </h2>
          </div>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  padding: "32px",
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)")
                }
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `rgba(${ACCENT_RGB},0.1)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-serif)",
                    fontSize: 18,
                    fontWeight: 700,
                    color: ACCENT,
                  }}
                >
                  {s.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 17,
                      fontWeight: 600,
                      color: C.textPri,
                      marginBottom: 8,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: C.textSec,
                      lineHeight: 1.7,
                    }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────
function Features() {
  const isMobile = useIsMobile();
  const isTablet = useIsMobile(1024);
  const features = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 6v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "24/7 Availability",
      body: "Never miss a call again. Your AI agent is always on — evenings, weekends, holidays.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="2" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 9h18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Structured Summaries",
      body: "Every call is converted into a clean, structured brief — caller, request, urgency, next action.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M4 4h14l-4 6 4 8H4l4-8-4-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
      title: "Smart Routing",
      body: "AI determines intent and routes to the right team — field, sales, support — automatically.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M4 18V9l7-5 7 5v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="8" y="13" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: "SMS & WhatsApp Delivery",
      body: "Routed summaries land instantly via the channels your team already uses.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 3C11 3 5 5 5 11C5 14.866 7.686 18 11 18C14.314 18 17 14.866 17 11C17 5 11 3 11 3Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Automated Follow-ups",
      body: "Status updates and customer feedback requests sent automatically — no manual effort.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Workflow Integration",
      body: "Connects with your existing tools. No rip-and-replace. Works with your current stack.",
    },
  ];

  const cols = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";

  return (
    <section style={{ padding: isMobile ? "72px 20px" : "100px 32px", background: C.bgSoft }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 600,
                color: ACCENT,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 12,
              }}
            >
              Features
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: C.textPri,
                marginBottom: 16,
              }}
            >
              Everything your team needs
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: isMobile ? 16 : 18,
                color: C.textSec,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              A complete call handling system that works from day one.
            </p>
          </div>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: cols,
            gap: 20,
          }}
        >
          {features.map((f, i) => (
            <FadeIn key={i} delay={(i % 3) * 0.08}>
              <div
                style={{
                  padding: "28px 24px",
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,0,0,0.08)";
                  e.currentTarget.style.borderColor = `rgba(${ACCENT_RGB},0.35)`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 8px rgba(0,0,0,0.04)";
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `rgba(${ACCENT_RGB},0.1)`,
                    color: ACCENT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    fontWeight: 600,
                    color: C.textPri,
                    marginBottom: 8,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13.5,
                    color: C.textSec,
                    lineHeight: 1.7,
                  }}
                >
                  {f.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof ─────────────────────────────────────────
function SocialProof() {
  const isMobile = useIsMobile();
  const testimonials = [
    {
      quote:
        "We used to miss 20–30% of inbound calls during peak hours. Since deploying the AI agent, our response rate is effectively 100% — and our field team gets structured briefs instantly.",
      name: "Head of Operations",
      company: "Hilti",
      initial: "H",
    },
    {
      quote:
        "The automatic follow-up feature alone saves our team 3–4 hours every day. Customers receive status updates without us lifting a finger. Our satisfaction scores have noticeably improved.",
      name: "Customer Experience Director",
      company: "Whirlpool Europe",
      initial: "W",
    },
  ];

  return (
    <section style={{ padding: isMobile ? "72px 20px" : "100px 32px", background: C.bg }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 600,
                color: ACCENT,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 12,
              }}
            >
              Trusted by Enterprise
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: C.textPri,
              }}
            >
              Results that speak for themselves
            </h2>
          </div>
        </FadeIn>

        {/* Logos */}
        <FadeIn>
          <div
            style={{
              display: "flex",
              gap: 24,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 64,
              flexWrap: "wrap",
            }}
          >
            {["Hilti", "Whirlpool"].map((name) => (
              <div
                key={name}
                style={{
                  padding: "16px 32px",
                  borderRadius: 16,
                  border: `1px solid ${C.border}`,
                  background: C.bgCard,
                  fontFamily: "var(--font-sans)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: C.textTer,
                  letterSpacing: "-0.01em",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? 12 : 1,
              background: isMobile ? "transparent" : C.border,
              borderRadius: 16,
              overflow: isMobile ? "visible" : "hidden",
              marginBottom: 48,
            }}
          >
            {[
              { value: "100%", label: "Call answer rate" },
              { value: "< 30s", label: "Average routing time" },
              { value: "3–4h", label: "Daily time saved per team" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "40px",
                  textAlign: "center",
                  background: C.bgCard,
                  borderRadius: isMobile ? 16 : 0,
                  border: isMobile ? `1px solid ${C.border}` : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 42,
                    fontWeight: 700,
                    color: ACCENT,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: C.textSec,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  padding: "36px 32px",
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    color: `rgba(${ACCENT_RGB},0.2)`,
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    color: C.textSec,
                    lineHeight: 1.75,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  {t.quote}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: `rgba(${ACCENT_RGB},0.12)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      fontWeight: 700,
                      color: ACCENT,
                    }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 13,
                        fontWeight: 600,
                        color: C.textPri,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 12,
                        color: C.textTer,
                      }}
                    >
                      {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Benefits ─────────────────────────────────────────────
function Benefits() {
  const isMobile = useIsMobile();
  const benefits = [
    "Zero missed calls",
    "Instant team notification",
    "Automated customer follow-ups",
    "Structured call data",
    "Works on SMS & WhatsApp",
    "Connects to existing tools",
    "Scales with your team",
    "No code, no training needed",
  ];

  return (
    <section style={{ padding: isMobile ? "72px 20px" : "100px 32px", background: C.bgSoft }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 48 : 80,
          alignItems: "center",
        }}
      >
        <FadeIn>
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 600,
                color: ACCENT,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 12,
              }}
            >
              Why teams choose envoCall
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: C.textPri,
                marginBottom: 20,
              }}
            >
              Less manual work.
              <br />
              More satisfied customers.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: isMobile ? 15 : 16,
                color: C.textSec,
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              envoCall removes the friction between a customer calling and the
              right person acting. Businesses that deploy it recover hours every
              day and report measurably better customer outcomes.
            </p>
            <a
              href={`mailto:saransh@envo.club?subject=Book%20a%20Demo%20-%20envoCall&body=Hi%2C%20I%27d%20like%20to%20book%20a%20demo%20for%20envoCall.`}
              style={{
                fontFamily: "var(--font-sans)",
                display: "inline-block",
                padding: "13px 28px",
                borderRadius: 16,
                fontSize: 15,
                fontWeight: 600,
                background: ACCENT,
                color: C.white,
                textDecoration: "none",
                boxShadow: `0 4px 20px rgba(${ACCENT_RGB},0.3)`,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "none";
              }}
            >
              Get started today
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 12,
            }}
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 16px",
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: C.textPri,
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 6,
                    background: `rgba(${ACCENT_RGB},0.12)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    color: ACCENT,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {b}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────
function CTASection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="demo"
      style={{
        padding: isMobile ? "80px 20px" : "100px 32px",
        background: ACCENT,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 80% at 50% 120%, rgba(255,255,255,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: C.white,
              marginBottom: 20,
            }}
          >
            Ready to answer every call?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: isMobile ? 16 : 18,
              color: "rgba(255,255,255,0.75)",
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            See envoCall in action. Book a 20-minute demo and we&apos;ll walk
            you through a live setup tailored to your team.
          </p>
          <a
            href={`mailto:saransh@envo.club?subject=Book%20a%20Demo%20-%20envoCall&body=Hi%2C%20I%27d%20like%20to%20book%20a%20demo%20for%20envoCall.`}
            style={{
              fontFamily: "var(--font-sans)",
              display: "inline-block",
              padding: isMobile ? "15px 36px" : "17px 44px",
              borderRadius: 16,
              fontSize: isMobile ? 16 : 17,
              fontWeight: 600,
              background: C.white,
              color: ACCENT,
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.15)";
            }}
          >
            Book a Demo
          </a>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              marginTop: 20,
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            No commitment. No credit card. Just a conversation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────
export default function EnvoCallPage() {
  return (
    <>
      <style>{`
        @keyframes ecPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
      <main style={{ background: "#f9f9f6" }}>
        <EnvoCallNav />
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <SocialProof />
        <Benefits />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
