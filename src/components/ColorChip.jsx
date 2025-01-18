import React from "react";

// ColorChip Component
const ColorChip = ({ color, label }) => {
  return (
    <div
      className="card md:w-48 md:h-48 w-36 h-36 shadow-md text-center flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      {/* Label */}
      
    </div>
  );
};

export default ColorChip;
