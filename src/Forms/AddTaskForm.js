import React, { useState } from 'react'
import './AddTaskForm.css'

const AddTaskForm = props => {
  const initialFormState = { id: null, number: '', dueDate: '', finishedDate: '', diffDays: 0 }
  const [task, setTask] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setTask({ ...task, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!task.number || !task.dueDate || !task.finishedDate) {
          return
        } 

        props.addTask(task)
        setTask(initialFormState)
      }}
    >
      <label className="label">Number</label>
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
      <input type="text" name="diffDays" value={task.diffDays} onChange={handleInputChange} />
      <br></br>
      <input type="submit" value="Save"/>
    </form>
  )
}

export default AddTaskForm