import classes from "./styles/Home.module.css";

const Button = (props) => {
  // props.logger();
  // console.log(props);
  // const btnStyle = {
  //   color: "#fff",
  //   backgroundColor: "#f00",
  // };

  console.log(classes);

  return (
    // <button style={{ color: "#fff", backgroundColor: "#f00" }}>
    //   {props.children}
    // </button>
    // <button style={btnStyle}>{props.children}</button>
    <button
      style={{ backgroundColor: props.bgColor }}
      className={`${classes.btnStyle} ${classes.borderless}`}
    >
      {props.children}
    </button>
  );
};

const Input = () => {
  return <input type="text" className={classes.input} />;
};

export { Button, Input };
// export default Button;

// Exportlarni turlari: default, named (nomli)
// props drilling (callback hell)
