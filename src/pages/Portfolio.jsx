import React from "react";
import web1 from "../assets/web1.jpg";
import web2 from "../assets/web2.jpg";
import web3 from "../assets/web3.jpg";
import web4 from "../assets/web4.jpg";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";

function Portfolio() {
  const ImageCard = ({ src }) => {
    return (
      <div className="basis-1/3 flex-1" id="portofolio">
        <img
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={src}
        />
      </div>
    );
  };

  return (
    <div id="portfolio" className="w-[90%] mx-auto text-lg">
      <h3 className="dark:text-[#00FF00] text-2xl md:text-3xl pt-4 pb-1 font-mono font-semibold text-center">
        Portofolio
      </h3>

      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I have successfully built various projects using{" "}
        <span className="text-teal-500">React.js and Next.js</span> , including
        a captivating shopping web app and visually appealing personal websites.
        These projects showcase my expertise in creating dynamic, user-friendly
        interfaces and leveraging the power of these frameworks to deliver fast
        and engaging web experiences.
      </p>

      <div className="flex flex-col gap-6 py-10 md:flex-row md:flex-wrap">
        <ImageCard src={web1} />
        <ImageCard src={web2} />
        <ImageCard src={web3} />
        <ImageCard src={web4} />
        <ImageCard src={web5} />
        <ImageCard src={web6} />
      </div>
    </div>
  );
}

export default Portfolio;
