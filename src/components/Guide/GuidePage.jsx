import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function GuidePage() {
    const { themes } = useTheme();

    return (
        <section className="app-shell">
            <div className="panel" style={{ padding: "40px" }}>
                <h2>📚 Complete Documentation & Guide</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
                    Welcome to the Visual Markdown Editor guide. Here you will find all syntax rules, theme details, and tips.
                </p>

                <section className="guide-section" style={{ marginBottom: "40px" }}>
                    <h3>📝 Markdown Reference</h3>
                    <table className="guide-table">
                        <thead>
                            <tr>
                                <td><strong>Symbol</strong></td>
                                <td><strong>Description</strong></td>
                                <td><strong>Example</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>#</code></td>
                                <td>Primary Heading (H1)</td>
                                <td># Document Title</td>
                            </tr>
                            <tr>
                                <td><code>##</code></td>
                                <td>Secondary Heading (H2)</td>
                                <td>## Section Title</td>
                            </tr>
                            <tr>
                                <td><code>-</code></td>
                                <td>Unordered list item</td>
                                <td>- Bullet item</td>
                            </tr>
                            <tr>
                                <td><code>**text**</code></td>
                                <td>Bold emphasis</td>
                                <td>**important**</td>
                            </tr>
                            <tr>
                                <td><code>*text*</code></td>
                                <td>Italic emphasis</td>
                                <td>*slanted*</td>
                            </tr>
                            <tr>
                                <td><code>`code`</code></td>
                                <td>Inline code snippet</td>
                                <td>`npm install`</td>
                            </tr>
                            <tr>
                                <td><code>&gt;</code></td>
                                <td>Blockquote callout</td>
                                <td>&gt; Note text</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="guide-section" style={{ marginBottom: "40px" }}>
                    <h3>🎨 Available Themes</h3>
                    <div className="themes-grid">
                        {themes.map((t) => (
                            <div className="theme-card" key={t.id}>
                                <div className={`theme-preview ${t.id}-preview`}></div>
                                <p><strong>{t.symbol} {t.name}</strong></p>
                                <p className="theme-desc">{t.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="guide-section">
                    <h3>💡 Pro Tips & Features</h3>
                    <ul style={{ lineHeight: "1.8" }}>
                        <li><strong>Live Preview:</strong> As you type in the left panel, your rendered markdown appears instantly on the right.</li>
                        <li><strong>Theme Persistence:</strong> Your selected theme is automatically saved to your browser's local storage.</li>
                        <li><strong>PDF Export:</strong> Click the PDF button to instantly generate and download a styled A4 PDF of your formatted markdown.</li>
                    </ul>
                </section>
            </div>
        </section>
    );
}
