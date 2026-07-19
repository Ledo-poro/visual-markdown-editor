function createEditorLayout() {
    return `
        <section class="app-shell">
            <div class="panel">
                <div class="panel-header">
                    <div class="badge">Live markdown preview</div>
                    <div class="header-controls">
                        <button type="button" class="ghost-button" id="theme-toggle">🌙 Theme</button>
                        <span class="theme-label" id="theme-info">Violet</span>
                        <button type="button" class="ghost-button" id="pdf-export">📄 PDF</button>
                        <button type="button" class="ghost-button" id="help-button">? Guide</button>
                    </div>
                </div>
                <div class="grid">
                    <div class="editor-wrapper">
                        <span>Write markdown</span>
                        <textarea id="editor-input" placeholder="# Heading\n\n- Bullet point\n\n> Quote\n\n**Bold** and *italic* text"></textarea>
                    </div>
                    <div class="preview-wrapper">
                        <span>Rendered preview</span>
                        <div class="preview-output" id="preview-output"></div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function setPreviewContent(content) {
    const output = document.querySelector("#preview-output");
    if (output) {
        output.innerHTML = content;
    }
}

export { createEditorLayout, setPreviewContent };
