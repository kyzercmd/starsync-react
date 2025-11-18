import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("TaskList")) || []
  );

  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("TaskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask
          task={task}
          setTask={setTask}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <ShowTask
          task={task}
          setTask={setTask}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </div>
    </div>
  );
}

export default App;
