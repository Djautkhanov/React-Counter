import React from "react";
import logo from "../../Assets/logo1.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__log">
          <img src={logo}></img>
          <span className="logo_text">ounter</span>
        </div>
        <ul className="header__list">
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
