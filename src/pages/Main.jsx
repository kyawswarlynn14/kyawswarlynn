import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import ksl from "../assets/ksl.png";

export default function Main() {
  return (
    <div id="home" className="text-center py-5">
      <h2 className="tracking-wider font-serif text-3xl text-teal-600 font-bold md:text-5xl">
        Kyaw Swar Lynn
      </h2>

      <h3 className="text-xl md:text-2xl py-3 tracking-wider">
        Developer and designer!
      </h3>

      <p className="tracking-wider leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Freelancer providing services for programming and design content needs.{" "}
        <br />
        Join me down below and let's get cracking!
      </p>

      <div className="w-64 md:w-80 mx-auto text-5xl flex justify-between py-3 text-gray-600 dark:text-gray-300">
        <a href="https://github.com/kyawswarlynn14">
          <AiFillGithub cursor="pointer" />
        </a>

        <a href="https://web.facebook.com/profile.php?id=100027180840462">
          <AiFillFacebook cursor="pointer" />
        </a>

        <a href="https://linkedin.com/in/kyaw-swar-lynn-78ab79260/">
          <AiFillLinkedin cursor="pointer" />
        </a>

        <a href="https://t.me/kyawswarlynn14">
          <FaTelegram cursor="pointer" />
        </a>
      </div>

      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 relative overflow-hidden mt-4 md:h-80 md:w-80">
        <img src={ksl} />
      </div>
    </div>
  );
}
