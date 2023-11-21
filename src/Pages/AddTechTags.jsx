import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
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
          <p>please wait for images to load after changing any values</p>
        </div>
        
        <div className="tagSearch">
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              name=""
              placeholder="Search"
            />
            <button className="searchButton" href="#">
              <i className="material-icons">search</i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddTechTags;
