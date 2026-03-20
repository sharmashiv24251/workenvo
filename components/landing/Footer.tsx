"use client";

import Image from "next/image";

export default function Footer() {
  const links = ["Product", "ESG", "Pricing", "About", "Careers", "Legal"];

  return (
    <footer
      className="relative px-6 py-12 section-divider"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Workenvo"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#9CA3AF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#"
            className="btn-primary text-sm px-5 py-2.5 rounded-xl font-medium"
          >
            Book a demo
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ background: "#F3F4F6" }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm italic"
            style={{ color: "#16855B", fontFamily: "var(--font-serif)" }}
          >
            We don&apos;t measure work. We shape behaviour.
          </p>

          <p
            className="text-xs"
            style={{ color: "#D1D5DB", fontFamily: "var(--font-sans)" }}
          >
            © 2026 Workenvo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
