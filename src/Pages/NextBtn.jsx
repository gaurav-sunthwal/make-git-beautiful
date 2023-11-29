import { Link } from "react-router-dom";

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

export default NextBtn;
