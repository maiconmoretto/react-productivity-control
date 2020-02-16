  
  import React from "react";
// import './task.css';

const task = (props) => {
  return <p onClick={props.click}> due date: {props.dueDate}, number :{props.task} </p>;
//   return (
//     <div className="Task">
//       <p onClick={props.click}> i am {props.name}, and have {props.age} age</p>
//       <input type="text" onChange={props.changed} value={props.name}/>
//       <p>
//         Task number: <input type="number" name="taskNumber" />
//       </p>

//       <p>
//         Due Date: <input type="date" name="date" />
//       </p>

//       <p>
//         Date Finished: <input type="date" name="dateFinished" />
//       </p>
//     </div>
//     )
};

export default task;
