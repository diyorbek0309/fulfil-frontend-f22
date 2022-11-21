import { lazy, Suspense } from "react";
import "./App.css";
const ErrorBoundary = lazy(() => import("./ErrorBoundary")); // lazy component
const Posts = lazy(() => import("./Posts"));
const Navbar = lazy(() => import("./Navbar"));
const Todos = lazy(() => import("./Todos"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        {/* <Posts /> */}
        <br />
        <Todos />
        <ErrorBoundary />
      </Suspense>
    </div>
  );
}

export default App;
