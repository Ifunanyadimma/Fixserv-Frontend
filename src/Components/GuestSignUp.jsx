import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import GuestImage from '../assets/uploads/Guest_Image.png'
import { useNavigate } from 'react-router-dom';
 
const GuestSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

     const navigate = useNavigate();

  const handleGuestSignUp = () => {
    navigate("/client-home");
  }

  return (
    <div className="min-h-screen flex">
        {/* Left Panel */}
      <div className="w-1/3 bg-[#A1B7F2] flex flex-col justify-center items-center p-8">
        <img src={GuestImage} alt="Guest" className="h-full w-full" />
        
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex flex-col justify-center items-center ">
        <h2 className="text-2xl text-[#110000C2] font-semibold mb-6">Guest Registration</h2>

        <form className="w-full max-w-sm">

            <label className="block mb-2 text-sm text-[#110000C2] font-medium">Last Name</label>
          <div className="flex items-center mb-4"> 
          <input
            type="text"
            className="w-full flex p-2 mb-4 border border-[#94B0F8] rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          
          <label className="block mb-2 text-sm text-[#110000C2] font-medium">First Name</label>
          <input
            type="text"
            className="w-full flex p-2 mb-4 border border-[#94B0F8] rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          </div>

          <label className="block mb-2 text-sm text-[#110000C2] font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 mb-4 border border-[#94B0F8] rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <label className="block mb-2 text-sm text-[#110000C2] font-medium">Password</label>
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border border-[#94B0F8] rounded pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />         
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-[#113ca8]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <label className="block mb-2 text-sm text-[#110000C2] font-medium">Confirm Password</label>
          <div className="relative mb-2">
            <input
              type={showConfirmPassword ? "text" : "Confirmpassword"}
              className="w-full p-2 border border-[#94B0F8] rounded pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />          
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-[#113ca8]"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <label className="block mb-2 text-sm text-[#110000C2] font-medium">What do you want to fix?</label>
          <input
            type="text"
            className="w-full p-2 mb-15 border border-[#94B0F8] rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />


        <div className="flex relative h-12 mb-2"> 
            <button
                type="button"
                onClick={handleGuestSignUp}
                className='w-75 h-10 py-2 rounded-md font-medium text-xl transition-all flex
                justify-center bg-[#A1B7F2] text-white '>
                Sign Up
            </button>
            
          <button
            type="button"
            className="flex items-center justify-center w-20 h-10 gap-6 rounded-md shadow-lg hover:bg-red-200 transition"
          >                     
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-15 h-6 gap-6"
            />
          </button>
          </div>
          <p className="text-sm px-20">
            Already have an account?{" "}
            <button className="text-[#000000] font-semibold">
                Log in
            </button>
          </p>
        
        </form>
      </div>
      
    </div>
  )
}

export default GuestSignUp







  
