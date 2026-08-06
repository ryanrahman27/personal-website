# Ryan Rahman — Personal Website

A single-file, dependency-free personal site styled like a typeset research paper.
No build step, no framework, no external fonts — just `index.html`.

```
ryan-portfolio/
├── index.html                  ← the main site
├── preprints/
│   ├── diffusion-vla.html      ← Diffusion-VLA backbone study (full proposal)
│   └── origami-moh.html        ← Origami-MoH / IROS 2026 challenge (full proposal)
├── index_artifact.html         ← content-only copy for the Claude preview link (ignore for hosting)
└── README.md
```

Deploy the **whole folder** (except `index_artifact.html`, which is only for the Claude preview).
The Preprints section on the site links to the two pages under `preprints/`.

---

## Recommended hosting: Vercel

Since the site is one static file, Vercel is the simplest possible deploy. Two ways:

### Option A — CLI (fastest)
```bash
npm i -g vercel
cd ryan-portfolio
vercel          # first run: log in, accept defaults, framework preset = "Other"
vercel --prod   # promote to your production URL
```

### Option B — Dashboard (no terminal)
1. Push this folder to a GitHub repo (or just drag-and-drop the folder at **vercel.com/new**).
2. Framework Preset: **Other**. Build command: *none*. Output directory: `./`.
3. Deploy. You get `ryan-rahman.vercel.app` instantly.

### Custom domain
Buy a domain (e.g. `ryanrahman.ai`, `ryanrahman.dev`, or `rrahman.me`) and add it under
**Project → Settings → Domains**. Vercel walks you through the DNS records and issues HTTPS automatically.

---

## Other one-click options (all equally fine for a static file)

| Host | How | Notes |
|------|-----|-------|
| **GitHub Pages** | Push repo → Settings → Pages → deploy from `main` | Free, `username.github.io` |
| **Cloudflare Pages** | Drag-drop folder at pages.cloudflare.com | Fastest global CDN |
| **Netlify** | Drag-drop folder at app.netlify.com/drop | Instant preview URLs |

Any of these work with zero configuration because there is no build.

---

## Editing the content

Everything lives in `index.html`. Common edits:

- **Contact links** — top of `<body>`, the `.byline` block. Update your email, LinkedIn, and GitHub URL.
- **Add a project** — copy an `<h3 class="sub">` … `figure` … `.stats` block inside `<section id="research">`.
- **Add a paper** — append an `<li>` in `<ol class="refs">`; link the `[n]` markers from the text with `<a class="ref" href="#references">[n]</a>`.
- **Colors / fonts** — the `:root` token block at the top of `<style>`. Change `--accent`, `--paper`, `--ink`, or the `--serif` stack in one place.

After editing, just re-deploy (`vercel --prod`, or push to GitHub).

---

## Notes on choices I made

- **LinkedIn could not be read.** Your profile is behind LinkedIn's login wall and no signed-in
  browser was connected, so the Experience section is still built from your portfolio PDF, reformatted
  into LinkedIn-style prose (no bullets). Paste your current LinkedIn experience text and I'll sync it.
- **Experiences are prose, not bullets** — one description paragraph per role, matching LinkedIn.
- **Preprints** link to full standalone proposal pages (`preprints/*.html`), styled like printed papers.
  Both are marked "living document." The Origami one is also live as a Claude artifact you own.
- **Phone number omitted.** Your portfolio PDF lists a personal number; I left it off the public site
  on purpose (a phone number on a public page gets scraped for spam). Add it back in the `.byline`
  if you want it.
- **GitHub link is a placeholder** (`https://github.com/`). Drop in your real handle.
- **Email** is set to `r8rahman@uwaterloo.ca` (from your portfolio). Swap for `ryan@axibo.com` or any other
  if you prefer.
- **Fonts are system serifs** (Palatino / Iowan / Georgia) so the page needs no downloads and looks
  identical everywhere. If you want the true LaTeX "Computer Modern" look, I can swap in a self-hosted
  webfont later.
- **arXiv IDs** are transcribed exactly as they appear in your portfolio. Reference [1] (π0.5) links to
  Physical Intelligence's page since your portfolio didn't include its arXiv ID — double-check the links
  before you publish.
