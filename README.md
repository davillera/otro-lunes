# Otro Lunes

Herramienta fullstack en un solo proyecto Next.js. La persona llena siete datos y recibe un plan de alimentación por comidas y una rutina por cada día que entrena, generados con IA. La llamada al modelo (Gemini u OpenAI, a elección) vive en un Route Handler.

## Empezar

```bash
pnpm install
cp .env.example .env.local   # y escribe la clave del proveedor que elijas
pnpm dev                     # http://localhost:3000
```

Sin clave y sin gastar saldo: pon `PLAN_MOCK=1` en `.env.local` y el servidor responde con un plan de ejemplo (marcado como tal en su resumen).

| Variable         | Para qué                                                                   |
| ---------------- | -------------------------------------------------------------------------- |
| `AI_PROVIDER`    | `gemini` (por defecto) u `openai`.                                         |
| `GEMINI_API_KEY` | Clave de Google AI Studio. Solo se lee en el servidor.                     |
| `GEMINI_MODEL`   | Modelo de Gemini. Opcional, por defecto `gemini-flash-lite-latest`.        |
| `OPENAI_API_KEY` | Clave de OpenAI. Solo se lee en el servidor.                               |
| `OPENAI_MODEL`   | Modelo de OpenAI. Opcional, por defecto `gpt-4o-mini`.                     |
| `PLAN_MOCK`      | `1` devuelve un plan de ejemplo sin llamar al proveedor (solo desarrollo). |

## Scripts

`pnpm dev` · `pnpm build` · `pnpm start` · `pnpm lint` · `pnpm typecheck` · `pnpm format` · `pnpm format:check`

## Cómo está armado

```
src/
  app/                    rutas finas: solo montan una página de components/pages
    api/plan/route.ts     POST /api/plan: valida, limita por IP, genera el plan
  components/             Atomic Design
    atoms/                Button, LinkButton, Input, Select, Label, FieldMessage, Spinner, Wordmark, RepaintValue, Plate, WeekDots
    molecules/            Field, SegmentedControl, Stepper, BoardTile, Tabs, Notice, DisclaimerNotice
    organisms/            SiteHeader, ProfileForm, Board, PlanViewer, MealPlan, TrainingPlan
    templates/            StudioTemplate (cabecera + contenido + tablero lateral)
    pages/                HomePage, PlanPage, NotFoundPage, ErrorPage
  lib/
    plan/                 profile.ts y plan.ts (esquemas zod compartidos), prompt, generate (servidor), storage (cliente)
```

- **Un solo esquema por lado del contrato.** `profileSchema` valida el formulario en el navegador y de nuevo en el servidor; `planSchema` es el formato de respuesta estructurada que se le pide al modelo y el que valida el cliente antes de mostrar nada.
- **El plan se guarda en el navegador** (`localStorage`), así que recargar `/plan` no lo pierde. No hay cuentas ni base de datos.
- **Errores con códigos reales:** 422 datos inválidos, 429 demasiadas solicitudes, 503 servicio no configurado o saturado, 502 el modelo no entregó un plan completo.

## Pendiente

- Nombre definitivo del producto.
- Probar la ruta de OpenAI con una clave real (la de Gemini ya se probó de punta a punta).
- Si el plan debe guardarse en una cuenta o compartirse por enlace.
- El límite de solicitudes es en memoria por instancia; para varias instancias hace falta un almacén compartido.
