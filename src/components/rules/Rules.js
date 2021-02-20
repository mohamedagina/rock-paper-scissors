import React from "react";
import "./Rules.scss";
import rules from "../../images/image-rules-bonus.svg";
import close from "../../images/icon-close.svg";

const Rules = ({ toggleRules }) => {
  return (
    <div className="rules-overlay">
      <section className="rules-container">
        <p>rules</p>
        <img src={close} alt="" className="close-btn" onClick={toggleRules} />
        <img src={rules} alt="" className="rules-img"></img>
      </section>
    </div>
  );
};

export default Rules;
