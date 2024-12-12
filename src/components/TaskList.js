import {useState} from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import styles from "./TaskList.module.css";
import "./TaskList.css";


export const TaskList = ({tasks, setTasks}) => {
   
    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
  return (
    <section className="taskList">
        <ul className="rowList">
            <h1 className={styles.title}>Task List</h1>
            <button className="trigger" onClick={() => setShow(!show)}>{show ? "Hide" : "Show" }</button>
            {show && tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
            ))}
        </ul>

        <BoxCard result="success">
        <p className="title">Hello World</p>
        <p className="description">World is beautiful.</p>
        </BoxCard>
    </section>
  )
}
