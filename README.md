# David Moritz — Personal Site

Personal site for David Moritz (moritz.life). Senior product leader and AI builder.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Design tokens

Bold & modern light system, defined in `tailwind.config.ts`:

| Token     | Value     | Use                          |
| --------- | --------- | ---------------------------- |
| `bg`      | `#FFFFFF` | page background              |
| `ink`     | `#0B0B0B` | primary text / borders       |
| `paper`   | `#F3F3EE` | soft surface                 |
| `line`    | `#E4E4DE` | hairline borders             |
| `muted`   | `#6B6B73` | secondary text               |
| `accent`  | `#3B2BFF` | electric indigo (primary)    |
| `lime`    | `#D6FF3E` | secondary pop                |
| `coral`   | `#FF5C35` | tertiary pop                 |

Fonts (loaded via `next/font/google`): **Space Grotesk** (display), **Inter** (body), **Space Mono** (mono labels).

## Structure

```
src/
  app/
    layout.tsx          root layout, fonts, metadata
    page.tsx            homepage, assembles all sections
    globals.css
  components/
    sections/
      Hero.tsx          oversized name, tagline, color blocks, marquee bar
      Now.tsx           what I'm building right now (3 cards)
      Projects.tsx      bento grid of all projects
      Work.tsx          career timeline (horizontal scroll)
      Contact.tsx       full-bleed accent CTA block
      Footer.tsx        copyright + links
    ui/
      Marquee.tsx       infinite scroll ticker (bar / plain variants)
      ProjectCard.tsx   color-block card with hover reveal
      Tag.tsx           pill label
      Divider.tsx       section separator with DM mark
      ScrollProgress.tsx  top accent scroll-progress bar
  lib/
    utils.ts            cn() helper
  data/
    projects.ts         project data
    work.ts             career history
```

## Media

Project screengrabs are optional. Add them to `public/images/` using the
convention `susan-preview.png`, `davanity-preview.png`, `pond-preview.png`,
`smith-preview.png`, `nous-preview.png`. Cards without an available image fall
back to a per-project accent color block automatically.

## Deployment

Builds to a standard Next.js production output (`npm run build`) and can be
hosted on any platform that supports Next.js. Point your custom domain at the
host once deployed.
