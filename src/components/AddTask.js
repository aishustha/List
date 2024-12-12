import { useState, useRef } from "react";
import "./AddTask.css";

export const AddTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);
    
    // const taskRef = useRef("");

    const handleChange = (event) => {
        setTaskValue(event.target.value);
        // console.log(taskRef.current.value);
    }

    const handleReset = () => {
        setTaskValue ('');
        setProgress(false);

        // taskRef.current.value="";
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000), 
            name: taskValue,
            // name: taskRef.current.value,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task]);
        handleReset();
    }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit} className="formInputSelectBtn">
        {/* value={taskValue} ref={taskRef} */}
            <input onChange={handleChange} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" value={taskValue} />
            <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                <option value="false">Pending</option>
                <option value="true">Completed</option>
            </select>
            <button type="submit" className="submitBtn">Add Task</button>
            <span onClick={handleReset} className="reset">Reset</span>
        </form>
        <p>{taskValue}</p>
        {/* <p>{taskRef.current.value}</p> */}
    </section>
  )
}
