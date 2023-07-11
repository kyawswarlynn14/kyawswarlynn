import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

export default function Navbar({ darkMode, setDarkMode }) {
  const [popUp, setPopUp] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (btn) => {
    handleButtonClick(btn);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="md:w-[80%] mx-auto md:text-lg pt-3 flex justify-between border-b-2 border-gray-300 px-2">
      <p className=" font-bold tracking-wider font-mono">DevelopedByKSL</p>
      <ul className="flex gap-8 font-semibold ">
        <a
          href="#home"
          onClick={() => handleClick("home")}
          className={`
            ${
              activeButton === "home" ? "border-b-4 border-green-600" : ""
            } hidden md:block cursor-pointer no-underline
          `}
        >
          Home
        </a>

        <a
          href="#service"
          onClick={() => handleClick("service")}
          className={`
            ${
              activeButton === "service" ? "border-b-4 border-green-600" : ""
            } hidden md:block cursor-pointer no-underline
          `}
        >
          Service
        </a>

        <a
          href="#portfolio"
          onClick={() => handleClick("portfolio")}
          className={`
            ${
              activeButton === "portfolio" ? "border-b-4 border-green-600" : ""
            } hidden md:block cursor-pointer no-underline
          `}
        >
          Portfolio
        </a>

        <div>
          {darkMode ? (
            <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-3xl" />
          ) : (
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-3xl" />
          )}
        </div>

        <div className="md:hidden">
          {popUp ? (
            <RiCloseLine size={30} onClick={() => setPopUp(false)} />
          ) : (
            <RiMenu3Line size={30} onClick={() => setPopUp(true)} />
          )}
        </div>
      </ul>

      <div
        className={`${
          popUp ? "block" : "hidden"
        } bg-slate-900 text-white absolute top-14 right-0 w-[60%] h-48 border-2 rounded-lg flex flex-col justify-evenly text-center`}
      >
        <a onClick={() => setPopUp(!popUp)} href="#home" className="btn btn-primary">
          Home
        </a>
        <a onClick={() => setPopUp(!popUp)} href="#service" className="btn btn-primary">
          Services
        </a>
        <a onClick={() => setPopUp(!popUp)} href="#portfolio" className="btn btn-primary">
          Portfolio
        </a>
      </div>
    </nav>

  );
}
