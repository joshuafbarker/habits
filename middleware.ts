import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // set up the NextResponse
  const response = NextResponse.next();

  // check if the request has the first visit cookie
  // if it doesn't, set the first visit cookie
  if (!request.cookies.has("first_visit")) {
    // set the first visit cookie to true
    response.cookies.set({
      name: "first_visit",
      value: "true",
    });
  }

  return response;
}

export const config = {
  matcher: ["/"],
};
