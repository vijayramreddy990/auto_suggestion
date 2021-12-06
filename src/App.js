import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="App">
      <Header />
      <selection>
        <Products />
      </selection>
    </div>
  );
};

export default App;
