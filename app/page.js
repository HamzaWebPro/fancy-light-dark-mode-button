"use client";
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./_context/theme";
import Image from "next/image";
import sun from "../app/_svg/sun.svg";
import moon from "../app/_svg/moon.svg";
import tree from "../app/_svg/tree.svg";
import light1 from "../app/_svg/light1.svg";
import light2 from "../app/_svg/light2.svg";
import light3 from "../app/_svg/light3.svg";
import darkminicloud from "../app/_svg/darkminicloud.svg";
import smallstargroup from "../app/_svg/smallstargroup.svg";
import bigstargroup from "../app/_svg/bigstargroup.svg";
import bytelibertyDarkLogo from "../app/_svg/bytelibertyDarkLogo.svg";
import bytelibertyLightLogo from "../app/_svg/bytelibertyLightLogo.svg";

import lightsmallcloud from "../app/_svg/lightsmallcloud.svg";

const page = () => {
  const { themeMode, darkTheme, lightTheme } = useContext(ThemeContext);

  // Ensure the correct theme is set on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      storedTheme === "light" ? lightTheme() : darkTheme();
    }
  }, [darkTheme, lightTheme]);

  const themeChange = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="w-full h-[100vh] flex-col gap-10 flex justify-center items-center p-3">
      {/* logo start */}
      <div className="font-bold text-dark-bg dark:text-lite-bg">
        {themeMode === "light" ? (
          <a href="https://www.byteliberty.com/">
            <Image
              className="w-[150px]"
              src={bytelibertyDarkLogo}
              alt="byteliberty"
            />
          </a>
        ) : (
          <a href="https://www.byteliberty.com/">
            <Image
              className="w-[150px]"
              src={bytelibertyLightLogo}
              alt="byteliberty"
            />
          </a>
        )}
      </div>
      {/* logo end */}
      <div className="font-bold text-dark-bg dark:text-lite-bg">
        {themeMode === "light" ? "Light Mode" : "Dark Mode"}
      </div>

      {/* switch start */}
      <div
        style={{ boxShadow: "inset 0 0 30px #0000008d" }}
        className="relative w-[450px] h-[200px] overflow-hidden text-[#0000008d] bg-dark-bg  dark:bg-lite-bg rounded-[1000px] "
      >
        {/* sun start */}
        <Image
          onClick={themeChange}
          className="w-[190px] hover:scale-[0.9]  top-[1000px] duration-[0.7s] cursor-pointer absolute dark:top-[50%] dark:translate-y-[-50%] left-[10px]"
          src={sun}
          alt="sun"
        />
        {/* sun end */}
        {/* moon start */}
        <Image
          onClick={themeChange}
          className="w-[170px] hover:scale-[0.9] z-50  animate-rotate cursor-pointer absolute dark:top-[-1000px] duration-[0.7s] top-[50%] translate-y-[-50%] right-[20px]"
          src={moon}
          alt="moon"
        />
        {/* moon end */}
        {/* tree  mode start */}
        <Image
          className="w-[170px] z-30 left-[50px] hover:scale-[1.1] dark:left-[240px] absolute bottom-0 duration-[0.7s]"
          src={tree}
          alt="tree"
        />
        {/* tree  mode end */}
        {/* light mode mini cloud start */}
        <Image
          className="w-[120px]  dark:right-[30%]  hover:scale-[1.1] right-[-200%] absolute top-[17px] duration-[0.8s]"
          src={lightsmallcloud}
          alt="small cloud"
        />
        {/* light mode cloud group end */}

        {/* light mode cloud group end */}
        <Image
          className="w-[120px] right-[-1000px]  dark:right-[0px]  hover:scale-[1.1]  absolute bottom-[10px] duration-[0.9s]"
          src={light1}
          alt="small cloud"
        />
        <Image
          className="w-[220px]  right-[-1000px]  dark:right-[0px]   hover:scale-[1.1]  absolute bottom-[-20px] duration-[1s]"
          src={light2}
          alt="small cloud"
        />
        <Image
          className="w-[170px]  right-[-1000px]  dark:right-[120px] hover:scale-[1.1] absolute bottom-0 duration-[1s]"
          src={light3}
          alt="small cloud"
        />

        {/* light mode mini cloud end */}
        {/* dark mode mini clouds group start */}
        <Image
          className="w-[100px]  left-[27%]  hover:scale-[1.1] dark:left-[-200%] absolute top-[17px] duration-[0.8s]"
          src={darkminicloud}
          alt="small cloud"
        />
        <Image
          className="w-[100px]  left-[20px]  hover:scale-[1.1] dark:left-[-200%] absolute top-[55%] translate-y-[-50%] duration-[0.8s]"
          src={darkminicloud}
          alt="small cloud"
        />
        <Image
          className="w-[100px]  left-[180px]  hover:scale-[1.1] dark:left-[-200%] absolute top-[55%]  duration-[0.8s]"
          src={darkminicloud}
          alt="small cloud"
        />

        {/* dark mode clouds group group end */}
        {/* star start */}
        <Image
          className="w-[50px]  left-[230px]  hover:scale-[1.1] opacity-[1] dark:opacity-0 absolute top-[15px]  duration-[1.5s]"
          src={smallstargroup}
          alt="small cloud"
        />
        <Image
          className="w-[100px]  left-[25px]  hover:scale-[1.1] opacity-[1] dark:opacity-0  absolute top-[15px]  duration-[1.5s]"
          src={bigstargroup}
          alt="small cloud"
        />
        {/* star end */}
      </div>
      {/* switch end */}
      <div className="text-dark-bg dark:text-lite-bg">
        Created by{" "}
        <a
          className="underline text-dark-bg dark:text-lite-bg"
          href="https://www.github.com/HamzaWebPro"
        >
          Hamza Altamas (Github)
        </a>
      </div>
    </div>
  );
};

export default page;
