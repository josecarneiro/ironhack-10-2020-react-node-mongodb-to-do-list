const TaskItem = props => {
  return (
    <li>
      {props.task.title}
      <button onClick={props.onRemoveTask}>✔️</button>
    </li>
  );
};

export default TaskItem;
