import React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
import { Router, Route, Switch } from "react-router-dom";
import createHashHistory from "history/createHashHistory";
const history = createHashHistory();

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

// components
import Hello from "container/Hello";
import Home from "container/Home";
import Detail from "container/Detail";
import Search from "container/Search";
import Category from "container/Category";

require("./reset.css");

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/category/:id" component={Category} />
        <Route exact path="/Hello" component={Hello} />

        {/* <Route exact path="/hello2" component={Hello2} /> */}
      </Switch>
    </Router>
  </Provider>,
  document.body
);
