# AGENTS.md

## Objetivo del proyecto
- Portafolio personal construido con React + TypeScript + Vite.
- La UI mezcla SCSS (`src/styles` y estilos por componente) con utilidades Tailwind.

## Stack y estructura
- Framework: React 18 con TypeScript.
- Bundler: Vite 5.
- Estilos globales: `src/styles/styles.scss` y `src/styles/main.css`.
- Componentes: `src/components/*`.
- Punto de entrada: `src/main.tsx`.
- Vista principal: `src/App.tsx`.

## Convenciones para cambios
- Mantener componentes en TypeScript (`.tsx`) con props tipadas.
- Evitar variables/imports sin uso, porque rompen lint y build.
- Reutilizar estilos existentes antes de crear nuevas reglas globales.
- Si se agrega un componente exportable, actualizar `src/components/index.ts`.
- Conservar nombres y rutas existentes (por ejemplo `Proyect`) para evitar regresiones.

## Checklist antes de cerrar una tarea
- Ejecutar `npm run lint`.
- Ejecutar `npm run build`.
- Verificar que no se rompieron animaciones o layout responsivo.
- Confirmar enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`.

## Notas del estado actual
- Se corrigió un error en `src/components/Desk/Desk.tsx`: variable `clg` sin uso que bloqueaba lint/build.
