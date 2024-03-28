import { getCookie } from "@/utlils/utils";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const jwtToken = getCookie("jwt_token");
  if (!jwtToken) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}

export const config = {
  matchers: ["/", "/profile"],
};
