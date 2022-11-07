import { Button } from "./Button";

const Home = ({ text1, text2 }) => {
  const btns = [
    { id: 1, bgColor: "red", text: text1 },
    { id: 2, bgColor: "green", text: text2 },
    { id: 3, bgColor: "yellow", text: text1 },
    { id: 4, bgColor: "blue", text: text2 },
    { id: 5, bgColor: "orange", text: text1 },
    { id: 6, bgColor: "brown", text: text2 },
  ];

  const showResult = (id) => {
    console.log(id);
  };

  return (
    <div>
      {btns.map((btn) => (
        <Button
          bgColor={btn.bgColor}
          key={btn.id}
          clickHandler={showResult}
          id={btn.id}
        >
          {btn.text}
        </Button>
      ))}
    </div>
  );
};

export default Home;
