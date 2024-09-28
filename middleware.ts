import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth");
    const isProtectedPage = req.nextUrl.pathname.startsWith("/pages/protected");

    console.log("Middleware accessed path:", req.nextUrl.pathname);

    // Redirect authenticated users away from auth pages

    if (isProtectedPage && !req.nextauth.token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    if (isAuthPage && req.nextauth.token) {
      return NextResponse.redirect(
        new URL("/pages/protected/dashboard", req.url)
      );
    }

    // For all other cases, continue to the next middleware or to the page
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isAuthPage = req.nextUrl.pathname.startsWith("/auth");
        const isProtectedPage =
          req.nextUrl.pathname.startsWith("/pages/protected");

        // Allow access to auth pages if not authenticated
        if (isAuthPage) return true;

        // Require authentication for protected pages
        if (isProtectedPage) return !!token;

        // Allow access to public pages
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/auth/:path*", "/pages/protected/:path*"],
};
