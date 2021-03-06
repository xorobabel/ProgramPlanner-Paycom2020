import React from "react";
import ReactDOM from "react-dom";
//For Async Function Calls, specifically in helper.js
import "core-js";
import "regenerator-runtime/runtime";
//Styling:
import "react-datepicker/dist/react-datepicker.css";
import "./css/index.css";
//Redux and Store
import store from "./store/index";
import { Provider } from "react-redux";
//Routing:
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components:
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import DashboardApp from "./components/DashboardApp";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/paycomProject">
      <Switch>
        {/*The login page. This is where users can be redirected to create account, login, and if a cookie is set, be routed to the dashboard*/}
        <Route path="/index" render={(props) => <Login />} />
        {/*The register page. Users create accounts here and have the option to be sent back to login*/}
        <Route path="/register" render={(props) => <Register />} />
        {/*Main dashboard view. This is where users interact with sessions and are redirected to login if they chooser to logout of their session. This route is private as the dashboard should not be entered if no user is present*/}
        <Route path="/dashboard" render={(props) => <DashboardApp />} />
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
