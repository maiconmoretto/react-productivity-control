import React, { useState } from "react";
import TaskTable from "./Task/TaskTable";

const App = () => {
  const tasksData = [
    { id: 1, dueDate: "01/01/01", number: 123 },
    { id: 2, dueDate: "02/02/02", number: 234 },
    { id: 3, dueDate: "03/03/03", number: 345 }
  ];

  const [tasks, setTasks] = useState(tasksData);

  return (
    <div className="App">
      <h1>List of tasks:</h1>

      <div className="flex-large">
        <h2>View Tasks</h2>
        <TaskTable tasks={tasks}/>
      </div>
    </div>
  );
};

export default App;
