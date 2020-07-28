import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./images/ecommerce.png";
import Item from "./components/Item";
import Form from "./components/Form";
import BuyAlert from "./components/BuyAlert";

function App() {
  const [orders, setOrders] = useState([]);
  const [buyAlert, setBuyAlert] = useState(false);

  let token =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkM2NIVUVibVJoc1EzeXhNbzV2VnliSTFzaDZCSDJZRCIsImlhdCI6MTU4NTkzMjYzNDU0OH0.tMSht_M3ryQl5IqCirhYR1gb8j3FQ26vILT4Qpx4XrdFz-zUmqbgFYiKTaZHPpB85etRIMhxVoZf6tOrHy0fnA";

  // * Funcion que trae las ordenes del llamado a la API
  const getOrders = async () => {
    let res = await axios.get(
      "https://eshop-deve.herokuapp.com/api/v2/orders",
      { headers: { Authorization: token } }
    );
    let data = await res.data.orders;
    setOrders(data);
  };

  // * Funcion que tome las ordenes actuales y agregue la nueva
  const newOrder = (order) => {
    setOrders([...orders, order]);
  };

  // * Funcion de la alerta Buy Now
  const handleBuyAlert = () => {
    setTimeout(() => {
      setBuyAlert(true);
    }, 1000);

    setTimeout(() => {
      setBuyAlert(false);
    }, 11000);
  };

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {buyAlert ? (
        <BuyAlert
          title="Thanks for shopping with us!"
          message="Your order will arrive soon."
        />
      ) : null}
      <div className="title">
        <img className="logo" src={Logo} alt="logo" />
        <h1 className="title-text">Products Ecommerce</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>New Order</h2>
            <Form newOrder={newOrder} />
          </div>
          <div className="one-half column">
            <h2>Orders</h2>
            <div className="order-title">
              <p>No.</p>
              <p>Sku</p>
              <p>Name</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            {orders.map((order) => (
              <Item order={order} key={order.id} />
            ))}
            <button className="u-full-width btn-buy" onClick={handleBuyAlert}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
