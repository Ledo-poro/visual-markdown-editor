import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function GuideModal({ isOpen, onClose }) {
    const { themes } = useTheme();

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" id="guide-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" id="close-guide" onClick={onClose}>✕</button>
                <h2>📚 Markdown & Theme Guide</h2>

                <section className="guide-section">
                    <h3>📝 Markdown Symbols</h3>
                    <table className="guide-table">
                        <thead>
                            <tr>
                                <td><strong>Symbol</strong></td>
                                <td><strong>Usage</strong></td>
                                <td><strong>Example</strong></td>
                            </tr>
                        </thead>
                        <tbody>
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
                                <td><code>`code`</code></td>
                                <td>Code snippet</td>
                                <td>`const x = 5`</td>
                            </tr>
                            <tr>
                                <td><code>&gt;</code></td>
                                <td>Blockquote</td>
                                <td>&gt; Quote text</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="guide-section">
                    <h3>🎨 Color Themes</h3>
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
                    <h3>💡 Tips</h3>
                    <ul>
                        <li>Your theme preference is saved automatically</li>
                        <li>Click the theme button to cycle through all 6 themes</li>
                        <li>Combine markdown symbols for rich formatting</li>
                        <li>Use blockquotes (&gt;) to highlight important text</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
