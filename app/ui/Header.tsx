"use client";
import React from "react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentParams = new URLSearchParams(searchParams);
  const currentPathname = usePathname();

  const searchRouter = (queryString: string) => {
    if (queryString) {
      currentParams.set("q", queryString);
    } else currentParams.delete("q");

    router.push(`${currentPathname}?${currentParams}`);
  };

  return (
    <header className="sticky z-50 top-0 w-full bg-[#111111]/80 border-b border-white/10 backdrop-blur-md">
      <div className="flex items-center h-19 px-8">
        <div className="flex-1 flex items-center gap-3">
          <Link href="/discover" className="relative w-13 h-13 shrink-0">
            <Image src="/barnacle.svg" fill alt="Picture of barnacle logo" />
          </Link>
          <div className="text-3xl">Barnacle</div>
        </div>

        <div className="flex-1 hidden lg:flex items-center justify-center gap-8 min-w-0">
          <NavLinks navLink="/profile" navTitle="Profile" />
          <NavLinks navLink="/watchlist" navTitle="Watchlist" />
          <NavLinks navLink="/discover" navTitle="Discover" />
        </div>

        <div className="flex-1 flex justify-end min-w-0">
          <SearchBar onSearch={searchRouter} />
        </div>
      </div>
    </header>
  );
};

export default Header;
