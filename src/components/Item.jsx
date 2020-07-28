import React, { useState } from "react";
import Popup from "./Popup";
// import PropTypes from "prop-types";

function Item({ order }) {
  const [popup, setPopup] = useState(false);

  return (
    <React.Fragment>
      {popup ? (
        <Popup order={order} closePopup={() => setPopup(!popup)} />
      ) : null}
      <div className="order" onClick={() => setPopup(!popup)}>
        <p>{order.items[0].sku}</p>
        <p>{order.items[0].name}</p>
        <p>{order.items[0].quantity}</p>
        <p>{`$ ${order.items[0].price}`}</p>
      </div>
    </React.Fragment>
  );
}

// Item.propTypes = {
//   item: PropTypes.object.isRequired,
// };

export default Item;
