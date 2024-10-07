import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile - MY APP",
  description: "Halaman Profile",
  icons: {
    icon: "../../images/user.png",
  },
};

import React, { Fragment } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <div>{children}</div>
    </Fragment>
  );
}
