import React from "react";

const Products = () => {
  return (
    <div className="products">
      <div className="card">
        <a href="/">
          <img
            src="https://image.shutterstock.com/image-photo/kristianstad-sweden-4th-may-2019-600w-1439281484.jpg"
            alt=""
          />
        </a>
        <div className="box">
          <h3 title="Watch Product 01">
            <a href="/">Watch Product 01</a>
          </h3>
          <p>Description</p>
          <h4>$100</h4>
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="card">
        <a href="/">
          <img
            src="https://image.shutterstock.com/image-photo/kristianstad-sweden-4th-may-2019-600w-1439281484.jpg"
            alt=""
          />
        </a>
        <div className="box">
          <h3 title="Watch Product 01">
            <a href="/">Watch Product 01</a>
          </h3>
          <p>Description</p>
          <h4>$100</h4>
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="card">
        <a href="/">
          <img
            src="https://image.shutterstock.com/image-photo/kristianstad-sweden-4th-may-2019-600w-1439281484.jpg"
            alt=""
          />
        </a>
        <div className="box">
          <h3 title="Watch Product 01">
            <a href="/">Watch Product 01 Watch Product 01</a>
          </h3>
          <p>Description</p>
          <h4>$100</h4>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
