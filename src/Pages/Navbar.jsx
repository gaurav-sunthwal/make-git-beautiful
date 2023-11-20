import "../Style/Navbar.css";
import logoImg from "../Img/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <Link to={"/"}>
          <div className="logo">
            <img src={logoImg} alt="" />
            <h1>GNS</h1>
          </div>
        </Link>
        <div className="right">
          <a href="/">
            <button className="btn" role="button">
              Donate us
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
