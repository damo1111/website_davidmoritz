"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { Marquee } from "@/components/ui/Marquee";

const MARQUEE_TEXT =
  "VP Product — JET (19 markets) · Head of Product — IAG Loyalty & British Airways Avios · Senior PM — REA Group · Product Lead — Zoopla · Amazon · Tesco · Founder — Mnemo · Founder — NOT THAT CVNVRD · Builder — eend.app · ";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl px-8 py-32"
      >
        <motion.p
          variants={item}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold"
        >
          Melbourne · London · Amsterdam
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-8 font-display text-[56px] font-light italic leading-[0.95] text-text md:text-[96px]"
        >
          David
          <br />
          Moritz.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-md font-body text-lg leading-relaxed text-muted"
        >
          Senior product leader and AI builder.
          <br />
          20 years shipping at scale across four continents.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded border border-border px-6 py-3 font-mono text-sm text-text transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            See the work
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <a
            href="mailto:david@moritznet.com"
            className="font-mono text-sm text-muted underline-offset-4 transition-colors duration-300 hover:text-gold hover:underline"
          >
            david@moritznet.com
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-0 z-10 w-full">
        <Marquee text={MARQUEE_TEXT} />
      </div>
    </section>
  );
}
