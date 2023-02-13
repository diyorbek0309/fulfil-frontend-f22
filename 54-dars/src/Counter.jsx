import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const increase = () => {
    if (count === 10) {
      alert("Endi oshirolmaysiz!");
    } else {
      setCount(++count);
    }
  };

  const decrease = () => {
    if (count === -10) {
      alert("Endi kamaytirolmaysiz!");
    } else {
      setCount(--count);
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
};

export default Counter;
