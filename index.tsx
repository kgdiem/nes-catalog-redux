import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import "nes.css/css/nes.min.css";
import "./style.css";

import { DetailPage, SearchPage } from "./pages";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/:id">
          <DetailPage />
        </Route>
        <Route path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

render(<App />, document.getElementById("root"));
