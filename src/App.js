import React from "react";
import './index.css';
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import About from "./routes/About"
import { Routes,Route } from "react-router-dom";
import Projects from "./routes/Projects";
function App() {
  return (
    <div >
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projects" element={<Projects/>} />
     </Routes>
    </div>
  );
}

export default App;
