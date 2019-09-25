import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreater from "../../store/actions/index";
class ProtectedRoute extends Component {
  state = {
    auth: false
  };
  componentDidMount() {
    this.props.onAuth(false);
  }
  componentDidUpdate(prevProps, prevState) {
    alert("test");
    if (prevState.auth !== this.state.auth) this.setState({ auth: true });
  }
  render() {
    const {
      path,
      component: Component,
      render,
      auth,
      onGetUlr,
      ...rest
    } = this.props;
    console.log(!this.props.auth);
    return (
      <Route
        {...rest}
        render={props => {
          if (!this.state.auth) return <Redirect to={`/`} />;
          return Component ? <Component {...props} /> : render(props);
        }}
      />
    );
  }
}
const mapStateToProp = state => {
  return {
    api: state.apiDataResponse.data,
    loading: state.apiDataResponse.loading,
    auth: state.auth.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAuth: auth => dispatch(actionCreater.getAuth(auth))
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(ProtectedRoute);
