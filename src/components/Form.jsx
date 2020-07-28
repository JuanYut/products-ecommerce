import React, { useState } from "react";
import uuid from "uuid/dist/v4";
// import PropTypes from "prop-types";

function Form({ newOrder }) {
  const [order, setOrder] = useState({
    id: "",
    items: [
      {
        sku: "",
        name: "",
        quantity: "",
        price: "",
      },
    ],
    shippingMethod: "",
    note: "",
    units: { weight: "" },
    dates: { createdAt: "" },
  });
  const [error, setError] = useState(false);

  // * Funcion que se ejecuta cada que el usuario escribe en un input
  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  // * Funcion que se ejecuta cada que el usuario escribe en un input para los Items
  const handleChangeItems = (e) => {
    setOrder({
      ...order,
      items: [{ ...items[0], [e.target.name]: e.target.value }],
    });
  };

  // Extraer los valores
  const { items, shippingMethod, note, units, dates } = order;
  console.log(items);

  // * Submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (
      items[0].sku.trim() === "" ||
      items[0].name.trim() === "" ||
      items[0].quantity.trim() === "" ||
      items[0].price.trim() === "" ||
      shippingMethod.trim() === "" ||
      note.trim() === "" ||
      units.weight.trim() === "" ||
      dates.createdAt.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Eliminar el mensaje de error
    setError(false);

    // Asignar un ID aleatorio
    order.id = uuid();

    // Crear la ordern
    newOrder(order);

    // Reiniciar el form
    setOrder({
      id: "",
      items: [
        {
          sku: "",
          name: "",
          quantity: "",
          price: "",
        },
      ],
      shippingMethod: "",
      note: "",
      units: { weight: "" },
      dates: { createdAt: "" },
    });
  };

  return (
    <React.Fragment>
      {error ? <p className="alert-error">All fields are required</p> : null}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="one-half column">
            <label htmlFor="">Sku</label>
            <input
              type="text"
              name="sku"
              className="u-full-width"
              placeholder="Sku"
              onChange={handleChangeItems}
              value={items[0].sku}
            />
          </div>
          <div className="one-half column">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              className="u-full-width"
              placeholder="Name"
              onChange={handleChangeItems}
              value={items[0].name}
            />
          </div>
        </div>

        <div className="row">
          <div className="one-half column">
            <label htmlFor="">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="u-full-width"
              placeholder="Quantity"
              onChange={handleChangeItems}
              value={items[0].quantity}
            />
          </div>
          <div className="one-half column">
            <label htmlFor="">Price</label>
            <input
              type="number"
              name="price"
              className="u-full-width"
              placeholder="Price"
              onChange={handleChangeItems}
              value={items[0].price}
            />
          </div>
        </div>

        <div className="row">
          <div className="one-half column">
            <label htmlFor="">Shipping Method</label>
            <input
              type="text"
              name="shippingMethod"
              className="u-full-width"
              placeholder="Shipping Method"
              onChange={handleChange}
              value={shippingMethod}
            />
          </div>
          <div className="one-half column">
            <label htmlFor="">Units</label>
            <input
              type="text"
              name="units"
              className="u-full-width"
              placeholder="Units"
              onChange={(e) =>
                setOrder({
                  ...order,
                  [e.target.name]: { weight: e.target.value },
                })
              }
              value={units.weight}
            />
          </div>
        </div>

        <label htmlFor="">Note</label>
        <textarea
          name="note"
          className="u-full-width"
          placeholder="Note"
          onChange={handleChange}
          value={note}
        ></textarea>

        <div className="row">
          <div className="one-half column">
            <label htmlFor="">Date</label>
            <input
              type="date"
              name="dates"
              className="u-full-width"
              placeholder="Dates"
              onChange={(e) =>
                setOrder({
                  ...order,
                  [e.target.name]: { createdAt: e.target.value },
                })
              }
              value={dates.createdAt}
            />
          </div>
        </div>

        <button
          type="submit"
          className="u-full-width button-primary btn-submit"
        >
          New Order
        </button>
      </form>
    </React.Fragment>
  );
}

// Form.propTypes = {
//   newQuote: PropTypes.func.isRequired,
// };

export default Form;
