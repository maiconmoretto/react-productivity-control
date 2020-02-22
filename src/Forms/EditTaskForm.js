import React, { useState, useEffect } from 'react'
import './EditTask.css'

const EditTaskForm = props => {
  const [task, setTask] = useState(props.currentTask)

  const handleInputChange = event => {
    const { name, value } = event.target

    setTask({ ...task, [name]: value })
  }
  useEffect(() => {
    setTask(props.currentTask)
  }, [props])

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateTask(task.id, task)
      }}
    >
      <label>Number</label>
      <br></br>
      <input type="text" name="number" value={task.number} onChange={handleInputChange} />
      <br></br>
      <label>Due date</label>
      <br></br>
      <input type="text" name="dueDate" value={task.dueDate} onChange={handleInputChange} />
      <br></br>
      <label>Finished date</label>
      <br></br>
      <input type="text" name="finishedDate" value={task.finishedDate} onChange={handleInputChange} />
      <br></br>
      <label>Diff in Days</label>
      <br></br>
      <input type="text" name="diffDays" value={task.diifDays} onChange={handleInputChange} />
      <br></br>
      <input type="submit" value="Save" />
      <br></br>
      <button onClick={() => props.setEditing(false)} className="cancel-button" >Cancel</button>
    </form>
  )
}

export default EditTaskForm