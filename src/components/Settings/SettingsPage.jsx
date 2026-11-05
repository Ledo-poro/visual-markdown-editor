import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsPage() {
    const { theme, themes, setThemeIndex } = useTheme();
    const [selectedThemeId, setSelectedThemeId] = useState(theme.id);
    const [savedMessage, setSavedMessage] = useState(false);

    const handleApply = (e) => {
        e.preventDefault();
        const index = themes.findIndex(t => t.id === selectedThemeId);
        if (index !== -1) {
            setThemeIndex(index);
            setSavedMessage(true);
            setTimeout(() => setSavedMessage(false), 2500);
        }
    };

    return (
        <section className="app-shell">
            <div className="panel" style={{ padding: "40px" }}>
                <h2>⚙️ Editor Settings</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
                    Customize your Visual Markdown Editor experience. Changes are applied instantly when saved.
                </p>

                {savedMessage && (
                    <div style={{
                        padding: "12px 20px",
                        marginBottom: "20px",
                        background: "rgba(34, 197, 94, 0.2)",
                        border: "1px solid #22c55e",
                        borderRadius: "8px",
                        color: "#22c55e",
                        fontWeight: "500"
                    }}>
                        ✓ Settings applied successfully!
                    </div>
                )}

                <form onSubmit={handleApply}>
                    <div className="guide-section" style={{ marginBottom: "30px" }}>
                        <h3 style={{ marginBottom: "15px" }}>🎨 Select Theme</h3>
                        <div className="themes-grid">
                            {themes.map((t) => {
                                const isSelected = selectedThemeId === t.id;
                                return (
                                    <div
                                        key={t.id}
                                        className="theme-card"
                                        onClick={() => setSelectedThemeId(t.id)}
                                        style={{
                                            cursor: "pointer",
                                            border: isSelected ? "2px solid var(--accent-primary, #6366f1)" : "1px solid rgba(255,255,255,0.1)",
                                            transform: isSelected ? "translateY(-2px)" : "none",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        <div className={`theme-preview ${t.id}-preview`}></div>
                                        <p><strong>{t.symbol} {t.name}</strong> {isSelected && "✓"}</p>
                                        <p className="theme-desc">{t.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                        <button
                            type="submit"
                            className="ghost-button"
                            style={{
                                background: "var(--accent-primary, #6366f1)",
                                color: "#fff",
                                padding: "10px 24px",
                                fontWeight: "600",
                                border: "none",
                                cursor: "pointer"
                            }}
                        >
                            Apply Settings
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
