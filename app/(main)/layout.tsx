import Header from "../ui/Header";
import React, { Suspense } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <main className="flex-1 overflow-y-auto pt-8 pr-8 pb-8 pl-8 text-white">
        {children}
      </main>
    </div>
  );
}
