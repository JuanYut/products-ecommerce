import React from "react";
import "./popup.css";
import icon from "../images/box.png";

const Popup = ({ order, closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-icon">
          <img className="popup-image" src={icon} alt="product order" />
        </div>
        <div className="popup-columns">
          <h3 className="popup-name">{order.items[0].name}</h3>

          <div className="popup-info">
            <p>
              Sku: <span>{order.items[0].sku}</span>
            </p>
            <p>
              Quantity: <span>{order.items[0].quantity}</span>
            </p>
            <p>
              Price: <span>{`$ ${order.items[0].price}`}</span>
            </p>
          </div>

          <div className="popup-info">
            <p>
              Shipping Method: <span>{order.shippingmethod}</span>
            </p>
          </div>

          <div className="popup-info">
            <p>
              Units: <span>{order.units.weight}</span>
            </p>
            <p>
              Date: <span>{order.dates.createdAt}</span>
            </p>
          </div>

          <div className="popup-info">
            <p>
              Note: <span>{order.note}</span>
            </p>
          </div>
        </div>
        <button className="popup-close" onClick={closePopup}>
          <span>X</span>
        </button>
      </div>
    </div>
  );
};

export default Popup;
