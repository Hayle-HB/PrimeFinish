import React, { useState } from "react";
import "../../assets/Style/NavBar.css";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogInClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="navigation">
      <div className="logo">
        <h1>PrimeFinish</h1>
      </div>
      <nav className="nav-bar">
        <ul>
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#service">Service</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="logIn-logOut">
        <button className="logIn" onClick={handleLogInClick}>
          {isLoggedIn ? "LogOut" : "LogIn"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
