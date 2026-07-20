"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLinks = ({
  navLink,
  navTitle,
}: {
  navLink: string;
  navTitle: string;
}) => {
  const isCurrentPath = usePathname() === navLink;
  return (
    <Link
      href={navLink}
      className={clsx(
        "px-4 py-2 rounded-full bg-[#232323] hover:bg-[#343434] transition-colors duration-200",
        {
          "bg-[#343434]": isCurrentPath,
          "text-xs text-white/50": !isCurrentPath,
        },
      )}
    >
      {navTitle}
    </Link>
  );
};

export default NavLinks;
