import { Button } from "./Button";

const Home = (props) => {
  return (
    <div>
      <Button bgColor="#f00">{props.text1}</Button>
      <Button bgColor="green">{props.text2}</Button>
      <Button bgColor="yellow">{props.text1}</Button>
      <Button bgColor="blue">{props.text2}</Button>
    </div>
  );
};

export default Home;
