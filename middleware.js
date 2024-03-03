// import { NextResponse, NextRequest } from "next/server";
// import { getSession } from "next-auth/react"; // Assuming you're using next-auth

// export async function middleware(req) {


//   const jwt = req.cookies.get("");

//   const session = await getSession({ req});


//   const redirectPaths = ["/desktop", "/qrcodegenerator", "/dafac" ,"/api"]; // Array of paths for redirection

//   if (!jwt && redirectPaths.includes(req.nextUrl.pathname)) {
//     return NextResponse.redirect(new URL('/auth/signin', req.url));
//   }

//   // Continue with other middleware logic as needed
//   return NextResponse.next();
// }

export { default } from "next-auth/middleware"
export const config = { matcher: ["/desktop", "/dafac", "/qrcodegenerator"] }