import DOMPurify from "isomorphic-dompurify";

export function sanitizeHtml(document: string) {
  const sanitizedHtml = DOMPurify.sanitize(document);
  return sanitizedHtml
}