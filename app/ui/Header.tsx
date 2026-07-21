"use client";
import React from "react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const searchRouter = (queryString: string) => {
    if (queryString) {
      router.push(`/discover?q=${queryString}`);
    } else router.push(`/discover`);
  };

  return (
    <header className="sticky z-50 top-0 w-full bg-[#111111]/80 border-b border-white/10 backdrop-blur-md">
      <div className="flex justify-between items-center h-19 px-8 relative">
        <div className="flex items-center gap-8">
          <Link href="/discover" className="relative w-13 h-13">
            <Image src="/barnacle.svg" fill alt="Picture of barnacle logo" />
          </Link>
          <div className="text-3xl -ml-4 mr-134">Barnacle</div>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <NavLinks navLink="/profile" navTitle="Profile" />
          <NavLinks navLink="/watchlist" navTitle="Watchlist" />
          <NavLinks navLink="/discover" navTitle="Discover" />
        </div>

        <SearchBar onSearch={searchRouter} />
      </div>
    </header>
  );
};

export default Header;
