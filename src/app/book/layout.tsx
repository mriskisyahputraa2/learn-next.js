import { roboto_mono } from "../../../public/fonts/font";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books - MY APP",
  description: "Halaman Books",
  icons: {
    icon: "/images/book.png",
  },
};

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div className={roboto_mono.className}>{children}</div>
      {modal}
    </>
  );
}
