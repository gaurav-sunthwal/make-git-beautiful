import "../Style/Home.css";

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
              <input className="usernameInput" type="text" />
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
