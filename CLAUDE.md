# FireHawk Brand Kit

Centralized design system and brand tokens for Contact BioSolutions' FireHawk product line. Published as `@contact-biosolutions/firehawk-brand-kit` on GitHub Packages.

## Quick Reference

| Key | Value |
|-----|-------|
| **Package** | `@contact-biosolutions/firehawk-brand-kit` v0.6.2 |
| **Registry** | GitHub Packages (private) |
| **Stack** | TypeScript 5, tsup, Tailwind CSS (v3 + v4 peer) |
| **Target** | ES2020 |
| **Output** | CJS + ESM + .d.ts |

## Development Commands

```bash
npm run build            # Build with tsup (CJS + ESM + types)
npm run dev              # Watch mode
npm run typecheck        # TypeScript validation
npm run process-assets   # Process brand assets
npm run validate-assets  # Validate assets only
npm run generate-tokens  # Regenerate token files
npm run optimize-assets  # Optimize asset files
```

## What This Package Exports

### Main entry (`import { ... } from '@contact-biosolutions/firehawk-brand-kit'`)

- `colors` -- Brand, semantic, and neutral color scales (50-900)
- `typography` -- Font families, sizes, weights, letter spacing
- `googleFontsUrl` -- Pre-built Google Fonts URL for Roboto family
- `spacing`, `borderRadius`, `boxShadow` -- Layout tokens
- `tailwindConfig` -- Programmatic Tailwind config object
- Type exports: `BrandColors`, `SemanticColors`, `Typography`, `Spacing`

### Sub-path exports

- `@.../firehawk-brand-kit/tailwind/preset` -- Drop-in Tailwind preset
- `@.../firehawk-brand-kit/css/base.css` -- CSS custom properties (`--cb-*`)

## Official Brand Colors (2025, Chase Design Group)

| Name | Hex | PMS | Usage |
|------|-----|-----|-------|
| Deep Green | `#10392C` | 627C | Primary, headings, CTAs |
| FireHawk Orange | `#EB5412` | 1655C | Secondary, accents |
| Pale Green | `#CAE098` | 365C | Backgrounds, highlights |
| Off White | `#F7F4EE` | Cool Gray 1C | Page backgrounds |
| Dandelion Yellow | `#FBBC00` | 7548C | Alerts, badges |

Color scales (`primary`, `secondary`, `accent`) run 50-900.

## Typography

| Role | Font | Weight |
|------|------|--------|
| Headlines | Roboto Condensed | Black (900) |
| Sub-headings | Roboto Serif | Medium (500) |
| Body | Roboto | Regular (400), Bold (700) |

All served via Google Fonts. Use `googleFontsUrl` export for the `<link>` tag.

## Architecture

```
src/
├── index.ts              # Main exports
├── tokens/
│   ├── colors.ts         # Brand + semantic + neutral scales
│   ├── typography.ts     # Font config + googleFontsUrl
│   └── spacing.ts        # Spacing, border-radius, shadows
├── types/
│   ├── colors.ts         # BrandColors, SemanticColors
│   ├── typography.ts     # Typography
│   └── spacing.ts        # Spacing
├── tailwind/
│   ├── preset.js         # Tailwind preset (fonts, colors, animations)
│   └── config.ts         # TypeScript config object
├── css/
│   └── base.css          # CSS custom properties
└── assets/
    ├── logos/             # Primary logo (PNG)
    └── icons/             # Decorative, UI, industry SVGs
```

## Consumers

This package is a shared dependency. Changes here affect:

- **agronomy-site** (Next.js) -- uses Tailwind preset and CSS base
- **firehawk-cms** (Sanity Studio) -- uses color tokens

Test downstream builds after any token or preset changes.

## CI/CD

GitHub Actions workflows in `.github/workflows/`:
- `publish.yml` -- Builds, typechecks, publishes to GitHub Packages on push to main/tags
- `ci.yml` -- CI checks
- `process-assets.yml` -- Asset processing pipeline

## Conventions

- Token values go in `src/tokens/`, types in `src/types/`
- CSS custom properties use `--cb-` prefix
- Tailwind classes use standard naming: `bg-primary-600`, `text-secondary-500`
- Asset files follow naming in `src/assets/README.md`
- Don't modify official brand colors without design team approval
