import { Link } from "react-router-dom";
import "../Style/Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer>
        <div className="socialMedia">
          <div className="socialMediaIcon">
            <Link to={"/"}>
              <FaInstagram />
            </Link>
          </div>
          <div className="socialMediaIcon">
            <Link to={"/"}>
              <FaGithub />
            </Link>
          </div>
          <div className="socialMediaIcon">
            <Link to={"/"}>
              <FaTwitter />
            </Link>
          </div>
          <Link to={"/"}>
            <div className="socialMediaIcon">
              <FaLinkedin />
            </div>
          </Link>
        </div>
        <div className="emailId">
          <div className="emailIcon">
            <IoMailOpen />
          </div>

          <a href="mailto:gauravsunthwal22005@gmail.com">
            gauravsunthwal22005@gmail.com
          </a>
        </div>
        <div className="lastText">
          <Link to={"https://gaurav-sunthwal.vercel.app/"}>
            <p>
              <FaCode />  & Created By 💛  Gaurav Sunthwal
            </p>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
