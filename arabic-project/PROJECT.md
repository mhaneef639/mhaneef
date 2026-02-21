# Arabic Bilingual Project — mhaneef.github.io

**Goal:** Full Arabic version of the site, language switcher in navbar, all pages + all blog posts.
**Launch:** All at once after everything is done. No rush.
**Font:** TBD — Mohammed to pick from web options (likes Al Bayan feel).
**Architecture:** Jekyll `_data/i18n/` for UI strings + `/ar/` folder for full Arabic pages.
**RTL:** `dir="rtl" lang="ar"` on all Arabic pages.
**Translation workflow:** David drafts → email to mhaneef@cosmicleague.net → Mohammed corrects → David integrates.

---

## Task Board

### ✅ Done
- [ ] (nothing yet)

### 🔄 Awaiting Mohammed's Reply
- **TASK-01** — UI Strings (nav, footer, buttons, section labels) — sent 2026-02-21

### 📋 Queued (David will start after TASK-01 is approved)
- TASK-02 — Homepage body content
- TASK-03 — About page
- TASK-04 — Services page
- TASK-05 — Portfolio page
- TASK-06 — Contact page
- TASK-07 — Blog post #1: Why I'm Starting with Clarity Sessions
- TASK-08 — Blog post #2: What AI Is Actually Filtering For
- TASK-09 — Blog post #3: My Homepage Needed a Clarity Session
- TASK-10 — Blog post #4: A Governance System for Attention

### 🔧 Technical (David does solo, no translation needed)
- [x] Add `_data/i18n/en.yml` and `_data/i18n/ar.yml` ✅ 2026-02-21
- [x] Create `/ar/` folder scaffold (index, about, services, portfolio, contact, blog) ✅ 2026-02-21
- [x] Add language switcher to `nav.html` ✅ 2026-02-21
- [x] RTL stylesheet block for Arabic pages ✅ 2026-02-21
- [x] Arabic font (Cairo) loaded in `head.html` for Arabic pages ✅ 2026-02-21
- [x] `default.html` lang/dir attributes from page front matter ✅ 2026-02-21
- [x] `footer.html` i18n strings ✅ 2026-02-21
- [x] All EN pages: `ar_url` front matter for switcher routing ✅ 2026-02-21
- [ ] Arabic post layout (after TASK-07 approved)
- [ ] Blog `/ar/blog/` individual post pages (TASK-07 through TASK-10)

---

## File Map

| Page | English source | Arabic target |
|------|---------------|---------------|
| Home | `index.html` | `ar/index.html` |
| About | `about.html` | `ar/about.html` |
| Services | `services.html` | `ar/services.html` |
| Portfolio | `portfolio.html` | `ar/portfolio.html` |
| Contact | `contact.html` | `ar/contact.html` |
| Blog index | `blog/index.html` | `ar/blog/index.html` |
| Post 1 | `_posts/2026-02-08-why-im-starting-with-clarity-sessions.html` | `ar/_posts/` |
| Post 2 | `_posts/2026-02-12-what-ai-is-actually-filtering-for.md` | `ar/_posts/` |
| Post 3 | `_posts/2026-02-18-my-homepage-needed-a-clarity-session.md` | `ar/_posts/` |
| Post 4 | `_posts/2026-02-19-governance-system-for-attention.md` | `ar/_posts/` |

---

## Translation Log

| Task | Sent | Received | Integrated |
|------|------|----------|------------|
| TASK-01 UI strings | 2026-02-21 | — | — |
