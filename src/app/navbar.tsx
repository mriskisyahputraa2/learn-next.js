import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <Fragment>
      <nav className="bg-gray-800 py-4 px-5">
        <div className="flex justify-between items-center">
          {/* Brand / Logo */}
          <h1 className="text-white text-lg">Navbar</h1>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Links for Desktop */}
          <div className="hidden lg:flex space-x-6">
            <Link
              href="/"
              className={`${
                pathName === "/" ? "text-blue-300" : "text-white"
              } hover:text-blue-400`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`${
                pathName === "/product" ? "text-blue-300" : "text-white"
              } hover:text-blue-400`}
            >
              Products
            </Link>
            <Link
              href="/book"
              className={`${
                pathName === "/book" ? "text-blue-300" : "text-white"
              } hover:text-blue-400`}
            >
              Books
            </Link>
            <Link
              href="/about"
              className={`${
                pathName === "/about" ? "text-blue-300" : "text-white"
              } hover:text-blue-400`}
            >
              About
            </Link>
            <Link
              href="/profile"
              className={`${
                pathName === "/profile" ? "text-blue-300" : "text-white"
              } hover:text-blue-400`}
            >
              Profile
            </Link>
            <Link
              href="/contact"
              className={`${
                pathName === "/contact" ? "text-blue-300" : "text-white"
              } hover:text-blue-400`}
            >
              Contact
            </Link>
          </div>

          {/* Login Button for Desktop */}
          <div className="hidden lg:block">
            {status === "authenticated" ? (
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm font-medium">
                  {session?.user?.fullname}
                </span>
                <button
                  onClick={() => signOut()}
                  className="bg-white  px-3 py-1 rounded-lg transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  signIn();
                }}
                className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer text-center"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/" ? "text-blue-300" : "text-white"
                  } hover:text-blue-400`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/product" ? "text-blue-300" : "text-white"
                  } hover:text-blue-400`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/book" ? "text-blue-300" : "text-white"
                  } hover:text-blue-400`}
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/about" ? "text-blue-300" : "text-white"
                  } hover:text-blue-400`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/profile" ? "text-blue-300" : "text-white"
                  } hover:text-blue-400`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/contact" ? "text-blue-300" : "text-white"
                  } hover:text-blue-400`}
                >
                  Contact
                </Link>
              </li>
              <li>
                {status === "authenticated" ? (
                  <div className="flex flex-col space-x-2">
                    <span className="text-white text-sm font-medium">
                      {session?.user?.fullname}
                    </span>
                    <button
                      onClick={() => signOut()}
                      className="bg-white px-3 py-1 rounded-lg transition mt-4"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      signIn();
                    }}
                    className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer text-center"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </Fragment>
  );
}
