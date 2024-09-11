"use client";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavDestop: NextPage<{ setActivePage: (page: string) => void }> = ({
  setActivePage,
}) => {
  const [activePage, setActivePageState] = useState("home");

  const handlePageChange = (page: string) => {
    setActivePage(page);
    setActivePageState(page);
  };
  const style =
    "bottom-0 left-0 top-0 hidden flex-col gap-5 border-[#e5e5e5] p-3 md:flex lg:w-64 lg:p-5";
  const link =
    "mb-5 ml-5 mt-5 hidden text-3xl font-bold text-[#afa98ce6] lg:block";
  const ul = "flex flex-col items-stretch gap-3";
  const ulli = "flex flex-1 *:dark:hover:bg-gray-700  *:hover:bg-pink-200 ";

  const span = "sr-only lg:not-sr-only";

  return (
    <nav className={style}>
      <Link className={link} href="/">
        memrinc
      </Link>
      <ul className={ul}>
        <li className={ulli}>
          <button
            className={`flex grow items-center gap-3 rounded-xl border-2 px-2 py-1 text-sm font-bold uppercase ${
              activePage === "home"
                ? "border-[5px] bg-antiquewhite text-[#a58f8f] border-[#a58f8f] rounded-[15px]"
                : ""
            }`}
            onClick={() => handlePageChange("home")}
          >
            <Image
              alt="home"
              width={50}
              className={`m-2`}
              height={50}
              src="/home.svg"
            />{" "}
            <span className={span}>Home</span>
          </button>
        </li>
        <li className={ulli}>
          <button
            className={`flex grow items-center gap-3 rounded-xl border-2 px-2 py-1 text-sm font-bold uppercase ${
              activePage === "notifications"
                ? "border-[5px] bg-antiquewhite text-[#a58f8f] border-[#a58f8f] rounded-[15px]"
                : ""
            }`}
            onClick={() => handlePageChange("notifications")}
          >
            <Image
              alt="notifications"
              className={`m-2`}
              width={40}
              height={40}
              src="/bell.svg"
            />{" "}
            <span className={span}>Notification</span>
          </button>
        </li>
        <li className={ulli}>
          <button
            className={`flex grow items-center gap-3 rounded-xl border-2 px-2 py-1 text-sm font-bold uppercase ${
              activePage === "search"
                ? "border-[5px] bg-antiquewhite text-[#a58f8f] border-[#a58f8f] rounded-[15px]"
                : ""
            }`}
            onClick={() => handlePageChange("search")}
          >
            <Image
              alt="search"
              className={`m-2`}
              width={40}
              height={40}
              src="/tropy.svg"
            />{" "}
            <span className={span}>Achivments</span>
          </button>
        </li>
        <li className={ulli}>
          <button
            className={`flex grow items-center gap-3 rounded-xl border-2 px-2 py-1 text-sm font-bold uppercase ${
              activePage === "profile"
                ? "border-[5px] bg-antiquewhite text-[#a58f8f] border-[#a58f8f] rounded-[15px]"
                : ""
            }`}
            role="button"
            onClick={() => handlePageChange("profile")}
          >
            <Image
              alt="profile"
              width={40}
              height={40}
              className={`m-2`}
              src="/profile.svg"
            />
            <span className={span}>profile</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavDestop;
