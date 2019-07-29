import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { connect } from "react-redux";
import * as actionCreater from "../store/actions/index";
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
    try {
      this.props.onGetData(this.state.data.ulr);
    } catch (ex) {}
    const { apiData } = this.props.api;
    if (apiData) {
      this.props.history.push("/dashboard");
    } else {
      alert("Please Enter Correct ULR No.");
      this.props.history.push("/");
    }
  };
  render() {
    if (this.props.api === undefined) return null;
    console.log(this.props.api);
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
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
    api: state.apiDataResponse.apiData,
    err: state.apiDataResponse.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetData: data => dispatch(actionCreater.fetchData(data)),
    onError: () => dispatch(actionCreater.errorData())
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(UlrTextForm);
