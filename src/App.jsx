// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Import your pages or sections
// import Navbar from "./Components/Navbar";
// import LandingSection from "./Components/LandingSection";
// import AboutSection from "./Components/AboutSection";



// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <LandingSection />
//       <AboutSection />
      
//       <Routes>
//         {/* <Route path="/" element={<Navbar />} /> */}
//         <Route path="/landing-section" element={<LandingSection />} />
//         <Route path="/about-section" element={<AboutSection />} />

//       </Routes>
//     </div>
//   );
// };

// export default App;


import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes later like /about or /contact */}
      </Routes>
  
  );
}

export default App;

