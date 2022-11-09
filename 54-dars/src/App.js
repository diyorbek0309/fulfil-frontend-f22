import { useState } from "react";
import "./App.css";

function App() {
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
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
