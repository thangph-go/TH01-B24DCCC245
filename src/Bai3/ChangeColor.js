import React, {useState} from "react";

function BackGround({color}) {
  return (
    <div
      style={{
        width: 200,
        height: 100,
        border: "2px solid gray",
        backgroundColor: color,
        marginTop: 10,
      }}
    ></div>
  );
}

function ChangeColor() {
  const [selectedColor, setColor] = useState("white");
  const colors = ["red", "green", "blue", "yellow"];

  return (
    <div>
      {colors.map((color, index) => (
        <button
          key={index}
          onClick={() => setColor(color)}
          style={{margin: 3}}>
          {color}
        </button>
      ))}
      <BackGround color={selectedColor} />
    </div>
  );
}

export default ChangeColor;