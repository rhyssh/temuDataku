/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // This middleware runs on the server, but we're using client-side auth
  // So we'll let the client-side code handle the redirect
  return NextResponse.next();
}

export const config = {
  matcher: ["/katalog/:path*"],
};
