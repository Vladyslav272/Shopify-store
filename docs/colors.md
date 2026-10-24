# Colors

All colors live in [`snippets/theme-colors.liquid`](../snippets/theme-colors.liquid). It is rendered in `layout/theme.liquid` and `layout/password.liquid` and overrides **Theme settings > Colors**: editing schemes in the theme editor has no effect on the storefront.

Direction: light, warm and playful for parents shopping for kids. The palette is mostly orange: bright orange for actions and highlights, pale orange tints for section backgrounds and burnt orange for the dark footer. Text and neutrals are a warm espresso brown ("cocoa") instead of black or navy so nothing reads as cold. Avoid blues. Sunshine and berry are optional accents, and mint is only used for success messages.

## Layers

| Layer | Naming | Use it for |
| --- | --- | --- |
| Primitive | `--sf-<hue>-<step>`, e.g. `--sf-orange-500` | Never directly in sections. Only the semantic layer and the schemes reference them |
| Semantic | `--sf-color-<purpose>`, e.g. `--sf-color-primary` | Fixed brand colors in custom sections and blocks |
| Color schemes | `.color-scheme-N` sets `--color-background`, `--color-foreground`, `--color-button`, … | Anything that should follow the section's `color_scheme` setting |

Scheme variables are RGB triplets (`255,111,26`), so use them as `rgb(var(--color-foreground))` or `rgba(var(--color-foreground), 0.6)`. Semantic tokens are plain colors: for transparency use `color-mix(in srgb, var(--sf-color-primary) 20%, transparent)`.

Never hardcode hex values in sections, blocks or CSS assets. If a color is missing, add a primitive and a semantic token to `theme-colors.liquid`.

## Primitive palette

| Hue | Steps | Role |
| --- | --- | --- |
| `orange` | 50–900, brand is `500` `#FF6F1A` | Primary, CTAs, tints, dark footer |
| `cocoa` | 50–900, text is `900` `#2B1B12` | Text, borders, warm neutrals |
| `sun`, `berry` | 100 (tint), 400 or 500 (accent), 700 (text-safe) | Optional playful accents |
| `mint` | 100, 700 | Success messages only |
| `red` | 100, 600, 700 | Sale and errors |
| `white` | — | Default background |

## Semantic tokens

| Token | Value | Notes |
| --- | --- | --- |
| `--sf-color-background` | white | Page |
| `--sf-color-surface` / `-subtle` / `-brand` | orange-50 / cocoa-50 / orange-100 | Cards, panels, highlighted boxes |
| `--sf-color-text` / `-muted` / `-inverse` | cocoa-900 / cocoa-500 / white | |
| `--sf-color-border` / `-strong` | cocoa-100 / cocoa-200 | |
| `--sf-color-primary` | orange-500 | Solid CTA fill |
| `--sf-color-primary-hover` / `-active` | orange-400 / orange-600 | |
| `--sf-color-primary-soft` / `-strong` / `-deep` | orange-100 / orange-700 / orange-900 | Tinted backgrounds / orange text / dark brand areas |
| `--sf-color-on-primary` | cocoa-900 | Label on orange fills (see contrast) |
| `--sf-color-link` | orange-700 | |
| `--sf-color-focus` | orange-500 | Focus rings |
| `--sf-color-accent-{sun,berry}` (+ `-soft`) | 400 or 500 (+ 100) | Decorative only, never body text |
| `--sf-color-sale` | red-600 | |
| `--sf-color-notification` / `on-notification` | red-600 / white | Count badges such as the header cart bubble |
| `--sf-color-{success,warning,error,info}` (+ `-soft`) | mint-700, sun-700, red-600, orange-800 | Messages and validation |

## Color schemes

| Id | Name | Background | Button | Used by |
| --- | --- | --- | --- | --- |
| `scheme-1` | White | white | orange, cocoa label | Default, header, menu, cards, cart |
| `scheme-2` | Cream | orange-50 | orange, cocoa label | Alternating sections, slideshow boxes |
| `scheme-3` | Burnt orange | orange-900 | orange, cocoa label | Footer |
| `scheme-4` | Orange | orange-500 | cocoa, white label | Announcement bar, password page, bold brand sections |
| `scheme-5` | Cherry | red-600 | white, red label | Sale badge |
| `scheme-6` | Peach | orange-100 | orange, cocoa label | Soft brand sections |
| `scheme-7` | Apricot | orange-200 | cocoa, white label | Stronger brand sections |
| `scheme-8` | Sunshine | sun-100 | orange, cocoa label | Occasional accent sections |
| `scheme-9` | Berry | berry-100 | orange, cocoa label | Hello Kitty and similar lines |

Outline buttons and links use orange-700 on white and cream, orange-800 on peach, orange-200 on burnt orange, and cocoa on the other backgrounds.

To add or change a scheme, edit its `render 'theme-color-scheme'` call in `theme-colors.liquid`. Then mirror the hex values into `current.color_schemes` in `config/settings_data.json`, which keeps the swatches in the editor's scheme pickers accurate and makes a new id selectable. `templates/gift_card.liquid` still reads `scheme-1` from those settings.

## Contrast (WCAG 2.1)

The theme renders body text at 75% opacity of the scheme's text color, so the pairs below were also checked at that opacity.

- Cocoa on white: 16.6:1 (7.3:1 at 75%). Cocoa on every tint: ≥ 11:1 (≥ 5.8:1 at 75%).
- Orange-500 buttons use a **cocoa** label (6.0:1). White on orange-500 is only 2.8:1, so don't put white text on bright orange. If a white label is needed, use orange-700 as the fill (5.0:1).
- White on orange-900 (footer): 9.2:1 (5.9:1 at 75%). Don't use orange-700 for dark sections: white body text there drops to 3.5:1.
- Orange-700 text on white: 5.0:1; on cream: 4.7:1. On peach it drops to 4.3:1, so use orange-800 there (6.0:1).
- White on red-600 (sale badge, cart count bubble): 4.6:1.
- `cocoa-400` is for icons and borders only, not text. Use `cocoa-500` (5.6:1) for muted text.
