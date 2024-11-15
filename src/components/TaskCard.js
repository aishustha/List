export const TaskCard = ({task, handleDelete}) => {
  return (
    <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
        <span>{task.id} - {task.name}</span>
        <button onClick={() => handleDelete(task.id)} className='btnDel'>Delete</button>
    </li>
  )
}
