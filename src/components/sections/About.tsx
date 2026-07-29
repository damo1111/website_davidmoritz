"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 110, damping: 18 }}
      >
        <p className="font-mono text-xs font-medium uppercase tracking-tight text-accent">
          [ About ]
        </p>
        <h2 className="display-tight mt-3 max-w-3xl font-display text-4xl font-bold text-ink md:text-6xl">
          Turning ambiguity into clarity.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-3">
            <p className="font-body text-base leading-relaxed text-ink/85 md:text-lg">
              I specialise in building and scaling complex customer-facing
              platforms — marketplaces and digital platforms where growth,
              discovery and experience quality intersect. Most recently as
              Head of Product (VP) at Just Eat Takeaway, I&apos;ve spent the
              past decade leading product organisations, building and
              coaching senior teams, and shaping long-term strategy that
              moves conversion, engagement and operational effectiveness at
              scale.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-ink/85 md:text-lg">
              What I&apos;m best at is setting direction when a problem is
              genuinely messy — aligning stakeholders with very different
              incentives, and helping teams focus on what actually moves the
              needle for customers and the business.
            </p>
          </div>

          <div className="flex flex-col gap-6 border-t border-line pt-6 md:col-span-2 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="font-accentSerif text-2xl italic leading-snug text-accent md:text-3xl">
              Product leadership is turning ambiguity into a bet worth
              making — then building the team that proves it right.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
