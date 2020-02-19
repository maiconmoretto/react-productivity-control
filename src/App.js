import React, { useState } from "react";
import TaskTable from "./Task/TaskTable";
import AddTaskForm from "./Forms/AddTaskForm";
import EditTaskForm from "./Forms/EditTaskForm";

const App = () => {
  const tasksData = [
    { id: 1, dueDate: "01-01-01", number: 123, finishedDate: "01-02-01", diffDays: 0 },
    { id: 2, dueDate: "02-02-02", number: 234, finishedDate: "02-03-02", diffDays: 0 },
    { id: 3, dueDate: "03-03-03", number: 345, finishedDate: "03-04-01", diffDays: 0 }
  ];

  const [tasks, setTasks] = useState(tasksData);

  const addTask = task => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };
  const initialFormState = { id: null, nnumber: "", dueDate: "", finishedDate: "", diffDays: 0 };
  const [currentTask, setCurrentTask] = useState(initialFormState);

  const [editing, setEditing] = useState(false);
  const editRow = task => {
    setEditing(true);


    setCurrentTask({ id: task.id, number: task.number, dueDate: task.dueDate, finishedDate: task.finishedDate });
  };
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const updateTask = (id, updatedTask) => {
    setEditing(false);

      setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
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
