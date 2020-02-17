import React from "react";
import "./task.css";

const task = props => {
  return (
    <div className="Task">
      <p onClick={props.click}> i am {props.number}, and date {props.dueDate}</p>
      <p>
        Task number: <input type="number" name="taskNumber" onChange={props.changed} value={props.number} />
        <span></span> 
        Due Date: <input type="string" name="date"/>
      </p>
    </div>
  );
};

export default task;
