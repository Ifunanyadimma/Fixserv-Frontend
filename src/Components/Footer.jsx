import React from 'react';
import VectorImage from '../assets/uploads/Vector (4).png';  
const Footer = () => {
    return (  
        
      <footer className="bg-[#7A9DF7] text-[#ECF1FC] px-6 py-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-96">
        <img src={VectorImage} alt="Vector" className="top-10 right-10 w-40 h-40" />

          <div>
          <span className="text-xl bg-[#ECF1FC] font-JejuMyeongjo text-[#7A9DF7] w-32 h-32 rounded-md">FS</span>
            <span className="text-xl font-JejuMyeongjo">Fixserv</span> <br/> <br/>
            <p className="text-sm mt-2">Provides a seamless, reliable marketplace connecting customers
                 with verified professional gadget repairers.</p> <br/>
                 <div>
                 <img src='' alt='' className='w-10 h-10' />
                 <p className="text-sm mt-2">+234 987654321</p> <br/>
                 </div>
              <img src='' alt='' className='w-10 h-10' />   
            <p className="text-sm mt-2">fixserv@gmail.com</p> <br/>
            <p>Follow us</p>
            <div className="flex space-x-4 mt-3">
              <img src='' alt='' className='w-10 h-10' />
              <img src='' alt='' className='w-10 h-10' />
              <img src='' alt='' className='w-10 h-10' />
              <img src='' alt='' className='w-10 h-10' />
              </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Home</h4> <br/>
            <ul className="space-y-3 text-sm">
              <li>About us</li>
              <li>Contact us</li>
              <li>Help and Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Services</h4> <br/>
            <ul className="space-y-3 text-sm">
              <li>Technical repair</li>
              <li>Refrigerator</li>
              <li>Gadget</li>
              <li>Dishwasher</li>
              <li>Game Gadgets</li>
            </ul>
          
            <input
              title="Email"
              id="email"
              type="email"
              placeholder="Enter working Email"
              className="p-2 rounded text-black w-full mb-2"
            />
            <button className="bg-[#7A9DF7] text-[#FFFFFF] px-4 py-2 rounded w-full">Join waitlist</button>
          </div>
        </div>
      </footer>
    );
  };
export default Footer;  