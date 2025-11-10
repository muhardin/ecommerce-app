import { headers } from 'next/headers';

/**
 * Get the real domain from request headers, handling proxy scenarios.
 * Checks proxy headers (X-Forwarded-Host, X-Real-Host) before falling back to host header.
 * 
 * IMPORTANT: For this to work behind a proxy, your proxy server (nginx, Apache, etc.) must be
 * configured to pass the X-Forwarded-Host header. Example nginx configuration:
 * 
 *   proxy_set_header X-Forwarded-Host $host;
 *   proxy_set_header X-Forwarded-Proto $scheme;
 *   proxy_set_header X-Real-IP $remote_addr;
 * 
 * @returns The real domain name (e.g., "example.com" or "subdomain.example.com")
 */
export function getRealDomain(): string {
  const headersList = headers();
  
  // Check proxy headers first (most common when behind reverse proxy)
  // X-Forwarded-Host is the standard header used by most proxies (nginx, Cloudflare, etc.)
  const forwardedHost = headersList.get('x-forwarded-host');
  if (forwardedHost) {
    // X-Forwarded-Host can contain multiple hosts, take the first one
    return forwardedHost.split(',')[0].trim();
  }
  
  // Check alternative proxy headers
  const realHost = headersList.get('x-real-host');
  if (realHost) {
    return realHost.trim();
  }
  
  // Check X-Forwarded-Server (less common)
  const forwardedServer = headersList.get('x-forwarded-server');
  if (forwardedServer) {
    return forwardedServer.split(',')[0].trim();
  }
  
  // Fallback to standard host header
  const host = headersList.get('host');
  if (host) {
    // Remove port if present (e.g., "localhost:3000" -> "localhost")
    // But keep it for production domains if needed
    return host.split(':')[0].trim();
  }
  
  return '';
}

/**
 * Get the real domain from NextRequest (for middleware)
 * 
 * @param request - NextRequest object from middleware
 * @returns The real domain name
 */
export function getRealDomainFromRequest(request: { headers: Headers }): string {
  const headers = request.headers;
  
  // Check proxy headers first (Headers.get() is case-insensitive)
  const forwardedHost = headers.get('x-forwarded-host');
  if (forwardedHost) {
    return forwardedHost.split(',')[0].trim();
  }
  
  const realHost = headers.get('x-real-host');
  if (realHost) {
    return realHost.trim();
  }
  
  const forwardedServer = headers.get('x-forwarded-server');
  if (forwardedServer) {
    return forwardedServer.split(',')[0].trim();
  }
  
  // Fallback to host header
  const host = headers.get('host');
  if (host) {
    return host.split(':')[0].trim();
  }
  
  return '';
}

