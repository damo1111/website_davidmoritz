"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Presents real imagery pulled straight from each live app — a recorded
 * screen flow, a crossfading pair of real screens, or (where neither is
 * reachable yet) the app's real logo shown as a floating app-icon. Kept on
 * the same tilted-3D treatment across the grid. Purely presentational.
 */

type AppAsset =
  | { kind: "video"; src: string; poster: string }
  | { kind: "slideshow"; images: string[] }
  | { kind: "logo"; src: string };

const ASSETS: Record<string, AppAsset> = {
  "ministry-of-susan": {
    kind: "video",
    src: "/videos/susan-flow.webm",
    poster: "/images/apps/susan-shot.png",
  },
  nous: {
    kind: "slideshow",
    images: ["/images/apps/nous-shot-1.png", "/images/apps/nous-shot-2.png"],
  },
  davanity: { kind: "logo", src: "/images/apps/davanity-logo.png" },
  "pond-hopping": { kind: "logo", src: "/images/apps/pond-logo.png" },
  moritzwith: { kind: "logo", src: "/images/apps/duckworth-logo.png" },
  chinwag: { kind: "logo", src: "/images/apps/chinwag-logo.png" },
};

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255,
    g = (n >> 8) & 255,
    b = n & 255;
  r = Math.round(r * (1 - amt));
  g = Math.round(g * (1 - amt));
  b = Math.round(b * (1 - amt));
  return `rgb(${r}, ${g}, ${b})`;
}

interface Props {
  id: string;
  accent: string;
  /** Large card uses the screen grab as a tall device; else an app-icon. */
  wide?: boolean;
}

export function RealAppArt({ id, accent, wide = false }: Props) {
  const reduce = useReducedMotion();
  const asset = ASSETS[id];

  // Continuous idle float — always looping, but invisible until the
  // entrance (below) reveals it on scroll, so it never jumps on reveal.
  const float: Variants = {
    animate: reduce
      ? {}
      : {
          y: [0, -8, 0],
          rotateX: [7, 5, 7],
          rotateY: [-12, -10, -12],
          transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        },
  };

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden p-4"
      style={{
        background: `linear-gradient(140deg, ${accent}, ${shade(accent, 0.3)})`,
        perspective: "1100px",
      }}
    >
      {/* LED glow */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pointer-events-none absolute h-44 w-44 rounded-full"
        style={{ background: accent, filter: "blur(52px)" }}
      />

      {/* Entrance — reveals when the tile scrolls into view */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 140, damping: 16 }}
        className="w-full"
      >
        <motion.div
          variants={float}
          initial={reduce ? undefined : { rotateX: 7, rotateY: -12 }}
          animate="animate"
          style={{ transformStyle: "preserve-3d" }}
          className="relative flex justify-center"
        >
          {asset?.kind === "video" ? (
            <PhoneFrame>
              <video
                src={asset.src}
                poster={asset.poster}
                autoPlay={!reduce}
                loop
                muted
                playsInline
                className="h-[300px] w-[168px] object-cover object-top md:h-[340px] md:w-[190px]"
              />
            </PhoneFrame>
          ) : asset?.kind === "slideshow" ? (
            <BrowserFrame images={asset.images} reduce={!!reduce} />
          ) : (
            <LogoTile src={asset?.src} />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[1.6rem] border-[5px] border-ink bg-ink p-1 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
      <div className="overflow-hidden rounded-[1.25rem]">{children}</div>
    </div>
  );
}

function BrowserFrame({ images, reduce }: { images: string[]; reduce: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || images.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3200);
    return () => clearInterval(id);
  }, [images.length, reduce]);

  return (
    <div className="w-full max-w-[320px] overflow-hidden rounded-xl border-[3px] border-ink bg-ink shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)] md:max-w-[380px]">
      <div className="flex items-center gap-1.5 bg-ink px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-bg/30" />
        <span className="h-2 w-2 rounded-full bg-bg/30" />
        <span className="h-2 w-2 rounded-full bg-bg/30" />
      </div>
      <div className="relative aspect-[3/2] w-full">
        <AnimatePresence initial={false}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Nous app screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

function LogoTile({ src }: { src?: string }) {
  return (
    <div className="h-28 w-28 overflow-hidden rounded-[1.5rem] border-2 border-ink shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)] md:h-32 md:w-32">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="app logo" className="h-full w-full object-cover" />
    </div>
  );
}
