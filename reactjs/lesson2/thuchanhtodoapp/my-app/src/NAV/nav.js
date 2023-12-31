import React from "react";
import "./nav.scss";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
          Todo
        </NavLink>
      </div>
    );
  }
}

export default Nav;
