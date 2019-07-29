import React, { PureComponent } from "react";
import logo from "../../images/qci-logo.jpg";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import UlrTextForm from "../ulrTextForm";
class Header extends PureComponent {
  state = {
    urlExits: false
  };
  isUrlExists = () => {
    let classes = "header z-depth-4";
    classes += this.state.urlExits === true ? "" : " active";
    return classes;
  };
  render() {
    const { location, getData } = this.props;
    if (location.pathname === "/") {
      this.setState({ urlExits: true });
    }
    return (
      <header className={this.isUrlExists()}>
        <div className="container">
          <div className="row">
            <div className="col l6">
              <Link to="/" className="logo">
                <img src={logo} alt={logo} style={{ width: "280px" }} />
              </Link>
            </div>
            <div className="col l6">
              <UlrTextForm {...this.props} getData={getData} />
            </div>
          </div>
        </div>

        <h6 className="urlMsg center-align">
          Please fill 18 alphanumeric ULR number above to proceed.
        </h6>
      </header>
    );
  }
}

export default withRouter(Header);
