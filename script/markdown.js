function parseMarkdown(text) {
    const lines = text.split(/\n/);
    const html = lines.map((line) => {
        const trimmed = line.trim();

        if (!trimmed) {
            return "";
        }

        if (trimmed.startsWith("# ")) {
            return `<h1>${trimmed.slice(2)}</h1>`;
        }

        if (trimmed.startsWith("## ")) {
            return `<h2>${trimmed.slice(3)}</h2>`;
        }

        if (trimmed.startsWith("- ")) {
            return `<li>${trimmed.slice(2)}</li>`;
        }

        if (trimmed.startsWith("> ")) {
            return `<blockquote>${trimmed.slice(2)}</blockquote>`;
        }

        return `<p>${formatInline(trimmed)}</p>`;
    });

    const listItems = html.filter((entry) => entry.startsWith("<li>"));
    const nonListItems = html.filter((entry) => !entry.startsWith("<li>"));
    const groupedItems = listItems.length ? [`<ul>${listItems.join("")}</ul>`] : [];

    return [...nonListItems, ...groupedItems].join("\n");
}

function formatInline(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/`([^`]+)`/g, "<code>$1</code>");
}

export { parseMarkdown };
