import React from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">Citizen</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login/Register</Link>
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
