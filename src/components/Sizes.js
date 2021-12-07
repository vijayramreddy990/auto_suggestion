import React from "react";

const Sizes = ({ sizes }) => {
  return (
    <div className="sizes">
      {sizes.map((size, index) => {
        return <button key={size}>{size}</button>;
      })}
    </div>
  );
};

export default Sizes;
