"use client";

import Image from "next/image";
import Link from "next/link";

type SidebarItemProps = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: SidebarItemProps) => {
  return (
    <div className=" mt-4 p-2 rounded-sm">
      <Link href={href} className="flex items-center border-gray-700">
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={32}
          width={32}
        />
        {label}
      </Link>
    </div>
  );
};
