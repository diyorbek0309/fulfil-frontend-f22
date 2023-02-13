import { useSelector } from "react-redux";

const Inner = () => {
  const { isLight } = useSelector((state) => state.modeReducer);

  const pageStyle = {
    height: 620,
    backgroundColor: isLight ? "aquamarine" : "#013536",
  };

  return <div style={pageStyle}>InnerComponent</div>;
};

export default Inner;
