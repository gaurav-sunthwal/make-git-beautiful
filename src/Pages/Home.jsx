import "../Style/Home.css";

import { FaArrowRight } from "react-icons/fa";
// img

import codingImg from "../Img/codingImg.gif";

function Home() {
  return (
    <div>
      <section className="startSec">
        <div className="mainSec">
          <div className="secText">
            <h1>Best Profile Generator</h1>
            <div className="startInput">
              <input
                className="usernameInput"
                type="text"
                placeholder="Enter Your GitHub Username"
              />
              <button className="btn nextBtn">
                <FaArrowRight />
              </button>
            </div>
            <div className="animatedH1">
              <h1>Create <span className="animatedText">Modern</span> Profile</h1>
            </div>
          </div>
          <div className="secImg">
            <img src={codingImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
