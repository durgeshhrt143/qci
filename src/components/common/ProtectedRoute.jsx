import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreater from "../../store/actions/index";
const ProtectedRoute = ({
  path,
  component: Component,
  render,
  auth,
  onGetUlr,
  ...rest
}) => {
  if (typeof auth === "undefined") return null;
  console.log(auth);
  return (
    <Route
      {...rest}
      render={props => {
        if (onGetUlr(true).ulr) return <Redirect to={`/`} />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};
const mapStateToProp = state => {
  return {
    api: state.apiDataResponse.data,
    loading: state.apiDataResponse.loading,
    auth: state.auth.authentication
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetUlr: ulr => dispatch(actionCreater.getUlr(ulr))
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(ProtectedRoute);
