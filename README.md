# Claire Benson Idoko Portfolio

A standalone React and JavaScript portfolio built with Vite.

## Run locally

```bash
npm install
npm run dev
```

Vite will use port `5173` by default. Replit can still provide its own `PORT` and `BASE_PATH` values automatically.

## Where to edit

- **Page order:** `src/pages/Home.jsx`
- **Hero content:** `src/components/sections/Hero.jsx`
- **Biography:** `src/components/sections/About.jsx`
- **Book:** `src/components/sections/Books.jsx`
- **Impact figures:** `src/components/sections/ImpactAtGlance.jsx`
- **Initiatives:** `src/components/sections/Experience.jsx`
- **Mentorship:** `src/components/sections/Mentorship.jsx`
- **Writing and speaking:** `src/components/sections/Blog.jsx`
- **Press:** `src/components/sections/Press.jsx`
- **Contact and newsletter:** `src/components/sections/Newsletter.jsx`
- **Navigation:** `src/components/layout/Navbar.jsx`
- **Footer:** `src/components/layout/Footer.jsx`

## Change the colors

Open `src/index.css` and edit the values inside `:root`.

- `--background` controls the cream background.
- `--primary` controls the deep green.
- `--secondary` controls the brown accent.

The values use HSL format without the `hsl()` wrapper.

## Replace the photos

The current photos are stored in `src/assets`.

- `hero-portrait.jpg`
- `bio-portrait.jpg`

You can replace those files while keeping the same names, or update their import paths in the relevant section components.

## Connect the newsletter later

The newsletter is intentionally a local placeholder and sends no visitor data.

Open `src/components/sections/Newsletter.jsx` and find:

```js
// TODO: Connect this form to your mailing-list provider here.
```

Replace the local placeholder logic in `handleNewsletterSubmit` with your mailing-list provider code.

## Change the contact email

Edit the `CONTACT_EMAIL` value near the top of `src/components/sections/Newsletter.jsx`.

## Build for production

```bash
npm run build
```