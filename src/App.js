import React, { Component } from "react";
import "./App.css";
import Task from "./Task/Task";

class App extends Component {
  state = {
    tasks: [
      { id: 1, dueDate: "01/01/01", number: 123 },
      { id: 2, dueDate: "02/02/02", number: 234 },
      { id: 3, dueDate: "03/03/03", number: 345 }
    ],
    otherState: "some other value",
    showTasks: true
  };

  numberChangehandler = (event, id) => {
    const taskIndex = this.state.tasks.findIndex(p => {
      return p.id === id;
    });

    const task = {
      ...this.state.tasks[taskIndex]
    };

    task.number = event.target.value;

    const tasks = [...this.state.tasks];
    tasks[taskIndex] = task;

    this.setState({ tasks: tasks });
  }

  deleteTaskHandler = taskIndex => {
    const tasks = this.state.tasks.slice();
    tasks.splice(taskIndex, 1);
    this.setState({ tasks: tasks });
  };

  render() {
    let tasks = null;

    if (this.state.showTasks) {
      tasks = (
        <div>
          {
            this.state.tasks.map((task, index) => {
              return <Task key={task.id}
              dueDate={task.dueDate} 
              number={task.number} 
              click={() => this.deleteTaskHandler(index)}
              changed={(event)  => this.numberChangehandler(event, task.id)}
              />;
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>List of tasks:</h1>
        {tasks}
      </div>
    );
  }
}

export default App;
