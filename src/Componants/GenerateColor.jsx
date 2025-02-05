import React, { useState } from "react";

const GenerateColor = () => {
  const [color, setColor] = useState("pink");
  const generateRandomColor = () => {
    let lettres = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += lettres[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const ChangeColor = () => {
    setColor(generateRandomColor());
  };
  return (
    <div>
      <h1>Changing Color </h1>
      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: color,
          transition: "background-color 0.5s ease",
        }}
      ></div>
      <br />
      <button
        style={{ backgroundColor: "blue", border: "1px solid Black" , cursor:"pointer" }}
        onClick={() => ChangeColor()}
      >
        Change Color
      </button>
    </div>
  );
};

export default GenerateColor;
