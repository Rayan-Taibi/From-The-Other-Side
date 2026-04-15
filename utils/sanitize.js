import sanitizeHtml from "sanitize-html";

export function sanitizeInput(input) {
    const sanitizedData = sanitizeHtml(input, {
        allowedTags: ['b'],  // only allow <b> tags
        allowedAttributes: {}, // No attributes allowed
    });
    return sanitizedData;
}