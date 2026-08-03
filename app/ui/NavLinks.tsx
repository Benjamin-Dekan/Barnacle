"use client";
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
        "px-4 py-2 rounded-full  transition-colors duration-200",
        {
          "bg-[#004B5C]": isCurrentPath,
          "text-xs text-white/50 bg-[#08171A] hover:bg-[#A2E0F1]/40":
            !isCurrentPath,
        },
      )}
    >
      {navTitle}
    </Link>
  );
};

export default NavLinks;
