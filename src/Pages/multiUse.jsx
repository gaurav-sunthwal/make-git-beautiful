import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
function NextBtn(props) {
  return (
    <div>
      <div className="button">
        <Link to={props.link}>
          <button className="nextBtn">Next</button>
        </Link>
      </div>
    </div>
  );
}
function Tital(props) {
  return (
    <div>
     <div className="tital">
          <h1>{props.tital}</h1>
        </div>
    </div>
  );
}

function GoBack(props) {
  return (
    <div>
      <div className="goBack">
        <Link to={props.link}>
          <IoCaretBackSharp />
          Go Back
        </Link>
      </div>
    </div>
  );
}

export { NextBtn, GoBack , Tital};
