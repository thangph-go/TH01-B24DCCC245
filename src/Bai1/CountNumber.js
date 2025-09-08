import React, {useState} from "react";

function Number({value}) {
  return <h2>Giá trị hiện tại: {value}</h2>;
}

function CountNumber() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Number value={count} />
      <button onClick={subtract}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
}

export default CountNumber;