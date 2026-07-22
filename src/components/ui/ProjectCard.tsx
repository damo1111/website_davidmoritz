"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { name, studio, url, tag, description, status, screengrab, accentColor } =
    project;

  // Fall back to the accent gradient if a screengrab is absent or fails to load
  // (screengrabs are added later — see brief section 8).
  const [imageOk, setImageOk] = useState(Boolean(screengrab));
  const showImage = Boolean(screengrab) && imageOk;

  const CardTag = url ? "a" : "div";
  const linkProps = url
    ? {
        href: `https://${url}`,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("group h-full", className)}
    >
      <CardTag
        {...linkProps}
        className={cn(
          "relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded border border-border bg-surface p-7",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-0.5 hover:scale-[1.02] hover:border-gold"
        )}
      >
        {/* Background: screengrab if present, else accent gradient */}
        {showImage && screengrab ? (
          <>
            <Image
              src={screengrab}
              alt={`${name} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-60"
              onError={() => setImageOk(false)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/30" />
          </>
        ) : (
          <div
            className="absolute inset-0 opacity-25 transition-opacity duration-300 group-hover:opacity-40"
            style={{
              background: `radial-gradient(120% 120% at 20% 0%, ${accentColor}55, transparent 60%)`,
            }}
          />
        )}

        {/* Arrow — appears on hover */}
        {url && (
          <span
            className="absolute right-6 top-6 z-10 translate-y-1 font-mono text-lg text-gold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            aria-hidden="true"
          >
            ↗
          </span>
        )}

        {/* Studio + status dot in top-left */}
        <div className="absolute left-6 top-6 z-10 flex items-center gap-2">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              status === "live" ? "animate-pulse-dot bg-[#7BC47F]" : "bg-gold"
            )}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {studio}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-3">
            <span
              className="inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest"
              style={{
                backgroundColor: `${accentColor}26`,
                color: accentColor,
              }}
            >
              {tag}
            </span>
          </div>
          <h3 className="font-display text-[28px] font-light leading-tight text-text">
            {name}
          </h3>
          <p className="mt-2 max-h-0 overflow-hidden font-body text-sm text-muted opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
            {description}
          </p>
          {url && (
            <p className="mt-3 font-mono text-xs text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {url}
            </p>
          )}
        </div>
      </CardTag>
    </motion.div>
  );
}
