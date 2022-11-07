import { useRef } from "react";
import classes from "./styles/Home.module.css";

const Input = ({ clickHandler }) => {
  // ref - reference (ko'rsatkich)
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  //   const clickHandler = (name) => {
  //     // inputRef.current.focus();
  //     // console.log(inputRef.current.className);
  //     // console.log(buttonRef);
  //     console.log(name);
  //   };

  return (
    <>
      <input type="text" className={classes.input} ref={inputRef} />
      <button onClick={() => clickHandler("Diyorbek")} ref={buttonRef}>
        Diyorbek
      </button>
      <button onClick={() => clickHandler("Sherzod")} ref={buttonRef}>
        Sherzod
      </button>
      <button onClick={() => clickHandler("Sardor")} ref={buttonRef}>
        Sardor
      </button>
    </>
  );
};

export default Input;
