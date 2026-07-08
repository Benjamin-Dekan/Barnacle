import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/app/ui/NavLinks";

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
          <div className="group flex items-center w-64 rounded-full bg-[#232323] px-4 h-10 text-white gap-2">
            <Image
              src="/icons8-search-50-2.svg"
              alt="Search"
              width={20}
              height={20}
              className="opacity-50 group-focus-within:hidden"
            ></Image>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-full text-md placeholder-gray-500"
            />
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-8 text-white">{children}</main>
    </div>
  );
}
