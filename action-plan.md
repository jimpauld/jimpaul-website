# Action Plan — jimpaul.net + profile repositioning

Living checklist. Mark items `[x]` when done. Add new items as they emerge. Ordered by what to do first.

---

## Canonical copy (source of truth — keep all 3 surfaces aligned to this)

### Headline (Upwork title, LinkedIn headline, website H1)

**Upwork title (70-char hard limit — use this exact version):**
```
Claris FileMaker Developer | AI-Enabled Business Systems & Self-Hosted
```
(70 chars exactly. "AI-Enabled" not "AI-enhanced" — the 2-char saving is what makes it fit. Everything counts toward the limit: spaces, pipes, `&`, hyphens.)

**LinkedIn headline + website H1 (220-char / no limit — use the full version):**
```
Claris FileMaker Developer | AI-enhanced business systems & self-hosted automation
```

The three surfaces stay aligned in intent; the Upwork version is a length-constrained variant of the same positioning.

### Bio (Upwork overview, LinkedIn About, website About page)
```
Since 2021 I've been the lead Claris FileMaker developer for a business systems consultancy, building and maintaining FileMaker custom apps and handling data migrations and deployments with the FileMaker Data Migration Tool and OttoFMS. I hold the Claris FileMaker Server Administrator certification and the AI Fundamentals II: Using LLMs in Claris FileMaker Associate certification. My current work spans FileMaker 2026 and AI-assisted development with opencode — using leading open-source models like GLM-5.2, DeepSeek V4 Pro, Kimi K2.7 Code, and Qwen3.7 to keep costs down without sacrificing quality. For sensitive work that can't leave my machine, I run local LLMs through llama.cpp. I also deploy and manage self-hosted infrastructure for clients, including FileMaker Server and n8n, on both Windows and Ubuntu.
```

### Rate
```
$40/hr
```

### Proposal target types (next 14 days, aim for 10–15 proposals)
1. FileMaker 2026 upgrade / migration
2. FileMaker + AI integration (native LLM calls, semantic search, RAG)
3. n8n workflow automation (self-hosted, AI agents — not FileMaker-only)
4. Self-hosted business tooling setup (n8n, FileMaker Server on VPS)
5. AI-assisted internal tools / web tools (opencode + open-source models)

Note: Upwork reply rate in 2026 is ~2% due to AI-flooded proposals. 5 proposals is too few to get a reliable signal — target 10–15 over 14 days. Also bid on broader "FileMaker development" jobs and pitch AI as a value-add differentiator, since pure "FileMaker + AI" postings are rare.

---

## Phase 1 — Quick wins (do first, ~1 hour, no website needed)

These are edits to existing profiles. Do them today before touching the website.

### Upwork
- [ ] Set title to the **70-char Upwork variant**: `Claris FileMaker Developer | AI-Enabled Business Systems & Self-Hosted` (the full canonical headline is 83 chars and gets truncated — use this exact version).
- [ ] Set rate to $40/hr.
- [ ] Replace overview opening with: `I help businesses build and modernize FileMaker custom apps — and bring AI-assisted development into the workflow without the hype.`
- [ ] Paste the canonical bio after the opening hook.
- [ ] Add the "What I work on" list (5 bullets — see canonical proposal types).
- [ ] Add the "How I work" paragraph: `I review and validate every AI-generated change before it reaches production. The exact method depends on the work — staging copies and backups for FileMaker, draft-and-test for automation — but the discipline is the same. No vibes.`
- [ ] Update the **Employment History** entry for FX Professional Services (already exists — Oct 2021–Present, "I currently work here" checked). Replace the generic description with: `Lead FileMaker development for a business systems consultancy. Build and maintain FileMaker custom apps; handle data migrations and deployments with the FileMaker Data Migration Tool and OttoFMS. Work in FileMaker 2026 with AI-assisted development tooling (opencode).`
  - Note: Employment History is the correct section for this full-time role (LinkedIn confirms "Full-time"). Do NOT also add it to "Other Experience" — that section is for freelance/contract work not done through Upwork and not formal employment. Duplicating would look like padding.
