"use client";

import { motion } from "framer-motion";
import { work } from "@/data/work";

const headlineLines = ["Twenty years.", "Twelve companies.", "Four continents."];

export function Work() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
          Experience
        </p>
        <h2 className="mt-4 font-display text-5xl font-light italic leading-[1.05] text-text md:text-6xl">
          {headlineLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-4 md:mx-auto md:max-w-6xl"
      >
        {work.map((role) => (
          <article
            key={`${role.company}-${role.period}`}
            className="relative flex min-h-[240px] w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded border border-border bg-surface p-7 transition-colors duration-300 hover:border-gold/60"
          >
            {/* Company name as subtle watermark */}
            <span
              className="pointer-events-none absolute -right-2 bottom-0 select-none font-display text-[80px] font-light leading-none text-white/[0.03]"
              aria-hidden="true"
            >
              {role.company.slice(0, 3)}
            </span>

            <div className="relative z-10 flex h-full flex-col">
              <h3 className="font-display text-[32px] font-light leading-tight text-text">
                {role.company}
              </h3>
              <p className="mt-1 font-body text-sm text-muted">{role.role}</p>
              <p className="mt-3 font-mono text-xs text-gold">{role.period}</p>
              <p className="mt-4 flex-1 font-body text-[13px] leading-relaxed text-muted">
                {role.context}
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
                {role.location}
              </p>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
