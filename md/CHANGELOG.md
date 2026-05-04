# Changelog

All notable changes to the RecycleLacrosse website are tracked here.

---

## [0.2.0] — 2026-05-01

### Added
- Radix UI Themes with `accentColor="grass"` applied site-wide
- Founder photo (Elijah Elliott) on About page
- Gear image grid on home page (heads, shafts, helmets, pads)
- Utah location and Elijah Elliott name throughout the site
- $25 price for workout handles on home, how-it-works, and donate pages
- Melt/remold note: "only when enough scraps are collected"
- `md/` folder with CHANGELOG, BUSINESS_MODEL, and AI_AGENT docs
- `public/images/` folder with founder photo

### Changed
- All pages rebuilt with Radix UI components (Box, Flex, Heading, Text, Card, Badge, Button)
- Footer updated with Utah + Elijah Elliott credit
- Donate page copy: "Elijah will contact you" flow
- How It Works page: workout handles show $25 price

### Fixed
- Hockey emoji 🏒 → lacrosse emoji 🥍
- `React.FormEvent` (deprecated) → `React.SyntheticEvent`
- Tailwind v4 canonical class syntax: `bg-[var(--grass-9)]` → `bg-(--grass-9)`
- Removed unused `Text` import from Navbar

---

## [0.1.0] — 2026-05-01

### Added
- Initial Next.js 16 + TypeScript + Tailwind CSS scaffold
- Home page: hero, stats bar, 3-program cards, CTA section
- How It Works page: process steps + 3 program tracks
- About page: founder story + values grid
- Donate page: gear submission form with success state
- Sticky responsive Navbar + Footer
