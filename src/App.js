import { useState } from "react";
import {Header} from "./components/Header";
import {TaskList} from "./components/TaskList";
import {Footer} from "./components/Footer";
import { AddTask } from "./components/AddTask";

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {id: 3341, name: "Record Lectures", completed: false}, 
    {id: 1456, name: "Watch Lectures", completed: true}, 
    {id: 6781, name: "Live Lectures", completed: true}]);

  return (
    <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  )
}
 

export default App;