import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import tags from "../Img/tags.png";
import "../Style/AddTechTag.css";
function AddTechTags() {
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
            <form className="d-flex" role="search">
              <div className="search-box">
                <button className="btn-search">
                  <IoIosSearch />
                </button>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Type to Search..."
                />
              </div>
            </form>
          </div>
        </div>

        <div className="tagsSec">
          <div className="imgSec">
            <img src={tags} alt="" />
          </div>
          <div className="allTags">
            <div className="topic">
              <h1>Add Tags</h1>
            </div>
            <div className="mainTagSec">
              <Tags name = "C"/>
              <Tags name = "C++"/>
              <Tags name = "Python"/>
              <Tags name = "React Js"/>
              <Tags name = "Js"/>
              <Tags name = "Java"/>
              <Tags name = "C#"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddTechTags;

function Tags(props) {
  return (
    <>
      <div className="tag opsManu">
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
