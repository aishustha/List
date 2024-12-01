import "./TaskCard.css";
export const TaskCard = ({task, handleDelete, abc}) => {
  return (
    <li key={task.id} className={`${task.completed ? "completed" : "incomplete"}`}>
        <span>{task.id} - {task.name} - {abc}</span>
        <button onClick={() => handleDelete(task.id)} className='btnDel'>Delete</button>
    </li>
  )
}
