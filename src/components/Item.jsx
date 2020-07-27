import React from "react";
// import PropTypes from "prop-types";

function Item({ order }) {
  return (
    <div className="order">
      <p>{order.items[0].sku}</p>
      <p>{order.items[0].name}</p>
      <p>{order.items[0].quantity}</p>
      <p>{`$ ${order.items[0].price}`}</p>
    </div>
  );
}

// Item.propTypes = {
//   item: PropTypes.object.isRequired,
// };

export default Item;
