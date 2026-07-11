# Rebecca Akinlade — Portfolio

A Next.js portfolio site for a Machine Learning Engineer / Data Scientist, built with
the App Router and plain CSS (no framework).

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  layout.js          — root layout, fonts, metadata
  page.js             — assembles all sections
  globals.css         — all styling (design tokens at the top)
  components/
    Nav.js
    Hero.js
    About.js
    Projects.js        — project data lives here, edit to add/update projects
    ProjectCard.js
    Skills.js
    Contact.js
    Reveal.js           — scroll-reveal animation wrapper (client component)
```

To update project details, metrics, or links, edit the `PROJECTS` array at the top of
`app/components/Projects.js` — nothing else needs to change.

## Deploy to Vercel

**Option A — via GitHub (recommended):**
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new, sign in with GitHub, and import the repository.
3. Vercel auto-detects Next.js — leave the defaults and click **Deploy**.
4. Your site goes live at `your-project.vercel.app`. Add a custom domain later from the
   project's Settings → Domains tab if you want one.

**Option B — via Vercel CLI:**
```bash
npm install -g vercel
vercel
```
Follow the prompts; it will deploy directly from this folder without needing GitHub.

## Notes

- Fonts (Fraunces, Inter, JetBrains Mono) load via `next/font/google`, so there's no
  external font request at runtime — they're bundled at build time.
- The pulse/ECG animation and metric bar-fills respect `prefers-reduced-motion`.
- Update the email address and GitHub links in `app/components/Contact.js` and
  `app/components/Hero.js` if either changes.
