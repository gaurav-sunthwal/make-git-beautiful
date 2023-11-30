import "../Style/AboutMe.css";
import aboutMeImg from "../Img/aboutMe.svg";
import { NextBtn, GoBack} from "./multiUse";
function AboutMe() {
  return (
    <div>
      <section className="aboutSec">
        <GoBack backLink="/"/>
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
            <NextBtn link="/stats" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
