import {useState} from 'react';
export const TaskList = (props) => {
    const [tasks, setTasks] = useState([
        {id: 3341, name: "Record Lectures", completed: false}, 
        {id: 1456, name: "Watch Lectures", completed: true}, 
        {id: 6781, name: "Live Lectures", completed: true}]);

    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
  return (
    <>
        <ul className="rowList">
            <h1>Task List {props.title} {props.subtitle}</h1>
            <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
            {show && tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : "incomplete"}>
                <span>{task.id} - {task.name}</span>
                <button onClick={() => handleDelete(task.id)} className='btnDel'>Delete</button>
            </li>
            ))}
            
        </ul>
    </>
  )
}
