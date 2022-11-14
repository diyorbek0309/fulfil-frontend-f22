import { Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
        
        {/* <Route path="name/1" element={<Azizbek />} />
        <Route path="name/2" element={<Diyorbek />} /> */}
      </Routes>
    </div>
  );
}

export default App;
