# Progress Log

Living, append-only record of what has been done, what is in progress, and what is blocked. The AI agent appends a new entry at the end of every session. Do not rewrite history — add new entries below.

---

## 2026-07-18 — Session 1: grilling + planning

### Accomplished
- Ran a `/grilling` session to stress-test the repositioning plan (FileMaker dev → AI-enhanced dev).
- Research validated (via scout subagent):
  - 2026 term for "vibe coding" = **Agentic Engineering** (Karpathy, Apr 2026).
  - FileMaker 2026 (v26.0.1) shipped June 9, 2026 — native LLM calls (OpenAI/Anthropic/Cohere/Gemini), semantic search, Claris MCP Server (free with FileMaker Server), field annotations, XML 2.0. Agentic coding dev previews still roadmap ("later summer 2026").
  - "Low-code + AI-enabled developer" is a real premium niche (AI freelancers +34–44% rates, Upwork AI demand +109% YoY).
  - n8n 2.0 (Jan 2026) is the stronger long-term bet vs Make.com (cloud-only, shallower AI). Stay with n8n.
  - Claris MCP Server is free with FileMaker Server (not locked behind Claris Connect as initially assumed).
  - opencode (~180K GitHub stars, Copilot partnership) is credible to list.
  - Astro + Cloudflare Pages is the right 2026 stack for the website.
