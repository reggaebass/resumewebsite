import React, { useContext } from "react";
import logo from "../../assets/MESlogo-01.png"
import { HomepageContext } from "../../context/context";
import { FaWandSparkles } from "react-icons/fa6";
import './header.scss';


export const Header = () => {
    const { isSparkle, setIsSparkle } = useContext(HomepageContext)
    const handleClick = () => {
        setIsSparkle(!isSparkle)
    }

  return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="Marc Smith Logo" />
            </div>
            <div className="header__text">
                <h1>Marc Elliot Smith</h1>
                <h3>Software Engineer/ Code Monkey</h3>
            </div>
            <div className="header__buttons">
                <span className={"effects"} onClick={() => handleClick()}>
                    Toggle Canvas <FaWandSparkles />
                </span>
            </div>
        </div>
  );
}