import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const onlyAdminPage = ["/dashboard", "/book", "/profile"];
const authPage = ["/login", "/register"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      // cek jika user belum login
      if (!token && !authPage.includes(pathname)) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url); // redirect user kehalaman login, untuk login dulu
      }

      // validasi, user sudah login dan sudah terdapat token
      if (token) {
        // cek apakah authPage masuk sesuai dengan url pathname yaitu authPage('/login', '/register')
        if (authPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url)); // redirect user ke halaman home
        }
        // cek apakah role nya adalah admin, dan hanya admin yang boleh masuk kehalaman AdminPage
        if (token.role !== "admin" && onlyAdminPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url)); // kalo bukan admin, redirect user kehalaman home
        }
      }
    }
    return middleware(req, next);
  };
}
