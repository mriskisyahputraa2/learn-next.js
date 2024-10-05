import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiLogin, CiLogout } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  const { data: session, status } = useSession();

  return (
    <Fragment>
      <nav className="bg-gray-900 py-4 px-5 shadow-md">
        <div className="flex justify-between items-center">
          {/* Brand / Logo */}
          <Link href="/">
            <h1 className="text-white text-2xl font-bold cursor-pointer">
              Next.Js
            </h1>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Links for Desktop */}
          <div className="hidden lg:flex space-x-8">
            <Link
              href="/"
              className={`${
                pathName === "/" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition duration-300`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`${
                pathName === "/product" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition duration-300`}
            >
              Products
            </Link>
            <Link
              href="/book"
              className={`${
                pathName === "/book" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition duration-300`}
            >
              Books
            </Link>
            <Link
              href="/about"
              className={`${
                pathName === "/about" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition duration-300`}
            >
              About
            </Link>
            <Link
              href="/profile"
              className={`${
                pathName === "/profile" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition duration-300`}
            >
              Profile
            </Link>
            <Link
              href="/contact"
              className={`${
                pathName === "/contact" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition duration-300`}
            >
              Contact
            </Link>
          </div>

          {/* Login Button for Desktop */}
          <div className="hidden lg:block">
            {status === "authenticated" ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-200 text-sm">
                  {session?.user?.fullname || session?.user?.name}
                </span>
                <CiLogout
                  onClick={() => signOut()}
                  className=" text-red-500 rounded-full transition-all duration-200 ease-in-out w-7 h-7 flex items-center justify-center"
                  title="Logout"
                />
              </div>
            ) : (
              <CiLogin
                onClick={() => signIn()}
                className=" text-blue-500 rounded-full transition-all duration-200 ease-in-out  w-7 h-7 flex items-center justify-center"
                title="Login"
              />
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
                    pathName === "/" ? "text-blue-400" : "text-gray-300"
                  } hover:text-blue-500 transition duration-300`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/product" ? "text-blue-400" : "text-gray-300"
                  } hover:text-blue-500 transition duration-300`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/book" ? "text-blue-400" : "text-gray-300"
                  } hover:text-blue-500 transition duration-300`}
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/about" ? "text-blue-400" : "text-gray-300"
                  } hover:text-blue-500 transition duration-300`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/profile" ? "text-blue-400" : "text-gray-300"
                  } hover:text-blue-500 transition duration-300`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className={`block ${
                    pathName === "/contact" ? "text-blue-400" : "text-gray-300"
                  } hover:text-blue-500 transition duration-300`}
                >
                  Contact
                </Link>
              </li>
              <li>
                {status === "authenticated" ? (
                  <div className="flex flex-col items-start space-y-3 mt-4">
                    <span className="text-gray-200 text-sm">
                      {session?.user?.fullname || session?.user?.name}
                    </span>
                    <button
                      onClick={() => signOut()}
                      className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => signIn()}
                    className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition mt-4"
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
