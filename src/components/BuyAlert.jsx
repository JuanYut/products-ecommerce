import React from "react";
import "./buyAlert.css";
import icon from "../images/box.png";
import PropTypes from "prop-types";

const BuyAlert = ({
  title = "Thanks for shopping with us!",
  message = "Your order will arrive soon.",
}) => {
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

BuyAlert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default BuyAlert;
