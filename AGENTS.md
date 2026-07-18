# AGENTS.md — jimpaul.net rebuild project

This file gives opencode (and any other AI coding agent) the context it needs to work in this repo. It is read automatically at the start of every session, alongside the global `~/.config/opencode/AGENTS.md`.

## Project overview

This repo is the source for **jimpaul.net** — the personal website of Jim Paul De Jose, a Claris FileMaker developer repositioning as an AI-enhanced business systems developer. The site is a simple, practical portfolio with room for a mini blog. It is one of three aligned surfaces (Upwork, LinkedIn, jimpaul.net) that must stay in sync.

## Tech stack

- **Framework:** Astro (static site generator) — basics starter template
- **Hosting:** Cloudflare Pages (free tier, auto-deploy from GitHub)
- **Domain:** jimpaul.net (DNS via Cloudflare)
- **Runtime:** Node.js v22.12.0+ LTS, npm
- **OS:** Windows 11 Pro, PowerShell 7+
- **Editor:** VS Code with the Astro extension
- **AI tooling:** opencode (desktop + CLI) with opencode go subscription models (GLM, DeepSeek, Kimi, Qwen)

## Build / dev / deploy commands

```powershell
npm run dev      # local dev server at http://localhost:4321
npm run build    # build static site to ./dist
npm run preview  # preview the production build locally
```

Deploy is automatic on push to `main` via Cloudflare Pages (git integration). No manual deploy step.

## Project structure

```
jimpaul-website/
├── AGENTS.md           # this file — agent instructions
├── action-plan.md      # ordered task checklist
├── progress.md         # living session log
├── README.md           # human-facing repo readme
├── src/
│   ├── pages/
│   │   ├── index.astro       # Home
│   │   ├── about.astro       # About
│   │   ├── contact.astro     # Contact
│   │   └── blog/
│   │       └── index.astro   # stubbed blog index
│   ├── components/           # reusable UI (if any)
│   └── layouts/
│       └── Layout.astro      # shared page shell
├── public/                   # static assets (favicon, images)
└── astro.config.mjs
```

## Conventions

- **No comments in code** unless explicitly requested by the user.
- **Markdown docs:** plain, no emojis unless requested.
- **Indentation:** 2 spaces for `.astro`, `.md`, `.mjs`, `.json`.
- **Line endings:** CRLF (Windows default); respect any `.gitattributes`.
- **PowerShell only** for shell commands — never bash/cmd. Use `-LiteralPath` for paths.
- **Never commit secrets** (API keys, tokens). Never commit unless explicitly asked.

## Session workflow

At the **start of every session**:
1. Read `action-plan.md` to know the current priority.
2. Read `progress.md` to know what is done, in progress, and blocked.
3. Use this context before starting any work.

At the **end of every session** (or when asked to wrap up):
1. Append a new entry to `progress.md`:
   - Timestamp (`YYYY-MM-DD`)
   - What was accomplished
   - What is blocked (if anything)
   - What should be done next
2. If tasks were completed, mark them done in `action-plan.md`.
3. If new tasks emerged, add them to `action-plan.md`.

## Key files and their purposes

| File | Purpose | Who updates it |
|------|---------|----------------|
| `AGENTS.md` | Agent instructions, conventions, commands | Human (Jim) — rarely changes |
| `action-plan.md` | Ordered checklist of what to do next | Human + agent |
| `progress.md` | Living log of what happened, append-only | Agent at session end |
| `README.md` | Public repo readme | Human |

## Gotchas (Windows 11 specific)

- **Node version:** Astro 6 requires Node 22.12.0+. Check with `node -v`. Use `nvm use 22` if needed.
- **PowerShell execution policy:** if scripts are blocked, run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` (current session only).
- **Port 4321 in use:** run `npm run dev -- --port 3000`.
- **Path too long:** keep the project folder shallow; this repo is already at a reasonable depth.
- **Sharp/image optimization:** slower on native Windows; use plain `<img>` tags for now.
- **Cloudflare Pages vs Workers:** for this static site, use Pages (simpler). Workers is Cloudflare's 2026 recommendation for new SSR projects but overkill here.

## Alignment invariant

The following three surfaces must always carry the same headline and bio. If one changes, update the others in the same session.

- **Upwork** profile (title + overview)
- **LinkedIn** profile (headline + About)
- **jimpaul.net** (Home H1 + About page)

The canonical copy lives in `action-plan.md` under "Canonical copy." Do not diverge.