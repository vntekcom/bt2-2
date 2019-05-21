import React from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container">
      <h1 className="display-4 text-center">Mua Hàng Online</h1>

      <Products />

      <Cart />
    </div>
  );
}

export default App;
