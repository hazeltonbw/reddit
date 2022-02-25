import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/reddit-logo.png";

export function Header() {
  return (
    <header>
      <Link className="main-link" to="/">
        <img className="logo" src={logo} alt="Reddit logo"></img>
        <h1 className="header-title">reddit minimal</h1>
      </Link>
    </header>
  );
}
