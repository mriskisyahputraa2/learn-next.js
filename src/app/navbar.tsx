import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiLogin, CiLogout } from "react-icons/ci";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

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
            {["/", "/product", "/book", "/about", "/profile", "/contact"].map(
              (link) => (
                <Link
                  key={link}
                  href={link}
                  className={`${
                    pathName === link ? "text-blue-400" : "text-gray-300"
                  } hover:text-blue-500 transition duration-300`}
                >
                  {link === "/"
                    ? "Home"
                    : link.charAt(1).toUpperCase() + link.slice(2)}
                </Link>
              )
            )}
          </div>

          {/* Profile Image and Login/Logout Button for Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {status === "authenticated" ? (
              <>
                <Image
                  src="/images/profile.webp"
                  alt="profile"
                  width="48"
                  height="48"
                  className="rounded-full"
                />
                <span className="text-gray-200 text-sm">
                  {session?.user?.fullname || session?.user?.name}
                </span>
                <CiLogout
                  onClick={() => signOut()}
                  className="text-red-500 cursor-pointer transition-all duration-200 ease-in-out w-7 h-7"
                  title="Logout"
                />
              </>
            ) : (
              <CiLogin
                onClick={() => signIn()}
                className="text-blue-500 cursor-pointer transition-all duration-200 ease-in-out w-7 h-7"
                title="Login"
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-gray-800 rounded-lg p-4">
            <ul className="space-y-4">
              {["/", "/product", "/book", "/about", "/profile", "/contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={link}
                      onClick={handleLinkClick}
                      className={`block ${
                        pathName === link ? "text-blue-400" : "text-gray-300"
                      } hover:text-blue-500 transition duration-300`}
                    >
                      {link === "/"
                        ? "Home"
                        : link.charAt(1).toUpperCase() + link.slice(2)}
                    </Link>
                  </li>
                )
              )}
              <li>
                {status === "authenticated" ? (
                  <div className="flex space-y-3">
                    <Image
                      src="/images/profile.webp"
                      alt="profile"
                      width="64"
                      height="64"
                      className="rounded-full"
                    />
                    <span className="text-gray-200 text-sm mr-3">
                      {session?.user?.fullname || session?.user?.name}
                    </span>
                    <CiLogout
                      onClick={() => signOut()}
                      className="text-red-500 cursor-pointer transition-all duration-200 ease-in-out w-7 h-7"
                      title="Logout"
                    />
                  </div>
                ) : (
                  <CiLogin
                    onClick={() => signIn()}
                    className="text-blue-500 cursor-pointer transition-all duration-200 ease-in-out w-7 h-7"
                    title="Login"
                  />
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </Fragment>
  );
}
