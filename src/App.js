import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./images/ecommerce.png";
import Item from "./components/Item";

function App() {
  const [orders, setOrders] = useState([]);

  let token =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkM2NIVUVibVJoc1EzeXhNbzV2VnliSTFzaDZCSDJZRCIsImlhdCI6MTU4NTkzMjYzNDU0OH0.tMSht_M3ryQl5IqCirhYR1gb8j3FQ26vILT4Qpx4XrdFz-zUmqbgFYiKTaZHPpB85etRIMhxVoZf6tOrHy0fnA";

  const getOrders = async () => {
    let res = await axios.get(
      "https://eshop-deve.herokuapp.com/api/v2/orders",
      { headers: { Authorization: token } }
    );
    let data = await res.data.orders;
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <div className="title">
        <img className="logo" src={Logo} alt="logo" />
        <h1 className="title-text">Products Ecommerce</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="one-half column">Form:</div>
          <div className="one-half column">
            <h2>Orders</h2>
            <div className="order-title">
              <p>Sku</p>
              <p>Name</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            {orders.map((order, key) => (
              <Item order={order} key={key} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
