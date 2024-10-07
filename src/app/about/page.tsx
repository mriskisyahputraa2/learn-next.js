import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - MY APP",
  description: "Halaman About",
  icons: {
    icon: "/images/info.png",
  },
};

export default function AboutPage() {
  return <div>AboutPage</div>;
}
