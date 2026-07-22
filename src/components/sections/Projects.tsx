"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

const headlineLines = ["Five live apps.", "One studio.", "No VC."];

// Map each project id to its span in the asymmetric bento grid.
const spanClasses: Record<string, string> = {
  "ministry-of-susan": "md:col-span-6", // full width first row
  davanity: "md:col-span-3", // half
  "pond-hopping": "md:col-span-3", // half
  moritzwith: "md:col-span-2", // third
  nous: "md:col-span-2", // third
  tare: "md:col-span-2", // third
};

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
        Projects
      </p>
      <h2 className="mt-4 font-display text-5xl font-light italic leading-[1.05] text-text md:text-6xl">
        {headlineLines.map((line, i) => (
          <motion.span
            key={line}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className={cn(spanClasses[project.id])}
          />
        ))}
      </div>
    </section>
  );
}
