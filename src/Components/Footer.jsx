import React from 'react';
import ArrowImage from '../assets/uploads/ArrowUp.png';
import PhoneImage from '../assets/uploads/Phone_call.png';  
import EmailImage from '../assets/uploads/Email.png';
import Facebook from '../assets/icons/FB.png'; 
import Instagram from '../assets/icons/instagram icon.png'; 
import LinkedIn from '../assets/icons/in.png';
import Twitter from '../assets/icons/X.png';

const Footer = () => {
    return (  
        
      <footer className="bg-[#7A9DF7] text-[#ECF1FC] px-6 py-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 items-stretch gap-6 h-96">
   
        <div>
          <span className="text-xl bg-[#ECF1FC] font-JejuMyeongjo text-[#7A9DF7] w-32 h-32 rounded-md">FS</span>
            <span className="text-xl font-JejuMyeongjo">Fixserv</span> <br/> <br/>
            <p className="text-sm mt-2">Provides a seamless, reliable marketplace connecting customers
                 with verified professional gadget repairers.</p> <br/>
                 <div>
                 <img src={PhoneImage} alt='phone' className='w-10 h-10' />
                 <p className="text-sm mt-2">+234 987654321</p> <br/>
                 </div>
              <img src={EmailImage} alt='email' className='w-10 h-10' />   
            <p className="text-sm mt-2">fixserv@gmail.com</p> <br/>
            <h4>Follow us</h4>
            <div className="flex space-x-4 mt-3">
              <img src={Facebook} alt='fb' className='w-4 h-4 space-x-20' />
              <img src={Instagram} alt='instagram' className='w-5 h-5' />
              <img src={LinkedIn} alt='in' className='w-4 h-4' />
              <img src={Twitter} alt='x' className='w-4 h-4' />
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
            </ul> <br/>

                    {/* Join Waitlist Section */}
           <div className="flex flex-col bg-[#FFFFFF] rounded-md sm:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter working email"
              className="w-20 h-12 rounded-md sm:w-64 text-gray-900 focus:outline-none"
            />
            <button className="bg-[#7A9DF7] w-16 h-10 rounded-md text-[#FFFFFF] font-medium">
              Join Waitlist
            </button>
          </div>
          
          </div>        
        </div>
      </footer>
    );
  };
export default Footer;  