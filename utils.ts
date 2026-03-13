// Small helper utilities

export function formatDate(date: string | undefined) {
  return date ? new Date(date).toLocaleString() : "N/A";
}

export function shortId(id: string) {
  return id ? id.slice(0, 8) : "";
}
