// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import "./Style/Genural.css"
import AboutMe from "./Pages/AboutMe";
import Footer from "./Pages/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
