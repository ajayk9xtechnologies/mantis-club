export function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  if (url) return url.replace(/['"]/g, "");
  return "http://localhost:3000/api";
}
