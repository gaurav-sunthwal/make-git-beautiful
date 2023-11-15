import "../Style/Navbar.css";
import logoImg from "../Img/logo.png";
function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src={logoImg} alt="" />
          <h1>GNS</h1>
        </div>
        <div className="right">
            <a href="/"><button className="btn" role="button">
            Donate us
            </button></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
