"use client";

import React from "react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("Enter search...");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
    console.log(value);
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
      />
    </div>
  );
};

export default SearchBar;
