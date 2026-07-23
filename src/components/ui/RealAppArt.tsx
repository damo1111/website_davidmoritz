"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Presents real imagery pulled from each live app's repo — a genuine app
 * screen grab where available (Ministry of Susan's demo build), otherwise the
 * app's real logo / icon shown as a floating, glowing app-icon. Kept on the
 * same tilted-3D treatment as the rest of the tiles. Purely presentational.
 */

interface AppAsset {
  /** Real screen grab (rendered in a device frame). */
  shot?: string;
  /** Real logo / app icon (rendered as a floating app-icon tile). */
  logo?: string;
}

const ASSETS: Record<string, AppAsset> = {
  "ministry-of-susan": { shot: "/images/apps/susan-shot.png", logo: "/images/apps/susan-logo.png" },
  davanity: { logo: "/images/apps/davanity-logo.png" },
  "pond-hopping": { logo: "/images/apps/pond-logo.png" },
  moritzwith: { logo: "/images/apps/duckworth-logo.png" },
  nous: { logo: "/images/apps/nous-logo.png" },
  chinwag: { logo: "/images/apps/chinwag-logo.png" },
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
  const asset = ASSETS[id] ?? {};
  const useShot = Boolean(asset.shot) && wide;

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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-44 w-44 rounded-full"
        style={{ background: accent, opacity: 0.6, filter: "blur(52px)" }}
      />

      <motion.div
        variants={float}
        initial={reduce ? undefined : { rotateX: 7, rotateY: -12 }}
        animate="animate"
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        {useShot ? (
          // Real screen grab in a device frame
          <div className="rounded-[1.6rem] border-[5px] border-ink bg-ink p-1 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
            <div className="overflow-hidden rounded-[1.25rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset.shot}
                alt="Ministry of Susan app screen"
                className="h-[300px] w-[168px] object-cover object-top md:h-[340px] md:w-[190px]"
              />
            </div>
          </div>
        ) : (
          // Real app icon
          <div className="h-28 w-28 overflow-hidden rounded-[1.5rem] border-2 border-ink shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)] md:h-32 md:w-32">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset.logo}
              alt="app logo"
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
