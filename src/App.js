import React from "react";
import Logo from "./images/ecommerce.png";

function App() {
  return (
    <React.Fragment>
      <div className="title">
        <img className="logo" src={Logo} alt="logo" />
        <h1 className="title-text">Products Ecommerce</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="one-half column">Form:</div>
          <div className="one-half column">Tabla:</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
