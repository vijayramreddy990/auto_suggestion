import React from "react";

const DetailsThumb = ({ images, setIndex }) => {
  return (
    <div className="thumb">
      {images.map((img, index) => {
        return (
          <img src={img} alt="" key={index} onClick={() => setIndex(index)} />
        );
      })}
    </div>
  );
};

export default DetailsThumb;
