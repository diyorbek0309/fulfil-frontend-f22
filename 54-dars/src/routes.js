import Home from "./Home";
import Name from "./Name";
import Counter from "./Counter";
import Calculator from "./Calculator";
import Posts from "./Posts";

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
    path: "calculator",
    element: <Calculator />,
  },
  {
    path: "name/:id",
    element: <Name />,
  },
  {
    path: "posts",
    element: <Posts />,
  },
];
