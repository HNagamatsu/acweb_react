import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Router, Route, Switch } from "react-router-dom";
import createHashHistory from "history/createHashHistory";
const history = createHashHistory();

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

// components
import Hello from "container/Hello";
import Home from "container/Home";

// import Hello2 from 'components/Hello2';

if (module.hot) {
  module.hot.accept();
}
render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Hello" component={Hello} />

        {/* <Route exact path="/hello2" component={Hello2} /> */}
      </Switch>
    </Router>
  </Provider>,
  document.body
);
