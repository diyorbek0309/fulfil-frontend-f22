export const TodoReducer = (state, action) => {
  const { type, id } = action;
  switch (type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "DELETE":
      return state.filter((todo) => todo.id !== id);
    default:
      return state;
  }
};
