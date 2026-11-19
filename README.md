# Clement Yu — personal site

A minimalist, scrapbook-flavoured personal site. Plain HTML/CSS/JS — no build step, no framework.

## Run it
Just open `index.html` in a browser. That's it.

## Add your headshot
1. Drop a square-ish photo named `headshot.jpg` next to `index.html`.
2. In `index.html`, find the `.polaroid__photo` block and swap the placeholder `<span>` for:
   ```html
   <img src="headshot.jpg" alt="Clement Yu" />
   ```

## Customize
- Colors live at the top of `styles.css` under `:root` (paper, ink, accent).
- Each project is a `<article class="card">` in `index.html`. The `--tilt` style on each card controls its scrapbook rotation.

## Files
- `index.html` — all content
- `styles.css` — all styling
- `script.js` — a small scroll-in effect (respects reduced-motion)
