import React from "react";
import code from "../assets/code.png";
import design from "../assets/design.png";
import consulting from "../assets/consulting.png";

function Service() {
  const ServiceCard = ({ src }) => {
    return (
      <div className="w-72 mx-auto flex flex-col text-center place-items-center p-2 rounded-xl shadow-2xl">
        <img src={src} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2  ">Beautiful Designs</h3>
        <p className="py-2 text-[#fdeed4]">
          Creating elegant designs suited for your needs following core design
          theory.
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p>Photoshop</p>
        <p>Illustrator</p>
        <p>Figma</p>
        <p>Indesign</p>
      </div>
    );
  };

  return (
    <div id="service" className="w-[90%] mx-auto mt-10">
      <div className=" mb-4 md:text-lg">
        <h3 className="dark:text-[#00FF00] text-2xl md:text-3xl md:mb-4 py-1 font-mono font-semibold text-center">
          Services I offer
        </h3>

        <p className=" text-md leading-8 text-[#fdeed4]">
          I specialize in creating dynamic and responsive websites using the
          latest web technologies such as{" "}
          <span className="dark:text-teal-500">
            React.js, Next.js, Angular, and Node.js
          </span>
          . With my expertise in{" "}
          <span className="dark:text-teal-500">JavaScript, HTML, and CSS</span> , I
          craft engaging and user-friendly interfaces.
        </p>

        <p className="text-md py-2 leading-8 text-[#fdeed4]">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        <ServiceCard src={design} />

        <ServiceCard src={code} />

        <ServiceCard src={consulting} />
      </div>
    </div>
  );
}

export default Service;
