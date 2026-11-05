# CLAUDE.md — Visual Markdown Editor (React Edition)

## Commands

- **Development Server**: `npm run dev` (runs Vite HMR server on port 5173)
- **Production Build**: `npm run build`
- **Preview Build**: `npm run preview`

## Code Style Guidelines

- **React Functional Components**: Use functional components with hooks (`useState`, `useMemo`, `useRef`, `useContext`).
- **Styling**: Uses existing CSS files (`base.css`, `layout.css`, `theme.css`, `guide.css`) imported in `main.jsx`. CSS custom properties drive the 6 themes (`.theme-violet`, `.theme-amber`, `.theme-ocean`, `.theme-forest`, `.theme-sunset`, `.theme-cyberpunk`).
- **State Management**: Theme state is managed globally via `ThemeContext` (`src/context/ThemeContext.jsx`) and persisted in `localStorage`.
- **Parsing**: Custom lightweight markdown parser located in `src/utils/markdown.js`.
- **PDF Export**: Handled via `html2pdf.js` wrapper utility in `src/utils/exportPdf.js`.
- **Naming Convention**: PascalCase for React components, camelCase for variables/hooks/utilities, kebab-case for CSS classes and files.
