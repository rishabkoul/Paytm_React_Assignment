import classes from "./CreateTodoForm.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../features/todoSlice";
import { useNavigate } from "react-router-dom";

const getTodaysDateInString = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  return today;
};

const CreateTodoForm = ({ todo, formTitle, disabled }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const duedateRef = useRef();
  const priorityRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = duedateRef.current.value;
    const enteredPriority = priorityRef.current.value;
    if (!enteredTitle.match(/^[0-9a-zA-Z\s]+$/)) {
      return alert("Enter alphanumeric Title");
    }
    if (todo) {
      dispatch(
        editTodo({
          id: todo.id,
          title: enteredTitle,
          description: enteredDescription,
          duedate: enteredDueDate,
          priority: enteredPriority,
          checked: todo.checked,
        })
      );
      alert("Task edited successfully");
    } else {
      dispatch(
        addTodo({
          id: new Date().getTime().toString(),
          title: enteredTitle,
          description: enteredDescription,
          duedate: enteredDueDate,
          priority: enteredPriority,
          checked: false,
        })
      );

      alert("Task created successfully");
    }

    navigate("/");
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        {formTitle ? <h1>{formTitle}</h1> : <h1>Create Todo</h1>}
        <label>Title</label>
        <input
          maxLength="20"
          required
          type="text"
          placeholder="Title"
          ref={titleRef}
          defaultValue={todo ? todo.title : ""}
          disabled={disabled}
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          rows="4"
          cols="50"
          maxLength="100"
          ref={descriptionRef}
          defaultValue={todo ? todo.description : ""}
        ></textarea>
        <label>Due Date</label>
        <input
          type="date"
          min={getTodaysDateInString()}
          required
          ref={duedateRef}
          defaultValue={todo ? todo.duedate : getTodaysDateInString()}
        />
        <label>Priority</label>
        <select
          required
          ref={priorityRef}
          defaultValue={todo ? todo.priority : "Medium"}
          disabled={disabled}
        >
          <option>Medium</option>
          <option>High</option>
          <option>Low</option>
        </select>
        <button type="submit" className={classes.submit_btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTodoForm;
