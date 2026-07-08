import React from "react";
import Link from "next/link";

const NavLinks = ({
  navLink,
  navTitle,
}: {
  navLink: string;
  navTitle: string;
}) => {
  return (
    <Link
      href={navLink}
      className="block px-4 py-3 rounded-lg bg-[#343434] hover:bg-[#232323] transition-colors duration-200"
    >
      {navTitle}
    </Link>
  );
};

export default NavLinks;
