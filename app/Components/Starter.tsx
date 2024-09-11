"use client";

import { type NextPage } from "next";
import React, { useState, useEffect } from "react";
import _bgSnow from "/public/bg-snow.svg";
import type { StaticImageData } from "next/image";
import { GlobeSvg } from "./Globsvg";
import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

const bgSnow = _bgSnow as StaticImageData;

const StarterPage: NextPage = () => {
  const [bgPosition, setBgPosition] = useState({ x: "50%", y: "50%" });
  const [mouseMoved, setMouseMoved] = useState(false);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;

    const xPos = (clientX / offsetWidth) * 100;
    const yPos = (clientY / offsetHeight) * 100;

    setBgPosition({
      x: `${xPos}%`,
      y: `${yPos}%`,
    });
    setMouseMoved(true);
  };

  // Reset animation to default after mouse stops moving
  useEffect(() => {
    if (mouseMoved) {
      const timeoutId = setTimeout(() => {
        setMouseMoved(false);
      }, 900); // Adjust timeout as needed
      return () => clearTimeout(timeoutId);
    }
  }, [mouseMoved]);

  return (
    <main
      onMouseMove={handleMouseMove}
      className={`flex min-h-screen flex-col items-center justify-center bg-[#275b96] text-[#e5e7e7e8] ${
        !mouseMoved ? "animate-move-right" : ""
      }`}
      style={{
        backgroundImage: `url(${bgSnow.src})`,
        backgroundPosition: `${bgPosition.x} ${bgPosition.y}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: mouseMoved ? "none" : "background-position 20s linear",
      }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <GlobeSvg className="h-fit w-7/12 md:w-[360px] animate-spin-slow brightness-110 " />
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-8">
            Preserve & Share Your Memories
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <SignedOut>
              <ClerkLoading>
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </ClerkLoading>
              <SignUpButton mode="modal">
                <button className="w-full rounded-xl border-b-4 border-yellow-700 bg-yellow-600 px-10 py-3 text-center font-bold uppercase transition hover:border-yellow-600 hover:bg-yellow-500 md:min-w-[420px]">
                  Get started
                </button>
              </SignUpButton>

              <div className="flex gap-3">
                <SignInButton mode="modal" forceRedirectUrl="/learn">
                  <button className=" *:hover:text-green-500 *:hover:underline">
                    <span>I already have an account ?</span>
                  </button>
                </SignInButton>

                <button className=" *:hover:text-green-500 *:hover:underline">
                  <span>Find Someone</span>
                </button>
                <div></div>
              </div>
            </SignedOut>
            <SignedIn>
              <ClerkLoading>
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </ClerkLoading>
              <a
                href="/commingsoong.html"
                className="w-full rounded-xl border-b-4 border-yellow-700 bg-yellow-600 px-10 py-3 text-center font-bold uppercase transition hover:border-yellow-600 hover:bg-yellow-500 md:min-w-[420px]"
              >
                Continue
              </a>
              <div className="flex gap-3">
                <button className=" *:hover:text-green-500 *:hover:underline">
                  <span>Swith Your Account ?</span>
                </button>
                <SignOutButton>
                  <button className=" *:hover:text-green-500 *:hover:underline">
                    <span>LogOut</span>{" "}
                  </button>
                </SignOutButton>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StarterPage;
