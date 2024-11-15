import {useState} from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';


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
            {show && tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
            ))}
        </ul>

        <BoxCard result="success">
        <p className="title">Hello World</p>
        <p className="description">World is beautiful.</p>
        </BoxCard>

        <BoxCard result="warning">
            <p className="title">Hello Nepal</p>
            <p className="description">Nepal is beautiful.</p>
        </BoxCard>
        <BoxCard result="alert">
            <p className="title">Hello Canada</p>
            <p className="description">Canada is beautiful.</p>
        </BoxCard>
    </>
  )
}
