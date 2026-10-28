# Product

<!-- impeccable:product-schema 1 -->

> Nombre: **Otro Lunes**. Los datos marcados con *(inferido)* salen del código de los repos originales (frontend y backend NestJS) y de la instrucción de empezar sin entrevista; el usuario no los ha confirmado.

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind, fullstack en un solo repo: la llamada al modelo (Gemini u OpenAI, según `AI_PROVIDER`) vive en un Route Handler del servidor. pnpm como gestor de paquetes, Prettier con plugin de Tailwind, componentes organizados con Atomic Design (atoms / molecules / organisms / templates / pages). Fijado por el usuario (instrucción "usa Next.js" y sus reglas permanentes).

## Users

*(inferido)* Personas hispanohablantes sin entrenador ni nutricionista que quieren una guía concreta para empezar a comer y entrenar mejor. Llegan desde el celular o el computador, en un momento de decisión ("quiero cambiar mi estado físico"), y quieren una respuesta en minutos, sin crear cuenta.

## Product Purpose

El usuario describe su cuerpo, su rutina y su objetivo en un formulario corto y recibe un plan nutricional variado y un plan de entrenamiento con una rutina por cada día que entrena, generados por IA. Éxito: el usuario llega a un plan legible y accionable que puede seguir o guardar, sin fricción ni espera confusa.

## Positioning

*(inferido)* Un plan personalizado a partir de siete datos, en español, sin registro. La IA hace el plan; el producto lo hace comprensible y usable (estructura por comidas y por días de entrenamiento).

## Operating Context

Flujo de tres pasos heredado del proyecto original: inicio, formulario, recomendación. Datos de entrada: sexo, edad, peso (kg), altura (cm), tipo de cuerpo (ectomorfo / endomorfo / mesomorfo), frecuencia de ejercicio semanal (1 a 7 días) y objetivo (bajar grasa, ganar masa muscular, tonificar, mantenerse saludable). Rangos válidos del original: edad 15 a 80, peso 35 a 149, altura 101 a 229. La generación tarda varios segundos.

## Capabilities and Constraints

- Las claves del proveedor de IA nunca llegan al navegador; toda llamada al modelo pasa por el servidor.
- Validación de entrada también en el servidor, con los mismos rangos que el formulario.
- La respuesta del modelo es JSON estructurado: `plan_nutricional` (desayuno, media mañana, almuerzo, merienda, cena) y `plan_entrenamiento` (un objeto por día de entrenamiento).
- Los errores del servicio se comunican con códigos HTTP reales y mensajes en español.
- Sin cuentas ni base de datos por ahora *(inferido, no decidido)*.
- Interfaz en español.
- No es consejo médico: el producto debe decir con claridad que es una guía general y no sustituye a un profesional.

## Brand Commitments

Ninguno vigente. El proyecto original usaba gris carbón, verde `#74AA9C` y tipografías Montserrat / Poppins / Space Grotesk; el usuario no los declaró vinculantes. Nombre definitivo pendiente.

## Evidence on Hand

Ningún testimonio, cliente, métrica ni respaldo profesional. No fabricar ninguno. Existen los dos repos originales (frontend y backend NestJS) como referencia funcional.

## Product Principles

1. **Una persona, un plan, sin vueltas.** Cada paso pide solo lo que el plan necesita.
2. **La espera es parte del producto.** La generación tarda; el estado de carga y el de error se diseñan igual que el resultado.
3. **El plan se lee en el gimnasio y en la cocina.** El resultado se escanea de un vistazo, en celular, a la distancia de un brazo.
4. **Honestidad sobre lo que es.** Guía general generada por IA; sin promesas médicas ni de resultados.
5. **Lo que se genera se puede conservar.** Recargar la página no puede perder el plan.

## Accessibility & Inclusion

WCAG 2.2 AA como mínimo: formulario completamente operable con teclado, errores asociados a su campo, contraste suficiente, `prefers-reduced-motion` respetado, objetivos táctiles cómodos en celular.
