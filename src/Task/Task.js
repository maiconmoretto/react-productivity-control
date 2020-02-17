import React from "react";
import "./task.css";

const task = props => {
  // return <p onClick={props.click}> due date: {props.dueDate}, number: {props.number} </p>;
  return (
    <div className="Task">
      <p>
        Task number: <input type="number" name="taskNumber" value={props.number} />
        <span></span> Due Date: <input type="string" name="date" value={props.dueDate} />
      </p>
    </div>
  );
};

export default task;
