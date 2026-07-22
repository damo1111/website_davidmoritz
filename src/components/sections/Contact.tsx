"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="mt-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex w-full max-w-6xl flex-col items-center px-8 py-32 text-center"
      >
        <h2 className="font-display text-5xl font-light italic text-text md:text-7xl">
          Let&apos;s talk.
        </h2>
        <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-muted">
          Available for senior advisory, fractional product leadership, and
          early-stage collaboration.
        </p>
        <a
          href="mailto:david@moritznet.com"
          className="group mt-10 font-mono text-base text-gold"
        >
          <span className="bg-gradient-to-r from-gold to-gold bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
            david@moritznet.com
          </span>
        </a>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-muted">
          Melbourne · GMT+10
        </p>
      </motion.div>
    </section>
  );
}
