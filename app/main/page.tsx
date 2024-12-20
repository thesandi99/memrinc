"use client";
//no deal
import { NextPage } from "next";
import { useState } from "react";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import NotificationsPage from "./NotificationsPage";
import AddButton from "./AddButton";
import ProfilePage from "./ProfilePage";
import NavDestop from "../Components/SideBarDesktop";

const Main: NextPage = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "search":
        return <SearchPage />;
      case "notifications":
        return <NotificationsPage />;
      case "add":
        return <AddButton />;
      case "profile":
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="flex max-w-[1300px] w-full p-4">
          <NavDestop setActivePage={setActivePage} />
          {renderPage()}
        </div>
      </div>
    </>
  );
};
export default Main;
