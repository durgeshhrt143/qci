import React, { Component } from "react";
import Header from "./../components/layout/header";
import Dashboard from "./../components/dashboard";
import Dashboard2 from "./../components/dashboard2";
import PageNotFound from "./../components/pageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import "../css/App.scss";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="content">
          <Switch>
            <Route path="/dashboard" component={Dashboard2} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/page-no-found" exact component={PageNotFound} />
            <Redirect to="/page-no-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
