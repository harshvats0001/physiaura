import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if expired - required for Server Components
  await supabase.auth.getSession();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If accessing admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to login page
    if (req.nextUrl.pathname === '/admin/login') {
      if (session) {
        // If already logged in, redirect to dashboard
        return NextResponse.redirect(new URL('/admin/dashboard', req.url));
      }
      return res;
    }

    // For dashboard and other admin routes
    if (req.nextUrl.pathname.startsWith('/admin/dashboard')) {
      if (!session) {
        // If not logged in, redirect to login
        return NextResponse.redirect(new URL('/admin/login', req.url));
      }
    }
  }

  return res;
}

// Update config to only run middleware on admin routes
export const config = {
  matcher: [
    '/admin/:path*'
  ]
}; 