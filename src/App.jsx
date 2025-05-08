import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        
      </Routes>
  
  );
}

export default App;

