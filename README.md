# Claire Benson Idoko — Website

React + Vite + Tailwind. Static frontend, no backend, no Replit dependencies.

## Run it

```bash
npm install
npm run dev        # opens at http://localhost:5173
```

## Build for deployment

```bash
npm run build      # outputs to /dist
npm run preview    # test the production build locally
```

Upload the `dist` folder to any static host (Vercel, Netlify, Cloudflare Pages), or connect the repo and use `npm run build` with output directory `dist`.

## Set your Selar and SavvyCal links (do this first)

Open `src/config.ts` and replace the two placeholder URLs:

- `SELAR_BOOK_URL` — your book's Selar product page
- `SAVVYCAL_URL` — your SavvyCal scheduling link for consultations (empty for now; the "Book me now" button does nothing until you add it)

The "Buy Book" and "Book me now" buttons open those links in a new tab.

## Where things live

- `src/App.tsx` — all page sections
- `src/index.css` — styles and colours (CSS variables at the top)
- `src/assets/` — hero and biography portraits
- `public/gallery/` — gallery photos (gallery-1.jpg … gallery-10.jpg)
- `src/config.ts` — links, email, consultation price
