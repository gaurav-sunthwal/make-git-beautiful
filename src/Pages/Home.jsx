import "../Style/Home.css";
// import { useHistory } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// img

import codingImg from "../Img/codingImg.gif";
import { Link } from "react-router-dom";
import { useState } from "react";
import Result from "./Result";
import AboutMe from "./AboutMe";
import NotFound from "./NotFound";
function Home() {
  // const history = useHistory();

  const [userName, setUserName] = useState("");
  const [displayHome, setdisplayHome] = useState(true);
  const [componet, setComponet] = useState("Home");

  function handalChange(e) {
    setUserName(e.target.value);
  }
  function handalClick(view) {
    setComponet(view)
    setdisplayHome(false)
  }
  return (
    
    <div>
      <section 
        style={{display : displayHome ? "block" : "none"}}
        className="startSec"
      >
        <div className="mainSec">
          <div className="secText">
            <h1>Best Profile Generator</h1>
            <div className="startInput">
              <div className="allForm">
                <input
                  type="text"
                  value={userName}
                  onChange={handalChange}
                  required
                />
                <button
                  onClick={()=>handalClick("AboutMe")}
                  className="btn"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="animatedH1">
              <h1>
                Create <span className="animatedText"></span> Profile
              </h1>
            </div>
          </div>
          <div className="secImg">
            <img src={codingImg} alt="" />
          </div>
        </div>
        
      </section>
      {componet === "AboutMe" && <AboutMe handalClick = {()=>handalClick("Home")}/>}
      {componet === "" && <NotFound/>}
    </div>
  );
}

export default Home;
