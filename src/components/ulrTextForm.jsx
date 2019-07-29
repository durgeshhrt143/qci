import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { connect } from "react-redux";
import * as actionCreater from "../store/actions/index";
import logo from "../images/logo.svg";
class UlrTextForm extends Form {
  state = {
    data: { ulr: "" },
    errors: {}
  };
  schema = {
    ulr: Joi.string()
      .required()
      .min(18)
      .label("Enter ULR number*")
  };
  doSubmit = () => {
    this.props.onGetData(this.state.data.ulr);

    setTimeout(() => {
      try {
        if (this.props.api.data.ULR) {
          this.props.history.push("/dashboard");
        }
      } catch (ex) {
        return null;
      }
    }, 500);
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.props.loading && (
            <div className="overflow">
              <img src={logo} className="loading" alt={logo} />
            </div>
          )}
          <div className="row">
            <div className="input-field col l10">
              {this.renderInput("ulr", "Enter ULR number*")}
            </div>
            {this.renderButton("submit")}
          </div>
        </form>
      </React.Fragment>
    );
  }
}
const mapStateToProp = state => {
  return {
    api: state.apiDataResponse.data,
    loading: state.apiDataResponse.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetData: data => dispatch(actionCreater.fetchData(data))
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(UlrTextForm);
