"use client";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

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
    <header className="sticky z-50 top-0 w-full bg-[#004B5C]/30 border-b border-white/10 backdrop-blur-md px-6 pt-4 pb-2">
      <div className="flex items-center gap-2">
        <div className="flex flex-1 items-center gap-3">
          <Image
            src="/barnacle.svg"
            width={52}
            height={52}
            alt="Picture of barnacle logo"
          />
          <h1 className={` ${cormorant.className} font-medium text-3xl`}>
            Barnacle
          </h1>
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
