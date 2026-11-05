function parseMarkdown(text) {
    const lines = text.split(/\n/);
    const html = [];
    let currentList = [];

    for (const line of lines) {
        const trimmed = line.trim();

        if (!trimmed) {
            if (currentList.length > 0) {
                html.push(`<ul>${currentList.join("")}</ul>`);
                currentList = [];
            }
            continue;
        }

        if (trimmed.startsWith("# ")) {
            if (currentList.length > 0) {
                html.push(`<ul>${currentList.join("")}</ul>`);
                currentList = [];
            }
            html.push(`<h1>${formatInline(trimmed.slice(2))}</h1>`);
        } else if (trimmed.startsWith("## ")) {
            if (currentList.length > 0) {
                html.push(`<ul>${currentList.join("")}</ul>`);
                currentList = [];
            }
            html.push(`<h2>${formatInline(trimmed.slice(3))}</h2>`);
        } else if (trimmed.startsWith("- ")) {
            currentList.push(`<li>${formatInline(trimmed.slice(2))}</li>`);
        } else if (trimmed.startsWith("> ")) {
            if (currentList.length > 0) {
                html.push(`<ul>${currentList.join("")}</ul>`);
                currentList = [];
            }
            html.push(`<blockquote>${formatInline(trimmed.slice(2))}</blockquote>`);
        } else {
            if (currentList.length > 0) {
                html.push(`<ul>${currentList.join("")}</ul>`);
                currentList = [];
            }
            html.push(`<p>${formatInline(trimmed)}</p>`);
        }
    }

    if (currentList.length > 0) {
        html.push(`<ul>${currentList.join("")}</ul>`);
    }

    return html.join("\n");
}

function formatInline(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/`([^`]+)`/g, "<code>$1</code>");
}

export { parseMarkdown };
