export function getBaseUrl() {
  // In the browser, use relative URLs (works for both dev and production)
  if (typeof window !== 'undefined') {
    return '/api';
  }

  // Server-side: check for environment variable first
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (baseUrl) {
    return baseUrl.replace(/['\"]/g, '');
  }

  // Vercel deployment
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}/api`;
  }

  // Fallback to localhost for development
  return 'http://localhost:3000/api';
}
