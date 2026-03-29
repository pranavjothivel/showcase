# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

Single-page portfolio website built with **Next.js App Router**, **Tailwind CSS**, **Shadcn/ui**, and **Framer Motion**.

**Routing:** `app/` is the App Router root. `app/page.tsx` is the sole page — all sections render there sequentially. `app/layout.tsx` wraps everything in `ThemeProvider`, `TooltipProvider`, and `Toaster`.

**Components:** `src/components/` holds page sections (`LandingSection`, `AboutSection`, `ExperienceSection`, `ProjectsSection`, `PersonalProjectsSection`, `ContactSection`) and shared primitives (`ScrollReveal`, `AdaptiveScrollReveal`, `LogoCarousel`, `ProjectCard`). Shadcn/ui generated components live in `src/components/ui/`.

**Animations:** `ScrollReveal` and `AdaptiveScrollReveal` are Framer Motion wrappers used to animate section content on scroll. `use-scroll-velocity.ts` in `src/hooks/` tracks scroll speed for interactive effects.

**Theming:** Dark mode is class-based (toggled via `Navbar`). Colors are defined as HSL CSS variables in `app/globals.css` and consumed by Tailwind via `tailwind.config.ts`. Custom fonts: Space Grotesk (display), DM Sans (body).

**Path alias:** `@/*` maps to `src/*`.

**Deployment:** Vercel. Domains `pranavjothivel.com` and `new.pranavjothivel.com` are configured in `vercel.json`.