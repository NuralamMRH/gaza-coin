import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // If user is not logged in and trying to access any admin route
    if (!session) {
      // Allow access to login page
      if (request.nextUrl.pathname === "/admin/login") {
        return res;
      }
      // Redirect to login for all other admin routes
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // If user is logged in and trying to access login page
    if (session && request.nextUrl.pathname === "/admin/login") {
      // Check if user is admin
      const { data: profile } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", session.user.id)
        .single();

      if (profile?.is_admin) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
    }

    // For other admin routes, check if user is admin
    if (session && request.nextUrl.pathname !== "/admin/login") {
      const { data: profile } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", session.user.id)
        .single();

      if (!profile?.is_admin) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
    }
  }

  return res;
}

export const config = {
  matcher: ["/admin/:path*"],
};
