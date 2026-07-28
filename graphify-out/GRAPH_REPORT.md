# Graph Report - .  (2026-07-28)

## Corpus Check
- 55 files · ~259,098 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 144 nodes · 170 edges · 12 communities (11 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Portfolio Components
- TypeScript App Config
- Dev Toolchain
- Runtime Dependencies
- Motion Visual Elements
- Package Scripts
- Vite Node Config
- App Entry Flow
- Visitor Tech Icons

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `useIntersection()` - 9 edges
3. `compilerOptions` - 7 edges
4. `scripts` - 5 edges
5. `AnimatedImage` - 4 edges
6. `lib` - 4 edges
7. `BadgeVariant` - 3 edges
8. `Contact()` - 3 edges
9. `Proyect()` - 3 edges
10. `WelcomeVisitor()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Newsletter()` --calls--> `useIntersection()`  [EXTRACTED]
  src/components/Newsletter/Newsletter.tsx → src/helpers/helpers.tsx
- `WelcomeVisitor()` --calls--> `useIntersection()`  [EXTRACTED]
  src/components/WelcomeVisitor/WelcomeVisitor.tsx → src/helpers/helpers.tsx
- `TechStack` --references--> `BadgeVariant`  [EXTRACTED]
  src/components/Proyect/Proyect.tsx → src/components/Badge/Badge.tsx
- `Contact()` --calls--> `useIntersection()`  [EXTRACTED]
  src/components/Contact/Contact.tsx → src/helpers/helpers.tsx
- `Proyect()` --calls--> `useIntersection()`  [EXTRACTED]
  src/components/Proyect/Proyect.tsx → src/helpers/helpers.tsx

## Import Cycles
- None detected.

## Communities (12 total, 1 thin omitted)

### Community 0 - "Portfolio Components"
Cohesion: 0.10
Nodes (13): Badge(), BadgeProps, BadgeVariant, TechIcons, Contact(), Newsletter(), ProjectLinks(), ProjectLinksProps (+5 more)

### Community 1 - "TypeScript App Config"
Cohesion: 0.09
Nodes (22): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, isolatedModules, jsx (+14 more)

### Community 2 - "Dev Toolchain"
Cohesion: 0.10
Nodes (21): eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh, devDependencies, eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh, @types/react (+13 more)

### Community 3 - "Runtime Dependencies"
Cohesion: 0.11
Nodes (19): dependencies, react, react-dom, react-intersection-observer, @react-spring/parallax, @react-spring/web, react-typed, sass (+11 more)

### Community 4 - "Motion Visual Elements"
Cohesion: 0.27
Nodes (5): AnimatedImage, AnimatedImageProps, FloatingCircle1, FloatingCircle2, FloatingTriangle

### Community 5 - "Package Scripts"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 6 - "Vite Node Config"
Cohesion: 0.20
Nodes (9): vite.config.ts, compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict (+1 more)

### Community 7 - "App Entry Flow"
Cohesion: 0.22
Nodes (5): App(), Hero(), Loading(), LoadingProps, WelcomeVisitor()

## Knowledge Gaps
- **60 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+55 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Toolchain` to `Package Scripts`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Scripts`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _60 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Portfolio Components` be split into smaller, more focused modules?**
  _Cohesion score 0.10114942528735632 - nodes in this community are weakly interconnected._
- **Should `TypeScript App Config` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Dev Toolchain` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._