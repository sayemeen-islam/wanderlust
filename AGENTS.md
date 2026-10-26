<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wanderlust

Single Next.js app (no monorepo, backend, test runner, or CI). UI work starts in `src/app`.

## Commands

- Use npm (`package-lock.json` is the lockfile).
- `npm run dev` — Turbopack dev server on port 3000.
- `npm run build` — production build; also runs TypeScript checking.
- `npm run lint` — ESLint flat config. Single file: `npx eslint src/app/page.tsx`.
- `npx tsc --noEmit` — typecheck only; there is no `typecheck` script.
- Verify changes with `npm run lint`, then `npx tsc --noEmit`, then `npm run build`.
- No test framework or `test` script is configured; do not introduce one unasked.
- On this Windows/PowerShell setup, `npm.ps1` is blocked by execution policy; use `npm.cmd` / `npx.cmd` if `npm` / `npx` is rejected.

## Structure and conventions

- App Router under `src/app`; path alias `@/*` maps to `src/*` (`tsconfig.json`).
- Tailwind CSS v4 is CSS-first: there is no `tailwind.config.*`. Theme tokens, shadcn variables, and global styles live in `src/app/globals.css`.
- shadcn is configured for the `base-nova` style (`components.json`). `src/components/ui/*` are generated primitives built on Base UI (`@base-ui/react`), **not** Radix. Prefer `npx shadcn add <component>` over hand-writing primitives.
- Generated UI imports `cn` from the `cn` npm package; `src/lib/utils.ts` only re-exports it.
- Root layout loads Josefin Sans via `next/font/google` and owns the `<html>` / `<body>` classes.

## Next.js 16-specific constraints

- `next.config.ts` enables Cache Components, Partial Prefetching, and React Compiler; builds use Turbopack (Tailwind via the `@tailwindcss/turbopack` CSS rule).
- Cache Components/PPR are active: dynamic data must be under `<Suspense>` or cached with `"use cache"`. Do not add removed `experimental.ppr` / `experimental_ppr` config, and do not add a `runtime` route-segment export (Cache Components is Node-only).
- Request APIs are async-only: await `params`, `searchParams`, `cookies()`, and `headers()`. Type routes with the generated globals `PageProps<'/route'>`, `LayoutProps<'/route'>`, and `RouteContext<'/route'>` — they are not imported.
- `.next/` and `next-env.d.ts` are generated; do not edit them.
