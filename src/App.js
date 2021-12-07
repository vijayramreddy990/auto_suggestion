import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./components/DataProvider";
import Details from "./components/Details";

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <selection>
            <Routes>
              <Route path="/products" exact element={<Products />} />
              <Route path="/products/:id" exact element={<Details />} />
            </Routes>
          </selection>
        </Router>
      </div>
    </DataProvider>
  );
};

export default App;