- Analyzed current Upwork profile (PNG) and LinkedIn profile (PNG).
- Identified the consistency problem: 3 surfaces (Upwork, LinkedIn, jimpaul.net) tell 3 different stories.
- Locked decisions:
  - Rate: **$40/hr** (up from $20–30 anchor; $75 was an untested experiment).
  - Headline: `Claris FileMaker Developer | AI-enhanced business systems & self-hosted automation`.
  - n8n: list today, junior framing.
  - MCP: option C today (don't list), 4-weekend build, then list.
  - Website: Astro + Cloudflare Pages, 3 pages + stubbed blog.
  - Upwork: add FX Professional Services to Experience, remove diluting skills, replace Cline with opencode, surface AI cert.
- Wrote canonical bio (honest, specific, no overclaim — no consultancy-outcome numbers, no attribution of boss's deployment work, opencode go subscription mention removed, self-hosting reframed as a client service).
- Committed to 5 proposals in 14 days across 5 job types.
- Created project docs: `AGENTS.md`, `action-plan.md`, `progress.md`, `README.md`.

### In progress
- Nothing actively in progress — planning phase complete, execution phase not started.

### Blocked
- Nothing blocked.

### Next
- Begin Phase 1 of `action-plan.md`: apply Upwork + LinkedIn edits (~1 hour).
- Then Phase 2: scaffold the Astro site and deploy to Cloudflare Pages.

---

## 2026-07-18 — Session 1b: action-plan validation pass

### Accomplished
- Ran a scout validation pass over the entire `action-plan.md` against July 2026 reality.
- Verdict: plan is safe to execute as-is — no factual errors found.
- Applied 7 high-priority improvements to `action-plan.md`:
  1. Fixed Upwork section name: "Experience" → "Other Experience" (distinct from Work History; for non-Upwork jobs like FX Professional Services).
  2. Added Cloudflare C3 CLI as a faster alternative to the manual dashboard deploy flow.
  3. Added `@astrojs/cloudflare` adapter step (`npx astro add cloudflare`) for dev/prod parity.
  4. Updated model names in the bio to specific versions: GLM-5.2, DeepSeek V4 Pro, Kimi K2.7 Code, Qwen3.7 (verified at opencode.ai/go).
  5. Bumped proposal target from 5 to 10–15 over 14 days (2026 reply rate ~2% due to AI-flooded proposals).
  6. Added a Portfolio section to the website plan (Home page or /work) — clients at $40/hr need proof before the call.
  7. Added Freelancer Plus consideration ($19.99/mo, 100 Connects + proposal insights) for the 14-day push.
- Applied lower-priority improvements: skill tag limit raised to 20 (2026), Specialized Profiles removal check (May 28, 2026), Upwork AI training opt-out (Jan 5, 2026), DNS propagation expectation (1–48 hrs), build budget note (`[Skip CI]` for docs-only commits), Node/TypeScript recommendation for the MCP server, Astro 7 note (shipped June 2026, same commands).
- Kept the cert wording softened ("Claris FileMaker Server Administrator certification", no level) per user's earlier preference — the official credential is "Expert" level but the user is uncomfortable claiming "Expert." Can add the level later if desired.

### In progress
- Nothing — planning + validation complete.

### Blocked
- Nothing.

### Next
- Execute Phase 1: apply Upwork + LinkedIn edits (~1 hour, no tooling needed).
- Then Phase 2: scaffold the Astro site and deploy to Cloudflare Pages.

---

## 2026-07-18 — Session 1c: Upwork title truncation fix

### Accomplished
- User hit Upwork title truncation: "Claris FileMaker Developer | AI-enhanced business systems & self-hoste" (cut mid-word).
- Scout research confirmed: Upwork title limit is **70 characters** (official Upwork help + SnipeWork, verified April 2026). Original headline was 83 chars — 13 over. Every character counts (spaces, pipes, `&`, hyphens).
- Specialized Profiles (which had a separate 50-char title limit) were removed May 28, 2026 — only the main profile title exists now.
- Generated 10 ranked alternative titles ≤70 chars. Top recommendation: `Claris FileMaker Developer | AI-Enabled Business Systems & Self-Hosted` (exactly 70 chars — "AI-Enabled" vs "AI-enhanced" saves the 2 chars needed to fit).
- Updated `action-plan.md` canonical headline section to split into two variants: 70-char Upwork version + full-length LinkedIn/website version. The three surfaces stay aligned in intent; the Upwork version is a length-constrained variant.
- Updated the Phase 1 Upwork checklist item to reference the 70-char variant explicitly.

### In progress
- Phase 1 execution (user is actively editing Upwork).

### Blocked
- Nothing.

### Next
- Finish remaining Phase 1 Upwork edits (overview, Employment History description, skills, Cline→opencode, Specialized Profiles check, AI training opt-out).
- Then LinkedIn edits.
- Then Phase 2: scaffold the Astro site.

---

## 2026-07-18 — Session 1d: Upwork fee validation + Employment History correction

### Accomplished
- User set Upwork rate to $40/hr; Upwork displayed $4 service fee → $36 take-home.
- Scout research confirmed: 10% service fee is the standard 2026 new-contract rate (old 20%/10%/5% tiered system eliminated May 2025). No separate Payment Protection fee. Clients see gross rate ($40); fee is invisible to them, deducted from freelancer earnings.
- PH-specific add-ons: ~2–2.5% for withdrawal + FX (Payoneer $0.99/transfer + ~1.5% FX spread; Wise cuts FX to <1%). All-in net ~$34.96/hr at $40 gross.
- Confirmed $40 recommendation was a positioning call (not fee-adjusted), but research verdict: **stay at $40**. Reasons: (1) user's psychological comfort is the primary signal, (2) $36 net is already a 33–100% bump from old $18–27 net and unvalidated, (3) fee is permanent but rate isn't — raise to $45/$50 after 2–3 wins with JSS backing. Do not raise to $50 now.
- Optional optimization noted: route withdrawals through Wise (virtual USD account) to cut FX spread from ~1.5% to <1% — ~$0.50/hr recovery, no rate change.
- No change to canonical $40/hr rate in action-plan.md.
- User reached the "Other Experience" step and found FX Professional Services is already listed in **Employment History** (correct section for a full-time role). Corrected the action-plan instruction: do NOT duplicate into Other Experience (that section is for non-Upwork freelance/contract work, not formal employment). Updated the Employment History description instead with the aligned bio text.
- Updated `action-plan.md` Phase 1 Upwork checklist: replaced the "Add to Other Experience" item with "Update Employment History description" + a note explaining the section distinction.

### In progress
- Phase 1 LinkedIn edits (next).

### Blocked
- Nothing.

### Next
- Phase 1 LinkedIn edits (headline, About, Featured, Services, Skills).
- Then Phase 2: scaffold the Astro site.

---

## 2026-07-18 — Session 1e: Phase 1 Upwork COMPLETE

### Accomplished
- **Phase 1 Upwork — DONE.** Verified via public-view screenshot:
  - Title: `Claris FileMaker Developer | AI-Enabled Business Systems & Self-Hosted` (70 chars, no truncation, all 3 pillars).
  - Rate: $40/hr.
  - Overview: hook + canonical bio + 5 "What I work on" bullets + "How I work" paragraph — all aligned.
  - Employment History: FX Professional Services (Oct 2021–Present) updated with canonical description.
  - Certifications: 4 now public — AI Fundamentals II, FileMaker Server Administrator Expert, App Developer for FileMaker Pro Expert, Developer Essentials. Strongest trust signal.
  - Skills: Claris FileMaker, FileMaker WebDirect, Database Development, Rapid Application Development, n8n, Automated Workflow, AI Model Integration. WordPress/WinAutomation/Data Entry removed.
  - Work History: 3 completed jobs, 5 in progress (strong activity signal).
  - Portfolio: FMModTrack, Product Order Database.
  - GitHub linked.
- **Skills limitation confirmed (expected):** opencode, llama.cpp, OttoFMS, FileMaker Data Migration Tool are not in Upwork's taxonomy — save button disables for non-taxonomy tags. Mitigated by naming them in the Overview (full-text searchable). FileMaker Server may be addable if it exists in taxonomy — user to check.
- **Verification checks passed:**
  1. Specialized Profiles — user used one before (WordPress service); fine with it being gone after May 28, 2026 removal; nothing critical lost.
  2. AI training opt-out — user disabled/unchecked all proposal data sharing in settings.
  3. Cline → opencode — user page-searched the profile; no "Cline" mention remains.

### In progress
- Phase 1 complete; Phase 2 (Astro site) next.

### Blocked
- Nothing.

### Next
- Phase 2: scaffold the Astro site and deploy to Cloudflare Pages.

---

## 2026-07-18 — Session 1f: Phase 1 LinkedIn COMPLETE

### Accomplished
- **Phase 1 LinkedIn — DONE.** User confirmed completion of all LinkedIn edits (headline, About, Featured, Services, Skills).
- **Phase 1 (Upwork + LinkedIn) is now fully complete.** Both surfaces are aligned to the canonical copy in `action-plan.md`. The third surface (jimpaul.net) will be built in Phase 2.

### In progress
- Nothing — Phase 1 fully done.

### Blocked
- Nothing.

### Next
- Phase 2: scaffold the Astro site and deploy to Cloudflare Pages. Start with Step 2.1 (prerequisites: Node.js v22.12.0+, Git, VS Code + Astro extension, GitHub + Cloudflare accounts).

---

## 2026-07-18 — Session 1g: Phase 2 build (autonomous) — code complete, deploy pending human

### Accomplished
- User delegated Phase 2 execution to the agent; agent ran it autonomously and only hands off account-gated steps.
- **Step 2.1 — Prerequisites verified:** Node v24.18.0, npm 11.16.0, git 2.55.0 all present. (Astro VS Code extension install is optional/GUI — skipped; user can install manually.)
- **Step 2.2 — Scaffold:** Ran `npm create astro@latest jimpaul-website -- --template basics --install --git --typescript strict --yes --skip-houston`. Created `jimpaul-website/` subfolder with Astro 7.1.1, deps installed, git initialized.
- **Step 2.2b — Cloudflare adapter: SKIPPED (judgment call).** The adapter is optional and for a purely static site it adds risk — it can flip the build to SSR/server output, which would change the Cloudflare deploy from simple static Pages to Workers. The rest of Phase 2 assumes static `dist/` output, so keeping it static is safer for a first-timer. Build confirmed `output: "static"` and `dist/` produced. Revisit only if SSR features are needed later.
- **Step 2.3 — Pages created:**
  - `src/layouts/Layout.astro` — rewritten with nav (Home/About/Work/Contact/Blog), footer, responsive global CSS, per-page title prop, meta description.
  - `src/pages/index.astro` — Home: full canonical headline (H1), first 2 sentences of bio (lead), "Let's talk" CTA, 3 cards (FileMaker Development / AI-Enhanced Development / Self-Hosted Automation), selected-work preview.
  - `src/pages/about.astro` — full canonical bio, "How I work" paragraph, 4 certifications, FMModTrack link.
  - `src/pages/work.astro` — portfolio: FMModTrack, Order Entry System, FileMaker + Windows Scripting (anonymized, from real past Upwork jobs).
  - `src/pages/contact.astro` — LinkedIn link (known) + email and Upwork URL as TODO placeholders for the user to fill.
  - `src/pages/blog/index.astro` — stub: "First post coming soon: building a custom FileMaker MCP server."
  - Removed unused `src/components/Welcome.astro`.
- **Step 2.4 — Build verified:** `npm run build` succeeded — 5 static pages generated in `dist/` (index, about, work, contact, blog). Output mode: static.
- **Step 2.8 — Docs moved into repo:** Copied `AGENTS.md`, `action-plan.md`, `progress.md`, `README.md` from the parent `new-website/` folder into `jimpaul-website/`. Removed scaffold's `CLAUDE.md` to keep `AGENTS.md` as the single source of truth. (Repo root is now `jimpaul-website/`.)

### TODOs left for the user (placeholders in the code)
- `src/pages/contact.astro`: replace `you@example.com` with the real email, and replace the placeholder Upwork URL `https://www.upwork.com/freelancers/` with the real Upwork profile URL.
- `src/pages/about.astro`: the FMModTrack link is a generic `https://github.com/` placeholder — replace with the real repo/download URL.

### In progress
- Steps 2.5 (GitHub push), 2.6 (Cloudflare Pages connect), 2.7 (domain migration) — all require the user's accounts and dashboard actions.

### Blocked
- GitHub push (Step 2.5) — needs the user's GitHub account / git credentials to create the repo and push.
- Cloudflare Pages connection (Step 2.6) — needs the user's Cloudflare dashboard (dashboard-driven, not CLI).
- Domain migration (Step 2.7) — needs Google Sites + Cloudflare dashboard actions.

### Next
- User to: (1) fill the 3 placeholders in contact.astro + about.astro, (2) create a GitHub repo named `jimpaul-website` and push (agent can run the git commands once the repo exists / credentials are set), (3) connect Cloudflare Pages via dashboard, (4) run the domain migration checklist (Step 2.7.1–2.7.7). Agent is ready to assist with any of these on request.

---

## 2026-07-18 — Session 1h: placeholder fills + FMModTrack decision

### Accomplished
- User provided real contact details and decisions on open items:
  - Email: use `support@jimpaul.net` (email forwarding already set up at Spaceship → `dejosejimpaul@gmail.com`). More professional than personal Gmail; same inbox.
  - Upwork URL: `https://www.upwork.com/freelancers/~01c3967a5df2f02def` (stripped the `?mp_source=share` tracking param for the website).
  - FMModTrack: original download links are broken. Decision: keep it listed as a project (it's the only shipped product + a real differentiator), reframe as "built with Xojo", and replace the dead download link with "Download coming soon." Re-hosting the download deferred — becomes a future mini blog post ("I'm re-releasing FMModTrack").
  - Xojo: worth a brief mention (shows breadth — desktop apps, not just FileMaker) but not a headline skill. Added "built with Xojo" to the FMModTrack descriptions.
  - GitHub repo: recommended public (credibility signal for a freelance dev; site is static marketing copy with no secrets). Open question: keep the personal planning docs (AGENTS.md, action-plan.md, progress.md) public or move to a private .gitignore'd folder. Agent recommended keeping public (honest, shows process, talking point). Awaiting user decision.
- Applied edits to `contact.astro` (real email + Upwork URL), `about.astro` (FMModTrack reframed, no dead link), `index.astro` + `work.astro` (FMModTrack description updated with Xojo + "download coming soon").
- Build re-verified: 5 static pages, build succeeds.

### In progress
- Awaiting user decision on GitHub repo visibility (public vs private) and whether to keep planning docs public.

### Blocked
- GitHub push (Step 2.5) — pending the visibility decision + repo creation.

### Next
- User decides on repo visibility → create `jimpaul-website` repo → agent runs git push → user connects Cloudflare Pages → domain migration.