import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Intercept all agency tenant portal routes
  if (pathname.startsWith('/portal/')) {
    const sessionToken = request.cookies.get('notlac_session')?.value;

    // Redirect unauthenticated requests directly to the Client Login page
    if (!sessionToken) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portal/:path*'],
};
