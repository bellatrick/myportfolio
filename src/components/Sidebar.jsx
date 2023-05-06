import React, { useContext, useEffect} from "react";
import {
  HomeIcon,
  LightBulbIcon,
  MoonIcon,
  PencilIcon,
  UserIcon,
  MailIcon,
} from "@heroicons/react/outline";
import { useNavigate, useLocation } from "react-router-dom";
import { DarkContext } from "../store/dark";
const Sidebar = () => {
  const navigate = useNavigate();
  const {dispatch,state}=useContext(DarkContext)
  const {darkMode}=state
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    dispatch({type:"TOGGLE"})
    // darkMode && localStorage.setItem("dark", "dark");
    // !darkMode && localStorage.removeItem("dark");
  };
  return (
    <div className="fixed bg-white dark:bg-gray-900 z-[100] bottom-0 left-0 sm:static flex flex-col justify-center items-center ">
      <div className="border-2 border-b-0 sm:border-b-2 border-l-0 sm:border-r-2 border-r-0 sm:border-l-2  border-primary sm:rounded-md py-4 sm:w-[60px] justify-around sm:justify-center items-center w-screen flex sm:flex-col gap-6">
        <div
          className={` ${
            splitLocation[1] === "" ? "bg-primary dark:bg-primary" : "bg-gray-100"
          } h-10 w-10 group hover:bg-primary dark:hover:bg-primary transition-all rounded-md  dark:bg-gray-800  flex justify-center items-center `}
        >
          <HomeIcon
            onClick={() => navigate("/")}
            className={`${
              splitLocation[1] === "" && "text-white"
            } h-7 text-gray-500 dark:text-gray-200 group-hover:text-white`}
          />
        </div>
        <div
          onClick={() => navigate("/about")}
          className={` ${
            splitLocation[1] === "about" ? "bg-primary dark:bg-primary" : "bg-gray-100"
          } h-10 w-10 group hover:bg-primary dark:hover:bg-primary transition-all rounded-md  dark:bg-gray-800  flex justify-center items-center `}
        >
          <UserIcon
            className={`${
              splitLocation[1] === "about" && "text-white"
            } h-7 text-gray-500 dark:text-gray-200 group-hover:text-white`}
          />
        </div>
        <div
          onClick={() => navigate("/works")}
          className={` ${
            splitLocation[1] === "works" ? "bg-primary dark:bg-primary" : "bg-gray-100"
          } h-10 w-10 group hover:bg-primary dark:hover:bg-primary transition-all rounded-md  dark:bg-gray-800  flex justify-center items-center `}
        >
          <PencilIcon
            className={`${
              splitLocation[1] === "works" && "text-white"
            } h-7 text-gray-500 dark:text-gray-200 group-hover:text-white`}
          />
        </div>
        <div
          onClick={() => navigate("/contact")}
          className={` ${
            splitLocation[1] === "contact" ? "bg-primary dark:bg-primary" : "bg-gray-100"
          } h-10 w-10 group hover:bg-primary dark:hover:bg-primary transition-all rounded-md  dark:bg-gray-800  flex justify-center items-center `}
        >
          <MailIcon
            className={`${
              splitLocation[1] === "contact" && "text-white"
            } h-7 text-gray-500 dark:text-gray-200 group-hover:text-white`}
          />
        </div>
        <div
          onClick={handleDarkMode}
          className="h-10 w-10 sm:mt-10 group hover:bg-primary dark:hover:bg-primary transition-all rounded-md bg-gray-100 dark:bg-gray-800 flex justify-center items-center "
        >
          {darkMode ? (
            <MoonIcon className="h-7 text-gray-500 dark:text-gray-200  group-hover:text-white" />
          ) : (
            <LightBulbIcon className="h-7 text-gray-500 dark:text-gray-200 group-hover:text-white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
