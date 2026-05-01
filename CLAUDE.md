# AI Assistant Bridge — soybean-ui

`.github/` is the single source of truth. If this file conflicts with `.github/`, `.github/` wins.

## Universal rules (read for every edit)

- `.github/instructions/import-order.instructions.md`
- `.github/instructions/typescript-functional-style.instructions.md`
- `.github/instructions/vue-sfc.instructions.md` (for .vue files)

## Component work (editing `headless/` or `src/components/`)

- `.github/instructions/soybean-ui-component-overview.instructions.md`
- `.github/instructions/soybean-ui-headless.instructions.md` (for `headless/src/components/`)
- `.github/instructions/soybean-ui-ui-layer.instructions.md` (for `src/components/`)
- `.github/instructions/soybean-ui-accessibility-rtl.instructions.md`

## Delivery surfaces

- `.github/instructions/soybean-ui-playground.instructions.md` (for `playground/`)
- `.github/instructions/soybean-ui-docs.instructions.md` (for `docs/`)
- `.github/instructions/soybean-ui-testing.instructions.md` (for `test/`)

## Commit / changelog

- `.github/instructions/git-commit-convention.instructions.md`

## Architecture constraints — never violate

- Data flow: `headless/` → `src/` only. Never import `@soybeanjs/ui` from `headless/`
- No CSS classes or `<style>` blocks in headless SFCs
- No ARIA / `role` / `tabindex` / keyboard handlers in `src/` (UI layer)
- Never use `any`, `@ts-ignore`, `@ts-expect-error`
- Context values must be `ComputedRef` or `ShallowRef` — never plain reactive primitives
- `variants.ts` must start with `// @unocss-include`
- Never export `use{Name}Ui` from headless barrel; only export `provide{Name}Ui`
