import React, { useState } from "react";
import TaskTable from "./Task/TaskTable";
import AddTaskForm from "./Forms/AddTaskForm";
import EditTaskForm from "./Forms/EditTaskForm";

const App = () => {
  let tasksData = [];
  
  tasksData = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(tasksData);

  const addTask = task => {
    debugger
    if (tasks) {
      task.id = tasks.length;
      setTasks([...tasks, task]);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      task.id = 1;
      setTasks([task]);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }  
 
  };
  const initialFormState = {
    id: null,
    nnumber: "",
    dueDate: "",
    finishedDate: "",
    diffDays: 0
  };
  const [currentTask, setCurrentTask] = useState(initialFormState);

  const [editing, setEditing] = useState(false);
  const editRow = task => {
    setEditing(true);

    setCurrentTask({
      id: task.id,
      number: task.number,
      dueDate: task.dueDate,
      finishedDate: task.finishedDate
    });
  };
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const updateTask = (id, updatedTask) => {
    setEditing(false);

    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));

    localStorage.setItem("tasks", JSON.stringify([tasks]));
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditTaskForm
                editing={editing}
                setEditing={setEditing}
                currentTask={currentTask}
                updateTask={updateTask}
              />
            </div>
          ) : (
            <div>
              <h2>Add task</h2>
              <AddTaskForm addTask={addTask} />
            </div>
          )}
          <div className="flex-large">
            <h2>View Tasks</h2>
            <TaskTable
              tasks={tasks}
              deleteTask={deleteTask}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
