import React from "react";

const TaskTable = props => (
  <table>
    <thead>
      <tr>
        <th>Number</th>
        <th>Due date</th>
        <th>Finished date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.tasks.length > 0 ? (
        props.tasks.map(task => (
          <tr key={task.id}>
            <td>{task.number}</td>
            <td>{task.dueDate}</td>
            <td>{task.finishedDate}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(task);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteTask(task.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No tasks</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TaskTable;
