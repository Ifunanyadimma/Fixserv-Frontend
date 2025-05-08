// src/components/Testimonials.jsx
import React from 'react';
import Image from '../assets/uploads/bg-image.png'


const testimonials = [
  {
    name: "Maxwell Davies",
    text: "Fixserv’s service is mind blowing, my gadget was fixed well and it was done on time",
    image: " ", 
  },
  {
    name: "Shaw Combs",
    text: "Fixserv helped me to fix my gadget and I had no complains after",
    image: " ",
  },
  {
    name: "Aramide Balogun",
    text: "Fixserv is a very reliable company, my laptop was well fixed",
    image: " ",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-cover bg-center py-16 text-white">
        <img src={Image} alt='bg-Image' className='bg-cover bg-center text-[#FFFFFF]' />
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">CLIENTS TESTIMONY</h2>
      </div>
      <div className="flex justify-center gap-6 flex-wrap max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-[#A1B7F2] text-[#ECF1FC] rounded-xl p-6 w-48 h-52 shadow-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full"
              />
              <h4 className="font-semibold">{t.name}</h4>
            </div>
            <p className="text-sm">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
