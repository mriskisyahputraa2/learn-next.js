import React, { Fragment } from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-gray-800">
        <ul className="text-white px-5 py-5">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div>{children}</div>
    </Fragment>
  );
}
