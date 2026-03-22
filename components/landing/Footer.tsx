"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Footer() {
  const links = ["Product", "ESG", "Pricing", "About", "Careers", "Legal"];

  return (
    <footer
      className="relative px-6 py-14"
      style={{ background: "#FFFFFF", borderTop: "1px solid #F3F4F6" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg mb-10 italic"
          style={{ color: "#16855B", fontFamily: "var(--font-serif)" }}
        >
          We don&apos;t measure work. We shape behaviour.
        </motion.p>

        <div className="h-px w-full mb-10" style={{ background: "#F3F4F6" }} />

        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
            {links.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ color: "#374151" }}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#9CA3AF", fontFamily: "var(--font-sans)" }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary text-sm px-5 py-2.5 rounded-xl font-medium"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Book a demo
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
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
