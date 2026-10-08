# Ryan Rahman — personal research website

A static, responsive website. No framework or build step is required.

- `index.html`: introduction and selected work.
- `experience.html`, `preprints.html`, `writing.html`: dedicated section pages.
- `research.html`: full research descriptions, architectures, media, and results.
- `preprints/`: three standalone papers and reports, with original print styles.
- `assets/site.css`: homepage and research design and responsive rules.
- `assets/legacy.css`: supporting styles for existing technical figures and notes.
- `assets/paper.css`: shared screen styles for the papers.
- `assets/`: original project media, derived poster/still images, results graphic, and CV.

The design uses Instrument Sans (Google Fonts, with a sans-serif fallback), system monospace metadata, warm off-white, and blue links. Anchor navigation works without JavaScript. Each page marks its current navigation link. Legacy homepage section links redirect to the corresponding pages.

## Local preview

Run `python -m http.server 8765` in this directory, then open http://localhost:8765.

## Content updates

Edit HTML directly. Preserve accurate project status labels: the backbone study is a preprint with single-seed simulation results, Origami-MoH is a research proposal, and Rocky is an engineering project. The selected-work graphic uses the backbone study's reported 82.2% and 76.3% mean success rates.

Replace `assets/ryan-rahman-cv.pdf` to update the CV. The current copy was supplied on 8 October 2026 and is dated 18 September 2026. Update the footer date when content changes.

## Deployment

Publish the HTML pages and assets together on the existing static host. No build command is needed. `index_artifact.html` is a legacy preview export and is not used by the site. `review/` contains local QA artifacts and is excluded from Git.

Before publishing, review at 390, 768, and 1440 px widths; check keyboard navigation, local links, CV loading, and video playback. Publishing is separate from local editing.
