import React from 'react';
import SearchLogo from '../assets/icons/search.png'

const Filter = () => {
  return (
    <div className="bg-[#779BF7FA] w-full h-32 text-white p-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4"></div>
        <h2 className="text-xl font-JejuMyeongjo">Explore</h2>
        <div className="flex w-full h-12 max-w-xl bg-[#94B0F8] rounded-full py-2 items-center justify-center">
        <img src={SearchLogo} alt='search' className='h-5 w-5' />
          <input
            type="text"
            placeholder="Service Names, Service Categories or Location"
            className="flex-1 outline-none text-[#FFFFFF] bg-[#94B0F8] items-center"
          />         
          <button className="bg-[#FFFFFF] w-32 h-12 text-[#000000] font-semibold rounded-full ml-2">
            Enter
          </button>
        </div>
      
    </div>
  );
};

export default Filter;
