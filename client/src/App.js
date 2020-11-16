import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Teams from "./components/layout/Teams";
import TeamDetail from "./components/teams/TeamDetail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/teams/:teamId" component={TeamDetail} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
