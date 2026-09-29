# Sinoikía

Sinoikía conecta vivienda, ingresos, servicios y comunidad para preparar planes rurales completos y verificables. Esta primera fase establece la experiencia pública, las reglas de dominio iniciales, el despliegue estático y la base segura de Supabase.

## Desarrollo local

Requisitos: Node.js 24 y Docker para ejecutar Supabase local.

```bash
npm ci
npm run dev
```

La aplicación funciona con contenido sintético aunque Supabase no esté configurado. Para conectar un proyecto, copia `.env.example` a `.env.local` y añade la URL y la publishable key. Nunca añadas una secret key a variables `VITE_*`.

```text
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

## Comprobaciones

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

El build genera `dist/index.html` y `dist/404.html` para que las rutas de la SPA puedan recuperarse desde GitHub Pages.

## Supabase local

```bash
npx supabase start
npx supabase test db
```

Las migraciones son la fuente de verdad. Cada tabla expuesta debe incorporar en el mismo cambio sus grants mínimos, RLS y pruebas positivas y negativas. Los permisos globales se almacenarán en app metadata; los permisos territoriales, en membresías verificadas.

## Estructura

- `src/app`: router, layout y páginas de sistema.
- `src/features`: recorridos verticales del producto.
- `src/domain`: reglas puras sin dependencias de React o Supabase.
- `src/infrastructure`: clientes y adaptadores externos.
- `src/content`: contenido separado de la presentación.
- `supabase`: configuración local, migraciones, funciones y pruebas SQL.
