import React, { Component } from "react";
import Header from "./../components/layout/header";
import Home from "./../components/landing-page/home";
import Dashboard from "../components/dashboard-page/dashboard";
import PageNotFound from "../components/error-page/pageNotFound";
// import ProtectedRoute from "./../components/common/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../css/App.scss";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header urlExits={false} />
        <ToastContainer />
        <main className="content">
          <Switch>
            {/* <ProtectedRoute path={`/dashboard`} component={Dashboard} /> */}
            <Route path="/dashboard" render={props => <Dashboard />} />
            <Route path="/page-no-found" exact component={PageNotFound} />
            <Route path="/" exact component={Home} />

            <Redirect to="/page-no-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
