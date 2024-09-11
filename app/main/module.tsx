"use client";
import React from "react";
import { ClerkLoading, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";

const MainApp = () => {
  const { isSignedIn, isLoaded } = useUser();

  // Redirect if the user is not signed in once the state is loaded
  if (isLoaded && !isSignedIn) {
    redirect("/");
  }

  // Loading state to prevent flickering or showing incomplete content
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-[100px] w-full  p-4 text-center">
          <ClerkLoading>
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
    );
  }

  // Render your content when the user is signed in
  return (
    <div className="flex justify-center">
      <div className="flex max-w-[1300px] w-full p-4">
        {/* Your main content goes here */}
        <div className="flex-grow">
          <h1>Welcome to the main app!</h1>
          {/* Add other components/content as needed */}
        </div>
      </div>
    </div>
  );
};

export default MainApp;
