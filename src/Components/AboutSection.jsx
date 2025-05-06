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


// import React from "react";
// import ServicesImage from "../assets/uploads/Services.png";

// const AboutSection = () => {
//   return (
//     <section className="px-4 py-8 bg-[#ECF1FC] flex flex-col items-start">
//       {/* <div className="flex flex-col md:flex-row items-center gap-8"> */}
//       <div className=" md:w-2/3 mt-10 md:mt-0 flex flex-row gap-24 items-center md:items-end">
//         <img
//           src={ServicesImage}
//           alt="Service device"
//           className="w-10 md:w-2/3 rounded-2xl shadow-md"
//         />
//         <div className="md:w-1/2 text-center md:text-left text-[#110000C2]">
//           <h1 className='text-4xl font-bold font-Poppins text-right text-[#110000C2]'>
//             About Fixserv
//             </h1>
//             <p className='text-left font-inter text-lg text-[#110000C2]'>
//                 Fixserv is a digital marketplace that connects<br/> users with professional artisans 
//                 specializing<br />in gadget repairs and services. <br /> <br  />
//             </p>
//             <p className='text-left mt-4 font-inter text-lg text-[#110000C2] '>
//                 We offer a seamless way for customers to <br/> to find, book, and engage certified
//                 experts for <br/> fixing electronics, mobile devices,home <br/> appliances
//                 and other gadgets. <br /> <br />
//             </p>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default AboutSection;
