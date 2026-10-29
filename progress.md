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

---

## 2026-07-18 — Session 1i: Phase 2 COMPLETE — site live at jimpaul.net

### Accomplished
- **Step 2.5 — GitHub push:** User created public repo at https://github.com/jimpauld/jimpaul-website.git. Agent committed (12 files, 904 insertions) and pushed. Hit a credentials issue (git authenticated as `fxp-jim` instead of `jimpauld`) — user cleared the Windows Credential Manager `git:https://github.com` entry, then push succeeded. Branch renamed `master` → `main`.
- **Step 2.6 — Cloudflare Pages:** User connected the repo via dashboard (Workers & Pages → Create → Pages → Connect to Git). Build command `npm run build`, output `dist`. First build succeeded. Site live at https://jimpaul-website.pages.dev/ (confirmed).
- **Step 2.7 — Domain migration COMPLETE:**
  - 2.7.1: Removed custom domain mapping in Google Sites.
  - 2.7.2: Deleted Google CNAME/A/TXT records in Cloudflare DNS. MX records preserved (email forwarding intact).
  - 2.7.3: Added `jimpaul.net` as custom domain in Pages. Cloudflare auto-created the CNAME (proxied, orange cloud). SSL certificate active.
  - 2.7.4: Set up www redirect via Page Rule (`www.jimpaul.net/*` → 301 → `https://jimpaul.net/$1`). Confirmed working.
  - 2.7.5: SSL/TLS set to Full (strict). Enabled Always Use HTTPS (in 2026 UI, it's under SSL/TLS → Edge Certificates, not Overview; "Automatic HTTPS Rewrites" is no longer a separate toggle).
  - 2.7.6: Verified — `https://jimpaul.net` loads the new site, www redirects, nslookup resolves to Cloudflare IPs (104.21.22.120, 172.67.204.204 + IPv6), email forwarding still works.
  - 2.7.7: Old Google Site unpublished (user did this immediately rather than waiting 2–4 weeks).
- **Step 2.8 — Docs in repo:** All 4 planning docs committed and pushed to the public repo.
- **PHASE 2 IS COMPLETE.** All three surfaces (Upwork, LinkedIn, jimpaul.net) are now live and aligned to the canonical copy.

### In progress
- Nothing — Phase 2 fully done.

### Blocked
- Nothing.

### Next
- **Phase 3:** Send 10–15 Upwork proposals in the next 14 days across the 5 target types (FileMaker 2026 upgrade/migration, FileMaker + AI integration, n8n workflow, self-hosted tooling setup, AI-assisted internal/web tools). Agent can help draft proposals on request.
- **Phase 4 (next 4 weekends):** Build a custom FileMaker Data API MCP server in Node/TypeScript, write it up as the first blog post.
- **Possible first blog post (user's idea):** Write up today's repositioning + site migration as the first blog post — "what I did to reposition from FileMaker dev to AI-enhanced dev in one day." Agent to discuss scope with user.

---

## 2026-07-18 — Session 1j: voice-to-blog skill created

### Accomplished
- User designed a blog-writing workflow: dictate freely across sessions (out of order, no structure) → collect → use AI to assemble + correct → publish. Validated via two scout research passes:
  1. Voice dictation + AI editing workflow (2026 best practices, tools, the van Nuenen Berkeley study on AI voice drift).
  2. Out-of-order fragment assembly (Lamott's "down draft," Zettelkasten fleeting notes, Martin Fowler's "fragments" format, AI ordering as metadata-only = drift-free).
- Key finding: AI *rewriting* drifts voice even with "preserve voice" prompts (van Nuenen, April 2026); AI *ordering* (outputting paragraph numbers only) cannot drift voice because it generates metadata, not prose. This shaped the skill's two-mode design.
- User chose: **C** (both modes in the skill — one-paste + two-step), **A** (global location), **B** (stop at draft — user reviews before publish), **A** (vibe-with-me iteration, no full eval loop).
- User clarified the publish boundary: `npm run build` does NOT deploy — only `git push` to `main` triggers Cloudflare Pages auto-deploy. So the skill stops at saving the local `.md` file; the user reviews, then commits/pushes manually.
- Built the skill at `~/.agents/skills/voice-to-blog/`:
  - `SKILL.md` (model-invoked, rich trigger description) — 6-step workflow: collect voice-draft → pick mode → process with constrained prompt → fix technical-term mis-transcriptions → user voice check (read aloud) → save as `.md` (do NOT publish).
  - `references/prompts.md` — three constrained prompts: one-paste combined (ordering + grammar + audit trail), two-step ordering (numbers only — drift-free), two-step grammar (mechanical fixes only + change report). Each "DO NOT" maps to a documented drift mode.
  - Leading word: **voice-draft** — the author's real spoken voice captured on the page; the skill's job is to ship that voice, not improve it.
  - Includes niche-specific gotchas: technical-term mis-transcriptions (opencode, n8n, llama.cpp, MCP, FileMaker, Claris, OttoFMS), code blocks added manually during voice check, Astro frontmatter requirements, possible missing dynamic route for individual posts.

### In progress
- Nothing — skill is built, awaiting first real-world use.

### Blocked
- Nothing.

### Next
- User tries the skill on their first real post (the repositioning story). Iterate based on how it feels — if one-paste drifts too much, dial back; if two-step is too much friction, simplify.
- Then Phase 3: send 10–15 Upwork proposals in 14 days.
- Phase 4: build the custom FileMaker Data API MCP server over 4 weekends.

---

## 2026-07-19 — Session 2: first skill test + AI-tell detection added

### Accomplished
- User tested the voice-to-blog skill (two-step mode) on their first real post — the repositioning story. Voice-draft was `01 blog.md` (raw dictated notes, 21 lines, fragmented). Skill output was `a-filemaker-developers-journey-into-open-source-ai.md` (31 lines, cleaned + ordered).
- User observations: skill flagged unclear sentences with suggestions, followed the re-order + grammar pattern, but the output contained em-dashes (which the user manually removed). User asked the skill to only create the .md file, not touch the Astro site — confirmed the publish boundary is correct.
- User asked for an honest assessment of the draft and the skill, and whether to add AI-anti-pattern detection.
- **Honest assessment of the draft (delivered to user):** the draft is shitty because the voice-draft had no hook and no point. The skill did its job (assembled + cleaned + preserved voice), but the skill cannot add a hook or a point — only the user can, because it requires their lived experience. Recommended: (A) rewrite the opening and closing yourself (add a real hook + point, keep the middle, ~30 min), or (B) publish as a "fragments" post (Martin Fowler format, legitimate but weaker first impression). Recommended (A).
- **Honest assessment of the skill (delivered to user):** the skill worked as designed — ordered, grammar-checked, fixed technical terms, preserved voice, stopped at the draft. Fell short on: (1) em-dashes slipped through, (2) no AI-tell detection, (3) no guidance on hook/point.
- Scout research on AI writing anti-patterns (July 2026) confirmed: add anti-pattern detection, but keep it lightweight. Key findings:
  - Canonical 2026 tells converge on 10–20 high-signal patterns (Kobak 2025 Science Advances; StoryScope 2026 UMD+DeepMind; Wikipedia:Signs of AI writing; conorbronsdon/avoid-ai-writing; yzhao062/agent-style).
  - Em-dash: overuse (2+ per paragraph) is the tell, not presence. OpenAI suppressed them in GPT-5.1 (Nov 2025).
  - Strongest tells are structural (no concrete specifics, stated lesson, uniform sentence length, "Not X, but Y"), not just vocabulary.
  - Mechanism: flag-and-ask, never auto-strip. Preserves author agency.
  - 52% of readers disengage when they suspect AI text (Bynder 2024).
- Updated the skill:
  - Added Step 5 (AI-tell flag-and-ask) between technical-term fixes and voice check. Renumbered voice check → Step 6, save → Step 7.
  - Created `references/ai-tells.md` — top 10 tells ordered by signal strength, with detection guidance, false-positive notes, and a flag-format template. Includes "What NOT to flag" (user's natural voice, domain-specific use, first-person, imperfect phrasing).
  - Updated SKILL.md references to point to the new file.
  - The skill now also flags missing structure (no hook / no point) — names the gap without writing the hook for the user.

### In progress
- User deciding whether to rewrite the first draft's opening/closing (option A) or publish as fragments (option B).

### Blocked
- Nothing.

### Next
- User rewrites the first draft's hook + point (option A), then publishes via git push.
- Try the updated skill on the next post — see if the AI-tell flags catch the em-dashes and other patterns.
- Then Phase 3: send 10–15 Upwork proposals in 14 days.

---

## 2026-07-19 — Session 2b: skill made framework-aware

### Accomplished
- User raised two sharp questions after the first skill test:
  1. Is /grill-me a good tool to help uncover the hook and point for the blog post? (Answer: yes — frame it as grilling the draft to find the point, not as writing the post. The grilling session that produced the repositioning can be applied recursively to the post about the repositioning.)
  2. Does the "missing structure" flag assume every post needs a hook? Is the skill locking to one writing framework? (Answer: yes, it was — valid critique. The personal-narrative framework from beginner blogging guides (N+ Global, Quillbot, Zoer.ai) is one framework among several. The user explicitly wants to write "personal rambles," which don't need a hook.)
- Fixed the skill to be framework-aware:
  - Step 2 now asks for a post type (personal narrative / fragments / reference-how-to / list / ramble-diary) before the processing mode. Default to ramble for personal blog posts — lowest pressure, matches the user's stated intent.
  - Step 5's structure check is now conditional on the chosen post type. Personal narrative: flag missing hook/point. Fragments: only flag if no shared theme. Reference: flag if no concrete steps. List: flag if items aren't distinct. Ramble: only flag if no thread at all (low bar on purpose).
  - Added a gotcha: "Don't impose a framework. The skill supports several post types. Don't push personal-narrative structure on a fragments post or a ramble."
- The skill no longer assumes every post needs a hook. The structure check respects the post type the user chose.

### In progress
- User deciding whether to use /grill-me on the first draft to find its hook + point.

### Blocked
- Nothing.

### Next
- User picks: (a) use /grill-me on the first draft to find the hook + point, then rewrite opening/closing, or (b) rewrite without grilling.
- Then publish the first post via git push.
- Try the updated skill on the next post — confirm the framework-aware structure check and the AI-tell flags work as intended.

---

## 2026-07-19 — Session 2c: model routing guidance for Go plan

### Accomplished
- User asked which OpenCode Go models to use for /grill-me and /voice-to-blog (currently using glm-5.2 for everything).
- Fetched the official Go model list from https://opencode.ai/docs/go/ (15 models, with pricing and request quotas).
- Delivered model routing guidance:

| Task | Recommended model | Why |
|---|---|---|
| /grill-me (find hook + point) | Kimi K2.7 Code | Reasoning + dialogue; the user's Plan model; cheap ($0.95/$4.00); 1,350 req/5hr |
| /voice-to-blog — grammar/ordering (Step 3) | DeepSeek V4 Flash | Simple instruction-following with constrained prompts; massive quota (31,650 req/5hr); $0.14/$0.28 |
| /voice-to-blog — AI-tell detection (Step 5) | DeepSeek V4 Pro | Needs more judgment to identify patterns; 3,450 req/5hr; $0.435/$0.87 |
| Actual coding (MCP server, Astro) | GLM-5.2 | The user's Build model; strongest for code |
| Hard problems / second opinion | Grok 4.5 (sparingly) | Premium reasoning but quota-limited (120 req/5hr) |

- Key principle: save GLM-5.2 (expensive, $1.40/$4.40) for actual coding; use cheaper models for the editing/reasoning tasks that don't need it.
- Caveat noted: per-skill vs per-session model switching in opencode is unconfirmed. If switching mid-skill is awkward, DeepSeek V4 Pro handles the whole voice-to-blog flow fine and is still cheaper than GLM-5.2.
- Switching mechanism: `/models` command in the TUI; can switch mid-session.

### In progress
- User deciding whether to use /grill-me (with Kimi K2.7 Code) on the first draft.

### Blocked
- Nothing.

### Next
- User runs /grill-me with Kimi K2.7 Code on the cleaned draft (`a-filemaker-developers-journey-into-open-source-ai.md`) to find the hook + point.
- User rewrites the opening and closing with what the grilling surfaces; keeps the middle.
- User publishes the first post via git push.
- On the next post, user tries /voice-to-blog with DeepSeek V4 Flash (grammar) + DeepSeek V4 Pro (AI-tell detection) to test the model routing.
## 2026-09-22 — Blog workflow: skill dependency dropped

The `voice-to-blog` skill is experimental and is no longer a dependency of the blog workflow. Drafts now come from the n8n **Digest Engine - Publish** workflow (weekly; opens a **draft pull request** on this repo). The skill notes above remain as history; this entry supersedes them.

Carried forward: the file path `src/pages/blog/<slug>.md`, manual review before merge, and Cloudflare Pages deploying on push to `main`.

Changed: no skill and no dictated-notes step. The draft arrives as a complete, publishable post with inline HTML-commented guidance, authored from the week's digest archive.

Still true, and the reason a person reviews before merging: an April 2026 Berkeley study found AI editing drifts prose toward formal and impersonal even with "preserve voice" prompts.

---

## 2026-10-28 - Session: AI receptionist demo (website half)

### Accomplished
- Built the client side of the public AI receptionist demo backed by the live n8n workflow on n8n.jimpaul.net.
- unctions/api/session.ts verifies a Turnstile token against siteverify, checking success, ction === 'receptionist', and an allowlisted hostname, then issues a signed two-hour pass.
- unctions/api/chat.ts requires that pass, strips it from the payload, and forwards to the n8n webhook with an explicit Origin header. The webhook URL never appears in page source.
- unctions/_lib/pass.ts holds the HMAC helpers shared by both.
- New page /ai-receptionist: hero, embedded chat, what it does, what is real vs simulated, the package price, and a build description.
- New post /blog/ai-receptionist-demo plus a working entry on the blog index.
- Added site: https://jimpaul.net to stro.config.mjs and a canonical link to Layout.astro (pages had no canonical before).
- Added .dev.vars to .gitignore.

### Verified
- 
pm run build passes; 10 pages generated.
- Local run under wrangler pages dev: Turnstile resolves, /api/session returns a pass, /api/chat returns a real reply from the workflow (5.7s).
- /api/chat with no pass, a forged pass, and /api/session with a bogus token all return 403.
- The n8n webhook URL is absent from the built page.

### Blocked / next
- Cloudflare Pages still needs TURNSTILE_SECRET, N8N_CHAT_WEBHOOK, and TURNSTILE_HOSTNAMES (jimpaul.net).
- Nothing committed: commit and push need Jim's approval.
- Remaining after deploy: WAF rate-limit rule, kill-switch test, delete the two test rows in the data table.

### Deploy log (2026-10-28, same session)
- Committed and pushed: d2312ca (demo page, Functions, blog post), fec23c5 (portable Turnstile verify).
- Live at https://jimpaul.net/ai-receptionist/ (200). Blog lists the post.
- Pages variables: TURNSTILE_SECRET (Secret), N8N_CHAT_WEBHOOK, TURNSTILE_HOSTNAMES - all Production scope, after a retry deployment.
- Verified live: /api/session rejects a bogus token with 403 challenge failed; /api/chat with a forged pass returns 403; a valid pass returns a real workflow reply; the n8n host does not appear in page source.
- Fixed during deploy: AbortSignal.timeout is unsupported at the project's compatibility date and broke siteverify. Replaced with AbortController plus setTimeout.
- Still open: in-browser Turnstile round trip, WAF rate-limit rule, kill-switch test, delete test rows in receptionist_leads.
