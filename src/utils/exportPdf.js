export async function exportToPDF(previewElement) {
    if (!previewElement || !previewElement.innerHTML.trim()) {
        alert("Nothing to export! Write some markdown first.");
        return;
    }

    if (typeof window.html2pdf !== "function") {
        alert("PDF library not loaded. Please refresh the page and try again.");
        return;
    }

    const clone = previewElement.cloneNode(true);
    const computedStyle = getComputedStyle(document.body);
    const bgColor = computedStyle.backgroundColor;
    const textColor = computedStyle.color;

    const applyInlineStyles = (element) => {
        const elements = element.querySelectorAll("*");
        elements.forEach((el) => {
            const computed = getComputedStyle(el);
            el.style.color = computed.color;
            el.style.fontSize = computed.fontSize;
            el.style.fontWeight = computed.fontWeight;
            el.style.fontStyle = computed.fontStyle;
            el.style.textDecoration = computed.textDecoration;
            el.style.backgroundColor = computed.backgroundColor;
            el.style.padding = computed.padding;
            el.style.margin = computed.margin;
            el.style.borderColor = computed.borderColor;
            el.style.borderWidth = computed.borderWidth;
            el.style.borderStyle = computed.borderStyle;
        });
    };

    applyInlineStyles(clone);

    const wrapper = document.createElement("div");
    wrapper.style.backgroundColor = bgColor;
    wrapper.style.color = textColor;
    wrapper.style.padding = "20px";
    wrapper.style.fontFamily = getComputedStyle(document.body).fontFamily;
    wrapper.appendChild(clone);

    const opt = {
        margin: 10,
        filename: "markdown-export.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
            scale: 2,
            backgroundColor: null,
            logging: false,
            useCORS: true
        },
        jsPDF: { orientation: "portrait", unit: "mm", format: "a4" }
    };

    try {
        await window.html2pdf().set(opt).from(wrapper).save();
    } catch (err) {
        console.error("PDF export error:", err);
        alert("Error generating PDF. Please try again.");
    }
}
