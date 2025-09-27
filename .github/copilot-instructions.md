# Portfolio React TypeScript Copilot Instructions

## Project Architecture

This is a **single-page portfolio** built with React 18 + TypeScript + Vite, featuring immersive parallax animations and dynamic visual effects. The architecture centers around `@react-spring/parallax` for complex layered scrolling experiences.

### Key Architectural Patterns

**Parallax-First Design**: The main `App.tsx` uses `<Parallax>` as the root container with `<ParallaxLayer>` components at different offsets and speeds. Each major section (Hero, About, Newsletter) is wrapped in a ParallaxLayer with specific positioning.

**Dynamic Mouse-Responsive Background**: `App.tsx` implements `handleMouse()` that calculates gradients based on cursor position:
```tsx
const angle = (xNorm + (1 - yNorm)) * 90;
// Creates dynamic gradient rotation from blue tones
```

**Intersection-Based Animations**: Custom hook `src/helpers/helpers.tsx` provides `useIntersection()` for scroll-triggered animations. Pattern: `const { ref, isVisible } = useIntersection()` then conditionally apply CSS classes like `${isVisible && 'animate-about'}`.

## Component Structure

**Component Organization**: Each component has its own folder with `.tsx` file and matching `.scss` file. All exports centralized through `src/components/index.ts` barrel exports.

**Hero Component**: Uses `ReactTyped` for typewriter animation effect. Two versions exist - `Hero.tsx` (animated) and `Hero2.tsx` (static).

**Desk Component**: Complex nested parallax with 5 background layers at different speeds (0.1-0.5). Uses `IParallax` ref type for imperative control.

**Proyect Component**: Fully parametrizable project showcase component. Required props: `imgBack`, `imgFront`. Optional props: `title`, `description`, `techStack`, `projectUrl`, `githubUrl`. Uses `TechStack[]` interface for technology badges with variant colors and icons.

**Badge Component**: Reusable tech stack display system with 12+ predefined variants (react, typescript, javascript, css, sass, tailwind, node, vite, next, figma, git, github). Supports custom icons via `TechIcons` library and three sizes (sm, md, lg).

**Contact Component**: Contact information section with modern card layout, includes email, phone, location, and LinkedIn with respective SVG icons.

## Development Workflows

**Scripts**:
- `npm run dev` - Vite dev server with HMR
- `npm run build` - TypeScript compilation + Vite build  
- `npm run lint` - ESLint with TypeScript rules

**Styling System**: Hybrid Tailwind + SCSS approach. Tailwind integrated via `@tailwindcss/vite` plugin. Component-specific styles in individual `.scss` files, imported through `src/styles/styles.scss`.

**Asset Management**: Images in `src/assets/img/`, fonts in `src/assets/fonts/`. Parallax images specifically in `src/assets/img/parallax/`. All assets imported as ES modules.

## Project-Specific Conventions

**Custom Fonts**: Two font families loaded via `@font-face`: Agrandir (headlines) and Kollektif (body). Defined in `src/styles/_fonts.scss`.

**Color Scheme**: Dark theme with `background: #000000` and white text. Dynamic gradients use blue tone variations `rgba(0, 16, 33, 0.95)` to `rgba(14, 26, 57, 0.95)`.

**Animation Classes**: CSS animations triggered by intersection observer. Pattern: `animate-about`, `animate-logo` classes applied conditionally when `isVisible` is true.

**Badge System**: Technology badges use predefined color schemes with gradients and hover effects. Badge groups use `.badge-group` class for flex layout. Pattern:
```tsx
<Badge variant="react" icon={<TechIcons.React />}>React</Badge>
```

**Tech Stack Pattern**: Projects use `TechStack[]` interface:
```tsx
const techStack: TechStack[] = [
  { name: "React", variant: "react", icon: <TechIcons.React /> }
];
```

**Bilingual Content**: Mixed Spanish/English text throughout. Spanish for navigation ("TRABAJOS", "CONÓCEME", "CONTACTAME"), English for some content.

## Integration Points

**React Spring**: Main animation library. Import patterns:
- `import { Parallax, ParallaxLayer } from "@react-spring/parallax"`  
- ParallaxLayer `offset` controls vertical position, `speed` controls scroll rate
- `pages` prop on Parallax sets total scrollable height

**TypeScript Configuration**: Strict mode enabled, `jsx: "react-jsx"`, ES2020 target. Component props always typed with interfaces.

**Vite Configuration**: Minimal setup with React and Tailwind plugins. No custom build optimizations or proxy configurations.

## Critical Files

- `src/App.tsx` - Main parallax container and mouse gradient logic
- `src/components/index.ts` - Central component exports
- `src/helpers/helpers.tsx` - Custom intersection observer hook
- `src/styles/styles.scss` - Master stylesheet with organized imports
- `src/components/Badge/` - Reusable badge system with TechIcons and variants
- `src/components/Proyect/Proyect.tsx` - Parametrizable project showcase component
- `vite.config.ts` - Build configuration with Tailwind integration

## Development Notes

**Badge Usage**: Import badges via `import { Badge, TechIcons } from '../Badge'`. Use predefined variants or create custom ones. Badge groups automatically handle responsive layout.

**Project Components**: Use `Proyect` component for consistent project displays. Accepts optional props with sensible defaults. Tech stack badges render automatically from `techStack` prop array.

The `Projects` component exists but is empty - likely the next feature to implement. Navbar links are placeholder (no routing). Newsletter form has no submission logic. Focus on visual/animation features over functional interactivity.