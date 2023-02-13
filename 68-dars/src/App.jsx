import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Inner from "./Inner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inner" element={<Inner />} />
    </Routes>
  );
}

export default App;
