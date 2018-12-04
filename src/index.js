import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

ReactDOM.render(
  <App 
    products={state.products} 
    names={["Robin, Lily, Barney"]}
    magicNumber={99}
    contact={{
      firstName: "Luke",
      lastName: "Skywalker",
      occupation: "farmer",
      address: "300 MiddleOfNoWhere st Tatooine"
    }}
  />,
  document.getElementById("root")
);
