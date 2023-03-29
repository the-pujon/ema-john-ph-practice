import React from "react";

import logo from "../../assets/images/logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="nav__menu">
        <a href="/shop">shop</a>
        <a href="/order">order</a>
        <a href="/inventory">inventory</a>
        <a href="/login">login</a>
      </div>
    </nav>
  );
};

export default Header;
