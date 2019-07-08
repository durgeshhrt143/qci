import React from "react";
import logo from "../../images/qci-logo.jpg";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    <header className="header z-depth-4">
      <div className="container">
        <div className="row">
          <div className="col l6">
            <Link to="/" className="logo">
              <img src={logo} alt={logo} style={{ width: "280px" }} />
            </Link>
          </div>
          <div className="col l6">
            <div className="row">
              <div className="input-field col l10">
                <input id="password" type="text" />
                <label htmlFor="password">Enter ULR number *</label>
              </div>

              <button
                type="button"
                className="waves-effect waves-light btn-small"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <h6 className="urlMsg center-align">
        Please fill 18 alphanumeric ULR number above to proceed.
      </h6>
    </header>
  );
};

export default Header;
