"use client";

import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode, useRef } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed z-50 inset-0 bg-black/60 bg-opacity-70 flex justify-center items-center"
      onClick={close}
    >
      <div className="relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn">
        {/* Modal Content */}
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
