import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
import "../Style/Stats.css";
function Stats() {
  return (
    <div>
      <section className="stats">
        <div className="goBack">
          <Link to={"/aboutMe"}>
            <IoCaretBackSharp />
            Go Back
          </Link>
        </div>
        <div className="tital">
          <h1>Flex your GitHub Stats</h1>
        </div>
        <div className="themeOps">
          <div className="bgColor">
            <h3>Theme:</h3>
            <select name="bgColor" id="bgColors">
              <option value="default">default</option>
              <option value="dark">dark</option>
              <option value="radical">radical</option>
              <option value="merko">merko</option>
              <option value="gruvbox">gruvbox</option>
              <option value="tokyonight">tokyonight</option>
              <option value="onedark">onedark</option>
              <option value="synthwave">synthwave</option>
              <option value="highcontrast">highcontrast</option>
              <option value="dracula">dracula</option>
              <option value="prussian">prussian</option>
              <option value="monokai">monokai</option>
              <option value="vue">vue</option>
              <option value="vue-dark">vue-dark</option>
              <option value="shades-of-purple">shades-of-purple</option>
              <option value="nightowl">nightowl</option>
              <option value="buefy">buefy</option>
              <option value="midnight-purple">midnight-purple</option>
              <option value="calm">calm</option>
              <option value="flag-india">flag-india</option>
              <option value="omni">omni</option>
              <option value="swift">swift</option>
            </select>
          </div>
          <div className="someMoreOpsBtn">
            <button className="opsManu" role="button">
              Border
            </button>
            <button className="opsManu" role="button">
              Lifetime Commits
            </button>
            <button className="opsManu" role="button">
              Private Commits
            </button>
          </div>
        </div>

        <div className="statsImg">
          <img
            src="https://github-contributor-stats.vercel.app/api?username=gaurav-sunthwal&limit=5&theme=apprentice&combine_all_yearly_contributions=true\\"
            alt=""
          />
          <img
            src="https://github-readme-stats.vercel.app/api?username=gaurav-sunthwal&theme=dark&hide_border=false&include_all_commits=true&count_private=true"
            alt=""
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gaurav-sunthwal&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
            alt=""
          />
          <img
            alt="gaurav-sunthwal's GitHub Stats"
            src="https://awesome-github-stats.azurewebsites.net/user-stats/gaurav-sunthwal?cardType=github&theme=github-dark&showIcons=false&preferLogin=false"
          />
        </div>
        <div className="nextBtns">
          <Link to={"/tags"}>
            <button className="nextBtn">Next</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Stats;
