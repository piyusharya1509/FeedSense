# Frontend

React + TypeScript + Vite UI for InsurePulse, styled with Tailwind CSS v4.

## Setup

```bash
cd frontend
bun install
```

## Run the dev server

```bash
bun run dev
```

Serves on `http://localhost:5173` and expects the backend API at `http://localhost:8000` (see [../backend](../backend)).

## Other scripts

```bash
bun run build     # type-check and production build
bun run lint       # eslint
bun run preview    # preview the production build
```

## Continuing work

- Entry point: [src/main.tsx](src/main.tsx) → [src/App.tsx](src/App.tsx).
- API calls should target the endpoints documented in [docs/expected-api.md](../docs/expected-api.md).
- Vite + Tailwind config: [vite.config.ts](vite.config.ts).
