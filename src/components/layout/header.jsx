import React, { PureComponent } from "react";
import logo from "../../images/qci-logo.jpg";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import UlrTextForm from "../ulrTextForm";
import verified from "../../images/verify.gif";
class Header extends PureComponent {
  isUrlExists = () => {
    let classes = "header z-depth-4";
    classes += this.props.location.pathname === "/dashboard" ? " active" : "";
    return classes;
  };
  render() {
    const { getData } = this.props;

    return (
      <header className={this.isUrlExists()}>
        <div className="container">
          <div className="row">
            <div className="col l6">
              <Link to="/" className="logo">
                <img src={logo} alt={logo} style={{ width: "280px" }} />
              </Link>
            </div>
            <div className="col l6 right-align">
              <UlrTextForm {...this.props} getData={getData} />
              <figure className="m-zero">
                <strong>ULR Verified</strong>
                <img src={verified} alt="verified" />
              </figure>
            </div>
          </div>
        </div>

        <h6 className="urlMsg center-align">
          Please fill 18 alphanumeric ULR numbers above to proceed.
        </h6>
      </header>
    );
  }
}

export default withRouter(Header);
