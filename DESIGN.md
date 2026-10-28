---
name: Otro Lunes
description: Plato de ceramica. Stone ground, glazed-ware surfaces with soft shadows, and a round plate that reads your goal back.
colors:
  piedra: "oklch(0.91 0.015 80)"
  piedra-hondo: "oklch(0.86 0.02 80)"
  loza: "oklch(0.98 0.008 85)"
  pizarra: "oklch(0.35 0.02 220)"
  pizarra-hondo: "oklch(0.28 0.02 220)"
  terracota: "oklch(0.52 0.13 45)"
  terracota-hondo: "oklch(0.45 0.13 45)"
  mostaza: "oklch(0.76 0.13 80)"
  celadon: "oklch(0.74 0.05 160)"
  tinta: "oklch(0.3 0.02 230)"
  tinta-suave: "oklch(0.47 0.02 240)"
  linea: "oklch(0.8 0.02 80)"
typography:
  title:
    fontFamily: "DM Serif Display, ui-serif, Georgia, serif"
    fontSize: "3.5rem"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title-mobile:
    fontFamily: "DM Serif Display, ui-serif, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  plate-goal:
    fontFamily: "DM Serif Display, ui-serif, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.25
  headline:
    fontFamily: "DM Serif Display, ui-serif, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  heading:
    fontFamily: "DM Serif Display, ui-serif, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  label:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
rounded:
  md: "6px"
  field: "16px"
  card: "24px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  gutter: "48px"
components:
  button-primary:
    backgroundColor: "{colors.terracota}"
    textColor: "{colors.loza}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.terracota-hondo}"
  button-secondary:
    backgroundColor: "{colors.loza}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.piedra-hondo}"
  input:
    backgroundColor: "{colors.loza}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.field}"
    height: "48px"
  segment:
    backgroundColor: "{colors.loza}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.field}"
    height: "48px"
  segment-selected:
    backgroundColor: "{colors.pizarra}"
    textColor: "{colors.loza}"
    rounded: "{rounded.field}"
    height: "48px"
  tab-selected:
    backgroundColor: "{colors.loza}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pill}"
    height: "44px"
  tablist:
    backgroundColor: "{colors.piedra-hondo}"
    rounded: "{rounded.pill}"
  notice:
    backgroundColor: "{colors.loza}"
    textColor: "{colors.tinta-suave}"
    rounded: "{rounded.field}"
    padding: "16px"
  board-tile:
    backgroundColor: "{colors.loza}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.field}"
    padding: "8px 16px"
    height: "64px"
  day-card:
    backgroundColor: "{colors.loza}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.card}"
  site-header:
    backgroundColor: "{colors.piedra}"
    textColor: "{colors.tinta}"
    height: "64px"
  plate:
    backgroundColor: "{colors.loza}"
    textColor: "{colors.terracota-hondo}"
    rounded: "{rounded.pill}"
---

# Design System: Otro Lunes

## Overview

**Creative North Star: "El plato de ceramica"**

The world is a ceramic plate on a stone counter, and it lends four things only: a warm display serif against a humanist sans, a palette of stone, glazed white, slate and terracotta, generous air with very round corners, and one signature move. It does not lend layout, navigation or controls. Those stay standard web: a 64px header with a step indicator, a 7/5 split, real radios, a real select, real tabs.

The signature is the plate: a round glazed plate with a sunken well that reads the visitor's goal back in terracotta serif as they choose, with seven dots for the days of the week. Six glazed cards below it hold the other answers. When a value changes it is "glazed" in with one short vertical wipe. On the plan page the same plate heads the plan. Everything else is quiet: surfaces have no border, depth comes from soft offset-and-blur shadows, buttons are pills.

Recognisable with no content at all: a round glazed plate with a sunken well, glazed cards below it, on stone. The earlier worlds (market-stall signboards in leaf green, mango and tomato; then a thick-bordered flat-colour attempt) were abandoned and nothing of them remains.

**Key Characteristics:**

- Borderless surfaces; soft shadows carry all depth.
- Serif voice for the wordmark, headings, day and meal names and the plate goal; sans for everything read or typed.
- Terracota fills the one primary action; slate marks selection and focus.
- State is never colour alone: Check plus fill for selected, icon plus text for errors, underline for the current step.
- One motion moment: the repaint wipe.

## Colors

A warm stone-and-glaze neutral field (hue 80 to 85) with a cool slate-ink for text and selection, and one clay-red for action.

### Primary

- **Terracotta** (`terracota`): the primary button fill, the text caret, the "Lunes" in the wordmark, the current-step underline.
- **Deep Terracotta** (`terracota-hondo`): primary hover, and every terracotta used as text on stone or glaze (goal on the plate, focus line on day cards, error text and error rings), darker for contrast.

### Secondary

- **Slate** (`pizarra`): selected segment fill, focus outline, accent-color of native controls. **Deep Slate** (`pizarra-hondo`): selected segment hover.

### Tertiary

