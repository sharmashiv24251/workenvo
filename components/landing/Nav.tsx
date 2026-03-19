"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-border transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "rgba(10,15,13,0.85)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="/"
          className="flex items-center gap-1"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          <span
            className="text-xl font-normal tracking-tight"
            style={{ color: "#f0fdf4" }}
          >
            Workenvo
          </span>
          <span style={{ color: "#4ade80", fontSize: "10px", marginTop: "4px" }}>
            ▸
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Platform", "ESG", "For HR", "For Leaders", "Pricing"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="text-sm tracking-wide uppercase transition-colors duration-200"
                style={{
                  color: "#86efac",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#4ade80")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#86efac")
                }
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-sm transition-colors duration-200"
            style={{ color: "#86efac", fontFamily: "var(--font-sans)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#4ade80")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#86efac")}
          >
            Log in
          </a>
          <a
            href="#"
            className="btn-primary text-sm px-5 py-2.5 rounded-lg transition-all duration-200 border-2"
            style={{
              background: "#14532d",
              color: "#4ade80",
              borderColor: "#22c55e",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#166534";
              e.currentTarget.style.color = "#86efac";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#14532d";
              e.currentTarget.style.color = "#4ade80";
            }}
          >
            Book a demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className="w-5 h-px block"
            style={{ background: "#86efac" }}
          />
          <span
            className="w-5 h-px block"
            style={{ background: "#86efac" }}
          />
          <span
            className="w-3 h-px block"
            style={{ background: "#86efac" }}
          />
        </button>
      </div>
    </nav>
  );
}
