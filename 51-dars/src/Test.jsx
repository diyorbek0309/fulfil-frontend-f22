// import React, { Component } from "react";

// export class Test extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Diyorbek",
//     };
//   }

//   clickHandler = () => {
//     this.setState({ name: "Azizbek" });
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.state.name}</h1>
//         <button onClick={this.clickHandler}>Change</button>
//       </>
//     );
//   }
// }

// export default Test;

// State o'zgarsa component rerender bo'ladi.

import { useState, useEffect } from "react";

const Test = () => {
  //   const [firstName, setFirstName] = useState("Diyorbek");
  //   const [lastName, setLastName] = useState("Olimov");
  const [value, setValue] = useState("");
  const [name, setName] = useState({
    firstName: "Diyorbek",
    lastName: "Olimov",
  });

  useEffect(() => {
    console.log(name);
    return () => {
      console.log("bir nima");
      // cleanup function
    };
  }, [name]);

  // DA berilmasa, oddiy funksiya kabi ishlaydi
  // DA berilsayu, ichi bo'sh bo'lsa, faqat 1-renderda ishlidi
  // DA berilsa va unga biror o'zgaruvchi qachongi o'sha o'zgaruvchi o'zgargan paytda ishlidi

  const log = () => {
    console.log("log");
  };
  log();

  const clickHandler = () => {
    setName({ firstName: "Azizbek", lastName: "Azimov" });
  };

  const changeValue = (event) => {
    setValue(event.target.value);
    console.log(value);
    // console.log(event.target.value);
  };

  return (
    <>
      <h1>
        {name.firstName} {name.lastName}
      </h1>
      <button onClick={clickHandler}>Change</button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(event) => changeValue(event)}
      />
    </>
  );
};

export default Test;
