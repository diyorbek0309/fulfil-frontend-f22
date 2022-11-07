// import { Component } from "react";
import "./App.css";
// import Button from "./Button";
import Input from "./Input";
import Home from "./Home";

function App() {
  // const logger = () => {
  //   alert("Logger");
  // };

  const clickHandler = (name) => {
    console.log(name);
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Input clickHandler={clickHandler} />
      {/* <Button text="Click" logger={logger} /> */}
      {/* props = {text: "Click", logger: f logger() } */}
      {/* <Button text="Call" logger={logger} /> */}
      {/* <Button>Click</Button>
      <Button>Call</Button> */}
      <Home text1="Click me" text2="Call" />
    </div>
  );
}

// class App extends Component {
//   constructor() {}

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!</h1>
//       </div>
//     );
//   }
// }

export default App;

// Component - funksiya
// 2 turi bor: class based va functional
// React data flow - ma'lumotlar oqimi
// devDependency
