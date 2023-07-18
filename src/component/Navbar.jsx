import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'

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
        <p onClick={() => setPopUp(!popUp)} className=" font-bold tracking-wider font-mono">DevelopedByKSL</p>
            
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
              href="#services"
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

      <Collapsible open={popUp} >
        <div className="flex flex-col gap-2 mb-4 md:hidden">
          <a onClick={() => handleClick("home")} href="#home" className={`${activeButton === "home" && 'text-blue-500'} text-gray-200 no-underline border-b pl-4 pb-2 rounded-lg`}>
            Home
          </a>

          <a onClick={() => handleClick("services")} href="#services" className={`${activeButton === "services" && 'text-blue-500'} text-gray-200 no-underline border-b pl-4 pb-2 rounded-lg`}>
            Services
          </a>

          <a onClick={() => handleClick("portfolio")} href="#portfolio" className={`${activeButton === "portfolio" && 'text-blue-500'} text-gray-200 no-underline border-b pl-4 pb-2 rounded-lg`}>
            Portfolio
          </a>
        </div>
      </Collapsible>
    </nav>

  );
}
