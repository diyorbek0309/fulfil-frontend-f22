import classes from "./styles/Home.module.css";

const Button = ({ bgColor, children, clickHandler, id }) => {
  // props.logger();
  // console.log(props);
  // const btnStyle = {
  //   color: "#fff",
  //   backgroundColor: "#f00",
  // };

  // console.log(classes);

  return (
    // <button style={{ color: "#fff", backgroundColor: "#f00" }}>
    //   {props.children}
    // </button>
    // <button style={btnStyle}>{props.children}</button>
    <button
      style={{ backgroundColor: bgColor }}
      className={`${classes.btnStyle} ${classes.borderless}`}
      onClick={() => clickHandler(id)}
    >
      {children}
    </button>
  );
};

// const Input = () => {
//   return <input type="text" className={classes.input} />;
// };

export { Button };
// export default Button;

// Exportlarni turlari: default, named (nomli)
// props drilling (callback hell)
