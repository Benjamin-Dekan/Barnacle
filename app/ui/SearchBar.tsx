"use client";

import React from "react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export type SearchProps = {
  onSearch: (value: string) => void;
};

const SearchBar = (props: SearchProps) => {
  const { onSearch } = props;
  const isOnDiscover = usePathname() === "/discover";
  const [value, setValue] = useState("");

  const debounceSearch = useDebouncedCallback((value: string) => {
    onSearch(value);
  }, 300);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);

    if (isOnDiscover) {
      debounceSearch(target.value);
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOnDiscover && event.key === "Enter") {
      onSearch(value);
    }
  };
  return (
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
        onChange={searchHandler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export default SearchBar;
