import Header from "../ui/Header";
import React, { Suspense } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#08171A]">
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <main className="flex-1 overflow-y-auto p-8 text-white">{children}</main>
    </div>
  );
}
