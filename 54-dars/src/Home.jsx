import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/name/azizbek">Azizbek</Link>
        </li>
        <li>
          <Link to="/name/diyorbek">Diyorbek</Link>
        </li>
        <li>
          <Link to="/name/botirjon">Botirjon</Link>
        </li>
      </ul>
      <Link to="/counter">Counter</Link>
    </div>
  );
};

export default Home;
