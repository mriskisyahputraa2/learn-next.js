"use client";

import { useState } from "react";

export default function adminBookPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=books&secret=@Mriski123",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidation Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidation Success");
      }
    }
  };

  return (
    <>
      <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mt-5">
        <h1>{status}</h1>
        <button
          className="bg-cyan-800 p-3 text-white rounded-md m-2"
          onClick={() => revalidate()}
        >
          Revalidate Books
        </button>
      </div>
    </>
  );
}
