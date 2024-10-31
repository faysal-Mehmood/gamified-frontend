// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request) {
  const fullUrl = request.url || request.nextUrl.href;

  // Create a response with the full URL added as a custom header
  const response = NextResponse.next();
  response.headers.set("x-full-url", fullUrl);
  return response;
}

export const config = {
  matcher: "/:path*", // Apply middleware to all routes
};
