import Card from "../ui/Card";
import classes from "./TodoItem.module.css";
import { deleteTodo } from "../../features/todoSlice";
import { useDispatch } from "react-redux";

const ComputePastPresentFurture = (duedate) => {
  let today = new Date().setHours(0, 0, 0, 0);
  let duedateInDate = new Date(duedate).setHours(0, 0, 0, 0);
  if (today < duedateInDate) {
    return "white";
  } else if (today > duedateInDate) {
    return "red";
  } else {
    return "yellow";
  }
};

const TodoItem = ({ id, title, description, duedate, priority }) => {
  const dispatch = useDispatch();
  const DeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className={classes.todo_container}>
      <Card className={ComputePastPresentFurture(duedate)}>
        <div className={classes.todo}>
          <h3>Title - {title}</h3>
          {description && <p>Description - {description}</p>}
          <p>Due Date - {duedate}</p>
          <p>Priority - {priority}</p>
          <div
            className={
              ComputePastPresentFurture(duedate) !== "white"
                ? classes.actions
                : classes.action_white
            }
          >
            <button onClick={DeleteTodo}>Delete</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
