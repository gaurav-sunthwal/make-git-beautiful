import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
function AddTechTags() {
  return (
    <div>
      <div className="goBack">
        <Link to={"/stats"}>
          <IoCaretBackSharp />
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default AddTechTags;
