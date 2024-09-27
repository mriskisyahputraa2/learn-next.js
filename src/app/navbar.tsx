import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment } from "react";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <Fragment>
      <nav className="flex justify-between bg-gray-800 py-2 px-5">
        <h1 className="text-white">Navbar</h1>
        <div className="flex">
          <ul className="flex ml-5">
            <Link href="/">
              <li
                className={`mr-3 ${
                  pathName === "/" ? "text-blue-300" : "text-white"
                } cursor-pointer`}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`mr-3 ${
                  pathName === "/about" ? "text-blue-300" : "text-white"
                } cursor-pointer`}
              >
                About
              </li>
            </Link>
            <Link href="/about/profile">
              <li
                className={`mr-3 ${
                  pathName === "/about/profile" ? "text-blue-300" : "text-white"
                } cursor-pointer`}
              >
                Profile
              </li>
            </Link>
            <Link href="/contact">
              <li
                className={`mr-3 ${
                  pathName === "/contact" ? "text-blue-300" : "text-white"
                } cursor-pointer`}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div className="">
          <button
            onClick={() => router.push("/login")}
            className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer text-center"
          >
            Login
          </button>
        </div>
      </nav>
    </Fragment>
  );
}
