import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Colors from "./Colors";
import { DataContext } from "./DataProvider";
import DetailsThumb from "./DetailsThumb";
import Sizes from "./Sizes";

const Details = () => {
  const { id } = useParams();
  const [products] = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product._id}>
          <div
            className="img-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = `center`)
            }
            style={{
              backgroundImage: `url(${product.images[index]})`,
            }}
            ref={imgDiv}
          />
          <div className="box-details">
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price}</h3>
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <p>{product.description}</p>
            <p>{product.content}</p>
            <DetailsThumb images={product.images} setIndex={setIndex} />
            <button className="cart">Add To Cart</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
