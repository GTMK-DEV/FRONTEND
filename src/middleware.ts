import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // const token = 'access_token';
  const token = '';
  const publicPaths = ['/auth', '/auth/login', '/auth/register'];
  const isPublicPath = publicPaths.includes(req.nextUrl.pathname);
  console.log(isPublicPath);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
