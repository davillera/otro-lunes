---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/plan/page.tsx"]
---

# Surface brief: herramienta de plan (inicio + plan)

## Scope and visitor mode

Operate. Dos pantallas del mismo flujo: `/` (formulario de siete datos) y `/plan` (resultado). No hay landing de marketing: la herramienta es la primera pantalla. Nombre de trabajo "DietGPT". Rediseño completo: el mundo anterior (letreros de mercado verde, mango y tomate) se descartó porque se leía como una cadena de comida rápida; el segundo intento (bordes gruesos, color plano) se descartó por neobrutalista.

## Audience, job, action, proof, constraints

- Persona hispanohablante, sin entrenador, en celular o computador, que quiere un plan de comida y entreno ya.
- Tarea: ingresar siete datos, esperar la generación, leer y conservar el plan.
- Estados: vacío, errores de campo, enviando, error del servicio, plan listo, recarga con plan guardado.
- Sin pruebas sociales ni métricas inventadas. Sin cuentas; el último plan vive solo en el navegador; aviso "guía general, no sustituye a un profesional".

## Chosen direction and memorable moment

Plato de cerámica. El mundo presta cuatro cosas: tipografía (serif de exhibición cálida más sans humanista), paleta (piedra, loza, pizarra, terracota con mostaza y celadón como acentos pequeños), densidad (aire generoso, esquinas muy redondeadas) y una jugada de firma. No presta layout, navegación ni controles: esos son los estándar de la web.

Jugada de firma, "el plato": un plato de loza con relieve que lee de vuelta el objetivo de la persona en el centro, y siete puntos que son los días de la semana (se iluminan tantos como días entrena). Al cambiar un valor se "esmalta" con un barrido vertical corto. En `/plan` el mismo plato encabeza el plan.

## Unresolved decisions

Nombre del producto; modelo por defecto de cada proveedor de IA (Gemini u OpenAI, `AI_PROVIDER`); si el plan se guarda en una cuenta; texto legal definitivo del aviso.

## Direction contract

THESIS: El plato te lee de vuelta. Tu objetivo se asienta en el centro de un plato mientras eliges, y los datos se sirven en tarjetas de loza debajo; el formulario no se siente como papeleo. Rechaza la tarjeta blanca con degradado y la insignia de "IA", y rechaza el neobrutalismo: sin bordes gruesos, sin sombras duras, sin pesos 900.

OWN-WORLD: Piedra cálida de fondo (`oklch(0.91 0.015 80)`), loza casi blanca para superficies (`oklch(0.98 0.008 85)`), pizarra para la selección (`oklch(0.35 0.02 220)`), terracota para la acción primaria y el objetivo (`oklch(0.52 0.13 45)`), tinta azul-gris para el texto (`oklch(0.3 0.02 230)`). Mostaza y celadón solo en los siete puntos. DM Serif Display para títulos y el objetivo; Instrument Sans para formularios y prosa. Superficies sin borde: la profundidad viene de sombras suaves con desplazamiento y desenfoque, y de un plato con borde hundido. Esquinas de 16 a 24px, botones en píldora. Reconocible sin contenido: un plato redondo de loza con un pozo hundido, tarjetas de loza debajo, sobre piedra.

STORY: El visitante entiende que son siete preguntas y un plan, sin registrarse. Cree que es una guía general hecha por IA, no un consejo médico. Completa el formulario, ve su plato llenarse, envía, y recibe un plan que puede leer en la cocina o en el gimnasio y que sigue ahí al recargar.

FIRST VIEWPORT: 1440x900. Cabecera de 64px sobre piedra, sin filete: marca "DietGPT" en serif a la izquierda, pasos estándar "1 Tus datos · 2 Tu plan" a la derecha. Debajo, izquierda (7/12): título serif de 56px "Tu plan de comida y entreno", una línea de apoyo y el formulario en rejilla de seis columnas con el botón terracota en píldora "Armar mi plan" al pie. Derecha (5/12), centrado en vertical y fijo al hacer scroll: el título del tablero, un plato de 360px con el objetivo en serif terracota al centro y los siete puntos de la semana, seis tarjetas de loza en dos columnas (sexo, cuerpo, edad, peso, altura, entrenas) con guion hasta llenarse, y el aviso de guía general. En celular el plato pasa a una tarjeta compacta sobre el título, con edad, peso, altura y días en una línea.

FORM: Plato de cerámica, derivación propia desde la comida tras dos tiradas; la tirada 2 (asignado 3) no ofrecía mundos de comida y se descartó por motivos factuales. Elegido por el usuario entre cuatro bocetos; seed:698bd518b8869080.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
