"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  relationship: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Having had the opportunity to report directly to David during his time at Tesco, I can happily say it was one of the most rewarding experiences of my career. His leadership was unparalleled and he inspires his teams to be great. David's a big-picture thinker with a great sense of humour, an awesome team player, and there's not a dull moment around him.",
    name: "Costas Kazikkis",
    title: "VP Digital Product & Design, Carrefour MENA",
    relationship: "Reported directly to David at Tesco",
  },
  {
    quote:
      "David contributed hugely to Tesco.com's media business — he was great at managing various stakeholders, developing innovative solutions and delivering end-user products that benefit clients and customers. Highly adaptable both working alone or in a group. I would undoubtedly recommend him to any employer.",
    name: "Stephen Shepherd",
    title: "Head of Strategy and Consulting, Tesco Media",
    relationship: "Worked with David at Tesco",
  },
  {
    quote:
      "David is a pleasure to work with — we were really sad to see him go. He was enthusiastic, reliable and resourceful. His ideas, insights and input have been a great help to us. I would not hesitate to recommend him.",
    name: "Lucy Gill",
    title: "Head of Product, Micro:bit Educational Foundation",
    relationship: "Managed David directly",
  },
  {
    quote:
      "David always went the extra mile for clients and delivered value above and beyond his call of duty. His ‘think outside the box’ attitude enabled us to offer bespoke solutions and compete for business we'd never been able to before. I wouldn't hesitate to employ David again.",
    name: "Ross Barnes",
    title: "Global C-Suite Leader, AdTech & MarTech",
    relationship: "Managed David directly",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      <p className="font-mono text-xs font-medium uppercase tracking-tight text-accent">
        [ Said by others ]
      </p>
      <h2 className="display-tight mt-3 font-display text-4xl font-bold text-ink md:text-6xl">
        Not just my word for it.
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {testimonials.map((t) => (
          <motion.figure
            key={t.name}
            variants={item}
            className="flex h-full flex-col rounded-3xl border border-line bg-paper p-7"
          >
            <blockquote className="flex-1 font-accentSerif text-lg italic leading-snug text-ink md:text-xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-5">
              <p className="font-body text-sm font-semibold text-ink">
                {t.name}
              </p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-tight text-muted">
                {t.title}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-tight text-accent2">
                {t.relationship}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
