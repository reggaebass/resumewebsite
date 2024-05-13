import React from "react";
import logo from "../../assets/MESlogo-01.png"
import './header.scss';


export const Header = () => {
  return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="Marc Smith Logo" />
            </div>
            <div className="header__text">
                <h1>Marc Elliot Smith</h1>
                <h2>Senior Software Engineer</h2>
            </div>
        </div>
  );
}