import "../Style/Home.css";
// import { useHistory } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// img

import codingImg from "../Img/codingImg.gif";
import { Link } from "react-router-dom";
import { useState } from "react";
function Home() {
  // const history = useHistory();

  return (
    <div>
      <section className="startSec">
        <div className="mainSec">
          <div className="secText">
            <h1>Best Profile Generator</h1>
            <div className="startInput">
              <form className="userNameForm">
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Enter Your GitHub Username"
                  required
                />
                
                <Link to={"/aboutMe"} className="btn nextBtnpage1" type="submit">
                  <FaArrowRight/>
                </Link>
              </form>
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
    </div>
  );
}

export default Home;
