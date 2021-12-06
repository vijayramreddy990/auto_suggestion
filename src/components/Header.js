import React from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>
          <a href="/">Citizen</a>
        </h1>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Login/Register</a>
        </li>
        <li>
          <img className="menu" src={Close} alt="" width="30" />
        </li>
      </ul>
      <div className="menu">
        <img src={Menu} alt="" width="30" />
      </div>
    </header>
  );
};

export default Header;
