# Theme development guide

🚨 MANDATORY: YOU MUST CALL "learn_shopify_api" ONCE WHEN WORKING WITH LIQUID THEMES.

**Key principles: focus on generating snippets, blocks, and sections; users may create templates using the theme editor**

Open only the file the task needs.

## Theme structure

| File | Read it when |
| --- | --- |
| [Theme architecture](theme-architecture.md) | You are deciding where code belongs (`sections`, `blocks`, `snippets`, `layout`, `config`, `assets`, `locales`, `templates`), or need the CSS/JS tag and LiquidDoc rules |
| [The `{% schema %}` tag](schema.md) | You are adding or changing settings on a section or block |
| [Examples per kind of asset](examples.md) | You need a complete reference `snippet`, `block` or `section` to copy from |
| [Colors](colors.md) | You are styling anything: palette, semantic tokens, color schemes and contrast rules |

## Liquid

| File | Read it when |
| --- | --- |
| [Liquid syntax](liquid-syntax.md) | You need delimiters, whitespace trimming, operators, or variable tags |
| [Liquid filters](liquid-filters.md) | You need a filter's signature and return type |
| [Liquid objects](liquid-objects.md) | You need to know which objects are available globally or on a given page |
| [Liquid tags](liquid-tags.md) | You need a tag's syntax and constraints (`content_for`, `render`, `for`, `form`, …) |

## Text and languages

| File | Read it when |
| --- | --- |
| [Translation development standards](translations.md) | You are adding user-facing text, which must go through the `t` filter |
| [Localization standards](localization.md) | You are working in `locales/`: file layout, key organization, naming |
