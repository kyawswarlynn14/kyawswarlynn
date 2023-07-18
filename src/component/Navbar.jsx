import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

export default function Navbar({ darkMode, setDarkMode, activeButton, setActiveButton }) {
  const [popUp, setPopUp] = useState(false);

  const handleClick = (btn) => {
    handleButtonClick(btn);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="md:w-[80%] mx-auto md:text-lg pt-3  px-2 flex-col">
      <div className="flex justify-between">
        <p className=" font-bold tracking-wider font-mono">DevelopedByKSL</p>
            
        <div className="flex gap-4">
          <ul className="md:flex gap-8 font-semibold hidden">
            <a
              href="#home"
              onClick={() => handleClick("home")}
              className={`
                ${
                  activeButton === "home" ? "border-b-4 border-green-600" : ""
                } text-white cursor-pointer no-underline
              `}
            >
              Home
            </a>

            <a
              href="#service"
              onClick={() => handleClick("services")}
              className={`
                ${
                  activeButton === "services" ? "border-b-4 border-green-600" : ""
                } text-white cursor-pointer no-underline
              `}
            >
              Services
            </a>

            <a
              href="#portfolio"
              onClick={() => handleClick("portfolio")}
              className={`
                ${
                  activeButton === "portfolio" ? "border-b-4 border-green-600" : ""
                } text-white cursor-pointer no-underline
              `}
            >
              Portfolio
            </a>
          </ul>

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
        </div>
      </div>

      <div
        className={`${
          popUp ? "block" : "hidden"
        } flex flex-col gap-2 mb-4`}
      >
        <a onClick={() => setPopUp(!popUp)} href="#home" className="text-gray-200 no-underline border-b pl-4 pb-2 rounded-lg">
          Home
        </a>
        <a onClick={() => setPopUp(!popUp)} href="#service" className="text-gray-200 no-underline border-b pl-4 pb-2 rounded-lg">
          Services
        </a>
        <a onClick={() => setPopUp(!popUp)} href="#portfolio" className="text-gray-200 no-underline border-b pl-4 pb-2 rounded-lg">
          Portfolio
        </a>
      </div>
    </nav>

  );
}
