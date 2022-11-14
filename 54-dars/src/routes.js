import Home from "./Home";
import Name from "./Name";
import Counter from "./Counter";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "counter",
    element: <Counter />,
  },
  {
    path: "name/:id",
    element: <Name />,
  },
];
