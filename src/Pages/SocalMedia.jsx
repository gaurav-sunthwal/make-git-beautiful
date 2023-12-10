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
              <div className="formSec">
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Enter Your GitHub Username"
                  required
                />

                <Link
                  to={"/aboutMe"}
                  className="btn nextBtnpage1"
                  type="submit"
                >
                  <FaArrowRight />
                </Link>
              </div>
              <div className="formSec">
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Enter Your GitHub Username"
                  required
                />

                <Link
                  to={"/aboutMe"}
                  className="btn nextBtnpage1"
                  type="submit"
                >
                  <FaArrowRight />
                </Link>
              </div>
              <div className="formSec">
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Enter Your GitHub Username"
                  required
                />

                <Link
                  to={"/aboutMe"}
                  className="btn nextBtnpage1"
                  type="submit"
                >
                  <FaArrowRight />
                </Link>
              </div>
              <div className="formSec">
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Enter Your GitHub Username"
                  required
                />

                <Link
                  to={"/aboutMe"}
                  className="btn nextBtnpage1"
                  type="submit"
                >
                  <FaArrowRight />
                </Link>
              </div>
              <div className="formSec">
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Enter Your GitHub Username"
                  required
                />

                <Link
                  to={"/aboutMe"}
                  className="btn nextBtnpage1"
                  type="submit"
                >
                  <FaArrowRight />
                </Link>
              </div>
              <div className="formSec">
                <input
                  className="usernameInput"
                  type="text"
                  placeholder="Enter Your GitHub Username"
                  required
                />

                <Link
                  to={"/aboutMe"}
                  className="btn nextBtnpage1"
                  type="submit"
                >
                  <FaArrowRight />
                </Link>
              </div>
            </form>
          </div>
        </div>
        <NextBtn link="/donateMe" />
      </section>
    </div>
  );
}

export default SocalMedia;
