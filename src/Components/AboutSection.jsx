import React from "react";
import ServicesImage from "../assets/uploads/Services.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#ECF1FC] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left: Small Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={ServicesImage}
            alt="About FixServ"
            className="w-44 h-44 md:w-56 md:h-56 rounded-lg"
          />
        </div>     

        {/* Right: Text */}
        <div className="w-full md:w-1/2 space-y-6">
        <br />
          <h2 className="text-3xl md:text-4xl font-bold text-[#110000C2]">
          About Fixserv
          </h2> <br />
          <p className="text-gray-600 text-lg leading-relaxed">
            Fixserv is a digital marketplace that connects<br/> users with professional artisans 
            specializing<br />in gadget repairs and services. <br /> <br  />

            We offer a seamless way for customers to <br/> to find, book, and engage certified
            experts for <br/> fixing electronics, mobile devices,home <br/> appliances
            and other gadgets. <br /> <br />
          </p>
        </div>
      
      </div>
    </section>
  );
};

export default AboutSection;