- [ ] Remove skills: Data Entry, WordPress e-Commerce, WordPress Website, WinAutomation.
- [ ] Add skills (limit raised to 20 in 2026). Add the standard searchable ones first: Claris FileMaker, FileMaker Server, n8n, Workflow Automation, AI Integration. Then add niche ones (FileMaker Data Migration Tool, OttoFMS, opencode, llama.cpp) — these may not exist in Upwork's taxonomy but still work as free-form tags and are full-text searchable in your Overview. (Add FileMaker Data API only if you have actually used it in a real project.) Aim for 10–15 relevant skills total so the profile stays "100% complete."
- [ ] Replace every mention of "Cline" with "opencode" in existing profile copy.
- [ ] Check whether you used Specialized Profiles — they were removed May 28, 2026 and content did NOT auto-transfer. Re-add anything lost to the main profile.
- [ ] Opt out of Upwork AI training in settings (proposal data is used for AI training by default since Jan 5, 2026).
- [ ] Consider Freelancer Plus ($19.99/mo) for the 14-day push — 100 free Connects/month + proposal insights + ~50% higher hire rate. Cancel after if not worth it.

### LinkedIn
- [ ] Set headline to the canonical headline.
- [ ] Replace About section with the canonical bio verbatim.
- [ ] Keep FMModTrack in Featured; add the AI Fundamentals II cert to Featured.
- [ ] Services — remove: Virtual Assistance, Data Entry.
- [ ] Services — keep: Custom Software Development, Database Development.
- [ ] Services — add: Workflow Automation, AI Integration.
- [ ] Skills (top 5): FileMaker, FileMaker Server, n8n, Workflow Automation, AI Integration. Add opencode if available as a skill tag.

---

## Phase 2 — Website build (do next, first time with Astro)

Step-by-step for a first-time Astro user on Windows 11. Estimated 3–4 hours with opencode helping.

### Step 2.1 — Prerequisites
- [x] Node.js v22.12.0+ — verified v24.18.0.
- [x] Git — verified 2.55.0.
- [ ] VS Code — already installed. Install the Astro extension (optional): open VS Code → Extensions (Ctrl+Shift+X) → search "Astro" → install the official one by Astro.
- [ ] GitHub account — create if you don't have one.
- [x] Cloudflare account — already have one. Note: `cloudflared` (the tunnel tool you mentioned) is NOT used for this project — you'll use Cloudflare Pages (static hosting), a different product.

### Step 2.2 — Scaffold the Astro project
- [x] Ran `npm create astro@latest jimpaul-website -- --template basics --install --git --typescript strict --yes --skip-houston` (non-interactive). Scaffolded Astro 7.1.1 with deps installed + git initialized.
- [x] Project at `jimpaul-website/` subfolder.
- [x] Build verified (see Step 2.4).

### Step 2.2b — (Optional but recommended) Add the Cloudflare adapter
- [~] SKIPPED (judgment call). The adapter can flip the build to SSR/server output, changing the Cloudflare deploy from static Pages to Workers. For a purely static site, keeping `output: "static"` + `dist/` is safer and matches the rest of Phase 2. Revisit only if SSR features are needed.

### Step 2.3 — Create the 3 pages + stubbed blog
- [x] Created `src/pages/about.astro` (full canonical bio + "How I work" paragraph + 4 certifications + FMModTrack link).
- [x] Created `src/pages/contact.astro` (LinkedIn link known; email + Upwork URL left as TODO placeholders for the user).
- [x] Created `src/pages/blog/index.astro` (stub: "First post coming soon: building a custom FileMaker MCP server.").
- [x] Edited `src/pages/index.astro` (Home): H1 = full canonical headline, lead = first 2 sentences of bio, 3 cards, "Let's talk" CTA → /contact.
- [x] Added a dedicated `src/pages/work.astro` (Portfolio): FMModTrack + Order Entry System + FileMaker + Windows Scripting (anonymized, from real past Upwork jobs). Linked from Home.
- [x] Rewrote `src/layouts/Layout.astro` with nav (Home / About / Work / Contact / Blog) + footer + responsive global CSS + per-page title prop.
- [x] Build verified (see Step 2.4).

### Step 2.4 — Build and verify production output
- [x] Ran `npm run build` → 5 static pages generated in `dist/` (index, about, work, contact, blog). Output mode: static. Build succeeded.

