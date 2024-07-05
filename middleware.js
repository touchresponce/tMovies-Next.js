import { NextResponse } from "next/server";
import { SHORTCUTS, CONTENT_TYPES } from "@/utils/constants";
import { tokens } from "./services/auth-token.service";

export async function middleware(request) {
  const { url, cookies } = request;
  const lastPart = url.split("/").pop();
  const isProfilePage = lastPart === "/profile";
  const isShouldRedirect =
    !(lastPart in SHORTCUTS) &&
    !CONTENT_TYPES.some((type) => type.value === lastPart);

  // refreshToken из cookies
  const refreshToken = cookies.get(tokens.REFRESH_TOKEN)?.value;

  // является ли текущий URL страницей аутентификации
  // const isAuthPage = url.includes("/auth");

  // // Проверяем, нужно ли перенаправить пользователя на главную страницу дашборда
  // if (isAuthPage && refreshToken) {
  //   return NextResponse.redirect(new URL('/profile', url));
  // }

  if (isShouldRedirect) {
    return NextResponse.redirect(new URL("/", url));
  }

  if (isProfilePage && !refreshToken) {
    return NextResponse.redirect(new URL("/auth", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/auth/:path", "/catalog/:path+"],
};
