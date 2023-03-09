import React, { Component } from "react";
import "./nav.css";
import logo from "../../pages/Home/assets/img/logo.svg";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
    );
  }
}
