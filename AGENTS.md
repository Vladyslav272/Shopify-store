# VeaSkin Shopify Theme

This is a repository containing Shopify storefront theme for store VeaSkin. VeaSkin sells red light eye massager for women.

The store ID is: `h80p2u-8v`.

The store is on 2 markets and 1 domain:

- Czech and Slovak (`softies.cz`, Czech language, EUR + CZK)

While developing you can use Playwright MCP to see what you are doing. To turn on the development server run: `shopify theme dev -e veaskin`.

Theme development guidance (the mandatory `learn_shopify_api` call, theme architecture, `{% schema %}` practices, the Liquid reference, translation and localization standards, and example assets) has moved to [`docs/README.md`](docs/README.md). Open it before working on theme code; it links to one file per topic.

You are connected do the Shopify backend data through Shopify CLI so you can change things on store directly.

Currently the store and the theme is in development so commit and push everything on `main`.

## Project Agent Skills

This project uses project-level Agent Skills managed via `skills-lock.json` and located in `.agents/skills/`. The agent must automatically follow and apply the relevant skill when working in each respective area:

- **`shopify`**: Use automatically when running Shopify CLI commands, interacting with Shopify APIs, configuring environments, or modifying store backend settings.
- **`shopify-liquid-themes`**: Use automatically whenever creating or editing Shopify theme files (`.liquid` templates, sections, blocks, snippets), schema definitions (`{% schema %}` JSON), LiquidDoc, or Liquid filters/tags.
- **`liquid-theme-standards`**: Use automatically when writing CSS, JavaScript, Web Components, or HTML in theme assets or `.liquid` files (following BEM, design tokens, custom properties, and progressive enhancement).
- **`liquid-theme-a11y`** & **`accessibility`**: Use automatically when developing or modifying interactive storefront UI elements (cart drawers, modals, product carousels, form controls, filters, accordions) to ensure WCAG 2.2 accessibility standards.
- **`web-design-guidelines`**: Use automatically when reviewing or creating storefront UI/UX, layouts, typography, visual hierarchy, and styling to preserve premium e-commerce standards.
- **`web-perf`**: Use automatically when auditing or optimizing storefront loading speed, asset bundles, Core Web Vitals (LCP, CLS, INP), and Lighthouse performance.
- **`playwright-cli`**: Use automatically when automating browser interactions, writing/running end-to-end tests, or verifying UI workflows with Playwright.
