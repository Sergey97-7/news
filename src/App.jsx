import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import Header from "./components/Header";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="App">Hello World!</div>
            )}
          />
          <Route
            exact
            path="/2"
            render={() => (
              <div className="App">Hello World from another route!</div>
            )}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
