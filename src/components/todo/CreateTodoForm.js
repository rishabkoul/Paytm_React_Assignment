import classes from "./CreateTodoForm.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoSlice";
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

const CreateTodoForm = () => {
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
    if (!enteredTitle.match(/^[0-9a-z]+$/)) {
      return alert("Enter alphanumeric Title");
    }
    dispatch(
      addTodo({
        id: new Date().getTime().toString(),
        title: enteredTitle,
        description: enteredDescription,
        duedate: enteredDueDate,
        priority: enteredPriority,
      })
    );

    alert("Task created successfully");
    navigate("/");
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>Create Todo</h1>
        <label>Title</label>
        <input
          maxLength="20"
          required
          type="text"
          placeholder="Title"
          ref={titleRef}
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          rows="4"
          cols="50"
          maxLength="100"
          ref={descriptionRef}
        ></textarea>
        <label>Due Date</label>
        <input
          type="date"
          min={getTodaysDateInString()}
          required
          ref={duedateRef}
        />
        <label>Priority</label>
        <select required ref={priorityRef}>
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
