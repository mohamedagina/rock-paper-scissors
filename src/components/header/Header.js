import React from "react";
import "./Header.scss";
import logo from "../../images/logo-bonus.svg";

const Header = ({ score }) => {
  return (
    <header>
      <img src={logo} alt="" height="120px" />
      <section className="score-container">
        <p>SCORE</p>
        <div className="score">{score}</div>
      </section>
    </header>
  );
};

export default Header;