### Step 2.5 — Push to GitHub
- [ ] If the create-astro wizard already ran `git init`, skip the init step.
- [ ] Create a GitHub repo (browser: https://repo.new, or `gh repo create`).
- [ ] Push:
  ```powershell
  git add .
  git commit -m "Initial Astro site: Home, About, Contact, stubbed blog"
  git remote add origin https://github.com/<your-username>/jimpaul-website.git
  git branch -M main
  git push -u origin main
  ```
  (Ask before committing — per global AGENTS.md, never commit unless explicitly asked.)

### Step 2.6 — Connect Cloudflare Pages
- [ ] Cloudflare Dashboard → Workers & Pages → Create application → Pages tab → **Connect to Git** (the button was renamed from "Import an existing Git repository" in 2026).
- [ ] Connect GitHub, select `jimpaul-website`.
- [ ] Configure: project name = `jimpaul-website`; production branch = `main`; build command = `npm run build`; build output directory = `dist`. (Cloudflare has an Astro preset that may auto-fill these.)
- [ ] Save and Deploy. Wait for the first build to succeed.
- [ ] Note the `*.pages.dev` URL — the site is now live on that URL.

**Alternative (faster 2026 path):** Instead of steps 2.5 + 2.6, use the Cloudflare C3 CLI which scaffolds + deploys in one command:
```powershell
npm create cloudflare@latest jimpaul-website -- --framework=astro
```
This auto-detects Astro, sets build command + output dir, and deploys immediately. Pick either path — the manual dashboard flow gives you more control; C3 is faster.

### Step 2.7 — Migrate jimpaul.net from Google Sites to Cloudflare Pages

**Context:** jimpaul.net is registered at Spaceship, DNS is already on Cloudflare nameservers, currently pointed at a Google Sites website. You do NOT touch Spaceship — everything happens in Cloudflare + Google Sites.

**Before you start:** Confirm the Astro site is deployed and working at `https://<project>.pages.dev`. Do not migrate DNS until the Pages site loads.

**Step 2.7.1 — Remove the custom domain mapping in Google Sites**
- [ ] Google Sites → open your site → Settings (gear) → Custom domains.
- [ ] Find the `www.jimpaul.net` (or `jimpaul.net`) entry → trash icon → Delete.
- [ ] This tells Google to stop expecting traffic at that domain. It does NOT touch DNS records.

**Step 2.7.2 — Delete the Google-related DNS records in Cloudflare**
- [ ] Cloudflare dashboard → your zone (jimpaul.net) → DNS → Records.
- [ ] Screenshot/note all current records first (backup).
- [ ] Delete: CNAME `www` → `ghs.googlehosted.com` (this is what points www to Google Sites).
- [ ] Delete: TXT `@` → `google-site-verification=...` (optional — keep if you use Google Search Console for SEO).
- [ ] Delete: any A/AAAA records for `@` pointing to Google IPs or redirect services (e.g., 192.0.2.1, 174.129.25.170).
- [ ] **Do NOT delete MX records** if you use email on this domain. Do NOT delete the zone itself.

**Step 2.7.3 — Add the custom domain in Cloudflare Pages**
- [ ] Cloudflare dashboard → Workers & Pages → your Astro project → Custom domains → Set up a domain.
- [ ] Enter `jimpaul.net` (the apex, not www) → Continue.
- [ ] Because jimpaul.net is already a Cloudflare zone, Pages **auto-creates a CNAME** record `jimpaul.net` → `<project>.pages.dev` with the proxy (orange cloud) enabled. Verify it appears in DNS → Records.
- [ ] Wait for SSL certificate provisioning (~5 minutes).

**Step 2.7.4 — Set up www redirect (recommended)**
- [ ] Option A (simpler): Cloudflare → Rules → Page Rules → create: URL pattern `www.jimpaul.net/*` → Forwarding URL `301` → `https://jimpaul.net/$1`.
- [ ] Option B: In Pages → Custom domains → add `www.jimpaul.net` as a second custom domain (auto-creates the www CNAME).

**Step 2.7.5 — Configure SSL/TLS**
- [ ] Cloudflare → SSL/TLS → Overview → set mode to **Full (strict)**.
- [ ] Enable **Always Use HTTPS** and **Automatic HTTPS Rewrites** on the same page.
- [ ] If you get 525/526 errors, drop to **Full** temporarily.

**Step 2.7.6 — Verify**
- [ ] Visit `https://jimpaul.net` in incognito → new Astro site loads with valid SSL.
- [ ] Visit `https://www.jimpaul.net` → redirects to bare domain (if configured).
- [ ] Run `nslookup jimpaul.net` → resolves to Cloudflare IPs.
- [ ] Test email if applicable (MX records were preserved).

**Step 2.7.7 — Cleanup (2–4 weeks later)**
- [ ] After confirming the new site is stable, unpublish or delete the old Google Site (Settings → Publish → Unpublish, or Settings → Remove site). The old site remains reachable at `sites.google.com/view/<sitename>` in the meantime.

**Gotchas:**
- **Proxy status matters:** Google Sites needed DNS-only (grey cloud); Cloudflare Pages needs proxied (orange cloud). Pages auto-creates it proxied — do NOT switch it to grey or you'll get 522 errors.
- **SSL/TLS mode:** may be set to Flexible from the Google Sites era — must be Full or Full (strict) for Pages.
- **Google Sites may remember the mapping for up to 48 hours** after you delete it — that's why you remove it in Sites settings (2.7.1) before touching DNS.
- **CAA records:** if you have CAA records restricting certificate issuance, add `letsencrypt.org` and `pki.goog` or Cloudflare can't provision SSL.
- **Cache:** purge everything in Cloudflare → Caching after migration; old Google assets may linger at the edge for up to a week.

**Build budget note:** Free tier = 500 builds/month. To avoid burning builds on docs-only changes, add `[Skip CI]` to commit messages for documentation-only commits.

### Step 2.8 — Move these docs into the repo
- [x] Copied `AGENTS.md`, `action-plan.md`, `progress.md`, `README.md` into the `jimpaul-website/` folder. Removed scaffold's `CLAUDE.md` to keep `AGENTS.md` as the single source of truth. Repo root is now `jimpaul-website/`.
- [ ] Commit and push so they live with the code (pending Step 2.5 — needs GitHub repo).

---

## Phase 3 — 14-day proposal commitment (behavior, not docs)

Target 10–15 proposals in 14 days (5 is too few — 2026 reply rate is ~2% due to AI-flooded proposals). AI-assisted drafting is allowed; fully automated submission is banned. Edit every AI draft manually before submitting.

- [ ] Day 1–2: send 2 proposals (FileMaker 2026 upgrade/migration + broader FileMaker development with AI as value-add).
- [ ] Day 3–5: send 2–3 proposals (FileMaker + AI integration).
- [ ] Day 6–8: send 2–3 proposals (n8n workflow, not FileMaker-only).
- [ ] Day 9–11: send 2–3 proposals (self-hosted tooling setup).
- [ ] Day 12–14: send 2–3 proposals (AI-assisted internal/web tools).
- [ ] After first win at $40/hr: raise rate to $45/hr.

---

## Phase 4 — Long-term (next 4 weekends, then ongoing)

### Weekend 1–4: build a custom FileMaker Data API MCP server
- [ ] Weekend 1: scope a minimal MCP server in **Node/TypeScript** (both reference repos are TS; the MCP SDK ecosystem is more mature in TS; and Node is already in your stack for Astro). Reference open-source examples: maxpetrusenko/filemaker-mcp-server, datacraftdevelopment/MCP-Claude-FileMaker (note: datacraftdevelopment also has MCP_RCC_SP, a newer rewrite).
- [ ] Weekend 2: implement core (list layouts, get/create/update/delete records, run script).
- [ ] Weekend 3: package it (README, install instructions), push to a public GitHub repo.
- [ ] Weekend 4: write it up as the first blog post on jimpaul.net/blog.

Scope note: a read-only MCP server (schema discovery + record queries) is ~1–2 weekends with opencode. Adding write tools + error handling + docs fills 3–4 weekends. If you're learning Node from scratch alongside Astro, budget an extra weekend.

### After the MCP server is live
- [ ] Add "Custom MCP server development" to Upwork + LinkedIn skills.
- [ ] Link the GitHub repo from the website About page + LinkedIn Featured.

### Ongoing
- [ ] Write mini blog posts (even 300 words) as you learn — rambles are fine.
- [ ] Keep all 3 surfaces aligned to the canonical copy in this file.
- [ ] Update `progress.md` after every session.