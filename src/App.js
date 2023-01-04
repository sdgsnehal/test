import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";
import MainPage from "./Components/MainPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
