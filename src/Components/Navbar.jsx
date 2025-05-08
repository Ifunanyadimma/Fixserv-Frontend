import React from 'react';

const Navbar = () => {
    return (
      <nav className="flex justify-between items-center pt-20 px-10 w-7xl h-11 bg-white rounded-md shadow">
        <div className="flex items-center space-x-6 text-xl font-JejuMyeongjo text-[#7A9DF7]">
          <span className="bg-[#779BE7] font-JejuMyeongjo text-white w-10 h-10 rounded-md">FS</span>
          <span className='flex pt-20'>Fixserv</span>
        </div>
        <ul className="flex items-center space-x-6 text-sm gap-20 text-[#7A9DF7]">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About Us</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
        </ul>
        <button className="bg-[#779BE7] text-white px-4 py-1 h-8 w-32 gap-20 rounded-md">Sign up</button>
      </nav>
    );
  };
export default Navbar;  
