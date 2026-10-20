# Milena Suárez — Personal Site

Personal website of Milena Suárez, software engineer focused on scalable, accessible frontend solutions. Built with Astro and React.


## Tech Stack

- Astro 6
- React 19 via Astro React integration
- TypeScript
- CSS Modules + global CSS tokens

## Architecture

This project follows a layout-plus-pages architecture with one interactive React island:

1. Layout shell
- `src/layouts/BaseLayout.astro` wraps every page with document metadata, theme initialization, global styles, header, footer, and the cookie consent modal mount point.

2. Route pages
- `src/pages/*.astro` files are top-level routes (`/`, `/about`, `/speaking`, `/experience`, `/blog`).
- Each page composes semantic sections (`section`, `h1`, `h2`, cards) and reuses shared layout styles.
- Pages render their lists from the data files in `src/data/`, so content changes rarely require touching markup.

3. Reusable Astro components
- `src/components/Header.astro`, `NavMenu.astro`, `Footer.astro`, and `SocialLinks.astro` provide site chrome and navigation.
- Component styles are isolated with `*.module.css` files.

4. Interactive React island
- `src/components/CookieConsentModal.tsx` is a client-side React component loaded with `client:load`.
- It handles consent persistence in `localStorage`, focus trapping, and keyboard interactions.

5. Centralized content/config
- `src/data/site.ts` stores site metadata, role tagline, nav items, social links (LinkedIn, GitHub, email), and CV path.
- `src/data/experience.ts` stores jobs, community & volunteering roles, skills, and education (sourced from the CV).
- `src/data/talks.ts` stores every talk with year, event, topics, language, and links (video, slides, event, recap).

6. Styling system
- `src/styles/global.css` defines design tokens (colors, spacing, radii), light/dark themes, the top-of-page gradient, resets, accessibility helpers, and shared classes (`.btn`, `.card`, `.cards`, `.chip`, `.eyebrow`, `.section-head`).
- CSS Modules handle component-local styles to avoid style leakage.
- Page-specific styles live in `<style>` blocks inside each page.

## Rendering Strategy: SSG, SSR, ISR, CSR

Current behavior in this repository:

- SSG: Yes (primary mode)
	- Astro is running in static output mode because no server adapter or server output mode is configured in `astro.config.mjs`.
	- Pages in `src/pages/*.astro` are pre-rendered at build time.

- SSR: No (not currently enabled)
	- There is no SSR adapter and no server output configuration.

- ISR: No (not currently enabled)
	- Astro does not provide Next.js-style ISR by default in this static setup.
	- Equivalent on-demand/server rendering patterns would require switching to server output and an adapter strategy.

- CSR: Partial (islands only)
	- The site is not a full CSR SPA.
	- Client-side rendering/hydration happens only for interactive islands, currently the cookie consent modal via `client:load`.

In short: this project is primarily SSG with selective CSR islands.

## Updating content

| To change… | Edit |
| :--------- | :--- |
| Name, tagline, nav, social links | `src/data/site.ts` |
| Add a talk | Add an entry to `talks` in `src/data/talks.ts` (set `featured: true` to highlight it) |
| Jobs, volunteering, skills | `src/data/experience.ts` |
| Home page intro, "What I do" cards, stats | `src/pages/index.astro` |
| Bio and fun facts | `src/pages/about.astro` |
| CV download | Replace `public/cv-milena-suarez.pdf` (keep the file name) |
| Profile photo | Replace `public/images/profile.jpg` |

## Accessibility

- Every text/background color pair in both themes meets WCAG 2.2 AA (4.5:1); body text and links meet AAA (7:1). When changing tokens in `global.css`, re-check contrast for both light and dark themes.
- Keyboard: skip link, visible focus ring in both themes, focus-trapped cookie dialog.
- External links announce "opens in a new tab" to screen readers; decorative icons are `aria-hidden`.
- Animations are disabled when the user prefers reduced motion.

## Commands

All commands are run from project root:

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build static production output |
| `npm run preview` | Preview production build locally |
| `npm run astro -- --help` | Show Astro CLI help |

The Astro dev toolbar is disabled in `astro.config.mjs` (`devToolbar.enabled: false`).

## Testing

There is currently no automated test setup in this repository (no test scripts or test config files).

