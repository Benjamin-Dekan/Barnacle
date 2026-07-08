import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/app/ui/NavLinks";
import SearchBar from "../ui/SearchBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#111111]">
      <header className="sticky z-50 top-0 w-full bg-[#111111]/80 border-b border-white/5 backdrop-blur-md">
        <div className="flex justify-between items-center h-16 px-8">
          <div className="flex items-center gap-8">
            <div>Logo</div>
            <NavLinks navLink="/profile" navTitle="Profile" />
            <NavLinks navLink="/watchlist" navTitle="Watchlist" />
            <NavLinks navLink="/discover" navTitle="Discover" />
          </div>
          <SearchBar />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-8 text-white">{children}</main>
    </div>
  );
}