- **Mustard** (`mostaza`) and **Celadon** (`celadon`): live only in the seven week dots (lit day in mustard, unlit in celadon at 60%). Mustard is also the text-selection highlight.

### Neutral

- **Stone** (`piedra`): page ground, header, theme-color. **Deep Stone** (`piedra-hondo`): secondary and segment hover, the tablist track.
- **Glaze** (`loza`): every raised surface (fields, segments, cards, notices, tiles, selected tab) and text on terracotta or slate.
- **Ink** (`tinta`): body text and the base colour of every shadow.
- **Soft Ink** (`tinta-suave`): supporting text, placeholders, hints, table headers.
- **Line** (`linea`): the 1px rules between meal rows and table rows, scrollbars.

### Named Rules

**The One Action Rule.** Terracotta fills only the primary action. Errors use deep terracotta as a 2px ring and as text with an icon, never as a fill.

**The Contrast Pair Rule.** Terracotta is a fill (white text on it); deep terracotta is the text colour on stone or glaze. Do not swap them.

**The Dots Only Rule.** Mustard and celadon appear in the week dots (and mustard as selection highlight). They are never a button, card or text colour.

## Typography

**Display Font:** DM Serif Display, weight 400 only (with ui-serif, Georgia, serif)
**Body Font:** Instrument Sans (with ui-sans-serif, system-ui, sans-serif)

**Character:** A warm, slightly formal serif that names things, against a plain humanist sans that does all the reading and form work. The serif never gets a bold weight.

### Hierarchy

- **Title** (400, 56px from `sm` up, 36px on mobile, line-height 1.05, -0.025em): the H1 on each page.
- **Headline** (400, 30px, line-height 1): the plate's own title ("Tu plato", plan title).
- **Plate goal** (400, 36px, balance-wrapped, terracotta-hondo): the goal at the centre of the plate; 20px in the compact mobile card.
- **Heading** (400, 24px): day names in the training plan and meal names in the nutrition plan; the wordmark is 20px, 30px from `sm`.
- **Body** (400, 16px, 1.5, max-w-prose for plan prose): prose, plan text, inputs. Figures are `tabular-nums`.
- **Label** (600, 14px): field labels, legends. Hints and table headers are 14px soft ink at 400 to 500.
- **Tile value** (600, 18px, tabular): the value in each glazed tile.

### Named Rules

**The Serif Names Rule.** DM Serif Display appears only on the wordmark, headings, meal and day names, and the plate goal. Never on buttons, labels, form text or body.

**The Tabular Rule.** Any figure the reader compares (inputs, tile values, sets and reps, the stepper numbers) is set `tabular-nums`.

## Layout

Template `StudioTemplate`: skip link, sticky 64px header on stone with no rule, then a 12-column grid from `lg` (1024px). Main takes 7 columns; the plate aside takes 5, sticky below the header at height `100dvh - 64px`, content centred vertically in a 24rem column. Below `lg` the aside is a compact glazed card above the title (goal plus the seven dots, then age, weight, height and days in one line); with `stickyAside` (home only) it stays pinned under the header on stone. Horizontal gutters step 16px, 32px (`sm`), 48px (`lg`). Main stacks with 24px gaps (40px at `lg`) and 32px to 56px vertical padding. The form is a 6-column grid from `sm` with 24px column and 28px row gaps. Spacing rhythm is 4px-based: 8, 12, 16, 24, 32, 48. Touch targets are at least 48px for controls and 44px for tabs.

## Elevation & Depth

Hybrid of tonal layering and soft shadows. Glaze surfaces lift off stone with ink-tinted shadows (oklch 0.3 0.02 230) that have vertical offset and blur; nothing has a border or a hard offset shadow. Hover is a colour shift, never a lift.

### Shadow Vocabulary

- **Loza** (`box-shadow: 0 1px 2px oklch(0.3 0.02 230 / 0.12)`): fields, segments, tiles, notices, secondary buttons, the selected tab. A hairline lift.
- **Tarjeta** (`box-shadow: 0 1px 2px oklch(0.3 0.02 230 / 0.1), 0 18px 36px -22px oklch(0.3 0.02 230 / 0.35)`): large cards: day cards, the compact mobile plate card, the skip link.
- **Plato** (`box-shadow: 0 2px 3px oklch(0.3 0.02 230 / 0.15), 0 30px 50px -24px oklch(0.3 0.02 230 / 0.4), inset 0 2px 1px oklch(1 0 0)`): the plate's raised rim only.
- **Pozo** (`box-shadow: inset 0 5px 14px oklch(0.3 0.02 230 / 0.2), inset 0 -2px 3px oklch(1 0 0 / 0.9), 0 1px 0 oklch(1 0 0)`): the plate's sunken well only.

### Named Rules

**The Soft Shadow Rule.** Every shadow is ink-tinted, blurred and offset downward; never a solid offset, never black. Surfaces carry no border.

**The Plate Glaze Rule.** The plate's two subtle glaze gradients (a white-to-glaze radial on the rim, a stone-to-glaze linear in the well) belong to the plate and its relief. No other surface gets a gradient.

