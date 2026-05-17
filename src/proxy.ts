import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LANGS = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"] as const;
const DEFAULT_LANG = "en";

function detectLang(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") ?? "";
  // Parse quality values: "de-DE,de;q=0.9,en;q=0.8"
  const preferred = acceptLang
    .split(",")
    .map((part) => part.trim().split(";")[0].split("-")[0].toLowerCase())
    .find((l) => (SUPPORTED_LANGS as readonly string[]).includes(l));
  return preferred ?? DEFAULT_LANG;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal Next.js paths and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-z0-9]+$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // If pathname already starts with a supported lang, continue
  const firstSegment = pathname.split("/")[1];
  if ((SUPPORTED_LANGS as readonly string[]).includes(firstSegment)) {
    return NextResponse.next();
  }

  // Redirect to lang-prefixed URL
  const lang = detectLang(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon|icons\\.svg|.*\\.avif|.*\\.webp|.*\\.png|.*\\.svg|.*\\.jpg).*)"],
};
