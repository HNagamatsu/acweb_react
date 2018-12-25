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
import Home from "container/Home";
import Detail from "container/Detail";
import Search from "container/Search";
import Category from "container/Category";
import Hello from "container/Hello";

require("./reset.css");

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:page" component={Home} />
        <Route exact path="/detail/:id/" component={Detail} />
        <Route exact path="/search/:query/" component={Search} />
        <Route exact path="/search/:query/:page" component={Search} />
        <Route exact path="/category/:slug/:id/" component={Category} />
        <Route exact path="/category/:slug/:id/:page" component={Category} />

        {/* <Route exact path="/hello2" component={Hello2} /> */}
      </Switch>
    </Router>
  </Provider>,
  document.body
);
