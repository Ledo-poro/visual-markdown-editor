import { createEditorLayout, setPreviewContent } from "./dom.js";
import { parseMarkdown } from "./markdown.js";

const THEMES = ["theme-violet", "theme-amber", "theme-ocean", "theme-forest", "theme-sunset", "theme-cyberpunk"];

function initApp() {
    const root = document.querySelector("main");
    if (!root) {
        return;
    }

    root.innerHTML = createEditorLayout();

    const editor = document.querySelector("#editor-input");
    const themeButton = document.querySelector("#theme-toggle");
    const themeInfo = document.querySelector("#theme-info");
    const helpButton = document.querySelector("#help-button");

    if (!editor) {
        return;
    }

    editor.addEventListener("input", () => {
        setPreviewContent(parseMarkdown(editor.value));
    });

    editor.value = "# Welcome to your golden editor\n\n- Add a bullet\n- Make it bold with **bold**\n- Or emphasize with *italic*\n\n> This preview updates live in dark mode.\n\n## Try color themes!\nClick the theme button to cycle through colors.";
    setPreviewContent(parseMarkdown(editor.value));

    let currentThemeIndex = 0;
    
    if (themeButton && themeInfo) {
        function updateTheme() {
            const newTheme = THEMES[currentThemeIndex];
            
            // Remove all theme classes
            THEMES.forEach(theme => {
                document.body.classList.remove(theme);
            });
            
            // Add new theme class
            document.body.classList.add(newTheme);
            
            // Update button text to show theme symbol
            const symbol = getThemeSymbol(newTheme);
            themeButton.textContent = `${symbol} Theme`;
            themeInfo.textContent = formatThemeName(newTheme);
            
            // Save preference
            localStorage.setItem("selectedTheme", newTheme);
        }
        
        // Load saved theme or use default
        const savedTheme = localStorage.getItem("selectedTheme");
        if (savedTheme && THEMES.includes(savedTheme)) {
            currentThemeIndex = THEMES.indexOf(savedTheme);
        }
        updateTheme();
        
        themeButton.addEventListener("click", () => {
            currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
            updateTheme();
        });
    }
    
    // Help button to show documentation
    if (helpButton) {
        helpButton.addEventListener("click", () => {
            showSymbolGuide();
        });
    }
}

function getThemeSymbol(themeName) {
    const symbols = {
        "theme-violet": "🌙",
        "theme-amber": "⭐",
        "theme-ocean": "🌊",
        "theme-forest": "🌿",
        "theme-sunset": "🌅",
        "theme-cyberpunk": "⚡"
    };
    return symbols[themeName] || "🎨";
}

function formatThemeName(themeName) {
    return themeName.replace("theme-", "").charAt(0).toUpperCase() + themeName.replace("theme-", "").slice(1);
}

function showSymbolGuide() {
    const guideHTML = `
        <div class="modal-overlay" id="guide-overlay">
            <div class="modal-content">
                <button class="modal-close" id="close-guide">✕</button>
                <h2>📚 Markdown & Theme Guide</h2>
                
                <section class="guide-section">
                    <h3>📝 Markdown Symbols</h3>
                    <table class="guide-table">
                        <tr>
                            <td><strong>Symbol</strong></td>
                            <td><strong>Usage</strong></td>
                            <td><strong>Example</strong></td>
                        </tr>
                        <tr>
                            <td><code>#</code></td>
                            <td>Heading 1</td>
                            <td># My Title</td>
                        </tr>
                        <tr>
                            <td><code>##</code></td>
                            <td>Heading 2</td>
                            <td>## Subtitle</td>
                        </tr>
                        <tr>
                            <td><code>-</code></td>
                            <td>Bullet point</td>
                            <td>- Item</td>
                        </tr>
                        <tr>
                            <td><code>**text**</code></td>
                            <td>Bold text</td>
                            <td>**Bold**</td>
                        </tr>
                        <tr>
                            <td><code>*text*</code></td>
                            <td>Italic text</td>
                            <td>*Italic*</td>
                        </tr>
                        <tr>
                            <td><code>\`code\`</code></td>
                            <td>Code snippet</td>
                            <td>\`const x = 5\`</td>
                        </tr>
                        <tr>
                            <td><code>></code></td>
                            <td>Blockquote</td>
                            <td>> Quote text</td>
                        </tr>
                    </table>
                </section>
                
                <section class="guide-section">
                    <h3>🎨 Color Themes</h3>
                    <div class="themes-grid">
                        <div class="theme-card">
                            <div class="theme-preview theme-violet-preview"></div>
                            <p><strong>🌙 Violet</strong></p>
                            <p class="theme-desc">Dark purple with golden accents - Classic midnight mode</p>
                        </div>
                        <div class="theme-card">
                            <div class="theme-preview theme-amber-preview"></div>
                            <p><strong>⭐ Amber</strong></p>
                            <p class="theme-desc">Warm gold tones - Cozy and vintage</p>
                        </div>
                        <div class="theme-card">
                            <div class="theme-preview theme-ocean-preview"></div>
                            <p><strong>🌊 Ocean</strong></p>
                            <p class="theme-desc">Cool blues - Fresh and calming</p>
                        </div>
                        <div class="theme-card">
                            <div class="theme-preview theme-forest-preview"></div>
                            <p><strong>🌿 Forest</strong></p>
                            <p class="theme-desc">Natural greens - Peaceful vibes</p>
                        </div>
                        <div class="theme-card">
                            <div class="theme-preview theme-sunset-preview"></div>
                            <p><strong>🌅 Sunset</strong></p>
                            <p class="theme-desc">Warm oranges and reds - Energetic</p>
                        </div>
                        <div class="theme-card">
                            <div class="theme-preview theme-cyberpunk-preview"></div>
                            <p><strong>⚡ Cyberpunk</strong></p>
                            <p class="theme-desc">Neon cyan & magenta - Futuristic</p>
                        </div>
                    </div>
                </section>
                
                <section class="guide-section">
                    <h3>💡 Tips</h3>
                    <ul>
                        <li>Your theme preference is saved automatically</li>
                        <li>Click the theme button to cycle through all 6 themes</li>
                        <li>Combine markdown symbols for rich formatting</li>
                        <li>Use blockquotes (>) to highlight important text</li>
                    </ul>
                </section>
            </div>
        </div>
    `;
    
    // Add modal to DOM
    const body = document.body;
    const modal = document.createElement('div');
    modal.innerHTML = guideHTML;
    body.appendChild(modal);
    
    // Close button functionality
    const closeBtn = document.querySelector("#close-guide");
    const overlay = document.querySelector("#guide-overlay");
    
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.remove();
        });
    }
    
    if (overlay) {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                modal.remove();
            }
        });
    }
}

initApp();
