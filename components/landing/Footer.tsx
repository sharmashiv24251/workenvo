"use client";

export default function Footer() {
  const links = ["Product", "ESG", "Pricing", "About", "Careers", "Legal"];

  return (
    <footer
      className="relative px-6 py-12"
      style={{
        background: "#0a0f0d",
        borderTop: "1px solid rgba(34, 197, 94, 0.13)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Wordmark */}
          <a
            href="/"
            className="flex items-center gap-1"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span
              className="text-xl font-normal"
              style={{ color: "#f0fdf4" }}
            >
              Workenvo
            </span>
            <span style={{ color: "#4ade80", fontSize: "10px", marginTop: "4px" }}>
              ▸
            </span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm transition-colors duration-200"
                style={{
                  color: "rgba(134, 239, 172, 0.6)",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#86efac")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(134, 239, 172, 0.6)")
                }
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#"
            className="text-sm px-5 py-2 rounded-lg border transition-all duration-200"
            style={{
              background: "#14532d",
              color: "#4ade80",
              borderColor: "rgba(34, 197, 94, 0.4)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Book a demo
          </a>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "rgba(34, 197, 94, 0.08)" }}
        />

        {/* Footer statement */}
        <p
          className="text-center text-sm italic"
          style={{
            color: "#4ade80",
            fontFamily: "var(--font-serif)",
            opacity: 0.8,
          }}
        >
          We don&apos;t measure work. We shape behaviour.
        </p>

        <p
          className="text-center text-xs mt-4"
          style={{
            color: "rgba(134, 239, 172, 0.3)",
            fontFamily: "var(--font-sans)",
          }}
        >
          © 2026 Workenvo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
