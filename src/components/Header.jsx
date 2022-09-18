import React from "react";
import { Link } from "react-router-dom";
import mymoji from "../assets/mymoji2.png";
const Header = () => {
  return (
    <div className="container flex justify-between h-[80px] items-center font-bodysecondary">
      <Link to='/' className="flex gap-1 items-end">
        <div>
          <img
            src={mymoji}
            alt=""
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>
        <div className="text-[20px] font-bold">
          <span className="text-primary">B</span>
          <span className="text-gray-500">usayo</span>
        </div>
      </Link>
      <Link to="/contact">
        <button href="#_" className="buttonStyle group">
          <span className="buttonAnimate"></span>
          <span className="relative">Contact me</span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
