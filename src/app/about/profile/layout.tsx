import React, { Fragment } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <h1>Title Profile</h1>

      <div>{children}</div>
    </Fragment>
  );
}
