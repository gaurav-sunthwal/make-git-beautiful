import { Link } from "react-router-dom";
import { NextBtn, GoBack, Tital } from "./multiUse";
import { FaArrowRight } from "react-icons/fa";
import "../Style/SocalMedia.css";
function SocalMedia() {
  return (
    <div>
      <section className="socalMediaLinks">
        <GoBack link="/tags" />
        <Tital tital="Add Your Social Links" />
        <div className="socalMedia">
          <div className="startInput">
            <form className="userNameForm">
              <inputSocalMedia />
              <inputSocalMedia />
            </form>
          </div>
        </div>
        <NextBtn link="/donateMe" />
      </section>
    </div>
  );
}

function inputSocalMedia() {
  return (
    <div className="formSec">
      <input
        className="usernameInput"
        type="text"
        placeholder="Enter Your GitHub Username"
        required
      />

      <Link to={"/aboutMe"} className="btn nextBtnpage1" type="submit">
        <FaArrowRight />
      </Link>
    </div>
  );
}

export default SocalMedia;
