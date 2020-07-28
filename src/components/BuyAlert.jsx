import React from "react";
import "./buyAlert.css";
import icon from "../images/box.png";

const BuyAlert = ({ title, message }) => {
  return (
    <div className="buyAlert">
      <img className="buyAlert-image" src={icon} alt="product order" />
      <div>
        <h2 className="buyAlert-title">
          {title}{" "}
          <span role="img" aria-label="smile">
            😃
          </span>
        </h2>
        <p className="buyAlert-message">
          {message}{" "}
          <span role="img" aria-label="car">
            🚛
          </span>
        </p>
      </div>
    </div>
  );
};

export default BuyAlert;
