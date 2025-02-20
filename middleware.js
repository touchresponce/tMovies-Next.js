import { NextResponse } from "next/server";
import { SHORTCUTS, CONTENT_TYPES } from "@/utils/constants";
import { tokens } from "./services/auth-token.service";

export async function middleware(request) {
  const { url, cookies } = request;
  const lastPart = url.split("/").pop();
  const refreshToken = cookies.get(tokens.REFRESH_TOKEN)?.value;
  const isShouldRedirect =
    !(lastPart in SHORTCUTS) &&
    !CONTENT_TYPES.some((type) => type.value === lastPart);

  const isProfilePage = url.includes("/profile");
  const isCatalogPage = url.includes("/catalog");

  if (isProfilePage && !refreshToken) {
    return NextResponse.redirect(new URL("/", url));
  }

  if (isCatalogPage && isShouldRedirect) {
    return NextResponse.redirect(new URL("/catalog", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/catalog/:path+"],
};
