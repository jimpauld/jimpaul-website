# jimpaul.net

Personal website of Jim Paul De Jose — Claris FileMaker Developer | AI-enhanced business systems & self-hosted automation.

Built with [Astro](https://astro.build/) and deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

Live at **https://jimpaul.net**.

## What this repo contains

- The source for the jimpaul.net website (Home, About, Contact, stubbed Blog).
- Project documentation for working with AI coding agents (opencode):
  - `AGENTS.md` — instructions for AI agents working in this repo.
  - `action-plan.md` — ordered task checklist (what to do first, next).
  - `progress.md` — living session log (append-only).

## Local development

Requires Node.js v22.12.0+ LTS.

```powershell
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

Deploy is automatic on push to `main` via Cloudflare Pages.

## Alignment

This website is one of three aligned surfaces. The headline and bio are kept in sync with:
- Upwork profile
- LinkedIn profile

The canonical copy lives in `action-plan.md`.