## Shapes

Three corners: 16px (`rounded-2xl`) on fields, selects, segments, tiles and notices; 24px (`rounded-3xl`) on day cards and the compact mobile card; full pill on buttons, the tablist and tabs. The plate is a circle (`aspect-square`, full radius), its well inset 8.5%. Surfaces have no border; the only rules are 1px `linea` lines between table and meal rows. Invalid controls get a 2px deep-terracotta ring. Focus is a 3px slate outline offset 2px on every interactive element.

## Components

Atomic levels as built.

### Buttons

- **Shape:** pill (full radius), 48px minimum height, 24px side padding, semibold 16px, colour transition 150ms.
- **Primary:** terracotta fill, glaze text; hover deep terracotta.
- **Secondary:** glaze fill, ink text, Loza shadow; hover deep stone.
- **States:** loading shows a spinner and `aria-busy` with no dimming; disabled at 60% opacity. `LinkButton` shares the same classes.

### Inputs / Fields

- **Style:** glaze fill, 16px radius, Loza shadow, 48px, no border; optional pinned unit ("kg", "cm", "años") in soft ink; tabular figures. Select is the same box with a chevron.
- **Focus:** 3px slate outline offset 2px (on the wrapper for Input).
- **Error:** 2px deep-terracotta ring plus `FieldMessage` with an alert icon and semibold deep-terracotta text. Hints are soft ink. Labels are 14px semibold ink.

### Segmented control

Real radios as glaze segments. Selected is slate fill, glaze text, semibold, plus a Check icon; hover deep stone (deep slate when selected). Grids of 2, 4 or 7 columns.

### Navigation

- **SiteHeader:** sticky stone bar, serif wordmark left ("Otro" in ink, "Lunes" in terracotta), `Stepper` right. The current step is semibold with a 2px terracotta underline and `aria-current`; a done step shows a Check.
- **Tabs:** a deep-stone pill track; the selected tab is a glaze pill with Loza shadow and semibold; arrow, Home and End keys.

### Notices

Glaze box, 16px radius, Loza shadow, icon always present. Error adds a 2px deep-terracotta ring and `role="alert"`. `DisclaimerNotice` is the general-guide line, hidden at `lg` because the plate aside holds it.

### Cards / Containers

- **Day card:** glaze, 24px radius, Tarjeta shadow, serif day name with a deep-terracotta focus line, then a table with `scope` headers, 1px line rules and right-aligned tabular sets and reps. Every day repeats the same anatomy.
- **Meal row:** serif 24px slot name, body text, 1px line separators.

### El plato (signature)

`Board` (organism) composes `Plate` (atom), `WeekDots` (atom), `BoardTile` (molecule) and `RepaintValue` (atom). The plate is pure CSS: a raised rim (Plato) around a sunken well (Pozo) holding the label "Tu objetivo", the goal in serif deep terracotta, and the seven dots. Six tiles (sexo, cuerpo, edad, peso, altura, entrenas) sit in two columns below, a dash until filled. Below `lg` it collapses to the compact card. Values repaint with the `repaint` keyframe: `clip-path inset(0 0 100% 0)` to `inset(0)` plus a -0.18em rise, 240ms, `--ease-out-expo` (`cubic-bezier(0.16, 1, 0.3, 1)`), fill `backwards`. It runs only under an ancestor `data-live="true"` (set after first paint, so first load is still) and is off under `prefers-reduced-motion`. It is the only motion in the system besides colour transitions, the dot fade (300ms), the spinner and the plan skeleton pulse (both off under reduced motion).

### Template and Pages

`StudioTemplate` plus `HomePage` (form and live plate), `PlanPage` (plan and plate, skeleton, empty and discard states), `ErrorPage`, `NotFoundPage`. Icon: a glazed plate on a stone tile with a terracotta centre.

## Do's and Don'ts

### Do:

- **Do** keep depth to the four ink-tinted shadows (loza, tarjeta, plato, pozo) and leave surfaces borderless.
- **Do** use pills for buttons and tabs, 16px for controls and tiles, 24px for large cards.
- **Do** use deep terracotta for terracotta text and error rings; terracotta only as the primary fill.
- **Do** pair every state colour with an icon, weight or text change.
- **Do** add new colours in `@theme` as oklch in the same warm-stone family; gate any new animated value behind `data-live` and a reduced-motion override.
- **Do** keep touch targets at 48px (44px for tabs) and figures tabular.

### Don't:

- **Don't** add borders, hard offset shadows, 900 weights or thick outlines; the world rejects the neobrutalist look.
- **Don't** put mustard or celadon anywhere but the week dots and the text selection.
- **Don't** set the serif on buttons, labels, form text or body, and don't bold it.
- **Don't** convey a state with colour alone.
- **Don't** fall back to the category default: white card with a gradient, an "AI" badge.
- **Don't** repaint on first paint or add other entrance animation.

<!-- Not canonized: no kickers, glyph icons or system display faces exist in the build; the plate's gradients are recorded only as the plate's own glaze. -->
