const TodoItem = ({ title, description, duedate, priority }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{duedate}</p>
      <p>{priority}</p>
    </li>
  );
};

export default TodoItem;
