import { useReducer } from "react";
import { TodoReducer } from "./reducers/TodoReducer";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
  {
    id: 3,
    title: "Todo 3",
    complete: false,
  },
  {
    id: 4,
    title: "Todo 4",
    complete: false,
  },
];

function Todos() {
  const [todos, dispatch] = useReducer(TodoReducer, initialTodos);

  const handleComplete = (id) => {
    // action'ni dispatch
    dispatch({ type: "COMPLETE", id });
  };

  const handleDelete = (id) => {
    // delete action'ni dispatch qilish
    dispatch({ type: "DELETE", id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo.id)}
            />
            {todo.title}
          </label>
          <button onClick={() => handleDelete(todo.id)}>Del</button>
        </div>
      ))}
    </>
  );
}

export default Todos;
