# Juno Marlow: artist website template

A website template for a painter or illustrator, by Whelk Works (React + Vite). White background, sketchy hand-drawn frames, pops of sage, blue and violet.

- **Home** (`/`): hero with framed paintings, gallery with medium filters and a lightbox, about, commissions and contact.
- **Shop** (`/shop`): print shop with sizes and a working cart.
- **Shows** (`/shows`): shows and events calendar with an upcoming list and type filters.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # http://localhost:4173/artTemplate/
```

## Make it a client's

- **Pages:** `src/pages/Home.jsx`, `Shop.jsx` and `Shows.jsx`. They were generated from the design mockup, so the copy and layout are inline and can be edited directly.
- **Data:** artworks, prints and events are arrays near the top of each page (inside the `Component` class).
- **Colors:** `src/theme.js` (`ink`, and `pop` for the sage green).
- **Photos:** `public/images/`. Keep the file names or update the paths.
- **Copy:** anything in `[brackets]` is a placeholder.

## Before launch

- **Paintings and portrait:** use the artist's own work and photo, with their permission. Most placeholder images carry Unsplash+ watermarks, and Lilac Hour shows another painter's signature, so none of them can go live as-is.
- **Cart and forms:** the cart, commission form and RSVP buttons are front-end only. Connect them to a shop (Shopify Buy Button, Square, Big Cartel) and a form service such as Formspree.
- **Deploy:** GitHub Actions builds and deploys the site to GitHub Pages whenever changes are pushed to `main`. In the repository's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. The build is set up for `https://madscalls.github.io/artTemplate/` (`BASE` in `vite.config.js`); change it to `/` for a custom domain or Cloudflare Pages. A copy of `index.html` is saved as `404.html` so `/shop` and `/shows` load on refresh.
