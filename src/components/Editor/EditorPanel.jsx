import { useMemo, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { parseMarkdown } from "../../utils/markdown";
import { exportToPDF } from "../../utils/exportPdf";
import GuideModal from "../Guide/GuideModal";

const DEFAULT_MARKDOWN = `# Welcome to your golden editor

- Add a bullet
- Make it bold with **bold**
- Or emphasize with *italic*

> This preview updates live in dark mode.

## Try color themes!
Click the theme button to cycle through colors.`;

export default function EditorPanel() {
    const { theme, cycleTheme } = useTheme();
    const [text, setText] = useState(DEFAULT_MARKDOWN);
    const [isGuideOpen, setIsGuideOpen] = useState(false);
    const textareaRef = useRef(null);
    const previewRef = useRef(null);

    const htmlOutput = useMemo(() => parseMarkdown(text), [text]);

    const handlePdfExport = () => {
        exportToPDF(previewRef.current);
    };

    const insertFormatting = (prefix, suffix = "") => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = text.substring(start, end);
        const replacement = `${prefix}${selectedText || "text"}${suffix}`;

        const newText = text.substring(0, start) + replacement + text.substring(end);
        setText(newText);

        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + prefix.length, start + prefix.length + (selectedText ? selectedText.length : 4));
        }, 0);
    };

    return (
        <section className="app-shell">
            <div className="panel">
                <div className="panel-header">
                    <div className="badge">Live markdown preview</div>
                    <div className="header-controls">
                        <button type="button" className="ghost-button" onClick={cycleTheme}>
                            {theme.symbol} Theme
                        </button>
                        <span className="theme-label">{theme.name}</span>
                        <button type="button" className="ghost-button" onClick={handlePdfExport}>
                            📄 PDF
                        </button>
                        <button type="button" className="ghost-button" onClick={() => setIsGuideOpen(true)}>
                            ? Guide
                        </button>
                    </div>
                </div>

                {/* Formatting Toolbar */}
                <div style={{
                    display: "flex",
                    gap: "8px",
                    padding: "8px 20px",
                    background: "rgba(0, 0, 0, 0.2)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    alignItems: "center",
                    flexWrap: "wrap",
                    borderRadius: "12px 12px 0 0",
                    marginBottom: "12px"
                }}>
                    <span style={{ fontSize: "12px", opacity: 0.7, marginRight: "4px" }}>Quick Format:</span>
                    <button type="button" className="ghost-button" style={{ padding: "4px 10px", fontSize: "12px" }} onClick={() => insertFormatting("# ")} title="Heading 1">H1</button>
                    <button type="button" className="ghost-button" style={{ padding: "4px 10px", fontSize: "12px" }} onClick={() => insertFormatting("## ")} title="Heading 2">H2</button>
                    <button type="button" className="ghost-button" style={{ padding: "4px 10px", fontSize: "12px" }} onClick={() => insertFormatting("**", "**")} title="Bold"><strong>B</strong></button>
                    <button type="button" className="ghost-button" style={{ padding: "4px 10px", fontSize: "12px" }} onClick={() => insertFormatting("*", "*")} title="Italic"><em>I</em></button>
                    <button type="button" className="ghost-button" style={{ padding: "4px 10px", fontSize: "12px" }} onClick={() => insertFormatting("- ")} title="Bullet list">• List</button>
                    <button type="button" className="ghost-button" style={{ padding: "4px 10px", fontSize: "12px" }} onClick={() => insertFormatting("> ")} title="Blockquote">&ldquo; Quote</button>
                    <button type="button" className="ghost-button" style={{ padding: "4px 10px", fontSize: "12px" }} onClick={() => insertFormatting("`", "`")} title="Code">`code`</button>
                </div>

                <div className="grid">
                    <div className="editor-wrapper">
                        <span>Write markdown</span>
                        <textarea
                            ref={textareaRef}
                            id="editor-input"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="# Heading&#10;&#10;- Bullet point&#10;&#10;> Quote&#10;&#10;**Bold** and *italic* text"
                        ></textarea>
                    </div>
                    <div className="preview-wrapper">
                        <span>Rendered preview</span>
                        <div
                            className="preview-output"
                            ref={previewRef}
                            dangerouslySetInnerHTML={{ __html: htmlOutput }}
                        ></div>
                    </div>
                </div>
            </div>
            <GuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
        </section>
    );
}
