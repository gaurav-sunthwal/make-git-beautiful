import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import "./Style/Genural.css"
import AboutMe from "./Pages/AboutMe";
import Footer from "./Pages/Footer";
import Stats from "./Pages/Stats";
import AddTechTags from "./Pages/AddTechTags";
import SocalMedia from "./Pages/SocalMedia";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/socalMedia" element={<SocalMedia />} />
          <Route path="/stats" element={<Stats/>} />
          <Route path="/tags" element={<AddTechTags/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
