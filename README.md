# Visual Markdown Editor (React Edition)

A modern, lightning-fast live markdown editor built with **React**, **Vite**, and **React Router**. Featuring 6 gorgeous dark color themes, quick-formatting toolbar, instant live preview, in-app guide, and styled PDF export.

---

## ✨ Features

- **Live Split-Panel Markdown Preview**: Type markdown on the left, watch it render in real time on the right.
- **Quick Formatting Toolbar**: One-click formatting for Headings (H1, H2), Bold, Italic, Bullet Lists, Blockquotes, and Code snippets.
- **6 Gorgeous Color Themes**: 
  - 🌙 **Violet** (Dark purple with golden accents)
  - ⭐ **Amber** (Warm gold tones)
  - 🌊 **Ocean** (Cool calming blues)
  - 🌿 **Forest** (Natural peaceful greens)
  - 🌅 **Sunset** (Warm energetic oranges and reds)
  - ⚡ **Cyberpunk** (Futuristic neon cyan & magenta)
- **Theme Persistence**: Your color theme preference is automatically saved in `localStorage`.
- **PDF Export**: Generate and download styled A4 PDFs of your rendered markdown instantly using `html2pdf.js`.
- **In-App Guide Modal & Standalone Guide Page**: Comprehensive syntax reference table and theme previews.
- **React Router Navigation**: Seamless transitions between Editor, Settings, and Guide views.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation & Development

1. Navigate to the React app directory:
   ```bash
   cd "react-app"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server (Vite):
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`.

### Production Build

To build for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📂 Project Structure

```
react-app/
├── index.html                  # HTML entry point with html2pdf CDN
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── src/
    ├── main.jsx                # React DOM root + CSS imports
    ├── App.jsx                 # Router & ThemeProvider setup
    ├── context/
    │   └── ThemeContext.jsx    # Global theme state & localStorage sync
    ├── data/
    │   └── themes.js           # Theme definitions (metadata & symbols)
    ├── components/
    │   ├── Layout/
    │   │   └── Topbar.jsx      # Navigation header & branding
    │   ├── Editor/
    │   │   └── EditorPanel.jsx # Split-pane editor, toolbar & live preview
    │   ├── Guide/
    │   │   ├── GuideModal.jsx  # In-app guide modal overlay
    │   │   └── GuidePage.jsx   # Standalone guide view
    │   └── Settings/
    │       └── SettingsPage.jsx# Theme selector grid & settings apply
    ├── utils/
    │   ├── markdown.js         # Custom lightweight markdown parser
    │   └── exportPdf.js        # html2pdf export utility
    └── styles/
        ├── base.css            # Reset & root variables
        ├── layout.css          # Grid, shell, panels, textarea & preview
        ├── theme.css           # 6 theme color definitions & ghost buttons
        └── guide.css           # Modal & guide cards styling
```

---

## 👥 Credits

Developed by **Waleed Khaled** (CODIMP TEAM).
