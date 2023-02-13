const Calculator = () => {
  const symbols = () => {};
  const showNumber = () => {};
  const calculate = () => {};
  const clear = () => {};
  const backSpace = () => {};

  const btns = [
    {
      id: "clear",
      text: "Clear",
      className: "button-ac for-hover",
      disabled: false,
      onClick: clear,
    },
    {
      id: "bs",
      text: "BS",
      className: "button-ac for-hover",
      disabled: false,
      onClick: backSpace,
    },
    {
      text: "/",
      className: "symbol",
      disabled: true,
      onClick: () => symbols("/"),
    },
    {
      text: "x",
      className: "symbol",
      disabled: true,
      onClick: () => symbols("*"),
    },
    {
      text: "7",
      className: "for-hover",
      disabled: false,
      onClick: () => showNumber("7"),
    },
    {
      text: "8",
      className: "for-hover",
      disabled: false,
      onClick: () => showNumber("8"),
    },
    {
      text: "9",
      className: "for-hover",
      disabled: false,
      onClick: () => showNumber("9"),
    },
    {
      text: "-",
      className: "symbol",
      disabled: true,
      onClick: () => symbols("-"),
    },
    {
      text: "4",
      className: "for-hover",
      disabled: false,
      onClick: () => showNumber("4"),
    },
    {
      text: "5",
      className: "for-hover",
      disabled: false,
      onClick: () => showNumber("5"),
    },
    {
      text: "6",
      className: "for-hover",
      disabled: false,
      onClick: () => showNumber("6"),
    },
    {
      text: "+",
      className: "symbol",
      disabled: true,
      onClick: () => symbols("+"),
    },
    {
      text: "1",
      className: "for-hover",
      disabled: false,
      onClick: () => showNumber("1"),
    },
    {
      text: "2",
      className: "for-hover",
      disabled: false,
      onClick: () => showNumber("2"),
    },
    {
      text: "3",
      className: "for-hover",
      disabled: false,
      onClick: () => showNumber("3"),
    },
    {
      text: "=",
      className: "button-ra",
      disabled: false,
      onClick: calculate,
    },
    {
      text: "0",
      className: "button-zero for-hover",
      disabled: false,
      onClick: () => showNumber("0"),
    },
    {
      text: ".",
      className: "symbol",
      disabled: true,
      onClick: () => symbols("."),
    },
  ];

  return (
    <div className="container">
      <input type="text" className="item top" placeholder="0" />
      {btns.map((btn, index) => (
        <button
          key={index}
          className={"item " + btn.className}
          disabled={btn.disabled}
          onClick={btn.onClick}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
