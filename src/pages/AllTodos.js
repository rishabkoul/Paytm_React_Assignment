import TodoList from "../components/todo/TodoList";
import classes from "./AllTodos.module.css";
const AllTodos = () => {
  return (
    <div className={classes.container}>
      <h1>List of Todos</h1>
      <TodoList />
    </div>
  );
};

export default AllTodos;
