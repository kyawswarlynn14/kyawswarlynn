import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

export default function Navbar({ darkMode, setDarkMode }) {
  const [popUp, setPopUp] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (btn) => {
    scrollToSection(btn);
    handleButtonClick(btn);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Adjust this value to control the scroll speed
      let startTimestamp;

      const scrollStep = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        const easing = easeOutQuart(progress);
        window.scrollTo(0, startPosition + distance * easing);

        if (elapsed < duration) {
          window.requestAnimationFrame(scrollStep);
        }
      };

      window.requestAnimationFrame(scrollStep);
    }
  };

  const easeOutQuart = (t) => 1 - --t * t * t * t;

  return (
    <nav className="md:text-lg py-4 flex justify-between border-b-2 border-gray-600">
      <h1 className=" font-bold tracking-wider font-mono">DevelopedByKSL</h1>
      <ul className="flex gap-8 font-semibold">
        <a
          onClick={() => handleClick("home")}
          className={`
            ${
              activeButton == "home" ? "border-b-4 border-green-600" : ""
            } hidden md:block cursor-pointer
          `}
        >
          Home
        </a>

        <a
          onClick={() => handleClick("service")}
          className={`
            ${
              activeButton == "service" ? "border-b-4 border-green-600" : ""
            } hidden md:block cursor-pointer
          `}
        >
          Service
        </a>

        <a
          onClick={() => handleClick("portfolio")}
          className={`
            ${
              activeButton == "portfolio" ? "border-b-4 border-green-600" : ""
            } hidden md:block cursor-pointer
          `}
        >
          Portfolio
        </a>

        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className=" cursor-pointer text-3xl"
        />

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
        } bg-slate-900 text-white absolute top-14 right-0 w-40 h-48 border-2 rounded-lg flex flex-col justify-evenly text-center`}
      >
        <a href="#home" className="bg-slate-600 rounded-lg p-2 cursor-pointer">
          Home
        </a>
        <a
          href="#service"
          className="bg-slate-600 rounded-lg p-2 cursor-pointer"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="bg-slate-600 rounded-lg p-2 cursor-pointer"
        >
          Portfolio
        </a>
      </div>
    </nav>
  );
}
