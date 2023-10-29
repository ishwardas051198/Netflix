import React from "react";
import { logo_Url } from "../utils/MockData";
const Header = () => {
  return (
    <div className=" absolute px-2 bg-gradient-to-b from-black z-10">
      <img className=" w-44" src={logo_Url} alt="logo" />
    </div>
  );
};

export default Header;
