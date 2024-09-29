"use client";

import { useState } from "react";

export default function adminProductPage() {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=@Mriski123",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidation successfully");
      }
    }
  };

  return (
    <>
      <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
        <h1>{status}</h1>
        <button
          className="bg-cyan-800 p-3 text-white rounded-md m-2"
          onClick={() => revalidate()}
        >
          Revalidate Products
        </button>
      </div>
    </>
  );
}
