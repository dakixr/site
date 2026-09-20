# Portfolio Site

A personal portfolio website for Daniel Rodríguez Mariblanca, showcasing projects, skills, and CV.

## Getting Started

```bash
pnpm install
pnpm dev
```

## Running with Docker

You can run the app in a Docker container:

```bash
docker build -t dakixr-site . && docker run -p 3000:3000 dakixr-site
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- Project showcase
- Skills section
- Downloadable CV
- Contact form
- Responsive design

## Portfolio content

- Experience is in `src/components/Timeline.tsx`. Keep employer roles and client missions distinct.
- Project summaries and detail pages share `src/lib/projects.ts`. The `/projects.md` route exposes the same public notes as Markdown.
- `public/daniel_cv.md` and `public/daniel_cv.pdf` mirror the canonical CV in `../cv`. Replace both when updating the CV. The PDF download and legacy GET endpoint serve the approved one-page document; the editor's POST endpoint still renders custom Markdown.
- No deployment credentials or machine-specific fleet configuration belongs in public portfolio content.
