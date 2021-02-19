import React from "react";
import "./Rules.scss";
import rules from "../../images/image-rules-bonus.svg";
import close from "../../images/icon-close.svg";

const Rules = ({ toggleRules }) => {
  return (
    <div className="rules-overlay">
      <section className="rules-container">
        <section className="rules-header">
          rules
          <img src={close} alt="" className="close-btn" onClick={toggleRules} />
        </section>
        <img src={rules} alt="" width="100%"></img>
      </section>
    </div>
  );
};

export default Rules;
