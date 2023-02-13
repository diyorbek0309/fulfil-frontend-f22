import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLight, setIsLight] = useState(true);

  const pageStyle = {
    height: 620,
    backgroundColor: isLight ? "aquamarine" : "#013536",
  };

  return (
    <div style={pageStyle}>
      <button onClick={() => setIsLight(!isLight)}>Change mode</button>
      <br />
      <br />
      <Link to="/inner">Inner</Link>
    </div>
  );
};

export default Home;
