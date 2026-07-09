"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BackArrow() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="absolute top-4 left-4 flex items-center justify-center w-11 h-11 rounded-full bg-black/50 backdrop-blur-md ring-1 ring-white/10 hover:bg-black/70 transition-colors active:scale-90"
    >
      <Image
        src="/icons8-arrow-left-50.png"
        width="25"
        height="25"
        alt="Back Arrow"
      />
    </button>
  );
}
