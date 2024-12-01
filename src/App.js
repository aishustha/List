import {Header} from "./components/Header";
import {TaskList} from "./components/TaskList";
import {Footer} from "./components/Footer";
import { AddTask } from "./components/AddTask";

import './App.css';

function App() {
  const info = "Random";
  return (
    <div className="App">
      <Header />
      <AddTask />
      <TaskList xyz={info} title="Random" subtitle="test" />
      
      <Footer />
    </div>
  )
}
 

export default App;