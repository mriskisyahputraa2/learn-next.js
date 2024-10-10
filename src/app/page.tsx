import type { Metadata } from "next";

// contoh penulisan metadata static
export const metadata: Metadata = {
  title: "Home - MY APP",
  description: "Aplikasi Belajar Next Js",
  authors: [
    { name: "Muhammad Rizki Syahputra", url: "http://localhost:3000/" },
  ],
  icons: {
    icon: "../public/images/home.png",
  },
};

export default function Home() {
  throw new Error("Something went wrong");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello World
    </div>
  );
}
