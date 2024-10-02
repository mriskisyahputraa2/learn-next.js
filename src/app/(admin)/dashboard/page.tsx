"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();

  useEffect(() => {
    // ?. (optional chaining), untuk mengakses user.role secara aman
    if (status === "unauthenticated") {
      router.push("/login");
    } else {
      if (session !== undefined && session?.user.role !== "admin") {
        router.push("/");
      }
    }
  }, [status, router, session?.user.role, session]);
  // console.log(session);
  // console.log(status);
  return (
    <>
      <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
