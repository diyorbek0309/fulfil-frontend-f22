import { useNavigate } from "react-router-dom";

const Name = () => {
  const firstName = window.location.pathname.split("/")[2].toUpperCase();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (firstName === "AZIZBEK") {
  //     navigate("/counter");
  //   }
  // }, []);

  return (
    <>
      <h1>{firstName}</h1>
      <button onClick={() => navigate(-1)}>Bosh sahifa</button>
      {/* <Link to="/">Bosh sahifa</Link> */}
    </>
  );
};

export default Name;
