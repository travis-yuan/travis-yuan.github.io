# Tianyi Yuan — Personal Academic Homepage

Bilingual (EN/中文, one-click toggle) static personal academic homepage for **Tianyi Yuan (袁天一)**.
Pure HTML/CSS/JS — no build step, no framework. Deployable to any static host
(GitHub Pages, Cloudflare Pages, Netlify, Vercel, ...).

## File layout

```
site/
├── index.html            # single-page site (all sections)
├── assets/css/styles.css # styling (light/dark, responsive)
├── assets/js/app.js      # i18n dictionary + publications/news/experience data
├── images/profile.jpg    # <-- drop your photo here (optional, auto-detected)
├── favicon.svg
└── robots.txt
```

- Profile photo: put `profile.jpg` into `images/`. Without it, a monogram placeholder is shown.

## Local preview

Any static server works. For example (Node.js, no dependencies):

```powershell
node ../tools/serve.js
```

then open http://127.0.0.1:8787

## Editing content

- All bilingual strings live in `I18N` in `assets/js/app.js` (keys `en` / `zh`).
- Publications, experience, news data arrays are at the top of the same file.
- Language toggle remembers the visitor's choice (localStorage) and defaults to English.

## Deploying

**GitHub Pages** (free, academic standard): push this `site/` folder to a public repo named
`<username>.github.io` and enable Pages (Settings → Pages → deploy from branch `main` / root).

**Cloudflare Pages** (faster from mainland China): Workers & Pages → Create → Pages →
"Upload assets" → drag the contents of this `site/` folder (not the folder itself).

## Content checklist (before going fully public)

See the parent folder files `05-上线前核对清单.md` — verify every DOI, fill in co-author
full names, and confirm the IJHCS/AIJ relationship before sharing the link widely.
