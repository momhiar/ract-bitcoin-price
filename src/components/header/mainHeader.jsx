import React from "react";
import logo from "./bitremovedbg.png";
const MainHeader = () => {
  return (
    <div className="w-full bg-darkest h-[100px] flex justify-center md:justify-start pl-5 shadow-2xl">
      <img
        src={logo}
        className="max-h-full"
        alt="This is a logo whatever!"
      ></img>
    </div>
  );
};

export default MainHeader;
