import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts - MY APP",
  description: "Halaman Contact",
  icons: {
    icon: "/images/contact-mail.png",
  },
};

export default function Contact() {
  return <div>Contact</div>;
}
