import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import tagsPageImg from "../Img/tags.png";
import "../Style/AddTechTag.css";
import { useState } from "react";
function AddTechTags() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tags, setTags] = useState([
    "C",
    "C++",
    "Python",
    "React Js",
    "JavaScript",
    "Java",
    "C#",
    "C",
    "PHP",
    "Ruby",
    "Swift",
    "Kotlin",
    "Go",
    "Julia",
  ]);

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <section className="tags">
        <div className="goBack">
          <Link to={"/stats"}>
            <IoCaretBackSharp />
            Go Back
          </Link>
        </div>
        <div className="tital">
          <h1>Add Tech that you use</h1>
          <div className="tagSearch">
            <div className="search-box">
              <button className="btn-search">
                <IoIosSearch />
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="tagsSec">
          <div className="imgSec">
            <img src={tagsPageImg} alt="" />
          </div>
          <div className="allTags">
            <div className="topic">
              <h1>Add Tags</h1>
            </div>
            <div className="mainTagSec">
              {filteredTags.map((tagName, index) => (
                <Tags key={index} name={tagName} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddTechTags;

function Tags(props) {
  const [backgroundColor, setBackgroundColor] = useState("");

  // Event handler to change the background color on click
  const handleClick = () => {
    const newColor = backgroundColor === "#e08080" ? "white" : "#e08080";

    // Update the background color state
    setBackgroundColor(newColor);
  };
  return (
    <>
      <div className="tag opsManu" onClick={handleClick}>
        <div className="tagName  tagPart">
          <p>{props.name}</p>
        </div>
        <div className="line tagPart">|</div>
        <div className="add tagPart">
          <p>+</p>
        </div>
      </div>
    </>
  );
}
