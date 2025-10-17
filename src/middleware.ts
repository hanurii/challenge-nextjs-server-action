import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

const possiblePathWithoutCookie: Record<string, boolean> = {
  "/create-account": true,
  "log-in": true,
};

export async function middleware(request: NextRequest) {
  // 로그인 정보가 없을 때 private page 접근 시 "/" 으로 이동
  if (request.nextUrl.pathname === "/profile") {
    const session = await getSession();

    if (!session.id) {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  if (possiblePathWithoutCookie[request.nextUrl.pathname]) {
    const session = await getSession();

    if (session.id) {
      const url = request.nextUrl.clone();
      url.pathname = "/products";
      return NextResponse.redirect(url);
    }
  }

  // 세션 정보가 있을 땐 -> /create-account, /log-in 과 같은 page 접근 시 "/products" 로 이동
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
