# Miguel Suarez Personal Site

Personal website built with Astro and React, focused on writing, talks, and projects.

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
- `src/pages/*.astro` files are top-level routes (`/`, `/about`, `/blog`, `/speaking`, `/projects`).
- Each page composes semantic sections (`section`, `h1`, `h2`, cards) and reuses shared layout styles.

3. Reusable Astro components
- `src/components/Header.astro`, `NavMenu.astro`, `Footer.astro`, and `SocialLinks.astro` provide site chrome and navigation.
- Component styles are isolated with `*.module.css` files.

4. Interactive React island
- `src/components/CookieConsentModal.tsx` is a client-side React component loaded with `client:load`.
- It handles consent persistence in `localStorage`, focus trapping, and keyboard interactions.

5. Centralized content/config
- `src/data/site.ts` stores site metadata, nav items, social links, and CV path.

6. Styling system
- `src/styles/global.css` defines design tokens (colors, spacing), light/dark themes, resets, accessibility helpers, and shared utility classes.
- CSS Modules handle component-local styles to avoid style leakage.

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

## Commands

All commands are run from project root:

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build static production output |
| `npm run preview` | Preview production build locally |
| `npm run astro -- --help` | Show Astro CLI help |

## Testing

There is currently no automated test setup in this repository (no test scripts or test config files).

