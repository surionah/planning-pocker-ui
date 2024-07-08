import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname !== "/waiting-room") {
    return NextResponse.redirect(new URL("/waiting-room", request.url));
  }
  return NextResponse.next();
}
