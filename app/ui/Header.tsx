"use client";
import React from "react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const searchRouter = (queryString: string) => {
    if (queryString) {
      router.push(`/discover?q=${queryString}`);
    } else router.push(`/discover`);
  };

  return (
    <header className="sticky z-50 top-0 w-full bg-[#111111]/80 border-b border-white/5 backdrop-blur-md">
      <div className="flex justify-between items-center h-16 px-8">
        <div className="flex items-center gap-8">
          <div>Logo</div>
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
