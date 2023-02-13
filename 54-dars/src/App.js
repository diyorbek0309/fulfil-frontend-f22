import { Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* <Route path="name/1" element={<Azizbek />} />
        <Route path="name/2" element={<Diyorbek />} /> */}
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
