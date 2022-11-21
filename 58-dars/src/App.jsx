import useFetch from "./useFetch";
// import Todos from "./Todos";

const App = () => {
  // const [todos, setTodos] = useState([]);
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos");

  // const [count, setCount] = useState(0);
  // const calculation = expensiveCalculation(count);
  // const calculation = useMemo(() => expensiveCalculation(count), [count]);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // }, [todos]);

  // useCallback funksiya qaytaradi

  return (
    // <>
    //   <Todos todos={todos} addTodo={addTodo} />
    //   <hr />
    //   <div>
    //     Count: {count}
    //     <button onClick={increment}>+</button>
    //   </div>
    // </>
    <div>
      {/* <div> */}
      <h2>My Todos</h2>
      {todos &&
        todos.map((todo, index) => {
          return <p key={index}>{todo.title}</p>;
        })}
      {/* <button onClick={addTodo}>Add Todo</button> */}
      {/* </div> */}
      {/* <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div> */}
    </div>
  );
};

// const expensiveCalculation = (count) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000; i++) {
//     count += 1;
//   }

//   return count;
// };

export default App;
