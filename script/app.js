import { createEditorLayout, setPreviewContent } from "./dom.js";
import { parseMarkdown } from "./markdown.js";

function initApp() {
    const root = document.querySelector("main");
    if (!root) {
        return;
    }

    root.innerHTML = createEditorLayout();

    const editor = document.querySelector("#editor-input");
    const themeButton = document.querySelector("#theme-toggle");

    if (!editor) {
        return;
    }

    editor.addEventListener("input", () => {
        setPreviewContent(parseMarkdown(editor.value));
    });

    editor.value = "# Welcome to your golden editor\n\n- Add a bullet\n- Make it bold with **bold**\n- Or emphasize with *italic*\n\n> This preview updates live in dark mode.";
    setPreviewContent(parseMarkdown(editor.value));

    if (themeButton) {
        let currentTheme = "theme-violet";
        themeButton.addEventListener("click", () => {
            currentTheme = currentTheme === "theme-violet" ? "theme-amber" : "theme-violet";
            document.body.classList.toggle("theme-violet", currentTheme === "theme-violet");
            document.body.classList.toggle("theme-amber", currentTheme === "theme-amber");
        });
    }
}

initApp();
