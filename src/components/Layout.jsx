import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-white w-screen px-[20px] overflow-x-hidden xl:mx-auto relative text-gray-800 dark:bg-gray-900 dark:text-white font-bodysecondary">
      <Header />
      <div className="flex container gap-8 min-h-[calc(100vh_-_80px)] items-center">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
