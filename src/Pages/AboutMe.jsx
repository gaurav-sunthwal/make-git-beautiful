import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
import "../Style/AboutMe.css";
import aboutMeImg from "../Img/aboutMe.svg";
function AboutMe() {
  return (
    <div>
      <section className="aboutSec">
        <div className="goBack">
          <Link to={"/"}>
            <IoCaretBackSharp />
            Go Back
          </Link>
        </div>
        <div className="tital">
          <h1>Add a small introduction</h1>
        </div>
        <div className="mainAboutSec">
          <div className="leftImg">
            <img src={aboutMeImg} alt="" />
          </div>
          <div className="rightText">
            <h1>About Me :</h1>
            <textarea
              name="aboutMe"
              id="aboutMe"
              cols="50"
              rows="10"
              placeholder="🔭 I’m currently working on
👯 I’m looking to collaborate on
🤝 I’m looking for help with
🌱 I’m currently learning
💬 Ask me about
⚡ Fun fact"
            ></textarea>
            <div className="button">
              <Link to={"/stats"}>
                <button className="nextBtn">Next</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
