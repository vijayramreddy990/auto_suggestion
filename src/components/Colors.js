import React from "react";

const Colors = ({ colors }) => {
  return (
    <div className="colors">
      {colors.map((color, index) => {
        return (
          <button style={{ background: color }} key={color}>
            {}
          </button>
        );
      })}
    </div>
  );
};

export default Colors;
