import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Check if the path is for api/:path*
    // Redirect authenticated users away from auth pages
    const isApiPath = req.nextUrl.pathname.startsWith("/api/protect");
    // console.log(req.nextauth.token);
    // console.log(  req.json());
    if (isApiPath && !req.nextauth.token) {
      return new Response("Unauthorized", { status: 404 });
    }

    const isAuthPage =
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register");
    const isProtectedPage = req.nextUrl.pathname.startsWith("/create");

    console.log("Middleware accessed path:", req.nextUrl.pathname);

    // Redirect authenticated users away from auth pages

    if (isProtectedPage && !req.nextauth.token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (isProtectedPage && req.nextauth.token) {
      if (req.nextauth.token.role === "creator") {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL("/", req.url));
    }
    // console.log(isAuthPage ? "AuthPage" : "NotAuthPage");
    if (isAuthPage && req.nextauth.token) {
      if (req.nextauth.token.role === "creator") {
        return NextResponse.redirect(new URL("/create", req.url));
      } else {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isAuthPage =
          req.nextUrl.pathname.startsWith("/login") ||
          req.nextUrl.pathname.startsWith("/register");
        const isProtectedPage =
          req.nextUrl.pathname.startsWith("/create") ||
          req.nextUrl.pathname.startsWith("/dashboard");

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
  matcher: [
    "/login",
    "/create",
    "/register",
    "/api/:path*",
    "/dashboard/:path*",
  ],
};
