import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";

const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useContext(DataContext);
  const details = products.filter((product, index) => {
    return product._id === id;
  });
  console.log(details);
  return (
    <>
      {details.map((product) => (
        <div className="details" key={product._id}>
          <div
            className="img-container"
            style={{
              backgroundImage: `url(${"https://wallpapercave.com/wp/wp2168267.jpg"})`,
            }}
          />
          <div className="box-details">
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price}</h3>
            <div className="colors">
              {product.colors.map((color, index) => {
                return (
                  <button style={{ background: color }} key={color}>
                    {}
                  </button>
                );
              })}
            </div>
            <div className="sizes">
              {product.sizes.map((size, index) => {
                return <button key={size}>{size}</button>;
              })}
            </div>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <div className="thumb">
              {product.images.map((img, index) => {
                return (
                  <img
                    src={`https://wallpapercave.com/wp/wp2168267.jpg`}
                    alt=""
                    key={index}
                  />
                );
              })}
            </div>
            <button className="cart">Add To Cart</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
