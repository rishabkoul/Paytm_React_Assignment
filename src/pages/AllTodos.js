import TodoList from "../components/todo/TodoList";
import classes from "./AllTodos.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, deleteChecked } from "../features/todoSlice";
const AllTodos = () => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const deleteCheckedHandler = () => {
    dispatch(deleteChecked());
  };
  return (
    <div className={classes.container}>
      <h1>List of Todos</h1>
      {todos.length !== 0 ? (
        <button onClick={deleteCheckedHandler}>Delete Checked</button>
      ) : null}
      {todos.length !== 0 ? <TodoList /> : <h3>Add todos to see them</h3>}
    </div>
  );
};

export default AllTodos;
