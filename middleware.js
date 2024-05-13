import { NextResponse } from "next/server";
import { SHORTCUTS, CONTENT_TYPES } from "@/utils/constants";

export function middleware(request) {
  const lastPart = request.url.split("/").pop();

  const shouldRedirect =
    !(lastPart in SHORTCUTS) &&
    !CONTENT_TYPES.some((type) => type.value === lastPart);

  return shouldRedirect
    ? NextResponse.redirect(new URL("/", request.url))
    : NextResponse.next();
}

export const config = {
  matcher: "/catalog/:path+",
};
