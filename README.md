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

Defined in `tailwind.config.ts`:

| Token       | Value     |
| ----------- | --------- |
| `bg`        | `#0B0B0D` |
| `surface`   | `#161618` |
| `border`    | `#2A2A2E` |
| `text`      | `#F2EDE4` |
| `muted`     | `#8B8B95` |
| `gold`      | `#D4B483` |
| `gold-dark` | `#A8895A` |

Fonts (loaded via `next/font/google`): **Cormorant** (display), **DM Sans** (body), **DM Mono** (mono).

## Structure

```
src/
  app/
    layout.tsx          root layout, fonts, metadata
    page.tsx            homepage, assembles all sections
    globals.css
  components/
    sections/
      Hero.tsx          name, tagline, scrolling marquee, spotlight
      Now.tsx           what I'm building right now (3 cards)
      Projects.tsx      bento grid of all projects
      Work.tsx          career timeline (horizontal scroll)
      Contact.tsx       single CTA
      Footer.tsx        copyright + links
    ui/
      Marquee.tsx       infinite scroll ticker
      ProjectCard.tsx   image/gradient card with hover reveal
      Tag.tsx           pill label
      Divider.tsx       section separator with D.M. mark
      Spotlight.tsx     ambient hero background glow
      ScrollProgress.tsx  top gold scroll-progress bar
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
back to a per-project accent gradient automatically.

## Deployment

Deploys to Vercel. `vercel.json` redirects the `mnemolabs.co` host to
`mnemolabs.app`. Add the custom domain in the Vercel dashboard.
