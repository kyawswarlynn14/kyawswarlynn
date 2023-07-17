import React from "react";
import { AiFillPhone, AiFillMail, AiOutlineCopyrightCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import ksl from '../assets/ksl.jpg'

function Footer() {
  return (
    <div className={`text-white w-full border-t-2 py-4 rounded-tl-3xl`}>
      <div className="md:w-[80%] mx-auto px-2 md:px-0 flex flex-col md:flex-row justify-between gap-2">
        <div className="text-center">
          <img src={ksl} alt="ksl img" className="w-12 h-12 rounded-full mb-3 mx-auto"/>
          <h4>Kyaw Swar Lynn</h4>
          <p><AiOutlineCopyrightCircle className="inline-flex" /> 2023 ksl</p>
        </div>

        <div className="text-center">
          <h4 className="text-center mb-2">Contact</h4>
          <p>
            <GoLocation className="inline-flex mr-2" /> 63(B), Between 20x21, Mandalay
          </p>
          <p>
            <AiFillPhone className="inline-flex mr-2" /> +959266654144, +959767600246
          </p>

          <p>
            <AiFillMail className="inline-flex mr-2" /> kyawswarlynn14@gmail.com
          </p>
        </div>

        <div>
          <h4 className="text-center mb-2">Navigations</h4>
          <div className="flex justify-between gap-4 font-semibold w-[90%] mx-auto">
            <a href="#home" className="no-underline text-white">Home</a>
            <span>|</span>
            <a href="#service" className="no-underline text-white">Service</a>

            <span>|</span>

            <a href="#portfolio" className="no-underline text-white">Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
