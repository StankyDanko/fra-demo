# FRA Demo — Flint River Academy Website

**Demo website for Flint River Academy (Woodbury, GA) — built as a portfolio piece for Justin's teaching/coaching application.**

Present this to Headmaster Alton White to demonstrate web development and technology curriculum capabilities.

## Live Deployments

| Target | URL | Base Path | Build |
|--------|-----|-----------|-------|
| **VPS** | https://fra-demo.southernsky.cloud | `/` | `npx vite build --base=/` |
| **GitHub Pages** | https://stankydanko.github.io/fra-demo | `/fra-demo/` | `npm run build` (uses vite.config.ts default) |

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Tailwind CSS 3** with custom FRA color palette (`fra-black`, `fra-gold`, `fra-cream`)
- **Framer Motion** for scroll-triggered animations
- **Playfair Display** (serif headings) + **Inter** (body)
- **nginx:alpine** container for production

## Project Structure

```
fra/
├── src/
│   ├── components/     # 10 section components (Nav → Footer)
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── CampusLife.tsx    # Masonry photo gallery
│   │   ├── Showcase.tsx      # Embedded video montage player
│   │   ├── Academics.tsx
│   │   ├── Athletics.tsx     # Real team photos with gradient overlays
│   │   ├── Admissions.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── school.ts         # School data, sports, administration, divisions
│   └── App.tsx
├── public/
│   ├── images/               # Curated photos for the live site
│   │   ├── campus/
│   │   ├── sports/
│   │   ├── admin/
│   │   ├── logo.png
│   │   └── video-poster.jpg
│   └── fra-montage.mp4       # 94s Ken Burns montage (73MB)
├── archive/                  # Full 82-image archive from FRA's Zibster CDN (gitignored)
│   ├── academics/ (16)
│   ├── admin/ (4)
│   ├── admissions/ (2)
│   ├── homepage/ (29)
│   └── sports/ (28)
├── music/                    # 7 jazz tracks from Atlas NAS DJ library (gitignored)
├── build-montage.sh          # ffmpeg montage builder (Ken Burns + crossfade + audio)
├── Dockerfile                # nginx:alpine static container
├── docker-compose.yml        # VPS deployment (port 4005:3000)
├── nginx.conf                # SPA routing + mp4 caching
└── .github/workflows/deploy.yml  # GitHub Pages CI
```

## Dev Commands

```bash
npm run dev          # Dev server on localhost:3457
npm run build        # Production build (GitHub Pages base)
npm run preview      # Preview production build locally
```

## VPS Deployment

```bash
npx vite build --base=/
podman build -t fra-demo:latest .
podman save fra-demo:latest | gzip > /tmp/fra-demo.tar.gz
scp /tmp/fra-demo.tar.gz jmartin@104.243.45.247:/tmp/
ssh jmartin@104.243.45.247 "gunzip -c /tmp/fra-demo.tar.gz | docker load && \
  docker stop fra-demo; docker rm fra-demo; \
  docker run -d --name fra-demo --restart unless-stopped -p 4005:3000 localhost/fra-demo:latest"
```

Caddy routes `fra-demo.southernsky.cloud` → Docker bridge gateway:4005.

## Photo Montage

`build-montage.sh` builds a cinematic 1920x1080 video from 31 curated images:
- **Narrative arc**: logo → campus → academics (youngest→oldest) → student life → sports → community → logo
- **Ken Burns**: alternating zoom-in, zoom-out, pan-right via ffmpeg zoompan
- **Transitions**: 1s crossfade between each clip
- **Audio**: "Solace In Jazz" by Brazo Wa Afrika, fade-in 2s / fade-out 3s
- **Output**: `fra-montage.mp4` (94s, H.264, AAC 192k)

## Image Sources

All photos scraped from FRA's live Zibster CDN (`imageN.zibster.com`). The `archive/` directory contains the full 82-image corpus organized by section. `public/images/` contains the curated subset used in the live site.

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `fra-black` | `#111111` | Backgrounds, text |
| `fra-gold` | `#A28D5B` | Accents, headings, CTAs |
| `fra-gold-light` | `#C4AD7B` | Hover states |
| `fra-gold-dark` | `#8B7648` | Dark accents |
| `fra-cream` | `#FAF8F5` | Section backgrounds |

## Context

- FRA is a GIAA (Georgia Independent Athletic Association) AA school in Woodbury, GA
- Founded 1967, grades 3K-12, ~100 students, 8.9:1 student-teacher ratio
- Head of School: Alton White — primary audience for this demo
- Justin is applying for technology teacher + assistant track & field coach
- Related project: `~/projects/coach-martin/` (educator portfolio site)
