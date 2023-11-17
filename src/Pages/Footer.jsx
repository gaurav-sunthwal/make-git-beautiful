import { Link } from "react-router-dom"
import "../Style/Footer.css"
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
        <div>
            <div className="socialMedia">
                <Link className="socialMediaIcon" to={"/"}><FaInstagram /></Link>
                <Link className="socialMediaIcon" to={"/"}><FaGithub /></Link>
                <Link className="socialMediaIcon" to={"/"}><FaTwitter /></Link>
                <Link className="socialMediaIcon" to={"/"}><FaLinkedin /></Link>
            </div>
        </div>
    )
}

export default Footer
