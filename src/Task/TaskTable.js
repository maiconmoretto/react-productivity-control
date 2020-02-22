import React from "react";
import './TaskTable.css';

const TaskTable = props => (
  <table className="taskTable">
    <thead>
      <tr>
        <th>Number</th>
        <th>Due date</th>
        <th>Finished date</th>
        <th>Diff in Days</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.tasks ? (
        props.tasks.map(task => (
          <tr key={task.id}>
            <td>{task.number}</td>
            <td>{task.dueDate}</td>
            <td>{task.finishedDate}</td>
            <td>{task.diffDays}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(task);
                }}
                className="edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteTask(task.id)}
                className="delete-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No tasks</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TaskTable;
