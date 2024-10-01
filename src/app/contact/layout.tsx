import React, { Fragment } from "react";

export default function AboutLayout({
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
