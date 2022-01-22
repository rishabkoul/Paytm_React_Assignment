import { useSelector } from "react-redux";
import { getTodos } from "../../features/todoSlice";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector(getTodos);
  return (
    <ul className={classes.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          duedate={todo.duedate}
          priority={todo.priority}
        />
      ))}
    </ul>
  );
};
export default TodoList;
