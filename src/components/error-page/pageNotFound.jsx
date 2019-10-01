import React from "react";
import o from "../../images/o.png";
import notfound from "../../images/404.svg";
import { Link } from "react-router-dom";
const PageNotFound = props => {
  return (
    <div className="container center-align" style={{ marginTop: "-30px" }}>
      <div className="row">
        <div className="col l12">
          <img src={o} className="_o" alt="o" />
          <img src={notfound} className="_notFound" alt="not found" />
        </div>
        <h4 className="_30N61">OOPS!</h4>
        <p>
          We couldn't find the page you were looking for. <br />
          Don't panic or you'll wake up the cat. Press the button below to go to
          homepage.
        </p>
        <Link to="/" className="btn" style={{ marginBottom: 40 }}>
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
