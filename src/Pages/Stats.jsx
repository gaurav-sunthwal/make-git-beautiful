import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
import "../Style/Stats.css";

function Stats() {
  const [theme, setTheme] = useState("default"); // Default theme value, you can set your preferred default theme here
  const [border, setBorder] = useState(false); // Default border value

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleBorderClick = () => {
    setBorder(!border);
  };

  const themeOptions = [
    "dark",
    "default",
    "radical",
    "merko",
    "gruvbox",
    "tokyonight",
    "onedark",
    "synthwave",
    "highcontrast",
    "dracula",
    "prussian",
    "monokai",
    "vue",
    "vue-dark",
    "shades-of-purple",
    "nightowl",
    "buefy",
    "midnight-purple",
    "calm",
    "omni",
    "swift",
  ];

  const img1 = `https://github-readme-stats.vercel.app/api?username=gaurav-sunthwal&theme=${theme}&hide_border=${border}%22%20%20}&include_all_commits=true&count_private=true`;
  const img2 = `https://awesome-github-stats.azurewebsites.net/user-stats/gaurav-sunthwal?cardType=github&theme=${theme}&showIcons=false&preferLogin=false`;
  const img3 = `https://github-readme-stats.vercel.app/api/top-langs/?username=gaurav-sunthwal&theme=${theme}&hide_border=${border}&include_all_commits=true&count_private=true&layout=compact`;
  const img4 = `https://github-contributor-stats.vercel.app/api?username=gaurav-sunthwal&limit=5&theme=${theme}&combine_all_yearly_contributions=true`;

  return (
    <div>
      <section className="stats">
        <div className="goBack">
          <Link to={"/aboutMe"}>
            <IoCaretBackSharp />
            Go Back
          </Link>
        </div>
        {/* ... rest of your component */}
      <div className="tital">
          <h1>Flex your GitHub Stats</h1>
        </div>
        <div className="themeOps">
          <div className="bgColor">
            <h3>Theme:</h3>
            <select
              name="bgColor"
              id="bgColors"
              onChange={handleThemeChange}
              value={theme}
            >
              {themeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="someMoreOpsBtn">
            <button
              className="opsManu"
              role="button"
              onClick={handleBorderClick}
            >
              Border
            </button>
          </div>
        </div>

        <div className="statsImg">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <div className="button">
          <Link to={"/tags"}>
            <button className="nextBtn">Next</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Stats;
