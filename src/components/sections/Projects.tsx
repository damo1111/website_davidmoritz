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
  chinwag: "md:col-span-2", // third
};

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6">
      <p className="font-mono text-xs font-medium uppercase tracking-tight text-accent">
        [ Projects ]
      </p>
      <h2 className="display-tight mt-3 font-display text-6xl font-bold uppercase text-ink md:text-8xl">
        {headlineLines.map((line, i) => (
          <motion.span
            key={line}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              delay: i * 0.08,
            }}
            className={cn("block", i === 2 && "text-accent")}
          >
            {line}
          </motion.span>
        ))}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            wide={project.size === "large"}
            className={cn(spanClasses[project.id])}
          />
        ))}
      </div>
    </section>
  );
}
